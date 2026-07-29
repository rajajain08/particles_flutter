import 'dart:math';
import 'dart:ui' as ui;
import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';
import 'package:particles_flutter/engine.dart';

const double _kRepelRadius = 90.0;

/// Demonstrates [ParticleShapeSampler]: samples pixel positions from
/// rendered text and uses them as each particle's home position, so the
/// swarm assembles into the shape of the word.
///
/// Interactivity: the cursor/touch repels nearby particles away from their
/// home position; a spring pulls each particle back home every frame, so
/// letters scatter as the pointer passes through and reassemble once it
/// moves away. Rendered with a bespoke glowing painter (bloom halos,
/// position-based color gradient, motion streaks, idle shimmer).
class TextDissolveScene extends StatefulWidget {
  final Size size;
  final Color accentColor;
  final String text;

  /// How strongly the pointer pushes particles away from their home
  /// position. Driven by the demo's "Repel" slider.
  final double repelStrength;

  /// How quickly particles spring back to their home position once the
  /// pointer moves away. Driven by the demo's "Reassemble" slider.
  final double springStrength;

  const TextDissolveScene({
    required this.size,
    required this.accentColor,
    this.text = 'FLUTTER',
    this.repelStrength = 4800,
    this.springStrength = 22,
    super.key,
  });

  @override
  State<TextDissolveScene> createState() => _TextDissolveSceneState();
}

/// One particle in the text swarm. Holds its own physics state (position,
/// velocity) plus render attributes (color, base radius, shimmer phase).
class _Dot {
  _Dot({
    required this.home,
    required this.position,
    required this.color,
    required this.baseRadius,
    required this.shimmerPhase,
  });

  final Offset home;
  Offset position;
  Offset velocity = Offset.zero;
  final Color color;
  final double baseRadius;

  /// Per-particle phase offset so idle shimmer isn't synchronized.
  final double shimmerPhase;

  /// Recent speed, smoothed — drives motion-streak length + brightness.
  double speed = 0;
}

class _TextDissolveSceneState extends State<TextDissolveScene>
    with SingleTickerProviderStateMixin {
  static const _damping = 0.80;

  final _rng = Random();
  List<_Dot>? _dots;
  Ticker? _ticker;
  Offset? _pointerPosition;
  Duration _lastTick = Duration.zero;
  double _elapsedSeconds = 0;

  @override
  void initState() {
    super.initState();
    _load();
  }

  /// Vivid cool→warm gradient sampled by horizontal position, so the word
  /// reads as one continuous sweep of color instead of random speckle.
  Color _colorForX(double t) {
    const stops = [
      Color(0xFF22D3EE), // cyan
      Color(0xFF6366F1), // indigo
      Color(0xFFA855F7), // purple
      Color(0xFFEC4899), // pink
      Color(0xFFF59E0B), // amber
    ];
    final scaled = (t.clamp(0.0, 1.0)) * (stops.length - 1);
    final i = scaled.floor().clamp(0, stops.length - 2);
    final frac = scaled - i;
    return Color.lerp(stops[i], stops[i + 1], frac)!;
  }

  Future<void> _load() async {
    final points = await ParticleShapeSampler.fromText(
      widget.text,
      style: const TextStyle(
        fontSize: 96,
        fontWeight: FontWeight.w600,
        color: Colors.white,
      ),
      step: 2,
      maxPoints: 1100,
    );

    // Center the sampled shape in the available canvas.
    final bounds = points.fold<Rect>(
      Rect.fromLTWH(points.first.dx, points.first.dy, 0, 0),
      (r, p) => r.expandToInclude(Rect.fromLTWH(p.dx, p.dy, 0, 0)),
    );
    final dx = (widget.size.width - bounds.width) / 2 - bounds.left;
    final dy = (widget.size.height - bounds.height) / 2 - bounds.top;

    if (!mounted) return;
    final center = Offset(widget.size.width / 2, widget.size.height / 2);
    setState(() {
      _dots = [
        for (final p in points)
          () {
            final home = Offset(p.dx + dx, p.dy + dy);
            // Intro: spawn scattered far off from a random direction around
            // the center, with a strong inward velocity so particles rush in
            // and snap into the word on load.
            final angle = _rng.nextDouble() * pi * 2;
            final dist = widget.size.longestSide *
                (0.7 + _rng.nextDouble() * 0.6);
            final spawn = center + Offset(cos(angle), sin(angle)) * dist;
            final inward = (home - spawn);
            final inwardDir = inward.distance > 0.0001
                ? inward / inward.distance
                : Offset.zero;
            return _Dot(
              home: home,
              position: spawn,
              color: _colorForX(bounds.width <= 0
                  ? 0.5
                  : (p.dx - bounds.left) / bounds.width),
              baseRadius: 1.4 + _rng.nextDouble() * 0.9,
              shimmerPhase: _rng.nextDouble() * pi * 2,
            )..velocity = inwardDir * (2600 + _rng.nextDouble() * 1200);
          }(),
      ];
    });

    _ticker = createTicker(_onTick)..start();
  }

  void _onTick(Duration elapsed) {
    final dots = _dots;
    if (dots == null) return;

    final dt = _lastTick == Duration.zero
        ? 0.0
        : (elapsed - _lastTick).inMicroseconds / Duration.microsecondsPerSecond;
    _lastTick = elapsed;
    if (dt <= 0) return;
    _elapsedSeconds += dt;

    final pointer = _pointerPosition;
    for (final dot in dots) {
      var v = dot.velocity;

      // Idle shimmer: a tiny wandering offset added to the home target so
      // the swarm breathes gently even when untouched.
      final shimmer = Offset(
        sin(_elapsedSeconds * 1.6 + dot.shimmerPhase) * 1.1,
        cos(_elapsedSeconds * 1.9 + dot.shimmerPhase) * 1.1,
      );

      // Spring toward home (+shimmer).
      final toHome = (dot.home + shimmer) - dot.position;
      v += toHome * (widget.springStrength * dt);

      // Repel from pointer within a radius.
      if (pointer != null) {
        final away = dot.position - pointer;
        final distance = away.distance;
        if (distance < _kRepelRadius && distance > 0.0001) {
          final falloff = 1 - (distance / _kRepelRadius);
          v += (away / distance) *
              (widget.repelStrength * falloff * falloff * dt);
        }
      }

      v *= _damping;
      dot.velocity = v;
      dot.position += v * dt;

      // Smooth the speed for streak length / brightness.
      dot.speed += (v.distance - dot.speed) * 0.3;
    }

    setState(() {});
  }

  void _onPointerMove(PointerEvent event) => _pointerPosition = event.localPosition;
  void _onPointerExit([PointerEvent? _]) => _pointerPosition = null;

  @override
  void dispose() {
    _ticker?.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final dots = _dots;
    if (dots == null) {
      return Center(
        child: CircularProgressIndicator(color: widget.accentColor),
      );
    }
    return Listener(
      behavior: HitTestBehavior.opaque,
      onPointerHover: _onPointerMove,
      onPointerMove: _onPointerMove,
      onPointerDown: _onPointerMove,
      onPointerUp: _onPointerExit,
      onPointerCancel: _onPointerExit,
      child: MouseRegion(
        onExit: _onPointerExit,
        child: CustomPaint(
          size: widget.size,
          painter: _GlowPainter(
            dots: dots,
            pointer: _pointerPosition,
            accent: widget.accentColor,
          ),
        ),
      ),
    );
  }
}

class _GlowPainter extends CustomPainter {
  _GlowPainter({
    required this.dots,
    required this.pointer,
    required this.accent,
  });

  final List<_Dot> dots;
  final Offset? pointer;
  final Color accent;

  // Soft glow behind sharp cores — a touch more blur for a dreamier look.
  static const _glowBlur = MaskFilter.blur(BlurStyle.normal, 2.6);

  @override
  void paint(Canvas canvas, Size size) {
    // Ambient background: very subtle radial vignette centered on the text.
    final bgRect = Offset.zero & size;
    final bgPaint = Paint()
      ..shader = ui.Gradient.radial(
        Offset(size.width / 2, size.height * 0.52),
        size.width * 0.5,
        [
          accent.withValues(alpha: 0.06),
          const Color(0x000A0A14),
        ],
        [0.0, 1.0],
      );
    canvas.drawRect(bgRect, bgPaint);

    // Faint pointer aura so the cursor's influence is visible.
    final p = pointer;
    if (p != null) {
      canvas.drawCircle(
        p,
        _kRepelRadius,
        Paint()
          ..shader = ui.Gradient.radial(
            p,
            _kRepelRadius,
            [
              accent.withValues(alpha: 0.08),
              accent.withValues(alpha: 0.0),
            ],
          ),
      );
    }

    // Pass 1: soft additive glow halos, drawn behind (tight radius, low alpha).
    final glowPaint = Paint()
      ..maskFilter = _glowBlur
      ..blendMode = BlendMode.plus;
    for (final dot in dots) {
      final energy = (dot.speed / 260).clamp(0.0, 1.0);
      glowPaint.color = dot.color.withValues(alpha: 0.14 + energy * 0.30);
      canvas.drawCircle(dot.position, dot.baseRadius * 2.3, glowPaint);
    }

    // Pass 2: crisp sharp cores on top (no blur → clean letterforms).
    final corePaint = Paint()..isAntiAlias = true;
    final streakPaint = Paint()
      ..strokeCap = StrokeCap.round
      ..isAntiAlias = true;
    for (final dot in dots) {
      final energy = (dot.speed / 260).clamp(0.0, 1.0);

      // Short crisp motion streak when scattering fast.
      if (dot.speed > 55) {
        final streakLen = (dot.speed * 0.025).clamp(0.0, 10.0);
        final dir = dot.velocity.distance > 0.0001
            ? dot.velocity / dot.velocity.distance
            : Offset.zero;
        final tail = dot.position - dir * streakLen;
        streakPaint
          ..color = dot.color.withValues(alpha: 0.45)
          ..strokeWidth = dot.baseRadius * 1.1;
        canvas.drawLine(tail, dot.position, streakPaint);
      }

      corePaint.color = Color.lerp(dot.color, Colors.white, energy * 0.7)!;
      canvas.drawCircle(dot.position, dot.baseRadius, corePaint);
    }
  }

  @override
  bool shouldRepaint(_GlowPainter oldDelegate) => true;
}

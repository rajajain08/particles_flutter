import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:particles_flutter/engine.dart';
import 'package:particles_flutter/physics.dart';

import '../guide/specimen.dart';
import '../guide/specimen_scaffold.dart';
import '../guide/theme.dart';

/// Specimen 04 — an onboarding screen where the greeting is not typeset but
/// *assembled*: nine hundred grains of ink, each parked on a pixel of the
/// word "welcome". Drag through them and they scatter, then spring home.
final Specimen wordsSpecimen = Specimen(
  number: 4,
  title: 'Words from dust',
  subtitle: 'nine hundred grains spell welcome',
  apiLabel: 'n=900 · ParticleShapeSampler · Attractor',
  builder: (_) => const WordsScene(),
);

const _word = 'welcome';
const _pointCount = 900;

/// Pointer radius of influence, and how hard it shoves the dust away.
const _repelRadius = 100.0;
const _repelStrength = -3600.0;

/// Per-frame spring pulling each grain back to its home pixel, plus the
/// velocity damping that keeps the return from overshooting forever.
const _springStrength = 26.0;
const _damping = 0.82;

/// Parked far offscreen so the repulsor is inert until a pointer arrives.
const _noPointer = Offset(-100000, -100000);

class WordsScene extends StatelessWidget {
  const WordsScene({super.key});

  @override
  Widget build(BuildContext context) {
    return SpecimenScaffold(
      specimen: wordsSpecimen,
      background: GuideTheme.paper,
      child: Column(
        children: [
          const Expanded(child: _DustField()),
          Padding(
            padding: const EdgeInsets.fromLTRB(24, 0, 24, 24),
            child: SizedBox(
              width: double.infinity,
              child: Material(
                color: GuideTheme.ink,
                borderRadius: BorderRadius.circular(12),
                child: InkWell(
                  onTap: () {},
                  borderRadius: BorderRadius.circular(12),
                  child: SizedBox(
                    height: 56,
                    child: Center(
                      child: Text(
                        'Begin',
                        style: GuideTheme.serif(
                          size: 17,
                          weight: FontWeight.w500,
                          color: GuideTheme.paper,
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

/// The sampled word: where each grain lives, and the box the word occupies
/// (so the caption can sit just beneath it).
class _WordDust {
  const _WordDust(this.points, this.wordRect);

  final List<Offset> points;
  final Rect wordRect;
}

/// Samples the word once per layout size, then hands the points to the engine.
///
/// Sampling is async (the text is rasterized offscreen), so the tree is
/// LayoutBuilder → FutureBuilder → KeyedSubtree(size) → engine: a new size
/// produces a new future *and* a new key, which is what re-initializes
/// [Particles] (it captures its particle list once, at init).
class _DustField extends StatefulWidget {
  const _DustField();

  @override
  State<_DustField> createState() => _DustFieldState();
}

class _DustFieldState extends State<_DustField> {
  Size? _sampledSize;
  Future<_WordDust>? _dust;

  /// Memoizes the sample per size so FutureBuilder isn't handed a fresh
  /// future (and a fresh rasterization) on every rebuild.
  Future<_WordDust> _dustFor(Size size) {
    if (_dust == null || _sampledSize != size) {
      _sampledSize = size;
      _dust = _sample(size);
    }
    return _dust!;
  }

  Future<_WordDust> _sample(Size size) async {
    // Fit the word to the scene width, using 88 as the intended size.
    const maxFontSize = 88.0;
    const sideMargin = 48.0;
    var style = GoogleFonts.newsreader(
      fontSize: maxFontSize,
      fontWeight: FontWeight.w600,
      color: GuideTheme.ink,
    );
    var textSize = _measure(style);
    final available = size.width - sideMargin;
    if (textSize.width > available && textSize.width > 0) {
      style = style.copyWith(
        fontSize: maxFontSize * (available / textSize.width),
      );
      textSize = _measure(style);
    }

    // The sampler rasterizes the text at the origin, so we hand it the offset
    // that centers the block — slightly above the middle, leaving room for the
    // caption underneath.
    final origin = Offset(
      (size.width - textSize.width) / 2,
      (size.height - textSize.height) / 2 - size.height * 0.08,
    );

    final points = await ParticleShapeSampler.fromText(
      _word,
      style: style,
      step: 3,
      maxPoints: _pointCount,
      offset: origin,
    );

    return _WordDust(points, origin & textSize);
  }

  Size _measure(TextStyle style) {
    final painter = TextPainter(
      text: TextSpan(text: _word, style: style),
      textDirection: TextDirection.ltr,
    )..layout();
    return painter.size;
  }

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        final size = Size(constraints.maxWidth, constraints.maxHeight);
        if (!size.isFinite || size.isEmpty) return const SizedBox.shrink();

        return FutureBuilder<_WordDust>(
          future: _dustFor(size),
          builder: (context, snapshot) {
            final dust = snapshot.data;
            if (dust == null || dust.points.isEmpty) {
              return const SizedBox.expand();
            }
            return Stack(
              children: [
                KeyedSubtree(
                  key: ValueKey(size),
                  child: _InkDust(size: size, homes: dust.points),
                ),
                Positioned(
                  left: 32,
                  right: 32,
                  top: dust.wordRect.bottom + 26,
                  child: IgnorePointer(
                    child: Text(
                      'Nine hundred grains of ink, each finding its own '
                      'letter.\nDrag to scatter them — they always come home.',
                      textAlign: TextAlign.center,
                      style: GuideTheme.serif(
                        size: 15,
                        color: GuideTheme.mutedInk,
                        height: 1.55,
                        style: FontStyle.italic,
                      ),
                    ),
                  ),
                ),
              ],
            );
          },
        );
      },
    );
  }
}

/// The live swarm.
///
/// Two forces run on it. The pointer is a negative [Attractor] handed to the
/// engine's [ParticlePhysics], so repulsion is the package's own physics pass.
/// The return trip is per-particle and so lives in this widget's ticker: each
/// frame we push every grain's velocity back toward its home pixel and damp
/// it, which the engine then integrates into a position.
class _InkDust extends StatefulWidget {
  const _InkDust({required this.size, required this.homes});

  final Size size;
  final List<Offset> homes;

  @override
  State<_InkDust> createState() => _InkDustState();
}

class _InkDustState extends State<_InkDust>
    with SingleTickerProviderStateMixin {
  late final List<Particle> _particles;
  late final List<double> _shimmerPhases;
  late final ParticlePhysics _physics;

  Ticker? _ticker;
  Offset _pointer = _noPointer;
  Duration _lastTick = Duration.zero;
  double _elapsedSeconds = 0;

  @override
  void initState() {
    super.initState();
    final rng = Random();

    _particles = [
      for (final point in widget.homes)
        CircularParticle(
          radius: 1.3,
          color: GuideTheme.ink,
          velocity: Offset.zero,
          startPosition: point,
        ),
    ];
    _shimmerPhases = [
      for (var i = 0; i < widget.homes.length; i++) rng.nextDouble() * pi * 2,
    ];

    _physics = ParticlePhysics(
      gravityScale: 0,
      maxSpeed: 900,
      attractors: [
        Attractor(
          position: () => _pointer,
          strength: _repelStrength,
          radius: _repelRadius,
        ),
      ],
    );

    _ticker = createTicker(_onTick)..start();
  }

  void _onTick(Duration elapsed) {
    final dt = _lastTick == Duration.zero
        ? 0.0
        : (elapsed - _lastTick).inMicroseconds / Duration.microsecondsPerSecond;
    _lastTick = elapsed;
    if (dt <= 0) return;
    _elapsedSeconds += dt;

    for (var i = 0; i < _particles.length; i++) {
      final particle = _particles[i];
      final phase = _shimmerPhases[i];

      // A sub-pixel wander on the home target, so settled ink still breathes.
      final target = widget.homes[i] +
          Offset(
            sin(_elapsedSeconds * 1.4 + phase) * 0.7,
            cos(_elapsedSeconds * 1.7 + phase) * 0.7,
          );

      var velocity = particle.currentVelocity;
      velocity += (target - particle.position) * (_springStrength * dt);
      velocity *= _damping;
      particle.updateVelocity = velocity;
    }
  }

  void _trackPointer(PointerEvent event) => _pointer = event.localPosition;
  void _releasePointer([PointerEvent? _]) => _pointer = _noPointer;

  @override
  void dispose() {
    _ticker?.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Listener(
      behavior: HitTestBehavior.opaque,
      onPointerDown: _trackPointer,
      onPointerMove: _trackPointer,
      onPointerHover: _trackPointer,
      onPointerUp: _releasePointer,
      onPointerCancel: _releasePointer,
      child: MouseRegion(
        onExit: (_) => _releasePointer(),
        child: Particles(
          width: widget.size.width,
          height: widget.size.height,
          particles: _particles,
          particlePhysics: _physics,
          boundType: BoundType.None,
        ),
      ),
    );
  }
}

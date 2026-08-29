import 'dart:math';

import 'package:flutter/material.dart';
import 'package:particles_flutter/engine.dart';
import 'package:particles_flutter/physics.dart';

import '../guide/specimen.dart';
import '../guide/specimen_scaffold.dart';
import '../guide/theme.dart';

/// Specimen 07 — a music player whose swarm breathes with the beat.
///
/// A pulsing [Attractor] under the album art tightens the swarm on every
/// beat and lets it drift loose between them; dragging anywhere adds a
/// second, stronger attractor at the finger that pulls the swarm into a
/// vortex until the drag is released.
final Specimen playerSpecimen = Specimen(
  number: 7,
  title: 'A player that breathes',
  subtitle: 'a swarm that feels the beat',
  apiLabel: 'n=120 · Attractor (pulsing) · trails',
  builder: (_) => const PlayerScene(),
);

/// Scene background — a dark player surface.
const _sceneBackground = Color(0xFF101218);

/// Teal accent, used for the swarm, the album mark and the progress fill.
const _teal = Color(0xFF6EC8C2);

/// Primary / secondary type colors.
const _textPrimary = Color(0xFFE8E6E1);
const _textMuted = Color(0xFF8B8D95);

/// Album plate fill and progress-track fill.
const _plate = Color(0xFF163032);
const _track = Color(0xFF23252C);

const _particleCount = 120;
const _albumSize = 230.0;

/// Top of the center column, as a fraction of the scene height.
const _columnTopFraction = 0.14;

/// One beat at ~72 bpm.
const _beatPeriod = Duration(milliseconds: 830);

/// Attractor strength at the loosest point between beats.
const _looseStrength = 10.0;

/// Attractor strength on the beat itself.
const _tightStrength = 90.0;

class PlayerScene extends StatelessWidget {
  const PlayerScene({super.key});

  @override
  Widget build(BuildContext context) {
    return SpecimenScaffold(
      specimen: playerSpecimen,
      background: _sceneBackground,
      child: LayoutBuilder(
        builder: (context, constraints) {
          final size = Size(constraints.maxWidth, constraints.maxHeight);
          // The engine captures its particle list ONCE at init, so the stage
          // is rebuilt from scratch whenever the available size changes.
          return KeyedSubtree(
            key: ValueKey(size),
            child: _PlayerStage(size: size),
          );
        },
      ),
    );
  }
}

class _PlayerStage extends StatefulWidget {
  const _PlayerStage({required this.size});

  final Size size;

  @override
  State<_PlayerStage> createState() => _PlayerStageState();
}

class _PlayerStageState extends State<_PlayerStage>
    with SingleTickerProviderStateMixin {
  final _rng = Random();

  /// Built once — the engine holds this list by reference for its lifetime.
  late final List<Particle> _particles;

  /// Drives the beat. One full cycle = one beat.
  late final AnimationController _beat;

  /// Finger position while a drag is in progress, in stage coordinates.
  /// Read live by the vortex attractor's position closure.
  Offset? _pointer;

  @override
  void initState() {
    super.initState();
    _particles = List.generate(_particleCount, _swarmParticle);
    _beat = AnimationController(vsync: this, duration: _beatPeriod)..repeat();
  }

  @override
  void dispose() {
    _beat.dispose();
    super.dispose();
  }

  Particle _swarmParticle(int index) {
    // Every third particle streaks, so the swarm reads as motion rather
    // than a field of dots.
    final trails = index % 3 == 0;
    // One in eight is a "bright" particle — bigger, with a halo. Glow costs
    // a blur per particle per frame, so at n=120 only these 15 carry it;
    // that is enough to give the swarm depth without paying for it 120 times.
    final bright = index % 8 == 0;
    return CircularParticle(
      radius: bright ? 2.5 + _rng.nextDouble() * 0.5 : 1.5 + _rng.nextDouble(),
      color: _teal.withValues(alpha: 0.4 + _rng.nextDouble() * 0.55),
      glowSigma: bright ? 2.5 : 0,
      velocity: Offset(
        (_rng.nextDouble() - 0.5) * 34,
        (_rng.nextDouble() - 0.5) * 34,
      ),
      trailEnabled: trails,
      trailLength: 8,
    );
  }

  /// Center of the album plate — the point the swarm breathes around.
  Offset get _albumCenter => Offset(
        widget.size.width / 2,
        widget.size.height * _columnTopFraction + _albumSize / 2,
      );

  /// Physics for the current frame. `particlePhysics` is read live from the
  /// widget by the engine every frame, so rebuilding [Particles] with a
  /// fresh instance each tick is what makes the swarm breathe.
  ParticlePhysics _physicsForBeat() {
    // Sharp attack on the beat, slow release between beats.
    final release = Curves.easeOutCubic.transform(_beat.value);
    final strength = _tightStrength + (_looseStrength - _tightStrength) * release;
    final shortestSide = min(widget.size.width, widget.size.height);

    return ParticlePhysics(
      gravityScale: 0,
      maxSpeed: 140,
      attractors: [
        Attractor(
          position: () => _albumCenter,
          strength: strength,
          radius: 0.7 * shortestSide,
        ),
        if (_pointer != null)
          Attractor(
            // Evaluated fresh every frame, so it tracks the finger.
            position: () => _pointer ?? _albumCenter,
            strength: 160,
            radius: 200,
          ),
      ],
    );
  }

  void _onPanStart(DragStartDetails details) {
    setState(() => _pointer = details.localPosition);
  }

  void _onPanUpdate(DragUpdateDetails details) {
    setState(() => _pointer = details.localPosition);
  }

  void _onPanEnd([DragEndDetails? details]) {
    setState(() => _pointer = null);
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      behavior: HitTestBehavior.opaque,
      onPanStart: _onPanStart,
      onPanUpdate: _onPanUpdate,
      onPanEnd: _onPanEnd,
      onPanCancel: _onPanEnd,
      child: Stack(
        children: [
          Positioned.fill(
            child: IgnorePointer(
              child: AnimatedBuilder(
                animation: _beat,
                builder: (context, _) {
                  return Particles(
                    particles: _particles,
                    particlePhysics: _physicsForBeat(),
                    boundType: BoundType.WrapAround,
                    width: widget.size.width,
                    height: widget.size.height,
                  );
                },
              ),
            ),
          ),
          Positioned(
            top: widget.size.height * _columnTopFraction,
            left: 0,
            right: 0,
            child: const IgnorePointer(child: _NowPlaying()),
          ),
          const Positioned(
            left: 0,
            right: 0,
            bottom: 0,
            child: IgnorePointer(child: _TransportControls()),
          ),
        ],
      ),
    );
  }
}

/// Album plate plus track titles.
class _NowPlaying extends StatelessWidget {
  const _NowPlaying();

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Container(
          width: _albumSize,
          height: _albumSize,
          decoration: BoxDecoration(
            color: _plate,
            borderRadius: BorderRadius.circular(16),
            boxShadow: [
              BoxShadow(
                color: _teal.withValues(alpha: 0.18),
                blurRadius: 60,
              ),
            ],
          ),
          child: const Center(
            child: SizedBox(
              width: 120,
              height: 120,
              child: CustomPaint(painter: _RingMarkPainter()),
            ),
          ),
        ),
        const SizedBox(height: 26),
        Text(
          'Slow Tide',
          style: GuideTheme.serif(
            size: 26,
            weight: FontWeight.w600,
            color: _textPrimary,
          ),
        ),
        const SizedBox(height: 8),
        Text(
          'Marigold · Low Season',
          style: GuideTheme.serif(size: 15, color: _textMuted),
        ),
        const SizedBox(height: 18),
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 44),
          child: Text(
            'The swarm tightens on every beat, drifts loose between them.',
            textAlign: TextAlign.center,
            style: GuideTheme.serif(
              size: 13,
              color: _textMuted,
              style: FontStyle.italic,
              height: 1.5,
            ),
          ),
        ),
      ],
    );
  }
}

/// Concentric teal rings standing in for cover art.
class _RingMarkPainter extends CustomPainter {
  const _RingMarkPainter();

  static const _rings = <(double, double)>[
    (46, 0.7),
    (32, 0.5),
    (18, 0.35),
  ];

  @override
  void paint(Canvas canvas, Size size) {
    final center = Offset(size.width / 2, size.height / 2);
    final stroke = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1.5;

    for (final (radius, opacity) in _rings) {
      canvas.drawCircle(
        center,
        radius,
        stroke..color = _teal.withValues(alpha: opacity),
      );
    }

    canvas.drawCircle(
      center,
      3,
      Paint()..color = _teal,
    );
  }

  @override
  bool shouldRepaint(_RingMarkPainter oldDelegate) => false;
}

/// Progress bar and playback buttons.
class _TransportControls extends StatelessWidget {
  const _TransportControls();

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(30),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Row(
            children: [
              Text('1:48', style: GuideTheme.mono(size: 11, color: _textMuted)),
              const SizedBox(width: 14),
              const Expanded(child: _ProgressBar(progress: 0.45)),
              const SizedBox(width: 14),
              Text('4:02', style: GuideTheme.mono(size: 11, color: _textMuted)),
            ],
          ),
          const SizedBox(height: 28),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Icon(Icons.skip_previous, size: 26, color: _textMuted),
              const SizedBox(width: 34),
              Container(
                width: 68,
                height: 68,
                decoration: const BoxDecoration(
                  color: _textPrimary,
                  shape: BoxShape.circle,
                ),
                child: const Icon(Icons.pause, size: 30, color: _sceneBackground),
              ),
              const SizedBox(width: 34),
              const Icon(Icons.skip_next, size: 26, color: _textMuted),
            ],
          ),
        ],
      ),
    );
  }
}

class _ProgressBar extends StatelessWidget {
  const _ProgressBar({required this.progress});

  final double progress;

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(2),
      child: SizedBox(
        height: 3,
        child: Row(
          children: [
            Expanded(
              flex: (progress * 1000).round(),
              child: const ColoredBox(color: _teal),
            ),
            Expanded(
              flex: 1000 - (progress * 1000).round(),
              child: const ColoredBox(color: _track),
            ),
          ],
        ),
      ),
    );
  }
}

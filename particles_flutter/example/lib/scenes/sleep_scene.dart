import 'dart:math';

import 'package:flutter/material.dart';
import 'package:particles_flutter/engine.dart';
import 'package:particles_flutter/physics.dart';

import '../guide/specimen.dart';
import '../guide/specimen_scaffold.dart';
import '../guide/theme.dart';

/// Specimen 05 — a sleep-sounds player. A sparse field of fireflies drifts
/// behind the UI, each one fading in and out over its own lifetime.
final Specimen sleepSpecimen = Specimen(
  number: 5,
  title: 'Sleep sounds',
  subtitle: 'fireflies slowing toward sleep',
  apiLabel: 'n=24 · Attractor · glowSigma · endOpacity',
  builder: (_) => const SleepScene(),
);

/// Night-sky ground the whole scene sits on.
const _sceneBackground = Color(0xFF0B0F14);

/// Type colors.
const _textPrimary = Color(0xFFE8E6E1);
const _textSecondary = Color(0xFF8B8D95);

/// Firefly + progress accent.
const _amber = Color(0xFFE0A83C);

/// The occasional green firefly.
const _green = Color(0xFFC8D86E);

/// Unfilled portion of the progress bar.
const _trackColor = Color(0xFF23252C);

class SleepScene extends StatelessWidget {
  const SleepScene({super.key});

  @override
  Widget build(BuildContext context) {
    return SpecimenScaffold(
      specimen: sleepSpecimen,
      background: _sceneBackground,
      child: LayoutBuilder(
        builder: (context, constraints) {
          final size = Size(constraints.maxWidth, constraints.maxHeight);
          // The engine captures its particle list ONCE at init, so the stage
          // is rebuilt from scratch whenever the available size changes.
          return KeyedSubtree(
            key: ValueKey(size),
            child: _SleepStage(size: size),
          );
        },
      ),
    );
  }
}

class _SleepStage extends StatefulWidget {
  const _SleepStage({required this.size});

  final Size size;

  @override
  State<_SleepStage> createState() => _SleepStageState();
}

class _SleepStageState extends State<_SleepStage> {
  static const _fireflyCount = 24;

  final _rng = Random();

  late final List<Particle> _fireflies;
  late final ParticlePhysics _physics;

  @override
  void initState() {
    super.initState();
    _fireflies = List.generate(_fireflyCount, _firefly);
    // A single weak pull low in the scene keeps the drift from spreading
    // evenly; gravity is off, and the speed cap keeps it a drift, not a fall.
    final pull = Offset(widget.size.width / 2, widget.size.height * 0.62);
    _physics = ParticlePhysics(
      gravityScale: 0,
      maxSpeed: 30,
      attractors: [
        Attractor(
          position: () => pull,
          strength: 16,
          radius: max(widget.size.width, widget.size.height),
        ),
      ],
    );
  }

  Particle _firefly(int index) {
    // Mostly amber, with a green one every so often.
    final color = index % 5 == 4 ? _green : _amber;
    return CircularParticle(
      radius: 2.0 + _rng.nextDouble() * 2.0,
      color: color,
      // The halo is the whole point of a firefly: a soft bloom that carries
      // the color further than the dot does. At n=24 every one can afford it.
      glowSigma: 3.0 + _rng.nextDouble() * 2.0,
      velocity: Offset(
        (_rng.nextDouble() - 0.5) * 24,
        (_rng.nextDouble() - 0.5) * 24,
      ),
      // Staggered lifetimes so the field never blinks in unison.
      lifetime: 4.0 + _rng.nextDouble() * 4.0,
      // start == end == 0 is the engine's triangle fade: in, peak at
      // midlife, back out.
      startOpacity: 0.0,
      endOpacity: 0.0,
    );
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        IgnorePointer(
          child: Particles(
            particles: _fireflies,
            width: widget.size.width,
            height: widget.size.height,
            boundType: BoundType.WrapAround,
            particlePhysics: _physics,
          ),
        ),
        const Positioned.fill(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Padding(
                padding: EdgeInsets.fromLTRB(30, 52, 30, 0),
                child: _NowPlaying(),
              ),
              Spacer(),
              Padding(
                padding: EdgeInsets.fromLTRB(30, 0, 30, 30),
                child: _PlayerControls(),
              ),
            ],
          ),
        ),
      ],
    );
  }
}

class _NowPlaying extends StatelessWidget {
  const _NowPlaying();

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      mainAxisSize: MainAxisSize.min,
      children: [
        Text(
          'NOW PLAYING',
          style: GuideTheme.mono(
            size: 11,
            color: _textSecondary,
            letterSpacing: 2,
          ),
        ),
        const SizedBox(height: 14),
        Text(
          'Monsoon night,\nslow crickets',
          style: GuideTheme.serif(
            size: 34,
            weight: FontWeight.w600,
            color: _textPrimary,
            height: 1.15,
          ),
        ),
      ],
    );
  }
}

class _PlayerControls extends StatelessWidget {
  const _PlayerControls();

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      mainAxisSize: MainAxisSize.min,
      children: [
        Text(
          'The fireflies drift slower as the timer winds down.',
          style: GuideTheme.serif(
            size: 14,
            color: _textSecondary,
            style: FontStyle.italic,
          ),
        ),
        const SizedBox(height: 22),
        Row(
          children: [
            const Expanded(child: _ProgressBar(fraction: 0.4)),
            const SizedBox(width: 14),
            Text(
              'ends in 20 min',
              style: GuideTheme.mono(size: 12, color: _textSecondary),
            ),
          ],
        ),
        const SizedBox(height: 30),
        const Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(Icons.skip_previous, size: 26, color: _textSecondary),
            SizedBox(width: 34),
            _PauseButton(),
            SizedBox(width: 34),
            Icon(Icons.skip_next, size: 26, color: _textSecondary),
          ],
        ),
      ],
    );
  }
}

class _ProgressBar extends StatelessWidget {
  const _ProgressBar({required this.fraction});

  final double fraction;

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 3,
      decoration: BoxDecoration(
        color: _trackColor,
        borderRadius: BorderRadius.circular(2),
      ),
      child: FractionallySizedBox(
        alignment: Alignment.centerLeft,
        widthFactor: fraction,
        child: Container(
          decoration: BoxDecoration(
            color: _amber,
            borderRadius: BorderRadius.circular(2),
          ),
        ),
      ),
    );
  }
}

class _PauseButton extends StatelessWidget {
  const _PauseButton();

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 68,
      height: 68,
      decoration: const BoxDecoration(
        color: _textPrimary,
        shape: BoxShape.circle,
      ),
      child: const Icon(Icons.pause, size: 24, color: _sceneBackground),
    );
  }
}

import 'dart:async';
import 'dart:math';

import 'package:flutter/material.dart';
import 'package:particles_flutter/engine.dart';
import 'package:particles_flutter/physics.dart';

import '../guide/specimen.dart';
import '../guide/specimen_scaffold.dart';
import '../guide/theme.dart';

/// Specimen 10 — Diwali night. Rockets climb from behind the skyline on
/// their own trails, and a second emitter hands the show over to a
/// [RadialBurst] at the top of the sky.
final Specimen launchNightSpecimen = Specimen(
  number: 10,
  title: 'Launch night',
  subtitle: 'rockets, then the sky answers',
  apiLabel: 'n=160 · trails · RadialBurst · gravity',
  builder: (_) => const LaunchNightScene(),
);

// Scene palette.
const _sceneBackground = Color(0xFF121016);
const _amber = Color(0xFFE0A83C);
const _red = Color(0xFFD94F30);
const _gold = Color(0xFFC98A1B);
const _nearWhite = Color(0xFFF0ECE3);
const _secondary = Color(0xFF8D8A94);
const _building = Color(0xFF1D1A24);

/// Skyline baseline, as a fraction of the scene height measured up from the
/// bottom. Shared by the skyline row and the rocket launch height so the
/// rockets always leave from just under the rooftops.
const _skylineBaseFraction = 0.26;

class LaunchNightScene extends StatelessWidget {
  const LaunchNightScene({super.key});

  @override
  Widget build(BuildContext context) {
    return SpecimenScaffold(
      specimen: launchNightSpecimen,
      background: _sceneBackground,
      child: LayoutBuilder(
        builder: (context, constraints) {
          final size = Size(constraints.maxWidth, constraints.maxHeight);
          // The engine captures its emitters ONCE at init, so the whole sky
          // is rebuilt from scratch whenever the available size changes.
          return KeyedSubtree(
            key: ValueKey(size),
            child: _LaunchNightStage(size: size),
          );
        },
      ),
    );
  }
}

class _LaunchNightStage extends StatelessWidget {
  const _LaunchNightStage({required this.size});

  final Size size;

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        // Rooftops sit behind everything but the background.
        Positioned(
          left: 0,
          right: 0,
          bottom: size.height * _skylineBaseFraction,
          child: const _Skyline(),
        ),
        Positioned.fill(
          child: IgnorePointer(child: _NightSky(size: size)),
        ),
        const Positioned(
          left: 0,
          right: 0,
          top: 0,
          child: Padding(
            padding: EdgeInsets.fromLTRB(30, 52, 30, 0),
            child: _Header(),
          ),
        ),
        const Positioned(
          left: 0,
          right: 0,
          bottom: 0,
          child: Padding(
            padding: EdgeInsets.all(30),
            child: _Footer(),
          ),
        ),
      ],
    );
  }
}

/// The particle field: three rocket emitters firing upward off the rooftops,
/// plus one apex emitter that opens a radial firework high in the sky.
class _NightSky extends StatefulWidget {
  const _NightSky({required this.size});

  final Size size;

  @override
  State<_NightSky> createState() => _NightSkyState();
}

class _NightSkyState extends State<_NightSky> {
  /// One launch every ~1s somewhere, but each pad on its own beat and color.
  static const _pads = <_LaunchPad>[
    _LaunchPad(x: 0.22, interval: 2600, delay: 250, color: _amber),
    _LaunchPad(x: 0.52, interval: 3400, delay: 1150, color: _red),
    _LaunchPad(x: 0.78, interval: 3000, delay: 2050, color: _gold),
  ];

  /// Rocket flight time to apex, in seconds. The whole choreography — launch
  /// speed, gravity, and when/where the firework opens — is derived from it.
  static const _flightSeconds = 1.25;

  final _rng = Random(10);

  late final List<BurstEmitter> _emitters;

  @override
  void initState() {
    super.initState();
    final h = widget.size.height;

    // Ballistics, solved so the rocket decelerates to ~zero exactly at the
    // apex: climb height H over time T needs v0 = 2H/T and gravity g = v0/T.
    final launchY = h * (1 - _skylineBaseFraction) + 12;
    final climb = h * 0.46;
    final apexY = launchY - climb;
    final v0 = 2 * climb / _flightSeconds;
    final gravity = v0 / _flightSeconds;

    _emitters = [
      for (final pad in _pads) ...[
        // The rocket: a single glowing streak off the rooftops.
        Emitter.burst(
          position: (size) => Offset(size.width * pad.x, launchY),
          particleCount: 1,
          pattern: ConeBurst(
            angle: -pi / 2,
            spread: 0.03,
            minSpeed: v0,
            maxSpeed: v0,
          ),
          physics: ParticlePhysics(gravityScale: gravity),
          particleFactory: _rocket,
          enableTrails: true,
          repeatCount: 0,
          repeatInterval: Duration(milliseconds: pad.interval),
          initialDelay: Duration(milliseconds: pad.delay),
        ),
        // Its firework: same pad, same cadence, offset by exactly the flight
        // time, opening where the rocket runs out of climb.
        Emitter.burst(
          position: (size) => Offset(size.width * pad.x, apexY),
          particleCount: 45,
          positionRadius: 8,
          pattern: const RadialBurst(minSpeed: 30, maxSpeed: 150),
          physics: const ParticlePhysics(gravityScale: 90),
          particleFactory: (index, total) => _spark(pad.color, index),
          repeatCount: 0,
          repeatInterval: Duration(milliseconds: pad.interval),
          initialDelay: Duration(
              milliseconds:
                  pad.delay + (_flightSeconds * 1000).round()),
        ),
      ],
    ];
  }

  /// A rocket: one bright head dragging a long comet trail behind it.
  Particle _rocket(int index, int total) {
    return CircularParticle(
      radius: 2.5,
      color: _nearWhite,
      // The head burns brighter than its trail — a halo sells the climb.
      glowSigma: 3,
      // Overwritten by the emitter's ConeBurst pattern on every launch.
      velocity: Offset.zero,
      // Dies exactly at the apex, where its firework opens.
      lifetime: _flightSeconds,
      trailEnabled: true,
      trailLength: 22,
      endOpacity: 0.0,
      opacityCurve: Curves.easeInQuart,
    );
  }

  /// One ember of a firework, in its pad's color (whites mixed in).
  Particle _spark(Color padColor, int index) {
    return CircularParticle(
      radius: 1.6 + _rng.nextDouble() * 1.2,
      color: index % 5 == 0 ? _nearWhite : padColor,
      glowSigma: 2,
      velocity: Offset.zero,
      lifetime: 1.4 + _rng.nextDouble() * 0.4,
      endOpacity: 0.0,
      opacityCurve: Curves.easeOut,
      // Embers shrink as they die.
      endScale: 0.4,
    );
  }

  /// A static backdrop of dim stars so the sky has depth between launches.
  List<Particle> _stars() {
    final rng = Random(7);
    return List.generate(16, (i) {
      return CircularParticle(
        radius: 0.8 + rng.nextDouble() * 1.0,
        color: _nearWhite.withValues(alpha: 0.2 + rng.nextDouble() * 0.3),
        velocity: Offset.zero,
        startPosition: Offset(
          rng.nextDouble() * widget.size.width,
          rng.nextDouble() * widget.size.height * 0.55,
        ),
      );
    });
  }

  @override
  Widget build(BuildContext context) {
    return Particles(
      particles: _stars(),
      burstEmitters: _emitters,
      width: widget.size.width,
      height: widget.size.height,
    );
  }
}

class _LaunchPad {
  const _LaunchPad({
    required this.x,
    required this.interval,
    required this.delay,
    required this.color,
  });

  /// Horizontal position as a fraction of the scene width.
  final double x;

  /// Milliseconds between launches.
  final int interval;

  /// Milliseconds before the first launch, staggering the pads apart.
  final int delay;

  /// This pad's firework color.
  final Color color;
}

/// Flat rooftops. Deliberately plain rectangles — the sky is the subject.
class _Skyline extends StatelessWidget {
  const _Skyline();

  static const _widths = <double>[44, 30, 58, 36, 62, 34, 50, 40];
  static const _heights = <double>[52, 34, 78, 44, 84, 32, 66, 48];

  @override
  Widget build(BuildContext context) {
    return FittedBox(
      fit: BoxFit.scaleDown,
      alignment: Alignment.bottomCenter,
      child: Row(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.end,
        children: [
          for (var i = 0; i < _widths.length; i++) ...[
            if (i > 0) const SizedBox(width: 6),
            Container(
              width: _widths[i],
              height: _heights[i],
              color: _building,
            ),
          ],
        ],
      ),
    );
  }
}

class _Header extends StatelessWidget {
  const _Header();

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      mainAxisSize: MainAxisSize.min,
      children: [
        Text(
          'DIWALI NIGHT',
          style: GuideTheme.mono(
            size: 11,
            color: _secondary,
            letterSpacing: 2,
          ),
        ),
        const SizedBox(height: 10),
        Text(
          'The sky goes first',
          style: GuideTheme.serif(
            size: 34,
            weight: FontWeight.w600,
            color: _nearWhite,
          ),
        ),
      ],
    );
  }
}

class _Footer extends StatelessWidget {
  const _Footer();

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      mainAxisSize: MainAxisSize.min,
      children: [
        const _Countdown(),
        const SizedBox(height: 14),
        Text(
          'Every rocket is a particle with a trail; the burst at the top '
          'hands off to a RadialBurst.',
          style: GuideTheme.serif(
            size: 14,
            color: _secondary,
            style: FontStyle.italic,
            height: 1.5,
          ),
        ),
      ],
    );
  }
}

/// Live clock ticking down to midnight, looping so the scene never settles.
class _Countdown extends StatefulWidget {
  const _Countdown();

  @override
  State<_Countdown> createState() => _CountdownState();
}

class _CountdownState extends State<_Countdown> {
  static const _startSeconds = 12;

  int _seconds = _startSeconds;
  Timer? _ticker;

  @override
  void initState() {
    super.initState();
    _ticker = Timer.periodic(const Duration(seconds: 1), (_) {
      setState(() {
        _seconds = _seconds == 0 ? _startSeconds : _seconds - 1;
      });
    });
  }

  @override
  void dispose() {
    _ticker?.cancel();
    super.dispose();
  }

  String get _label => '00:00:${_seconds.toString().padLeft(2, '0')}';

  @override
  Widget build(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.baseline,
      textBaseline: TextBaseline.alphabetic,
      children: [
        Text(
          _label,
          style: GuideTheme.mono(size: 40, color: _amber),
        ),
        const SizedBox(width: 12),
        Text(
          'to midnight',
          style: GuideTheme.serif(size: 14, color: _secondary),
        ),
      ],
    );
  }
}

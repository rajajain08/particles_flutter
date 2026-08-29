import 'dart:async';
import 'dart:math';

import 'package:flutter/material.dart';
import 'package:particles_flutter/engine.dart';

import '../guide/specimen.dart';
import '../guide/specimen_scaffold.dart';
import '../guide/theme.dart';

/// Specimen 11 — a focus timer. A slow nebula breathes behind the clock:
/// large translucent wisps that shift hue across their lifetime while a
/// handful of sharp motes drift through them.
final Specimen focusSpecimen = Specimen(
  number: 11,
  title: 'Focus timer',
  subtitle: 'a nebula that thins with focus',
  apiLabel: 'n=40 · colorGradient · endOpacity · endScale',
  builder: (_) => const FocusScene(),
);

/// Deep-violet ground the whole scene sits on.
const _sceneBackground = Color(0xFF171321);

/// Type colors.
const _textPrimary = Color(0xFFECE8F2);
const _textSecondary = Color(0xFF8D87A0);

/// Outline on the secondary button.
const _outline = Color(0xFF3D3552);

/// Nebula hues. Each wisp lerps through all three over its lifetime, so the
/// cloud shifts violet → magenta → steel blue as it breathes.
const _violet = Color(0xFF4A3A6E);
const _magenta = Color(0xFF6E3A5C);
const _steel = Color(0xFF3A5A6E);

/// Sharp mote colors — the bright specks that ride on top of the nebula.
const _moteColors = <Color>[
  Color(0xFFB89AE0),
  Color(0xFF9AB8E0),
  Color(0xFFE09AB8),
];

class FocusScene extends StatelessWidget {
  const FocusScene({super.key});

  @override
  Widget build(BuildContext context) {
    return SpecimenScaffold(
      specimen: focusSpecimen,
      background: _sceneBackground,
      child: LayoutBuilder(
        builder: (context, constraints) {
          final size = Size(constraints.maxWidth, constraints.maxHeight);
          // The engine captures its particle list ONCE at init, so the stage
          // is rebuilt from scratch whenever the available size changes.
          return KeyedSubtree(
            key: ValueKey(size),
            child: _FocusStage(size: size),
          );
        },
      ),
    );
  }
}

class _FocusStage extends StatefulWidget {
  const _FocusStage({required this.size});

  final Size size;

  @override
  State<_FocusStage> createState() => _FocusStageState();
}

class _FocusStageState extends State<_FocusStage> {
  static const _wispCount = 28;
  static const _moteCount = 12;

  final _rng = Random();

  late final List<Particle> _particles;

  @override
  void initState() {
    super.initState();
    // Wisps first so the sharp motes paint on top of the cloud.
    _particles = [
      ...List.generate(_wispCount, _wisp),
      ...List.generate(_moteCount, _mote),
    ];
  }

  /// One soft nebula disc: big, slow, and hue-shifting.
  Particle _wisp(int index) {
    // Rotate the gradient stops per wisp so neighbours are never the same
    // hue at the same moment.
    final stops = <List<Color>>[
      [_violet, _magenta, _steel],
      [_magenta, _steel, _violet],
      [_steel, _violet, _magenta],
    ][index % 3];

    // Roughly a quarter of the wisps are blurred into big soft blobs. That
    // handful is what makes the cloud read as nebula rather than a stack of
    // hard discs — blurring all 28 would cost far more and gain little.
    final soft = index % 4 == 0;

    return CircularParticle(
      // Smaller than before, so no single wisp peaks as a readable disc.
      radius: 26 + _rng.nextDouble() * 22,
      // The engine resolves alpha from the opacity curve below, so the base
      // color only needs to be a hue this dark to read as nebula, not fog.
      color: stops.first,
      glowSigma: soft ? 8.0 + _rng.nextDouble() * 4.0 : 0,
      colorGradient: stops,
      colorCurve: Curves.easeInOut,
      // A drift this slow reads as breathing rather than travel.
      velocity: Offset(
        (_rng.nextDouble() - 0.5) * 10,
        (_rng.nextDouble() - 0.5) * 10,
      ),
      // Long, staggered lifetimes: the cloud never pulses in unison.
      lifetime: 6.0 + _rng.nextDouble() * 5.0,
      // start == end == 0 is the engine's triangle fade — in, peak at
      // midlife, back out. That mid-life peak is the whole ghost effect.
      startOpacity: 0.0,
      endOpacity: 0.0,
      opacityCurve: Curves.easeInOut,
      // Each wisp swells as it fades through, so the cloud expands outward.
      startScale: 0.6,
      endScale: 1.4,
      scaleCurve: Curves.easeOut,
    );
  }

  /// One sharp mote drifting across the nebula.
  Particle _mote(int index) {
    return CircularParticle(
      radius: 1.5 + _rng.nextDouble() * 1.5,
      color: _moteColors[index % _moteColors.length],
      // A tight halo keeps the motes reading as sparks above the cloud.
      glowSigma: 3,
      velocity: Offset(
        (_rng.nextDouble() - 0.5) * 14,
        (_rng.nextDouble() - 0.5) * 14,
      ),
      lifetime: 4.0 + _rng.nextDouble() * 4.0,
      startOpacity: 0.0,
      endOpacity: 0.0,
    );
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        // Wisps are wide enough to spill past the stage; clip so they never
        // bleed onto the specimen band.
        IgnorePointer(
          child: ClipRect(
            child: Particles(
              particles: _particles,
              width: widget.size.width,
              height: widget.size.height,
              boundType: BoundType.WrapAround,
            ),
          ),
        ),
        const Positioned.fill(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Padding(
                padding: EdgeInsets.fromLTRB(30, 52, 30, 0),
                child: _SessionHeader(),
              ),
              Spacer(flex: 3),
              Padding(
                padding: EdgeInsets.symmetric(horizontal: 30),
                child: _Countdown(),
              ),
              Spacer(flex: 4),
              Padding(
                padding: EdgeInsets.fromLTRB(30, 0, 30, 30),
                child: _SessionControls(),
              ),
            ],
          ),
        ),
      ],
    );
  }
}

class _SessionHeader extends StatelessWidget {
  const _SessionHeader();

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      mainAxisSize: MainAxisSize.min,
      children: [
        Text(
          'DEEP WORK',
          style: GuideTheme.mono(
            size: 11,
            color: _textSecondary,
            letterSpacing: 2,
          ),
        ),
        const SizedBox(height: 12),
        Text(
          'Drafting the pitch',
          style: GuideTheme.serif(
            size: 26,
            weight: FontWeight.w600,
            color: _textPrimary,
          ),
        ),
      ],
    );
  }
}

/// The live clock. Kept in its own state so the ticking never rebuilds the
/// particle stage above it.
class _Countdown extends StatefulWidget {
  const _Countdown();

  @override
  State<_Countdown> createState() => _CountdownState();
}

class _CountdownState extends State<_Countdown> {
  static const _startSeconds = 24 * 60 + 36;

  int _remaining = _startSeconds;
  Timer? _ticker;

  @override
  void initState() {
    super.initState();
    _ticker = Timer.periodic(const Duration(seconds: 1), (_) {
      if (!mounted) return;
      setState(() {
        _remaining = _remaining > 0 ? _remaining - 1 : _startSeconds;
      });
    });
  }

  @override
  void dispose() {
    _ticker?.cancel();
    super.dispose();
  }

  String get _clock {
    final minutes = (_remaining ~/ 60).toString().padLeft(2, '0');
    final seconds = (_remaining % 60).toString().padLeft(2, '0');
    return '$minutes:$seconds';
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        FittedBox(
          fit: BoxFit.scaleDown,
          child: Text(
            _clock,
            style: GuideTheme.mono(
              size: 76,
              color: _textPrimary,
              letterSpacing: 1,
            ),
          ),
        ),
        const SizedBox(height: 16),
        Text(
          'The nebula breathes with you — it thins as the session ends.',
          textAlign: TextAlign.center,
          style: GuideTheme.serif(
            size: 14,
            color: _textSecondary,
            style: FontStyle.italic,
          ),
        ),
      ],
    );
  }
}

class _SessionControls extends StatelessWidget {
  const _SessionControls();

  @override
  Widget build(BuildContext context) {
    return const Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Flexible(child: _ControlButton(label: 'Pause', filled: true)),
        SizedBox(width: 14),
        Flexible(child: _ControlButton(label: 'End early', filled: false)),
      ],
    );
  }
}

class _ControlButton extends StatelessWidget {
  const _ControlButton({required this.label, required this.filled});

  final String label;
  final bool filled;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 150,
      height: 50,
      child: DecoratedBox(
        decoration: BoxDecoration(
          color: filled ? _textPrimary : null,
          border: filled ? null : Border.all(color: _outline),
          borderRadius: BorderRadius.circular(12),
        ),
        child: Center(
          child: Text(
            label,
            style: GuideTheme.serif(
              size: 15,
              color: filled ? _sceneBackground : _textPrimary,
            ),
          ),
        ),
      ),
    );
  }
}

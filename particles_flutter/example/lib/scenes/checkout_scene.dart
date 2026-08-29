import 'dart:async';
import 'dart:math';

import 'package:flutter/material.dart';
import 'package:particles_flutter/engine.dart';
import 'package:particles_flutter/physics.dart';
import 'package:particles_flutter/shapes.dart';

import '../guide/specimen.dart';
import '../guide/specimen_scaffold.dart';
import '../guide/theme.dart';

/// Specimen 01 — a payment confirmation screen. Confetti fires from the
/// success check on load and again on every tap.
final Specimen checkoutSpecimen = Specimen(
  number: 1,
  title: 'Checkout success',
  subtitle: 'confetti when the money lands',
  apiLabel: 'n=180 · BurstEmitter · ConeBurst ×3',
  builder: (_) => const CheckoutScene(),
);

/// Scene background — a clean white receipt sheet.
const _sceneBackground = Color(0xFFFFFFFF);

/// Success mark color.
const _successGreen = Color(0xFF3F7D47);

/// Confetti palette.
const _confettiColors = <Color>[
  Color(0xFFD94F30),
  Color(0xFFC98A1B),
  Color(0xFF3D7DC4),
  Color(0xFF5A8A4F),
  Color(0xFF7A5FA8),
];

/// Vertical position of the check circle's center, as a fraction of the
/// scene height. Shared by the layout and the burst origin so the confetti
/// always launches from the mark itself.
const _checkCenterFraction = 0.34;

const _checkDiameter = 88.0;

class CheckoutScene extends StatelessWidget {
  const CheckoutScene({super.key});

  @override
  Widget build(BuildContext context) {
    return SpecimenScaffold(
      specimen: checkoutSpecimen,
      background: _sceneBackground,
      child: LayoutBuilder(
        builder: (context, constraints) {
          final size = Size(constraints.maxWidth, constraints.maxHeight);
          // The engine captures its emitters ONCE at init, so the stage is
          // rebuilt from scratch whenever the available size changes.
          return KeyedSubtree(
            key: ValueKey(size),
            child: _CheckoutStage(size: size),
          );
        },
      ),
    );
  }
}

class _CheckoutStage extends StatefulWidget {
  const _CheckoutStage({required this.size});

  final Size size;

  @override
  State<_CheckoutStage> createState() => _CheckoutStageState();
}

class _CheckoutStageState extends State<_CheckoutStage> {
  final _rng = Random();

  // One controller per cannon: a controller's trigger is CONSUMED by the
  // first emitter that ticks, so a shared controller would fire only one of
  // the three.
  final _leftCannon = BurstEmitterController();
  final _rightCannon = BurstEmitterController();
  final _centerPop = BurstEmitterController();

  late final List<BurstEmitter> _burstEmitters;
  Timer? _openingBurst;
  final List<Timer> _staggerTimers = [];

  @override
  void initState() {
    super.initState();
    // Three cannons on one controller: two crossing streams from the bottom
    // corners (the classic payment-success shape) plus a soft pop from the
    // check itself. Drifting-paper gravity throughout.
    const cannonPhysics = ParticlePhysics(gravityScale: 260);
    _burstEmitters = [
      Emitter.burst(
        position: (size) => Offset(-10, size.height * 0.92),
        particleCount: 70,
        pattern: const ConeBurst(
          angle: -pi / 2 + 0.5,
          spread: 0.5,
          minSpeed: 420,
          maxSpeed: 680,
        ),
        physics: cannonPhysics,
        particleFactory: _confettiPiece,
        controller: _leftCannon,
      ),
      Emitter.burst(
        position: (size) => Offset(size.width + 10, size.height * 0.92),
        particleCount: 70,
        pattern: const ConeBurst(
          angle: -pi / 2 - 0.5,
          spread: 0.5,
          minSpeed: 420,
          maxSpeed: 680,
        ),
        physics: cannonPhysics,
        particleFactory: _confettiPiece,
        controller: _rightCannon,
      ),
      Emitter.burst(
        position: (size) => Offset(
          size.width / 2,
          size.height * _checkCenterFraction,
        ),
        particleCount: 40,
        positionRadius: 10,
        pattern: const ConeBurst(
          angle: -pi / 2,
          spread: pi / 1.9,
          minSpeed: 160,
          maxSpeed: 380,
        ),
        physics: cannonPhysics,
        particleFactory: _confettiPiece,
        controller: _centerPop,
      ),
    ];
    // Celebrate as the check circle's entrance lands.
    _openingBurst = Timer(const Duration(milliseconds: 420), _replay);
  }

  @override
  void dispose() {
    _openingBurst?.cancel();
    for (final t in _staggerTimers) {
      t.cancel();
    }
    _leftCannon.stop();
    _rightCannon.stop();
    _centerPop.stop();
    super.dispose();
  }

  Particle _confettiPiece(int index, int total) {
    // Every piece tumbles, at its own rate and in its own direction, up to
    // +/- 3.5 rad/s.
    final spin = 1.2 + _rng.nextDouble() * 2.3;
    var color = _confettiColors[index % _confettiColors.length];
    // A third of the pieces are pastel — pre-blended against white, since
    // the lifetime fade replaces a color's own alpha every frame.
    if (index % 3 == 0) {
      color = Color.alphaBlend(color.withValues(alpha: 0.55), Colors.white);
    }
    // Staggered lifetimes so the cloud thins out instead of vanishing at
    // once.
    final lifetime = 2.8 + _rng.nextDouble() * 0.8;
    // Every fourth piece is a round dot; the rest are cut paper.
    if (index % 4 == 0) {
      return CircularParticle(
        radius: 3 + _rng.nextDouble() * 1.5,
        color: color,
        velocity: Offset.zero,
        lifetime: lifetime,
        endOpacity: 0.0,
        opacityCurve: Curves.easeOut,
      );
    }
    return RectangularParticle(
      // A wider spread of sizes reads as cut paper rather than a uniform set.
      width: 5 + _rng.nextDouble() * 4,
      height: 8 + _rng.nextDouble() * 6,
      color: color,
      // Overwritten by the emitter's ConeBurst pattern on every burst.
      velocity: Offset.zero,
      rotationSpeed: _rng.nextBool() ? spin : -spin,
      lifetime: lifetime,
      endOpacity: 0.0,
      // Eases the fade out over the whole fall instead of snapping the pieces
      // out of existence at the end.
      opacityCurve: Curves.easeOut,
    );
  }

  // Cannons fire left, right, then the center pop — a rolling volley rather
  // than one simultaneous wall of paper.
  void _replay() {
    _leftCannon.trigger();
    _staggerTimers
      ..add(Timer(const Duration(milliseconds: 120), _rightCannon.trigger))
      ..add(Timer(const Duration(milliseconds: 240), _centerPop.trigger));
  }

  @override
  Widget build(BuildContext context) {
    final checkCenterY = widget.size.height * _checkCenterFraction;

    return GestureDetector(
      behavior: HitTestBehavior.opaque,
      onTap: _replay,
      child: Stack(
        children: [
          Positioned(
            top: checkCenterY - _checkDiameter / 2,
            left: 0,
            right: 0,
            child: const _SuccessColumn(),
          ),
          Positioned.fill(
            child: IgnorePointer(
              child: Particles(
                particles: const [],
                burstEmitters: _burstEmitters,
                width: widget.size.width,
                height: widget.size.height,
              ),
            ),
          ),
          Positioned(
            left: 24,
            right: 24,
            bottom: 24,
            child: _DoneButton(onPressed: _replay),
          ),
        ],
      ),
    );
  }
}

class _SuccessColumn extends StatelessWidget {
  const _SuccessColumn();

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        // The check pops in first; the confetti cannons are timed to fire as
        // this settles.
        TweenAnimationBuilder<double>(
          tween: Tween(begin: 0.0, end: 1.0),
          duration: const Duration(milliseconds: 480),
          curve: Curves.easeOutBack,
          builder: (context, t, child) =>
              Transform.scale(scale: t, child: child),
          child: Container(
            width: _checkDiameter,
            height: _checkDiameter,
            decoration: const BoxDecoration(
              color: _successGreen,
              shape: BoxShape.circle,
            ),
            child: const Icon(Icons.check, color: Colors.white, size: 44),
          ),
        ),
        const SizedBox(height: 28),
        _FadeUp(
          delayMs: 220,
          child: Text(
            'Payment sent',
            style: GuideTheme.serif(size: 34, weight: FontWeight.w600),
          ),
        ),
        const SizedBox(height: 10),
        _FadeUp(
          delayMs: 340,
          child: Text(
            '₹12,400 to Asha Traders',
            style: GuideTheme.serif(size: 17, color: GuideTheme.mutedInk),
          ),
        ),
        const SizedBox(height: 8),
        _FadeUp(
          delayMs: 460,
          child: Text(
            'UPI-8841 · 7:42 pm',
            style: GuideTheme.mono(size: 12, color: GuideTheme.faintInk),
          ),
        ),
      ],
    );
  }
}

/// Fades a child in while sliding it up a few pixels, after [delayMs].
class _FadeUp extends StatefulWidget {
  const _FadeUp({required this.delayMs, required this.child});

  final int delayMs;
  final Widget child;

  @override
  State<_FadeUp> createState() => _FadeUpState();
}

class _FadeUpState extends State<_FadeUp> {
  bool _shown = false;
  Timer? _timer;

  @override
  void initState() {
    super.initState();
    _timer = Timer(Duration(milliseconds: widget.delayMs), () {
      if (mounted) setState(() => _shown = true);
    });
  }

  @override
  void dispose() {
    _timer?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedOpacity(
      opacity: _shown ? 1 : 0,
      duration: const Duration(milliseconds: 360),
      curve: Curves.easeOut,
      child: AnimatedSlide(
        offset: _shown ? Offset.zero : const Offset(0, 0.25),
        duration: const Duration(milliseconds: 360),
        curve: Curves.easeOut,
        child: widget.child,
      ),
    );
  }
}

class _DoneButton extends StatelessWidget {
  const _DoneButton({required this.onPressed});

  final VoidCallback onPressed;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: GuideTheme.ink,
      borderRadius: BorderRadius.circular(12),
      child: InkWell(
        onTap: onPressed,
        borderRadius: BorderRadius.circular(12),
        child: SizedBox(
          height: 56,
          child: Center(
            child: Text(
              'Done',
              style: GuideTheme.serif(size: 17, color: GuideTheme.paper),
            ),
          ),
        ),
      ),
    );
  }
}

import 'dart:math';

import 'package:flutter/material.dart';
import 'package:particles_flutter/engine.dart';
import 'package:particles_flutter/physics.dart';

import '../guide/specimen.dart';
import '../guide/specimen_scaffold.dart';
import '../guide/theme.dart';

/// Specimen 03 — a fitness-app achievement screen. Celebratory sparks fire
/// from behind the streak badge on two offset, repeating bursts.
final Specimen streakSpecimen = Specimen(
  number: 3,
  title: 'Streak unlocked',
  subtitle: 'radial sparks for day thirty',
  apiLabel: 'n=45×2 · RadialBurst · glowSigma · trails',
  builder: (_) => const StreakScene(),
);

// Scene palette (warm light).
const _sceneBg = Color(0xFFFDF9F0);
const _gold = Color(0xFFC98A1B);
const _ember = Color(0xFFD94F30);
const _sand = Color(0xFFE5C689);
const _chainEmpty = Color(0xFFE0D5BD);

const _badgeSize = 150.0;

/// Badge center, as a fraction of the scene height.
const _badgeCenterY = 0.32;

class StreakScene extends StatelessWidget {
  const StreakScene({super.key});

  @override
  Widget build(BuildContext context) {
    return SpecimenScaffold(
      specimen: streakSpecimen,
      background: _sceneBg,
      child: LayoutBuilder(
        builder: (context, constraints) {
          final size = Size(constraints.maxWidth, constraints.maxHeight);
          return KeyedSubtree(
            key: ValueKey(size),
            child: Stack(
              children: [
                // Sparks sit behind the content column.
                Positioned.fill(child: _SparksLayer(size: size)),
                Positioned.fill(child: _StreakContent(size: size)),
              ],
            ),
          );
        },
      ),
    );
  }
}

/// The particle engine layer. Built once per size: [Particles] captures its
/// emitters at initialization, so the burst emitters are created in
/// [initState] and the whole subtree is re-keyed when the layout size changes.
class _SparksLayer extends StatefulWidget {
  const _SparksLayer({required this.size});

  final Size size;

  @override
  State<_SparksLayer> createState() => _SparksLayerState();
}

class _SparksLayerState extends State<_SparksLayer> {
  final _rng = Random();
  late final List<BurstEmitter> _emitters;

  static const _sparkColors = [_gold, _ember, _sand];

  /// One full cycle of the celebration. Two emitters share it, half a cycle
  /// apart, so a burst lands every second and the screen never goes quiet.
  static const _burstCycle = Duration(milliseconds: 2000);
  static const _offBeat = Duration(milliseconds: 1000);

  /// Horizontal offset of each emitter from the badge center.
  static const _originSpread = 20.0;

  @override
  void initState() {
    super.initState();
    _emitters = [
      _sparkEmitter(dx: -_originSpread, initialDelay: Duration.zero),
      _sparkEmitter(dx: _originSpread, initialDelay: _offBeat),
    ];
  }

  /// A repeating burst anchored [dx] pixels from the badge center.
  BurstEmitter _sparkEmitter({
    required double dx,
    required Duration initialDelay,
  }) {
    return Emitter.burst(
      position: (size) =>
          Offset(size.width / 2 + dx, size.height * _badgeCenterY),
      // Half the old single-burst count each, fired twice as often.
      particleCount: 45,
      pattern: const RadialBurst(minSpeed: 90, maxSpeed: 260),
      repeatCount: 0, // infinite
      initialDelay: initialDelay,
      repeatInterval: _burstCycle,
      positionRadius: 6,
      physics: const ParticlePhysics(gravityScale: 25),
      enableTrails: true,
      particleFactory: _spark,
    );
  }

  Particle _spark(int index, int total) {
    // Roughly a third of the sparks are gold — those get the soft halo.
    final isGold = index % _sparkColors.length == 0;
    return CircularParticle(
      radius: 1.5 + _rng.nextDouble() * 2,
      color: _sparkColors[index % _sparkColors.length],
      velocity: Offset.zero, // set by the burst pattern
      // Blur costs real time per particle, so only the gold third glows.
      glowSigma: isGold ? 2 : 0,
      lifetime: 1.6 + _rng.nextDouble() * 0.4,
      endOpacity: 0,
      endScale: 0.4,
      scaleCurve: Curves.easeOut,
      opacityCurve: Curves.easeIn,
      // The same gold third carries the trails.
      trailEnabled: isGold,
      trailLength: 8,
    );
  }

  @override
  Widget build(BuildContext context) {
    return IgnorePointer(
      child: Particles(
        particles: const [],
        width: widget.size.width,
        height: widget.size.height,
        burstEmitters: _emitters,
      ),
    );
  }
}

class _StreakContent extends StatelessWidget {
  const _StreakContent({required this.size});

  final Size size;

  @override
  Widget build(BuildContext context) {
    final topSpace =
        (size.height * _badgeCenterY - _badgeSize / 2).clamp(0.0, size.height);

    return Column(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        SizedBox(height: topSpace),
        const _StreakBadge(),
        const SizedBox(height: 28),
        Text('Thirty days.',
            style: GuideTheme.serif(size: 32, weight: FontWeight.w600)),
        const SizedBox(height: 8),
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 40),
          child: Text(
            'Your longest run yet — the chain holds.',
            textAlign: TextAlign.center,
            style: GuideTheme.serif(size: 16, color: GuideTheme.mutedInk),
          ),
        ),
        const Spacer(),
        const _ChainRow(),
        const SizedBox(height: 14),
        Text(
          'day 31 starts tomorrow, 6:00 am',
          style: GuideTheme.mono(size: 11, color: GuideTheme.faintInk),
        ),
        const SizedBox(height: 28),
        const _KeepGoingButton(),
        const SizedBox(height: 28),
      ],
    );
  }
}

class _StreakBadge extends StatelessWidget {
  const _StreakBadge();

  @override
  Widget build(BuildContext context) {
    return Container(
      width: _badgeSize,
      height: _badgeSize,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        color: GuideTheme.card,
        border: Border.all(color: _gold, width: 5),
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text('30',
              style: GuideTheme.serif(size: 56, weight: FontWeight.w600)),
          Text(
            'DAYS',
            style: GuideTheme.mono(
              size: 10,
              color: GuideTheme.rust,
              letterSpacing: 2,
            ),
          ),
        ],
      ),
    );
  }
}

class _ChainRow extends StatelessWidget {
  const _ChainRow();

  static const _total = 15;

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: List.generate(_total, (index) {
        final filled = index < _total - 1;
        return Container(
          width: 12,
          height: 12,
          margin: const EdgeInsets.symmetric(horizontal: 4),
          decoration: BoxDecoration(
            shape: BoxShape.circle,
            color: filled ? _gold : Colors.transparent,
            border: filled ? null : Border.all(color: _chainEmpty, width: 1.5),
          ),
        );
      }),
    );
  }
}

class _KeepGoingButton extends StatelessWidget {
  const _KeepGoingButton();

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 24),
      child: Container(
        height: 56,
        width: double.infinity,
        alignment: Alignment.center,
        decoration: BoxDecoration(
          color: GuideTheme.ink,
          borderRadius: BorderRadius.circular(12),
        ),
        child: Text(
          'Keep it going',
          style: GuideTheme.serif(size: 17, color: GuideTheme.paper),
        ),
      ),
    );
  }
}

import 'dart:math';

import 'package:flutter/material.dart';
import 'package:particles_flutter/engine.dart';

import '../guide/specimen.dart';
import '../guide/specimen_scaffold.dart';
import '../guide/theme.dart';

/// Specimen 09 — a skywatching app. Ninety stars drift almost imperceptibly
/// across a wrap-around sky; `connectDots` draws a line between any two that
/// pass within the engine's built-in 110px threshold, so the constellation
/// figure is never authored — it emerges, holds for a moment, and dissolves as
/// the field turns.
final Specimen constellationsSpecimen = Specimen(
  number: 9,
  title: 'Constellations',
  subtitle: 'stars joined by passing lines',
  apiLabel: 'n=90 · connectDots · BoundType.WrapAround',
  builder: (_) => const ConstellationsScene(),
);

// Scene palette (night sky).
const _sceneBg = Color(0xFF0E1420);
const _starBright = Color(0xFFE8E9EC);
const _starFaint = Color(0xFF8D94AD);
const _outlineBorder = Color(0xFF3A4A66);

/// Total stars in the field.
const _starCount = 90;

/// How many of them are the larger "bright" stars.
const _brightCount = 8;

class ConstellationsScene extends StatelessWidget {
  const ConstellationsScene({super.key});

  @override
  Widget build(BuildContext context) {
    return SpecimenScaffold(
      specimen: constellationsSpecimen,
      background: _sceneBg,
      child: LayoutBuilder(
        builder: (context, constraints) {
          final size = Size(constraints.maxWidth, constraints.maxHeight);
          return KeyedSubtree(
            key: ValueKey(size),
            child: Stack(
              children: [
                Positioned.fill(child: _StarField(size: size)),
                const Positioned.fill(child: _SkyContent()),
              ],
            ),
          );
        },
      ),
    );
  }
}

/// The particle engine layer. [Particles] captures its list once at
/// initialization, so the stars are built in [initState] and the whole subtree
/// is re-keyed when the layout size changes.
class _StarField extends StatefulWidget {
  const _StarField({required this.size});

  final Size size;

  @override
  State<_StarField> createState() => _StarFieldState();
}

class _StarFieldState extends State<_StarField> {
  final _rng = Random(9);
  late final List<Particle> _stars;

  @override
  void initState() {
    super.initState();
    _stars = List.generate(_starCount, _star);
  }

  Particle _star(int index) {
    final bright = index < _brightCount;
    // Drift is deliberately tiny: neighbours take seconds to cross the
    // connection threshold, so lines fade in and out rather than flicker.
    return CircularParticle(
      radius: bright
          ? 3.5 + _rng.nextDouble()
          : 1.5 + _rng.nextDouble() * 1.5,
      color: bright
          ? _starBright
          : _starFaint.withValues(alpha: 0.45 + _rng.nextDouble() * 0.35),
      // Only the eight bright stars bloom; the other 82 stay flat specks, so
      // the field keeps its depth without paying for 90 blurs a frame.
      glowSigma: bright ? 2.5 : 0,
      velocity: Offset(
        (_rng.nextDouble() * 2 - 1) * 6,
        (_rng.nextDouble() * 2 - 1) * 6,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return IgnorePointer(
      child: Particles(
        particles: _stars,
        width: widget.size.width,
        height: widget.size.height,
        connectDots: true,
        // Hairline steel-blue lines that fade out toward the connection
        // threshold — constellation etchings, not a spider web.
        connectionStyle: const ConnectionStyle(
          maxDistance: 120,
          color: Color(0xBF4A5E82),
          strokeWidth: 1.0,
          distanceFade: true,
        ),
        boundType: BoundType.WrapAround,
      ),
    );
  }
}

class _SkyContent extends StatelessWidget {
  const _SkyContent();

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(30),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const SizedBox(height: 52),
          Text(
            'OVERHEAD NOW',
            style: GuideTheme.mono(
              size: 11,
              color: _starFaint,
              letterSpacing: 2,
            ),
          ),
          const SizedBox(height: 6),
          Text(
            'Cassiopeia',
            style: GuideTheme.serif(
              size: 34,
              weight: FontWeight.w600,
              color: _starBright,
            ),
          ),
          const Spacer(),
          Text(
            'The stars drift slowly; lines appear only when neighbours pass '
            'close — the sky redraws itself as it turns.',
            style: GuideTheme.serif(
              size: 14,
              color: _starFaint,
              height: 1.5,
              style: FontStyle.italic,
            ),
          ),
          const SizedBox(height: 20),
          const _SkyButtons(),
        ],
      ),
    );
  }
}

class _SkyButtons extends StatelessWidget {
  const _SkyButtons();

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Expanded(
          child: Container(
            height: 48,
            alignment: Alignment.center,
            decoration: BoxDecoration(
              color: _starBright,
              borderRadius: BorderRadius.circular(11),
            ),
            child: Text(
              'Point at the sky',
              style: GuideTheme.serif(size: 15, color: _sceneBg),
            ),
          ),
        ),
        const SizedBox(width: 10),
        Container(
          width: 120,
          height: 48,
          alignment: Alignment.center,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(11),
            border: Border.all(color: _outlineBorder),
          ),
          child: Text(
            'Tonight',
            style: GuideTheme.serif(size: 15, color: _starBright),
          ),
        ),
      ],
    );
  }
}

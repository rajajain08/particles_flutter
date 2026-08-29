import 'dart:math';

import 'package:flutter/material.dart';
import 'package:particles_flutter/engine.dart';
import 'package:particles_flutter/physics.dart';
import 'package:particles_flutter/shapes.dart';

import '../guide/specimen.dart';
import '../guide/specimen_scaffold.dart';
import '../guide/theme.dart';

/// Specimen 02 — a weather card whose sky panel carries its own rain field.
final Specimen weatherSpecimen = Specimen(
  number: 2,
  title: 'Live weather card',
  subtitle: 'rain that leans with the wind',
  apiLabel: 'n=140 · gravity · maxSpeed · BoundType.WrapAround',
  builder: (_) => const WeatherScene(),
);

// Scene palette.
const _sceneBg = Color(0xFFF4F3EF);
const _sky = Color(0xFF2C3E52);
const _rainPale = Color(0xFF9DB8D4);
const _rainBright = Color(0xFFB8CDE4);

class WeatherScene extends StatelessWidget {
  const WeatherScene({super.key});

  @override
  Widget build(BuildContext context) {
    return SpecimenScaffold(
      specimen: weatherSpecimen,
      background: _sceneBg,
      child: LayoutBuilder(
        builder: (context, constraints) {
          final cardHeight = constraints.maxHeight * 0.45;
          return Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              const _Header(),
              SizedBox(
                height: cardHeight,
                child: const _SkyCard(),
              ),
              const Expanded(
                child: SingleChildScrollView(
                  padding: EdgeInsets.fromLTRB(24, 4, 24, 24),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      _ForecastRow(),
                      SizedBox(height: 18),
                      _Caption(),
                    ],
                  ),
                ),
              ),
            ],
          );
        },
      ),
    );
  }
}

class _Header extends StatelessWidget {
  const _Header();

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(28),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Thursday, late evening',
            style: GuideTheme.serif(size: 16, color: GuideTheme.mutedInk),
          ),
          const SizedBox(height: 4),
          Text(
            'Mumbai',
            style: GuideTheme.serif(size: 38, weight: FontWeight.w600),
          ),
        ],
      ),
    );
  }
}

/// The dark sky panel. The rain lives inside this card only — its [Particles]
/// field is sized to the card by the inner [LayoutBuilder] and clipped by the
/// surrounding [ClipRRect].
class _SkyCard extends StatelessWidget {
  const _SkyCard();

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(horizontal: 24),
      decoration: BoxDecoration(
        color: _sky,
        borderRadius: BorderRadius.circular(18),
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(18),
        child: Stack(
          fit: StackFit.expand,
          children: [
            LayoutBuilder(
              builder: (context, constraints) {
                final size = Size(
                  constraints.maxWidth,
                  constraints.maxHeight,
                );
                // The engine captures its particle list once at init, so the
                // list is built once per size and re-keyed when the card
                // resizes.
                return KeyedSubtree(
                  key: ValueKey(size),
                  child: _RainField(size: size),
                );
              },
            ),
            Padding(
              padding: const EdgeInsets.all(22),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.end,
                children: [
                  Text(
                    '29°',
                    style: GuideTheme.serif(
                      size: 64,
                      weight: FontWeight.w600,
                      color: Colors.white,
                      height: 1.0,
                    ),
                  ),
                  const Spacer(),
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.end,
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Text(
                        'heavy rain',
                        textAlign: TextAlign.right,
                        style:
                            GuideTheme.serif(size: 15, color: _rainBright),
                      ),
                      Text(
                        'gusts 32 km/h',
                        textAlign: TextAlign.right,
                        style:
                            GuideTheme.serif(size: 15, color: _rainBright),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

/// 140 thin rectangular streaks falling fast with a constant sideways lean,
/// wrapping forever inside the card.
class _RainField extends StatefulWidget {
  const _RainField({required this.size});

  final Size size;

  @override
  State<_RainField> createState() => _RainFieldState();
}

class _RainFieldState extends State<_RainField> {
  static const _dropCount = 140;

  /// Base fall vector: fast down, steady lean with the wind reading.
  static const _baseVelocity = Offset(70, 215);

  late final List<Particle> _drops;

  /// Rotation that aligns a vertically-drawn streak with its own velocity.
  ///
  /// [Particle.paint] rotates the canvas by `rotation` (positive = clockwise,
  /// y pointing down) before the rect is drawn, so the rect's long axis (0, 1)
  /// lands on (-sin r, cos r). Matching that to (vx, vy) gives
  /// `sin r = -vx / |v|`, `cos r = vy / |v|` — i.e. `r = -atan2(vx, vy)`.
  /// For (120, 370) that is about -18°: the leading (lower) end swings into
  /// the direction of travel.
  static double _leanFor(Offset velocity) => -atan2(velocity.dx, velocity.dy);

  @override
  void initState() {
    super.initState();
    final rng = Random(29);
    _drops = List<Particle>.generate(_dropCount, (index) {
      // Scale both components together so every streak keeps the same lean.
      final speed = 0.85 + rng.nextDouble() * 0.35;
      final bright = rng.nextBool();
      final velocity = Offset(
        _baseVelocity.dx * speed,
        _baseVelocity.dy * speed,
      );
      final drop = RectangularParticle(
        width: 1.5,
        height: 12 + rng.nextDouble() * 14,
        color: (bright ? _rainBright : _rainPale)
            .withValues(alpha: 0.35 + rng.nextDouble() * 0.45),
        velocity: velocity,
        // No spin — the lean is set once and held for the streak's life.
        rotationSpeed: 0,
      );
      drop.updateRotation = _leanFor(velocity);
      return drop;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Particles(
      particles: _drops,
      width: widget.size.width,
      height: widget.size.height,
      boundType: BoundType.WrapAround,
      particlePhysics: const ParticlePhysics(
        gravityScale: 25,
        maxSpeed: 290,
      ),
    );
  }
}

class _ForecastRow extends StatelessWidget {
  const _ForecastRow();

  static const _days = ['Fri', 'Sat', 'Sun', 'Mon', 'Tue'];
  static const _temps = ['28°', '27°', '29°', '30°', '31°'];
  static const _dots = [
    Color(0xFF3D7DC4),
    Color(0xFF3D7DC4),
    Color(0xFF9DB8D4),
    Color(0xFFC98A1B),
    Color(0xFFC98A1B),
  ];

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 16, horizontal: 22),
      decoration: BoxDecoration(
        color: GuideTheme.card,
        border: Border.all(color: GuideTheme.border),
        borderRadius: BorderRadius.circular(14),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          for (var i = 0; i < _days.length; i++)
            Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Text(
                  _days[i],
                  style: GuideTheme.mono(size: 11, color: GuideTheme.mutedInk),
                ),
                const SizedBox(height: 6),
                Text(
                  _temps[i],
                  style: GuideTheme.serif(size: 18),
                ),
                const SizedBox(height: 8),
                Container(
                  width: 6,
                  height: 6,
                  decoration: BoxDecoration(
                    color: _dots[i],
                    shape: BoxShape.circle,
                  ),
                ),
              ],
            ),
        ],
      ),
    );
  }
}

class _Caption extends StatelessWidget {
  const _Caption();

  @override
  Widget build(BuildContext context) {
    return Text(
      "The rain in the card falls at the forecast's real intensity and leans "
      'with the wind reading.',
      style: GuideTheme.serif(
        size: 14,
        color: GuideTheme.mutedInk,
        style: FontStyle.italic,
        height: 1.5,
      ),
    );
  }
}

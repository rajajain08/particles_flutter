import 'dart:math';

import 'package:flutter/material.dart';
import 'package:particles_flutter/engine.dart';
import 'package:particles_flutter/physics.dart';

import '../guide/specimen.dart';
import '../guide/specimen_scaffold.dart';
import '../guide/theme.dart';

/// Specimen 08 — a four-page children's storybook you can read through.
///
/// Mina the spark is a glowing [CircularParticle] (`glowSigma`) staged
/// differently on every page: an [Attractor] orbit while she waits, a towed
/// arc with a trail while she flies, a repeating [BurstEmitter] drizzle while
/// she rains gold, and a parked spark beside a wrapping river of motes at the
/// end. Tapping the sky sprinkles stardust on any page.
final Specimen storybookSpecimen = Specimen(
  number: 8,
  title: "Mina's bedtime story",
  subtitle: 'four pages of stardust',
  apiLabel: 'n=200 · trails · endOpacity · tap bursts',
  builder: (_) => const StorybookScene(),
);

/// Night indigo page.
const _sceneBackground = Color(0xFF141A2E);

/// Moonlight / paper white, used for the moon, the stars and the story type.
const _moonlight = Color(0xFFECE7DB);

/// Mina's warm spark color — also the lit window and the stardust.
const _sparkGold = Color(0xFFE0A83C);

/// Far and near hill silhouettes.
const _farHill = Color(0xFF1B2440);
const _nearHill = Color(0xFF202B4D);

/// Muted metadata ink for the page number and the page arrows.
const _metaInk = Color(0xFF8D94AD);

/// Faint stars, as (x, y) fractions of the sky and their opacity.
const _stars = <(double, double, double)>[
  (0.08, 0.14, 0.5),
  (0.20, 0.30, 0.4),
  (0.34, 0.09, 0.6),
  (0.47, 0.24, 0.45),
  (0.62, 0.40, 0.4),
  (0.90, 0.46, 0.55),
];

/// The story, one entry per page.
const _storyPages = <String>[
  'In the village of Long Shadows, the lamps had all gone out. '
      'Only Mina, the smallest spark, still burned.',
  'She had one job tonight: light the long way home. So she flew, and left '
      'a little of herself behind at every turn.',
  "The wind scattered her stardust. 'More,' whispered the dark. "
      'So Mina shook her wings and it rained gold.',
  'And when she reached the little lit window, the whole valley behind her '
      'was a river of light. Goodnight, Mina.',
];

/// Where the dim fireflies of page one hang, as fractions of the sky.
const _fireflySpots = <(double, double)>[
  (0.34, 0.44),
  (0.44, 0.28),
  (0.55, 0.21),
  (0.52, 0.55),
  (0.64, 0.36),
  (0.63, 0.70),
  (0.75, 0.60),
  (0.85, 0.29),
  (0.89, 0.67),
];

/// Quadratic bezier that Mina is towed along, in fractions of the sky size:
/// she leaves the left edge, rises over the hills and settles to the right.
const _arcStart = Offset(0.08, 0.62);
const _arcControl = Offset(0.50, 0.16);
const _arcEnd = Offset(0.92, 0.55);

class StorybookScene extends StatefulWidget {
  const StorybookScene({super.key});

  @override
  State<StorybookScene> createState() => _StorybookSceneState();
}

class _StorybookSceneState extends State<StorybookScene> {
  /// Which page is open (0-based). Lives OUTSIDE the engine's key so turning
  /// a page swaps the whole staging cleanly.
  int _page = 0;

  void _turnTo(int page) => setState(() => _page = page);

  @override
  Widget build(BuildContext context) {
    return SpecimenScaffold(
      specimen: storybookSpecimen,
      background: _sceneBackground,
      child: Column(
        children: [
          Expanded(
            child: LayoutBuilder(
              builder: (context, constraints) {
                final size = Size(constraints.maxWidth, constraints.maxHeight);
                // The engine captures its particles and emitters ONCE at
                // init and ignores rebuilds, so a new key is what re-stages
                // the sky — for a resize and for a page turn alike.
                return KeyedSubtree(
                  key: ValueKey((size, _page)),
                  child: _ValleyStage(size: size, page: _page),
                );
              },
            ),
          ),
          _StoryPanel(
            page: _page,
            onBack: _page > 0 ? () => _turnTo(_page - 1) : null,
            onNext:
                _page < _storyPages.length - 1 ? () => _turnTo(_page + 1) : null,
          ),
        ],
      ),
    );
  }
}

/// The animated half of the page: static scenery, Mina as this page stages
/// her, and the tap bursts that stay live throughout the story.
class _ValleyStage extends StatefulWidget {
  const _ValleyStage({required this.size, required this.page});

  final Size size;
  final int page;

  @override
  State<_ValleyStage> createState() => _ValleyStageState();
}

class _ValleyStageState extends State<_ValleyStage>
    with SingleTickerProviderStateMixin {
  static const _stardustCount = 24;

  final _rng = Random();
  final _burstController = BurstEmitterController();

  late final AnimationController _journey;
  late final List<Particle> _particles;
  late final List<BurstEmitter> _burstEmitters;
  late final ParticlePhysics _physics;
  late final BoundType _boundType;

  /// Where the last tap landed — read fresh by the burst emitter's position
  /// closure, so it never needs the engine to rebuild.
  Offset _sprinklePoint = Offset.zero;

  @override
  void initState() {
    super.initState();

    // The tap-sky stardust is the one thing every page shares.
    final tapBurst = Emitter.burst(
      position: (_) => _sprinklePoint,
      particleCount: _stardustCount,
      positionRadius: 4,
      pattern: const RadialBurst(minSpeed: 20, maxSpeed: 90),
      physics: const ParticlePhysics(gravityScale: 0),
      particleFactory: _stardust,
      controller: _burstController,
    );

    switch (widget.page) {
      case 0:
        _stageAlone(tapBurst);
      case 2:
        _stageRainOfGold(tapBurst);
      case 3:
        _stageWindow(tapBurst);
      default:
        _stageLongWayHome(tapBurst);
    }
  }

  /// Page 1 — Mina alone low-left, orbiting a slow attractor, with dim
  /// fireflies hanging in the dark around her.
  void _stageAlone(BurstEmitter tapBurst) {
    _journey = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 11),
    )..repeat();

    final anchor = Offset(widget.size.width * 0.20, widget.size.height * 0.66);

    _particles = [
      _mina(startPosition: anchor + const Offset(34, 0)),
      for (final (x, y) in _fireflySpots)
        CircularParticle(
          radius: 1.3 + _rng.nextDouble() * 0.7,
          color: _sparkGold,
          glowSigma: 3,
          startOpacity: 0.35 + _rng.nextDouble() * 0.2,
          startPosition: Offset(widget.size.width * x, widget.size.height * y),
          velocity: Offset(
            (_rng.nextDouble() * 2 - 1) * 7,
            (_rng.nextDouble() * 2 - 1) * 7,
          ),
        ),
    ];

    // A short-reach attractor: it holds Mina in her little circle without
    // hauling the whole swarm of fireflies across the valley.
    _physics = ParticlePhysics(
      gravityScale: 0,
      maxSpeed: 42,
      attractors: [
        Attractor(
          position: () {
            final a = _journey.value * 2 * pi;
            return anchor + Offset(cos(a) * 34, sin(a) * 22);
          },
          strength: 70,
          radius: 170,
        ),
      ],
    );

    // Fireflies drift forever rather than wandering off the page.
    _boundType = BoundType.WrapAround;
    _burstEmitters = [tapBurst];
  }

  /// Page 2 — the original staging: Mina towed along the arc, her stardust
  /// drawn as a long trail across the valley.
  void _stageLongWayHome(BurstEmitter tapBurst) {
    _startArcJourney();

    _particles = [
      _mina(
        startPosition: _arcPoint(0),
        velocity: const Offset(20, -10),
        trailLength: 25,
      ),
    ];
    _physics = _arcPhysics();
    _boundType = BoundType.None;
    _burstEmitters = [tapBurst];
  }

  /// Page 3 — same flight, but a repeating burst emitter drizzles motes out
  /// of Mina's path the whole way across.
  void _stageRainOfGold(BurstEmitter tapBurst) {
    _startArcJourney();

    _particles = [
      _mina(
        startPosition: _arcPoint(0),
        velocity: const Offset(20, -10),
        trailLength: 14,
      ),
    ];
    _physics = _arcPhysics();
    _boundType = BoundType.None;
    _burstEmitters = [
      // repeatCount 0 = forever; the position closure follows Mina's arc, so
      // the gold rains from wherever she happens to be.
      Emitter.burst(
        position: (_) => _arcPoint(Curves.easeInOut.transform(_journey.value)),
        particleCount: 6,
        positionRadius: 6,
        repeatCount: 0,
        repeatInterval: const Duration(milliseconds: 700),
        pattern: const RadialBurst(minSpeed: 8, maxSpeed: 34),
        physics: const ParticlePhysics(gravityScale: 7),
        particleFactory: _goldRain,
      ),
      tapBurst,
    ];
  }

  /// Page 4 — Mina parked beside the lit window, the valley behind her a slow
  /// river of motes drifting along the arc she flew.
  void _stageWindow(BurstEmitter tapBurst) {
    _journey = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 7),
    )..repeat(reverse: true);

    final park = _windowCenter() + const Offset(22, -18);

    _particles = [
      _mina(startPosition: park, velocity: const Offset(6, -4)),
      for (int i = 0; i < 20; i++) _riverMote(i / 20),
    ];

    _physics = ParticlePhysics(
      gravityScale: 0,
      maxSpeed: 30,
      attractors: [
        // Parked: a fixed point by the window that breathes very slightly, so
        // Mina bobs in place instead of sitting perfectly still.
        Attractor(
          position: () =>
              park + Offset(0, sin(_journey.value * 2 * pi) * 5),
          strength: 45,
          radius: 90,
        ),
      ],
    );

    // The river keeps flowing: motes that reach an edge come back on the far
    // side instead of draining away.
    _boundType = BoundType.WrapAround;
    _burstEmitters = [tapBurst];
  }

  /// Drives the attractor along the arc, out and gently back again.
  void _startArcJourney() {
    _journey = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 9),
    )..repeat(reverse: true);
  }

  /// The attractor's position closure is evaluated every frame, so reading
  /// the controller here is all the animation Mina needs.
  ParticlePhysics _arcPhysics() {
    return ParticlePhysics(
      gravityScale: 0,
      maxSpeed: 90,
      attractors: [
        Attractor(
          position: () => _arcPoint(Curves.easeInOut.transform(_journey.value)),
          strength: 120,
          radius: 900,
        ),
      ],
    );
  }

  /// Mina herself: one bright spark with a soft glow halo.
  CircularParticle _mina({
    required Offset startPosition,
    Offset velocity = const Offset(0, -12),
    int trailLength = 0,
  }) {
    return CircularParticle(
      radius: 4.5,
      color: _sparkGold,
      glowSigma: 6,
      velocity: velocity,
      startPosition: startPosition,
      trailEnabled: trailLength > 0,
      trailLength: trailLength > 0 ? trailLength : 10,
    );
  }

  /// One mote of the page-four river, launched along the arc's tangent.
  CircularParticle _riverMote(double t) {
    final direction = _arcTangent(t);
    final speed = 10 + _rng.nextDouble() * 8;
    return CircularParticle(
      radius: 1.2 + _rng.nextDouble(),
      color: _sparkGold,
      glowSigma: 3,
      startOpacity: 0.55 + _rng.nextDouble() * 0.25,
      startPosition: _arcPoint(t),
      velocity: direction * speed,
    );
  }

  @override
  void dispose() {
    _journey.dispose();
    _burstController.stop();
    super.dispose();
  }

  /// Point at [t] (0..1) along the quadratic bezier arc across the valley.
  Offset _arcPoint(double t) {
    final u = 1 - t;
    final fx = u * u * _arcStart.dx +
        2 * u * t * _arcControl.dx +
        t * t * _arcEnd.dx;
    final fy = u * u * _arcStart.dy +
        2 * u * t * _arcControl.dy +
        t * t * _arcEnd.dy;
    return Offset(fx * widget.size.width, fy * widget.size.height);
  }

  /// Unit vector pointing along the arc at [t], in pixels.
  Offset _arcTangent(double t) {
    final u = 1 - t;
    final dx = (2 * u * (_arcControl.dx - _arcStart.dx) +
            2 * t * (_arcEnd.dx - _arcControl.dx)) *
        widget.size.width;
    final dy = (2 * u * (_arcControl.dy - _arcStart.dy) +
            2 * t * (_arcEnd.dy - _arcControl.dy)) *
        widget.size.height;
    final length = sqrt(dx * dx + dy * dy);
    if (length == 0) return const Offset(1, 0);
    return Offset(dx / length, dy / length);
  }

  /// Center of the one lit window, mirroring the scenery's own math.
  Offset _windowCenter() {
    final farHillHeight = widget.size.height * 0.34;
    return Offset(
      widget.size.width * 0.18 + 6,
      widget.size.height - farHillHeight * 0.48 - 8,
    );
  }

  Particle _stardust(int index, int total) {
    return CircularParticle(
      radius: 1.5 + _rng.nextDouble(),
      color: _sparkGold,
      // Overwritten by the emitter's RadialBurst pattern on every burst.
      velocity: Offset.zero,
      lifetime: 1.4,
      endOpacity: 0.0,
      opacityCurve: Curves.easeOutCubic,
    );
  }

  Particle _goldRain(int index, int total) {
    return CircularParticle(
      radius: 1.1 + _rng.nextDouble() * 1.2,
      color: _sparkGold,
      glowSigma: 2.5,
      velocity: Offset.zero,
      lifetime: 2.0,
      endOpacity: 0.0,
      opacityCurve: Curves.easeOutCubic,
    );
  }

  void _sprinkle(TapDownDetails details) {
    _sprinklePoint = details.localPosition;
    _burstController.trigger();
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      behavior: HitTestBehavior.opaque,
      onTapDown: _sprinkle,
      child: Stack(
        children: [
          Positioned.fill(child: _Scenery(size: widget.size)),
          Positioned.fill(
            child: IgnorePointer(
              child: Particles(
                particles: _particles,
                burstEmitters: _burstEmitters,
                particlePhysics: _physics,
                boundType: _boundType,
                width: widget.size.width,
                height: widget.size.height,
              ),
            ),
          ),
        ],
      ),
    );
  }
}

/// Everything that never moves: moon, stars, hills and the one lit window.
class _Scenery extends StatelessWidget {
  const _Scenery({required this.size});

  final Size size;

  @override
  Widget build(BuildContext context) {
    final farHillHeight = size.height * 0.34;
    final nearHillHeight = size.height * 0.26;

    return Stack(
      children: [
        for (final (x, y, opacity) in _stars)
          Positioned(
            left: size.width * x,
            top: size.height * y,
            child: Container(
              width: 2,
              height: 2,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: _moonlight.withValues(alpha: opacity),
              ),
            ),
          ),
        Positioned(
          right: size.width * 0.12,
          top: size.height * 0.08,
          child: Container(
            width: 74,
            height: 74,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              color: _moonlight,
              boxShadow: [
                BoxShadow(
                  color: _moonlight.withValues(alpha: 0.22),
                  blurRadius: 46,
                  spreadRadius: 10,
                ),
              ],
            ),
          ),
        ),
        // Far hill, carrying the one window still awake.
        Positioned(
          left: -size.width * 0.12,
          bottom: 0,
          child: _Hill(
            width: size.width * 0.85,
            height: farHillHeight,
            color: _farHill,
          ),
        ),
        Positioned(
          left: size.width * 0.18,
          bottom: farHillHeight * 0.48,
          child: Container(
            width: 12,
            height: 16,
            decoration: BoxDecoration(
              color: _sparkGold,
              borderRadius: BorderRadius.circular(2),
            ),
          ),
        ),
        // Near hill, overlapping the far one from the right.
        Positioned(
          right: -size.width * 0.15,
          bottom: 0,
          child: _Hill(
            width: size.width * 0.90,
            height: nearHillHeight,
            color: _nearHill,
          ),
        ),
      ],
    );
  }
}

/// A single rounded-top hill silhouette.
class _Hill extends StatelessWidget {
  const _Hill({
    required this.width,
    required this.height,
    required this.color,
  });

  final double width;
  final double height;
  final Color color;

  @override
  Widget build(BuildContext context) {
    final radius = Radius.elliptical(width * 0.5, height * 0.9);
    return Container(
      width: width,
      height: height,
      decoration: BoxDecoration(
        color: color,
        borderRadius: BorderRadius.only(topLeft: radius, topRight: radius),
      ),
    );
  }
}

/// The story text at the foot of the page, with the page turn arrows.
class _StoryPanel extends StatelessWidget {
  const _StoryPanel({
    required this.page,
    required this.onBack,
    required this.onNext,
  });

  /// 0-based index into [_storyPages].
  final int page;

  /// Null on the first page / last page — that arrow is hidden.
  final VoidCallback? onBack;
  final VoidCallback? onNext;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(30, 26, 30, 22),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisSize: MainAxisSize.min,
        children: [
          // A floor under the type so the sky doesn't resize as pages turn.
          ConstrainedBox(
            constraints: const BoxConstraints(minHeight: 96),
            child: Text(
              _storyPages[page],
              style: GuideTheme.serif(
                size: 20,
                color: _moonlight,
                height: 1.5,
                style: FontStyle.italic,
              ),
            ),
          ),
          const SizedBox(height: 10),
          Row(
            children: [
              Text(
                'page ${page + 1} of ${_storyPages.length}',
                style: GuideTheme.mono(size: 11, color: _metaInk),
              ),
              const SizedBox(width: 16),
              Expanded(
                child: Text(
                  'tap the sky to sprinkle stardust',
                  textAlign: TextAlign.right,
                  style: GuideTheme.mono(size: 11, color: _sparkGold),
                ),
              ),
              const SizedBox(width: 8),
              _PageArrow(
                icon: Icons.arrow_back_ios_new,
                label: 'previous page',
                onTap: onBack,
              ),
              _PageArrow(
                icon: Icons.arrow_forward_ios,
                label: 'next page',
                onTap: onNext,
              ),
            ],
          ),
        ],
      ),
    );
  }
}

/// One page-turn chevron. A null [onTap] leaves the slot blank but reserved,
/// so the row doesn't shift as the first/last page hides an arrow.
class _PageArrow extends StatelessWidget {
  const _PageArrow({
    required this.icon,
    required this.label,
    required this.onTap,
  });

  final IconData icon;
  final String label;
  final VoidCallback? onTap;

  @override
  Widget build(BuildContext context) {
    const slot = 34.0;
    if (onTap == null) return const SizedBox(width: slot, height: slot);
    return Semantics(
      button: true,
      label: label,
      child: GestureDetector(
        behavior: HitTestBehavior.opaque,
        onTap: onTap,
        child: SizedBox(
          width: slot,
          height: slot,
          child: Icon(icon, size: 14, color: _metaInk),
        ),
      ),
    );
  }
}

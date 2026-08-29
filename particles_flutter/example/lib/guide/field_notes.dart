/// The "how do I build this?" layer of the guide: per-specimen notes shown
/// when the specimen band is tapped. Content lives here, not in the scene
/// files — scenes stay pure app screens.
class FieldNotes {
  const FieldNotes({
    required this.what,
    required this.snippet,
    required this.apis,
  });

  /// One short paragraph: what the scene demonstrates and the trick in it.
  final String what;

  /// A minimal, copy-pasteable extract of the real scene code.
  final String snippet;

  /// API name → one-line explanation.
  final List<(String, String)> apis;
}

const Map<int, FieldNotes> fieldNotes = {
  1: FieldNotes(
    what: 'Three confetti cannons on one tap: two crossing streams from the '
        'bottom corners plus a pop from the checkmark. Each cannon needs its '
        'own controller — a trigger is consumed by the first emitter that '
        'sees it.',
    snippet: '''
final cannon = BurstEmitterController();

Emitter.burst(
  position: (size) => Offset(-10, size.height * 0.92),
  particleCount: 70,
  pattern: ConeBurst(
    angle: -pi / 2 + 0.5, spread: 0.5,
    minSpeed: 420, maxSpeed: 680,
  ),
  physics: ParticlePhysics(gravityScale: 260),
  particleFactory: confettiPiece,
  controller: cannon,
);

// on payment success:
cannon.trigger();''',
    apis: [
      ('Emitter.burst', 'fire a fixed count of particles on demand'),
      ('ConeBurst', 'velocities inside a cone: angle, spread, speed range'),
      ('BurstEmitterController', 'trigger() replays the burst — one per emitter'),
      ('gravityScale', 'per-burst gravity: paper drifts, stones drop'),
    ],
  ),
  2: FieldNotes(
    what: 'Rain inside a card: thin rectangles falling with a constant '
        'sideways lean. The streak is rotated once to match its velocity via '
        'updateRotation, and WrapAround recycles every drop.',
    snippet: '''
final drop = RectangularParticle(
  width: 1.5, height: 18,
  color: const Color(0xFF9DB8D4),
  velocity: const Offset(70, 215), // the lean
  lifetime: null, // rains forever
)..updateRotation = -atan2(70, 215); // align streak

Particles(
  particles: drops,
  width: cardW, height: cardH,
  boundType: BoundType.WrapAround,
  particlePhysics: ParticlePhysics(
    gravityScale: 25, maxSpeed: 290),
);''',
    apis: [
      ('RectangularParticle', 'a rotatable rectangle — streaks, paper, sparks'),
      ('updateRotation', 'set a static rotation after construction'),
      ('BoundType.WrapAround', 'exit one edge, re-enter the other'),
      ('maxSpeed', 'caps velocity after gravity is applied'),
    ],
  ),
  3: FieldNotes(
    what: 'A celebration that never quite stops: two alternating radial '
        'emitters behind the badge fire every second, sparks shrink and fade '
        'as they arc down.',
    snippet: '''
Emitter.burst(
  position: (size) => badgeCenter,
  particleCount: 45,
  pattern: RadialBurst(minSpeed: 90, maxSpeed: 260),
  repeatCount: 0, // infinite
  repeatInterval: Duration(milliseconds: 2000),
  initialDelay: Duration(milliseconds: 1000),
  enableTrails: true,
  physics: ParticlePhysics(gravityScale: 25),
  particleFactory: (i, n) => CircularParticle(
    radius: 2.5, color: gold,
    velocity: Offset.zero,
    lifetime: 1.8, endOpacity: 0, endScale: 0.4,
    trailEnabled: i % 3 == 0, glowSigma: 2,
  ),
);''',
    apis: [
      ('RadialBurst', 'even spray in all directions'),
      ('repeatCount: 0', 'repeat forever on repeatInterval'),
      ('endScale', 'grow or shrink over the particle\'s lifetime'),
      ('trailEnabled', 'per-particle motion trail'),
    ],
  ),
  4: FieldNotes(
    what: 'The word is data: ParticleShapeSampler renders text offscreen and '
        'returns points covering its pixels. Each point becomes a particle\'s '
        'startPosition; a spring pulls every grain back home after you '
        'scatter it.',
    snippet: '''
final points = await ParticleShapeSampler.fromText(
  'welcome',
  style: GoogleFonts.newsreader(
    fontSize: 88, fontWeight: FontWeight.w600),
  step: 3, maxPoints: 900,
  offset: centerOffset,
);

final grains = [
  for (final p in points)
    CircularParticle(
      radius: 1.3, color: ink,
      velocity: Offset.zero,
      startPosition: p, // engine won't move it
    ),
];''',
    apis: [
      ('ParticleShapeSampler.fromText', 'text → sample points, async'),
      ('startPosition', 'explicit spawn point the engine respects'),
      ('Attractor (negative)', 'repel from the pointer'),
      ('step / maxPoints', 'density and cap of the sampling'),
    ],
  ),
  5: FieldNotes(
    what: 'Two dozen fireflies with real glow: glowSigma draws a blurred halo '
        'behind each particle, and the start=end=0 opacity pair is the '
        'engine\'s triangle fade — in, peak at midlife, out.',
    snippet: '''
CircularParticle(
  radius: 2 + rng.nextDouble() * 2,
  color: const Color(0xFFE0A83C),
  glowSigma: 3 + rng.nextDouble() * 2, // halo
  velocity: slowDrift,
  lifetime: 4 + rng.nextDouble() * 4,
  startOpacity: 0, // triangle fade:
  endOpacity: 0,   // 0 → 1 → 0 over lifetime
);''',
    apis: [
      ('glowSigma', 'blurred halo; budget it, it costs per particle'),
      ('startOpacity/endOpacity 0', 'triangle fade in-and-out'),
      ('Attractor', 'weak center pull keeps the swarm loosely gathered'),
    ],
  ),
  6: FieldNotes(
    what: 'Ten living slots cycling a whole photo roll: when a particle '
        'expires, onParticleExpired swaps that slot in place with a fresh '
        'ImageParticle. The engine picks up in-place list swaps next frame.',
    snippet: '''
Particles(
  particles: slots, // 10 ImageParticles
  onParticleExpired: (dead) {
    final i = slots.indexOf(dead);
    WidgetsBinding.instance.addPostFrameCallback((_) {
      slots[i] = ImageParticle(
        particleImage: nextImage(),
        width: 64, height: 64,
        color: Colors.white,
        velocity: const Offset(0, -24),
        lifetime: 6,
        startOpacity: 0, endOpacity: 0,
        startPosition: randomSpot(),
      )..updateVelocity = const Offset(0, -24);
    });
  },
);''',
    apis: [
      ('ImageParticle', 'draws a ui.Image as the particle'),
      ('onParticleExpired', 'hook the moment a lifetime ends'),
      ('in-place swap', 'same list instance → engine sees the new particle'),
    ],
  ),
  7: FieldNotes(
    what: 'The swarm breathes because particlePhysics is read live every '
        'frame: an AnimationController rebuilds Particles with a new '
        'attractor strength on each beat. Drag adds a second attractor at '
        'the pointer.',
    snippet: '''
AnimatedBuilder(
  animation: beat, // ~830ms controller
  builder: (_, __) => Particles(
    particles: swarm,
    width: w, height: h,
    particlePhysics: ParticlePhysics(
      gravityScale: 0, maxSpeed: 140,
      attractors: [
        Attractor(
          position: () => albumCenter,
          strength: 10 + 80 * beat.value,
          radius: 0.7 * shortestSide,
        ),
        if (dragPoint != null)
          Attractor(
            position: () => dragPoint!,
            strength: 160, radius: 200),
      ],
    ),
  ),
);''',
    apis: [
      ('particlePhysics', 'read live per frame — rebuild to animate physics'),
      ('Attractor.position', 'a closure, evaluated fresh every frame'),
      ('strength', 'positive pulls, negative pushes'),
    ],
  ),
  8: FieldNotes(
    what: 'One spark towed along a bezier by a moving attractor, leaving a '
        'stardust trail. Tap-anywhere sprinkles come from a burst whose '
        'position closure reads the last tap point.',
    snippet: '''
// Mina: one particle, pulled by a moving target.
Attractor(
  position: () => bezierPoint(controller.value),
  strength: 120, radius: 900,
);

// Tap stardust:
Offset? lastTap;
Emitter.burst(
  position: (_) => lastTap ?? Offset.zero,
  particleCount: 24,
  pattern: RadialBurst(minSpeed: 20, maxSpeed: 90),
  controller: sprinkle,
);
// onTapDown: lastTap = p; sprinkle.trigger();''',
    apis: [
      ('moving Attractor', 'position closure = animated pull target'),
      ('trailLength', 'longer trail, longer stardust'),
      ('position closure on bursts', 'burst wherever the user tapped'),
    ],
  ),
  9: FieldNotes(
    what: 'connectDots draws a line between any two particles closer than '
        'the threshold. ConnectionStyle controls the distance, color, width '
        'and the fade-to-nothing as pairs drift apart.',
    snippet: '''
Particles(
  particles: stars, // slow drift
  width: w, height: h,
  connectDots: true,
  connectionStyle: const ConnectionStyle(
    maxDistance: 120,
    color: Color(0xBF4A5E82), // steel blue
    strokeWidth: 1.0,
    distanceFade: true,
  ),
  boundType: BoundType.WrapAround,
);''',
    apis: [
      ('connectDots', 'auto lines between close neighbours'),
      ('ConnectionStyle', 'distance, color, width, fade'),
      ('distanceFade', 'lines dissolve as the pair separates'),
    ],
  ),
  10: FieldNotes(
    what: 'Choreographed fireworks: launch speed and gravity are solved from '
        'the flight time (v0 = 2H/T, g = v0/T) so the rocket stalls exactly '
        'where — and when — its paired burst emitter opens.',
    snippet: '''
final v0 = 2 * climb / T;
final g = v0 / T;

// the rocket
Emitter.burst(
  position: (s) => pad, particleCount: 1,
  pattern: ConeBurst(minSpeed: v0, maxSpeed: v0),
  physics: ParticlePhysics(gravityScale: g),
  repeatInterval: cadence,
  initialDelay: delay,
);
// its firework, at the apex, T later
Emitter.burst(
  position: (s) => apex, particleCount: 45,
  pattern: RadialBurst(minSpeed: 30, maxSpeed: 150),
  repeatInterval: cadence,
  initialDelay: delay + T,
);''',
    apis: [
      ('paired emitters', 'same cadence, offset by flight time'),
      ('solved ballistics', 'derive v0 and gravity from one flight time'),
      ('enableTrails', 'the comet tail behind the rocket head'),
    ],
  ),
  11: FieldNotes(
    what: 'A nebula from large, slow, translucent discs: colorGradient '
        'shifts each wisp\'s hue over its life while it swells and triangle-'
        'fades. A few get a heavy glowSigma to soften the whole cloud.',
    snippet: '''
CircularParticle(
  radius: 26 + rng.nextDouble() * 22,
  color: violet,
  colorGradient: [violet, magenta, steelBlue],
  velocity: barelyDrifting,
  lifetime: 6 + rng.nextDouble() * 5,
  startOpacity: 0, endOpacity: 0,
  startScale: 0.6, endScale: 1.4,
  glowSigma: soft ? 10 : 0,
);''',
    apis: [
      ('colorGradient', 'multi-stop color over the lifetime'),
      ('startScale/endScale', 'the wisp swells as it lives'),
      ('glowSigma (large)', 'big soft blobs — use on a few, not all'),
    ],
  ),
};

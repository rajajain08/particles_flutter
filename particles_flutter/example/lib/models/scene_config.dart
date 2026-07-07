import 'package:flutter/material.dart';
import 'package:particles_flutter/engine.dart';

enum SceneId { starfield, web, snow, nebula, fireworks, confetti, comet, pulse, ghosts, rockets, burstDemo, poolCycle, vortex }

class SceneConfig {
  final SceneId id;
  final String name;
  final String emoji;
  final String tagline;
  final String codeSnippet;

  /// Short explanation of the technical mechanism this scene demonstrates.
  /// Shown above the code snippet in the Code panel. Null = not documented.
  final String? techNotes;
  final Color bgColor;
  final Color accentColor;
  final BoundType boundType;
  final bool connectDots;
  final bool gravity;
  final bool interaction;
  final double speed;
  final double sizeMultiplier;
  final double awayRadius;
  final double gravityScale;
  final double opacity;

  const SceneConfig({
    required this.id,
    required this.name,
    required this.emoji,
    required this.tagline,
    required this.codeSnippet,
    this.techNotes,
    required this.bgColor,
    required this.accentColor,
    required this.boundType,
    required this.connectDots,
    required this.gravity,
    required this.interaction,
    required this.speed,
    this.sizeMultiplier = 1.0,
    this.awayRadius = 120.0,
    this.gravityScale = 30.0,
    this.opacity = 1.0,
  });

  SceneConfig copyWith({
    bool? connectDots,
    bool? gravity,
    bool? interaction,
    double? speed,
    double? sizeMultiplier,
    double? awayRadius,
    double? gravityScale,
    double? opacity,
    BoundType? boundType,
  }) =>
      SceneConfig(
        id: id,
        name: name,
        emoji: emoji,
        tagline: tagline,
        codeSnippet: codeSnippet,
        techNotes: techNotes,
        bgColor: bgColor,
        accentColor: accentColor,
        boundType: boundType ?? this.boundType,
        connectDots: connectDots ?? this.connectDots,
        gravity: gravity ?? this.gravity,
        interaction: interaction ?? this.interaction,
        speed: speed ?? this.speed,
        sizeMultiplier: sizeMultiplier ?? this.sizeMultiplier,
        awayRadius: awayRadius ?? this.awayRadius,
        gravityScale: gravityScale ?? this.gravityScale,
        opacity: opacity ?? this.opacity,
      );
}

const List<SceneConfig> kScenes = [
  SceneConfig(
    id: SceneId.starfield,
    name: 'Starfield',
    emoji: '✨',
    tagline: 'Repels from cursor · wrap-around bounds',
    techNotes: "BoundType.WrapAround teleports a particle to the opposite "
        "edge once it exits the canvas, instead of clipping or bouncing it — "
        "so the field always looks fully populated. ParticleInteraction with "
        "enableHover pushes nearby particles away from the pointer inside "
        "awayRadius, computed every frame against the live cursor position.",
    codeSnippet: '''Particles(
  particles: List.generate(120, (_) =>
    CircularParticle(
      radius: 2.5,
      color: Colors.white,
      velocity: Offset(30, 30),
    ),
  ),
  width: size.width,
  height: size.height,
  boundType: BoundType.WrapAround,
  interaction: ParticleInteraction(
    awayRadius: 120,
    enableHover: true,
  ),
)''',
    bgColor: Color(0xFF060D1F),
    accentColor: Color(0xFF8B5CF6),
    boundType: BoundType.WrapAround,
    connectDots: false,
    gravity: false,
    interaction: true,
    speed: 30,
  ),
  // v2.2 — BurstEmitter
  SceneConfig(
    id: SceneId.burstDemo,
    name: 'Burst',
    emoji: '💥',
    tagline: 'Tap anywhere · radial explosion · confetti rain',
    techNotes: "BurstEmitter owns its own particle pool and fire loop, "
        "separate from the main Particles(particles: ...) list — it's "
        "passed via burstEmitters and repeats on its own schedule "
        "(repeatCount/repeatInterval) or on demand via a "
        "BurstEmitterController.trigger(). particleFactory builds each "
        "burst's particles fresh from a RadialBurst/ConeBurst pattern, which "
        "assigns each particle an outward velocity from the burst position.",
    codeSnippet: '''// One-shot welcome firework
BurstEmitter(
  position: (size) => size.center(Offset.zero),
  particleCount: 60,
  pattern: RadialBurst(minSpeed: 150, maxSpeed: 400),
  repeatCount: 1,
  physics: ParticlePhysics(gravityScale: 120),
  particleFactory: (i, total) => CircularParticle(
    radius: 4,
    color: Colors.orange,
    velocity: Offset.zero,
    lifetime: 1.8,
    endOpacity: 0.0,
  ),
)

// Tap explosion — fires wherever you click
final ctrl = BurstEmitterController();
Offset tapPos = Offset.zero;
// onTapDown: (d) { tapPos = d.localPosition; ctrl.trigger(); }
BurstEmitter(
  position: (size) => tapPos,
  particleCount: 40,
  pattern: RadialBurst(minSpeed: 80, maxSpeed: 220),
  repeatCount: 0,
  controller: ctrl,
  particleFactory: (i, total) => CircularParticle(...),
)''',
    bgColor: Color(0xFF08060F),
    accentColor: Color(0xFFFF6B35),
    boundType: BoundType.None,
    connectDots: false,
    gravity: false,
    interaction: false,
    speed: 0,
    gravityScale: 120,
    opacity: 1.0,
  ),
  // v3.2 — Attractor: attraction/repulsion physics
  SceneConfig(
    id: SceneId.vortex,
    name: 'Vortex',
    emoji: '🌀',
    tagline: 'Drag to pull · tap to flip attract/repel',
    techNotes: "ParticlePhysics.attractors takes a list of Attractor points; "
        "each frame every particle's velocity gets a force pulling it toward "
        "(positive strength) or away from (negative strength) the attractor, "
        "linearly falling off to zero at its radius. Attractor.position is a "
        "callback re-evaluated every frame, so it can track a moving point "
        "like the pointer instead of a fixed spot. maxSpeed caps velocity "
        "every frame — without it, particles orbiting close to the attractor "
        "keep gaining speed indefinitely since the force has no drag term.",
    codeSnippet: '''Offset pointerPosition = Offset.zero;
bool repel = false;

final physics = ParticlePhysics(
  maxSpeed: 220, // caps speed so orbits don't accelerate forever
  attractors: [
    Attractor(
      position: () => pointerPosition,
      strength: repel ? -350 : 350,
      radius: 220,
    ),
  ],
);

Listener(
  behavior: HitTestBehavior.opaque,
  onPointerMove: (e) => setState(() => pointerPosition = e.localPosition),
  onPointerDown: (e) => setState(() => repel = !repel),
  child: Particles(
    particles: particles,
    width: size.width,
    height: size.height,
    boundType: BoundType.WrapAround,
    particlePhysics: physics,
  ),
)''',
    bgColor: Color(0xFF0A0A14),
    accentColor: Color(0xFF818CF8),
    boundType: BoundType.None,
    connectDots: false,
    gravity: false,
    interaction: false,
    speed: 0,
    opacity: 1.0,
  ),
  SceneConfig(
    id: SceneId.web,
    name: 'Web',
    emoji: '🕸️',
    tagline: 'Connected mesh · bouncing physics',
    techNotes: "connectDots draws a line between every pair of particles "
        "closer than a fixed threshold, redone every frame — O(n²) pair "
        "checks, which is why it's flagged 'not recommended for performance' "
        "at higher counts. BoundType.Bounce flips velocity on the axis that "
        "hit an edge, so particles ricochet inside the canvas instead of "
        "wrapping or exiting.",
    codeSnippet: '''Particles(
  particles: List.generate(80, (_) =>
    CircularParticle(
      radius: 3,
      color: Color(0xFF00E5FF),
      velocity: Offset(40, 40),
    ),
  ),
  width: size.width,
  height: size.height,
  connectDots: true,
  boundType: BoundType.Bounce,
  interaction: ParticleInteraction(
    awayRadius: 120,
    enableHover: true,
  ),
)''',
    bgColor: Color(0xFF041014),
    accentColor: Color(0xFF22D3EE),
    boundType: BoundType.Bounce,
    connectDots: true,
    gravity: false,
    interaction: true,
    speed: 40,
  ),
  SceneConfig(
    id: SceneId.confetti,
    name: 'Confetti',
    emoji: '🎉',
    tagline: 'Celebration rain · rotating ribbons',
    techNotes: "No emitter or boundType here — particles fall under gravity "
        "and are simply respawned at a random position once they fall past "
        "the canvas edge (the engine's default behavior when there's no "
        "emitter/wrap/bounce configured), so confetti keeps raining "
        "indefinitely without ever running out.",
    codeSnippet: '''Particles(
  particles: List.generate(120, (_) =>
    RoundRectangularParticle(
      width: 10,
      height: 4,
      cornerRadius: 2,
      color: Colors.red,
      velocity: Offset(20, 60),
      rotationSpeed: 2.5,
    ),
  ),
  width: size.width,
  height: size.height,
  boundType: BoundType.WrapAround,
  particlePhysics: ParticlePhysics(
    gravityScale: 25,
  ),
)''',
    bgColor: Color(0xFF0A0B18),
    accentColor: Color(0xFFFBBF24),
    boundType: BoundType.None,
    connectDots: false,
    gravity: true,
    interaction: false,
    speed: 60,
    gravityScale: 25,
    sizeMultiplier: 1.0,
  ),
  SceneConfig(
    id: SceneId.fireworks,
    name: 'Fireworks',
    emoji: '🎆',
    tagline: 'Multi-burst emitter · gravity trails',
    techNotes: "Emitter releases particles from the pool in clusterSize "
        "batches every delay, from startPosition ± startPositionRadius, "
        "instead of showing all particles at once. recycles: false means "
        "expired/out-of-bounds particles are dropped rather than reused, so "
        "the burst thins out and ends — paired with gravityScale for the "
        "falling-embers look.",
    codeSnippet: '''Particles(
  particles: List.generate(150, (_) =>
    TriangularParticle(
      width: 5,
      height: 5,
      color: Color(0xFFFF6D00),
      velocity: Offset(140, 140),
      rotationSpeed: 3.0,
    ),
  ),
  width: size.width,
  height: size.height,
  boundType: BoundType.None,
  particlePhysics: ParticlePhysics(gravityScale: 45),
  particleEmitter: Emitter(
    startPosition: center,
    startPositionRadius: 80,
    clusterSize: 15,
    delay: Duration(milliseconds: 300),
    recycles: false,
  ),
)''',
    bgColor: Color(0xFF0C0510),
    accentColor: Color(0xFFFB923C),
    boundType: BoundType.None,
    connectDots: false,
    gravity: true,
    interaction: false,
    speed: 140,
    gravityScale: 45,
    sizeMultiplier: 1.2,
  ),
  // v2.1 — All features combined
  SceneConfig(
    id: SceneId.rockets,
    name: 'Rockets',
    emoji: '🚀',
    tagline: 'All v2.1 features · color · scale · fade · trails',
    techNotes: "Stacks every lifetime feature on one particle: colorGradient "
        "for the color arc, startScale/endScale for shrink-as-it-dies, "
        "startOpacity/endOpacity for the fade, and trailEnabled for the "
        "streak — each resolved independently every frame by "
        "ParticleLifetime.update from the same lifetimeProgress value.",
    codeSnippet: '''CircularParticle(
  radius: 4,
  color: Colors.yellow,
  velocity: Offset(cos(a)*speed, sin(a)*speed),
  lifetime: 2.0,
  colorGradient: [Colors.white, Colors.yellow, Colors.red],
  startScale: 0.4,
  endScale: 0.0,
  scaleCurve: Curves.easeIn,
  startOpacity: 1.0,
  endOpacity: 0.0,
  opacityCurve: Curves.easeIn,
  trailEnabled: true,
  trailLength: 14,
  trailFade: true,
)''',
    bgColor: Color(0xFF0C0610),
    accentColor: Color(0xFFFF7C3A),
    boundType: BoundType.None,
    connectDots: false,
    gravity: true,
    interaction: false,
    speed: 160,
    sizeMultiplier: 1.1,
    awayRadius: 80.0,
    gravityScale: 40.0,
    opacity: 1.0,
  ),
  // v2.1 — Color over lifetime + trails
  SceneConfig(
    id: SceneId.comet,
    name: 'Comet',
    emoji: '☄️',
    tagline: 'Color gradient · particle trails',
    techNotes: "colorGradient lerps across multiple colors over the "
        "particle's lifetime (not just start→end), driven by lifetimeProgress "
        "and colorCurve. trailEnabled records the last trailLength positions "
        "each frame into a ring buffer and paints fading line segments "
        "between them, giving the streak-behind-the-particle look.",
    codeSnippet: '''CircularParticle(
  radius: 4,
  color: Colors.yellow,
  velocity: Offset(120, 60),
  lifetime: 3.0,
  colorGradient: [
    Colors.white,
    Colors.yellow,
    Colors.orange,
    Colors.transparent,
  ],
  trailEnabled: true,
  trailLength: 20,
  trailFade: true,
)''',
    bgColor: Color(0xFF05030F),
    accentColor: Color(0xFFFCD34D),
    boundType: BoundType.WrapAround,
    connectDots: false,
    gravity: false,
    interaction: true,
    speed: 100,
    sizeMultiplier: 1.0,
    awayRadius: 100.0,
    gravityScale: 20.0,
    opacity: 1.0,
  ),
  SceneConfig(
    id: SceneId.nebula,
    name: 'Nebula',
    emoji: '🌌',
    tagline: 'Ovoidal shapes · rotating particles',
    techNotes: "rotationSpeed sets a constant angular velocity (radians/sec) "
        "applied every frame via canvas.rotate before drawing, independent "
        "of the particle's linear velocity — so shape and motion direction "
        "are decoupled. OvoidalParticle just draws an ellipse instead of a "
        "circle, using independent width/height instead of a single radius.",
    codeSnippet: '''Particles(
  particles: List.generate(60, (_) =>
    OvoidalParticle(
      width: 20,
      height: 12,
      color: Color(0xFFFF4081),
      velocity: Offset(20, 20),
      rotationSpeed: 0.3,
    ),
  ),
  width: size.width,
  height: size.height,
  boundType: BoundType.WrapAround,
  interaction: ParticleInteraction(
    awayRadius: 120,
    enableHover: true,
  ),
)''',
    bgColor: Color(0xFF0D0524),
    accentColor: Color(0xFFF472B6),
    boundType: BoundType.WrapAround,
    connectDots: false,
    gravity: false,
    interaction: true,
    speed: 20,
    sizeMultiplier: 1.5,
  ),
  // v2.1 — Fade over lifetime
  SceneConfig(
    id: SceneId.ghosts,
    name: 'Ghosts',
    emoji: '👻',
    tagline: 'Fade in · fade out · eerie drift',
    techNotes: "startOpacity: 0 and endOpacity: 0 together trigger a special "
        "case in ParticleLifetime: instead of a straight fade, opacity ramps "
        "0→1→0 (rising for the first half of lifetimeProgress, falling for "
        "the second), so the particle fades in then back out rather than "
        "just fading in one direction.",
    codeSnippet: '''CircularParticle(
  radius: 12,
  color: Colors.white,
  velocity: Offset(15, -10),
  lifetime: 4.0,
  startOpacity: 0.0,
  endOpacity: 0.0,
  opacityCurve: Curves.easeInOut,
  endColor: Color(0xFF69F0AE),
)''',
    bgColor: Color(0xFF031209),
    accentColor: Color(0xFF34D399),
    boundType: BoundType.WrapAround,
    connectDots: false,
    gravity: false,
    interaction: true,
    speed: 20,
    sizeMultiplier: 1.5,
    awayRadius: 120.0,
    gravityScale: 20.0,
    opacity: 1.0,
  ),
  // v2.1 — Scale over lifetime
  SceneConfig(
    id: SceneId.pulse,
    name: 'Pulse',
    emoji: '🔮',
    tagline: 'Scale over lifetime · breathing particles',
    techNotes: "startScale/endScale interpolate the particle's paint-time "
        "scale (canvas.scale) across its lifetime using scaleCurve, "
        "independent of its opacity fade — so a particle can grow while "
        "fading, shrink while fading, or any combination, purely from curve "
        "choice.",
    codeSnippet: '''CircularParticle(
  radius: 8,
  color: Color(0xFF7C4DFF),
  velocity: Offset(20, 20),
  lifetime: 2.5,
  startScale: 0.1,
  endScale: 1.8,
  scaleCurve: Curves.easeInOut,
  startOpacity: 0.9,
  endOpacity: 0.0,
  opacityCurve: Curves.easeIn,
)''',
    bgColor: Color(0xFF0D0522),
    accentColor: Color(0xFFA78BFA),
    boundType: BoundType.WrapAround,
    connectDots: false,
    gravity: false,
    interaction: false,
    speed: 25,
    sizeMultiplier: 1.2,
    awayRadius: 80.0,
    gravityScale: 20.0,
    opacity: 1.0,
  ),
  SceneConfig(
    id: SceneId.snow,
    name: 'Snow',
    emoji: '❄️',
    tagline: 'Gravity-driven · wrap-around bounds',
    techNotes: "ParticlePhysics(gravityScale: ...) adds a constant downward "
        "acceleration to each particle's velocity every frame, independent "
        "of the particle's own initial velocity. Combined with "
        "BoundType.WrapAround, flakes that fall past the bottom edge "
        "reappear at the top, so the snowfall never runs out.",
    codeSnippet: '''Particles(
  particles: List.generate(100, (_) =>
    CircularParticle(
      radius: 5,
      color: Colors.white,
      velocity: Offset(0, 15),
    ),
  ),
  width: size.width,
  height: size.height,
  boundType: BoundType.WrapAround,
  particlePhysics: ParticlePhysics(
    gravityScale: 20,
  ),
)''',
    bgColor: Color(0xFF071525),
    accentColor: Color(0xFF93C5FD),
    boundType: BoundType.WrapAround,
    connectDots: false,
    gravity: true,
    interaction: false,
    speed: 15,
    gravityScale: 20,
  ),
  // v3.1 — startPosition + onParticleExpired: bounded pool cycled from a larger set
  SceneConfig(
    id: SceneId.poolCycle,
    name: 'Pool Cycle',
    emoji: '🔁',
    tagline: '10 slots on screen · cycling a pool of 100',
    techNotes: "Uses Particle.startPosition (place a new particle exactly "
        "where you want, instead of a random spawn) and "
        "Particles.onParticleExpired (a hook fired the instant a particle's "
        "lifetime ends). Since color/image are set at construction and are "
        "immutable, the callback swaps the slot for a freshly-built particle "
        "rather than mutating the expired one in place — the same approach "
        "an app would use to cycle a small set of visible items (e.g. photos) "
        "through a much larger backing list.",
    codeSnippet: '''// Only `visibleSlots` particles ever render; each expiry
// swaps that slot for the next item in a much bigger pool.
int nextPoolIndex = visibleSlots;

CircularParticle particleForPoolIndex(int i) => CircularParticle(
  color: colorForPoolIndex(i),
  velocity: Offset.zero,
  lifetime: 1.2,
  startPosition: randomPosition(),
  startOpacity: 0.0,
  endOpacity: 0.0,
  opacityCurve: Curves.easeInOut,
);

final particles = List.generate(visibleSlots, particleForPoolIndex);

Particles(
  particles: particles,
  width: size.width,
  height: size.height,
  onParticleExpired: (p) {
    final slot = particles.indexOf(p);
    final poolIndex = nextPoolIndex % poolSize;
    nextPoolIndex++;
    // color/image are set at construction, so swap in a fresh
    // particle for this slot rather than mutating the old one.
    setState(() => particles[slot] = particleForPoolIndex(poolIndex));
  },
)''',
    bgColor: Color(0xFF0A0F1C),
    accentColor: Color(0xFF38BDF8),
    boundType: BoundType.None,
    connectDots: false,
    gravity: false,
    interaction: false,
    speed: 0,
    opacity: 1.0,
  ),
];

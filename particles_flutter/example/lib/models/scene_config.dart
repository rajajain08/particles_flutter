import 'package:flutter/material.dart';
import 'package:particles_flutter/engine.dart';

enum SceneId { starfield, web, snow, nebula, fireworks, confetti }

class SceneConfig {
  final SceneId id;
  final String name;
  final String emoji;
  final String tagline;
  final String codeSnippet;
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
    bgColor: Color(0xFF050A1A),
    accentColor: Color(0xFF7C4DFF),
    boundType: BoundType.WrapAround,
    connectDots: false,
    gravity: false,
    interaction: true,
    speed: 30,
  ),
  SceneConfig(
    id: SceneId.web,
    name: 'Web',
    emoji: '🕸️',
    tagline: 'Connected mesh · bouncing physics',
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
    bgColor: Color(0xFF0A0A0A),
    accentColor: Color(0xFF00E5FF),
    boundType: BoundType.Bounce,
    connectDots: true,
    gravity: false,
    interaction: true,
    speed: 40,
  ),
  SceneConfig(
    id: SceneId.snow,
    name: 'Snow',
    emoji: '❄️',
    tagline: 'Gravity-driven · wrap-around bounds',
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
    bgColor: Color(0xFF0D1B2A),
    accentColor: Color(0xFFB0C4DE),
    boundType: BoundType.WrapAround,
    connectDots: false,
    gravity: true,
    interaction: false,
    speed: 15,
    gravityScale: 20,
  ),
  SceneConfig(
    id: SceneId.nebula,
    name: 'Nebula',
    emoji: '🌌',
    tagline: 'Ovoidal shapes · rotating particles',
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
    bgColor: Color(0xFF0B0020),
    accentColor: Color(0xFFFF4081),
    boundType: BoundType.WrapAround,
    connectDots: false,
    gravity: false,
    interaction: true,
    speed: 20,
    sizeMultiplier: 1.5,
  ),
  SceneConfig(
    id: SceneId.fireworks,
    name: 'Fireworks',
    emoji: '🎆',
    tagline: 'Multi-burst emitter · gravity trails',
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
    bgColor: Color(0xFF05000A),
    accentColor: Color(0xFFFF6D00),
    boundType: BoundType.None,
    connectDots: false,
    gravity: true,
    interaction: false,
    speed: 140,
    gravityScale: 45,
    sizeMultiplier: 1.2,
  ),
  SceneConfig(
    id: SceneId.confetti,
    name: 'Confetti',
    emoji: '🎉',
    tagline: 'Celebration rain · rotating ribbons',
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
    bgColor: Color(0xFF0A0A14),
    accentColor: Color(0xFFFFD700),
    boundType: BoundType.WrapAround,
    connectDots: false,
    gravity: true,
    interaction: false,
    speed: 60,
    gravityScale: 25,
    sizeMultiplier: 1.0,
  ),
];

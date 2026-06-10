import 'package:flutter/material.dart';
import 'package:particles_flutter/engine.dart';

enum SceneId { starfield, web, snow, nebula, fireworks }

class SceneConfig {
  final SceneId id;
  final String name;
  final String emoji;
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
    bgColor: Color(0xFF0A0000),
    accentColor: Color(0xFFFF6D00),
    boundType: BoundType.None,
    connectDots: false,
    gravity: true,
    interaction: false,
    speed: 120,
    gravityScale: 40,
  ),
];

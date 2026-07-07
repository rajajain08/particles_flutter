import 'dart:ui';
import 'package:flutter/animation.dart';
import 'package:particles_flutter/src/component/particle/particle.dart';

/// Single Circular Particle
class CircularParticle extends Particle {
  CircularParticle({
    required this.radius,
    required Color color,
    required Offset velocity,
    double rotationSpeed = 0,
    Offset? startPosition,
    double? lifetime,
    Color? endColor,
    List<Color>? colorGradient,
    Curve colorCurve = const Cubic(0, 0, 1, 1),
    double startScale = 1.0,
    double? endScale,
    Curve scaleCurve = const Cubic(0, 0, 1, 1),
    double startOpacity = 1.0,
    double? endOpacity,
    Curve opacityCurve = const Cubic(0, 0, 1, 1),
    bool trailEnabled = false,
    int trailLength = 10,
    bool trailFade = true,
  }) : super(
          color: color,
          velocity: velocity,
          rotationSpeed: rotationSpeed,
          startPosition: startPosition,
          lifetime: lifetime,
          endColor: endColor,
          colorGradient: colorGradient,
          colorCurve: colorCurve,
          startScale: startScale,
          endScale: endScale,
          scaleCurve: scaleCurve,
          startOpacity: startOpacity,
          endOpacity: endOpacity,
          opacityCurve: opacityCurve,
          trailEnabled: trailEnabled,
          trailLength: trailLength,
          trailFade: trailFade,
        );

  /// Define the radius of the circular particle
  final double radius;

  @override
  void drawParticle(Canvas canvas, Size size) {
    canvas.drawCircle(
      Offset(size.width / 2, size.height / 2),
      radius,
      Paint()..color = paintColor,
    );
  }
}

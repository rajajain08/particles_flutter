import 'dart:ui';
import 'package:flutter/animation.dart';
import 'package:particles_flutter/src/component/particle/particle.dart';

/// Single Round Rectangular Particle
class RoundRectangularParticle extends Particle {
  RoundRectangularParticle({
    required this.height,
    required this.width,
    required this.cornerRadius,
    required Color color,
    required Offset velocity,
    double rotationSpeed = 0,
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

  /// Define the height of the rectangular particle.
  final double height;

  /// Define the width of the rectangular particle.
  final double width;

  /// Define the radius of the rounded rectangle.
  final double cornerRadius;

  @override
  void drawParticle(Canvas canvas, Size size) {
    canvas.drawRRect(
      RRect.fromRectXY(
          Rect.fromCenter(center: Offset.zero, width: width, height: height),
          cornerRadius,
          cornerRadius),
      Paint()..color = paintColor,
    );
  }
}

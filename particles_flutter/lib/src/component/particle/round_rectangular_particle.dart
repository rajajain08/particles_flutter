import 'dart:ui';
import 'package:particles_flutter/src/component/particle/particle.dart';

/// Single Rectangular Particle
class RoundRectangularParticle extends Particle {
  RoundRectangularParticle({
    required this.height,
    required this.width,
    required this.cornerRadius,
    required Color color,
    required Offset velocity,
    double rotationSpeed = 0,
  }) : super(color: color, velocity: velocity, rotationSpeed: rotationSpeed);

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
      Paint()..color = color,
    );
  }
}

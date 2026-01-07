import 'dart:ui';
import 'package:particles_flutter/src/component/particle/particle.dart';

/// Single Rectangular Particle
class RectangularParticle extends Particle {
  RectangularParticle({
    required this.height,
    required this.width,
    required Color color,
    required Offset velocity,
    double rotationSpeed = 0,
  }) : super(color: color, velocity: velocity, rotationSpeed: rotationSpeed);

  /// Define the height of the rectangular particle
  final double height;

  /// Define the width of the rectangular particle
  final double width;

  @override
  void drawParticle(Canvas canvas, Size size) {
    canvas.drawRect(
      Rect.fromCenter(center: Offset.zero, width: width, height: height),
      Paint()..color = color,
    );
  }
}

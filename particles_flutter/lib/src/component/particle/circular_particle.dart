import 'dart:ui';
import 'package:particles_flutter/src/component/particle/particle.dart';

/// Single Circular Particle
class CircularParticle extends Particle {
  CircularParticle({
    required this.radius,
    required Color color,
    required Offset velocity,
    double rotationSpeed = 0,
  }) : super(color: color, velocity: velocity, rotationSpeed: rotationSpeed);

  /// Define the radius of the circular particle
  final double radius;

  @override
  void drawParticle(Canvas canvas, Size size) {
    canvas.drawCircle(
      Offset(size.width / 2, size.height / 2),
      radius,
      Paint()..color = color,
    );
  }
}

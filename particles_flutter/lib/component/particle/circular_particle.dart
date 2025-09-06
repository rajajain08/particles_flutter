import 'dart:ui';
import 'package:particles_flutter/component/particle/particle.dart';

/// Single Circular Particle
class CircularParticle extends Particle {
  CircularParticle({
    required this.radius,
    required Color color, 
    required Offset velocity}) : 
  super(color: color, velocity: velocity);

  /// Define the radius of the circular particle
  final double radius;

  @override
  void paint(Canvas canvas, Size size) { 
    canvas.drawCircle(
      position,
      radius,
      Paint()..color = color,
    );
  }
}
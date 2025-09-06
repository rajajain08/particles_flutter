import 'dart:ui';
import 'package:particles_flutter/component/particle/particle.dart';

/// Single Triangular Particle
class TriangularParticle extends Particle {
  TriangularParticle({
    required this.height,
    required this.width,
    required Color color, 
    required Offset velocity}) : 
  super(color: color, velocity: velocity);

  /// Define the height of the triangular particle
  final double height;

  /// Define the width of the triangular particle
  final double width;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawPath(
      getTrianglePath(),
      Paint()..color = color,
      );
  }
  
  Path getTrianglePath()
  {
    return Path()
      ..moveTo(0 +position.dx, height +position.dy)
      ..lineTo(width/2 +position.dx, 0 +position.dy)
      ..lineTo(width +position.dx, height +position.dy)
      ..lineTo(0 +position.dx, height +position.dy);
  }
}
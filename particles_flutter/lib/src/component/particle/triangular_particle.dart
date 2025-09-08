import 'dart:ui';
import 'package:particles_flutter/src/component/particle/particle.dart';

/// Single Triangular Particle
class TriangularParticle extends Particle {
  TriangularParticle({
    required this.height,
    required this.width,
    required Color color, 
    required Offset velocity,
    double rotationSpeed = 0,
    }) : super(color: color, velocity: velocity, rotationSpeed: rotationSpeed);

  /// Define the height of the triangular particle
  final double height;

  /// Define the width of the triangular particle
  final double width;

  @override
  void DrawParticle(Canvas canvas, Size size) {
    canvas.drawPath(
      getTrianglePath(),
      Paint()..color = color,
      );
  }
  
  Path getTrianglePath()
  {
    /// Ensure pivot centre is the same as triangle centre
    return Path()
      ..moveTo(-width / 2, height / 2)
      ..lineTo(0, -height / 2)
      ..lineTo(width / 2, height / 2)
      ..lineTo(-width / 2, height / 2);
  }
}
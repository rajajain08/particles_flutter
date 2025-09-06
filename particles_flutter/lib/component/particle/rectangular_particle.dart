import 'dart:ui';
import 'package:particles_flutter/component/particle/particle.dart';

/// Single Rectangular Particle
class RectangularParticle extends Particle {
  RectangularParticle({
    required this.height,
    required this.width,
    required Color color, 
    required Offset velocity}) : 
  super(color: color, velocity: velocity);

  /// Define the height of the rectangular particle
  final double height;

  /// Define the width of the rectangular particle
  final double width;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(
        Rect.fromLTWH(position.dx, position.dy, width, height),
        Paint()..color = color,
        );
    }
}
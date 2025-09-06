import 'package:flutter/material.dart';
import 'package:particles_flutter/component/particle/particle.dart';

class ParticleLine extends CustomPainter {
  ParticleLine(
    this.origin,
    this.destination,
    this.length
  );
  static Paint? randomColorPaint;
  final Particle origin;
  final Particle destination;
  final double length;

  @override
  void paint(Canvas canvas, Size size) {
    randomColorPaint = Paint()
      ..color = (origin).color
      ..strokeWidth = ( 2 * (1-length/100)).toDouble();
    canvas.drawLine((origin).position, (destination).position, randomColorPaint!,);
  }

  @override
  bool shouldRepaint(CustomPainter oldDelegate) {
    return true;
  }
}
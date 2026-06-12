import 'package:flutter/material.dart';
import 'package:particles_flutter/src/component/particle/particle.dart';

class ParticleLine extends CustomPainter {
  ParticleLine(
    this.origin,
    this.destination,
    this.length
  );
  static Paint? randomColorPaint;
  Particle origin;
  Particle destination;
  double length;

  void reset(Particle newOrigin, Particle newDestination, double newLength) {
    origin = newOrigin;
    destination = newDestination;
    length = newLength;
  }

  @override
  void paint(Canvas canvas, Size size) {
    randomColorPaint = Paint()
      ..color = (origin).color
      ..strokeWidth = ( 2 * (1-length/100)).toDouble();
    canvas.drawLine((origin).position, (destination).position, randomColorPaint!,);
  }

  @override
  bool shouldRepaint(ParticleLine oldDelegate) => true;
}
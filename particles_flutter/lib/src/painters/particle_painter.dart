import 'package:flutter/material.dart';
import 'package:particles_flutter/src/component/particle_line.dart';
import 'package:particles_flutter/src/component/particle/particle.dart';

class ParticlePainter extends CustomPainter {
  final List<Particle> particles;
  static Paint? randomColorPaint;
  final List<ParticleLine> lines;

  ParticlePainter({
    required this.particles,
    required this.lines,
  });
  
  @override
  void paint(Canvas canvas, Size size) {
    for (final particle in particles)
    {
      particle.paint(canvas, size);
    }
    for (final line in lines)
    { 
      line.paint(canvas, size);
    }
  }

  @override
  bool shouldRepaint(CustomPainter oldDelegate) {
    return true;
  }
}
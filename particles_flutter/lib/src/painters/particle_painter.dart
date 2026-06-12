import 'package:flutter/material.dart';
import 'package:particles_flutter/src/component/particle_line.dart';
import 'package:particles_flutter/src/component/particle/particle.dart';

class ParticlePainter extends CustomPainter {
  final List<Particle> particles;
  static Paint? randomColorPaint;
  final List<ParticleLine> lines;
  final int activeLineCount;

  ParticlePainter({
    required this.particles,
    required this.lines,
    this.activeLineCount = -1,
  });

  @override
  void paint(Canvas canvas, Size size) {
    for (final particle in particles)
    {
      particle.paint(canvas, size);
    }
    final int count = activeLineCount < 0 ? lines.length : activeLineCount;
    for (int i = 0; i < count; i++)
    {
      lines[i].paint(canvas, size);
    }
  }

  @override
  bool shouldRepaint(ParticlePainter oldDelegate) => true;
}
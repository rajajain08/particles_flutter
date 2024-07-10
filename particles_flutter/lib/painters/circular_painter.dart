import 'package:flutter/material.dart';
import 'package:particles_flutter/component/particle/particle.dart';

class CircularParticlePainter extends CustomPainter {
  final List<Particle> particles;
  static Color randomColor = Colors.blue;
  static Paint? randomColorPaint;
  final List<List> lineOffsets;

  CircularParticlePainter({
    required this.particles,
    required this.lineOffsets,
  });

  @override
  void paint(Canvas canvas, Size size) {
    for (int index = 0; index < particles.length; index++) {   
        canvas.drawCircle(
            particles[index].position,
            particles[index].size,
            Paint()..color = particles[index].color,
            );
      
    }
    for (int index = 0; index < lineOffsets.length; index++){
        randomColorPaint = Paint()
          ..color = (lineOffsets[index][0] as Particle).color
          ..strokeWidth = ( 2 * (1-lineOffsets[index][2]/100)).toDouble();
        canvas.drawLine((lineOffsets[index][0] as Particle).position, (lineOffsets[index][1] as Particle).position, randomColorPaint!,);
      }
  }

  @override
  bool shouldRepaint(CustomPainter oldDelegate) {
    return true;
  }
}

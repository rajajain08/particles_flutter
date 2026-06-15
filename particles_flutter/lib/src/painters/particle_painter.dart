import 'package:flutter/material.dart';
import 'package:particles_flutter/src/component/particle_line.dart';
import 'package:particles_flutter/src/component/particle/particle.dart';

class ParticlePainter extends CustomPainter {
  final List<Particle> particles;
  static Paint? randomColorPaint;
  final List<ParticleLine> lines;
  final int activeLineCount;
  final List<List<Particle>> burstParticleLists;

  ParticlePainter({
    required this.particles,
    required this.lines,
    this.activeLineCount = -1,
    this.burstParticleLists = const [],
  });

  static final Paint _trailPaint = Paint()
    ..strokeCap = StrokeCap.round
    ..style = PaintingStyle.stroke;

  @override
  void paint(Canvas canvas, Size size) {
    // Trails drawn first (behind particles)
    for (int i = 0; i < particles.length; i++) {
      final p = particles[i];
      if (p.trailEnabled && p.trailCount > 1) {
        _paintTrail(canvas, p);
      }
    }

    for (final particle in particles) {
      particle.paint(canvas, size);
    }

    // Render burst particles — skip expired ones (dead-slot pattern)
    for (final burstList in burstParticleLists) {
      for (int i = 0; i < burstList.length; i++) {
        final p = burstList[i];
        if (p.lifetime != null && p.isExpired) continue;
        if (p.trailEnabled && p.trailCount > 1) _paintTrail(canvas, p);
        p.paint(canvas, size);
      }
    }

    final int count = activeLineCount < 0 ? lines.length : activeLineCount;
    for (int i = 0; i < count; i++) {
      lines[i].paint(canvas, size);
    }
  }

  void _paintTrail(Canvas canvas, Particle p) {
    final int count = p.trailCount;
    final Color baseColor = p.paintColor;
    const double maxSegmentLengthSq = 40.0 * 40.0; // skip wrap-around teleports

    for (int i = 0; i < count - 1; i++) {
      final a = p.trailPositionAt(i);
      final b = p.trailPositionAt(i + 1);
      final dx = b.dx - a.dx;
      final dy = b.dy - a.dy;
      // Skip segments caused by wrap-around boundary teleports
      if (dx * dx + dy * dy > maxSegmentLengthSq) continue;

      final double fraction = (i + 1) / count;
      if (p.trailFade) {
        _trailPaint.color = baseColor.withValues(alpha: fraction * baseColor.a);
        _trailPaint.strokeWidth = (fraction * 3.0).clamp(0.5, 3.0);
      } else {
        _trailPaint.color = baseColor;
        _trailPaint.strokeWidth = 2.0;
      }
      canvas.drawLine(a, b, _trailPaint);
    }
  }

  @override
  bool shouldRepaint(ParticlePainter oldDelegate) => true;
}

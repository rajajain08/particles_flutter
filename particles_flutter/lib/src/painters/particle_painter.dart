import 'package:flutter/material.dart';
import 'package:particles_flutter/src/component/particle_line.dart';
import 'package:particles_flutter/src/component/particle/particle.dart';
import 'package:particles_flutter/src/utils/burst_emitter.dart';

class ParticlePainter extends CustomPainter {
  /// Live particle list owned by the engine; mutated in place every frame.
  final List<Particle> particles;

  /// Line pool owned by the engine; only the first [activeLineCount]() entries
  /// are valid for the current frame.
  final List<ParticleLine> lines;

  /// Returns the number of valid entries in [lines] for the current frame.
  /// A negative value means "paint every pooled line".
  final int Function() activeLineCount;

  /// Burst emitters queried at paint time — their pools are created lazily,
  /// so the particle lists cannot be captured when the painter is built.
  final List<BurstEmitter> burstEmitters;

  ParticlePainter({
    required this.particles,
    required this.lines,
    int Function()? activeLineCount,
    this.burstEmitters = const [],
    Listenable? repaint,
  })  : activeLineCount = activeLineCount ?? (() => -1),
        super(repaint: repaint);

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
    for (final burst in burstEmitters) {
      final burstList = burst.particles;
      for (int i = 0; i < burstList.length; i++) {
        final p = burstList[i];
        if (p.lifetime != null && p.isExpired) continue;
        if (p.trailEnabled && p.trailCount > 1) _paintTrail(canvas, p);
        p.paint(canvas, size);
      }
    }

    final int active = activeLineCount();
    final int count = active < 0 ? lines.length : active;
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

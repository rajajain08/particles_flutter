import 'package:flutter/material.dart';
import 'package:particles_flutter/src/component/particle/particle.dart';

/// Styling for the lines drawn between close particles when
/// [Particles.connectDots] is enabled.
class ConnectionStyle {
  const ConnectionStyle({
    this.maxDistance = 110,
    this.color,
    this.strokeWidth = 1.2,
    this.distanceFade = true,
  });

  /// Particles closer than this (in px) get connected.
  final double maxDistance;

  /// Line color. `null` uses the origin particle's color.
  final Color? color;

  /// Line stroke width.
  final double strokeWidth;

  /// Fade the line out as the distance approaches [maxDistance].
  final bool distanceFade;
}

class ParticleLine extends CustomPainter {
  ParticleLine(this.origin, this.destination, this.length,
      [this.style = const ConnectionStyle()]);
  static Paint? randomColorPaint;
  Particle origin;
  Particle destination;
  double length;
  ConnectionStyle style;

  void reset(Particle newOrigin, Particle newDestination, double newLength) {
    origin = newOrigin;
    destination = newDestination;
    length = newLength;
  }

  @override
  void paint(Canvas canvas, Size size) {
    var color = style.color ?? origin.color;
    if (style.distanceFade) {
      final fade = (1 - length / style.maxDistance).clamp(0.0, 1.0);
      color = color.withValues(alpha: color.a * fade);
    }
    randomColorPaint = Paint()
      ..color = color
      ..strokeWidth = style.strokeWidth;
    canvas.drawLine(
      (origin).position,
      (destination).position,
      randomColorPaint!,
    );
  }

  @override
  bool shouldRepaint(ParticleLine oldDelegate) => true;
}

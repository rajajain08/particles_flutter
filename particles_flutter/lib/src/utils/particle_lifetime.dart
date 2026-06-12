import 'dart:ui';
import 'package:particles_flutter/src/component/particle/particle.dart';

class ParticleLifetime {
  static void update(Particle p) {
    if (p.lifetime == null) return;
    final t = p.lifetimeProgress;

    p.updateCurrentColor = _resolveColor(p, t);
    p.updateCurrentScale = _resolveScale(p, t);
    p.updateCurrentOpacity = _resolveOpacity(p, t);
  }

  static Color _resolveColor(Particle p, double rawT) {
    final t = p.colorCurve.transform(rawT);
    final gradient = p.colorGradient;
    if (gradient != null && gradient.length >= 2) {
      return _lerpGradient(gradient, t);
    }
    final end = p.endColor;
    if (end != null) return Color.lerp(p.color, end, t)!;
    return p.color;
  }

  static double _resolveScale(Particle p, double rawT) {
    final end = p.endScale;
    if (end == null) return p.startScale;
    final t = p.scaleCurve.transform(rawT);
    return p.startScale + (end - p.startScale) * t;
  }

  static double _resolveOpacity(Particle p, double rawT) {
    final end = p.endOpacity;
    if (end == null) return p.startOpacity;
    // startOpacity==0 && endOpacity==0 → triangle: fade in then out, peak at midlife
    if (p.startOpacity == 0.0 && end == 0.0) {
      final t = p.opacityCurve.transform(rawT);
      return (t <= 0.5 ? t * 2.0 : (1.0 - t) * 2.0).clamp(0.0, 1.0);
    }
    final t = p.opacityCurve.transform(rawT);
    return (p.startOpacity + (end - p.startOpacity) * t).clamp(0.0, 1.0);
  }

  static Color _lerpGradient(List<Color> stops, double t) {
    if (t <= 0) return stops.first;
    if (t >= 1) return stops.last;
    final scaled = t * (stops.length - 1);
    final i = scaled.floor();
    return Color.lerp(stops[i], stops[i + 1], scaled - i)!;
  }
}

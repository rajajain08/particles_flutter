import 'dart:ui';
import 'package:flutter/animation.dart';
import 'package:particles_flutter/src/component/particle/particle.dart';

/// Single Circular Particle
class CircularParticle extends Particle {
  CircularParticle({
    required this.radius,
    required Color color,
    required Offset velocity,
    this.glowSigma = 0,
    double rotationSpeed = 0,
    Offset? startPosition,
    double? lifetime,
    Color? endColor,
    List<Color>? colorGradient,
    Curve colorCurve = const Cubic(0, 0, 1, 1),
    double startScale = 1.0,
    double? endScale,
    Curve scaleCurve = const Cubic(0, 0, 1, 1),
    double startOpacity = 1.0,
    double? endOpacity,
    Curve opacityCurve = const Cubic(0, 0, 1, 1),
    bool trailEnabled = false,
    int trailLength = 10,
    bool trailFade = true,
  }) : super(
          color: color,
          velocity: velocity,
          rotationSpeed: rotationSpeed,
          startPosition: startPosition,
          lifetime: lifetime,
          endColor: endColor,
          colorGradient: colorGradient,
          colorCurve: colorCurve,
          startScale: startScale,
          endScale: endScale,
          scaleCurve: scaleCurve,
          startOpacity: startOpacity,
          endOpacity: endOpacity,
          opacityCurve: opacityCurve,
          trailEnabled: trailEnabled,
          trailLength: trailLength,
          trailFade: trailFade,
        );

  /// Define the radius of the circular particle
  final double radius;

  /// Blur sigma of a soft glow halo drawn behind the particle. 0 = no glow.
  ///
  /// The halo is a blurred circle at ~1.8x [radius] in the particle's current
  /// color, so fades/color-over-lifetime apply to it too. Blur has a real
  /// per-particle cost — great for dozens of fireflies/stars, measure before
  /// enabling it on hundreds of particles.
  final double glowSigma;

  @override
  void drawParticle(Canvas canvas, Size size) {
    final center = Offset(size.width / 2, size.height / 2);
    if (glowSigma > 0) {
      canvas.drawCircle(
        center,
        radius * 1.8,
        Paint()
          ..color = paintColor
          ..maskFilter = MaskFilter.blur(BlurStyle.normal, glowSigma),
      );
    }
    canvas.drawCircle(center, radius, Paint()..color = paintColor);
  }
}

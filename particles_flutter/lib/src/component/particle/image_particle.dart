import 'dart:ui';
import 'package:flutter/animation.dart';
import 'package:particles_flutter/src/component/particle/particle.dart';

/// Single Image Particle
class ImageParticle extends Particle {
  ImageParticle({
    required this.particleImage,
    required this.height,
    required this.width,
    required Color color,
    required Offset velocity,
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

  ImageParticle.ratio({
    required this.particleImage,

    /// % Ratio of the original image size
    required double sizeRatio,
    required Color color,
    required Offset velocity,
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
  })  : this.height = particleImage.height.toDouble() * sizeRatio,
        this.width = particleImage.width.toDouble() * sizeRatio,
        super(
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

  final Image particleImage;

  /// Define the height of the image particle
  final double height;

  /// Define the width of the image particle
  final double width;

  @override
  void drawParticle(Canvas canvas, Size size) {
    Rect src = Rect.fromLTWH(
        0, 0, particleImage.width.toDouble(), particleImage.height.toDouble());
    Rect dest =
        Rect.fromCenter(center: Offset.zero, width: width, height: height);
    canvas.drawImageRect(particleImage, src, dest, Paint()..color = paintColor);
  }
}

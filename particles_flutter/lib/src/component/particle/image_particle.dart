import 'dart:ui';
import 'package:particles_flutter/src/component/particle/particle.dart';

/// Single Rectangular Particle
class ImageParticle extends Particle {
  ImageParticle({
    required this.particleImage,
    required this.height,
    required this.width,
    required Color color,
    required Offset velocity,
    double rotationSpeed = 0,
  }) : super(color: color, velocity: velocity, rotationSpeed: rotationSpeed);

  ImageParticle.ratio({
    required this.particleImage,

    /// % Ratio of the original image size
    required double sizeRatio,
    required Color color,
    required Offset velocity,
    double rotationSpeed = 0,
  })  : this.height = particleImage.height.toDouble() * sizeRatio,
        this.width = particleImage.width.toDouble() * sizeRatio,
        super(color: color, velocity: velocity, rotationSpeed: rotationSpeed);

  /// Define the height of the rectangular particle
  final Image particleImage;

  /// Define the height of the rectangular particle
  final double height;

  /// Define the width of the rectangular particle
  final double width;

  @override
  void drawParticle(Canvas canvas, Size size) {
    Rect src = Rect.fromLTWH(
        0, 0, particleImage.width.toDouble(), particleImage.height.toDouble());
    Rect dest =
        Rect.fromCenter(center: Offset.zero, width: width, height: height);
    canvas.drawImageRect(particleImage, src, dest, Paint()..color = color);
  }
}

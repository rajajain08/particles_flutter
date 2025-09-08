import 'dart:ui';
import 'dart:ui' as ui;
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

  /// Define the height of the rectangular particle
  final ui.Image particleImage;

  /// Define the height of the rectangular particle
  final double height;

  /// Define the width of the rectangular particle
  final double width;

  @override
  void DrawParticle(Canvas canvas, Size size) {
    Rect src = Rect.fromLTWH(0, 0, particleImage.width.toDouble(), particleImage.height.toDouble());
    Rect dest = Rect.fromCenter(
      center: Offset.zero,
      width:width, 
      height:height
    );
    canvas.drawImageRect(
          particleImage,
          src,
          dest,
          Paint()..color = color
        );
    }
}
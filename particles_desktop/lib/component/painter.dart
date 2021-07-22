import 'package:flutter/material.dart';

class ParticlePainter extends CustomPainter {
  final List<Offset> offsets;
  final bool isRandomColor;
  final Color particleColor;
  final Paint constColorPaint;
  final double maxParticleSize;
  static Color randomColor = Colors.blue;
  static Paint? randomColorPaint;
  final Paint hoverPaint;
  final List<double> randSize;
  final bool isRandSize;
  final List<Color> randColorList;
  final List<int> hoverIndex;
  final bool enableHover;
  final Color hoverColor;

  ParticlePainter({
    required this.enableHover,
    required this.randColorList,
    required this.isRandSize,
    required this.maxParticleSize,
    required this.offsets,
    required this.isRandomColor,
    required this.particleColor,
    required this.randSize,
    required this.hoverIndex,
    required this.hoverColor,
  })  : constColorPaint = Paint()..color = particleColor,
        hoverPaint = Paint()..color = hoverColor;

  @override
  void paint(Canvas canvas, Size size) {
    for (int index = 0; index < offsets.length; index++) {
      if (isRandomColor) {
        randomColor = randColorList[index % randColorList.length];

        randomColorPaint = Paint()..color = randomColor;
        canvas.drawCircle(
            offsets[index],
            isRandSize ? maxParticleSize * (randSize[index]) : maxParticleSize,
            hoverIndex.contains(index) ? hoverPaint : randomColorPaint!);
      } else {
        randomColorPaint = Paint()..color = randomColor;
        canvas.drawCircle(
            offsets[index],
            isRandSize ? maxParticleSize * (randSize[index]) : maxParticleSize,
            hoverIndex.contains(index) ? hoverPaint : constColorPaint);
      }
    }
  }

  @override
  bool shouldRepaint(CustomPainter oldDelegate) {
    return true;
  }
}

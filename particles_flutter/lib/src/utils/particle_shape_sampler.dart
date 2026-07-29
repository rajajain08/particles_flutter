import 'dart:math';
import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';

/// Samples pixel positions from rendered text or an image, so particles can
/// be placed to form that shape (e.g. an emitter's `startPosition`s or as
/// each [Particle]'s `startPosition`).
///
/// Typical use: dissolve/assemble text or a logo into particles.
/// ```dart
/// final points = await ParticleShapeSampler.fromText(
///   'HELLO',
///   style: const TextStyle(fontSize: 120, fontWeight: FontWeight.bold),
///   maxPoints: 400,
/// );
/// final particles = [
///   for (final p in points)
///     CircularParticle(radius: 2, color: Colors.white, velocity: Offset.zero,
///         startPosition: p),
/// ];
/// ```
class ParticleShapeSampler {
  const ParticleShapeSampler._();

  /// Renders [text] offscreen and returns sample points covering its
  /// non-transparent pixels, offset by [offset].
  ///
  /// [step] controls sampling density in pixels between candidate points
  /// (lower = denser, more points). [maxPoints] caps the result, randomly
  /// choosing among candidates so shape coverage stays even when capped.
  /// [alphaThreshold] (0-255) is the minimum pixel alpha to count as "inside"
  /// the shape.
  static Future<List<Offset>> fromText(
    String text, {
    TextStyle style = const TextStyle(fontSize: 96, color: Colors.white),
    Offset offset = Offset.zero,
    double step = 4,
    int? maxPoints,
    int alphaThreshold = 32,
  }) async {
    final painter = TextPainter(
      text: TextSpan(text: text, style: style),
      textDirection: TextDirection.ltr,
    )..layout();

    final recorder = ui.PictureRecorder();
    final canvas = Canvas(recorder);
    painter.paint(canvas, Offset.zero);
    final picture = recorder.endRecording();

    final width = painter.width.ceil();
    final height = painter.height.ceil();
    if (width <= 0 || height <= 0) return const [];

    final image = await picture.toImage(width, height);
    try {
      return await fromImage(
        image,
        offset: offset,
        step: step,
        maxPoints: maxPoints,
        alphaThreshold: alphaThreshold,
      );
    } finally {
      image.dispose();
    }
  }

  /// Returns sample points covering [image]'s non-transparent pixels,
  /// offset by [offset]. See [fromText] for parameter semantics.
  static Future<List<Offset>> fromImage(
    ui.Image image, {
    Offset offset = Offset.zero,
    double step = 4,
    int? maxPoints,
    int alphaThreshold = 32,
  }) async {
    final byteData = await image.toByteData(format: ui.ImageByteFormat.rawRgba);
    if (byteData == null) return const [];

    final points = _samplePoints(
      byteData,
      image.width,
      image.height,
      offset: offset,
      step: step,
      alphaThreshold: alphaThreshold,
    );

    if (maxPoints == null || points.length <= maxPoints) return points;

    final rng = Random();
    points.shuffle(rng);
    return points.sublist(0, maxPoints);
  }

  static List<Offset> _samplePoints(
    ByteData byteData,
    int width,
    int height, {
    required Offset offset,
    required double step,
    required int alphaThreshold,
  }) {
    final points = <Offset>[];
    final stride = step.floor().clamp(1, 1 << 30);

    for (int y = 0; y < height; y += stride) {
      for (int x = 0; x < width; x += stride) {
        final pixelIndex = (y * width + x) * 4;
        final alpha = byteData.getUint8(pixelIndex + 3);
        if (alpha >= alphaThreshold) {
          points.add(Offset(x + offset.dx, y + offset.dy));
        }
      }
    }
    return points;
  }
}

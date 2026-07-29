import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:particles_flutter/engine.dart';

void main() {
  testWidgets('samples non-empty points from text', (tester) async {
    late List<Offset> points;
    await tester.runAsync(() async {
      points = await ParticleShapeSampler.fromText(
        'HI',
        style: const TextStyle(fontSize: 80, color: Colors.white),
        step: 3,
      );
    });
    expect(points, isNotEmpty);
    for (final p in points) {
      expect(p.dx.isFinite, true);
      expect(p.dy.isFinite, true);
    }
  });

  testWidgets('maxPoints caps result', (tester) async {
    late List<Offset> points;
    await tester.runAsync(() async {
      points = await ParticleShapeSampler.fromText(
        'WORLD',
        style: const TextStyle(fontSize: 120, color: Colors.white),
        step: 2,
        maxPoints: 50,
      );
    });
    expect(points.length, lessThanOrEqualTo(50));
  });

  testWidgets('empty text returns empty list', (tester) async {
    late List<Offset> points;
    await tester.runAsync(() async {
      points = await ParticleShapeSampler.fromText('');
    });
    expect(points, isEmpty);
  });
}

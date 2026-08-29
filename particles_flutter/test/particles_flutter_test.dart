import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:particles_flutter/engine.dart';
import 'package:particles_flutter/src/core/runner.dart';

List<Particle> _makeParticles(int count) => List.generate(
      count,
      (i) => CircularParticle(
        color: Colors.white,
        velocity: const Offset(20, 20),
        radius: 2,
      ),
    );

void main() {
  testWidgets('engine animates particles without per-frame setState',
      (tester) async {
    final particles = _makeParticles(5);
    await tester.pumpWidget(MaterialApp(
      home: Particles(particles: particles, width: 200, height: 200),
    ));
    // Post-frame init runs after the first frame.
    await tester.pump();
    final before = particles.map((p) => p.position).toList();
    await tester.pump(const Duration(milliseconds: 100));
    await tester.pump(const Duration(milliseconds: 100));
    final after = particles.map((p) => p.position).toList();
    expect(before, isNot(equals(after)),
        reason: 'particles should move between frames');
  });

  testWidgets('ticker respects TickerMode (vsync fix)', (tester) async {
    final particles = _makeParticles(5);
    final tickerMode = ValueNotifier<bool>(true);
    await tester.pumpWidget(MaterialApp(
      home: ValueListenableBuilder<bool>(
        valueListenable: tickerMode,
        builder: (context, enabled, _) => TickerMode(
          enabled: enabled,
          child: Particles(particles: particles, width: 200, height: 200),
        ),
      ),
    ));
    await tester.pump();
    await tester.pump(const Duration(milliseconds: 50));

    tickerMode.value = false;
    await tester.pump();
    final frozen = particles.map((p) => p.position).toList();
    await tester.pump(const Duration(milliseconds: 200));
    final stillFrozen = particles.map((p) => p.position).toList();
    expect(frozen, equals(stillFrozen),
        reason: 'muted ticker must not advance particles');

    tickerMode.value = true;
    await tester.pump();
    await tester.pump(const Duration(milliseconds: 200));
    final resumed = particles.map((p) => p.position).toList();
    expect(resumed, isNot(equals(frozen)),
        reason: 'particles should resume when TickerMode re-enables');
    tickerMode.dispose();
  });

  testWidgets('swapping the particle set via a new Key re-initializes',
      (tester) async {
    final first = _makeParticles(3);
    final second = _makeParticles(7);
    final listToShow = ValueNotifier<List<Particle>>(first);
    await tester.pumpWidget(MaterialApp(
      home: ValueListenableBuilder<List<Particle>>(
        valueListenable: listToShow,
        builder: (context, list, _) => Particles(
          key: ValueKey(list),
          particles: list,
          width: 200,
          height: 200,
        ),
      ),
    ));
    await tester.pump();
    await tester.pump(const Duration(milliseconds: 50));

    listToShow.value = second;
    await tester.pump();
    await tester.pump(const Duration(milliseconds: 50));
    await tester.pump(const Duration(milliseconds: 50));

    // New list particles must be the ones animating now.
    final moved = second.where((p) => p.position != Offset.zero);
    expect(moved, isNotEmpty,
        reason: 'new particle list should be initialized and animating');
    listToShow.dispose();
  });

  testWidgets('parent rebuild with a fresh inline list does not reset scene',
      (tester) async {
    // Mirrors the confetti demo: the parent constructs the particle list and
    // emitter inline in build, and taps trigger setState. The engine must
    // keep animating its captured set, not re-initialize per rebuild.
    List<Particle>? firstBuiltList;
    final rebuildTick = ValueNotifier<int>(0);
    await tester.pumpWidget(MaterialApp(
      home: ValueListenableBuilder<int>(
        valueListenable: rebuildTick,
        builder: (context, _, __) {
          final list = _makeParticles(4);
          firstBuiltList ??= list;
          return Particles(particles: list, width: 200, height: 200);
        },
      ),
    ));
    await tester.pump();
    await tester.pump(const Duration(milliseconds: 50));
    final captured = firstBuiltList!;
    final before = captured.map((p) => p.position).toList();
    expect(before.where((o) => o != Offset.zero), isNotEmpty,
        reason: 'captured list should be initialized');

    // Parent rebuilds with a brand-new list (confetti tap pattern).
    rebuildTick.value++;
    await tester.pump();
    await tester.pump(const Duration(milliseconds: 50));

    final after = captured.map((p) => p.position).toList();
    expect(after, isNot(equals(before)),
        reason: 'originally captured particles must still be the ones animating');
    expect(tester.takeException(), isNull);
    rebuildTick.dispose();
  });

  testWidgets('emitter emit loop stops after dispose (cancellation fix)',
      (tester) async {
    final particles = _makeParticles(10);
    await tester.pumpWidget(MaterialApp(
      home: Particles(
        particles: particles,
        width: 200,
        height: 200,
        particleEmitter: const Emitter(
          startPosition: Offset(100, 100),
          clusterSize: 1,
          delay: Duration(milliseconds: 100),
        ),
      ),
    ));
    await tester.pump();
    await tester.pump(const Duration(milliseconds: 150));

    // Dispose the engine while the emit loop still has particles queued.
    await tester.pumpWidget(const MaterialApp(home: SizedBox()));
    // Let any stray delayed futures fire; cancelled loop must not throw or
    // keep emitting.
    await tester.pump(const Duration(seconds: 2));
    expect(tester.takeException(), isNull);
  });

  testWidgets('in-place slot swap is picked up by engine (pool cycle pattern)',
      (tester) async {
    // Mirrors the Pool Cycle example: a fixed list whose entries are replaced
    // in place when a particle expires. The engine must animate the NEW
    // object, not a stale copy of the list.
    final expired = <Particle>[];
    final particles = <Particle>[
      CircularParticle(
        color: Colors.white,
        velocity: Offset.zero,
        radius: 4,
        lifetime: 0.2,
        startPosition: const Offset(50, 50),
      ),
    ];
    late CircularParticle replacement;
    await tester.pumpWidget(MaterialApp(
      home: StatefulBuilder(
        builder: (context, setState) => Particles(
          particles: particles,
          width: 200,
          height: 200,
          onParticleExpired: (p) {
            if (expired.isNotEmpty) return;
            expired.add(p);
            replacement = CircularParticle(
              color: Colors.red,
              velocity: Offset.zero,
              radius: 4,
              lifetime: 10,
              startPosition: const Offset(120, 120),
            );
            particles[0] = replacement;
          },
        ),
      ),
    ));
    await tester.pump();
    // Advance past the 0.2s lifetime so the swap fires.
    for (int i = 0; i < 6; i++) {
      await tester.pump(const Duration(milliseconds: 100));
    }
    expect(expired, isNotEmpty, reason: 'lifetime should have expired');
    expect(replacement.age, greaterThan(0),
        reason: 'engine must be aging the swapped-in particle');
    expect(replacement.position, const Offset(120, 120),
        reason: 'explicit start position must be respected (zero velocity)');
  });

  testWidgets('runner correction factor stays finite', (tester) async {
    final corrections = <double>[];
    final runner = Runner();
    runner.run(const TestVSync(), (dt, correction) {
      corrections.add(correction);
    });
    await tester.pump(const Duration(milliseconds: 16));
    await tester.pump(const Duration(milliseconds: 16));
    await tester.pump(const Duration(milliseconds: 16));
    runner.stop();
    expect(corrections, isNotEmpty);
    for (final c in corrections) {
      expect(c.isFinite, isTrue, reason: 'correction must never be Infinity/NaN');
    }
  });
}

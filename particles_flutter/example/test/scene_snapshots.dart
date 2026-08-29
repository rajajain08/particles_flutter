import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:google_fonts/google_fonts.dart';

import 'package:example/guide/index_screen.dart';
import 'package:example/scenes/checkout_scene.dart';

/// Dev-aid snapshots: render screens at fixed moments so layout and particle
/// motion can be inspected as images. Not named *_test.dart on purpose — run
/// explicitly with:
///   flutter test --update-goldens test/scene_snapshots.dart
/// Text renders in the test-only Ahem font (solid blocks); judge layout and
/// particles here, not typography.
void main() {
  setUpAll(() {
    GoogleFonts.config.allowRuntimeFetching = false;
  });

  Future<void> setSurface(WidgetTester tester, Size logical) async {
    tester.view.physicalSize = logical * 2;
    tester.view.devicePixelRatio = 2.0;
    addTearDown(tester.view.reset);
  }

  /// Advances [ms] in 16ms ticks so tickers actually run.
  Future<void> tick(WidgetTester tester, int ms) async {
    for (var t = 0; t < ms; t += 16) {
      await tester.pump(const Duration(milliseconds: 16));
    }
  }

  group('checkout', () {
    Future<void> pumpScene(WidgetTester tester) async {
      await setSurface(tester, const Size(390, 844));
      await tester.pumpWidget(MaterialApp(
        debugShowCheckedModeBanner: false,
        home: Scaffold(
          body:
              Builder(builder: (context) => checkoutSpecimen.builder(context)),
        ),
      ));
      await tester.pump();
    }

    for (final ms in const [300, 900, 1800]) {
      testWidgets('confetti at ${ms}ms after burst', (tester) async {
        await pumpScene(tester);
        await tick(tester, 420 + 240 + ms);
        await expectLater(
          find.byType(MaterialApp),
          matchesGoldenFile('snapshots/checkout_burst_$ms.png'),
        );
      });
    }
  });

  group('index', () {
    testWidgets('phone', (tester) async {
      await setSurface(tester, const Size(390, 844));
      await tester.pumpWidget(const MaterialApp(
        debugShowCheckedModeBanner: false,
        home: IndexScreen(),
      ));
      await tester.pump();
      await tick(tester, 2500);
      await expectLater(
        find.byType(MaterialApp),
        matchesGoldenFile('snapshots/index_phone.png'),
      );
    });

    testWidgets('wide', (tester) async {
      await setSurface(tester, const Size(1400, 900));
      await tester.pumpWidget(const MaterialApp(
        debugShowCheckedModeBanner: false,
        home: IndexScreen(),
      ));
      await tester.pump();
      await tick(tester, 2500);
      await expectLater(
        find.byType(MaterialApp),
        matchesGoldenFile('snapshots/index_wide.png'),
      );
    });
  });
}

import 'package:flutter_test/flutter_test.dart';
import 'package:google_fonts/google_fonts.dart';

import 'package:example/main.dart';
import 'package:example/guide/registry.dart';

void main() {
  setUpAll(() {
    GoogleFonts.config.allowRuntimeFetching = false;
  });

  testWidgets('field guide index shows all specimens', (tester) async {
    await tester.pumpWidget(const FieldGuideApp());
    await tester.pump();

    expect(find.text('Particles in real interfaces'), findsOneWidget);
    expect(specimens.length, 11);
    // The phone index is a virtualized ListView — scroll each row into view.
    for (final s in specimens) {
      await tester.scrollUntilVisible(find.text(s.title), 80);
      expect(find.text(s.title), findsOneWidget);
    }
  });
}

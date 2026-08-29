import 'package:flutter/material.dart';
import 'field_notes_sheet.dart';
import 'specimen.dart';
import 'specimen_band.dart';

/// Wraps a scene's content with the specimen band at the bottom.
///
/// The scene fills all space above the band; the band is always the paper
/// strip, whatever palette the scene uses.
class SpecimenScaffold extends StatelessWidget {
  const SpecimenScaffold({
    super.key,
    required this.specimen,
    required this.child,
    this.background,
  });

  final Specimen specimen;
  final Widget child;

  /// Scene background color, painted behind [child].
  final Color? background;

  @override
  Widget build(BuildContext context) {
    return Container(
      color: background,
      child: Column(
        children: [
          Expanded(child: child),
          Builder(
            builder: (context) => SpecimenBand(
              left: 'Specimen ${specimen.numberLabel}',
              right: specimen.apiLabel,
              // The band is the door to the field notes — the "how do I
              // build this?" sheet with the real code.
              onTap: () => showFieldNotes(context, specimen),
            ),
          ),
        ],
      ),
    );
  }
}

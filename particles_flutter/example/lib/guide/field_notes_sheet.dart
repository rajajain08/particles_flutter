import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'field_notes.dart';
import 'specimen.dart';
import 'theme.dart';

/// Bottom sheet with a specimen's field notes: what it demonstrates, the
/// minimal real code, and a small API glossary.
void showFieldNotes(BuildContext context, Specimen specimen) {
  final notes = fieldNotes[specimen.number];
  if (notes == null) return;
  showModalBottomSheet<void>(
    context: context,
    backgroundColor: GuideTheme.paper,
    isScrollControlled: true,
    shape: const RoundedRectangleBorder(
      borderRadius: BorderRadius.vertical(top: Radius.circular(18)),
    ),
    builder: (context) => _FieldNotesSheet(specimen: specimen, notes: notes),
  );
}

class _FieldNotesSheet extends StatelessWidget {
  const _FieldNotesSheet({required this.specimen, required this.notes});

  final Specimen specimen;
  final FieldNotes notes;

  @override
  Widget build(BuildContext context) {
    return DraggableScrollableSheet(
      expand: false,
      initialChildSize: 0.72,
      maxChildSize: 0.94,
      minChildSize: 0.4,
      builder: (context, scrollController) => ListView(
        controller: scrollController,
        padding: const EdgeInsets.fromLTRB(24, 14, 24, 32),
        children: [
          Center(
            child: Container(
              width: 40,
              height: 4,
              decoration: BoxDecoration(
                color: GuideTheme.dashed,
                borderRadius: BorderRadius.circular(2),
              ),
            ),
          ),
          const SizedBox(height: 18),
          Text(
            'FIELD NOTES · SPECIMEN ${specimen.numberLabel}',
            style: GuideTheme.mono(size: 10, letterSpacing: 1.6),
          ),
          const SizedBox(height: 6),
          Text(
            specimen.title,
            style: GuideTheme.serif(size: 28, weight: FontWeight.w600),
          ),
          const SizedBox(height: 12),
          Text(
            notes.what,
            style: GuideTheme.serif(
                size: 15, color: GuideTheme.mutedInk, height: 1.5),
          ),
          const SizedBox(height: 18),
          _CodeBlock(code: notes.snippet),
          const SizedBox(height: 20),
          Text(
            'ON DISPLAY',
            style: GuideTheme.mono(size: 10, letterSpacing: 1.6),
          ),
          const SizedBox(height: 8),
          for (final (name, why) in notes.apis)
            Padding(
              padding: const EdgeInsets.only(bottom: 8),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Container(
                    padding:
                        const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                    decoration: BoxDecoration(
                      color: GuideTheme.card,
                      border: Border.all(color: GuideTheme.border),
                      borderRadius: BorderRadius.circular(999),
                    ),
                    child: Text(name,
                        style: GuideTheme.mono(
                            size: 10.5, color: GuideTheme.ink)),
                  ),
                  const SizedBox(width: 10),
                  Expanded(
                    child: Padding(
                      padding: const EdgeInsets.only(top: 3),
                      child: Text(
                        why,
                        style: GuideTheme.serif(
                            size: 13.5,
                            color: GuideTheme.mutedInk,
                            height: 1.35),
                      ),
                    ),
                  ),
                ],
              ),
            ),
        ],
      ),
    );
  }
}

class _CodeBlock extends StatefulWidget {
  const _CodeBlock({required this.code});

  final String code;

  @override
  State<_CodeBlock> createState() => _CodeBlockState();
}

class _CodeBlockState extends State<_CodeBlock> {
  bool _copied = false;

  Future<void> _copy() async {
    await Clipboard.setData(ClipboardData(text: widget.code));
    if (!mounted) return;
    setState(() => _copied = true);
    await Future<void>.delayed(const Duration(milliseconds: 1400));
    if (mounted) setState(() => _copied = false);
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: GuideTheme.ink,
        borderRadius: BorderRadius.circular(12),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(16, 10, 8, 0),
            child: Row(
              children: [
                Text('DART',
                    style: GuideTheme.mono(
                        size: 9, color: GuideTheme.faintInk,
                        letterSpacing: 1.4)),
                const Spacer(),
                TextButton.icon(
                  onPressed: _copy,
                  icon: Icon(_copied ? Icons.check : Icons.copy_all,
                      size: 14, color: GuideTheme.paper),
                  label: Text(_copied ? 'copied' : 'copy',
                      style:
                          GuideTheme.mono(size: 10, color: GuideTheme.paper)),
                ),
              ],
            ),
          ),
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            padding: const EdgeInsets.fromLTRB(16, 0, 16, 16),
            child: Text(
              widget.code,
              style: GuideTheme.mono(
                  size: 12, color: const Color(0xFFEDE9DF), letterSpacing: 0),
            ),
          ),
        ],
      ),
    );
  }
}

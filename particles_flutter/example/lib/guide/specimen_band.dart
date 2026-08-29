import 'package:flutter/material.dart';
import 'theme.dart';

/// The paper "museum label" strip at the bottom of every screen.
///
/// When [onTap] is set the band becomes the door to the specimen's field
/// notes, and shows a small book glyph as the affordance.
class SpecimenBand extends StatelessWidget {
  const SpecimenBand({
    super.key,
    required this.left,
    required this.right,
    this.onTap,
  });

  final String left;
  final String right;
  final VoidCallback? onTap;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: GuideTheme.paper,
      child: InkWell(
        onTap: onTap,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            const _DashedDivider(),
            Padding(
              padding: const EdgeInsets.fromLTRB(22, 12, 22, 15),
              child: Row(
                children: [
                  if (onTap != null) ...[
                    const Icon(Icons.menu_book_outlined,
                        size: 13, color: GuideTheme.rust),
                    const SizedBox(width: 7),
                  ],
                  Text(left.toUpperCase(), style: GuideTheme.mono(size: 10)),
                  const Spacer(),
                  Flexible(
                    child: Text(
                      right,
                      style: GuideTheme.mono(size: 10),
                      overflow: TextOverflow.ellipsis,
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _DashedDivider extends StatelessWidget {
  const _DashedDivider();

  @override
  Widget build(BuildContext context) {
    return const CustomPaint(
      size: Size(double.infinity, 1),
      painter: _DashPainter(),
    );
  }
}

class _DashPainter extends CustomPainter {
  const _DashPainter();

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = GuideTheme.dashed
      ..strokeWidth = 1;
    const dash = 5.0, gap = 4.0;
    var x = 0.0;
    while (x < size.width) {
      canvas.drawLine(Offset(x, 0), Offset(x + dash, 0), paint);
      x += dash + gap;
    }
  }

  @override
  bool shouldRepaint(_DashPainter oldDelegate) => false;
}

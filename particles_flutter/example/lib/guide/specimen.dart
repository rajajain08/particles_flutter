import 'package:flutter/widgets.dart';

/// One entry in the field guide: a real-world scene plus its label metadata.
class Specimen {
  const Specimen({
    required this.number,
    required this.title,
    required this.apiLabel,
    required this.builder,
    this.subtitle = '',
  });

  /// 1-based specimen number, shown as `01`, `02`, ...
  final int number;

  /// Index/list title, e.g. "Checkout success".
  final String title;

  /// One-line field-note for the index, e.g. "confetti when the money lands".
  final String subtitle;

  /// Right side of the specimen band, e.g. "n=80 · BurstEmitter · ConeBurst".
  final String apiLabel;

  /// Builds the scene content (everything above the specimen band).
  final WidgetBuilder builder;

  String get numberLabel => number.toString().padLeft(2, '0');
}

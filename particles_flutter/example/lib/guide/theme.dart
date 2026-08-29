import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

/// Design tokens for the Field Guide shell.
///
/// The shell is warm paper with ink type; scenes keep their own native app
/// palettes inside it. Values come from the approved design canvas.
abstract class GuideTheme {
  // Shell palette
  static const paper = Color(0xFFF7F4EE);
  static const card = Color(0xFFFFFDF8);
  static const ink = Color(0xFF1C1A17);
  static const rust = Color(0xFF8A4B2D);
  static const border = Color(0xFFE4DDCD);
  static const dashed = Color(0xFFC9C2B2);
  static const mutedInk = Color(0xFF6F6857);
  static const faintInk = Color(0xFFA49B86);

  // Specimen dot colors, by specimen number (1-based).
  static const dotColors = <int, Color>{
    1: Color(0xFFD94F30),
    2: Color(0xFF3D7DC4),
    3: Color(0xFFC98A1B),
    4: Color(0xFF1C1A17),
    5: Color(0xFF7A5FA8),
    6: Color(0xFF5A8A4F),
    7: Color(0xFF3A8F8A),
    8: Color(0xFFE0A83C),
    9: Color(0xFF9DB8D4),
    10: Color(0xFFD0603E),
    11: Color(0xFFB89AE0),
  };

  /// Serif display/body face.
  static TextStyle serif({
    double size = 16,
    FontWeight weight = FontWeight.w400,
    Color color = ink,
    double? height,
    FontStyle style = FontStyle.normal,
  }) =>
      GoogleFonts.newsreader(
        fontSize: size,
        fontWeight: weight,
        color: color,
        height: height,
        fontStyle: style,
      );

  /// Mono labels (specimen bands, numbers, metadata).
  static TextStyle mono({
    double size = 11,
    FontWeight weight = FontWeight.w400,
    Color color = rust,
    double letterSpacing = 0.6,
  }) =>
      GoogleFonts.ibmPlexMono(
        fontSize: size,
        fontWeight: weight,
        color: color,
        letterSpacing: letterSpacing,
      );
}

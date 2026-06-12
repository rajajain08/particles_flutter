import 'package:flutter/material.dart';
import 'screens/splash_screen.dart';

void main() => runApp(const MyApp());

// Deep space blue — not pure black, not grey. Feels alive.
const Color _kBase       = Color(0xFF080B14);
const Color _kSurface    = Color(0xFF0D1120);
const Color _kSurface2   = Color(0xFF111827);
const Color _kSeed       = Color(0xFF7C4DFF);

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'particles flutter',
      debugShowCheckedModeBanner: false,
      themeMode: ThemeMode.dark,
      darkTheme: ThemeData(
        useMaterial3: true,
        brightness: Brightness.dark,
        colorScheme: ColorScheme.fromSeed(
          seedColor: _kSeed,
          brightness: Brightness.dark,
          surface: _kSurface,
          onSurface: Colors.white,
        ),
        scaffoldBackgroundColor: _kBase,
        navigationRailTheme: NavigationRailThemeData(
          backgroundColor: _kSurface,
          indicatorColor: _kSeed.withValues(alpha: 0.18),
          selectedIconTheme: const IconThemeData(color: _kSeed),
          unselectedIconTheme: const IconThemeData(color: Colors.white38),
          selectedLabelTextStyle: const TextStyle(
            color: _kSeed,
            fontSize: 10,
            fontWeight: FontWeight.w700,
          ),
          unselectedLabelTextStyle: const TextStyle(
            color: Colors.white38,
            fontSize: 10,
          ),
        ),
        cardTheme: CardThemeData(
          color: _kSurface2,
          elevation: 0,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(12),
            side: BorderSide(color: Colors.white.withValues(alpha: 0.08)),
          ),
        ),
        sliderTheme: const SliderThemeData(
          trackHeight: 2,
          thumbShape: RoundSliderThumbShape(enabledThumbRadius: 6),
          overlayShape: RoundSliderOverlayShape(overlayRadius: 14),
        ),
        dividerTheme: DividerThemeData(
          color: Colors.white.withValues(alpha: 0.08),
          space: 1,
        ),
        fontFamily: 'Roboto',
      ),
      home: const SplashScreen(),
    );
  }
}

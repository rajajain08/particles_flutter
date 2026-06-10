import 'package:flutter/material.dart';
import 'screens/splash_screen.dart';

void main() => runApp(const MyApp());

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
          seedColor: const Color(0xFF7C4DFF),
          brightness: Brightness.dark,
          surface: const Color(0xFF0D0D0D),
          onSurface: Colors.white,
        ),
        scaffoldBackgroundColor: Colors.black,
        navigationRailTheme: const NavigationRailThemeData(
          backgroundColor: Color(0xFF090909),
          indicatorColor: Color(0x337C4DFF),
          selectedIconTheme: IconThemeData(color: Color(0xFF7C4DFF)),
          unselectedIconTheme: IconThemeData(color: Colors.white38),
          selectedLabelTextStyle: TextStyle(
            color: Color(0xFF7C4DFF),
            fontSize: 10,
            fontWeight: FontWeight.w700,
          ),
          unselectedLabelTextStyle: TextStyle(
            color: Colors.white38,
            fontSize: 10,
          ),
        ),
        cardTheme: CardThemeData(
          color: const Color(0xFF111111),
          elevation: 0,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(12),
            side: const BorderSide(color: Colors.white10),
          ),
        ),
        sliderTheme: SliderThemeData(
          trackHeight: 2,
          thumbShape: const RoundSliderThumbShape(enabledThumbRadius: 6),
          overlayShape: const RoundSliderOverlayShape(overlayRadius: 14),
        ),
        dividerTheme: const DividerThemeData(color: Colors.white10, space: 1),
        fontFamily: 'Roboto',
      ),
      home: const SplashScreen(),
    );
  }
}

import 'package:flutter/material.dart';
import 'guide/index_screen.dart';
import 'guide/theme.dart';

void main() {
  runApp(const FieldGuideApp());
}

class FieldGuideApp extends StatelessWidget {
  const FieldGuideApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Particles in the Wild',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        scaffoldBackgroundColor: GuideTheme.paper,
        colorScheme: ColorScheme.fromSeed(seedColor: GuideTheme.rust),
        useMaterial3: true,
      ),
      home: const IndexScreen(),
    );
  }
}

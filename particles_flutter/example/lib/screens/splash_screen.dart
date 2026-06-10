import 'dart:async';
import 'dart:math';
import 'dart:ui' as ui;
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:particles_flutter/engine.dart';
import 'package:particles_flutter/interactions.dart';
import 'demo_shell.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen>
    with SingleTickerProviderStateMixin {
  late final AnimationController _fade;
  late final Animation<double> _opacity;

  @override
  void initState() {
    super.initState();
    _fade = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 900),
    )..forward();
    _opacity = CurvedAnimation(parent: _fade, curve: Curves.easeOut);
    _load();
  }

  @override
  void dispose() {
    _fade.dispose();
    super.dispose();
  }

  Future<void> _load() async {
    final img = await _loadImage('assets/snowflake.png');
    if (!mounted) return;
    Navigator.pushReplacement(
      context,
      PageRouteBuilder(
        transitionDuration: const Duration(milliseconds: 600),
        pageBuilder: (_, __, ___) => DemoShell(snowflake: img),
        transitionsBuilder: (_, anim, __, child) =>
            FadeTransition(opacity: anim, child: child),
      ),
    );
  }

  Future<ui.Image> _loadImage(String path) async {
    final data = await rootBundle.load(path);
    final completer = Completer<ui.Image>();
    ui.decodeImageFromList(Uint8List.view(data.buffer), completer.complete);
    return completer.future;
  }

  List<Particle> _buildSplashParticles(Size size) {
    final rng = Random();
    const colors = [
      Color(0xFF7C4DFF),
      Color(0xFF00E5FF),
      Color(0xFFFF4081),
      Color(0xFFFFD740),
    ];
    return List.generate(60, (_) {
      final color = colors[rng.nextInt(colors.length)];
      return CircularParticle(
        radius: rng.nextDouble() * 2.5 + 0.5,
        color: color.withValues(alpha: rng.nextDouble() * 0.5 + 0.2),
        velocity: Offset(
          (rng.nextDouble() - 0.5) * 40,
          (rng.nextDouble() - 0.5) * 40,
        ),
      );
    });
  }

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    return Scaffold(
      backgroundColor: Colors.black,
      body: Stack(
        fit: StackFit.expand,
        children: [
          // Background particles
          Particles(
            particles: _buildSplashParticles(size),
            width: size.width,
            height: size.height,
            connectDots: true,
            boundType: BoundType.WrapAround,
            interaction: ParticleInteraction(
              awayRadius: 80,
              enableHover: true,
              awayAnimationDuration: const Duration(milliseconds: 400),
              awayAnimationCurve: Curves.easeOut,
            ),
          ),

          // Centered content
          FadeTransition(
            opacity: _opacity,
            child: Center(
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  // Package name
                  const Text(
                    'particles',
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 36,
                      fontWeight: FontWeight.w200,
                      letterSpacing: 8,
                    ),
                  ),
                  const Text(
                    'flutter',
                    style: TextStyle(
                      color: Color(0xFF7C4DFF),
                      fontSize: 36,
                      fontWeight: FontWeight.w700,
                      letterSpacing: 8,
                    ),
                  ),
                  const SizedBox(height: 20),
                  // Version pill
                  Container(
                    padding: const EdgeInsets.symmetric(
                        horizontal: 14, vertical: 5),
                    decoration: BoxDecoration(
                      border: Border.all(
                          color: const Color(0xFF7C4DFF).withValues(alpha: 0.5)),
                      borderRadius: BorderRadius.circular(20),
                      color: const Color(0xFF7C4DFF).withValues(alpha: 0.1),
                    ),
                    child: const Text(
                      'pub.dev  ·  particles_flutter',
                      style: TextStyle(
                        color: Color(0xFF7C4DFF),
                        fontSize: 11,
                        letterSpacing: 1.2,
                        fontWeight: FontWeight.w500,
                      ),
                    ),
                  ),
                  const SizedBox(height: 40),
                  SizedBox(
                    width: 20,
                    height: 20,
                    child: CircularProgressIndicator(
                      strokeWidth: 2,
                      color: const Color(0xFF7C4DFF).withValues(alpha: 0.6),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}

import 'dart:io';
import 'dart:math';
import 'dart:ui' as ui;

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:particles_flutter/shapes.dart';
import 'package:particles_flutter/engine.dart';
import 'package:particles_flutter/src/component/particle/image_particle.dart';
import 'splash.dart';
import 'package:url_launcher/url_launcher.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: Scaffold(
        backgroundColor: Colors.black,
        body: SplashScreen(),
      ),
    );
  }
}

class ParticleScreen extends StatelessWidget {
  const ParticleScreen({required this.particleImage, super.key});

  final ui.Image particleImage;
  @override
  Widget build(BuildContext context) {
    double screenHeight = MediaQuery.of(context).size.height;
    double screenWidth = MediaQuery.of(context).size.width;
    return Stack(
      children: [
        Container(
          color: Colors.blue,
          child: Particles(
            awayRadius: 150,
            particles: createParticles(),
            height: screenHeight,
            width: screenWidth,
            onTapAnimation: true,
            awayAnimationDuration: const Duration(milliseconds: 100),
            awayAnimationCurve: Curves.linear,
            enableHover: true,
            hoverRadius: 90,
            connectDots: false,
          ),
        ),
        Center(
          child: Container(
            height: 250,
            width: 200,
            decoration: BoxDecoration(
              color: const Color.fromARGB(255, 221, 218, 218),
              borderRadius: BorderRadius.circular(8),
            ),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                const Text(
                  'particles flutter',
                  style: TextStyle(
                    color: Colors.black87,
                    fontSize: 18,
                    fontWeight: FontWeight.w900,
                  ),
                ),
                const Text(
                  'v1.0.0',
                  style: TextStyle(
                    color: Colors.black87,
                    fontSize: 12,
                  ),
                ),
                const SizedBox(height: 20),
                Row(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    GestureDetector(
                      onTap: () {
                        launchUrl(Uri.parse(
                            "https://github.com/rajajain08/particles_flutter"));
                      },
                      child: Image.asset('assets/github.png', height: 30),
                    ),
                    const SizedBox(
                      width: 20,
                    ),
                    GestureDetector(
                      onTap: () {
                        launchUrl(Uri.parse(
                            "https://pub.dev/packages/particles_flutter"));
                      },
                      child: Image.asset(
                        'assets/pub.png',
                        height: 30,
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
      ],
    );
  }

  List<Particle> createParticles() {
    var rng = Random();
    List<Particle> particles = [];

    // Circle particle example
    for (int i = 0; i < 32; i++) {
      particles.add(CircularParticle(
        color: Colors.white.withOpacity(0.6),
        radius: rng.nextDouble() * 20,
        velocity: Offset(rng.nextDouble() * 200 * randomSign(),
            rng.nextDouble() * 200 * randomSign()),
      ));
    }

    // Rectangle particle example
    for (int i = 0; i < 32; i++) {
      particles.add(RectangularParticle(
        color: Colors.white.withOpacity(0.6),
        height: (rng.nextDouble() * 30) + 20,
        width: (rng.nextDouble() * 30) + 20,
        velocity: Offset(rng.nextDouble() * 200 * randomSign(),
            rng.nextDouble() * 200 * randomSign()),
        rotationSpeed: rng.nextDouble() * 10 * randomSign(),
      ));
    }

    // Oval particle example
    for (int i = 0; i < 32; i++) {
      particles.add(OvoidalParticle(
        color: Colors.white.withOpacity(0.6),
        height: rng.nextDouble() * 30,
        width: rng.nextDouble() * 60,
        velocity: Offset(rng.nextDouble() * 200 * randomSign(),
            rng.nextDouble() * 200 * randomSign()),
        rotationSpeed: rng.nextDouble() * 10 * randomSign(),
      ));
    }

    // Triangle particle example
    for (int i = 0; i < 32; i++) {
      particles.add(TriangularParticle(
        color: Colors.white.withOpacity(0.6),
        height: rng.nextDouble() * 40,
        width: rng.nextDouble() * 40,
        velocity: Offset(rng.nextDouble() * 200 * randomSign(),
            rng.nextDouble() * 200 * randomSign()),
        rotationSpeed: rng.nextDouble() * 10 * randomSign(),
      ));
    }
    
    // Image particle example
    for (int i = 0; i < 30; i++) {
      particles.add(ImageParticle.Ratio(
        particleImage: particleImage,
        sizeRatio: 0.1,
        color: Colors.white.withOpacity(0.8),
        velocity: Offset(rng.nextDouble() * 200 * randomSign(),
            rng.nextDouble() * 200 * randomSign()),
        rotationSpeed: rng.nextDouble() * 10 * randomSign(),
      ));
    }
    
    return particles;
  } 

  double randomSign() {
    var rng = Random();
    return rng.nextBool() ? 1 : -1;
  }
}

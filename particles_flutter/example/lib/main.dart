import 'dart:math';
import 'dart:ui' as ui;
import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:particles_flutter/shapes.dart';
import 'package:particles_flutter/engine.dart';
import 'package:particles_flutter/interactions.dart';
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

class SplashScreen extends StatefulWidget {
  @override
  _SplashScreenState createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    super.initState();
    initializeData();
  }

  Future<void> initializeData() async {
    final ui.Image particleImage = await loadImage('assets/snowflake.png');
    Navigator.pushReplacement(
        context,
        MaterialPageRoute(
            builder: (context) => ParticleScreen(
                  particleImage: particleImage,
                )));
  }

  Future<ui.Image> loadImage(String imagePath) async {
    ByteData data = await rootBundle.load(imagePath);
    final Completer<ui.Image> completer = Completer();
    ui.decodeImageFromList(Uint8List.view(data.buffer), (ui.Image img) {
      return completer.complete(img);
    });

    return completer.future;
  }

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Center(
        child: CircularProgressIndicator(),
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
    return Scaffold(
      backgroundColor: Colors.white,
      body: Stack(
        children: [
          Container(
              color: Colors.blue.withValues(alpha: 0.4),
              child: Particles(
                particles: createParticles(),
                height: screenHeight,
                width: screenWidth,
                connectDots: false,
                boundType: BoundType.WrapAround,
                particleEmitter: Emitter(
                  startPosition: Offset(screenWidth / 2, screenHeight / 2),
                  delay: const Duration(milliseconds: 5),
                  recycles: false,
                ),
                interaction: ParticleInteraction(
                  awayRadius: 150,
                  onTapAnimation: true,
                  awayAnimationDuration: const Duration(milliseconds: 100),
                  awayAnimationCurve: Curves.linear,
                  enableHover: true,
                  hoverRadius: 90,
                ),
              )),
          Center(
            child: Container(
              height: 220,
              width: 180,
              decoration: BoxDecoration(
                color: const Color.fromARGB(255, 221, 218, 218)
                    .withValues(alpha: 0.4),
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
                    'v2.0.0',
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
      ),
    );
  }

  List<Particle> createParticles() {
    var rng = Random();
    List<Particle> particles = [];

    // Circle particle example
    for (int i = 0; i < 80; i++) {
      particles.add(CircularParticle(
        color: Colors.white.withValues(alpha: 0.6),
        radius: rng.nextDouble() * 10,
        velocity: Offset(rng.nextDouble() * 50 * randomSign(),
            rng.nextDouble() * 50 * randomSign()),
      ));
    }

    // Rectangle particle example
    for (int i = 0; i < 30; i++) {
      double side = (rng.nextDouble() * 10) + 5;
      particles.add(RectangularParticle(
        color: Colors.white.withValues(alpha: 0.6),
        height: side,
        width: side,
        velocity: Offset(rng.nextDouble() * 50 * randomSign(),
            rng.nextDouble() * 50 * randomSign()),
        rotationSpeed: rng.nextDouble() * 2 * randomSign(),
      ));
    }

    // Oval particle example
    for (int i = 0; i < 10; i++) {
      particles.add(OvoidalParticle(
        color: Colors.white.withValues(alpha: 0.6),
        height: rng.nextDouble() * 10,
        width: rng.nextDouble() * 10,
        velocity: Offset(rng.nextDouble() * 50 * randomSign(),
            rng.nextDouble() * 50 * randomSign()),
        rotationSpeed: rng.nextDouble() * 2 * randomSign(),
      ));
    }

    // Triangle particle example
    for (int i = 0; i < 10; i++) {
      particles.add(TriangularParticle(
        color: Colors.white.withValues(alpha: 0.6),
        height: rng.nextDouble() * 10,
        width: rng.nextDouble() * 10,
        velocity: Offset(rng.nextDouble() * 50 * randomSign(),
            rng.nextDouble() * 50 * randomSign()),
        rotationSpeed: rng.nextDouble() * 2 * randomSign(),
      ));
    }
    // Image particle example
    for (int i = 0; i < 30; i++) {
      particles.add(ImageParticle.ratio(
        particleImage: particleImage,
        sizeRatio: 0.05,
        color: Colors.white.withValues(alpha: .8),
        velocity: Offset(rng.nextDouble() * 50 * randomSign(),
            rng.nextDouble() * 20 * randomSign()),
        rotationSpeed: rng.nextDouble() * 2 * randomSign(),
      ));
    }
    particles.shuffle();
    return particles;
  }

  double randomSign() {
    var rng = Random();
    return rng.nextBool() ? 1 : -1;
  }
}

import 'dart:async';
import 'dart:typed_data';
import 'package:flutter/material.dart';
import 'main.dart';
import 'dart:ui' as ui;
import 'package:flutter/services.dart';

class SplashScreen extends StatefulWidget {
  @override
  _SplashScreenState createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  @override
  void initState()
  {
    super.initState();
    InitializeData();
  }
  Future<void> InitializeData() async {
    final ui.Image particleImage = await loadImage('assets/lexis.png');
    Navigator.pushReplacement(
      context, 
      MaterialPageRoute(builder: (context) => ParticleScreen(particleImage: particleImage,))
      );
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
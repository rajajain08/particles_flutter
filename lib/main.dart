import 'package:flutter/material.dart';
import 'package:particles_flutter/screens/circular_particles.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'Flutter Demo',
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
        home: Scaffold(
          backgroundColor: Colors.red,
          body: CircularParticleScreen(),
        ));
  }
}

class CircularParticleScreen extends StatelessWidget {
  const CircularParticleScreen({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    double screenHeight = MediaQuery.of(context).size.height;
    double screenWidth = MediaQuery.of(context).size.width;
    return Container(
      child: Center(
        child: CircularParticle(
          awayRadius: 100,
          numberOfParticles: 1000,
          speedOfParticles: 1,
          height: screenHeight,
          width: screenWidth,
          onTapAnimation: true,
          isRandomColor: false,
          particleColor: Colors.white.withAlpha(180),
          awayAnimationDuration: Duration(milliseconds: 300),
          particleSize: 12,
          isRandSize: true,
          randColorList: [
            Colors.red.withAlpha(210),
            Colors.white.withAlpha(210),
            Colors.yellow.withAlpha(210),
            Colors.green.withAlpha(210)
          ],
          awayAnimationCurve: Curves.decelerate,
          enableHover: true,
          hoverColor: Colors.white,
        ),
      ),
    );
  }
}

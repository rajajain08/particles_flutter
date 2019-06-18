import 'package:flutter_web/material.dart';
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
          backgroundColor: Colors.purple,
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
          awayRadius: 880,
          numberOfParticles: 2000,
          speedOfParticles: 10,
          height: screenHeight,
          width: screenWidth,
          onTapAnimation: true,
          particleColor: Colors.white.withAlpha(180),
          awayAnimationDuration: Duration(milliseconds: 4000),
          maxParticleSize: 8,
          isRandSize: true,
          isRandomColor: false,
          // randColorList: [
          //   Colors.red.withAlpha(210),
          //   Colors.white.withAlpha(210),
          //   Colors.yellow.withAlpha(210),
          //   Colors.green.withAlpha(210)
          // ],
          awayAnimationCurve: Curves.elasticInOut,
          enableHover: true,
          hoverColor: Colors.redAccent.withAlpha(180),
          hoverRadius: 90,
        ),
      ),
    );
  }
}

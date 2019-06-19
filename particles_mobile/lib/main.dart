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
          key: UniqueKey(),
          awayRadius: 80,
          numberOfParticles: 1000,
          speedOfParticles: 1,
          height: screenHeight,
          width: screenWidth,
          onTapAnimation: true,
          particleColor: Colors.white.withAlpha(150),
          awayAnimationDuration: Duration(milliseconds: 600),
          maxParticleSize: 10,
          isRandSize: true,
          isRandomColor: false,
          // randColorList: [
          //   Colors.red.withAlpha(210),
          //   Colors.white.withAlpha(210),
          //   Colors.yellow.withAlpha(210),
          //   Colors.green.withAlpha(210)
          // ],
          awayAnimationCurve: Curves.easeInOutBack,
          enableHover: true,
          hoverColor: Colors.white,
          hoverRadius: 90,
        ),
      ),
    );
  }
}

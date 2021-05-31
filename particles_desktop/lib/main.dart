// import 'package:flutter/foundation.dart'
// show debugDefaultTargetPlatformOverride;
import 'package:flutter/material.dart';
import 'package:particles_flutter/component/custom_slider.dart';
import 'package:particles_flutter/screens/circular_particles.dart';

void main() {
  // debugDefaultTargetPlatformOverride = TargetPlatform.fuchsia;
  return runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        debugShowCheckedModeBanner: true,
        title: 'Flutter Demo',
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
        home: Scaffold(
          backgroundColor: Colors.white12,
          body: CircularParticleScreen(),
        ));
  }
}

class CircularParticleScreen extends StatefulWidget {
  const CircularParticleScreen({Key? key}) : super(key: key);

  @override
  _CircularParticleScreenState createState() => _CircularParticleScreenState();
}

class _CircularParticleScreenState extends State<CircularParticleScreen> {
  int numberOfParticles = 1000;
  double awayRadius = 120;
  double speedOfParticles = 1.2;
  double maxParticleSize = 8;
  int tapAnimationDuration = 600;
  bool randomSize = true;
  bool onTapAnimation = true;
  bool isRandomColor = false;
  bool enableHover = true;
  Curve animationType = Curves.easeInOut;
  @override
  void dispose() {
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    //  print("$numberOfParticles");
    double screenHeight = MediaQuery.of(context).size.height;
    double screenWidth = MediaQuery.of(context).size.width;
    return Stack(
      alignment: AlignmentDirectional.topEnd,
      children: <Widget>[
        Center(
          child: Container(
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                FlutterLogo(
                  size: screenWidth * 0.05,
                ),
                Text(
                  "Flutter Particles",
                  style: TextStyle(
                      color: Colors.white.withAlpha(120),
                      fontSize: screenWidth * 0.05),
                ),
              ],
            ),
          ),
        ),
        Center(
          child: CircularParticle(
            key: UniqueKey(),
            awayRadius: awayRadius,
            numberOfParticles: numberOfParticles,
            speedOfParticles: speedOfParticles,
            height: screenHeight,
            width: screenWidth,
            onTapAnimation: onTapAnimation,
            particleColor: Colors.white.withAlpha(110),
            awayAnimationDuration: Duration(milliseconds: tapAnimationDuration),
            maxParticleSize: maxParticleSize,
            isRandSize: randomSize,
            isRandomColor: isRandomColor,
            randColorList: [
              Colors.blue.withAlpha(150),
              //  Colors.white.withAlpha(150),
              Colors.yellow.withAlpha(150),
              Colors.green.withAlpha(150),
              Colors.indigo.withAlpha(150),
              Colors.red.withAlpha(150),
            ],
            awayAnimationCurve: animationType,
            enableHover: enableHover,
            hoverColor: Colors.white,
            hoverRadius: 40,
          ),
        ),
        Container(
          height: 180,
          width: 350,
          color: Colors.black.withAlpha(120),
          child: ListView(
            children: <Widget>[
              CustomSlider(
                text: "particles no.",
                value: numberOfParticles.toDouble(),
                min: 0,
                max: 3500,
                onChanged: (value) {
                  setState(() {
                    numberOfParticles = value.floor();
                  });
                },
              ),
              CustomSlider(
                text: "away radius",
                value: awayRadius,
                min: 0,
                max: screenHeight * 1.5,
                onChanged: (value) {
                  setState(() {
                    awayRadius = value;
                  });
                },
              ),
              CustomSlider(
                text: "particle speed",
                value: speedOfParticles,
                min: 0,
                max: 25,
                onChanged: (value) {
                  setState(() {
                    speedOfParticles = value;
                  });
                },
              ),
              CustomSlider(
                text: "particle size",
                value: maxParticleSize,
                min: 0,
                max: 45,
                onChanged: (value) {
                  setState(() {
                    maxParticleSize = value;
                  });
                },
              ),
              CustomSlider(
                text: "tap anim. time ms",
                value: tapAnimationDuration.toDouble(),
                min: 0,
                max: 5000,
                onChanged: (value) {
                  setState(() {
                    tapAnimationDuration = value.floor();
                  });
                },
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: <Widget>[
                  Text(
                    "Select tap animation",
                    style: TextStyle(color: Colors.white, fontSize: 12),
                  ),
                  DropdownButton<Curve>(
                    iconSize: 0,
                    style: TextStyle(color: Colors.blue, fontSize: 12),
                    value: animationType,
                    onChanged: (Curve? newValue) =>
                        setState(() => animationType = newValue!),
                    items: <Curve>[
                      Curves.easeInOut,
                      Curves.bounceInOut,
                      Curves.easeIn,
                      Curves.slowMiddle,
                      Curves.fastLinearToSlowEaseIn,
                      Curves.easeOutSine,
                      Curves.elasticInOut
                    ].map<DropdownMenuItem<Curve>>((Curve value) {
                      return DropdownMenuItem<Curve>(
                        value: value,
                        child: Text((value == Curves.easeInOut)
                            ? "easeInOut"
                            : (value == Curves.bounceInOut)
                                ? "bounceInOut"
                                : (value == Curves.easeIn)
                                    ? "easeIn"
                                    : (value == Curves.slowMiddle)
                                        ? "slowMiddle"
                                        : (value ==
                                                Curves.fastLinearToSlowEaseIn)
                                            ? "fastLinearToSlowEaseIn"
                                            : (value == Curves.easeOutSine)
                                                ? "easeOutSine"
                                                : "elasticInOut"),
                      );
                    }).toList(),
                  ),
                ],
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: <Widget>[
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Column(
                      children: <Widget>[
                        Checkbox(
                          value: randomSize,
                          onChanged: (bool? value) {
                            setState(() => randomSize = value!);
                          },
                        ),
                        Text(
                          "random size",
                          style: TextStyle(color: Colors.white, fontSize: 12),
                        ),
                      ],
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Column(
                      children: <Widget>[
                        Checkbox(
                          value: onTapAnimation,
                          onChanged: (bool? value) {
                            setState(() => onTapAnimation = value!);
                          },
                        ),
                        Text(
                          "tap animation",
                          style: TextStyle(color: Colors.white, fontSize: 12),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: <Widget>[
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Column(
                      children: <Widget>[
                        Checkbox(
                          value: isRandomColor,
                          onChanged: (bool? value) {
                            setState(() => isRandomColor = value!);
                          },
                        ),
                        Text(
                          "random color",
                          style: TextStyle(color: Colors.white, fontSize: 12),
                        ),
                      ],
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Column(
                      children: <Widget>[
                        Checkbox(
                          value: enableHover,
                          onChanged: (bool? value) {
                            setState(() => enableHover = value!);
                          },
                        ),
                        Text(
                          "hover effect",
                          style: TextStyle(color: Colors.white, fontSize: 12),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ],
          ),
        )
      ],
    );
  }
}

import 'dart:math';

import 'package:flutter/material.dart';

class CircularParticle extends StatefulWidget {
  CircularParticle({Key key, this.screenHeight, this.screenWidth})
      : super(key: key);
  final double screenHeight;
  final double screenWidth;
  _CircularParticleState createState() =>
      _CircularParticleState(screenHeight, screenWidth);
}

class _CircularParticleState extends State<CircularParticle>
    with TickerProviderStateMixin {
  Animation<double> animation;

  AnimationController controller;

  static List<Offset> offsets = [];
  static List<bool> randDirection = [];
  double value = 0;
  var rng = new Random();
  double randValue = 0;
  final double screenHeight;
  final double screenWidth;
  double dx;
  double dy;

  List<double> randomDouble = [];

  _CircularParticleState(this.screenHeight, this.screenWidth);
  @override
  void initState() {
    controller =
        AnimationController(duration: const Duration(seconds: 10), vsync: this);

    for (int index = 0; index < 1000; index++) {
      offsets.add(Offset(
          rng.nextDouble() * screenWidth, rng.nextDouble() * screenHeight));
      randomDouble.add(rng.nextDouble());
      randDirection.add(rng.nextBool());
    }
    animation = Tween<double>(begin: 0, end: 1).animate(controller)
      ..addListener(() {
        setState(() {
          value = 1;
          for (int index = 0; index < offsets.length; index++) {
            if (randDirection[index]) {
              randValue = -value;
            } else {
              randValue = value;
            }
            dx = offsets[index].dx + (randValue * randomDouble[index]);
            dy = offsets[index].dy + randomDouble[index] * value;
            if (dx > screenWidth) {
              dx = dx - screenWidth;
            } else if (dx < 0) {
              dx = dx + screenWidth;
            }
            if (dy > screenHeight) {
              dy = dy - screenHeight;
            }

            offsets[index] = Offset(dx, dy);
          }
        });
      });
    controller.repeat();
    changeDirection();
    super.initState();
  }

  changeDirection() async {
    Future.doWhile(() async {
      await Future.delayed(Duration(milliseconds: 500));
      for (int index = 0; index < 1000; index++) {
        randDirection[index] = (rng.nextBool());
      }
      return true;
    });
  }

  onTapGesture(double tapdx, double tapdy) {
    AnimationController awayAnimationController;
    awayAnimationController = AnimationController(
        duration: const Duration(milliseconds: 600), vsync: this);
    awayAnimationController.reset();
    double directiondx;
    double directiondy;
    List<double> distance = [];
    List<Animation<Offset>> awayAnimation = [];
    awayAnimationController.forward();
    for (int index = 0; index < offsets.length; index++) {
      distance.add(sqrt(
          ((tapdx - offsets[index].dx) * (tapdx - offsets[index].dx)) +
              ((tapdy - offsets[index].dy) * (tapdy - offsets[index].dy))));
      directiondx = (tapdx - offsets[index].dx) / distance[index];
      directiondy = (tapdy - offsets[index].dy) / distance[index];
      // if (distance < 200) {
      Offset begin = offsets[index];
      awayAnimation.add(Tween<Offset>(
          begin: begin,
          end: Offset(
            offsets[index].dx - (100 - distance[index]) * directiondx,
            offsets[index].dy - (100 - distance[index]) * directiondy,
          )).animate(awayAnimationController)
        ..addListener(() {
          if (distance[index] < 100)
            setState(() {
              offsets[index] = awayAnimation[index].value;
            });
          if (awayAnimationController.isCompleted &&
              index == offsets.length - 1) {
            awayAnimationController.dispose();
          }
        }));

      // offsets[index] = Offset(
      //   offsets[index].dx - (200 - distance) * directiondx,
      //   offsets[index].dy - (200 - distance) * directiondy,
      // );
      // }

    }

    // offsets.retainWhere((test) =>
    //     sqrt(((tapdx - test.dx) * (tapdx - test.dx)) +
    //         ((tapdy - test.dy) * (tapdy - test.dy))) >
    //     50);
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      // onTap: () {
      //   print("object");
      // },
      onTapUp: (TapUpDetails details) {
        onTapGesture(details.globalPosition.dx, details.globalPosition.dy);
      },
      child: SizedBox(
        height: screenHeight,
        width: screenWidth,
        child: CustomPaint(
          painter: ParticlePainter(offsets),
        ),
      ),
    );
  }
}

class ParticlePainter extends CustomPainter {
  final List<Offset> offsets;

  ParticlePainter(this.offsets);

  @override
  void paint(Canvas canvas, Size size) {
    for (int index = 0; index < offsets.length; index++) {
      canvas.drawCircle(offsets[index], 5, colorPaint);
    }
  }

  var colorPaint = Paint()..color = Colors.red.withAlpha(100);

  @override
  bool shouldRepaint(CustomPainter oldDelegate) {
    return true;
  }
}

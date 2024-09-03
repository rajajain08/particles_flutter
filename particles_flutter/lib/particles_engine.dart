library particles_flutter;

import 'dart:math';
import 'package:flutter/material.dart';
import 'package:particles_flutter/core/runner.dart';
import 'package:particles_flutter/painters/circular_painter.dart';
import 'package:particles_flutter/component/particle/particle.dart';

class Particles extends StatefulWidget {
  Particles({
    Key? key,
    required this.particles,
    required this.height,
    required this.width,
    this.onTapAnimation = true,
    this.awayRadius = 100,
    this.awayAnimationDuration = const Duration(milliseconds: 600),
    this.awayAnimationCurve = Curves.easeIn,
    this.enableHover = false,
    this.hoverRadius = 80,
    this.connectDots = false,
  }) : super(key: key);
  final double awayRadius;
  final double height;
  final double width;
  final bool onTapAnimation;
  final Duration awayAnimationDuration;
  final Curve awayAnimationCurve;
  final bool enableHover;
  final double hoverRadius;
  final List<Particle> particles;
  final bool connectDots; //not recommended

  _ParticlesState createState() => _ParticlesState();
}

class _ParticlesState extends State<Particles> with TickerProviderStateMixin {
  late AnimationController awayAnimationController;
  List<Particle> particles = [];
  var rng = Random();
  Runner _runner = Runner();
  _ParticlesState();

  List<List> lineOffset = [];

  get math => null;

  void initailizeParticles(_) {
    particles = widget.particles;
    for (int index = 0; index < widget.particles.length; index++) {
      particles[index].updatePosition = Offset(
        rng.nextDouble() * widget.width,
        rng.nextDouble() * widget.height,
      );
    }
  }

  @override
  void initState() {
    WidgetsBinding.instance.addPostFrameCallback(initailizeParticles);

    _runner.run((double deltaTime, double correction) {
      _engine(deltaTime);
    });
    super.initState();
  }

  void _engine(double deltaTime) {
    setState(
      () {
        for (int index = 0; index < particles.length; index++) {
          double dx = particles[index].position.dx +
              deltaTime * particles[index].velocity.dx;
          double dy = particles[index].position.dy +
              deltaTime * particles[index].velocity.dy;
          if (dx > widget.width) {
            dx = dx - widget.width;
          } else if (dx < 0) {
            dx = dx + widget.width;
          }
          if (dy > widget.height) {
            dy = dy - widget.height;
          } else if (dy < 0) {
            dy = dy + widget.height;
          }
          particles[index].updatePosition = (Offset(dx, dy));
        }
        if (widget.connectDots) connectLines(); //not recommended
      },
    );
  }

  @override
  void dispose() {
    _runner.stop();
    super.dispose();
  }

  void connectLines() {
    lineOffset = [];
    double distanceBetween = 0;
    for (int point1 = 0; point1 < particles.length; point1++) {
      for (int point2 = 0; point2 < particles.length; point2++) {
        distanceBetween = sqrt(pow(
                (particles[point2].position.dx - particles[point1].position.dx),
                2) +
            pow((particles[point2].position.dy - particles[point1].position.dy),
                2));
        if (distanceBetween < 110) {
          lineOffset
              .add([particles[point1], particles[point2], distanceBetween]);
        }
      }
    }
  }

  void onTapGesture(double tapdx, double tapdy) {
    awayAnimationController = AnimationController(
        duration: widget.awayAnimationDuration, vsync: this);
    awayAnimationController.reset();
    double directiondx;
    double directiondy;
    List<double> distance = [];
    double noAnimationDistance = 0;

    if (widget.onTapAnimation) {
      List<Animation<Offset>> awayAnimation = [];
      awayAnimationController.forward();
      for (int index = 0; index < particles.length; index++) {
        distance.add(sqrt(((tapdx - particles[index].position.dx) *
                (tapdx - particles[index].position.dx)) +
            ((tapdy - particles[index].position.dy) *
                (tapdy - particles[index].position.dy))));
        directiondx = (tapdx - particles[index].position.dx) / distance[index];
        directiondy = (tapdy - particles[index].position.dy) / distance[index];
        Offset begin = particles[index].position;
        awayAnimation.add(
          Tween<Offset>(
                  begin: begin,
                  end: Offset(
                    particles[index].position.dx -
                        (widget.awayRadius - distance[index]) * directiondx,
                    particles[index].position.dy -
                        (widget.awayRadius - distance[index]) * directiondy,
                  ))
              .animate(CurvedAnimation(
                  parent: awayAnimationController,
                  curve: widget.awayAnimationCurve))
            ..addListener(
              () {
                if (distance[index] < widget.awayRadius)
                  setState(() => particles[index].updatePosition =
                      awayAnimation[index].value);
                if (awayAnimationController.isCompleted &&
                    index == particles.length - 1) {
                  awayAnimationController.dispose();
                }
              },
            ),
        );
      }
    } else {
      for (int index = 0; index < particles.length; index++) {
        noAnimationDistance = sqrt(((tapdx - particles[index].position.dx) *
                (tapdx - particles[index].position.dx)) +
            ((tapdy - particles[index].position.dy) *
                (tapdy - particles[index].position.dy)));
        directiondx =
            (tapdx - particles[index].position.dx) / noAnimationDistance;
        directiondy =
            (tapdy - particles[index].position.dy) / noAnimationDistance;
        if (noAnimationDistance < widget.awayRadius) {
          setState(() {
            particles[index].updatePosition = Offset(
              particles[index].position.dx -
                  (widget.awayRadius - noAnimationDistance) * directiondx,
              particles[index].position.dy -
                  (widget.awayRadius - noAnimationDistance) * directiondy,
            );
          });
        }
      }
    }
  }

  void onHover(tapdx, tapdy) {
    {
      double noAnimationDistance = 0;
      for (int index = 0; index < particles.length; index++) {
        noAnimationDistance = sqrt(((tapdx - particles[index].position.dx) *
                (tapdx - particles[index].position.dx)) +
            ((tapdy - particles[index].position.dy) *
                (tapdy - particles[index].position.dy)));
        var directiondx =
            (tapdx - particles[index].position.dx) / noAnimationDistance;
        var directiondy =
            (tapdy - particles[index].position.dy) / noAnimationDistance;
        if (noAnimationDistance < widget.awayRadius) {
          setState(() {
            particles[index].updatePosition = Offset(
              particles[index].position.dx -
                  (widget.awayRadius - noAnimationDistance) * directiondx,
              particles[index].position.dy -
                  (widget.awayRadius - noAnimationDistance) * directiondy,
            );
          });
        }
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      cursor: MouseCursor.defer,
      onHover: (event) {
        if (widget.enableHover) {
          RenderBox getBox = context.findRenderObject() as RenderBox;
          onHover(getBox.globalToLocal(event.position).dx,
              getBox.globalToLocal(event.position).dy);
        }
      },
      child: GestureDetector(
        onTapDown: (TapDownDetails details) {
          RenderBox getBox = context.findRenderObject() as RenderBox;
          onTapGesture(getBox.globalToLocal(details.globalPosition).dx,
              getBox.globalToLocal(details.globalPosition).dy);
        },
        child: SizedBox(
          height: widget.height,
          width: widget.width,
          child: CustomPaint(
            painter: CircularParticlePainter(
                particles: particles, lineOffsets: lineOffset),
          ),
        ),
      ),
    );
  }
}

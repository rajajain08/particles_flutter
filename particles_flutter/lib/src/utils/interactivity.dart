import 'dart:math';

import 'package:flutter/material.dart';
import 'package:particles_flutter/engine.dart';

// ignore: must_be_immutable
class ParticleInteraction extends StatefulWidget{
  /// Creates touch and hover interaction with a particle engine.
  /// 
  /// For use in the [interaction] field of [Particles]
  /// 
  /// Defines hover interaction for interfaces with a cursor.
  /// Defines tocuh gesture interaction for mobile device interfaces.
  ParticleInteraction ({
    Key? key,
    this.onTapAnimation = true,
    this.awayRadius = 100,
    this.awayAnimationDuration = const Duration(milliseconds: 600),
    this.awayAnimationCurve = Curves.easeIn,
    this.enableHover = false,
    this.hoverRadius = 80,
  }) : super(key: key);

  /// Define the radius of a cursor/gesture.
  /// 
  /// Particles will be pushed away from the cursor/gesture by this amount.
  final double awayRadius;

  /// Toggle interactions with particles with touch controls.
  final bool onTapAnimation;

  /// Define the length of time that movement caused by a gesture will occur.
  final Duration awayAnimationDuration;

  /// Define the [Curve] of movement away from the cursor/gesture.
  final Curve awayAnimationCurve;

  /// Toggle interactions with particles from a cursor.
  final bool enableHover;

  /// Unused, but implemented in the original package.
  final double hoverRadius;
  
  late _InteractivityState state;

  _InteractivityState createState() => state = _InteractivityState();
}

class _InteractivityState extends State<ParticleInteraction> with TickerProviderStateMixin {
  late AnimationController awayAnimationController;
  List<Particle> particles = [];

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
      ),
    );
  }
}
import 'dart:math';

import 'package:flutter/material.dart';
import 'package:particles_flutter/engine.dart';
import 'package:particles_flutter/src/component/particle_scope.dart';

class ParticleInteraction extends StatefulWidget {
  /// Creates touch and hover interaction with a particle engine.
  ///
  /// For use in the [interaction] field of [Particles]
  ///
  /// Defines hover interaction for interfaces with a cursor.
  /// Defines touch gesture interaction for mobile device interfaces.
  const ParticleInteraction({
    Key? key,
    this.onTapAnimation = true,
    this.awayRadius = 100,
    this.awayAnimationDuration = const Duration(milliseconds: 600),
    this.awayAnimationCurve = Curves.easeIn,
    this.enableHover = false,
    this.hoverRadius = 80,
  }) : super(key: key);

  const ParticleInteraction.none({
    Key? key,
    this.onTapAnimation = false,
    this.awayRadius = 0,
    this.awayAnimationDuration = Duration.zero,
    this.awayAnimationCurve = Curves.easeIn,
    this.enableHover = false,
    this.hoverRadius = 0,
  }) : super(key: key);

  /// Define the radius of a tap gesture.
  ///
  /// Particles will be pushed away from the gesture by this amount.
  final double awayRadius;

  /// Toggle interactions with particles with touch controls.
  final bool onTapAnimation;

  /// Define the length of time that movement caused by a gesture will occur.
  final Duration awayAnimationDuration;

  /// Define the [Curve] of movement away from the cursor/gesture.
  final Curve awayAnimationCurve;

  /// Toggle interactions with particles from a cursor.
  final bool enableHover;

  /// Define the radius of the cursor for hover interaction.
  ///
  /// Particles within this distance are pushed away from the cursor.
  final double hoverRadius;

  @override
  State<ParticleInteraction> createState() => _InteractivityState();
}

class _InteractivityState extends State<ParticleInteraction>
    with TickerProviderStateMixin {
  final List<AnimationController> _activeControllers = [];
  DateTime _lastHoverTime = DateTime.fromMillisecondsSinceEpoch(0);

  /// The engine's live particle list, provided via [ParticleScope].
  List<Particle> get _particles => ParticleScope.of(context);

  void onTapGesture(double tapdx, double tapdy) {
    final particles = _particles;
    double directiondx;
    double directiondy;
    List<double> distance = [];
    double noAnimationDistance = 0;

    if (widget.onTapAnimation) {
      final awayAnimationController = AnimationController(
          duration: widget.awayAnimationDuration, vsync: this);
      _activeControllers.add(awayAnimationController);
      awayAnimationController.reset();
      List<Animation<Offset>> awayAnimation = [];
      awayAnimationController.forward();
      for (int index = 0; index < particles.length; index++) {
        distance.add(sqrt(((tapdx - particles[index].position.dx) *
                (tapdx - particles[index].position.dx)) +
            ((tapdy - particles[index].position.dy) *
                (tapdy - particles[index].position.dy))));
        if (distance[index] <= 0.0001) {
          directiondx = 0;
          directiondy = 0;
        } else {
          directiondx =
              (tapdx - particles[index].position.dx) / distance[index];
          directiondy =
              (tapdy - particles[index].position.dy) / distance[index];
        }
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
                // Positions are mutated directly; the engine repaints every
                // frame, so no setState is needed here.
                if (distance[index] < widget.awayRadius) {
                  particles[index].updatePosition = awayAnimation[index].value;
                }
                if (awayAnimationController.isCompleted &&
                    index == particles.length - 1) {
                  _activeControllers.remove(awayAnimationController);
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
        if (noAnimationDistance <= 0.0001) {
          directiondx = 0;
          directiondy = 0;
        } else {
          directiondx =
              (tapdx - particles[index].position.dx) / noAnimationDistance;
          directiondy =
              (tapdy - particles[index].position.dy) / noAnimationDistance;
        }
        if (noAnimationDistance < widget.awayRadius) {
          particles[index].updatePosition = Offset(
            particles[index].position.dx -
                (widget.awayRadius - noAnimationDistance) * directiondx,
            particles[index].position.dy -
                (widget.awayRadius - noAnimationDistance) * directiondy,
          );
        }
      }
    }
  }

  @override
  void dispose() {
    for (final c in _activeControllers) {
      c.dispose();
    }
    _activeControllers.clear();
    super.dispose();
  }

  void onHover(double tapdx, double tapdy) {
    final now = DateTime.now();
    if (now.difference(_lastHoverTime).inMilliseconds < 16) return;
    _lastHoverTime = now;
    final particles = _particles;
    final radius = widget.hoverRadius;
    double noAnimationDistance = 0;
    for (int index = 0; index < particles.length; index++) {
      noAnimationDistance = sqrt(((tapdx - particles[index].position.dx) *
              (tapdx - particles[index].position.dx)) +
          ((tapdy - particles[index].position.dy) *
              (tapdy - particles[index].position.dy)));
      var directiondx = 0.0;
      var directiondy = 0.0;
      if (noAnimationDistance > 0.0001) {
        directiondx =
            (tapdx - particles[index].position.dx) / noAnimationDistance;
        directiondy =
            (tapdy - particles[index].position.dy) / noAnimationDistance;
      }
      if (noAnimationDistance < radius) {
        particles[index].updatePosition = Offset(
          particles[index].position.dx -
              (radius - noAnimationDistance) * directiondx,
          particles[index].position.dy -
              (radius - noAnimationDistance) * directiondy,
        );
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

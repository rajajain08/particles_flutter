library particles_flutter;

import 'dart:math';
import 'package:flutter/material.dart';
import 'package:particles_flutter/interactions.dart';
import 'package:particles_flutter/src/component/particle_line.dart';
import 'package:particles_flutter/src/core/runner.dart';
import 'package:particles_flutter/src/component/particle/particle.dart';
import 'package:particles_flutter/src/painters/particle_painter.dart';
import 'package:particles_flutter/src/utils/bound_type.dart';

class Particles extends StatefulWidget {
  /// Creates a widget that handles per-frame animation of particles.
  const Particles({
    Key? key,
    required this.particles,
    required this.height,
    required this.width,
    this.connectDots = false,
    this.randomStartPosition = true,
    this.startPosition = const Offset(0,0),
    this.startPositionRadius = 0,
    this.boundType = BoundType.None,
    this.interaction,
  }) : super(key: key);

  /// Define the boundary size for the particle engine.
  final double height;
  /// Define the boundary size for the particle engine.
  final double width;

  /// Set a list of pre-defined particles to be used by the particle engine.
  /// 
  /// Size, Velocity, Colour and Rotation Speed are defined per-particle, 
  /// allowing for a degree of randomness to be generated before assigning them to the engine.
  /// 
  /// See: [Particle].
  final List<Particle> particles;

  /// Define the boundary type for the engine, one of:
  /// *  [BoundType.None] : Particles do not interact with the engine boundary.
  /// *  [BoundType.WrapAround] : Particles that reach a boundary are pushed to the opposite boundary
  /// *  [BoundType.Bounce] : Particles that reach a boundary have their velocity set in the opposite direction
  final BoundType boundType;

  /// Define the touch control interaction settings for the engine.
  /// 
  /// See: [ParticleInteraction].
  final ParticleInteraction? interaction;

  /// Toggle line connections between particles.  
  /// Not recommended for performance reasons.
  final bool connectDots;

  /// Toggle emission position.
  final bool randomStartPosition;

  /// Emission position.
  final Offset startPosition;

  /// Maximum distance from [startPosition] which a particle may spawn.
  final double startPositionRadius;

  _ParticlesState createState() => _ParticlesState();
}

class _ParticlesState extends State<Particles> with TickerProviderStateMixin {  
  List<Particle> particles = [];

  var rng = Random();
  Runner _runner = Runner();
  _ParticlesState();

  List<ParticleLine> lineList = [];

  get math => null;

  void initailizeParticles(_) {
    particles = widget.particles;
    if (widget.interaction != null)
      widget.interaction?.state.particles = particles;
    for (int index = 0; index < widget.particles.length; index++) {

      /// Initialise particles at random positions (default)
      if(widget.randomStartPosition) {
        particles[index].updatePosition = Offset(
          rng.nextDouble() * widget.width,
          rng.nextDouble() * widget.height,
        );
      }
      /// Initialise particles at the given position + given radius
      else {
        particles[index].updatePosition = Offset(
          widget.startPosition.dx + ((rng.nextDouble() * 2 - 1) * widget.startPositionRadius),
          widget.startPosition.dy + ((rng.nextDouble() * 2 - 1) * widget.startPositionRadius),
        );
      }

      /// Set the initial velocity amount
      particles[index].updateVelocity = particles[index].velocity;
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

  /// Executes every frame
  void _engine(double deltaTime) {
    setState(
      () {
        for (int index = 0; index < particles.length; index++) {
          //update particle position
          double dx = particles[index].position.dx +
              deltaTime * particles[index].currentVelocity.dx;
          double dy = particles[index].position.dy +
              deltaTime * particles[index].currentVelocity.dy;

          if(widget.boundType == BoundType.WrapAround)
            particles[index].updatePosition = GetWrapPosition(dx, dy, widget.width, widget.height);
          else if(widget.boundType == BoundType.Bounce)
            particles[index].updatePosition = CheckForBounce(dx, dy, widget.width, widget.height, particles[index]);
          else
            particles[index].updatePosition = (Offset(dx, dy));

          //update particle rotation
          double r = particles[index].rotation +
              deltaTime * particles[index].rotationSpeed;
          particles[index].updateRotation = (r);
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
    lineList = [];
    double distanceBetween = 0;
    for (int point1 = 0; point1 < particles.length; point1++) {
      for (int point2 = 0; point2 < particles.length; point2++) {
        distanceBetween = sqrt(pow(
                (particles[point2].position.dx - particles[point1].position.dx),
                2) +
            pow((particles[point2].position.dy - particles[point1].position.dy),
                2));
        if (distanceBetween < 110) {
          lineList.add( ParticleLine(particles[point1], particles[point2], distanceBetween) );
        }
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: widget.height,
      width: widget.width,
      child: Stack(
        children: [
          CustomPaint(
            painter: ParticlePainter(
                particles: particles, lines: lineList),
          ),
          widget.interaction!,
        ],
      ),
    );
  }
}

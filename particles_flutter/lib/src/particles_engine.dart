library particles_flutter;

import 'dart:math';
import 'package:flutter/material.dart';
import 'package:particles_flutter/interactions.dart';
import 'package:particles_flutter/src/component/particle_line.dart';
import 'package:particles_flutter/src/core/runner.dart';
import 'package:particles_flutter/src/component/particle/particle.dart';
import 'package:particles_flutter/src/painters/particle_painter.dart';
import 'package:particles_flutter/src/utils/bound_type.dart';
import 'package:particles_flutter/src/utils/emitter.dart';
import 'package:particles_flutter/src/utils/particle_physics.dart';

class Particles extends StatefulWidget {
  /// Creates a widget that handles per-frame animation of particles.
  const Particles({
    Key? key,
    required this.particles,
    required this.height,
    required this.width,
    this.connectDots = false,
    this.particleEmitter,
    this.particlePhysics,
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

  /// Set emission options.
  final Emitter? particleEmitter;

  /// Set physics options.
  final ParticlePhysics? particlePhysics;

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
    widget.interaction!.state.particles = widget.particles;

    /// Initialise particles at random positions (default)
    if(widget.particleEmitter == null) {
      particles = widget.particles;
      for (int index = 0; index < widget.particles.length; index++) {
        particles[index].updatePosition = Offset(
          rng.nextDouble() * widget.width,
          rng.nextDouble() * widget.height,
        );
      }
    }
    else {
      widget.particleEmitter!.Emit(widget.particles, particles);
    }
    for (int index = 0; index < widget.particles.length; index++) {
      /// Set the initial velocity amount
      widget.particles[index].updateVelocity = widget.particles[index].velocity;
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
            if(OutOfBound(dx, dy, widget.width, widget.height))
            {
              if(widget.particleEmitter != null)
                if(widget.particleEmitter!.recycles) widget.particleEmitter!.Recycle(particles[index]);
            }
            else particles[index].updatePosition = (Offset(dx, dy)); // Continue as normal

          if(widget.particlePhysics != null)
          {
            particles[index].updateVelocity = widget.particlePhysics!.applyGravity(particles[index].currentVelocity);
          }

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

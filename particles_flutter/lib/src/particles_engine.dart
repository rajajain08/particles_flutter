library particles_flutter;

import 'dart:math';
import 'package:flutter/material.dart';
import 'package:particles_flutter/interactions.dart';
import 'package:particles_flutter/src/component/particle_line.dart';
import 'package:particles_flutter/src/core/runner.dart';
import 'package:particles_flutter/src/component/particle/particle.dart';
import 'package:particles_flutter/src/painters/particle_painter.dart';
import 'package:particles_flutter/src/utils/bound_type.dart';
import 'package:particles_flutter/src/utils/burst_emitter.dart';
import 'package:particles_flutter/src/utils/emitter.dart';
import 'package:particles_flutter/src/utils/particle_lifetime.dart';
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
    this.burstEmitters = const [],
    this.onParticleExpired,
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

  /// Burst emitters run alongside the main particle pool.
  final List<BurstEmitter> burstEmitters;

  /// Called when a particle's lifetime expires, before it is respawned/recycled.
  /// Lets the caller swap out particle state (e.g. a new image) for reuse.
  final void Function(Particle particle)? onParticleExpired;

  _ParticlesState createState() => _ParticlesState();
}

class _ParticlesState extends State<Particles> with TickerProviderStateMixin {
  List<Particle> particles = [];

  var rng = Random();
  Runner _runner = Runner();
  _ParticlesState();

  List<ParticleLine> _linePool = [];
  int _activeLineCount = 0;

  Size _widgetSize = Size.zero;

  get math => null;

  void initailizeParticles(_) {
    _widgetSize = Size(widget.width, widget.height);
    widget.interaction?.state.particles = widget.particles;

    if (widget.particleEmitter == null) {
      particles = widget.particles;
      for (int index = 0; index < widget.particles.length; index++) {
        particles[index].updatePosition = Offset(
          rng.nextDouble() * widget.width,
          rng.nextDouble() * widget.height,
        );
        // Stagger initial age so particles don't all expire simultaneously
        if (particles[index].lifetime != null) {
          particles[index].updateAge =
              rng.nextDouble() * particles[index].lifetime!;
        }
      }
      for (int index = 0; index < widget.particles.length; index++) {
        widget.particles[index].updateVelocity =
            widget.particles[index].velocity;
      }
      _runner.run((double deltaTime, double correction) {
        _engine(deltaTime);
      });
    } else {
      for (int index = 0; index < widget.particles.length; index++) {
        widget.particles[index].updateVelocity =
            widget.particles[index].velocity;
      }
      _runner.run((double deltaTime, double correction) {
        _engine(deltaTime);
      });
      widget.particleEmitter!.emit(widget.particles, particles);
    }

    for (final burst in widget.burstEmitters) {
      burst.initialize(_widgetSize);
    }
  }

  @override
  void initState() {
    WidgetsBinding.instance.addPostFrameCallback(initailizeParticles);
    super.initState();
  }

  /// Executes every frame
  void _engine(double deltaTime) {
    setState(
      () {
        for (int index = 0; index < particles.length; index++) {
          final p = particles[index];

          // Age + lifetime features
          if (p.lifetime != null) {
            p.updateAge = p.age + deltaTime;
            if (p.isExpired) {
              widget.onParticleExpired?.call(p);
              if (widget.particleEmitter?.recycles == true) {
                widget.particleEmitter!.recycle(p);
              } else {
                // No emitter: respawn at random position so pool never drains
                p.updatePosition = Offset(
                  rng.nextDouble() * widget.width,
                  rng.nextDouble() * widget.height,
                );
                p.updateVelocity = p.velocity;
              }
              // Small random offset so respawned particles don't all expire together again
              p.updateAge = rng.nextDouble() * (p.lifetime! * 0.15);
            }
            ParticleLifetime.update(p);
          }

          // Trail: record position before moving
          if (p.trailEnabled) p.pushTrailPosition(p.position);

          //update particle position
          double dx = p.position.dx + deltaTime * p.currentVelocity.dx;
          double dy = p.position.dy + deltaTime * p.currentVelocity.dy;

          if (widget.boundType == BoundType.WrapAround)
            p.updatePosition =
                getWrapPosition(dx, dy, widget.width, widget.height);
          else if (widget.boundType == BoundType.Bounce)
            p.updatePosition =
                checkForBounce(dx, dy, widget.width, widget.height, p);
          else if (outOfBound(dx, dy, widget.width, widget.height)) {
            if (widget.particleEmitter != null) if (widget
                .particleEmitter!.recycles) widget.particleEmitter!.recycle(p);
          } else
            p.updatePosition = Offset(dx, dy);

          if (widget.particlePhysics != null) {
            final physics = widget.particlePhysics!;
            var velocity = physics.applyGravity(p.currentVelocity, deltaTime);
            velocity += physics.applyAttractors(p.position, deltaTime);
            p.updateVelocity = physics.clampSpeed(velocity);
          }

          //update particle rotation
          p.updateRotation = p.rotation + deltaTime * p.rotationSpeed;
        }
        if (widget.connectDots) connectLines(); //not recommended

        for (final burst in widget.burstEmitters) {
          burst.updateParticles(
              deltaTime, widget.width, widget.height, _widgetSize);
        }
      },
    );
  }

  @override
  void didUpdateWidget(Particles oldWidget) {
    super.didUpdateWidget(oldWidget);
    // If the burst emitter list instances changed, stop the old ones (kills
    // their auto-fire loops + frees pools) and initialize the new ones.
    if (!identical(oldWidget.burstEmitters, widget.burstEmitters)) {
      for (final burst in oldWidget.burstEmitters) {
        if (!widget.burstEmitters.contains(burst)) burst.dispose();
      }
      for (final burst in widget.burstEmitters) {
        burst.initialize(_widgetSize);
      }
    }
  }

  @override
  void dispose() {
    _runner.stop();
    for (final burst in widget.burstEmitters) {
      burst.dispose();
    }
    super.dispose();
  }

  void connectLines() {
    _activeLineCount = 0;
    const double threshold = 110;
    const double thresholdSquared = threshold * threshold;
    for (int point1 = 0; point1 < particles.length; point1++) {
      for (int point2 = point1 + 1; point2 < particles.length; point2++) {
        final double dx =
            particles[point2].position.dx - particles[point1].position.dx;
        final double dy =
            particles[point2].position.dy - particles[point1].position.dy;
        final double distSquared = dx * dx + dy * dy;
        if (distSquared < thresholdSquared) {
          final double distanceBetween = sqrt(distSquared);
          if (_activeLineCount < _linePool.length) {
            _linePool[_activeLineCount]
                .reset(particles[point1], particles[point2], distanceBetween);
          } else {
            _linePool.add(ParticleLine(
                particles[point1], particles[point2], distanceBetween));
          }
          _activeLineCount++;
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
              particles: particles,
              lines: _linePool,
              activeLineCount: _activeLineCount,
              burstParticleLists: [
                for (final burst in widget.burstEmitters) burst.particles,
              ],
            ),
          ),
          if (widget.interaction != null) widget.interaction!,
        ],
      ),
    );
  }
}

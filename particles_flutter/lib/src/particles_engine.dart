library particles_flutter;

import 'dart:math';
import 'package:flutter/material.dart';
import 'package:particles_flutter/interactions.dart';
import 'package:particles_flutter/src/component/particle_line.dart';
import 'package:particles_flutter/src/component/particle_scope.dart';
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
    this.connectionStyle = const ConnectionStyle(),
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

  /// Styling for [connectDots] lines: connect distance, color, stroke width
  /// and distance fade. Captured once at init, like the particle list.
  final ConnectionStyle connectionStyle;

  /// Set emission options.
  final Emitter? particleEmitter;

  /// Set physics options.
  final ParticlePhysics? particlePhysics;

  /// Burst emitters run alongside the main particle pool.
  final List<BurstEmitter> burstEmitters;

  /// Called when a particle's lifetime expires, before it is respawned/recycled.
  /// Lets the caller swap out particle state (e.g. a new image) for reuse.
  final void Function(Particle particle)? onParticleExpired;

  @override
  State<Particles> createState() => _ParticlesState();
}

/// Notifier the engine pings once per tick to drive the painter, so no
/// per-frame setState/rebuild is needed.
class _FramePulse extends ChangeNotifier {
  void ping() => notifyListeners();
}

class _ParticlesState extends State<Particles> with TickerProviderStateMixin {
  /// Render list for the emitter path — filled cluster by cluster by
  /// [Emitter.emit].
  final List<Particle> _emitted = [];

  /// Live render list, captured ONCE at initialization (old-engine contract):
  /// without an emitter it is the `widget.particles` instance from init time
  /// (by reference — in-place slot swaps, pool-cycling pattern, are picked up
  /// next frame); with an emitter it is the internal [_emitted] list.
  ///
  /// Rebuilding [Particles] with a fresh list/emitter instance is deliberately
  /// ignored so parents may construct them inline in build; pass a new [Key]
  /// to re-initialize with a different particle set.
  List<Particle> particles = const [];

  var rng = Random();
  final Runner _runner = Runner();
  final _FramePulse _pulse = _FramePulse();

  final List<ParticleLine> _linePool = [];
  int _activeLineCount = 0;

  Size _widgetSize = Size.zero;

  /// Bumped on every (re-)initialization so stale async emitter loops from a
  /// previous configuration cancel themselves.
  int _emitGeneration = 0;

  void _initializeParticles([dynamic _]) {
    if (!mounted) return;
    _widgetSize = Size(widget.width, widget.height);
    _emitGeneration++;
    final generation = _emitGeneration;
    _emitted.clear();
    particles = widget.particleEmitter == null ? widget.particles : _emitted;

    for (int index = 0; index < widget.particles.length; index++) {
      widget.particles[index].updateVelocity = widget.particles[index].velocity;
    }

    if (widget.particleEmitter == null) {
      for (int index = 0; index < particles.length; index++) {
        if (!particles[index].hasExplicitStartPosition) {
          particles[index].updatePosition = Offset(
            rng.nextDouble() * widget.width,
            rng.nextDouble() * widget.height,
          );
        }
        // Stagger initial age so particles don't all expire simultaneously
        if (particles[index].lifetime != null) {
          particles[index].updateAge =
              rng.nextDouble() * particles[index].lifetime!;
        }
      }
    } else {
      widget.particleEmitter!.emit(
        widget.particles,
        _emitted,
        isCancelled: () => !mounted || generation != _emitGeneration,
      );
    }

    _runner.run(this, (double deltaTime, double correction) {
      _engine(deltaTime);
    });

    for (final burst in widget.burstEmitters) {
      burst.initialize(_widgetSize);
    }

    // The first build ran before this init (post-frame), so the painter and
    // interaction scope still hold the empty placeholder list — rebuild once
    // so they pick up the real render list.
    setState(() {});
  }

  @override
  void initState() {
    WidgetsBinding.instance.addPostFrameCallback(_initializeParticles);
    super.initState();
  }

  /// Executes every frame
  void _engine(double deltaTime) {
    if (!mounted) return;
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
        p.updatePosition = getWrapPosition(dx, dy, widget.width, widget.height);
      else if (widget.boundType == BoundType.Bounce)
        p.updatePosition =
            checkForBounce(dx, dy, widget.width, widget.height, p);
      else if (outOfBound(dx, dy, widget.width, widget.height)) {
        if (widget.particleEmitter != null) if (widget.particleEmitter!.recycles)
          widget.particleEmitter!.recycle(p);
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
      burst.updateParticles(deltaTime, widget.width, widget.height, _widgetSize);
    }

    // Single repaint signal per tick — drives the CustomPaint via its
    // repaint listenable instead of rebuilding the widget tree.
    _pulse.ping();
  }

  @override
  void didUpdateWidget(Particles oldWidget) {
    super.didUpdateWidget(oldWidget);
    // Keep the cached size (used by burst emitters) in sync with the widget.
    if (oldWidget.width != widget.width || oldWidget.height != widget.height) {
      _widgetSize = Size(widget.width, widget.height);
    }
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
    // NOTE: a changed `particles` list or `particleEmitter` instance is
    // deliberately NOT re-initialized here — parents commonly construct both
    // inline in build, and re-initializing would reset the whole scene on
    // every parent rebuild (e.g. a confetti tap's setState). Pass a new Key
    // to swap the particle set.
  }

  @override
  void dispose() {
    _emitGeneration++;
    _runner.stop();
    for (final burst in widget.burstEmitters) {
      burst.dispose();
    }
    _pulse.dispose();
    super.dispose();
  }

  void connectLines() {
    _activeLineCount = 0;
    final double threshold = widget.connectionStyle.maxDistance;
    final double thresholdSquared = threshold * threshold;
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
            _linePool.add(ParticleLine(particles[point1], particles[point2],
                distanceBetween, widget.connectionStyle));
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
              activeLineCount: () => _activeLineCount,
              burstEmitters: widget.burstEmitters,
              repaint: _pulse,
            ),
          ),
          if (widget.interaction != null)
            ParticleScope(
              particles: particles,
              child: widget.interaction!,
            ),
        ],
      ),
    );
  }
}

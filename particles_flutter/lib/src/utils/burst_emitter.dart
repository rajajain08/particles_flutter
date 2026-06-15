import 'dart:math';
import 'package:flutter/material.dart';
import 'package:particles_flutter/src/component/particle/particle.dart';
import 'package:particles_flutter/src/utils/burst_emitter_controller.dart';
import 'package:particles_flutter/src/utils/burst_pattern.dart';
import 'package:particles_flutter/src/utils/particle_physics.dart';

/// An emitter that fires a fixed number of particles in a burst.
///
/// Supports instant, delayed, and repeating bursts with configurable spread
/// patterns. Burst particles are additive — they do not interfere with the
/// main particle pool.
///
/// See also [Emitter.burst] for a factory-constructor shorthand.
class BurstEmitter {
  BurstEmitter({
    required this.position,
    required this.particleCount,
    required this.particleFactory,
    required this.pattern,
    this.initialDelay = Duration.zero,
    this.repeatCount = 1,
    this.repeatInterval = Duration.zero,
    this.positionRadius = 0.0,
    this.physics,
    this.enableTrails = false,
    this.controller,
    this.maxPoolSize = 500,
  }) : assert(maxPoolSize >= particleCount,
            'maxPoolSize must be >= particleCount');

  /// Burst origin as a function of widget size, e.g. `(size) => size.center(Offset.zero)`.
  final Offset Function(Size size) position;

  /// Number of particles emitted per burst.
  final int particleCount;

  /// Called once per particle to produce its appearance.
  /// Engine sets position and velocity after this returns.
  final Particle Function(int index, int total) particleFactory;

  /// Velocity spread strategy for burst particles.
  final BurstPattern pattern;

  /// Delay before the first burst fires.
  final Duration initialDelay;

  /// How many times to repeat. 0 = infinite.
  final int repeatCount;

  /// Interval between repeats.
  final Duration repeatInterval;

  /// Scatter radius around [position] for spawn point.
  final double positionRadius;

  /// Per-burst physics. Null = no gravity on burst particles.
  final ParticlePhysics? physics;

  /// Trails are off by default — trails on hundreds of particles are expensive.
  final bool enableTrails;

  /// Optional controller for manual triggering.
  final BurstEmitterController? controller;

  /// Hard ceiling on live + dead particles retained by this emitter.
  ///
  /// Overlapping bursts (e.g. rapid taps) accumulate particles so older ones
  /// keep animating. When the pool would exceed this, the oldest particles are
  /// reclaimed for the new burst. Must be >= [particleCount]. Defaults to 500.
  final int maxPoolSize;

  // --- Internal engine state ---

  final Random _rng = Random();
  List<Particle>? _pool;
  bool _initialized = false;
  bool _autoFiring = false;
  bool _disposed = false;
  int _completedRepeats = 0;

  bool get _isInfinite => repeatCount == 0;
  bool get _autoRepeatDone =>
      !_isInfinite && _completedRepeats >= repeatCount;

  /// Called once by the engine after the widget lays out.
  void initialize(Size size) {
    if (_initialized) return;
    _initialized = true;
    // Controller-driven emitters fire ONLY on trigger() (via tickController).
    // Without a controller, fire automatically per repeat schedule.
    if (controller == null && !_autoRepeatDone) {
      _scheduleAutoFire(size);
    }
  }

  void _scheduleAutoFire(Size size) {
    if (_autoFiring) return;
    _autoFiring = true;
    Future.delayed(initialDelay, () => _autoLoop(size));
  }

  void _autoLoop(Size size) {
    if (_disposed) return;
    if (!_autoRepeatDone) {
      _fireBurst(size);
      _completedRepeats++;
      if (!_autoRepeatDone) {
        Future.delayed(repeatInterval, () => _autoLoop(size));
        return;
      }
    }
    _autoFiring = false;
  }

  /// Stops the auto-fire loop and releases the particle pool.
  /// Call when the emitter is no longer used (e.g. widget disposed or scene swap).
  void dispose() {
    _disposed = true;
    _autoFiring = false;
    _pool = null;
  }

  /// Called every frame by the engine to handle controller triggers.
  void tickController(Size size) {
    if (_disposed) return;
    final ctrl = controller;
    if (ctrl == null) return;
    while (ctrl.consumeTrigger()) {
      _fireBurst(size);
    }
  }

  void _fireBurst(Size size) {
    final origin = position(size);
    _ensurePool();
    final pool = _pool!;

    // Emit [particleCount] particles while keeping older bursts alive:
    //   1. Reuse dead (expired / never-fired) slots first.
    //   2. Allocate new slots up to [maxPoolSize].
    //   3. If still short (pool at cap, all alive), reclaim the oldest
    //      particles so memory never exceeds the ceiling.
    var emitted = 0;

    // 1. Reuse dead slots.
    for (int i = 0; i < pool.length && emitted < particleCount; i++) {
      if (_isDead(pool[i])) {
        _resetParticle(pool[i], emitted, origin);
        emitted++;
      }
    }

    // 2. Allocate new slots while under the cap.
    while (emitted < particleCount && pool.length < maxPoolSize) {
      final p = particleFactory(emitted, particleCount);
      _resetParticle(p, emitted, origin);
      pool.add(p);
      emitted++;
    }

    // 3. Reclaim oldest live particles to fill the remainder.
    if (emitted < particleCount) {
      final remaining = particleCount - emitted;
      final byAge = List<Particle>.from(pool)
        ..sort((a, b) => b.age.compareTo(a.age));
      for (int i = 0; i < remaining && i < byAge.length; i++) {
        _resetParticle(byAge[i], emitted, origin);
        emitted++;
      }
    }
  }

  bool _isDead(Particle p) =>
      p.isExpired || (p.age == 0.0 && p.position == Offset.zero);

  void _ensurePool() {
    _pool ??= [];
  }

  void _resetParticle(Particle p, int index, Offset origin) {
    final scatter = positionRadius > 0
        ? Offset(
            (_rng.nextDouble() * 2 - 1) * positionRadius,
            (_rng.nextDouble() * 2 - 1) * positionRadius,
          )
        : Offset.zero;

    p.updatePosition = origin + scatter;
    p.updateVelocity = pattern.resolveVelocity(index, particleCount, _rng);
    p.updateAge = 0.0;
    p.updateRotation = 0.0;
    // Reset lifetime-driven visual state so reused (expired) slots look fresh.
    p.resetLifetimeState();
  }

  /// Returns the live burst particle pool (may be null before first burst).
  List<Particle> get particles => _pool ?? const [];

  /// Per-frame update for burst particles. Called by engine's _engine() loop.
  void updateParticles(
    double deltaTime,
    double width,
    double height,
    Size size,
  ) {
    tickController(size);
    final pool = _pool;
    if (pool == null) return;

    for (int i = 0; i < pool.length; i++) {
      final p = pool[i];
      if (p.lifetime != null && p.isExpired) continue;

      if (p.lifetime != null) {
        p.updateAge = p.age + deltaTime;
        if (p.isExpired) continue;
        _updateLifetime(p);
      }

      if (enableTrails && p.trailEnabled) p.pushTrailPosition(p.position);

      final dx = p.position.dx + deltaTime * p.currentVelocity.dx;
      final dy = p.position.dy + deltaTime * p.currentVelocity.dy;
      p.updatePosition = Offset(dx, dy);

      if (physics != null) {
        p.updateVelocity = physics!.applyGravity(p.currentVelocity, deltaTime);
      }

      p.updateRotation = p.rotation + deltaTime * p.rotationSpeed;
    }
  }

  void _updateLifetime(Particle p) {
    // Reuse ParticleLifetime logic inline to avoid import cycle
    // (ParticleLifetime already handles null lifetime guard)
    from_lifetime(p);
  }
}

// Thin shim — avoids circular import while reusing lifetime logic.
void from_lifetime(Particle p) {
  if (p.lifetime == null) return;
  final t = p.lifetimeProgress;

  final colorCurveT = p.colorCurve.transform(t);
  final gradient = p.colorGradient;
  if (gradient != null && gradient.length >= 2) {
    p.updateCurrentColor = _lerpGradient(gradient, colorCurveT);
  } else if (p.endColor != null) {
    p.updateCurrentColor = Color.lerp(p.color, p.endColor!, colorCurveT)!;
  }

  if (p.endScale != null) {
    final st = p.scaleCurve.transform(t);
    p.updateCurrentScale = p.startScale + (p.endScale! - p.startScale) * st;
  }

  if (p.endOpacity != null) {
    final ot = p.opacityCurve.transform(t);
    if (p.startOpacity == 0.0 && p.endOpacity == 0.0) {
      p.updateCurrentOpacity = (ot <= 0.5 ? ot * 2.0 : (1.0 - ot) * 2.0).clamp(0.0, 1.0);
    } else {
      p.updateCurrentOpacity = (p.startOpacity + (p.endOpacity! - p.startOpacity) * ot).clamp(0.0, 1.0);
    }
  }
}

Color _lerpGradient(List<Color> stops, double t) {
  if (t <= 0) return stops.first;
  if (t >= 1) return stops.last;
  final scaled = t * (stops.length - 1);
  final i = scaled.floor();
  return Color.lerp(stops[i], stops[i + 1], scaled - i)!;
}

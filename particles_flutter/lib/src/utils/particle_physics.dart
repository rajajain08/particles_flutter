import 'dart:math';
import 'package:flutter/material.dart';

/// A point that pulls particles toward it (positive [strength]) or pushes
/// them away (negative [strength]) while they're within [radius].
///
/// Force falls off linearly with distance — full strength at the attractor's
/// center, zero at [radius]. [position] is a callback so the attractor can
/// follow a moving point (e.g. the user's finger) every frame.
class Attractor {
  const Attractor({
    required this.position,
    required this.strength,
    required this.radius,
  });

  /// Attractor's location, evaluated fresh every frame.
  final Offset Function() position;

  /// Force magnitude at the attractor's center. Positive pulls particles in,
  /// negative pushes them away.
  final double strength;

  /// Distance beyond which the attractor has no effect.
  final double radius;

  /// Returns the velocity delta this attractor applies to a particle at
  /// [particlePosition] over [deltaTime].
  Offset forceOn(Offset particlePosition, double deltaTime) {
    final center = position();
    final dx = center.dx - particlePosition.dx;
    final dy = center.dy - particlePosition.dy;
    final distance = sqrt(dx * dx + dy * dy);
    if (distance <= 0.0001 || distance >= radius) return Offset.zero;

    final falloff = 1.0 - (distance / radius);
    final magnitude = strength * falloff * deltaTime;
    return Offset(dx / distance * magnitude, dy / distance * magnitude);
  }
}

class ParticlePhysics {
  const ParticlePhysics({
    this.gravityScale = 9.8,
    this.attractors = const [],
    this.maxSpeed,
  });

  final double gravityScale;

  /// Attraction/repulsion points applied every frame alongside gravity.
  final List<Attractor> attractors;

  /// Caps particle speed after gravity/attractors are applied. Without a
  /// cap, attractors can accelerate particles indefinitely as they pass
  /// close to the attractor's center every frame. `null` = no cap.
  final double? maxSpeed;

  Offset applyGravity(Offset velocity, double deltaTime) {
    return Offset(velocity.dx, velocity.dy + gravityScale * deltaTime);
  }

  /// Sums every attractor's force on a particle at [position] into a
  /// velocity delta for this frame.
  Offset applyAttractors(Offset position, double deltaTime) {
    var dx = 0.0, dy = 0.0;
    for (final attractor in attractors) {
      final force = attractor.forceOn(position, deltaTime);
      dx += force.dx;
      dy += force.dy;
    }
    return Offset(dx, dy);
  }

  /// Clamps [velocity] to [maxSpeed] if set, preserving direction.
  Offset clampSpeed(Offset velocity) {
    final cap = maxSpeed;
    if (cap == null) return velocity;
    final speed = velocity.distance;
    if (speed <= cap || speed == 0) return velocity;
    final scale = cap / speed;
    return Offset(velocity.dx * scale, velocity.dy * scale);
  }
}

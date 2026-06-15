import 'dart:math';
import 'package:flutter/material.dart';

sealed class BurstPattern {
  const BurstPattern();

  Offset resolveVelocity(int index, int total, Random rng);
}

class RadialBurst extends BurstPattern {
  const RadialBurst({
    this.minSpeed = 100.0,
    this.maxSpeed = 300.0,
  });

  final double minSpeed;
  final double maxSpeed;

  @override
  Offset resolveVelocity(int index, int total, Random rng) {
    final angle = (index / total) * 2 * pi + rng.nextDouble() * 0.1;
    final speed = minSpeed + rng.nextDouble() * (maxSpeed - minSpeed);
    return Offset(cos(angle) * speed, sin(angle) * speed);
  }
}

class ConeBurst extends BurstPattern {
  const ConeBurst({
    this.angle = -pi / 2,
    this.spread = pi / 4,
    this.minSpeed = 100.0,
    this.maxSpeed = 300.0,
  });

  /// Center direction of cone in radians. Default: straight up (-π/2).
  final double angle;

  /// Half-angle of cone in radians. e.g. π/4 = 45° cone.
  final double spread;
  final double minSpeed;
  final double maxSpeed;

  @override
  Offset resolveVelocity(int index, int total, Random rng) {
    final a = angle + (rng.nextDouble() * 2 - 1) * spread;
    final speed = minSpeed + rng.nextDouble() * (maxSpeed - minSpeed);
    return Offset(cos(a) * speed, sin(a) * speed);
  }
}

class DirectionalBurst extends BurstPattern {
  const DirectionalBurst({
    this.angle = -pi / 2,
    this.spreadVariance = 0.2,
    this.minSpeed = 100.0,
    this.maxSpeed = 300.0,
  });

  /// Direction in radians. Default: straight up (-π/2).
  final double angle;

  /// Random variance added to angle per particle (radians).
  final double spreadVariance;
  final double minSpeed;
  final double maxSpeed;

  @override
  Offset resolveVelocity(int index, int total, Random rng) {
    final a = angle + (rng.nextDouble() * 2 - 1) * spreadVariance;
    final speed = minSpeed + rng.nextDouble() * (maxSpeed - minSpeed);
    return Offset(cos(a) * speed, sin(a) * speed);
  }
}

class CustomBurst extends BurstPattern {
  const CustomBurst(this.velocityBuilder);

  final Offset Function(int index, int total) velocityBuilder;

  @override
  Offset resolveVelocity(int index, int total, Random rng) {
    return velocityBuilder(index, total);
  }
}

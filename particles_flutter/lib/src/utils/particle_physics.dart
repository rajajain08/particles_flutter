import 'package:flutter/material.dart';

class ParticlePhysics {
  const ParticlePhysics({
    this.gravityScale = 9.8,
  });

  final double gravityScale;

  Offset applyGravity(Offset velocity, double deltaTime) {
    return Offset(velocity.dx, velocity.dy + gravityScale * deltaTime);
  }
}

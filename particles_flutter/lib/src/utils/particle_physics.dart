import 'package:flutter/material.dart';

class ParticlePhysics {
  const ParticlePhysics({
    this.gravityScale = 9.8,
  });

  final double gravityScale;


  Offset applyGravity(Offset velocity) 
  {
    // mass is assumed to be 1 until further extension. 
    // ideally, particles do not need to define a mass unless the physics package is being used.

    double newVerticalVelocity = velocity.dy + gravityScale * (10/60);

    return Offset(velocity.dx, newVerticalVelocity);
  }
}
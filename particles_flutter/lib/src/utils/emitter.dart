import 'dart:math';
import 'package:flutter/material.dart';
import 'package:particles_flutter/engine.dart';

class Emitter {
  const Emitter({
    required this.startPosition,
    this.startPositionRadius = 0,
    this.clusterSize = 1,
    this.delay = const Duration(milliseconds: 0),
    this.recycles = false,
  });

  /// Emission position.
  final Offset startPosition;

  /// Maximum distance from [startPosition] which a particle may spawn.
  final double startPositionRadius;

  /// The number of particles that will emit in a single 'cluster'.
  final int clusterSize;

  /// The time between emissions.
  final Duration delay;

  /// Define whether or not the emitter will re-use particles that exit the boundary,
  /// creating an infinite loop from the emitter.
  /// 
  /// Note - requires the particle engine to have a [boundType] of [BoundType.None]
  final bool recycles;

  void Emit(List<Particle> particles, List<Particle> render) async
  {
    var rng = Random();

    /// Initialise particles at the given position + given radius
    for(int index = 0; index < particles.length; index+=0)
    {
      /// Release particles in clusters 
      for(int cluster = 0; cluster < clusterSize; cluster++){
        particles[index].updatePosition = Offset(
          startPosition.dx + ((rng.nextDouble() * 2 - 1) * startPositionRadius),
          startPosition.dy + ((rng.nextDouble() * 2 - 1) * startPositionRadius),
        );

        /// Once started, add the particle to the rendered list in the engine's state.
        render.add(particles[index]);
        index++;
      }
      /// Wait for the delay between cluster release
      await Future.delayed(delay);
    }
  }

  void Recycle(Particle particle)
  {
    var rng = Random();
    particle.updatePosition = Offset(
      startPosition.dx + ((rng.nextDouble() * 2 - 1) * startPositionRadius),
      startPosition.dy + ((rng.nextDouble() * 2 - 1) * startPositionRadius),
    );
  }
}
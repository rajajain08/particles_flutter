import 'package:flutter/widgets.dart';
import 'package:particles_flutter/src/component/particle/particle.dart';

/// Internal inherited widget the engine uses to hand its live particle list
/// to [ParticleInteraction] without the interaction widget holding mutable
/// back-references to engine state.
class ParticleScope extends InheritedWidget {
  const ParticleScope({
    Key? key,
    required this.particles,
    required Widget child,
  }) : super(key: key, child: child);

  /// The engine's live particle list. The list instance is stable for the
  /// lifetime of the engine state; its contents are mutated in place.
  final List<Particle> particles;

  /// Reads the nearest scope without registering a build dependency, so it is
  /// safe to call from gesture/hover handlers. Returns an empty list when the
  /// caller is not inside a [Particles] engine.
  static List<Particle> of(BuildContext context) {
    final scope = context.getInheritedWidgetOfExactType<ParticleScope>();
    return scope?.particles ?? const [];
  }

  @override
  bool updateShouldNotify(ParticleScope oldWidget) =>
      !identical(oldWidget.particles, particles);
}

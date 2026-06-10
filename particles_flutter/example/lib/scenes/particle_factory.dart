import 'dart:math';
import 'dart:ui' as ui;
import 'package:flutter/material.dart';
import 'package:particles_flutter/engine.dart';
import 'package:particles_flutter/shapes.dart';
import '../models/scene_config.dart';

final _rng = Random();
double _sign() => _rng.nextBool() ? 1 : -1;

List<Particle> buildParticles(
    SceneConfig scene, int count, ui.Image snowflake) {
  switch (scene.id) {
    case SceneId.starfield:
      return _starfield(scene, count);
    case SceneId.web:
      return _web(scene, count);
    case SceneId.snow:
      return _snow(scene, count);
    case SceneId.nebula:
      return _nebula(scene, count);
    case SceneId.fireworks:
      return _fireworks(scene, count);
  }
}

List<Particle> _starfield(SceneConfig s, int count) {
  return List.generate(count, (_) {
    final size = (_rng.nextDouble() * 3 + 0.5) * s.sizeMultiplier;
    return CircularParticle(
      radius: size,
      color: Color.lerp(Colors.white, s.accentColor, _rng.nextDouble())!
          .withValues(alpha: (_rng.nextDouble() * 0.5 + 0.4) * s.opacity),
      velocity: Offset(
        _rng.nextDouble() * s.speed * 0.6 * _sign(),
        _rng.nextDouble() * s.speed * 0.6 * _sign(),
      ),
    );
  });
}

List<Particle> _web(SceneConfig s, int count) {
  return List.generate(count, (_) {
    return CircularParticle(
      radius: (_rng.nextDouble() * 3 + 1.5) * s.sizeMultiplier,
      color: s.accentColor.withValues(
          alpha: (_rng.nextDouble() * 0.4 + 0.5) * s.opacity),
      velocity: Offset(
        _rng.nextDouble() * s.speed * _sign(),
        _rng.nextDouble() * s.speed * _sign(),
      ),
    );
  });
}

List<Particle> _snow(SceneConfig s, int count) {
  return List.generate(count, (_) {
    final size = (_rng.nextDouble() * 6 + 2) * s.sizeMultiplier;
    return CircularParticle(
      radius: size,
      color: Colors.white
          .withValues(alpha: (_rng.nextDouble() * 0.5 + 0.4) * s.opacity),
      velocity: Offset(
        _rng.nextDouble() * 20 * _sign(),
        _rng.nextDouble() * s.speed * 0.3 + 5,
      ),
    );
  });
}

List<Particle> _nebula(SceneConfig s, int count) {
  const colors = [
    Color(0xFFFF4081),
    Color(0xFF7C4DFF),
    Color(0xFF00E5FF),
    Color(0xFFFFD740),
    Color(0xFF69F0AE),
  ];
  return List.generate(count, (_) {
    final color = colors[_rng.nextInt(colors.length)];
    final vel = Offset(
      _rng.nextDouble() * s.speed * _sign(),
      _rng.nextDouble() * s.speed * _sign(),
    );
    if (_rng.nextBool()) {
      return OvoidalParticle(
        width: (_rng.nextDouble() * 30 + 8) * s.sizeMultiplier,
        height: (_rng.nextDouble() * 20 + 5) * s.sizeMultiplier,
        color: color.withValues(
            alpha: (_rng.nextDouble() * 0.4 + 0.2) * s.opacity),
        velocity: vel,
        rotationSpeed: _rng.nextDouble() * 0.5 * _sign(),
      );
    } else {
      return CircularParticle(
        radius: (_rng.nextDouble() * 12 + 2) * s.sizeMultiplier,
        color: color.withValues(
            alpha: (_rng.nextDouble() * 0.35 + 0.15) * s.opacity),
        velocity: vel,
      );
    }
  });
}

List<Particle> _fireworks(SceneConfig s, int count) {
  const colors = [
    Color(0xFFFF6D00),
    Color(0xFFFFD740),
    Color(0xFFFF4081),
    Color(0xFF69F0AE),
    Color(0xFF00E5FF),
    Color(0xFFEA80FC),
  ];
  return List.generate(count, (_) {
    final color = colors[_rng.nextInt(colors.length)];
    final speed = _rng.nextDouble() * s.speed + 20;
    final angle = _rng.nextDouble() * 2 * pi;
    final vel = Offset(cos(angle) * speed, sin(angle) * speed);
    final shape = _rng.nextInt(3);
    if (shape == 0) {
      return CircularParticle(
        radius: (_rng.nextDouble() * 4 + 1) * s.sizeMultiplier,
        color: color.withValues(alpha: 0.9 * s.opacity),
        velocity: vel,
      );
    } else if (shape == 1) {
      final side = (_rng.nextDouble() * 6 + 2) * s.sizeMultiplier;
      return RectangularParticle(
        width: side,
        height: side,
        color: color.withValues(alpha: 0.9 * s.opacity),
        velocity: vel,
        rotationSpeed: _rng.nextDouble() * 4 * _sign(),
      );
    } else {
      return TriangularParticle(
        width: (_rng.nextDouble() * 8 + 3) * s.sizeMultiplier,
        height: (_rng.nextDouble() * 8 + 3) * s.sizeMultiplier,
        color: color.withValues(alpha: 0.9 * s.opacity),
        velocity: vel,
        rotationSpeed: _rng.nextDouble() * 4 * _sign(),
      );
    }
  });
}

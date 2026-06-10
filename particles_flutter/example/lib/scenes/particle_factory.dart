import 'dart:math';
import 'dart:ui' as ui;
import 'package:flutter/material.dart';
import 'package:particles_flutter/engine.dart';
import 'package:particles_flutter/shapes.dart';
import '../models/scene_config.dart';

// Corner burst — 60 confetti particles shot inward from a corner
List<Particle> buildCornerBurst(SceneConfig s, Offset corner) {
  const colors = [
    Color(0xFFE53935), Color(0xFF8E24AA), Color(0xFF1E88E5),
    Color(0xFF00ACC1), Color(0xFF43A047), Color(0xFFFFB300),
    Color(0xFFFF6F00), Color(0xFFEC407A), Color(0xFFFFFFFF),
    Color(0xFFFFD700),
  ];
  // Angle range pointing inward from each corner (±60° from diagonal)
  final baseAngle = atan2(-corner.dy == 0 ? 1 : -1, -corner.dx == 0 ? 1 : -1);
  return List.generate(60, (_) {
    final color = colors[_rng.nextInt(colors.length)];
    final spread = ((_rng.nextDouble() - 0.5) * pi * 0.7);
    final angle = baseAngle + spread;
    final speed = _rng.nextDouble() * 300 + 150;
    final shape = _rng.nextInt(3);
    if (shape == 0) {
      return RoundRectangularParticle(
        width: (_rng.nextDouble() * 12 + 6) * s.sizeMultiplier,
        height: (_rng.nextDouble() * 4 + 2) * s.sizeMultiplier,
        cornerRadius: 1.5,
        color: color.withValues(alpha: 0.9 * s.opacity),
        velocity: Offset(cos(angle) * speed, sin(angle) * speed),
        rotationSpeed: _rng.nextDouble() * 5 * _sign(),
      );
    } else if (shape == 1) {
      return CircularParticle(
        radius: (_rng.nextDouble() * 4 + 2) * s.sizeMultiplier,
        color: color.withValues(alpha: 0.9 * s.opacity),
        velocity: Offset(cos(angle) * speed, sin(angle) * speed),
      );
    } else {
      final side = (_rng.nextDouble() * 7 + 4) * s.sizeMultiplier;
      return TriangularParticle(
        width: side, height: side,
        color: color.withValues(alpha: 0.9 * s.opacity),
        velocity: Offset(cos(angle) * speed, sin(angle) * speed),
        rotationSpeed: _rng.nextDouble() * 4 * _sign(),
      );
    }
  });
}

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
    case SceneId.confetti:
      return _confetti(scene, count);
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
    Color(0xFF40C4FF),
    Color(0xFFEA80FC),
    Color(0xFFFFFF00),
    Color(0xFFFF1744),
  ];
  return List.generate(count, (_) {
    final color = colors[_rng.nextInt(colors.length)];
    final speed = _rng.nextDouble() * s.speed * 0.8 + s.speed * 0.4;
    final angle = _rng.nextDouble() * 2 * pi;
    final vel = Offset(cos(angle) * speed, sin(angle) * speed);
    final shape = _rng.nextInt(4);
    if (shape == 0) {
      return CircularParticle(
        radius: (_rng.nextDouble() * 5 + 2) * s.sizeMultiplier,
        color: color.withValues(alpha: s.opacity),
        velocity: vel,
      );
    } else if (shape == 1) {
      final side = (_rng.nextDouble() * 7 + 3) * s.sizeMultiplier;
      return RectangularParticle(
        width: side,
        height: side * 0.4,
        color: color.withValues(alpha: 0.95 * s.opacity),
        velocity: vel,
        rotationSpeed: _rng.nextDouble() * 6 * _sign(),
      );
    } else if (shape == 2) {
      return TriangularParticle(
        width: (_rng.nextDouble() * 9 + 4) * s.sizeMultiplier,
        height: (_rng.nextDouble() * 9 + 4) * s.sizeMultiplier,
        color: color.withValues(alpha: 0.95 * s.opacity),
        velocity: vel,
        rotationSpeed: _rng.nextDouble() * 5 * _sign(),
      );
    } else {
      return RoundRectangularParticle(
        width: (_rng.nextDouble() * 12 + 4) * s.sizeMultiplier,
        height: (_rng.nextDouble() * 3 + 1.5) * s.sizeMultiplier,
        cornerRadius: 2,
        color: color.withValues(alpha: 0.9 * s.opacity),
        velocity: vel,
        rotationSpeed: _rng.nextDouble() * 5 * _sign(),
      );
    }
  });
}

List<Particle> _confetti(SceneConfig s, int count) {
  const colors = [
    Color(0xFFE53935),
    Color(0xFF8E24AA),
    Color(0xFF1E88E5),
    Color(0xFF00ACC1),
    Color(0xFF43A047),
    Color(0xFFFFB300),
    Color(0xFFFF6F00),
    Color(0xFFEC407A),
    Color(0xFFFFFFFF),
    Color(0xFFFFD700),
  ];
  return List.generate(count, (_) {
    final color = colors[_rng.nextInt(colors.length)];
    final vx = _rng.nextDouble() * 30 * _sign();
    final vy = _rng.nextDouble() * s.speed * 0.4 + s.speed * 0.1;
    final shape = _rng.nextInt(3);
    if (shape == 0) {
      return RoundRectangularParticle(
        width: (_rng.nextDouble() * 12 + 6) * s.sizeMultiplier,
        height: (_rng.nextDouble() * 4 + 2) * s.sizeMultiplier,
        cornerRadius: 1.5,
        color: color.withValues(
            alpha: (_rng.nextDouble() * 0.3 + 0.7) * s.opacity),
        velocity: Offset(vx, vy),
        rotationSpeed: _rng.nextDouble() * 4 * _sign(),
      );
    } else if (shape == 1) {
      return CircularParticle(
        radius: (_rng.nextDouble() * 4 + 2) * s.sizeMultiplier,
        color: color.withValues(
            alpha: (_rng.nextDouble() * 0.3 + 0.65) * s.opacity),
        velocity: Offset(vx, vy),
      );
    } else {
      final side = (_rng.nextDouble() * 7 + 4) * s.sizeMultiplier;
      return TriangularParticle(
        width: side,
        height: side,
        color: color.withValues(
            alpha: (_rng.nextDouble() * 0.3 + 0.65) * s.opacity),
        velocity: Offset(vx, vy),
        rotationSpeed: _rng.nextDouble() * 3 * _sign(),
      );
    }
  });
}

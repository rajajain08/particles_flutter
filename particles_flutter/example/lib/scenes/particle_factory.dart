import 'dart:math';
import 'dart:ui' as ui;
import 'package:flutter/material.dart';
import 'package:particles_flutter/engine.dart';
import 'package:particles_flutter/physics.dart';
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
    case SceneId.comet:
      return _comet(scene, count);
    case SceneId.pulse:
      return _pulse(scene, count);
    case SceneId.ghosts:
      return _ghosts(scene, count);
    case SceneId.rockets:
      return _rockets(scene, count);
    case SceneId.burstDemo:
      return []; // burst scene uses only burstEmitters, no background particles
    case SceneId.poolCycle:
      return []; // poolCycle scene renders its own PoolCycleScene widget
  }
}

/// Builds the BurstEmitters for the burst demo scene.
///
/// [tapPosition] is read lazily on each fire, so the tap explosion follows
/// wherever the user last clicked.
List<BurstEmitter> buildBurstEmitters(
  SceneConfig scene,
  BurstEmitterController tapController,
  Offset Function() tapPosition,
) {
  if (scene.id != SceneId.burstDemo) return [];

  const fireworkColors = [
    Color(0xFFFB923C), Color(0xFFFBBF24), Color(0xFFF472B6),
    Color(0xFF34D399), Color(0xFF38BDF8), Color(0xFFE879F9),
    Color(0xFFFEF08A), Color(0xFFFF6B6B), Color(0xFF67E8F9),
    Color(0xFFFFFFFF),
  ];

  const confettiColors = [
    Color(0xFFFF6B6B), Color(0xFFFF9F43), Color(0xFFFECA57),
    Color(0xFF48DBFB), Color(0xFF1DD1A1), Color(0xFFF368E0),
    Color(0xFF54A0FF), Color(0xFFFFFFFF), Color(0xFFA29BFE),
  ];

  // 1. Radial firework — center, single welcome burst on load
  final firework = BurstEmitter(
    position: (size) => Offset(size.width / 2, size.height * 0.4),
    particleCount: 70,
    pattern: const RadialBurst(minSpeed: 160, maxSpeed: 420),
    repeatCount: 1,
    physics: const ParticlePhysics(gravityScale: 130),
    particleFactory: (i, total) {
      final color = fireworkColors[_rng.nextInt(fireworkColors.length)];
      final shape = _rng.nextInt(3);
      if (shape == 0) {
        return CircularParticle(
          radius: _rng.nextDouble() * 4 + 2,
          color: color,
          velocity: Offset.zero,
          lifetime: _rng.nextDouble() * 0.8 + 1.0,
          colorGradient: [color, color.withValues(alpha: 0.4), Colors.transparent],
          colorCurve: Curves.linear,
          startOpacity: 0.0,
          endOpacity: 0.0,
          opacityCurve: Curves.linear,
          trailEnabled: true,
          trailLength: 5,
          trailFade: true,
        );
      } else if (shape == 1) {
        return TriangularParticle(
          width: _rng.nextDouble() * 6 + 3,
          height: _rng.nextDouble() * 6 + 3,
          color: color,
          velocity: Offset.zero,
          rotationSpeed: _rng.nextDouble() * 6 * _sign(),
          lifetime: _rng.nextDouble() * 0.8 + 1.0,
          endOpacity: 0.0,
          opacityCurve: Curves.easeIn,
        );
      } else {
        return RoundRectangularParticle(
          width: _rng.nextDouble() * 10 + 4,
          height: _rng.nextDouble() * 3 + 1.5,
          cornerRadius: 2,
          color: color,
          velocity: Offset.zero,
          rotationSpeed: _rng.nextDouble() * 5 * _sign(),
          lifetime: _rng.nextDouble() * 0.8 + 1.0,
          endOpacity: 0.0,
          opacityCurve: Curves.easeIn,
        );
      }
    },
  );

  // 2. Cone confetti — shoots upward from bottom center, single welcome burst
  final confetti = BurstEmitter(
    position: (size) => Offset(size.width / 2, size.height + 10),
    particleCount: 50,
    pattern: const ConeBurst(
      angle: -pi / 2,
      spread: pi / 2.5,
      minSpeed: 300,
      maxSpeed: 600,
    ),
    initialDelay: const Duration(milliseconds: 400),
    repeatCount: 1,
    positionRadius: 60,
    physics: const ParticlePhysics(gravityScale: 200),
    particleFactory: (i, total) {
      final color = confettiColors[_rng.nextInt(confettiColors.length)];
      final shape = _rng.nextInt(3);
      if (shape == 0) {
        return RoundRectangularParticle(
          width: _rng.nextDouble() * 12 + 6,
          height: _rng.nextDouble() * 4 + 2,
          cornerRadius: 1.5,
          color: color,
          velocity: Offset.zero,
          rotationSpeed: _rng.nextDouble() * 5 * _sign(),
          lifetime: _rng.nextDouble() * 1.0 + 1.5,
          endOpacity: 0.0,
          opacityCurve: Curves.easeIn,
        );
      } else if (shape == 1) {
        return CircularParticle(
          radius: _rng.nextDouble() * 4 + 2,
          color: color,
          velocity: Offset.zero,
          lifetime: _rng.nextDouble() * 1.0 + 1.5,
          endOpacity: 0.0,
          opacityCurve: Curves.easeIn,
        );
      } else {
        final side = _rng.nextDouble() * 7 + 4;
        return TriangularParticle(
          width: side,
          height: side,
          color: color,
          velocity: Offset.zero,
          rotationSpeed: _rng.nextDouble() * 4 * _sign(),
          lifetime: _rng.nextDouble() * 1.0 + 1.5,
          endOpacity: 0.0,
          opacityCurve: Curves.easeIn,
        );
      }
    },
  );

  // 3. Tap explosion — controller-driven, radial, fires wherever tapped
  final tapBurst = BurstEmitter(
    position: (size) => tapPosition(),
    particleCount: 35,
    pattern: const RadialBurst(minSpeed: 80, maxSpeed: 240),
    repeatCount: 0,
    controller: tapController,
    physics: const ParticlePhysics(gravityScale: 80),
    particleFactory: (i, total) {
      final color = fireworkColors[_rng.nextInt(fireworkColors.length)];
      return CircularParticle(
        radius: _rng.nextDouble() * 3 + 1.5,
        color: color,
        velocity: Offset.zero,
        lifetime: _rng.nextDouble() * 0.5 + 0.8,
        startScale: 1.0,
        endScale: 0.0,
        scaleCurve: Curves.easeIn,
        startOpacity: 0.0,
        endOpacity: 0.0,
        opacityCurve: Curves.linear,
      );
    },
  );

  return [firework, confetti, tapBurst];
}

List<Particle> _starfield(SceneConfig s, int count) {
  // Multi-color stars: white core + purple/blue/pink accents
  const starColors = [
    Colors.white,
    Color(0xFFE0CFFF),
    Color(0xFFB3DFFE),
    Color(0xFFFFD6E0),
    Color(0xFFD4BBFF),
    Color(0xFF93C5FD),
  ];
  return List.generate(count, (_) {
    final size = (_rng.nextDouble() * 3 + 0.5) * s.sizeMultiplier;
    final color = starColors[_rng.nextInt(starColors.length)];
    return CircularParticle(
      radius: size,
      color: color.withValues(alpha: (_rng.nextDouble() * 0.5 + 0.35) * s.opacity),
      velocity: Offset(
        _rng.nextDouble() * s.speed * 0.6 * _sign(),
        _rng.nextDouble() * s.speed * 0.6 * _sign(),
      ),
    );
  });
}

List<Particle> _web(SceneConfig s, int count) {
  // Cyan-to-teal-to-blue gradient web — more depth than single color
  const webColors = [
    Color(0xFF22D3EE),
    Color(0xFF67E8F9),
    Color(0xFF06B6D4),
    Color(0xFF38BDF8),
    Color(0xFF7DD3FC),
    Color(0xFF2DD4BF),
  ];
  return List.generate(count, (_) {
    final color = webColors[_rng.nextInt(webColors.length)];
    return CircularParticle(
      radius: (_rng.nextDouble() * 3 + 1.5) * s.sizeMultiplier,
      color: color.withValues(alpha: (_rng.nextDouble() * 0.4 + 0.45) * s.opacity),
      velocity: Offset(
        _rng.nextDouble() * s.speed * _sign(),
        _rng.nextDouble() * s.speed * _sign(),
      ),
    );
  });
}

List<Particle> _snow(SceneConfig s, int count) {
  // Snow with blue tint variation — feels like real snowflakes under moonlight
  const snowColors = [
    Colors.white,
    Color(0xFFE0F2FE),
    Color(0xFFBAE6FD),
    Color(0xFF93C5FD),
    Color(0xFFDBEAFE),
  ];
  return List.generate(count, (_) {
    final size = (_rng.nextDouble() * 6 + 2) * s.sizeMultiplier;
    final color = snowColors[_rng.nextInt(snowColors.length)];
    return CircularParticle(
      radius: size,
      color: color.withValues(alpha: (_rng.nextDouble() * 0.45 + 0.35) * s.opacity),
      velocity: Offset(
        _rng.nextDouble() * 20 * _sign(),
        _rng.nextDouble() * s.speed * 0.3 + 5,
      ),
    );
  });
}

List<Particle> _nebula(SceneConfig s, int count) {
  // Rich nebula palette — pinks, purples, magentas, teals
  const colors = [
    Color(0xFFF472B6),
    Color(0xFFE879F9),
    Color(0xFFA78BFA),
    Color(0xFF818CF8),
    Color(0xFF34D399),
    Color(0xFF22D3EE),
    Color(0xFFFB7185),
    Color(0xFFFC8E68),
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
  // Vivid firework burst — warm + cool contrast
  const colors = [
    Color(0xFFFB923C),
    Color(0xFFFBBF24),
    Color(0xFFF472B6),
    Color(0xFF34D399),
    Color(0xFF38BDF8),
    Color(0xFFE879F9),
    Color(0xFFFEF08A),
    Color(0xFFFF6B6B),
    Color(0xFF67E8F9),
    Color(0xFFFFFFFF),
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
  // Celebration palette — vivid neons, golds, corals, mints
  const colors = [
    Color(0xFFFF6B6B),
    Color(0xFFFF9F43),
    Color(0xFFFECA57),
    Color(0xFF48DBFB),
    Color(0xFF1DD1A1),
    Color(0xFFF368E0),
    Color(0xFFFF9FF3),
    Color(0xFF54A0FF),
    Color(0xFFFFFFFF),
    Color(0xFFF7DC6F),
    Color(0xFFA29BFE),
    Color(0xFF55EFC4),
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

// v2.1 — Color over lifetime + trails
List<Particle> _comet(SceneConfig s, int count) {
  const colors = [
    Color(0xFFFFFFFF),
    Color(0xFFFFD740),
    Color(0xFFFF6D00),
    Color(0xFFEA80FC),
    Color(0xFF40C4FF),
    Color(0xFF69F0AE),
  ];
  return List.generate(count, (_) {
    final baseColor = colors[_rng.nextInt(colors.length)];
    final speed = (_rng.nextDouble() * 0.6 + 0.4) * s.speed;
    final angle = _rng.nextDouble() * 2 * pi;
    return CircularParticle(
      radius: (_rng.nextDouble() * 3 + 2) * s.sizeMultiplier,
      color: baseColor,
      velocity: Offset(cos(angle) * speed, sin(angle) * speed),
      lifetime: _rng.nextDouble() * 2.0 + 1.5,
      colorGradient: [
        baseColor,
        baseColor.withValues(alpha: 0.7),
        Colors.orange.withValues(alpha: 0.4),
        Colors.transparent,
      ],
      colorCurve: Curves.linear,
      startOpacity: 0.0,
      endOpacity: 0.0,
      opacityCurve: Curves.linear,
      trailEnabled: true,
      trailLength: 7,
      trailFade: true,
    );
  });
}

// v2.1 — Scale over lifetime
List<Particle> _pulse(SceneConfig s, int count) {
  const colors = [
    Color(0xFF7C4DFF),
    Color(0xFFE040FB),
    Color(0xFF40C4FF),
    Color(0xFF69F0AE),
    Color(0xFFFF4081),
  ];
  return List.generate(count, (_) {
    final color = colors[_rng.nextInt(colors.length)];
    final lifetime = _rng.nextDouble() * 1.5 + 1.5;
    return CircularParticle(
      radius: (_rng.nextDouble() * 10 + 6) * s.sizeMultiplier,
      color: color.withValues(alpha: s.opacity),
      velocity: Offset(
        _rng.nextDouble() * s.speed * 0.4 * _sign(),
        _rng.nextDouble() * s.speed * 0.4 * _sign(),
      ),
      lifetime: lifetime,
      startScale: 0.1,
      endScale: 1.6,
      scaleCurve: Curves.easeInOut,
      startOpacity: 0.0,
      endOpacity: 0.0,
      opacityCurve: Curves.linear,
    );
  });
}

// v2.1 — Fade over lifetime
List<Particle> _ghosts(SceneConfig s, int count) {
  const shapes = 3;
  const ghostColors = [
    Color(0xFFE8F5E9),
    Color(0xFF69F0AE),
    Color(0xFF80CBC4),
    Color(0xFFB2DFDB),
    Color(0xFFA5D6A7),
  ];
  return List.generate(count, (_) {
    final color = ghostColors[_rng.nextInt(ghostColors.length)];
    final lifetime = _rng.nextDouble() * 3.0 + 2.0;
    final vx = _rng.nextDouble() * s.speed * 0.3 * _sign();
    final vy = _rng.nextDouble() * s.speed * 0.2 * _sign();
    final shape = _rng.nextInt(shapes);
    // Fade: 0→peak→0 is approximated by startOpacity=0, endOpacity=0
    // and peak driven by Curves.easeInOut (ramps up then down)
    if (shape == 0) {
      return CircularParticle(
        radius: (_rng.nextDouble() * 14 + 8) * s.sizeMultiplier,
        color: color,
        velocity: Offset(vx, vy),
        lifetime: lifetime,
        startOpacity: 0.0,
        endOpacity: 0.0,
        opacityCurve: Curves.easeInOut,
        startScale: 0.6,
        endScale: 1.2,
        scaleCurve: Curves.easeOut,
      );
    } else if (shape == 1) {
      return OvoidalParticle(
        width: (_rng.nextDouble() * 24 + 14) * s.sizeMultiplier,
        height: (_rng.nextDouble() * 14 + 8) * s.sizeMultiplier,
        color: color,
        velocity: Offset(vx, vy),
        rotationSpeed: _rng.nextDouble() * 0.3 * _sign(),
        lifetime: lifetime,
        startOpacity: 0.0,
        endOpacity: 0.0,
        opacityCurve: Curves.easeInOut,
        startScale: 0.5,
        endScale: 1.1,
        scaleCurve: Curves.easeOut,
      );
    } else {
      return RoundRectangularParticle(
        width: (_rng.nextDouble() * 20 + 10) * s.sizeMultiplier,
        height: (_rng.nextDouble() * 20 + 10) * s.sizeMultiplier,
        cornerRadius: 6,
        color: color,
        velocity: Offset(vx, vy),
        rotationSpeed: _rng.nextDouble() * 0.4 * _sign(),
        lifetime: lifetime,
        startOpacity: 0.0,
        endOpacity: 0.0,
        opacityCurve: Curves.easeInOut,
        startScale: 0.5,
        endScale: 1.2,
        scaleCurve: Curves.easeOut,
      );
    }
  });
}

// v2.1 — All features combined
List<Particle> _rockets(SceneConfig s, int count) {
  const colors = [
    Color(0xFFFFD740),
    Color(0xFFFF6D00),
    Color(0xFFFF4081),
    Color(0xFF40C4FF),
    Color(0xFF69F0AE),
    Color(0xFFEA80FC),
    Color(0xFFFFFFFF),
    Color(0xFFFF1744),
  ];
  return List.generate(count, (_) {
    final baseColor = colors[_rng.nextInt(colors.length)];
    final angle = _rng.nextDouble() * 2 * pi;
    final speed = (_rng.nextDouble() * 0.5 + 0.5) * s.speed;
    final lifetime = _rng.nextDouble() * 1.0 + 1.2;
    final shape = _rng.nextInt(3);
    final vel = Offset(cos(angle) * speed, sin(angle) * speed);

    if (shape == 0) {
      return CircularParticle(
        radius: (_rng.nextDouble() * 4 + 2) * s.sizeMultiplier,
        color: baseColor,
        velocity: vel,
        rotationSpeed: _rng.nextDouble() * 2 * _sign(),
        lifetime: lifetime,
        colorGradient: [baseColor, Colors.orange, Colors.red, Colors.transparent],
        colorCurve: Curves.linear,
        startScale: 1.0,
        endScale: 0.0,
        scaleCurve: Curves.easeIn,
        startOpacity: 0.0,
        endOpacity: 0.0,
        opacityCurve: Curves.linear,
        trailEnabled: true,
        trailLength: 6,
        trailFade: true,
      );
    } else if (shape == 1) {
      return TriangularParticle(
        width: (_rng.nextDouble() * 7 + 3) * s.sizeMultiplier,
        height: (_rng.nextDouble() * 7 + 3) * s.sizeMultiplier,
        color: baseColor,
        velocity: vel,
        rotationSpeed: _rng.nextDouble() * 5 * _sign(),
        lifetime: lifetime,
        colorGradient: [baseColor, Colors.deepOrange, Colors.transparent],
        colorCurve: Curves.linear,
        startScale: 0.8,
        endScale: 0.0,
        scaleCurve: Curves.easeIn,
        startOpacity: 0.0,
        endOpacity: 0.0,
        opacityCurve: Curves.linear,
        trailEnabled: true,
        trailLength: 5,
        trailFade: true,
      );
    } else {
      return RoundRectangularParticle(
        width: (_rng.nextDouble() * 10 + 4) * s.sizeMultiplier,
        height: (_rng.nextDouble() * 3 + 1.5) * s.sizeMultiplier,
        cornerRadius: 2,
        color: baseColor,
        velocity: vel,
        rotationSpeed: _rng.nextDouble() * 4 * _sign(),
        lifetime: lifetime,
        colorGradient: [baseColor, Colors.orange, Colors.transparent],
        colorCurve: Curves.linear,
        startScale: 1.0,
        endScale: 0.0,
        scaleCurve: Curves.easeIn,
        startOpacity: 0.0,
        endOpacity: 0.0,
        opacityCurve: Curves.linear,
        trailEnabled: true,
        trailLength: 5,
        trailFade: true,
      );
    }
  });
}

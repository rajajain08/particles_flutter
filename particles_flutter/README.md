<div align="center">

# particles_flutter

**A Flutter package for high-performance, fully customisable particle animations. Build starfields, snow, confetti, fireworks, connected webs, comets, and more — with physics, touch/hover interaction, lifetime animations, trails, and an emission controller.**

[![pub package](https://img.shields.io/pub/v/particles_flutter.svg)](https://pub.dev/packages/particles_flutter)
[![pub points](https://img.shields.io/pub/points/particles_flutter)](https://pub.dev/packages/particles_flutter/score)
[![likes](https://img.shields.io/pub/likes/particles_flutter)](https://pub.dev/packages/particles_flutter)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Live Demo](https://img.shields.io/badge/demo-particles--flutter.vercel.app-0B0C14?logo=vercel&logoColor=white)](https://particles-flutter.vercel.app)
[![Buy Me A Coffee](https://img.shields.io/badge/buy%20me%20a%20coffee-rajajain08-FFDD00?logo=buymeacoffee&logoColor=000)](https://buymeacoffee.com/rajajain08)

[**Live Demo**](https://particles-flutter.vercel.app) · [pub.dev](https://pub.dev/packages/particles_flutter) · [Issues](https://github.com/rajajain08/particles_flutter/issues) · [Contributing](#contributing)

</div>

---

<p align="center">
  <img src="https://github.com/rajajain08/particles_flutter/blob/master/particles_flutter/readme_src/newparticledemo.gif?raw=true" height="400"/>
</p>

---

## Install

```sh
flutter pub add particles_flutter
```

---

## Quick Start

```dart
import 'package:particles_flutter/engine.dart';
import 'package:particles_flutter/shapes.dart';

Particles(
  width: MediaQuery.of(context).size.width,
  height: MediaQuery.of(context).size.height,
  boundType: BoundType.WrapAround,
  particles: List.generate(80, (_) {
    final rng = Random();
    return CircularParticle(
      radius: rng.nextDouble() * 4 + 1,
      color: Colors.white.withValues(alpha: 0.7),
      velocity: Offset(
        (rng.nextDouble() - 0.5) * 60,
        (rng.nextDouble() - 0.5) * 60,
      ),
    );
  }),
)
```

---

## What's New in v2.1

| Feature | Description |
|---|---|
| **Color over lifetime** | Smoothly transition between colors or across a gradient |
| **Scale over lifetime** | Grow or shrink particles with curve support |
| **Fade over lifetime** | Fade in, fade out, or both — with `startOpacity`/`endOpacity` |
| **Particle trails** | Motion trails behind moving particles, configurable length and fade |

All new features are **optional and fully backward compatible** — existing code compiles and behaves identically.

---

## Features

### Particle Shapes

Import with `import 'package:particles_flutter/shapes.dart';`

| Shape | Class |
|---|---|
| Circle | `CircularParticle(radius, color, velocity)` |
| Rectangle | `RectangularParticle(width, height, color, velocity)` |
| Rounded Rectangle | `RoundRectangularParticle(width, height, cornerRadius, ...)` |
| Triangle | `TriangularParticle(width, height, color, velocity)` |
| Oval | `OvoidalParticle(width, height, color, velocity, rotationSpeed)` |
| Image | `ImageParticle(image, width, height, color, velocity)` |

All shapes support `rotationSpeed` for spinning effects, and all v2.1 lifetime parameters.

---

### Lifetime Animations (v2.1)

All shapes accept these optional parameters. Omit them to keep existing behavior.

#### Color over lifetime

```dart
CircularParticle(
  color: Colors.yellow,
  lifetime: 3.0,
  // Two-color transition
  endColor: Colors.transparent,
  // OR gradient across lifetime
  colorGradient: [Colors.white, Colors.yellow, Colors.orange, Colors.transparent],
  colorCurve: Curves.linear,
  ...
)
```

#### Scale over lifetime

```dart
CircularParticle(
  color: Colors.purple,
  lifetime: 2.5,
  startScale: 0.1,
  endScale: 1.8,
  scaleCurve: Curves.easeInOut,
  ...
)
```

#### Fade over lifetime

```dart
CircularParticle(
  color: Colors.white,
  lifetime: 2.0,
  startOpacity: 1.0,
  endOpacity: 0.0,
  opacityCurve: Curves.easeIn,
  ...
)
```

> **Tip:** Set both `startOpacity: 0.0` and `endOpacity: 0.0` to get a triangle fade — particles fade in to full opacity at mid-life, then fade back out. Seamless spawn and death with no visible pop.

```dart
CircularParticle(
  lifetime: 3.0,
  startOpacity: 0.0,  // fade in from invisible
  endOpacity: 0.0,    // fade out to invisible — triangle curve auto-applied
  ...
)
```

#### Particle trails

```dart
CircularParticle(
  color: Colors.cyan,
  lifetime: 2.0,
  trailEnabled: true,
  trailLength: 7,   // number of past positions to draw
  trailFade: true,  // fade older segments
  ...
)
```

---

### Boundary Types

```dart
Particles(
  boundType: BoundType.WrapAround, // wrap | Bounce | None
  ...
)
```

| Value | Behaviour |
|---|---|
| `BoundType.None` | Particles exit the canvas (default) |
| `BoundType.WrapAround` | Particles reappear from the opposite edge |
| `BoundType.Bounce` | Particles reflect off edges |

---

### Touch & Hover Interaction

Import with `import 'package:particles_flutter/interactions.dart';`

```dart
Particles(
  interaction: ParticleInteraction(
    awayRadius: 120,
    enableHover: true,
    onTapAnimation: true,
    awayAnimationDuration: Duration(milliseconds: 400),
    awayAnimationCurve: Curves.easeOut,
    hoverRadius: 80,
  ),
  ...
)
```

---

### Particle Physics (Gravity)

Import with `import 'package:particles_flutter/physics.dart';`

```dart
Particles(
  particlePhysics: ParticlePhysics(gravityScale: 30),
  ...
)
```

---

### Emission Controller

Spawn particles from a fixed point — great for fireworks and fountains.

```dart
Particles(
  boundType: BoundType.None,
  particleEmitter: Emitter(
    startPosition: Offset(width / 2, height / 2),
    startPositionRadius: 10,  // spawn spread radius
    clusterSize: 10,           // particles per burst
    delay: Duration(milliseconds: 300),
    recycles: false,           // true = infinite loop
  ),
  ...
)
```

---

## Example Scenes

### ✨ Starfield
```dart
Particles(
  boundType: BoundType.WrapAround,
  interaction: ParticleInteraction(awayRadius: 120, enableHover: true),
  particles: List.generate(120, (_) => CircularParticle(
    radius: Random().nextDouble() * 3 + 0.5,
    color: Colors.white.withValues(alpha: 0.7),
    velocity: Offset((Random().nextDouble() - 0.5) * 40,
                     (Random().nextDouble() - 0.5) * 40),
  )),
  ...
)
```

### ❄️ Snow
```dart
Particles(
  boundType: BoundType.WrapAround,
  particlePhysics: ParticlePhysics(gravityScale: 20),
  particles: List.generate(100, (_) => CircularParticle(
    radius: Random().nextDouble() * 6 + 2,
    color: Colors.white.withValues(alpha: 0.8),
    velocity: Offset((Random().nextDouble() - 0.5) * 20,
                     Random().nextDouble() * 15 + 5),
  )),
  ...
)
```

### 🎆 Fireworks
```dart
Particles(
  boundType: BoundType.None,
  particlePhysics: ParticlePhysics(gravityScale: 45),
  particleEmitter: Emitter(
    startPosition: Offset(width / 2, height / 2),
    startPositionRadius: width * 0.25,
    clusterSize: 15,
    delay: Duration(milliseconds: 300),
  ),
  particles: List.generate(150, (_) {
    final angle = Random().nextDouble() * 2 * pi;
    final speed = Random().nextDouble() * 120 + 60;
    return TriangularParticle(
      width: 6, height: 6,
      color: Colors.orange,
      velocity: Offset(cos(angle) * speed, sin(angle) * speed),
      rotationSpeed: 3.0,
    );
  }),
  ...
)
```

### ☄️ Comet — color gradient + trails

```dart
Particles(
  boundType: BoundType.WrapAround,
  particles: List.generate(80, (_) {
    final angle = Random().nextDouble() * 2 * pi;
    final speed = Random().nextDouble() * 60 + 40;
    return CircularParticle(
      radius: Random().nextDouble() * 3 + 2,
      color: Colors.white,
      velocity: Offset(cos(angle) * speed, sin(angle) * speed),
      lifetime: Random().nextDouble() * 2.0 + 1.5,
      colorGradient: [Colors.white, Colors.yellow, Colors.orange, Colors.transparent],
      startOpacity: 0.0,
      endOpacity: 0.0,
      trailEnabled: true,
      trailLength: 7,
      trailFade: true,
    );
  }),
  ...
)
```

### 🔮 Pulse — scale over lifetime

```dart
Particles(
  boundType: BoundType.WrapAround,
  particles: List.generate(60, (_) => CircularParticle(
    radius: 10,
    color: Color(0xFF7C4DFF),
    velocity: Offset((Random().nextDouble() - 0.5) * 20,
                     (Random().nextDouble() - 0.5) * 20),
    lifetime: 2.5,
    startScale: 0.1,
    endScale: 1.8,
    scaleCurve: Curves.easeInOut,
    startOpacity: 0.0,
    endOpacity: 0.0,
  )),
  ...
)
```

### 👻 Ghosts — fade in/out

```dart
Particles(
  boundType: BoundType.WrapAround,
  particles: List.generate(50, (_) => CircularParticle(
    radius: Random().nextDouble() * 14 + 8,
    color: Color(0xFF69F0AE),
    velocity: Offset((Random().nextDouble() - 0.5) * 15,
                     (Random().nextDouble() - 0.5) * 10),
    lifetime: Random().nextDouble() * 3.0 + 2.0,
    startOpacity: 0.0,  // triangle fade: 0 → peak → 0
    endOpacity: 0.0,
    startScale: 0.6,
    endScale: 1.2,
    scaleCurve: Curves.easeOut,
  )),
  ...
)
```

### 🚀 Rockets — all v2.1 features

```dart
Particles(
  boundType: BoundType.None,
  particlePhysics: ParticlePhysics(gravityScale: 40),
  particles: List.generate(150, (_) {
    final angle = Random().nextDouble() * 2 * pi;
    final speed = Random().nextDouble() * 80 + 80;
    return CircularParticle(
      radius: Random().nextDouble() * 4 + 2,
      color: Colors.yellow,
      velocity: Offset(cos(angle) * speed, sin(angle) * speed),
      lifetime: Random().nextDouble() * 1.0 + 1.2,
      colorGradient: [Colors.white, Colors.yellow, Colors.red, Colors.transparent],
      startScale: 1.0,
      endScale: 0.0,
      scaleCurve: Curves.easeIn,
      startOpacity: 0.0,
      endOpacity: 0.0,
      trailEnabled: true,
      trailLength: 6,
      trailFade: true,
    );
  }),
  ...
)
```

---

## Live Demo

See all scenes running live → **[particles-flutter.vercel.app](https://particles-flutter.vercel.app/)**

<p align="center">
  <img src="https://github.com/rajajain08/particles_flutter/blob/master/particles_flutter/readme_src/web_demo.gif?raw=true"/>
</p>

---

## Support

If this package saved you time, please:

- ⭐ [Star on GitHub](https://github.com/rajajain08/particles_flutter)
- 👍 [Thumbs up on pub.dev](https://pub.dev/packages/particles_flutter)
- ☕ [Buy me a coffee](https://www.buymeacoffee.com/rajajain08)

<a href="https://www.buymeacoffee.com/rajajain08" target="_blank">
  <img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="32" width="140">
</a>

---

## Contributing

Bug reports and pull requests welcome.

- Found a bug? → [Open an issue](https://github.com/rajajain08/particles_flutter/issues)
- Have a fix? → [Send a PR](https://github.com/rajajain08/particles_flutter/pulls)
- Want to chat? → [Twitter @rajajain08](https://twitter.com/rajajain08)

### Contributors

<a href="https://github.com/RealEeveahy">
  <img src="https://github.com/RealEeveahy.png" width="48" height="48" alt="RealEeveahy" style="border-radius:50%">
</a>

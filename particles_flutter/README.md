<div align="center">

# particles_flutter

**A Flutter package for high-performance, fully customisable particle animations. Build starfields, snow, confetti, fireworks, connected webs, and more — with physics, touch/hover interaction, and an emission controller.**

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

All shapes support `rotationSpeed` for spinning effects.

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

<div align="center">

# particles_flutter

**High-performance, fully customisable particle animations for Flutter.**
Starfields, snow, confetti, fireworks, connected webs, comets, burst explosions — with physics, touch/hover interaction, lifetime animations, trails, and burst emitters.

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
  <img src="https://github.com/rajajain08/particles_flutter/blob/master/particles_flutter/readme_src/ss_mob_1.png?raw=true" height="420"/>
  &nbsp;&nbsp;
  <img src="https://github.com/rajajain08/particles_flutter/blob/master/particles_flutter/readme_src/ss_mob_2.png?raw=true" height="420"/>
  &nbsp;&nbsp;
  <img src="https://github.com/rajajain08/particles_flutter/blob/master/particles_flutter/readme_src/ss_mob_3.png?raw=true" height="420"/>
</p>

---

## Table of Contents

- [Install](#install)
- [Quick Start](#quick-start)
- [Features](#features)
  - [Particle Shapes](#particle-shapes)
  - [Lifetime Animations](#lifetime-animations)
  - [Boundary Types](#boundary-types)
  - [Touch & Hover Interaction](#touch--hover-interaction)
  - [Particle Physics](#particle-physics)
  - [Emission Controller](#emission-controller)
  - [Burst Emitter](#burst-emitter)
- [Example Scenes](#example-scenes)
- [Live Demo](#live-demo)
- [Changelog](#changelog)
- [Support](#support)
- [Contributing](#contributing)

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

Import: `import 'package:particles_flutter/shapes.dart';`

| Shape | Class |
|---|---|
| Circle | `CircularParticle(radius, color, velocity)` |
| Rectangle | `RectangularParticle(width, height, color, velocity)` |
| Rounded Rectangle | `RoundRectangularParticle(width, height, cornerRadius, ...)` |
| Triangle | `TriangularParticle(width, height, color, velocity)` |
| Oval | `OvoidalParticle(width, height, color, velocity, rotationSpeed)` |
| Image | `ImageParticle(image, width, height, color, velocity)` |

All shapes support `rotationSpeed` and all lifetime animation parameters.

---

### Lifetime Animations

All shapes accept these optional parameters. Omit any to keep default behavior.

#### Color over lifetime

```dart
CircularParticle(
  color: Colors.yellow,
  lifetime: 3.0,
  // Two-color transition:
  endColor: Colors.transparent,
  // OR gradient across lifetime:
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

> **Tip:** Set both `startOpacity: 0.0` **and** `endOpacity: 0.0` for a triangle fade — particles fade in to full opacity at mid-life, then back out. No visible pop on spawn or death.

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
  trailLength: 7,   // past positions to draw
  trailFade: true,  // fade older segments
  ...
)
```

---

### Boundary Types

| Value | Behaviour |
|---|---|
| `BoundType.None` | Particles exit the canvas (default) |
| `BoundType.WrapAround` | Particles reappear from the opposite edge |
| `BoundType.Bounce` | Particles reflect off edges |

```dart
Particles(
  boundType: BoundType.WrapAround,
  ...
)
```

---

### Touch & Hover Interaction

Import: `import 'package:particles_flutter/interactions.dart';`

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

### Particle Physics

Import: `import 'package:particles_flutter/physics.dart';`

```dart
Particles(
  particlePhysics: ParticlePhysics(gravityScale: 30),
  ...
)
```

---

### Emission Controller

Spawn particles from a fixed point — great for fountains and fireworks.

```dart
Particles(
  boundType: BoundType.None,
  particleEmitter: Emitter(
    startPosition: Offset(width / 2, height / 2),
    startPositionRadius: 10,  // spawn scatter radius
    clusterSize: 10,           // particles per burst
    delay: Duration(milliseconds: 300),
    recycles: false,           // true = loop forever
  ),
  ...
)
```

---

### Burst Emitter

Fire a fixed number of particles in a single burst — configurable spread, repeat interval, physics, and optional manual controller.

Import: `import 'package:particles_flutter/engine.dart';`

#### Spread patterns

| Pattern | Description |
|---|---|
| `RadialBurst` | All directions evenly |
| `ConeBurst` | Within a configurable cone angle |
| `DirectionalBurst` | One direction with spread |
| `CustomBurst` | `Offset Function(int index, int total)` — build your own |

#### One-shot radial explosion

```dart
Particles(
  particles: const [],
  width: size.width,
  height: size.height,
  boundType: BoundType.None,
  burstEmitters: [
    BurstEmitter(
      position: (size) => size.center(Offset.zero),
      particleCount: 60,
      pattern: RadialBurst(minSpeed: 150, maxSpeed: 400),
      repeatCount: 1,
      physics: ParticlePhysics(gravityScale: 120),
      particleFactory: (i, total) => CircularParticle(
        radius: 4,
        color: Colors.orange,
        velocity: Offset.zero,
        lifetime: 1.8,
        endOpacity: 0.0,
      ),
    ),
  ],
)
```

#### Cone confetti from bottom

```dart
BurstEmitter(
  position: (size) => Offset(size.width / 2, size.height),
  particleCount: 50,
  pattern: ConeBurst(
    angle: -pi / 2,    // shoot upward
    spread: pi / 2.5,
    minSpeed: 300,
    maxSpeed: 600,
  ),
  repeatCount: 1,
  positionRadius: 60,
  physics: ParticlePhysics(gravityScale: 200),
  particleFactory: (i, total) => RoundRectangularParticle(
    width: 12, height: 4, cornerRadius: 2,
    color: Colors.pink,
    velocity: Offset.zero,
    rotationSpeed: 3.0,
    lifetime: 2.0,
    endOpacity: 0.0,
  ),
)
```

#### Tap-to-burst at touch point

```dart
// In your State:
final _ctrl = BurstEmitterController();
Offset _tapPos = Offset.zero;

// In build:
Listener(
  behavior: HitTestBehavior.opaque,
  onPointerDown: (event) {
    _tapPos = event.localPosition;
    _ctrl.trigger();
  },
  child: Particles(
    particles: const [],
    width: size.width,
    height: size.height,
    boundType: BoundType.None,
    burstEmitters: [
      BurstEmitter(
        position: (size) => _tapPos,
        particleCount: 40,
        pattern: RadialBurst(minSpeed: 80, maxSpeed: 240),
        repeatCount: 0,       // 0 = fire only when triggered
        controller: _ctrl,
        physics: ParticlePhysics(gravityScale: 80),
        particleFactory: (i, total) => CircularParticle(
          radius: 3,
          color: Colors.cyan,
          velocity: Offset.zero,
          lifetime: 1.2,
          endScale: 0.0,
          endOpacity: 0.0,
        ),
      ),
    ],
  ),
)
```

#### BurstEmitter parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| `position` | `Offset Function(Size)` | required | Burst origin |
| `particleCount` | `int` | required | Particles per burst |
| `particleFactory` | `Particle Function(int, int)` | required | Builds each particle |
| `pattern` | `BurstPattern` | required | Velocity spread strategy |
| `initialDelay` | `Duration` | `Duration.zero` | Delay before first burst |
| `repeatCount` | `int` | `1` | Bursts to fire; `0` = controller-only |
| `repeatInterval` | `Duration` | `Duration.zero` | Gap between repeats |
| `positionRadius` | `double` | `0` | Scatter radius around `position` |
| `physics` | `ParticlePhysics?` | `null` | Gravity for burst particles |
| `enableTrails` | `bool` | `false` | Trail rendering (expensive at high counts) |
| `controller` | `BurstEmitterController?` | `null` | Manual trigger |
| `maxPoolSize` | `int` | `500` | Memory ceiling; oldest particles reclaimed when full |

> `Emitter.burst(...)` is a shorthand factory that returns a `BurstEmitter` — use whichever style you prefer.

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

### ☄️ Comets — color gradient + trails

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
    startOpacity: 0.0,
    endOpacity: 0.0,
    startScale: 0.6,
    endScale: 1.2,
    scaleCurve: Curves.easeOut,
  )),
  ...
)
```

### 🚀 Rockets — all lifetime features combined

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

### 💥 Burst — tap-to-explode

```dart
final ctrl = BurstEmitterController();
Offset tapPos = Offset.zero;

Listener(
  behavior: HitTestBehavior.opaque,
  onPointerDown: (e) { tapPos = e.localPosition; ctrl.trigger(); },
  child: Particles(
    particles: const [],
    width: size.width,
    height: size.height,
    boundType: BoundType.None,
    burstEmitters: [
      BurstEmitter(
        position: (size) => tapPos,
        particleCount: 40,
        pattern: RadialBurst(minSpeed: 100, maxSpeed: 300),
        repeatCount: 0,
        controller: ctrl,
        physics: ParticlePhysics(gravityScale: 80),
        particleFactory: (i, _) => CircularParticle(
          radius: Random().nextDouble() * 3 + 1.5,
          color: Colors.orange,
          velocity: Offset.zero,
          lifetime: 1.2,
          endScale: 0.0,
          endOpacity: 0.0,
        ),
      ),
    ],
  ),
)
```

---

## Live Demo

See all scenes running live → **[particles-flutter.vercel.app](https://particles-flutter.vercel.app/)**

<p align="center">
  <img src="https://github.com/rajajain08/particles_flutter/blob/master/particles_flutter/readme_src/ss_web_1.png?raw=true" width="49%"/>
  &nbsp;
  <img src="https://github.com/rajajain08/particles_flutter/blob/master/particles_flutter/readme_src/ss_web_2.png?raw=true" width="49%"/>
</p>
<p align="center">
  <img src="https://github.com/rajajain08/particles_flutter/blob/master/particles_flutter/readme_src/ss_web_3.png?raw=true" width="49%"/>
</p>

---

## Changelog

### v2.2
- **BurstEmitter** — fire fixed particle counts in radial, cone, directional, or custom spread patterns
- **BurstEmitterController** — trigger bursts manually from gestures, game events, or any code
- **Tap-to-burst** — `BurstEmitterController.trigger()` + `onPointerDown` for per-tap explosions
- **Overlap-safe pooling** — multiple bursts in flight simultaneously; memory hard-capped at `maxPoolSize`

### v2.1
- **Color over lifetime** — smooth two-color or gradient transitions
- **Scale over lifetime** — grow/shrink with curve support
- **Fade over lifetime** — fade in, out, or triangle (both ends zero = auto mid-peak)
- **Particle trails** — motion trails with configurable length and fade

All releases are fully backward compatible — no changes needed to existing code.

---

## Support

If this package saved you time:

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

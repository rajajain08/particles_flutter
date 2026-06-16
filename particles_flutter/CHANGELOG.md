## [0.1.0] - 23/06/2019.

- Initial release.

## [0.1.1] - 24/06/2019.

- Bug fixing.

## [0.1.2] - 24/06/2019.

- Updated Description.

## [0.1.3] - 22/07/2021.

- Null safety migration and Bug fixes.

## [0.1.3.1] - 22/07/2021.

- Updated doc.

## [1.0.0] - 22/07/2021.

- Added engine and other enhancements

## [1.0.1] - 03/08/2024.

- Bugfix.

## [2.0.0] - 07/01/2026.

- Major update with new features and improvements.
- Added new particle shapes and effects.
- Particle can now rotate.
- Added boundary types.
- Particles emitters added to decide the position of particle generation.

## [2.0.1] - 07/01/2026.

- Updated doc.

## [2.0.2] - 07/01/2026.

- Updated doc.

## [2.1.0] - 12/06/2026.

- Color over lifetime: smooth two-color or gradient transitions with curve support.
- Scale over lifetime: grow/shrink particles with configurable curve.
- Fade over lifetime: fade in, fade out, or triangle fade (startOpacity=0 + endOpacity=0 auto mid-peak).
- Particle trails: motion trails via ring buffer with configurable length and fade.
- Object pooling for ParticleLine: reduced GC pressure on line-connected particle scenes.
- Performance improvements to touch interaction, physics, and emitter update loops.
- Four new example scenes: Comet, Pulse, Ghosts, Rockets.

## [3.0.2] - 17/06/2026.

- Synced both READMEs; fixed mobile screenshot sizing on pub.dev.

## [3.0.1] - 17/06/2026.

- Fixed mobile screenshot sizing in README.

## [3.0.0] - 17/06/2026.

- **Breaking:** Minimum Dart SDK bumped to `>=3.0.0` (was `>=2.13.0`). Requires Flutter 3.10+.

- BurstEmitter: fire fixed particle counts in radial, cone, directional, or custom spread patterns.
- BurstEmitterController: trigger bursts manually from gestures, game events, or any code.
- Tap-to-burst: wire BurstEmitterController.trigger() to onPointerDown for per-tap explosions.
- Overlap-safe pooling: multiple bursts in flight simultaneously, memory hard-capped at maxPoolSize (default 500).
- Four spread patterns: RadialBurst, ConeBurst, DirectionalBurst, CustomBurst.
- Emitter.burst(...) shorthand factory added.


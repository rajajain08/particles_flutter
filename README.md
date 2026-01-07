# Flutter Particles
A package that provides an easy way to add customisable particles with animation in a Flutter project.


<p>
    <img src="particles_flutter/readme_src/newparticledemo.gif" height=400px/>
</p>

## Getting Started

You should ensure that you add the following dependency in your Flutter project.

```yaml
dependencies:
  particles_flutter: 2.0,0
```
And you can ensure you have the latest version of this repo by running ```flutter pub upgrade``` in the terminal.

## How to use

The most simple implementation of the particle system looks like:

```dart
  import 'package:particles_flutter/engine.dart';

  Particles(
        particles: [], // List of particles
        height: screenHeight,
        width: screenWidth,
      )
```

A list of particles can be easily defined for use by replacing the ```[]``` above with a method call to:

```dart
  List<Particle> createParticles() {
    var rng = Random();
    List<Particle> particles = [];

    // Circle particle example
    for (int i = 0; i < 32; i++) {
      particles.add(CircularParticle(
        color: Colors.white.withOpacity(0.6),
        radius: rng.nextDouble() * 20,
        velocity: Offset(rng.nextDouble() * 200 * randomSign(),
            rng.nextDouble() * 200 * randomSign()),
      ));
    }
    return particles;
  }
```
Due to the particle values (velocity, radius) being defined _per-particle_, a degree of randomness can be made between particles, as shown above.

This example, however, won't get very far - since no ```boundType``` has been set for ```Particles```, all of the particles that are initially rendered will slowly exit the screen.

You can extend your particle system with the following features:

### Boundary Types

There are 3 options for the boundary of a particle system.

- ```BoundType.None``` -> Default, particles have no interaction with the engine boundaries.
- ```BoundType.WrapAround``` -> Particles will jump to the opposite boundary on contact with a given boundary. This is the behaviour shown in the original package.
- ```BoundType.Bounce``` -> On contact with a boundary, particles will have their velocity flipped on the axis of that boundary, causing them to bounce.

### Touch/Hover Controls

The touch/hover interactions shown in the original package can now be implemented in the ```interaction``` field of ```Particles``` with the ```ParticleInteraction``` class.

This class implements all the same features that were built in the original package.

Import with
```import 'package:particles_flutter/interactions.dart';```

### Emission Controller

Rather than the random particle spawning implemented by the original package, you can now start all particles at a given position using the ```Emitter``` class in the ```particleEmitter``` field of ```Particles```. For example: 

```Dart
  particleEmitter: Emitter(
    startPosition: Offset(screenWidth/2, screenHeight/2),
    delay: const Duration(milliseconds: 5),
    recycles: true,
  ),
```

Emitter allows you to set a start position, spawn delay and cluster size, as well as toggle ```recycles``` - which will return a particle back to the emitter when it reaches a boundary.

### Particle Shapes
In addition to the circular particle created in the original package, I have provided:
- Rectangular (+ Rounded Rectangular)
- Triangular
- Ovoidal
- Image particles - which can essentially allow _any_ particle shape you wish

All of which can be imported to your project with:   
 ```import 'package:particles_flutter/shapes.dart';```

### Particle Physics

A (developing) feature that can automatically calculate gravity for your particle engine.

Used by assigning a ```ParticlePhysics``` in the ```particlePhysics``` field of ```Particles```.

Import with 
```import 'package:particles_flutter/physics.dart';```

## Support & Contribute

If you like my extensions, give this fork a star on GitHub :)

If you find a bug or want to contribute, please fill out an issue / make a pull request!

## Checkout web [here](https://praticles-flutter-raja-jains-projects.vercel.app/).
https://praticles-flutter-raja-jains-projects.vercel.app/
<p>
    <img src="https://github.com/rajajain08/readme_data/blob/master/flutter_particles/web.gif?raw=true"/>
</p>


## Support
If you find this package useful, please consider giving it a star on [GitHub](https://github.com/rajajain08/particles_flutter) and a thumbs up on [Pub.dev](https://pub.dev/packages/particles_flutter). Your support is greatly appreciated!

<a href="https://www.buymeacoffee.com/rajajain08" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="32" width="140"></a>

## Contributions
Thank you to all the amazing people who have contributed to this project! 🎉

<a href="https://github.com/RealEeveahy">
  <img src="https://github.com/RealEeveahy.png" width="60" height="60" alt="RealEeveahy" style="border-radius: 50%;">
</a>

Want to contribute? Feel free to submit a pull request!

If you find a bug or want a feature, but don't know how to fix/implement it, please fill an [issue](https://github.com/rajajain08/particles_flutter/issues).  
If you fixed a bug or implemented a new feature, please send a [pull request](https://github.com/rajajain08/particles_flutter/pulls).

If you want to contact me, Please send me a short DM on [Twitter](https://twitter.com/rajajain08).



# Flutter Particles 
 [![Say Thanks!](https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg)](https://saythanks.io/to/rajajain08)  
 

Easy way to add particles animation in Flutter project.

<p>
    <img src="https://github.com/rajajain08/readme_data/blob/master/flutter_particles/particles_mob2.gif?raw=true" width=300px/>
     <img src="https://github.com/rajajain08/readme_data/blob/master/flutter_particles/particles_mob1.gif?raw=true" width=300px/>
    <img src="https://github.com/rajajain08/readme_data/blob/master/flutter_particles/particles_web.gif?raw=true" width=800px/>
    <img src="https://github.com/rajajain08/readme_data/blob/master/flutter_particles/particles_desktop.gif?raw=true" width=800px/>
</p>

## Getting Started
**Note:** Make sure your Flutter environment is setup.

#### Installation

In the command terminal, run the following commands:

    $ git clone https://github.com/rajajain08/particles_flutter.git
###### For Web
    $ cd particles_flutter/particles_web/
    $ flutter packages pub global run webdev serve
######## Check out web [here](https://particles-flutter.rajajain08.now.sh).

###### For Desktop(eg:macOs)
    $ cd particles_flutter/particles_web/
    $ flutter run -d macOS 

###### For iOS and Android: Follow this [readme](https://github.com/rajajain08/particles_flutter/blob/master/particles_flutter/README.md). 
  

## How to use

You can use CircularParticle widget and change any of it's value according to your needs.

```dart
CircularParticle(
          key: UniqueKey(),
          awayRadius: 80, 
          numberOfParticles: 200,
          speedOfParticles: 1,
          height: screenHeight,
          width: screenWidth,
          onTapAnimation: true,
          particleColor: Colors.white.withAlpha(150),
          awayAnimationDuration: Duration(milliseconds: 600),
          maxParticleSize: 8,
          isRandSize: true,
          isRandomColor: true,
          randColorList: [
            Colors.red.withAlpha(210),
            Colors.white.withAlpha(210),
            Colors.yellow.withAlpha(210),
            Colors.green.withAlpha(210)
          ],
          awayAnimationCurve: Curves.easeInOutBack,
          enableHover: true,
          hoverColor: Colors.white,
          hoverRadius: 90,
          connectDots: false, //not recommended 
        ),

```

## Contributions

Feel free to contribute to this project.

If you find a bug or want a feature, but don't know how to fix/implement it, please fill an [issue](https://github.com/rajajain08/particles_flutter/issues).  
If you fixed a bug or implemented a new feature, please send a [pull request](https://github.com/rajajain08/particles_flutter/pulls).

If you want to contact me, Please send me a short DM on [Twitter](https://twitter.com/rajajain08).

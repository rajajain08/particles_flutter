import 'dart:ui';

/// Single Particle Model 
abstract class Particle {
  Particle( { required this.color, required this.velocity,});
  
  /// Define the color of a single particle
  final Color color;

  /// Define the direction and speed of a single particle
  final Offset velocity;

  /// The current position of the particle
  Offset _position = Offset(0, 0);
  set updatePosition(Offset newPosition) {
    _position = newPosition;
  }
  /// Update the current position to the new position
  Offset get position => _position;

  /// Allow subclasses to define their own paint method
  void paint(Canvas canvas, Size size);
}
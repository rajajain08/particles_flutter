// Single Particle Model 
import 'dart:ui';

class Particle {
  final Color color;
  final double size;
  final Offset velocity;
 
  Particle( { required this.color, required this.size,required this.velocity,});
  Offset _position = Offset(0, 0);
  set updatePosition(Offset newPosition) {
    _position = newPosition;
  }
  Offset get position => _position;
}
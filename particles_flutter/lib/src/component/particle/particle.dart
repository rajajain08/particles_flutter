import 'dart:ui';

/// Single Particle Model
abstract class Particle {
  Particle(
      {required this.color, required this.velocity, this.rotationSpeed = 0});

  /// Define the color of a single particle.
  final Color color;

  /// Define the direction and speed of a single particle.
  final Offset velocity;

  /// Define the rotation speed of a single particle.
  final double rotationSpeed;

  // Update the current position of the particle
  Offset _position = Offset(0, 0);
  set updatePosition(Offset newPosition) {
    _position = newPosition;
  }

  Offset get position => _position;

  // Update the current particle velocity - only used when BoundType is set to Bounce
  Offset _velocity = Offset(0, 0);
  set updateVelocity(Offset newVelocity) {
    _velocity = newVelocity;
  }

  Offset get currentVelocity => _velocity;

  // Update the current rotation of the particle
  double _rotation = 0;
  set updateRotation(double newRotation) {
    _rotation = newRotation;
  }

  double get rotation => _rotation;

  // Apply rotation, draw the particle, then restore
  void paint(Canvas canvas, Size size) {
    canvas.save();
    rotate(canvas, size.width / 2, size.height / 2);
    drawParticle(canvas, size);
    canvas.restore();
  }

  void rotate(Canvas canvas, double cx, double cy) {
    canvas.translate(position.dx, position.dy);
    canvas.rotate(rotation);
    //canvas.translate(-cx, -cy);
  }

  /// Allow subclasses to define their own draw method
  void drawParticle(Canvas canvas, Size size);
}

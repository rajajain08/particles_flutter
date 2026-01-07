import 'dart:ui';
import 'package:particles_flutter/src/component/particle/particle.dart';

enum BoundType { None, WrapAround, Bounce }

Offset getWrapPosition(double nextX, double nextY, double maxX, double maxY) {
  if (nextX > maxX) {
    // Exceeding right bound
    nextX = nextX - maxX;
  } else if (nextX < 0) {
    // Exceeding left bound
    nextX = nextX + maxX;
  }
  if (nextY > maxY) {
    // Exceeding bottom bound
    nextY = nextY - maxY;
  } else if (nextY < 0) {
    // Exceeding top bound
    nextY = nextY + maxY;
  }
  return Offset(nextX, nextY);
}

Offset checkForBounce(
    double nextX, double nextY, double maxX, double maxY, Particle particle) {
  if (nextX > maxX) {
    // Exceeding right bound
    particle.updateVelocity =
        Offset(-particle.currentVelocity.dx, particle.currentVelocity.dy);
    nextX = maxX;
  } else if (nextX < 0) {
    // Exceeding left bound
    particle.updateVelocity =
        Offset(-particle.currentVelocity.dx, particle.currentVelocity.dy);
    nextX = 0;
  }
  if (nextY > maxY) {
    // Exceeding bottom bound
    particle.updateVelocity =
        Offset(particle.currentVelocity.dx, -particle.currentVelocity.dy);
    nextY = maxY;
  } else if (nextY < 0) {
    // Exceeding top bound
    particle.updateVelocity =
        Offset(particle.currentVelocity.dx, -particle.currentVelocity.dy);
    nextY = 0;
  }
  return Offset(nextX, nextY);
}

bool outOfBound(double nextX, double nextY, double maxX, double maxY,
    {double overflow = 5}) {
  if (nextX > maxX + overflow ||
      nextX < 0 - overflow ||
      nextY > maxY + overflow ||
      nextY < 0 - overflow)
    return true;
  else
    return false;
}

import 'dart:ui';
import 'package:flutter/animation.dart';

class _TrailBuffer {
  _TrailBuffer(int length) : _positions = List.filled(length, Offset.zero);

  final List<Offset> _positions;
  int _head = 0;
  int _count = 0;

  void push(Offset pos) {
    _positions[_head] = pos;
    _head = (_head + 1) % _positions.length;
    if (_count < _positions.length) _count++;
  }

  Offset operator [](int i) =>
      _positions[(_head - _count + i) % _positions.length];

  int get count => _count;

  void clear() {
    _head = 0;
    _count = 0;
  }
}

/// Single Particle Model
abstract class Particle {
  Particle({
    required this.color,
    required this.velocity,
    this.rotationSpeed = 0,
    Offset? startPosition,
    // Lifetime
    this.lifetime,
    // Color over lifetime
    this.endColor,
    this.colorGradient,
    this.colorCurve = const Cubic(0, 0, 1, 1),
    // Scale over lifetime
    this.startScale = 1.0,
    this.endScale,
    this.scaleCurve = const Cubic(0, 0, 1, 1),
    // Opacity over lifetime
    this.startOpacity = 1.0,
    this.endOpacity,
    this.opacityCurve = const Cubic(0, 0, 1, 1),
    // Trails
    this.trailEnabled = false,
    this.trailLength = 10,
    this.trailFade = true,
  })  : _currentColor = color,
        _currentScale = startScale,
        _currentOpacity = startOpacity,
        _trail = trailEnabled ? _TrailBuffer(trailLength) : null,
        _position = startPosition ?? Offset.zero;

  /// Define the color of a single particle.
  final Color color;

  /// Define the direction and speed of a single particle.
  final Offset velocity;

  /// Define the rotation speed of a single particle.
  final double rotationSpeed;

  // --- Lifetime ---
  /// Duration in seconds before the particle expires. null = infinite.
  final double? lifetime;

  // --- Color over lifetime ---
  final Color? endColor;
  final List<Color>? colorGradient;
  final Curve colorCurve;

  // --- Scale over lifetime ---
  final double startScale;
  final double? endScale;
  final Curve scaleCurve;

  // --- Opacity over lifetime ---
  final double startOpacity;
  final double? endOpacity;
  final Curve opacityCurve;

  // --- Trails ---
  final bool trailEnabled;
  final int trailLength;
  final bool trailFade;

  // Runtime state
  double _age = 0.0;
  Color _currentColor;
  double _currentScale;
  double _currentOpacity;
  final _TrailBuffer? _trail;

  double get age => _age;

  // Engine-facing setters for lifetime system
  set updateAge(double value) => _age = value;
  set updateCurrentColor(Color value) => _currentColor = value;
  set updateCurrentScale(double value) => _currentScale = value;
  set updateCurrentOpacity(double value) => _currentOpacity = value;

  // Trail access for engine and painter
  void pushTrailPosition(Offset pos) => _trail?.push(pos);
  int get trailCount => _trail?.count ?? 0;
  Offset trailPositionAt(int i) => _trail![i];

  /// Resets lifetime-driven runtime state (color/scale/opacity/trail) back to
  /// start values. Used when a pooled particle slot is reused for a new burst.
  void resetLifetimeState() {
    _currentColor = color;
    _currentScale = startScale;
    _currentOpacity = startOpacity;
    _trail?.clear();
  }

  // Resolved color+opacity for painter
  Color get paintColor => _currentOpacity >= 1.0
      ? _currentColor
      : _currentColor.withValues(alpha: _currentOpacity);

  double get lifetimeProgress => (lifetime == null || lifetime! <= 0)
      ? 0.0
      : (_age / lifetime!).clamp(0.0, 1.0);

  bool get isExpired => lifetime != null && _age >= lifetime!;

  // Update the current position of the particle
  Offset _position;
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

  // Apply rotation and scale, draw the particle, then restore
  void paint(Canvas canvas, Size size) {
    canvas.save();
    rotate(canvas, size.width / 2, size.height / 2);
    if (_currentScale != 1.0) {
      canvas.scale(_currentScale);
    }
    drawParticle(canvas, size);
    canvas.restore();
  }

  void rotate(Canvas canvas, double cx, double cy) {
    canvas.translate(position.dx, position.dy);
    canvas.rotate(rotation);
  }

  /// Allow subclasses to define their own draw method
  void drawParticle(Canvas canvas, Size size);
}

import 'dart:math';
import 'package:flutter/material.dart';
import 'package:particles_flutter/engine.dart';
import 'package:particles_flutter/physics.dart';

/// Demonstrates [Attractor]: particles are pulled toward (or pushed away
/// from) a point that follows the pointer. Drag to pull the swarm around;
/// tap to flip between attract and repel.
class VortexScene extends StatefulWidget {
  final Size size;
  final Color accentColor;
  final int particleCount;

  const VortexScene({
    required this.size,
    required this.accentColor,
    this.particleCount = 140,
    super.key,
  });

  @override
  State<VortexScene> createState() => _VortexSceneState();
}

class _VortexSceneState extends State<VortexScene> {
  static const _strength = 350.0;
  static const _radius = 220.0;
  static const _maxSpeed = 220.0;

  final _rng = Random();
  Offset _pointerPosition = Offset.zero;
  bool _repel = false;
  late List<CircularParticle> _particles;
  late ParticlePhysics _physics;

  @override
  void initState() {
    super.initState();
    _pointerPosition = Offset(widget.size.width / 2, widget.size.height / 2);
    _particles = List.generate(widget.particleCount, (_) => _spawnParticle());
    _rebuildPhysics();
  }

  void _rebuildPhysics() {
    _physics = ParticlePhysics(
      gravityScale: 0,
      maxSpeed: _maxSpeed,
      attractors: [
        Attractor(
          position: () => _pointerPosition,
          strength: _repel ? -_strength : _strength,
          radius: _radius,
        ),
      ],
    );
  }

  Color _randomColor() {
    const palette = [
      Color(0xFF38BDF8),
      Color(0xFFF472B6),
      Color(0xFFFBBF24),
      Color(0xFF34D399),
      Color(0xFFA78BFA),
    ];
    return palette[_rng.nextInt(palette.length)];
  }

  CircularParticle _spawnParticle() {
    return CircularParticle(
      radius: _rng.nextDouble() * 3 + 1.5,
      color: _randomColor().withValues(alpha: 0.85),
      velocity: Offset(
        (_rng.nextDouble() - 0.5) * 20,
        (_rng.nextDouble() - 0.5) * 20,
      ),
    );
  }

  void _onPointerMove(PointerEvent event) {
    setState(() => _pointerPosition = event.localPosition);
  }

  void _toggleMode() {
    setState(() {
      _repel = !_repel;
      _rebuildPhysics();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Listener(
      behavior: HitTestBehavior.opaque,
      onPointerDown: (e) {
        _onPointerMove(e);
        _toggleMode();
      },
      onPointerMove: _onPointerMove,
      child: Stack(
        children: [
          Particles(
            particles: _particles,
            width: widget.size.width,
            height: widget.size.height,
            boundType: BoundType.WrapAround,
            particlePhysics: _physics,
          ),
          Positioned(
            left: _pointerPosition.dx - 6,
            top: _pointerPosition.dy - 6,
            child: IgnorePointer(
              child: Container(
                width: 12,
                height: 12,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: (_repel ? Colors.redAccent : widget.accentColor)
                      .withValues(alpha: 0.9),
                  boxShadow: [
                    BoxShadow(
                      color: (_repel ? Colors.redAccent : widget.accentColor)
                          .withValues(alpha: 0.6),
                      blurRadius: 12,
                      spreadRadius: 2,
                    ),
                  ],
                ),
              ),
            ),
          ),
          Positioned(
            bottom: 32,
            left: 0,
            right: 0,
            child: IgnorePointer(
              child: Text(
                _repel ? 'REPELLING · tap to attract' : 'ATTRACTING · tap to repel',
                textAlign: TextAlign.center,
                style: const TextStyle(
                  color: Color(0x99FFFFFF),
                  fontSize: 12,
                  letterSpacing: 1.2,
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

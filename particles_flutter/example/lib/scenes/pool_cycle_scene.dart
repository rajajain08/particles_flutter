import 'dart:math';
import 'package:flutter/material.dart';
import 'package:particles_flutter/engine.dart';

/// Demonstrates [Particle.startPosition] and [Particles.onParticleExpired]:
/// a fixed number of visible "slots" cycled from a much larger pool.
///
/// Mirrors the ImageParticle photo-journey use case from
/// https://github.com/rajajain08/particles_flutter/issues/12 — only
/// [visibleSlots] particles are ever on screen; when one expires, the next
/// item from [poolSize] takes its place (a new particle, since color/image
/// are set at construction) at a fresh position, fading in from scratch.
///
/// Each slot is labelled with its current pool index and a short lifetime
/// (1.2s) so the cycling is easy to watch: numbers keep climbing well past
/// [visibleSlots] even though only [visibleSlots] are ever on screen.
class PoolCycleScene extends StatefulWidget {
  final Size size;
  final Color accentColor;
  final int visibleSlots;
  final int poolSize;

  const PoolCycleScene({
    required this.size,
    required this.accentColor,
    this.visibleSlots = 10,
    this.poolSize = 100,
    super.key,
  });

  @override
  State<PoolCycleScene> createState() => _PoolCycleSceneState();
}

class _Slot {
  Offset position;
  int poolIndex;
  Color color;
  _Slot({required this.position, required this.poolIndex, required this.color});
}

class _PoolCycleSceneState extends State<PoolCycleScene> {
  static const _lifetime = 1.2;
  static const _radius = 26.0;

  final _rng = Random();
  late List<CircularParticle> _particles;
  late List<_Slot> _slots;
  late int _nextPoolIndex;

  @override
  void initState() {
    super.initState();
    _nextPoolIndex = widget.visibleSlots % widget.poolSize;
    _slots = List.generate(widget.visibleSlots, (i) => _makeSlot(poolIndex: i));
    _particles = _slots.map(_particleForSlot).toList();
  }

  Offset _randomPosition() => Offset(
        _rng.nextDouble() * (widget.size.width - 60) + 30,
        _rng.nextDouble() * (widget.size.height - 60) + 30,
      );

  Color _colorForPoolIndex(int poolIndex) {
    const palette = [
      Color(0xFF38BDF8),
      Color(0xFFF472B6),
      Color(0xFFFBBF24),
      Color(0xFF34D399),
      Color(0xFFA78BFA),
    ];
    return palette[poolIndex % palette.length];
  }

  _Slot _makeSlot({required int poolIndex}) => _Slot(
        position: _randomPosition(),
        poolIndex: poolIndex,
        color: _colorForPoolIndex(poolIndex),
      );

  CircularParticle _particleForSlot(_Slot slot) {
    return CircularParticle(
      radius: _radius,
      color: slot.color,
      velocity: Offset.zero,
      lifetime: _lifetime,
      startPosition: slot.position,
      startOpacity: 0.0,
      endOpacity: 0.0,
      opacityCurve: Curves.easeInOut,
      startScale: 0.5,
      endScale: 1.0,
      scaleCurve: Curves.easeOutBack,
    );
  }

  void _onParticleExpired(Particle particle) {
    // Called mid-frame from inside Particles' own engine loop (which is
    // itself inside a setState). Rebuilding _particles here would trigger
    // our own setState while the ancestor's setState is still running, so
    // defer the actual list swap to right after this frame.
    final slotIndex = _particles.indexWhere((p) => identical(p, particle));
    if (slotIndex == -1) return;
    final poolIndex = _nextPoolIndex % widget.poolSize;
    _nextPoolIndex++;
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (!mounted) return;
      setState(() {
        final slot = _makeSlot(poolIndex: poolIndex);
        _slots[slotIndex] = slot;
        _particles[slotIndex] = _particleForSlot(slot);
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        Particles(
          particles: _particles,
          width: widget.size.width,
          height: widget.size.height,
          boundType: BoundType.None,
          onParticleExpired: _onParticleExpired,
        ),
        // Pool-index labels overlay — makes the cycling visible: watch the
        // numbers keep climbing past `visibleSlots` while only `visibleSlots`
        // circles are ever on screen at once.
        for (final slot in _slots)
          Positioned(
            left: slot.position.dx - _radius,
            top: slot.position.dy - _radius,
            width: _radius * 2,
            height: _radius * 2,
            child: IgnorePointer(
              child: Center(
                child: Text(
                  '${slot.poolIndex}',
                  style: TextStyle(
                    color: Colors.white.withValues(alpha: 0.85),
                    fontSize: 11,
                    fontWeight: FontWeight.w700,
                    letterSpacing: 0.3,
                    shadows: const [
                      Shadow(color: Colors.black45, blurRadius: 3),
                    ],
                  ),
                ),
              ),
            ),
          ),
      ],
    );
  }
}

import 'dart:math';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:particles_flutter/engine.dart';
import 'package:particles_flutter/shapes.dart';

import '../guide/specimen.dart';
import '../guide/specimen_scaffold.dart';
import '../guide/theme.dart';

/// Specimen 06 — a photo gallery's "memories" reel.
///
/// The real demonstration here is pool cycling: a 2,140-photo collection is
/// shown through exactly ten live particle slots. Each slot drifts upward,
/// fades in and back out over its lifetime, and when it expires
/// [Particles.onParticleExpired] hands the slot to the next photo in the
/// collection — the same list, swapped in place, so the engine picks it up on
/// the next frame without ever re-initializing.
final Specimen photosSpecimen = Specimen(
  number: 6,
  title: 'A year in pictures',
  subtitle: 'ten photos afloat from thousands',
  apiLabel: 'n=10 of 2140 · ImageParticle · onParticleExpired',
  builder: (_) => const PhotosScene(),
);

const Color _background = Color(0xFFF3F2EE);

/// Number of particles alive at any moment.
const int _slotCount = 10;

/// Conceptual size of the photo collection the slots cycle through.
const int _collectionSize = 2140;

/// How many distinct placeholder thumbnails are generated at runtime.
const int _thumbnailCount = 14;

const List<Color> _palette = [
  Color(0xFFB7C9A8),
  Color(0xFFD9B48A),
  Color(0xFF9DB8D4),
  Color(0xFFCF9F9B),
  Color(0xFFC9C48F),
  Color(0xFFA8B8B4),
  Color(0xFFD4B8D0),
  Color(0xFFB8A88F),
];

class PhotosScene extends StatelessWidget {
  const PhotosScene({super.key});

  @override
  Widget build(BuildContext context) {
    return SpecimenScaffold(
      specimen: photosSpecimen,
      background: _background,
      // The engine needs explicit pixel dimensions, and it captures its
      // particle list once at init — so measure first, then key the whole
      // field on the measured size to rebuild it cleanly on resize.
      child: LayoutBuilder(
        builder: (context, constraints) {
          final size = Size(constraints.maxWidth, constraints.maxHeight);
          return KeyedSubtree(
            key: ValueKey(size),
            child: _PhotoField(size: size),
          );
        },
      ),
    );
  }
}

class _PhotoField extends StatefulWidget {
  const _PhotoField({required this.size});

  final Size size;

  @override
  State<_PhotoField> createState() => _PhotoFieldState();
}

class _PhotoFieldState extends State<_PhotoField> {
  final Random _rng = Random();

  /// Runtime-generated stand-ins for real photo thumbnails.
  List<ui.Image>? _thumbnails;

  /// The engine's live list. Never replaced after the first frame — only its
  /// slots are swapped in place, which is what makes the cycling work.
  final List<Particle> _particles = [];

  /// 1-based position in the collection of the next photo to be shown.
  int _nextPhotoNumber = 1;

  @override
  void initState() {
    super.initState();
    _load();
  }

  @override
  void dispose() {
    for (final image in _thumbnails ?? const <ui.Image>[]) {
      image.dispose();
    }
    super.dispose();
  }

  Future<void> _load() async {
    final images = await _generateThumbnails();
    if (!mounted) {
      for (final image in images) {
        image.dispose();
      }
      return;
    }
    setState(() {
      _thumbnails = images;
      _particles
        ..clear()
        ..addAll(List.generate(_slotCount, (_) => _nextParticle()));
    });
  }

  /// Paints [_thumbnailCount] rounded-rect swatches into real [ui.Image]s so
  /// the scene needs no bundled assets. Later palette cycles are lightened a
  /// step so all fourteen read as distinct photos.
  Future<List<ui.Image>> _generateThumbnails() async {
    const side = 64.0;
    final images = <ui.Image>[];
    for (var i = 0; i < _thumbnailCount; i++) {
      final cycle = i ~/ _palette.length;
      final color = Color.lerp(
        _palette[i % _palette.length],
        Colors.white,
        cycle * 0.22,
      )!;

      final recorder = ui.PictureRecorder();
      final canvas = Canvas(
        recorder,
        const Rect.fromLTWH(0, 0, side, side),
      );
      canvas.drawRRect(
        RRect.fromRectAndRadius(
          const Rect.fromLTWH(0, 0, side, side),
          const Radius.circular(12),
        ),
        Paint()
          ..color = color
          ..isAntiAlias = true,
      );
      final picture = recorder.endRecording();
      images.add(await picture.toImage(side.toInt(), side.toInt()));
      picture.dispose();
    }
    return images;
  }

  /// Random spawn point across the middle band of the field, clear of the
  /// header and the caption/buttons.
  Offset _randomStart() {
    final horizontalInset = min(48.0, widget.size.width * 0.12);
    final x = horizontalInset +
        _rng.nextDouble() *
            max(1.0, widget.size.width - horizontalInset * 2);
    final y = widget.size.height * 0.34 +
        _rng.nextDouble() * max(1.0, widget.size.height * 0.44);
    return Offset(x, y);
  }

  /// Builds the particle for the next photo in the collection, advancing the
  /// counter 1 → 2,140 and wrapping back to the start of the year.
  ImageParticle _nextParticle() {
    final images = _thumbnails!;
    final photoNumber = _nextPhotoNumber;
    _nextPhotoNumber =
        photoNumber >= _collectionSize ? 1 : photoNumber + 1;

    final side = 56 + _rng.nextDouble() * 20;
    final particle = ImageParticle(
      particleImage: images[(photoNumber - 1) % images.length],
      width: side,
      height: side,
      color: Colors.white,
      // Slow upward drift with a little sideways wander.
      velocity: Offset(
        _rng.nextDouble() * 16 - 8,
        -18 - _rng.nextDouble() * 12,
      ),
      rotationSpeed: (_rng.nextDouble() - 0.5) * 0.1,
      lifetime: 5 + _rng.nextDouble() * 3,
      startPosition: _randomStart(),
      // Equal start/end opacity of zero gives a triangle fade: in, hold,
      // out — so a photo is never cut off mid-flight.
      startOpacity: 0,
      endOpacity: 0,
      opacityCurve: Curves.easeInOut,
    );
    // Slots swapped in after init never pass through the engine's velocity
    // seeding, so prime the live velocity here.
    particle.updateVelocity = particle.velocity;
    return particle;
  }

  void _onParticleExpired(Particle particle) {
    final slot = _particles.indexWhere((p) => identical(p, particle));
    if (slot == -1) return;
    // This fires mid-frame from inside the engine's own tick; defer the swap
    // so the list is mutated between frames, not during one.
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (!mounted || _thumbnails == null) return;
      _particles[slot] = _nextParticle();
    });
  }

  /// Restart the roll from the first photo of the year.
  void _replay() {
    if (_thumbnails == null) return;
    _nextPhotoNumber = 1;
    _reseedSlots();
  }

  /// Jump every live slot to a random point in the collection.
  void _shuffle() {
    if (_thumbnails == null) return;
    _nextPhotoNumber = _rng.nextInt(_collectionSize) + 1;
    _reseedSlots();
  }

  void _reseedSlots() {
    for (var i = 0; i < _particles.length; i++) {
      _particles[i] = _nextParticle();
    }
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        if (_thumbnails != null)
          Positioned.fill(
            child: Particles(
              particles: _particles,
              width: widget.size.width,
              height: widget.size.height,
              boundType: BoundType.None,
              onParticleExpired: _onParticleExpired,
            ),
          ),
        const Positioned(
          left: 0,
          right: 0,
          top: 0,
          child: IgnorePointer(child: _Header()),
        ),
        Positioned(
          left: 0,
          right: 0,
          bottom: 0,
          child: _Footer(onReplay: _replay, onShuffle: _shuffle),
        ),
      ],
    );
  }
}

class _Header extends StatelessWidget {
  const _Header();

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(28, 48, 28, 0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'MEMORIES',
            style: GuideTheme.mono(
              size: 11,
              color: GuideTheme.rust,
              letterSpacing: 2,
            ),
          ),
          const SizedBox(height: 10),
          Text(
            'This year',
            style: GuideTheme.serif(size: 38, weight: FontWeight.w600),
          ),
          const SizedBox(height: 6),
          Text(
            '2,140 photos · ten afloat at a time',
            style: GuideTheme.serif(size: 15, color: GuideTheme.mutedInk),
          ),
        ],
      ),
    );
  }
}

class _Footer extends StatelessWidget {
  const _Footer({required this.onReplay, required this.onShuffle});

  final VoidCallback onReplay;
  final VoidCallback onShuffle;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(28),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisSize: MainAxisSize.min,
        children: [
          Text(
            'Each photo drifts up, fades, and hands its place to the next — '
            'the whole roll cycles through ten living slots.',
            style: GuideTheme.serif(
              size: 14,
              color: GuideTheme.mutedInk,
              height: 1.45,
              style: FontStyle.italic,
            ),
          ),
          const SizedBox(height: 18),
          Row(
            children: [
              Expanded(
                child: _SceneButton(
                  label: 'Play the year',
                  onTap: onReplay,
                  background: GuideTheme.ink,
                  foreground: GuideTheme.paper,
                ),
              ),
              const SizedBox(width: 12),
              SizedBox(
                width: 110,
                child: _SceneButton(
                  label: 'Shuffle',
                  onTap: onShuffle,
                  background: GuideTheme.card,
                  foreground: GuideTheme.ink,
                  border: GuideTheme.border,
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}

class _SceneButton extends StatelessWidget {
  const _SceneButton({
    required this.label,
    required this.onTap,
    required this.background,
    required this.foreground,
    this.border,
  });

  final String label;
  final VoidCallback onTap;
  final Color background;
  final Color foreground;
  final Color? border;

  @override
  Widget build(BuildContext context) {
    final shape = RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(11),
      side: border == null ? BorderSide.none : BorderSide(color: border!),
    );
    return SizedBox(
      height: 50,
      child: Material(
        color: background,
        shape: shape,
        child: InkWell(
          onTap: onTap,
          customBorder: shape,
          child: Center(
            child: Text(
              label,
              style: GuideTheme.serif(
                size: 15,
                weight: FontWeight.w600,
                color: foreground,
              ),
            ),
          ),
        ),
      ),
    );
  }
}

import 'dart:math';

import 'package:flutter/material.dart';
import 'package:particles_flutter/engine.dart';

import 'registry.dart';
import 'specimen.dart';
import 'specimen_band.dart';
import 'theme.dart';

/// Entry screen. Phone: index list, tap pushes the scene. Wide (web/desktop):
/// left rail plus a live stage showing the selected specimen.
class IndexScreen extends StatefulWidget {
  const IndexScreen({super.key});

  static const railBreakpoint = 900.0;

  @override
  State<IndexScreen> createState() => _IndexScreenState();
}

class _IndexScreenState extends State<IndexScreen> {
  int _selected = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: GuideTheme.paper,
      body: LayoutBuilder(
        builder: (context, constraints) =>
            constraints.maxWidth >= IndexScreen.railBreakpoint
                ? _buildWide(context)
                : _buildPhone(context),
      ),
    );
  }

  // --- Phone -------------------------------------------------------------

  Widget _buildPhone(BuildContext context) {
    return Column(
      children: [
        Expanded(
          child: Stack(
            fit: StackFit.expand,
            children: [
              // The guide demonstrates the library on its own first screen.
              const _AmbientField(),
              ListView(
                padding: const EdgeInsets.fromLTRB(28, 36, 28, 16),
                children: [
                  Text('A FIELD GUIDE TO',
                      style: GuideTheme.mono(size: 11, letterSpacing: 2)),
                  const SizedBox(height: 8),
                  Text(
                    'Particles in real interfaces',
                    style: GuideTheme.serif(
                        size: 34, weight: FontWeight.w600, height: 1.05),
                  ),
                  const SizedBox(height: 8),
                  Text(
                    'Eleven specimens, from checkout flows to one bedtime story.',
                    style: GuideTheme.serif(
                      size: 14,
                      color: GuideTheme.mutedInk,
                      style: FontStyle.italic,
                      height: 1.4,
                    ),
                  ),
                  const SizedBox(height: 16),
                  for (final s in specimens) ...[
                    _IndexRow(
                      specimen: s,
                      onTap: () => Navigator.of(context).push(
                        MaterialPageRoute<void>(
                            builder: (_) => SceneScreen(specimen: s)),
                      ),
                    ),
                    const SizedBox(height: 7),
                  ],
                ],
              ),
            ],
          ),
        ),
        const SpecimenBand(left: 'Index', right: 'particles_flutter · collected 2026'),
      ],
    );
  }

  // --- Wide / web --------------------------------------------------------

  Widget _buildWide(BuildContext context) {
    final specimen = specimens[_selected];
    return Column(
      children: [
        _WideHeader(),
        Expanded(
          child: Stack(
            fit: StackFit.expand,
            children: [
              // Same ambient field as the phone index, behind the rail and
              // the stage.
              const _AmbientField(),
              Row(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  SizedBox(
                    width: 300,
                    child: DecoratedBox(
                      decoration: const BoxDecoration(
                        border: Border(
                            right: BorderSide(color: GuideTheme.border)),
                      ),
                      child: ListView(
                        padding: const EdgeInsets.fromLTRB(18, 20, 18, 20),
                        children: [
                          for (var i = 0; i < specimens.length; i++)
                            _IndexRow(
                              specimen: specimens[i],
                              selected: i == _selected,
                              compact: true,
                              onTap: () => setState(() => _selected = i),
                            ),
                        ],
                      ),
                    ),
                  ),
                  Expanded(
                    // KeyedSubtree so switching specimens fully rebuilds the
                    // particle engine state.
                    child: KeyedSubtree(
                      key: ValueKey(specimen.number),
                      child: specimen.builder(context),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ],
    );
  }
}

/// A sparse field of ink motes drifting across the paper behind the index.
///
/// Deliberately near-invisible: it should read as grain on the page rather
/// than as an effect, so the first screen of the guide is itself a specimen.
class _AmbientField extends StatelessWidget {
  const _AmbientField();

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        final size = Size(constraints.maxWidth, constraints.maxHeight);
        // The engine captures its particle list ONCE at init, so the field is
        // rebuilt from scratch whenever the available size changes.
        return KeyedSubtree(
          key: ValueKey(size),
          child: _AmbientFieldStage(size: size),
        );
      },
    );
  }
}

class _AmbientFieldStage extends StatefulWidget {
  const _AmbientFieldStage({required this.size});

  final Size size;

  @override
  State<_AmbientFieldStage> createState() => _AmbientFieldStageState();
}

class _AmbientFieldStageState extends State<_AmbientFieldStage> {
  static const _moteCount = 40;

  final _rng = Random();

  late final List<Particle> _motes;

  @override
  void initState() {
    super.initState();
    _motes = List.generate(_moteCount, _mote);
  }

  /// [color] at [alpha], flattened onto the paper ground.
  ///
  /// A particle's painted alpha comes from its lifetime opacity, which
  /// replaces the alpha on its color — so the low ink/rust alpha has to be
  /// baked into the color instead of carried on it.
  Color _onPaper(Color color, double alpha) =>
      Color.alphaBlend(color.withValues(alpha: alpha), GuideTheme.paper);

  Particle _mote(int index) {
    // One rust accent every ninth mote; the rest are ink.
    final isAccent = index % 9 == 4;
    return CircularParticle(
      radius: 1.0 + _rng.nextDouble() * 1.4,
      color: isAccent
          ? _onPaper(GuideTheme.rust, 0.32)
          : _onPaper(GuideTheme.ink, 0.14 + _rng.nextDouble() * 0.14),
      // Barely a drift: +/- 8 px per second on each axis.
      velocity: Offset(
        (_rng.nextDouble() - 0.5) * 16,
        (_rng.nextDouble() - 0.5) * 16,
      ),
      // Blur costs per particle, so only the three accents get a halo.
      glowSigma: isAccent ? 2.5 : 0,
      // Staggered lifetimes so the field never blinks in unison.
      lifetime: 6.0 + _rng.nextDouble() * 4.0,
      // start == end == 0 is the engine's triangle fade: in, peak at midlife,
      // back out.
      startOpacity: 0.0,
      endOpacity: 0.0,
    );
  }

  @override
  Widget build(BuildContext context) {
    return IgnorePointer(
      child: Particles(
        particles: _motes,
        width: widget.size.width,
        height: widget.size.height,
        boundType: BoundType.WrapAround,
      ),
    );
  }
}

class _WideHeader extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.fromLTRB(40, 22, 40, 16),
      decoration: const BoxDecoration(
        border: Border(bottom: BorderSide(color: GuideTheme.border)),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.baseline,
        textBaseline: TextBaseline.alphabetic,
        children: [
          Text('Particles in real interfaces',
              style: GuideTheme.serif(size: 24, weight: FontWeight.w600)),
          const SizedBox(width: 16),
          Text('A FIELD GUIDE · particles_flutter',
              style: GuideTheme.mono(size: 10, letterSpacing: 1.4)),
          const Spacer(),
          Text('pub.dev · GitHub',
              style: GuideTheme.mono(size: 11, color: GuideTheme.mutedInk)),
        ],
      ),
    );
  }
}

class _IndexRow extends StatelessWidget {
  const _IndexRow({
    required this.specimen,
    required this.onTap,
    this.selected = false,
    this.compact = false,
  });

  final Specimen specimen;
  final VoidCallback onTap;
  final bool selected;
  final bool compact;

  @override
  Widget build(BuildContext context) {
    final dot = GuideTheme.dotColors[specimen.number] ?? GuideTheme.ink;
    // Soft tint of the specimen's color for its swatch, pre-blended on card
    // paper so it stays warm rather than pastel-neon.
    final swatch = Color.alphaBlend(dot.withValues(alpha: 0.16), GuideTheme.card);
    return Padding(
      padding: EdgeInsets.only(bottom: compact ? 5 : 0),
      child: Material(
        color: selected || !compact ? GuideTheme.card : Colors.transparent,
        borderRadius: BorderRadius.circular(11),
        child: InkWell(
          borderRadius: BorderRadius.circular(11),
          onTap: onTap,
          child: Container(
            padding: EdgeInsets.symmetric(
                vertical: compact ? 7 : 9, horizontal: compact ? 9 : 11),
            decoration: BoxDecoration(
              border: Border.all(
                  color: selected || !compact
                      ? GuideTheme.border
                      : Colors.transparent),
              borderRadius: BorderRadius.circular(11),
            ),
            child: Row(
              children: [
                // The specimen's swatch: its color as a plate, its number as
                // the label — like a pigment chip in a field guide.
                Container(
                  width: compact ? 30 : 42,
                  height: compact ? 30 : 42,
                  decoration: BoxDecoration(
                    color: swatch,
                    borderRadius: BorderRadius.circular(compact ? 8 : 10),
                    border: Border.all(
                        color: dot.withValues(alpha: 0.45), width: 1),
                  ),
                  alignment: Alignment.center,
                  child: Text(
                    specimen.numberLabel,
                    style: GuideTheme.mono(
                      size: compact ? 9 : 11,
                      weight: FontWeight.w500,
                      color: Color.alphaBlend(
                          dot.withValues(alpha: 0.85), GuideTheme.ink),
                    ),
                  ),
                ),
                SizedBox(width: compact ? 10 : 13),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Text(
                        specimen.title,
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                        style: GuideTheme.serif(
                            size: compact ? 15 : 16.5,
                            weight:
                                selected ? FontWeight.w600 : FontWeight.w500),
                      ),
                      if (!compact && specimen.subtitle.isNotEmpty) ...[
                        const SizedBox(height: 1),
                        Text(
                          specimen.subtitle,
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                          style: GuideTheme.serif(
                            size: 12.5,
                            color: GuideTheme.mutedInk,
                            style: FontStyle.italic,
                          ),
                        ),
                      ],
                    ],
                  ),
                ),
                Icon(Icons.arrow_forward_ios,
                    size: compact ? 0 : 11, color: GuideTheme.faintInk),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

/// Full-screen scene for phone navigation, with a floating back button.
class SceneScreen extends StatelessWidget {
  const SceneScreen({super.key, required this.specimen});

  final Specimen specimen;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: GuideTheme.paper,
      body: Stack(
        children: [
          Positioned.fill(child: specimen.builder(context)),
          Positioned(
            top: MediaQuery.of(context).padding.top + 10,
            left: 14,
            child: Material(
              color: GuideTheme.paper.withValues(alpha: 0.9),
              shape: const CircleBorder(
                  side: BorderSide(color: GuideTheme.border)),
              child: InkWell(
                customBorder: const CircleBorder(),
                onTap: () => Navigator.of(context).pop(),
                child: const Padding(
                  padding: EdgeInsets.all(10),
                  child: Icon(Icons.arrow_back,
                      size: 18, color: GuideTheme.ink),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

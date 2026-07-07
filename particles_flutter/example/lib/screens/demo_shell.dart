import 'dart:ui' as ui;
import 'package:flutter/material.dart';
import 'package:particles_flutter/engine.dart';
import 'package:particles_flutter/interactions.dart';
import 'package:particles_flutter/physics.dart';
import 'package:url_launcher/url_launcher.dart';

import '../models/scene_config.dart';
import '../scenes/particle_factory.dart';
import '../scenes/pool_cycle_scene.dart';
import '../scenes/vortex_scene.dart';
import '../widgets/scene_badge.dart';
import '../widgets/scene_tab_bar.dart';
import '../widgets/config_panel.dart';
import '../widgets/code_panel.dart';

const double _kWideBreakpoint = 800;

enum _PanelTab { config, code }

class DemoShell extends StatefulWidget {
  final ui.Image snowflake;
  const DemoShell({required this.snowflake, super.key});

  @override
  State<DemoShell> createState() => _DemoShellState();
}

class _CornerBurst {
  final Offset position;
  final Key key;
  _CornerBurst({required this.position}) : key = UniqueKey();
}

class _DemoShellState extends State<DemoShell> {
  int _sceneIndex = 0;
  int _particleCount = 120;
  bool _showPanel = false;
  _PanelTab _panelTab = _PanelTab.config;
  late SceneConfig _scene;
  Key _particleKey = UniqueKey();
  final List<_CornerBurst> _cornerBursts = [];
  final BurstEmitterController _tapBurstController = BurstEmitterController();

  /// Last tap position for the burst scene. The tap emitter reads this via its
  /// position callback, so explosions fire wherever the user clicks.
  Offset _lastTapPosition = Offset.zero;

  /// Burst emitters are stateful (own a particle pool + auto-fire loop) and
  /// MUST persist across rebuilds. Rebuilt only when the scene key changes,
  /// never inside build().
  List<BurstEmitter> _burstEmitters = const [];

  @override
  void initState() {
    super.initState();
    _scene = kScenes[_sceneIndex];
    _refreshBurstEmitters();
  }

  void _refreshBurstEmitters() {
    // Old emitters are disposed by the outgoing Particles State (its key
    // changes on every scene switch / reset, forcing a fresh State).
    _tapBurstController.reset();
    _burstEmitters = buildBurstEmitters(
      _scene,
      _tapBurstController,
      () => _lastTapPosition,
    );
    // One welcome explosion at center; afterwards the tap burst fires on tap.
    if (_scene.id == SceneId.burstDemo) {
      WidgetsBinding.instance.addPostFrameCallback((_) {
        if (!mounted || _scene.id != SceneId.burstDemo) return;
        final size = MediaQuery.of(context).size;
        _lastTapPosition = Offset(size.width / 2, size.height / 2);
        _tapBurstController.trigger();
      });
    }
  }

  void _rebuild() => setState(() => _particleKey = UniqueKey());

  void _switchScene(int index) => setState(() {
        _sceneIndex = index;
        _scene = kScenes[index];
        _particleKey = UniqueKey();
        _refreshBurstEmitters();
      });

  void _resetScene() => setState(() {
        _scene = kScenes[_sceneIndex];
        _particleKey = UniqueKey();
        _refreshBurstEmitters();
      });

  void _updateSceneAndRebuild(SceneConfig updated) => setState(() {
        _scene = updated;
        _particleKey = UniqueKey();
        _refreshBurstEmitters();
      });

  void _fireCorner(Offset position) {
    final burst = _CornerBurst(position: position);
    setState(() => _cornerBursts.add(burst));
    // Remove burst after particles have had time to fall off screen
    Future.delayed(const Duration(seconds: 4), () {
      if (mounted) setState(() => _cornerBursts.remove(burst));
    });
  }

  Widget _buildParticleCanvas(Size size) {
    if (_scene.id == SceneId.poolCycle) {
      return AnimatedContainer(
        duration: const Duration(milliseconds: 600),
        color: _scene.bgColor,
        child: KeyedSubtree(
          key: _particleKey,
          child: PoolCycleScene(
            size: size,
            accentColor: _scene.accentColor,
          ),
        ),
      );
    }

    if (_scene.id == SceneId.vortex) {
      return AnimatedContainer(
        duration: const Duration(milliseconds: 600),
        color: _scene.bgColor,
        child: KeyedSubtree(
          key: _particleKey,
          child: VortexScene(
            size: size,
            accentColor: _scene.accentColor,
          ),
        ),
      );
    }

    final mainParticles = Particles(
      particles: buildParticles(_scene, _particleCount, widget.snowflake),
      height: size.height,
      width: size.width,
      connectDots: _scene.connectDots,
      boundType: _scene.boundType,
      particlePhysics: _scene.id == SceneId.starfield
          ? ParticlePhysics(
              gravityScale: 0,
              maxSpeed: _scene.speed * 1.5,
              attractors: [
                Attractor(
                  position: () => Offset(size.width / 2, size.height / 2),
                  strength: 0.6, // barely perceptible ambient drift
                  radius: size.longestSide,
                ),
              ],
            )
          : _scene.gravity
              ? ParticlePhysics(gravityScale: _scene.gravityScale)
              : null,
      particleEmitter: _scene.id == SceneId.fireworks
          ? Emitter(
              startPosition: Offset(size.width / 2, size.height / 2),
              startPositionRadius: size.width * 0.25,
              clusterSize: 15,
              delay: const Duration(milliseconds: 300),
              recycles: true,
            )
          : _scene.id == SceneId.confetti
              ? Emitter(
                  startPosition: Offset(size.width / 2, 0),
                  startPositionRadius: size.width * 0.5,
                  clusterSize: 8,
                  delay: const Duration(milliseconds: 80),
                  recycles: true,
                )
              : null,
      interaction: _scene.interaction
          ? ParticleInteraction(
              awayRadius: _scene.awayRadius,
              onTapAnimation: true,
              awayAnimationDuration: const Duration(milliseconds: 400),
              awayAnimationCurve: Curves.easeOut,
              enableHover: true,
              hoverRadius: _scene.awayRadius * 0.7,
            )
          : ParticleInteraction.none(),
      burstEmitters: _burstEmitters,
    );

    final inner = AnimatedContainer(
      duration: const Duration(milliseconds: 600),
      color: _scene.bgColor,
      child: Stack(
        children: [
          KeyedSubtree(key: _particleKey, child: mainParticles),
          // Corner burst overlays (confetti scene only)
          for (final burst in _cornerBursts)
            Positioned.fill(
              key: burst.key,
              child: IgnorePointer(
                child: Particles(
                  particles: buildCornerBurst(_scene, burst.position),
                  height: size.height,
                  width: size.width,
                  boundType: BoundType.None,
                  particlePhysics: const ParticlePhysics(gravityScale: 120),
                  particleEmitter: Emitter(
                    startPosition: burst.position,
                    startPositionRadius: 20,
                    clusterSize: 40,
                    delay: const Duration(milliseconds: 1),
                    recycles: false,
                  ),
                ),
              ),
            ),
          // Corner buttons (confetti scene only)
          if (_scene.id == SceneId.confetti) ...[
            _CornerButton(
                alignment: Alignment.topLeft,
                onTap: () => _fireCorner(const Offset(0, 0))),
            _CornerButton(
                alignment: Alignment.topRight,
                onTap: () => _fireCorner(Offset(size.width, 0))),
            _CornerButton(
                alignment: Alignment.bottomLeft,
                onTap: () => _fireCorner(Offset(0, size.height))),
            _CornerButton(
                alignment: Alignment.bottomRight,
                onTap: () => _fireCorner(Offset(size.width, size.height))),
          ],
          // Tap hint for burst scene
          if (_scene.id == SceneId.burstDemo)
            const Positioned(
              bottom: 32,
              left: 0,
              right: 0,
              child: IgnorePointer(
                child: Text(
                  'Tap anywhere to explode',
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    color: Color(0x99FFFFFF),
                    fontSize: 13,
                    letterSpacing: 1.2,
                  ),
                ),
              ),
            ),
        ],
      ),
    );

    if (_scene.id == SceneId.burstDemo) {
      // Listener (raw pointer) instead of GestureDetector — fires on every
      // pointer-down without gesture-arena disambiguation, so no taps are
      // dropped when the pointer moves slightly or recognizers compete.
      return Listener(
        behavior: HitTestBehavior.opaque,
        onPointerDown: (event) {
          _lastTapPosition = event.localPosition;
          _tapBurstController.trigger();
        },
        child: inner,
      );
    }
    return inner;
  }

  Widget _buildConfigPanel() => ConfigPanel(
        scene: _scene,
        particleCount: _particleCount,
        onCountChanged: (v) {
          _particleCount = v;
          _rebuild();
        },
        onSpeedChanged: (v) =>
            _updateSceneAndRebuild(_scene.copyWith(speed: v)),
        onSizeChanged: (v) =>
            _updateSceneAndRebuild(_scene.copyWith(sizeMultiplier: v)),
        onOpacityChanged: (v) =>
            _updateSceneAndRebuild(_scene.copyWith(opacity: v)),
        onGravityScaleChanged: (v) =>
            _updateSceneAndRebuild(_scene.copyWith(gravityScale: v)),
        onAwayRadiusChanged: (v) =>
            _updateSceneAndRebuild(_scene.copyWith(awayRadius: v)),
        onBoundTypeChanged: (v) =>
            _updateSceneAndRebuild(_scene.copyWith(boundType: v)),
        onConnectDotsChanged: (v) =>
            _updateSceneAndRebuild(_scene.copyWith(connectDots: v)),
        onGravityChanged: (v) =>
            _updateSceneAndRebuild(_scene.copyWith(gravity: v)),
        onInteractionChanged: (v) =>
            _updateSceneAndRebuild(_scene.copyWith(interaction: v)),
        onReset: _resetScene,
      );

  @override
  Widget build(BuildContext context) {
    final screenSize = MediaQuery.of(context).size;
    final isWide = screenSize.width >= _kWideBreakpoint;

    return Scaffold(
      backgroundColor: _scene.bgColor,
      body: isWide
          ? _WideLayout(
              scene: _scene,
              sceneIndex: _sceneIndex,
              showPanel: _showPanel,
              panelTab: _panelTab,
              screenSize: screenSize,
              particleCanvas: _buildParticleCanvas(screenSize),
              configPanel: _buildConfigPanel(),
              codePanel: CodePanel(scene: _scene),
              onTogglePanel: () => setState(() => _showPanel = !_showPanel),
              onSwitchTab: (t) => setState(() => _panelTab = t),
              onSwitchScene: _switchScene,
            )
          : _NarrowLayout(
              scene: _scene,
              sceneIndex: _sceneIndex,
              showPanel: _showPanel,
              panelTab: _panelTab,
              screenSize: screenSize,
              particleCanvas: _buildParticleCanvas(screenSize),
              configPanel: _buildConfigPanel(),
              codePanel: CodePanel(scene: _scene),
              onTogglePanel: () => setState(() => _showPanel = !_showPanel),
              onSwitchTab: (t) => setState(() => _panelTab = t),
              onSwitchScene: _switchScene,
            ),
    );
  }
}

// ── Shared panel tab bar ──

class _PanelTabBar extends StatelessWidget {
  final _PanelTab active;
  final Color accent;
  final ValueChanged<_PanelTab> onSwitch;

  const _PanelTabBar({
    required this.active,
    required this.accent,
    required this.onSwitch,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        _tab(_PanelTab.config, Icons.tune_rounded, 'Config'),
        const SizedBox(width: 6),
        _tab(_PanelTab.code, Icons.code_rounded, 'Code'),
      ],
    );
  }

  Widget _tab(_PanelTab tab, IconData icon, String label) {
    final selected = active == tab;
    return GestureDetector(
      onTap: () => onSwitch(tab),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 200),
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
        decoration: BoxDecoration(
          color: selected ? accent.withValues(alpha: 0.2) : Colors.transparent,
          borderRadius: BorderRadius.circular(8),
          border: Border.all(
            color: selected ? accent : Colors.white24,
            width: selected ? 1.5 : 1,
          ),
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(icon, size: 13, color: selected ? accent : Colors.white38),
            const SizedBox(width: 5),
            Text(
              label,
              style: TextStyle(
                fontSize: 11,
                color: selected ? accent : Colors.white38,
                fontWeight: selected ? FontWeight.w700 : FontWeight.normal,
              ),
            ),
          ],
        ),
      ),
    );
  }
}

// ── Wide layout ──

class _WideLayout extends StatelessWidget {
  final SceneConfig scene;
  final int sceneIndex;
  final bool showPanel;
  final _PanelTab panelTab;
  final Size screenSize;
  final Widget particleCanvas;
  final Widget configPanel;
  final Widget codePanel;
  final VoidCallback onTogglePanel;
  final ValueChanged<_PanelTab> onSwitchTab;
  final ValueChanged<int> onSwitchScene;

  const _WideLayout({
    required this.scene,
    required this.sceneIndex,
    required this.showPanel,
    required this.panelTab,
    required this.screenSize,
    required this.particleCanvas,
    required this.configPanel,
    required this.codePanel,
    required this.onTogglePanel,
    required this.onSwitchTab,
    required this.onSwitchScene,
  });

  @override
  Widget build(BuildContext context) {
    const panelW = 320.0;

    return Row(
      children: [
        // Left: Flutter NavigationRail
        Theme(
          data: Theme.of(context).copyWith(
            navigationRailTheme: NavigationRailThemeData(
              backgroundColor: const Color(0xFF0D1120),
              indicatorColor: scene.accentColor.withValues(alpha: 0.18),
              selectedIconTheme: IconThemeData(color: scene.accentColor),
              unselectedIconTheme: const IconThemeData(color: Colors.white38),
              selectedLabelTextStyle: TextStyle(
                color: scene.accentColor,
                fontSize: 10,
                fontWeight: FontWeight.w700,
              ),
              unselectedLabelTextStyle: const TextStyle(
                color: Colors.white38,
                fontSize: 10,
              ),
            ),
          ),
          child: Container(
            decoration: const BoxDecoration(
              color: Color(0xFF090909),
              border: Border(right: BorderSide(color: Colors.white10)),
            ),
            child: SingleChildScrollView(
              child: ConstrainedBox(
                constraints: BoxConstraints(minHeight: screenSize.height),
                child: IntrinsicHeight(
                  child: NavigationRail(
                    selectedIndex: sceneIndex,
                    onDestinationSelected: onSwitchScene,
                    labelType: NavigationRailLabelType.all,
                    leading: Padding(
                      padding: const EdgeInsets.only(bottom: 8),
                      child: Column(
                        children: [
                          const SizedBox(height: 8),
                          Text(
                            'particles',
                            style: TextStyle(
                              color: Colors.white.withValues(alpha: 0.5),
                              fontSize: 8,
                              fontWeight: FontWeight.w300,
                              letterSpacing: 2,
                            ),
                          ),
                          Text(
                            'flutter',
                            style: TextStyle(
                              color: scene.accentColor,
                              fontSize: 9,
                              fontWeight: FontWeight.w800,
                              letterSpacing: 2,
                            ),
                          ),
                          const SizedBox(height: 8),
                          Divider(
                              color: Colors.white.withValues(alpha: 0.08),
                              height: 1,
                              indent: 8,
                              endIndent: 8),
                        ],
                      ),
                    ),
                    trailing: Expanded(
                      child: Align(
                        alignment: Alignment.bottomCenter,
                        child: Padding(
                          padding: const EdgeInsets.only(bottom: 16),
                          child: Column(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              Divider(
                                  color: Colors.white.withValues(alpha: 0.08),
                                  height: 1,
                                  indent: 8,
                                  endIndent: 8),
                              const SizedBox(height: 12),
                              const Text(
                                'Raja Jain',
                                style: TextStyle(
                                  color: Colors.white54,
                                  fontSize: 10,
                                  fontWeight: FontWeight.w600,
                                  letterSpacing: 0.5,
                                ),
                              ),
                              const SizedBox(height: 8),
                              const _SocialButton(
                                asset: 'assets/github.png',
                                url:
                                    'https://github.com/rajajain08/particles_flutter',
                                label: 'GitHub',
                              ),
                              const SizedBox(height: 8),
                              const _SocialButton(
                                asset: 'assets/pub.png',
                                url:
                                    'https://pub.dev/packages/particles_flutter',
                                label: 'pub.dev',
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                    destinations: kScenes.map((s) {
                      return NavigationRailDestination(
                        icon: Tooltip(
                          message: s.tagline,
                          child: Text(s.emoji,
                              style: const TextStyle(fontSize: 20)),
                        ),
                        selectedIcon: Tooltip(
                          message: s.tagline,
                          child: Text(s.emoji,
                              style: const TextStyle(fontSize: 22)),
                        ),
                        label: Text(s.name),
                      );
                    }).toList(),
                  ),
                ),
              ),
            ),
          ),
        ),

        // Center: canvas
        Expanded(
          child: Stack(
            children: [
              Positioned.fill(child: particleCanvas),

              // Watermark — full splash branding at low opacity
              Positioned.fill(
                child: IgnorePointer(
                  child: Center(
                    child: Opacity(
                      opacity: 0.35,
                      child: Column(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          const Text(
                            'particles',
                            style: TextStyle(
                              color: Colors.white,
                              fontSize: 36,
                              fontWeight: FontWeight.w200,
                              letterSpacing: 8,
                            ),
                          ),
                          Text(
                            'flutter',
                            style: TextStyle(
                              color: scene.accentColor,
                              fontSize: 36,
                              fontWeight: FontWeight.w700,
                              letterSpacing: 8,
                            ),
                          ),
                          const SizedBox(height: 20),
                          Container(
                            padding: const EdgeInsets.symmetric(
                                horizontal: 14, vertical: 5),
                            decoration: BoxDecoration(
                              border: Border.all(
                                  color:
                                      scene.accentColor.withValues(alpha: 0.5)),
                              borderRadius: BorderRadius.circular(20),
                              color: scene.accentColor.withValues(alpha: 0.1),
                            ),
                            child: Text(
                              'pub.dev  ·  particles_flutter',
                              style: TextStyle(
                                color: scene.accentColor,
                                fontSize: 11,
                                letterSpacing: 1.2,
                                fontWeight: FontWeight.w500,
                              ),
                            ),
                          ),
                          const SizedBox(height: 12),
                          const Text(
                            'by Raja Jain',
                            style: TextStyle(
                              color: Colors.white38,
                              fontSize: 11,
                              letterSpacing: 1.5,
                              fontWeight: FontWeight.w300,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              ),

              // Top-left badge
              Positioned(
                top: 16,
                left: 16,
                child: SceneBadge(scene: scene),
              ),

              // Top-right panel toggle
              Positioned(
                top: 16,
                right: 16,
                child: _GlowButton(
                  accent: scene.accentColor,
                  active: showPanel,
                  onTap: onTogglePanel,
                  child: Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Icon(Icons.tune_rounded,
                          color: scene.accentColor, size: 16),
                      const SizedBox(width: 6),
                      Text(
                        showPanel ? 'Hide' : 'Controls',
                        style: TextStyle(
                          color: scene.accentColor,
                          fontSize: 12,
                          fontWeight: FontWeight.w600,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),

        // Right: sliding panel
        AnimatedContainer(
          duration: const Duration(milliseconds: 300),
          curve: Curves.easeInOut,
          width: showPanel ? panelW : 0,
          child: showPanel
              ? ClipRect(
                  child: BackdropFilter(
                    filter: ui.ImageFilter.blur(sigmaX: 24, sigmaY: 24),
                    child: Container(
                      width: panelW,
                      decoration: BoxDecoration(
                        color: Colors.black.withValues(alpha: 0.72),
                        border: Border(
                          left: BorderSide(
                            color: scene.accentColor.withValues(alpha: 0.18),
                          ),
                        ),
                      ),
                      child: Column(
                        children: [
                          // Panel header with tabs
                          Container(
                            padding: const EdgeInsets.fromLTRB(16, 14, 12, 12),
                            decoration: BoxDecoration(
                              border: Border(
                                bottom: BorderSide(
                                  color:
                                      scene.accentColor.withValues(alpha: 0.12),
                                ),
                              ),
                            ),
                            child: _PanelTabBar(
                              active: panelTab,
                              accent: scene.accentColor,
                              onSwitch: onSwitchTab,
                            ),
                          ),
                          Expanded(
                            child: SingleChildScrollView(
                              child: panelTab == _PanelTab.config
                                  ? configPanel
                                  : codePanel,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                )
              : const SizedBox.shrink(),
        ),
      ],
    );
  }
}

// ── Narrow layout ──

class _NarrowLayout extends StatelessWidget {
  final SceneConfig scene;
  final int sceneIndex;
  final bool showPanel;
  final _PanelTab panelTab;
  final Size screenSize;
  final Widget particleCanvas;
  final Widget configPanel;
  final Widget codePanel;
  final VoidCallback onTogglePanel;
  final ValueChanged<_PanelTab> onSwitchTab;
  final ValueChanged<int> onSwitchScene;

  const _NarrowLayout({
    required this.scene,
    required this.sceneIndex,
    required this.showPanel,
    required this.panelTab,
    required this.screenSize,
    required this.particleCanvas,
    required this.configPanel,
    required this.codePanel,
    required this.onTogglePanel,
    required this.onSwitchTab,
    required this.onSwitchScene,
  });

  @override
  Widget build(BuildContext context) {
    return SizedBox.expand(
      child: Stack(
        children: [
          Positioned.fill(child: particleCanvas),

          // Watermark — full splash branding at low opacity
          Positioned.fill(
            child: IgnorePointer(
              child: Center(
                child: Opacity(
                  opacity: 0.35,
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      const Text(
                        'particles',
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 36,
                          fontWeight: FontWeight.w200,
                          letterSpacing: 8,
                        ),
                      ),
                      Text(
                        'flutter',
                        style: TextStyle(
                          color: scene.accentColor,
                          fontSize: 36,
                          fontWeight: FontWeight.w700,
                          letterSpacing: 8,
                        ),
                      ),
                      const SizedBox(height: 20),
                      Container(
                        padding: const EdgeInsets.symmetric(
                            horizontal: 14, vertical: 5),
                        decoration: BoxDecoration(
                          border: Border.all(
                              color: scene.accentColor.withValues(alpha: 0.5)),
                          borderRadius: BorderRadius.circular(20),
                          color: scene.accentColor.withValues(alpha: 0.1),
                        ),
                        child: Text(
                          'pub.dev  ·  particles_flutter',
                          style: TextStyle(
                            color: scene.accentColor,
                            fontSize: 11,
                            letterSpacing: 1.2,
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                      ),
                      const SizedBox(height: 12),
                      const Text(
                        'by Raja Jain',
                        style: TextStyle(
                          color: Colors.white38,
                          fontSize: 11,
                          letterSpacing: 1.5,
                          fontWeight: FontWeight.w300,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ),

          // Top bar
          SafeArea(
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  SceneBadge(scene: scene),
                  _GlowButton(
                    accent: scene.accentColor,
                    active: showPanel,
                    onTap: onTogglePanel,
                    padding: const EdgeInsets.all(8),
                    child: Icon(Icons.tune_rounded,
                        color: scene.accentColor, size: 20),
                  ),
                ],
              ),
            ),
          ),

          // Bottom controls
          Positioned(
            bottom: 0,
            left: 0,
            right: 0,
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                // Panel slide-up
                AnimatedSize(
                  duration: const Duration(milliseconds: 300),
                  curve: Curves.easeInOut,
                  child: showPanel
                      ? ClipRect(
                          child: BackdropFilter(
                            filter: ui.ImageFilter.blur(sigmaX: 24, sigmaY: 24),
                            child: Container(
                              decoration: BoxDecoration(
                                color: Colors.black.withValues(alpha: 0.72),
                                border: Border(
                                  top: BorderSide(
                                    color: scene.accentColor
                                        .withValues(alpha: 0.25),
                                  ),
                                ),
                              ),
                              child: Column(
                                mainAxisSize: MainAxisSize.min,
                                children: [
                                  Padding(
                                    padding: const EdgeInsets.fromLTRB(
                                        16, 12, 16, 8),
                                    child: _PanelTabBar(
                                      active: panelTab,
                                      accent: scene.accentColor,
                                      onSwitch: onSwitchTab,
                                    ),
                                  ),
                                  ConstrainedBox(
                                    constraints: BoxConstraints(
                                      maxHeight: screenSize.height * 0.45,
                                    ),
                                    child: SingleChildScrollView(
                                      child: panelTab == _PanelTab.config
                                          ? configPanel
                                          : codePanel,
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ),
                        )
                      : const SizedBox.shrink(),
                ),

                // Scene tab bar
                SceneTabBar(
                  scenes: kScenes,
                  selectedIndex: sceneIndex,
                  onSelect: onSwitchScene,
                ),

                // Footer
                Container(
                  color: const Color(0xFF0D1120),
                  padding: const EdgeInsets.only(
                      bottom: 12, left: 16, right: 16, top: 8),
                  child: Column(
                    children: [
                      const Text(
                        'particles flutter  ·  by Raja Jain',
                        style: TextStyle(
                          color: Colors.white54,
                          fontSize: 11,
                          fontWeight: FontWeight.w500,
                          letterSpacing: 0.5,
                        ),
                      ),
                      const SizedBox(height: 8),
                      const Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          _SocialButton(
                            asset: 'assets/github.png',
                            url:
                                'https://github.com/rajajain08/particles_flutter',
                            size: 16,
                            label: 'GitHub',
                          ),
                          SizedBox(width: 20),
                          _SocialButton(
                            asset: 'assets/pub.png',
                            url: 'https://pub.dev/packages/particles_flutter',
                            size: 16,
                            label: 'pub.dev',
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _GlowButton extends StatefulWidget {
  final Color accent;
  final bool active;
  final VoidCallback onTap;
  final Widget child;
  final EdgeInsets padding;

  const _GlowButton({
    required this.accent,
    required this.active,
    required this.onTap,
    required this.child,
    this.padding = const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
  });

  @override
  State<_GlowButton> createState() => _GlowButtonState();
}

class _GlowButtonState extends State<_GlowButton>
    with SingleTickerProviderStateMixin {
  late AnimationController _ctrl;
  late Animation<double> _glow;

  @override
  void initState() {
    super.initState();
    _ctrl = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 1600),
    );
    _glow = Tween<double>(begin: 0.2, end: 0.55).animate(
      CurvedAnimation(parent: _ctrl, curve: Curves.easeInOut),
    );
    if (widget.active) _ctrl.repeat(reverse: true);
  }

  @override
  void didUpdateWidget(_GlowButton old) {
    super.didUpdateWidget(old);
    if (widget.active && !old.active) {
      _ctrl.repeat(reverse: true);
    } else if (!widget.active && old.active) {
      _ctrl.stop();
      _ctrl.value = 0;
    }
  }

  @override
  void dispose() {
    _ctrl.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: widget.onTap,
      child: AnimatedBuilder(
        animation: _glow,
        builder: (context, child) => AnimatedContainer(
          duration: const Duration(milliseconds: 200),
          padding: widget.padding,
          decoration: BoxDecoration(
            color: widget.active
                ? widget.accent.withValues(alpha: 0.18)
                : Colors.black.withValues(alpha: 0.55),
            borderRadius: BorderRadius.circular(12),
            border: Border.all(
              color:
                  widget.accent.withValues(alpha: widget.active ? 0.7 : 0.35),
            ),
            boxShadow: widget.active
                ? [
                    BoxShadow(
                      color: widget.accent.withValues(alpha: _glow.value),
                      blurRadius: 14,
                      spreadRadius: 0,
                    ),
                  ]
                : [],
          ),
          child: child,
        ),
        child: widget.child,
      ),
    );
  }
}

class _SocialButton extends StatelessWidget {
  final String asset;
  final String url;
  final double size;
  final String? label;

  const _SocialButton({
    required this.asset,
    required this.url,
    this.size = 20,
    this.label,
  });

  @override
  Widget build(BuildContext context) {
    final icon = Image.asset(
      asset,
      height: size,
      color: Colors.white.withValues(alpha: 0.5),
    );
    return GestureDetector(
      onTap: () => launchUrl(Uri.parse(url)),
      child: label != null
          ? Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                icon,
                const SizedBox(width: 6),
                Text(
                  label!,
                  style: const TextStyle(
                    color: Colors.white54,
                    fontSize: 10,
                    fontWeight: FontWeight.w500,
                  ),
                ),
              ],
            )
          : icon,
    );
  }
}

class _CornerButton extends StatelessWidget {
  final Alignment alignment;
  final VoidCallback onTap;

  const _CornerButton({required this.alignment, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return Align(
      alignment: alignment,
      child: Padding(
        padding: const EdgeInsets.all(12),
        child: GestureDetector(
          onTap: onTap,
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
            decoration: BoxDecoration(
              color: Colors.black.withValues(alpha: 0.55),
              borderRadius: BorderRadius.circular(20),
              border: Border.all(
                color: const Color(0xFFFFD700).withValues(alpha: 0.5),
              ),
            ),
            child: const Text(
              '🎉',
              style: TextStyle(fontSize: 18),
            ),
          ),
        ),
      ),
    );
  }
}

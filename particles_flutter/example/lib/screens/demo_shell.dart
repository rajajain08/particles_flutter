import 'dart:ui' as ui;
import 'package:flutter/material.dart';
import 'package:particles_flutter/engine.dart';
import 'package:particles_flutter/interactions.dart';
import 'package:particles_flutter/physics.dart';
import 'package:url_launcher/url_launcher.dart';

import '../models/scene_config.dart';
import '../scenes/particle_factory.dart';
import '../widgets/scene_badge.dart';
import '../widgets/scene_tab_bar.dart';
import '../widgets/config_panel.dart';

// Wide layout threshold
const double _kWideBreakpoint = 800;

class DemoShell extends StatefulWidget {
  final ui.Image snowflake;
  const DemoShell({required this.snowflake, super.key});

  @override
  State<DemoShell> createState() => _DemoShellState();
}

class _DemoShellState extends State<DemoShell> {
  int _sceneIndex = 0;
  int _particleCount = 120;
  bool _showConfig = false;
  late SceneConfig _scene;
  Key _particleKey = UniqueKey();

  @override
  void initState() {
    super.initState();
    _scene = kScenes[_sceneIndex];
  }

  void _rebuild() => setState(() => _particleKey = UniqueKey());

  void _switchScene(int index) => setState(() {
        _sceneIndex = index;
        _scene = kScenes[index];
        _particleKey = UniqueKey();
      });

  void _resetScene() => setState(() {
        _scene = kScenes[_sceneIndex];
        _particleKey = UniqueKey();
      });

  void _updateSceneAndRebuild(SceneConfig updated) => setState(() {
        _scene = updated;
        _particleKey = UniqueKey();
      });

  Widget _buildParticleCanvas(Size size) {
    return AnimatedContainer(
      duration: const Duration(milliseconds: 600),
      color: _scene.bgColor,
      child: KeyedSubtree(
        key: _particleKey,
        child: Particles(
          particles: buildParticles(_scene, _particleCount, widget.snowflake),
          height: size.height,
          width: size.width,
          connectDots: _scene.connectDots,
          boundType: _scene.boundType,
          particlePhysics: _scene.gravity
              ? ParticlePhysics(gravityScale: _scene.gravityScale)
              : null,
          particleEmitter: _scene.id == SceneId.fireworks
              ? Emitter(
                  startPosition: Offset(size.width / 2, size.height / 2),
                  clusterSize: 10,
                  delay: const Duration(milliseconds: 1),
                  recycles: false,
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
        ),
      ),
    );
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
              showConfig: _showConfig,
              screenSize: screenSize,
              particleCanvas: _buildParticleCanvas(screenSize),
              configPanel: _buildConfigPanel(),
              onToggleConfig: () =>
                  setState(() => _showConfig = !_showConfig),
              onSwitchScene: _switchScene,
            )
          : _NarrowLayout(
              scene: _scene,
              sceneIndex: _sceneIndex,
              showConfig: _showConfig,
              screenSize: screenSize,
              particleCanvas: _buildParticleCanvas(screenSize),
              configPanel: _buildConfigPanel(),
              onToggleConfig: () =>
                  setState(() => _showConfig = !_showConfig),
              onSwitchScene: _switchScene,
            ),
    );
  }
}

// ── Wide layout (>800px): left scene rail + full-screen canvas + right config sidebar ──

class _WideLayout extends StatelessWidget {
  final SceneConfig scene;
  final int sceneIndex;
  final bool showConfig;
  final Size screenSize;
  final Widget particleCanvas;
  final Widget configPanel;
  final VoidCallback onToggleConfig;
  final ValueChanged<int> onSwitchScene;

  const _WideLayout({
    required this.scene,
    required this.sceneIndex,
    required this.showConfig,
    required this.screenSize,
    required this.particleCanvas,
    required this.configPanel,
    required this.onToggleConfig,
    required this.onSwitchScene,
  });

  @override
  Widget build(BuildContext context) {
    const sidebarW = 64.0;
    const configW = 300.0;

    return Row(
      children: [
        // Left: scene rail
        Container(
          width: sidebarW,
          color: Colors.black87,
          child: Column(
            children: [
              const SizedBox(height: 16),
              // Logo
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 8),
                child: Text(
                  'PF',
                  style: TextStyle(
                    color: scene.accentColor,
                    fontWeight: FontWeight.w900,
                    fontSize: 16,
                    letterSpacing: 1,
                  ),
                ),
              ),
              const Divider(color: Colors.white12, height: 16),
              // Scene buttons (vertical)
              Expanded(
                child: ListView.builder(
                  itemCount: kScenes.length,
                  itemBuilder: (_, i) {
                    final s = kScenes[i];
                    final selected = i == sceneIndex;
                    return GestureDetector(
                      onTap: () => onSwitchScene(i),
                      child: Tooltip(
                        message: s.name,
                        preferBelow: false,
                        child: AnimatedContainer(
                          duration: const Duration(milliseconds: 200),
                          margin: const EdgeInsets.symmetric(
                              horizontal: 8, vertical: 4),
                          padding: const EdgeInsets.symmetric(vertical: 10),
                          decoration: BoxDecoration(
                            color: selected
                                ? s.accentColor.withValues(alpha: 0.2)
                                : Colors.transparent,
                            borderRadius: BorderRadius.circular(10),
                            border: Border.all(
                              color: selected ? s.accentColor : Colors.transparent,
                              width: 1,
                            ),
                          ),
                          child: Column(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              Text(s.emoji,
                                  style: const TextStyle(fontSize: 20)),
                              const SizedBox(height: 2),
                              Text(
                                s.name,
                                style: TextStyle(
                                  color: selected
                                      ? s.accentColor
                                      : Colors.white38,
                                  fontSize: 8,
                                ),
                                overflow: TextOverflow.ellipsis,
                              ),
                            ],
                          ),
                        ),
                      ),
                    );
                  },
                ),
              ),
              // Social links
              Padding(
                padding: const EdgeInsets.only(bottom: 16),
                child: Column(
                  children: [
                    GestureDetector(
                      onTap: () => launchUrl(Uri.parse(
                          'https://github.com/rajajain08/particles_flutter')),
                      child: Image.asset('assets/github.png',
                          height: 20, color: Colors.white38),
                    ),
                    const SizedBox(height: 10),
                    GestureDetector(
                      onTap: () => launchUrl(Uri.parse(
                          'https://pub.dev/packages/particles_flutter')),
                      child: Image.asset('assets/pub.png',
                          height: 20, color: Colors.white38),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),

        // Center: full canvas
        Expanded(
          child: Stack(
            children: [
              Positioned.fill(child: particleCanvas),
              // Top-left badge
              Positioned(
                top: 16,
                left: 16,
                child: SceneBadge(scene: scene),
              ),
              // Top-right config toggle
              Positioned(
                top: 16,
                right: 16,
                child: GestureDetector(
                  onTap: onToggleConfig,
                  child: AnimatedContainer(
                    duration: const Duration(milliseconds: 200),
                    padding: const EdgeInsets.all(10),
                    decoration: BoxDecoration(
                      color: showConfig
                          ? scene.accentColor.withValues(alpha: 0.3)
                          : Colors.black54,
                      borderRadius: BorderRadius.circular(12),
                      border: Border.all(
                        color: scene.accentColor.withValues(alpha: 0.5),
                      ),
                    ),
                    child: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Icon(Icons.tune_rounded,
                            color: scene.accentColor, size: 18),
                        const SizedBox(width: 6),
                        Text(
                          showConfig ? 'Hide Config' : 'Config',
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
              ),
            ],
          ),
        ),

        // Right: config sidebar (animated width)
        AnimatedContainer(
          duration: const Duration(milliseconds: 300),
          curve: Curves.easeInOut,
          width: showConfig ? configW : 0,
          child: showConfig
              ? Container(
                  width: configW,
                  color: Colors.black87,
                  child: Column(
                    children: [
                      // Sidebar header
                      Container(
                        padding: const EdgeInsets.fromLTRB(16, 16, 12, 12),
                        decoration: const BoxDecoration(
                          border: Border(
                              bottom: BorderSide(color: Colors.white12)),
                        ),
                        child: Row(
                          children: [
                            Icon(Icons.tune_rounded,
                                color: scene.accentColor, size: 16),
                            const SizedBox(width: 8),
                            Text(
                              'Configuration',
                              style: TextStyle(
                                color: scene.accentColor,
                                fontWeight: FontWeight.w700,
                                fontSize: 13,
                              ),
                            ),
                          ],
                        ),
                      ),
                      // Scrollable config content
                      Expanded(
                        child: SingleChildScrollView(child: configPanel),
                      ),
                    ],
                  ),
                )
              : const SizedBox.shrink(),
        ),
      ],
    );
  }
}

// ── Narrow layout (mobile/tablet): bottom bar + bottom sheet config ──

class _NarrowLayout extends StatelessWidget {
  final SceneConfig scene;
  final int sceneIndex;
  final bool showConfig;
  final Size screenSize;
  final Widget particleCanvas;
  final Widget configPanel;
  final VoidCallback onToggleConfig;
  final ValueChanged<int> onSwitchScene;

  const _NarrowLayout({
    required this.scene,
    required this.sceneIndex,
    required this.showConfig,
    required this.screenSize,
    required this.particleCanvas,
    required this.configPanel,
    required this.onToggleConfig,
    required this.onSwitchScene,
  });

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        Positioned.fill(child: particleCanvas),

        // Top bar
        SafeArea(
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                SceneBadge(scene: scene),
                GestureDetector(
                  onTap: onToggleConfig,
                  child: AnimatedContainer(
                    duration: const Duration(milliseconds: 200),
                    padding: const EdgeInsets.all(8),
                    decoration: BoxDecoration(
                      color: showConfig
                          ? scene.accentColor.withValues(alpha: 0.3)
                          : Colors.black54,
                      borderRadius: BorderRadius.circular(12),
                      border: Border.all(
                        color: scene.accentColor.withValues(alpha: 0.5),
                      ),
                    ),
                    child: Icon(Icons.tune_rounded,
                        color: scene.accentColor, size: 20),
                  ),
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
              // Config panel slide-up
              AnimatedSize(
                duration: const Duration(milliseconds: 300),
                curve: Curves.easeInOut,
                child: showConfig
                    ? ConstrainedBox(
                        constraints: BoxConstraints(
                          maxHeight: screenSize.height * 0.55,
                        ),
                        child: SingleChildScrollView(child: configPanel),
                      )
                    : const SizedBox.shrink(),
              ),

              // Scene tabs
              SceneTabBar(
                scenes: kScenes,
                selectedIndex: sceneIndex,
                onSelect: onSwitchScene,
              ),

              // Footer
              Container(
                color: Colors.black87,
                padding: const EdgeInsets.only(
                    bottom: 12, left: 16, right: 16, top: 4),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    const Text(
                      'particles flutter',
                      style: TextStyle(
                        color: Colors.white38,
                        fontSize: 11,
                        letterSpacing: 1,
                      ),
                    ),
                    const SizedBox(width: 16),
                    GestureDetector(
                      onTap: () => launchUrl(Uri.parse(
                          'https://github.com/rajajain08/particles_flutter')),
                      child: Image.asset('assets/github.png',
                          height: 18, color: Colors.white54),
                    ),
                    const SizedBox(width: 12),
                    GestureDetector(
                      onTap: () => launchUrl(Uri.parse(
                          'https://pub.dev/packages/particles_flutter')),
                      child: Image.asset('assets/pub.png',
                          height: 18, color: Colors.white54),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }
}

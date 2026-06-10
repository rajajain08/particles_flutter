import 'dart:math';
import 'dart:ui' as ui;
import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:particles_flutter/shapes.dart';
import 'package:particles_flutter/engine.dart';
import 'package:particles_flutter/interactions.dart';
import 'package:particles_flutter/physics.dart';
import 'package:url_launcher/url_launcher.dart';

void main() => runApp(const MyApp());

final _rng = Random();
double _sign() => _rng.nextBool() ? 1 : -1;

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'particles flutter',
      debugShowCheckedModeBanner: false,
      theme: ThemeData.dark().copyWith(
        scaffoldBackgroundColor: Colors.black,
        colorScheme: const ColorScheme.dark(primary: Color(0xFF7C4DFF)),
      ),
      home: const SplashScreen(),
    );
  }
}

// ── Splash ──────────────────────────────────────────────────────────────────

class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});

  @override
  _SplashScreenState createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    final img = await _loadImage('assets/snowflake.png');
    if (!mounted) return;
    Navigator.pushReplacement(
      context,
      MaterialPageRoute(builder: (_) => DemoShell(snowflake: img)),
    );
  }

  Future<ui.Image> _loadImage(String path) async {
    final data = await rootBundle.load(path);
    final completer = Completer<ui.Image>();
    ui.decodeImageFromList(Uint8List.view(data.buffer), completer.complete);
    return completer.future;
  }

  @override
  Widget build(BuildContext context) => const Scaffold(
        body: Center(child: CircularProgressIndicator()),
      );
}

// ── Scene definition ─────────────────────────────────────────────────────────

enum SceneId { starfield, web, snow, nebula, fireworks }

class SceneConfig {
  final SceneId id;
  final String name;
  final String emoji;
  final Color bgColor;
  final Color accentColor;
  final BoundType boundType;
  final bool connectDots;
  final bool gravity;
  final bool interaction;
  final double speed;

  const SceneConfig({
    required this.id,
    required this.name,
    required this.emoji,
    required this.bgColor,
    required this.accentColor,
    required this.boundType,
    required this.connectDots,
    required this.gravity,
    required this.interaction,
    required this.speed,
  });

  SceneConfig copyWith({
    bool? connectDots,
    bool? gravity,
    bool? interaction,
    double? speed,
  }) =>
      SceneConfig(
        id: id,
        name: name,
        emoji: emoji,
        bgColor: bgColor,
        accentColor: accentColor,
        boundType: boundType,
        connectDots: connectDots ?? this.connectDots,
        gravity: gravity ?? this.gravity,
        interaction: interaction ?? this.interaction,
        speed: speed ?? this.speed,
      );
}

const _scenes = [
  SceneConfig(
    id: SceneId.starfield,
    name: 'Starfield',
    emoji: '✨',
    bgColor: Color(0xFF050A1A),
    accentColor: Color(0xFF7C4DFF),
    boundType: BoundType.WrapAround,
    connectDots: false,
    gravity: false,
    interaction: true,
    speed: 30,
  ),
  SceneConfig(
    id: SceneId.web,
    name: 'Web',
    emoji: '🕸️',
    bgColor: Color(0xFF0A0A0A),
    accentColor: Color(0xFF00E5FF),
    boundType: BoundType.Bounce,
    connectDots: true,
    gravity: false,
    interaction: true,
    speed: 40,
  ),
  SceneConfig(
    id: SceneId.snow,
    name: 'Snow',
    emoji: '❄️',
    bgColor: Color(0xFF0D1B2A),
    accentColor: Color(0xFFB0C4DE),
    boundType: BoundType.WrapAround,
    connectDots: false,
    gravity: true,
    interaction: false,
    speed: 15,
  ),
  SceneConfig(
    id: SceneId.nebula,
    name: 'Nebula',
    emoji: '🌌',
    bgColor: Color(0xFF0B0020),
    accentColor: Color(0xFFFF4081),
    boundType: BoundType.WrapAround,
    connectDots: false,
    gravity: false,
    interaction: true,
    speed: 20,
  ),
  SceneConfig(
    id: SceneId.fireworks,
    name: 'Fireworks',
    emoji: '🎆',
    bgColor: Color(0xFF0A0000),
    accentColor: Color(0xFFFF6D00),
    boundType: BoundType.None,
    connectDots: false,
    gravity: true,
    interaction: false,
    speed: 120,
  ),
];

// ── Particle factories ────────────────────────────────────────────────────────

List<Particle> _buildParticles(
    SceneConfig scene, int count, ui.Image snowflake) {
  final s = scene.speed;
  switch (scene.id) {
    case SceneId.starfield:
      return List.generate(count, (_) {
        final size = _rng.nextDouble() * 3 + 0.5;
        final brightness = _rng.nextDouble() * 0.5 + 0.4;
        return CircularParticle(
          radius: size,
          color: Color.lerp(Colors.white, scene.accentColor, _rng.nextDouble())!
              .withValues(alpha: brightness),
          velocity: Offset(
              _rng.nextDouble() * s * 0.6 * _sign(), _rng.nextDouble() * s * 0.6 * _sign()),
        );
      });

    case SceneId.web:
      return List.generate(count, (_) {
        return CircularParticle(
          radius: _rng.nextDouble() * 3 + 1.5,
          color: scene.accentColor.withValues(alpha: _rng.nextDouble() * 0.4 + 0.5),
          velocity: Offset(
              _rng.nextDouble() * s * _sign(), _rng.nextDouble() * s * _sign()),
        );
      });

    case SceneId.snow:
      return List.generate(count, (_) {
        final size = _rng.nextDouble() * 6 + 2;
        return CircularParticle(
          radius: size,
          color: Colors.white.withValues(alpha: _rng.nextDouble() * 0.5 + 0.4),
          velocity: Offset(
              _rng.nextDouble() * 20 * _sign(), _rng.nextDouble() * s * 0.3 + 5),
        );
      });

    case SceneId.nebula:
      final colors = [
        const Color(0xFFFF4081),
        const Color(0xFF7C4DFF),
        const Color(0xFF00E5FF),
        const Color(0xFFFFD740),
        const Color(0xFF69F0AE),
      ];
      return List.generate(count, (_) {
        final w = _rng.nextDouble() * 30 + 8;
        final h = _rng.nextDouble() * 20 + 5;
        final color = colors[_rng.nextInt(colors.length)];
        if (_rng.nextBool()) {
          return OvoidalParticle(
            width: w,
            height: h,
            color: color.withValues(alpha: _rng.nextDouble() * 0.4 + 0.2),
            velocity: Offset(
                _rng.nextDouble() * s * _sign(), _rng.nextDouble() * s * _sign()),
            rotationSpeed: _rng.nextDouble() * 0.5 * _sign(),
          );
        } else {
          return CircularParticle(
            radius: _rng.nextDouble() * 12 + 2,
            color: color.withValues(alpha: _rng.nextDouble() * 0.35 + 0.15),
            velocity: Offset(
                _rng.nextDouble() * s * _sign(), _rng.nextDouble() * s * _sign()),
          );
        }
      });

    case SceneId.fireworks:
      final colors = [
        const Color(0xFFFF6D00),
        const Color(0xFFFFD740),
        const Color(0xFFFF4081),
        const Color(0xFF69F0AE),
        const Color(0xFF00E5FF),
        const Color(0xFFEA80FC),
      ];
      final particles = <Particle>[];
      for (int i = 0; i < count; i++) {
        final color = colors[_rng.nextInt(colors.length)];
        final shape = _rng.nextInt(3);
        final speed = _rng.nextDouble() * s + 20;
        final angle = _rng.nextDouble() * 2 * pi;
        final vel = Offset(cos(angle) * speed, sin(angle) * speed);
        if (shape == 0) {
          particles.add(CircularParticle(
            radius: _rng.nextDouble() * 4 + 1,
            color: color.withValues(alpha: 0.9),
            velocity: vel,
          ));
        } else if (shape == 1) {
          final side = _rng.nextDouble() * 6 + 2;
          particles.add(RectangularParticle(
            width: side,
            height: side,
            color: color.withValues(alpha: 0.9),
            velocity: vel,
            rotationSpeed: _rng.nextDouble() * 4 * _sign(),
          ));
        } else {
          particles.add(TriangularParticle(
            width: _rng.nextDouble() * 8 + 3,
            height: _rng.nextDouble() * 8 + 3,
            color: color.withValues(alpha: 0.9),
            velocity: vel,
            rotationSpeed: _rng.nextDouble() * 4 * _sign(),
          ));
        }
      }
      return particles;
  }
}

// ── Demo shell ────────────────────────────────────────────────────────────────

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
    _scene = _scenes[_sceneIndex];
  }

  void _rebuildParticles() {
    setState(() => _particleKey = UniqueKey());
  }

  void _switchScene(int index) {
    setState(() {
      _sceneIndex = index;
      _scene = _scenes[index];
      _particleKey = UniqueKey();
    });
  }

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;

    return Scaffold(
      backgroundColor: _scene.bgColor,
      body: Stack(
        children: [
          // Particle canvas
          AnimatedContainer(
            duration: const Duration(milliseconds: 600),
            color: _scene.bgColor,
            child: KeyedSubtree(
              key: _particleKey,
              child: Particles(
                particles: _buildParticles(_scene, _particleCount, widget.snowflake),
                height: size.height,
                width: size.width,
                connectDots: _scene.connectDots,
                boundType: _scene.boundType,
                particlePhysics:
                    _scene.gravity ? const ParticlePhysics(gravityScale: 30) : null,
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
                        awayRadius: 120,
                        onTapAnimation: true,
                        awayAnimationDuration:
                            const Duration(milliseconds: 400),
                        awayAnimationCurve: Curves.easeOut,
                        enableHover: true,
                        hoverRadius: 80,
                      )
                    : ParticleInteraction.none(),
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
                  // Scene name badge
                  AnimatedSwitcher(
                    duration: const Duration(milliseconds: 300),
                    child: Container(
                      key: ValueKey(_scene.name),
                      padding: const EdgeInsets.symmetric(
                          horizontal: 14, vertical: 7),
                      decoration: BoxDecoration(
                        color: Colors.black54,
                        borderRadius: BorderRadius.circular(20),
                        border: Border.all(
                            color: _scene.accentColor.withValues(alpha: 0.6),
                            width: 1),
                      ),
                      child: Text(
                        '${_scene.emoji}  ${_scene.name}',
                        style: TextStyle(
                          color: _scene.accentColor,
                          fontWeight: FontWeight.w700,
                          fontSize: 14,
                          letterSpacing: 0.5,
                        ),
                      ),
                    ),
                  ),
                  // Config toggle
                  GestureDetector(
                    onTap: () => setState(() => _showConfig = !_showConfig),
                    child: Container(
                      padding: const EdgeInsets.all(8),
                      decoration: BoxDecoration(
                        color: _showConfig
                            ? _scene.accentColor.withValues(alpha: 0.3)
                            : Colors.black54,
                        borderRadius: BorderRadius.circular(12),
                        border: Border.all(
                            color: _scene.accentColor.withValues(alpha: 0.5)),
                      ),
                      child: Icon(Icons.tune_rounded,
                          color: _scene.accentColor, size: 20),
                    ),
                  ),
                ],
              ),
            ),
          ),

          // Scene picker (bottom)
          Positioned(
            bottom: 0,
            left: 0,
            right: 0,
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                // Config panel
                AnimatedSize(
                  duration: const Duration(milliseconds: 300),
                  curve: Curves.easeInOut,
                  child: _showConfig
                      ? _ConfigPanel(
                          scene: _scene,
                          particleCount: _particleCount,
                          accentColor: _scene.accentColor,
                          onCountChanged: (v) {
                            setState(() => _particleCount = v);
                            _rebuildParticles();
                          },
                          onConnectDotsChanged: (v) {
                            setState(() {
                              _scene = _scene.copyWith(connectDots: v);
                            });
                            _rebuildParticles();
                          },
                          onGravityChanged: (v) {
                            setState(() {
                              _scene = _scene.copyWith(gravity: v);
                            });
                            _rebuildParticles();
                          },
                          onInteractionChanged: (v) {
                            setState(() {
                              _scene = _scene.copyWith(interaction: v);
                            });
                            _rebuildParticles();
                          },
                        )
                      : const SizedBox.shrink(),
                ),
                // Scene tabs
                Container(
                  color: Colors.black87,
                  padding: const EdgeInsets.symmetric(vertical: 10),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: List.generate(_scenes.length, (i) {
                      final s = _scenes[i];
                      final selected = i == _sceneIndex;
                      return GestureDetector(
                        onTap: () => _switchScene(i),
                        child: AnimatedContainer(
                          duration: const Duration(milliseconds: 250),
                          padding: const EdgeInsets.symmetric(
                              horizontal: 14, vertical: 8),
                          decoration: BoxDecoration(
                            color: selected
                                ? s.accentColor.withValues(alpha: 0.2)
                                : Colors.transparent,
                            borderRadius: BorderRadius.circular(14),
                            border: Border.all(
                              color: selected
                                  ? s.accentColor
                                  : Colors.white24,
                              width: selected ? 1.5 : 1,
                            ),
                          ),
                          child: Column(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              Text(s.emoji,
                                  style: const TextStyle(fontSize: 18)),
                              const SizedBox(height: 3),
                              Text(
                                s.name,
                                style: TextStyle(
                                  color: selected ? s.accentColor : Colors.white54,
                                  fontSize: 10,
                                  fontWeight: selected
                                      ? FontWeight.w700
                                      : FontWeight.normal,
                                ),
                              ),
                            ],
                          ),
                        ),
                      );
                    }),
                  ),
                ),
                // Social links
                Container(
                  color: Colors.black87,
                  padding:
                      const EdgeInsets.only(bottom: 12, left: 16, right: 16),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const Text('particles flutter',
                          style: TextStyle(
                              color: Colors.white38,
                              fontSize: 11,
                              letterSpacing: 1)),
                      const SizedBox(width: 16),
                      GestureDetector(
                        onTap: () => launchUrl(Uri.parse(
                            'https://github.com/rajajain08/particles_flutter')),
                        child: Image.asset('assets/github.png',
                            height: 18,
                            color: Colors.white54),
                      ),
                      const SizedBox(width: 12),
                      GestureDetector(
                        onTap: () => launchUrl(Uri.parse(
                            'https://pub.dev/packages/particles_flutter')),
                        child: Image.asset('assets/pub.png',
                            height: 18,
                            color: Colors.white54),
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

// ── Config panel ──────────────────────────────────────────────────────────────

class _ConfigPanel extends StatelessWidget {
  final SceneConfig scene;
  final int particleCount;
  final Color accentColor;
  final ValueChanged<int> onCountChanged;
  final ValueChanged<bool> onConnectDotsChanged;
  final ValueChanged<bool> onGravityChanged;
  final ValueChanged<bool> onInteractionChanged;

  const _ConfigPanel({
    required this.scene,
    required this.particleCount,
    required this.accentColor,
    required this.onCountChanged,
    required this.onConnectDotsChanged,
    required this.onGravityChanged,
    required this.onInteractionChanged,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.black87,
      padding: const EdgeInsets.fromLTRB(20, 16, 20, 8),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Count slider
          Row(
            children: [
              Icon(Icons.grain, color: accentColor, size: 16),
              const SizedBox(width: 8),
              Text('Particles: $particleCount',
                  style: const TextStyle(color: Colors.white70, fontSize: 13)),
              const Spacer(),
              SizedBox(
                width: 200,
                child: SliderTheme(
                  data: SliderThemeData(
                    activeTrackColor: accentColor,
                    thumbColor: accentColor,
                    inactiveTrackColor: accentColor.withValues(alpha: 0.2),
                    overlayColor: accentColor.withValues(alpha: 0.1),
                    trackHeight: 2,
                    thumbShape:
                        const RoundSliderThumbShape(enabledThumbRadius: 7),
                  ),
                  child: Slider(
                    value: particleCount.toDouble(),
                    min: 20,
                    max: 400,
                    divisions: 38,
                    onChanged: (v) => onCountChanged(v.round()),
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: 4),
          // Toggles row
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              _Toggle(
                label: 'Lines',
                icon: Icons.share,
                value: scene.connectDots,
                color: accentColor,
                onChanged: onConnectDotsChanged,
              ),
              _Toggle(
                label: 'Gravity',
                icon: Icons.arrow_downward,
                value: scene.gravity,
                color: accentColor,
                onChanged: onGravityChanged,
              ),
              _Toggle(
                label: 'Interact',
                icon: Icons.touch_app,
                value: scene.interaction,
                color: accentColor,
                onChanged: onInteractionChanged,
              ),
            ],
          ),
        ],
      ),
    );
  }
}

class _Toggle extends StatelessWidget {
  final String label;
  final IconData icon;
  final bool value;
  final Color color;
  final ValueChanged<bool> onChanged;

  const _Toggle({
    required this.label,
    required this.icon,
    required this.value,
    required this.color,
    required this.onChanged,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => onChanged(!value),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 200),
        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
        decoration: BoxDecoration(
          color: value ? color.withValues(alpha: 0.2) : Colors.transparent,
          borderRadius: BorderRadius.circular(10),
          border: Border.all(
              color: value ? color : Colors.white24,
              width: value ? 1.5 : 1),
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(icon, color: value ? color : Colors.white38, size: 14),
            const SizedBox(width: 6),
            Text(label,
                style: TextStyle(
                    color: value ? color : Colors.white38,
                    fontSize: 12,
                    fontWeight:
                        value ? FontWeight.w700 : FontWeight.normal)),
          ],
        ),
      ),
    );
  }
}

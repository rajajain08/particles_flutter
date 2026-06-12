import 'dart:ui';
import 'package:flutter/material.dart';
import '../models/scene_config.dart';

class SceneTabBar extends StatelessWidget {
  final List<SceneConfig> scenes;
  final int selectedIndex;
  final ValueChanged<int> onSelect;

  const SceneTabBar({
    required this.scenes,
    required this.selectedIndex,
    required this.onSelect,
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return ClipRect(
      child: BackdropFilter(
        filter: ImageFilter.blur(sigmaX: 20, sigmaY: 20),
        child: Container(
          decoration: BoxDecoration(
            color: Colors.black.withValues(alpha: 0.55),
            border: Border(
              top: BorderSide(color: Colors.white.withValues(alpha: 0.07)),
            ),
          ),
          padding: const EdgeInsets.symmetric(vertical: 10),
          child: SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            padding: const EdgeInsets.symmetric(horizontal: 8),
            child: Row(
              children: List.generate(scenes.length, (i) {
                final s = scenes[i];
                final selected = i == selectedIndex;
                return Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 4),
                  child: _SceneTab(
                    scene: s,
                    selected: selected,
                    onTap: () => onSelect(i),
                  ),
                );
              }),
            ),
          ),
        ),
      ),
    );
  }
}

class _SceneTab extends StatefulWidget {
  final SceneConfig scene;
  final bool selected;
  final VoidCallback onTap;

  const _SceneTab({
    required this.scene,
    required this.selected,
    required this.onTap,
  });

  @override
  State<_SceneTab> createState() => _SceneTabState();
}

class _SceneTabState extends State<_SceneTab>
    with SingleTickerProviderStateMixin {
  late AnimationController _glowController;
  late Animation<double> _glowAnim;

  @override
  void initState() {
    super.initState();
    _glowController = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 1400),
    );
    _glowAnim = Tween<double>(begin: 0.25, end: 0.65).animate(
      CurvedAnimation(parent: _glowController, curve: Curves.easeInOut),
    );
    if (widget.selected) _glowController.repeat(reverse: true);
  }

  @override
  void didUpdateWidget(_SceneTab old) {
    super.didUpdateWidget(old);
    if (widget.selected && !old.selected) {
      _glowController.repeat(reverse: true);
    } else if (!widget.selected && old.selected) {
      _glowController.stop();
      _glowController.value = 0;
    }
  }

  @override
  void dispose() {
    _glowController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final accent = widget.scene.accentColor;
    final selected = widget.selected;

    return GestureDetector(
      onTap: widget.onTap,
      child: AnimatedBuilder(
        animation: _glowAnim,
        builder: (context, child) {
          return AnimatedContainer(
            duration: const Duration(milliseconds: 250),
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
            decoration: BoxDecoration(
              color: selected
                  ? accent.withValues(alpha: 0.15)
                  : Colors.white.withValues(alpha: 0.04),
              borderRadius: BorderRadius.circular(14),
              border: Border.all(
                color: selected
                    ? accent.withValues(alpha: 0.7)
                    : Colors.white.withValues(alpha: 0.12),
                width: selected ? 1.5 : 1,
              ),
              boxShadow: selected
                  ? [
                      BoxShadow(
                        color: accent.withValues(alpha: _glowAnim.value),
                        blurRadius: 12,
                        spreadRadius: 0,
                      ),
                    ]
                  : [],
            ),
            child: child,
          );
        },
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(widget.scene.emoji,
                style: TextStyle(fontSize: selected ? 20 : 18)),
            const SizedBox(height: 3),
            Text(
              widget.scene.name,
              style: TextStyle(
                color: selected
                    ? widget.scene.accentColor
                    : Colors.white.withValues(alpha: 0.4),
                fontSize: 10,
                fontWeight: selected ? FontWeight.w700 : FontWeight.normal,
              ),
            ),
          ],
        ),
      ),
    );
  }
}

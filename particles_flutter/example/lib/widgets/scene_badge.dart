import 'package:flutter/material.dart';
import '../models/scene_config.dart';

class SceneBadge extends StatelessWidget {
  final SceneConfig scene;
  const SceneBadge({required this.scene, super.key});

  @override
  Widget build(BuildContext context) {
    return AnimatedSwitcher(
      duration: const Duration(milliseconds: 300),
      child: Container(
        key: ValueKey(scene.name),
        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 7),
        decoration: BoxDecoration(
          color: Colors.black54,
          borderRadius: BorderRadius.circular(20),
          border: Border.all(
            color: scene.accentColor.withValues(alpha: 0.6),
            width: 1,
          ),
        ),
        child: Text(
          '${scene.emoji}  ${scene.name}',
          style: TextStyle(
            color: scene.accentColor,
            fontWeight: FontWeight.w700,
            fontSize: 14,
            letterSpacing: 0.5,
          ),
        ),
      ),
    );
  }
}

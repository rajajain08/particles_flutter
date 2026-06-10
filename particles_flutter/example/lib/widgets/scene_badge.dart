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
        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 9),
        decoration: BoxDecoration(
          color: Colors.black.withValues(alpha: 0.65),
          borderRadius: BorderRadius.circular(20),
          border: Border.all(
            color: scene.accentColor.withValues(alpha: 0.5),
            width: 1,
          ),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              '${scene.emoji}  ${scene.name}',
              style: TextStyle(
                color: scene.accentColor,
                fontWeight: FontWeight.w700,
                fontSize: 14,
                letterSpacing: 0.5,
              ),
            ),
            const SizedBox(height: 2),
            Text(
              scene.tagline,
              style: TextStyle(
                color: scene.accentColor.withValues(alpha: 0.6),
                fontSize: 10,
                letterSpacing: 0.3,
                fontWeight: FontWeight.w400,
              ),
            ),
          ],
        ),
      ),
    );
  }
}

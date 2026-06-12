import 'dart:ui';
import 'package:flutter/material.dart';
import '../models/scene_config.dart';

class SceneBadge extends StatelessWidget {
  final SceneConfig scene;
  const SceneBadge({required this.scene, super.key});

  @override
  Widget build(BuildContext context) {
    return AnimatedSwitcher(
      duration: const Duration(milliseconds: 300),
      transitionBuilder: (child, animation) {
        final clamped = animation.drive(Tween<double>(begin: 0.4, end: 1.0));
        return FadeTransition(opacity: clamped, child: child);
      },
      child: ClipRRect(
        key: ValueKey(scene.name),
        borderRadius: BorderRadius.circular(16),
        child: BackdropFilter(
          filter: ImageFilter.blur(sigmaX: 18, sigmaY: 18),
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
            decoration: BoxDecoration(
              color: Colors.black.withValues(alpha: 0.45),
              borderRadius: BorderRadius.circular(16),
              border: Border.all(
                color: scene.accentColor.withValues(alpha: 0.5),
                width: 1.2,
              ),
              boxShadow: [
                BoxShadow(
                  color: scene.accentColor.withValues(alpha: 0.2),
                  blurRadius: 24,
                  spreadRadius: 0,
                ),
                BoxShadow(
                  color: scene.accentColor.withValues(alpha: 0.08),
                  blurRadius: 48,
                  spreadRadius: 4,
                ),
              ],
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisSize: MainAxisSize.min,
              children: [
                Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Text(scene.emoji, style: const TextStyle(fontSize: 16)),
                    const SizedBox(width: 8),
                    Text(
                      scene.name,
                      style: TextStyle(
                        color: scene.accentColor,
                        fontWeight: FontWeight.w700,
                        fontSize: 15,
                        letterSpacing: 0.3,
                        shadows: [
                          Shadow(
                            color: scene.accentColor.withValues(alpha: 0.6),
                            blurRadius: 8,
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 3),
                Text(
                  scene.tagline,
                  style: TextStyle(
                    color: scene.accentColor.withValues(alpha: 0.6),
                    fontSize: 10,
                    letterSpacing: 0.2,
                    fontWeight: FontWeight.w400,
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

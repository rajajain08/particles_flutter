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
    return Container(
      color: Colors.black87,
      padding: const EdgeInsets.symmetric(vertical: 10),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: List.generate(scenes.length, (i) {
          final s = scenes[i];
          final selected = i == selectedIndex;
          return GestureDetector(
            onTap: () => onSelect(i),
            child: AnimatedContainer(
              duration: const Duration(milliseconds: 250),
              padding:
                  const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
              decoration: BoxDecoration(
                color: selected
                    ? s.accentColor.withValues(alpha: 0.2)
                    : Colors.transparent,
                borderRadius: BorderRadius.circular(14),
                border: Border.all(
                  color: selected ? s.accentColor : Colors.white24,
                  width: selected ? 1.5 : 1,
                ),
              ),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text(s.emoji, style: const TextStyle(fontSize: 18)),
                  const SizedBox(height: 3),
                  Text(
                    s.name,
                    style: TextStyle(
                      color: selected ? s.accentColor : Colors.white54,
                      fontSize: 10,
                      fontWeight:
                          selected ? FontWeight.w700 : FontWeight.normal,
                    ),
                  ),
                ],
              ),
            ),
          );
        }),
      ),
    );
  }
}

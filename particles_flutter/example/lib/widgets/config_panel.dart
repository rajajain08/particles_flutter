import 'package:flutter/material.dart';
import 'package:particles_flutter/engine.dart';
import '../models/scene_config.dart';

class ConfigPanel extends StatelessWidget {
  final SceneConfig scene;
  final int particleCount;
  final ValueChanged<int> onCountChanged;
  final ValueChanged<bool> onConnectDotsChanged;
  final ValueChanged<bool> onGravityChanged;
  final ValueChanged<bool> onInteractionChanged;
  final ValueChanged<double> onSpeedChanged;
  final ValueChanged<double> onSizeChanged;
  final ValueChanged<double> onAwayRadiusChanged;
  final ValueChanged<double> onGravityScaleChanged;
  final ValueChanged<double> onOpacityChanged;
  final ValueChanged<BoundType> onBoundTypeChanged;
  final VoidCallback onReset;

  const ConfigPanel({
    required this.scene,
    required this.particleCount,
    required this.onCountChanged,
    required this.onConnectDotsChanged,
    required this.onGravityChanged,
    required this.onInteractionChanged,
    required this.onSpeedChanged,
    required this.onSizeChanged,
    required this.onAwayRadiusChanged,
    required this.onGravityScaleChanged,
    required this.onOpacityChanged,
    required this.onBoundTypeChanged,
    required this.onReset,
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    final accent = scene.accentColor;
    return Container(
      color: Colors.black87,
      padding: const EdgeInsets.fromLTRB(20, 14, 20, 8),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Section: Particles
          _sectionLabel('Particles', accent),
          _SliderRow(
            icon: Icons.grain,
            label: 'Count',
            value: particleCount.toDouble(),
            min: 20,
            max: 400,
            divisions: 38,
            displayValue: '$particleCount',
            accent: accent,
            onChanged: (v) => onCountChanged(v.round()),
          ),
          _SliderRow(
            icon: Icons.speed,
            label: 'Speed',
            value: scene.speed,
            min: 5,
            max: 200,
            divisions: 39,
            displayValue: scene.speed.round().toString(),
            accent: accent,
            onChanged: onSpeedChanged,
          ),
          _SliderRow(
            icon: Icons.format_size,
            label: 'Size',
            value: scene.sizeMultiplier,
            min: 0.2,
            max: 4.0,
            divisions: 38,
            displayValue: scene.sizeMultiplier.toStringAsFixed(1) + 'x',
            accent: accent,
            onChanged: onSizeChanged,
          ),
          _SliderRow(
            icon: Icons.opacity,
            label: 'Opacity',
            value: scene.opacity,
            min: 0.1,
            max: 1.0,
            divisions: 18,
            displayValue: (scene.opacity * 100).round().toString() + '%',
            accent: accent,
            onChanged: onOpacityChanged,
          ),

          const SizedBox(height: 8),
          _sectionLabel('Physics', accent),
          _SliderRow(
            icon: Icons.arrow_downward,
            label: 'Gravity Scale',
            value: scene.gravityScale,
            min: 1,
            max: 100,
            divisions: 99,
            displayValue: scene.gravityScale.round().toString(),
            accent: accent,
            onChanged: onGravityScaleChanged,
          ),

          const SizedBox(height: 8),
          _sectionLabel('Interaction', accent),
          _SliderRow(
            icon: Icons.touch_app,
            label: 'Away Radius',
            value: scene.awayRadius,
            min: 20,
            max: 300,
            divisions: 28,
            displayValue: scene.awayRadius.round().toString() + 'px',
            accent: accent,
            onChanged: onAwayRadiusChanged,
          ),

          const SizedBox(height: 8),
          _sectionLabel('Boundary', accent),
          _BoundTypePicker(
            value: scene.boundType,
            accent: accent,
            onChanged: onBoundTypeChanged,
          ),

          const SizedBox(height: 8),
          _sectionLabel('Toggles', accent),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              _Toggle(
                label: 'Lines',
                icon: Icons.share,
                value: scene.connectDots,
                color: accent,
                onChanged: onConnectDotsChanged,
              ),
              _Toggle(
                label: 'Gravity',
                icon: Icons.arrow_downward,
                value: scene.gravity,
                color: accent,
                onChanged: onGravityChanged,
              ),
              _Toggle(
                label: 'Interact',
                icon: Icons.touch_app,
                value: scene.interaction,
                color: accent,
                onChanged: onInteractionChanged,
              ),
              _ResetButton(accent: accent, onReset: onReset),
            ],
          ),
          const SizedBox(height: 4),
        ],
      ),
    );
  }

  Widget _sectionLabel(String text, Color accent) => Padding(
        padding: const EdgeInsets.only(bottom: 4),
        child: Text(
          text.toUpperCase(),
          style: TextStyle(
            color: accent.withValues(alpha: 0.7),
            fontSize: 10,
            fontWeight: FontWeight.w700,
            letterSpacing: 1.2,
          ),
        ),
      );
}

class _SliderRow extends StatelessWidget {
  final IconData icon;
  final String label;
  final double value;
  final double min;
  final double max;
  final int divisions;
  final String displayValue;
  final Color accent;
  final ValueChanged<double> onChanged;

  const _SliderRow({
    required this.icon,
    required this.label,
    required this.value,
    required this.min,
    required this.max,
    required this.divisions,
    required this.displayValue,
    required this.accent,
    required this.onChanged,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Icon(icon, color: accent.withValues(alpha: 0.7), size: 14),
        const SizedBox(width: 6),
        SizedBox(
          width: 80,
          child: Text(
            '$label: $displayValue',
            style: const TextStyle(color: Colors.white70, fontSize: 12),
          ),
        ),
        Expanded(
          child: SliderTheme(
            data: SliderThemeData(
              activeTrackColor: accent,
              thumbColor: accent,
              inactiveTrackColor: accent.withValues(alpha: 0.2),
              overlayColor: accent.withValues(alpha: 0.1),
              trackHeight: 2,
              thumbShape: const RoundSliderThumbShape(enabledThumbRadius: 6),
            ),
            child: Slider(
              value: value.clamp(min, max),
              min: min,
              max: max,
              divisions: divisions,
              onChanged: onChanged,
            ),
          ),
        ),
      ],
    );
  }
}

class _BoundTypePicker extends StatelessWidget {
  final BoundType value;
  final Color accent;
  final ValueChanged<BoundType> onChanged;

  const _BoundTypePicker({
    required this.value,
    required this.accent,
    required this.onChanged,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      children: BoundType.values.map((t) {
        final selected = t == value;
        final label = t.name[0].toUpperCase() + t.name.substring(1);
        return Padding(
          padding: const EdgeInsets.only(right: 8, bottom: 4),
          child: GestureDetector(
            onTap: () => onChanged(t),
            child: AnimatedContainer(
              duration: const Duration(milliseconds: 200),
              padding:
                  const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
              decoration: BoxDecoration(
                color:
                    selected ? accent.withValues(alpha: 0.2) : Colors.transparent,
                borderRadius: BorderRadius.circular(8),
                border: Border.all(
                  color: selected ? accent : Colors.white24,
                  width: selected ? 1.5 : 1,
                ),
              ),
              child: Text(
                label,
                style: TextStyle(
                  color: selected ? accent : Colors.white38,
                  fontSize: 11,
                  fontWeight:
                      selected ? FontWeight.w700 : FontWeight.normal,
                ),
              ),
            ),
          ),
        );
      }).toList(),
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
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
        decoration: BoxDecoration(
          color: value ? color.withValues(alpha: 0.2) : Colors.transparent,
          borderRadius: BorderRadius.circular(10),
          border: Border.all(
            color: value ? color : Colors.white24,
            width: value ? 1.5 : 1,
          ),
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(icon, color: value ? color : Colors.white38, size: 13),
            const SizedBox(width: 5),
            Text(
              label,
              style: TextStyle(
                color: value ? color : Colors.white38,
                fontSize: 11,
                fontWeight: value ? FontWeight.w700 : FontWeight.normal,
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _ResetButton extends StatelessWidget {
  final Color accent;
  final VoidCallback onReset;

  const _ResetButton({required this.accent, required this.onReset});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onReset,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(10),
          border: Border.all(color: Colors.white24),
        ),
        child: const Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(Icons.refresh, color: Colors.white38, size: 13),
            SizedBox(width: 5),
            Text('Reset',
                style: TextStyle(color: Colors.white38, fontSize: 11)),
          ],
        ),
      ),
    );
  }
}

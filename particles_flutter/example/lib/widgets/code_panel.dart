import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import '../models/scene_config.dart';

class CodePanel extends StatefulWidget {
  final SceneConfig scene;
  const CodePanel({required this.scene, super.key});

  @override
  State<CodePanel> createState() => _CodePanelState();
}

class _CodePanelState extends State<CodePanel> {
  bool _copied = false;

  void _copy() async {
    await Clipboard.setData(ClipboardData(text: widget.scene.codeSnippet));
    setState(() => _copied = true);
    await Future.delayed(const Duration(seconds: 2));
    if (mounted) setState(() => _copied = false);
  }

  @override
  Widget build(BuildContext context) {
    final accent = widget.scene.accentColor;
    return Container(
      color: Colors.black87,
      padding: const EdgeInsets.fromLTRB(16, 14, 16, 16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Icon(Icons.code_rounded, color: accent.withValues(alpha: 0.7), size: 14),
              const SizedBox(width: 6),
              Text(
                'USAGE',
                style: TextStyle(
                  color: accent.withValues(alpha: 0.7),
                  fontSize: 10,
                  fontWeight: FontWeight.w700,
                  letterSpacing: 1.2,
                ),
              ),
              const Spacer(),
              GestureDetector(
                onTap: _copy,
                child: AnimatedContainer(
                  duration: const Duration(milliseconds: 200),
                  padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                  decoration: BoxDecoration(
                    color: _copied
                        ? accent.withValues(alpha: 0.2)
                        : Colors.transparent,
                    borderRadius: BorderRadius.circular(6),
                    border: Border.all(
                      color: _copied ? accent : Colors.white24,
                    ),
                  ),
                  child: Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Icon(
                        _copied ? Icons.check : Icons.copy_rounded,
                        size: 11,
                        color: _copied ? accent : Colors.white38,
                      ),
                      const SizedBox(width: 4),
                      Text(
                        _copied ? 'Copied!' : 'Copy',
                        style: TextStyle(
                          fontSize: 10,
                          color: _copied ? accent : Colors.white38,
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: 12),
          Container(
            width: double.infinity,
            padding: const EdgeInsets.all(14),
            decoration: BoxDecoration(
              color: const Color(0xFF0D0D0D),
              borderRadius: BorderRadius.circular(10),
              border: Border.all(color: Colors.white10),
            ),
            child: _HighlightedCode(
              code: widget.scene.codeSnippet,
              accent: accent,
            ),
          ),
          const SizedBox(height: 12),
          _InstallBadge(accent: accent),
        ],
      ),
    );
  }
}

class _InstallBadge extends StatelessWidget {
  final Color accent;
  const _InstallBadge({required this.accent});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: accent.withValues(alpha: 0.06),
        borderRadius: BorderRadius.circular(10),
        border: Border.all(color: accent.withValues(alpha: 0.2)),
      ),
      child: Row(
        children: [
          Icon(Icons.terminal_rounded, size: 13, color: accent.withValues(alpha: 0.7)),
          const SizedBox(width: 8),
          Expanded(
            child: Text(
              'flutter pub add particles_flutter',
              style: TextStyle(
                fontFamily: 'monospace',
                fontSize: 11,
                color: accent,
                letterSpacing: 0.3,
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class _HighlightedCode extends StatelessWidget {
  final String code;
  final Color accent;
  const _HighlightedCode({required this.code, required this.accent});

  @override
  Widget build(BuildContext context) {
    // Simple syntax highlight: keywords, class names, strings, comments
    final spans = <TextSpan>[];
    final lines = code.split('\n');

    for (int i = 0; i < lines.length; i++) {
      if (i > 0) spans.add(const TextSpan(text: '\n'));
      spans.addAll(_tokenizeLine(lines[i], accent));
    }

    return RichText(
      text: TextSpan(
        style: const TextStyle(
          fontFamily: 'monospace',
          fontSize: 11.5,
          height: 1.6,
          color: Color(0xFFCDD6F4),
        ),
        children: spans,
      ),
    );
  }

  List<TextSpan> _tokenizeLine(String line, Color accent) {
    // Dart keywords
    const keywords = {
      'List', 'generate', 'Offset', 'const', 'true', 'false', 'null',
      'final', 'var', 'new', 'return', 'import',
    };
    // Flutter/package class names
    const classNames = {
      'Particles', 'CircularParticle', 'OvoidalParticle',
      'RectangularParticle', 'TriangularParticle',
      'BoundType', 'ParticleInteraction', 'ParticlePhysics', 'Emitter',
      'Colors', 'Color', 'Duration',
    };
    const enumValues = {
      'WrapAround', 'Bounce', 'None', 'easeOut',
    };

    final spans = <TextSpan>[];
    final trimmed = line.trimLeft();
    final indent = line.length - trimmed.length;

    if (indent > 0) {
      spans.add(TextSpan(text: line.substring(0, indent)));
    }

    // Tokenize the rest
    final rest = trimmed;
    final pattern = RegExp(
      r"(//[^\n]*)|('(?:[^'\\]|\\.)*')|([A-Za-z_][A-Za-z0-9_]*)|([0-9]+\.?[0-9]*)|([(),:\[\]{}=<>\.!])",
    );

    int localPos = 0;
    for (final match in pattern.allMatches(rest)) {
      if (match.start > localPos) {
        spans.add(TextSpan(text: rest.substring(localPos, match.start)));
      }
      final token = match.group(0)!;
      if (match.group(1) != null) {
        // comment
        spans.add(TextSpan(
            text: token,
            style: const TextStyle(color: Color(0xFF6C7086))));
      } else if (match.group(2) != null) {
        // string
        spans.add(TextSpan(
            text: token,
            style: const TextStyle(color: Color(0xFFA6E3A1))));
      } else if (match.group(3) != null) {
        if (classNames.contains(token)) {
          spans.add(TextSpan(
              text: token,
              style: TextStyle(color: accent, fontWeight: FontWeight.w600)));
        } else if (keywords.contains(token)) {
          spans.add(TextSpan(
              text: token,
              style: const TextStyle(color: Color(0xFFCBA6F7))));
        } else if (enumValues.contains(token)) {
          spans.add(TextSpan(
              text: token,
              style: const TextStyle(color: Color(0xFFF38BA8))));
        } else if (token[0] == token[0].toUpperCase() && token[0] != token[0].toLowerCase()) {
          // Capitalized = likely a type
          spans.add(TextSpan(
              text: token,
              style: const TextStyle(color: Color(0xFF89DCEB))));
        } else {
          spans.add(TextSpan(
              text: token,
              style: const TextStyle(color: Color(0xFFCDD6F4))));
        }
      } else if (match.group(4) != null) {
        // number
        spans.add(TextSpan(
            text: token,
            style: const TextStyle(color: Color(0xFFFAB387))));
      } else {
        spans.add(TextSpan(text: token));
      }
      localPos = match.end;
    }
    if (localPos < rest.length) {
      spans.add(TextSpan(text: rest.substring(localPos)));
    }

    return spans;
  }
}

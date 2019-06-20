// ignore_for_file: directives_ordering

import 'package:build_runner_core/build_runner_core.dart' as _i1;
import 'package:build_modules/builders.dart' as _i2;
import 'package:build_web_compilers/builders.dart' as _i3;
import 'package:build_config/build_config.dart' as _i4;
import 'package:build/build.dart' as _i5;
import 'dart:isolate' as _i6;
import 'package:build_runner/build_runner.dart' as _i7;
import 'dart:io' as _i8;

final _builders = <_i1.BuilderApplication>[
  _i1.apply('build_modules:module_library', [_i2.moduleLibraryBuilder],
      _i1.toAllPackages(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: ['build_modules:module_cleanup']),
  _i1.apply(
      'build_modules:vm',
      [
        _i2.metaModuleBuilderFactoryForPlatform('vm'),
        _i2.metaModuleCleanBuilderFactoryForPlatform('vm'),
        _i2.moduleBuilderFactoryForPlatform('vm')
      ],
      _i1.toNoneByDefault(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: ['build_modules:module_cleanup']),
  _i1.apply(
      'build_modules:dart2js',
      [
        _i2.metaModuleBuilderFactoryForPlatform('dart2js'),
        _i2.metaModuleCleanBuilderFactoryForPlatform('dart2js'),
        _i2.moduleBuilderFactoryForPlatform('dart2js')
      ],
      _i1.toNoneByDefault(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: ['build_modules:module_cleanup']),
  _i1.apply(
      'build_modules:dartdevc',
      [
        _i2.metaModuleBuilderFactoryForPlatform('dartdevc'),
        _i2.metaModuleCleanBuilderFactoryForPlatform('dartdevc'),
        _i2.moduleBuilderFactoryForPlatform('dartdevc'),
        _i2.unlinkedSummaryBuilderForPlatform('dartdevc'),
        _i2.linkedSummaryBuilderForPlatform('dartdevc')
      ],
      _i1.toNoneByDefault(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: ['build_modules:module_cleanup']),
  _i1.apply(
      'build_web_compilers:ddc', [_i3.devCompilerBuilder], _i1.toAllPackages(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: [
        'build_web_compilers:dart_source_cleanup',
        'build_modules:dartdevc',
        'build_modules:dart2js'
      ]),
  _i1.apply('build_web_compilers:entrypoint', [_i3.webEntrypointBuilder],
      _i1.toRoot(),
      hideOutput: true,
      defaultGenerateFor: const _i4.InputSet(include: [
        'web/**',
        'test/**_test.dart',
        'example/**',
        'benchmark/**'
      ], exclude: [
        'test/**.node_test.dart',
        'test/**.vm_test.dart'
      ]),
      defaultOptions: _i5.BuilderOptions({
        'dart2js_args': ['--minify']
      }),
      defaultReleaseOptions: _i5.BuilderOptions({'compiler': 'dart2js'}),
      appliesBuilders: ['build_web_compilers:dart2js_archive_extractor']),
  _i1.applyPostProcess('build_modules:module_cleanup', _i2.moduleCleanup,
      defaultGenerateFor: const _i4.InputSet()),
  _i1.applyPostProcess(
      'build_web_compilers:dart_source_cleanup', _i3.dartSourceCleanup,
      defaultReleaseOptions: _i5.BuilderOptions({'enabled': true}),
      defaultGenerateFor: const _i4.InputSet()),
  _i1.applyPostProcess('build_web_compilers:dart2js_archive_extractor',
      _i3.dart2JsArchiveExtractor,
      defaultReleaseOptions: _i5.BuilderOptions({'filter_outputs': true}),
      defaultGenerateFor: const _i4.InputSet())
];
main(List<String> args, [_i6.SendPort sendPort]) async {
  var result = await _i7.run(args, _builders);
  sendPort?.send(result);
  _i8.exitCode = result;
}

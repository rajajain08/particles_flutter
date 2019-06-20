define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const gestures = Object.create(dart.library);
  dart.trackLibraries("packages/flutter_web/gestures.ddc", {
    "package:flutter_web/gestures.dart": gestures
  }, {
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"gestures.ddc.js"}');
  // Exports:
  return {
    gestures: gestures
  };
});

//# sourceMappingURL=gestures.ddc.js.map

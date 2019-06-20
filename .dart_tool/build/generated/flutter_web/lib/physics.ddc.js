define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const physics = Object.create(dart.library);
  dart.trackLibraries("packages/flutter_web/physics.ddc", {
    "package:flutter_web/physics.dart": physics
  }, {
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"physics.ddc.js"}');
  // Exports:
  return {
    physics: physics
  };
});

//# sourceMappingURL=physics.ddc.js.map

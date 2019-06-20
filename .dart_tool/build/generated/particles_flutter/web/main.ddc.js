define(['dart_sdk', 'packages/flutter_web_ui/ui', 'packages/particles_flutter/main'], function(dart_sdk, ui, main) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ui$ = ui.ui;
  const main$ = main.main;
  const main$0 = Object.create(dart.library);
  main$0.main = function() {
    return async.async(dart.dynamic, function* main() {
      yield ui$.webOnlyInitializePlatform();
      main$.main();
    });
  };
  dart.trackLibraries("web/main.ddc", {
    "main.dart": main$0
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;AAMO;AACL,YAAM,AAAG,6BAAyB;AAClC,MAAI,UAAI;IACV","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main$0
  };
});

//# sourceMappingURL=main.ddc.js.map

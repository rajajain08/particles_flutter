define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/flutter_web/src/animation/animation', 'packages/particles_flutter/screens/circular_particles'], function(dart_sdk, animation, material, animation$, circular_particles) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__binding = animation.src__widgets__binding;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__media_query = animation.src__widgets__media_query;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__container = animation.src__widgets__container;
  const src__material__colors = material.src__material__colors;
  const src__material__theme_data = material.src__material__theme_data;
  const src__material__scaffold = material.src__material__scaffold;
  const src__material__app = material.src__material__app;
  const src__animation__curves = animation$.src__animation__curves;
  const screens__circular_particles = circular_particles.screens__circular_particles;
  const main = Object.create(dart.library);
  main.main = function() {
    return src__widgets__binding.runApp(new main.MyApp.new());
  };
  main.MyApp = class MyApp extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__material__app.MaterialApp.new({title: "Flutter Demo", theme: src__material__theme_data.ThemeData.new({primarySwatch: src__material__colors.Colors.blue}), home: new src__material__scaffold.Scaffold.new({backgroundColor: src__material__colors.Colors.purple, body: new main.CircularParticleScreen.new()})});
    }
  };
  (main.MyApp.new = function() {
    main.MyApp.__proto__.new.call(this);
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(main.MyApp, "package:particles_flutter/main.dart");
  main.CircularParticleScreen = class CircularParticleScreen extends src__widgets__framework.StatelessWidget {
    build(context) {
      let screenHeight = src__widgets__media_query.MediaQuery.of(context).size.height;
      let screenWidth = src__widgets__media_query.MediaQuery.of(context).size.width;
      return new src__widgets__container.Container.new({child: new src__widgets__basic.Center.new({child: new screens__circular_particles.CircularParticle.new({awayRadius: 80, numberOfParticles: 1000, speedOfParticles: 1, height: screenHeight, width: screenWidth, onTapAnimation: true, particleColor: src__material__colors.Colors.white.withAlpha(180), awayAnimationDuration: new core.Duration.new({milliseconds: 500}), maxParticleSize: 10, isRandSize: true, isRandomColor: false, awayAnimationCurve: src__animation__curves.Curves.ease, enableHover: true, hoverColor: src__material__colors.Colors.redAccent.withAlpha(180), hoverRadius: 90})})});
    }
  };
  (main.CircularParticleScreen.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    main.CircularParticleScreen.__proto__.new.call(this, {key: key});
  }).prototype = main.CircularParticleScreen.prototype;
  dart.addTypeTests(main.CircularParticleScreen);
  dart.setMethodSignature(main.CircularParticleScreen, () => ({
    __proto__: dart.getMethods(main.CircularParticleScreen.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(main.CircularParticleScreen, "package:particles_flutter/main.dart");
  dart.trackLibraries("packages/particles_flutter/main.ddc", {
    "package:particles_flutter/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;UAGe,6BAAM,KAAC,cAAK;EAAG;;UAIf,OAAoB;AAC/B,iBAAO,kCAAW,SACP,uBACA,uCAAS,iBACC,4BAAM,KAAK,cAEtB,oCAAQ,mBACK,4BAAM,OAAO,YACxB,+BAAsB;IAEpC;;;;EACF;;;;;;;;UAMe,OAAoB;AAC/B,UAAO,eAAe,oCAAU,GAAG,CAAC,OAAO,MAAM,OAAO;AACxD,UAAO,cAAc,oCAAU,GAAG,CAAC,OAAO,MAAM,MAAM;AACtD,iBAAO,qCAAS,aACP,8BAAM,aACJ,gDAAgB,cACT,uBACO,wBACD,WACV,YAAY,SACb,WAAW,kBACF,qBACD,4BAAM,MAAM,UAAU,CAAC,iCACf,iBAAQ,gBAAe,wBAC7B,gBACL,qBACG,2BAOK,6BAAM,KAAK,eAClB,kBACD,4BAAM,UAAU,UAAU,CAAC,mBAC1B;IAIrB;;;QAjCkC;AAAQ,+DAAW,GAAG;EAAC","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map

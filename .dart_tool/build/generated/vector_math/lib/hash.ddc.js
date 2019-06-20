define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const hash = Object.create(dart.library);
  const $hashCode = dartx.hashCode;
  const $fold = dartx.fold;
  const $rightShift = dartx['>>'];
  let intAndObjectToint = () => (intAndObjectToint = dart.constFn(dart.fnType(core.int, [core.int, core.Object])))();
  hash.hashObjects = function(objects) {
    return hash._finish(objects[$fold](core.int, 0, dart.fn((h, i) => hash._combine(h, dart.hashCode(i)), intAndObjectToint())));
  };
  hash._combine = function(hash, value) {
    hash = 536870911 & dart.notNull(hash) + dart.notNull(value);
    hash = 536870911 & dart.notNull(hash) + ((524287 & dart.notNull(hash)) << 10);
    return (dart.notNull(hash) ^ hash[$rightShift](6)) >>> 0;
  };
  hash._finish = function(hash) {
    hash = 536870911 & dart.notNull(hash) + ((67108863 & dart.notNull(hash)) << 3);
    hash = (dart.notNull(hash) ^ hash[$rightShift](11)) >>> 0;
    return 536870911 & dart.notNull(hash) + ((16383 & dart.notNull(hash)) << 15);
  };
  dart.trackLibraries("packages/vector_math/hash.ddc", {
    "package:vector_math/hash.dart": hash
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["hash.dart"],"names":[],"mappings":";;;;;;;;;;8BAOgB,OAAwB;UACpC,aAAO,CAAC,OAAO,OAAK,WAAM,GAAG,SAAC,CAAK,EAAE,CAAQ,KAAK,aAAQ,CAAC,CAAC,gBAAE,CAAC;EAAY;2BAGlE,IAAQ,EAAE,KAAS;AAC9B,QAAI,GAAG,AAAW,YAAQ,aAAL,IAAI,iBAAG,KAAK;AACjC,QAAI,GAAG,AAAW,YAAQ,aAAL,IAAI,KAAwB,CAAnB,AAAW,sBAAE,IAAI,MAAK;AACpD,UAAO,EAAK,aAAL,IAAI,IAAI,AAAK,IAAD,cAAI;EACzB;0BAEY,IAAQ;AAClB,QAAI,GAAG,AAAW,YAAQ,aAAL,IAAI,KAAwB,CAAnB,AAAW,wBAAE,IAAI,MAAK;AACpD,QAAI,GAAG,CAAK,aAAL,IAAI,IAAI,AAAK,IAAD,cAAI;AACvB,UAAO,AAAW,aAAQ,aAAL,IAAI,KAAwB,CAAnB,AAAW,qBAAE,IAAI,MAAK;EACtD","file":"hash.ddc.js"}');
  // Exports:
  return {
    hash: hash
  };
});

//# sourceMappingURL=hash.ddc.js.map

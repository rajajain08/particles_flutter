define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__utils = Object.create(dart.library);
  const $compareTo = dartx.compareTo;
  const _is_Pair_default = Symbol('_is_Pair_default');
  src__utils.Pair$ = dart.generic((E, F) => {
    class Pair extends core.Object {
      get first() {
        return this[first$];
      }
      set first(value) {
        this[first$] = E._check(value);
      }
      get last() {
        return this[last$];
      }
      set last(value) {
        this[last$] = F._check(value);
      }
    }
    (Pair.new = function(first, last) {
      this[first$] = first;
      this[last$] = last;
    }).prototype = Pair.prototype;
    dart.addTypeTests(Pair);
    Pair.prototype[_is_Pair_default] = true;
    const first$ = Symbol("Pair.first");
    const last$ = Symbol("Pair.last");
    dart.setLibraryUri(Pair, "package:collection/src/utils.dart");
    dart.setFieldSignature(Pair, () => ({
      __proto__: dart.getFields(Pair.__proto__),
      first: dart.fieldType(E),
      last: dart.fieldType(F)
    }));
    return Pair;
  });
  src__utils.Pair = src__utils.Pair$();
  dart.addTypeTests(src__utils.Pair, _is_Pair_default);
  src__utils.defaultCompare = function(T) {
    return dart.fn((value1, value2) => core.Comparable.as(value1)[$compareTo](value2), dart.fnType(core.int, [T, T]));
  };
  dart.trackLibraries("packages/collection/src/utils.ddc", {
    "package:collection/src/utils.dart": src__utils
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["utils.dart"],"names":[],"mappings":";;;;;;;;;;MAMI;;;;;;MACA;;;;;;;yBAEG,KAAU,EAAE,IAAS;MAAhB,YAAK,GAAL,KAAK;MAAO,WAAI,GAAJ,IAAI;IAAC;;;;;;;;;;;;;;;;UAKzB,UAAC,MAAM,EAAE,MAAM,KAAK,mBAAC,MAAM,aAAyB,CAAC,MAAM;EAAC","file":"utils.ddc.js"}');
  // Exports:
  return {
    src__utils: src__utils
  };
});

//# sourceMappingURL=utils.ddc.js.map

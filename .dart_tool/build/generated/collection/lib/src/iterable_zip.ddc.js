define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__iterable_zip = Object.create(dart.library);
  const $toList = dartx.toList;
  const $iterator = dartx.iterator;
  const $map = dartx.map;
  const $isEmpty = dartx.isEmpty;
  const $_get = dartx._get;
  const $length = dartx.length;
  const $_set = dartx._set;
  const _iterables = dart.privateName(src__iterable_zip, "_iterables");
  const _is_IterableZip_default = Symbol('_is_IterableZip_default');
  src__iterable_zip.IterableZip$ = dart.generic(T => {
    let IteratorOfT = () => (IteratorOfT = dart.constFn(core.Iterator$(T)))();
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    let IterableOfTToIteratorOfT = () => (IterableOfTToIteratorOfT = dart.constFn(dart.fnType(IteratorOfT(), [IterableOfT()])))();
    let IterableOfIteratorOfT = () => (IterableOfIteratorOfT = dart.constFn(core.Iterable$(IteratorOfT())))();
    let _IteratorZipOfT = () => (_IteratorZipOfT = dart.constFn(src__iterable_zip._IteratorZip$(T)))();
    let IterableOfIterableOfT = () => (IterableOfIterableOfT = dart.constFn(core.Iterable$(IterableOfT())))();
    class IterableZip extends collection.IterableBase$(core.List$(T)) {
      get iterator() {
        let iterators = IterableOfIteratorOfT()._check(this[_iterables][$map](IteratorOfT(), dart.fn(x => x[$iterator], IterableOfTToIteratorOfT())))[$toList]({growable: false});
        return new (_IteratorZipOfT()).new(iterators);
      }
    }
    (IterableZip.new = function(iterables) {
      this[_iterables] = iterables;
      IterableZip.__proto__.new.call(this);
    }).prototype = IterableZip.prototype;
    dart.addTypeTests(IterableZip);
    IterableZip.prototype[_is_IterableZip_default] = true;
    dart.setGetterSignature(IterableZip, () => ({
      __proto__: dart.getGetters(IterableZip.__proto__),
      iterator: core.Iterator$(core.List$(T)),
      [$iterator]: core.Iterator$(core.List$(T))
    }));
    dart.setLibraryUri(IterableZip, "package:collection/src/iterable_zip.dart");
    dart.setFieldSignature(IterableZip, () => ({
      __proto__: dart.getFields(IterableZip.__proto__),
      [_iterables]: dart.finalFieldType(IterableOfIterableOfT())
    }));
    dart.defineExtensionAccessors(IterableZip, ['iterator']);
    return IterableZip;
  });
  src__iterable_zip.IterableZip = src__iterable_zip.IterableZip$();
  dart.addTypeTests(src__iterable_zip.IterableZip, _is_IterableZip_default);
  const _iterators = dart.privateName(src__iterable_zip, "_iterators");
  const _current = dart.privateName(src__iterable_zip, "_current");
  const _is__IteratorZip_default = Symbol('_is__IteratorZip_default');
  src__iterable_zip._IteratorZip$ = dart.generic(T => {
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let IteratorOfListOfT = () => (IteratorOfListOfT = dart.constFn(core.Iterator$(ListOfT())))();
    let IteratorOfT = () => (IteratorOfT = dart.constFn(core.Iterator$(T)))();
    let ListOfIteratorOfT = () => (ListOfIteratorOfT = dart.constFn(core.List$(IteratorOfT())))();
    class _IteratorZip extends core.Object {
      moveNext() {
        if (dart.test(this[_iterators][$isEmpty])) return false;
        for (let i = 0; i < dart.notNull(this[_iterators][$length]); i++) {
          if (!dart.test(this[_iterators][$_get](i).moveNext())) {
            this[_current] = null;
            return false;
          }
        }
        this[_current] = ListOfT().new(this[_iterators][$length]);
        for (let i = 0; i < dart.notNull(this[_iterators][$length]); i++) {
          this[_current][$_set](i, this[_iterators][$_get](i).current);
        }
        return true;
      }
      get current() {
        return this[_current];
      }
    }
    (_IteratorZip.new = function(iterators) {
      this[_current] = null;
      this[_iterators] = iterators;
    }).prototype = _IteratorZip.prototype;
    dart.addTypeTests(_IteratorZip);
    _IteratorZip.prototype[_is__IteratorZip_default] = true;
    _IteratorZip[dart.implements] = () => [IteratorOfListOfT()];
    dart.setMethodSignature(_IteratorZip, () => ({
      __proto__: dart.getMethods(_IteratorZip.__proto__),
      moveNext: dart.fnType(core.bool, [])
    }));
    dart.setGetterSignature(_IteratorZip, () => ({
      __proto__: dart.getGetters(_IteratorZip.__proto__),
      current: core.List$(T)
    }));
    dart.setLibraryUri(_IteratorZip, "package:collection/src/iterable_zip.dart");
    dart.setFieldSignature(_IteratorZip, () => ({
      __proto__: dart.getFields(_IteratorZip.__proto__),
      [_iterators]: dart.finalFieldType(ListOfIteratorOfT()),
      [_current]: dart.fieldType(ListOfT())
    }));
    return _IteratorZip;
  });
  src__iterable_zip._IteratorZip = src__iterable_zip._IteratorZip$();
  dart.addTypeTests(src__iterable_zip._IteratorZip, _is__IteratorZip_default);
  dart.trackLibraries("packages/collection/src/iterable_zip.ddc", {
    "package:collection/src/iterable_zip.dart": src__iterable_zip
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["iterable_zip.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;AAuBI,YAAI,2CAAY,gBAAU,MAAI,gBAAC,QAAC,CAAC,IAAK,CAAC,WAAS,wCAAQ,YAAW;AAEnE,cAAO,KAAI,uBAAe,CAAC,SAAS;MACtC;;gCARY,SAA+B;MAAS,gBAAU,GAAG,SAAS;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkBxE,sBAAI,gBAAU,UAAQ,GAAE,MAAO;AAC/B,iBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,gBAAU,SAAO,GAAE,CAAC,IAAI;AAC1C,yBAAK,gBAAU,QAAC,CAAC,UAAU,KAAI;AAC7B,0BAAQ,GAAG;AACX,kBAAO;;;AAGX,sBAAQ,GAAG,AAAI,aAAI,CAAC,gBAAU,SAAO;AACrC,iBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,gBAAU,SAAO,GAAE,CAAC,IAAI;AAC1C,wBAAQ,QAAC,CAAC,EAAI,gBAAU,QAAC,CAAC,SAAS;;AAErC,cAAO;MACT;;cAEuB,eAAQ;;;iCAjBlB,SAA2B;MAFhC,cAAQ;MAE4B,gBAAU,GAAG,SAAS","file":"iterable_zip.ddc.js"}');
  // Exports:
  return {
    src__iterable_zip: src__iterable_zip
  };
});

//# sourceMappingURL=iterable_zip.ddc.js.map

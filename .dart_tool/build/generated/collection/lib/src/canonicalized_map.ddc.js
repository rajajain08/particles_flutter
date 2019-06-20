define(['dart_sdk', 'packages/collection/src/utils'], function(dart_sdk, utils) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__utils = utils.src__utils;
  const src__canonicalized_map = Object.create(dart.library);
  const src__empty_unmodifiable_set = Object.create(dart.library);
  const src__unmodifiable_wrappers = Object.create(dart.library);
  const src__wrappers = Object.create(dart.library);
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $forEach = dartx.forEach;
  const $map = dartx.map;
  const $addEntries = dartx.addEntries;
  const $cast = dartx.cast;
  const $clear = dartx.clear;
  const $containsKey = dartx.containsKey;
  const $any = dartx.any;
  const $values = dartx.values;
  const $entries = dartx.entries;
  const $isEmpty = dartx.isEmpty;
  const $isNotEmpty = dartx.isNotEmpty;
  const $length = dartx.length;
  const $putIfAbsent = dartx.putIfAbsent;
  const $remove = dartx.remove;
  const $removeWhere = dartx.removeWhere;
  const $update = dartx.update;
  const $updateAll = dartx.updateAll;
  const $last = dartx.last;
  const $removeLast = dartx.removeLast;
  const $add = dartx.add;
  const $addAll = dartx.addAll;
  const $containsValue = dartx.containsValue;
  const $toString = dartx.toString;
  const $keys = dartx.keys;
  const $iterator = dartx.iterator;
  const $followedBy = dartx.followedBy;
  const $singleWhere = dartx.singleWhere;
  const $plus = dartx['+'];
  const $asMap = dartx.asMap;
  const $fillRange = dartx.fillRange;
  const $getRange = dartx.getRange;
  const $indexOf = dartx.indexOf;
  const $indexWhere = dartx.indexWhere;
  const $insert = dartx.insert;
  const $insertAll = dartx.insertAll;
  const $lastIndexOf = dartx.lastIndexOf;
  const $lastIndexWhere = dartx.lastIndexWhere;
  const $removeAt = dartx.removeAt;
  const $removeRange = dartx.removeRange;
  const $replaceRange = dartx.replaceRange;
  const $retainWhere = dartx.retainWhere;
  const $reversed = dartx.reversed;
  const $setAll = dartx.setAll;
  const $setRange = dartx.setRange;
  const $shuffle = dartx.shuffle;
  const $sort = dartx.sort;
  const $sublist = dartx.sublist;
  const $contains = dartx.contains;
  const $elementAt = dartx.elementAt;
  const $every = dartx.every;
  const $expand = dartx.expand;
  const $first = dartx.first;
  const $firstWhere = dartx.firstWhere;
  const $fold = dartx.fold;
  const $join = dartx.join;
  const $lastWhere = dartx.lastWhere;
  const $reduce = dartx.reduce;
  const $single = dartx.single;
  const $skip = dartx.skip;
  const $skipWhile = dartx.skipWhile;
  const $take = dartx.take;
  const $takeWhile = dartx.takeWhile;
  const $toList = dartx.toList;
  const $toSet = dartx.toSet;
  const $where = dartx.where;
  const $whereType = dartx.whereType;
  let ObjectTobool = () => (ObjectTobool = dart.constFn(dart.fnType(core.bool, [core.Object])))();
  let dynamicTobool = () => (dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))();
  const _canonicalize = dart.privateName(src__canonicalized_map, "_canonicalize");
  const _isValidKeyFn = dart.privateName(src__canonicalized_map, "_isValidKeyFn");
  const _base = dart.privateName(src__canonicalized_map, "_base");
  const _isValidKey = dart.privateName(src__canonicalized_map, "_isValidKey");
  const _is_CanonicalizedMap_default = Symbol('_is_CanonicalizedMap_default');
  src__canonicalized_map.CanonicalizedMap$ = dart.generic((C, K, V) => {
    let LinkedMapOfC$PairOfK$V = () => (LinkedMapOfC$PairOfK$V = dart.constFn(_js_helper.LinkedMap$(C, PairOfK$V())))();
    let MapEntryOfC$PairOfK$V = () => (MapEntryOfC$PairOfK$V = dart.constFn(core.MapEntry$(C, PairOfK$V())))();
    let MapEntryOfK$VToMapEntryOfC$PairOfK$V = () => (MapEntryOfK$VToMapEntryOfC$PairOfK$V = dart.constFn(dart.fnType(MapEntryOfC$PairOfK$V(), [MapEntryOfK$V()])))();
    let IterableOfMapEntryOfC$PairOfK$V = () => (IterableOfMapEntryOfC$PairOfK$V = dart.constFn(core.Iterable$(MapEntryOfC$PairOfK$V())))();
    let MapEntryOfC$PairOfK$VToMapEntryOfK$V = () => (MapEntryOfC$PairOfK$VToMapEntryOfK$V = dart.constFn(dart.fnType(MapEntryOfK$V(), [MapEntryOfC$PairOfK$V()])))();
    let CAndPairOfK$VTovoid = () => (CAndPairOfK$VTovoid = dart.constFn(dart.fnType(dart.void, [C, PairOfK$V()])))();
    let CAndPairOfK$VTobool = () => (CAndPairOfK$VTobool = dart.constFn(dart.fnType(core.bool, [C, PairOfK$V()])))();
    let CAndPairOfK$VToPairOfK$V = () => (CAndPairOfK$VToPairOfK$V = dart.constFn(dart.fnType(PairOfK$V(), [C, PairOfK$V()])))();
    let KToC = () => (KToC = dart.constFn(dart.fnType(C, [K])))();
    let MapOfC$PairOfK$V = () => (MapOfC$PairOfK$V = dart.constFn(core.Map$(C, PairOfK$V())))();
    let PairOfK$V = () => (PairOfK$V = dart.constFn(src__utils.Pair$(K, V)))();
    let MapOfK$V = () => (MapOfK$V = dart.constFn(core.Map$(K, V)))();
    let KAndVToV = () => (KAndVToV = dart.constFn(dart.fnType(V, [K, V])))();
    let MapEntryOfK$V = () => (MapEntryOfK$V = dart.constFn(core.MapEntry$(K, V)))();
    let IterableOfMapEntryOfK$V = () => (IterableOfMapEntryOfK$V = dart.constFn(core.Iterable$(MapEntryOfK$V())))();
    let PairOfK$VTobool = () => (PairOfK$VTobool = dart.constFn(dart.fnType(core.bool, [PairOfK$V()])))();
    let PairOfK$VToK = () => (PairOfK$VToK = dart.constFn(dart.fnType(K, [PairOfK$V()])))();
    let IterableOfK = () => (IterableOfK = dart.constFn(core.Iterable$(K)))();
    let VoidToPairOfK$V = () => (VoidToPairOfK$V = dart.constFn(dart.fnType(PairOfK$V(), [])))();
    let PairOfK$VToPairOfK$V = () => (PairOfK$VToPairOfK$V = dart.constFn(dart.fnType(PairOfK$V(), [PairOfK$V()])))();
    let PairOfK$VToV = () => (PairOfK$VToV = dart.constFn(dart.fnType(V, [PairOfK$V()])))();
    let KAndVToNull = () => (KAndVToNull = dart.constFn(dart.fnType(core.Null, [K, V])))();
    let VoidToV = () => (VoidToV = dart.constFn(dart.fnType(V, [])))();
    let VToV = () => (VToV = dart.constFn(dart.fnType(V, [V])))();
    let IterableOfV = () => (IterableOfV = dart.constFn(core.Iterable$(V)))();
    class CanonicalizedMap extends core.Object {
      _get(key) {
        if (!dart.test(this[_isValidKey](key))) return null;
        let pair = this[_base][$_get](this[_canonicalize](K.as(key)));
        return pair == null ? null : pair.last;
      }
      _set(key, value) {
        K._check(key);
        V._check(value);
        if (!dart.test(this[_isValidKey](key))) return value;
        this[_base][$_set](this[_canonicalize](key), new (PairOfK$V()).new(key, value));
        return value;
      }
      addAll(other) {
        MapOfK$V()._check(other);
        other[$forEach](dart.fn((key, value) => this._set(key, value), KAndVToV()));
      }
      addEntries(entries) {
        IterableOfMapEntryOfK$V()._check(entries);
        return this[_base][$addEntries](IterableOfMapEntryOfC$PairOfK$V()._check(entries[$map](MapEntryOfC$PairOfK$V(), dart.fn(e => MapEntryOfC$PairOfK$V().new(this[_canonicalize](e.key), new (PairOfK$V()).new(e.key, e.value)), MapEntryOfK$VToMapEntryOfC$PairOfK$V()))));
      }
      cast(K2, V2) {
        return core.Map$(K2, V2)._check(this[_base][$cast](K2, V2));
      }
      clear() {
        this[_base][$clear]();
      }
      containsKey(key) {
        if (!dart.test(this[_isValidKey](key))) return false;
        return this[_base][$containsKey](this[_canonicalize](K.as(key)));
      }
      containsValue(value) {
        return this[_base][$values][$any](dart.fn(pair => dart.equals(pair.last, value), PairOfK$VTobool()));
      }
      get entries() {
        return IterableOfMapEntryOfK$V()._check(this[_base][$entries][$map](MapEntryOfK$V(), dart.fn(e => MapEntryOfK$V().new(e.value.first, e.value.last), MapEntryOfC$PairOfK$VToMapEntryOfK$V())));
      }
      forEach(f) {
        this[_base][$forEach](dart.fn((key, pair) => f(pair.first, pair.last), CAndPairOfK$VTovoid()));
      }
      get isEmpty() {
        return this[_base][$isEmpty];
      }
      get isNotEmpty() {
        return this[_base][$isNotEmpty];
      }
      get keys() {
        return IterableOfK()._check(this[_base][$values][$map](K, dart.fn(pair => pair.first, PairOfK$VToK())));
      }
      get length() {
        return this[_base][$length];
      }
      map(K2, V2, transform) {
        return core.Map$(K2, V2)._check(this[_base][$map](K2, V2, dart.fn((_, pair) => transform(pair.first, pair.last), dart.fnType(core.MapEntry$(K2, V2), [C, PairOfK$V()]))));
      }
      putIfAbsent(key, ifAbsent) {
        K._check(key);
        VoidToV()._check(ifAbsent);
        return this[_base][$putIfAbsent](this[_canonicalize](key), dart.fn(() => new (PairOfK$V()).new(key, ifAbsent()), VoidToPairOfK$V())).last;
      }
      remove(key) {
        if (!dart.test(this[_isValidKey](key))) return null;
        let pair = this[_base][$remove](this[_canonicalize](K.as(key)));
        return pair == null ? null : pair.last;
      }
      removeWhere(test) {
        return this[_base][$removeWhere](dart.fn((_, pair) => test(pair.first, pair.last), CAndPairOfK$VTobool()));
      }
      retype(K2, V2) {
        return this.cast(K2, V2);
      }
      update(key, update, opts) {
        K._check(key);
        VToV()._check(update);
        let ifAbsent = opts && 'ifAbsent' in opts ? opts.ifAbsent : null;
        VoidToV()._check(ifAbsent);
        return this[_base][$update](this[_canonicalize](key), dart.fn(pair => new (PairOfK$V()).new(key, update(pair.last)), PairOfK$VToPairOfK$V()), {ifAbsent: ifAbsent == null ? null : dart.fn(() => new (PairOfK$V()).new(key, ifAbsent()), VoidToPairOfK$V())}).last;
      }
      updateAll(update) {
        KAndVToV()._check(update);
        return this[_base][$updateAll](dart.fn((_, pair) => new (PairOfK$V()).new(pair.first, update(pair.first, pair.last)), CAndPairOfK$VToPairOfK$V()));
      }
      get values() {
        return IterableOfV()._check(this[_base][$values][$map](V, dart.fn(pair => pair.last, PairOfK$VToV())));
      }
      toString() {
        if (dart.test(src__canonicalized_map._isToStringVisiting(this))) {
          return "{...}";
        }
        let result = new core.StringBuffer.new();
        try {
          src__canonicalized_map._toStringVisiting[$add](this);
          result.write("{");
          let first = true;
          this.forEach(dart.fn((k, v) => {
            if (!first) {
              result.write(", ");
            }
            first = false;
            result.write(dart.str(k) + ": " + dart.str(v));
          }, KAndVToNull()));
          result.write("}");
        } finally {
          if (!(src__canonicalized_map._toStringVisiting[$last] === this)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/collection/src/canonicalized_map.dart", 156, 14, "identical(_toStringVisiting.last, this)");
          src__canonicalized_map._toStringVisiting[$removeLast]();
        }
        return result.toString();
      }
      [_isValidKey](key) {
        return (key == null || K.is(key)) && (this[_isValidKeyFn] == null || dart.test(this[_isValidKeyFn](key)));
      }
    }
    (CanonicalizedMap.new = function(canonicalize, opts) {
      let isValidKey = opts && 'isValidKey' in opts ? opts.isValidKey : null;
      this[_base] = new (LinkedMapOfC$PairOfK$V()).new();
      this[_canonicalize] = canonicalize;
      this[_isValidKeyFn] = isValidKey;
    }).prototype = CanonicalizedMap.prototype;
    (CanonicalizedMap.from = function(other, canonicalize, opts) {
      let isValidKey = opts && 'isValidKey' in opts ? opts.isValidKey : null;
      this[_base] = new (LinkedMapOfC$PairOfK$V()).new();
      this[_canonicalize] = canonicalize;
      this[_isValidKeyFn] = isValidKey;
      this.addAll(other);
    }).prototype = CanonicalizedMap.prototype;
    CanonicalizedMap.prototype[dart.isMap] = true;
    dart.addTypeTests(CanonicalizedMap);
    CanonicalizedMap.prototype[_is_CanonicalizedMap_default] = true;
    CanonicalizedMap[dart.implements] = () => [MapOfK$V()];
    dart.setMethodSignature(CanonicalizedMap, () => ({
      __proto__: dart.getMethods(CanonicalizedMap.__proto__),
      _get: dart.fnType(V, [core.Object]),
      [$_get]: dart.fnType(V, [core.Object]),
      _set: dart.fnType(dart.void, [core.Object, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.Object, core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      [$addAll]: dart.fnType(dart.void, [core.Object]),
      addEntries: dart.fnType(dart.void, [core.Object]),
      [$addEntries]: dart.fnType(dart.void, [core.Object]),
      cast: dart.gFnType((K2, V2) => [core.Map$(K2, V2), []]),
      [$cast]: dart.gFnType((K2, V2) => [core.Map$(K2, V2), []]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, []),
      containsKey: dart.fnType(core.bool, [core.Object]),
      [$containsKey]: dart.fnType(core.bool, [core.Object]),
      containsValue: dart.fnType(core.bool, [core.Object]),
      [$containsValue]: dart.fnType(core.bool, [core.Object]),
      forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [K, V])]),
      [$forEach]: dart.fnType(dart.void, [dart.fnType(dart.void, [K, V])]),
      map: dart.gFnType((K2, V2) => [core.Map$(K2, V2), [dart.fnType(core.MapEntry$(K2, V2), [K, V])]]),
      [$map]: dart.gFnType((K2, V2) => [core.Map$(K2, V2), [dart.fnType(core.MapEntry$(K2, V2), [K, V])]]),
      putIfAbsent: dart.fnType(V, [core.Object, core.Object]),
      [$putIfAbsent]: dart.fnType(V, [core.Object, core.Object]),
      remove: dart.fnType(V, [core.Object]),
      [$remove]: dart.fnType(V, [core.Object]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [K, V])]),
      [$removeWhere]: dart.fnType(dart.void, [dart.fnType(core.bool, [K, V])]),
      retype: dart.gFnType((K2, V2) => [core.Map$(K2, V2), []]),
      update: dart.fnType(V, [core.Object, core.Object], {ifAbsent: core.Object}),
      [$update]: dart.fnType(V, [core.Object, core.Object], {ifAbsent: core.Object}),
      updateAll: dart.fnType(dart.void, [core.Object]),
      [$updateAll]: dart.fnType(dart.void, [core.Object]),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, []),
      [_isValidKey]: dart.fnType(core.bool, [core.Object])
    }));
    dart.setGetterSignature(CanonicalizedMap, () => ({
      __proto__: dart.getGetters(CanonicalizedMap.__proto__),
      entries: core.Iterable$(core.MapEntry$(K, V)),
      [$entries]: core.Iterable$(core.MapEntry$(K, V)),
      isEmpty: core.bool,
      [$isEmpty]: core.bool,
      isNotEmpty: core.bool,
      [$isNotEmpty]: core.bool,
      keys: core.Iterable$(K),
      [$keys]: core.Iterable$(K),
      length: core.int,
      [$length]: core.int,
      values: core.Iterable$(V),
      [$values]: core.Iterable$(V)
    }));
    dart.setLibraryUri(CanonicalizedMap, "package:collection/src/canonicalized_map.dart");
    dart.setFieldSignature(CanonicalizedMap, () => ({
      __proto__: dart.getFields(CanonicalizedMap.__proto__),
      [_canonicalize]: dart.finalFieldType(KToC()),
      [_isValidKeyFn]: dart.finalFieldType(ObjectTobool()),
      [_base]: dart.finalFieldType(MapOfC$PairOfK$V())
    }));
    dart.defineExtensionMethods(CanonicalizedMap, [
      '_get',
      '_set',
      'addAll',
      'addEntries',
      'cast',
      'clear',
      'containsKey',
      'containsValue',
      'forEach',
      'map',
      'putIfAbsent',
      'remove',
      'removeWhere',
      'update',
      'updateAll',
      'toString'
    ]);
    dart.defineExtensionAccessors(CanonicalizedMap, [
      'entries',
      'isEmpty',
      'isNotEmpty',
      'keys',
      'length',
      'values'
    ]);
    return CanonicalizedMap;
  });
  src__canonicalized_map.CanonicalizedMap = src__canonicalized_map.CanonicalizedMap$();
  dart.addTypeTests(src__canonicalized_map.CanonicalizedMap, _is_CanonicalizedMap_default);
  dart.defineLazy(src__canonicalized_map, {
    /*src__canonicalized_map._toStringVisiting*/get _toStringVisiting() {
      return [];
    }
  });
  src__canonicalized_map._isToStringVisiting = function(o) {
    return src__canonicalized_map._toStringVisiting[$any](dart.fn(e => core.identical(o, e), dynamicTobool()));
  };
  const _is_EmptyUnmodifiableSet_default = Symbol('_is_EmptyUnmodifiableSet_default');
  src__empty_unmodifiable_set.EmptyUnmodifiableSet$ = dart.generic(E => {
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    let SetOfE = () => (SetOfE = dart.constFn(core.Set$(E)))();
    let VoidToE = () => (VoidToE = dart.constFn(dart.fnType(E, [])))();
    let _HashSetOfE = () => (_HashSetOfE = dart.constFn(collection._HashSet$(E)))();
    let UnmodifiableSetViewOfE = () => (UnmodifiableSetViewOfE = dart.constFn(src__unmodifiable_wrappers.UnmodifiableSetView$(E)))();
    class EmptyUnmodifiableSet extends collection.IterableBase$(E) {
      static _throw(T) {
        dart.throw(new core.UnsupportedError.new("Cannot modify an unmodifiable Set"));
      }
      get iterator() {
        return IterableOfE().empty()[$iterator];
      }
      get length() {
        return 0;
      }
      cast(T) {
        return new (src__empty_unmodifiable_set.EmptyUnmodifiableSet$(T)).new();
      }
      contains(element) {
        return false;
      }
      containsAll(other) {
        return other[$isEmpty];
      }
      followedBy(other) {
        IterableOfE()._check(other);
        return SetOfE().from(other);
      }
      lookup(element) {
        return null;
      }
      retype(T) {
        return new (src__empty_unmodifiable_set.EmptyUnmodifiableSet$(T)).new();
      }
      singleWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return super.singleWhere(test);
      }
      whereType(T) {
        return new (src__empty_unmodifiable_set.EmptyUnmodifiableSet$(T)).new();
      }
      toSet() {
        return new (_HashSetOfE()).new();
      }
      union(other) {
        SetOfE()._check(other);
        return SetOfE().from(other);
      }
      intersection(other) {
        return new (_HashSetOfE()).new();
      }
      difference(other) {
        return new (_HashSetOfE()).new();
      }
      add(value) {
        E._check(value);
        return src__empty_unmodifiable_set.EmptyUnmodifiableSet._throw(core.bool);
      }
      addAll(elements) {
        IterableOfE()._check(elements);
        return src__empty_unmodifiable_set.EmptyUnmodifiableSet._throw(dart.void);
      }
      clear() {
        return src__empty_unmodifiable_set.EmptyUnmodifiableSet._throw(dart.void);
      }
      remove(element) {
        return src__empty_unmodifiable_set.EmptyUnmodifiableSet._throw(core.bool);
      }
      removeAll(elements) {
        return src__empty_unmodifiable_set.EmptyUnmodifiableSet._throw(dart.void);
      }
      removeWhere(test) {
        return src__empty_unmodifiable_set.EmptyUnmodifiableSet._throw(dart.void);
      }
      retainWhere(test) {
        return src__empty_unmodifiable_set.EmptyUnmodifiableSet._throw(dart.void);
      }
      retainAll(elements) {
        return src__empty_unmodifiable_set.EmptyUnmodifiableSet._throw(dart.void);
      }
    }
    (EmptyUnmodifiableSet.new = function() {
      EmptyUnmodifiableSet.__proto__.new.call(this);
    }).prototype = EmptyUnmodifiableSet.prototype;
    dart.addTypeTests(EmptyUnmodifiableSet);
    EmptyUnmodifiableSet.prototype[_is_EmptyUnmodifiableSet_default] = true;
    EmptyUnmodifiableSet[dart.implements] = () => [UnmodifiableSetViewOfE()];
    dart.setMethodSignature(EmptyUnmodifiableSet, () => ({
      __proto__: dart.getMethods(EmptyUnmodifiableSet.__proto__),
      cast: dart.gFnType(T => [src__empty_unmodifiable_set.EmptyUnmodifiableSet$(T), []]),
      [$cast]: dart.gFnType(T => [src__empty_unmodifiable_set.EmptyUnmodifiableSet$(T), []]),
      containsAll: dart.fnType(core.bool, [core.Iterable$(core.Object)]),
      followedBy: dart.fnType(core.Iterable$(E), [core.Object]),
      [$followedBy]: dart.fnType(core.Iterable$(E), [core.Object]),
      lookup: dart.fnType(E, [core.Object]),
      retype: dart.gFnType(T => [src__empty_unmodifiable_set.EmptyUnmodifiableSet$(T), []]),
      singleWhere: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}),
      [$singleWhere]: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}),
      union: dart.fnType(core.Set$(E), [core.Object]),
      intersection: dart.fnType(core.Set$(E), [core.Set$(core.Object)]),
      difference: dart.fnType(core.Set$(E), [core.Set$(core.Object)]),
      add: dart.fnType(core.bool, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      clear: dart.fnType(dart.void, []),
      remove: dart.fnType(core.bool, [core.Object]),
      removeAll: dart.fnType(dart.void, [core.Iterable$(core.Object)]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      retainAll: dart.fnType(dart.void, [core.Iterable$(core.Object)])
    }));
    dart.setGetterSignature(EmptyUnmodifiableSet, () => ({
      __proto__: dart.getGetters(EmptyUnmodifiableSet.__proto__),
      iterator: core.Iterator$(E),
      [$iterator]: core.Iterator$(E)
    }));
    dart.setLibraryUri(EmptyUnmodifiableSet, "package:collection/src/empty_unmodifiable_set.dart");
    dart.defineExtensionMethods(EmptyUnmodifiableSet, [
      'cast',
      'contains',
      'followedBy',
      'singleWhere',
      'whereType',
      'toSet'
    ]);
    dart.defineExtensionAccessors(EmptyUnmodifiableSet, ['iterator', 'length']);
    return EmptyUnmodifiableSet;
  });
  src__empty_unmodifiable_set.EmptyUnmodifiableSet = src__empty_unmodifiable_set.EmptyUnmodifiableSet$();
  dart.addTypeTests(src__empty_unmodifiable_set.EmptyUnmodifiableSet, _is_EmptyUnmodifiableSet_default);
  const _base$ = dart.privateName(src__wrappers, "_base");
  const _listBase = dart.privateName(src__wrappers, "_listBase");
  const _is__DelegatingIterableBase_default = Symbol('_is__DelegatingIterableBase_default');
  src__wrappers._DelegatingIterableBase$ = dart.generic(E => {
    let VoidToE = () => (VoidToE = dart.constFn(dart.fnType(E, [])))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    let EAndEToE = () => (EAndEToE = dart.constFn(dart.fnType(E, [E, E])))();
    class _DelegatingIterableBase extends core.Object {
      any(test) {
        return this[_base$][$any](test);
      }
      cast(T) {
        return core.Iterable$(T)._check(this[_base$][$cast](T));
      }
      contains(element) {
        return this[_base$][$contains](element);
      }
      elementAt(index) {
        return this[_base$][$elementAt](index);
      }
      every(test) {
        return this[_base$][$every](test);
      }
      expand(T, f) {
        return core.Iterable$(T)._check(this[_base$][$expand](T, f));
      }
      get first() {
        return this[_base$][$first];
      }
      firstWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this[_base$][$firstWhere](test, {orElse: orElse});
      }
      fold(T, initialValue, combine) {
        return T._check(this[_base$][$fold](T, initialValue, combine));
      }
      followedBy(other) {
        IterableOfE()._check(other);
        return this[_base$][$followedBy](other);
      }
      forEach(f) {
        return this[_base$][$forEach](f);
      }
      get isEmpty() {
        return this[_base$][$isEmpty];
      }
      get isNotEmpty() {
        return this[_base$][$isNotEmpty];
      }
      get iterator() {
        return this[_base$][$iterator];
      }
      [Symbol.iterator]() {
        return new dart.JsIterator(this.iterator);
      }
      join(separator) {
        if (separator === void 0) separator = "";
        return this[_base$][$join](separator);
      }
      get last() {
        return this[_base$][$last];
      }
      lastWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this[_base$][$lastWhere](test, {orElse: orElse});
      }
      get length() {
        return this[_base$][$length];
      }
      map(T, f) {
        return core.Iterable$(T)._check(this[_base$][$map](T, f));
      }
      reduce(combine) {
        EAndEToE()._check(combine);
        return this[_base$][$reduce](combine);
      }
      retype(T) {
        return this.cast(T);
      }
      get single() {
        return this[_base$][$single];
      }
      singleWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this[_base$][$singleWhere](test, {orElse: orElse});
      }
      skip(n) {
        return this[_base$][$skip](n);
      }
      skipWhile(test) {
        return this[_base$][$skipWhile](test);
      }
      take(n) {
        return this[_base$][$take](n);
      }
      takeWhile(test) {
        return this[_base$][$takeWhile](test);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        return this[_base$][$toList]({growable: growable});
      }
      toSet() {
        return this[_base$][$toSet]();
      }
      where(test) {
        return this[_base$][$where](test);
      }
      whereType(T) {
        return core.Iterable$(T)._check(this[_base$][$whereType](T));
      }
      toString() {
        return dart.toString(this[_base$]);
      }
    }
    (_DelegatingIterableBase.new = function() {
    }).prototype = _DelegatingIterableBase.prototype;
    _DelegatingIterableBase.prototype[dart.isIterable] = true;
    dart.addTypeTests(_DelegatingIterableBase);
    _DelegatingIterableBase.prototype[_is__DelegatingIterableBase_default] = true;
    _DelegatingIterableBase[dart.implements] = () => [IterableOfE()];
    dart.setMethodSignature(_DelegatingIterableBase, () => ({
      __proto__: dart.getMethods(_DelegatingIterableBase.__proto__),
      any: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      [$any]: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      cast: dart.gFnType(T => [core.Iterable$(T), []]),
      [$cast]: dart.gFnType(T => [core.Iterable$(T), []]),
      contains: dart.fnType(core.bool, [core.Object]),
      [$contains]: dart.fnType(core.bool, [core.Object]),
      elementAt: dart.fnType(E, [core.int]),
      [$elementAt]: dart.fnType(E, [core.int]),
      every: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      [$every]: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      expand: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(core.Iterable$(T), [E])]]),
      [$expand]: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(core.Iterable$(T), [E])]]),
      firstWhere: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}),
      [$firstWhere]: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}),
      fold: dart.gFnType(T => [T, [T, dart.fnType(T, [T, E])]]),
      [$fold]: dart.gFnType(T => [T, [T, dart.fnType(T, [T, E])]]),
      followedBy: dart.fnType(core.Iterable$(E), [core.Object]),
      [$followedBy]: dart.fnType(core.Iterable$(E), [core.Object]),
      forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [E])]),
      [$forEach]: dart.fnType(dart.void, [dart.fnType(dart.void, [E])]),
      join: dart.fnType(core.String, [], [core.String]),
      [$join]: dart.fnType(core.String, [], [core.String]),
      lastWhere: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}),
      [$lastWhere]: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}),
      map: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(T, [E])]]),
      [$map]: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(T, [E])]]),
      reduce: dart.fnType(E, [core.Object]),
      [$reduce]: dart.fnType(E, [core.Object]),
      retype: dart.gFnType(T => [core.Iterable$(T), []]),
      singleWhere: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}),
      [$singleWhere]: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}),
      skip: dart.fnType(core.Iterable$(E), [core.int]),
      [$skip]: dart.fnType(core.Iterable$(E), [core.int]),
      skipWhile: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      [$skipWhile]: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      take: dart.fnType(core.Iterable$(E), [core.int]),
      [$take]: dart.fnType(core.Iterable$(E), [core.int]),
      takeWhile: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      [$takeWhile]: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      toList: dart.fnType(core.List$(E), [], {growable: core.bool}),
      [$toList]: dart.fnType(core.List$(E), [], {growable: core.bool}),
      toSet: dart.fnType(core.Set$(E), []),
      [$toSet]: dart.fnType(core.Set$(E), []),
      where: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      [$where]: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      whereType: dart.gFnType(T => [core.Iterable$(T), []]),
      [$whereType]: dart.gFnType(T => [core.Iterable$(T), []]),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, [])
    }));
    dart.setGetterSignature(_DelegatingIterableBase, () => ({
      __proto__: dart.getGetters(_DelegatingIterableBase.__proto__),
      first: E,
      [$first]: E,
      isEmpty: core.bool,
      [$isEmpty]: core.bool,
      isNotEmpty: core.bool,
      [$isNotEmpty]: core.bool,
      iterator: core.Iterator$(E),
      [$iterator]: core.Iterator$(E),
      last: E,
      [$last]: E,
      length: core.int,
      [$length]: core.int,
      single: E,
      [$single]: E
    }));
    dart.setLibraryUri(_DelegatingIterableBase, "package:collection/src/wrappers.dart");
    dart.defineExtensionMethods(_DelegatingIterableBase, [
      'any',
      'cast',
      'contains',
      'elementAt',
      'every',
      'expand',
      'firstWhere',
      'fold',
      'followedBy',
      'forEach',
      'join',
      'lastWhere',
      'map',
      'reduce',
      'singleWhere',
      'skip',
      'skipWhile',
      'take',
      'takeWhile',
      'toList',
      'toSet',
      'where',
      'whereType',
      'toString'
    ]);
    dart.defineExtensionAccessors(_DelegatingIterableBase, [
      'first',
      'isEmpty',
      'isNotEmpty',
      'iterator',
      'last',
      'length',
      'single'
    ]);
    return _DelegatingIterableBase;
  });
  src__wrappers._DelegatingIterableBase = src__wrappers._DelegatingIterableBase$();
  dart.addTypeTests(src__wrappers._DelegatingIterableBase, _is__DelegatingIterableBase_default);
  const _is_DelegatingIterable_default = Symbol('_is_DelegatingIterable_default');
  src__wrappers.DelegatingIterable$ = dart.generic(E => {
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    class DelegatingIterable extends src__wrappers._DelegatingIterableBase$(E) {
      static typed(E, base) {
        return core.Iterable$(E)._check(base[$cast](E));
      }
    }
    (DelegatingIterable.new = function(base) {
      this[_base$] = base;
      DelegatingIterable.__proto__.new.call(this);
    }).prototype = DelegatingIterable.prototype;
    dart.addTypeTests(DelegatingIterable);
    DelegatingIterable.prototype[_is_DelegatingIterable_default] = true;
    dart.setLibraryUri(DelegatingIterable, "package:collection/src/wrappers.dart");
    dart.setFieldSignature(DelegatingIterable, () => ({
      __proto__: dart.getFields(DelegatingIterable.__proto__),
      [_base$]: dart.finalFieldType(IterableOfE())
    }));
    return DelegatingIterable;
  });
  src__wrappers.DelegatingIterable = src__wrappers.DelegatingIterable$();
  dart.addTypeTests(src__wrappers.DelegatingIterable, _is_DelegatingIterable_default);
  const _is_DelegatingList_default = Symbol('_is_DelegatingList_default');
  src__wrappers.DelegatingList$ = dart.generic(E => {
    let ListOfE = () => (ListOfE = dart.constFn(core.List$(E)))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    class DelegatingList extends src__wrappers.DelegatingIterable$(E) {
      static typed(E, base) {
        return core.List$(E)._check(base[$cast](E));
      }
      get [_listBase]() {
        return ListOfE()._check(this[_base$]);
      }
      _get(index) {
        return this[_listBase][$_get](index);
      }
      _set(index, value) {
        E._check(value);
        this[_listBase][$_set](index, value);
        return value;
      }
      ['+'](other) {
        ListOfE()._check(other);
        return this[_listBase][$plus](other);
      }
      add(value) {
        E._check(value);
        this[_listBase][$add](value);
      }
      addAll(iterable) {
        IterableOfE()._check(iterable);
        this[_listBase][$addAll](iterable);
      }
      asMap() {
        return this[_listBase][$asMap]();
      }
      cast(T) {
        return core.List$(T)._check(this[_listBase][$cast](T));
      }
      clear() {
        this[_listBase][$clear]();
      }
      fillRange(start, end, fillValue) {
        if (fillValue === void 0) fillValue = null;
        E._check(fillValue);
        this[_listBase][$fillRange](start, end, fillValue);
      }
      set first(value) {
        E._check(value);
        if (dart.test(this.isEmpty)) dart.throw(core.RangeError.index(0, this));
        this._set(0, value);
      }
      get first() {
        return super.first;
      }
      getRange(start, end) {
        return this[_listBase][$getRange](start, end);
      }
      indexOf(element, start) {
        E._check(element);
        if (start === void 0) start = 0;
        return this[_listBase][$indexOf](element, start);
      }
      indexWhere(test, start) {
        if (start === void 0) start = 0;
        return this[_listBase][$indexWhere](test, start);
      }
      insert(index, element) {
        E._check(element);
        this[_listBase][$insert](index, element);
      }
      insertAll(index, iterable) {
        IterableOfE()._check(iterable);
        this[_listBase][$insertAll](index, iterable);
      }
      set last(value) {
        E._check(value);
        if (dart.test(this.isEmpty)) dart.throw(core.RangeError.index(0, this));
        this._set(dart.notNull(this.length) - 1, value);
      }
      get last() {
        return super.last;
      }
      lastIndexOf(element, start) {
        E._check(element);
        if (start === void 0) start = null;
        return this[_listBase][$lastIndexOf](element, start);
      }
      lastIndexWhere(test, start) {
        if (start === void 0) start = null;
        return this[_listBase][$lastIndexWhere](test, start);
      }
      set length(newLength) {
        this[_listBase][$length] = newLength;
      }
      get length() {
        return super.length;
      }
      remove(value) {
        return this[_listBase][$remove](value);
      }
      removeAt(index) {
        return this[_listBase][$removeAt](index);
      }
      removeLast() {
        return this[_listBase][$removeLast]();
      }
      removeRange(start, end) {
        this[_listBase][$removeRange](start, end);
      }
      removeWhere(test) {
        this[_listBase][$removeWhere](test);
      }
      replaceRange(start, end, iterable) {
        IterableOfE()._check(iterable);
        this[_listBase][$replaceRange](start, end, iterable);
      }
      retainWhere(test) {
        this[_listBase][$retainWhere](test);
      }
      retype(T) {
        return this.cast(T);
      }
      get reversed() {
        return this[_listBase][$reversed];
      }
      setAll(index, iterable) {
        IterableOfE()._check(iterable);
        this[_listBase][$setAll](index, iterable);
      }
      setRange(start, end, iterable, skipCount) {
        IterableOfE()._check(iterable);
        if (skipCount === void 0) skipCount = 0;
        this[_listBase][$setRange](start, end, iterable, skipCount);
      }
      shuffle(random) {
        if (random === void 0) random = null;
        this[_listBase][$shuffle](random);
      }
      sort(compare) {
        if (compare === void 0) compare = null;
        this[_listBase][$sort](compare);
      }
      sublist(start, end) {
        if (end === void 0) end = null;
        return this[_listBase][$sublist](start, end);
      }
    }
    (DelegatingList.new = function(base) {
      DelegatingList.__proto__.new.call(this, base);
    }).prototype = DelegatingList.prototype;
    DelegatingList.prototype[dart.isList] = true;
    dart.addTypeTests(DelegatingList);
    DelegatingList.prototype[_is_DelegatingList_default] = true;
    DelegatingList[dart.implements] = () => [ListOfE()];
    dart.setMethodSignature(DelegatingList, () => ({
      __proto__: dart.getMethods(DelegatingList.__proto__),
      _get: dart.fnType(E, [core.int]),
      [$_get]: dart.fnType(E, [core.int]),
      _set: dart.fnType(dart.void, [core.int, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.int, core.Object]),
      '+': dart.fnType(core.List$(E), [core.Object]),
      [$plus]: dart.fnType(core.List$(E), [core.Object]),
      add: dart.fnType(dart.void, [core.Object]),
      [$add]: dart.fnType(dart.void, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      [$addAll]: dart.fnType(dart.void, [core.Object]),
      asMap: dart.fnType(core.Map$(core.int, E), []),
      [$asMap]: dart.fnType(core.Map$(core.int, E), []),
      cast: dart.gFnType(T => [core.List$(T), []]),
      [$cast]: dart.gFnType(T => [core.List$(T), []]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, []),
      fillRange: dart.fnType(dart.void, [core.int, core.int], [core.Object]),
      [$fillRange]: dart.fnType(dart.void, [core.int, core.int], [core.Object]),
      getRange: dart.fnType(core.Iterable$(E), [core.int, core.int]),
      [$getRange]: dart.fnType(core.Iterable$(E), [core.int, core.int]),
      indexOf: dart.fnType(core.int, [core.Object], [core.int]),
      [$indexOf]: dart.fnType(core.int, [core.Object], [core.int]),
      indexWhere: dart.fnType(core.int, [dart.fnType(core.bool, [E])], [core.int]),
      [$indexWhere]: dart.fnType(core.int, [dart.fnType(core.bool, [E])], [core.int]),
      insert: dart.fnType(dart.void, [core.int, core.Object]),
      [$insert]: dart.fnType(dart.void, [core.int, core.Object]),
      insertAll: dart.fnType(dart.void, [core.int, core.Object]),
      [$insertAll]: dart.fnType(dart.void, [core.int, core.Object]),
      lastIndexOf: dart.fnType(core.int, [core.Object], [core.int]),
      [$lastIndexOf]: dart.fnType(core.int, [core.Object], [core.int]),
      lastIndexWhere: dart.fnType(core.int, [dart.fnType(core.bool, [E])], [core.int]),
      [$lastIndexWhere]: dart.fnType(core.int, [dart.fnType(core.bool, [E])], [core.int]),
      remove: dart.fnType(core.bool, [core.Object]),
      [$remove]: dart.fnType(core.bool, [core.Object]),
      removeAt: dart.fnType(E, [core.int]),
      [$removeAt]: dart.fnType(E, [core.int]),
      removeLast: dart.fnType(E, []),
      [$removeLast]: dart.fnType(E, []),
      removeRange: dart.fnType(dart.void, [core.int, core.int]),
      [$removeRange]: dart.fnType(dart.void, [core.int, core.int]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      [$removeWhere]: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      replaceRange: dart.fnType(dart.void, [core.int, core.int, core.Object]),
      [$replaceRange]: dart.fnType(dart.void, [core.int, core.int, core.Object]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      [$retainWhere]: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      retype: dart.gFnType(T => [core.List$(T), []]),
      setAll: dart.fnType(dart.void, [core.int, core.Object]),
      [$setAll]: dart.fnType(dart.void, [core.int, core.Object]),
      setRange: dart.fnType(dart.void, [core.int, core.int, core.Object], [core.int]),
      [$setRange]: dart.fnType(dart.void, [core.int, core.int, core.Object], [core.int]),
      shuffle: dart.fnType(dart.void, [], [math.Random]),
      [$shuffle]: dart.fnType(dart.void, [], [math.Random]),
      sort: dart.fnType(dart.void, [], [dart.fnType(core.int, [E, E])]),
      [$sort]: dart.fnType(dart.void, [], [dart.fnType(core.int, [E, E])]),
      sublist: dart.fnType(core.List$(E), [core.int], [core.int]),
      [$sublist]: dart.fnType(core.List$(E), [core.int], [core.int])
    }));
    dart.setGetterSignature(DelegatingList, () => ({
      __proto__: dart.getGetters(DelegatingList.__proto__),
      [_listBase]: core.List$(E),
      reversed: core.Iterable$(E),
      [$reversed]: core.Iterable$(E)
    }));
    dart.setSetterSignature(DelegatingList, () => ({
      __proto__: dart.getSetters(DelegatingList.__proto__),
      first: E,
      [$first]: E,
      last: E,
      [$last]: E,
      length: core.int,
      [$length]: core.int
    }));
    dart.setLibraryUri(DelegatingList, "package:collection/src/wrappers.dart");
    dart.defineExtensionMethods(DelegatingList, [
      '_get',
      '_set',
      '+',
      'add',
      'addAll',
      'asMap',
      'cast',
      'clear',
      'fillRange',
      'getRange',
      'indexOf',
      'indexWhere',
      'insert',
      'insertAll',
      'lastIndexOf',
      'lastIndexWhere',
      'remove',
      'removeAt',
      'removeLast',
      'removeRange',
      'removeWhere',
      'replaceRange',
      'retainWhere',
      'setAll',
      'setRange',
      'shuffle',
      'sort',
      'sublist'
    ]);
    dart.defineExtensionAccessors(DelegatingList, ['first', 'last', 'length', 'reversed']);
    return DelegatingList;
  });
  src__wrappers.DelegatingList = src__wrappers.DelegatingList$();
  dart.addTypeTests(src__wrappers.DelegatingList, _is_DelegatingList_default);
  const _is_NonGrowableListMixin_default = Symbol('_is_NonGrowableListMixin_default');
  src__unmodifiable_wrappers.NonGrowableListMixin$ = dart.generic(E => {
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    let ListOfE = () => (ListOfE = dart.constFn(core.List$(E)))();
    class NonGrowableListMixin extends core.Object {
      static _throw(T) {
        dart.throw(new core.UnsupportedError.new("Cannot change the length of a fixed-length list"));
      }
      set length(newLength) {
        return src__unmodifiable_wrappers.NonGrowableListMixin._throw(dart.void);
      }
      add(value) {
        E._check(value);
        return src__unmodifiable_wrappers.NonGrowableListMixin._throw(core.bool);
      }
      addAll(iterable) {
        IterableOfE()._check(iterable);
        return src__unmodifiable_wrappers.NonGrowableListMixin._throw(dart.void);
      }
      insert(index, element) {
        E._check(element);
        return src__unmodifiable_wrappers.NonGrowableListMixin._throw(dart.void);
      }
      insertAll(index, iterable) {
        IterableOfE()._check(iterable);
        return src__unmodifiable_wrappers.NonGrowableListMixin._throw(dart.void);
      }
      remove(value) {
        return src__unmodifiable_wrappers.NonGrowableListMixin._throw(core.bool);
      }
      removeAt(index) {
        return src__unmodifiable_wrappers.NonGrowableListMixin._throw(E);
      }
      removeLast() {
        return src__unmodifiable_wrappers.NonGrowableListMixin._throw(E);
      }
      removeWhere(test) {
        return src__unmodifiable_wrappers.NonGrowableListMixin._throw(dart.void);
      }
      retainWhere(test) {
        return src__unmodifiable_wrappers.NonGrowableListMixin._throw(dart.void);
      }
      removeRange(start, end) {
        return src__unmodifiable_wrappers.NonGrowableListMixin._throw(dart.void);
      }
      replaceRange(start, end, iterable) {
        IterableOfE()._check(iterable);
        return src__unmodifiable_wrappers.NonGrowableListMixin._throw(dart.void);
      }
      clear() {
        return src__unmodifiable_wrappers.NonGrowableListMixin._throw(dart.void);
      }
    }
    (NonGrowableListMixin.new = function() {
    }).prototype = NonGrowableListMixin.prototype;
    NonGrowableListMixin.prototype[dart.isList] = true;
    dart.addTypeTests(NonGrowableListMixin);
    NonGrowableListMixin.prototype[_is_NonGrowableListMixin_default] = true;
    NonGrowableListMixin[dart.implements] = () => [ListOfE()];
    dart.setMethodSignature(NonGrowableListMixin, () => ({
      __proto__: dart.getMethods(NonGrowableListMixin.__proto__),
      add: dart.fnType(core.bool, [core.Object]),
      [$add]: dart.fnType(core.bool, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      [$addAll]: dart.fnType(dart.void, [core.Object]),
      insert: dart.fnType(dart.void, [core.int, core.Object]),
      [$insert]: dart.fnType(dart.void, [core.int, core.Object]),
      insertAll: dart.fnType(dart.void, [core.int, core.Object]),
      [$insertAll]: dart.fnType(dart.void, [core.int, core.Object]),
      remove: dart.fnType(core.bool, [core.Object]),
      [$remove]: dart.fnType(core.bool, [core.Object]),
      removeAt: dart.fnType(E, [core.int]),
      [$removeAt]: dart.fnType(E, [core.int]),
      removeLast: dart.fnType(E, []),
      [$removeLast]: dart.fnType(E, []),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      [$removeWhere]: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      [$retainWhere]: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      removeRange: dart.fnType(dart.void, [core.int, core.int]),
      [$removeRange]: dart.fnType(dart.void, [core.int, core.int]),
      replaceRange: dart.fnType(dart.void, [core.int, core.int, core.Object]),
      [$replaceRange]: dart.fnType(dart.void, [core.int, core.int, core.Object]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, [])
    }));
    dart.setSetterSignature(NonGrowableListMixin, () => ({
      __proto__: dart.getSetters(NonGrowableListMixin.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setLibraryUri(NonGrowableListMixin, "package:collection/src/unmodifiable_wrappers.dart");
    dart.defineExtensionMethods(NonGrowableListMixin, [
      'add',
      'addAll',
      'insert',
      'insertAll',
      'remove',
      'removeAt',
      'removeLast',
      'removeWhere',
      'retainWhere',
      'removeRange',
      'replaceRange',
      'clear'
    ]);
    dart.defineExtensionAccessors(NonGrowableListMixin, ['length']);
    return NonGrowableListMixin;
  });
  src__unmodifiable_wrappers.NonGrowableListMixin = src__unmodifiable_wrappers.NonGrowableListMixin$();
  dart.addTypeTests(src__unmodifiable_wrappers.NonGrowableListMixin, _is_NonGrowableListMixin_default);
  const _is_NonGrowableListView_default = Symbol('_is_NonGrowableListView_default');
  src__unmodifiable_wrappers.NonGrowableListView$ = dart.generic(E => {
    const DelegatingList_NonGrowableListMixin$ = class DelegatingList_NonGrowableListMixin extends src__wrappers.DelegatingList$(E) {};
    (DelegatingList_NonGrowableListMixin$.new = function(base) {
      DelegatingList_NonGrowableListMixin$.__proto__.new.call(this, base);
    }).prototype = DelegatingList_NonGrowableListMixin$.prototype;
    dart.applyMixin(DelegatingList_NonGrowableListMixin$, src__unmodifiable_wrappers.NonGrowableListMixin$(E));
    class NonGrowableListView extends DelegatingList_NonGrowableListMixin$ {}
    (NonGrowableListView.new = function(listBase) {
      NonGrowableListView.__proto__.new.call(this, listBase);
    }).prototype = NonGrowableListView.prototype;
    dart.addTypeTests(NonGrowableListView);
    NonGrowableListView.prototype[_is_NonGrowableListView_default] = true;
    dart.setLibraryUri(NonGrowableListView, "package:collection/src/unmodifiable_wrappers.dart");
    return NonGrowableListView;
  });
  src__unmodifiable_wrappers.NonGrowableListView = src__unmodifiable_wrappers.NonGrowableListView$();
  dart.addTypeTests(src__unmodifiable_wrappers.NonGrowableListView, _is_NonGrowableListView_default);
  const _setBase = dart.privateName(src__wrappers, "_setBase");
  const _is_DelegatingSet_default = Symbol('_is_DelegatingSet_default');
  src__wrappers.DelegatingSet$ = dart.generic(E => {
    let SetOfE = () => (SetOfE = dart.constFn(core.Set$(E)))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    let DelegatingSetOfE = () => (DelegatingSetOfE = dart.constFn(src__wrappers.DelegatingSet$(E)))();
    class DelegatingSet extends src__wrappers.DelegatingIterable$(E) {
      static typed(E, base) {
        return core.Set$(E)._check(base.cast(E));
      }
      get [_setBase]() {
        return SetOfE()._check(this[_base$]);
      }
      add(value) {
        E._check(value);
        return this[_setBase].add(value);
      }
      addAll(elements) {
        IterableOfE()._check(elements);
        this[_setBase].addAll(elements);
      }
      cast(T) {
        return core.Set$(T)._check(this[_setBase].cast(T));
      }
      clear() {
        this[_setBase].clear();
      }
      containsAll(other) {
        return this[_setBase].containsAll(other);
      }
      difference(other) {
        return this[_setBase].difference(other);
      }
      intersection(other) {
        return this[_setBase].intersection(other);
      }
      lookup(element) {
        return this[_setBase].lookup(element);
      }
      remove(value) {
        return this[_setBase].remove(value);
      }
      removeAll(elements) {
        this[_setBase].removeAll(elements);
      }
      removeWhere(test) {
        this[_setBase].removeWhere(test);
      }
      retainAll(elements) {
        this[_setBase].retainAll(elements);
      }
      retype(T) {
        return this.cast(T);
      }
      retainWhere(test) {
        this[_setBase].retainWhere(test);
      }
      union(other) {
        SetOfE()._check(other);
        return this[_setBase].union(other);
      }
      toSet() {
        return new (DelegatingSetOfE()).new(this[_setBase].toSet());
      }
    }
    (DelegatingSet.new = function(base) {
      DelegatingSet.__proto__.new.call(this, base);
    }).prototype = DelegatingSet.prototype;
    dart.addTypeTests(DelegatingSet);
    DelegatingSet.prototype[_is_DelegatingSet_default] = true;
    DelegatingSet[dart.implements] = () => [SetOfE()];
    dart.setMethodSignature(DelegatingSet, () => ({
      __proto__: dart.getMethods(DelegatingSet.__proto__),
      add: dart.fnType(core.bool, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      cast: dart.gFnType(T => [core.Set$(T), []]),
      [$cast]: dart.gFnType(T => [core.Set$(T), []]),
      clear: dart.fnType(dart.void, []),
      containsAll: dart.fnType(core.bool, [core.Iterable$(core.Object)]),
      difference: dart.fnType(core.Set$(E), [core.Set$(core.Object)]),
      intersection: dart.fnType(core.Set$(E), [core.Set$(core.Object)]),
      lookup: dart.fnType(E, [core.Object]),
      remove: dart.fnType(core.bool, [core.Object]),
      removeAll: dart.fnType(dart.void, [core.Iterable$(core.Object)]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      retainAll: dart.fnType(dart.void, [core.Iterable$(core.Object)]),
      retype: dart.gFnType(T => [core.Set$(T), []]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      union: dart.fnType(core.Set$(E), [core.Object])
    }));
    dart.setGetterSignature(DelegatingSet, () => ({
      __proto__: dart.getGetters(DelegatingSet.__proto__),
      [_setBase]: core.Set$(E)
    }));
    dart.setLibraryUri(DelegatingSet, "package:collection/src/wrappers.dart");
    dart.defineExtensionMethods(DelegatingSet, ['cast', 'toSet']);
    return DelegatingSet;
  });
  src__wrappers.DelegatingSet = src__wrappers.DelegatingSet$();
  dart.addTypeTests(src__wrappers.DelegatingSet, _is_DelegatingSet_default);
  const _is_UnmodifiableSetMixin_default = Symbol('_is_UnmodifiableSetMixin_default');
  src__unmodifiable_wrappers.UnmodifiableSetMixin$ = dart.generic(E => {
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    let SetOfE = () => (SetOfE = dart.constFn(core.Set$(E)))();
    class UnmodifiableSetMixin extends core.Object {
      static _throw(T) {
        dart.throw(new core.UnsupportedError.new("Cannot modify an unmodifiable Set"));
      }
      add(value) {
        E._check(value);
        return src__unmodifiable_wrappers.UnmodifiableSetMixin._throw(core.bool);
      }
      addAll(elements) {
        IterableOfE()._check(elements);
        return src__unmodifiable_wrappers.UnmodifiableSetMixin._throw(dart.void);
      }
      remove(value) {
        return src__unmodifiable_wrappers.UnmodifiableSetMixin._throw(core.bool);
      }
      removeAll(elements) {
        return src__unmodifiable_wrappers.UnmodifiableSetMixin._throw(dart.void);
      }
      retainAll(elements) {
        return src__unmodifiable_wrappers.UnmodifiableSetMixin._throw(dart.void);
      }
      removeWhere(test) {
        return src__unmodifiable_wrappers.UnmodifiableSetMixin._throw(dart.void);
      }
      retainWhere(test) {
        return src__unmodifiable_wrappers.UnmodifiableSetMixin._throw(dart.void);
      }
      clear() {
        return src__unmodifiable_wrappers.UnmodifiableSetMixin._throw(dart.void);
      }
    }
    (UnmodifiableSetMixin.new = function() {
    }).prototype = UnmodifiableSetMixin.prototype;
    dart.addTypeTests(UnmodifiableSetMixin);
    UnmodifiableSetMixin.prototype[_is_UnmodifiableSetMixin_default] = true;
    UnmodifiableSetMixin[dart.implements] = () => [SetOfE()];
    dart.setMethodSignature(UnmodifiableSetMixin, () => ({
      __proto__: dart.getMethods(UnmodifiableSetMixin.__proto__),
      add: dart.fnType(core.bool, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      remove: dart.fnType(core.bool, [core.Object]),
      removeAll: dart.fnType(dart.void, [core.Iterable]),
      retainAll: dart.fnType(dart.void, [core.Iterable]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      clear: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(UnmodifiableSetMixin, "package:collection/src/unmodifiable_wrappers.dart");
    return UnmodifiableSetMixin;
  });
  src__unmodifiable_wrappers.UnmodifiableSetMixin = src__unmodifiable_wrappers.UnmodifiableSetMixin$();
  dart.addTypeTests(src__unmodifiable_wrappers.UnmodifiableSetMixin, _is_UnmodifiableSetMixin_default);
  const _is_UnmodifiableSetView_default = Symbol('_is_UnmodifiableSetView_default');
  src__unmodifiable_wrappers.UnmodifiableSetView$ = dart.generic(E => {
    let EmptyUnmodifiableSetOfE = () => (EmptyUnmodifiableSetOfE = dart.constFn(src__empty_unmodifiable_set.EmptyUnmodifiableSet$(E)))();
    const DelegatingSet_UnmodifiableSetMixin$ = class DelegatingSet_UnmodifiableSetMixin extends src__wrappers.DelegatingSet$(E) {};
    (DelegatingSet_UnmodifiableSetMixin$.new = function(base) {
      DelegatingSet_UnmodifiableSetMixin$.__proto__.new.call(this, base);
    }).prototype = DelegatingSet_UnmodifiableSetMixin$.prototype;
    dart.applyMixin(DelegatingSet_UnmodifiableSetMixin$, src__unmodifiable_wrappers.UnmodifiableSetMixin$(E));
    class UnmodifiableSetView extends DelegatingSet_UnmodifiableSetMixin$ {
      static empty() {
        return new (EmptyUnmodifiableSetOfE()).new();
      }
    }
    (UnmodifiableSetView.new = function(setBase) {
      UnmodifiableSetView.__proto__.new.call(this, setBase);
    }).prototype = UnmodifiableSetView.prototype;
    dart.addTypeTests(UnmodifiableSetView);
    UnmodifiableSetView.prototype[_is_UnmodifiableSetView_default] = true;
    dart.setLibraryUri(UnmodifiableSetView, "package:collection/src/unmodifiable_wrappers.dart");
    return UnmodifiableSetView;
  });
  src__unmodifiable_wrappers.UnmodifiableSetView = src__unmodifiable_wrappers.UnmodifiableSetView$();
  dart.addTypeTests(src__unmodifiable_wrappers.UnmodifiableSetView, _is_UnmodifiableSetView_default);
  const _is_UnmodifiableMapMixin_default = Symbol('_is_UnmodifiableMapMixin_default');
  src__unmodifiable_wrappers.UnmodifiableMapMixin$ = dart.generic((K, V) => {
    let MapOfK$V = () => (MapOfK$V = dart.constFn(core.Map$(K, V)))();
    let VoidToV = () => (VoidToV = dart.constFn(dart.fnType(V, [])))();
    class UnmodifiableMapMixin extends core.Object {
      static _throw(T) {
        dart.throw(new core.UnsupportedError.new("Cannot modify an unmodifiable Map"));
      }
      _set(key, value) {
        K._check(key);
        V._check(value);
        return src__unmodifiable_wrappers.UnmodifiableMapMixin._throw(dart.void);
      }
      putIfAbsent(key, ifAbsent) {
        K._check(key);
        VoidToV()._check(ifAbsent);
        return src__unmodifiable_wrappers.UnmodifiableMapMixin._throw(V);
      }
      addAll(other) {
        MapOfK$V()._check(other);
        return src__unmodifiable_wrappers.UnmodifiableMapMixin._throw(dart.void);
      }
      remove(key) {
        return src__unmodifiable_wrappers.UnmodifiableMapMixin._throw(V);
      }
      clear() {
        return src__unmodifiable_wrappers.UnmodifiableMapMixin._throw(dart.void);
      }
      set first(_) {
        return src__unmodifiable_wrappers.UnmodifiableMapMixin._throw(dart.void);
      }
      set last(_) {
        return src__unmodifiable_wrappers.UnmodifiableMapMixin._throw(dart.void);
      }
    }
    (UnmodifiableMapMixin.new = function() {
    }).prototype = UnmodifiableMapMixin.prototype;
    UnmodifiableMapMixin.prototype[dart.isMap] = true;
    dart.addTypeTests(UnmodifiableMapMixin);
    UnmodifiableMapMixin.prototype[_is_UnmodifiableMapMixin_default] = true;
    UnmodifiableMapMixin[dart.implements] = () => [MapOfK$V()];
    dart.setMethodSignature(UnmodifiableMapMixin, () => ({
      __proto__: dart.getMethods(UnmodifiableMapMixin.__proto__),
      _set: dart.fnType(dart.void, [core.Object, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.Object, core.Object]),
      putIfAbsent: dart.fnType(V, [core.Object, core.Object]),
      [$putIfAbsent]: dart.fnType(V, [core.Object, core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      [$addAll]: dart.fnType(dart.void, [core.Object]),
      remove: dart.fnType(V, [core.Object]),
      [$remove]: dart.fnType(V, [core.Object]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, [])
    }));
    dart.setSetterSignature(UnmodifiableMapMixin, () => ({
      __proto__: dart.getSetters(UnmodifiableMapMixin.__proto__),
      first: dart.dynamic,
      last: dart.dynamic
    }));
    dart.setLibraryUri(UnmodifiableMapMixin, "package:collection/src/unmodifiable_wrappers.dart");
    dart.defineExtensionMethods(UnmodifiableMapMixin, [
      '_set',
      'putIfAbsent',
      'addAll',
      'remove',
      'clear'
    ]);
    return UnmodifiableMapMixin;
  });
  src__unmodifiable_wrappers.UnmodifiableMapMixin = src__unmodifiable_wrappers.UnmodifiableMapMixin$();
  dart.addTypeTests(src__unmodifiable_wrappers.UnmodifiableMapMixin, _is_UnmodifiableMapMixin_default);
  const _baseQueue = dart.privateName(src__wrappers, "_baseQueue");
  const _is_DelegatingQueue_default = Symbol('_is_DelegatingQueue_default');
  src__wrappers.DelegatingQueue$ = dart.generic(E => {
    let QueueOfE = () => (QueueOfE = dart.constFn(collection.Queue$(E)))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    class DelegatingQueue extends src__wrappers.DelegatingIterable$(E) {
      static typed(E, base) {
        return collection.Queue$(E)._check(base.cast(E));
      }
      get [_baseQueue]() {
        return QueueOfE()._check(this[_base$]);
      }
      add(value) {
        E._check(value);
        this[_baseQueue].add(value);
      }
      addAll(iterable) {
        IterableOfE()._check(iterable);
        this[_baseQueue].addAll(iterable);
      }
      addFirst(value) {
        E._check(value);
        this[_baseQueue].addFirst(value);
      }
      addLast(value) {
        E._check(value);
        this[_baseQueue].addLast(value);
      }
      cast(T) {
        return collection.Queue$(T)._check(this[_baseQueue].cast(T));
      }
      clear() {
        this[_baseQueue].clear();
      }
      remove(object) {
        return this[_baseQueue].remove(object);
      }
      removeWhere(test) {
        this[_baseQueue].removeWhere(test);
      }
      retainWhere(test) {
        this[_baseQueue].retainWhere(test);
      }
      retype(T) {
        return this.cast(T);
      }
      removeFirst() {
        return this[_baseQueue].removeFirst();
      }
      removeLast() {
        return this[_baseQueue].removeLast();
      }
    }
    (DelegatingQueue.new = function(queue) {
      DelegatingQueue.__proto__.new.call(this, queue);
    }).prototype = DelegatingQueue.prototype;
    dart.addTypeTests(DelegatingQueue);
    DelegatingQueue.prototype[_is_DelegatingQueue_default] = true;
    DelegatingQueue[dart.implements] = () => [QueueOfE()];
    dart.setMethodSignature(DelegatingQueue, () => ({
      __proto__: dart.getMethods(DelegatingQueue.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      addFirst: dart.fnType(dart.void, [core.Object]),
      addLast: dart.fnType(dart.void, [core.Object]),
      cast: dart.gFnType(T => [collection.Queue$(T), []]),
      [$cast]: dart.gFnType(T => [collection.Queue$(T), []]),
      clear: dart.fnType(dart.void, []),
      remove: dart.fnType(core.bool, [core.Object]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      retype: dart.gFnType(T => [collection.Queue$(T), []]),
      removeFirst: dart.fnType(E, []),
      removeLast: dart.fnType(E, [])
    }));
    dart.setGetterSignature(DelegatingQueue, () => ({
      __proto__: dart.getGetters(DelegatingQueue.__proto__),
      [_baseQueue]: collection.Queue$(E)
    }));
    dart.setLibraryUri(DelegatingQueue, "package:collection/src/wrappers.dart");
    dart.defineExtensionMethods(DelegatingQueue, ['cast']);
    return DelegatingQueue;
  });
  src__wrappers.DelegatingQueue = src__wrappers.DelegatingQueue$();
  dart.addTypeTests(src__wrappers.DelegatingQueue, _is_DelegatingQueue_default);
  const _is_DelegatingMap_default = Symbol('_is_DelegatingMap_default');
  src__wrappers.DelegatingMap$ = dart.generic((K, V) => {
    let MapOfK$V = () => (MapOfK$V = dart.constFn(core.Map$(K, V)))();
    let MapEntryOfK$V = () => (MapEntryOfK$V = dart.constFn(core.MapEntry$(K, V)))();
    let IterableOfMapEntryOfK$V = () => (IterableOfMapEntryOfK$V = dart.constFn(core.Iterable$(MapEntryOfK$V())))();
    let KAndVToV = () => (KAndVToV = dart.constFn(dart.fnType(V, [K, V])))();
    let VoidToV = () => (VoidToV = dart.constFn(dart.fnType(V, [])))();
    let VToV = () => (VToV = dart.constFn(dart.fnType(V, [V])))();
    class DelegatingMap extends core.Object {
      static typed(K, V, base) {
        return core.Map$(K, V)._check(base[$cast](K, V));
      }
      _get(key) {
        return this[_base$][$_get](key);
      }
      _set(key, value) {
        K._check(key);
        V._check(value);
        this[_base$][$_set](key, value);
        return value;
      }
      addAll(other) {
        MapOfK$V()._check(other);
        this[_base$][$addAll](other);
      }
      addEntries(entries) {
        IterableOfMapEntryOfK$V()._check(entries);
        this[_base$][$addEntries](entries);
      }
      clear() {
        this[_base$][$clear]();
      }
      cast(K2, V2) {
        return core.Map$(K2, V2)._check(this[_base$][$cast](K2, V2));
      }
      containsKey(key) {
        return this[_base$][$containsKey](key);
      }
      containsValue(value) {
        return this[_base$][$containsValue](value);
      }
      get entries() {
        return this[_base$][$entries];
      }
      forEach(f) {
        this[_base$][$forEach](f);
      }
      get isEmpty() {
        return this[_base$][$isEmpty];
      }
      get isNotEmpty() {
        return this[_base$][$isNotEmpty];
      }
      get keys() {
        return this[_base$][$keys];
      }
      get length() {
        return this[_base$][$length];
      }
      map(K2, V2, transform) {
        return core.Map$(K2, V2)._check(this[_base$][$map](K2, V2, transform));
      }
      putIfAbsent(key, ifAbsent) {
        K._check(key);
        VoidToV()._check(ifAbsent);
        return this[_base$][$putIfAbsent](key, ifAbsent);
      }
      remove(key) {
        return this[_base$][$remove](key);
      }
      removeWhere(test) {
        return this[_base$][$removeWhere](test);
      }
      retype(K2, V2) {
        return this.cast(K2, V2);
      }
      get values() {
        return this[_base$][$values];
      }
      toString() {
        return dart.toString(this[_base$]);
      }
      update(key, update, opts) {
        K._check(key);
        VToV()._check(update);
        let ifAbsent = opts && 'ifAbsent' in opts ? opts.ifAbsent : null;
        VoidToV()._check(ifAbsent);
        return this[_base$][$update](key, update, {ifAbsent: ifAbsent});
      }
      updateAll(update) {
        KAndVToV()._check(update);
        return this[_base$][$updateAll](update);
      }
    }
    (DelegatingMap.new = function(base) {
      this[_base$] = base;
    }).prototype = DelegatingMap.prototype;
    DelegatingMap.prototype[dart.isMap] = true;
    dart.addTypeTests(DelegatingMap);
    DelegatingMap.prototype[_is_DelegatingMap_default] = true;
    DelegatingMap[dart.implements] = () => [MapOfK$V()];
    dart.setMethodSignature(DelegatingMap, () => ({
      __proto__: dart.getMethods(DelegatingMap.__proto__),
      _get: dart.fnType(V, [core.Object]),
      [$_get]: dart.fnType(V, [core.Object]),
      _set: dart.fnType(dart.void, [core.Object, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.Object, core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      [$addAll]: dart.fnType(dart.void, [core.Object]),
      addEntries: dart.fnType(dart.void, [core.Object]),
      [$addEntries]: dart.fnType(dart.void, [core.Object]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, []),
      cast: dart.gFnType((K2, V2) => [core.Map$(K2, V2), []]),
      [$cast]: dart.gFnType((K2, V2) => [core.Map$(K2, V2), []]),
      containsKey: dart.fnType(core.bool, [core.Object]),
      [$containsKey]: dart.fnType(core.bool, [core.Object]),
      containsValue: dart.fnType(core.bool, [core.Object]),
      [$containsValue]: dart.fnType(core.bool, [core.Object]),
      forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [K, V])]),
      [$forEach]: dart.fnType(dart.void, [dart.fnType(dart.void, [K, V])]),
      map: dart.gFnType((K2, V2) => [core.Map$(K2, V2), [dart.fnType(core.MapEntry$(K2, V2), [K, V])]]),
      [$map]: dart.gFnType((K2, V2) => [core.Map$(K2, V2), [dart.fnType(core.MapEntry$(K2, V2), [K, V])]]),
      putIfAbsent: dart.fnType(V, [core.Object, core.Object]),
      [$putIfAbsent]: dart.fnType(V, [core.Object, core.Object]),
      remove: dart.fnType(V, [core.Object]),
      [$remove]: dart.fnType(V, [core.Object]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [K, V])]),
      [$removeWhere]: dart.fnType(dart.void, [dart.fnType(core.bool, [K, V])]),
      retype: dart.gFnType((K2, V2) => [core.Map$(K2, V2), []]),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, []),
      update: dart.fnType(V, [core.Object, core.Object], {ifAbsent: core.Object}),
      [$update]: dart.fnType(V, [core.Object, core.Object], {ifAbsent: core.Object}),
      updateAll: dart.fnType(dart.void, [core.Object]),
      [$updateAll]: dart.fnType(dart.void, [core.Object])
    }));
    dart.setGetterSignature(DelegatingMap, () => ({
      __proto__: dart.getGetters(DelegatingMap.__proto__),
      entries: core.Iterable$(core.MapEntry$(K, V)),
      [$entries]: core.Iterable$(core.MapEntry$(K, V)),
      isEmpty: core.bool,
      [$isEmpty]: core.bool,
      isNotEmpty: core.bool,
      [$isNotEmpty]: core.bool,
      keys: core.Iterable$(K),
      [$keys]: core.Iterable$(K),
      length: core.int,
      [$length]: core.int,
      values: core.Iterable$(V),
      [$values]: core.Iterable$(V)
    }));
    dart.setLibraryUri(DelegatingMap, "package:collection/src/wrappers.dart");
    dart.setFieldSignature(DelegatingMap, () => ({
      __proto__: dart.getFields(DelegatingMap.__proto__),
      [_base$]: dart.finalFieldType(MapOfK$V())
    }));
    dart.defineExtensionMethods(DelegatingMap, [
      '_get',
      '_set',
      'addAll',
      'addEntries',
      'clear',
      'cast',
      'containsKey',
      'containsValue',
      'forEach',
      'map',
      'putIfAbsent',
      'remove',
      'removeWhere',
      'toString',
      'update',
      'updateAll'
    ]);
    dart.defineExtensionAccessors(DelegatingMap, [
      'entries',
      'isEmpty',
      'isNotEmpty',
      'keys',
      'length',
      'values'
    ]);
    return DelegatingMap;
  });
  src__wrappers.DelegatingMap = src__wrappers.DelegatingMap$();
  dart.addTypeTests(src__wrappers.DelegatingMap, _is_DelegatingMap_default);
  const _baseMap = dart.privateName(src__wrappers, "_baseMap");
  const _is_MapKeySet_default = Symbol('_is_MapKeySet_default');
  src__wrappers.MapKeySet$ = dart.generic(E => {
    let ETobool = () => (ETobool = dart.constFn(dart.fnType(core.bool, [E])))();
    let SetOfE = () => (SetOfE = dart.constFn(core.Set$(E)))();
    let MapOfE$dynamic = () => (MapOfE$dynamic = dart.constFn(core.Map$(E, dart.dynamic)))();
    const _DelegatingIterableBase_UnmodifiableSetMixin$ = class _DelegatingIterableBase_UnmodifiableSetMixin extends src__wrappers._DelegatingIterableBase$(E) {};
    (_DelegatingIterableBase_UnmodifiableSetMixin$.new = function() {
      _DelegatingIterableBase_UnmodifiableSetMixin$.__proto__.new.call(this);
    }).prototype = _DelegatingIterableBase_UnmodifiableSetMixin$.prototype;
    dart.applyMixin(_DelegatingIterableBase_UnmodifiableSetMixin$, src__unmodifiable_wrappers.UnmodifiableSetMixin$(E));
    class MapKeySet extends _DelegatingIterableBase_UnmodifiableSetMixin$ {
      get [_base$]() {
        return this[_baseMap][$keys];
      }
      cast(T) {
        if (src__wrappers.MapKeySet$(T).is(this)) {
          return src__wrappers.MapKeySet$(T).as(this);
        }
        return core.Set.castFrom(E, T, this);
      }
      contains(element) {
        return this[_baseMap][$containsKey](element);
      }
      get isEmpty() {
        return this[_baseMap][$isEmpty];
      }
      get isNotEmpty() {
        return this[_baseMap][$isNotEmpty];
      }
      get length() {
        return this[_baseMap][$length];
      }
      toString() {
        return "{" + dart.str(this[_base$][$join](", ")) + "}";
      }
      containsAll(other) {
        return other[$every](dart.bind(this, 'contains'));
      }
      difference(other) {
        return this[$where](dart.fn(element => !dart.test(other.contains(element)), ETobool()))[$toSet]();
      }
      intersection(other) {
        return this[$where](dart.bind(other, 'contains'))[$toSet]();
      }
      lookup(element) {
        return dart.throw(new core.UnsupportedError.new("MapKeySet doesn't support lookup()."));
      }
      retype(T) {
        return core.Set.castFrom(E, T, this);
      }
      union(other) {
        SetOfE()._check(other);
        let _ = this.toSet();
        _.addAll(other);
        return _;
      }
    }
    (MapKeySet.new = function(base) {
      this[_baseMap] = base;
      MapKeySet.__proto__.new.call(this);
    }).prototype = MapKeySet.prototype;
    dart.addTypeTests(MapKeySet);
    MapKeySet.prototype[_is_MapKeySet_default] = true;
    dart.setMethodSignature(MapKeySet, () => ({
      __proto__: dart.getMethods(MapKeySet.__proto__),
      cast: dart.gFnType(T => [core.Set$(T), []]),
      [$cast]: dart.gFnType(T => [core.Set$(T), []]),
      containsAll: dart.fnType(core.bool, [core.Iterable$(core.Object)]),
      difference: dart.fnType(core.Set$(E), [core.Set$(core.Object)]),
      intersection: dart.fnType(core.Set$(E), [core.Set$(core.Object)]),
      lookup: dart.fnType(E, [core.Object]),
      retype: dart.gFnType(T => [core.Set$(T), []]),
      union: dart.fnType(core.Set$(E), [core.Object])
    }));
    dart.setGetterSignature(MapKeySet, () => ({
      __proto__: dart.getGetters(MapKeySet.__proto__),
      [_base$]: core.Iterable$(E)
    }));
    dart.setLibraryUri(MapKeySet, "package:collection/src/wrappers.dart");
    dart.setFieldSignature(MapKeySet, () => ({
      __proto__: dart.getFields(MapKeySet.__proto__),
      [_baseMap]: dart.finalFieldType(MapOfE$dynamic())
    }));
    dart.defineExtensionMethods(MapKeySet, ['cast', 'contains', 'toString']);
    dart.defineExtensionAccessors(MapKeySet, ['isEmpty', 'isNotEmpty', 'length']);
    return MapKeySet;
  });
  src__wrappers.MapKeySet = src__wrappers.MapKeySet$();
  dart.addTypeTests(src__wrappers.MapKeySet, _is_MapKeySet_default);
  const _keyForValue = dart.privateName(src__wrappers, "_keyForValue");
  const _is_MapValueSet_default = Symbol('_is_MapValueSet_default');
  src__wrappers.MapValueSet$ = dart.generic((K, V) => {
    let KAndVToNull = () => (KAndVToNull = dart.constFn(dart.fnType(core.Null, [K, V])))();
    let MapOfK$V = () => (MapOfK$V = dart.constFn(core.Map$(K, V)))();
    let VToK = () => (VToK = dart.constFn(dart.fnType(K, [V])))();
    let VoidToV = () => (VoidToV = dart.constFn(dart.fnType(V, [])))();
    let IterableOfV = () => (IterableOfV = dart.constFn(core.Iterable$(V)))();
    let VTobool = () => (VTobool = dart.constFn(dart.fnType(core.bool, [V])))();
    let _IdentityHashSetOfV = () => (_IdentityHashSetOfV = dart.constFn(collection._IdentityHashSet$(V)))();
    let SetOfV = () => (SetOfV = dart.constFn(core.Set$(V)))();
    class MapValueSet extends src__wrappers._DelegatingIterableBase$(V) {
      get [_base$]() {
        return this[_baseMap][$values];
      }
      cast(T) {
        if (core.Set$(T).is(this)) {
          return core.Set$(T).as(this);
        }
        return core.Set.castFrom(V, T, this);
      }
      contains(element) {
        if (element != null && !V.is(element)) return false;
        let key = this[_keyForValue](V.as(element));
        return this[_baseMap][$containsKey](key);
      }
      get isEmpty() {
        return this[_baseMap][$isEmpty];
      }
      get isNotEmpty() {
        return this[_baseMap][$isNotEmpty];
      }
      get length() {
        return this[_baseMap][$length];
      }
      toString() {
        return dart.toString(this.toSet());
      }
      add(value) {
        V._check(value);
        let key = this[_keyForValue](value);
        let result = false;
        this[_baseMap][$putIfAbsent](key, dart.fn(() => {
          result = true;
          return value;
        }, VoidToV()));
        return result;
      }
      addAll(elements) {
        IterableOfV()._check(elements);
        return elements[$forEach](dart.bind(this, 'add'));
      }
      clear() {
        return this[_baseMap][$clear]();
      }
      containsAll(other) {
        return other[$every](dart.bind(this, 'contains'));
      }
      difference(other) {
        return this.where(dart.fn(element => !dart.test(other.contains(element)), VTobool()))[$toSet]();
      }
      intersection(other) {
        return this.where(dart.bind(other, 'contains'))[$toSet]();
      }
      lookup(element) {
        if (element != null && !V.is(element)) return null;
        let key = this[_keyForValue](V.as(element));
        return this[_baseMap][$_get](key);
      }
      remove(element) {
        if (element != null && !V.is(element)) return false;
        let key = this[_keyForValue](V.as(element));
        if (!dart.test(this[_baseMap][$containsKey](key))) return false;
        this[_baseMap][$remove](key);
        return true;
      }
      removeAll(elements) {
        return elements[$forEach](dart.bind(this, 'remove'));
      }
      removeWhere(test) {
        let toRemove = [];
        this[_baseMap][$forEach](dart.fn((key, value) => {
          if (dart.test(test(value))) toRemove[$add](key);
        }, KAndVToNull()));
        toRemove[$forEach](dart.bind(this[_baseMap], $remove));
      }
      retainAll(elements) {
        let valuesToRetain = new (_IdentityHashSetOfV()).new();
        for (let element of elements) {
          if (element != null && !V.is(element)) continue;
          let key = this[_keyForValue](V.as(element));
          if (!dart.test(this[_baseMap][$containsKey](key))) continue;
          valuesToRetain.add(this[_baseMap][$_get](key));
        }
        let keysToRemove = [];
        this[_baseMap][$forEach](dart.fn((k, v) => {
          if (!dart.test(valuesToRetain.contains(v))) keysToRemove[$add](k);
        }, KAndVToNull()));
        keysToRemove[$forEach](dart.bind(this[_baseMap], $remove));
      }
      retainWhere(test) {
        return this.removeWhere(dart.fn(element => !dart.test(test(element)), VTobool()));
      }
      retype(T) {
        return core.Set.castFrom(V, T, this);
      }
      union(other) {
        SetOfV()._check(other);
        let _ = this.toSet();
        _.addAll(other);
        return _;
      }
    }
    (MapValueSet.new = function(base, keyForValue) {
      this[_baseMap] = base;
      this[_keyForValue] = keyForValue;
      MapValueSet.__proto__.new.call(this);
    }).prototype = MapValueSet.prototype;
    dart.addTypeTests(MapValueSet);
    MapValueSet.prototype[_is_MapValueSet_default] = true;
    MapValueSet[dart.implements] = () => [SetOfV()];
    dart.setMethodSignature(MapValueSet, () => ({
      __proto__: dart.getMethods(MapValueSet.__proto__),
      cast: dart.gFnType(T => [core.Set$(T), []]),
      [$cast]: dart.gFnType(T => [core.Set$(T), []]),
      contains: dart.fnType(core.bool, [core.Object]),
      [$contains]: dart.fnType(core.bool, [core.Object]),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, []),
      add: dart.fnType(core.bool, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      clear: dart.fnType(dart.void, []),
      containsAll: dart.fnType(core.bool, [core.Iterable$(core.Object)]),
      difference: dart.fnType(core.Set$(V), [core.Set$(core.Object)]),
      intersection: dart.fnType(core.Set$(V), [core.Set$(core.Object)]),
      lookup: dart.fnType(V, [core.Object]),
      remove: dart.fnType(core.bool, [core.Object]),
      removeAll: dart.fnType(dart.void, [core.Iterable$(core.Object)]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [V])]),
      retainAll: dart.fnType(dart.void, [core.Iterable$(core.Object)]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [V])]),
      retype: dart.gFnType(T => [core.Set$(T), []]),
      union: dart.fnType(core.Set$(V), [core.Object])
    }));
    dart.setGetterSignature(MapValueSet, () => ({
      __proto__: dart.getGetters(MapValueSet.__proto__),
      [_base$]: core.Iterable$(V),
      isEmpty: core.bool,
      [$isEmpty]: core.bool,
      isNotEmpty: core.bool,
      [$isNotEmpty]: core.bool,
      length: core.int,
      [$length]: core.int
    }));
    dart.setLibraryUri(MapValueSet, "package:collection/src/wrappers.dart");
    dart.setFieldSignature(MapValueSet, () => ({
      __proto__: dart.getFields(MapValueSet.__proto__),
      [_baseMap]: dart.finalFieldType(MapOfK$V()),
      [_keyForValue]: dart.finalFieldType(VToK())
    }));
    dart.defineExtensionMethods(MapValueSet, ['cast', 'contains', 'toString']);
    dart.defineExtensionAccessors(MapValueSet, ['isEmpty', 'isNotEmpty', 'length']);
    return MapValueSet;
  });
  src__wrappers.MapValueSet = src__wrappers.MapValueSet$();
  dart.addTypeTests(src__wrappers.MapValueSet, _is_MapValueSet_default);
  dart.trackLibraries("packages/collection/src/canonicalized_map.ddc", {
    "package:collection/src/canonicalized_map.dart": src__canonicalized_map,
    "package:collection/src/empty_unmodifiable_set.dart": src__empty_unmodifiable_set,
    "package:collection/src/unmodifiable_wrappers.dart": src__unmodifiable_wrappers,
    "package:collection/src/wrappers.dart": src__wrappers
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["canonicalized_map.dart","empty_unmodifiable_set.dart","wrappers.dart","unmodifiable_wrappers.dart"],"names":[],"mappings":"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","file":"canonicalized_map.ddc.js"}');
  // Exports:
  return {
    src__canonicalized_map: src__canonicalized_map,
    src__empty_unmodifiable_set: src__empty_unmodifiable_set,
    src__unmodifiable_wrappers: src__unmodifiable_wrappers,
    src__wrappers: src__wrappers
  };
});

//# sourceMappingURL=canonicalized_map.ddc.js.map

define(['dart_sdk', 'packages/collection/src/canonicalized_map', 'packages/collection/src/utils'], function(dart_sdk, canonicalized_map, utils) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__wrappers = canonicalized_map.src__wrappers;
  const src__unmodifiable_wrappers = canonicalized_map.src__unmodifiable_wrappers;
  const src__utils = utils.src__utils;
  const collection$ = Object.create(dart.library);
  const src__combined_wrappers__combined_iterable = Object.create(dart.library);
  const src__combined_wrappers__combined_list = Object.create(dart.library);
  const src__combined_wrappers__combined_map = Object.create(dart.library);
  const src__equality_map = Object.create(dart.library);
  const src__equality_set = Object.create(dart.library);
  const src__functions = Object.create(dart.library);
  const src__queue_list = Object.create(dart.library);
  const src__union_set = Object.create(dart.library);
  const src__union_set_controller = Object.create(dart.library);
  const $iterator = dartx.iterator;
  const $map = dartx.map;
  const $contains = dartx.contains;
  const $any = dartx.any;
  const $isEmpty = dartx.isEmpty;
  const $every = dartx.every;
  const $length = dartx.length;
  const $fold = dartx.fold;
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $containsKey = dartx.containsKey;
  const $keys = dartx.keys;
  const $forEach = dartx.forEach;
  const $addAll = dartx.addAll;
  const $putIfAbsent = dartx.putIfAbsent;
  const $add = dartx.add;
  const $toList = dartx.toList;
  const $removeLast = dartx.removeLast;
  const $reversed = dartx.reversed;
  const $setRange = dartx.setRange;
  const $fillRange = dartx.fillRange;
  const $rightShift = dartx['>>'];
  const $cast = dartx.cast;
  const $toSet = dartx.toSet;
  const $where = dartx.where;
  const $firstWhere = dartx.firstWhere;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const _iterables = dart.privateName(src__combined_wrappers__combined_iterable, "_iterables");
  const _is_CombinedIterableView_default = Symbol('_is_CombinedIterableView_default');
  src__combined_wrappers__combined_iterable.CombinedIterableView$ = dart.generic(T => {
    let IteratorOfT = () => (IteratorOfT = dart.constFn(core.Iterator$(T)))();
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    let IterableOfTToIteratorOfT = () => (IterableOfTToIteratorOfT = dart.constFn(dart.fnType(IteratorOfT(), [IterableOfT()])))();
    let IterableOfIteratorOfT = () => (IterableOfIteratorOfT = dart.constFn(core.Iterable$(IteratorOfT())))();
    let _CombinedIteratorOfT = () => (_CombinedIteratorOfT = dart.constFn(src__combined_wrappers__combined_iterable._CombinedIterator$(T)))();
    let IterableOfTTobool = () => (IterableOfTTobool = dart.constFn(dart.fnType(core.bool, [IterableOfT()])))();
    let intAndIterableOfTToint = () => (intAndIterableOfTToint = dart.constFn(dart.fnType(core.int, [core.int, IterableOfT()])))();
    let IterableOfIterableOfT = () => (IterableOfIterableOfT = dart.constFn(core.Iterable$(IterableOfT())))();
    class CombinedIterableView extends collection.IterableBase$(T) {
      get iterator() {
        return new (_CombinedIteratorOfT()).new(IterableOfIteratorOfT()._check(this[_iterables][$map](IteratorOfT(), dart.fn(i => i[$iterator], IterableOfTToIteratorOfT())))[$iterator]);
      }
      contains(element) {
        return this[_iterables][$any](dart.fn(i => i[$contains](element), IterableOfTTobool()));
      }
      get isEmpty() {
        return this[_iterables][$every](dart.fn(i => i[$isEmpty], IterableOfTTobool()));
      }
      get length() {
        return this[_iterables][$fold](core.int, 0, dart.fn((length, i) => dart.notNull(length) + dart.notNull(i[$length]), intAndIterableOfTToint()));
      }
    }
    (CombinedIterableView.new = function(iterables) {
      this[_iterables] = iterables;
      CombinedIterableView.__proto__.new.call(this);
    }).prototype = CombinedIterableView.prototype;
    dart.addTypeTests(CombinedIterableView);
    CombinedIterableView.prototype[_is_CombinedIterableView_default] = true;
    dart.setGetterSignature(CombinedIterableView, () => ({
      __proto__: dart.getGetters(CombinedIterableView.__proto__),
      iterator: core.Iterator$(T),
      [$iterator]: core.Iterator$(T)
    }));
    dart.setLibraryUri(CombinedIterableView, "package:collection/src/combined_wrappers/combined_iterable.dart");
    dart.setFieldSignature(CombinedIterableView, () => ({
      __proto__: dart.getFields(CombinedIterableView.__proto__),
      [_iterables]: dart.finalFieldType(IterableOfIterableOfT())
    }));
    dart.defineExtensionMethods(CombinedIterableView, ['contains']);
    dart.defineExtensionAccessors(CombinedIterableView, ['iterator', 'isEmpty', 'length']);
    return CombinedIterableView;
  });
  src__combined_wrappers__combined_iterable.CombinedIterableView = src__combined_wrappers__combined_iterable.CombinedIterableView$();
  dart.addTypeTests(src__combined_wrappers__combined_iterable.CombinedIterableView, _is_CombinedIterableView_default);
  const _iterators = dart.privateName(src__combined_wrappers__combined_iterable, "_iterators");
  const _is__CombinedIterator_default = Symbol('_is__CombinedIterator_default');
  src__combined_wrappers__combined_iterable._CombinedIterator$ = dart.generic(T => {
    let IteratorOfT = () => (IteratorOfT = dart.constFn(core.Iterator$(T)))();
    let IteratorOfIteratorOfT = () => (IteratorOfIteratorOfT = dart.constFn(core.Iterator$(IteratorOfT())))();
    class _CombinedIterator extends core.Object {
      get current() {
        let t = this[_iterators].current;
        return t == null ? null : t.current;
      }
      moveNext() {
        let current = this[_iterators].current;
        if (current != null && dart.test(current.moveNext())) {
          return true;
        }
        return dart.test(this[_iterators].moveNext()) && dart.test(this.moveNext());
      }
    }
    (_CombinedIterator.new = function(iterators) {
      this[_iterators] = iterators;
    }).prototype = _CombinedIterator.prototype;
    dart.addTypeTests(_CombinedIterator);
    _CombinedIterator.prototype[_is__CombinedIterator_default] = true;
    _CombinedIterator[dart.implements] = () => [IteratorOfT()];
    dart.setMethodSignature(_CombinedIterator, () => ({
      __proto__: dart.getMethods(_CombinedIterator.__proto__),
      moveNext: dart.fnType(core.bool, [])
    }));
    dart.setGetterSignature(_CombinedIterator, () => ({
      __proto__: dart.getGetters(_CombinedIterator.__proto__),
      current: T
    }));
    dart.setLibraryUri(_CombinedIterator, "package:collection/src/combined_wrappers/combined_iterable.dart");
    dart.setFieldSignature(_CombinedIterator, () => ({
      __proto__: dart.getFields(_CombinedIterator.__proto__),
      [_iterators]: dart.finalFieldType(IteratorOfIteratorOfT())
    }));
    return _CombinedIterator;
  });
  src__combined_wrappers__combined_iterable._CombinedIterator = src__combined_wrappers__combined_iterable._CombinedIterator$();
  dart.addTypeTests(src__combined_wrappers__combined_iterable._CombinedIterator, _is__CombinedIterator_default);
  const _lists = dart.privateName(src__combined_wrappers__combined_list, "_lists");
  const _is_CombinedListView_default = Symbol('_is_CombinedListView_default');
  src__combined_wrappers__combined_list.CombinedListView$ = dart.generic(T => {
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let intAndListOfTToint = () => (intAndListOfTToint = dart.constFn(dart.fnType(core.int, [core.int, ListOfT()])))();
    let UnmodifiableListViewOfT = () => (UnmodifiableListViewOfT = dart.constFn(collection.UnmodifiableListView$(T)))();
    let ListOfListOfT = () => (ListOfListOfT = dart.constFn(core.List$(ListOfT())))();
    class CombinedListView extends collection.ListBase$(T) {
      static _throw() {
        dart.throw(new core.UnsupportedError.new("Cannot modify an unmodifiable List"));
      }
      set length(length) {
        src__combined_wrappers__combined_list.CombinedListView._throw();
      }
      get length() {
        return this[_lists][$fold](core.int, 0, dart.fn((length, list) => dart.notNull(length) + dart.notNull(list[$length]), intAndListOfTToint()));
      }
      _get(index) {
        let initialIndex = index;
        for (let i = 0; i < dart.notNull(this[_lists][$length]); i++) {
          let list = this[_lists][$_get](i);
          if (dart.notNull(index) < dart.notNull(list[$length])) {
            return list[$_get](index);
          }
          index = dart.notNull(index) - dart.notNull(list[$length]);
        }
        dart.throw(core.RangeError.index(initialIndex, this, "index", null, this.length));
      }
      _set(index, value) {
        T._check(value);
        src__combined_wrappers__combined_list.CombinedListView._throw();
        return value;
      }
      clear() {
        src__combined_wrappers__combined_list.CombinedListView._throw();
      }
      remove(element) {
        src__combined_wrappers__combined_list.CombinedListView._throw();
        return null;
      }
      removeWhere(test) {
        src__combined_wrappers__combined_list.CombinedListView._throw();
      }
      retainWhere(test) {
        src__combined_wrappers__combined_list.CombinedListView._throw();
      }
    }
    (CombinedListView.new = function(lists) {
      this[_lists] = lists;
    }).prototype = CombinedListView.prototype;
    dart.addTypeTests(CombinedListView);
    CombinedListView.prototype[_is_CombinedListView_default] = true;
    CombinedListView[dart.implements] = () => [UnmodifiableListViewOfT()];
    dart.setMethodSignature(CombinedListView, () => ({
      __proto__: dart.getMethods(CombinedListView.__proto__),
      _get: dart.fnType(T, [core.int]),
      [$_get]: dart.fnType(T, [core.int]),
      _set: dart.fnType(dart.void, [core.int, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.int, core.Object])
    }));
    dart.setGetterSignature(CombinedListView, () => ({
      __proto__: dart.getGetters(CombinedListView.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setSetterSignature(CombinedListView, () => ({
      __proto__: dart.getSetters(CombinedListView.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setLibraryUri(CombinedListView, "package:collection/src/combined_wrappers/combined_list.dart");
    dart.setFieldSignature(CombinedListView, () => ({
      __proto__: dart.getFields(CombinedListView.__proto__),
      [_lists]: dart.finalFieldType(ListOfListOfT())
    }));
    dart.defineExtensionMethods(CombinedListView, [
      '_get',
      '_set',
      'clear',
      'remove',
      'removeWhere',
      'retainWhere'
    ]);
    dart.defineExtensionAccessors(CombinedListView, ['length']);
    return CombinedListView;
  });
  src__combined_wrappers__combined_list.CombinedListView = src__combined_wrappers__combined_list.CombinedListView$();
  dart.addTypeTests(src__combined_wrappers__combined_list.CombinedListView, _is_CombinedListView_default);
  const _maps = dart.privateName(src__combined_wrappers__combined_map, "_maps");
  const _is_CombinedMapView_default = Symbol('_is_CombinedMapView_default');
  src__combined_wrappers__combined_map.CombinedMapView$ = dart.generic((K, V) => {
    let IterableOfK = () => (IterableOfK = dart.constFn(core.Iterable$(K)))();
    let MapOfK$V = () => (MapOfK$V = dart.constFn(core.Map$(K, V)))();
    let MapOfK$VToIterableOfK = () => (MapOfK$VToIterableOfK = dart.constFn(dart.fnType(IterableOfK(), [MapOfK$V()])))();
    let IterableOfIterableOfK = () => (IterableOfIterableOfK = dart.constFn(core.Iterable$(IterableOfK())))();
    let CombinedIterableViewOfK = () => (CombinedIterableViewOfK = dart.constFn(src__combined_wrappers__combined_iterable.CombinedIterableView$(K)))();
    let IterableOfMapOfK$V = () => (IterableOfMapOfK$V = dart.constFn(core.Iterable$(MapOfK$V())))();
    class CombinedMapView extends collection.UnmodifiableMapBase$(K, V) {
      _get(key) {
        for (let map of this[_maps]) {
          let value = map[$_get](key);
          if (value != null || dart.test(map[$containsKey](value))) {
            return value;
          }
        }
        return null;
      }
      get keys() {
        return new (CombinedIterableViewOfK()).new(IterableOfIterableOfK()._check(this[_maps][$map](IterableOfK(), dart.fn(m => m[$keys], MapOfK$VToIterableOfK()))));
      }
    }
    (CombinedMapView.new = function(maps) {
      this[_maps] = maps;
    }).prototype = CombinedMapView.prototype;
    dart.addTypeTests(CombinedMapView);
    CombinedMapView.prototype[_is_CombinedMapView_default] = true;
    dart.setMethodSignature(CombinedMapView, () => ({
      __proto__: dart.getMethods(CombinedMapView.__proto__),
      _get: dart.fnType(V, [core.Object]),
      [$_get]: dart.fnType(V, [core.Object])
    }));
    dart.setGetterSignature(CombinedMapView, () => ({
      __proto__: dart.getGetters(CombinedMapView.__proto__),
      keys: core.Iterable$(K),
      [$keys]: core.Iterable$(K)
    }));
    dart.setLibraryUri(CombinedMapView, "package:collection/src/combined_wrappers/combined_map.dart");
    dart.setFieldSignature(CombinedMapView, () => ({
      __proto__: dart.getFields(CombinedMapView.__proto__),
      [_maps]: dart.finalFieldType(IterableOfMapOfK$V())
    }));
    dart.defineExtensionMethods(CombinedMapView, ['_get']);
    dart.defineExtensionAccessors(CombinedMapView, ['keys']);
    return CombinedMapView;
  });
  src__combined_wrappers__combined_map.CombinedMapView = src__combined_wrappers__combined_map.CombinedMapView$();
  dart.addTypeTests(src__combined_wrappers__combined_map.CombinedMapView, _is_CombinedMapView_default);
  const _is_EqualityMap_default = Symbol('_is_EqualityMap_default');
  src__equality_map.EqualityMap$ = dart.generic((K, V) => {
    let LinkedHashMapOfK$V = () => (LinkedHashMapOfK$V = dart.constFn(collection.LinkedHashMap$(K, V)))();
    class EqualityMap extends src__wrappers.DelegatingMap$(K, V) {}
    (EqualityMap.new = function(equality) {
      EqualityMap.__proto__.new.call(this, LinkedHashMapOfK$V().new({equals: dart.bind(equality, 'equals'), hashCode: dart.bind(equality, 'hash'), isValidKey: dart.bind(equality, 'isValidKey')}));
    }).prototype = EqualityMap.prototype;
    (EqualityMap.from = function(equality, other) {
      EqualityMap.__proto__.new.call(this, LinkedHashMapOfK$V().new({equals: dart.bind(equality, 'equals'), hashCode: dart.bind(equality, 'hash'), isValidKey: dart.bind(equality, 'isValidKey')}));
      this.addAll(other);
    }).prototype = EqualityMap.prototype;
    dart.addTypeTests(EqualityMap);
    EqualityMap.prototype[_is_EqualityMap_default] = true;
    dart.setLibraryUri(EqualityMap, "package:collection/src/equality_map.dart");
    return EqualityMap;
  });
  src__equality_map.EqualityMap = src__equality_map.EqualityMap$();
  dart.addTypeTests(src__equality_map.EqualityMap, _is_EqualityMap_default);
  const _is_EqualitySet_default = Symbol('_is_EqualitySet_default');
  src__equality_set.EqualitySet$ = dart.generic(E => {
    let LinkedHashSetOfE = () => (LinkedHashSetOfE = dart.constFn(collection.LinkedHashSet$(E)))();
    class EqualitySet extends src__wrappers.DelegatingSet$(E) {}
    (EqualitySet.new = function(equality) {
      EqualitySet.__proto__.new.call(this, LinkedHashSetOfE().new({equals: dart.bind(equality, 'equals'), hashCode: dart.bind(equality, 'hash'), isValidKey: dart.bind(equality, 'isValidKey')}));
    }).prototype = EqualitySet.prototype;
    (EqualitySet.from = function(equality, other) {
      EqualitySet.__proto__.new.call(this, LinkedHashSetOfE().new({equals: dart.bind(equality, 'equals'), hashCode: dart.bind(equality, 'hash'), isValidKey: dart.bind(equality, 'isValidKey')}));
      this.addAll(other);
    }).prototype = EqualitySet.prototype;
    dart.addTypeTests(EqualitySet);
    EqualitySet.prototype[_is_EqualitySet_default] = true;
    dart.setLibraryUri(EqualitySet, "package:collection/src/equality_set.dart");
    return EqualitySet;
  });
  src__equality_set.EqualitySet = src__equality_set.EqualitySet$();
  dart.addTypeTests(src__equality_set.EqualitySet, _is_EqualitySet_default);
  src__functions.mapMap = function(K1, V1, K2, V2, map, opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let t = key;
    t == null ? key = dart.fn((mapKey, _) => K2.as(mapKey), dart.fnType(K2, [K1, V1])) : t;
    let t$ = value;
    t$ == null ? value = dart.fn((_, mapValue) => V2.as(mapValue), dart.fnType(V2, [K1, V1])) : t$;
    let result = new (_js_helper.LinkedMap$(K2, V2)).new();
    map[$forEach](dart.fn((mapKey, mapValue) => {
      result[$_set](key(mapKey, mapValue), value(mapKey, mapValue));
    }, dart.fnType(core.Null, [K1, V1])));
    return result;
  };
  src__functions.mergeMaps = function(K, V, map1, map2, opts) {
    let value = opts && 'value' in opts ? opts.value : null;
    let result = core.Map$(K, V).from(map1);
    if (value == null) {
      result[$addAll](map2);
      return result;
    }
    map2[$forEach](dart.fn((key, mapValue) => {
      result[$_set](key, dart.test(result[$containsKey](key)) ? value(result[$_get](key), mapValue) : mapValue);
    }, dart.fnType(core.Null, [K, V])));
    return result;
  };
  src__functions.groupBy = function(S, T, values, key) {
    let map = new (_js_helper.LinkedMap$(T, core.List$(S))).new();
    for (let element of values) {
      let list = map[$putIfAbsent](key(element), dart.fn(() => _interceptors.JSArray$(S).of([]), dart.fnType(core.List$(S), [])));
      list[$add](element);
    }
    return map;
  };
  src__functions.minBy = function(S, T, values, orderBy, opts) {
    let compare = opts && 'compare' in opts ? opts.compare : null;
    let t = compare;
    t == null ? compare = src__utils.defaultCompare(T) : t;
    let minValue = null;
    let minOrderBy = null;
    for (let element of values) {
      let elementOrderBy = orderBy(element);
      if (minOrderBy == null || dart.notNull(compare(elementOrderBy, minOrderBy)) < 0) {
        minValue = element;
        minOrderBy = elementOrderBy;
      }
    }
    return minValue;
  };
  src__functions.maxBy = function(S, T, values, orderBy, opts) {
    let compare = opts && 'compare' in opts ? opts.compare : null;
    let t = compare;
    t == null ? compare = src__utils.defaultCompare(T) : t;
    let maxValue = null;
    let maxOrderBy = null;
    for (let element of values) {
      let elementOrderBy = orderBy(element);
      if (maxOrderBy == null || dart.notNull(compare(elementOrderBy, maxOrderBy)) > 0) {
        maxValue = element;
        maxOrderBy = elementOrderBy;
      }
    }
    return maxValue;
  };
  src__functions.transitiveClosure = function(T, graph) {
    let result = new (_js_helper.LinkedMap$(T, core.Set$(T))).new();
    graph[$forEach](dart.fn((vertex, edges) => {
      result[$_set](vertex, core.Set$(T).from(edges));
    }, dart.fnType(core.Null, [T, core.Iterable$(T)])));
    let keys = graph[$keys][$toList]();
    for (let vertex1 of keys) {
      for (let vertex2 of keys) {
        for (let vertex3 of keys) {
          if (dart.test(result[$_get](vertex2).contains(vertex1)) && dart.test(result[$_get](vertex1).contains(vertex3))) {
            result[$_get](vertex2).add(vertex3);
          }
        }
      }
    }
    return result;
  };
  src__functions.stronglyConnectedComponents = function(T, graph) {
    let index = 0;
    let stack = _interceptors.JSArray$(T).of([]);
    let result = _interceptors.JSArray$(core.Set$(T)).of([]);
    let indices = new (_js_helper.LinkedMap$(T, core.int)).new();
    let lowLinks = new (_js_helper.LinkedMap$(T, core.int)).new();
    let onStack = new (collection._HashSet$(T)).new();
    function strongConnect(vertex) {
      indices._set(vertex, index);
      lowLinks._set(vertex, index);
      index++;
      stack[$add](vertex);
      onStack.add(vertex);
      for (let successor of graph[$_get](vertex)) {
        if (!dart.test(indices.containsKey(successor))) {
          strongConnect(successor);
          lowLinks._set(vertex, math.min(core.int, lowLinks._get(vertex), lowLinks._get(successor)));
        } else if (dart.test(onStack.contains(successor))) {
          lowLinks._set(vertex, math.min(core.int, lowLinks._get(vertex), lowLinks._get(successor)));
        }
      }
      if (lowLinks._get(vertex) == indices._get(vertex)) {
        let component = new (collection._HashSet$(T)).new();
        let neighbor = null;
        do {
          neighbor = stack[$removeLast]();
          onStack.remove(neighbor);
          component.add(neighbor);
        } while (!dart.equals(neighbor, vertex));
        result[$add](component);
      }
    }
    dart.fn(strongConnect, dart.fnType(core.Null, [T]));
    for (let vertex of graph[$keys]) {
      if (!dart.test(indices.containsKey(vertex))) strongConnect(vertex);
    }
    return result[$reversed][$toList]();
  };
  const _table = dart.privateName(src__queue_list, "_table");
  const _head = dart.privateName(src__queue_list, "_head");
  const _tail = dart.privateName(src__queue_list, "_tail");
  const _add = dart.privateName(src__queue_list, "_add");
  const _preGrow = dart.privateName(src__queue_list, "_preGrow");
  const _grow = dart.privateName(src__queue_list, "_grow");
  const _writeToList = dart.privateName(src__queue_list, "_writeToList");
  const _is_QueueList_default = Symbol('_is_QueueList_default');
  src__queue_list.QueueList$ = dart.generic(E => {
    let ListOfE = () => (ListOfE = dart.constFn(core.List$(E)))();
    let QueueListOfE = () => (QueueListOfE = dart.constFn(src__queue_list.QueueList$(E)))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    let QueueOfE = () => (QueueOfE = dart.constFn(collection.Queue$(E)))();
    const Object_ListMixin$ = class Object_ListMixin extends core.Object {};
    (Object_ListMixin$.new = function() {
    }).prototype = Object_ListMixin$.prototype;
    dart.applyMixin(Object_ListMixin$, collection.ListMixin$(E));
    class QueueList extends Object_ListMixin$ {
      static _castFrom(S, T, source) {
        return new (src__queue_list._CastQueueList$(S, T)).new(source);
      }
      get [_head]() {
        return this[_head$];
      }
      set [_head](value) {
        this[_head$] = value;
      }
      get [_tail]() {
        return this[_tail$];
      }
      set [_tail](value) {
        this[_tail$] = value;
      }
      static from(source) {
        if (core.List.is(source)) {
          let length = source[$length];
          let queue = new (QueueListOfE()).new(dart.notNull(length) + 1);
          if (!(dart.notNull(queue[_table][$length]) > dart.notNull(length))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/collection/src/queue_list.dart", 57, 14, "queue._table.length > length");
          let sourceList = source;
          queue[_table][$setRange](0, length, sourceList, 0);
          queue[_tail] = length;
          return queue;
        } else {
          let _ = new (QueueListOfE()).new();
          _.addAll(source);
          return _;
        }
      }
      add(element) {
        E._check(element);
        this[_add](element);
      }
      addAll(iterable) {
        IterableOfE()._check(iterable);
        if (core.List.is(iterable)) {
          let list = iterable;
          let addCount = list[$length];
          let length = this.length;
          if (dart.notNull(length) + dart.notNull(addCount) >= dart.notNull(this[_table][$length])) {
            this[_preGrow](dart.notNull(length) + dart.notNull(addCount));
            this[_table][$setRange](length, dart.notNull(length) + dart.notNull(addCount), list, 0);
            this[_tail] = dart.notNull(this[_tail]) + dart.notNull(addCount);
          } else {
            let endSpace = dart.notNull(this[_table][$length]) - dart.notNull(this[_tail]);
            if (dart.notNull(addCount) < endSpace) {
              this[_table][$setRange](this[_tail], dart.notNull(this[_tail]) + dart.notNull(addCount), list, 0);
              this[_tail] = dart.notNull(this[_tail]) + dart.notNull(addCount);
            } else {
              let preSpace = dart.notNull(addCount) - endSpace;
              this[_table][$setRange](this[_tail], dart.notNull(this[_tail]) + endSpace, list, 0);
              this[_table][$setRange](0, preSpace, list, endSpace);
              this[_tail] = preSpace;
            }
          }
        } else {
          for (let element of iterable)
            this[_add](element);
        }
      }
      cast(T) {
        return src__queue_list.QueueList._castFrom(E, T, this);
      }
      retype(T) {
        return this.cast(T);
      }
      toString() {
        return collection.IterableBase.iterableToFullString(this, "{", "}");
      }
      addLast(element) {
        E._check(element);
        this[_add](element);
      }
      addFirst(element) {
        E._check(element);
        this[_head] = (dart.notNull(this[_head]) - 1 & dart.notNull(this[_table][$length]) - 1) >>> 0;
        this[_table][$_set](this[_head], element);
        if (this[_head] == this[_tail]) this[_grow]();
      }
      removeFirst() {
        if (this[_head] == this[_tail]) dart.throw(new core.StateError.new("No element"));
        let result = this[_table][$_get](this[_head]);
        this[_table][$_set](this[_head], null);
        this[_head] = (dart.notNull(this[_head]) + 1 & dart.notNull(this[_table][$length]) - 1) >>> 0;
        return result;
      }
      removeLast() {
        if (this[_head] == this[_tail]) dart.throw(new core.StateError.new("No element"));
        this[_tail] = (dart.notNull(this[_tail]) - 1 & dart.notNull(this[_table][$length]) - 1) >>> 0;
        let result = this[_table][$_get](this[_tail]);
        this[_table][$_set](this[_tail], null);
        return result;
      }
      get length() {
        return (dart.notNull(this[_tail]) - dart.notNull(this[_head]) & dart.notNull(this[_table][$length]) - 1) >>> 0;
      }
      set length(value) {
        if (dart.notNull(value) < 0) dart.throw(new core.RangeError.new("Length " + dart.str(value) + " may not be negative."));
        let delta = dart.notNull(value) - dart.notNull(this.length);
        if (delta >= 0) {
          if (dart.notNull(this[_table][$length]) <= dart.notNull(value)) {
            this[_preGrow](value);
          }
          this[_tail] = (dart.notNull(this[_tail]) + delta & dart.notNull(this[_table][$length]) - 1) >>> 0;
          return;
        }
        let newTail = dart.notNull(this[_tail]) + delta;
        if (newTail >= 0) {
          this[_table][$fillRange](newTail, this[_tail], null);
        } else {
          newTail = newTail + dart.notNull(this[_table][$length]);
          this[_table][$fillRange](0, this[_tail], null);
          this[_table][$fillRange](newTail, this[_table][$length], null);
        }
        this[_tail] = newTail;
      }
      _get(index) {
        if (dart.notNull(index) < 0 || dart.notNull(index) >= dart.notNull(this.length)) {
          dart.throw(new core.RangeError.new("Index " + dart.str(index) + " must be in the range [0.." + dart.str(this.length) + ")."));
        }
        return this[_table][$_get]((dart.notNull(this[_head]) + dart.notNull(index) & dart.notNull(this[_table][$length]) - 1) >>> 0);
      }
      _set(index, value) {
        E._check(value);
        if (dart.notNull(index) < 0 || dart.notNull(index) >= dart.notNull(this.length)) {
          dart.throw(new core.RangeError.new("Index " + dart.str(index) + " must be in the range [0.." + dart.str(this.length) + ")."));
        }
        this[_table][$_set]((dart.notNull(this[_head]) + dart.notNull(index) & dart.notNull(this[_table][$length]) - 1) >>> 0, value);
        return value;
      }
      static _isPowerOf2(number) {
        return (dart.notNull(number) & dart.notNull(number) - 1) === 0;
      }
      static _nextPowerOf2(number) {
        if (!(dart.notNull(number) > 0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/collection/src/queue_list.dart", 192, 12, "number > 0");
        number = (dart.notNull(number) << 1 >>> 0) - 1;
        for (;;) {
          let nextNumber = (dart.notNull(number) & dart.notNull(number) - 1) >>> 0;
          if (nextNumber === 0) return number;
          number = nextNumber;
        }
      }
      [_add](element) {
        E._check(element);
        this[_table][$_set](this[_tail], element);
        this[_tail] = (dart.notNull(this[_tail]) + 1 & dart.notNull(this[_table][$length]) - 1) >>> 0;
        if (this[_head] == this[_tail]) this[_grow]();
      }
      [_grow]() {
        let newTable = ListOfE().new(dart.notNull(this[_table][$length]) * 2);
        let split = dart.notNull(this[_table][$length]) - dart.notNull(this[_head]);
        newTable[$setRange](0, split, this[_table], this[_head]);
        newTable[$setRange](split, split + dart.notNull(this[_head]), this[_table], 0);
        this[_head] = 0;
        this[_tail] = this[_table][$length];
        this[_table] = newTable;
      }
      [_writeToList](target) {
        ListOfE()._check(target);
        if (!(dart.notNull(target[$length]) >= dart.notNull(this.length))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/collection/src/queue_list.dart", 220, 12, "target.length >= length");
        if (dart.notNull(this[_head]) <= dart.notNull(this[_tail])) {
          let length = dart.notNull(this[_tail]) - dart.notNull(this[_head]);
          target[$setRange](0, length, this[_table], this[_head]);
          return length;
        } else {
          let firstPartSize = dart.notNull(this[_table][$length]) - dart.notNull(this[_head]);
          target[$setRange](0, firstPartSize, this[_table], this[_head]);
          target[$setRange](firstPartSize, firstPartSize + dart.notNull(this[_tail]), this[_table], 0);
          return dart.notNull(this[_tail]) + firstPartSize;
        }
      }
      [_preGrow](newElementCount) {
        if (!(dart.notNull(newElementCount) >= dart.notNull(this.length))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/collection/src/queue_list.dart", 235, 12, "newElementCount >= length");
        newElementCount = dart.notNull(newElementCount) + newElementCount[$rightShift](1);
        let newCapacity = src__queue_list.QueueList._nextPowerOf2(newElementCount);
        let newTable = ListOfE().new(newCapacity);
        this[_tail] = this[_writeToList](newTable);
        this[_table] = newTable;
        this[_head] = 0;
      }
    }
    (QueueList.new = function(initialCapacity) {
      if (initialCapacity === void 0) initialCapacity = null;
      this[_table] = null;
      this[_head$] = 0;
      this[_tail$] = 0;
      if (initialCapacity == null || dart.notNull(initialCapacity) < 8) {
        initialCapacity = 8;
      } else if (!dart.test(src__queue_list.QueueList._isPowerOf2(initialCapacity))) {
        initialCapacity = src__queue_list.QueueList._nextPowerOf2(initialCapacity);
      }
      if (!dart.test(src__queue_list.QueueList._isPowerOf2(initialCapacity))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/collection/src/queue_list.dart", 45, 12, "_isPowerOf2(initialCapacity)");
      this[_table] = ListOfE().new(initialCapacity);
    }).prototype = QueueList.prototype;
    (QueueList.__ = function() {
      this[_table] = null;
      this[_head$] = null;
      this[_tail$] = null;
    }).prototype = QueueList.prototype;
    dart.addTypeTests(QueueList);
    QueueList.prototype[_is_QueueList_default] = true;
    const _head$ = Symbol("QueueList._head");
    const _tail$ = Symbol("QueueList._tail");
    QueueList[dart.implements] = () => [QueueOfE()];
    dart.setMethodSignature(QueueList, () => ({
      __proto__: dart.getMethods(QueueList.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      [$add]: dart.fnType(dart.void, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      [$addAll]: dart.fnType(dart.void, [core.Object]),
      cast: dart.gFnType(T => [src__queue_list.QueueList$(T), []]),
      [$cast]: dart.gFnType(T => [src__queue_list.QueueList$(T), []]),
      retype: dart.gFnType(T => [src__queue_list.QueueList$(T), []]),
      addLast: dart.fnType(dart.void, [core.Object]),
      addFirst: dart.fnType(dart.void, [core.Object]),
      removeFirst: dart.fnType(E, []),
      _get: dart.fnType(E, [core.int]),
      [$_get]: dart.fnType(E, [core.int]),
      _set: dart.fnType(dart.void, [core.int, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.int, core.Object]),
      [_add]: dart.fnType(dart.void, [core.Object]),
      [_grow]: dart.fnType(dart.void, []),
      [_writeToList]: dart.fnType(core.int, [core.Object]),
      [_preGrow]: dart.fnType(dart.void, [core.int])
    }));
    dart.setGetterSignature(QueueList, () => ({
      __proto__: dart.getGetters(QueueList.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setSetterSignature(QueueList, () => ({
      __proto__: dart.getSetters(QueueList.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setLibraryUri(QueueList, "package:collection/src/queue_list.dart");
    dart.setFieldSignature(QueueList, () => ({
      __proto__: dart.getFields(QueueList.__proto__),
      [_table]: dart.fieldType(ListOfE()),
      [_head]: dart.fieldType(core.int),
      [_tail]: dart.fieldType(core.int)
    }));
    dart.defineExtensionMethods(QueueList, [
      'add',
      'addAll',
      'cast',
      'toString',
      'removeLast',
      '_get',
      '_set'
    ]);
    dart.defineExtensionAccessors(QueueList, ['length']);
    return QueueList;
  });
  src__queue_list.QueueList = src__queue_list.QueueList$();
  dart.defineLazy(src__queue_list.QueueList, {
    /*src__queue_list.QueueList._INITIAL_CAPACITY*/get _INITIAL_CAPACITY() {
      return 8;
    }
  });
  dart.addTypeTests(src__queue_list.QueueList, _is_QueueList_default);
  const _delegate = dart.privateName(src__queue_list, "_delegate");
  const _is__CastQueueList_default = Symbol('_is__CastQueueList_default');
  src__queue_list._CastQueueList$ = dart.generic((S, T) => {
    let QueueListOfS = () => (QueueListOfS = dart.constFn(src__queue_list.QueueList$(S)))();
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    class _CastQueueList extends src__queue_list.QueueList$(T) {
      get [_head]() {
        return this[_delegate][_head];
      }
      set [_head](value) {
        return this[_delegate][_head] = value;
      }
      get [_tail]() {
        return this[_delegate][_tail];
      }
      set [_tail](value) {
        return this[_delegate][_tail] = value;
      }
    }
    (_CastQueueList.new = function(delegate) {
      this[_delegate] = delegate;
      _CastQueueList.__proto__.__.call(this);
      this[_table] = ListOfT()._check(this[_delegate][_table][$cast](T));
    }).prototype = _CastQueueList.prototype;
    dart.addTypeTests(_CastQueueList);
    _CastQueueList.prototype[_is__CastQueueList_default] = true;
    dart.setGetterSignature(_CastQueueList, () => ({
      __proto__: dart.getGetters(_CastQueueList.__proto__),
      [_head]: core.int,
      [_tail]: core.int
    }));
    dart.setSetterSignature(_CastQueueList, () => ({
      __proto__: dart.getSetters(_CastQueueList.__proto__),
      [_head]: core.int,
      [_tail]: core.int
    }));
    dart.setLibraryUri(_CastQueueList, "package:collection/src/queue_list.dart");
    dart.setFieldSignature(_CastQueueList, () => ({
      __proto__: dart.getFields(_CastQueueList.__proto__),
      [_delegate]: dart.finalFieldType(QueueListOfS())
    }));
    return _CastQueueList;
  });
  src__queue_list._CastQueueList = src__queue_list._CastQueueList$();
  dart.addTypeTests(src__queue_list._CastQueueList, _is__CastQueueList_default);
  const _sets = dart.privateName(src__union_set, "_sets");
  const _disjoint = dart.privateName(src__union_set, "_disjoint");
  const _iterable = dart.privateName(src__union_set, "_iterable");
  const _dedupIterable = dart.privateName(src__union_set, "_dedupIterable");
  const _is_UnionSet_default = Symbol('_is_UnionSet_default');
  src__union_set.UnionSet$ = dart.generic(E => {
    let SetOfE = () => (SetOfE = dart.constFn(core.Set$(E)))();
    let intAndSetOfEToint = () => (intAndSetOfEToint = dart.constFn(dart.fnType(core.int, [core.int, SetOfE()])))();
    let SetOfEToSetOfE = () => (SetOfEToSetOfE = dart.constFn(dart.fnType(SetOfE(), [SetOfE()])))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    let _HashSetOfE = () => (_HashSetOfE = dart.constFn(collection._HashSet$(E)))();
    let ETobool = () => (ETobool = dart.constFn(dart.fnType(core.bool, [E])))();
    let SetOfETobool = () => (SetOfETobool = dart.constFn(dart.fnType(core.bool, [SetOfE()])))();
    let SetOfEToE = () => (SetOfEToE = dart.constFn(dart.fnType(E, [SetOfE()])))();
    let SetOfSetOfE = () => (SetOfSetOfE = dart.constFn(core.Set$(SetOfE())))();
    const SetBase_UnmodifiableSetMixin$ = class SetBase_UnmodifiableSetMixin extends collection.SetBase$(E) {};
    (SetBase_UnmodifiableSetMixin$.new = function() {
    }).prototype = SetBase_UnmodifiableSetMixin$.prototype;
    dart.applyMixin(SetBase_UnmodifiableSetMixin$, src__unmodifiable_wrappers.UnmodifiableSetMixin$(E));
    class UnionSet extends SetBase_UnmodifiableSetMixin$ {
      get length() {
        return dart.test(this[_disjoint]) ? this[_sets].fold(core.int, 0, dart.fn((length, set) => dart.notNull(length) + dart.notNull(set.length), intAndSetOfEToint())) : this[_iterable][$length];
      }
      get iterator() {
        return this[_iterable][$iterator];
      }
      get [_iterable]() {
        return dart.test(this[_disjoint]) ? IterableOfE()._check(this[_sets].expand(E, dart.fn(set => set, SetOfEToSetOfE()))) : this[_dedupIterable];
      }
      get [_dedupIterable]() {
        let seen = new (_HashSetOfE()).new();
        return IterableOfE()._check(this[_sets].expand(E, dart.fn(set => set, SetOfEToSetOfE())))[$where](dart.fn(element => {
          if (dart.test(seen.contains(element))) return false;
          seen.add(element);
          return true;
        }, ETobool()));
      }
      contains(element) {
        return this[_sets].any(dart.fn(set => set.contains(element), SetOfETobool()));
      }
      lookup(element) {
        if (element == null) return null;
        return IterableOfE()._check(this[_sets].map(E, dart.fn(set => set.lookup(element), SetOfEToE())))[$firstWhere](dart.fn(result => result != null, ETobool()), {orElse: dart.fn(() => null, VoidToNull())});
      }
      toSet() {
        let result = new (_HashSetOfE()).new();
        for (let set of this[_sets]) {
          result.addAll(set);
        }
        return result;
      }
    }
    (UnionSet.new = function(sets, opts) {
      let disjoint = opts && 'disjoint' in opts ? opts.disjoint : false;
      this[_sets] = sets;
      this[_disjoint] = disjoint;
    }).prototype = UnionSet.prototype;
    (UnionSet.from = function(sets, opts) {
      let disjoint = opts && 'disjoint' in opts ? opts.disjoint : false;
      UnionSet.new.call(this, sets[$toSet](), {disjoint: disjoint});
    }).prototype = UnionSet.prototype;
    dart.addTypeTests(UnionSet);
    UnionSet.prototype[_is_UnionSet_default] = true;
    dart.setMethodSignature(UnionSet, () => ({
      __proto__: dart.getMethods(UnionSet.__proto__),
      contains: dart.fnType(core.bool, [core.Object]),
      [$contains]: dart.fnType(core.bool, [core.Object]),
      lookup: dart.fnType(E, [core.Object]),
      toSet: dart.fnType(core.Set$(E), []),
      [$toSet]: dart.fnType(core.Set$(E), [])
    }));
    dart.setGetterSignature(UnionSet, () => ({
      __proto__: dart.getGetters(UnionSet.__proto__),
      length: core.int,
      [$length]: core.int,
      iterator: core.Iterator$(E),
      [$iterator]: core.Iterator$(E),
      [_iterable]: core.Iterable$(E),
      [_dedupIterable]: core.Iterable$(E)
    }));
    dart.setLibraryUri(UnionSet, "package:collection/src/union_set.dart");
    dart.setFieldSignature(UnionSet, () => ({
      __proto__: dart.getFields(UnionSet.__proto__),
      [_sets]: dart.finalFieldType(SetOfSetOfE()),
      [_disjoint]: dart.finalFieldType(core.bool)
    }));
    dart.defineExtensionMethods(UnionSet, ['contains', 'toSet']);
    dart.defineExtensionAccessors(UnionSet, ['length', 'iterator']);
    return UnionSet;
  });
  src__union_set.UnionSet = src__union_set.UnionSet$();
  dart.addTypeTests(src__union_set.UnionSet, _is_UnionSet_default);
  const _set = dart.privateName(src__union_set_controller, "_set");
  const _sets$ = dart.privateName(src__union_set_controller, "_sets");
  const _is_UnionSetController_default = Symbol('_is_UnionSetController_default');
  src__union_set_controller.UnionSetController$ = dart.generic(E => {
    let SetOfE = () => (SetOfE = dart.constFn(core.Set$(E)))();
    let _HashSetOfSetOfE = () => (_HashSetOfSetOfE = dart.constFn(collection._HashSet$(SetOfE())))();
    let UnionSetOfE = () => (UnionSetOfE = dart.constFn(src__union_set.UnionSet$(E)))();
    let SetOfSetOfE = () => (SetOfSetOfE = dart.constFn(core.Set$(SetOfE())))();
    class UnionSetController extends core.Object {
      get set() {
        return this[_set];
      }
      add(component) {
        SetOfE()._check(component);
        this[_sets$].add(component);
      }
      remove(component) {
        SetOfE()._check(component);
        return this[_sets$].remove(component);
      }
    }
    (UnionSetController.new = function(opts) {
      let disjoint = opts && 'disjoint' in opts ? opts.disjoint : false;
      this[_set] = null;
      this[_sets$] = new (_HashSetOfSetOfE()).new();
      this[_set] = new (UnionSetOfE()).new(this[_sets$], {disjoint: disjoint});
    }).prototype = UnionSetController.prototype;
    dart.addTypeTests(UnionSetController);
    UnionSetController.prototype[_is_UnionSetController_default] = true;
    dart.setMethodSignature(UnionSetController, () => ({
      __proto__: dart.getMethods(UnionSetController.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      remove: dart.fnType(core.bool, [core.Object])
    }));
    dart.setGetterSignature(UnionSetController, () => ({
      __proto__: dart.getGetters(UnionSetController.__proto__),
      set: src__union_set.UnionSet$(E)
    }));
    dart.setLibraryUri(UnionSetController, "package:collection/src/union_set_controller.dart");
    dart.setFieldSignature(UnionSetController, () => ({
      __proto__: dart.getFields(UnionSetController.__proto__),
      [_set]: dart.fieldType(UnionSetOfE()),
      [_sets$]: dart.finalFieldType(SetOfSetOfE())
    }));
    return UnionSetController;
  });
  src__union_set_controller.UnionSetController = src__union_set_controller.UnionSetController$();
  dart.addTypeTests(src__union_set_controller.UnionSetController, _is_UnionSetController_default);
  dart.trackLibraries("packages/collection/collection.ddc", {
    "package:collection/collection.dart": collection$,
    "package:collection/src/combined_wrappers/combined_iterable.dart": src__combined_wrappers__combined_iterable,
    "package:collection/src/combined_wrappers/combined_list.dart": src__combined_wrappers__combined_list,
    "package:collection/src/combined_wrappers/combined_map.dart": src__combined_wrappers__combined_map,
    "package:collection/src/equality_map.dart": src__equality_map,
    "package:collection/src/equality_set.dart": src__equality_set,
    "package:collection/src/functions.dart": src__functions,
    "package:collection/src/queue_list.dart": src__queue_list,
    "package:collection/src/union_set.dart": src__union_set,
    "package:collection/src/union_set_controller.dart": src__union_set_controller
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/combined_wrappers/combined_iterable.dart","src/combined_wrappers/combined_list.dart","src/combined_wrappers/combined_map.dart","src/equality_map.dart","src/equality_set.dart","src/functions.dart","src/queue_list.dart","src/union_set.dart","src/union_set_controller.dart"],"names":[],"mappings":"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","file":"collection.ddc.js"}');
  // Exports:
  return {
    collection: collection$,
    src__combined_wrappers__combined_iterable: src__combined_wrappers__combined_iterable,
    src__combined_wrappers__combined_list: src__combined_wrappers__combined_list,
    src__combined_wrappers__combined_map: src__combined_wrappers__combined_map,
    src__equality_map: src__equality_map,
    src__equality_set: src__equality_set,
    src__functions: src__functions,
    src__queue_list: src__queue_list,
    src__union_set: src__union_set,
    src__union_set_controller: src__union_set_controller
  };
});

//# sourceMappingURL=collection.ddc.js.map

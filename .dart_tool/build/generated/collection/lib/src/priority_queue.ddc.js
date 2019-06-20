define(['dart_sdk', 'packages/collection/src/utils'], function(dart_sdk, utils) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__utils = utils.src__utils;
  const src__priority_queue = Object.create(dart.library);
  const $_get = dartx._get;
  const $take = dartx.take;
  const $length = dartx.length;
  const $setRange = dartx.setRange;
  const $sort = dartx.sort;
  const $toString = dartx.toString;
  const $isOdd = dartx.isOdd;
  const $rightShift = dartx['>>'];
  const $_set = dartx._set;
  const $truncate = dartx.truncate;
  const _is_PriorityQueue_default = Symbol('_is_PriorityQueue_default');
  src__priority_queue.PriorityQueue$ = dart.generic(E => {
    let HeapPriorityQueueOfE = () => (HeapPriorityQueueOfE = dart.constFn(src__priority_queue.HeapPriorityQueue$(E)))();
    class PriorityQueue extends core.Object {
      static new(comparison) {
        return new (HeapPriorityQueueOfE()).new(comparison);
      }
    }
    (PriorityQueue[dart.mixinNew] = function() {
    }).prototype = PriorityQueue.prototype;
    dart.addTypeTests(PriorityQueue);
    PriorityQueue.prototype[_is_PriorityQueue_default] = true;
    dart.setLibraryUri(PriorityQueue, "package:collection/src/priority_queue.dart");
    return PriorityQueue;
  });
  src__priority_queue.PriorityQueue = src__priority_queue.PriorityQueue$();
  dart.addTypeTests(src__priority_queue.PriorityQueue, _is_PriorityQueue_default);
  const _queue = dart.privateName(src__priority_queue, "_queue");
  const _length = dart.privateName(src__priority_queue, "_length");
  const _add = dart.privateName(src__priority_queue, "_add");
  let const$;
  const _locate = dart.privateName(src__priority_queue, "_locate");
  const _removeLast = dart.privateName(src__priority_queue, "_removeLast");
  const _bubbleUp = dart.privateName(src__priority_queue, "_bubbleUp");
  const _bubbleDown = dart.privateName(src__priority_queue, "_bubbleDown");
  let const$0;
  const _grow = dart.privateName(src__priority_queue, "_grow");
  const _is_HeapPriorityQueue_default = Symbol('_is_HeapPriorityQueue_default');
  src__priority_queue.HeapPriorityQueue$ = dart.generic(E => {
    let ListOfE = () => (ListOfE = dart.constFn(core.List$(E)))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    let JSArrayOfE = () => (JSArrayOfE = dart.constFn(_interceptors.JSArray$(E)))();
    let SplayTreeSetOfE = () => (SplayTreeSetOfE = dart.constFn(collection.SplayTreeSet$(E)))();
    let PriorityQueueOfE = () => (PriorityQueueOfE = dart.constFn(src__priority_queue.PriorityQueue$(E)))();
    let EAndEToint = () => (EAndEToint = dart.constFn(dart.fnType(core.int, [E, E])))();
    class HeapPriorityQueue extends core.Object {
      get comparison() {
        return this[comparison$];
      }
      set comparison(value) {
        super.comparison = value;
      }
      add(element) {
        E._check(element);
        this[_add](element);
      }
      addAll(elements) {
        IterableOfE()._check(elements);
        for (let element of elements) {
          this[_add](element);
        }
      }
      clear() {
        this[_queue] = const$ || (const$ = dart.constList([], core.Null));
        this[_length] = 0;
      }
      contains(object) {
        E._check(object);
        return dart.notNull(this[_locate](object)) >= 0;
      }
      get first() {
        if (this[_length] === 0) dart.throw(new core.StateError.new("No such element"));
        return this[_queue][$_get](0);
      }
      get isEmpty() {
        return this[_length] === 0;
      }
      get isNotEmpty() {
        return this[_length] !== 0;
      }
      get length() {
        return this[_length];
      }
      remove(element) {
        E._check(element);
        let index = this[_locate](element);
        if (dart.notNull(index) < 0) return false;
        let last = this[_removeLast]();
        if (dart.notNull(index) < dart.notNull(this[_length])) {
          let comp = this.comparison(last, element);
          if (dart.notNull(comp) <= 0) {
            this[_bubbleUp](last, index);
          } else {
            this[_bubbleDown](last, index);
          }
        }
        return true;
      }
      removeAll() {
        let result = this[_queue];
        let length = this[_length];
        this[_queue] = const$0 || (const$0 = dart.constList([], core.Null));
        this[_length] = 0;
        return result[$take](length);
      }
      removeFirst() {
        if (this[_length] === 0) dart.throw(new core.StateError.new("No such element"));
        let result = this[_queue][$_get](0);
        let last = this[_removeLast]();
        if (dart.notNull(this[_length]) > 0) {
          this[_bubbleDown](last, 0);
        }
        return result;
      }
      toList() {
        let list = JSArrayOfE().of([]);
        list[$length] = this[_length];
        list[$setRange](0, this[_length], this[_queue]);
        list[$sort](this.comparison);
        return list;
      }
      toSet() {
        let set = new (SplayTreeSetOfE()).new(this.comparison);
        for (let i = 0; i < dart.notNull(this[_length]); i++) {
          set.add(this[_queue][$_get](i));
        }
        return set;
      }
      toString() {
        return dart.toString(this[_queue][$take](this[_length]));
      }
      [_add](element) {
        E._check(element);
        if (this[_length] == this[_queue][$length]) this[_grow]();
        this[_bubbleUp](element, (() => {
          let x = this[_length];
          this[_length] = dart.notNull(x) + 1;
          return x;
        })());
      }
      [_locate](object) {
        E._check(object);
        if (this[_length] === 0) return -1;
        let position = 1;
        do {
          let index = position - 1;
          let element = this[_queue][$_get](index);
          let comp = this.comparison(element, object);
          if (comp === 0) return index;
          if (dart.notNull(comp) < 0) {
            let leftChildPosition = position * 2;
            if (leftChildPosition <= dart.notNull(this[_length])) {
              position = leftChildPosition;
              continue;
            }
          }
          do {
            while (position[$isOdd]) {
              position = position[$rightShift](1);
            }
            position = position + 1;
          } while (position > dart.notNull(this[_length]));
        } while (position !== 1);
        return -1;
      }
      [_removeLast]() {
        let newLength = dart.notNull(this[_length]) - 1;
        let last = this[_queue][$_get](newLength);
        this[_queue][$_set](newLength, null);
        this[_length] = newLength;
        return last;
      }
      [_bubbleUp](element, index) {
        E._check(element);
        while (dart.notNull(index) > 0) {
          let parentIndex = ((dart.notNull(index) - 1) / 2)[$truncate]();
          let parent = this[_queue][$_get](parentIndex);
          if (dart.notNull(this.comparison(element, parent)) > 0) break;
          this[_queue][$_set](index, parent);
          index = parentIndex;
        }
        this[_queue][$_set](index, element);
      }
      [_bubbleDown](element, index) {
        E._check(element);
        let rightChildIndex = dart.notNull(index) * 2 + 2;
        while (rightChildIndex < dart.notNull(this[_length])) {
          let leftChildIndex = rightChildIndex - 1;
          let leftChild = this[_queue][$_get](leftChildIndex);
          let rightChild = this[_queue][$_get](rightChildIndex);
          let comp = this.comparison(leftChild, rightChild);
          let minChildIndex = null;
          let minChild = null;
          if (dart.notNull(comp) < 0) {
            minChild = leftChild;
            minChildIndex = leftChildIndex;
          } else {
            minChild = rightChild;
            minChildIndex = rightChildIndex;
          }
          comp = this.comparison(element, minChild);
          if (dart.notNull(comp) <= 0) {
            this[_queue][$_set](index, element);
            return;
          }
          this[_queue][$_set](index, minChild);
          index = minChildIndex;
          rightChildIndex = dart.notNull(index) * 2 + 2;
        }
        let leftChildIndex = rightChildIndex - 1;
        if (leftChildIndex < dart.notNull(this[_length])) {
          let child = this[_queue][$_get](leftChildIndex);
          let comp = this.comparison(element, child);
          if (dart.notNull(comp) > 0) {
            this[_queue][$_set](index, child);
            index = leftChildIndex;
          }
        }
        this[_queue][$_set](index, element);
      }
      [_grow]() {
        let newCapacity = dart.notNull(this[_queue][$length]) * 2 + 1;
        if (newCapacity < 7) newCapacity = 7;
        let newQueue = ListOfE().new(newCapacity);
        newQueue[$setRange](0, this[_length], this[_queue]);
        this[_queue] = newQueue;
      }
    }
    (HeapPriorityQueue.new = function(comparison) {
      if (comparison === void 0) comparison = null;
      this[_queue] = ListOfE().new(7);
      this[_length] = 0;
      this[comparison$] = comparison != null ? comparison : src__utils.defaultCompare(E);
    }).prototype = HeapPriorityQueue.prototype;
    dart.addTypeTests(HeapPriorityQueue);
    HeapPriorityQueue.prototype[_is_HeapPriorityQueue_default] = true;
    const comparison$ = Symbol("HeapPriorityQueue.comparison");
    HeapPriorityQueue[dart.implements] = () => [PriorityQueueOfE()];
    dart.setMethodSignature(HeapPriorityQueue, () => ({
      __proto__: dart.getMethods(HeapPriorityQueue.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      clear: dart.fnType(dart.void, []),
      contains: dart.fnType(core.bool, [core.Object]),
      remove: dart.fnType(core.bool, [core.Object]),
      removeAll: dart.fnType(core.Iterable$(E), []),
      removeFirst: dart.fnType(E, []),
      toList: dart.fnType(core.List$(E), []),
      toSet: dart.fnType(core.Set$(E), []),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, []),
      [_add]: dart.fnType(dart.void, [core.Object]),
      [_locate]: dart.fnType(core.int, [core.Object]),
      [_removeLast]: dart.fnType(E, []),
      [_bubbleUp]: dart.fnType(dart.void, [core.Object, core.int]),
      [_bubbleDown]: dart.fnType(dart.void, [core.Object, core.int]),
      [_grow]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(HeapPriorityQueue, () => ({
      __proto__: dart.getGetters(HeapPriorityQueue.__proto__),
      first: E,
      isEmpty: core.bool,
      isNotEmpty: core.bool,
      length: core.int
    }));
    dart.setLibraryUri(HeapPriorityQueue, "package:collection/src/priority_queue.dart");
    dart.setFieldSignature(HeapPriorityQueue, () => ({
      __proto__: dart.getFields(HeapPriorityQueue.__proto__),
      comparison: dart.finalFieldType(EAndEToint()),
      [_queue]: dart.fieldType(ListOfE()),
      [_length]: dart.fieldType(core.int)
    }));
    dart.defineExtensionMethods(HeapPriorityQueue, ['toString']);
    return HeapPriorityQueue;
  });
  src__priority_queue.HeapPriorityQueue = src__priority_queue.HeapPriorityQueue$();
  dart.defineLazy(src__priority_queue.HeapPriorityQueue, {
    /*src__priority_queue.HeapPriorityQueue._INITIAL_CAPACITY*/get _INITIAL_CAPACITY() {
      return 7;
    }
  });
  dart.addTypeTests(src__priority_queue.HeapPriorityQueue, _is_HeapPriorityQueue_default);
  dart.trackLibraries("packages/collection/src/priority_queue.ddc", {
    "package:collection/src/priority_queue.dart": src__priority_queue
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["priority_queue.dart"],"names":[],"mappings":"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","file":"priority_queue.ddc.js"}');
  // Exports:
  return {
    src__priority_queue: src__priority_queue
  };
});

//# sourceMappingURL=priority_queue.ddc.js.map

define(['dart_sdk', 'packages/collection/src/utils'], function(dart_sdk, utils) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__utils = utils.src__utils;
  const src__algorithms = Object.create(dart.library);
  const $length = dartx.length;
  const $rightShift = dartx['>>'];
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $setRange = dartx.setRange;
  src__algorithms.binarySearch = function(T, sortedList, value, opts) {
    let compare = opts && 'compare' in opts ? opts.compare : null;
    let t = compare;
    t == null ? compare = src__utils.defaultCompare(T) : t;
    let min = 0;
    let max = sortedList[$length];
    while (min < dart.notNull(max)) {
      let mid = min + (dart.notNull(max) - min)[$rightShift](1);
      let element = sortedList[$_get](mid);
      let comp = compare(element, value);
      if (comp === 0) return mid;
      if (dart.notNull(comp) < 0) {
        min = mid + 1;
      } else {
        max = mid;
      }
    }
    return -1;
  };
  src__algorithms.lowerBound = function(T, sortedList, value, opts) {
    let compare = opts && 'compare' in opts ? opts.compare : null;
    let t = compare;
    t == null ? compare = src__utils.defaultCompare(T) : t;
    let min = 0;
    let max = sortedList[$length];
    while (min < dart.notNull(max)) {
      let mid = min + (dart.notNull(max) - min)[$rightShift](1);
      let element = sortedList[$_get](mid);
      let comp = compare(element, value);
      if (dart.notNull(comp) < 0) {
        min = mid + 1;
      } else {
        max = mid;
      }
    }
    return min;
  };
  src__algorithms.shuffle = function(list, start, end) {
    if (start === void 0) start = 0;
    if (end === void 0) end = null;
    let random = math.Random.new();
    if (end == null) end = list[$length];
    let length = dart.notNull(end) - dart.notNull(start);
    while (length > 1) {
      let pos = random.nextInt(length);
      length--;
      let tmp1 = list[$_get](dart.notNull(start) + dart.notNull(pos));
      list[$_set](dart.notNull(start) + dart.notNull(pos), list[$_get](dart.notNull(start) + length));
      list[$_set](dart.notNull(start) + length, tmp1);
    }
  };
  src__algorithms.reverse = function(list, start, end) {
    if (start === void 0) start = 0;
    if (end === void 0) end = null;
    if (end == null) end = list[$length];
    src__algorithms._reverse(list, start, end);
  };
  src__algorithms._reverse = function(list, start, end) {
    for (let i = start, j = dart.notNull(end) - 1; dart.notNull(i) < j; i = dart.notNull(i) + 1, j--) {
      let tmp = list[$_get](i);
      list[$_set](i, list[$_get](j));
      list[$_set](j, tmp);
    }
  };
  src__algorithms.insertionSort = function(T, list, opts) {
    let compare = opts && 'compare' in opts ? opts.compare : null;
    let start = opts && 'start' in opts ? opts.start : 0;
    let end = opts && 'end' in opts ? opts.end : null;
    let t = compare;
    t == null ? compare = src__utils.defaultCompare(T) : t;
    let t$ = end;
    t$ == null ? end = list[$length] : t$;
    for (let pos = dart.notNull(start) + 1; pos < dart.notNull(end); pos++) {
      let min = start;
      let max = pos;
      let element = list[$_get](pos);
      while (dart.notNull(min) < max) {
        let mid = dart.notNull(min) + (max - dart.notNull(min))[$rightShift](1);
        let comparison = compare(element, list[$_get](mid));
        if (dart.notNull(comparison) < 0) {
          max = mid;
        } else {
          min = mid + 1;
        }
      }
      list[$setRange](dart.notNull(min) + 1, pos + 1, list, min);
      list[$_set](min, element);
    }
  };
  dart.defineLazy(src__algorithms, {
    /*src__algorithms._MERGE_SORT_LIMIT*/get _MERGE_SORT_LIMIT() {
      return 32;
    }
  });
  src__algorithms.mergeSort = function(T, list, opts) {
    let start = opts && 'start' in opts ? opts.start : 0;
    let end = opts && 'end' in opts ? opts.end : null;
    let compare = opts && 'compare' in opts ? opts.compare : null;
    let t = end;
    t == null ? end = list[$length] : t;
    let t$ = compare;
    t$ == null ? compare = src__utils.defaultCompare(T) : t$;
    let length = dart.notNull(end) - dart.notNull(start);
    if (length < 2) return;
    if (length < 32) {
      src__algorithms.insertionSort(T, list, {compare: compare, start: start, end: end});
      return;
    }
    let middle = dart.notNull(start) + (dart.notNull(end) - dart.notNull(start))[$rightShift](1);
    let firstLength = middle - dart.notNull(start);
    let secondLength = dart.notNull(end) - middle;
    let scratchSpace = core.List$(T).new(secondLength);
    src__algorithms._mergeSort(T, list, compare, middle, end, scratchSpace, 0);
    let firstTarget = dart.notNull(end) - firstLength;
    src__algorithms._mergeSort(T, list, compare, start, middle, list, firstTarget);
    src__algorithms._merge(T, compare, list, firstTarget, end, scratchSpace, 0, secondLength, list, start);
  };
  src__algorithms._movingInsertionSort = function(T, list, compare, start, end, target, targetOffset) {
    let length = dart.notNull(end) - dart.notNull(start);
    if (length === 0) return;
    target[$_set](targetOffset, list[$_get](start));
    for (let i = 1; i < length; i++) {
      let element = list[$_get](dart.notNull(start) + i);
      let min = targetOffset;
      let max = dart.notNull(targetOffset) + i;
      while (dart.notNull(min) < max) {
        let mid = dart.notNull(min) + (max - dart.notNull(min))[$rightShift](1);
        if (dart.notNull(compare(element, target[$_get](mid))) < 0) {
          max = mid;
        } else {
          min = mid + 1;
        }
      }
      target[$setRange](dart.notNull(min) + 1, dart.notNull(targetOffset) + i + 1, target, min);
      target[$_set](min, element);
    }
  };
  src__algorithms._mergeSort = function(T, list, compare, start, end, target, targetOffset) {
    let length = dart.notNull(end) - dart.notNull(start);
    if (length < 32) {
      src__algorithms._movingInsertionSort(T, list, compare, start, end, target, targetOffset);
      return;
    }
    let middle = dart.notNull(start) + length[$rightShift](1);
    let firstLength = middle - dart.notNull(start);
    let secondLength = dart.notNull(end) - middle;
    let targetMiddle = dart.notNull(targetOffset) + firstLength;
    src__algorithms._mergeSort(T, list, compare, middle, end, target, targetMiddle);
    src__algorithms._mergeSort(T, list, compare, start, middle, list, middle);
    src__algorithms._merge(T, compare, list, middle, middle + firstLength, target, targetMiddle, targetMiddle + secondLength, target, targetOffset);
  };
  src__algorithms._merge = function(T, compare, firstList, firstStart, firstEnd, secondList, secondStart, secondEnd, target, targetOffset) {
    if (!(dart.notNull(firstStart) < dart.notNull(firstEnd))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/collection/src/algorithms.dart", 255, 10, "firstStart < firstEnd");
    if (!(dart.notNull(secondStart) < dart.notNull(secondEnd))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/collection/src/algorithms.dart", 256, 10, "secondStart < secondEnd");
    let cursor1 = firstStart;
    let cursor2 = secondStart;
    let firstElement = firstList[$_get]((() => {
      let x = cursor1;
      cursor1 = dart.notNull(x) + 1;
      return x;
    })());
    let secondElement = secondList[$_get]((() => {
      let x = cursor2;
      cursor2 = dart.notNull(x) + 1;
      return x;
    })());
    while (true) {
      if (dart.notNull(compare(firstElement, secondElement)) <= 0) {
        target[$_set]((() => {
          let x = targetOffset;
          targetOffset = dart.notNull(x) + 1;
          return x;
        })(), firstElement);
        if (cursor1 == firstEnd) break;
        firstElement = firstList[$_get]((() => {
          let x = cursor1;
          cursor1 = dart.notNull(x) + 1;
          return x;
        })());
      } else {
        target[$_set]((() => {
          let x = targetOffset;
          targetOffset = dart.notNull(x) + 1;
          return x;
        })(), secondElement);
        if (cursor2 != secondEnd) {
          secondElement = secondList[$_get]((() => {
            let x = cursor2;
            cursor2 = dart.notNull(x) + 1;
            return x;
          })());
          continue;
        }
        target[$_set]((() => {
          let x = targetOffset;
          targetOffset = dart.notNull(x) + 1;
          return x;
        })(), firstElement);
        target[$setRange](targetOffset, dart.notNull(targetOffset) + (dart.notNull(firstEnd) - dart.notNull(cursor1)), firstList, cursor1);
        return;
      }
    }
    target[$_set]((() => {
      let x = targetOffset;
      targetOffset = dart.notNull(x) + 1;
      return x;
    })(), secondElement);
    target[$setRange](targetOffset, dart.notNull(targetOffset) + (dart.notNull(secondEnd) - dart.notNull(cursor2)), secondList, cursor2);
  };
  dart.trackLibraries("packages/collection/src/algorithms.ddc", {
    "package:collection/src/algorithms.dart": src__algorithms
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["algorithms.dart"],"names":[],"mappings":";;;;;;;;;;;;;6CAiBoB,UAAkB,EAAE,KAAO;QAAO;AACpD,mBAAO;gBAAP,OAAO,GAAK,yBAAc;AAC1B,QAAI,MAAM;AACV,QAAI,MAAM,UAAU,SAAO;AAC3B,WAAO,AAAI,GAAD,gBAAG,GAAG,GAAE;AAChB,UAAI,MAAM,AAAI,GAAD,GAAgB,CAAP,aAAJ,GAAG,IAAG,GAAG,eAAK;AAChC,UAAI,UAAU,UAAU,QAAC,GAAG;AAC5B,UAAI,OAAO,OAAO,CAAC,OAAO,EAAE,KAAK;AACjC,UAAI,IAAI,KAAI,GAAG,MAAO,IAAG;AACzB,UAAS,aAAL,IAAI,IAAG,GAAG;AACZ,WAAG,GAAG,AAAI,GAAD,GAAG;aACP;AACL,WAAG,GAAG,GAAG;;;AAGb,UAAO,EAAC;EACV;2CAakB,UAAkB,EAAE,KAAO;QAAO;AAClD,mBAAO;gBAAP,OAAO,GAAK,yBAAc;AAC1B,QAAI,MAAM;AACV,QAAI,MAAM,UAAU,SAAO;AAC3B,WAAO,AAAI,GAAD,gBAAG,GAAG,GAAE;AAChB,UAAI,MAAM,AAAI,GAAD,GAAgB,CAAP,aAAJ,GAAG,IAAG,GAAG,eAAK;AAChC,UAAI,UAAU,UAAU,QAAC,GAAG;AAC5B,UAAI,OAAO,OAAO,CAAC,OAAO,EAAE,KAAK;AACjC,UAAS,aAAL,IAAI,IAAG,GAAG;AACZ,WAAG,GAAG,AAAI,GAAD,GAAG;aACP;AACL,WAAG,GAAG,GAAG;;;AAGb,UAAO,IAAG;EACZ;qCAKa,IAAS,EAAG,KAAa,EAAE,GAAO;0BAAlB,QAAQ;wBAAO;AAC1C,QAAI,SAAS,AAAI,eAAW;AAC5B,QAAI,GAAG,IAAI,MAAM,GAAG,GAAG,IAAI,SAAO;AAClC,QAAI,SAAa,aAAJ,GAAG,iBAAG,KAAK;AACxB,WAAO,AAAO,MAAD,GAAG,GAAG;AACjB,UAAI,MAAM,MAAM,QAAQ,CAAC,MAAM;AAC/B,YAAM;AACN,UAAI,OAAO,IAAI,QAAO,aAAN,KAAK,iBAAG,GAAG;AAC3B,UAAI,QAAO,aAAN,KAAK,iBAAG,GAAG,GAAI,IAAI,QAAO,aAAN,KAAK,IAAG,MAAM;AACvC,UAAI,QAAO,aAAN,KAAK,IAAG,MAAM,EAAI,IAAI;;EAE/B;qCAGa,IAAS,EAAG,KAAa,EAAE,GAAO;0BAAlB,QAAQ;wBAAO;AAC1C,QAAI,GAAG,IAAI,MAAM,GAAG,GAAG,IAAI,SAAO;AAClC,4BAAQ,CAAC,IAAI,EAAE,KAAK,EAAE,GAAG;EAC3B;sCAGc,IAAS,EAAE,KAAS,EAAE,GAAO;AACzC,aAAS,IAAI,KAAK,EAAE,IAAQ,aAAJ,GAAG,IAAG,GAAK,aAAF,CAAC,IAAG,CAAC,EAAE,CAAC,gBAAD,CAAC,IAvF3C,GAuF+C,CAAC,IAAI;AAChD,UAAI,MAAM,IAAI,QAAC,CAAC;AAChB,UAAI,QAAC,CAAC,EAAI,IAAI,QAAC,CAAC;AAChB,UAAI,QAAC,CAAC,EAAI,GAAG;;EAEjB;8CAiBsB,IAAY;QACzB;QAAuB,+CAAO;QAAO;AAG5C,mBAAO;gBAAP,OAAO,GAAK,yBAAc;AAC1B,gBAAG;iBAAH,GAAG,GAAK,IAAI,SAAO;AAEnB,aAAS,MAAY,aAAN,KAAK,IAAG,GAAG,AAAI,GAAD,gBAAG,GAAG,GAAE,GAAG,IAAI;AAC1C,UAAI,MAAM,KAAK;AACf,UAAI,MAAM,GAAG;AACb,UAAI,UAAU,IAAI,QAAC,GAAG;AACtB,aAAW,aAAJ,GAAG,IAAG,GAAG,EAAE;AAChB,YAAI,MAAU,aAAJ,GAAG,IAAgB,CAAX,AAAI,GAAD,gBAAG,GAAG,gBAAK;AAChC,YAAI,aAAa,OAAO,CAAC,OAAO,EAAE,IAAI,QAAC,GAAG;AAC1C,YAAe,aAAX,UAAU,IAAG,GAAG;AAClB,aAAG,GAAG,GAAG;eACJ;AACL,aAAG,GAAG,AAAI,GAAD,GAAG;;;AAGhB,UAAI,WAAS,CAAK,aAAJ,GAAG,IAAG,GAAG,AAAI,GAAD,GAAG,GAAG,IAAI,EAAE,GAAG;AACzC,UAAI,QAAC,GAAG,EAAI,OAAO;;EAEvB;;MAGU,iCAAiB;YAAG;;;0CAiBZ,IAAY;QACrB,+CAAO;QAAO;QAAS;AAC9B,eAAG;gBAAH,GAAG,GAAK,IAAI,SAAO;AACnB,oBAAO;iBAAP,OAAO,GAAK,yBAAc;AAE1B,QAAI,SAAa,aAAJ,GAAG,iBAAG,KAAK;AACxB,QAAI,AAAO,MAAD,GAAG,GAAG;AAChB,QAAI,AAAO,MAAD,GAAG,EAAiB,EAAE;AAC9B,mCAAa,IAAC,IAAI,YAAW,OAAO,SAAS,KAAK,OAAO,GAAG;AAC5D;;AAQF,QAAI,SAAe,aAAN,KAAK,IAAkB,CAAT,aAAJ,GAAG,iBAAG,KAAK,gBAAK;AACvC,QAAI,cAAc,AAAO,MAAD,gBAAG,KAAK;AAChC,QAAI,eAAmB,aAAJ,GAAG,IAAG,MAAM;AAE/B,QAAI,eAAe,AAAI,iBAAO,CAAC,YAAY;AAC3C,8BAAU,IAAC,IAAI,EAAE,OAAO,EAAE,MAAM,EAAE,GAAG,EAAE,YAAY,EAAE;AACrD,QAAI,cAAkB,aAAJ,GAAG,IAAG,WAAW;AACnC,8BAAU,IAAC,IAAI,EAAE,OAAO,EAAE,KAAK,EAAE,MAAM,EAAE,IAAI,EAAE,WAAW;AAC1D,0BAAM,IAAC,OAAO,EAAE,IAAI,EAAE,WAAW,EAAE,GAAG,EAAE,YAAY,EAAE,GAAG,YAAY,EAAE,IAAI,EACvE,KAAK;EACX;qDAM6B,IAAY,EAAE,OAAqB,EAAE,KAAS,EACvE,GAAO,EAAE,MAAc,EAAE,YAAgB;AAC3C,QAAI,SAAa,aAAJ,GAAG,iBAAG,KAAK;AACxB,QAAI,MAAM,KAAI,GAAG;AACjB,UAAM,QAAC,YAAY,EAAI,IAAI,QAAC,KAAK;AACjC,aAAS,IAAI,GAAG,AAAE,CAAD,GAAG,MAAM,EAAE,CAAC,IAAI;AAC/B,UAAI,UAAU,IAAI,QAAO,aAAN,KAAK,IAAG,CAAC;AAC5B,UAAI,MAAM,YAAY;AACtB,UAAI,MAAmB,aAAb,YAAY,IAAG,CAAC;AAC1B,aAAW,aAAJ,GAAG,IAAG,GAAG,EAAE;AAChB,YAAI,MAAU,aAAJ,GAAG,IAAgB,CAAX,AAAI,GAAD,gBAAG,GAAG,gBAAK;AAChC,YAAkC,aAA9B,OAAO,CAAC,OAAO,EAAE,MAAM,QAAC,GAAG,MAAK,GAAG;AACrC,aAAG,GAAG,GAAG;eACJ;AACL,aAAG,GAAG,AAAI,GAAD,GAAG;;;AAGhB,YAAM,WAAS,CAAK,aAAJ,GAAG,IAAG,GAAgB,AAAI,aAAjB,YAAY,IAAG,CAAC,GAAG,GAAG,MAAM,EAAE,GAAG;AAC1D,YAAM,QAAC,GAAG,EAAI,OAAO;;EAEzB;2CASmB,IAAY,EAAE,OAAqB,EAAE,KAAS,EAAE,GAAO,EACtE,MAAc,EAAE,YAAgB;AAClC,QAAI,SAAa,aAAJ,GAAG,iBAAG,KAAK;AACxB,QAAI,AAAO,MAAD,GAAG,EAAiB,EAAE;AAC9B,0CAAoB,IAAC,IAAI,EAAE,OAAO,EAAE,KAAK,EAAE,GAAG,EAAE,MAAM,EAAE,YAAY;AACpE;;AAEF,QAAI,SAAe,aAAN,KAAK,IAAI,AAAO,MAAD,cAAI;AAChC,QAAI,cAAc,AAAO,MAAD,gBAAG,KAAK;AAChC,QAAI,eAAmB,aAAJ,GAAG,IAAG,MAAM;AAE/B,QAAI,eAA4B,aAAb,YAAY,IAAG,WAAW;AAE7C,8BAAU,IAAC,IAAI,EAAE,OAAO,EAAE,MAAM,EAAE,GAAG,EAAE,MAAM,EAAE,YAAY;AAE3D,8BAAU,IAAC,IAAI,EAAE,OAAO,EAAE,KAAK,EAAE,MAAM,EAAE,IAAI,EAAE,MAAM;AAErD,0BAAM,IAAC,OAAO,EAAE,IAAI,EAAE,MAAM,EAAE,AAAO,MAAD,GAAG,WAAW,EAAE,MAAM,EAAE,YAAY,EACpE,AAAa,YAAD,GAAG,YAAY,EAAE,MAAM,EAAE,YAAY;EACvD;uCAWI,OAAqB,EACrB,SAAiB,EACjB,UAAc,EACd,QAAY,EACZ,UAAkB,EAClB,WAAe,EACf,SAAa,EACb,MAAc,EACd,YAAgB;AAElB,UAAkB,aAAX,UAAU,iBAAG,QAAQ;AAC5B,UAAmB,aAAZ,WAAW,iBAAG,SAAS;AAC9B,QAAI,UAAU,UAAU;AACxB,QAAI,UAAU,WAAW;AACzB,QAAI,eAAe,SAAS;cAAC,OAAO;MAAP,OAAO,qBAlQtC;;;AAmQE,QAAI,gBAAgB,UAAU;cAAC,OAAO;MAAP,OAAO,qBAnQxC;;;AAoQE,WAAO,MAAM;AACX,UAAyC,aAArC,OAAO,CAAC,YAAY,EAAE,aAAa,MAAK,GAAG;AAC7C,cAAM;kBAAC,YAAY;UAAZ,YAAY,qBAtQzB;;cAsQ+B,YAAY;AACrC,YAAI,OAAO,IAAI,QAAQ,EAAE;AACzB,oBAAY,GAAG,SAAS;kBAAC,OAAO;UAAP,OAAO,qBAxQtC;;;aAyQW;AACL,cAAM;kBAAC,YAAY;UAAZ,YAAY,qBA1QzB;;cA0Q+B,aAAa;AACtC,YAAI,OAAO,IAAI,SAAS,EAAE;AACxB,uBAAa,GAAG,UAAU;oBAAC,OAAO;YAAP,OAAO,qBA5Q1C;;;AA6QQ;;AAGF,cAAM;kBAAC,YAAY;UAAZ,YAAY,qBAhRzB;;cAgR+B,YAAY;AACrC,cAAM,WAAS,CAAC,YAAY,EAAe,aAAb,YAAY,KAAa,aAAT,QAAQ,iBAAG,OAAO,IAC5D,SAAS,EAAE,OAAO;AACtB;;;AAIJ,UAAM;cAAC,YAAY;MAAZ,YAAY,qBAvRrB;;UAuR2B,aAAa;AACtC,UAAM,WAAS,CACX,YAAY,EAAe,aAAb,YAAY,KAAc,aAAV,SAAS,iBAAG,OAAO,IAAG,UAAU,EAAE,OAAO;EAC7E","file":"algorithms.ddc.js"}');
  // Exports:
  return {
    src__algorithms: src__algorithms
  };
});

//# sourceMappingURL=algorithms.ddc.js.map

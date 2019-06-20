define(['dart_sdk', 'packages/flutter_web_ui/ui', 'packages/flutter_web/io', 'packages/typed_data/typed_buffers'], function(dart_sdk, ui, io, typed_buffers) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const math = dart_sdk.math;
  const async = dart_sdk.async;
  const developer = dart_sdk.developer;
  const convert = dart_sdk.convert;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ui$ = ui.ui;
  const io$ = io.io;
  const typed_buffers$ = typed_buffers.typed_buffers;
  const src__foundation__basic_types = Object.create(dart.library);
  const src__util = Object.create(dart.library);
  const src__foundation__diagnostics = Object.create(dart.library);
  const src__foundation__print = Object.create(dart.library);
  const src__foundation__assertions = Object.create(dart.library);
  const src__foundation__constants = Object.create(dart.library);
  const src__foundation__platform = Object.create(dart.library);
  const src__foundation__debug = Object.create(dart.library);
  const src__foundation__binding = Object.create(dart.library);
  const src__foundation__bitfield = Object.create(dart.library);
  const src__foundation__observer_list = Object.create(dart.library);
  const src__foundation__change_notifier = Object.create(dart.library);
  const src__foundation__collections = Object.create(dart.library);
  const src__foundation__key = Object.create(dart.library);
  const src__foundation__isolates = Object.create(dart.library);
  const src__foundation__licenses = Object.create(dart.library);
  const src__foundation__node = Object.create(dart.library);
  const src__foundation__profile = Object.create(dart.library);
  const src__foundation__serialization = Object.create(dart.library);
  const src__foundation__synchronous_future = Object.create(dart.library);
  const src__foundation__unicode = Object.create(dart.library);
  const $iterator = dartx.iterator;
  const $length = dartx.length;
  const $add = dartx.add;
  const $_get = dartx._get;
  const $toString = dartx.toString;
  const $times = dartx['*'];
  const $isEmpty = dartx.isEmpty;
  const $clear = dartx.clear;
  const $substring = dartx.substring;
  const $split = dartx.split;
  const $isNotEmpty = dartx.isNotEmpty;
  const $last = dartx.last;
  const $trimRight = dartx.trimRight;
  const $endsWith = dartx.endsWith;
  const $toUpperCase = dartx.toUpperCase;
  const $contains = dartx.contains;
  const $where = dartx.where;
  const $toList = dartx.toList;
  const $take = dartx.take;
  const $first = dartx.first;
  const $runtimeType = dartx.runtimeType;
  const $_set = dartx._set;
  const $indexOf = dartx.indexOf;
  const $replaceAll = dartx.replaceAll;
  const $toStringAsFixed = dartx.toStringAsFixed;
  const $clamp = dartx.clamp;
  const $join = dartx.join;
  const $map = dartx.map;
  const $padLeft = dartx.padLeft;
  const $toRadixString = dartx.toRadixString;
  const $toUnsigned = dartx.toUnsigned;
  const $hashCode = dartx.hashCode;
  const $floor = dartx.floor;
  const $expand = dartx.expand;
  const $trimLeft = dartx.trimLeft;
  const $lastIndexOf = dartx.lastIndexOf;
  const $firstWhere = dartx.firstWhere;
  const $startsWith = dartx.startsWith;
  const $forEach = dartx.forEach;
  const $skip = dartx.skip;
  const $addAll = dartx.addAll;
  const $single = dartx.single;
  const $sort = dartx.sort;
  const $containsKey = dartx.containsKey;
  const $leftShift = dartx['<<'];
  const $remove = dartx.remove;
  const $_equals = dartx._equals;
  const $truncate = dartx.truncate;
  const $asUint8List = dartx.asUint8List;
  const $buffer = dartx.buffer;
  const $setUint16 = dartx.setUint16;
  const $setUint32 = dartx.setUint32;
  const $setInt32 = dartx.setInt32;
  const $setInt64 = dartx.setInt64;
  const $setFloat64 = dartx.setFloat64;
  const $offsetInBytes = dartx.offsetInBytes;
  const $modulo = dartx['%'];
  const $asByteData = dartx.asByteData;
  const $lengthInBytes = dartx.lengthInBytes;
  const $getUint8 = dartx.getUint8;
  const $getUint16 = dartx.getUint16;
  const $getUint32 = dartx.getUint32;
  const $getInt32 = dartx.getInt32;
  const $getInt64 = dartx.getInt64;
  const $getFloat64 = dartx.getFloat64;
  const $asInt32List = dartx.asInt32List;
  const $asInt64List = dartx.asInt64List;
  const $asFloat64List = dartx.asFloat64List;
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let intTobool = () => (intTobool = dart.constFn(dart.fnType(core.bool, [core.int])))();
  let SyncIterableOfString = () => (SyncIterableOfString = dart.constFn(_js_helper.SyncIterable$(core.String)))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let DiagnosticsNodeTovoid = () => (DiagnosticsNodeTovoid = dart.constFn(dart.fnType(dart.void, [src__foundation__diagnostics.DiagnosticsNode])))();
  let DiagnosticsNodeTobool = () => (DiagnosticsNodeTobool = dart.constFn(dart.fnType(core.bool, [src__foundation__diagnostics.DiagnosticsNode])))();
  let DiagnosticsPropertyOfvoid = () => (DiagnosticsPropertyOfvoid = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(dart.void)))();
  let IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  let IterableOfString = () => (IterableOfString = dart.constFn(core.Iterable$(core.String)))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let DiagnosticableNodeOfDiagnosticable = () => (DiagnosticableNodeOfDiagnosticable = dart.constFn(src__foundation__diagnostics.DiagnosticableNode$(src__foundation__diagnostics.Diagnosticable)))();
  let JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(src__foundation__diagnostics.DiagnosticsNode)))();
  let ListOfDiagnosticsNode = () => (ListOfDiagnosticsNode = dart.constFn(core.List$(src__foundation__diagnostics.DiagnosticsNode)))();
  let String__Tovoid = () => (String__Tovoid = dart.constFn(dart.fnType(dart.void, [core.String], {wrapWidth: core.int})))();
  let StringToIterableOfString = () => (StringToIterableOfString = dart.constFn(dart.fnType(IterableOfString(), [core.String])))();
  let QueueOfString = () => (QueueOfString = dart.constFn(collection.Queue$(core.String)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let CompleterOfvoid = () => (CompleterOfvoid = dart.constFn(async.Completer$(dart.void)))();
  let FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let IterableOfStringToIterableOfString = () => (IterableOfStringToIterableOfString = dart.constFn(dart.fnType(IterableOfString(), [IterableOfString()])))();
  let IterableOfDiagnosticsNode = () => (IterableOfDiagnosticsNode = dart.constFn(core.Iterable$(src__foundation__diagnostics.DiagnosticsNode)))();
  let VoidToIterableOfDiagnosticsNode = () => (VoidToIterableOfDiagnosticsNode = dart.constFn(dart.fnType(IterableOfDiagnosticsNode(), [])))();
  let DiagnosticsPropertyOfFlutterError = () => (DiagnosticsPropertyOfFlutterError = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(src__foundation__assertions.FlutterError)))();
  let DiagnosticsPropertyOfDiagnosticsNode = () => (DiagnosticsPropertyOfDiagnosticsNode = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(src__foundation__diagnostics.DiagnosticsNode)))();
  let StringToErrorDescription = () => (StringToErrorDescription = dart.constFn(dart.fnType(src__foundation__assertions.ErrorDescription, [core.String])))();
  let SetOfString = () => (SetOfString = dart.constFn(core.Set$(core.String)))();
  let DiagnosticsNodeToString = () => (DiagnosticsNodeToString = dart.constFn(dart.fnType(core.String, [src__foundation__diagnostics.DiagnosticsNode])))();
  let FlutterErrorDetails__Tovoid = () => (FlutterErrorDetails__Tovoid = dart.constFn(dart.fnType(dart.void, [src__foundation__assertions.FlutterErrorDetails], {forceReport: core.bool})))();
  let StringToDiagnosticsNode = () => (StringToDiagnosticsNode = dart.constFn(dart.fnType(src__foundation__diagnostics.DiagnosticsNode, [core.String])))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let VoidToFutureOfvoid = () => (VoidToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [])))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let FutureOfMapOfString$dynamic = () => (FutureOfMapOfString$dynamic = dart.constFn(async.Future$(MapOfString$dynamic())))();
  let MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
  let MapOfString$StringToFutureOfMapOfString$dynamic = () => (MapOfString$StringToFutureOfMapOfString$dynamic = dart.constFn(dart.fnType(FutureOfMapOfString$dynamic(), [MapOfString$String()])))();
  let FutureOfServiceExtensionResponse = () => (FutureOfServiceExtensionResponse = dart.constFn(async.Future$(developer.ServiceExtensionResponse)))();
  let StringAndMapOfString$StringToFutureOfServiceExtensionResponse = () => (StringAndMapOfString$StringToFutureOfServiceExtensionResponse = dart.constFn(dart.fnType(FutureOfServiceExtensionResponse(), [core.String, MapOfString$String()])))();
  let ObserverListOfVoidCallback = () => (ObserverListOfVoidCallback = dart.constFn(src__foundation__observer_list.ObserverList$(VoidTovoid())))();
  let ListOfVoidCallback = () => (ListOfVoidCallback = dart.constFn(core.List$(VoidTovoid())))();
  let DiagnosticsPropertyOfChangeNotifier = () => (DiagnosticsPropertyOfChangeNotifier = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(src__foundation__change_notifier.ChangeNotifier)))();
  let SyncIterableOfDiagnosticsPropertyOfChangeNotifier = () => (SyncIterableOfDiagnosticsPropertyOfChangeNotifier = dart.constFn(_js_helper.SyncIterable$(DiagnosticsPropertyOfChangeNotifier())))();
  let IterableOfDiagnosticsPropertyOfChangeNotifier = () => (IterableOfDiagnosticsPropertyOfChangeNotifier = dart.constFn(core.Iterable$(DiagnosticsPropertyOfChangeNotifier())))();
  let VoidToIterableOfDiagnosticsPropertyOfChangeNotifier = () => (VoidToIterableOfDiagnosticsPropertyOfChangeNotifier = dart.constFn(dart.fnType(IterableOfDiagnosticsPropertyOfChangeNotifier(), [])))();
  let ListOfListenable = () => (ListOfListenable = dart.constFn(core.List$(src__foundation__change_notifier.Listenable)))();
  let ValueKeyOfString = () => (ValueKeyOfString = dart.constFn(src__foundation__key.ValueKey$(core.String)))();
  let VoidToLicenseParagraph = () => (VoidToLicenseParagraph = dart.constFn(dart.fnType(src__foundation__licenses.LicenseParagraph, [])))();
  let SyncIterableOfLicenseParagraph = () => (SyncIterableOfLicenseParagraph = dart.constFn(_js_helper.SyncIterable$(src__foundation__licenses.LicenseParagraph)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let StreamOfLicenseEntry = () => (StreamOfLicenseEntry = dart.constFn(async.Stream$(src__foundation__licenses.LicenseEntry)))();
  let VoidToStreamOfLicenseEntry = () => (VoidToStreamOfLicenseEntry = dart.constFn(dart.fnType(StreamOfLicenseEntry(), [])))();
  let JSArrayOfVoidToStreamOfLicenseEntry = () => (JSArrayOfVoidToStreamOfLicenseEntry = dart.constFn(_interceptors.JSArray$(VoidToStreamOfLicenseEntry())))();
  let _AsyncStarImplOfLicenseEntry = () => (_AsyncStarImplOfLicenseEntry = dart.constFn(async._AsyncStarImpl$(src__foundation__licenses.LicenseEntry)))();
  const _prefillIterator = dart.privateName(src__foundation__basic_types, "_prefillIterator");
  const _results = dart.privateName(src__foundation__basic_types, "_results");
  const _precacheEntireList = dart.privateName(src__foundation__basic_types, "_precacheEntireList");
  const _fillNext = dart.privateName(src__foundation__basic_types, "_fillNext");
  const _is_CachingIterable_default = Symbol('_is_CachingIterable_default');
  src__foundation__basic_types.CachingIterable$ = dart.generic(E => {
    let JSArrayOfE = () => (JSArrayOfE = dart.constFn(_interceptors.JSArray$(E)))();
    let _LazyListIteratorOfE = () => (_LazyListIteratorOfE = dart.constFn(src__foundation__basic_types._LazyListIterator$(E)))();
    let CachingIterableOfE = () => (CachingIterableOfE = dart.constFn(src__foundation__basic_types.CachingIterable$(E)))();
    let ListOfE = () => (ListOfE = dart.constFn(core.List$(E)))();
    let IteratorOfE = () => (IteratorOfE = dart.constFn(core.Iterator$(E)))();
    class CachingIterable extends collection.IterableBase$(E) {
      get iterator() {
        return new (_LazyListIteratorOfE()).new(this);
      }
      map(T, f) {
        return new (src__foundation__basic_types.CachingIterable$(T)).new(super.map(T, f)[$iterator]);
      }
      where(test) {
        return new (CachingIterableOfE()).new(super.where(test)[$iterator]);
      }
      expand(T, f) {
        return new (src__foundation__basic_types.CachingIterable$(T)).new(super.expand(T, f)[$iterator]);
      }
      take(count) {
        return new (CachingIterableOfE()).new(super.take(count)[$iterator]);
      }
      takeWhile(test) {
        return new (CachingIterableOfE()).new(super.takeWhile(test)[$iterator]);
      }
      skip(count) {
        return new (CachingIterableOfE()).new(super.skip(count)[$iterator]);
      }
      skipWhile(test) {
        return new (CachingIterableOfE()).new(super.skipWhile(test)[$iterator]);
      }
      get length() {
        this[_precacheEntireList]();
        return this[_results][$length];
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        this[_precacheEntireList]();
        return ListOfE().from(this[_results], {growable: growable});
      }
      [_precacheEntireList]() {
        while (dart.test(this[_fillNext]())) {
        }
      }
      [_fillNext]() {
        if (!dart.test(this[_prefillIterator].moveNext())) return false;
        this[_results][$add](this[_prefillIterator].current);
        return true;
      }
    }
    (CachingIterable.new = function(prefillIterator) {
      this[_results] = JSArrayOfE().of([]);
      this[_prefillIterator] = prefillIterator;
      CachingIterable.__proto__.new.call(this);
    }).prototype = CachingIterable.prototype;
    dart.addTypeTests(CachingIterable);
    CachingIterable.prototype[_is_CachingIterable_default] = true;
    dart.setMethodSignature(CachingIterable, () => ({
      __proto__: dart.getMethods(CachingIterable.__proto__),
      [_precacheEntireList]: dart.fnType(dart.void, []),
      [_fillNext]: dart.fnType(core.bool, [])
    }));
    dart.setGetterSignature(CachingIterable, () => ({
      __proto__: dart.getGetters(CachingIterable.__proto__),
      iterator: core.Iterator$(E),
      [$iterator]: core.Iterator$(E)
    }));
    dart.setLibraryUri(CachingIterable, "package:flutter_web/src/foundation/basic_types.dart");
    dart.setFieldSignature(CachingIterable, () => ({
      __proto__: dart.getFields(CachingIterable.__proto__),
      [_prefillIterator]: dart.finalFieldType(IteratorOfE()),
      [_results]: dart.finalFieldType(ListOfE())
    }));
    dart.defineExtensionMethods(CachingIterable, [
      'map',
      'where',
      'expand',
      'take',
      'takeWhile',
      'skip',
      'skipWhile',
      'toList'
    ]);
    dart.defineExtensionAccessors(CachingIterable, ['iterator', 'length']);
    return CachingIterable;
  });
  src__foundation__basic_types.CachingIterable = src__foundation__basic_types.CachingIterable$();
  dart.addTypeTests(src__foundation__basic_types.CachingIterable, _is_CachingIterable_default);
  const _owner = dart.privateName(src__foundation__basic_types, "_owner");
  const _index = dart.privateName(src__foundation__basic_types, "_index");
  const _is__LazyListIterator_default = Symbol('_is__LazyListIterator_default');
  src__foundation__basic_types._LazyListIterator$ = dart.generic(E => {
    let IteratorOfE = () => (IteratorOfE = dart.constFn(core.Iterator$(E)))();
    let CachingIterableOfE = () => (CachingIterableOfE = dart.constFn(src__foundation__basic_types.CachingIterable$(E)))();
    class _LazyListIterator extends core.Object {
      get current() {
        if (!(dart.notNull(this[_index]) >= 0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/basic_types.dart", 203, 12, "_index >= 0");
        if (dart.notNull(this[_index]) < 0 || this[_index] == this[_owner][_results][$length]) return null;
        return this[_owner][_results][$_get](this[_index]);
      }
      moveNext() {
        if (dart.notNull(this[_index]) >= dart.notNull(this[_owner][_results][$length])) return false;
        this[_index] = dart.notNull(this[_index]) + 1;
        if (this[_index] == this[_owner][_results][$length]) return this[_owner][_fillNext]();
        return true;
      }
    }
    (_LazyListIterator.new = function(owner) {
      this[_owner] = owner;
      this[_index] = -1;
    }).prototype = _LazyListIterator.prototype;
    dart.addTypeTests(_LazyListIterator);
    _LazyListIterator.prototype[_is__LazyListIterator_default] = true;
    _LazyListIterator[dart.implements] = () => [IteratorOfE()];
    dart.setMethodSignature(_LazyListIterator, () => ({
      __proto__: dart.getMethods(_LazyListIterator.__proto__),
      moveNext: dart.fnType(core.bool, [])
    }));
    dart.setGetterSignature(_LazyListIterator, () => ({
      __proto__: dart.getGetters(_LazyListIterator.__proto__),
      current: E
    }));
    dart.setLibraryUri(_LazyListIterator, "package:flutter_web/src/foundation/basic_types.dart");
    dart.setFieldSignature(_LazyListIterator, () => ({
      __proto__: dart.getFields(_LazyListIterator.__proto__),
      [_owner]: dart.finalFieldType(CachingIterableOfE()),
      [_index]: dart.fieldType(core.int)
    }));
    return _LazyListIterator;
  });
  src__foundation__basic_types._LazyListIterator = src__foundation__basic_types._LazyListIterator$();
  dart.addTypeTests(src__foundation__basic_types._LazyListIterator, _is__LazyListIterator_default);
  const _is_Factory_default = Symbol('_is_Factory_default');
  src__foundation__basic_types.Factory$ = dart.generic(T => {
    let VoidToT = () => (VoidToT = dart.constFn(dart.fnType(T, [])))();
    class Factory extends core.Object {
      get _constructor() {
        return this[constructor$];
      }
      set _constructor(value) {
        super._constructor = value;
      }
      get type() {
        return dart.wrapType(T);
      }
      toString() {
        return "Factory(type: " + dart.str(this.type) + ")";
      }
    }
    (Factory.new = function(constructor) {
      this[constructor$] = constructor;
      if (!(constructor != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/basic_types.dart", 222, 44, "constructor != null");
    }).prototype = Factory.prototype;
    dart.addTypeTests(Factory);
    Factory.prototype[_is_Factory_default] = true;
    const constructor$ = Symbol("Factory.constructor");
    dart.setMethodSignature(Factory, () => ({
      __proto__: dart.getMethods(Factory.__proto__),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, [])
    }));
    dart.setGetterSignature(Factory, () => ({
      __proto__: dart.getGetters(Factory.__proto__),
      type: core.Type
    }));
    dart.setLibraryUri(Factory, "package:flutter_web/src/foundation/basic_types.dart");
    dart.setFieldSignature(Factory, () => ({
      __proto__: dart.getFields(Factory.__proto__),
      _constructor: dart.finalFieldType(VoidToT())
    }));
    dart.defineExtensionMethods(Factory, ['toString']);
    return Factory;
  });
  src__foundation__basic_types.Factory = src__foundation__basic_types.Factory$();
  dart.addTypeTests(src__foundation__basic_types.Factory, _is_Factory_default);
  dart.copyProperties(src__util, {
    get assertionsEnabled() {
      let k = false;
      if (!(k = true)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/util.dart", 22, 10, "k = true");
      return k;
    }
  });
  dart.defineLazy(src__util, {
    /*src__util.debugIsInTest*/get debugIsInTest() {
      return false;
    },
    set debugIsInTest(_) {}
  });
  src__foundation__diagnostics.DiagnosticLevel = class DiagnosticLevel extends core.Object {
    toString() {
      return {
        0: "DiagnosticLevel.hidden",
        1: "DiagnosticLevel.fine",
        2: "DiagnosticLevel.debug",
        3: "DiagnosticLevel.info",
        4: "DiagnosticLevel.warning",
        5: "DiagnosticLevel.hint",
        6: "DiagnosticLevel.summary",
        7: "DiagnosticLevel.error",
        8: "DiagnosticLevel.off"
      }[this.index];
    }
  };
  (src__foundation__diagnostics.DiagnosticLevel.new = function(x) {
    this.index = x;
  }).prototype = src__foundation__diagnostics.DiagnosticLevel.prototype;
  dart.addTypeTests(src__foundation__diagnostics.DiagnosticLevel);
  dart.setLibraryUri(src__foundation__diagnostics.DiagnosticLevel, "package:flutter_web/src/foundation/diagnostics.dart");
  dart.setFieldSignature(src__foundation__diagnostics.DiagnosticLevel, () => ({
    __proto__: dart.getFields(src__foundation__diagnostics.DiagnosticLevel.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__foundation__diagnostics.DiagnosticLevel, ['toString']);
  src__foundation__diagnostics.DiagnosticLevel.hidden = dart.const(new src__foundation__diagnostics.DiagnosticLevel.new(0));
  src__foundation__diagnostics.DiagnosticLevel.fine = dart.const(new src__foundation__diagnostics.DiagnosticLevel.new(1));
  src__foundation__diagnostics.DiagnosticLevel.debug = dart.const(new src__foundation__diagnostics.DiagnosticLevel.new(2));
  src__foundation__diagnostics.DiagnosticLevel.info = dart.const(new src__foundation__diagnostics.DiagnosticLevel.new(3));
  src__foundation__diagnostics.DiagnosticLevel.warning = dart.const(new src__foundation__diagnostics.DiagnosticLevel.new(4));
  src__foundation__diagnostics.DiagnosticLevel.hint = dart.const(new src__foundation__diagnostics.DiagnosticLevel.new(5));
  src__foundation__diagnostics.DiagnosticLevel.summary = dart.const(new src__foundation__diagnostics.DiagnosticLevel.new(6));
  src__foundation__diagnostics.DiagnosticLevel.error = dart.const(new src__foundation__diagnostics.DiagnosticLevel.new(7));
  src__foundation__diagnostics.DiagnosticLevel.off = dart.const(new src__foundation__diagnostics.DiagnosticLevel.new(8));
  src__foundation__diagnostics.DiagnosticLevel.values = dart.constList([src__foundation__diagnostics.DiagnosticLevel.hidden, src__foundation__diagnostics.DiagnosticLevel.fine, src__foundation__diagnostics.DiagnosticLevel.debug, src__foundation__diagnostics.DiagnosticLevel.info, src__foundation__diagnostics.DiagnosticLevel.warning, src__foundation__diagnostics.DiagnosticLevel.hint, src__foundation__diagnostics.DiagnosticLevel.summary, src__foundation__diagnostics.DiagnosticLevel.error, src__foundation__diagnostics.DiagnosticLevel.off], src__foundation__diagnostics.DiagnosticLevel);
  src__foundation__diagnostics.DiagnosticsTreeStyle = class DiagnosticsTreeStyle extends core.Object {
    toString() {
      return {
        0: "DiagnosticsTreeStyle.sparse",
        1: "DiagnosticsTreeStyle.offstage",
        2: "DiagnosticsTreeStyle.dense",
        3: "DiagnosticsTreeStyle.transition",
        4: "DiagnosticsTreeStyle.error",
        5: "DiagnosticsTreeStyle.whitespace",
        6: "DiagnosticsTreeStyle.flat",
        7: "DiagnosticsTreeStyle.singleLine",
        8: "DiagnosticsTreeStyle.errorProperty",
        9: "DiagnosticsTreeStyle.shallow",
        10: "DiagnosticsTreeStyle.truncateChildren"
      }[this.index];
    }
  };
  (src__foundation__diagnostics.DiagnosticsTreeStyle.new = function(x) {
    this.index = x;
  }).prototype = src__foundation__diagnostics.DiagnosticsTreeStyle.prototype;
  dart.addTypeTests(src__foundation__diagnostics.DiagnosticsTreeStyle);
  dart.setLibraryUri(src__foundation__diagnostics.DiagnosticsTreeStyle, "package:flutter_web/src/foundation/diagnostics.dart");
  dart.setFieldSignature(src__foundation__diagnostics.DiagnosticsTreeStyle, () => ({
    __proto__: dart.getFields(src__foundation__diagnostics.DiagnosticsTreeStyle.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__foundation__diagnostics.DiagnosticsTreeStyle, ['toString']);
  src__foundation__diagnostics.DiagnosticsTreeStyle.sparse = dart.const(new src__foundation__diagnostics.DiagnosticsTreeStyle.new(0));
  src__foundation__diagnostics.DiagnosticsTreeStyle.offstage = dart.const(new src__foundation__diagnostics.DiagnosticsTreeStyle.new(1));
  src__foundation__diagnostics.DiagnosticsTreeStyle.dense = dart.const(new src__foundation__diagnostics.DiagnosticsTreeStyle.new(2));
  src__foundation__diagnostics.DiagnosticsTreeStyle.transition = dart.const(new src__foundation__diagnostics.DiagnosticsTreeStyle.new(3));
  src__foundation__diagnostics.DiagnosticsTreeStyle.error = dart.const(new src__foundation__diagnostics.DiagnosticsTreeStyle.new(4));
  src__foundation__diagnostics.DiagnosticsTreeStyle.whitespace = dart.const(new src__foundation__diagnostics.DiagnosticsTreeStyle.new(5));
  src__foundation__diagnostics.DiagnosticsTreeStyle.flat = dart.const(new src__foundation__diagnostics.DiagnosticsTreeStyle.new(6));
  src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine = dart.const(new src__foundation__diagnostics.DiagnosticsTreeStyle.new(7));
  src__foundation__diagnostics.DiagnosticsTreeStyle.errorProperty = dart.const(new src__foundation__diagnostics.DiagnosticsTreeStyle.new(8));
  src__foundation__diagnostics.DiagnosticsTreeStyle.shallow = dart.const(new src__foundation__diagnostics.DiagnosticsTreeStyle.new(9));
  src__foundation__diagnostics.DiagnosticsTreeStyle.truncateChildren = dart.const(new src__foundation__diagnostics.DiagnosticsTreeStyle.new(10));
  src__foundation__diagnostics.DiagnosticsTreeStyle.values = dart.constList([src__foundation__diagnostics.DiagnosticsTreeStyle.sparse, src__foundation__diagnostics.DiagnosticsTreeStyle.offstage, src__foundation__diagnostics.DiagnosticsTreeStyle.dense, src__foundation__diagnostics.DiagnosticsTreeStyle.transition, src__foundation__diagnostics.DiagnosticsTreeStyle.error, src__foundation__diagnostics.DiagnosticsTreeStyle.whitespace, src__foundation__diagnostics.DiagnosticsTreeStyle.flat, src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine, src__foundation__diagnostics.DiagnosticsTreeStyle.errorProperty, src__foundation__diagnostics.DiagnosticsTreeStyle.shallow, src__foundation__diagnostics.DiagnosticsTreeStyle.truncateChildren], src__foundation__diagnostics.DiagnosticsTreeStyle);
  src__foundation__diagnostics.TextTreeConfiguration = class TextTreeConfiguration extends core.Object {
    get prefixLineOne() {
      return this[prefixLineOne$];
    }
    set prefixLineOne(value) {
      super.prefixLineOne = value;
    }
    get suffixLineOne() {
      return this[suffixLineOne$];
    }
    set suffixLineOne(value) {
      super.suffixLineOne = value;
    }
    get prefixOtherLines() {
      return this[prefixOtherLines$];
    }
    set prefixOtherLines(value) {
      super.prefixOtherLines = value;
    }
    get prefixLastChildLineOne() {
      return this[prefixLastChildLineOne$];
    }
    set prefixLastChildLineOne(value) {
      super.prefixLastChildLineOne = value;
    }
    get prefixOtherLinesRootNode() {
      return this[prefixOtherLinesRootNode$];
    }
    set prefixOtherLinesRootNode(value) {
      super.prefixOtherLinesRootNode = value;
    }
    get propertyPrefixIfChildren() {
      return this[propertyPrefixIfChildren$];
    }
    set propertyPrefixIfChildren(value) {
      super.propertyPrefixIfChildren = value;
    }
    get propertyPrefixNoChildren() {
      return this[propertyPrefixNoChildren$];
    }
    set propertyPrefixNoChildren(value) {
      super.propertyPrefixNoChildren = value;
    }
    get linkCharacter() {
      return this[linkCharacter$];
    }
    set linkCharacter(value) {
      super.linkCharacter = value;
    }
    get childLinkSpace() {
      return this[childLinkSpace];
    }
    set childLinkSpace(value) {
      super.childLinkSpace = value;
    }
    get lineBreak() {
      return this[lineBreak$];
    }
    set lineBreak(value) {
      super.lineBreak = value;
    }
    get lineBreakProperties() {
      return this[lineBreakProperties$];
    }
    set lineBreakProperties(value) {
      super.lineBreakProperties = value;
    }
    get beforeName() {
      return this[beforeName$];
    }
    set beforeName(value) {
      super.beforeName = value;
    }
    get afterName() {
      return this[afterName$];
    }
    set afterName(value) {
      super.afterName = value;
    }
    get afterDescriptionIfBody() {
      return this[afterDescriptionIfBody$];
    }
    set afterDescriptionIfBody(value) {
      super.afterDescriptionIfBody = value;
    }
    get afterDescription() {
      return this[afterDescription$];
    }
    set afterDescription(value) {
      super.afterDescription = value;
    }
    get beforeProperties() {
      return this[beforeProperties$];
    }
    set beforeProperties(value) {
      super.beforeProperties = value;
    }
    get afterProperties() {
      return this[afterProperties$];
    }
    set afterProperties(value) {
      super.afterProperties = value;
    }
    get mandatoryAfterProperties() {
      return this[mandatoryAfterProperties$];
    }
    set mandatoryAfterProperties(value) {
      super.mandatoryAfterProperties = value;
    }
    get propertySeparator() {
      return this[propertySeparator$];
    }
    set propertySeparator(value) {
      super.propertySeparator = value;
    }
    get bodyIndent() {
      return this[bodyIndent$];
    }
    set bodyIndent(value) {
      super.bodyIndent = value;
    }
    get showChildren() {
      return this[showChildren$];
    }
    set showChildren(value) {
      super.showChildren = value;
    }
    get addBlankLineIfNoChildren() {
      return this[addBlankLineIfNoChildren$];
    }
    set addBlankLineIfNoChildren(value) {
      super.addBlankLineIfNoChildren = value;
    }
    get isNameOnOwnLine() {
      return this[isNameOnOwnLine$];
    }
    set isNameOnOwnLine(value) {
      super.isNameOnOwnLine = value;
    }
    get footer() {
      return this[footer$];
    }
    set footer(value) {
      super.footer = value;
    }
    get manditoryFooter() {
      return this[manditoryFooter$];
    }
    set manditoryFooter(value) {
      super.manditoryFooter = value;
    }
    get isBlankLineBetweenPropertiesAndChildren() {
      return this[isBlankLineBetweenPropertiesAndChildren$];
    }
    set isBlankLineBetweenPropertiesAndChildren(value) {
      super.isBlankLineBetweenPropertiesAndChildren = value;
    }
  };
  (src__foundation__diagnostics.TextTreeConfiguration.new = function(opts) {
    let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : null;
    let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
    let prefixLastChildLineOne = opts && 'prefixLastChildLineOne' in opts ? opts.prefixLastChildLineOne : null;
    let prefixOtherLinesRootNode = opts && 'prefixOtherLinesRootNode' in opts ? opts.prefixOtherLinesRootNode : null;
    let linkCharacter = opts && 'linkCharacter' in opts ? opts.linkCharacter : null;
    let propertyPrefixIfChildren = opts && 'propertyPrefixIfChildren' in opts ? opts.propertyPrefixIfChildren : null;
    let propertyPrefixNoChildren = opts && 'propertyPrefixNoChildren' in opts ? opts.propertyPrefixNoChildren : null;
    let lineBreak = opts && 'lineBreak' in opts ? opts.lineBreak : "\n";
    let lineBreakProperties = opts && 'lineBreakProperties' in opts ? opts.lineBreakProperties : true;
    let afterName = opts && 'afterName' in opts ? opts.afterName : ":";
    let afterDescriptionIfBody = opts && 'afterDescriptionIfBody' in opts ? opts.afterDescriptionIfBody : "";
    let afterDescription = opts && 'afterDescription' in opts ? opts.afterDescription : "";
    let beforeProperties = opts && 'beforeProperties' in opts ? opts.beforeProperties : "";
    let afterProperties = opts && 'afterProperties' in opts ? opts.afterProperties : "";
    let mandatoryAfterProperties = opts && 'mandatoryAfterProperties' in opts ? opts.mandatoryAfterProperties : "";
    let propertySeparator = opts && 'propertySeparator' in opts ? opts.propertySeparator : "";
    let bodyIndent = opts && 'bodyIndent' in opts ? opts.bodyIndent : "";
    let footer = opts && 'footer' in opts ? opts.footer : "";
    let showChildren = opts && 'showChildren' in opts ? opts.showChildren : true;
    let addBlankLineIfNoChildren = opts && 'addBlankLineIfNoChildren' in opts ? opts.addBlankLineIfNoChildren : true;
    let isNameOnOwnLine = opts && 'isNameOnOwnLine' in opts ? opts.isNameOnOwnLine : false;
    let isBlankLineBetweenPropertiesAndChildren = opts && 'isBlankLineBetweenPropertiesAndChildren' in opts ? opts.isBlankLineBetweenPropertiesAndChildren : true;
    let beforeName = opts && 'beforeName' in opts ? opts.beforeName : "";
    let suffixLineOne = opts && 'suffixLineOne' in opts ? opts.suffixLineOne : "";
    let manditoryFooter = opts && 'manditoryFooter' in opts ? opts.manditoryFooter : "";
    this[prefixLineOne$] = prefixLineOne;
    this[prefixOtherLines$] = prefixOtherLines;
    this[prefixLastChildLineOne$] = prefixLastChildLineOne;
    this[prefixOtherLinesRootNode$] = prefixOtherLinesRootNode;
    this[linkCharacter$] = linkCharacter;
    this[propertyPrefixIfChildren$] = propertyPrefixIfChildren;
    this[propertyPrefixNoChildren$] = propertyPrefixNoChildren;
    this[lineBreak$] = lineBreak;
    this[lineBreakProperties$] = lineBreakProperties;
    this[afterName$] = afterName;
    this[afterDescriptionIfBody$] = afterDescriptionIfBody;
    this[afterDescription$] = afterDescription;
    this[beforeProperties$] = beforeProperties;
    this[afterProperties$] = afterProperties;
    this[mandatoryAfterProperties$] = mandatoryAfterProperties;
    this[propertySeparator$] = propertySeparator;
    this[bodyIndent$] = bodyIndent;
    this[footer$] = footer;
    this[showChildren$] = showChildren;
    this[addBlankLineIfNoChildren$] = addBlankLineIfNoChildren;
    this[isNameOnOwnLine$] = isNameOnOwnLine;
    this[isBlankLineBetweenPropertiesAndChildren$] = isBlankLineBetweenPropertiesAndChildren;
    this[beforeName$] = beforeName;
    this[suffixLineOne$] = suffixLineOne;
    this[manditoryFooter$] = manditoryFooter;
    if (!(prefixLineOne != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 214, 16, "prefixLineOne != null");
    if (!(prefixOtherLines != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 215, 16, "prefixOtherLines != null");
    if (!(prefixLastChildLineOne != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 216, 16, "prefixLastChildLineOne != null");
    if (!(prefixOtherLinesRootNode != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 217, 16, "prefixOtherLinesRootNode != null");
    if (!(linkCharacter != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 218, 16, "linkCharacter != null");
    if (!(propertyPrefixIfChildren != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 219, 16, "propertyPrefixIfChildren != null");
    if (!(propertyPrefixNoChildren != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 220, 16, "propertyPrefixNoChildren != null");
    if (!(lineBreak != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 221, 16, "lineBreak != null");
    if (!(lineBreakProperties != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 222, 16, "lineBreakProperties != null");
    if (!(afterName != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 223, 16, "afterName != null");
    if (!(afterDescriptionIfBody != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 224, 16, "afterDescriptionIfBody != null");
    if (!(afterDescription != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 225, 16, "afterDescription != null");
    if (!(beforeProperties != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 226, 16, "beforeProperties != null");
    if (!(afterProperties != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 227, 16, "afterProperties != null");
    if (!(propertySeparator != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 228, 16, "propertySeparator != null");
    if (!(bodyIndent != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 229, 16, "bodyIndent != null");
    if (!(footer != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 230, 16, "footer != null");
    if (!(showChildren != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 231, 16, "showChildren != null");
    if (!(addBlankLineIfNoChildren != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 232, 16, "addBlankLineIfNoChildren != null");
    if (!(isNameOnOwnLine != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 233, 16, "isNameOnOwnLine != null");
    if (!(isBlankLineBetweenPropertiesAndChildren != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 234, 16, "isBlankLineBetweenPropertiesAndChildren != null");
    this[childLinkSpace] = " "[$times](linkCharacter.length);
  }).prototype = src__foundation__diagnostics.TextTreeConfiguration.prototype;
  dart.addTypeTests(src__foundation__diagnostics.TextTreeConfiguration);
  const prefixLineOne$ = Symbol("TextTreeConfiguration.prefixLineOne");
  const suffixLineOne$ = Symbol("TextTreeConfiguration.suffixLineOne");
  const prefixOtherLines$ = Symbol("TextTreeConfiguration.prefixOtherLines");
  const prefixLastChildLineOne$ = Symbol("TextTreeConfiguration.prefixLastChildLineOne");
  const prefixOtherLinesRootNode$ = Symbol("TextTreeConfiguration.prefixOtherLinesRootNode");
  const propertyPrefixIfChildren$ = Symbol("TextTreeConfiguration.propertyPrefixIfChildren");
  const propertyPrefixNoChildren$ = Symbol("TextTreeConfiguration.propertyPrefixNoChildren");
  const linkCharacter$ = Symbol("TextTreeConfiguration.linkCharacter");
  const childLinkSpace = Symbol("TextTreeConfiguration.childLinkSpace");
  const lineBreak$ = Symbol("TextTreeConfiguration.lineBreak");
  const lineBreakProperties$ = Symbol("TextTreeConfiguration.lineBreakProperties");
  const beforeName$ = Symbol("TextTreeConfiguration.beforeName");
  const afterName$ = Symbol("TextTreeConfiguration.afterName");
  const afterDescriptionIfBody$ = Symbol("TextTreeConfiguration.afterDescriptionIfBody");
  const afterDescription$ = Symbol("TextTreeConfiguration.afterDescription");
  const beforeProperties$ = Symbol("TextTreeConfiguration.beforeProperties");
  const afterProperties$ = Symbol("TextTreeConfiguration.afterProperties");
  const mandatoryAfterProperties$ = Symbol("TextTreeConfiguration.mandatoryAfterProperties");
  const propertySeparator$ = Symbol("TextTreeConfiguration.propertySeparator");
  const bodyIndent$ = Symbol("TextTreeConfiguration.bodyIndent");
  const showChildren$ = Symbol("TextTreeConfiguration.showChildren");
  const addBlankLineIfNoChildren$ = Symbol("TextTreeConfiguration.addBlankLineIfNoChildren");
  const isNameOnOwnLine$ = Symbol("TextTreeConfiguration.isNameOnOwnLine");
  const footer$ = Symbol("TextTreeConfiguration.footer");
  const manditoryFooter$ = Symbol("TextTreeConfiguration.manditoryFooter");
  const isBlankLineBetweenPropertiesAndChildren$ = Symbol("TextTreeConfiguration.isBlankLineBetweenPropertiesAndChildren");
  dart.setLibraryUri(src__foundation__diagnostics.TextTreeConfiguration, "package:flutter_web/src/foundation/diagnostics.dart");
  dart.setFieldSignature(src__foundation__diagnostics.TextTreeConfiguration, () => ({
    __proto__: dart.getFields(src__foundation__diagnostics.TextTreeConfiguration.__proto__),
    prefixLineOne: dart.finalFieldType(core.String),
    suffixLineOne: dart.finalFieldType(core.String),
    prefixOtherLines: dart.finalFieldType(core.String),
    prefixLastChildLineOne: dart.finalFieldType(core.String),
    prefixOtherLinesRootNode: dart.finalFieldType(core.String),
    propertyPrefixIfChildren: dart.finalFieldType(core.String),
    propertyPrefixNoChildren: dart.finalFieldType(core.String),
    linkCharacter: dart.finalFieldType(core.String),
    childLinkSpace: dart.finalFieldType(core.String),
    lineBreak: dart.finalFieldType(core.String),
    lineBreakProperties: dart.finalFieldType(core.bool),
    beforeName: dart.finalFieldType(core.String),
    afterName: dart.finalFieldType(core.String),
    afterDescriptionIfBody: dart.finalFieldType(core.String),
    afterDescription: dart.finalFieldType(core.String),
    beforeProperties: dart.finalFieldType(core.String),
    afterProperties: dart.finalFieldType(core.String),
    mandatoryAfterProperties: dart.finalFieldType(core.String),
    propertySeparator: dart.finalFieldType(core.String),
    bodyIndent: dart.finalFieldType(core.String),
    showChildren: dart.finalFieldType(core.bool),
    addBlankLineIfNoChildren: dart.finalFieldType(core.bool),
    isNameOnOwnLine: dart.finalFieldType(core.bool),
    footer: dart.finalFieldType(core.String),
    manditoryFooter: dart.finalFieldType(core.String),
    isBlankLineBetweenPropertiesAndChildren: dart.finalFieldType(core.bool)
  }));
  dart.defineLazy(src__foundation__diagnostics, {
    /*src__foundation__diagnostics.sparseTextConfiguration*/get sparseTextConfiguration() {
      return new src__foundation__diagnostics.TextTreeConfiguration.new({prefixLineOne: "├─", prefixOtherLines: " ", prefixLastChildLineOne: "└─", linkCharacter: "│", propertyPrefixIfChildren: "│ ", propertyPrefixNoChildren: "  ", prefixOtherLinesRootNode: " "});
    },
    /*src__foundation__diagnostics.dashedTextConfiguration*/get dashedTextConfiguration() {
      return new src__foundation__diagnostics.TextTreeConfiguration.new({prefixLineOne: "╎╌", prefixLastChildLineOne: "└╌", prefixOtherLines: " ", linkCharacter: "╎", propertyPrefixIfChildren: "│ ", propertyPrefixNoChildren: "  ", prefixOtherLinesRootNode: " "});
    },
    /*src__foundation__diagnostics.denseTextConfiguration*/get denseTextConfiguration() {
      return new src__foundation__diagnostics.TextTreeConfiguration.new({propertySeparator: ", ", beforeProperties: "(", afterProperties: ")", lineBreakProperties: false, prefixLineOne: "├", prefixOtherLines: "", prefixLastChildLineOne: "└", linkCharacter: "│", propertyPrefixIfChildren: "│", propertyPrefixNoChildren: " ", prefixOtherLinesRootNode: "", addBlankLineIfNoChildren: false, isBlankLineBetweenPropertiesAndChildren: false});
    },
    /*src__foundation__diagnostics.transitionTextConfiguration*/get transitionTextConfiguration() {
      return new src__foundation__diagnostics.TextTreeConfiguration.new({prefixLineOne: "╞═╦══ ", prefixLastChildLineOne: "╘═╦══ ", prefixOtherLines: " ║ ", footer: " ╚═══════════", linkCharacter: "│", propertyPrefixIfChildren: "", propertyPrefixNoChildren: "", prefixOtherLinesRootNode: "", afterName: " ═══", afterDescriptionIfBody: ":", bodyIndent: "  ", isNameOnOwnLine: true, addBlankLineIfNoChildren: false, isBlankLineBetweenPropertiesAndChildren: false});
    },
    /*src__foundation__diagnostics.errorTextConfiguration*/get errorTextConfiguration() {
      return new src__foundation__diagnostics.TextTreeConfiguration.new({prefixLineOne: "╞═╦", prefixLastChildLineOne: "╘═╦", prefixOtherLines: " ║ ", footer: " ╚═══════════", linkCharacter: "│", propertyPrefixIfChildren: "", propertyPrefixNoChildren: "", prefixOtherLinesRootNode: "", beforeName: "══╡ ", suffixLineOne: " ╞══", manditoryFooter: "═════", addBlankLineIfNoChildren: false, isBlankLineBetweenPropertiesAndChildren: false});
    },
    /*src__foundation__diagnostics.whitespaceTextConfiguration*/get whitespaceTextConfiguration() {
      return new src__foundation__diagnostics.TextTreeConfiguration.new({prefixLineOne: "", prefixLastChildLineOne: "", prefixOtherLines: " ", prefixOtherLinesRootNode: "  ", bodyIndent: "", propertyPrefixIfChildren: "", propertyPrefixNoChildren: "", linkCharacter: " ", addBlankLineIfNoChildren: false, afterDescriptionIfBody: ":", isBlankLineBetweenPropertiesAndChildren: false});
    },
    /*src__foundation__diagnostics.flatTextConfiguration*/get flatTextConfiguration() {
      return new src__foundation__diagnostics.TextTreeConfiguration.new({prefixLineOne: "", prefixLastChildLineOne: "", prefixOtherLines: "", prefixOtherLinesRootNode: "", bodyIndent: "", propertyPrefixIfChildren: "", propertyPrefixNoChildren: "", linkCharacter: "", addBlankLineIfNoChildren: false, afterDescriptionIfBody: ":", isBlankLineBetweenPropertiesAndChildren: false});
    },
    /*src__foundation__diagnostics.singleLineTextConfiguration*/get singleLineTextConfiguration() {
      return new src__foundation__diagnostics.TextTreeConfiguration.new({propertySeparator: ", ", beforeProperties: "(", afterProperties: ")", prefixLineOne: "", prefixOtherLines: "", prefixLastChildLineOne: "", lineBreak: "", lineBreakProperties: false, addBlankLineIfNoChildren: false, showChildren: false, propertyPrefixIfChildren: "  ", propertyPrefixNoChildren: "  ", linkCharacter: "", prefixOtherLinesRootNode: ""});
    },
    /*src__foundation__diagnostics.errorPropertyTextConfiguration*/get errorPropertyTextConfiguration() {
      return new src__foundation__diagnostics.TextTreeConfiguration.new({propertySeparator: ", ", beforeProperties: "(", afterProperties: ")", prefixLineOne: "", prefixOtherLines: "", prefixLastChildLineOne: "", lineBreak: "\n", lineBreakProperties: false, addBlankLineIfNoChildren: false, showChildren: false, propertyPrefixIfChildren: "  ", propertyPrefixNoChildren: "  ", linkCharacter: "", prefixOtherLinesRootNode: "", afterName: ":", isNameOnOwnLine: true});
    },
    /*src__foundation__diagnostics.shallowTextConfiguration*/get shallowTextConfiguration() {
      return new src__foundation__diagnostics.TextTreeConfiguration.new({prefixLineOne: "", prefixLastChildLineOne: "", prefixOtherLines: " ", prefixOtherLinesRootNode: "  ", bodyIndent: "", propertyPrefixIfChildren: "", propertyPrefixNoChildren: "", linkCharacter: " ", addBlankLineIfNoChildren: false, afterDescriptionIfBody: ":", isBlankLineBetweenPropertiesAndChildren: false, showChildren: false});
    }
  });
  src__foundation__diagnostics._WordWrapParseMode = class _WordWrapParseMode extends core.Object {
    toString() {
      return {
        0: "_WordWrapParseMode.inSpace",
        1: "_WordWrapParseMode.inWord",
        2: "_WordWrapParseMode.atBreak"
      }[this.index];
    }
  };
  (src__foundation__diagnostics._WordWrapParseMode.new = function(x) {
    this.index = x;
  }).prototype = src__foundation__diagnostics._WordWrapParseMode.prototype;
  dart.addTypeTests(src__foundation__diagnostics._WordWrapParseMode);
  dart.setLibraryUri(src__foundation__diagnostics._WordWrapParseMode, "package:flutter_web/src/foundation/diagnostics.dart");
  dart.setFieldSignature(src__foundation__diagnostics._WordWrapParseMode, () => ({
    __proto__: dart.getFields(src__foundation__diagnostics._WordWrapParseMode.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__foundation__diagnostics._WordWrapParseMode, ['toString']);
  src__foundation__diagnostics._WordWrapParseMode.inSpace = dart.const(new src__foundation__diagnostics._WordWrapParseMode.new(0));
  src__foundation__diagnostics._WordWrapParseMode.inWord = dart.const(new src__foundation__diagnostics._WordWrapParseMode.new(1));
  src__foundation__diagnostics._WordWrapParseMode.atBreak = dart.const(new src__foundation__diagnostics._WordWrapParseMode.new(2));
  src__foundation__diagnostics._WordWrapParseMode.values = dart.constList([src__foundation__diagnostics._WordWrapParseMode.inSpace, src__foundation__diagnostics._WordWrapParseMode.inWord, src__foundation__diagnostics._WordWrapParseMode.atBreak], src__foundation__diagnostics._WordWrapParseMode);
  const _prefixOtherLines = dart.privateName(src__foundation__diagnostics, "_prefixOtherLines");
  const _nextPrefixOtherLines = dart.privateName(src__foundation__diagnostics, "_nextPrefixOtherLines");
  const _buffer = dart.privateName(src__foundation__diagnostics, "_buffer");
  const _currentLine = dart.privateName(src__foundation__diagnostics, "_currentLine");
  const _wrappableRanges = dart.privateName(src__foundation__diagnostics, "_wrappableRanges");
  const _numLines = dart.privateName(src__foundation__diagnostics, "_numLines");
  const _getCurrentPrefix = dart.privateName(src__foundation__diagnostics, "_getCurrentPrefix");
  const _writeLine = dart.privateName(src__foundation__diagnostics, "_writeLine");
  const _finalizeLine = dart.privateName(src__foundation__diagnostics, "_finalizeLine");
  const _updatePrefix = dart.privateName(src__foundation__diagnostics, "_updatePrefix");
  src__foundation__diagnostics._PrefixedStringBuilder = class _PrefixedStringBuilder extends core.Object {
    get prefixOtherLines() {
      let l = this[_nextPrefixOtherLines];
      return l != null ? l : this[_prefixOtherLines];
    }
    set prefixOtherLines(prefix) {
      this[_prefixOtherLines] = prefix;
      this[_nextPrefixOtherLines] = null;
    }
    incrementPrefixOtherLines(suffix, opts) {
      let updateCurrentLine = opts && 'updateCurrentLine' in opts ? opts.updateCurrentLine : null;
      if (dart.test(this[_currentLine].isEmpty) || dart.test(updateCurrentLine)) {
        this[_prefixOtherLines] = dart.notNull(this.prefixOtherLines) + dart.notNull(suffix);
        this[_nextPrefixOtherLines] = null;
      } else {
        this[_nextPrefixOtherLines] = dart.notNull(this.prefixOtherLines) + dart.notNull(suffix);
      }
    }
    get requiresMultipleLines() {
      return dart.notNull(this[_numLines]) > 1 || this[_numLines] === 1 && dart.test(this[_currentLine].isNotEmpty) || dart.notNull(this[_currentLine].length) + this[_getCurrentPrefix](true).length > dart.notNull(this.wrapWidth);
    }
    get isCurrentLineEmpty() {
      return this[_currentLine].isEmpty;
    }
    [_finalizeLine](addTrailingLineBreak) {
      let firstLine = this[_buffer].isEmpty;
      let text = dart.toString(this[_currentLine]);
      this[_currentLine].clear();
      if (dart.test(this[_wrappableRanges][$isEmpty])) {
        this[_writeLine](text, {includeLineBreak: addTrailingLineBreak, firstLine: firstLine});
        return;
      }
      let lines = src__foundation__diagnostics._PrefixedStringBuilder._wordWrapLine(text, this[_wrappableRanges], this.wrapWidth, {startOffset: dart.test(firstLine) ? this.prefixLineOne.length : this[_prefixOtherLines].length, otherLineOffset: dart.test(firstLine) ? this[_prefixOtherLines].length : this[_prefixOtherLines].length});
      let i = 0;
      let length = lines[$length];
      for (let line of lines) {
        i++;
        this[_writeLine](line, {includeLineBreak: dart.test(addTrailingLineBreak) || i < dart.notNull(length), firstLine: firstLine});
      }
      this[_wrappableRanges][$clear]();
    }
    static _wordWrapLine(message, wrapRanges, width, opts) {
      let startOffset = opts && 'startOffset' in opts ? opts.startOffset : 0;
      let otherLineOffset = opts && 'otherLineOffset' in opts ? opts.otherLineOffset : 0;
      return new (SyncIterableOfString()).new(function* _wordWrapLine() {
        if (message.length + dart.notNull(startOffset) < dart.notNull(width)) {
          yield message;
          return;
        }
        let startForLengthCalculations = -dart.notNull(startOffset);
        let addPrefix = false;
        let index = 0;
        let mode = src__foundation__diagnostics._WordWrapParseMode.inSpace;
        let lastWordStart = null;
        let lastWordEnd = null;
        let start = 0;
        let currentChunk = 0;
        function noWrap(index) {
          while (true) {
            if (currentChunk >= dart.notNull(wrapRanges[$length])) return true;
            if (dart.notNull(index) < dart.notNull(wrapRanges[$_get](currentChunk + 1))) break;
            currentChunk = currentChunk + 2;
          }
          return dart.notNull(index) < dart.notNull(wrapRanges[$_get](currentChunk));
        }
        dart.fn(noWrap, intTobool());
        while (true) {
          switch (mode) {
            case src__foundation__diagnostics._WordWrapParseMode.inSpace:
            {
              while (index < message.length && message[$_get](index) === " ") {
                index = index + 1;
              }
              lastWordStart = index;
              mode = src__foundation__diagnostics._WordWrapParseMode.inWord;
              break;
            }
            case src__foundation__diagnostics._WordWrapParseMode.inWord:
            {
              while (index < message.length && (message[$_get](index) !== " " || dart.test(noWrap(index)))) {
                index = index + 1;
              }
              mode = src__foundation__diagnostics._WordWrapParseMode.atBreak;
              break;
            }
            case src__foundation__diagnostics._WordWrapParseMode.atBreak:
            {
              if (index - startForLengthCalculations > dart.notNull(width) || index === message.length) {
                if (index - startForLengthCalculations <= dart.notNull(width) || lastWordEnd == null) {
                  lastWordEnd = index;
                }
                let line = message[$substring](start, lastWordEnd);
                yield line;
                addPrefix = true;
                if (dart.notNull(lastWordEnd) >= message.length) return;
                if (lastWordEnd === index) {
                  while (index < message.length && message[$_get](index) === " ") {
                    index = index + 1;
                  }
                  start = index;
                  mode = src__foundation__diagnostics._WordWrapParseMode.inWord;
                } else {
                  if (!(dart.notNull(lastWordStart) > dart.notNull(lastWordEnd))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 942, 22, "lastWordStart > lastWordEnd");
                  start = lastWordStart;
                  mode = src__foundation__diagnostics._WordWrapParseMode.atBreak;
                }
                startForLengthCalculations = dart.notNull(start) - dart.notNull(otherLineOffset);
                if (!addPrefix) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 947, 20, "addPrefix");
                lastWordEnd = null;
              } else {
                lastWordEnd = index;
                mode = src__foundation__diagnostics._WordWrapParseMode.inSpace;
              }
              break;
            }
          }
        }
      });
    }
    write(s, opts) {
      let allowWrap = opts && 'allowWrap' in opts ? opts.allowWrap : false;
      if (s[$isEmpty]) return;
      let lines = s[$split]("\n");
      for (let i = 0; i < dart.notNull(lines[$length]); i = i + 1) {
        if (i > 0) {
          this[_finalizeLine](true);
          this[_updatePrefix]();
        }
        let line = lines[$_get](i);
        if (line[$isNotEmpty]) {
          if (dart.test(allowWrap) && this.wrapWidth != null) {
            let wrapStart = this[_currentLine].length;
            let wrapEnd = dart.notNull(wrapStart) + line.length;
            if (dart.test(this[_wrappableRanges][$isNotEmpty]) && this[_wrappableRanges][$last] == wrapStart) {
              this[_wrappableRanges][$last] = wrapEnd;
            } else {
              this[_wrappableRanges][$add](wrapStart);
              this[_wrappableRanges][$add](wrapEnd);
            }
          }
          this[_currentLine].write(line);
        }
      }
    }
    [_updatePrefix]() {
      if (this[_nextPrefixOtherLines] != null) {
        this[_prefixOtherLines] = this[_nextPrefixOtherLines];
        this[_nextPrefixOtherLines] = null;
      }
    }
    [_writeLine](line, opts) {
      let includeLineBreak = opts && 'includeLineBreak' in opts ? opts.includeLineBreak : null;
      let firstLine = opts && 'firstLine' in opts ? opts.firstLine : null;
      line = dart.str(this[_getCurrentPrefix](firstLine)) + dart.str(line);
      this[_buffer].write(line[$trimRight]());
      if (dart.test(includeLineBreak)) this[_buffer].write("\n");
      this[_numLines] = dart.notNull(this[_numLines]) + 1;
    }
    [_getCurrentPrefix](firstLine) {
      return dart.test(this[_buffer].isEmpty) ? this.prefixLineOne : dart.test(firstLine) ? this[_prefixOtherLines] : this[_prefixOtherLines];
    }
    writeRawLines(lines) {
      if (lines[$isEmpty]) return;
      if (dart.test(this[_currentLine].isNotEmpty)) {
        this[_finalizeLine](true);
      }
      if (!dart.test(this[_currentLine].isEmpty)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 1024, 12, "_currentLine.isEmpty");
      this[_buffer].write(lines);
      if (!lines[$endsWith]("\n")) this[_buffer].write("\n");
      this[_numLines] = dart.notNull(this[_numLines]) + 1;
      this[_updatePrefix]();
    }
    writeStretched(text, targetLineLength) {
      this.write(text);
      let currentLineLength = dart.notNull(this[_currentLine].length) + this[_getCurrentPrefix](this[_buffer].isEmpty).length;
      if (!(dart.notNull(this[_currentLine].length) > 0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 1037, 12, "_currentLine.length > 0");
      let targetLength = dart.notNull(targetLineLength) - currentLineLength;
      if (targetLength > 0) {
        if (!text[$isNotEmpty]) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 1040, 14, "text.isNotEmpty");
        let lastChar = text[$_get](text.length - 1);
        if (!(lastChar !== "\n")) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 1042, 14, "lastChar != '\\n'");
        this[_currentLine].write(lastChar[$times](targetLength));
      }
      this[_wrappableRanges][$clear]();
    }
    build() {
      if (dart.test(this[_currentLine].isNotEmpty)) this[_finalizeLine](false);
      return dart.toString(this[_buffer]);
    }
  };
  (src__foundation__diagnostics._PrefixedStringBuilder.new = function(opts) {
    let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : null;
    let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
    let wrapWidth = opts && 'wrapWidth' in opts ? opts.wrapWidth : null;
    this[_nextPrefixOtherLines] = null;
    this[_buffer] = new core.StringBuffer.new();
    this[_currentLine] = new core.StringBuffer.new();
    this[_wrappableRanges] = JSArrayOfint().of([]);
    this[_numLines] = 0;
    this.prefixLineOne = prefixLineOne;
    this.wrapWidth = wrapWidth;
    this[_prefixOtherLines] = prefixOtherLines;
  }).prototype = src__foundation__diagnostics._PrefixedStringBuilder.prototype;
  dart.addTypeTests(src__foundation__diagnostics._PrefixedStringBuilder);
  dart.setMethodSignature(src__foundation__diagnostics._PrefixedStringBuilder, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics._PrefixedStringBuilder.__proto__),
    incrementPrefixOtherLines: dart.fnType(dart.void, [core.String], {updateCurrentLine: core.bool}),
    [_finalizeLine]: dart.fnType(dart.void, [core.bool]),
    write: dart.fnType(dart.void, [core.String], {allowWrap: core.bool}),
    [_updatePrefix]: dart.fnType(dart.void, []),
    [_writeLine]: dart.fnType(dart.void, [core.String], {includeLineBreak: core.bool, firstLine: core.bool}),
    [_getCurrentPrefix]: dart.fnType(core.String, [core.bool]),
    writeRawLines: dart.fnType(dart.void, [core.String]),
    writeStretched: dart.fnType(dart.void, [core.String, core.int]),
    build: dart.fnType(core.String, [])
  }));
  dart.setGetterSignature(src__foundation__diagnostics._PrefixedStringBuilder, () => ({
    __proto__: dart.getGetters(src__foundation__diagnostics._PrefixedStringBuilder.__proto__),
    prefixOtherLines: core.String,
    requiresMultipleLines: core.bool,
    isCurrentLineEmpty: core.bool
  }));
  dart.setSetterSignature(src__foundation__diagnostics._PrefixedStringBuilder, () => ({
    __proto__: dart.getSetters(src__foundation__diagnostics._PrefixedStringBuilder.__proto__),
    prefixOtherLines: core.String
  }));
  dart.setLibraryUri(src__foundation__diagnostics._PrefixedStringBuilder, "package:flutter_web/src/foundation/diagnostics.dart");
  dart.setFieldSignature(src__foundation__diagnostics._PrefixedStringBuilder, () => ({
    __proto__: dart.getFields(src__foundation__diagnostics._PrefixedStringBuilder.__proto__),
    prefixLineOne: dart.finalFieldType(core.String),
    [_prefixOtherLines]: dart.fieldType(core.String),
    [_nextPrefixOtherLines]: dart.fieldType(core.String),
    wrapWidth: dart.finalFieldType(core.int),
    [_buffer]: dart.finalFieldType(core.StringBuffer),
    [_currentLine]: dart.finalFieldType(core.StringBuffer),
    [_wrappableRanges]: dart.finalFieldType(ListOfint()),
    [_numLines]: dart.fieldType(core.int)
  }));
  src__foundation__diagnostics._NoDefaultValue = class _NoDefaultValue extends core.Object {};
  (src__foundation__diagnostics._NoDefaultValue.new = function() {
  }).prototype = src__foundation__diagnostics._NoDefaultValue.prototype;
  dart.addTypeTests(src__foundation__diagnostics._NoDefaultValue);
  dart.setLibraryUri(src__foundation__diagnostics._NoDefaultValue, "package:flutter_web/src/foundation/diagnostics.dart");
  dart.defineLazy(src__foundation__diagnostics, {
    /*src__foundation__diagnostics.kNoDefaultValue*/get kNoDefaultValue() {
      return dart.const(new src__foundation__diagnostics._NoDefaultValue.new());
    }
  });
  src__foundation__diagnostics._isSingleLine = function(style) {
    return style === src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine;
  };
  const _minLevel = dart.privateName(src__foundation__diagnostics, "_minLevel");
  const _wrapWidth = dart.privateName(src__foundation__diagnostics, "_wrapWidth");
  const _wrapWidthProperties = dart.privateName(src__foundation__diagnostics, "_wrapWidthProperties");
  const _maxDescendentsTruncatableNode = dart.privateName(src__foundation__diagnostics, "_maxDescendentsTruncatableNode");
  const _childTextConfiguration = dart.privateName(src__foundation__diagnostics, "_childTextConfiguration");
  src__foundation__diagnostics.TextTreeRenderer = class TextTreeRenderer extends core.Object {
    [_childTextConfiguration](child, textStyle) {
      let childStyle = child == null ? null : child.style;
      return dart.test(src__foundation__diagnostics._isSingleLine(childStyle)) || childStyle === src__foundation__diagnostics.DiagnosticsTreeStyle.errorProperty ? textStyle : child.textTreeConfiguration;
    }
    render(node, opts) {
      let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : "";
      let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      let isSingleLine = dart.test(src__foundation__diagnostics._isSingleLine(node.style)) && (parentConfiguration == null ? null : parentConfiguration.lineBreakProperties) !== true;
      let t = prefixOtherLines;
      t == null ? prefixOtherLines = prefixLineOne : t;
      if (node.linePrefix != null) {
        prefixLineOne = dart.notNull(prefixLineOne) + dart.notNull(node.linePrefix);
        prefixOtherLines = dart.notNull(prefixOtherLines) + dart.notNull(node.linePrefix);
      }
      let config = node.textTreeConfiguration;
      if (prefixOtherLines[$isEmpty]) {
        prefixOtherLines = dart.notNull(prefixOtherLines) + dart.notNull(config.prefixOtherLinesRootNode);
      }
      if (node.style === src__foundation__diagnostics.DiagnosticsTreeStyle.truncateChildren) {
        let descendants = JSArrayOfString().of([]);
        let maxDepth = 5;
        let depth = 0;
        let maxLines = 25;
        let lines = 0;
        function visitor(node) {
          for (let child of node.getChildren()) {
            if (lines < maxLines) {
              depth = depth + 1;
              descendants[$add](dart.str(prefixOtherLines) + "  "[$times](depth) + dart.str(child));
              if (depth < maxDepth) visitor(child);
              depth = depth - 1;
            } else if (lines === maxLines) {
              descendants[$add](dart.str(prefixOtherLines) + "  ...(descendants list truncated after " + dart.str(lines) + " lines)");
            }
            lines = lines + 1;
          }
        }
        dart.fn(visitor, DiagnosticsNodeTovoid());
        visitor(node);
        let information = new core.StringBuffer.new(prefixLineOne);
        if (lines > 1) {
          information.writeln("This " + dart.str(node.name) + " had the following descendants (showing up to depth " + dart.str(maxDepth) + "):");
        } else if (descendants[$length] === 1) {
          information.writeln("This " + dart.str(node.name) + " had the following child:");
        } else {
          information.writeln("This " + dart.str(node.name) + " has no descendants.");
        }
        information.writeAll(descendants, "\n");
        return information.toString();
      }
      let builder = new src__foundation__diagnostics._PrefixedStringBuilder.new({prefixLineOne: prefixLineOne, prefixOtherLines: prefixOtherLines, wrapWidth: math.max(core.int, this[_wrapWidth], prefixOtherLines.length + dart.notNull(this[_wrapWidthProperties]))});
      let children = node.getChildren();
      let description = node.toDescription({parentConfiguration: parentConfiguration});
      if (config.beforeName[$isNotEmpty]) {
        builder.write(config.beforeName);
      }
      let wrapName = !isSingleLine && dart.test(node.allowNameWrap);
      let wrapDescription = !isSingleLine && dart.test(node.allowWrap);
      let uppercaseTitle = node.style === src__foundation__diagnostics.DiagnosticsTreeStyle.error;
      let name = node.name;
      if (uppercaseTitle) {
        name = name == null ? null : name[$toUpperCase]();
      }
      if (description == null || description[$isEmpty]) {
        if (dart.test(node.showName) && name != null) builder.write(name, {allowWrap: wrapName});
      } else {
        let includeName = false;
        if (name != null && name[$isNotEmpty] && dart.test(node.showName)) {
          includeName = true;
          builder.write(name, {allowWrap: wrapName});
          if (dart.test(node.showSeparator)) builder.write(config.afterName, {allowWrap: wrapName});
          builder.write(dart.test(config.isNameOnOwnLine) || description[$contains]("\n") ? "\n" : " ", {allowWrap: wrapName});
        }
        if (!isSingleLine && dart.test(builder.requiresMultipleLines) && !dart.test(builder.isCurrentLineEmpty)) {
          builder.write("\n");
        }
        if (includeName) {
          builder.incrementPrefixOtherLines(dart.test(children[$isEmpty]) ? config.propertyPrefixNoChildren : config.propertyPrefixIfChildren, {updateCurrentLine: true});
        }
        if (uppercaseTitle) {
          description = description[$toUpperCase]();
        }
        builder.write(description[$trimRight](), {allowWrap: wrapDescription});
        if (!includeName) {
          builder.incrementPrefixOtherLines(dart.test(children[$isEmpty]) ? config.propertyPrefixNoChildren : config.propertyPrefixIfChildren, {updateCurrentLine: false});
        }
      }
      if (config.suffixLineOne[$isNotEmpty]) {
        builder.writeStretched(config.suffixLineOne, builder.wrapWidth);
      }
      let propertiesIterable = node.getProperties()[$where](dart.fn(n => !dart.test(n.isFiltered(this[_minLevel])), DiagnosticsNodeTobool()));
      let properties = null;
      if (dart.notNull(this[_maxDescendentsTruncatableNode]) >= 0 && dart.test(node.allowTruncate)) {
        if (dart.notNull(propertiesIterable[$length]) < dart.notNull(this[_maxDescendentsTruncatableNode])) {
          properties = propertiesIterable[$take](this[_maxDescendentsTruncatableNode])[$toList]();
          properties[$add](src__foundation__diagnostics.DiagnosticsNode.message("..."));
        } else {
          properties = propertiesIterable[$toList]();
        }
        if (dart.notNull(this[_maxDescendentsTruncatableNode]) < dart.notNull(children[$length])) {
          children = children[$take](this[_maxDescendentsTruncatableNode])[$toList]();
          children[$add](src__foundation__diagnostics.DiagnosticsNode.message("..."));
        }
      } else {
        properties = propertiesIterable[$toList]();
      }
      if ((dart.test(properties[$isNotEmpty]) || dart.test(children[$isNotEmpty]) || node.emptyBodyDescription != null) && (dart.test(node.showSeparator) || (description == null ? null : description[$isNotEmpty]) === true)) {
        builder.write(config.afterDescriptionIfBody);
      }
      if (dart.test(config.lineBreakProperties)) builder.write(config.lineBreak);
      if (dart.test(properties[$isNotEmpty])) builder.write(config.beforeProperties);
      builder.incrementPrefixOtherLines(config.bodyIndent, {updateCurrentLine: false});
      if (node.emptyBodyDescription != null && dart.test(properties[$isEmpty]) && dart.test(children[$isEmpty]) && prefixLineOne[$isNotEmpty]) {
        builder.write(node.emptyBodyDescription);
        if (dart.test(config.lineBreakProperties)) builder.write(config.lineBreak);
      }
      for (let i = 0; i < dart.notNull(properties[$length]); ++i) {
        let property = properties[$_get](i);
        if (i > 0) builder.write(config.propertySeparator);
        let propertyStyle = property.textTreeConfiguration;
        if (dart.test(src__foundation__diagnostics._isSingleLine(property.style))) {
          let propertyRender = this.render(property, {prefixLineOne: dart.str(propertyStyle.prefixLineOne), prefixOtherLines: dart.str(propertyStyle.childLinkSpace) + dart.str(propertyStyle.prefixOtherLines), parentConfiguration: config});
          let propertyLines = propertyRender[$split]("\n");
          if (propertyLines[$length] === 1 && !dart.test(config.lineBreakProperties)) {
            builder.write(propertyLines[$first]);
          } else {
            builder.write(propertyRender, {allowWrap: false});
            if (!propertyRender[$endsWith]("\n")) builder.write("\n");
          }
        } else {
          let propertyRender = this.render(property, {prefixLineOne: dart.str(builder.prefixOtherLines) + dart.str(propertyStyle.prefixLineOne), prefixOtherLines: dart.str(builder.prefixOtherLines) + dart.str(propertyStyle.childLinkSpace) + dart.str(propertyStyle.prefixOtherLines), parentConfiguration: config});
          builder.writeRawLines(propertyRender);
        }
      }
      if (dart.test(properties[$isNotEmpty])) builder.write(config.afterProperties);
      builder.write(config.mandatoryAfterProperties);
      if (!dart.test(config.lineBreakProperties)) builder.write(config.lineBreak);
      let prefixChildren = dart.str(config.bodyIndent);
      let prefixChildrenRaw = dart.str(prefixOtherLines) + prefixChildren;
      if (dart.test(children[$isEmpty]) && dart.test(config.addBlankLineIfNoChildren) && dart.test(builder.requiresMultipleLines) && builder.prefixOtherLines[$trimRight]()[$isNotEmpty]) {
        builder.write(config.lineBreak);
      }
      if (dart.test(children[$isNotEmpty]) && dart.test(config.showChildren)) {
        if (dart.test(config.isBlankLineBetweenPropertiesAndChildren) && dart.test(properties[$isNotEmpty]) && dart.test(children[$first].textTreeConfiguration.isBlankLineBetweenPropertiesAndChildren)) {
          builder.write(config.lineBreak);
        }
        builder.prefixOtherLines = prefixOtherLines;
        for (let i = 0; i < dart.notNull(children[$length]); i++) {
          let child = children[$_get](i);
          if (!(child != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 1352, 16, "child != null");
          let childConfig = this[_childTextConfiguration](child, config);
          if (i === dart.notNull(children[$length]) - 1) {
            let lastChildPrefixLineOne = prefixChildrenRaw + dart.str(childConfig.prefixLastChildLineOne);
            let childPrefixOtherLines = prefixChildrenRaw + dart.str(childConfig.childLinkSpace) + dart.str(childConfig.prefixOtherLines);
            builder.writeRawLines(this.render(child, {prefixLineOne: lastChildPrefixLineOne, prefixOtherLines: childPrefixOtherLines, parentConfiguration: config}));
            if (childConfig.footer[$isNotEmpty]) {
              builder.prefixOtherLines = prefixChildrenRaw;
              builder.write(dart.str(childConfig.childLinkSpace) + dart.str(childConfig.footer));
              if (childConfig.manditoryFooter[$isNotEmpty]) {
                builder.writeStretched(childConfig.manditoryFooter, math.max(core.int, builder.wrapWidth, dart.notNull(this[_wrapWidthProperties]) + childPrefixOtherLines.length));
              }
              builder.write(config.lineBreak);
            }
          } else {
            let nextChildStyle = this[_childTextConfiguration](children[$_get](i + 1), config);
            let childPrefixLineOne = prefixChildrenRaw + dart.str(childConfig.prefixLineOne);
            let childPrefixOtherLines = prefixChildrenRaw + dart.str(nextChildStyle.linkCharacter) + dart.str(childConfig.prefixOtherLines);
            builder.writeRawLines(this.render(child, {prefixLineOne: childPrefixLineOne, prefixOtherLines: childPrefixOtherLines, parentConfiguration: config}));
            if (childConfig.footer[$isNotEmpty]) {
              builder.prefixOtherLines = prefixChildrenRaw;
              builder.write(dart.str(childConfig.linkCharacter) + dart.str(childConfig.footer));
              if (childConfig.manditoryFooter[$isNotEmpty]) {
                builder.writeStretched(childConfig.manditoryFooter, math.max(core.int, builder.wrapWidth, dart.notNull(this[_wrapWidthProperties]) + childPrefixOtherLines.length));
              }
              builder.write(config.lineBreak);
            }
          }
        }
      }
      if (parentConfiguration == null && config.manditoryFooter[$isNotEmpty]) {
        builder.writeStretched(config.manditoryFooter, builder.wrapWidth);
        builder.write(config.lineBreak);
      }
      return builder.build();
    }
  };
  (src__foundation__diagnostics.TextTreeRenderer.new = function(opts) {
    let minLevel = opts && 'minLevel' in opts ? opts.minLevel : src__foundation__diagnostics.DiagnosticLevel.debug;
    let wrapWidth = opts && 'wrapWidth' in opts ? opts.wrapWidth : 100;
    let wrapWidthProperties = opts && 'wrapWidthProperties' in opts ? opts.wrapWidthProperties : 65;
    let maxDescendentsTruncatableNode = opts && 'maxDescendentsTruncatableNode' in opts ? opts.maxDescendentsTruncatableNode : -1;
    if (!(minLevel != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 1090, 16, "minLevel != null");
    this[_minLevel] = minLevel;
    this[_wrapWidth] = wrapWidth;
    this[_wrapWidthProperties] = wrapWidthProperties;
    this[_maxDescendentsTruncatableNode] = maxDescendentsTruncatableNode;
  }).prototype = src__foundation__diagnostics.TextTreeRenderer.prototype;
  dart.addTypeTests(src__foundation__diagnostics.TextTreeRenderer);
  dart.setMethodSignature(src__foundation__diagnostics.TextTreeRenderer, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics.TextTreeRenderer.__proto__),
    [_childTextConfiguration]: dart.fnType(src__foundation__diagnostics.TextTreeConfiguration, [src__foundation__diagnostics.DiagnosticsNode, src__foundation__diagnostics.TextTreeConfiguration]),
    render: dart.fnType(core.String, [src__foundation__diagnostics.DiagnosticsNode], {prefixLineOne: core.String, prefixOtherLines: core.String, parentConfiguration: src__foundation__diagnostics.TextTreeConfiguration})
  }));
  dart.setLibraryUri(src__foundation__diagnostics.TextTreeRenderer, "package:flutter_web/src/foundation/diagnostics.dart");
  dart.setFieldSignature(src__foundation__diagnostics.TextTreeRenderer, () => ({
    __proto__: dart.getFields(src__foundation__diagnostics.TextTreeRenderer.__proto__),
    [_wrapWidth]: dart.finalFieldType(core.int),
    [_wrapWidthProperties]: dart.finalFieldType(core.int),
    [_minLevel]: dart.finalFieldType(src__foundation__diagnostics.DiagnosticLevel),
    [_maxDescendentsTruncatableNode]: dart.finalFieldType(core.int)
  }));
  const _separator = dart.privateName(src__foundation__diagnostics, "_separator");
  src__foundation__diagnostics.DiagnosticsNode = class DiagnosticsNode extends core.Object {
    static message(message, opts) {
      let style = opts && 'style' in opts ? opts.style : src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine;
      let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
      let allowWrap = opts && 'allowWrap' in opts ? opts.allowWrap : true;
      if (!(style != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 1458, 12, "style != null");
      if (!(level != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 1459, 12, "level != null");
      return new (DiagnosticsPropertyOfvoid()).new("", null, {description: message, style: style, showName: false, allowWrap: allowWrap, level: level});
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get showSeparator() {
      return this[showSeparator$];
    }
    set showSeparator(value) {
      super.showSeparator = value;
    }
    isFiltered(minLevel) {
      return dart.notNull(this.level.index) < dart.notNull(minLevel.index);
    }
    get level() {
      return src__foundation__diagnostics.DiagnosticLevel.info;
    }
    get showName() {
      return this[showName$];
    }
    set showName(value) {
      super.showName = value;
    }
    get linePrefix() {
      return this[linePrefix$];
    }
    set linePrefix(value) {
      super.linePrefix = value;
    }
    get emptyBodyDescription() {
      return null;
    }
    get style() {
      return this[style$];
    }
    set style(value) {
      super.style = value;
    }
    get allowWrap() {
      return false;
    }
    get allowNameWrap() {
      return false;
    }
    get allowTruncate() {
      return false;
    }
    get [_separator]() {
      return dart.test(this.showSeparator) ? ":" : "";
    }
    toJsonMap() {
      let data = new (IdentityMapOfString$Object()).from(["description", this.toDescription(), "type", dart.toString(this[$runtimeType])]);
      if (this.name != null) data[$_set]("name", this.name);
      if (!dart.test(this.showSeparator)) data[$_set]("showSeparator", this.showSeparator);
      if (this.level !== src__foundation__diagnostics.DiagnosticLevel.info) data[$_set]("level", src__foundation__diagnostics.describeEnum(this.level));
      if (this.showName === false) data[$_set]("showName", this.showName);
      if (this.emptyBodyDescription != null) data[$_set]("emptyBodyDescription", this.emptyBodyDescription);
      if (this.style !== src__foundation__diagnostics.DiagnosticsTreeStyle.sparse) data[$_set]("style", src__foundation__diagnostics.describeEnum(this.style));
      if (dart.test(this.allowTruncate)) data[$_set]("allowTruncate", this.allowTruncate);
      let hasChildren = this.getChildren()[$isNotEmpty];
      if (dart.test(hasChildren)) data[$_set]("hasChildren", hasChildren);
      if ((this.linePrefix == null ? null : this.linePrefix[$isNotEmpty]) === true) data[$_set]("linePrefix", this.linePrefix);
      if (!dart.test(this.allowWrap)) data[$_set]("allowWrap", this.allowWrap);
      if (dart.test(this.allowNameWrap)) data[$_set]("allowNameWrap", this.allowNameWrap);
      return data;
    }
    toString(opts) {
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : src__foundation__diagnostics.DiagnosticLevel.info;
      if (!(this.style != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 1606, 12, "style != null");
      if (!(minLevel != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 1607, 12, "minLevel != null");
      if (dart.test(src__foundation__diagnostics._isSingleLine(this.style))) return this.toStringDeep({parentConfiguration: parentConfiguration, minLevel: minLevel});
      let description = this.toDescription({parentConfiguration: parentConfiguration});
      if (this.name == null || this.name[$isEmpty] || !dart.test(this.showName)) return description;
      return description[$contains]("\n") ? dart.str(this.name) + dart.str(this[_separator]) + "\n" + dart.str(description) : dart.str(this.name) + dart.str(this[_separator]) + " " + dart.str(description);
    }
    get textTreeConfiguration() {
      if (!(this.style != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 1626, 12, "style != null");
      switch (this.style) {
        case src__foundation__diagnostics.DiagnosticsTreeStyle.dense:
        {
          return src__foundation__diagnostics.denseTextConfiguration;
        }
        case src__foundation__diagnostics.DiagnosticsTreeStyle.sparse:
        {
          return src__foundation__diagnostics.sparseTextConfiguration;
        }
        case src__foundation__diagnostics.DiagnosticsTreeStyle.offstage:
        {
          return src__foundation__diagnostics.dashedTextConfiguration;
        }
        case src__foundation__diagnostics.DiagnosticsTreeStyle.whitespace:
        {
          return src__foundation__diagnostics.whitespaceTextConfiguration;
        }
        case src__foundation__diagnostics.DiagnosticsTreeStyle.transition:
        {
          return src__foundation__diagnostics.transitionTextConfiguration;
        }
        case src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine:
        {
          return src__foundation__diagnostics.singleLineTextConfiguration;
        }
        case src__foundation__diagnostics.DiagnosticsTreeStyle.errorProperty:
        {
          return src__foundation__diagnostics.errorPropertyTextConfiguration;
        }
        case src__foundation__diagnostics.DiagnosticsTreeStyle.shallow:
        {
          return src__foundation__diagnostics.shallowTextConfiguration;
        }
        case src__foundation__diagnostics.DiagnosticsTreeStyle.error:
        {
          return src__foundation__diagnostics.errorTextConfiguration;
        }
        case src__foundation__diagnostics.DiagnosticsTreeStyle.truncateChildren:
        {
          return src__foundation__diagnostics.whitespaceTextConfiguration;
        }
        case src__foundation__diagnostics.DiagnosticsTreeStyle.flat:
        {
          return src__foundation__diagnostics.flatTextConfiguration;
        }
      }
      return null;
    }
    toStringDeep(opts) {
      let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : "";
      let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : src__foundation__diagnostics.DiagnosticLevel.debug;
      return new src__foundation__diagnostics.TextTreeRenderer.new({minLevel: minLevel, wrapWidth: 65, wrapWidthProperties: 65}).render(this, {prefixLineOne: prefixLineOne, prefixOtherLines: prefixOtherLines, parentConfiguration: parentConfiguration});
    }
  };
  (src__foundation__diagnostics.DiagnosticsNode.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let style = opts && 'style' in opts ? opts.style : null;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
    let linePrefix = opts && 'linePrefix' in opts ? opts.linePrefix : null;
    this[name$] = name;
    this[style$] = style;
    this[showName$] = showName;
    this[showSeparator$] = showSeparator;
    this[linePrefix$] = linePrefix;
    if (!(showName != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 1432, 16, "showName != null");
    if (!(showSeparator != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 1433, 16, "showSeparator != null");
    if (!(name == null || !name[$endsWith](":"))) dart.assertFailed("Names of diagnostic nodes must not end with colons.\n" + "name:\n" + ("  \"" + dart.str(name) + "\""), "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 1438, 13, "name == null || !name.endsWith(':')");
  }).prototype = src__foundation__diagnostics.DiagnosticsNode.prototype;
  dart.addTypeTests(src__foundation__diagnostics.DiagnosticsNode);
  const name$ = Symbol("DiagnosticsNode.name");
  const showSeparator$ = Symbol("DiagnosticsNode.showSeparator");
  const showName$ = Symbol("DiagnosticsNode.showName");
  const linePrefix$ = Symbol("DiagnosticsNode.linePrefix");
  const style$ = Symbol("DiagnosticsNode.style");
  dart.setMethodSignature(src__foundation__diagnostics.DiagnosticsNode, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics.DiagnosticsNode.__proto__),
    isFiltered: dart.fnType(core.bool, [src__foundation__diagnostics.DiagnosticLevel]),
    toJsonMap: dart.fnType(core.Map$(core.String, core.Object), []),
    toString: dart.fnType(core.String, [], {parentConfiguration: src__foundation__diagnostics.TextTreeConfiguration, minLevel: src__foundation__diagnostics.DiagnosticLevel}),
    [$toString]: dart.fnType(core.String, [], {parentConfiguration: src__foundation__diagnostics.TextTreeConfiguration, minLevel: src__foundation__diagnostics.DiagnosticLevel}),
    toStringDeep: dart.fnType(core.String, [], {prefixLineOne: core.String, prefixOtherLines: core.String, parentConfiguration: src__foundation__diagnostics.TextTreeConfiguration, minLevel: src__foundation__diagnostics.DiagnosticLevel})
  }));
  dart.setGetterSignature(src__foundation__diagnostics.DiagnosticsNode, () => ({
    __proto__: dart.getGetters(src__foundation__diagnostics.DiagnosticsNode.__proto__),
    level: src__foundation__diagnostics.DiagnosticLevel,
    emptyBodyDescription: core.String,
    allowWrap: core.bool,
    allowNameWrap: core.bool,
    allowTruncate: core.bool,
    [_separator]: core.String,
    textTreeConfiguration: src__foundation__diagnostics.TextTreeConfiguration
  }));
  dart.setLibraryUri(src__foundation__diagnostics.DiagnosticsNode, "package:flutter_web/src/foundation/diagnostics.dart");
  dart.setFieldSignature(src__foundation__diagnostics.DiagnosticsNode, () => ({
    __proto__: dart.getFields(src__foundation__diagnostics.DiagnosticsNode.__proto__),
    name: dart.finalFieldType(core.String),
    showSeparator: dart.finalFieldType(core.bool),
    showName: dart.finalFieldType(core.bool),
    linePrefix: dart.finalFieldType(core.String),
    style: dart.finalFieldType(src__foundation__diagnostics.DiagnosticsTreeStyle)
  }));
  dart.defineExtensionMethods(src__foundation__diagnostics.DiagnosticsNode, ['toString']);
  const _description = dart.privateName(src__foundation__diagnostics, "_description");
  const _valueComputed = dart.privateName(src__foundation__diagnostics, "_valueComputed");
  const _value = dart.privateName(src__foundation__diagnostics, "_value");
  const _computeValue = dart.privateName(src__foundation__diagnostics, "_computeValue");
  const _defaultLevel = dart.privateName(src__foundation__diagnostics, "_defaultLevel");
  const _exception = dart.privateName(src__foundation__diagnostics, "_exception");
  const _addTooltip = dart.privateName(src__foundation__diagnostics, "_addTooltip");
  const _maybeCacheValue = dart.privateName(src__foundation__diagnostics, "_maybeCacheValue");
  let const$;
  let const$0;
  const _is_DiagnosticsProperty_default = Symbol('_is_DiagnosticsProperty_default');
  src__foundation__diagnostics.DiagnosticsProperty$ = dart.generic(T => {
    let VoidToT = () => (VoidToT = dart.constFn(dart.fnType(T, [])))();
    class DiagnosticsProperty extends src__foundation__diagnostics.DiagnosticsNode {
      get expandableValue() {
        return this[expandableValue$];
      }
      set expandableValue(value) {
        super.expandableValue = value;
      }
      get allowWrap() {
        return this[allowWrap$];
      }
      set allowWrap(value) {
        super.allowWrap = value;
      }
      get allowNameWrap() {
        return this[allowNameWrap$];
      }
      set allowNameWrap(value) {
        super.allowNameWrap = value;
      }
      toJsonMap() {
        let json = super.toJsonMap();
        if (!dart.equals(this.defaultValue, src__foundation__diagnostics.kNoDefaultValue)) json[$_set]("defaultValue", dart.toString(this.defaultValue));
        if (this.ifEmpty != null) json[$_set]("ifEmpty", this.ifEmpty);
        if (this.ifNull != null) json[$_set]("ifNull", this.ifNull);
        if (this.tooltip != null) json[$_set]("tooltip", this.tooltip);
        json[$_set]("missingIfNull", this.missingIfNull);
        if (this.exception != null) json[$_set]("exception", dart.toString(this.exception));
        json[$_set]("propertyType", dart.toString(this.propertyType));
        json[$_set]("defaultLevel", src__foundation__diagnostics.describeEnum(this[_defaultLevel]));
        if (src__foundation__diagnostics.Diagnosticable.is(this.value) || src__foundation__diagnostics.DiagnosticsNode.is(this.value)) json[$_set]("isDiagnosticableValue", true);
        return json;
      }
      valueToString(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        let v = this.value;
        if (true) {
          if (core.Function.is(v)) {
            let desc = dart.toString(v);
            if (desc[$contains]("Closure:") && desc[$contains]("from:")) {
              desc = desc[$substring](0, desc[$indexOf]("from: ") - 1);
            }
            return desc;
          } else if (typeof v == 'number') {
            return src__foundation__diagnostics.debugPrintDouble(v);
          }
        }
        let l = src__foundation__diagnostics.DiagnosticableTree.is(v) ? v.toStringShort() : dart.toString(v);
        return l != null ? l : "";
      }
      toDescription(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (this[_description] != null) return this[_addTooltip](this[_description]);
        if (this.exception != null) return "EXCEPTION (" + dart.str(dart.runtimeType(this.exception)) + ")";
        if (this.ifNull != null && this.value == null) return this[_addTooltip](this.ifNull);
        let result = this.valueToString({parentConfiguration: parentConfiguration});
        if (result[$isEmpty] && this.ifEmpty != null) result = this.ifEmpty;
        return this[_addTooltip](result);
      }
      [_addTooltip](text) {
        if (!(text != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 2585, 12, "text != null");
        return this.tooltip == null ? text : dart.str(text) + " (" + dart.str(this.tooltip) + ")";
      }
      get ifNull() {
        return this[ifNull$];
      }
      set ifNull(value) {
        super.ifNull = value;
      }
      get ifEmpty() {
        return this[ifEmpty$];
      }
      set ifEmpty(value) {
        super.ifEmpty = value;
      }
      get tooltip() {
        return this[tooltip$];
      }
      set tooltip(value) {
        super.tooltip = value;
      }
      get missingIfNull() {
        return this[missingIfNull$];
      }
      set missingIfNull(value) {
        super.missingIfNull = value;
      }
      get propertyType() {
        return dart.wrapType(T);
      }
      get value() {
        this[_maybeCacheValue]();
        return this[_value];
      }
      get exception() {
        this[_maybeCacheValue]();
        return this[_exception];
      }
      [_maybeCacheValue]() {
        if (dart.test(this[_valueComputed])) return;
        this[_valueComputed] = true;
        if (!(this[_computeValue] != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 2654, 12, "_computeValue != null");
        try {
          this[_value] = this[_computeValue]();
        } catch (e) {
          let exception = dart.getThrown(e);
          this[_exception] = exception;
          this[_value] = null;
        }
      }
      get defaultValue() {
        return this[defaultValue$];
      }
      set defaultValue(value) {
        super.defaultValue = value;
      }
      get level() {
        if (this[_defaultLevel] === src__foundation__diagnostics.DiagnosticLevel.hidden) return this[_defaultLevel];
        if (this.exception != null) return src__foundation__diagnostics.DiagnosticLevel.error;
        if (this.value == null && dart.test(this.missingIfNull)) return src__foundation__diagnostics.DiagnosticLevel.warning;
        if (!dart.equals(this.defaultValue, src__foundation__diagnostics.kNoDefaultValue) && dart.equals(this.value, this.defaultValue)) return src__foundation__diagnostics.DiagnosticLevel.fine;
        return this[_defaultLevel];
      }
      getProperties() {
        if (dart.test(this.expandableValue)) {
          let object = this.value;
          if (src__foundation__diagnostics.DiagnosticsNode.is(object)) {
            return object.getProperties();
          }
          if (src__foundation__diagnostics.Diagnosticable.is(object)) {
            return object.toDiagnosticsNode({style: this.style}).getProperties();
          }
        }
        return const$ || (const$ = dart.constList([], src__foundation__diagnostics.DiagnosticsNode));
      }
      getChildren() {
        if (dart.test(this.expandableValue)) {
          let object = this.value;
          if (src__foundation__diagnostics.DiagnosticsNode.is(object)) {
            return object.getChildren();
          }
          if (src__foundation__diagnostics.Diagnosticable.is(object)) {
            return object.toDiagnosticsNode({style: this.style}).getChildren();
          }
        }
        return const$0 || (const$0 = dart.constList([], src__foundation__diagnostics.DiagnosticsNode));
      }
    }
    (DiagnosticsProperty.new = function(name, value, opts) {
      let description = opts && 'description' in opts ? opts.description : null;
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let ifEmpty = opts && 'ifEmpty' in opts ? opts.ifEmpty : null;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : src__foundation__diagnostics.kNoDefaultValue;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let missingIfNull = opts && 'missingIfNull' in opts ? opts.missingIfNull : false;
      let linePrefix = opts && 'linePrefix' in opts ? opts.linePrefix : null;
      let expandableValue = opts && 'expandableValue' in opts ? opts.expandableValue : false;
      let allowWrap = opts && 'allowWrap' in opts ? opts.allowWrap : true;
      let allowNameWrap = opts && 'allowNameWrap' in opts ? opts.allowNameWrap : true;
      let style = opts && 'style' in opts ? opts.style : src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine;
      let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
      this[_exception] = null;
      this[ifEmpty$] = ifEmpty;
      this[defaultValue$] = defaultValue;
      this[tooltip$] = tooltip;
      this[missingIfNull$] = missingIfNull;
      this[expandableValue$] = expandableValue;
      this[allowWrap$] = allowWrap;
      this[allowNameWrap$] = allowNameWrap;
      if (!(showName != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 2436, 16, "showName != null");
      if (!(showSeparator != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 2437, 16, "showSeparator != null");
      if (!(style != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 2438, 16, "style != null");
      if (!(level != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 2439, 16, "level != null");
      this[_description] = description;
      this[_valueComputed] = true;
      this[_value] = value;
      this[_computeValue] = null;
      let l = ifNull;
      this[ifNull$] = l != null ? l : dart.test(missingIfNull) ? "MISSING" : null;
      this[_defaultLevel] = level;
      DiagnosticsProperty.__proto__.new.call(this, {name: name, showName: showName, showSeparator: showSeparator, style: style, linePrefix: linePrefix});
    }).prototype = DiagnosticsProperty.prototype;
    (DiagnosticsProperty.lazy = function(name, computeValue, opts) {
      let description = opts && 'description' in opts ? opts.description : null;
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let ifEmpty = opts && 'ifEmpty' in opts ? opts.ifEmpty : null;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : src__foundation__diagnostics.kNoDefaultValue;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let missingIfNull = opts && 'missingIfNull' in opts ? opts.missingIfNull : false;
      let expandableValue = opts && 'expandableValue' in opts ? opts.expandableValue : false;
      let allowWrap = opts && 'allowWrap' in opts ? opts.allowWrap : true;
      let allowNameWrap = opts && 'allowNameWrap' in opts ? opts.allowNameWrap : true;
      let style = opts && 'style' in opts ? opts.style : src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine;
      let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
      this[_exception] = null;
      this[ifEmpty$] = ifEmpty;
      this[defaultValue$] = defaultValue;
      this[tooltip$] = tooltip;
      this[missingIfNull$] = missingIfNull;
      this[expandableValue$] = expandableValue;
      this[allowWrap$] = allowWrap;
      this[allowNameWrap$] = allowNameWrap;
      if (!(showName != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 2482, 16, "showName != null");
      if (!(showSeparator != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 2483, 16, "showSeparator != null");
      if (!(dart.equals(defaultValue, src__foundation__diagnostics.kNoDefaultValue) || T.is(defaultValue))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 2484, 16, "defaultValue == kNoDefaultValue || defaultValue is T");
      if (!(missingIfNull != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 2485, 16, "missingIfNull != null");
      if (!(style != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 2486, 16, "style != null");
      if (!(level != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 2487, 16, "level != null");
      this[_description] = description;
      this[_valueComputed] = false;
      this[_value] = null;
      this[_computeValue] = computeValue;
      this[_defaultLevel] = level;
      let l = ifNull;
      this[ifNull$] = l != null ? l : dart.test(missingIfNull) ? "MISSING" : null;
      DiagnosticsProperty.__proto__.new.call(this, {name: name, showName: showName, showSeparator: showSeparator, style: style});
    }).prototype = DiagnosticsProperty.prototype;
    dart.addTypeTests(DiagnosticsProperty);
    DiagnosticsProperty.prototype[_is_DiagnosticsProperty_default] = true;
    const expandableValue$ = Symbol("DiagnosticsProperty.expandableValue");
    const allowWrap$ = Symbol("DiagnosticsProperty.allowWrap");
    const allowNameWrap$ = Symbol("DiagnosticsProperty.allowNameWrap");
    const ifNull$ = Symbol("DiagnosticsProperty.ifNull");
    const ifEmpty$ = Symbol("DiagnosticsProperty.ifEmpty");
    const tooltip$ = Symbol("DiagnosticsProperty.tooltip");
    const missingIfNull$ = Symbol("DiagnosticsProperty.missingIfNull");
    const defaultValue$ = Symbol("DiagnosticsProperty.defaultValue");
    dart.setMethodSignature(DiagnosticsProperty, () => ({
      __proto__: dart.getMethods(DiagnosticsProperty.__proto__),
      toJsonMap: dart.fnType(core.Map$(core.String, core.Object), []),
      valueToString: dart.fnType(core.String, [], {parentConfiguration: src__foundation__diagnostics.TextTreeConfiguration}),
      toDescription: dart.fnType(core.String, [], {parentConfiguration: src__foundation__diagnostics.TextTreeConfiguration}),
      [_addTooltip]: dart.fnType(core.String, [core.String]),
      [_maybeCacheValue]: dart.fnType(dart.void, []),
      getProperties: dart.fnType(core.List$(src__foundation__diagnostics.DiagnosticsNode), []),
      getChildren: dart.fnType(core.List$(src__foundation__diagnostics.DiagnosticsNode), [])
    }));
    dart.setGetterSignature(DiagnosticsProperty, () => ({
      __proto__: dart.getGetters(DiagnosticsProperty.__proto__),
      propertyType: core.Type,
      value: T,
      exception: core.Object,
      level: src__foundation__diagnostics.DiagnosticLevel
    }));
    dart.setLibraryUri(DiagnosticsProperty, "package:flutter_web/src/foundation/diagnostics.dart");
    dart.setFieldSignature(DiagnosticsProperty, () => ({
      __proto__: dart.getFields(DiagnosticsProperty.__proto__),
      [_description]: dart.finalFieldType(core.String),
      expandableValue: dart.finalFieldType(core.bool),
      allowWrap: dart.finalFieldType(core.bool),
      allowNameWrap: dart.finalFieldType(core.bool),
      ifNull: dart.finalFieldType(core.String),
      ifEmpty: dart.finalFieldType(core.String),
      tooltip: dart.finalFieldType(core.String),
      missingIfNull: dart.finalFieldType(core.bool),
      [_value]: dart.fieldType(T),
      [_valueComputed]: dart.fieldType(core.bool),
      [_exception]: dart.fieldType(core.Object),
      defaultValue: dart.finalFieldType(core.Object),
      [_defaultLevel]: dart.fieldType(src__foundation__diagnostics.DiagnosticLevel),
      [_computeValue]: dart.finalFieldType(VoidToT())
    }));
    return DiagnosticsProperty;
  });
  src__foundation__diagnostics.DiagnosticsProperty = src__foundation__diagnostics.DiagnosticsProperty$();
  dart.addTypeTests(src__foundation__diagnostics.DiagnosticsProperty, _is_DiagnosticsProperty_default);
  src__foundation__diagnostics.MessageProperty = class MessageProperty extends src__foundation__diagnostics.DiagnosticsProperty$(dart.void) {};
  (src__foundation__diagnostics.MessageProperty.new = function(name, message, opts) {
    let style = opts && 'style' in opts ? opts.style : src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine;
    let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
    if (!(name != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 1733, 16, "name != null");
    if (!(message != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 1734, 16, "message != null");
    if (!(style != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 1735, 16, "style != null");
    if (!(level != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 1736, 16, "level != null");
    src__foundation__diagnostics.MessageProperty.__proto__.new.call(this, name, null, {description: message, style: style, level: level});
  }).prototype = src__foundation__diagnostics.MessageProperty.prototype;
  dart.addTypeTests(src__foundation__diagnostics.MessageProperty);
  dart.setLibraryUri(src__foundation__diagnostics.MessageProperty, "package:flutter_web/src/foundation/diagnostics.dart");
  src__foundation__diagnostics.StringProperty = class StringProperty extends src__foundation__diagnostics.DiagnosticsProperty$(core.String) {
    get quoted() {
      return this[quoted$];
    }
    set quoted(value) {
      super.quoted = value;
    }
    toJsonMap() {
      let json = super.toJsonMap();
      json[$_set]("quoted", this.quoted);
      return json;
    }
    valueToString(opts) {
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      let text = this[_description] != null ? this[_description] : this.value;
      if (parentConfiguration != null && !dart.test(parentConfiguration.lineBreakProperties) && text != null) {
        text = text[$replaceAll]("\n", "\\n");
      }
      if (dart.test(this.quoted) && text != null) {
        if (this.ifEmpty != null && text[$isEmpty]) return this.ifEmpty;
        return "\"" + dart.str(text) + "\"";
      }
      return dart.toString(text);
    }
  };
  (src__foundation__diagnostics.StringProperty.new = function(name, value, opts) {
    let description = opts && 'description' in opts ? opts.description : null;
    let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : src__foundation__diagnostics.kNoDefaultValue;
    let quoted = opts && 'quoted' in opts ? opts.quoted : true;
    let ifEmpty = opts && 'ifEmpty' in opts ? opts.ifEmpty : null;
    let style = opts && 'style' in opts ? opts.style : src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine;
    let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
    this[quoted$] = quoted;
    if (!(showName != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 1761, 16, "showName != null");
    if (!(quoted != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 1762, 16, "quoted != null");
    if (!(style != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 1763, 16, "style != null");
    if (!(level != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 1764, 16, "level != null");
    src__foundation__diagnostics.StringProperty.__proto__.new.call(this, name, value, {description: description, defaultValue: defaultValue, tooltip: tooltip, showName: showName, ifEmpty: ifEmpty, style: style, level: level});
  }).prototype = src__foundation__diagnostics.StringProperty.prototype;
  dart.addTypeTests(src__foundation__diagnostics.StringProperty);
  const quoted$ = Symbol("StringProperty.quoted");
  dart.setMethodSignature(src__foundation__diagnostics.StringProperty, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics.StringProperty.__proto__),
    toJsonMap: dart.fnType(core.Map$(core.String, core.Object), []),
    valueToString: dart.fnType(core.String, [], {parentConfiguration: src__foundation__diagnostics.TextTreeConfiguration})
  }));
  dart.setLibraryUri(src__foundation__diagnostics.StringProperty, "package:flutter_web/src/foundation/diagnostics.dart");
  dart.setFieldSignature(src__foundation__diagnostics.StringProperty, () => ({
    __proto__: dart.getFields(src__foundation__diagnostics.StringProperty.__proto__),
    quoted: dart.finalFieldType(core.bool)
  }));
  const _is__NumProperty_default = Symbol('_is__NumProperty_default');
  src__foundation__diagnostics._NumProperty$ = dart.generic(T => {
    class _NumProperty extends src__foundation__diagnostics.DiagnosticsProperty$(T) {
      toJsonMap() {
        let json = super.toJsonMap();
        if (this.unit != null) json[$_set]("unit", this.unit);
        json[$_set]("numberToString", this.numberToString());
        return json;
      }
      get unit() {
        return this[unit$];
      }
      set unit(value) {
        super.unit = value;
      }
      valueToString(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (this.value == null) return dart.toString(this.value);
        return this.unit != null ? dart.str(this.numberToString()) + dart.str(this.unit) : this.numberToString();
      }
    }
    (_NumProperty.new = function(name, value, opts) {
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let unit = opts && 'unit' in opts ? opts.unit : null;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : src__foundation__diagnostics.kNoDefaultValue;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let style = opts && 'style' in opts ? opts.style : src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine;
      let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
      this[unit$] = unit;
      _NumProperty.__proto__.new.call(this, name, value, {ifNull: ifNull, showName: showName, defaultValue: defaultValue, tooltip: tooltip, level: level, style: style});
    }).prototype = _NumProperty.prototype;
    (_NumProperty.lazy = function(name, computeValue, opts) {
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let unit = opts && 'unit' in opts ? opts.unit : null;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : src__foundation__diagnostics.kNoDefaultValue;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let style = opts && 'style' in opts ? opts.style : src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine;
      let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
      this[unit$] = unit;
      _NumProperty.__proto__.lazy.call(this, name, computeValue, {ifNull: ifNull, showName: showName, defaultValue: defaultValue, tooltip: tooltip, style: style, level: level});
    }).prototype = _NumProperty.prototype;
    dart.addTypeTests(_NumProperty);
    _NumProperty.prototype[_is__NumProperty_default] = true;
    const unit$ = Symbol("_NumProperty.unit");
    dart.setLibraryUri(_NumProperty, "package:flutter_web/src/foundation/diagnostics.dart");
    dart.setFieldSignature(_NumProperty, () => ({
      __proto__: dart.getFields(_NumProperty.__proto__),
      unit: dart.finalFieldType(core.String)
    }));
    return _NumProperty;
  });
  src__foundation__diagnostics._NumProperty = src__foundation__diagnostics._NumProperty$();
  dart.addTypeTests(src__foundation__diagnostics._NumProperty, _is__NumProperty_default);
  src__foundation__diagnostics.DoubleProperty = class DoubleProperty extends src__foundation__diagnostics._NumProperty$(core.double) {
    numberToString() {
      let t = this.value;
      return t == null ? null : t[$toStringAsFixed](1);
    }
  };
  (src__foundation__diagnostics.DoubleProperty.new = function(name, value, opts) {
    let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
    let unit = opts && 'unit' in opts ? opts.unit : null;
    let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : src__foundation__diagnostics.kNoDefaultValue;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let style = opts && 'style' in opts ? opts.style : src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine;
    let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
    if (!(showName != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 1896, 16, "showName != null");
    if (!(style != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 1897, 16, "style != null");
    if (!(level != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 1898, 16, "level != null");
    src__foundation__diagnostics.DoubleProperty.__proto__.new.call(this, name, value, {ifNull: ifNull, unit: unit, tooltip: tooltip, defaultValue: defaultValue, showName: showName, style: style, level: level});
  }).prototype = src__foundation__diagnostics.DoubleProperty.prototype;
  (src__foundation__diagnostics.DoubleProperty.lazy = function(name, computeValue, opts) {
    let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let unit = opts && 'unit' in opts ? opts.unit : null;
    let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : src__foundation__diagnostics.kNoDefaultValue;
    let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
    if (!(showName != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 1926, 16, "showName != null");
    if (!(level != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 1927, 16, "level != null");
    src__foundation__diagnostics.DoubleProperty.__proto__.lazy.call(this, name, computeValue, {showName: showName, ifNull: ifNull, unit: unit, tooltip: tooltip, defaultValue: defaultValue, level: level});
  }).prototype = src__foundation__diagnostics.DoubleProperty.prototype;
  dart.addTypeTests(src__foundation__diagnostics.DoubleProperty);
  dart.setMethodSignature(src__foundation__diagnostics.DoubleProperty, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics.DoubleProperty.__proto__),
    numberToString: dart.fnType(core.String, [])
  }));
  dart.setLibraryUri(src__foundation__diagnostics.DoubleProperty, "package:flutter_web/src/foundation/diagnostics.dart");
  src__foundation__diagnostics.IntProperty = class IntProperty extends src__foundation__diagnostics._NumProperty$(core.int) {
    numberToString() {
      return dart.toString(this.value);
    }
  };
  (src__foundation__diagnostics.IntProperty.new = function(name, value, opts) {
    let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let unit = opts && 'unit' in opts ? opts.unit : null;
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : src__foundation__diagnostics.kNoDefaultValue;
    let style = opts && 'style' in opts ? opts.style : src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine;
    let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
    if (!(showName != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 1959, 16, "showName != null");
    if (!(level != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 1960, 16, "level != null");
    if (!(style != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 1961, 16, "style != null");
    src__foundation__diagnostics.IntProperty.__proto__.new.call(this, name, value, {ifNull: ifNull, showName: showName, unit: unit, defaultValue: defaultValue, level: level});
  }).prototype = src__foundation__diagnostics.IntProperty.prototype;
  dart.addTypeTests(src__foundation__diagnostics.IntProperty);
  dart.setMethodSignature(src__foundation__diagnostics.IntProperty, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics.IntProperty.__proto__),
    numberToString: dart.fnType(core.String, [])
  }));
  dart.setLibraryUri(src__foundation__diagnostics.IntProperty, "package:flutter_web/src/foundation/diagnostics.dart");
  src__foundation__diagnostics.PercentProperty = class PercentProperty extends src__foundation__diagnostics.DoubleProperty {
    valueToString(opts) {
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      if (this.value == null) return dart.toString(this.value);
      return this.unit != null ? dart.str(this.numberToString()) + " " + dart.str(this.unit) : this.numberToString();
    }
    numberToString() {
      if (this.value == null) return dart.toString(this.value);
      return (this.value[$clamp](0.0, 1.0) * 100.0)[$toStringAsFixed](1) + "%";
    }
  };
  (src__foundation__diagnostics.PercentProperty.new = function(name, fraction, opts) {
    let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
    let unit = opts && 'unit' in opts ? opts.unit : null;
    let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
    if (!(showName != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 1995, 16, "showName != null");
    if (!(level != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 1996, 16, "level != null");
    src__foundation__diagnostics.PercentProperty.__proto__.new.call(this, name, fraction, {ifNull: ifNull, showName: showName, tooltip: tooltip, unit: unit, level: level});
  }).prototype = src__foundation__diagnostics.PercentProperty.prototype;
  dart.addTypeTests(src__foundation__diagnostics.PercentProperty);
  dart.setMethodSignature(src__foundation__diagnostics.PercentProperty, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics.PercentProperty.__proto__),
    valueToString: dart.fnType(core.String, [], {parentConfiguration: src__foundation__diagnostics.TextTreeConfiguration})
  }));
  dart.setLibraryUri(src__foundation__diagnostics.PercentProperty, "package:flutter_web/src/foundation/diagnostics.dart");
  src__foundation__diagnostics.FlagProperty = class FlagProperty extends src__foundation__diagnostics.DiagnosticsProperty$(core.bool) {
    toJsonMap() {
      let json = super.toJsonMap();
      if (this.ifTrue != null) json[$_set]("ifTrue", this.ifTrue);
      if (this.ifFalse != null) json[$_set]("ifFalse", this.ifFalse);
      return json;
    }
    get ifTrue() {
      return this[ifTrue$];
    }
    set ifTrue(value) {
      super.ifTrue = value;
    }
    get ifFalse() {
      return this[ifFalse$];
    }
    set ifFalse(value) {
      super.ifFalse = value;
    }
    valueToString(opts) {
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      if (this.value === true) {
        if (this.ifTrue != null) return this.ifTrue;
      } else if (this.value === false) {
        if (this.ifFalse != null) return this.ifFalse;
      }
      return super.valueToString({parentConfiguration: parentConfiguration});
    }
    get showName() {
      if (this.value == null || this.value === true && this.ifTrue == null || this.value === false && this.ifFalse == null) {
        return true;
      }
      return super.showName;
    }
    get level() {
      if (this.value === true) {
        if (this.ifTrue == null) return src__foundation__diagnostics.DiagnosticLevel.hidden;
      }
      if (this.value === false) {
        if (this.ifFalse == null) return src__foundation__diagnostics.DiagnosticLevel.hidden;
      }
      return super.level;
    }
  };
  (src__foundation__diagnostics.FlagProperty.new = function(name, opts) {
    let value = opts && 'value' in opts ? opts.value : null;
    let ifTrue = opts && 'ifTrue' in opts ? opts.ifTrue : null;
    let ifFalse = opts && 'ifFalse' in opts ? opts.ifFalse : null;
    let showName = opts && 'showName' in opts ? opts.showName : false;
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : null;
    let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
    this[ifTrue$] = ifTrue;
    this[ifFalse$] = ifFalse;
    if (!(showName != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 2074, 16, "showName != null");
    if (!(level != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 2075, 16, "level != null");
    if (!(ifTrue != null || ifFalse != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 2076, 16, "ifTrue != null || ifFalse != null");
    src__foundation__diagnostics.FlagProperty.__proto__.new.call(this, name, value, {showName: showName, defaultValue: defaultValue, level: level});
  }).prototype = src__foundation__diagnostics.FlagProperty.prototype;
  dart.addTypeTests(src__foundation__diagnostics.FlagProperty);
  const ifTrue$ = Symbol("FlagProperty.ifTrue");
  const ifFalse$ = Symbol("FlagProperty.ifFalse");
  dart.setMethodSignature(src__foundation__diagnostics.FlagProperty, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics.FlagProperty.__proto__),
    toJsonMap: dart.fnType(core.Map$(core.String, core.Object), []),
    valueToString: dart.fnType(core.String, [], {parentConfiguration: src__foundation__diagnostics.TextTreeConfiguration})
  }));
  dart.setGetterSignature(src__foundation__diagnostics.FlagProperty, () => ({
    __proto__: dart.getGetters(src__foundation__diagnostics.FlagProperty.__proto__),
    level: src__foundation__diagnostics.DiagnosticLevel
  }));
  dart.setLibraryUri(src__foundation__diagnostics.FlagProperty, "package:flutter_web/src/foundation/diagnostics.dart");
  dart.setFieldSignature(src__foundation__diagnostics.FlagProperty, () => ({
    __proto__: dart.getFields(src__foundation__diagnostics.FlagProperty.__proto__),
    ifTrue: dart.finalFieldType(core.String),
    ifFalse: dart.finalFieldType(core.String)
  }));
  const _is_IterableProperty_default = Symbol('_is_IterableProperty_default');
  src__foundation__diagnostics.IterableProperty$ = dart.generic(T => {
    let TToString = () => (TToString = dart.constFn(dart.fnType(core.String, [T])))();
    class IterableProperty extends src__foundation__diagnostics.DiagnosticsProperty$(core.Iterable$(T)) {
      valueToString(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (this.value == null) return dart.toString(this.value);
        if (dart.test(this.value[$isEmpty])) {
          return this.ifEmpty != null ? this.ifEmpty : "[]";
        }
        if (this.value[$length] === 5) {
          core.print("");
        }
        if (dart.equals(dart.wrapType(T), dart.wrapType(core.double))) {
          let sb = new core.StringBuffer.new();
          if (parentConfiguration != null && !dart.test(parentConfiguration.lineBreakProperties)) {
            for (let item of this.value) {
              if (dart.test(sb.isNotEmpty)) sb.write(", ");
              sb.write(src__foundation__diagnostics.debugPrintDouble(core.double.as(item)));
            }
            return "[" + dart.str(sb.toString()) + "]";
          } else {
            let isSingleLine = src__foundation__diagnostics._isSingleLine(this.style);
            for (let item of this.value) {
              if (dart.test(sb.isNotEmpty)) sb.write(dart.test(isSingleLine) ? ", " : "\n");
              sb.write(src__foundation__diagnostics.debugPrintDouble(core.double.as(item)));
            }
            return sb.toString();
          }
        }
        if (parentConfiguration != null && !dart.test(parentConfiguration.lineBreakProperties)) {
          return "[" + dart.str(this.value[$join](", ")) + "]";
        }
        return this.value[$join](dart.test(src__foundation__diagnostics._isSingleLine(this.style)) ? ", " : "\n");
      }
      get level() {
        if (this.ifEmpty == null && this.value != null && dart.test(this.value[$isEmpty]) && super.level !== src__foundation__diagnostics.DiagnosticLevel.hidden) return src__foundation__diagnostics.DiagnosticLevel.fine;
        return super.level;
      }
      toJsonMap() {
        let json = super.toJsonMap();
        if (this.value != null) {
          json[$_set]("values", IterableOfString()._check(this.value[$map](core.String, dart.fn(value => dart.toString(value), TToString())))[$toList]());
        }
        return json;
      }
    }
    (IterableProperty.new = function(name, value, opts) {
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : src__foundation__diagnostics.kNoDefaultValue;
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let ifEmpty = opts && 'ifEmpty' in opts ? opts.ifEmpty : "[]";
      let style = opts && 'style' in opts ? opts.style : src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
      let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
      if (!(style != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 2168, 16, "style != null");
      if (!(showName != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 2169, 16, "showName != null");
      if (!(showSeparator != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 2170, 16, "showSeparator != null");
      if (!(level != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 2171, 16, "level != null");
      IterableProperty.__proto__.new.call(this, name, value, {defaultValue: defaultValue, ifNull: ifNull, ifEmpty: ifEmpty, style: style, showName: showName, showSeparator: showSeparator, level: level});
    }).prototype = IterableProperty.prototype;
    dart.addTypeTests(IterableProperty);
    IterableProperty.prototype[_is_IterableProperty_default] = true;
    dart.setMethodSignature(IterableProperty, () => ({
      __proto__: dart.getMethods(IterableProperty.__proto__),
      valueToString: dart.fnType(core.String, [], {parentConfiguration: src__foundation__diagnostics.TextTreeConfiguration}),
      toJsonMap: dart.fnType(core.Map$(core.String, core.Object), [])
    }));
    dart.setGetterSignature(IterableProperty, () => ({
      __proto__: dart.getGetters(IterableProperty.__proto__),
      level: src__foundation__diagnostics.DiagnosticLevel
    }));
    dart.setLibraryUri(IterableProperty, "package:flutter_web/src/foundation/diagnostics.dart");
    return IterableProperty;
  });
  src__foundation__diagnostics.IterableProperty = src__foundation__diagnostics.IterableProperty$();
  dart.addTypeTests(src__foundation__diagnostics.IterableProperty, _is_IterableProperty_default);
  const _is_EnumProperty_default = Symbol('_is_EnumProperty_default');
  src__foundation__diagnostics.EnumProperty$ = dart.generic(T => {
    class EnumProperty extends src__foundation__diagnostics.DiagnosticsProperty$(T) {
      valueToString(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (this.value == null) return dart.toString(this.value);
        return src__foundation__diagnostics.describeEnum(this.value);
      }
    }
    (EnumProperty.new = function(name, value, opts) {
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : src__foundation__diagnostics.kNoDefaultValue;
      let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
      if (!(level != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 2268, 16, "level != null");
      EnumProperty.__proto__.new.call(this, name, value, {defaultValue: defaultValue, level: level});
    }).prototype = EnumProperty.prototype;
    dart.addTypeTests(EnumProperty);
    EnumProperty.prototype[_is_EnumProperty_default] = true;
    dart.setLibraryUri(EnumProperty, "package:flutter_web/src/foundation/diagnostics.dart");
    return EnumProperty;
  });
  src__foundation__diagnostics.EnumProperty = src__foundation__diagnostics.EnumProperty$();
  dart.addTypeTests(src__foundation__diagnostics.EnumProperty, _is_EnumProperty_default);
  const _is_ObjectFlagProperty_default = Symbol('_is_ObjectFlagProperty_default');
  src__foundation__diagnostics.ObjectFlagProperty$ = dart.generic(T => {
    class ObjectFlagProperty extends src__foundation__diagnostics.DiagnosticsProperty$(T) {
      get ifPresent() {
        return this[ifPresent$];
      }
      set ifPresent(value) {
        super.ifPresent = value;
      }
      valueToString(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (this.value != null) {
          if (this.ifPresent != null) return this.ifPresent;
        } else {
          if (this.ifNull != null) return this.ifNull;
        }
        return super.valueToString({parentConfiguration: parentConfiguration});
      }
      get showName() {
        if (this.value != null && this.ifPresent == null || this.value == null && this.ifNull == null) {
          return true;
        }
        return super.showName;
      }
      get level() {
        if (this.value != null) {
          if (this.ifPresent == null) return src__foundation__diagnostics.DiagnosticLevel.hidden;
        } else {
          if (this.ifNull == null) return src__foundation__diagnostics.DiagnosticLevel.hidden;
        }
        return super.level;
      }
      toJsonMap() {
        let json = super.toJsonMap();
        if (this.ifPresent != null) json[$_set]("ifPresent", this.ifPresent);
        return json;
      }
    }
    (ObjectFlagProperty.new = function(name, value, opts) {
      let ifPresent = opts && 'ifPresent' in opts ? opts.ifPresent : null;
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let showName = opts && 'showName' in opts ? opts.showName : false;
      let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
      this[ifPresent$] = ifPresent;
      if (!(ifPresent != null || ifNull != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 2315, 16, "ifPresent != null || ifNull != null");
      if (!(showName != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 2316, 16, "showName != null");
      if (!(level != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 2317, 16, "level != null");
      ObjectFlagProperty.__proto__.new.call(this, name, value, {showName: showName, ifNull: ifNull, level: level});
    }).prototype = ObjectFlagProperty.prototype;
    (ObjectFlagProperty.has = function(name, value, opts) {
      let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
      if (!(name != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 2336, 16, "name != null");
      if (!(level != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 2337, 16, "level != null");
      this[ifPresent$] = "has " + dart.str(name);
      ObjectFlagProperty.__proto__.new.call(this, name, value, {showName: false, level: level});
    }).prototype = ObjectFlagProperty.prototype;
    dart.addTypeTests(ObjectFlagProperty);
    ObjectFlagProperty.prototype[_is_ObjectFlagProperty_default] = true;
    const ifPresent$ = Symbol("ObjectFlagProperty.ifPresent");
    dart.setGetterSignature(ObjectFlagProperty, () => ({
      __proto__: dart.getGetters(ObjectFlagProperty.__proto__),
      showName: core.bool
    }));
    dart.setLibraryUri(ObjectFlagProperty, "package:flutter_web/src/foundation/diagnostics.dart");
    dart.setFieldSignature(ObjectFlagProperty, () => ({
      __proto__: dart.getFields(ObjectFlagProperty.__proto__),
      ifPresent: dart.finalFieldType(core.String)
    }));
    return ObjectFlagProperty;
  });
  src__foundation__diagnostics.ObjectFlagProperty = src__foundation__diagnostics.ObjectFlagProperty$();
  dart.addTypeTests(src__foundation__diagnostics.ObjectFlagProperty, _is_ObjectFlagProperty_default);
  const _cachedBuilder = dart.privateName(src__foundation__diagnostics, "_cachedBuilder");
  const _builder = dart.privateName(src__foundation__diagnostics, "_builder");
  let const$1;
  const _is_DiagnosticableNode_default = Symbol('_is_DiagnosticableNode_default');
  src__foundation__diagnostics.DiagnosticableNode$ = dart.generic(T => {
    class DiagnosticableNode extends src__foundation__diagnostics.DiagnosticsNode {
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      get [_builder]() {
        if (this[_cachedBuilder] == null) {
          this[_cachedBuilder] = new src__foundation__diagnostics.DiagnosticPropertiesBuilder.new();
          if (dart.test(src__util.assertionsEnabled)) {
            this.value == null ? null : this.value.debugFillProperties(this[_cachedBuilder]);
          }
        }
        return this[_cachedBuilder];
      }
      get style() {
        let l = super.style;
        return l != null ? l : this[_builder].defaultDiagnosticsTreeStyle;
      }
      get emptyBodyDescription() {
        return this[_builder].emptyBodyDescription;
      }
      getProperties() {
        return this[_builder].properties;
      }
      getChildren() {
        return const$1 || (const$1 = dart.constList([], src__foundation__diagnostics.DiagnosticsNode));
      }
      toDescription(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        return this.value.toStringShort();
      }
    }
    (DiagnosticableNode.new = function(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let style = opts && 'style' in opts ? opts.style : null;
      this[_cachedBuilder] = null;
      this[value$] = value;
      if (!(value != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 2738, 16, "value != null");
      DiagnosticableNode.__proto__.new.call(this, {name: name, style: style});
    }).prototype = DiagnosticableNode.prototype;
    dart.addTypeTests(DiagnosticableNode);
    DiagnosticableNode.prototype[_is_DiagnosticableNode_default] = true;
    const value$ = Symbol("DiagnosticableNode.value");
    dart.setMethodSignature(DiagnosticableNode, () => ({
      __proto__: dart.getMethods(DiagnosticableNode.__proto__),
      getProperties: dart.fnType(core.List$(src__foundation__diagnostics.DiagnosticsNode), []),
      getChildren: dart.fnType(core.List$(src__foundation__diagnostics.DiagnosticsNode), []),
      toDescription: dart.fnType(core.String, [], {parentConfiguration: src__foundation__diagnostics.TextTreeConfiguration})
    }));
    dart.setGetterSignature(DiagnosticableNode, () => ({
      __proto__: dart.getGetters(DiagnosticableNode.__proto__),
      [_builder]: src__foundation__diagnostics.DiagnosticPropertiesBuilder,
      style: src__foundation__diagnostics.DiagnosticsTreeStyle,
      emptyBodyDescription: core.String
    }));
    dart.setLibraryUri(DiagnosticableNode, "package:flutter_web/src/foundation/diagnostics.dart");
    dart.setFieldSignature(DiagnosticableNode, () => ({
      __proto__: dart.getFields(DiagnosticableNode.__proto__),
      value: dart.finalFieldType(T),
      [_cachedBuilder]: dart.fieldType(src__foundation__diagnostics.DiagnosticPropertiesBuilder)
    }));
    return DiagnosticableNode;
  });
  src__foundation__diagnostics.DiagnosticableNode = src__foundation__diagnostics.DiagnosticableNode$();
  dart.addTypeTests(src__foundation__diagnostics.DiagnosticableNode, _is_DiagnosticableNode_default);
  let const$2;
  let const$3;
  src__foundation__diagnostics.Diagnosticable = class Diagnosticable extends core.Object {
    toStringShort() {
      return src__foundation__diagnostics.describeIdentity(this);
    }
    toString(opts) {
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : src__foundation__diagnostics.DiagnosticLevel.debug;
      let fullString = null;
      if (!dart.test(dart.fn(() => {
        fullString = this.toDiagnosticsNode({style: src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine}).toString({minLevel: minLevel});
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 2907, 12, "() {fullString = toDiagnosticsNode(style: DiagnosticsTreeStyle.singleLine).toString(minLevel: minLevel); return true;}()");
      let l = fullString;
      return l != null ? l : this.toStringShort();
    }
    toDiagnosticsNode(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let style = opts && 'style' in opts ? opts.style : null;
      return new (DiagnosticableNodeOfDiagnosticable()).new({name: name, value: this, style: style});
    }
    debugFillProperties(properties) {}
  };
  (src__foundation__diagnostics.Diagnosticable.new = function() {
  }).prototype = src__foundation__diagnostics.Diagnosticable.prototype;
  dart.addTypeTests(src__foundation__diagnostics.Diagnosticable);
  dart.setMethodSignature(src__foundation__diagnostics.Diagnosticable, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics.Diagnosticable.__proto__),
    toStringShort: dart.fnType(core.String, []),
    toString: dart.fnType(core.String, [], {minLevel: src__foundation__diagnostics.DiagnosticLevel}),
    [$toString]: dart.fnType(core.String, [], {minLevel: src__foundation__diagnostics.DiagnosticLevel}),
    toDiagnosticsNode: dart.fnType(src__foundation__diagnostics.DiagnosticsNode, [], {name: core.String, style: src__foundation__diagnostics.DiagnosticsTreeStyle}),
    debugFillProperties: dart.fnType(dart.void, [src__foundation__diagnostics.DiagnosticPropertiesBuilder])
  }));
  dart.setLibraryUri(src__foundation__diagnostics.Diagnosticable, "package:flutter_web/src/foundation/diagnostics.dart");
  dart.defineExtensionMethods(src__foundation__diagnostics.Diagnosticable, ['toString']);
  src__foundation__diagnostics.DiagnosticableTree = class DiagnosticableTree extends src__foundation__diagnostics.Diagnosticable {
    toStringShallow(opts) {
      let joiner = opts && 'joiner' in opts ? opts.joiner : ", ";
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : src__foundation__diagnostics.DiagnosticLevel.debug;
      let result = new core.StringBuffer.new();
      result.write(this.toString());
      result.write(joiner);
      let builder = new src__foundation__diagnostics.DiagnosticPropertiesBuilder.new();
      if (dart.test(src__util.assertionsEnabled)) {
        this.debugFillProperties(builder);
      }
      result.write(builder.properties[$where](dart.fn(n => !dart.test(n.isFiltered(minLevel)), DiagnosticsNodeTobool()))[$join](joiner));
      return result.toString();
    }
    toStringDeep(opts) {
      let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : "";
      let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : src__foundation__diagnostics.DiagnosticLevel.debug;
      return this.toDiagnosticsNode().toStringDeep({prefixLineOne: prefixLineOne, prefixOtherLines: prefixOtherLines, minLevel: minLevel});
    }
    toStringShort() {
      return src__foundation__diagnostics.describeIdentity(this);
    }
    toDiagnosticsNode(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let style = opts && 'style' in opts ? opts.style : null;
      return new src__foundation__diagnostics._DiagnosticableTreeNode.new({name: name, value: this, style: style});
    }
    debugDescribeChildren() {
      return const$3 || (const$3 = dart.constList([], src__foundation__diagnostics.DiagnosticsNode));
    }
  };
  (src__foundation__diagnostics.DiagnosticableTree.new = function() {
    src__foundation__diagnostics.DiagnosticableTree.__proto__.new.call(this);
  }).prototype = src__foundation__diagnostics.DiagnosticableTree.prototype;
  dart.addTypeTests(src__foundation__diagnostics.DiagnosticableTree);
  dart.setMethodSignature(src__foundation__diagnostics.DiagnosticableTree, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics.DiagnosticableTree.__proto__),
    toStringShallow: dart.fnType(core.String, [], {joiner: core.String, minLevel: src__foundation__diagnostics.DiagnosticLevel}),
    toStringDeep: dart.fnType(core.String, [], {prefixLineOne: core.String, prefixOtherLines: core.String, minLevel: src__foundation__diagnostics.DiagnosticLevel}),
    debugDescribeChildren: dart.fnType(core.List$(src__foundation__diagnostics.DiagnosticsNode), [])
  }));
  dart.setLibraryUri(src__foundation__diagnostics.DiagnosticableTree, "package:flutter_web/src/foundation/diagnostics.dart");
  src__foundation__diagnostics._DiagnosticableTreeNode = class _DiagnosticableTreeNode extends src__foundation__diagnostics.DiagnosticableNode$(src__foundation__diagnostics.DiagnosticableTree) {
    getChildren() {
      if (this.value != null) return this.value.debugDescribeChildren();
      return const$2 || (const$2 = dart.constList([], src__foundation__diagnostics.DiagnosticsNode));
    }
  };
  (src__foundation__diagnostics._DiagnosticableTreeNode.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let style = opts && 'style' in opts ? opts.style : null;
    src__foundation__diagnostics._DiagnosticableTreeNode.__proto__.new.call(this, {name: name, value: value, style: style});
  }).prototype = src__foundation__diagnostics._DiagnosticableTreeNode.prototype;
  dart.addTypeTests(src__foundation__diagnostics._DiagnosticableTreeNode);
  dart.setMethodSignature(src__foundation__diagnostics._DiagnosticableTreeNode, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics._DiagnosticableTreeNode.__proto__),
    getChildren: dart.fnType(core.List$(src__foundation__diagnostics.DiagnosticsNode), [])
  }));
  dart.setLibraryUri(src__foundation__diagnostics._DiagnosticableTreeNode, "package:flutter_web/src/foundation/diagnostics.dart");
  src__foundation__diagnostics.shortHash = function(object) {
    return dart.hashCode(object)[$toUnsigned](20)[$toRadixString](16)[$padLeft](5, "0");
  };
  src__foundation__diagnostics.describeIdentity = function(object) {
    return dart.str(dart.runtimeType(object)) + "#" + dart.str(src__foundation__diagnostics.shortHash(object));
  };
  src__foundation__diagnostics.describeEnum = function(enumEntry) {
    let description = dart.toString(enumEntry);
    let indexOfDot = description[$indexOf](".");
    if (!(indexOfDot !== -1 && indexOfDot < description.length - 1)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/diagnostics.dart", 2841, 10, "indexOfDot != -1 && indexOfDot < description.length - 1");
    return description[$substring](indexOfDot + 1);
  };
  src__foundation__diagnostics.DiagnosticPropertiesBuilder = class DiagnosticPropertiesBuilder extends core.Object {
    add(property) {
      this.properties[$add](property);
    }
    get properties() {
      return this[properties];
    }
    set properties(value) {
      super.properties = value;
    }
    get defaultDiagnosticsTreeStyle() {
      return this[defaultDiagnosticsTreeStyle];
    }
    set defaultDiagnosticsTreeStyle(value) {
      this[defaultDiagnosticsTreeStyle] = value;
    }
    get emptyBodyDescription() {
      return this[emptyBodyDescription];
    }
    set emptyBodyDescription(value) {
      this[emptyBodyDescription] = value;
    }
  };
  (src__foundation__diagnostics.DiagnosticPropertiesBuilder.new = function() {
    this[properties] = JSArrayOfDiagnosticsNode().of([]);
    this[defaultDiagnosticsTreeStyle] = src__foundation__diagnostics.DiagnosticsTreeStyle.sparse;
    this[emptyBodyDescription] = null;
  }).prototype = src__foundation__diagnostics.DiagnosticPropertiesBuilder.prototype;
  dart.addTypeTests(src__foundation__diagnostics.DiagnosticPropertiesBuilder);
  const properties = Symbol("DiagnosticPropertiesBuilder.properties");
  const defaultDiagnosticsTreeStyle = Symbol("DiagnosticPropertiesBuilder.defaultDiagnosticsTreeStyle");
  const emptyBodyDescription = Symbol("DiagnosticPropertiesBuilder.emptyBodyDescription");
  dart.setMethodSignature(src__foundation__diagnostics.DiagnosticPropertiesBuilder, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics.DiagnosticPropertiesBuilder.__proto__),
    add: dart.fnType(dart.void, [src__foundation__diagnostics.DiagnosticsNode])
  }));
  dart.setLibraryUri(src__foundation__diagnostics.DiagnosticPropertiesBuilder, "package:flutter_web/src/foundation/diagnostics.dart");
  dart.setFieldSignature(src__foundation__diagnostics.DiagnosticPropertiesBuilder, () => ({
    __proto__: dart.getFields(src__foundation__diagnostics.DiagnosticPropertiesBuilder.__proto__),
    properties: dart.finalFieldType(ListOfDiagnosticsNode()),
    defaultDiagnosticsTreeStyle: dart.fieldType(src__foundation__diagnostics.DiagnosticsTreeStyle),
    emptyBodyDescription: dart.fieldType(core.String)
  }));
  let const$4;
  src__foundation__diagnostics.DiagnosticableTreeMixin = class DiagnosticableTreeMixin extends core.Object {};
  src__foundation__diagnostics.DiagnosticableTreeMixin[dart.mixinOn] = Object => {
    class DiagnosticableTreeMixin extends Object {
      toString(opts) {
        let minLevel = opts && 'minLevel' in opts ? opts.minLevel : src__foundation__diagnostics.DiagnosticLevel.debug;
        return this.toDiagnosticsNode({style: src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine}).toString({minLevel: minLevel});
      }
      toStringShallow(opts) {
        let joiner = opts && 'joiner' in opts ? opts.joiner : ", ";
        let minLevel = opts && 'minLevel' in opts ? opts.minLevel : src__foundation__diagnostics.DiagnosticLevel.debug;
        let result = new core.StringBuffer.new();
        result.write(this.toStringShort());
        result.write(joiner);
        let builder = new src__foundation__diagnostics.DiagnosticPropertiesBuilder.new();
        this.debugFillProperties(builder);
        result.write(builder.properties[$where](dart.fn(n => !dart.test(n.isFiltered(minLevel)), DiagnosticsNodeTobool()))[$join](joiner));
        return result.toString();
      }
      toStringDeep(opts) {
        let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : "";
        let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
        let minLevel = opts && 'minLevel' in opts ? opts.minLevel : src__foundation__diagnostics.DiagnosticLevel.debug;
        return this.toDiagnosticsNode().toStringDeep({prefixLineOne: prefixLineOne, prefixOtherLines: prefixOtherLines, minLevel: minLevel});
      }
      toStringShort() {
        return src__foundation__diagnostics.describeIdentity(this);
      }
      toDiagnosticsNode(opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let style = opts && 'style' in opts ? opts.style : null;
        return new src__foundation__diagnostics._DiagnosticableTreeNode.new({name: name, value: this, style: style});
      }
      debugDescribeChildren() {
        return const$4 || (const$4 = dart.constList([], src__foundation__diagnostics.DiagnosticsNode));
      }
      debugFillProperties(properties) {}
    }
    dart.defineExtensionMethods(DiagnosticableTreeMixin, ['toString']);
    return DiagnosticableTreeMixin;
  };
  (src__foundation__diagnostics.DiagnosticableTreeMixin.new = function() {
  }).prototype = src__foundation__diagnostics.DiagnosticableTreeMixin.prototype;
  dart.addTypeTests(src__foundation__diagnostics.DiagnosticableTreeMixin);
  src__foundation__diagnostics.DiagnosticableTreeMixin[dart.implements] = () => [src__foundation__diagnostics.DiagnosticableTree, core.Object];
  dart.setMethodSignature(src__foundation__diagnostics.DiagnosticableTreeMixin, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics.DiagnosticableTreeMixin.__proto__),
    toString: dart.fnType(core.String, [], {minLevel: src__foundation__diagnostics.DiagnosticLevel}),
    [$toString]: dart.fnType(core.String, [], {minLevel: src__foundation__diagnostics.DiagnosticLevel}),
    toStringShallow: dart.fnType(core.String, [], {joiner: core.String, minLevel: src__foundation__diagnostics.DiagnosticLevel}),
    toStringDeep: dart.fnType(core.String, [], {prefixLineOne: core.String, prefixOtherLines: core.String, minLevel: src__foundation__diagnostics.DiagnosticLevel}),
    toStringShort: dart.fnType(core.String, []),
    toDiagnosticsNode: dart.fnType(src__foundation__diagnostics.DiagnosticsNode, [], {name: core.String, style: src__foundation__diagnostics.DiagnosticsTreeStyle}),
    debugDescribeChildren: dart.fnType(core.List$(src__foundation__diagnostics.DiagnosticsNode), []),
    debugFillProperties: dart.fnType(dart.void, [src__foundation__diagnostics.DiagnosticPropertiesBuilder])
  }));
  dart.setLibraryUri(src__foundation__diagnostics.DiagnosticableTreeMixin, "package:flutter_web/src/foundation/diagnostics.dart");
  let const$5;
  let const$6;
  const _children = dart.privateName(src__foundation__diagnostics, "_children");
  const _properties = dart.privateName(src__foundation__diagnostics, "_properties");
  src__foundation__diagnostics.DiagnosticsBlock = class DiagnosticsBlock extends src__foundation__diagnostics.DiagnosticsNode {
    get level() {
      return this[level$];
    }
    set level(value) {
      super.level = value;
    }
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    get allowTruncate() {
      return this[allowTruncate$];
    }
    set allowTruncate(value) {
      super.allowTruncate = value;
    }
    getChildren() {
      return this[_children];
    }
    getProperties() {
      return this[_properties];
    }
    toDescription(opts) {
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      return this[_description];
    }
  };
  (src__foundation__diagnostics.DiagnosticsBlock.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let style = opts && 'style' in opts ? opts.style : src__foundation__diagnostics.DiagnosticsTreeStyle.whitespace;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
    let linePrefix = opts && 'linePrefix' in opts ? opts.linePrefix : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let description = opts && 'description' in opts ? opts.description : null;
    let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
    let allowTruncate = opts && 'allowTruncate' in opts ? opts.allowTruncate : false;
    let children = opts && 'children' in opts ? opts.children : const$5 || (const$5 = dart.constList([], src__foundation__diagnostics.DiagnosticsNode));
    let properties = opts && 'properties' in opts ? opts.properties : const$6 || (const$6 = dart.constList([], src__foundation__diagnostics.DiagnosticsNode));
    this[value$] = value;
    this[level$] = level;
    this[allowTruncate$] = allowTruncate;
    this[_description] = description;
    this[_children] = children;
    this[_properties] = properties;
    src__foundation__diagnostics.DiagnosticsBlock.__proto__.new.call(this, {name: name, style: style, showName: dart.test(showName) && name != null, showSeparator: showSeparator, linePrefix: linePrefix});
  }).prototype = src__foundation__diagnostics.DiagnosticsBlock.prototype;
  dart.addTypeTests(src__foundation__diagnostics.DiagnosticsBlock);
  const level$ = Symbol("DiagnosticsBlock.level");
  const value$ = Symbol("DiagnosticsBlock.value");
  const allowTruncate$ = Symbol("DiagnosticsBlock.allowTruncate");
  dart.setMethodSignature(src__foundation__diagnostics.DiagnosticsBlock, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics.DiagnosticsBlock.__proto__),
    getChildren: dart.fnType(core.List$(src__foundation__diagnostics.DiagnosticsNode), []),
    getProperties: dart.fnType(core.List$(src__foundation__diagnostics.DiagnosticsNode), []),
    toDescription: dart.fnType(core.String, [], {parentConfiguration: src__foundation__diagnostics.TextTreeConfiguration})
  }));
  dart.setLibraryUri(src__foundation__diagnostics.DiagnosticsBlock, "package:flutter_web/src/foundation/diagnostics.dart");
  dart.setFieldSignature(src__foundation__diagnostics.DiagnosticsBlock, () => ({
    __proto__: dart.getFields(src__foundation__diagnostics.DiagnosticsBlock.__proto__),
    [_children]: dart.finalFieldType(ListOfDiagnosticsNode()),
    [_properties]: dart.finalFieldType(ListOfDiagnosticsNode()),
    level: dart.finalFieldType(src__foundation__diagnostics.DiagnosticLevel),
    [_description]: dart.finalFieldType(core.String),
    value: dart.finalFieldType(core.Object),
    allowTruncate: dart.finalFieldType(core.bool)
  }));
  src__foundation__diagnostics.debugPrintDouble = function(value) {
    if (value[$floor]() === value) {
      return dart.str(value) + ".0";
    } else
      return dart.toString(value);
  };
  dart.defineLazy(src__foundation__print, {
    /*src__foundation__print.debugPrint*/get debugPrint() {
      return dart.fn(src__foundation__print.debugPrintThrottled, String__Tovoid());
    },
    set debugPrint(_) {}
  });
  src__foundation__print.debugPrintSynchronously = function(message, opts) {
    let wrapWidth = opts && 'wrapWidth' in opts ? opts.wrapWidth : null;
    if (wrapWidth != null) {
      core.print(IterableOfString()._check(message[$split]("\n")[$expand](core.String, dart.fn(line => src__foundation__print.debugWordWrap(line, wrapWidth), StringToIterableOfString())))[$join]("\n"));
    } else {
      core.print(message);
    }
  };
  src__foundation__print.debugPrintThrottled = function(message, opts) {
    let wrapWidth = opts && 'wrapWidth' in opts ? opts.wrapWidth : null;
    let l = message == null ? null : message[$split]("\n");
    let messageLines = l != null ? l : JSArrayOfString().of(["null"]);
    if (wrapWidth != null) {
      src__foundation__print._debugPrintBuffer.addAll(IterableOfString()._check(messageLines[$expand](core.String, dart.fn(line => src__foundation__print.debugWordWrap(line, wrapWidth), StringToIterableOfString()))));
    } else {
      src__foundation__print._debugPrintBuffer.addAll(messageLines);
    }
    if (!dart.test(src__foundation__print._debugPrintScheduled)) src__foundation__print._debugPrintTask();
  };
  dart.defineLazy(src__foundation__print, {
    /*src__foundation__print._debugPrintedCharacters*/get _debugPrintedCharacters() {
      return 0;
    },
    set _debugPrintedCharacters(_) {},
    /*src__foundation__print._kDebugPrintCapacity*/get _kDebugPrintCapacity() {
      return 12 * 1024;
    },
    /*src__foundation__print._kDebugPrintPauseTime*/get _kDebugPrintPauseTime() {
      return dart.const(new core.Duration.new({seconds: 1}));
    },
    /*src__foundation__print._debugPrintBuffer*/get _debugPrintBuffer() {
      return QueueOfString().new();
    },
    /*src__foundation__print._debugPrintStopwatch*/get _debugPrintStopwatch() {
      return new core.Stopwatch.new();
    },
    /*src__foundation__print._debugPrintCompleter*/get _debugPrintCompleter() {
      return null;
    },
    set _debugPrintCompleter(_) {},
    /*src__foundation__print._debugPrintScheduled*/get _debugPrintScheduled() {
      return false;
    },
    set _debugPrintScheduled(_) {}
  });
  src__foundation__print._debugPrintTask = function() {
    src__foundation__print._debugPrintScheduled = false;
    if (dart.test(src__foundation__print._debugPrintStopwatch.elapsed['>'](src__foundation__print._kDebugPrintPauseTime))) {
      src__foundation__print._debugPrintStopwatch.stop();
      src__foundation__print._debugPrintStopwatch.reset();
      src__foundation__print._debugPrintedCharacters = 0;
    }
    while (dart.notNull(src__foundation__print._debugPrintedCharacters) < 12288 && dart.test(src__foundation__print._debugPrintBuffer.isNotEmpty)) {
      let line = src__foundation__print._debugPrintBuffer.removeFirst();
      src__foundation__print._debugPrintedCharacters = dart.notNull(src__foundation__print._debugPrintedCharacters) + line.length;
      core.print(line);
    }
    if (dart.test(src__foundation__print._debugPrintBuffer.isNotEmpty)) {
      src__foundation__print._debugPrintScheduled = true;
      src__foundation__print._debugPrintedCharacters = 0;
      async.Timer.new(src__foundation__print._kDebugPrintPauseTime, dart.fn(src__foundation__print._debugPrintTask, VoidTovoid()));
      let t = src__foundation__print._debugPrintCompleter;
      t == null ? src__foundation__print._debugPrintCompleter = CompleterOfvoid().new() : t;
    } else {
      src__foundation__print._debugPrintStopwatch.start();
      let t$ = src__foundation__print._debugPrintCompleter;
      t$ == null ? null : t$.complete();
      src__foundation__print._debugPrintCompleter = null;
    }
  };
  dart.copyProperties(src__foundation__print, {
    get debugPrintDone() {
      let t = src__foundation__print._debugPrintCompleter;
      let l = t == null ? null : t.future;
      return l != null ? l : FutureOfvoid().value();
    }
  });
  dart.defineLazy(src__foundation__print, {
    /*src__foundation__print._indentPattern*/get _indentPattern() {
      return core.RegExp.new("^ *(?:[-+*] |[0-9]+[.):] )?");
    }
  });
  src__foundation__print._WordWrapParseMode = class _WordWrapParseMode extends core.Object {
    toString() {
      return {
        0: "_WordWrapParseMode.inSpace",
        1: "_WordWrapParseMode.inWord",
        2: "_WordWrapParseMode.atBreak"
      }[this.index];
    }
  };
  (src__foundation__print._WordWrapParseMode.new = function(x) {
    this.index = x;
  }).prototype = src__foundation__print._WordWrapParseMode.prototype;
  dart.addTypeTests(src__foundation__print._WordWrapParseMode);
  dart.setLibraryUri(src__foundation__print._WordWrapParseMode, "package:flutter_web/src/foundation/print.dart");
  dart.setFieldSignature(src__foundation__print._WordWrapParseMode, () => ({
    __proto__: dart.getFields(src__foundation__print._WordWrapParseMode.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__foundation__print._WordWrapParseMode, ['toString']);
  src__foundation__print._WordWrapParseMode.inSpace = dart.const(new src__foundation__print._WordWrapParseMode.new(0));
  src__foundation__print._WordWrapParseMode.inWord = dart.const(new src__foundation__print._WordWrapParseMode.new(1));
  src__foundation__print._WordWrapParseMode.atBreak = dart.const(new src__foundation__print._WordWrapParseMode.new(2));
  src__foundation__print._WordWrapParseMode.values = dart.constList([src__foundation__print._WordWrapParseMode.inSpace, src__foundation__print._WordWrapParseMode.inWord, src__foundation__print._WordWrapParseMode.atBreak], src__foundation__print._WordWrapParseMode);
  src__foundation__print.debugWordWrap = function(message, width, opts) {
    let wrapIndent = opts && 'wrapIndent' in opts ? opts.wrapIndent : "";
    return new (SyncIterableOfString()).new(function* debugWordWrap() {
      if (message.length < dart.notNull(width) || message[$trimLeft]()[$_get](0) === "#") {
        yield message;
        return;
      }
      let prefixMatch = src__foundation__print._indentPattern.matchAsPrefix(message);
      let prefix = dart.notNull(wrapIndent) + " "[$times](prefixMatch.group(0).length);
      let start = 0;
      let startForLengthCalculations = 0;
      let addPrefix = false;
      let index = prefix.length;
      let mode = src__foundation__print._WordWrapParseMode.inSpace;
      let lastWordStart = null;
      let lastWordEnd = null;
      while (true) {
        switch (mode) {
          case src__foundation__print._WordWrapParseMode.inSpace:
          {
            while (index < message.length && message[$_get](index) === " ") {
              index = index + 1;
            }
            lastWordStart = index;
            mode = src__foundation__print._WordWrapParseMode.inWord;
            break;
          }
          case src__foundation__print._WordWrapParseMode.inWord:
          {
            while (index < message.length && message[$_get](index) !== " ") {
              index = index + 1;
            }
            mode = src__foundation__print._WordWrapParseMode.atBreak;
            break;
          }
          case src__foundation__print._WordWrapParseMode.atBreak:
          {
            if (index - startForLengthCalculations > dart.notNull(width) || index === message.length) {
              if (index - startForLengthCalculations <= dart.notNull(width) || lastWordEnd == null) {
                lastWordEnd = index;
              }
              if (addPrefix) {
                yield prefix + message[$substring](start, lastWordEnd);
              } else {
                yield message[$substring](start, lastWordEnd);
                addPrefix = true;
              }
              if (dart.notNull(lastWordEnd) >= message.length) return;
              if (lastWordEnd === index) {
                while (index < message.length && message[$_get](index) === " ") {
                  index = index + 1;
                }
                start = index;
                mode = src__foundation__print._WordWrapParseMode.inWord;
              } else {
                if (!(dart.notNull(lastWordStart) > dart.notNull(lastWordEnd))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/print.dart", 169, 20, "lastWordStart > lastWordEnd");
                start = lastWordStart;
                mode = src__foundation__print._WordWrapParseMode.atBreak;
              }
              startForLengthCalculations = dart.notNull(start) - prefix.length;
              if (!addPrefix) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/print.dart", 174, 18, "addPrefix");
              lastWordEnd = null;
            } else {
              lastWordEnd = index;
              mode = src__foundation__print._WordWrapParseMode.inSpace;
            }
            break;
          }
        }
      }
    });
  };
  src__foundation__assertions._ErrorDiagnostic = class _ErrorDiagnostic extends src__foundation__diagnostics.DiagnosticsProperty$(core.List$(core.Object)) {
    valueToString(opts) {
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      return this.value[$join]("");
    }
  };
  (src__foundation__assertions._ErrorDiagnostic.new = function(message, opts) {
    let style = opts && 'style' in opts ? opts.style : src__foundation__diagnostics.DiagnosticsTreeStyle.flat;
    let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
    if (!(message != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/assertions.dart", 28, 16, "message != null");
    src__foundation__assertions._ErrorDiagnostic.__proto__.new.call(this, null, JSArrayOfObject().of([message]), {showName: false, showSeparator: false, defaultValue: null, style: style, level: level});
  }).prototype = src__foundation__assertions._ErrorDiagnostic.prototype;
  (src__foundation__assertions._ErrorDiagnostic._fromParts = function(messageParts, opts) {
    let style = opts && 'style' in opts ? opts.style : src__foundation__diagnostics.DiagnosticsTreeStyle.flat;
    let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
    if (!(messageParts != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/assertions.dart", 68, 16, "messageParts != null");
    src__foundation__assertions._ErrorDiagnostic.__proto__.new.call(this, null, messageParts, {showName: false, showSeparator: false, defaultValue: null, style: style, level: level});
  }).prototype = src__foundation__assertions._ErrorDiagnostic.prototype;
  dart.addTypeTests(src__foundation__assertions._ErrorDiagnostic);
  dart.setMethodSignature(src__foundation__assertions._ErrorDiagnostic, () => ({
    __proto__: dart.getMethods(src__foundation__assertions._ErrorDiagnostic.__proto__),
    valueToString: dart.fnType(core.String, [], {parentConfiguration: src__foundation__diagnostics.TextTreeConfiguration})
  }));
  dart.setLibraryUri(src__foundation__assertions._ErrorDiagnostic, "package:flutter_web/src/foundation/assertions.dart");
  src__foundation__assertions.ErrorDescription = class ErrorDescription extends src__foundation__assertions._ErrorDiagnostic {};
  (src__foundation__assertions.ErrorDescription.new = function(message) {
    src__foundation__assertions.ErrorDescription.__proto__.new.call(this, message, {level: src__foundation__diagnostics.DiagnosticLevel.info});
  }).prototype = src__foundation__assertions.ErrorDescription.prototype;
  (src__foundation__assertions.ErrorDescription._fromParts = function(messageParts) {
    src__foundation__assertions.ErrorDescription.__proto__._fromParts.call(this, messageParts, {level: src__foundation__diagnostics.DiagnosticLevel.info});
  }).prototype = src__foundation__assertions.ErrorDescription.prototype;
  dart.addTypeTests(src__foundation__assertions.ErrorDescription);
  dart.setLibraryUri(src__foundation__assertions.ErrorDescription, "package:flutter_web/src/foundation/assertions.dart");
  src__foundation__assertions.ErrorSummary = class ErrorSummary extends src__foundation__assertions._ErrorDiagnostic {};
  (src__foundation__assertions.ErrorSummary.new = function(message) {
    src__foundation__assertions.ErrorSummary.__proto__.new.call(this, message, {level: src__foundation__diagnostics.DiagnosticLevel.summary});
  }).prototype = src__foundation__assertions.ErrorSummary.prototype;
  (src__foundation__assertions.ErrorSummary._fromParts = function(messageParts) {
    src__foundation__assertions.ErrorSummary.__proto__._fromParts.call(this, messageParts, {level: src__foundation__diagnostics.DiagnosticLevel.summary});
  }).prototype = src__foundation__assertions.ErrorSummary.prototype;
  dart.addTypeTests(src__foundation__assertions.ErrorSummary);
  dart.setLibraryUri(src__foundation__assertions.ErrorSummary, "package:flutter_web/src/foundation/assertions.dart");
  src__foundation__assertions.ErrorHint = class ErrorHint extends src__foundation__assertions._ErrorDiagnostic {};
  (src__foundation__assertions.ErrorHint.new = function(message) {
    src__foundation__assertions.ErrorHint.__proto__.new.call(this, message, {level: src__foundation__diagnostics.DiagnosticLevel.hint});
  }).prototype = src__foundation__assertions.ErrorHint.prototype;
  (src__foundation__assertions.ErrorHint._fromParts = function(messageParts) {
    src__foundation__assertions.ErrorHint.__proto__._fromParts.call(this, messageParts, {level: src__foundation__diagnostics.DiagnosticLevel.hint});
  }).prototype = src__foundation__assertions.ErrorHint.prototype;
  dart.addTypeTests(src__foundation__assertions.ErrorHint);
  dart.setLibraryUri(src__foundation__assertions.ErrorHint, "package:flutter_web/src/foundation/assertions.dart");
  const _exceptionToDiagnosticable = dart.privateName(src__foundation__assertions, "_exceptionToDiagnosticable");
  src__foundation__assertions.FlutterErrorDetails = class FlutterErrorDetails extends src__foundation__diagnostics.Diagnosticable {
    get exception() {
      return this[exception$];
    }
    set exception(value) {
      super.exception = value;
    }
    get stack() {
      return this[stack$];
    }
    set stack(value) {
      super.stack = value;
    }
    get library() {
      return this[library$];
    }
    set library(value) {
      super.library = value;
    }
    get context() {
      return this[context$];
    }
    set context(value) {
      super.context = value;
    }
    get stackFilter() {
      return this[stackFilter$];
    }
    set stackFilter(value) {
      super.stackFilter = value;
    }
    get informationCollector() {
      return this[informationCollector$];
    }
    set informationCollector(value) {
      super.informationCollector = value;
    }
    get silent() {
      return this[silent$];
    }
    set silent(value) {
      super.silent = value;
    }
    exceptionAsString() {
      let longMessage = null;
      if (core.AssertionError.is(this.exception)) {
        let message = dart.dload(this.exception, 'message');
        let fullMessage = dart.toString(this.exception);
        if (typeof message == 'string' && message != fullMessage) {
          if (fullMessage.length > message.length) {
            let position = fullMessage[$lastIndexOf](message);
            if (position === fullMessage.length - message.length && position > 2 && fullMessage[$substring](position - 2, position) === ": ") {
              let body = fullMessage[$substring](0, position - 2);
              let splitPoint = body[$indexOf](" Failed assertion:");
              if (splitPoint >= 0) {
                body = body[$substring](0, splitPoint) + "\n" + body[$substring](splitPoint + 1);
              }
              longMessage = message[$trimRight]() + "\n" + body;
            }
          }
        }
        let t = longMessage;
        t == null ? longMessage = fullMessage : t;
      } else if (typeof this.exception == 'string') {
        longMessage = core.String._check(this.exception);
      } else if (core.Error.is(this.exception) || core.Exception.is(this.exception)) {
        longMessage = dart.toString(this.exception);
      } else {
        longMessage = "  " + dart.str(dart.toString(this.exception));
      }
      longMessage = longMessage[$trimRight]();
      if (longMessage[$isEmpty]) longMessage = "  <no message available>";
      return longMessage;
    }
    [_exceptionToDiagnosticable]() {
      if (src__foundation__assertions.FlutterError.is(this.exception)) {
        return src__foundation__diagnostics.Diagnosticable._check(this.exception);
      }
      if (core.AssertionError.is(this.exception) && src__foundation__assertions.FlutterError.is(dart.dload(this.exception, 'message'))) {
        return src__foundation__diagnostics.Diagnosticable._check(dart.dload(this.exception, 'message'));
      }
      return null;
    }
    get summary() {
      let diagnosticable = this[_exceptionToDiagnosticable]();
      let summary = null;
      if (diagnosticable != null) {
        let builder = new src__foundation__diagnostics.DiagnosticPropertiesBuilder.new();
        this.debugFillProperties(builder);
        summary = builder.properties[$firstWhere](dart.fn(node => node.level === src__foundation__diagnostics.DiagnosticLevel.summary, DiagnosticsNodeTobool()), {orElse: dart.fn(() => null, VoidToNull())});
      }
      return summary != null ? summary : new src__foundation__assertions.ErrorSummary.new(this.exceptionAsString()[$split]("\n")[$_get](0)[$trimLeft]());
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      let verb = new src__foundation__assertions.ErrorDescription.new("thrown" + dart.str(this.context != null ? new src__foundation__assertions.ErrorDescription.new(" " + dart.str(this.context)) : ""));
      let diagnosticable = this[_exceptionToDiagnosticable]();
      if (core.NullThrownError.is(this.exception)) {
        properties.add(new src__foundation__assertions.ErrorDescription.new("The null value was " + dart.str(verb) + "."));
      } else if (typeof this.exception == 'number') {
        properties.add(new src__foundation__assertions.ErrorDescription.new("The number " + dart.str(this.exception) + " was " + dart.str(verb) + "."));
      } else {
        let errorName = null;
        if (core.AssertionError.is(this.exception)) {
          errorName = new src__foundation__assertions.ErrorDescription.new("assertion");
        } else if (typeof this.exception == 'string') {
          errorName = new src__foundation__assertions.ErrorDescription.new("message");
        } else if (core.Error.is(this.exception) || core.Exception.is(this.exception)) {
          errorName = new src__foundation__assertions.ErrorDescription.new(dart.str(dart.runtimeType(this.exception)));
        } else {
          errorName = new src__foundation__assertions.ErrorDescription.new(dart.str(dart.runtimeType(this.exception)) + " object");
        }
        properties.add(new src__foundation__assertions.ErrorDescription.new("The following " + dart.str(errorName) + " was " + dart.str(verb) + ":"));
        if (diagnosticable != null) {
          diagnosticable.debugFillProperties(properties);
        } else {
          let prefix = dart.str(dart.runtimeType(this.exception)) + ": ";
          let message = this.exceptionAsString();
          if (message[$startsWith](prefix)) message = message[$substring](prefix.length);
          properties.add(new src__foundation__assertions.ErrorDescription.new(dart.str(message)));
        }
      }
      let stackLines = this.stack != null ? dart.toString(this.stack)[$trimRight]()[$split]("\n") : null;
      if (core.AssertionError.is(this.exception) && diagnosticable == null) {
        let ourFault = true;
        if (stackLines != null) {
          let stackList = stackLines[$take](2)[$toList]();
          if (dart.notNull(stackList[$length]) >= 2) {
            let throwPattern = core.RegExp.new("^#0 +_AssertionError._throwNew \\(dart:.+\\)$");
            let assertPattern = core.RegExp.new("^#1 +[^(]+ \\((.+?):([0-9]+)(?::[0-9]+)?\\)$");
            if (dart.test(throwPattern.hasMatch(stackList[$_get](0)))) {
              let assertMatch = assertPattern.firstMatch(stackList[$_get](1));
              if (assertMatch != null) {
                if (!(assertMatch.groupCount === 2)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/assertions.dart", 405, 22, "assertMatch.groupCount == 2");
                let ourLibraryPattern = core.RegExp.new("^package:flutter/");
                ourFault = ourLibraryPattern.hasMatch(assertMatch.group(1));
              }
            }
          }
        }
        if (dart.test(ourFault)) {
          properties.add(src__foundation__diagnostics.DiagnosticsNode.message(""));
          properties.add(new src__foundation__assertions.ErrorHint.new("Either the assertion indicates an error in the framework itself, or we should " + "provide substantially more information in this error message to help you determine " + "and fix the underlying cause.\n" + "In either case, please report this assertion by filing a bug on GitHub:\n" + "  https://github.com/flutter/flutter/issues/new?template=BUG.md"));
        }
      }
      if (this.stack != null) {
        properties.add(src__foundation__diagnostics.DiagnosticsNode.message(""));
        properties.add(new src__foundation__assertions.DiagnosticsStackTrace.new("When the exception was thrown, this was the stack", this.stack, {stackFilter: this.stackFilter}));
      }
      if (this.informationCollector != null) {
        properties.add(src__foundation__diagnostics.DiagnosticsNode.message(""));
        this.informationCollector()[$forEach](dart.bind(properties, 'add'));
      }
    }
    toStringShort() {
      return this.library != null ? "Exception Caught By " + dart.str(this.library) : "Exception Caught";
    }
    toString(opts) {
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : src__foundation__diagnostics.DiagnosticLevel.debug;
      return this.toDiagnosticsNode({style: src__foundation__diagnostics.DiagnosticsTreeStyle.error}).toStringDeep({minLevel: minLevel});
    }
  };
  (src__foundation__assertions.FlutterErrorDetails.new = function(opts) {
    let exception = opts && 'exception' in opts ? opts.exception : null;
    let stack = opts && 'stack' in opts ? opts.stack : null;
    let library = opts && 'library' in opts ? opts.library : "Flutter framework";
    let context = opts && 'context' in opts ? opts.context : null;
    let stackFilter = opts && 'stackFilter' in opts ? opts.stackFilter : null;
    let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
    let silent = opts && 'silent' in opts ? opts.silent : false;
    this[exception$] = exception;
    this[stack$] = stack;
    this[library$] = library;
    this[context$] = context;
    this[stackFilter$] = stackFilter;
    this[informationCollector$] = informationCollector;
    this[silent$] = silent;
    src__foundation__assertions.FlutterErrorDetails.__proto__.new.call(this);
  }).prototype = src__foundation__assertions.FlutterErrorDetails.prototype;
  dart.addTypeTests(src__foundation__assertions.FlutterErrorDetails);
  const exception$ = Symbol("FlutterErrorDetails.exception");
  const stack$ = Symbol("FlutterErrorDetails.stack");
  const library$ = Symbol("FlutterErrorDetails.library");
  const context$ = Symbol("FlutterErrorDetails.context");
  const stackFilter$ = Symbol("FlutterErrorDetails.stackFilter");
  const informationCollector$ = Symbol("FlutterErrorDetails.informationCollector");
  const silent$ = Symbol("FlutterErrorDetails.silent");
  dart.setMethodSignature(src__foundation__assertions.FlutterErrorDetails, () => ({
    __proto__: dart.getMethods(src__foundation__assertions.FlutterErrorDetails.__proto__),
    exceptionAsString: dart.fnType(core.String, []),
    [_exceptionToDiagnosticable]: dart.fnType(src__foundation__diagnostics.Diagnosticable, [])
  }));
  dart.setGetterSignature(src__foundation__assertions.FlutterErrorDetails, () => ({
    __proto__: dart.getGetters(src__foundation__assertions.FlutterErrorDetails.__proto__),
    summary: src__foundation__diagnostics.DiagnosticsNode
  }));
  dart.setLibraryUri(src__foundation__assertions.FlutterErrorDetails, "package:flutter_web/src/foundation/assertions.dart");
  dart.setFieldSignature(src__foundation__assertions.FlutterErrorDetails, () => ({
    __proto__: dart.getFields(src__foundation__assertions.FlutterErrorDetails.__proto__),
    exception: dart.finalFieldType(dart.dynamic),
    stack: dart.finalFieldType(core.StackTrace),
    library: dart.finalFieldType(core.String),
    context: dart.finalFieldType(src__foundation__diagnostics.DiagnosticsNode),
    stackFilter: dart.finalFieldType(IterableOfStringToIterableOfString()),
    informationCollector: dart.finalFieldType(VoidToIterableOfDiagnosticsNode()),
    silent: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(src__foundation__assertions.FlutterErrorDetails, ['toString']);
  let const$7;
  let const$8;
  const Error_DiagnosticableTreeMixin$ = class Error_DiagnosticableTreeMixin extends core.Error {};
  (Error_DiagnosticableTreeMixin$.new = function() {
    Error_DiagnosticableTreeMixin$.__proto__.new.call(this);
  }).prototype = Error_DiagnosticableTreeMixin$.prototype;
  dart.applyMixin(Error_DiagnosticableTreeMixin$, src__foundation__diagnostics.DiagnosticableTreeMixin);
  src__foundation__assertions.FlutterError = class FlutterError extends Error_DiagnosticableTreeMixin$ {
    static new(message) {
      let lines = message[$split]("\n");
      let parts = JSArrayOfDiagnosticsNode().of([]);
      parts[$add](new src__foundation__assertions.ErrorSummary.new(lines[$first]));
      if (dart.notNull(lines[$length]) > 1) {
        parts[$addAll](IterableOfDiagnosticsNode()._check(lines[$skip](1)[$map](src__foundation__diagnostics.DiagnosticsNode, dart.fn(line => new src__foundation__assertions.ErrorDescription.new(line), StringToErrorDescription()))));
      }
      return new src__foundation__assertions.FlutterError.fromParts(parts);
    }
    get diagnostics() {
      return this[diagnostics$];
    }
    set diagnostics(value) {
      super.diagnostics = value;
    }
    get message() {
      return this.toString();
    }
    static resetErrorCount() {
      src__foundation__assertions.FlutterError._errorCount = 0;
    }
    static dumpErrorToConsole(details, opts) {
      let forceReport = opts && 'forceReport' in opts ? opts.forceReport : false;
      if (!(details != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/assertions.dart", 617, 12, "details != null");
      if (!(details.exception != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/assertions.dart", 618, 12, "details.exception != null");
      let reportError = details.silent !== true;
      if (!dart.test(dart.fn(() => {
        reportError = true;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/assertions.dart", 620, 12, "() {reportError = true; return true;}()");
      if (!reportError && !dart.test(forceReport)) return;
      if (src__foundation__assertions.FlutterError._errorCount === 0 || dart.test(forceReport)) {
        src__foundation__print.debugPrint(new src__foundation__diagnostics.TextTreeRenderer.new({wrapWidth: 100, wrapWidthProperties: 100, maxDescendentsTruncatableNode: 5}).render(details.toDiagnosticsNode({style: src__foundation__diagnostics.DiagnosticsTreeStyle.error}))[$trimRight]());
      } else {
        src__foundation__print.debugPrint("Another exception was thrown: " + dart.str(details.summary));
      }
      src__foundation__assertions.FlutterError._errorCount = dart.notNull(src__foundation__assertions.FlutterError._errorCount) + 1;
    }
    static defaultStackFilter(frames) {
      let filteredPackages = const$7 || (const$7 = dart.constList(["dart:async-patch", "dart:async", "package:stack_trace"], core.String));
      let filteredClasses = const$8 || (const$8 = dart.constList(["_AssertionError", "_FakeAsync", "_FrameCallbackEntry"], core.String));
      let stackParser = core.RegExp.new("^#[0-9]+ +([^.]+).* \\(([^/\\\\]*)[/\\\\].+:[0-9]+(?::[0-9]+)?\\)$");
      let packageParser = core.RegExp.new("^([^:]+):(.+)$");
      let result = JSArrayOfString().of([]);
      let skipped = JSArrayOfString().of([]);
      for (let line of frames) {
        let match = stackParser.firstMatch(line);
        if (match != null) {
          if (!(match.groupCount === 2)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/assertions.dart", 670, 16, "match.groupCount == 2");
          if (dart.test(filteredPackages[$contains](match.group(2)))) {
            let packageMatch = packageParser.firstMatch(match.group(2));
            if (packageMatch != null && packageMatch.group(1) === "package") {
              skipped[$add]("package " + dart.str(packageMatch.group(2)));
            } else {
              skipped[$add]("package " + dart.str(match.group(2)));
            }
            continue;
          }
          if (dart.test(filteredClasses[$contains](match.group(1)))) {
            skipped[$add]("class " + dart.str(match.group(1)));
            continue;
          }
        }
        result[$add](line);
      }
      if (skipped[$length] === 1) {
        result[$add]("(elided one frame from " + dart.str(skipped[$single]) + ")");
      } else if (dart.notNull(skipped[$length]) > 1) {
        let where = SetOfString().from(skipped).toList();
        where[$sort]();
        if (dart.notNull(where[$length]) > 1) where[$_set](dart.notNull(where[$length]) - 1, "and " + dart.str(where[$last]));
        if (dart.notNull(where[$length]) > 2) {
          result[$add]("(elided " + dart.str(skipped[$length]) + " frames from " + dart.str(where[$join](", ")) + ")");
        } else {
          result[$add]("(elided " + dart.str(skipped[$length]) + " frames from " + dart.str(where[$join](" ")) + ")");
        }
      }
      return result;
    }
    debugFillProperties(properties) {
      this.diagnostics == null ? null : this.diagnostics[$forEach](dart.bind(properties, 'add'));
    }
    toStringShort() {
      return "FlutterError";
    }
    toString(opts) {
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : src__foundation__diagnostics.DiagnosticLevel.debug;
      let renderer = new src__foundation__diagnostics.TextTreeRenderer.new({wrapWidth: 4000000000});
      return IterableOfString()._check(this.diagnostics[$map](core.String, dart.fn(node => renderer.render(node)[$trimRight](), DiagnosticsNodeToString())))[$join]("\n");
    }
    static reportError(details) {
      if (!(details != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/assertions.dart", 722, 12, "details != null");
      if (!(details.exception != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/assertions.dart", 723, 12, "details.exception != null");
      if (src__foundation__assertions.FlutterError.onError != null) src__foundation__assertions.FlutterError.onError(details);
    }
  };
  (src__foundation__assertions.FlutterError.fromParts = function(diagnostics) {
    this[diagnostics$] = diagnostics;
    if (!dart.test(diagnostics[$isNotEmpty])) dart.assertFailed(new src__foundation__assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new src__foundation__assertions.ErrorSummary.new("Empty FlutterError")])), "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/assertions.dart", 498, 13, "diagnostics.isNotEmpty");
    src__foundation__assertions.FlutterError.__proto__.new.call(this);
    if (!(this.diagnostics[$first].level === src__foundation__diagnostics.DiagnosticLevel.summary)) dart.assertFailed(new src__foundation__assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new src__foundation__assertions.ErrorSummary.new("FlutterError is missing a summary."), new src__foundation__assertions.ErrorDescription.new("All FlutterError objects should start with a short (one line) " + "summary description of the problem that was detected."), new (DiagnosticsPropertyOfFlutterError()).new("Malformed", this, {expandableValue: true, showSeparator: false, style: src__foundation__diagnostics.DiagnosticsTreeStyle.whitespace}), new src__foundation__assertions.ErrorDescription.new("\nThis error should still help you solve your problem, " + "however please also report this malformed error in the " + "framework by filing a bug on GitHub:\n" + "  https://github.com/flutter/flutter/issues/new?template=BUG.md")])), "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/assertions.dart", 502, 9, "diagnostics.first.level == DiagnosticLevel.summary");
    if (!dart.test(dart.fn(() => {
      let summaries = this.diagnostics[$where](dart.fn(node => node.level === src__foundation__diagnostics.DiagnosticLevel.summary, DiagnosticsNodeTobool()));
      if (dart.notNull(summaries[$length]) > 1) {
        let message = JSArrayOfDiagnosticsNode().of([new src__foundation__assertions.ErrorSummary.new("FlutterError contained multiple error summaries."), new src__foundation__assertions.ErrorDescription.new("All FlutterError objects should have only a single short " + "(one line) summary description of the problem that was " + "detected.")]);
        message[$add](new (DiagnosticsPropertyOfFlutterError()).new("Malformed", this, {expandableValue: true, showSeparator: false, style: src__foundation__diagnostics.DiagnosticsTreeStyle.whitespace}));
        message[$add](new src__foundation__assertions.ErrorDescription.new("\nThe malformed error has " + dart.str(summaries[$length]) + " summaries."));
        let i = 1;
        for (let summary of summaries) {
          message[$add](new (DiagnosticsPropertyOfDiagnosticsNode()).new("Summary " + dart.str(i), summary, {expandableValue: true}));
          i = i + 1;
        }
        message[$add](new src__foundation__assertions.ErrorDescription.new("\nThis error should still help you solve your problem, " + "however please also report this malformed error in the " + "framework by filing a bug on GitHub:\n" + "  https://github.com/flutter/flutter/issues/new?template=BUG.md"));
        dart.throw(new src__foundation__assertions.FlutterError.fromParts(message));
      }
      return true;
    }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/assertions.dart", 520, 12, "() {final Iterable<DiagnosticsNode> summaries = diagnostics.where((DiagnosticsNode node) => node.level == DiagnosticLevel.summary); if (summaries.length > 1) {final List<DiagnosticsNode> message = <DiagnosticsNode>[ErrorSummary('FlutterError contained multiple error summaries.'), ErrorDescription('All FlutterError objects should have only a single short ' '(one line) summary description of the problem that was ' 'detected.')]; message.add(DiagnosticsProperty<FlutterError>('Malformed', this, expandableValue: true, showSeparator: false, style: DiagnosticsTreeStyle.whitespace)); message.add(ErrorDescription('\\nThe malformed error has ${summaries.length} summaries.')); int i = 1; for (DiagnosticsNode summary in summaries) {message.add(DiagnosticsProperty<DiagnosticsNode>('Summary $i', summary, expandableValue: true)); i += 1;} message.add(ErrorDescription('\\nThis error should still help you solve your problem, ' 'however please also report this malformed error in the ' 'framework by filing a bug on GitHub:\\n' '  https://github.com/flutter/flutter/issues/new?template=BUG.md')); throw FlutterError.fromParts(message);} return true;}()");
  }).prototype = src__foundation__assertions.FlutterError.prototype;
  dart.addTypeTests(src__foundation__assertions.FlutterError);
  const diagnostics$ = Symbol("FlutterError.diagnostics");
  src__foundation__assertions.FlutterError[dart.implements] = () => [core.AssertionError];
  dart.setGetterSignature(src__foundation__assertions.FlutterError, () => ({
    __proto__: dart.getGetters(src__foundation__assertions.FlutterError.__proto__),
    message: core.String
  }));
  dart.setLibraryUri(src__foundation__assertions.FlutterError, "package:flutter_web/src/foundation/assertions.dart");
  dart.setFieldSignature(src__foundation__assertions.FlutterError, () => ({
    __proto__: dart.getFields(src__foundation__assertions.FlutterError.__proto__),
    diagnostics: dart.finalFieldType(ListOfDiagnosticsNode())
  }));
  dart.defineExtensionMethods(src__foundation__assertions.FlutterError, ['toString']);
  dart.defineLazy(src__foundation__assertions.FlutterError, {
    /*src__foundation__assertions.FlutterError.onError*/get onError() {
      return dart.fn(src__foundation__assertions.FlutterError.dumpErrorToConsole, FlutterErrorDetails__Tovoid());
    },
    set onError(_) {},
    /*src__foundation__assertions.FlutterError._errorCount*/get _errorCount() {
      return 0;
    },
    set _errorCount(_) {},
    /*src__foundation__assertions.FlutterError.wrapWidth*/get wrapWidth() {
      return 100;
    }
  });
  src__foundation__assertions.debugPrintStack = function(opts) {
    let label = opts && 'label' in opts ? opts.label : null;
    let maxFrames = opts && 'maxFrames' in opts ? opts.maxFrames : null;
    if (label != null) src__foundation__print.debugPrint(label);
    let lines = dart.toString(core.StackTrace.current)[$trimRight]()[$split]("\n");
    if (true) {
      lines = lines[$skip](1);
    }
    if (maxFrames != null) lines = lines[$take](maxFrames);
    src__foundation__print.debugPrint(src__foundation__assertions.FlutterError.defaultStackFilter(lines)[$join]("\n"));
  };
  src__foundation__assertions.DiagnosticsStackTrace = class DiagnosticsStackTrace extends src__foundation__diagnostics.DiagnosticsBlock {
    static _createStackFrame(frame) {
      return src__foundation__diagnostics.DiagnosticsNode.message(frame, {allowWrap: false});
    }
  };
  (src__foundation__assertions.DiagnosticsStackTrace.new = function(name, stack, opts) {
    let stackFilter = opts && 'stackFilter' in opts ? opts.stackFilter : null;
    let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
    src__foundation__assertions.DiagnosticsStackTrace.__proto__.new.call(this, {name: name, value: stack, properties: IterableOfDiagnosticsNode()._check((() => {
        let l = stackFilter;
        return l != null ? l : dart.fn(src__foundation__assertions.FlutterError.defaultStackFilter, IterableOfStringToIterableOfString());
      })()(dart.toString(stack)[$trimRight]()[$split]("\n"))[$map](src__foundation__diagnostics.DiagnosticsNode, dart.fn(src__foundation__assertions.DiagnosticsStackTrace._createStackFrame, StringToDiagnosticsNode())))[$toList](), style: src__foundation__diagnostics.DiagnosticsTreeStyle.flat, showSeparator: showSeparator, allowTruncate: true});
  }).prototype = src__foundation__assertions.DiagnosticsStackTrace.prototype;
  (src__foundation__assertions.DiagnosticsStackTrace.singleFrame = function(name, opts) {
    let frame = opts && 'frame' in opts ? opts.frame : null;
    let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
    src__foundation__assertions.DiagnosticsStackTrace.__proto__.new.call(this, {name: name, properties: JSArrayOfDiagnosticsNode().of([src__foundation__assertions.DiagnosticsStackTrace._createStackFrame(frame)]), style: src__foundation__diagnostics.DiagnosticsTreeStyle.whitespace, showSeparator: showSeparator});
  }).prototype = src__foundation__assertions.DiagnosticsStackTrace.prototype;
  dart.addTypeTests(src__foundation__assertions.DiagnosticsStackTrace);
  dart.setLibraryUri(src__foundation__assertions.DiagnosticsStackTrace, "package:flutter_web/src/foundation/assertions.dart");
  dart.defineLazy(src__foundation__constants, {
    /*src__foundation__constants.kReleaseMode*/get kReleaseMode() {
      return false;
    },
    /*src__foundation__constants.kProfileMode*/get kProfileMode() {
      return false;
    },
    /*src__foundation__constants.kDebugMode*/get kDebugMode() {
      return !false && !false;
    },
    /*src__foundation__constants.precisionErrorTolerance*/get precisionErrorTolerance() {
      return 1e-10;
    }
  });
  src__foundation__platform.TargetPlatform = class TargetPlatform extends core.Object {
    toString() {
      return {
        0: "TargetPlatform.android",
        1: "TargetPlatform.fuchsia",
        2: "TargetPlatform.iOS"
      }[this.index];
    }
  };
  (src__foundation__platform.TargetPlatform.new = function(x) {
    this.index = x;
  }).prototype = src__foundation__platform.TargetPlatform.prototype;
  dart.addTypeTests(src__foundation__platform.TargetPlatform);
  dart.setLibraryUri(src__foundation__platform.TargetPlatform, "package:flutter_web/src/foundation/platform.dart");
  dart.setFieldSignature(src__foundation__platform.TargetPlatform, () => ({
    __proto__: dart.getFields(src__foundation__platform.TargetPlatform.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__foundation__platform.TargetPlatform, ['toString']);
  src__foundation__platform.TargetPlatform.android = dart.const(new src__foundation__platform.TargetPlatform.new(0));
  src__foundation__platform.TargetPlatform.fuchsia = dart.const(new src__foundation__platform.TargetPlatform.new(1));
  src__foundation__platform.TargetPlatform.iOS = dart.const(new src__foundation__platform.TargetPlatform.new(2));
  src__foundation__platform.TargetPlatform.values = dart.constList([src__foundation__platform.TargetPlatform.android, src__foundation__platform.TargetPlatform.fuchsia, src__foundation__platform.TargetPlatform.iOS], src__foundation__platform.TargetPlatform);
  dart.copyProperties(src__foundation__platform, {
    get defaultTargetPlatform() {
      if (src__foundation__platform.debugDefaultTargetPlatformOverride != null) return src__foundation__platform.debugDefaultTargetPlatformOverride;
      return src__foundation__platform.TargetPlatform.android;
    }
  });
  dart.defineLazy(src__foundation__platform, {
    /*src__foundation__platform.debugDefaultTargetPlatformOverride*/get debugDefaultTargetPlatformOverride() {
      return null;
    },
    set debugDefaultTargetPlatformOverride(_) {}
  });
  src__foundation__debug.debugAssertAllFoundationVarsUnset = function(reason, opts) {
    let debugPrintOverride = opts && 'debugPrintOverride' in opts ? opts.debugPrintOverride : dart.fn(src__foundation__print.debugPrintThrottled, String__Tovoid());
    if (!dart.test(dart.fn(() => {
      if (!dart.equals(src__foundation__print.debugPrint, debugPrintOverride) || src__foundation__platform.debugDefaultTargetPlatformOverride != null) dart.throw(src__foundation__assertions.FlutterError.new(reason));
      return true;
    }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/debug.dart", 26, 10, "() {if (debugPrint != debugPrintOverride || debugDefaultTargetPlatformOverride != null) throw new FlutterError(reason); return true;}()");
    return true;
  };
  dart.defineLazy(src__foundation__debug, {
    /*src__foundation__debug.debugInstrumentationEnabled*/get debugInstrumentationEnabled() {
      return false;
    },
    set debugInstrumentationEnabled(_) {}
  });
  src__foundation__debug.debugInstrumentAction = function(T, description, action) {
    let instrument = false;
    if (!dart.test(dart.fn(() => {
      instrument = src__foundation__debug.debugInstrumentationEnabled;
      return true;
    }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/debug.dart", 55, 10, "() {instrument = debugInstrumentationEnabled; return true;}()");
    if (dart.test(instrument)) {
      let stopwatch = new core.Stopwatch.new();
      stopwatch.start();
      return action().whenComplete(dart.fn(() => {
        stopwatch.stop();
        src__foundation__print.debugPrint("Action \"" + dart.str(description) + "\" took " + dart.str(stopwatch.elapsed));
      }, VoidToNull()));
    } else {
      return action();
    }
  };
  dart.defineLazy(src__foundation__debug, {
    /*src__foundation__debug.timelineWhitelistArguments*/get timelineWhitelistArguments() {
      return dart.constMap(core.String, core.String, ["mode", "basic"]);
    }
  });
  const _lockCount = dart.privateName(src__foundation__binding, "_lockCount");
  const _postExtensionStateChangedEvent = dart.privateName(src__foundation__binding, "_postExtensionStateChangedEvent");
  src__foundation__binding.BindingBase = class BindingBase extends core.Object {
    get window() {
      return ui$.window;
    }
    initInstances() {
      if (!!dart.test(src__foundation__binding.BindingBase._debugInitialized)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/binding.dart", 103, 12, "!_debugInitialized");
      if (!dart.test(dart.fn(() => {
        src__foundation__binding.BindingBase._debugInitialized = true;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/binding.dart", 104, 12, "() {_debugInitialized = true; return true;}()");
    }
    initServiceExtensions() {
      if (!!dart.test(src__foundation__binding.BindingBase._debugServiceExtensionsRegistered)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/binding.dart", 131, 12, "!_debugServiceExtensionsRegistered");
      if (!dart.test(dart.fn(() => {
        this.registerSignalServiceExtension({name: "reassemble", callback: dart.bind(this, 'reassembleApplication')});
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/binding.dart", 133, 12, "() {registerSignalServiceExtension(name: 'reassemble', callback: reassembleApplication); return true;}()");
      if (!false && !true) {
        this.registerSignalServiceExtension({name: "exit", callback: dart.fn(src__foundation__binding._exitApplication, VoidToFutureOfvoid())});
        this.registerServiceExtension({name: "saveCompilationTrace", callback: dart.fn(parameters => async.async(MapOfString$dynamic(), function*() {
            return new (IdentityMapOfString$dynamic()).from(["value", ui$.saveCompilationTrace()]);
          }), MapOfString$StringToFutureOfMapOfString$dynamic())});
      }
      if (!dart.test(dart.fn(() => {
        if (true) return true;
        let platformOverrideExtensionName = "platformOverride";
        this.registerServiceExtension({name: platformOverrideExtensionName, callback: dart.fn(parameters => async.async(MapOfString$dynamic(), (function*() {
            if (dart.test(parameters[$containsKey]("value"))) {
              switch (parameters[$_get]("value")) {
                case "android":
                {
                  src__foundation__platform.debugDefaultTargetPlatformOverride = src__foundation__platform.TargetPlatform.android;
                  break;
                }
                case "iOS":
                {
                  src__foundation__platform.debugDefaultTargetPlatformOverride = src__foundation__platform.TargetPlatform.iOS;
                  break;
                }
                case "fuchsia":
                {
                  src__foundation__platform.debugDefaultTargetPlatformOverride = src__foundation__platform.TargetPlatform.fuchsia;
                  break;
                }
                case "default":
                default:
                {
                  src__foundation__platform.debugDefaultTargetPlatformOverride = null;
                }
              }
              this[_postExtensionStateChangedEvent](platformOverrideExtensionName, dart.toString(src__foundation__platform.defaultTargetPlatform)[$substring]((dart.str(dart.wrapType(src__foundation__platform.TargetPlatform)) + ".").length));
              yield this.reassembleApplication();
            }
            return new (IdentityMapOfString$dynamic()).from(["value", dart.toString(src__foundation__platform.defaultTargetPlatform)[$substring]((dart.str(dart.wrapType(src__foundation__platform.TargetPlatform)) + ".").length)]);
          }).bind(this)), MapOfString$StringToFutureOfMapOfString$dynamic())});
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/binding.dart", 156, 12, "() {if (ui.isWeb) return true; const String platformOverrideExtensionName = 'platformOverride'; registerServiceExtension(name: platformOverrideExtensionName, callback: (Map<String, String> parameters) async {if (parameters.containsKey('value')) {switch (parameters['value']) {case 'android': debugDefaultTargetPlatformOverride = TargetPlatform.android; break; case 'iOS': debugDefaultTargetPlatformOverride = TargetPlatform.iOS; break; case 'fuchsia': debugDefaultTargetPlatformOverride = TargetPlatform.fuchsia; break; case 'default':  default: debugDefaultTargetPlatformOverride = null;} _postExtensionStateChangedEvent(platformOverrideExtensionName, defaultTargetPlatform.toString().substring('$TargetPlatform.'.length)); await reassembleApplication();} return <String, dynamic>{'value' : defaultTargetPlatform.toString().substring('$TargetPlatform.'.length)};}); return true;}()");
      if (!dart.test(dart.fn(() => {
        src__foundation__binding.BindingBase._debugServiceExtensionsRegistered = true;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/binding.dart", 195, 12, "() {_debugServiceExtensionsRegistered = true; return true;}()");
    }
    get locked() {
      return dart.notNull(this[_lockCount]) > 0;
    }
    lockEvents(callback) {
      developer.Timeline.startSync("Lock events");
      if (!(callback != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/binding.dart", 224, 12, "callback != null");
      this[_lockCount] = dart.notNull(this[_lockCount]) + 1;
      let future = callback();
      if (!(future != null)) dart.assertFailed("The lockEvents() callback returned null; it should return a Future<void> that completes when the lock is to expire.", "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/binding.dart", 227, 12, "future != null");
      future.whenComplete(dart.fn(() => {
        this[_lockCount] = dart.notNull(this[_lockCount]) - 1;
        if (!dart.test(this.locked)) {
          developer.Timeline.finishSync();
          this.unlocked();
        }
      }, VoidToNull()));
      return future;
    }
    unlocked() {
      if (!!dart.test(this.locked)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/binding.dart", 245, 12, "!locked");
    }
    reassembleApplication() {
      return this.lockEvents(dart.bind(this, 'performReassemble'));
    }
    performReassemble() {
      src__foundation__assertions.FlutterError.resetErrorCount();
      return FutureOfvoid().value();
    }
    registerSignalServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let callback = opts && 'callback' in opts ? opts.callback : null;
      if (!(name != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/binding.dart", 299, 12, "name != null");
      if (!(callback != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/binding.dart", 300, 12, "callback != null");
      this.registerServiceExtension({name: name, callback: dart.fn(parameters => async.async(MapOfString$dynamic(), function*() {
          yield callback();
          return new (IdentityMapOfString$dynamic()).new();
        }), MapOfString$StringToFutureOfMapOfString$dynamic())});
    }
    registerBoolServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let getter = opts && 'getter' in opts ? opts.getter : null;
      let setter = opts && 'setter' in opts ? opts.setter : null;
      if (!(name != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/binding.dart", 330, 12, "name != null");
      if (!(getter != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/binding.dart", 331, 12, "getter != null");
      if (!(setter != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/binding.dart", 332, 12, "setter != null");
      this.registerServiceExtension({name: name, callback: dart.fn(parameters => async.async(MapOfString$dynamic(), (function*() {
          if (dart.test(parameters[$containsKey]("enabled"))) {
            yield setter(parameters[$_get]("enabled") === "true");
            this[_postExtensionStateChangedEvent](name, dart.test(yield getter()) ? "true" : "false");
          }
          return new (IdentityMapOfString$dynamic()).from(["enabled", dart.test(yield getter()) ? "true" : "false"]);
        }).bind(this)), MapOfString$StringToFutureOfMapOfString$dynamic())});
    }
    registerNumericServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let getter = opts && 'getter' in opts ? opts.getter : null;
      let setter = opts && 'setter' in opts ? opts.setter : null;
      if (!(name != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/binding.dart", 365, 12, "name != null");
      if (!(getter != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/binding.dart", 366, 12, "getter != null");
      if (!(setter != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/binding.dart", 367, 12, "setter != null");
      this.registerServiceExtension({name: name, callback: dart.fn(parameters => async.async(MapOfString$dynamic(), (function*() {
          if (dart.test(parameters[$containsKey](name))) {
            yield setter(core.double.parse(parameters[$_get](name)));
            this[_postExtensionStateChangedEvent](name, dart.toString(yield getter()));
          }
          return new (IdentityMapOfString$dynamic()).from([name, dart.toString(yield getter())]);
        }).bind(this)), MapOfString$StringToFutureOfMapOfString$dynamic())});
    }
    [_postExtensionStateChangedEvent](name, value) {
      this.postEvent("Flutter.ServiceExtensionStateChanged", new (IdentityMapOfString$dynamic()).from(["extension", "ext.flutter." + dart.str(name), "value", value]));
    }
    postEvent(eventKind, eventData) {
      developer.postEvent(eventKind, eventData);
    }
    registerStringServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let getter = opts && 'getter' in opts ? opts.getter : null;
      let setter = opts && 'setter' in opts ? opts.setter : null;
      if (!(name != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/binding.dart", 427, 12, "name != null");
      if (!(getter != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/binding.dart", 428, 12, "getter != null");
      if (!(setter != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/binding.dart", 429, 12, "setter != null");
      this.registerServiceExtension({name: name, callback: dart.fn(parameters => async.async(MapOfString$dynamic(), (function*() {
          if (dart.test(parameters[$containsKey]("value"))) {
            yield setter(parameters[$_get]("value"));
            this[_postExtensionStateChangedEvent](name, yield getter());
          }
          return new (IdentityMapOfString$dynamic()).from(["value", (yield getter())]);
        }).bind(this)), MapOfString$StringToFutureOfMapOfString$dynamic())});
    }
    registerServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let callback = opts && 'callback' in opts ? opts.callback : null;
      if (!(name != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/binding.dart", 498, 12, "name != null");
      if (!(callback != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/binding.dart", 499, 12, "callback != null");
      let methodName = "ext.flutter." + dart.str(name);
      developer.registerExtension(methodName, dart.fn((method, parameters) => async.async(developer.ServiceExtensionResponse, function*() {
        if (!(method === methodName)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/binding.dart", 503, 14, "method == methodName");
        if (!dart.test(dart.fn(() => {
          if (dart.test(src__foundation__debug.debugInstrumentationEnabled)) src__foundation__print.debugPrint("service extension method received: " + dart.str(method) + "(" + dart.str(parameters) + ")");
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/binding.dart", 504, 14, "() {if (debugInstrumentationEnabled) debugPrint('service extension method received: $method($parameters)'); return true;}()");
        yield src__foundation__debug.debugInstrumentAction(dart.void, "Wait for outer event loop", dart.fn(() => FutureOfvoid().delayed(core.Duration.zero), VoidToFutureOfvoid()));
        let caughtException = null;
        let caughtStack = null;
        let result = null;
        try {
          result = (yield callback(parameters));
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          caughtException = exception;
          caughtStack = stack;
        }
        if (caughtException == null) {
          result[$_set]("type", "_extensionType");
          result[$_set]("method", method);
          return new developer.ServiceExtensionResponse.result(convert.json.encode(result));
        } else {
          src__foundation__assertions.FlutterError.reportError(new src__foundation__assertions.FlutterErrorDetails.new({exception: caughtException, stack: caughtStack, context: new src__foundation__assertions.ErrorDescription.new("during a service extension callback for \"" + dart.str(method) + "\"")}));
          return new developer.ServiceExtensionResponse.error(developer.ServiceExtensionResponse.extensionError, convert.json.encode(new (IdentityMapOfString$String()).from(["exception", dart.toString(caughtException), "stack", dart.toString(caughtStack), "method", method])));
        }
      }), StringAndMapOfString$StringToFutureOfServiceExtensionResponse()));
    }
    toString() {
      return "<" + dart.str(this[$runtimeType]) + ">";
    }
  };
  (src__foundation__binding.BindingBase.new = function() {
    this[_lockCount] = 0;
    developer.Timeline.startSync("Framework initialization");
    if (!!dart.test(src__foundation__binding.BindingBase._debugInitialized)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/binding.dart", 58, 12, "!_debugInitialized");
    this.initInstances();
    if (!dart.test(src__foundation__binding.BindingBase._debugInitialized)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/binding.dart", 60, 12, "_debugInitialized");
    if (!!dart.test(src__foundation__binding.BindingBase._debugServiceExtensionsRegistered)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/binding.dart", 62, 12, "!_debugServiceExtensionsRegistered");
    this.initServiceExtensions();
    if (!dart.test(src__foundation__binding.BindingBase._debugServiceExtensionsRegistered)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/binding.dart", 64, 12, "_debugServiceExtensionsRegistered");
    developer.postEvent("Flutter.FrameworkInitialization", new (IdentityMapOfString$String()).new());
    developer.Timeline.finishSync();
  }).prototype = src__foundation__binding.BindingBase.prototype;
  dart.addTypeTests(src__foundation__binding.BindingBase);
  dart.setMethodSignature(src__foundation__binding.BindingBase, () => ({
    __proto__: dart.getMethods(src__foundation__binding.BindingBase.__proto__),
    initInstances: dart.fnType(dart.void, []),
    initServiceExtensions: dart.fnType(dart.void, []),
    lockEvents: dart.fnType(async.Future$(dart.void), [dart.fnType(async.Future$(dart.void), [])]),
    unlocked: dart.fnType(dart.void, []),
    reassembleApplication: dart.fnType(async.Future$(dart.void), []),
    performReassemble: dart.fnType(async.Future$(dart.void), []),
    registerSignalServiceExtension: dart.fnType(dart.void, [], {name: core.String, callback: dart.fnType(async.Future$(dart.void), [])}),
    registerBoolServiceExtension: dart.fnType(dart.void, [], {name: core.String, getter: dart.fnType(async.Future$(core.bool), []), setter: dart.fnType(async.Future$(dart.void), [core.bool])}),
    registerNumericServiceExtension: dart.fnType(dart.void, [], {name: core.String, getter: dart.fnType(async.Future$(core.double), []), setter: dart.fnType(async.Future$(dart.void), [core.double])}),
    [_postExtensionStateChangedEvent]: dart.fnType(dart.void, [core.String, dart.dynamic]),
    postEvent: dart.fnType(dart.void, [core.String, core.Map$(core.String, dart.dynamic)]),
    registerStringServiceExtension: dart.fnType(dart.void, [], {name: core.String, getter: dart.fnType(async.Future$(core.String), []), setter: dart.fnType(async.Future$(dart.void), [core.String])}),
    registerServiceExtension: dart.fnType(dart.void, [], {name: core.String, callback: dart.fnType(async.Future$(core.Map$(core.String, dart.dynamic)), [core.Map$(core.String, core.String)])})
  }));
  dart.setGetterSignature(src__foundation__binding.BindingBase, () => ({
    __proto__: dart.getGetters(src__foundation__binding.BindingBase.__proto__),
    window: ui$.Window,
    locked: core.bool
  }));
  dart.setLibraryUri(src__foundation__binding.BindingBase, "package:flutter_web/src/foundation/binding.dart");
  dart.setFieldSignature(src__foundation__binding.BindingBase, () => ({
    __proto__: dart.getFields(src__foundation__binding.BindingBase.__proto__),
    [_lockCount]: dart.fieldType(core.int)
  }));
  dart.defineExtensionMethods(src__foundation__binding.BindingBase, ['toString']);
  dart.defineLazy(src__foundation__binding.BindingBase, {
    /*src__foundation__binding.BindingBase._debugInitialized*/get _debugInitialized() {
      return false;
    },
    set _debugInitialized(_) {},
    /*src__foundation__binding.BindingBase._debugServiceExtensionsRegistered*/get _debugServiceExtensionsRegistered() {
      return false;
    },
    set _debugServiceExtensionsRegistered(_) {}
  });
  src__foundation__binding._exitApplication = function() {
    return async.async(dart.void, function* _exitApplication() {
      io$.exit(0);
    });
  };
  dart.defineLazy(src__foundation__bitfield, {
    /*src__foundation__bitfield.kMaxUnsignedSMI*/get kMaxUnsignedSMI() {
      return -1;
    }
  });
  const _length = dart.privateName(src__foundation__bitfield, "_length");
  const _bits = dart.privateName(src__foundation__bitfield, "_bits");
  const _is_BitField_default = Symbol('_is_BitField_default');
  src__foundation__bitfield.BitField$ = dart.generic(T => {
    class BitField extends core.Object {
      _get(index) {
        T._check(index);
        if (!dart.dassert(dart.dsend(dart.dload(index, 'index'), '<', [this[_length]]))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/bitfield.dart", 51, 12, "index.index < _length");
        return (dart.notNull(this[_bits]) & (1)[$leftShift](core.int._check(dart.dload(index, 'index')))) >>> 0 > 0;
      }
      _set(index, value) {
        T._check(index);
        if (!dart.dassert(dart.dsend(dart.dload(index, 'index'), '<', [this[_length]]))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/bitfield.dart", 60, 12, "index.index < _length");
        if (dart.test(value))
          this[_bits] = (dart.notNull(this[_bits]) | (1)[$leftShift](core.int._check(dart.dload(index, 'index')))) >>> 0;
        else
          this[_bits] = (dart.notNull(this[_bits]) & ~(1)[$leftShift](core.int._check(dart.dload(index, 'index')))) >>> 0;
        return value;
      }
      reset(value) {
        if (value === void 0) value = false;
        this[_bits] = dart.test(value) ? -1 : 0;
      }
    }
    (BitField.new = function(length) {
      this[_length] = length;
      if (!(dart.notNull(length) <= 62)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/bitfield.dart", 28, 16, "_length <= _smiBits");
      this[_bits] = 0;
    }).prototype = BitField.prototype;
    (BitField.filled = function(length, value) {
      this[_length] = length;
      if (!(dart.notNull(length) <= 62)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/bitfield.dart", 38, 16, "_length <= _smiBits");
      this[_bits] = dart.test(value) ? -1 : 0;
    }).prototype = BitField.prototype;
    dart.addTypeTests(BitField);
    BitField.prototype[_is_BitField_default] = true;
    dart.setMethodSignature(BitField, () => ({
      __proto__: dart.getMethods(BitField.__proto__),
      _get: dart.fnType(core.bool, [core.Object]),
      _set: dart.fnType(dart.void, [core.Object, core.bool]),
      reset: dart.fnType(dart.void, [], [core.bool])
    }));
    dart.setLibraryUri(BitField, "package:flutter_web/src/foundation/bitfield.dart");
    dart.setFieldSignature(BitField, () => ({
      __proto__: dart.getFields(BitField.__proto__),
      [_length]: dart.finalFieldType(core.int),
      [_bits]: dart.fieldType(core.int)
    }));
    return BitField;
  });
  src__foundation__bitfield.BitField = src__foundation__bitfield.BitField$();
  dart.defineLazy(src__foundation__bitfield.BitField, {
    /*src__foundation__bitfield.BitField._smiBits*/get _smiBits() {
      return 62;
    },
    /*src__foundation__bitfield.BitField._allZeros*/get _allZeros() {
      return 0;
    },
    /*src__foundation__bitfield.BitField._allOnes*/get _allOnes() {
      return -1;
    }
  });
  dart.addTypeTests(src__foundation__bitfield.BitField, _is_BitField_default);
  const _list = dart.privateName(src__foundation__observer_list, "_list");
  const _isDirty = dart.privateName(src__foundation__observer_list, "_isDirty");
  const _set = dart.privateName(src__foundation__observer_list, "_set");
  const _is_ObserverList_default = Symbol('_is_ObserverList_default');
  src__foundation__observer_list.ObserverList$ = dart.generic(T => {
    let JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    let HashSetOfT = () => (HashSetOfT = dart.constFn(collection.HashSet$(T)))();
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    class ObserverList extends core.Iterable$(T) {
      add(item) {
        T._check(item);
        this[_isDirty] = true;
        this[_list][$add](item);
      }
      remove(item) {
        T._check(item);
        this[_isDirty] = true;
        return this[_list][$remove](item);
      }
      contains(element) {
        if (dart.notNull(this[_list][$length]) < 15) {
          return this[_list][$contains](element);
        }
        if (dart.test(this[_isDirty])) {
          if (this[_set] == null) {
            this[_set] = HashSetOfT().from(this[_list]);
          } else {
            this[_set].clear();
            this[_set].addAll(this[_list]);
          }
          this[_isDirty] = false;
        }
        return this[_set].contains(element);
      }
      get iterator() {
        return this[_list][$iterator];
      }
      get isEmpty() {
        return this[_list][$isEmpty];
      }
      get isNotEmpty() {
        return this[_list][$isNotEmpty];
      }
    }
    (ObserverList.new = function() {
      this[_list] = JSArrayOfT().of([]);
      this[_isDirty] = false;
      this[_set] = null;
      ObserverList.__proto__.new.call(this);
    }).prototype = ObserverList.prototype;
    dart.addTypeTests(ObserverList);
    ObserverList.prototype[_is_ObserverList_default] = true;
    dart.setMethodSignature(ObserverList, () => ({
      __proto__: dart.getMethods(ObserverList.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      remove: dart.fnType(core.bool, [core.Object])
    }));
    dart.setGetterSignature(ObserverList, () => ({
      __proto__: dart.getGetters(ObserverList.__proto__),
      iterator: core.Iterator$(T),
      [$iterator]: core.Iterator$(T)
    }));
    dart.setLibraryUri(ObserverList, "package:flutter_web/src/foundation/observer_list.dart");
    dart.setFieldSignature(ObserverList, () => ({
      __proto__: dart.getFields(ObserverList.__proto__),
      [_list]: dart.finalFieldType(ListOfT()),
      [_isDirty]: dart.fieldType(core.bool),
      [_set]: dart.fieldType(HashSetOfT())
    }));
    dart.defineExtensionMethods(ObserverList, ['contains']);
    dart.defineExtensionAccessors(ObserverList, ['iterator', 'isEmpty', 'isNotEmpty']);
    return ObserverList;
  });
  src__foundation__observer_list.ObserverList = src__foundation__observer_list.ObserverList$();
  dart.addTypeTests(src__foundation__observer_list.ObserverList, _is_ObserverList_default);
  src__foundation__change_notifier.Listenable = class Listenable extends core.Object {
    static merge(listenables) {
      return new src__foundation__change_notifier._MergingListenable.new(listenables);
    }
  };
  (src__foundation__change_notifier.Listenable.new = function() {
  }).prototype = src__foundation__change_notifier.Listenable.prototype;
  dart.addTypeTests(src__foundation__change_notifier.Listenable);
  dart.setLibraryUri(src__foundation__change_notifier.Listenable, "package:flutter_web/src/foundation/change_notifier.dart");
  const _is_ValueListenable_default = Symbol('_is_ValueListenable_default');
  src__foundation__change_notifier.ValueListenable$ = dart.generic(T => {
    class ValueListenable extends src__foundation__change_notifier.Listenable {}
    (ValueListenable.new = function() {
      ValueListenable.__proto__.new.call(this);
    }).prototype = ValueListenable.prototype;
    dart.addTypeTests(ValueListenable);
    ValueListenable.prototype[_is_ValueListenable_default] = true;
    dart.setLibraryUri(ValueListenable, "package:flutter_web/src/foundation/change_notifier.dart");
    return ValueListenable;
  });
  src__foundation__change_notifier.ValueListenable = src__foundation__change_notifier.ValueListenable$();
  dart.addTypeTests(src__foundation__change_notifier.ValueListenable, _is_ValueListenable_default);
  const _listeners = dart.privateName(src__foundation__change_notifier, "_listeners");
  const _debugAssertNotDisposed = dart.privateName(src__foundation__change_notifier, "_debugAssertNotDisposed");
  src__foundation__change_notifier.ChangeNotifier = class ChangeNotifier extends core.Object {
    [_debugAssertNotDisposed]() {
      if (!dart.test(dart.fn(() => {
        if (this[_listeners] == null) {
          dart.throw(src__foundation__assertions.FlutterError.new("A " + dart.str(this[$runtimeType]) + " was used after being disposed.\n" + ("Once you have called dispose() on a " + dart.str(this[$runtimeType]) + ", it can no longer be used.")));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/change_notifier.dart", 104, 12, "() {if (_listeners == null) {throw FlutterError('A $runtimeType was used after being disposed.\\n' 'Once you have called dispose() on a $runtimeType, it can no longer be used.');} return true;}()");
      return true;
    }
    get hasListeners() {
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/change_notifier.dart", 131, 12, "_debugAssertNotDisposed()");
      return this[_listeners].isNotEmpty;
    }
    addListener(listener) {
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/change_notifier.dart", 140, 12, "_debugAssertNotDisposed()");
      this[_listeners].add(listener);
    }
    removeListener(listener) {
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/change_notifier.dart", 165, 12, "_debugAssertNotDisposed()");
      this[_listeners].remove(listener);
    }
    dispose() {
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/change_notifier.dart", 177, 12, "_debugAssertNotDisposed()");
      this[_listeners] = null;
    }
    notifyListeners() {
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/change_notifier.dart", 199, 12, "_debugAssertNotDisposed()");
      if (this[_listeners] != null) {
        let localListeners = ListOfVoidCallback().from(this[_listeners]);
        for (let listener of localListeners) {
          try {
            if (dart.test(this[_listeners].contains(listener))) listener();
          } catch (e) {
            let exception = dart.getThrown(e);
            let stack = dart.stackTrace(e);
            src__foundation__assertions.FlutterError.reportError(new src__foundation__assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "foundation library", context: new src__foundation__assertions.ErrorDescription.new("while dispatching notifications for " + dart.str(this[$runtimeType])), informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsPropertyOfChangeNotifier()).new((function*() {
                yield new (DiagnosticsPropertyOfChangeNotifier()).new("The " + dart.str(this[$runtimeType]) + " sending notification was", this, {style: src__foundation__diagnostics.DiagnosticsTreeStyle.errorProperty});
              }).bind(this)), VoidToIterableOfDiagnosticsPropertyOfChangeNotifier())}));
          }
        }
      }
    }
  };
  (src__foundation__change_notifier.ChangeNotifier.new = function() {
    this[_listeners] = new (ObserverListOfVoidCallback()).new();
  }).prototype = src__foundation__change_notifier.ChangeNotifier.prototype;
  dart.addTypeTests(src__foundation__change_notifier.ChangeNotifier);
  src__foundation__change_notifier.ChangeNotifier[dart.implements] = () => [src__foundation__change_notifier.Listenable];
  dart.setMethodSignature(src__foundation__change_notifier.ChangeNotifier, () => ({
    __proto__: dart.getMethods(src__foundation__change_notifier.ChangeNotifier.__proto__),
    [_debugAssertNotDisposed]: dart.fnType(core.bool, []),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    dispose: dart.fnType(dart.void, []),
    notifyListeners: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__foundation__change_notifier.ChangeNotifier, () => ({
    __proto__: dart.getGetters(src__foundation__change_notifier.ChangeNotifier.__proto__),
    hasListeners: core.bool
  }));
  dart.setLibraryUri(src__foundation__change_notifier.ChangeNotifier, "package:flutter_web/src/foundation/change_notifier.dart");
  dart.setFieldSignature(src__foundation__change_notifier.ChangeNotifier, () => ({
    __proto__: dart.getFields(src__foundation__change_notifier.ChangeNotifier.__proto__),
    [_listeners]: dart.fieldType(ObserverListOfVoidCallback())
  }));
  const _children$ = dart.privateName(src__foundation__change_notifier, "_children");
  src__foundation__change_notifier._MergingListenable = class _MergingListenable extends src__foundation__change_notifier.Listenable {
    addListener(listener) {
      for (let child of this[_children$]) {
        child == null ? null : child.addListener(listener);
      }
    }
    removeListener(listener) {
      for (let child of this[_children$]) {
        child == null ? null : child.removeListener(listener);
      }
    }
    toString() {
      return "Listenable.merge([" + dart.str(this[_children$][$join](", ")) + "])";
    }
  };
  (src__foundation__change_notifier._MergingListenable.new = function(children) {
    this[_children$] = children;
    src__foundation__change_notifier._MergingListenable.__proto__.new.call(this);
  }).prototype = src__foundation__change_notifier._MergingListenable.prototype;
  dart.addTypeTests(src__foundation__change_notifier._MergingListenable);
  dart.setMethodSignature(src__foundation__change_notifier._MergingListenable, () => ({
    __proto__: dart.getMethods(src__foundation__change_notifier._MergingListenable.__proto__),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])])
  }));
  dart.setLibraryUri(src__foundation__change_notifier._MergingListenable, "package:flutter_web/src/foundation/change_notifier.dart");
  dart.setFieldSignature(src__foundation__change_notifier._MergingListenable, () => ({
    __proto__: dart.getFields(src__foundation__change_notifier._MergingListenable.__proto__),
    [_children$]: dart.finalFieldType(ListOfListenable())
  }));
  dart.defineExtensionMethods(src__foundation__change_notifier._MergingListenable, ['toString']);
  const _value$ = dart.privateName(src__foundation__change_notifier, "_value");
  const _is_ValueNotifier_default = Symbol('_is_ValueNotifier_default');
  src__foundation__change_notifier.ValueNotifier$ = dart.generic(T => {
    let ValueListenableOfT = () => (ValueListenableOfT = dart.constFn(src__foundation__change_notifier.ValueListenable$(T)))();
    class ValueNotifier extends src__foundation__change_notifier.ChangeNotifier {
      get value() {
        return this[_value$];
      }
      set value(newValue) {
        T._check(newValue);
        if (dart.equals(this[_value$], newValue)) return;
        this[_value$] = newValue;
        this.notifyListeners();
      }
      toString() {
        return dart.str(src__foundation__diagnostics.describeIdentity(this)) + "(" + dart.str(this.value) + ")";
      }
    }
    (ValueNotifier.new = function(value) {
      this[_value$] = value;
      ValueNotifier.__proto__.new.call(this);
    }).prototype = ValueNotifier.prototype;
    dart.addTypeTests(ValueNotifier);
    ValueNotifier.prototype[_is_ValueNotifier_default] = true;
    ValueNotifier[dart.implements] = () => [ValueListenableOfT()];
    dart.setMethodSignature(ValueNotifier, () => ({
      __proto__: dart.getMethods(ValueNotifier.__proto__),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, [])
    }));
    dart.setGetterSignature(ValueNotifier, () => ({
      __proto__: dart.getGetters(ValueNotifier.__proto__),
      value: T
    }));
    dart.setSetterSignature(ValueNotifier, () => ({
      __proto__: dart.getSetters(ValueNotifier.__proto__),
      value: T
    }));
    dart.setLibraryUri(ValueNotifier, "package:flutter_web/src/foundation/change_notifier.dart");
    dart.setFieldSignature(ValueNotifier, () => ({
      __proto__: dart.getFields(ValueNotifier.__proto__),
      [_value$]: dart.fieldType(T)
    }));
    dart.defineExtensionMethods(ValueNotifier, ['toString']);
    return ValueNotifier;
  });
  src__foundation__change_notifier.ValueNotifier = src__foundation__change_notifier.ValueNotifier$();
  dart.addTypeTests(src__foundation__change_notifier.ValueNotifier, _is_ValueNotifier_default);
  src__foundation__collections.setEquals = function(T, a, b) {
    if (a == null) return b == null;
    if (b == null || a.length != b.length) return false;
    for (let value of a) {
      if (!dart.test(b.contains(value))) return false;
    }
    return true;
  };
  src__foundation__collections.listEquals = function(T, a, b) {
    if (a == null) return b == null;
    if (b == null || a[$length] != b[$length]) return false;
    for (let index = 0; index < dart.notNull(a[$length]); index = index + 1) {
      if (!dart.equals(a[$_get](index), b[$_get](index))) return false;
    }
    return true;
  };
  src__foundation__key.Key = class Key extends core.Object {
    static new(value) {
      return new (ValueKeyOfString()).new(value);
    }
  };
  (src__foundation__key.Key.empty = function() {
  }).prototype = src__foundation__key.Key.prototype;
  dart.addTypeTests(src__foundation__key.Key);
  dart.setLibraryUri(src__foundation__key.Key, "package:flutter_web/src/foundation/key.dart");
  src__foundation__key.LocalKey = class LocalKey extends src__foundation__key.Key {};
  (src__foundation__key.LocalKey.new = function() {
    src__foundation__key.LocalKey.__proto__.empty.call(this);
  }).prototype = src__foundation__key.LocalKey.prototype;
  dart.addTypeTests(src__foundation__key.LocalKey);
  dart.setLibraryUri(src__foundation__key.LocalKey, "package:flutter_web/src/foundation/key.dart");
  const _is_ValueKey_default = Symbol('_is_ValueKey_default');
  src__foundation__key.ValueKey$ = dart.generic(T => {
    let ValueKeyOfT = () => (ValueKeyOfT = dart.constFn(src__foundation__key.ValueKey$(T)))();
    let _TypeLiteralOfValueKeyOfT = () => (_TypeLiteralOfValueKeyOfT = dart.constFn(src__foundation__key._TypeLiteral$(ValueKeyOfT())))();
    class ValueKey extends src__foundation__key.LocalKey {
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      _equals(other) {
        if (other == null) return false;
        if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
        let typedOther = ValueKeyOfT()._check(other);
        return dart.equals(this.value, typedOther.value);
      }
      get hashCode() {
        return ui$.hashValues(this[$runtimeType], this.value);
      }
      toString() {
        let valueString = dart.equals(dart.wrapType(T), dart.wrapType(core.String)) ? "<'" + dart.str(this.value) + "'>" : "<" + dart.str(this.value) + ">";
        if (dart.equals(this[$runtimeType], new (_TypeLiteralOfValueKeyOfT()).new().type)) return "[" + valueString + "]";
        return "[" + dart.str(dart.wrapType(T)) + " " + valueString + "]";
      }
    }
    (ValueKey.new = function(value) {
      this[value$] = value;
      ValueKey.__proto__.new.call(this);
    }).prototype = ValueKey.prototype;
    dart.addTypeTests(ValueKey);
    ValueKey.prototype[_is_ValueKey_default] = true;
    const value$ = Symbol("ValueKey.value");
    dart.setMethodSignature(ValueKey, () => ({
      __proto__: dart.getMethods(ValueKey.__proto__),
      _equals: dart.fnType(core.bool, [dart.dynamic]),
      [$_equals]: dart.fnType(core.bool, [dart.dynamic]),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, [])
    }));
    dart.setGetterSignature(ValueKey, () => ({
      __proto__: dart.getGetters(ValueKey.__proto__),
      hashCode: core.int,
      [$hashCode]: core.int
    }));
    dart.setLibraryUri(ValueKey, "package:flutter_web/src/foundation/key.dart");
    dart.setFieldSignature(ValueKey, () => ({
      __proto__: dart.getFields(ValueKey.__proto__),
      value: dart.finalFieldType(T)
    }));
    dart.defineExtensionMethods(ValueKey, ['_equals', 'toString']);
    dart.defineExtensionAccessors(ValueKey, ['hashCode']);
    return ValueKey;
  });
  src__foundation__key.ValueKey = src__foundation__key.ValueKey$();
  dart.addTypeTests(src__foundation__key.ValueKey, _is_ValueKey_default);
  const _is__TypeLiteral_default = Symbol('_is__TypeLiteral_default');
  src__foundation__key._TypeLiteral$ = dart.generic(T => {
    class _TypeLiteral extends core.Object {
      get type() {
        return dart.wrapType(T);
      }
    }
    (_TypeLiteral.new = function() {
    }).prototype = _TypeLiteral.prototype;
    dart.addTypeTests(_TypeLiteral);
    _TypeLiteral.prototype[_is__TypeLiteral_default] = true;
    dart.setGetterSignature(_TypeLiteral, () => ({
      __proto__: dart.getGetters(_TypeLiteral.__proto__),
      type: core.Type
    }));
    dart.setLibraryUri(_TypeLiteral, "package:flutter_web/src/foundation/key.dart");
    return _TypeLiteral;
  });
  src__foundation__key._TypeLiteral = src__foundation__key._TypeLiteral$();
  dart.addTypeTests(src__foundation__key._TypeLiteral, _is__TypeLiteral_default);
  src__foundation__isolates.compute = function(Q, R, callback, message, opts) {
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    return async.async(R, function* compute() {
      return callback(message);
    });
  };
  src__foundation__licenses.LicenseParagraph = class LicenseParagraph extends core.Object {
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    get indent() {
      return this[indent$];
    }
    set indent(value) {
      super.indent = value;
    }
  };
  (src__foundation__licenses.LicenseParagraph.new = function(text, indent) {
    this[text$] = text;
    this[indent$] = indent;
  }).prototype = src__foundation__licenses.LicenseParagraph.prototype;
  dart.addTypeTests(src__foundation__licenses.LicenseParagraph);
  const text$ = Symbol("LicenseParagraph.text");
  const indent$ = Symbol("LicenseParagraph.indent");
  dart.setLibraryUri(src__foundation__licenses.LicenseParagraph, "package:flutter_web/src/foundation/licenses.dart");
  dart.setFieldSignature(src__foundation__licenses.LicenseParagraph, () => ({
    __proto__: dart.getFields(src__foundation__licenses.LicenseParagraph.__proto__),
    text: dart.finalFieldType(core.String),
    indent: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(src__foundation__licenses.LicenseParagraph, {
    /*src__foundation__licenses.LicenseParagraph.centeredIndent*/get centeredIndent() {
      return -1;
    }
  });
  src__foundation__licenses.LicenseEntry = class LicenseEntry extends core.Object {};
  (src__foundation__licenses.LicenseEntry.new = function() {
  }).prototype = src__foundation__licenses.LicenseEntry.prototype;
  dart.addTypeTests(src__foundation__licenses.LicenseEntry);
  dart.setLibraryUri(src__foundation__licenses.LicenseEntry, "package:flutter_web/src/foundation/licenses.dart");
  src__foundation__licenses._LicenseEntryWithLineBreaksParserState = class _LicenseEntryWithLineBreaksParserState extends core.Object {
    toString() {
      return {
        0: "_LicenseEntryWithLineBreaksParserState.beforeParagraph",
        1: "_LicenseEntryWithLineBreaksParserState.inParagraph"
      }[this.index];
    }
  };
  (src__foundation__licenses._LicenseEntryWithLineBreaksParserState.new = function(x) {
    this.index = x;
  }).prototype = src__foundation__licenses._LicenseEntryWithLineBreaksParserState.prototype;
  dart.addTypeTests(src__foundation__licenses._LicenseEntryWithLineBreaksParserState);
  dart.setLibraryUri(src__foundation__licenses._LicenseEntryWithLineBreaksParserState, "package:flutter_web/src/foundation/licenses.dart");
  dart.setFieldSignature(src__foundation__licenses._LicenseEntryWithLineBreaksParserState, () => ({
    __proto__: dart.getFields(src__foundation__licenses._LicenseEntryWithLineBreaksParserState.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__foundation__licenses._LicenseEntryWithLineBreaksParserState, ['toString']);
  src__foundation__licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph = dart.const(new src__foundation__licenses._LicenseEntryWithLineBreaksParserState.new(0));
  src__foundation__licenses._LicenseEntryWithLineBreaksParserState.inParagraph = dart.const(new src__foundation__licenses._LicenseEntryWithLineBreaksParserState.new(1));
  src__foundation__licenses._LicenseEntryWithLineBreaksParserState.values = dart.constList([src__foundation__licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph, src__foundation__licenses._LicenseEntryWithLineBreaksParserState.inParagraph], src__foundation__licenses._LicenseEntryWithLineBreaksParserState);
  src__foundation__licenses.LicenseEntryWithLineBreaks = class LicenseEntryWithLineBreaks extends src__foundation__licenses.LicenseEntry {
    get packages() {
      return this[packages$];
    }
    set packages(value) {
      super.packages = value;
    }
    get text() {
      return this[text$0];
    }
    set text(value) {
      super.text = value;
    }
    get paragraphs() {
      return new (SyncIterableOfLicenseParagraph()).new((function* paragraphs() {
        let lineStart = 0;
        let currentPosition = 0;
        let lastLineIndent = 0;
        let currentLineIndent = 0;
        let currentParagraphIndentation = null;
        let state = src__foundation__licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
        let lines = JSArrayOfString().of([]);
        const addLine = () => {
          if (!(lineStart < currentPosition)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/licenses.dart", 152, 14, "lineStart < currentPosition");
          lines[$add](this.text[$substring](lineStart, currentPosition));
        };
        dart.fn(addLine, VoidTovoid());
        function getParagraph() {
          if (!dart.test(lines[$isNotEmpty])) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/licenses.dart", 157, 14, "lines.isNotEmpty");
          if (!(currentParagraphIndentation != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/licenses.dart", 158, 14, "currentParagraphIndentation != null");
          let result = new src__foundation__licenses.LicenseParagraph.new(lines[$join](" "), currentParagraphIndentation);
          if (!(result.text[$trimLeft]() === result.text)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/licenses.dart", 161, 14, "result.text.trimLeft() == result.text");
          if (!result.text[$isNotEmpty]) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/licenses.dart", 162, 14, "result.text.isNotEmpty");
          lines[$clear]();
          return result;
        }
        dart.fn(getParagraph, VoidToLicenseParagraph());
        while (currentPosition < this.text.length) {
          switch (state) {
            case src__foundation__licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph:
            {
              if (!(lineStart === currentPosition)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/licenses.dart", 170, 18, "lineStart == currentPosition");
              switch (this.text[$_get](currentPosition)) {
                case " ":
                {
                  lineStart = currentPosition + 1;
                  currentLineIndent = currentLineIndent + 1;
                  state = src__foundation__licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
                  break;
                }
                case "\t":
                {
                  lineStart = currentPosition + 1;
                  currentLineIndent = currentLineIndent + 8;
                  state = src__foundation__licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
                  break;
                }
                case "\n":
                case "\f":
                {
                  if (dart.test(lines[$isNotEmpty])) {
                    yield getParagraph();
                  }
                  lastLineIndent = 0;
                  currentLineIndent = 0;
                  currentParagraphIndentation = null;
                  lineStart = currentPosition + 1;
                  state = src__foundation__licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
                  break;
                }
                case "[":
                {
                  currentLineIndent = currentLineIndent + 1;
                  // continue to next case
                }
                default:
                {
                  // Unimplemented case labels: [startParagraph:]
                  if (dart.test(lines[$isNotEmpty]) && currentLineIndent > lastLineIndent) {
                    yield getParagraph();
                    currentParagraphIndentation = null;
                  }
                  if (currentParagraphIndentation == null) {
                    if (currentLineIndent > 10)
                      currentParagraphIndentation = src__foundation__licenses.LicenseParagraph.centeredIndent;
                    else
                      currentParagraphIndentation = (currentLineIndent / 3)[$truncate]();
                  }
                  state = src__foundation__licenses._LicenseEntryWithLineBreaksParserState.inParagraph;
                }
              }
              break;
            }
            case src__foundation__licenses._LicenseEntryWithLineBreaksParserState.inParagraph:
            {
              switch (this.text[$_get](currentPosition)) {
                case "\n":
                {
                  addLine();
                  lastLineIndent = currentLineIndent;
                  currentLineIndent = 0;
                  lineStart = currentPosition + 1;
                  state = src__foundation__licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
                  break;
                }
                case "\f":
                {
                  addLine();
                  yield getParagraph();
                  lastLineIndent = 0;
                  currentLineIndent = 0;
                  currentParagraphIndentation = null;
                  lineStart = currentPosition + 1;
                  state = src__foundation__licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
                  break;
                }
                default:
                {
                  state = src__foundation__licenses._LicenseEntryWithLineBreaksParserState.inParagraph;
                }
              }
              break;
            }
          }
          currentPosition = currentPosition + 1;
        }
        switch (state) {
          case src__foundation__licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph:
          {
            if (dart.test(lines[$isNotEmpty])) {
              yield getParagraph();
            }
            break;
          }
          case src__foundation__licenses._LicenseEntryWithLineBreaksParserState.inParagraph:
          {
            addLine();
            yield getParagraph();
            break;
          }
        }
      }).bind(this));
    }
  };
  (src__foundation__licenses.LicenseEntryWithLineBreaks.new = function(packages, text) {
    this[packages$] = packages;
    this[text$0] = text;
    src__foundation__licenses.LicenseEntryWithLineBreaks.__proto__.new.call(this);
  }).prototype = src__foundation__licenses.LicenseEntryWithLineBreaks.prototype;
  dart.addTypeTests(src__foundation__licenses.LicenseEntryWithLineBreaks);
  const packages$ = Symbol("LicenseEntryWithLineBreaks.packages");
  const text$0 = Symbol("LicenseEntryWithLineBreaks.text");
  dart.setGetterSignature(src__foundation__licenses.LicenseEntryWithLineBreaks, () => ({
    __proto__: dart.getGetters(src__foundation__licenses.LicenseEntryWithLineBreaks.__proto__),
    paragraphs: core.Iterable$(src__foundation__licenses.LicenseParagraph)
  }));
  dart.setLibraryUri(src__foundation__licenses.LicenseEntryWithLineBreaks, "package:flutter_web/src/foundation/licenses.dart");
  dart.setFieldSignature(src__foundation__licenses.LicenseEntryWithLineBreaks, () => ({
    __proto__: dart.getFields(src__foundation__licenses.LicenseEntryWithLineBreaks.__proto__),
    packages: dart.finalFieldType(ListOfString()),
    text: dart.finalFieldType(core.String)
  }));
  src__foundation__licenses.LicenseRegistry = class LicenseRegistry extends core.Object {
    static addLicense(collector) {
      let t = src__foundation__licenses.LicenseRegistry._collectors;
      t == null ? src__foundation__licenses.LicenseRegistry._collectors = JSArrayOfVoidToStreamOfLicenseEntry().of([]) : t;
      src__foundation__licenses.LicenseRegistry._collectors[$add](collector);
    }
    static get licenses() {
      return new (_AsyncStarImplOfLicenseEntry()).new(function* licenses(stream) {
        if (src__foundation__licenses.LicenseRegistry._collectors == null) return;
        for (let collector of src__foundation__licenses.LicenseRegistry._collectors) {
          if (stream.addStream(collector())) return;
          yield;
        }
      }).stream;
    }
  };
  (src__foundation__licenses.LicenseRegistry.__ = function() {
  }).prototype = src__foundation__licenses.LicenseRegistry.prototype;
  dart.addTypeTests(src__foundation__licenses.LicenseRegistry);
  dart.setLibraryUri(src__foundation__licenses.LicenseRegistry, "package:flutter_web/src/foundation/licenses.dart");
  dart.defineLazy(src__foundation__licenses.LicenseRegistry, {
    /*src__foundation__licenses.LicenseRegistry._collectors*/get _collectors() {
      return null;
    },
    set _collectors(_) {}
  });
  const _depth = dart.privateName(src__foundation__node, "_depth");
  const _owner$ = dart.privateName(src__foundation__node, "_owner");
  const _parent = dart.privateName(src__foundation__node, "_parent");
  src__foundation__node.AbstractNode = class AbstractNode extends core.Object {
    get depth() {
      return this[_depth];
    }
    redepthChild(child) {
      if (!dart.equals(child.owner, this.owner)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/node.dart", 52, 12, "child.owner == owner");
      if (dart.notNull(child[_depth]) <= dart.notNull(this[_depth])) {
        child[_depth] = dart.notNull(this[_depth]) + 1;
        child.redepthChildren();
      }
    }
    redepthChildren() {}
    get owner() {
      return this[_owner$];
    }
    get attached() {
      return this[_owner$] != null;
    }
    attach(owner) {
      owner;
      if (!(owner != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/node.dart", 88, 12, "owner != null");
      if (!(this[_owner$] == null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/node.dart", 89, 12, "_owner == null");
      this[_owner$] = owner;
    }
    detach() {
      if (!(this[_owner$] != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/node.dart", 102, 12, "_owner != null");
      this[_owner$] = null;
      if (!(this.parent == null || this.attached == this.parent.attached)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/node.dart", 104, 12, "parent == null || attached == parent.attached");
    }
    get parent() {
      return this[_parent];
    }
    adoptChild(child) {
      src__foundation__node.AbstractNode._check(child);
      if (!(child != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/node.dart", 117, 12, "child != null");
      if (!(child[_parent] == null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/node.dart", 118, 12, "child._parent == null");
      if (!dart.test(dart.fn(() => {
        let node = this;
        while (node.parent != null)
          node = node.parent;
        if (!!dart.equals(node, child)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/node.dart", 122, 14, "node != child");
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/node.dart", 119, 12, "() {AbstractNode node = this; while (node.parent != null) node = node.parent; assert (node != child); return true;}()");
      child[_parent] = this;
      if (dart.test(this.attached)) {
        child.attach(this[_owner$]);
      }
      this.redepthChild(child);
    }
    dropChild(child) {
      src__foundation__node.AbstractNode._check(child);
      if (!(child != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/node.dart", 138, 12, "child != null");
      if (!dart.equals(child[_parent], this)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/node.dart", 139, 12, "child._parent == this");
      if (!(child.attached == this.attached)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/node.dart", 140, 12, "child.attached == attached");
      child[_parent] = null;
      if (dart.test(this.attached)) {
        child.detach();
      }
    }
  };
  (src__foundation__node.AbstractNode.new = function() {
    this[_depth] = 0;
    this[_owner$] = null;
    this[_parent] = null;
  }).prototype = src__foundation__node.AbstractNode.prototype;
  dart.addTypeTests(src__foundation__node.AbstractNode);
  dart.setMethodSignature(src__foundation__node.AbstractNode, () => ({
    __proto__: dart.getMethods(src__foundation__node.AbstractNode.__proto__),
    redepthChild: dart.fnType(dart.void, [src__foundation__node.AbstractNode]),
    redepthChildren: dart.fnType(dart.void, []),
    attach: dart.fnType(dart.void, [core.Object]),
    detach: dart.fnType(dart.void, []),
    adoptChild: dart.fnType(dart.void, [core.Object]),
    dropChild: dart.fnType(dart.void, [core.Object])
  }));
  dart.setGetterSignature(src__foundation__node.AbstractNode, () => ({
    __proto__: dart.getGetters(src__foundation__node.AbstractNode.__proto__),
    depth: core.int,
    owner: core.Object,
    attached: core.bool,
    parent: src__foundation__node.AbstractNode
  }));
  dart.setLibraryUri(src__foundation__node.AbstractNode, "package:flutter_web/src/foundation/node.dart");
  dart.setFieldSignature(src__foundation__node.AbstractNode, () => ({
    __proto__: dart.getFields(src__foundation__node.AbstractNode.__proto__),
    [_depth]: dart.fieldType(core.int),
    [_owner$]: dart.fieldType(core.Object),
    [_parent]: dart.fieldType(src__foundation__node.AbstractNode)
  }));
  dart.defineLazy(src__foundation__profile, {
    /*src__foundation__profile._kReleaseMode*/get _kReleaseMode() {
      return false;
    }
  });
  src__foundation__profile.profile = function(func) {
    if (dart.test(src__foundation__profile._kReleaseMode)) return;
    func();
  };
  const _buffer$ = dart.privateName(src__foundation__serialization, "_buffer");
  const _eightBytes = dart.privateName(src__foundation__serialization, "_eightBytes");
  const _eightBytesAsList = dart.privateName(src__foundation__serialization, "_eightBytesAsList");
  const _alignTo = dart.privateName(src__foundation__serialization, "_alignTo");
  src__foundation__serialization.WriteBuffer = class WriteBuffer extends core.Object {
    putUint8(byte) {
      this[_buffer$].add(byte);
    }
    putUint16(value) {
      this[_eightBytes][$setUint16](0, value, typed_data.Endian.host);
      this[_buffer$].addAll(this[_eightBytesAsList], 0, 2);
    }
    putUint32(value) {
      this[_eightBytes][$setUint32](0, value, typed_data.Endian.host);
      this[_buffer$].addAll(this[_eightBytesAsList], 0, 4);
    }
    putInt32(value) {
      this[_eightBytes][$setInt32](0, value, typed_data.Endian.host);
      this[_buffer$].addAll(this[_eightBytesAsList], 0, 4);
    }
    putInt64(value) {
      this[_eightBytes][$setInt64](0, value, typed_data.Endian.host);
      this[_buffer$].addAll(this[_eightBytesAsList], 0, 8);
    }
    putFloat64(value) {
      this[_alignTo](8);
      this[_eightBytes][$setFloat64](0, value, typed_data.Endian.host);
      this[_buffer$].addAll(this[_eightBytesAsList]);
    }
    putUint8List(list) {
      this[_buffer$].addAll(list);
    }
    putInt32List(list) {
      this[_alignTo](4);
      this[_buffer$].addAll(list[$buffer][$asUint8List](list[$offsetInBytes], 4 * dart.notNull(list[$length])));
    }
    putInt64List(list) {
      this[_alignTo](8);
      this[_buffer$].addAll(list.buffer[$asUint8List](list.offsetInBytes, 8 * dart.notNull(list.length)));
    }
    putFloat64List(list) {
      this[_alignTo](8);
      this[_buffer$].addAll(list[$buffer][$asUint8List](list[$offsetInBytes], 8 * dart.notNull(list[$length])));
    }
    [_alignTo](alignment) {
      let mod = this[_buffer$].length[$modulo](alignment);
      if (mod !== 0) {
        for (let i = 0; i < dart.notNull(alignment) - mod; i++)
          this[_buffer$].add(0);
      }
    }
    done() {
      let result = this[_buffer$].buffer[$asByteData](0, this[_buffer$].lengthInBytes);
      this[_buffer$] = null;
      return result;
    }
  };
  (src__foundation__serialization.WriteBuffer.new = function() {
    this[_buffer$] = null;
    this[_eightBytes] = null;
    this[_eightBytesAsList] = null;
    this[_buffer$] = new typed_buffers$.Uint8Buffer.new();
    this[_eightBytes] = typed_data.ByteData.new(8);
    this[_eightBytesAsList] = this[_eightBytes][$buffer][$asUint8List]();
  }).prototype = src__foundation__serialization.WriteBuffer.prototype;
  dart.addTypeTests(src__foundation__serialization.WriteBuffer);
  dart.setMethodSignature(src__foundation__serialization.WriteBuffer, () => ({
    __proto__: dart.getMethods(src__foundation__serialization.WriteBuffer.__proto__),
    putUint8: dart.fnType(dart.void, [core.int]),
    putUint16: dart.fnType(dart.void, [core.int]),
    putUint32: dart.fnType(dart.void, [core.int]),
    putInt32: dart.fnType(dart.void, [core.int]),
    putInt64: dart.fnType(dart.void, [core.int]),
    putFloat64: dart.fnType(dart.void, [core.double]),
    putUint8List: dart.fnType(dart.void, [typed_data.Uint8List]),
    putInt32List: dart.fnType(dart.void, [typed_data.Int32List]),
    putInt64List: dart.fnType(dart.void, [typed_data.Int64List]),
    putFloat64List: dart.fnType(dart.void, [typed_data.Float64List]),
    [_alignTo]: dart.fnType(dart.void, [core.int]),
    done: dart.fnType(typed_data.ByteData, [])
  }));
  dart.setLibraryUri(src__foundation__serialization.WriteBuffer, "package:flutter_web/src/foundation/serialization.dart");
  dart.setFieldSignature(src__foundation__serialization.WriteBuffer, () => ({
    __proto__: dart.getFields(src__foundation__serialization.WriteBuffer.__proto__),
    [_buffer$]: dart.fieldType(typed_buffers$.Uint8Buffer),
    [_eightBytes]: dart.fieldType(typed_data.ByteData),
    [_eightBytesAsList]: dart.fieldType(typed_data.Uint8List)
  }));
  const _position = dart.privateName(src__foundation__serialization, "_position");
  src__foundation__serialization.ReadBuffer = class ReadBuffer extends core.Object {
    get data() {
      return this[data$];
    }
    set data(value) {
      super.data = value;
    }
    get hasRemaining() {
      return dart.notNull(this[_position]) < dart.notNull(this.data[$lengthInBytes]);
    }
    getUint8() {
      return this.data[$getUint8]((() => {
        let x = this[_position];
        this[_position] = dart.notNull(x) + 1;
        return x;
      })());
    }
    getUint16() {
      let value = this.data[$getUint16](this[_position], typed_data.Endian.host);
      this[_position] = dart.notNull(this[_position]) + 2;
      return value;
    }
    getUint32() {
      let value = this.data[$getUint32](this[_position], typed_data.Endian.host);
      this[_position] = dart.notNull(this[_position]) + 4;
      return value;
    }
    getInt32() {
      let value = this.data[$getInt32](this[_position], typed_data.Endian.host);
      this[_position] = dart.notNull(this[_position]) + 4;
      return value;
    }
    getInt64() {
      let value = this.data[$getInt64](this[_position], typed_data.Endian.host);
      this[_position] = dart.notNull(this[_position]) + 8;
      return value;
    }
    getFloat64() {
      this[_alignTo](8);
      let value = this.data[$getFloat64](this[_position], typed_data.Endian.host);
      this[_position] = dart.notNull(this[_position]) + 8;
      return value;
    }
    getUint8List(length) {
      let list = this.data[$buffer][$asUint8List](dart.notNull(this.data[$offsetInBytes]) + dart.notNull(this[_position]), length);
      this[_position] = dart.notNull(this[_position]) + dart.notNull(length);
      return list;
    }
    getInt32List(length) {
      this[_alignTo](4);
      let list = this.data[$buffer][$asInt32List](dart.notNull(this.data[$offsetInBytes]) + dart.notNull(this[_position]), length);
      this[_position] = dart.notNull(this[_position]) + 4 * dart.notNull(length);
      return list;
    }
    getInt64List(length) {
      this[_alignTo](8);
      let list = this.data[$buffer][$asInt64List](dart.notNull(this.data[$offsetInBytes]) + dart.notNull(this[_position]), length);
      this[_position] = dart.notNull(this[_position]) + 8 * dart.notNull(length);
      return list;
    }
    getFloat64List(length) {
      this[_alignTo](8);
      let list = this.data[$buffer][$asFloat64List](dart.notNull(this.data[$offsetInBytes]) + dart.notNull(this[_position]), length);
      this[_position] = dart.notNull(this[_position]) + 8 * dart.notNull(length);
      return list;
    }
    [_alignTo](alignment) {
      let mod = this[_position][$modulo](alignment);
      if (mod !== 0) {
        this[_position] = dart.notNull(this[_position]) + (dart.notNull(alignment) - mod);
      }
    }
  };
  (src__foundation__serialization.ReadBuffer.new = function(data) {
    this[_position] = 0;
    this[data$] = data;
    if (!(data != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/foundation/serialization.dart", 109, 34, "data != null");
  }).prototype = src__foundation__serialization.ReadBuffer.prototype;
  dart.addTypeTests(src__foundation__serialization.ReadBuffer);
  const data$ = Symbol("ReadBuffer.data");
  dart.setMethodSignature(src__foundation__serialization.ReadBuffer, () => ({
    __proto__: dart.getMethods(src__foundation__serialization.ReadBuffer.__proto__),
    getUint8: dart.fnType(core.int, []),
    getUint16: dart.fnType(core.int, []),
    getUint32: dart.fnType(core.int, []),
    getInt32: dart.fnType(core.int, []),
    getInt64: dart.fnType(core.int, []),
    getFloat64: dart.fnType(core.double, []),
    getUint8List: dart.fnType(typed_data.Uint8List, [core.int]),
    getInt32List: dart.fnType(typed_data.Int32List, [core.int]),
    getInt64List: dart.fnType(typed_data.Int64List, [core.int]),
    getFloat64List: dart.fnType(typed_data.Float64List, [core.int]),
    [_alignTo]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(src__foundation__serialization.ReadBuffer, () => ({
    __proto__: dart.getGetters(src__foundation__serialization.ReadBuffer.__proto__),
    hasRemaining: core.bool
  }));
  dart.setLibraryUri(src__foundation__serialization.ReadBuffer, "package:flutter_web/src/foundation/serialization.dart");
  dart.setFieldSignature(src__foundation__serialization.ReadBuffer, () => ({
    __proto__: dart.getFields(src__foundation__serialization.ReadBuffer.__proto__),
    data: dart.finalFieldType(typed_data.ByteData),
    [_position]: dart.fieldType(core.int)
  }));
  const _value$0 = dart.privateName(src__foundation__synchronous_future, "_value");
  const _is_SynchronousFuture_default = Symbol('_is_SynchronousFuture_default');
  src__foundation__synchronous_future.SynchronousFuture$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let CompleterOfT = () => (CompleterOfT = dart.constFn(async.Completer$(T)))();
    let FutureOrOfT = () => (FutureOrOfT = dart.constFn(async.FutureOr$(T)))();
    let VoidToFutureOrOfT = () => (VoidToFutureOrOfT = dart.constFn(dart.fnType(FutureOrOfT(), [])))();
    let FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    let dynamicToT = () => (dynamicToT = dart.constFn(dart.fnType(T, [dart.dynamic])))();
    class SynchronousFuture extends core.Object {
      asStream() {
        let controller = StreamControllerOfT().new();
        controller.add(this[_value$0]);
        controller.close();
        return controller.stream;
      }
      catchError(onError, opts) {
        let test = opts && 'test' in opts ? opts.test : null;
        return CompleterOfT().new().future;
      }
      then(E, f, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let result = f(this[_value$0]);
        if (async.Future$(E).is(result)) return result;
        return new (src__foundation__synchronous_future.SynchronousFuture$(E)).new(E._check(result));
      }
      timeout(timeLimit, opts) {
        let onTimeout = opts && 'onTimeout' in opts ? opts.onTimeout : null;
        return FutureOfT().value(this[_value$0]).timeout(timeLimit, {onTimeout: VoidToFutureOrOfT()._check(onTimeout)});
      }
      whenComplete(action) {
        try {
          let result = action();
          if (async.Future.is(result)) return FutureOfT()._check(result.then(T, dart.fn(value => this[_value$0], dynamicToT())));
          return this;
        } catch (e$) {
          let e = dart.getThrown(e$);
          let stack = dart.stackTrace(e$);
          return FutureOfT().error(e, stack);
        }
      }
    }
    (SynchronousFuture.new = function(value) {
      this[_value$0] = value;
    }).prototype = SynchronousFuture.prototype;
    SynchronousFuture.prototype[dart.isFuture] = true;
    dart.addTypeTests(SynchronousFuture);
    SynchronousFuture.prototype[_is_SynchronousFuture_default] = true;
    SynchronousFuture[dart.implements] = () => [FutureOfT()];
    dart.setMethodSignature(SynchronousFuture, () => ({
      __proto__: dart.getMethods(SynchronousFuture.__proto__),
      asStream: dart.fnType(async.Stream$(T), []),
      catchError: dart.fnType(async.Future$(T), [core.Function], {test: dart.fnType(core.bool, [dart.dynamic])}),
      then: dart.gFnType(E => [async.Future$(E), [dart.fnType(dart.dynamic, [T])], {onError: core.Function}]),
      timeout: dart.fnType(async.Future$(T), [core.Duration], {onTimeout: dart.fnType(dart.dynamic, [])}),
      whenComplete: dart.fnType(async.Future$(T), [dart.fnType(dart.dynamic, [])])
    }));
    dart.setLibraryUri(SynchronousFuture, "package:flutter_web/src/foundation/synchronous_future.dart");
    dart.setFieldSignature(SynchronousFuture, () => ({
      __proto__: dart.getFields(SynchronousFuture.__proto__),
      [_value$0]: dart.finalFieldType(T)
    }));
    return SynchronousFuture;
  });
  src__foundation__synchronous_future.SynchronousFuture = src__foundation__synchronous_future.SynchronousFuture$();
  dart.addTypeTests(src__foundation__synchronous_future.SynchronousFuture, _is_SynchronousFuture_default);
  src__foundation__unicode.Unicode = class Unicode extends core.Object {};
  (src__foundation__unicode.Unicode.__ = function() {
  }).prototype = src__foundation__unicode.Unicode.prototype;
  dart.addTypeTests(src__foundation__unicode.Unicode);
  dart.setLibraryUri(src__foundation__unicode.Unicode, "package:flutter_web/src/foundation/unicode.dart");
  dart.defineLazy(src__foundation__unicode.Unicode, {
    /*src__foundation__unicode.Unicode.LRE*/get LRE() {
      return "‪";
    },
    /*src__foundation__unicode.Unicode.RLE*/get RLE() {
      return "‫";
    },
    /*src__foundation__unicode.Unicode.PDF*/get PDF() {
      return "‬";
    },
    /*src__foundation__unicode.Unicode.LRO*/get LRO() {
      return "‭";
    },
    /*src__foundation__unicode.Unicode.RLO*/get RLO() {
      return "‮";
    },
    /*src__foundation__unicode.Unicode.LRI*/get LRI() {
      return "⁦";
    },
    /*src__foundation__unicode.Unicode.RLI*/get RLI() {
      return "⁧";
    },
    /*src__foundation__unicode.Unicode.FSI*/get FSI() {
      return "⁨";
    },
    /*src__foundation__unicode.Unicode.PDI*/get PDI() {
      return "⁩";
    },
    /*src__foundation__unicode.Unicode.LRM*/get LRM() {
      return "‎";
    },
    /*src__foundation__unicode.Unicode.RLM*/get RLM() {
      return "‏";
    },
    /*src__foundation__unicode.Unicode.ALM*/get ALM() {
      return "؜";
    }
  });
  dart.trackLibraries("packages/flutter_web/src/foundation/assertions.ddc", {
    "package:flutter_web/src/foundation/basic_types.dart": src__foundation__basic_types,
    "package:flutter_web/src/util.dart": src__util,
    "package:flutter_web/src/foundation/diagnostics.dart": src__foundation__diagnostics,
    "package:flutter_web/src/foundation/print.dart": src__foundation__print,
    "package:flutter_web/src/foundation/assertions.dart": src__foundation__assertions,
    "package:flutter_web/src/foundation/constants.dart": src__foundation__constants,
    "package:flutter_web/src/foundation/platform.dart": src__foundation__platform,
    "package:flutter_web/src/foundation/debug.dart": src__foundation__debug,
    "package:flutter_web/src/foundation/binding.dart": src__foundation__binding,
    "package:flutter_web/src/foundation/bitfield.dart": src__foundation__bitfield,
    "package:flutter_web/src/foundation/observer_list.dart": src__foundation__observer_list,
    "package:flutter_web/src/foundation/change_notifier.dart": src__foundation__change_notifier,
    "package:flutter_web/src/foundation/collections.dart": src__foundation__collections,
    "package:flutter_web/src/foundation/key.dart": src__foundation__key,
    "package:flutter_web/src/foundation/isolates.dart": src__foundation__isolates,
    "package:flutter_web/src/foundation/licenses.dart": src__foundation__licenses,
    "package:flutter_web/src/foundation/node.dart": src__foundation__node,
    "package:flutter_web/src/foundation/profile.dart": src__foundation__profile,
    "package:flutter_web/src/foundation/serialization.dart": src__foundation__serialization,
    "package:flutter_web/src/foundation/synchronous_future.dart": src__foundation__synchronous_future,
    "package:flutter_web/src/foundation/unicode.dart": src__foundation__unicode
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["basic_types.dart","../util.dart","diagnostics.dart","print.dart","assertions.dart","constants.dart","platform.dart","debug.dart","binding.dart","bitfield.dart","observer_list.dart","change_notifier.dart","collections.dart","key.dart","isolates.dart","licenses.dart","node.dart","profile.dart","serialization.dart","synchronous_future.dart","unicode.dart"],"names":[],"mappings":"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","file":"assertions.ddc.js"}');
  // Exports:
  return {
    src__foundation__basic_types: src__foundation__basic_types,
    src__util: src__util,
    src__foundation__diagnostics: src__foundation__diagnostics,
    src__foundation__print: src__foundation__print,
    src__foundation__assertions: src__foundation__assertions,
    src__foundation__constants: src__foundation__constants,
    src__foundation__platform: src__foundation__platform,
    src__foundation__debug: src__foundation__debug,
    src__foundation__binding: src__foundation__binding,
    src__foundation__bitfield: src__foundation__bitfield,
    src__foundation__observer_list: src__foundation__observer_list,
    src__foundation__change_notifier: src__foundation__change_notifier,
    src__foundation__collections: src__foundation__collections,
    src__foundation__key: src__foundation__key,
    src__foundation__isolates: src__foundation__isolates,
    src__foundation__licenses: src__foundation__licenses,
    src__foundation__node: src__foundation__node,
    src__foundation__profile: src__foundation__profile,
    src__foundation__serialization: src__foundation__serialization,
    src__foundation__synchronous_future: src__foundation__synchronous_future,
    src__foundation__unicode: src__foundation__unicode
  };
});

//# sourceMappingURL=assertions.ddc.js.map

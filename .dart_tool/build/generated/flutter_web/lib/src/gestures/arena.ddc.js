define(['dart_sdk', 'packages/flutter_web/src/foundation/assertions', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/scheduler/binding'], function(dart_sdk, assertions, ui, binding) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const collection = dart_sdk.collection;
  const typed_data = dart_sdk.typed_data;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__foundation__assertions = assertions.src__foundation__assertions;
  const src__util = assertions.src__util;
  const src__foundation__print = assertions.src__foundation__print;
  const src__foundation__diagnostics = assertions.src__foundation__diagnostics;
  const src__foundation__binding = assertions.src__foundation__binding;
  const src__foundation__change_notifier = assertions.src__foundation__change_notifier;
  const ui$ = ui.ui;
  const src__scheduler__binding = binding.src__scheduler__binding;
  const src__gestures__debug = Object.create(dart.library);
  const src__gestures__arena = Object.create(dart.library);
  const src__gestures__events = Object.create(dart.library);
  const src__gestures__converter = Object.create(dart.library);
  const src__gestures__hit_test = Object.create(dart.library);
  const src__gestures__pointer_router = Object.create(dart.library);
  const src__gestures__pointer_signal_resolver = Object.create(dart.library);
  const src__gestures__binding = Object.create(dart.library);
  const src__gestures__constants = Object.create(dart.library);
  const src__gestures__lsq_solver = Object.create(dart.library);
  const src__gestures__velocity_tracker = Object.create(dart.library);
  const src__gestures__drag_details = Object.create(dart.library);
  const src__gestures__drag = Object.create(dart.library);
  const src__gestures__team = Object.create(dart.library);
  const src__gestures__recognizer = Object.create(dart.library);
  const src__gestures__eager = Object.create(dart.library);
  const src__gestures__force_press = Object.create(dart.library);
  const src__gestures__long_press = Object.create(dart.library);
  const src__gestures__monodrag = Object.create(dart.library);
  const src__gestures__mouse_tracking = Object.create(dart.library);
  const src__gestures__multidrag = Object.create(dart.library);
  const src__gestures__tap = Object.create(dart.library);
  const src__gestures__multitap = Object.create(dart.library);
  const src__gestures__scale = Object.create(dart.library);
  const $add = dartx.add;
  const $isEmpty = dartx.isEmpty;
  const $join = dartx.join;
  const $map = dartx.map;
  const $putIfAbsent = dartx.putIfAbsent;
  const $_get = dartx._get;
  const $remove = dartx.remove;
  const $isNotEmpty = dartx.isNotEmpty;
  const $first = dartx.first;
  const $length = dartx.length;
  const $contains = dartx.contains;
  const $containsKey = dartx.containsKey;
  const $padRight = dartx.padRight;
  const $toString = dartx.toString;
  const $leftShift = dartx['<<'];
  const $clear = dartx.clear;
  const $_set = dartx._set;
  const $toStringAsFixed = dartx.toStringAsFixed;
  const $toDouble = dartx.toDouble;
  const $abs = dartx.abs;
  const $runtimeType = dartx.runtimeType;
  const $times = dartx['*'];
  const $values = dartx.values;
  const $containsValue = dartx.containsValue;
  const $isNaN = dartx.isNaN;
  const $clamp = dartx.clamp;
  const $toRadixString = dartx.toRadixString;
  const $hashCode = dartx.hashCode;
  const $forEach = dartx.forEach;
  const $toSet = dartx.toSet;
  const $keys = dartx.keys;
  const $toList = dartx.toList;
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let JSArrayOfGestureArenaMember = () => (JSArrayOfGestureArenaMember = dart.constFn(_interceptors.JSArray$(src__gestures__arena.GestureArenaMember)))();
  let GestureArenaMemberToString = () => (GestureArenaMemberToString = dart.constFn(dart.fnType(core.String, [src__gestures__arena.GestureArenaMember])))();
  let IterableOfString = () => (IterableOfString = dart.constFn(core.Iterable$(core.String)))();
  let ListOfGestureArenaMember = () => (ListOfGestureArenaMember = dart.constFn(core.List$(src__gestures__arena.GestureArenaMember)))();
  let IdentityMapOfint$_GestureArena = () => (IdentityMapOfint$_GestureArena = dart.constFn(_js_helper.IdentityMap$(core.int, src__gestures__arena._GestureArena)))();
  let VoidTo_GestureArena = () => (VoidTo_GestureArena = dart.constFn(dart.fnType(src__gestures__arena._GestureArena, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let MapOfint$_GestureArena = () => (MapOfint$_GestureArena = dart.constFn(core.Map$(core.int, src__gestures__arena._GestureArena)))();
  let DiagnosticsPropertyOfOffset = () => (DiagnosticsPropertyOfOffset = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(ui$.Offset)))();
  let DiagnosticsPropertyOfDuration = () => (DiagnosticsPropertyOfDuration = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(core.Duration)))();
  let EnumPropertyOfPointerDeviceKind = () => (EnumPropertyOfPointerDeviceKind = dart.constFn(src__foundation__diagnostics.EnumProperty$(ui$.PointerDeviceKind)))();
  let DiagnosticsPropertyOfbool = () => (DiagnosticsPropertyOfbool = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(core.bool)))();
  let VoidTo_PointerState = () => (VoidTo_PointerState = dart.constFn(dart.fnType(src__gestures__converter._PointerState, [])))();
  let SyncIterableOfPointerEvent = () => (SyncIterableOfPointerEvent = dart.constFn(_js_helper.SyncIterable$(src__gestures__events.PointerEvent)))();
  let IdentityMapOfint$_PointerState = () => (IdentityMapOfint$_PointerState = dart.constFn(_js_helper.IdentityMap$(core.int, src__gestures__converter._PointerState)))();
  let JSArrayOfHitTestEntry = () => (JSArrayOfHitTestEntry = dart.constFn(_interceptors.JSArray$(src__gestures__hit_test.HitTestEntry)))();
  let ListOfHitTestEntry = () => (ListOfHitTestEntry = dart.constFn(core.List$(src__gestures__hit_test.HitTestEntry)))();
  let PointerEventTovoid = () => (PointerEventTovoid = dart.constFn(dart.fnType(dart.void, [src__gestures__events.PointerEvent])))();
  let LinkedHashSetOfPointerEventTovoid = () => (LinkedHashSetOfPointerEventTovoid = dart.constFn(collection.LinkedHashSet$(PointerEventTovoid())))();
  let IdentityMapOfint$LinkedHashSetOfPointerEventTovoid = () => (IdentityMapOfint$LinkedHashSetOfPointerEventTovoid = dart.constFn(_js_helper.IdentityMap$(core.int, LinkedHashSetOfPointerEventTovoid())))();
  let _HashSetOfPointerEventTovoid = () => (_HashSetOfPointerEventTovoid = dart.constFn(collection._HashSet$(PointerEventTovoid())))();
  let VoidToLinkedHashSetOfPointerEventTovoid = () => (VoidToLinkedHashSetOfPointerEventTovoid = dart.constFn(dart.fnType(LinkedHashSetOfPointerEventTovoid(), [])))();
  let DiagnosticsPropertyOfPointerEvent = () => (DiagnosticsPropertyOfPointerEvent = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(src__gestures__events.PointerEvent)))();
  let SyncIterableOfDiagnosticsPropertyOfPointerEvent = () => (SyncIterableOfDiagnosticsPropertyOfPointerEvent = dart.constFn(_js_helper.SyncIterable$(DiagnosticsPropertyOfPointerEvent())))();
  let IterableOfDiagnosticsPropertyOfPointerEvent = () => (IterableOfDiagnosticsPropertyOfPointerEvent = dart.constFn(core.Iterable$(DiagnosticsPropertyOfPointerEvent())))();
  let VoidToIterableOfDiagnosticsPropertyOfPointerEvent = () => (VoidToIterableOfDiagnosticsPropertyOfPointerEvent = dart.constFn(dart.fnType(IterableOfDiagnosticsPropertyOfPointerEvent(), [])))();
  let ListOfPointerEventTovoid = () => (ListOfPointerEventTovoid = dart.constFn(core.List$(PointerEventTovoid())))();
  let MapOfint$LinkedHashSetOfPointerEventTovoid = () => (MapOfint$LinkedHashSetOfPointerEventTovoid = dart.constFn(core.Map$(core.int, LinkedHashSetOfPointerEventTovoid())))();
  let DiagnosticsPropertyOfPointerSignalEvent = () => (DiagnosticsPropertyOfPointerSignalEvent = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(src__gestures__events.PointerSignalEvent)))();
  let SyncIterableOfDiagnosticsPropertyOfPointerSignalEvent = () => (SyncIterableOfDiagnosticsPropertyOfPointerSignalEvent = dart.constFn(_js_helper.SyncIterable$(DiagnosticsPropertyOfPointerSignalEvent())))();
  let IterableOfDiagnosticsPropertyOfPointerSignalEvent = () => (IterableOfDiagnosticsPropertyOfPointerSignalEvent = dart.constFn(core.Iterable$(DiagnosticsPropertyOfPointerSignalEvent())))();
  let VoidToIterableOfDiagnosticsPropertyOfPointerSignalEvent = () => (VoidToIterableOfDiagnosticsPropertyOfPointerSignalEvent = dart.constFn(dart.fnType(IterableOfDiagnosticsPropertyOfPointerSignalEvent(), [])))();
  let PointerSignalEventTovoid = () => (PointerSignalEventTovoid = dart.constFn(dart.fnType(dart.void, [src__gestures__events.PointerSignalEvent])))();
  let QueueOfPointerEvent = () => (QueueOfPointerEvent = dart.constFn(collection.Queue$(src__gestures__events.PointerEvent)))();
  let IdentityMapOfint$HitTestResult = () => (IdentityMapOfint$HitTestResult = dart.constFn(_js_helper.IdentityMap$(core.int, src__gestures__hit_test.HitTestResult)))();
  let DiagnosticsPropertyOfHitTestTarget = () => (DiagnosticsPropertyOfHitTestTarget = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(src__gestures__hit_test.HitTestTarget)))();
  let DiagnosticsPropertyOfObject = () => (DiagnosticsPropertyOfObject = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(core.Object)))();
  let SyncIterableOfDiagnosticsPropertyOfObject = () => (SyncIterableOfDiagnosticsPropertyOfObject = dart.constFn(_js_helper.SyncIterable$(DiagnosticsPropertyOfObject())))();
  let IterableOfDiagnosticsPropertyOfObject = () => (IterableOfDiagnosticsPropertyOfObject = dart.constFn(core.Iterable$(DiagnosticsPropertyOfObject())))();
  let VoidToIterableOfDiagnosticsPropertyOfObject = () => (VoidToIterableOfDiagnosticsPropertyOfObject = dart.constFn(dart.fnType(IterableOfDiagnosticsPropertyOfObject(), [])))();
  let MapOfint$HitTestResult = () => (MapOfint$HitTestResult = dart.constFn(core.Map$(core.int, src__gestures__hit_test.HitTestResult)))();
  let ListOfdouble = () => (ListOfdouble = dart.constFn(core.List$(core.double)))();
  let ListOf_PointAtTime = () => (ListOf_PointAtTime = dart.constFn(core.List$(src__gestures__velocity_tracker._PointAtTime)))();
  let JSArrayOfdouble = () => (JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))();
  let IdentityMapOfint$_CombiningGestureArenaMember = () => (IdentityMapOfint$_CombiningGestureArenaMember = dart.constFn(_js_helper.IdentityMap$(core.int, src__gestures__team._CombiningGestureArenaMember)))();
  let VoidTo_CombiningGestureArenaMember = () => (VoidTo_CombiningGestureArenaMember = dart.constFn(dart.fnType(src__gestures__team._CombiningGestureArenaMember, [])))();
  let MapOfint$_CombiningGestureArenaMember = () => (MapOfint$_CombiningGestureArenaMember = dart.constFn(core.Map$(core.int, src__gestures__team._CombiningGestureArenaMember)))();
  let IdentityMapOfint$PointerDeviceKind = () => (IdentityMapOfint$PointerDeviceKind = dart.constFn(_js_helper.IdentityMap$(core.int, ui$.PointerDeviceKind)))();
  let DiagnosticsPropertyOfGestureRecognizer = () => (DiagnosticsPropertyOfGestureRecognizer = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(src__gestures__recognizer.GestureRecognizer)))();
  let SyncIterableOfDiagnosticsNode = () => (SyncIterableOfDiagnosticsNode = dart.constFn(_js_helper.SyncIterable$(src__foundation__diagnostics.DiagnosticsNode)))();
  let IterableOfDiagnosticsNode = () => (IterableOfDiagnosticsNode = dart.constFn(core.Iterable$(src__foundation__diagnostics.DiagnosticsNode)))();
  let VoidToIterableOfDiagnosticsNode = () => (VoidToIterableOfDiagnosticsNode = dart.constFn(dart.fnType(IterableOfDiagnosticsNode(), [])))();
  let MapOfint$PointerDeviceKind = () => (MapOfint$PointerDeviceKind = dart.constFn(core.Map$(core.int, ui$.PointerDeviceKind)))();
  let IdentityMapOfint$GestureArenaEntry = () => (IdentityMapOfint$GestureArenaEntry = dart.constFn(_js_helper.IdentityMap$(core.int, src__gestures__arena.GestureArenaEntry)))();
  let _IdentityHashSetOfint = () => (_IdentityHashSetOfint = dart.constFn(collection._IdentityHashSet$(core.int)))();
  let ListOfGestureArenaEntry = () => (ListOfGestureArenaEntry = dart.constFn(core.List$(src__gestures__arena.GestureArenaEntry)))();
  let MapOfint$GestureArenaEntry = () => (MapOfint$GestureArenaEntry = dart.constFn(core.Map$(core.int, src__gestures__arena.GestureArenaEntry)))();
  let SetOfint = () => (SetOfint = dart.constFn(core.Set$(core.int)))();
  let EnumPropertyOfGestureRecognizerState = () => (EnumPropertyOfGestureRecognizerState = dart.constFn(src__foundation__diagnostics.EnumProperty$(src__gestures__recognizer.GestureRecognizerState)))();
  let doubleAnddoubleAnddoubleTodouble = () => (doubleAnddoubleAnddoubleTodouble = dart.constFn(dart.fnType(core.double, [core.double, core.double, core.double])))();
  let ForcePressDetailsTovoid = () => (ForcePressDetailsTovoid = dart.constFn(dart.fnType(dart.void, [src__gestures__force_press.ForcePressDetails])))();
  let LongPressStartDetailsTovoid = () => (LongPressStartDetailsTovoid = dart.constFn(dart.fnType(dart.void, [src__gestures__long_press.LongPressStartDetails])))();
  let LongPressMoveUpdateDetailsTovoid = () => (LongPressMoveUpdateDetailsTovoid = dart.constFn(dart.fnType(dart.void, [src__gestures__long_press.LongPressMoveUpdateDetails])))();
  let LongPressEndDetailsTovoid = () => (LongPressEndDetailsTovoid = dart.constFn(dart.fnType(dart.void, [src__gestures__long_press.LongPressEndDetails])))();
  let IdentityMapOfint$VelocityTracker = () => (IdentityMapOfint$VelocityTracker = dart.constFn(_js_helper.IdentityMap$(core.int, src__gestures__velocity_tracker.VelocityTracker)))();
  let VoidToString = () => (VoidToString = dart.constFn(dart.fnType(core.String, [])))();
  let EnumPropertyOfDragStartBehavior = () => (EnumPropertyOfDragStartBehavior = dart.constFn(src__foundation__diagnostics.EnumProperty$(src__gestures__recognizer.DragStartBehavior)))();
  let DragDownDetailsTovoid = () => (DragDownDetailsTovoid = dart.constFn(dart.fnType(dart.void, [src__gestures__drag_details.DragDownDetails])))();
  let DragStartDetailsTovoid = () => (DragStartDetailsTovoid = dart.constFn(dart.fnType(dart.void, [src__gestures__drag_details.DragStartDetails])))();
  let DragUpdateDetailsTovoid = () => (DragUpdateDetailsTovoid = dart.constFn(dart.fnType(dart.void, [src__gestures__drag_details.DragUpdateDetails])))();
  let DragEndDetailsTovoid = () => (DragEndDetailsTovoid = dart.constFn(dart.fnType(dart.void, [src__gestures__drag_details.DragEndDetails])))();
  let MapOfint$VelocityTracker = () => (MapOfint$VelocityTracker = dart.constFn(core.Map$(core.int, src__gestures__velocity_tracker.VelocityTracker)))();
  let PointerEnterEventTovoid = () => (PointerEnterEventTovoid = dart.constFn(dart.fnType(dart.void, [src__gestures__events.PointerEnterEvent])))();
  let PointerHoverEventTovoid = () => (PointerHoverEventTovoid = dart.constFn(dart.fnType(dart.void, [src__gestures__events.PointerHoverEvent])))();
  let PointerExitEventTovoid = () => (PointerExitEventTovoid = dart.constFn(dart.fnType(dart.void, [src__gestures__events.PointerExitEvent])))();
  let LinkedMapOfMouseTrackerAnnotation$_TrackedAnnotation = () => (LinkedMapOfMouseTrackerAnnotation$_TrackedAnnotation = dart.constFn(_js_helper.LinkedMap$(src__gestures__mouse_tracking.MouseTrackerAnnotation, src__gestures__mouse_tracking._TrackedAnnotation)))();
  let IdentityMapOfint$PointerEvent = () => (IdentityMapOfint$PointerEvent = dart.constFn(_js_helper.IdentityMap$(core.int, src__gestures__events.PointerEvent)))();
  let DurationToNull = () => (DurationToNull = dart.constFn(dart.fnType(core.Null, [core.Duration])))();
  let _TrackedAnnotationAndintTovoid = () => (_TrackedAnnotationAndintTovoid = dart.constFn(dart.fnType(dart.void, [src__gestures__mouse_tracking._TrackedAnnotation, core.int])))();
  let _TrackedAnnotationTovoid = () => (_TrackedAnnotationTovoid = dart.constFn(dart.fnType(dart.void, [src__gestures__mouse_tracking._TrackedAnnotation])))();
  let MouseTrackerAnnotationTo_TrackedAnnotation = () => (MouseTrackerAnnotationTo_TrackedAnnotation = dart.constFn(dart.fnType(src__gestures__mouse_tracking._TrackedAnnotation, [src__gestures__mouse_tracking.MouseTrackerAnnotation])))();
  let IterableOf_TrackedAnnotation = () => (IterableOf_TrackedAnnotation = dart.constFn(core.Iterable$(src__gestures__mouse_tracking._TrackedAnnotation)))();
  let IterableOfMouseTrackerAnnotation = () => (IterableOfMouseTrackerAnnotation = dart.constFn(core.Iterable$(src__gestures__mouse_tracking.MouseTrackerAnnotation)))();
  let OffsetToIterableOfMouseTrackerAnnotation = () => (OffsetToIterableOfMouseTrackerAnnotation = dart.constFn(dart.fnType(IterableOfMouseTrackerAnnotation(), [ui$.Offset])))();
  let MapOfMouseTrackerAnnotation$_TrackedAnnotation = () => (MapOfMouseTrackerAnnotation$_TrackedAnnotation = dart.constFn(core.Map$(src__gestures__mouse_tracking.MouseTrackerAnnotation, src__gestures__mouse_tracking._TrackedAnnotation)))();
  let MapOfint$PointerEvent = () => (MapOfint$PointerEvent = dart.constFn(core.Map$(core.int, src__gestures__events.PointerEvent)))();
  let OffsetToDrag = () => (OffsetToDrag = dart.constFn(dart.fnType(src__gestures__drag.Drag, [ui$.Offset])))();
  let VoidToDrag = () => (VoidToDrag = dart.constFn(dart.fnType(src__gestures__drag.Drag, [])))();
  let TapDownDetailsTovoid = () => (TapDownDetailsTovoid = dart.constFn(dart.fnType(dart.void, [src__gestures__tap.TapDownDetails])))();
  let TapUpDetailsTovoid = () => (TapUpDetailsTovoid = dart.constFn(dart.fnType(dart.void, [src__gestures__tap.TapUpDetails])))();
  let IdentityMapOfint$_TapTracker = () => (IdentityMapOfint$_TapTracker = dart.constFn(_js_helper.IdentityMap$(core.int, src__gestures__multitap._TapTracker)))();
  let MapOfint$_TapTracker = () => (MapOfint$_TapTracker = dart.constFn(core.Map$(core.int, src__gestures__multitap._TapTracker)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let IdentityMapOfint$_TapGesture = () => (IdentityMapOfint$_TapGesture = dart.constFn(_js_helper.IdentityMap$(core.int, src__gestures__multitap._TapGesture)))();
  let ListOf_TapGesture = () => (ListOf_TapGesture = dart.constFn(core.List$(src__gestures__multitap._TapGesture)))();
  let intAndTapDownDetailsTovoid = () => (intAndTapDownDetailsTovoid = dart.constFn(dart.fnType(dart.void, [core.int, src__gestures__tap.TapDownDetails])))();
  let intAndTapUpDetailsTovoid = () => (intAndTapUpDetailsTovoid = dart.constFn(dart.fnType(dart.void, [core.int, src__gestures__tap.TapUpDetails])))();
  let intTovoid = () => (intTovoid = dart.constFn(dart.fnType(dart.void, [core.int])))();
  let MapOfint$_TapGesture = () => (MapOfint$_TapGesture = dart.constFn(core.Map$(core.int, src__gestures__multitap._TapGesture)))();
  let IdentityMapOfint$Offset = () => (IdentityMapOfint$Offset = dart.constFn(_js_helper.IdentityMap$(core.int, ui$.Offset)))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let ScaleStartDetailsTovoid = () => (ScaleStartDetailsTovoid = dart.constFn(dart.fnType(dart.void, [src__gestures__scale.ScaleStartDetails])))();
  let ScaleUpdateDetailsTovoid = () => (ScaleUpdateDetailsTovoid = dart.constFn(dart.fnType(dart.void, [src__gestures__scale.ScaleUpdateDetails])))();
  let ScaleEndDetailsTovoid = () => (ScaleEndDetailsTovoid = dart.constFn(dart.fnType(dart.void, [src__gestures__scale.ScaleEndDetails])))();
  let MapOfint$Offset = () => (MapOfint$Offset = dart.constFn(core.Map$(core.int, ui$.Offset)))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  dart.defineLazy(src__gestures__debug, {
    /*src__gestures__debug.debugPrintHitTestResults*/get debugPrintHitTestResults() {
      return false;
    },
    set debugPrintHitTestResults(_) {},
    /*src__gestures__debug.debugPrintMouseHoverEvents*/get debugPrintMouseHoverEvents() {
      return false;
    },
    set debugPrintMouseHoverEvents(_) {},
    /*src__gestures__debug.debugPrintGestureArenaDiagnostics*/get debugPrintGestureArenaDiagnostics() {
      return false;
    },
    set debugPrintGestureArenaDiagnostics(_) {},
    /*src__gestures__debug.debugPrintRecognizerCallbacksTrace*/get debugPrintRecognizerCallbacksTrace() {
      return false;
    },
    set debugPrintRecognizerCallbacksTrace(_) {}
  });
  src__gestures__debug.debugAssertAllGesturesVarsUnset = function(reason) {
    if (!dart.test(dart.fn(() => {
      if (dart.test(src__gestures__debug.debugPrintHitTestResults) || dart.test(src__gestures__debug.debugPrintGestureArenaDiagnostics) || dart.test(src__gestures__debug.debugPrintRecognizerCallbacksTrace)) dart.throw(src__foundation__assertions.FlutterError.new(reason));
      return true;
    }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/debug.dart", 61, 10, "() {if (debugPrintHitTestResults || debugPrintGestureArenaDiagnostics || debugPrintRecognizerCallbacksTrace) throw FlutterError(reason); return true;}()");
    return true;
  };
  src__gestures__arena.GestureDisposition = class GestureDisposition extends core.Object {
    toString() {
      return {
        0: "GestureDisposition.accepted",
        1: "GestureDisposition.rejected"
      }[this.index];
    }
  };
  (src__gestures__arena.GestureDisposition.new = function(x) {
    this.index = x;
  }).prototype = src__gestures__arena.GestureDisposition.prototype;
  dart.addTypeTests(src__gestures__arena.GestureDisposition);
  dart.setLibraryUri(src__gestures__arena.GestureDisposition, "package:flutter_web/src/gestures/arena.dart");
  dart.setFieldSignature(src__gestures__arena.GestureDisposition, () => ({
    __proto__: dart.getFields(src__gestures__arena.GestureDisposition.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__gestures__arena.GestureDisposition, ['toString']);
  src__gestures__arena.GestureDisposition.accepted = dart.const(new src__gestures__arena.GestureDisposition.new(0));
  src__gestures__arena.GestureDisposition.rejected = dart.const(new src__gestures__arena.GestureDisposition.new(1));
  src__gestures__arena.GestureDisposition.values = dart.constList([src__gestures__arena.GestureDisposition.accepted, src__gestures__arena.GestureDisposition.rejected], src__gestures__arena.GestureDisposition);
  src__gestures__arena.GestureArenaMember = class GestureArenaMember extends core.Object {};
  (src__gestures__arena.GestureArenaMember.new = function() {
  }).prototype = src__gestures__arena.GestureArenaMember.prototype;
  dart.addTypeTests(src__gestures__arena.GestureArenaMember);
  dart.setLibraryUri(src__gestures__arena.GestureArenaMember, "package:flutter_web/src/gestures/arena.dart");
  const _arena = dart.privateName(src__gestures__arena, "_arena");
  const _pointer = dart.privateName(src__gestures__arena, "_pointer");
  const _member = dart.privateName(src__gestures__arena, "_member");
  const _resolve = dart.privateName(src__gestures__arena, "_resolve");
  src__gestures__arena.GestureArenaEntry = class GestureArenaEntry extends core.Object {
    resolve(disposition) {
      this[_arena][_resolve](this[_pointer], this[_member], disposition);
    }
  };
  (src__gestures__arena.GestureArenaEntry.__ = function(arena, pointer, member) {
    this[_arena] = arena;
    this[_pointer] = pointer;
    this[_member] = member;
  }).prototype = src__gestures__arena.GestureArenaEntry.prototype;
  dart.addTypeTests(src__gestures__arena.GestureArenaEntry);
  dart.setMethodSignature(src__gestures__arena.GestureArenaEntry, () => ({
    __proto__: dart.getMethods(src__gestures__arena.GestureArenaEntry.__proto__),
    resolve: dart.fnType(dart.void, [src__gestures__arena.GestureDisposition])
  }));
  dart.setLibraryUri(src__gestures__arena.GestureArenaEntry, "package:flutter_web/src/gestures/arena.dart");
  dart.setFieldSignature(src__gestures__arena.GestureArenaEntry, () => ({
    __proto__: dart.getFields(src__gestures__arena.GestureArenaEntry.__proto__),
    [_arena]: dart.finalFieldType(src__gestures__arena.GestureArenaManager),
    [_pointer]: dart.finalFieldType(core.int),
    [_member]: dart.finalFieldType(src__gestures__arena.GestureArenaMember)
  }));
  src__gestures__arena._GestureArena = class _GestureArena extends core.Object {
    add(member) {
      if (!dart.test(this.isOpen)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/arena.dart", 70, 12, "isOpen");
      this.members[$add](member);
    }
    toString() {
      if (dart.test(src__util.assertionsEnabled)) {
        let buffer = new core.StringBuffer.new();
        if (dart.test(this.members[$isEmpty])) {
          buffer.write("<empty>");
        } else {
          buffer.write(IterableOfString()._check(this.members[$map](core.String, dart.fn(member => {
            if (dart.equals(member, this.eagerWinner)) return dart.str(member) + " (eager winner)";
            return dart.str(member);
          }, GestureArenaMemberToString())))[$join](", "));
        }
        if (dart.test(this.isOpen)) buffer.write(" [open]");
        if (dart.test(this.isHeld)) buffer.write(" [held]");
        if (dart.test(this.hasPendingSweep)) buffer.write(" [hasPendingSweep]");
        return buffer.toString();
      } else {
        return super.toString();
      }
    }
  };
  (src__gestures__arena._GestureArena.new = function() {
    this.members = JSArrayOfGestureArenaMember().of([]);
    this.isOpen = true;
    this.isHeld = false;
    this.hasPendingSweep = false;
    this.eagerWinner = null;
  }).prototype = src__gestures__arena._GestureArena.prototype;
  dart.addTypeTests(src__gestures__arena._GestureArena);
  dart.setMethodSignature(src__gestures__arena._GestureArena, () => ({
    __proto__: dart.getMethods(src__gestures__arena._GestureArena.__proto__),
    add: dart.fnType(dart.void, [src__gestures__arena.GestureArenaMember])
  }));
  dart.setLibraryUri(src__gestures__arena._GestureArena, "package:flutter_web/src/gestures/arena.dart");
  dart.setFieldSignature(src__gestures__arena._GestureArena, () => ({
    __proto__: dart.getFields(src__gestures__arena._GestureArena.__proto__),
    members: dart.finalFieldType(ListOfGestureArenaMember()),
    isOpen: dart.fieldType(core.bool),
    isHeld: dart.fieldType(core.bool),
    hasPendingSweep: dart.fieldType(core.bool),
    eagerWinner: dart.fieldType(src__gestures__arena.GestureArenaMember)
  }));
  dart.defineExtensionMethods(src__gestures__arena._GestureArena, ['toString']);
  const _arenas = dart.privateName(src__gestures__arena, "_arenas");
  const _debugLogDiagnostic = dart.privateName(src__gestures__arena, "_debugLogDiagnostic");
  const _tryToResolveArena = dart.privateName(src__gestures__arena, "_tryToResolveArena");
  const _resolveInFavorOf = dart.privateName(src__gestures__arena, "_resolveInFavorOf");
  const _resolveByDefault = dart.privateName(src__gestures__arena, "_resolveByDefault");
  src__gestures__arena.GestureArenaManager = class GestureArenaManager extends core.Object {
    add(pointer, member) {
      let state = this[_arenas][$putIfAbsent](pointer, dart.fn(() => {
        if (!dart.test(this[_debugLogDiagnostic](pointer, "★ Opening new gesture arena."))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/arena.dart", 109, 14, "_debugLogDiagnostic(pointer, '★ Opening new gesture arena.')");
        return new src__gestures__arena._GestureArena.new();
      }, VoidTo_GestureArena()));
      state.add(member);
      if (!dart.test(this[_debugLogDiagnostic](pointer, "Adding: " + dart.str(member)))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/arena.dart", 113, 12, "_debugLogDiagnostic(pointer, 'Adding: $member')");
      return new src__gestures__arena.GestureArenaEntry.__(this, pointer, member);
    }
    close(pointer) {
      let state = this[_arenas][$_get](pointer);
      if (state == null) return;
      state.isOpen = false;
      if (!dart.test(this[_debugLogDiagnostic](pointer, "Closing", state))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/arena.dart", 125, 12, "_debugLogDiagnostic(pointer, 'Closing', state)");
      this[_tryToResolveArena](pointer, state);
    }
    sweep(pointer) {
      let state = this[_arenas][$_get](pointer);
      if (state == null) return;
      if (!!dart.test(state.isOpen)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/arena.dart", 146, 12, "!state.isOpen");
      if (dart.test(state.isHeld)) {
        state.hasPendingSweep = true;
        if (!dart.test(this[_debugLogDiagnostic](pointer, "Delaying sweep", state))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/arena.dart", 149, 14, "_debugLogDiagnostic(pointer, 'Delaying sweep', state)");
        return;
      }
      if (!dart.test(this[_debugLogDiagnostic](pointer, "Sweeping", state))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/arena.dart", 152, 12, "_debugLogDiagnostic(pointer, 'Sweeping', state)");
      this[_arenas][$remove](pointer);
      if (dart.test(state.members[$isNotEmpty])) {
        if (!dart.test(this[_debugLogDiagnostic](pointer, "Winner: " + dart.str(state.members[$first])))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/arena.dart", 156, 14, "_debugLogDiagnostic(pointer, 'Winner: ${state.members.first}')");
        state.members[$first].acceptGesture(pointer);
        for (let i = 1; i < dart.notNull(state.members[$length]); i++)
          state.members[$_get](i).rejectGesture(pointer);
      }
    }
    hold(pointer) {
      let state = this[_arenas][$_get](pointer);
      if (state == null) return;
      state.isHeld = true;
      if (!dart.test(this[_debugLogDiagnostic](pointer, "Holding", state))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/arena.dart", 181, 12, "_debugLogDiagnostic(pointer, 'Holding', state)");
    }
    release(pointer) {
      let state = this[_arenas][$_get](pointer);
      if (state == null) return;
      state.isHeld = false;
      if (!dart.test(this[_debugLogDiagnostic](pointer, "Releasing", state))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/arena.dart", 198, 12, "_debugLogDiagnostic(pointer, 'Releasing', state)");
      if (dart.test(state.hasPendingSweep)) this.sweep(pointer);
    }
    [_resolve](pointer, member, disposition) {
      let state = this[_arenas][$_get](pointer);
      if (state == null) return;
      if (!dart.test(this[_debugLogDiagnostic](pointer, (disposition === src__gestures__arena.GestureDisposition.accepted ? "Accepting" : "Rejecting") + ": " + dart.str(member)))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/arena.dart", 209, 12, "_debugLogDiagnostic(pointer, '${disposition == GestureDisposition.accepted ? \"Accepting\" : \"Rejecting\"}: $member')");
      if (!dart.test(state.members[$contains](member))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/arena.dart", 211, 12, "state.members.contains(member)");
      if (disposition === src__gestures__arena.GestureDisposition.rejected) {
        state.members[$remove](member);
        member.rejectGesture(pointer);
        if (!dart.test(state.isOpen)) this[_tryToResolveArena](pointer, state);
      } else {
        if (!(disposition === src__gestures__arena.GestureDisposition.accepted)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/arena.dart", 217, 14, "disposition == GestureDisposition.accepted");
        if (dart.test(state.isOpen)) {
          let t = state.eagerWinner;
          t == null ? state.eagerWinner = member : t;
        } else {
          if (!dart.test(this[_debugLogDiagnostic](pointer, "Self-declared winner: " + dart.str(member)))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/arena.dart", 221, 16, "_debugLogDiagnostic(pointer, 'Self-declared winner: $member')");
          this[_resolveInFavorOf](pointer, state, member);
        }
      }
    }
    [_tryToResolveArena](pointer, state) {
      if (!dart.equals(this[_arenas][$_get](pointer), state)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/arena.dart", 228, 12, "_arenas[pointer] == state");
      if (!!dart.test(state.isOpen)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/arena.dart", 229, 12, "!state.isOpen");
      if (state.members[$length] === 1) {
        async.scheduleMicrotask(dart.fn(() => this[_resolveByDefault](pointer, state), VoidTovoid()));
      } else if (dart.test(state.members[$isEmpty])) {
        this[_arenas][$remove](pointer);
        if (!dart.test(this[_debugLogDiagnostic](pointer, "Arena empty."))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/arena.dart", 234, 14, "_debugLogDiagnostic(pointer, 'Arena empty.')");
      } else if (state.eagerWinner != null) {
        if (!dart.test(this[_debugLogDiagnostic](pointer, "Eager winner: " + dart.str(state.eagerWinner)))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/arena.dart", 237, 11, "_debugLogDiagnostic(pointer, 'Eager winner: ${state.eagerWinner}')");
        this[_resolveInFavorOf](pointer, state, state.eagerWinner);
      }
    }
    [_resolveByDefault](pointer, state) {
      if (!dart.test(this[_arenas][$containsKey](pointer))) return;
      if (!dart.equals(this[_arenas][$_get](pointer), state)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/arena.dart", 244, 12, "_arenas[pointer] == state");
      if (!!dart.test(state.isOpen)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/arena.dart", 245, 12, "!state.isOpen");
      let members = state.members;
      if (!(members[$length] === 1)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/arena.dart", 247, 12, "members.length == 1");
      this[_arenas][$remove](pointer);
      if (!dart.test(this[_debugLogDiagnostic](pointer, "Default winner: " + dart.str(state.members[$first])))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/arena.dart", 250, 9, "_debugLogDiagnostic(pointer, 'Default winner: ${state.members.first}')");
      state.members[$first].acceptGesture(pointer);
    }
    [_resolveInFavorOf](pointer, state, member) {
      if (!dart.equals(state, this[_arenas][$_get](pointer))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/arena.dart", 256, 12, "state == _arenas[pointer]");
      if (!(state != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/arena.dart", 257, 12, "state != null");
      if (!(state.eagerWinner == null || dart.equals(state.eagerWinner, member))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/arena.dart", 258, 12, "state.eagerWinner == null || state.eagerWinner == member");
      if (!!dart.test(state.isOpen)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/arena.dart", 259, 12, "!state.isOpen");
      this[_arenas][$remove](pointer);
      for (let rejectedMember of state.members) {
        if (!dart.equals(rejectedMember, member)) rejectedMember.rejectGesture(pointer);
      }
      member.acceptGesture(pointer);
    }
    [_debugLogDiagnostic](pointer, message, state) {
      if (state === void 0) state = null;
      if (!dart.test(dart.fn(() => {
        if (dart.test(src__gestures__debug.debugPrintGestureArenaDiagnostics)) {
          let count = state != null ? state.members[$length] : null;
          let s = count !== 1 ? "s" : "";
          src__foundation__print.debugPrint("Gesture arena " + dart.toString(pointer)[$padRight](4) + " ❙ " + dart.str(message) + (count != null ? " with " + dart.str(count) + " member" + s + "." : ""));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/arena.dart", 268, 12, "() {if (debugPrintGestureArenaDiagnostics) {final int count = state != null ? state.members.length : null; final String s = count != 1 ? 's' : ''; debugPrint('Gesture arena ${pointer.toString().padRight(4)} ❙ $message${count != null ? \" with $count member$s.\" : \"\"}');} return true;}()");
      return true;
    }
  };
  (src__gestures__arena.GestureArenaManager.new = function() {
    this[_arenas] = new (IdentityMapOfint$_GestureArena()).new();
  }).prototype = src__gestures__arena.GestureArenaManager.prototype;
  dart.addTypeTests(src__gestures__arena.GestureArenaManager);
  dart.setMethodSignature(src__gestures__arena.GestureArenaManager, () => ({
    __proto__: dart.getMethods(src__gestures__arena.GestureArenaManager.__proto__),
    add: dart.fnType(src__gestures__arena.GestureArenaEntry, [core.int, src__gestures__arena.GestureArenaMember]),
    close: dart.fnType(dart.void, [core.int]),
    sweep: dart.fnType(dart.void, [core.int]),
    hold: dart.fnType(dart.void, [core.int]),
    release: dart.fnType(dart.void, [core.int]),
    [_resolve]: dart.fnType(dart.void, [core.int, src__gestures__arena.GestureArenaMember, src__gestures__arena.GestureDisposition]),
    [_tryToResolveArena]: dart.fnType(dart.void, [core.int, src__gestures__arena._GestureArena]),
    [_resolveByDefault]: dart.fnType(dart.void, [core.int, src__gestures__arena._GestureArena]),
    [_resolveInFavorOf]: dart.fnType(dart.void, [core.int, src__gestures__arena._GestureArena, src__gestures__arena.GestureArenaMember]),
    [_debugLogDiagnostic]: dart.fnType(core.bool, [core.int, core.String], [src__gestures__arena._GestureArena])
  }));
  dart.setLibraryUri(src__gestures__arena.GestureArenaManager, "package:flutter_web/src/gestures/arena.dart");
  dart.setFieldSignature(src__gestures__arena.GestureArenaManager, () => ({
    __proto__: dart.getFields(src__gestures__arena.GestureArenaManager.__proto__),
    [_arenas]: dart.finalFieldType(MapOfint$_GestureArena())
  }));
  dart.defineLazy(src__gestures__events, {
    /*src__gestures__events.kPrimaryButton*/get kPrimaryButton() {
      return 1;
    },
    /*src__gestures__events.kSecondaryButton*/get kSecondaryButton() {
      return 2;
    },
    /*src__gestures__events.kPrimaryMouseButton*/get kPrimaryMouseButton() {
      return 1;
    },
    /*src__gestures__events.kSecondaryMouseButton*/get kSecondaryMouseButton() {
      return 2;
    },
    /*src__gestures__events.kStylusContact*/get kStylusContact() {
      return 1;
    },
    /*src__gestures__events.kPrimaryStylusButton*/get kPrimaryStylusButton() {
      return 2;
    },
    /*src__gestures__events.kMiddleMouseButton*/get kMiddleMouseButton() {
      return 4;
    },
    /*src__gestures__events.kSecondaryStylusButton*/get kSecondaryStylusButton() {
      return 4;
    },
    /*src__gestures__events.kBackMouseButton*/get kBackMouseButton() {
      return 8;
    },
    /*src__gestures__events.kForwardMouseButton*/get kForwardMouseButton() {
      return 16;
    },
    /*src__gestures__events.kTouchContact*/get kTouchContact() {
      return 1;
    }
  });
  src__gestures__events.nthMouseButton = function(number) {
    return ((1)[$leftShift](dart.notNull(number) - 1) & -1) >>> 0;
  };
  src__gestures__events.nthStylusButton = function(number) {
    return ((2)[$leftShift](dart.notNull(number) - 1) & -1) >>> 0;
  };
  src__gestures__events.smallestButton = function(buttons) {
    return (dart.notNull(buttons) & -dart.notNull(buttons)) >>> 0;
  };
  src__gestures__events.isSingleButton = function(buttons) {
    return buttons !== 0 && src__gestures__events.smallestButton(buttons) == buttons;
  };
  src__gestures__events.PointerEvent = class PointerEvent extends src__foundation__diagnostics.Diagnosticable {
    get timeStamp() {
      return this[timeStamp$];
    }
    set timeStamp(value) {
      super.timeStamp = value;
    }
    get pointer() {
      return this[pointer$];
    }
    set pointer(value) {
      super.pointer = value;
    }
    get kind() {
      return this[kind$];
    }
    set kind(value) {
      super.kind = value;
    }
    get device() {
      return this[device$];
    }
    set device(value) {
      super.device = value;
    }
    get position() {
      return this[position$];
    }
    set position(value) {
      super.position = value;
    }
    get delta() {
      return this[delta$];
    }
    set delta(value) {
      super.delta = value;
    }
    get buttons() {
      return this[buttons$];
    }
    set buttons(value) {
      super.buttons = value;
    }
    get down() {
      return this[down$];
    }
    set down(value) {
      super.down = value;
    }
    get obscured() {
      return this[obscured$];
    }
    set obscured(value) {
      super.obscured = value;
    }
    get pressure() {
      return this[pressure$];
    }
    set pressure(value) {
      super.pressure = value;
    }
    get pressureMin() {
      return this[pressureMin$];
    }
    set pressureMin(value) {
      super.pressureMin = value;
    }
    get pressureMax() {
      return this[pressureMax$];
    }
    set pressureMax(value) {
      super.pressureMax = value;
    }
    get distance() {
      return this[distance$];
    }
    set distance(value) {
      super.distance = value;
    }
    get distanceMin() {
      return 0.0;
    }
    get distanceMax() {
      return this[distanceMax$];
    }
    set distanceMax(value) {
      super.distanceMax = value;
    }
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    get radiusMajor() {
      return this[radiusMajor$];
    }
    set radiusMajor(value) {
      super.radiusMajor = value;
    }
    get radiusMinor() {
      return this[radiusMinor$];
    }
    set radiusMinor(value) {
      super.radiusMinor = value;
    }
    get radiusMin() {
      return this[radiusMin$];
    }
    set radiusMin(value) {
      super.radiusMin = value;
    }
    get radiusMax() {
      return this[radiusMax$];
    }
    set radiusMax(value) {
      super.radiusMax = value;
    }
    get orientation() {
      return this[orientation$];
    }
    set orientation(value) {
      super.orientation = value;
    }
    get tilt() {
      return this[tilt$];
    }
    set tilt(value) {
      super.tilt = value;
    }
    get platformData() {
      return this[platformData$];
    }
    set platformData(value) {
      super.platformData = value;
    }
    get synthesized() {
      return this[synthesized$];
    }
    set synthesized(value) {
      super.synthesized = value;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfOffset()).new("position", this.position));
      properties.add(new (DiagnosticsPropertyOfOffset()).new("delta", this.delta, {defaultValue: ui$.Offset.zero, level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new (DiagnosticsPropertyOfDuration()).new("timeStamp", this.timeStamp, {defaultValue: core.Duration.zero, level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new src__foundation__diagnostics.IntProperty.new("pointer", this.pointer, {level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new (EnumPropertyOfPointerDeviceKind()).new("kind", this.kind, {level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new src__foundation__diagnostics.IntProperty.new("device", this.device, {defaultValue: 0, level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new src__foundation__diagnostics.IntProperty.new("buttons", this.buttons, {defaultValue: 0, level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new (DiagnosticsPropertyOfbool()).new("down", this.down, {level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new src__foundation__diagnostics.DoubleProperty.new("pressure", this.pressure, {defaultValue: 1.0, level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new src__foundation__diagnostics.DoubleProperty.new("pressureMin", this.pressureMin, {defaultValue: 1.0, level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new src__foundation__diagnostics.DoubleProperty.new("pressureMax", this.pressureMax, {defaultValue: 1.0, level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new src__foundation__diagnostics.DoubleProperty.new("distance", this.distance, {defaultValue: 0.0, level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new src__foundation__diagnostics.DoubleProperty.new("distanceMin", this.distanceMin, {defaultValue: 0.0, level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new src__foundation__diagnostics.DoubleProperty.new("distanceMax", this.distanceMax, {defaultValue: 0.0, level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new src__foundation__diagnostics.DoubleProperty.new("size", this.size, {defaultValue: 0.0, level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new src__foundation__diagnostics.DoubleProperty.new("radiusMajor", this.radiusMajor, {defaultValue: 0.0, level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new src__foundation__diagnostics.DoubleProperty.new("radiusMinor", this.radiusMinor, {defaultValue: 0.0, level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new src__foundation__diagnostics.DoubleProperty.new("radiusMin", this.radiusMin, {defaultValue: 0.0, level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new src__foundation__diagnostics.DoubleProperty.new("radiusMax", this.radiusMax, {defaultValue: 0.0, level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new src__foundation__diagnostics.DoubleProperty.new("orientation", this.orientation, {defaultValue: 0.0, level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new src__foundation__diagnostics.DoubleProperty.new("tilt", this.tilt, {defaultValue: 0.0, level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new src__foundation__diagnostics.IntProperty.new("platformData", this.platformData, {defaultValue: 0, level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new src__foundation__diagnostics.FlagProperty.new("obscured", {value: this.obscured, ifTrue: "obscured", level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new src__foundation__diagnostics.FlagProperty.new("synthesized", {value: this.synthesized, ifTrue: "synthesized", level: src__foundation__diagnostics.DiagnosticLevel.debug}));
    }
    toStringFull() {
      return this.toString({minLevel: src__foundation__diagnostics.DiagnosticLevel.fine});
    }
  };
  (src__gestures__events.PointerEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : core.Duration.zero;
    let pointer = opts && 'pointer' in opts ? opts.pointer : 0;
    let kind = opts && 'kind' in opts ? opts.kind : ui$.PointerDeviceKind.touch;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : ui$.Offset.zero;
    let delta = opts && 'delta' in opts ? opts.delta : ui$.Offset.zero;
    let buttons = opts && 'buttons' in opts ? opts.buttons : 0;
    let down = opts && 'down' in opts ? opts.down : false;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressure = opts && 'pressure' in opts ? opts.pressure : 1.0;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1.0;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1.0;
    let distance = opts && 'distance' in opts ? opts.distance : 0.0;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0.0;
    let size = opts && 'size' in opts ? opts.size : 0.0;
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0.0;
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0.0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0.0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0.0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0.0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0.0;
    let platformData = opts && 'platformData' in opts ? opts.platformData : 0;
    let synthesized = opts && 'synthesized' in opts ? opts.synthesized : false;
    this[timeStamp$] = timeStamp;
    this[pointer$] = pointer;
    this[kind$] = kind;
    this[device$] = device;
    this[position$] = position;
    this[delta$] = delta;
    this[buttons$] = buttons;
    this[down$] = down;
    this[obscured$] = obscured;
    this[pressure$] = pressure;
    this[pressureMin$] = pressureMin;
    this[pressureMax$] = pressureMax;
    this[distance$] = distance;
    this[distanceMax$] = distanceMax;
    this[size$] = size;
    this[radiusMajor$] = radiusMajor;
    this[radiusMinor$] = radiusMinor;
    this[radiusMin$] = radiusMin;
    this[radiusMax$] = radiusMax;
    this[orientation$] = orientation;
    this[tilt$] = tilt;
    this[platformData$] = platformData;
    this[synthesized$] = synthesized;
    src__gestures__events.PointerEvent.__proto__.new.call(this);
  }).prototype = src__gestures__events.PointerEvent.prototype;
  dart.addTypeTests(src__gestures__events.PointerEvent);
  const timeStamp$ = Symbol("PointerEvent.timeStamp");
  const pointer$ = Symbol("PointerEvent.pointer");
  const kind$ = Symbol("PointerEvent.kind");
  const device$ = Symbol("PointerEvent.device");
  const position$ = Symbol("PointerEvent.position");
  const delta$ = Symbol("PointerEvent.delta");
  const buttons$ = Symbol("PointerEvent.buttons");
  const down$ = Symbol("PointerEvent.down");
  const obscured$ = Symbol("PointerEvent.obscured");
  const pressure$ = Symbol("PointerEvent.pressure");
  const pressureMin$ = Symbol("PointerEvent.pressureMin");
  const pressureMax$ = Symbol("PointerEvent.pressureMax");
  const distance$ = Symbol("PointerEvent.distance");
  const distanceMax$ = Symbol("PointerEvent.distanceMax");
  const size$ = Symbol("PointerEvent.size");
  const radiusMajor$ = Symbol("PointerEvent.radiusMajor");
  const radiusMinor$ = Symbol("PointerEvent.radiusMinor");
  const radiusMin$ = Symbol("PointerEvent.radiusMin");
  const radiusMax$ = Symbol("PointerEvent.radiusMax");
  const orientation$ = Symbol("PointerEvent.orientation");
  const tilt$ = Symbol("PointerEvent.tilt");
  const platformData$ = Symbol("PointerEvent.platformData");
  const synthesized$ = Symbol("PointerEvent.synthesized");
  dart.setMethodSignature(src__gestures__events.PointerEvent, () => ({
    __proto__: dart.getMethods(src__gestures__events.PointerEvent.__proto__),
    toStringFull: dart.fnType(core.String, [])
  }));
  dart.setGetterSignature(src__gestures__events.PointerEvent, () => ({
    __proto__: dart.getGetters(src__gestures__events.PointerEvent.__proto__),
    distanceMin: core.double
  }));
  dart.setLibraryUri(src__gestures__events.PointerEvent, "package:flutter_web/src/gestures/events.dart");
  dart.setFieldSignature(src__gestures__events.PointerEvent, () => ({
    __proto__: dart.getFields(src__gestures__events.PointerEvent.__proto__),
    timeStamp: dart.finalFieldType(core.Duration),
    pointer: dart.finalFieldType(core.int),
    kind: dart.finalFieldType(ui$.PointerDeviceKind),
    device: dart.finalFieldType(core.int),
    position: dart.finalFieldType(ui$.Offset),
    delta: dart.finalFieldType(ui$.Offset),
    buttons: dart.finalFieldType(core.int),
    down: dart.finalFieldType(core.bool),
    obscured: dart.finalFieldType(core.bool),
    pressure: dart.finalFieldType(core.double),
    pressureMin: dart.finalFieldType(core.double),
    pressureMax: dart.finalFieldType(core.double),
    distance: dart.finalFieldType(core.double),
    distanceMax: dart.finalFieldType(core.double),
    size: dart.finalFieldType(core.double),
    radiusMajor: dart.finalFieldType(core.double),
    radiusMinor: dart.finalFieldType(core.double),
    radiusMin: dart.finalFieldType(core.double),
    radiusMax: dart.finalFieldType(core.double),
    orientation: dart.finalFieldType(core.double),
    tilt: dart.finalFieldType(core.double),
    platformData: dart.finalFieldType(core.int),
    synthesized: dart.finalFieldType(core.bool)
  }));
  src__gestures__events.PointerAddedEvent = class PointerAddedEvent extends src__gestures__events.PointerEvent {};
  (src__gestures__events.PointerAddedEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : core.Duration.zero;
    let kind = opts && 'kind' in opts ? opts.kind : ui$.PointerDeviceKind.touch;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : ui$.Offset.zero;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1.0;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1.0;
    let distance = opts && 'distance' in opts ? opts.distance : 0.0;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0.0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0.0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0.0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0.0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0.0;
    src__gestures__events.PointerAddedEvent.__proto__.new.call(this, {timeStamp: timeStamp, kind: kind, device: device, position: position, obscured: obscured, pressure: 0.0, pressureMin: pressureMin, pressureMax: pressureMax, distance: distance, distanceMax: distanceMax, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt});
  }).prototype = src__gestures__events.PointerAddedEvent.prototype;
  dart.addTypeTests(src__gestures__events.PointerAddedEvent);
  dart.setLibraryUri(src__gestures__events.PointerAddedEvent, "package:flutter_web/src/gestures/events.dart");
  src__gestures__events.PointerRemovedEvent = class PointerRemovedEvent extends src__gestures__events.PointerEvent {};
  (src__gestures__events.PointerRemovedEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : core.Duration.zero;
    let kind = opts && 'kind' in opts ? opts.kind : ui$.PointerDeviceKind.touch;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : ui$.Offset.zero;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1.0;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1.0;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0.0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0.0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0.0;
    src__gestures__events.PointerRemovedEvent.__proto__.new.call(this, {timeStamp: timeStamp, kind: kind, device: device, position: position, obscured: obscured, pressure: 0.0, pressureMin: pressureMin, pressureMax: pressureMax, distanceMax: distanceMax, radiusMin: radiusMin, radiusMax: radiusMax});
  }).prototype = src__gestures__events.PointerRemovedEvent.prototype;
  dart.addTypeTests(src__gestures__events.PointerRemovedEvent);
  dart.setLibraryUri(src__gestures__events.PointerRemovedEvent, "package:flutter_web/src/gestures/events.dart");
  src__gestures__events.PointerHoverEvent = class PointerHoverEvent extends src__gestures__events.PointerEvent {};
  (src__gestures__events.PointerHoverEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : core.Duration.zero;
    let kind = opts && 'kind' in opts ? opts.kind : ui$.PointerDeviceKind.touch;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : ui$.Offset.zero;
    let delta = opts && 'delta' in opts ? opts.delta : ui$.Offset.zero;
    let buttons = opts && 'buttons' in opts ? opts.buttons : 0;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1.0;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1.0;
    let distance = opts && 'distance' in opts ? opts.distance : 0.0;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0.0;
    let size = opts && 'size' in opts ? opts.size : 0.0;
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0.0;
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0.0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0.0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0.0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0.0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0.0;
    let synthesized = opts && 'synthesized' in opts ? opts.synthesized : false;
    src__gestures__events.PointerHoverEvent.__proto__.new.call(this, {timeStamp: timeStamp, kind: kind, device: device, position: position, delta: delta, buttons: buttons, down: false, obscured: obscured, pressure: 0.0, pressureMin: pressureMin, pressureMax: pressureMax, distance: distance, distanceMax: distanceMax, size: size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt, synthesized: synthesized});
  }).prototype = src__gestures__events.PointerHoverEvent.prototype;
  dart.addTypeTests(src__gestures__events.PointerHoverEvent);
  dart.setLibraryUri(src__gestures__events.PointerHoverEvent, "package:flutter_web/src/gestures/events.dart");
  src__gestures__events.PointerEnterEvent = class PointerEnterEvent extends src__gestures__events.PointerEvent {};
  (src__gestures__events.PointerEnterEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : core.Duration.zero;
    let kind = opts && 'kind' in opts ? opts.kind : ui$.PointerDeviceKind.touch;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : ui$.Offset.zero;
    let delta = opts && 'delta' in opts ? opts.delta : ui$.Offset.zero;
    let buttons = opts && 'buttons' in opts ? opts.buttons : 0;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1.0;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1.0;
    let distance = opts && 'distance' in opts ? opts.distance : 0.0;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0.0;
    let size = opts && 'size' in opts ? opts.size : 0.0;
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0.0;
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0.0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0.0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0.0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0.0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0.0;
    let synthesized = opts && 'synthesized' in opts ? opts.synthesized : false;
    src__gestures__events.PointerEnterEvent.__proto__.new.call(this, {timeStamp: timeStamp, kind: kind, device: device, position: position, delta: delta, buttons: buttons, down: false, obscured: obscured, pressure: 0.0, pressureMin: pressureMin, pressureMax: pressureMax, distance: distance, distanceMax: distanceMax, size: size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt, synthesized: synthesized});
  }).prototype = src__gestures__events.PointerEnterEvent.prototype;
  (src__gestures__events.PointerEnterEvent.fromHoverEvent = function(event) {
    src__gestures__events.PointerEnterEvent.fromMouseEvent.call(this, event);
  }).prototype = src__gestures__events.PointerEnterEvent.prototype;
  (src__gestures__events.PointerEnterEvent.fromMouseEvent = function(event) {
    src__gestures__events.PointerEnterEvent.new.call(this, {timeStamp: event == null ? null : event.timeStamp, kind: event == null ? null : event.kind, device: event == null ? null : event.device, position: event == null ? null : event.position, delta: event == null ? null : event.delta, buttons: event == null ? null : event.buttons, obscured: event == null ? null : event.obscured, pressureMin: event == null ? null : event.pressureMin, pressureMax: event == null ? null : event.pressureMax, distance: event == null ? null : event.distance, distanceMax: event == null ? null : event.distanceMax, size: event == null ? null : event.size, radiusMajor: event == null ? null : event.radiusMajor, radiusMinor: event == null ? null : event.radiusMinor, radiusMin: event == null ? null : event.radiusMin, radiusMax: event == null ? null : event.radiusMax, orientation: event == null ? null : event.orientation, tilt: event == null ? null : event.tilt, synthesized: event == null ? null : event.synthesized});
  }).prototype = src__gestures__events.PointerEnterEvent.prototype;
  dart.addTypeTests(src__gestures__events.PointerEnterEvent);
  dart.setLibraryUri(src__gestures__events.PointerEnterEvent, "package:flutter_web/src/gestures/events.dart");
  src__gestures__events.PointerExitEvent = class PointerExitEvent extends src__gestures__events.PointerEvent {};
  (src__gestures__events.PointerExitEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : core.Duration.zero;
    let kind = opts && 'kind' in opts ? opts.kind : ui$.PointerDeviceKind.touch;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : ui$.Offset.zero;
    let delta = opts && 'delta' in opts ? opts.delta : ui$.Offset.zero;
    let buttons = opts && 'buttons' in opts ? opts.buttons : 0;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1.0;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1.0;
    let distance = opts && 'distance' in opts ? opts.distance : 0.0;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0.0;
    let size = opts && 'size' in opts ? opts.size : 0.0;
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0.0;
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0.0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0.0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0.0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0.0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0.0;
    let synthesized = opts && 'synthesized' in opts ? opts.synthesized : false;
    src__gestures__events.PointerExitEvent.__proto__.new.call(this, {timeStamp: timeStamp, kind: kind, device: device, position: position, delta: delta, buttons: buttons, down: false, obscured: obscured, pressure: 0.0, pressureMin: pressureMin, pressureMax: pressureMax, distance: distance, distanceMax: distanceMax, size: size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt, synthesized: synthesized});
  }).prototype = src__gestures__events.PointerExitEvent.prototype;
  (src__gestures__events.PointerExitEvent.fromHoverEvent = function(event) {
    src__gestures__events.PointerExitEvent.fromMouseEvent.call(this, event);
  }).prototype = src__gestures__events.PointerExitEvent.prototype;
  (src__gestures__events.PointerExitEvent.fromMouseEvent = function(event) {
    src__gestures__events.PointerExitEvent.new.call(this, {timeStamp: event == null ? null : event.timeStamp, kind: event == null ? null : event.kind, device: event == null ? null : event.device, position: event == null ? null : event.position, delta: event == null ? null : event.delta, buttons: event == null ? null : event.buttons, obscured: event == null ? null : event.obscured, pressureMin: event == null ? null : event.pressureMin, pressureMax: event == null ? null : event.pressureMax, distance: event == null ? null : event.distance, distanceMax: event == null ? null : event.distanceMax, size: event == null ? null : event.size, radiusMajor: event == null ? null : event.radiusMajor, radiusMinor: event == null ? null : event.radiusMinor, radiusMin: event == null ? null : event.radiusMin, radiusMax: event == null ? null : event.radiusMax, orientation: event == null ? null : event.orientation, tilt: event == null ? null : event.tilt, synthesized: event == null ? null : event.synthesized});
  }).prototype = src__gestures__events.PointerExitEvent.prototype;
  dart.addTypeTests(src__gestures__events.PointerExitEvent);
  dart.setLibraryUri(src__gestures__events.PointerExitEvent, "package:flutter_web/src/gestures/events.dart");
  src__gestures__events.PointerDownEvent = class PointerDownEvent extends src__gestures__events.PointerEvent {};
  (src__gestures__events.PointerDownEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : core.Duration.zero;
    let pointer = opts && 'pointer' in opts ? opts.pointer : 0;
    let kind = opts && 'kind' in opts ? opts.kind : ui$.PointerDeviceKind.touch;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : ui$.Offset.zero;
    let buttons = opts && 'buttons' in opts ? opts.buttons : 1;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressure = opts && 'pressure' in opts ? opts.pressure : 1.0;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1.0;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1.0;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0.0;
    let size = opts && 'size' in opts ? opts.size : 0.0;
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0.0;
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0.0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0.0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0.0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0.0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0.0;
    src__gestures__events.PointerDownEvent.__proto__.new.call(this, {timeStamp: timeStamp, pointer: pointer, kind: kind, device: device, position: position, buttons: buttons, down: true, obscured: obscured, pressure: pressure, pressureMin: pressureMin, pressureMax: pressureMax, distance: 0.0, distanceMax: distanceMax, size: size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt});
  }).prototype = src__gestures__events.PointerDownEvent.prototype;
  dart.addTypeTests(src__gestures__events.PointerDownEvent);
  dart.setLibraryUri(src__gestures__events.PointerDownEvent, "package:flutter_web/src/gestures/events.dart");
  src__gestures__events.PointerMoveEvent = class PointerMoveEvent extends src__gestures__events.PointerEvent {};
  (src__gestures__events.PointerMoveEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : core.Duration.zero;
    let pointer = opts && 'pointer' in opts ? opts.pointer : 0;
    let kind = opts && 'kind' in opts ? opts.kind : ui$.PointerDeviceKind.touch;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : ui$.Offset.zero;
    let delta = opts && 'delta' in opts ? opts.delta : ui$.Offset.zero;
    let buttons = opts && 'buttons' in opts ? opts.buttons : 1;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressure = opts && 'pressure' in opts ? opts.pressure : 1.0;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1.0;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1.0;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0.0;
    let size = opts && 'size' in opts ? opts.size : 0.0;
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0.0;
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0.0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0.0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0.0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0.0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0.0;
    let platformData = opts && 'platformData' in opts ? opts.platformData : 0;
    let synthesized = opts && 'synthesized' in opts ? opts.synthesized : false;
    src__gestures__events.PointerMoveEvent.__proto__.new.call(this, {timeStamp: timeStamp, pointer: pointer, kind: kind, device: device, position: position, delta: delta, buttons: buttons, down: true, obscured: obscured, pressure: pressure, pressureMin: pressureMin, pressureMax: pressureMax, distance: 0.0, distanceMax: distanceMax, size: size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt, platformData: platformData, synthesized: synthesized});
  }).prototype = src__gestures__events.PointerMoveEvent.prototype;
  dart.addTypeTests(src__gestures__events.PointerMoveEvent);
  dart.setLibraryUri(src__gestures__events.PointerMoveEvent, "package:flutter_web/src/gestures/events.dart");
  src__gestures__events.PointerUpEvent = class PointerUpEvent extends src__gestures__events.PointerEvent {};
  (src__gestures__events.PointerUpEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : core.Duration.zero;
    let pointer = opts && 'pointer' in opts ? opts.pointer : 0;
    let kind = opts && 'kind' in opts ? opts.kind : ui$.PointerDeviceKind.touch;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : ui$.Offset.zero;
    let buttons = opts && 'buttons' in opts ? opts.buttons : 0;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressure = opts && 'pressure' in opts ? opts.pressure : 0.0;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1.0;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1.0;
    let distance = opts && 'distance' in opts ? opts.distance : 0.0;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0.0;
    let size = opts && 'size' in opts ? opts.size : 0.0;
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0.0;
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0.0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0.0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0.0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0.0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0.0;
    src__gestures__events.PointerUpEvent.__proto__.new.call(this, {timeStamp: timeStamp, pointer: pointer, kind: kind, device: device, position: position, buttons: buttons, down: false, obscured: obscured, pressure: pressure, pressureMin: pressureMin, pressureMax: pressureMax, distance: distance, distanceMax: distanceMax, size: size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt});
  }).prototype = src__gestures__events.PointerUpEvent.prototype;
  dart.addTypeTests(src__gestures__events.PointerUpEvent);
  dart.setLibraryUri(src__gestures__events.PointerUpEvent, "package:flutter_web/src/gestures/events.dart");
  src__gestures__events.PointerSignalEvent = class PointerSignalEvent extends src__gestures__events.PointerEvent {};
  (src__gestures__events.PointerSignalEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : core.Duration.zero;
    let pointer = opts && 'pointer' in opts ? opts.pointer : 0;
    let kind = opts && 'kind' in opts ? opts.kind : ui$.PointerDeviceKind.mouse;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : ui$.Offset.zero;
    src__gestures__events.PointerSignalEvent.__proto__.new.call(this, {timeStamp: timeStamp, pointer: pointer, kind: kind, device: device, position: position});
  }).prototype = src__gestures__events.PointerSignalEvent.prototype;
  dart.addTypeTests(src__gestures__events.PointerSignalEvent);
  dart.setLibraryUri(src__gestures__events.PointerSignalEvent, "package:flutter_web/src/gestures/events.dart");
  src__gestures__events.PointerScrollEvent = class PointerScrollEvent extends src__gestures__events.PointerSignalEvent {
    get scrollDelta() {
      return this[scrollDelta$];
    }
    set scrollDelta(value) {
      super.scrollDelta = value;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfOffset()).new("scrollDelta", this.scrollDelta));
    }
  };
  (src__gestures__events.PointerScrollEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : core.Duration.zero;
    let kind = opts && 'kind' in opts ? opts.kind : ui$.PointerDeviceKind.mouse;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : ui$.Offset.zero;
    let scrollDelta = opts && 'scrollDelta' in opts ? opts.scrollDelta : ui$.Offset.zero;
    this[scrollDelta$] = scrollDelta;
    if (!(timeStamp != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/events.dart", 970, 16, "timeStamp != null");
    if (!(kind != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/events.dart", 971, 16, "kind != null");
    if (!(device != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/events.dart", 972, 16, "device != null");
    if (!(position != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/events.dart", 973, 16, "position != null");
    if (!(scrollDelta != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/events.dart", 974, 16, "scrollDelta != null");
    src__gestures__events.PointerScrollEvent.__proto__.new.call(this, {timeStamp: timeStamp, kind: kind, device: device, position: position});
  }).prototype = src__gestures__events.PointerScrollEvent.prototype;
  dart.addTypeTests(src__gestures__events.PointerScrollEvent);
  const scrollDelta$ = Symbol("PointerScrollEvent.scrollDelta");
  dart.setLibraryUri(src__gestures__events.PointerScrollEvent, "package:flutter_web/src/gestures/events.dart");
  dart.setFieldSignature(src__gestures__events.PointerScrollEvent, () => ({
    __proto__: dart.getFields(src__gestures__events.PointerScrollEvent.__proto__),
    scrollDelta: dart.finalFieldType(ui$.Offset)
  }));
  src__gestures__events.PointerCancelEvent = class PointerCancelEvent extends src__gestures__events.PointerEvent {};
  (src__gestures__events.PointerCancelEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : core.Duration.zero;
    let pointer = opts && 'pointer' in opts ? opts.pointer : 0;
    let kind = opts && 'kind' in opts ? opts.kind : ui$.PointerDeviceKind.touch;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : ui$.Offset.zero;
    let buttons = opts && 'buttons' in opts ? opts.buttons : 0;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1.0;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1.0;
    let distance = opts && 'distance' in opts ? opts.distance : 0.0;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0.0;
    let size = opts && 'size' in opts ? opts.size : 0.0;
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0.0;
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0.0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0.0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0.0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0.0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0.0;
    src__gestures__events.PointerCancelEvent.__proto__.new.call(this, {timeStamp: timeStamp, pointer: pointer, kind: kind, device: device, position: position, buttons: buttons, down: false, obscured: obscured, pressure: 0.0, pressureMin: pressureMin, pressureMax: pressureMax, distance: distance, distanceMax: distanceMax, size: size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt});
  }).prototype = src__gestures__events.PointerCancelEvent.prototype;
  dart.addTypeTests(src__gestures__events.PointerCancelEvent);
  dart.setLibraryUri(src__gestures__events.PointerCancelEvent, "package:flutter_web/src/gestures/events.dart");
  const _pointer$ = dart.privateName(src__gestures__converter, "_pointer");
  const _down = dart.privateName(src__gestures__converter, "_down");
  src__gestures__converter._PointerState = class _PointerState extends core.Object {
    get pointer() {
      return this[_pointer$];
    }
    startNewPointer() {
      src__gestures__converter._PointerState._pointerCount = dart.notNull(src__gestures__converter._PointerState._pointerCount) + 1;
      this[_pointer$] = src__gestures__converter._PointerState._pointerCount;
    }
    get down() {
      return this[_down];
    }
    setDown() {
      if (!!dart.test(this[_down])) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/converter.dart", 27, 12, "!_down");
      this[_down] = true;
    }
    setUp() {
      if (!dart.test(this[_down])) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/converter.dart", 32, 12, "_down");
      this[_down] = false;
    }
    deltaTo(to) {
      return to['-'](this.lastPosition);
    }
    toString() {
      return "_PointerState(pointer: " + dart.str(this.pointer) + ", down: " + dart.str(this.down) + ", lastPosition: " + dart.str(this.lastPosition) + ")";
    }
  };
  (src__gestures__converter._PointerState.new = function(lastPosition) {
    this[_pointer$] = null;
    this[_down] = false;
    this.lastPosition = lastPosition;
  }).prototype = src__gestures__converter._PointerState.prototype;
  dart.addTypeTests(src__gestures__converter._PointerState);
  dart.setMethodSignature(src__gestures__converter._PointerState, () => ({
    __proto__: dart.getMethods(src__gestures__converter._PointerState.__proto__),
    startNewPointer: dart.fnType(dart.void, []),
    setDown: dart.fnType(dart.void, []),
    setUp: dart.fnType(dart.void, []),
    deltaTo: dart.fnType(ui$.Offset, [ui$.Offset])
  }));
  dart.setGetterSignature(src__gestures__converter._PointerState, () => ({
    __proto__: dart.getGetters(src__gestures__converter._PointerState.__proto__),
    pointer: core.int,
    down: core.bool
  }));
  dart.setLibraryUri(src__gestures__converter._PointerState, "package:flutter_web/src/gestures/converter.dart");
  dart.setFieldSignature(src__gestures__converter._PointerState, () => ({
    __proto__: dart.getFields(src__gestures__converter._PointerState.__proto__),
    [_pointer$]: dart.fieldType(core.int),
    [_down]: dart.fieldType(core.bool),
    lastPosition: dart.fieldType(ui$.Offset)
  }));
  dart.defineExtensionMethods(src__gestures__converter._PointerState, ['toString']);
  dart.defineLazy(src__gestures__converter._PointerState, {
    /*src__gestures__converter._PointerState._pointerCount*/get _pointerCount() {
      return 0;
    },
    set _pointerCount(_) {}
  });
  src__gestures__converter._synthesiseDownButtons = function(buttons, kind) {
    switch (kind) {
      case ui$.PointerDeviceKind.mouse:
      {
        return buttons;
      }
      case ui$.PointerDeviceKind.touch:
      case ui$.PointerDeviceKind.stylus:
      case ui$.PointerDeviceKind.invertedStylus:
      {
        return (dart.notNull(buttons) | 1) >>> 0;
      }
      default:
      {
        return buttons === 0 ? 1 : buttons;
      }
    }
  };
  src__gestures__converter.PointerEventConverter = class PointerEventConverter extends core.Object {
    static clearPointers() {
      return src__gestures__converter.PointerEventConverter._pointers[$clear]();
    }
    static _ensureStateForPointer(datum, position) {
      return src__gestures__converter.PointerEventConverter._pointers[$putIfAbsent](datum.device, dart.fn(() => new src__gestures__converter._PointerState.new(position), VoidTo_PointerState()));
    }
    static expand(data, devicePixelRatio) {
      return new (SyncIterableOfPointerEvent()).new(function* expand() {
        for (let datum of data) {
          let position = new ui$.Offset.new(datum.physicalX, datum.physicalY)['/'](devicePixelRatio);
          let radiusMinor = src__gestures__converter.PointerEventConverter._toLogicalPixels(datum.radiusMinor, devicePixelRatio);
          let radiusMajor = src__gestures__converter.PointerEventConverter._toLogicalPixels(datum.radiusMajor, devicePixelRatio);
          let radiusMin = src__gestures__converter.PointerEventConverter._toLogicalPixels(datum.radiusMin, devicePixelRatio);
          let radiusMax = src__gestures__converter.PointerEventConverter._toLogicalPixels(datum.radiusMax, devicePixelRatio);
          let timeStamp = datum.timeStamp;
          let kind = datum.kind;
          if (!(datum.change != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/converter.dart", 116, 14, "datum.change != null");
          if (datum.signalKind == null || datum.signalKind === ui$.PointerSignalKind.none) {
            switch (datum.change) {
              case ui$.PointerChange.add:
              {
                if (!!dart.test(src__gestures__converter.PointerEventConverter._pointers[$containsKey](datum.device))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/converter.dart", 121, 20, "!_pointers.containsKey(datum.device)");
                let state = src__gestures__converter.PointerEventConverter._ensureStateForPointer(datum, position);
                if (!dart.equals(state.lastPosition, position)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/converter.dart", 123, 20, "state.lastPosition == position");
                yield new src__gestures__events.PointerAddedEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt});
                break;
              }
              case ui$.PointerChange.hover:
              {
                let alreadyAdded = src__gestures__converter.PointerEventConverter._pointers[$containsKey](datum.device);
                let state = src__gestures__converter.PointerEventConverter._ensureStateForPointer(datum, position);
                if (!!dart.test(state.down)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/converter.dart", 143, 20, "!state.down");
                if (!dart.test(alreadyAdded)) {
                  if (!dart.equals(state.lastPosition, position)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/converter.dart", 145, 22, "state.lastPosition == position");
                  yield new src__gestures__events.PointerAddedEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt});
                }
                yield new src__gestures__events.PointerHoverEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, delta: state.deltaTo(position), buttons: datum.buttons, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt});
                state.lastPosition = position;
                break;
              }
              case ui$.PointerChange.down:
              {
                let alreadyAdded = src__gestures__converter.PointerEventConverter._pointers[$containsKey](datum.device);
                let state = src__gestures__converter.PointerEventConverter._ensureStateForPointer(datum, position);
                if (!!dart.test(state.down)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/converter.dart", 187, 20, "!state.down");
                if (!dart.test(alreadyAdded)) {
                  if (!dart.equals(state.lastPosition, position)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/converter.dart", 189, 22, "state.lastPosition == position");
                  yield new src__gestures__events.PointerAddedEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt});
                }
                if (!dart.equals(state.lastPosition, position)) {
                  yield new src__gestures__events.PointerHoverEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, delta: state.deltaTo(position), buttons: datum.buttons, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt, synthesized: true});
                  state.lastPosition = position;
                }
                state.startNewPointer();
                state.setDown();
                yield new src__gestures__events.PointerDownEvent.new({timeStamp: timeStamp, pointer: state.pointer, kind: kind, device: datum.device, position: position, buttons: src__gestures__converter._synthesiseDownButtons(datum.buttons, kind), obscured: datum.obscured, pressure: datum.pressure, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt});
                break;
              }
              case ui$.PointerChange.move:
              {
                if (!dart.test(src__gestures__converter.PointerEventConverter._pointers[$containsKey](datum.device))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/converter.dart", 260, 20, "_pointers.containsKey(datum.device)");
                let state = src__gestures__converter.PointerEventConverter._pointers[$_get](datum.device);
                if (!dart.test(state.down)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/converter.dart", 262, 20, "state.down");
                yield new src__gestures__events.PointerMoveEvent.new({timeStamp: timeStamp, pointer: state.pointer, kind: kind, device: datum.device, position: position, delta: state.deltaTo(position), buttons: src__gestures__converter._synthesiseDownButtons(datum.buttons, kind), obscured: datum.obscured, pressure: datum.pressure, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt, platformData: datum.platformData});
                state.lastPosition = position;
                break;
              }
              case ui$.PointerChange.up:
              case ui$.PointerChange.cancel:
              {
                if (!dart.test(src__gestures__converter.PointerEventConverter._pointers[$containsKey](datum.device))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/converter.dart", 289, 20, "_pointers.containsKey(datum.device)");
                let state = src__gestures__converter.PointerEventConverter._pointers[$_get](datum.device);
                if (!dart.test(state.down)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/converter.dart", 291, 20, "state.down");
                if (!dart.equals(position, state.lastPosition)) {
                  yield new src__gestures__events.PointerMoveEvent.new({timeStamp: timeStamp, pointer: state.pointer, kind: kind, device: datum.device, position: position, delta: state.deltaTo(position), buttons: src__gestures__converter._synthesiseDownButtons(datum.buttons, kind), obscured: datum.obscured, pressure: datum.pressure, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt, synthesized: true});
                  state.lastPosition = position;
                }
                if (!dart.equals(position, state.lastPosition)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/converter.dart", 322, 20, "position == state.lastPosition");
                state.setUp();
                if (datum.change === ui$.PointerChange.up) {
                  yield new src__gestures__events.PointerUpEvent.new({timeStamp: timeStamp, pointer: state.pointer, kind: kind, device: datum.device, position: position, buttons: datum.buttons, obscured: datum.obscured, pressure: datum.pressure, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt});
                } else {
                  yield new src__gestures__events.PointerCancelEvent.new({timeStamp: timeStamp, pointer: state.pointer, kind: kind, device: datum.device, position: position, buttons: datum.buttons, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt});
                }
                break;
              }
              case ui$.PointerChange.remove:
              {
                if (!dart.test(src__gestures__converter.PointerEventConverter._pointers[$containsKey](datum.device))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/converter.dart", 370, 20, "_pointers.containsKey(datum.device)");
                let state = src__gestures__converter.PointerEventConverter._pointers[$_get](datum.device);
                if (dart.test(state.down)) {
                  yield new src__gestures__events.PointerCancelEvent.new({timeStamp: timeStamp, pointer: state.pointer, kind: kind, device: datum.device, position: state.lastPosition, buttons: datum.buttons, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt});
                }
                if (!dart.equals(position, state.lastPosition)) {
                  yield new src__gestures__events.PointerHoverEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, delta: state.deltaTo(position), buttons: datum.buttons, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt, synthesized: true});
                }
                src__gestures__converter.PointerEventConverter._pointers[$remove](datum.device);
                yield new src__gestures__events.PointerRemovedEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distanceMax: datum.distanceMax, radiusMin: radiusMin, radiusMax: radiusMax});
                break;
              }
            }
          } else {
            switch (datum.signalKind) {
              case ui$.PointerSignalKind.scroll:
              {
                if (!dart.test(src__gestures__converter.PointerEventConverter._pointers[$containsKey](datum.device))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/converter.dart", 436, 20, "_pointers.containsKey(datum.device)");
                let state = src__gestures__converter.PointerEventConverter._ensureStateForPointer(datum, position);
                if (!dart.equals(state.lastPosition, position)) {
                  if (dart.test(state.down)) {
                    yield new src__gestures__events.PointerMoveEvent.new({timeStamp: timeStamp, pointer: state.pointer, kind: kind, device: datum.device, position: position, delta: state.deltaTo(position), buttons: src__gestures__converter._synthesiseDownButtons(datum.buttons, kind), obscured: datum.obscured, pressure: datum.pressure, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt, synthesized: true});
                  } else {
                    yield new src__gestures__events.PointerHoverEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, delta: state.deltaTo(position), buttons: datum.buttons, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt, synthesized: true});
                  }
                  state.lastPosition = position;
                }
                let scrollDelta = new ui$.Offset.new(datum.scrollDeltaX, datum.scrollDeltaY)['/'](devicePixelRatio);
                yield new src__gestures__events.PointerScrollEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, scrollDelta: scrollDelta});
                break;
              }
              case ui$.PointerSignalKind.none:
              {
                if (!false) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/converter.dart", 504, 17, "false");
                break;
              }
              case ui$.PointerSignalKind.unknown:
              {
                break;
              }
            }
          }
        }
      });
    }
    static _toLogicalPixels(physicalPixels, devicePixelRatio) {
      return physicalPixels == null ? null : dart.notNull(physicalPixels) / dart.notNull(devicePixelRatio);
    }
  };
  (src__gestures__converter.PointerEventConverter.__ = function() {
  }).prototype = src__gestures__converter.PointerEventConverter.prototype;
  dart.addTypeTests(src__gestures__converter.PointerEventConverter);
  dart.setLibraryUri(src__gestures__converter.PointerEventConverter, "package:flutter_web/src/gestures/converter.dart");
  dart.defineLazy(src__gestures__converter.PointerEventConverter, {
    /*src__gestures__converter.PointerEventConverter._pointers*/get _pointers() {
      return new (IdentityMapOfint$_PointerState()).new();
    }
  });
  src__gestures__hit_test.HitTestable = class HitTestable extends core.Object {
    static __() {
      return null;
    }
  };
  (src__gestures__hit_test.HitTestable[dart.mixinNew] = function() {
  }).prototype = src__gestures__hit_test.HitTestable.prototype;
  dart.addTypeTests(src__gestures__hit_test.HitTestable);
  dart.setLibraryUri(src__gestures__hit_test.HitTestable, "package:flutter_web/src/gestures/hit_test.dart");
  src__gestures__hit_test.HitTestDispatcher = class HitTestDispatcher extends core.Object {
    static __() {
      return null;
    }
  };
  (src__gestures__hit_test.HitTestDispatcher[dart.mixinNew] = function() {
  }).prototype = src__gestures__hit_test.HitTestDispatcher.prototype;
  dart.addTypeTests(src__gestures__hit_test.HitTestDispatcher);
  dart.setLibraryUri(src__gestures__hit_test.HitTestDispatcher, "package:flutter_web/src/gestures/hit_test.dart");
  src__gestures__hit_test.HitTestTarget = class HitTestTarget extends core.Object {
    static __() {
      return null;
    }
  };
  (src__gestures__hit_test.HitTestTarget[dart.mixinNew] = function() {
  }).prototype = src__gestures__hit_test.HitTestTarget.prototype;
  dart.addTypeTests(src__gestures__hit_test.HitTestTarget);
  dart.setLibraryUri(src__gestures__hit_test.HitTestTarget, "package:flutter_web/src/gestures/hit_test.dart");
  src__gestures__hit_test.HitTestEntry = class HitTestEntry extends core.Object {
    get target() {
      return this[target$];
    }
    set target(value) {
      super.target = value;
    }
    toString() {
      return dart.str(this.target);
    }
  };
  (src__gestures__hit_test.HitTestEntry.new = function(target) {
    this[target$] = target;
  }).prototype = src__gestures__hit_test.HitTestEntry.prototype;
  dart.addTypeTests(src__gestures__hit_test.HitTestEntry);
  const target$ = Symbol("HitTestEntry.target");
  dart.setLibraryUri(src__gestures__hit_test.HitTestEntry, "package:flutter_web/src/gestures/hit_test.dart");
  dart.setFieldSignature(src__gestures__hit_test.HitTestEntry, () => ({
    __proto__: dart.getFields(src__gestures__hit_test.HitTestEntry.__proto__),
    target: dart.finalFieldType(src__gestures__hit_test.HitTestTarget)
  }));
  dart.defineExtensionMethods(src__gestures__hit_test.HitTestEntry, ['toString']);
  const _path = dart.privateName(src__gestures__hit_test, "_path");
  src__gestures__hit_test.HitTestResult = class HitTestResult extends core.Object {
    get path() {
      return this[_path];
    }
    add(entry) {
      this[_path][$add](entry);
    }
    toString() {
      if (dart.test(src__util.assertionsEnabled)) {
        return "HitTestResult(" + (dart.str(dart.test(this[_path][$isEmpty]) ? "<empty path>" : this[_path][$join](", ")) + ")");
      } else {
        return super.toString();
      }
    }
  };
  (src__gestures__hit_test.HitTestResult.new = function() {
    this[_path] = JSArrayOfHitTestEntry().of([]);
  }).prototype = src__gestures__hit_test.HitTestResult.prototype;
  (src__gestures__hit_test.HitTestResult.wrap = function(result) {
    this[_path] = result[_path];
  }).prototype = src__gestures__hit_test.HitTestResult.prototype;
  dart.addTypeTests(src__gestures__hit_test.HitTestResult);
  dart.setMethodSignature(src__gestures__hit_test.HitTestResult, () => ({
    __proto__: dart.getMethods(src__gestures__hit_test.HitTestResult.__proto__),
    add: dart.fnType(dart.void, [src__gestures__hit_test.HitTestEntry])
  }));
  dart.setGetterSignature(src__gestures__hit_test.HitTestResult, () => ({
    __proto__: dart.getGetters(src__gestures__hit_test.HitTestResult.__proto__),
    path: core.Iterable$(src__gestures__hit_test.HitTestEntry)
  }));
  dart.setLibraryUri(src__gestures__hit_test.HitTestResult, "package:flutter_web/src/gestures/hit_test.dart");
  dart.setFieldSignature(src__gestures__hit_test.HitTestResult, () => ({
    __proto__: dart.getFields(src__gestures__hit_test.HitTestResult.__proto__),
    [_path]: dart.finalFieldType(ListOfHitTestEntry())
  }));
  dart.defineExtensionMethods(src__gestures__hit_test.HitTestResult, ['toString']);
  const _routeMap = dart.privateName(src__gestures__pointer_router, "_routeMap");
  const _globalRoutes = dart.privateName(src__gestures__pointer_router, "_globalRoutes");
  const _dispatch = dart.privateName(src__gestures__pointer_router, "_dispatch");
  src__gestures__pointer_router.PointerRouter = class PointerRouter extends core.Object {
    addRoute(pointer, route) {
      let routes = this[_routeMap][$putIfAbsent](pointer, dart.fn(() => new (_HashSetOfPointerEventTovoid()).new(), VoidToLinkedHashSetOfPointerEventTovoid()));
      if (!!dart.test(routes.contains(route))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/pointer_router.dart", 30, 12, "!routes.contains(route)");
      routes.add(route);
    }
    removeRoute(pointer, route) {
      if (!dart.test(this[_routeMap][$containsKey](pointer))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/pointer_router.dart", 42, 12, "_routeMap.containsKey(pointer)");
      let routes = this[_routeMap][$_get](pointer);
      if (!dart.test(routes.contains(route))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/pointer_router.dart", 44, 12, "routes.contains(route)");
      routes.remove(route);
      if (dart.test(routes.isEmpty)) this[_routeMap][$remove](pointer);
    }
    addGlobalRoute(route) {
      if (!!dart.test(this[_globalRoutes].contains(route))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/pointer_router.dart", 56, 12, "!_globalRoutes.contains(route)");
      this[_globalRoutes].add(route);
    }
    removeGlobalRoute(route) {
      if (!dart.test(this[_globalRoutes].contains(route))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/pointer_router.dart", 68, 12, "_globalRoutes.contains(route)");
      this[_globalRoutes].remove(route);
    }
    [_dispatch](event, route) {
      try {
        route(event);
      } catch (e) {
        let exception = dart.getThrown(e);
        let stack = dart.stackTrace(e);
        src__foundation__assertions.FlutterError.reportError(new src__gestures__pointer_router.FlutterErrorDetailsForPointerRouter.new({exception: exception, stack: stack, library: "gesture library", context: new src__foundation__assertions.ErrorDescription.new("while routing a pointer event"), router: this, route: route, event: event, informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsPropertyOfPointerEvent()).new(function*() {
            yield new (DiagnosticsPropertyOfPointerEvent()).new("Event", event, {style: src__foundation__diagnostics.DiagnosticsTreeStyle.errorProperty});
          }), VoidToIterableOfDiagnosticsPropertyOfPointerEvent())}));
      }
    }
    route(event) {
      let routes = this[_routeMap][$_get](event.pointer);
      let globalRoutes = ListOfPointerEventTovoid().from(this[_globalRoutes]);
      if (routes != null) {
        for (let route of ListOfPointerEventTovoid().from(routes)) {
          if (dart.test(routes.contains(route))) this[_dispatch](event, route);
        }
      }
      for (let route of globalRoutes) {
        if (dart.test(this[_globalRoutes].contains(route))) this[_dispatch](event, route);
      }
    }
  };
  (src__gestures__pointer_router.PointerRouter.new = function() {
    this[_routeMap] = new (IdentityMapOfint$LinkedHashSetOfPointerEventTovoid()).new();
    this[_globalRoutes] = new (_HashSetOfPointerEventTovoid()).new();
  }).prototype = src__gestures__pointer_router.PointerRouter.prototype;
  dart.addTypeTests(src__gestures__pointer_router.PointerRouter);
  dart.setMethodSignature(src__gestures__pointer_router.PointerRouter, () => ({
    __proto__: dart.getMethods(src__gestures__pointer_router.PointerRouter.__proto__),
    addRoute: dart.fnType(dart.void, [core.int, dart.fnType(dart.void, [src__gestures__events.PointerEvent])]),
    removeRoute: dart.fnType(dart.void, [core.int, dart.fnType(dart.void, [src__gestures__events.PointerEvent])]),
    addGlobalRoute: dart.fnType(dart.void, [dart.fnType(dart.void, [src__gestures__events.PointerEvent])]),
    removeGlobalRoute: dart.fnType(dart.void, [dart.fnType(dart.void, [src__gestures__events.PointerEvent])]),
    [_dispatch]: dart.fnType(dart.void, [src__gestures__events.PointerEvent, dart.fnType(dart.void, [src__gestures__events.PointerEvent])]),
    route: dart.fnType(dart.void, [src__gestures__events.PointerEvent])
  }));
  dart.setLibraryUri(src__gestures__pointer_router.PointerRouter, "package:flutter_web/src/gestures/pointer_router.dart");
  dart.setFieldSignature(src__gestures__pointer_router.PointerRouter, () => ({
    __proto__: dart.getFields(src__gestures__pointer_router.PointerRouter.__proto__),
    [_routeMap]: dart.finalFieldType(MapOfint$LinkedHashSetOfPointerEventTovoid()),
    [_globalRoutes]: dart.finalFieldType(LinkedHashSetOfPointerEventTovoid())
  }));
  src__gestures__pointer_router.FlutterErrorDetailsForPointerRouter = class FlutterErrorDetailsForPointerRouter extends src__foundation__assertions.FlutterErrorDetails {
    get router() {
      return this[router$];
    }
    set router(value) {
      super.router = value;
    }
    get route() {
      return this[route$];
    }
    set route(value) {
      super.route = value;
    }
    get event() {
      return this[event$];
    }
    set event(value) {
      super.event = value;
    }
  };
  (src__gestures__pointer_router.FlutterErrorDetailsForPointerRouter.new = function(opts) {
    let exception = opts && 'exception' in opts ? opts.exception : null;
    let stack = opts && 'stack' in opts ? opts.stack : null;
    let library = opts && 'library' in opts ? opts.library : null;
    let context = opts && 'context' in opts ? opts.context : null;
    let router = opts && 'router' in opts ? opts.router : null;
    let route = opts && 'route' in opts ? opts.route : null;
    let event = opts && 'event' in opts ? opts.event : null;
    let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
    let silent = opts && 'silent' in opts ? opts.silent : false;
    this[router$] = router;
    this[route$] = route;
    this[event$] = event;
    src__gestures__pointer_router.FlutterErrorDetailsForPointerRouter.__proto__.new.call(this, {exception: exception, stack: stack, library: library, context: context, informationCollector: informationCollector, silent: silent});
  }).prototype = src__gestures__pointer_router.FlutterErrorDetailsForPointerRouter.prototype;
  dart.addTypeTests(src__gestures__pointer_router.FlutterErrorDetailsForPointerRouter);
  const router$ = Symbol("FlutterErrorDetailsForPointerRouter.router");
  const route$ = Symbol("FlutterErrorDetailsForPointerRouter.route");
  const event$ = Symbol("FlutterErrorDetailsForPointerRouter.event");
  dart.setLibraryUri(src__gestures__pointer_router.FlutterErrorDetailsForPointerRouter, "package:flutter_web/src/gestures/pointer_router.dart");
  dart.setFieldSignature(src__gestures__pointer_router.FlutterErrorDetailsForPointerRouter, () => ({
    __proto__: dart.getFields(src__gestures__pointer_router.FlutterErrorDetailsForPointerRouter.__proto__),
    router: dart.finalFieldType(src__gestures__pointer_router.PointerRouter),
    route: dart.finalFieldType(PointerEventTovoid()),
    event: dart.finalFieldType(src__gestures__events.PointerEvent)
  }));
  const _firstRegisteredCallback = dart.privateName(src__gestures__pointer_signal_resolver, "_firstRegisteredCallback");
  const _currentEvent = dart.privateName(src__gestures__pointer_signal_resolver, "_currentEvent");
  src__gestures__pointer_signal_resolver.PointerSignalResolver = class PointerSignalResolver extends core.Object {
    register(event, callback) {
      if (!(event != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/pointer_signal_resolver.dart", 32, 12, "event != null");
      if (!(callback != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/pointer_signal_resolver.dart", 33, 12, "callback != null");
      if (!(this[_currentEvent] == null || dart.equals(this[_currentEvent], event))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/pointer_signal_resolver.dart", 34, 12, "_currentEvent == null || _currentEvent == event");
      if (this[_firstRegisteredCallback] != null) {
        return;
      }
      this[_currentEvent] = event;
      this[_firstRegisteredCallback] = callback;
    }
    resolve(event) {
      if (this[_firstRegisteredCallback] == null) {
        if (!(this[_currentEvent] == null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/pointer_signal_resolver.dart", 49, 14, "_currentEvent == null");
        return;
      }
      if (!dart.equals(this[_currentEvent], event)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/pointer_signal_resolver.dart", 52, 12, "_currentEvent == event");
      try {
        this[_firstRegisteredCallback](event);
      } catch (e) {
        let exception = dart.getThrown(e);
        let stack = dart.stackTrace(e);
        src__foundation__assertions.FlutterError.reportError(new src__foundation__assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "gesture library", context: new src__foundation__assertions.ErrorDescription.new("while resolving a PointerSignalEvent"), informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsPropertyOfPointerSignalEvent()).new(function*() {
            yield new (DiagnosticsPropertyOfPointerSignalEvent()).new("Event", event, {style: src__foundation__diagnostics.DiagnosticsTreeStyle.errorProperty});
          }), VoidToIterableOfDiagnosticsPropertyOfPointerSignalEvent())}));
      }
      this[_firstRegisteredCallback] = null;
      this[_currentEvent] = null;
    }
  };
  (src__gestures__pointer_signal_resolver.PointerSignalResolver.new = function() {
    this[_firstRegisteredCallback] = null;
    this[_currentEvent] = null;
  }).prototype = src__gestures__pointer_signal_resolver.PointerSignalResolver.prototype;
  dart.addTypeTests(src__gestures__pointer_signal_resolver.PointerSignalResolver);
  dart.setMethodSignature(src__gestures__pointer_signal_resolver.PointerSignalResolver, () => ({
    __proto__: dart.getMethods(src__gestures__pointer_signal_resolver.PointerSignalResolver.__proto__),
    register: dart.fnType(dart.void, [src__gestures__events.PointerSignalEvent, dart.fnType(dart.void, [src__gestures__events.PointerSignalEvent])]),
    resolve: dart.fnType(dart.void, [src__gestures__events.PointerSignalEvent])
  }));
  dart.setLibraryUri(src__gestures__pointer_signal_resolver.PointerSignalResolver, "package:flutter_web/src/gestures/pointer_signal_resolver.dart");
  dart.setFieldSignature(src__gestures__pointer_signal_resolver.PointerSignalResolver, () => ({
    __proto__: dart.getFields(src__gestures__pointer_signal_resolver.PointerSignalResolver.__proto__),
    [_firstRegisteredCallback]: dart.fieldType(PointerSignalEventTovoid()),
    [_currentEvent]: dart.fieldType(src__gestures__events.PointerSignalEvent)
  }));
  const _pendingPointerEvents = dart.privateName(src__gestures__binding, "_pendingPointerEvents");
  const _hitTests = dart.privateName(src__gestures__binding, "_hitTests");
  const _handlePointerDataPacket = dart.privateName(src__gestures__binding, "_handlePointerDataPacket");
  const _flushPointerEventQueue = dart.privateName(src__gestures__binding, "_flushPointerEventQueue");
  const _handlePointerEvent = dart.privateName(src__gestures__binding, "_handlePointerEvent");
  src__gestures__binding.GestureBinding = class GestureBinding extends core.Object {
    static get instance() {
      return src__gestures__binding.GestureBinding._instance;
    }
  };
  src__gestures__binding.GestureBinding[dart.mixinOn] = BindingBase => class GestureBinding extends BindingBase {
    initInstances() {
      super.initInstances();
      src__gestures__binding.GestureBinding._instance = this;
      this.window.onPointerDataPacket = dart.bind(this, _handlePointerDataPacket);
    }
    unlocked() {
      super.unlocked();
      this[_flushPointerEventQueue]();
    }
    [_handlePointerDataPacket](packet) {
      this[_pendingPointerEvents].addAll(src__gestures__converter.PointerEventConverter.expand(packet.data, this.window.devicePixelRatio));
      if (!dart.test(this.locked)) this[_flushPointerEventQueue]();
    }
    cancelPointer(pointer) {
      if (dart.test(this[_pendingPointerEvents].isEmpty) && !dart.test(this.locked)) async.scheduleMicrotask(dart.bind(this, _flushPointerEventQueue));
      this[_pendingPointerEvents].addFirst(new src__gestures__events.PointerCancelEvent.new({pointer: pointer}));
    }
    [_flushPointerEventQueue]() {
      if (!!dart.test(this.locked)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/binding.dart", 102, 12, "!locked");
      while (dart.test(this[_pendingPointerEvents].isNotEmpty))
        this[_handlePointerEvent](this[_pendingPointerEvents].removeFirst());
    }
    get pointerRouter() {
      return this[pointerRouter];
    }
    set pointerRouter(value) {
      super.pointerRouter = value;
    }
    get gestureArena() {
      return this[gestureArena];
    }
    set gestureArena(value) {
      super.gestureArena = value;
    }
    get pointerSignalResolver() {
      return this[pointerSignalResolver];
    }
    set pointerSignalResolver(value) {
      super.pointerSignalResolver = value;
    }
    [_handlePointerEvent](event) {
      if (!!dart.test(this.locked)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/binding.dart", 125, 12, "!locked");
      let hitTestResult = null;
      if (src__gestures__events.PointerDownEvent.is(event) || src__gestures__events.PointerSignalEvent.is(event)) {
        if (!!dart.test(this[_hitTests][$containsKey](event.pointer))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/binding.dart", 128, 14, "!_hitTests.containsKey(event.pointer)");
        hitTestResult = new src__gestures__hit_test.HitTestResult.new();
        this.hitTest(hitTestResult, event.position);
        if (src__gestures__events.PointerDownEvent.is(event)) {
          this[_hitTests][$_set](event.pointer, hitTestResult);
        }
        if (!dart.test(dart.fn(() => {
          if (dart.test(src__gestures__debug.debugPrintHitTestResults)) src__foundation__print.debugPrint(dart.str(event) + ": " + dart.str(hitTestResult));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/binding.dart", 134, 14, "() {if (debugPrintHitTestResults) debugPrint('$event: $hitTestResult'); return true;}()");
      } else if (src__gestures__events.PointerUpEvent.is(event) || src__gestures__events.PointerCancelEvent.is(event)) {
        hitTestResult = this[_hitTests][$remove](event.pointer);
      } else if (dart.test(event.down)) {
        hitTestResult = this[_hitTests][$_get](event.pointer);
      }
      if (!dart.test(dart.fn(() => {
        if (dart.test(src__gestures__debug.debugPrintMouseHoverEvents) && src__gestures__events.PointerHoverEvent.is(event)) src__foundation__print.debugPrint(dart.str(event));
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/binding.dart", 148, 12, "() {if (debugPrintMouseHoverEvents && event is PointerHoverEvent) debugPrint('$event'); return true;}()");
      if (hitTestResult != null || src__gestures__events.PointerHoverEvent.is(event) || src__gestures__events.PointerAddedEvent.is(event) || src__gestures__events.PointerRemovedEvent.is(event)) {
        this.dispatchEvent(event, hitTestResult);
      }
    }
    hitTest(result, position) {
      result.add(new src__gestures__hit_test.HitTestEntry.new(this));
    }
    dispatchEvent(event, hitTestResult) {
      if (!!dart.test(this.locked)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/binding.dart", 175, 12, "!locked");
      if (hitTestResult == null) {
        if (!(src__gestures__events.PointerHoverEvent.is(event) || src__gestures__events.PointerAddedEvent.is(event) || src__gestures__events.PointerRemovedEvent.is(event))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/binding.dart", 179, 14, "event is PointerHoverEvent || event is PointerAddedEvent || event is PointerRemovedEvent");
        try {
          this.pointerRouter.route(event);
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          src__foundation__assertions.FlutterError.reportError(new src__gestures__binding.FlutterErrorDetailsForPointerEventDispatcher.new({exception: exception, stack: stack, library: "gesture library", context: new src__foundation__assertions.ErrorDescription.new("while dispatching a non-hit-tested pointer event"), event: event, hitTestEntry: null, informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsPropertyOfPointerEvent()).new(function*() {
              yield new (DiagnosticsPropertyOfPointerEvent()).new("Event", event, {style: src__foundation__diagnostics.DiagnosticsTreeStyle.errorProperty});
            }), VoidToIterableOfDiagnosticsPropertyOfPointerEvent())}));
        }
        return;
      }
      for (let entry of hitTestResult.path) {
        try {
          entry.target.handleEvent(event, entry);
        } catch (e$) {
          let exception = dart.getThrown(e$);
          let stack = dart.stackTrace(e$);
          src__foundation__assertions.FlutterError.reportError(new src__gestures__binding.FlutterErrorDetailsForPointerEventDispatcher.new({exception: exception, stack: stack, library: "gesture library", context: new src__foundation__assertions.ErrorDescription.new("while dispatching a pointer event"), event: event, hitTestEntry: entry, informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsPropertyOfObject()).new(function*() {
              yield new (DiagnosticsPropertyOfPointerEvent()).new("Event", event, {style: src__foundation__diagnostics.DiagnosticsTreeStyle.errorProperty});
              yield new (DiagnosticsPropertyOfHitTestTarget()).new("Target", entry.target, {style: src__foundation__diagnostics.DiagnosticsTreeStyle.errorProperty});
            }), VoidToIterableOfDiagnosticsPropertyOfObject())}));
        }
      }
    }
    handleEvent(event, entry) {
      this.pointerRouter.route(event);
      if (src__gestures__events.PointerDownEvent.is(event)) {
        this.gestureArena.close(event.pointer);
      } else if (src__gestures__events.PointerUpEvent.is(event)) {
        this.gestureArena.sweep(event.pointer);
      } else if (src__gestures__events.PointerSignalEvent.is(event)) {
        this.pointerSignalResolver.resolve(event);
      }
    }
  };
  (src__gestures__binding.GestureBinding.new = function() {
    this[_pendingPointerEvents] = QueueOfPointerEvent().new();
    this[pointerRouter] = new src__gestures__pointer_router.PointerRouter.new();
    this[gestureArena] = new src__gestures__arena.GestureArenaManager.new();
    this[pointerSignalResolver] = new src__gestures__pointer_signal_resolver.PointerSignalResolver.new();
    this[_hitTests] = new (IdentityMapOfint$HitTestResult()).new();
  }).prototype = src__gestures__binding.GestureBinding.prototype;
  dart.addTypeTests(src__gestures__binding.GestureBinding);
  const pointerRouter = Symbol("GestureBinding.pointerRouter");
  const gestureArena = Symbol("GestureBinding.gestureArena");
  const pointerSignalResolver = Symbol("GestureBinding.pointerSignalResolver");
  src__gestures__binding.GestureBinding[dart.implements] = () => [src__gestures__hit_test.HitTestable, src__gestures__hit_test.HitTestDispatcher, src__gestures__hit_test.HitTestTarget, src__foundation__binding.BindingBase];
  dart.setMethodSignature(src__gestures__binding.GestureBinding, () => ({
    __proto__: dart.getMethods(src__gestures__binding.GestureBinding.__proto__),
    [_handlePointerDataPacket]: dart.fnType(dart.void, [ui$.PointerDataPacket]),
    cancelPointer: dart.fnType(dart.void, [core.int]),
    [_flushPointerEventQueue]: dart.fnType(dart.void, []),
    [_handlePointerEvent]: dart.fnType(dart.void, [src__gestures__events.PointerEvent]),
    hitTest: dart.fnType(dart.void, [src__gestures__hit_test.HitTestResult, ui$.Offset]),
    dispatchEvent: dart.fnType(dart.void, [src__gestures__events.PointerEvent, src__gestures__hit_test.HitTestResult]),
    handleEvent: dart.fnType(dart.void, [src__gestures__events.PointerEvent, src__gestures__hit_test.HitTestEntry])
  }));
  dart.setLibraryUri(src__gestures__binding.GestureBinding, "package:flutter_web/src/gestures/binding.dart");
  dart.setFieldSignature(src__gestures__binding.GestureBinding, () => ({
    __proto__: dart.getFields(src__gestures__binding.GestureBinding.__proto__),
    [_pendingPointerEvents]: dart.finalFieldType(QueueOfPointerEvent()),
    pointerRouter: dart.finalFieldType(src__gestures__pointer_router.PointerRouter),
    gestureArena: dart.finalFieldType(src__gestures__arena.GestureArenaManager),
    pointerSignalResolver: dart.finalFieldType(src__gestures__pointer_signal_resolver.PointerSignalResolver),
    [_hitTests]: dart.finalFieldType(MapOfint$HitTestResult())
  }));
  dart.defineLazy(src__gestures__binding.GestureBinding, {
    /*src__gestures__binding.GestureBinding._instance*/get _instance() {
      return null;
    },
    set _instance(_) {}
  });
  src__gestures__binding.FlutterErrorDetailsForPointerEventDispatcher = class FlutterErrorDetailsForPointerEventDispatcher extends src__foundation__assertions.FlutterErrorDetails {
    get event() {
      return this[event$0];
    }
    set event(value) {
      super.event = value;
    }
    get hitTestEntry() {
      return this[hitTestEntry$];
    }
    set hitTestEntry(value) {
      super.hitTestEntry = value;
    }
  };
  (src__gestures__binding.FlutterErrorDetailsForPointerEventDispatcher.new = function(opts) {
    let exception = opts && 'exception' in opts ? opts.exception : null;
    let stack = opts && 'stack' in opts ? opts.stack : null;
    let library = opts && 'library' in opts ? opts.library : null;
    let context = opts && 'context' in opts ? opts.context : null;
    let event = opts && 'event' in opts ? opts.event : null;
    let hitTestEntry = opts && 'hitTestEntry' in opts ? opts.hitTestEntry : null;
    let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
    let silent = opts && 'silent' in opts ? opts.silent : false;
    this[event$0] = event;
    this[hitTestEntry$] = hitTestEntry;
    src__gestures__binding.FlutterErrorDetailsForPointerEventDispatcher.__proto__.new.call(this, {exception: exception, stack: stack, library: library, context: context, informationCollector: informationCollector, silent: silent});
  }).prototype = src__gestures__binding.FlutterErrorDetailsForPointerEventDispatcher.prototype;
  dart.addTypeTests(src__gestures__binding.FlutterErrorDetailsForPointerEventDispatcher);
  const event$0 = Symbol("FlutterErrorDetailsForPointerEventDispatcher.event");
  const hitTestEntry$ = Symbol("FlutterErrorDetailsForPointerEventDispatcher.hitTestEntry");
  dart.setLibraryUri(src__gestures__binding.FlutterErrorDetailsForPointerEventDispatcher, "package:flutter_web/src/gestures/binding.dart");
  dart.setFieldSignature(src__gestures__binding.FlutterErrorDetailsForPointerEventDispatcher, () => ({
    __proto__: dart.getFields(src__gestures__binding.FlutterErrorDetailsForPointerEventDispatcher.__proto__),
    event: dart.finalFieldType(src__gestures__events.PointerEvent),
    hitTestEntry: dart.finalFieldType(src__gestures__hit_test.HitTestEntry)
  }));
  dart.defineLazy(src__gestures__constants, {
    /*src__gestures__constants.kPressTimeout*/get kPressTimeout() {
      return dart.const(new core.Duration.new({milliseconds: 100}));
    },
    /*src__gestures__constants.kHoverTapTimeout*/get kHoverTapTimeout() {
      return dart.const(new core.Duration.new({milliseconds: 150}));
    },
    /*src__gestures__constants.kHoverTapSlop*/get kHoverTapSlop() {
      return 20.0;
    },
    /*src__gestures__constants.kLongPressTimeout*/get kLongPressTimeout() {
      return dart.const(new core.Duration.new({milliseconds: 500}));
    },
    /*src__gestures__constants.kDoubleTapTimeout*/get kDoubleTapTimeout() {
      return dart.const(new core.Duration.new({milliseconds: 300}));
    },
    /*src__gestures__constants.kDoubleTapMinTime*/get kDoubleTapMinTime() {
      return dart.const(new core.Duration.new({milliseconds: 40}));
    },
    /*src__gestures__constants.kDoubleTapTouchSlop*/get kDoubleTapTouchSlop() {
      return 18.0;
    },
    /*src__gestures__constants.kDoubleTapSlop*/get kDoubleTapSlop() {
      return 100.0;
    },
    /*src__gestures__constants.kZoomControlsTimeout*/get kZoomControlsTimeout() {
      return dart.const(new core.Duration.new({milliseconds: 3000}));
    },
    /*src__gestures__constants.kTouchSlop*/get kTouchSlop() {
      return 18.0;
    },
    /*src__gestures__constants.kPagingTouchSlop*/get kPagingTouchSlop() {
      return 18.0 * 2.0;
    },
    /*src__gestures__constants.kPanSlop*/get kPanSlop() {
      return 18.0 * 2.0;
    },
    /*src__gestures__constants.kScaleSlop*/get kScaleSlop() {
      return 18.0;
    },
    /*src__gestures__constants.kWindowTouchSlop*/get kWindowTouchSlop() {
      return 16.0;
    },
    /*src__gestures__constants.kMinFlingVelocity*/get kMinFlingVelocity() {
      return 50.0;
    },
    /*src__gestures__constants.kMaxFlingVelocity*/get kMaxFlingVelocity() {
      return 8000.0;
    },
    /*src__gestures__constants.kJumpTapTimeout*/get kJumpTapTimeout() {
      return dart.const(new core.Duration.new({milliseconds: 500}));
    }
  });
  const _offset = dart.privateName(src__gestures__lsq_solver, "_offset");
  const _length = dart.privateName(src__gestures__lsq_solver, "_length");
  const _elements = dart.privateName(src__gestures__lsq_solver, "_elements");
  src__gestures__lsq_solver._Vector = class _Vector extends core.Object {
    _get(i) {
      return this[_elements][$_get](dart.notNull(i) + dart.notNull(this[_offset]));
    }
    _set(i, value) {
      this[_elements][$_set](dart.notNull(i) + dart.notNull(this[_offset]), value);
      return value;
    }
    ['*'](a) {
      let result = 0.0;
      for (let i = 0; i < dart.notNull(this[_length]); i = i + 1) {
        result = result + dart.notNull(this._get(i)) * dart.notNull(a._get(i));
      }
      return result;
    }
    norm() {
      return math.sqrt(this['*'](this));
    }
  };
  (src__gestures__lsq_solver._Vector.new = function(size) {
    this[_offset] = 0;
    this[_length] = size;
    this[_elements] = typed_data.Float64List.new(size);
  }).prototype = src__gestures__lsq_solver._Vector.prototype;
  (src__gestures__lsq_solver._Vector.fromVOL = function(values, offset, length) {
    this[_offset] = offset;
    this[_length] = length;
    this[_elements] = values;
  }).prototype = src__gestures__lsq_solver._Vector.prototype;
  dart.addTypeTests(src__gestures__lsq_solver._Vector);
  dart.setMethodSignature(src__gestures__lsq_solver._Vector, () => ({
    __proto__: dart.getMethods(src__gestures__lsq_solver._Vector.__proto__),
    _get: dart.fnType(core.double, [core.int]),
    _set: dart.fnType(dart.void, [core.int, core.double]),
    '*': dart.fnType(core.double, [src__gestures__lsq_solver._Vector]),
    norm: dart.fnType(core.double, [])
  }));
  dart.setLibraryUri(src__gestures__lsq_solver._Vector, "package:flutter_web/src/gestures/lsq_solver.dart");
  dart.setFieldSignature(src__gestures__lsq_solver._Vector, () => ({
    __proto__: dart.getFields(src__gestures__lsq_solver._Vector.__proto__),
    [_offset]: dart.finalFieldType(core.int),
    [_length]: dart.finalFieldType(core.int),
    [_elements]: dart.finalFieldType(ListOfdouble())
  }));
  const _columns = dart.privateName(src__gestures__lsq_solver, "_columns");
  src__gestures__lsq_solver._Matrix = class _Matrix extends core.Object {
    get(row, col) {
      return this[_elements][$_get](dart.notNull(row) * dart.notNull(this[_columns]) + dart.notNull(col));
    }
    set(row, col, value) {
      this[_elements][$_set](dart.notNull(row) * dart.notNull(this[_columns]) + dart.notNull(col), value);
    }
    getRow(row) {
      return new src__gestures__lsq_solver._Vector.fromVOL(this[_elements], dart.notNull(row) * dart.notNull(this[_columns]), this[_columns]);
    }
  };
  (src__gestures__lsq_solver._Matrix.new = function(rows, cols) {
    this[_columns] = cols;
    this[_elements] = typed_data.Float64List.new(dart.notNull(rows) * dart.notNull(cols));
  }).prototype = src__gestures__lsq_solver._Matrix.prototype;
  dart.addTypeTests(src__gestures__lsq_solver._Matrix);
  dart.setMethodSignature(src__gestures__lsq_solver._Matrix, () => ({
    __proto__: dart.getMethods(src__gestures__lsq_solver._Matrix.__proto__),
    get: dart.fnType(core.double, [core.int, core.int]),
    set: dart.fnType(dart.void, [core.int, core.int, core.double]),
    getRow: dart.fnType(src__gestures__lsq_solver._Vector, [core.int])
  }));
  dart.setLibraryUri(src__gestures__lsq_solver._Matrix, "package:flutter_web/src/gestures/lsq_solver.dart");
  dart.setFieldSignature(src__gestures__lsq_solver._Matrix, () => ({
    __proto__: dart.getFields(src__gestures__lsq_solver._Matrix.__proto__),
    [_columns]: dart.finalFieldType(core.int),
    [_elements]: dart.finalFieldType(ListOfdouble())
  }));
  src__gestures__lsq_solver.PolynomialFit = class PolynomialFit extends core.Object {
    get coefficients() {
      return this[coefficients];
    }
    set coefficients(value) {
      super.coefficients = value;
    }
    get confidence() {
      return this[confidence];
    }
    set confidence(value) {
      this[confidence] = value;
    }
  };
  (src__gestures__lsq_solver.PolynomialFit.new = function(degree) {
    this[confidence] = null;
    this[coefficients] = typed_data.Float64List.new(dart.notNull(degree) + 1);
  }).prototype = src__gestures__lsq_solver.PolynomialFit.prototype;
  dart.addTypeTests(src__gestures__lsq_solver.PolynomialFit);
  const coefficients = Symbol("PolynomialFit.coefficients");
  const confidence = Symbol("PolynomialFit.confidence");
  dart.setLibraryUri(src__gestures__lsq_solver.PolynomialFit, "package:flutter_web/src/gestures/lsq_solver.dart");
  dart.setFieldSignature(src__gestures__lsq_solver.PolynomialFit, () => ({
    __proto__: dart.getFields(src__gestures__lsq_solver.PolynomialFit.__proto__),
    coefficients: dart.finalFieldType(ListOfdouble()),
    confidence: dart.fieldType(core.double)
  }));
  src__gestures__lsq_solver.LeastSquaresSolver = class LeastSquaresSolver extends core.Object {
    get x() {
      return this[x$];
    }
    set x(value) {
      super.x = value;
    }
    get y() {
      return this[y$];
    }
    set y(value) {
      super.y = value;
    }
    get w() {
      return this[w$];
    }
    set w(value) {
      super.w = value;
    }
    solve(degree) {
      if (dart.notNull(degree) > dart.notNull(this.x[$length])) return null;
      let result = new src__gestures__lsq_solver.PolynomialFit.new(degree);
      let m = this.x[$length];
      let n = dart.notNull(degree) + 1;
      let a = new src__gestures__lsq_solver._Matrix.new(n, m);
      for (let h = 0; h < dart.notNull(m); h = h + 1) {
        a.set(0, h, this.w[$_get](h));
        for (let i = 1; i < n; i = i + 1)
          a.set(i, h, dart.notNull(a.get(i - 1, h)) * dart.notNull(this.x[$_get](h)));
      }
      let q = new src__gestures__lsq_solver._Matrix.new(n, m);
      let r = new src__gestures__lsq_solver._Matrix.new(n, n);
      for (let j = 0; j < n; j = j + 1) {
        for (let h = 0; h < dart.notNull(m); h = h + 1)
          q.set(j, h, a.get(j, h));
        for (let i = 0; i < j; i = i + 1) {
          let dot = q.getRow(j)['*'](q.getRow(i));
          for (let h = 0; h < dart.notNull(m); h = h + 1)
            q.set(j, h, dart.notNull(q.get(j, h)) - dart.notNull(dot) * dart.notNull(q.get(i, h)));
        }
        let norm = q.getRow(j).norm();
        if (dart.notNull(norm) < 1e-10) {
          return null;
        }
        let inverseNorm = 1.0 / dart.notNull(norm);
        for (let h = 0; h < dart.notNull(m); h = h + 1)
          q.set(j, h, dart.notNull(q.get(j, h)) * inverseNorm);
        for (let i = 0; i < n; i = i + 1)
          r.set(j, i, i < j ? 0.0 : q.getRow(j)['*'](a.getRow(i)));
      }
      let wy = new src__gestures__lsq_solver._Vector.new(m);
      for (let h = 0; h < dart.notNull(m); h = h + 1)
        wy._set(h, dart.notNull(this.y[$_get](h)) * dart.notNull(this.w[$_get](h)));
      for (let i = n - 1; i >= 0; i = i - 1) {
        result.coefficients[$_set](i, q.getRow(i)['*'](wy));
        for (let j = n - 1; j > i; j = j - 1) {
          result.coefficients[$_set](i, dart.notNull(result.coefficients[$_get](i)) - dart.notNull(r.get(i, j)) * dart.notNull(result.coefficients[$_get](j)));
        }
        result.coefficients[$_set](i, dart.notNull(result.coefficients[$_get](i)) / dart.notNull(r.get(i, i)));
      }
      let yMean = 0.0;
      for (let h = 0; h < dart.notNull(m); h = h + 1) {
        yMean = yMean + dart.notNull(this.y[$_get](h));
      }
      yMean = yMean / dart.notNull(m);
      let sumSquaredError = 0.0;
      let sumSquaredTotal = 0.0;
      for (let h = 0; h < dart.notNull(m); h = h + 1) {
        let term = 1.0;
        let err = dart.notNull(this.y[$_get](h)) - dart.notNull(result.coefficients[$_get](0));
        for (let i = 1; i < n; i = i + 1) {
          term = term * dart.notNull(this.x[$_get](h));
          err = err - term * dart.notNull(result.coefficients[$_get](i));
        }
        sumSquaredError = sumSquaredError + dart.notNull(this.w[$_get](h)) * dart.notNull(this.w[$_get](h)) * err * err;
        let v = dart.notNull(this.y[$_get](h)) - yMean;
        sumSquaredTotal = sumSquaredTotal + dart.notNull(this.w[$_get](h)) * dart.notNull(this.w[$_get](h)) * v * v;
      }
      result.confidence = sumSquaredTotal <= 1e-10 ? 1.0 : 1.0 - sumSquaredError / sumSquaredTotal;
      return result;
    }
  };
  (src__gestures__lsq_solver.LeastSquaresSolver.new = function(x, y, w) {
    this[x$] = x;
    this[y$] = y;
    this[w$] = w;
    if (!(x[$length] == y[$length])) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/lsq_solver.dart", 86, 16, "x.length == y.length");
    if (!(y[$length] == w[$length])) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/lsq_solver.dart", 87, 16, "y.length == w.length");
  }).prototype = src__gestures__lsq_solver.LeastSquaresSolver.prototype;
  dart.addTypeTests(src__gestures__lsq_solver.LeastSquaresSolver);
  const x$ = Symbol("LeastSquaresSolver.x");
  const y$ = Symbol("LeastSquaresSolver.y");
  const w$ = Symbol("LeastSquaresSolver.w");
  dart.setMethodSignature(src__gestures__lsq_solver.LeastSquaresSolver, () => ({
    __proto__: dart.getMethods(src__gestures__lsq_solver.LeastSquaresSolver.__proto__),
    solve: dart.fnType(src__gestures__lsq_solver.PolynomialFit, [core.int])
  }));
  dart.setLibraryUri(src__gestures__lsq_solver.LeastSquaresSolver, "package:flutter_web/src/gestures/lsq_solver.dart");
  dart.setFieldSignature(src__gestures__lsq_solver.LeastSquaresSolver, () => ({
    __proto__: dart.getFields(src__gestures__lsq_solver.LeastSquaresSolver.__proto__),
    x: dart.finalFieldType(ListOfdouble()),
    y: dart.finalFieldType(ListOfdouble()),
    w: dart.finalFieldType(ListOfdouble())
  }));
  src__gestures__velocity_tracker.Velocity = class Velocity extends core.Object {
    get pixelsPerSecond() {
      return this[pixelsPerSecond$];
    }
    set pixelsPerSecond(value) {
      super.pixelsPerSecond = value;
    }
    _negate() {
      return new src__gestures__velocity_tracker.Velocity.new({pixelsPerSecond: this.pixelsPerSecond._negate()});
    }
    ['-'](other) {
      return new src__gestures__velocity_tracker.Velocity.new({pixelsPerSecond: this.pixelsPerSecond['-'](other.pixelsPerSecond)});
    }
    ['+'](other) {
      return new src__gestures__velocity_tracker.Velocity.new({pixelsPerSecond: this.pixelsPerSecond['+'](other.pixelsPerSecond)});
    }
    clampMagnitude(minValue, maxValue) {
      if (!(minValue != null && dart.notNull(minValue) >= 0.0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/velocity_tracker.dart", 53, 12, "minValue != null && minValue >= 0.0");
      if (!(maxValue != null && dart.notNull(maxValue) >= 0.0 && dart.notNull(maxValue) >= dart.notNull(minValue))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/velocity_tracker.dart", 54, 12, "maxValue != null && maxValue >= 0.0 && maxValue >= minValue");
      let valueSquared = this.pixelsPerSecond.distanceSquared;
      if (dart.notNull(valueSquared) > dart.notNull(maxValue) * dart.notNull(maxValue)) return new src__gestures__velocity_tracker.Velocity.new({pixelsPerSecond: this.pixelsPerSecond['/'](this.pixelsPerSecond.distance)['*'](maxValue)});
      if (dart.notNull(valueSquared) < dart.notNull(minValue) * dart.notNull(minValue)) return new src__gestures__velocity_tracker.Velocity.new({pixelsPerSecond: this.pixelsPerSecond['/'](this.pixelsPerSecond.distance)['*'](minValue)});
      return this;
    }
    _equals(other) {
      if (other == null) return false;
      if (!src__gestures__velocity_tracker.Velocity.is(other)) return false;
      let typedOther = src__gestures__velocity_tracker.Velocity._check(other);
      return dart.equals(this.pixelsPerSecond, typedOther.pixelsPerSecond);
    }
    get hashCode() {
      return dart.hashCode(this.pixelsPerSecond);
    }
    toString() {
      return "Velocity(" + this.pixelsPerSecond.dx[$toStringAsFixed](1) + ", " + this.pixelsPerSecond.dy[$toStringAsFixed](1) + ")";
    }
  };
  (src__gestures__velocity_tracker.Velocity.new = function(opts) {
    let pixelsPerSecond = opts && 'pixelsPerSecond' in opts ? opts.pixelsPerSecond : null;
    this[pixelsPerSecond$] = pixelsPerSecond;
    if (!(pixelsPerSecond != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/velocity_tracker.dart", 21, 15, "pixelsPerSecond != null");
  }).prototype = src__gestures__velocity_tracker.Velocity.prototype;
  dart.addTypeTests(src__gestures__velocity_tracker.Velocity);
  const pixelsPerSecond$ = Symbol("Velocity.pixelsPerSecond");
  dart.setMethodSignature(src__gestures__velocity_tracker.Velocity, () => ({
    __proto__: dart.getMethods(src__gestures__velocity_tracker.Velocity.__proto__),
    _negate: dart.fnType(src__gestures__velocity_tracker.Velocity, []),
    '-': dart.fnType(src__gestures__velocity_tracker.Velocity, [src__gestures__velocity_tracker.Velocity]),
    '+': dart.fnType(src__gestures__velocity_tracker.Velocity, [src__gestures__velocity_tracker.Velocity]),
    clampMagnitude: dart.fnType(src__gestures__velocity_tracker.Velocity, [core.double, core.double])
  }));
  dart.setLibraryUri(src__gestures__velocity_tracker.Velocity, "package:flutter_web/src/gestures/velocity_tracker.dart");
  dart.setFieldSignature(src__gestures__velocity_tracker.Velocity, () => ({
    __proto__: dart.getFields(src__gestures__velocity_tracker.Velocity.__proto__),
    pixelsPerSecond: dart.finalFieldType(ui$.Offset)
  }));
  dart.defineExtensionMethods(src__gestures__velocity_tracker.Velocity, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__gestures__velocity_tracker.Velocity, ['hashCode']);
  dart.defineLazy(src__gestures__velocity_tracker.Velocity, {
    /*src__gestures__velocity_tracker.Velocity.zero*/get zero() {
      return dart.const(new src__gestures__velocity_tracker.Velocity.new({pixelsPerSecond: ui$.Offset.zero}));
    }
  });
  src__gestures__velocity_tracker.VelocityEstimate = class VelocityEstimate extends core.Object {
    get pixelsPerSecond() {
      return this[pixelsPerSecond$0];
    }
    set pixelsPerSecond(value) {
      super.pixelsPerSecond = value;
    }
    get confidence() {
      return this[confidence$];
    }
    set confidence(value) {
      super.confidence = value;
    }
    get duration() {
      return this[duration$];
    }
    set duration(value) {
      super.duration = value;
    }
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      super.offset = value;
    }
    toString() {
      return "VelocityEstimate(" + this.pixelsPerSecond.dx[$toStringAsFixed](1) + ", " + this.pixelsPerSecond.dy[$toStringAsFixed](1) + "; offset: " + dart.str(this.offset) + ", duration: " + dart.str(this.duration) + ", confidence: " + this.confidence[$toStringAsFixed](1) + ")";
    }
  };
  (src__gestures__velocity_tracker.VelocityEstimate.new = function(opts) {
    let pixelsPerSecond = opts && 'pixelsPerSecond' in opts ? opts.pixelsPerSecond : null;
    let confidence = opts && 'confidence' in opts ? opts.confidence : null;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let offset = opts && 'offset' in opts ? opts.offset : null;
    this[pixelsPerSecond$0] = pixelsPerSecond;
    this[confidence$] = confidence;
    this[duration$] = duration;
    this[offset$] = offset;
    if (!(pixelsPerSecond != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/velocity_tracker.dart", 104, 16, "pixelsPerSecond != null");
    if (!(confidence != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/velocity_tracker.dart", 105, 16, "confidence != null");
    if (!(duration != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/velocity_tracker.dart", 106, 16, "duration != null");
    if (!(offset != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/velocity_tracker.dart", 107, 16, "offset != null");
  }).prototype = src__gestures__velocity_tracker.VelocityEstimate.prototype;
  dart.addTypeTests(src__gestures__velocity_tracker.VelocityEstimate);
  const pixelsPerSecond$0 = Symbol("VelocityEstimate.pixelsPerSecond");
  const confidence$ = Symbol("VelocityEstimate.confidence");
  const duration$ = Symbol("VelocityEstimate.duration");
  const offset$ = Symbol("VelocityEstimate.offset");
  dart.setLibraryUri(src__gestures__velocity_tracker.VelocityEstimate, "package:flutter_web/src/gestures/velocity_tracker.dart");
  dart.setFieldSignature(src__gestures__velocity_tracker.VelocityEstimate, () => ({
    __proto__: dart.getFields(src__gestures__velocity_tracker.VelocityEstimate.__proto__),
    pixelsPerSecond: dart.finalFieldType(ui$.Offset),
    confidence: dart.finalFieldType(core.double),
    duration: dart.finalFieldType(core.Duration),
    offset: dart.finalFieldType(ui$.Offset)
  }));
  dart.defineExtensionMethods(src__gestures__velocity_tracker.VelocityEstimate, ['toString']);
  src__gestures__velocity_tracker._PointAtTime = class _PointAtTime extends core.Object {
    toString() {
      return "_PointAtTime(" + dart.str(this.point) + " at " + dart.str(this.time) + ")";
    }
  };
  (src__gestures__velocity_tracker._PointAtTime.new = function(point, time) {
    this.point = point;
    this.time = time;
    if (!(point != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/velocity_tracker.dart", 133, 16, "point != null");
    if (!(time != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/velocity_tracker.dart", 134, 16, "time != null");
  }).prototype = src__gestures__velocity_tracker._PointAtTime.prototype;
  dart.addTypeTests(src__gestures__velocity_tracker._PointAtTime);
  dart.setLibraryUri(src__gestures__velocity_tracker._PointAtTime, "package:flutter_web/src/gestures/velocity_tracker.dart");
  dart.setFieldSignature(src__gestures__velocity_tracker._PointAtTime, () => ({
    __proto__: dart.getFields(src__gestures__velocity_tracker._PointAtTime.__proto__),
    time: dart.finalFieldType(core.Duration),
    point: dart.finalFieldType(ui$.Offset)
  }));
  dart.defineExtensionMethods(src__gestures__velocity_tracker._PointAtTime, ['toString']);
  const _samples = dart.privateName(src__gestures__velocity_tracker, "_samples");
  const _index = dart.privateName(src__gestures__velocity_tracker, "_index");
  src__gestures__velocity_tracker.VelocityTracker = class VelocityTracker extends core.Object {
    addPosition(time, position) {
      this[_index] = dart.notNull(this[_index]) + 1;
      if (this[_index] === 20) this[_index] = 0;
      this[_samples][$_set](this[_index], new src__gestures__velocity_tracker._PointAtTime.new(position, time));
    }
    getVelocityEstimate() {
      let x = JSArrayOfdouble().of([]);
      let y = JSArrayOfdouble().of([]);
      let w = JSArrayOfdouble().of([]);
      let time = JSArrayOfdouble().of([]);
      let sampleCount = 0;
      let index = this[_index];
      let newestSample = this[_samples][$_get](index);
      if (newestSample == null) return null;
      let previousSample = newestSample;
      let oldestSample = newestSample;
      do {
        let sample = this[_samples][$_get](index);
        if (sample == null) break;
        let age = newestSample.time['-'](sample.time).inMilliseconds[$toDouble]();
        let delta = sample.time['-'](previousSample.time).inMilliseconds[$abs]()[$toDouble]();
        previousSample = sample;
        if (age > 100 || delta > 40) break;
        oldestSample = sample;
        let position = sample.point;
        x[$add](position.dx);
        y[$add](position.dy);
        w[$add](1.0);
        time[$add](-age);
        index = dart.notNull(index === 0 ? 20 : index) - 1;
        sampleCount = sampleCount + 1;
      } while (sampleCount < 20);
      if (sampleCount >= 3) {
        let xSolver = new src__gestures__lsq_solver.LeastSquaresSolver.new(time, x, w);
        let xFit = xSolver.solve(2);
        if (xFit != null) {
          let ySolver = new src__gestures__lsq_solver.LeastSquaresSolver.new(time, y, w);
          let yFit = ySolver.solve(2);
          if (yFit != null) {
            return new src__gestures__velocity_tracker.VelocityEstimate.new({pixelsPerSecond: new ui$.Offset.new(dart.notNull(xFit.coefficients[$_get](1)) * 1000, dart.notNull(yFit.coefficients[$_get](1)) * 1000), confidence: dart.notNull(xFit.confidence) * dart.notNull(yFit.confidence), duration: newestSample.time['-'](oldestSample.time), offset: newestSample.point['-'](oldestSample.point)});
          }
        }
      }
      return new src__gestures__velocity_tracker.VelocityEstimate.new({pixelsPerSecond: ui$.Offset.zero, confidence: 1.0, duration: newestSample.time['-'](oldestSample.time), offset: newestSample.point['-'](oldestSample.point)});
    }
    getVelocity() {
      let estimate = this.getVelocityEstimate();
      if (estimate == null || dart.equals(estimate.pixelsPerSecond, ui$.Offset.zero)) return src__gestures__velocity_tracker.Velocity.zero;
      return new src__gestures__velocity_tracker.Velocity.new({pixelsPerSecond: estimate.pixelsPerSecond});
    }
  };
  (src__gestures__velocity_tracker.VelocityTracker.new = function() {
    this[_samples] = ListOf_PointAtTime().new(20);
    this[_index] = 0;
  }).prototype = src__gestures__velocity_tracker.VelocityTracker.prototype;
  dart.addTypeTests(src__gestures__velocity_tracker.VelocityTracker);
  dart.setMethodSignature(src__gestures__velocity_tracker.VelocityTracker, () => ({
    __proto__: dart.getMethods(src__gestures__velocity_tracker.VelocityTracker.__proto__),
    addPosition: dart.fnType(dart.void, [core.Duration, ui$.Offset]),
    getVelocityEstimate: dart.fnType(src__gestures__velocity_tracker.VelocityEstimate, []),
    getVelocity: dart.fnType(src__gestures__velocity_tracker.Velocity, [])
  }));
  dart.setLibraryUri(src__gestures__velocity_tracker.VelocityTracker, "package:flutter_web/src/gestures/velocity_tracker.dart");
  dart.setFieldSignature(src__gestures__velocity_tracker.VelocityTracker, () => ({
    __proto__: dart.getFields(src__gestures__velocity_tracker.VelocityTracker.__proto__),
    [_samples]: dart.finalFieldType(ListOf_PointAtTime()),
    [_index]: dart.fieldType(core.int)
  }));
  dart.defineLazy(src__gestures__velocity_tracker.VelocityTracker, {
    /*src__gestures__velocity_tracker.VelocityTracker._assumePointerMoveStoppedMilliseconds*/get _assumePointerMoveStoppedMilliseconds() {
      return 40;
    },
    /*src__gestures__velocity_tracker.VelocityTracker._historySize*/get _historySize() {
      return 20;
    },
    /*src__gestures__velocity_tracker.VelocityTracker._horizonMilliseconds*/get _horizonMilliseconds() {
      return 100;
    },
    /*src__gestures__velocity_tracker.VelocityTracker._minSampleSize*/get _minSampleSize() {
      return 3;
    }
  });
  src__gestures__drag_details.DragDownDetails = class DragDownDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.globalPosition) + ")";
    }
  };
  (src__gestures__drag_details.DragDownDetails.new = function(opts) {
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : ui$.Offset.zero;
    this[globalPosition$] = globalPosition;
    if (!(globalPosition != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/drag_details.dart", 24, 16, "globalPosition != null");
  }).prototype = src__gestures__drag_details.DragDownDetails.prototype;
  dart.addTypeTests(src__gestures__drag_details.DragDownDetails);
  const globalPosition$ = Symbol("DragDownDetails.globalPosition");
  dart.setLibraryUri(src__gestures__drag_details.DragDownDetails, "package:flutter_web/src/gestures/drag_details.dart");
  dart.setFieldSignature(src__gestures__drag_details.DragDownDetails, () => ({
    __proto__: dart.getFields(src__gestures__drag_details.DragDownDetails.__proto__),
    globalPosition: dart.finalFieldType(ui$.Offset)
  }));
  dart.defineExtensionMethods(src__gestures__drag_details.DragDownDetails, ['toString']);
  src__gestures__drag_details.DragStartDetails = class DragStartDetails extends core.Object {
    get sourceTimeStamp() {
      return this[sourceTimeStamp$];
    }
    set sourceTimeStamp(value) {
      super.sourceTimeStamp = value;
    }
    get globalPosition() {
      return this[globalPosition$0];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.globalPosition) + ")";
    }
  };
  (src__gestures__drag_details.DragStartDetails.new = function(opts) {
    let sourceTimeStamp = opts && 'sourceTimeStamp' in opts ? opts.sourceTimeStamp : null;
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : ui$.Offset.zero;
    this[sourceTimeStamp$] = sourceTimeStamp;
    this[globalPosition$0] = globalPosition;
    if (!(globalPosition != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/drag_details.dart", 56, 16, "globalPosition != null");
  }).prototype = src__gestures__drag_details.DragStartDetails.prototype;
  dart.addTypeTests(src__gestures__drag_details.DragStartDetails);
  const sourceTimeStamp$ = Symbol("DragStartDetails.sourceTimeStamp");
  const globalPosition$0 = Symbol("DragStartDetails.globalPosition");
  dart.setLibraryUri(src__gestures__drag_details.DragStartDetails, "package:flutter_web/src/gestures/drag_details.dart");
  dart.setFieldSignature(src__gestures__drag_details.DragStartDetails, () => ({
    __proto__: dart.getFields(src__gestures__drag_details.DragStartDetails.__proto__),
    sourceTimeStamp: dart.finalFieldType(core.Duration),
    globalPosition: dart.finalFieldType(ui$.Offset)
  }));
  dart.defineExtensionMethods(src__gestures__drag_details.DragStartDetails, ['toString']);
  src__gestures__drag_details.DragUpdateDetails = class DragUpdateDetails extends core.Object {
    get sourceTimeStamp() {
      return this[sourceTimeStamp$0];
    }
    set sourceTimeStamp(value) {
      super.sourceTimeStamp = value;
    }
    get delta() {
      return this[delta$0];
    }
    set delta(value) {
      super.delta = value;
    }
    get primaryDelta() {
      return this[primaryDelta$];
    }
    set primaryDelta(value) {
      super.primaryDelta = value;
    }
    get globalPosition() {
      return this[globalPosition$1];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.delta) + ")";
    }
  };
  (src__gestures__drag_details.DragUpdateDetails.new = function(opts) {
    let sourceTimeStamp = opts && 'sourceTimeStamp' in opts ? opts.sourceTimeStamp : null;
    let delta = opts && 'delta' in opts ? opts.delta : ui$.Offset.zero;
    let primaryDelta = opts && 'primaryDelta' in opts ? opts.primaryDelta : null;
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : null;
    this[sourceTimeStamp$0] = sourceTimeStamp;
    this[delta$0] = delta;
    this[primaryDelta$] = primaryDelta;
    this[globalPosition$1] = globalPosition;
    if (!(delta != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/drag_details.dart", 107, 16, "delta != null");
    if (!(primaryDelta == null || primaryDelta == delta.dx && delta.dy === 0.0 || primaryDelta == delta.dy && delta.dx === 0.0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/drag_details.dart", 108, 16, "primaryDelta == null || (primaryDelta == delta.dx && delta.dy == 0.0) || (primaryDelta == delta.dy && delta.dx == 0.0)");
  }).prototype = src__gestures__drag_details.DragUpdateDetails.prototype;
  dart.addTypeTests(src__gestures__drag_details.DragUpdateDetails);
  const sourceTimeStamp$0 = Symbol("DragUpdateDetails.sourceTimeStamp");
  const delta$0 = Symbol("DragUpdateDetails.delta");
  const primaryDelta$ = Symbol("DragUpdateDetails.primaryDelta");
  const globalPosition$1 = Symbol("DragUpdateDetails.globalPosition");
  dart.setLibraryUri(src__gestures__drag_details.DragUpdateDetails, "package:flutter_web/src/gestures/drag_details.dart");
  dart.setFieldSignature(src__gestures__drag_details.DragUpdateDetails, () => ({
    __proto__: dart.getFields(src__gestures__drag_details.DragUpdateDetails.__proto__),
    sourceTimeStamp: dart.finalFieldType(core.Duration),
    delta: dart.finalFieldType(ui$.Offset),
    primaryDelta: dart.finalFieldType(core.double),
    globalPosition: dart.finalFieldType(ui$.Offset)
  }));
  dart.defineExtensionMethods(src__gestures__drag_details.DragUpdateDetails, ['toString']);
  src__gestures__drag_details.DragEndDetails = class DragEndDetails extends core.Object {
    get velocity() {
      return this[velocity$];
    }
    set velocity(value) {
      super.velocity = value;
    }
    get primaryVelocity() {
      return this[primaryVelocity$];
    }
    set primaryVelocity(value) {
      super.primaryVelocity = value;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.velocity) + ")";
    }
  };
  (src__gestures__drag_details.DragEndDetails.new = function(opts) {
    let velocity = opts && 'velocity' in opts ? opts.velocity : src__gestures__velocity_tracker.Velocity.zero;
    let primaryVelocity = opts && 'primaryVelocity' in opts ? opts.primaryVelocity : null;
    this[velocity$] = velocity;
    this[primaryVelocity$] = primaryVelocity;
    if (!(velocity != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/drag_details.dart", 170, 16, "velocity != null");
    if (!(primaryVelocity == null || primaryVelocity == velocity.pixelsPerSecond.dx || primaryVelocity == velocity.pixelsPerSecond.dy)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/drag_details.dart", 171, 16, "primaryVelocity == null || primaryVelocity == velocity.pixelsPerSecond.dx || primaryVelocity == velocity.pixelsPerSecond.dy");
  }).prototype = src__gestures__drag_details.DragEndDetails.prototype;
  dart.addTypeTests(src__gestures__drag_details.DragEndDetails);
  const velocity$ = Symbol("DragEndDetails.velocity");
  const primaryVelocity$ = Symbol("DragEndDetails.primaryVelocity");
  dart.setLibraryUri(src__gestures__drag_details.DragEndDetails, "package:flutter_web/src/gestures/drag_details.dart");
  dart.setFieldSignature(src__gestures__drag_details.DragEndDetails, () => ({
    __proto__: dart.getFields(src__gestures__drag_details.DragEndDetails.__proto__),
    velocity: dart.finalFieldType(src__gestures__velocity_tracker.Velocity),
    primaryVelocity: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(src__gestures__drag_details.DragEndDetails, ['toString']);
  src__gestures__drag.Drag = class Drag extends core.Object {
    update(details) {}
    end(details) {}
    cancel() {}
  };
  (src__gestures__drag.Drag.new = function() {
  }).prototype = src__gestures__drag.Drag.prototype;
  dart.addTypeTests(src__gestures__drag.Drag);
  dart.setMethodSignature(src__gestures__drag.Drag, () => ({
    __proto__: dart.getMethods(src__gestures__drag.Drag.__proto__),
    update: dart.fnType(dart.void, [src__gestures__drag_details.DragUpdateDetails]),
    end: dart.fnType(dart.void, [src__gestures__drag_details.DragEndDetails]),
    cancel: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(src__gestures__drag.Drag, "package:flutter_web/src/gestures/drag.dart");
  const _combiner = dart.privateName(src__gestures__team, "_combiner");
  const _member$ = dart.privateName(src__gestures__team, "_member");
  const _resolve$ = dart.privateName(src__gestures__team, "_resolve");
  src__gestures__team._CombiningGestureArenaEntry = class _CombiningGestureArenaEntry extends core.Object {
    resolve(disposition) {
      this[_combiner][_resolve$](this[_member$], disposition);
    }
  };
  (src__gestures__team._CombiningGestureArenaEntry.new = function(combiner, member) {
    this[_combiner] = combiner;
    this[_member$] = member;
  }).prototype = src__gestures__team._CombiningGestureArenaEntry.prototype;
  dart.addTypeTests(src__gestures__team._CombiningGestureArenaEntry);
  src__gestures__team._CombiningGestureArenaEntry[dart.implements] = () => [src__gestures__arena.GestureArenaEntry];
  dart.setMethodSignature(src__gestures__team._CombiningGestureArenaEntry, () => ({
    __proto__: dart.getMethods(src__gestures__team._CombiningGestureArenaEntry.__proto__),
    resolve: dart.fnType(dart.void, [src__gestures__arena.GestureDisposition])
  }));
  dart.setLibraryUri(src__gestures__team._CombiningGestureArenaEntry, "package:flutter_web/src/gestures/team.dart");
  dart.setFieldSignature(src__gestures__team._CombiningGestureArenaEntry, () => ({
    __proto__: dart.getFields(src__gestures__team._CombiningGestureArenaEntry.__proto__),
    [_combiner]: dart.finalFieldType(src__gestures__team._CombiningGestureArenaMember),
    [_member$]: dart.finalFieldType(src__gestures__arena.GestureArenaMember)
  }));
  const _owner = dart.privateName(src__gestures__team, "_owner");
  const _pointer$0 = dart.privateName(src__gestures__team, "_pointer");
  const _members = dart.privateName(src__gestures__team, "_members");
  const _resolved = dart.privateName(src__gestures__team, "_resolved");
  const _winner = dart.privateName(src__gestures__team, "_winner");
  const _entry = dart.privateName(src__gestures__team, "_entry");
  const _close = dart.privateName(src__gestures__team, "_close");
  const _combiners = dart.privateName(src__gestures__team, "_combiners");
  const _add = dart.privateName(src__gestures__team, "_add");
  src__gestures__team._CombiningGestureArenaMember = class _CombiningGestureArenaMember extends src__gestures__arena.GestureArenaMember {
    acceptGesture(pointer) {
      if (!(this[_pointer$0] == pointer)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/team.dart", 33, 12, "_pointer == pointer");
      if (!(this[_winner] != null || dart.test(this[_members][$isNotEmpty]))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/team.dart", 34, 12, "_winner != null || _members.isNotEmpty");
      this[_close]();
      let t = this[_winner];
      t == null ? (() => {
        let l = this[_owner].captain;
        return this[_winner] = l != null ? l : this[_members][$_get](0);
      })() : t;
      for (let member of this[_members]) {
        if (!dart.equals(member, this[_winner])) member.rejectGesture(pointer);
      }
      this[_winner].acceptGesture(pointer);
    }
    rejectGesture(pointer) {
      if (!(this[_pointer$0] == pointer)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/team.dart", 45, 12, "_pointer == pointer");
      this[_close]();
      for (let member of this[_members])
        member.rejectGesture(pointer);
    }
    [_close]() {
      if (!!dart.test(this[_resolved])) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/team.dart", 51, 12, "!_resolved");
      this[_resolved] = true;
      let combiner = this[_owner][_combiners][$remove](this[_pointer$0]);
      if (!dart.equals(combiner, this)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/team.dart", 55, 12, "combiner == this");
    }
    [_add](pointer, member) {
      if (!!dart.test(this[_resolved])) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/team.dart", 59, 12, "!_resolved");
      if (!(this[_pointer$0] == pointer)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/team.dart", 60, 12, "_pointer == pointer");
      this[_members][$add](member);
      let t = this[_entry];
      t == null ? this[_entry] = src__gestures__binding.GestureBinding.instance.gestureArena.add(pointer, this) : t;
      return new src__gestures__team._CombiningGestureArenaEntry.new(this, member);
    }
    [_resolve$](member, disposition) {
      if (dart.test(this[_resolved])) return;
      if (disposition === src__gestures__arena.GestureDisposition.rejected) {
        this[_members][$remove](member);
        member.rejectGesture(this[_pointer$0]);
        if (dart.test(this[_members][$isEmpty])) this[_entry].resolve(disposition);
      } else {
        if (!(disposition === src__gestures__arena.GestureDisposition.accepted)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/team.dart", 73, 14, "disposition == GestureDisposition.accepted");
        let t = this[_winner];
        t == null ? (() => {
          let l = this[_owner].captain;
          return this[_winner] = l != null ? l : member;
        })() : t;
        this[_entry].resolve(disposition);
      }
    }
  };
  (src__gestures__team._CombiningGestureArenaMember.new = function(owner, pointer) {
    this[_members] = JSArrayOfGestureArenaMember().of([]);
    this[_resolved] = false;
    this[_winner] = null;
    this[_entry] = null;
    this[_owner] = owner;
    this[_pointer$0] = pointer;
  }).prototype = src__gestures__team._CombiningGestureArenaMember.prototype;
  dart.addTypeTests(src__gestures__team._CombiningGestureArenaMember);
  dart.setMethodSignature(src__gestures__team._CombiningGestureArenaMember, () => ({
    __proto__: dart.getMethods(src__gestures__team._CombiningGestureArenaMember.__proto__),
    acceptGesture: dart.fnType(dart.void, [core.int]),
    rejectGesture: dart.fnType(dart.void, [core.int]),
    [_close]: dart.fnType(dart.void, []),
    [_add]: dart.fnType(src__gestures__arena.GestureArenaEntry, [core.int, src__gestures__arena.GestureArenaMember]),
    [_resolve$]: dart.fnType(dart.void, [src__gestures__arena.GestureArenaMember, src__gestures__arena.GestureDisposition])
  }));
  dart.setLibraryUri(src__gestures__team._CombiningGestureArenaMember, "package:flutter_web/src/gestures/team.dart");
  dart.setFieldSignature(src__gestures__team._CombiningGestureArenaMember, () => ({
    __proto__: dart.getFields(src__gestures__team._CombiningGestureArenaMember.__proto__),
    [_owner]: dart.finalFieldType(src__gestures__team.GestureArenaTeam),
    [_members]: dart.finalFieldType(ListOfGestureArenaMember()),
    [_pointer$0]: dart.finalFieldType(core.int),
    [_resolved]: dart.fieldType(core.bool),
    [_winner]: dart.fieldType(src__gestures__arena.GestureArenaMember),
    [_entry]: dart.fieldType(src__gestures__arena.GestureArenaEntry)
  }));
  src__gestures__team.GestureArenaTeam = class GestureArenaTeam extends core.Object {
    get captain() {
      return this[captain];
    }
    set captain(value) {
      this[captain] = value;
    }
    add(pointer, member) {
      let combiner = this[_combiners][$putIfAbsent](pointer, dart.fn(() => new src__gestures__team._CombiningGestureArenaMember.new(this, pointer), VoidTo_CombiningGestureArenaMember()));
      return combiner[_add](pointer, member);
    }
  };
  (src__gestures__team.GestureArenaTeam.new = function() {
    this[_combiners] = new (IdentityMapOfint$_CombiningGestureArenaMember()).new();
    this[captain] = null;
  }).prototype = src__gestures__team.GestureArenaTeam.prototype;
  dart.addTypeTests(src__gestures__team.GestureArenaTeam);
  const captain = Symbol("GestureArenaTeam.captain");
  dart.setMethodSignature(src__gestures__team.GestureArenaTeam, () => ({
    __proto__: dart.getMethods(src__gestures__team.GestureArenaTeam.__proto__),
    add: dart.fnType(src__gestures__arena.GestureArenaEntry, [core.int, src__gestures__arena.GestureArenaMember])
  }));
  dart.setLibraryUri(src__gestures__team.GestureArenaTeam, "package:flutter_web/src/gestures/team.dart");
  dart.setFieldSignature(src__gestures__team.GestureArenaTeam, () => ({
    __proto__: dart.getFields(src__gestures__team.GestureArenaTeam.__proto__),
    [_combiners]: dart.finalFieldType(MapOfint$_CombiningGestureArenaMember()),
    captain: dart.fieldType(src__gestures__arena.GestureArenaMember)
  }));
  src__gestures__recognizer.DragStartBehavior = class DragStartBehavior extends core.Object {
    toString() {
      return {
        0: "DragStartBehavior.down",
        1: "DragStartBehavior.start"
      }[this.index];
    }
  };
  (src__gestures__recognizer.DragStartBehavior.new = function(x) {
    this.index = x;
  }).prototype = src__gestures__recognizer.DragStartBehavior.prototype;
  dart.addTypeTests(src__gestures__recognizer.DragStartBehavior);
  dart.setLibraryUri(src__gestures__recognizer.DragStartBehavior, "package:flutter_web/src/gestures/recognizer.dart");
  dart.setFieldSignature(src__gestures__recognizer.DragStartBehavior, () => ({
    __proto__: dart.getFields(src__gestures__recognizer.DragStartBehavior.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__gestures__recognizer.DragStartBehavior, ['toString']);
  src__gestures__recognizer.DragStartBehavior.down = dart.const(new src__gestures__recognizer.DragStartBehavior.new(0));
  src__gestures__recognizer.DragStartBehavior.start = dart.const(new src__gestures__recognizer.DragStartBehavior.new(1));
  src__gestures__recognizer.DragStartBehavior.values = dart.constList([src__gestures__recognizer.DragStartBehavior.down, src__gestures__recognizer.DragStartBehavior.start], src__gestures__recognizer.DragStartBehavior);
  const _kindFilter = dart.privateName(src__gestures__recognizer, "_kindFilter");
  const _pointerToKind = dart.privateName(src__gestures__recognizer, "_pointerToKind");
  const GestureArenaMember_DiagnosticableTreeMixin$ = class GestureArenaMember_DiagnosticableTreeMixin extends src__gestures__arena.GestureArenaMember {};
  (GestureArenaMember_DiagnosticableTreeMixin$.new = function() {
  }).prototype = GestureArenaMember_DiagnosticableTreeMixin$.prototype;
  dart.applyMixin(GestureArenaMember_DiagnosticableTreeMixin$, src__foundation__diagnostics.DiagnosticableTreeMixin);
  src__gestures__recognizer.GestureRecognizer = class GestureRecognizer extends GestureArenaMember_DiagnosticableTreeMixin$ {
    get debugOwner() {
      return this[debugOwner$];
    }
    set debugOwner(value) {
      super.debugOwner = value;
    }
    addPointer(event) {
      this[_pointerToKind][$_set](event.pointer, event.kind);
      if (dart.test(this.isPointerAllowed(event))) {
        this.addAllowedPointer(event);
      } else {
        this.handleNonAllowedPointer(event);
      }
    }
    addAllowedPointer(event) {}
    handleNonAllowedPointer(event) {}
    isPointerAllowed(event) {
      return this[_kindFilter] == null || this[_kindFilter] == event.kind;
    }
    getKindForPointer(pointer) {
      if (!dart.test(this[_pointerToKind][$containsKey](pointer))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/recognizer.dart", 142, 12, "_pointerToKind.containsKey(pointer)");
      return this[_pointerToKind][$_get](pointer);
    }
    dispose() {}
    invokeCallback(T, name, callback, opts) {
      let debugReport = opts && 'debugReport' in opts ? opts.debugReport : null;
      if (!(callback != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/recognizer.dart", 171, 12, "callback != null");
      let result = null;
      try {
        if (!dart.test(dart.fn(() => {
          if (dart.test(src__gestures__debug.debugPrintRecognizerCallbacksTrace)) {
            let report = debugReport != null ? debugReport() : null;
            let prefix = dart.test(src__gestures__debug.debugPrintGestureArenaDiagnostics) ? " "[$times](19) + "❙ " : "";
            src__foundation__print.debugPrint(prefix + dart.str(this) + " calling " + dart.str(name) + " callback." + ((report == null ? null : report[$isNotEmpty]) === true ? " " + dart.str(report) : ""));
          }
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/recognizer.dart", 174, 14, "() {if (debugPrintRecognizerCallbacksTrace) {final String report = debugReport != null ? debugReport() : null; final String prefix = debugPrintGestureArenaDiagnostics ? ' ' * 19 + '❙ ' : ''; debugPrint('$prefix$this calling $name callback.${report?.isNotEmpty == true ? \" $report\" : \"\"}');} return true;}()");
        result = callback();
      } catch (e) {
        let exception = dart.getThrown(e);
        let stack = dart.stackTrace(e);
        src__foundation__assertions.FlutterError.reportError(new src__foundation__assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "gesture", context: new src__foundation__assertions.ErrorDescription.new("while handling a gesture"), informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsNode()).new((function*() {
            yield new src__foundation__diagnostics.StringProperty.new("Handler", name);
            yield new (DiagnosticsPropertyOfGestureRecognizer()).new("Recognizer", this, {style: src__foundation__diagnostics.DiagnosticsTreeStyle.errorProperty});
          }).bind(this)), VoidToIterableOfDiagnosticsNode())}));
      }
      return result;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfObject()).new("debugOwner", this.debugOwner, {defaultValue: null}));
    }
  };
  (src__gestures__recognizer.GestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[_pointerToKind] = new (IdentityMapOfint$PointerDeviceKind()).new();
    this[debugOwner$] = debugOwner;
    this[_kindFilter] = kind;
  }).prototype = src__gestures__recognizer.GestureRecognizer.prototype;
  dart.addTypeTests(src__gestures__recognizer.GestureRecognizer);
  const debugOwner$ = Symbol("GestureRecognizer.debugOwner");
  dart.setMethodSignature(src__gestures__recognizer.GestureRecognizer, () => ({
    __proto__: dart.getMethods(src__gestures__recognizer.GestureRecognizer.__proto__),
    addPointer: dart.fnType(dart.void, [src__gestures__events.PointerDownEvent]),
    addAllowedPointer: dart.fnType(dart.void, [src__gestures__events.PointerDownEvent]),
    handleNonAllowedPointer: dart.fnType(dart.void, [src__gestures__events.PointerDownEvent]),
    isPointerAllowed: dart.fnType(core.bool, [src__gestures__events.PointerDownEvent]),
    getKindForPointer: dart.fnType(ui$.PointerDeviceKind, [core.int]),
    dispose: dart.fnType(dart.void, []),
    invokeCallback: dart.gFnType(T => [T, [core.String, dart.fnType(T, [])], {debugReport: dart.fnType(core.String, [])}])
  }));
  dart.setLibraryUri(src__gestures__recognizer.GestureRecognizer, "package:flutter_web/src/gestures/recognizer.dart");
  dart.setFieldSignature(src__gestures__recognizer.GestureRecognizer, () => ({
    __proto__: dart.getFields(src__gestures__recognizer.GestureRecognizer.__proto__),
    debugOwner: dart.finalFieldType(core.Object),
    [_kindFilter]: dart.finalFieldType(ui$.PointerDeviceKind),
    [_pointerToKind]: dart.finalFieldType(MapOfint$PointerDeviceKind())
  }));
  const _entries = dart.privateName(src__gestures__recognizer, "_entries");
  const _trackedPointers = dart.privateName(src__gestures__recognizer, "_trackedPointers");
  const _team = dart.privateName(src__gestures__recognizer, "_team");
  const _addPointerToArena = dart.privateName(src__gestures__recognizer, "_addPointerToArena");
  src__gestures__recognizer.OneSequenceGestureRecognizer = class OneSequenceGestureRecognizer extends src__gestures__recognizer.GestureRecognizer {
    handleNonAllowedPointer(event) {
      this.resolve(src__gestures__arena.GestureDisposition.rejected);
    }
    acceptGesture(pointer) {}
    rejectGesture(pointer) {}
    resolve(disposition) {
      let localEntries = ListOfGestureArenaEntry().from(this[_entries][$values]);
      this[_entries][$clear]();
      for (let entry of localEntries)
        entry.resolve(disposition);
    }
    dispose() {
      this.resolve(src__gestures__arena.GestureDisposition.rejected);
      for (let pointer of this[_trackedPointers])
        src__gestures__binding.GestureBinding.instance.pointerRouter.removeRoute(pointer, dart.bind(this, 'handleEvent'));
      this[_trackedPointers].clear();
      if (!dart.test(this[_entries][$isEmpty])) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/recognizer.dart", 269, 12, "_entries.isEmpty");
      super.dispose();
    }
    get team() {
      return this[_team];
    }
    set team(value) {
      if (!(value != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/recognizer.dart", 288, 12, "value != null");
      if (!dart.test(this[_entries][$isEmpty])) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/recognizer.dart", 289, 12, "_entries.isEmpty");
      if (!dart.test(this[_trackedPointers].isEmpty)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/recognizer.dart", 290, 12, "_trackedPointers.isEmpty");
      if (!(this[_team] == null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/recognizer.dart", 291, 12, "_team == null");
      this[_team] = value;
    }
    [_addPointerToArena](pointer) {
      if (this[_team] != null) return this[_team].add(pointer, this);
      return src__gestures__binding.GestureBinding.instance.gestureArena.add(pointer, this);
    }
    startTrackingPointer(pointer) {
      src__gestures__binding.GestureBinding.instance.pointerRouter.addRoute(pointer, dart.bind(this, 'handleEvent'));
      this[_trackedPointers].add(pointer);
      if (!!dart.test(this[_entries][$containsValue](pointer))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/recognizer.dart", 309, 12, "!_entries.containsValue(pointer)");
      this[_entries][$_set](pointer, this[_addPointerToArena](pointer));
    }
    stopTrackingPointer(pointer) {
      if (dart.test(this[_trackedPointers].contains(pointer))) {
        src__gestures__binding.GestureBinding.instance.pointerRouter.removeRoute(pointer, dart.bind(this, 'handleEvent'));
        this[_trackedPointers].remove(pointer);
        if (dart.test(this[_trackedPointers].isEmpty)) this.didStopTrackingLastPointer(pointer);
      }
    }
    stopTrackingIfPointerNoLongerDown(event) {
      if (src__gestures__events.PointerUpEvent.is(event) || src__gestures__events.PointerCancelEvent.is(event)) this.stopTrackingPointer(event.pointer);
    }
  };
  (src__gestures__recognizer.OneSequenceGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[_entries] = new (IdentityMapOfint$GestureArenaEntry()).new();
    this[_trackedPointers] = new (_IdentityHashSetOfint()).new();
    this[_team] = null;
    src__gestures__recognizer.OneSequenceGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
  }).prototype = src__gestures__recognizer.OneSequenceGestureRecognizer.prototype;
  dart.addTypeTests(src__gestures__recognizer.OneSequenceGestureRecognizer);
  dart.setMethodSignature(src__gestures__recognizer.OneSequenceGestureRecognizer, () => ({
    __proto__: dart.getMethods(src__gestures__recognizer.OneSequenceGestureRecognizer.__proto__),
    acceptGesture: dart.fnType(dart.void, [core.int]),
    rejectGesture: dart.fnType(dart.void, [core.int]),
    resolve: dart.fnType(dart.void, [src__gestures__arena.GestureDisposition]),
    [_addPointerToArena]: dart.fnType(src__gestures__arena.GestureArenaEntry, [core.int]),
    startTrackingPointer: dart.fnType(dart.void, [core.int]),
    stopTrackingPointer: dart.fnType(dart.void, [core.int]),
    stopTrackingIfPointerNoLongerDown: dart.fnType(dart.void, [src__gestures__events.PointerEvent])
  }));
  dart.setGetterSignature(src__gestures__recognizer.OneSequenceGestureRecognizer, () => ({
    __proto__: dart.getGetters(src__gestures__recognizer.OneSequenceGestureRecognizer.__proto__),
    team: src__gestures__team.GestureArenaTeam
  }));
  dart.setSetterSignature(src__gestures__recognizer.OneSequenceGestureRecognizer, () => ({
    __proto__: dart.getSetters(src__gestures__recognizer.OneSequenceGestureRecognizer.__proto__),
    team: src__gestures__team.GestureArenaTeam
  }));
  dart.setLibraryUri(src__gestures__recognizer.OneSequenceGestureRecognizer, "package:flutter_web/src/gestures/recognizer.dart");
  dart.setFieldSignature(src__gestures__recognizer.OneSequenceGestureRecognizer, () => ({
    __proto__: dart.getFields(src__gestures__recognizer.OneSequenceGestureRecognizer.__proto__),
    [_entries]: dart.finalFieldType(MapOfint$GestureArenaEntry()),
    [_trackedPointers]: dart.finalFieldType(SetOfint()),
    [_team]: dart.fieldType(src__gestures__team.GestureArenaTeam)
  }));
  src__gestures__recognizer.GestureRecognizerState = class GestureRecognizerState extends core.Object {
    toString() {
      return {
        0: "GestureRecognizerState.ready",
        1: "GestureRecognizerState.possible",
        2: "GestureRecognizerState.defunct"
      }[this.index];
    }
  };
  (src__gestures__recognizer.GestureRecognizerState.new = function(x) {
    this.index = x;
  }).prototype = src__gestures__recognizer.GestureRecognizerState.prototype;
  dart.addTypeTests(src__gestures__recognizer.GestureRecognizerState);
  dart.setLibraryUri(src__gestures__recognizer.GestureRecognizerState, "package:flutter_web/src/gestures/recognizer.dart");
  dart.setFieldSignature(src__gestures__recognizer.GestureRecognizerState, () => ({
    __proto__: dart.getFields(src__gestures__recognizer.GestureRecognizerState.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__gestures__recognizer.GestureRecognizerState, ['toString']);
  src__gestures__recognizer.GestureRecognizerState.ready = dart.const(new src__gestures__recognizer.GestureRecognizerState.new(0));
  src__gestures__recognizer.GestureRecognizerState.possible = dart.const(new src__gestures__recognizer.GestureRecognizerState.new(1));
  src__gestures__recognizer.GestureRecognizerState.defunct = dart.const(new src__gestures__recognizer.GestureRecognizerState.new(2));
  src__gestures__recognizer.GestureRecognizerState.values = dart.constList([src__gestures__recognizer.GestureRecognizerState.ready, src__gestures__recognizer.GestureRecognizerState.possible, src__gestures__recognizer.GestureRecognizerState.defunct], src__gestures__recognizer.GestureRecognizerState);
  const _gestureAccepted = dart.privateName(src__gestures__recognizer, "_gestureAccepted");
  const _timer = dart.privateName(src__gestures__recognizer, "_timer");
  const _getDistance = dart.privateName(src__gestures__recognizer, "_getDistance");
  const _stopTimer = dart.privateName(src__gestures__recognizer, "_stopTimer");
  src__gestures__recognizer.PrimaryPointerGestureRecognizer = class PrimaryPointerGestureRecognizer extends src__gestures__recognizer.OneSequenceGestureRecognizer {
    get deadline() {
      return this[deadline$];
    }
    set deadline(value) {
      super.deadline = value;
    }
    get preAcceptSlopTolerance() {
      return this[preAcceptSlopTolerance$];
    }
    set preAcceptSlopTolerance(value) {
      super.preAcceptSlopTolerance = value;
    }
    get postAcceptSlopTolerance() {
      return this[postAcceptSlopTolerance$];
    }
    set postAcceptSlopTolerance(value) {
      super.postAcceptSlopTolerance = value;
    }
    get state() {
      return this[state];
    }
    set state(value) {
      this[state] = value;
    }
    get primaryPointer() {
      return this[primaryPointer];
    }
    set primaryPointer(value) {
      this[primaryPointer] = value;
    }
    get initialPosition() {
      return this[initialPosition];
    }
    set initialPosition(value) {
      this[initialPosition] = value;
    }
    addAllowedPointer(event) {
      this.startTrackingPointer(event.pointer);
      if (this.state === src__gestures__recognizer.GestureRecognizerState.ready) {
        this.state = src__gestures__recognizer.GestureRecognizerState.possible;
        this.primaryPointer = event.pointer;
        this.initialPosition = event.position;
        if (this.deadline != null) this[_timer] = async.Timer.new(this.deadline, dart.fn(() => this.didExceedDeadlineWithEvent(event), VoidTovoid()));
      }
    }
    handleEvent(event) {
      if (!(this.state !== src__gestures__recognizer.GestureRecognizerState.ready)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/recognizer.dart", 441, 12, "state != GestureRecognizerState.ready");
      if (this.state === src__gestures__recognizer.GestureRecognizerState.possible && event.pointer == this.primaryPointer) {
        let isPreAcceptSlopPastTolerance = !dart.test(this[_gestureAccepted]) && this.preAcceptSlopTolerance != null && dart.notNull(this[_getDistance](event)) > dart.notNull(this.preAcceptSlopTolerance);
        let isPostAcceptSlopPastTolerance = dart.test(this[_gestureAccepted]) && this.postAcceptSlopTolerance != null && dart.notNull(this[_getDistance](event)) > dart.notNull(this.postAcceptSlopTolerance);
        if (src__gestures__events.PointerMoveEvent.is(event) && (isPreAcceptSlopPastTolerance || isPostAcceptSlopPastTolerance)) {
          this.resolve(src__gestures__arena.GestureDisposition.rejected);
          this.stopTrackingPointer(this.primaryPointer);
        } else {
          this.handlePrimaryPointer(event);
        }
      }
      this.stopTrackingIfPointerNoLongerDown(event);
    }
    didExceedDeadline() {
      if (!(this.deadline == null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/recognizer.dart", 472, 12, "deadline == null");
    }
    didExceedDeadlineWithEvent(event) {
      this.didExceedDeadline();
    }
    acceptGesture(pointer) {
      this[_gestureAccepted] = true;
    }
    rejectGesture(pointer) {
      if (pointer == this.primaryPointer && this.state === src__gestures__recognizer.GestureRecognizerState.possible) {
        this[_stopTimer]();
        this.state = src__gestures__recognizer.GestureRecognizerState.defunct;
      }
    }
    didStopTrackingLastPointer(pointer) {
      if (!(this.state !== src__gestures__recognizer.GestureRecognizerState.ready)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/recognizer.dart", 500, 12, "state != GestureRecognizerState.ready");
      this[_stopTimer]();
      this.state = src__gestures__recognizer.GestureRecognizerState.ready;
    }
    dispose() {
      this[_stopTimer]();
      super.dispose();
    }
    [_stopTimer]() {
      if (this[_timer] != null) {
        this[_timer].cancel();
        this[_timer] = null;
      }
    }
    [_getDistance](event) {
      let offset = event.position['-'](this.initialPosition);
      return offset.distance;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (EnumPropertyOfGestureRecognizerState()).new("state", this.state));
    }
  };
  (src__gestures__recognizer.PrimaryPointerGestureRecognizer.new = function(opts) {
    let deadline = opts && 'deadline' in opts ? opts.deadline : null;
    let preAcceptSlopTolerance = opts && 'preAcceptSlopTolerance' in opts ? opts.preAcceptSlopTolerance : 18.0;
    let postAcceptSlopTolerance = opts && 'postAcceptSlopTolerance' in opts ? opts.postAcceptSlopTolerance : 18.0;
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[state] = src__gestures__recognizer.GestureRecognizerState.ready;
    this[primaryPointer] = null;
    this[initialPosition] = null;
    this[_gestureAccepted] = false;
    this[_timer] = null;
    this[deadline$] = deadline;
    this[preAcceptSlopTolerance$] = preAcceptSlopTolerance;
    this[postAcceptSlopTolerance$] = postAcceptSlopTolerance;
    if (!(preAcceptSlopTolerance == null || dart.notNull(preAcceptSlopTolerance) >= 0)) dart.assertFailed("The preAcceptSlopTolerance must be positive or null", "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/recognizer.dart", 379, 11, "preAcceptSlopTolerance == null || preAcceptSlopTolerance >= 0");
    if (!(postAcceptSlopTolerance == null || dart.notNull(postAcceptSlopTolerance) >= 0)) dart.assertFailed("The postAcceptSlopTolerance must be positive or null", "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/recognizer.dart", 383, 11, "postAcceptSlopTolerance == null || postAcceptSlopTolerance >= 0");
    src__gestures__recognizer.PrimaryPointerGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
  }).prototype = src__gestures__recognizer.PrimaryPointerGestureRecognizer.prototype;
  dart.addTypeTests(src__gestures__recognizer.PrimaryPointerGestureRecognizer);
  const deadline$ = Symbol("PrimaryPointerGestureRecognizer.deadline");
  const preAcceptSlopTolerance$ = Symbol("PrimaryPointerGestureRecognizer.preAcceptSlopTolerance");
  const postAcceptSlopTolerance$ = Symbol("PrimaryPointerGestureRecognizer.postAcceptSlopTolerance");
  const state = Symbol("PrimaryPointerGestureRecognizer.state");
  const primaryPointer = Symbol("PrimaryPointerGestureRecognizer.primaryPointer");
  const initialPosition = Symbol("PrimaryPointerGestureRecognizer.initialPosition");
  dart.setMethodSignature(src__gestures__recognizer.PrimaryPointerGestureRecognizer, () => ({
    __proto__: dart.getMethods(src__gestures__recognizer.PrimaryPointerGestureRecognizer.__proto__),
    handleEvent: dart.fnType(dart.void, [src__gestures__events.PointerEvent]),
    didExceedDeadline: dart.fnType(dart.void, []),
    didExceedDeadlineWithEvent: dart.fnType(dart.void, [src__gestures__events.PointerDownEvent]),
    didStopTrackingLastPointer: dart.fnType(dart.void, [core.int]),
    [_stopTimer]: dart.fnType(dart.void, []),
    [_getDistance]: dart.fnType(core.double, [src__gestures__events.PointerEvent])
  }));
  dart.setLibraryUri(src__gestures__recognizer.PrimaryPointerGestureRecognizer, "package:flutter_web/src/gestures/recognizer.dart");
  dart.setFieldSignature(src__gestures__recognizer.PrimaryPointerGestureRecognizer, () => ({
    __proto__: dart.getFields(src__gestures__recognizer.PrimaryPointerGestureRecognizer.__proto__),
    deadline: dart.finalFieldType(core.Duration),
    preAcceptSlopTolerance: dart.finalFieldType(core.double),
    postAcceptSlopTolerance: dart.finalFieldType(core.double),
    state: dart.fieldType(src__gestures__recognizer.GestureRecognizerState),
    primaryPointer: dart.fieldType(core.int),
    initialPosition: dart.fieldType(ui$.Offset),
    [_gestureAccepted]: dart.fieldType(core.bool),
    [_timer]: dart.fieldType(async.Timer)
  }));
  src__gestures__eager.EagerGestureRecognizer = class EagerGestureRecognizer extends src__gestures__recognizer.OneSequenceGestureRecognizer {
    addAllowedPointer(event) {
      this.startTrackingPointer(event.pointer);
      this.resolve(src__gestures__arena.GestureDisposition.accepted);
      this.stopTrackingPointer(event.pointer);
    }
    get debugDescription() {
      return "eager";
    }
    didStopTrackingLastPointer(pointer) {}
    handleEvent(event) {}
  };
  (src__gestures__eager.EagerGestureRecognizer.new = function(opts) {
    let kind = opts && 'kind' in opts ? opts.kind : null;
    src__gestures__eager.EagerGestureRecognizer.__proto__.new.call(this, {kind: kind});
  }).prototype = src__gestures__eager.EagerGestureRecognizer.prototype;
  dart.addTypeTests(src__gestures__eager.EagerGestureRecognizer);
  dart.setMethodSignature(src__gestures__eager.EagerGestureRecognizer, () => ({
    __proto__: dart.getMethods(src__gestures__eager.EagerGestureRecognizer.__proto__),
    didStopTrackingLastPointer: dart.fnType(dart.void, [core.int]),
    handleEvent: dart.fnType(dart.void, [src__gestures__events.PointerEvent])
  }));
  dart.setGetterSignature(src__gestures__eager.EagerGestureRecognizer, () => ({
    __proto__: dart.getGetters(src__gestures__eager.EagerGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(src__gestures__eager.EagerGestureRecognizer, "package:flutter_web/src/gestures/eager.dart");
  src__gestures__force_press._ForceState = class _ForceState extends core.Object {
    toString() {
      return {
        0: "_ForceState.ready",
        1: "_ForceState.possible",
        2: "_ForceState.accepted",
        3: "_ForceState.started",
        4: "_ForceState.peaked"
      }[this.index];
    }
  };
  (src__gestures__force_press._ForceState.new = function(x) {
    this.index = x;
  }).prototype = src__gestures__force_press._ForceState.prototype;
  dart.addTypeTests(src__gestures__force_press._ForceState);
  dart.setLibraryUri(src__gestures__force_press._ForceState, "package:flutter_web/src/gestures/force_press.dart");
  dart.setFieldSignature(src__gestures__force_press._ForceState, () => ({
    __proto__: dart.getFields(src__gestures__force_press._ForceState.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__gestures__force_press._ForceState, ['toString']);
  src__gestures__force_press._ForceState.ready = dart.const(new src__gestures__force_press._ForceState.new(0));
  src__gestures__force_press._ForceState.possible = dart.const(new src__gestures__force_press._ForceState.new(1));
  src__gestures__force_press._ForceState.accepted = dart.const(new src__gestures__force_press._ForceState.new(2));
  src__gestures__force_press._ForceState.started = dart.const(new src__gestures__force_press._ForceState.new(3));
  src__gestures__force_press._ForceState.peaked = dart.const(new src__gestures__force_press._ForceState.new(4));
  src__gestures__force_press._ForceState.values = dart.constList([src__gestures__force_press._ForceState.ready, src__gestures__force_press._ForceState.possible, src__gestures__force_press._ForceState.accepted, src__gestures__force_press._ForceState.started, src__gestures__force_press._ForceState.peaked], src__gestures__force_press._ForceState);
  src__gestures__force_press.ForcePressDetails = class ForcePressDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$2];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    get pressure() {
      return this[pressure$0];
    }
    set pressure(value) {
      super.pressure = value;
    }
  };
  (src__gestures__force_press.ForcePressDetails.new = function(opts) {
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : null;
    let pressure = opts && 'pressure' in opts ? opts.pressure : null;
    this[globalPosition$2] = globalPosition;
    this[pressure$0] = pressure;
    if (!(globalPosition != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/force_press.dart", 55, 16, "globalPosition != null");
    if (!(pressure != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/force_press.dart", 56, 16, "pressure != null");
  }).prototype = src__gestures__force_press.ForcePressDetails.prototype;
  dart.addTypeTests(src__gestures__force_press.ForcePressDetails);
  const globalPosition$2 = Symbol("ForcePressDetails.globalPosition");
  const pressure$0 = Symbol("ForcePressDetails.pressure");
  dart.setLibraryUri(src__gestures__force_press.ForcePressDetails, "package:flutter_web/src/gestures/force_press.dart");
  dart.setFieldSignature(src__gestures__force_press.ForcePressDetails, () => ({
    __proto__: dart.getFields(src__gestures__force_press.ForcePressDetails.__proto__),
    globalPosition: dart.finalFieldType(ui$.Offset),
    pressure: dart.finalFieldType(core.double)
  }));
  const _lastPosition = dart.privateName(src__gestures__force_press, "_lastPosition");
  const _lastPressure = dart.privateName(src__gestures__force_press, "_lastPressure");
  const _state = dart.privateName(src__gestures__force_press, "_state");
  src__gestures__force_press.ForcePressGestureRecognizer = class ForcePressGestureRecognizer extends src__gestures__recognizer.OneSequenceGestureRecognizer {
    get onStart() {
      return this[onStart];
    }
    set onStart(value) {
      this[onStart] = value;
    }
    get onUpdate() {
      return this[onUpdate];
    }
    set onUpdate(value) {
      this[onUpdate] = value;
    }
    get onPeak() {
      return this[onPeak];
    }
    set onPeak(value) {
      this[onPeak] = value;
    }
    get onEnd() {
      return this[onEnd];
    }
    set onEnd(value) {
      this[onEnd] = value;
    }
    get startPressure() {
      return this[startPressure$];
    }
    set startPressure(value) {
      super.startPressure = value;
    }
    get peakPressure() {
      return this[peakPressure$];
    }
    set peakPressure(value) {
      super.peakPressure = value;
    }
    get interpolation() {
      return this[interpolation$];
    }
    set interpolation(value) {
      super.interpolation = value;
    }
    addAllowedPointer(event) {
      if (!src__gestures__events.PointerUpEvent.is(event) && dart.notNull(event.pressureMax) <= 1.0) {
        this.resolve(src__gestures__arena.GestureDisposition.rejected);
      } else {
        this.startTrackingPointer(event.pointer);
        if (this[_state] === src__gestures__force_press._ForceState.ready) {
          this[_state] = src__gestures__force_press._ForceState.possible;
          this[_lastPosition] = event.position;
        }
      }
    }
    handleEvent(event) {
      if (!(this[_state] !== src__gestures__force_press._ForceState.ready)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/force_press.dart", 232, 12, "_state != _ForceState.ready");
      if (src__gestures__events.PointerMoveEvent.is(event) || src__gestures__events.PointerDownEvent.is(event)) {
        if (dart.notNull(event.pressure) > dart.notNull(event.pressureMax) || dart.notNull(event.pressure) < dart.notNull(event.pressureMin)) {
          src__foundation__print.debugPrint("The reported device pressure " + dart.toString(event.pressure) + " is outside of the device pressure range where: " + dart.toString(event.pressureMin) + " <= pressure <= " + dart.toString(event.pressureMax));
        }
        let pressure = this.interpolation(event.pressureMin, event.pressureMax, event.pressure);
        if (!(dart.notNull(pressure) >= 0.0 && dart.notNull(pressure) <= 1.0 || pressure[$isNaN])) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/force_press.dart", 249, 14, "(pressure >= 0.0 && pressure <= 1.0) || pressure.isNaN");
        this[_lastPosition] = event.position;
        this[_lastPressure] = pressure;
        if (this[_state] === src__gestures__force_press._ForceState.possible) {
          if (dart.notNull(pressure) > dart.notNull(this.startPressure)) {
            this[_state] = src__gestures__force_press._ForceState.started;
            this.resolve(src__gestures__arena.GestureDisposition.accepted);
          } else if (dart.notNull(event.delta.distanceSquared) > 18.0) {
            this.resolve(src__gestures__arena.GestureDisposition.rejected);
          }
        }
        if (dart.notNull(pressure) > dart.notNull(this.startPressure) && this[_state] === src__gestures__force_press._ForceState.accepted) {
          this[_state] = src__gestures__force_press._ForceState.started;
          if (this.onStart != null) {
            this.invokeCallback(dart.void, "onStart", dart.fn(() => this.onStart(new src__gestures__force_press.ForcePressDetails.new({pressure: pressure, globalPosition: this[_lastPosition]})), VoidTovoid()));
          }
        }
        if (this.onPeak != null && dart.notNull(pressure) > dart.notNull(this.peakPressure) && this[_state] === src__gestures__force_press._ForceState.started) {
          this[_state] = src__gestures__force_press._ForceState.peaked;
          if (this.onPeak != null) {
            this.invokeCallback(dart.void, "onPeak", dart.fn(() => this.onPeak(new src__gestures__force_press.ForcePressDetails.new({pressure: pressure, globalPosition: event.position})), VoidTovoid()));
          }
        }
        if (this.onUpdate != null && !pressure[$isNaN] && (this[_state] === src__gestures__force_press._ForceState.started || this[_state] === src__gestures__force_press._ForceState.peaked)) {
          if (this.onUpdate != null) {
            this.invokeCallback(dart.void, "onUpdate", dart.fn(() => this.onUpdate(new src__gestures__force_press.ForcePressDetails.new({pressure: pressure, globalPosition: event.position})), VoidTovoid()));
          }
        }
      }
      this.stopTrackingIfPointerNoLongerDown(event);
    }
    acceptGesture(pointer) {
      if (this[_state] === src__gestures__force_press._ForceState.possible) this[_state] = src__gestures__force_press._ForceState.accepted;
      if (this.onStart != null && this[_state] === src__gestures__force_press._ForceState.started) {
        this.invokeCallback(dart.void, "onStart", dart.fn(() => this.onStart(new src__gestures__force_press.ForcePressDetails.new({pressure: this[_lastPressure], globalPosition: this[_lastPosition]})), VoidTovoid()));
      }
    }
    didStopTrackingLastPointer(pointer) {
      let wasAccepted = this[_state] === src__gestures__force_press._ForceState.started || this[_state] === src__gestures__force_press._ForceState.peaked;
      if (this[_state] === src__gestures__force_press._ForceState.possible) {
        this.resolve(src__gestures__arena.GestureDisposition.rejected);
        return;
      }
      if (wasAccepted && this.onEnd != null) {
        if (this.onEnd != null) {
          this.invokeCallback(dart.void, "onEnd", dart.fn(() => this.onEnd(new src__gestures__force_press.ForcePressDetails.new({pressure: 0.0, globalPosition: this[_lastPosition]})), VoidTovoid()));
        }
      }
      this[_state] = src__gestures__force_press._ForceState.ready;
    }
    rejectGesture(pointer) {
      this.stopTrackingPointer(pointer);
      this.didStopTrackingLastPointer(pointer);
    }
    static _inverseLerp(min, max, t) {
      if (!(dart.notNull(min) <= dart.notNull(max))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/force_press.dart", 351, 12, "min <= max");
      let value = (dart.notNull(t) - dart.notNull(min)) / (dart.notNull(max) - dart.notNull(min));
      if (!value[$isNaN]) value = value[$clamp](0.0, 1.0);
      return value;
    }
    get debugDescription() {
      return "force press";
    }
  };
  (src__gestures__force_press.ForcePressGestureRecognizer.new = function(opts) {
    let startPressure = opts && 'startPressure' in opts ? opts.startPressure : 0.4;
    let peakPressure = opts && 'peakPressure' in opts ? opts.peakPressure : 0.85;
    let interpolation = opts && 'interpolation' in opts ? opts.interpolation : dart.fn(src__gestures__force_press.ForcePressGestureRecognizer._inverseLerp, doubleAnddoubleAnddoubleTodouble());
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[onStart] = null;
    this[onUpdate] = null;
    this[onPeak] = null;
    this[onEnd] = null;
    this[_lastPosition] = null;
    this[_lastPressure] = null;
    this[_state] = src__gestures__force_press._ForceState.ready;
    this[startPressure$] = startPressure;
    this[peakPressure$] = peakPressure;
    this[interpolation$] = interpolation;
    if (!(startPressure != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/force_press.dart", 131, 16, "startPressure != null");
    if (!(peakPressure != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/force_press.dart", 132, 16, "peakPressure != null");
    if (!(interpolation != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/force_press.dart", 133, 16, "interpolation != null");
    if (!(dart.notNull(peakPressure) > dart.notNull(startPressure))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/force_press.dart", 134, 16, "peakPressure > startPressure");
    src__gestures__force_press.ForcePressGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
  }).prototype = src__gestures__force_press.ForcePressGestureRecognizer.prototype;
  dart.addTypeTests(src__gestures__force_press.ForcePressGestureRecognizer);
  const onStart = Symbol("ForcePressGestureRecognizer.onStart");
  const onUpdate = Symbol("ForcePressGestureRecognizer.onUpdate");
  const onPeak = Symbol("ForcePressGestureRecognizer.onPeak");
  const onEnd = Symbol("ForcePressGestureRecognizer.onEnd");
  const startPressure$ = Symbol("ForcePressGestureRecognizer.startPressure");
  const peakPressure$ = Symbol("ForcePressGestureRecognizer.peakPressure");
  const interpolation$ = Symbol("ForcePressGestureRecognizer.interpolation");
  dart.setMethodSignature(src__gestures__force_press.ForcePressGestureRecognizer, () => ({
    __proto__: dart.getMethods(src__gestures__force_press.ForcePressGestureRecognizer.__proto__),
    addAllowedPointer: dart.fnType(dart.void, [src__gestures__events.PointerEvent]),
    handleEvent: dart.fnType(dart.void, [src__gestures__events.PointerEvent]),
    didStopTrackingLastPointer: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(src__gestures__force_press.ForcePressGestureRecognizer, () => ({
    __proto__: dart.getGetters(src__gestures__force_press.ForcePressGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(src__gestures__force_press.ForcePressGestureRecognizer, "package:flutter_web/src/gestures/force_press.dart");
  dart.setFieldSignature(src__gestures__force_press.ForcePressGestureRecognizer, () => ({
    __proto__: dart.getFields(src__gestures__force_press.ForcePressGestureRecognizer.__proto__),
    onStart: dart.fieldType(ForcePressDetailsTovoid()),
    onUpdate: dart.fieldType(ForcePressDetailsTovoid()),
    onPeak: dart.fieldType(ForcePressDetailsTovoid()),
    onEnd: dart.fieldType(ForcePressDetailsTovoid()),
    startPressure: dart.finalFieldType(core.double),
    peakPressure: dart.finalFieldType(core.double),
    interpolation: dart.finalFieldType(doubleAnddoubleAnddoubleTodouble()),
    [_lastPosition]: dart.fieldType(ui$.Offset),
    [_lastPressure]: dart.fieldType(core.double),
    [_state]: dart.fieldType(src__gestures__force_press._ForceState)
  }));
  src__gestures__long_press.LongPressStartDetails = class LongPressStartDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$3];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
  };
  (src__gestures__long_press.LongPressStartDetails.new = function(opts) {
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : ui$.Offset.zero;
    this[globalPosition$3] = globalPosition;
    if (!(globalPosition != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/long_press.dart", 59, 16, "globalPosition != null");
  }).prototype = src__gestures__long_press.LongPressStartDetails.prototype;
  dart.addTypeTests(src__gestures__long_press.LongPressStartDetails);
  const globalPosition$3 = Symbol("LongPressStartDetails.globalPosition");
  dart.setLibraryUri(src__gestures__long_press.LongPressStartDetails, "package:flutter_web/src/gestures/long_press.dart");
  dart.setFieldSignature(src__gestures__long_press.LongPressStartDetails, () => ({
    __proto__: dart.getFields(src__gestures__long_press.LongPressStartDetails.__proto__),
    globalPosition: dart.finalFieldType(ui$.Offset)
  }));
  src__gestures__long_press.LongPressMoveUpdateDetails = class LongPressMoveUpdateDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$4];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    get offsetFromOrigin() {
      return this[offsetFromOrigin$];
    }
    set offsetFromOrigin(value) {
      super.offsetFromOrigin = value;
    }
  };
  (src__gestures__long_press.LongPressMoveUpdateDetails.new = function(opts) {
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : ui$.Offset.zero;
    let offsetFromOrigin = opts && 'offsetFromOrigin' in opts ? opts.offsetFromOrigin : ui$.Offset.zero;
    this[globalPosition$4] = globalPosition;
    this[offsetFromOrigin$] = offsetFromOrigin;
    if (!(globalPosition != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/long_press.dart", 79, 16, "globalPosition != null");
    if (!(offsetFromOrigin != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/long_press.dart", 80, 16, "offsetFromOrigin != null");
  }).prototype = src__gestures__long_press.LongPressMoveUpdateDetails.prototype;
  dart.addTypeTests(src__gestures__long_press.LongPressMoveUpdateDetails);
  const globalPosition$4 = Symbol("LongPressMoveUpdateDetails.globalPosition");
  const offsetFromOrigin$ = Symbol("LongPressMoveUpdateDetails.offsetFromOrigin");
  dart.setLibraryUri(src__gestures__long_press.LongPressMoveUpdateDetails, "package:flutter_web/src/gestures/long_press.dart");
  dart.setFieldSignature(src__gestures__long_press.LongPressMoveUpdateDetails, () => ({
    __proto__: dart.getFields(src__gestures__long_press.LongPressMoveUpdateDetails.__proto__),
    globalPosition: dart.finalFieldType(ui$.Offset),
    offsetFromOrigin: dart.finalFieldType(ui$.Offset)
  }));
  src__gestures__long_press.LongPressEndDetails = class LongPressEndDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$5];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
  };
  (src__gestures__long_press.LongPressEndDetails.new = function(opts) {
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : ui$.Offset.zero;
    this[globalPosition$5] = globalPosition;
    if (!(globalPosition != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/long_press.dart", 103, 16, "globalPosition != null");
  }).prototype = src__gestures__long_press.LongPressEndDetails.prototype;
  dart.addTypeTests(src__gestures__long_press.LongPressEndDetails);
  const globalPosition$5 = Symbol("LongPressEndDetails.globalPosition");
  dart.setLibraryUri(src__gestures__long_press.LongPressEndDetails, "package:flutter_web/src/gestures/long_press.dart");
  dart.setFieldSignature(src__gestures__long_press.LongPressEndDetails, () => ({
    __proto__: dart.getFields(src__gestures__long_press.LongPressEndDetails.__proto__),
    globalPosition: dart.finalFieldType(ui$.Offset)
  }));
  const _longPressAccepted = dart.privateName(src__gestures__long_press, "_longPressAccepted");
  const _longPressOrigin = dart.privateName(src__gestures__long_press, "_longPressOrigin");
  const _initialButtons = dart.privateName(src__gestures__long_press, "_initialButtons");
  const _checkLongPressStart = dart.privateName(src__gestures__long_press, "_checkLongPressStart");
  const _checkLongPressEnd = dart.privateName(src__gestures__long_press, "_checkLongPressEnd");
  const _reset = dart.privateName(src__gestures__long_press, "_reset");
  const _checkLongPressMoveUpdate = dart.privateName(src__gestures__long_press, "_checkLongPressMoveUpdate");
  src__gestures__long_press.LongPressGestureRecognizer = class LongPressGestureRecognizer extends src__gestures__recognizer.PrimaryPointerGestureRecognizer {
    get onLongPress() {
      return this[onLongPress];
    }
    set onLongPress(value) {
      this[onLongPress] = value;
    }
    get onLongPressStart() {
      return this[onLongPressStart];
    }
    set onLongPressStart(value) {
      this[onLongPressStart] = value;
    }
    get onLongPressMoveUpdate() {
      return this[onLongPressMoveUpdate];
    }
    set onLongPressMoveUpdate(value) {
      this[onLongPressMoveUpdate] = value;
    }
    get onLongPressUp() {
      return this[onLongPressUp];
    }
    set onLongPressUp(value) {
      this[onLongPressUp] = value;
    }
    get onLongPressEnd() {
      return this[onLongPressEnd];
    }
    set onLongPressEnd(value) {
      this[onLongPressEnd] = value;
    }
    isPointerAllowed(event) {
      switch (event.buttons) {
        case 1:
        {
          if (this.onLongPressStart == null && this.onLongPress == null && this.onLongPressMoveUpdate == null && this.onLongPressEnd == null && this.onLongPressUp == null) return false;
          break;
        }
        default:
        {
          return false;
        }
      }
      return super.isPointerAllowed(event);
    }
    didExceedDeadline() {
      this.resolve(src__gestures__arena.GestureDisposition.accepted);
      this[_longPressAccepted] = true;
      super.acceptGesture(this.primaryPointer);
      this[_checkLongPressStart]();
    }
    handlePrimaryPointer(event) {
      if (src__gestures__events.PointerUpEvent.is(event)) {
        if (this[_longPressAccepted] === true) {
          this[_checkLongPressEnd](event);
        } else {
          this.resolve(src__gestures__arena.GestureDisposition.rejected);
        }
        this[_reset]();
      } else if (src__gestures__events.PointerCancelEvent.is(event)) {
        this[_reset]();
      } else if (src__gestures__events.PointerDownEvent.is(event)) {
        this[_longPressOrigin] = event.position;
        this[_initialButtons] = event.buttons;
      } else if (src__gestures__events.PointerMoveEvent.is(event)) {
        if (event.buttons != this[_initialButtons]) {
          this.resolve(src__gestures__arena.GestureDisposition.rejected);
          this.stopTrackingPointer(this.primaryPointer);
        } else if (dart.test(this[_longPressAccepted])) {
          this[_checkLongPressMoveUpdate](event);
        }
      }
    }
    [_checkLongPressStart]() {
      if (!(this[_initialButtons] === 1)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/long_press.dart", 249, 12, "_initialButtons == kPrimaryButton");
      let details = new src__gestures__long_press.LongPressStartDetails.new({globalPosition: this[_longPressOrigin]});
      if (this.onLongPressStart != null) this.invokeCallback(dart.void, "onLongPressStart", dart.fn(() => this.onLongPressStart(details), VoidTovoid()));
      if (this.onLongPress != null) this.invokeCallback(dart.void, "onLongPress", this.onLongPress);
    }
    [_checkLongPressMoveUpdate](event) {
      if (!(this[_initialButtons] === 1)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/long_press.dart", 259, 12, "_initialButtons == kPrimaryButton");
      let details = new src__gestures__long_press.LongPressMoveUpdateDetails.new({globalPosition: event.position, offsetFromOrigin: event.position['-'](this[_longPressOrigin])});
      if (this.onLongPressMoveUpdate != null) this.invokeCallback(dart.void, "onLongPressMoveUpdate", dart.fn(() => this.onLongPressMoveUpdate(details), VoidTovoid()));
    }
    [_checkLongPressEnd](event) {
      if (!(this[_initialButtons] === 1)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/long_press.dart", 270, 12, "_initialButtons == kPrimaryButton");
      let details = new src__gestures__long_press.LongPressEndDetails.new({globalPosition: event.position});
      if (this.onLongPressEnd != null) this.invokeCallback(dart.void, "onLongPressEnd", dart.fn(() => this.onLongPressEnd(details), VoidTovoid()));
      if (this.onLongPressUp != null) this.invokeCallback(dart.void, "onLongPressUp", this.onLongPressUp);
    }
    [_reset]() {
      this[_longPressAccepted] = false;
      this[_longPressOrigin] = null;
      this[_initialButtons] = null;
    }
    resolve(disposition) {
      if (dart.test(this[_longPressAccepted]) && disposition === src__gestures__arena.GestureDisposition.rejected) {
        this[_reset]();
      }
      super.resolve(disposition);
    }
    acceptGesture(pointer) {}
    get debugDescription() {
      return "long press";
    }
  };
  (src__gestures__long_press.LongPressGestureRecognizer.new = function(opts) {
    let postAcceptSlopTolerance = opts && 'postAcceptSlopTolerance' in opts ? opts.postAcceptSlopTolerance : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    this[_longPressAccepted] = false;
    this[_longPressOrigin] = null;
    this[_initialButtons] = null;
    this[onLongPress] = null;
    this[onLongPressStart] = null;
    this[onLongPressMoveUpdate] = null;
    this[onLongPressUp] = null;
    this[onLongPressEnd] = null;
    src__gestures__long_press.LongPressGestureRecognizer.__proto__.new.call(this, {deadline: src__gestures__constants.kLongPressTimeout, postAcceptSlopTolerance: postAcceptSlopTolerance, kind: kind, debugOwner: debugOwner});
  }).prototype = src__gestures__long_press.LongPressGestureRecognizer.prototype;
  dart.addTypeTests(src__gestures__long_press.LongPressGestureRecognizer);
  const onLongPress = Symbol("LongPressGestureRecognizer.onLongPress");
  const onLongPressStart = Symbol("LongPressGestureRecognizer.onLongPressStart");
  const onLongPressMoveUpdate = Symbol("LongPressGestureRecognizer.onLongPressMoveUpdate");
  const onLongPressUp = Symbol("LongPressGestureRecognizer.onLongPressUp");
  const onLongPressEnd = Symbol("LongPressGestureRecognizer.onLongPressEnd");
  dart.setMethodSignature(src__gestures__long_press.LongPressGestureRecognizer, () => ({
    __proto__: dart.getMethods(src__gestures__long_press.LongPressGestureRecognizer.__proto__),
    handlePrimaryPointer: dart.fnType(dart.void, [src__gestures__events.PointerEvent]),
    [_checkLongPressStart]: dart.fnType(dart.void, []),
    [_checkLongPressMoveUpdate]: dart.fnType(dart.void, [src__gestures__events.PointerEvent]),
    [_checkLongPressEnd]: dart.fnType(dart.void, [src__gestures__events.PointerEvent]),
    [_reset]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__gestures__long_press.LongPressGestureRecognizer, () => ({
    __proto__: dart.getGetters(src__gestures__long_press.LongPressGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(src__gestures__long_press.LongPressGestureRecognizer, "package:flutter_web/src/gestures/long_press.dart");
  dart.setFieldSignature(src__gestures__long_press.LongPressGestureRecognizer, () => ({
    __proto__: dart.getFields(src__gestures__long_press.LongPressGestureRecognizer.__proto__),
    [_longPressAccepted]: dart.fieldType(core.bool),
    [_longPressOrigin]: dart.fieldType(ui$.Offset),
    [_initialButtons]: dart.fieldType(core.int),
    onLongPress: dart.fieldType(VoidTovoid()),
    onLongPressStart: dart.fieldType(LongPressStartDetailsTovoid()),
    onLongPressMoveUpdate: dart.fieldType(LongPressMoveUpdateDetailsTovoid()),
    onLongPressUp: dart.fieldType(VoidTovoid()),
    onLongPressEnd: dart.fieldType(LongPressEndDetailsTovoid())
  }));
  src__gestures__monodrag._DragState = class _DragState extends core.Object {
    toString() {
      return {
        0: "_DragState.ready",
        1: "_DragState.possible",
        2: "_DragState.accepted"
      }[this.index];
    }
  };
  (src__gestures__monodrag._DragState.new = function(x) {
    this.index = x;
  }).prototype = src__gestures__monodrag._DragState.prototype;
  dart.addTypeTests(src__gestures__monodrag._DragState);
  dart.setLibraryUri(src__gestures__monodrag._DragState, "package:flutter_web/src/gestures/monodrag.dart");
  dart.setFieldSignature(src__gestures__monodrag._DragState, () => ({
    __proto__: dart.getFields(src__gestures__monodrag._DragState.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__gestures__monodrag._DragState, ['toString']);
  src__gestures__monodrag._DragState.ready = dart.const(new src__gestures__monodrag._DragState.new(0));
  src__gestures__monodrag._DragState.possible = dart.const(new src__gestures__monodrag._DragState.new(1));
  src__gestures__monodrag._DragState.accepted = dart.const(new src__gestures__monodrag._DragState.new(2));
  src__gestures__monodrag._DragState.values = dart.constList([src__gestures__monodrag._DragState.ready, src__gestures__monodrag._DragState.possible, src__gestures__monodrag._DragState.accepted], src__gestures__monodrag._DragState);
  const _state$ = dart.privateName(src__gestures__monodrag, "_state");
  const _initialPosition = dart.privateName(src__gestures__monodrag, "_initialPosition");
  const _pendingDragOffset = dart.privateName(src__gestures__monodrag, "_pendingDragOffset");
  const _lastPendingEventTimestamp = dart.privateName(src__gestures__monodrag, "_lastPendingEventTimestamp");
  const _initialButtons$ = dart.privateName(src__gestures__monodrag, "_initialButtons");
  const _velocityTrackers = dart.privateName(src__gestures__monodrag, "_velocityTrackers");
  const _checkDown = dart.privateName(src__gestures__monodrag, "_checkDown");
  const _getDeltaForDetails = dart.privateName(src__gestures__monodrag, "_getDeltaForDetails");
  const _getPrimaryValueFromOffset = dart.privateName(src__gestures__monodrag, "_getPrimaryValueFromOffset");
  const _checkUpdate = dart.privateName(src__gestures__monodrag, "_checkUpdate");
  const _hasSufficientPendingDragDeltaToAccept = dart.privateName(src__gestures__monodrag, "_hasSufficientPendingDragDeltaToAccept");
  const _checkStart = dart.privateName(src__gestures__monodrag, "_checkStart");
  const _checkCancel = dart.privateName(src__gestures__monodrag, "_checkCancel");
  const _checkEnd = dart.privateName(src__gestures__monodrag, "_checkEnd");
  const _isFlingGesture = dart.privateName(src__gestures__monodrag, "_isFlingGesture");
  src__gestures__monodrag.DragGestureRecognizer = class DragGestureRecognizer extends src__gestures__recognizer.OneSequenceGestureRecognizer {
    get dragStartBehavior() {
      return this[dragStartBehavior$];
    }
    set dragStartBehavior(value) {
      this[dragStartBehavior$] = value;
    }
    get onDown() {
      return this[onDown];
    }
    set onDown(value) {
      this[onDown] = value;
    }
    get onStart() {
      return this[onStart$];
    }
    set onStart(value) {
      this[onStart$] = value;
    }
    get onUpdate() {
      return this[onUpdate$];
    }
    set onUpdate(value) {
      this[onUpdate$] = value;
    }
    get onEnd() {
      return this[onEnd$];
    }
    set onEnd(value) {
      this[onEnd$] = value;
    }
    get onCancel() {
      return this[onCancel];
    }
    set onCancel(value) {
      this[onCancel] = value;
    }
    get minFlingDistance() {
      return this[minFlingDistance];
    }
    set minFlingDistance(value) {
      this[minFlingDistance] = value;
    }
    get minFlingVelocity() {
      return this[minFlingVelocity];
    }
    set minFlingVelocity(value) {
      this[minFlingVelocity] = value;
    }
    get maxFlingVelocity() {
      return this[maxFlingVelocity];
    }
    set maxFlingVelocity(value) {
      this[maxFlingVelocity] = value;
    }
    isPointerAllowed(event) {
      if (this[_initialButtons$] == null) {
        switch (event.buttons) {
          case 1:
          {
            if (this.onDown == null && this.onStart == null && this.onUpdate == null && this.onEnd == null && this.onCancel == null) return false;
            break;
          }
          default:
          {
            return false;
          }
        }
      } else {
        if (event.buttons != this[_initialButtons$]) {
          return false;
        }
      }
      return super.isPointerAllowed(src__gestures__events.PointerDownEvent._check(event));
    }
    addAllowedPointer(event) {
      this.startTrackingPointer(event.pointer);
      this[_velocityTrackers][$_set](event.pointer, new src__gestures__velocity_tracker.VelocityTracker.new());
      if (this[_state$] === src__gestures__monodrag._DragState.ready) {
        this[_state$] = src__gestures__monodrag._DragState.possible;
        this[_initialPosition] = event.position;
        this[_initialButtons$] = event.buttons;
        this[_pendingDragOffset] = ui$.Offset.zero;
        this[_lastPendingEventTimestamp] = event.timeStamp;
        this[_checkDown]();
      } else if (this[_state$] === src__gestures__monodrag._DragState.accepted) {
        this.resolve(src__gestures__arena.GestureDisposition.accepted);
      }
    }
    handleEvent(event) {
      if (!(this[_state$] !== src__gestures__monodrag._DragState.ready)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/monodrag.dart", 228, 12, "_state != _DragState.ready");
      if (!dart.test(event.synthesized) && (src__gestures__events.PointerDownEvent.is(event) || src__gestures__events.PointerMoveEvent.is(event))) {
        let tracker = this[_velocityTrackers][$_get](event.pointer);
        if (!(tracker != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/monodrag.dart", 232, 14, "tracker != null");
        tracker.addPosition(event.timeStamp, event.position);
      }
      if (src__gestures__events.PointerMoveEvent.is(event)) {
        if (event.buttons != this[_initialButtons$]) {
          this.resolve(src__gestures__arena.GestureDisposition.rejected);
          this.stopTrackingPointer(event.pointer);
          return;
        }
        let delta = event.delta;
        if (this[_state$] === src__gestures__monodrag._DragState.accepted) {
          this[_checkUpdate]({sourceTimeStamp: event.timeStamp, delta: this[_getDeltaForDetails](delta), primaryDelta: this[_getPrimaryValueFromOffset](delta), globalPosition: event.position});
        } else {
          this[_pendingDragOffset] = this[_pendingDragOffset]['+'](delta);
          this[_lastPendingEventTimestamp] = event.timeStamp;
          if (dart.test(this[_hasSufficientPendingDragDeltaToAccept])) this.resolve(src__gestures__arena.GestureDisposition.accepted);
        }
      }
      this.stopTrackingIfPointerNoLongerDown(event);
    }
    acceptGesture(pointer) {
      if (this[_state$] !== src__gestures__monodrag._DragState.accepted) {
        this[_state$] = src__gestures__monodrag._DragState.accepted;
        let delta = this[_pendingDragOffset];
        let timestamp = this[_lastPendingEventTimestamp];
        let updateDelta = null;
        switch (this.dragStartBehavior) {
          case src__gestures__recognizer.DragStartBehavior.start:
          {
            this[_initialPosition] = this[_initialPosition]['+'](delta);
            updateDelta = ui$.Offset.zero;
            break;
          }
          case src__gestures__recognizer.DragStartBehavior.down:
          {
            updateDelta = this[_getDeltaForDetails](delta);
            break;
          }
        }
        this[_pendingDragOffset] = ui$.Offset.zero;
        this[_lastPendingEventTimestamp] = null;
        this[_checkStart](timestamp);
        if (!dart.equals(updateDelta, ui$.Offset.zero)) {
          this[_checkUpdate]({sourceTimeStamp: timestamp, delta: updateDelta, primaryDelta: this[_getPrimaryValueFromOffset](updateDelta), globalPosition: this[_initialPosition]['+'](updateDelta)});
        }
      }
    }
    rejectGesture(pointer) {
      this.stopTrackingPointer(pointer);
    }
    didStopTrackingLastPointer(pointer) {
      if (!(this[_state$] !== src__gestures__monodrag._DragState.ready)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/monodrag.dart", 298, 12, "_state != _DragState.ready");
      switch (this[_state$]) {
        case src__gestures__monodrag._DragState.ready:
        {
          break;
        }
        case src__gestures__monodrag._DragState.possible:
        {
          this.resolve(src__gestures__arena.GestureDisposition.rejected);
          this[_checkCancel]();
          break;
        }
        case src__gestures__monodrag._DragState.accepted:
        {
          this[_checkEnd](pointer);
          break;
        }
      }
      this[_velocityTrackers][$clear]();
      this[_initialButtons$] = null;
      this[_state$] = src__gestures__monodrag._DragState.ready;
    }
    [_checkDown]() {
      if (!(this[_initialButtons$] === 1)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/monodrag.dart", 318, 12, "_initialButtons == kPrimaryButton");
      let details = new src__gestures__drag_details.DragDownDetails.new({globalPosition: this[_initialPosition]});
      if (this.onDown != null) this.invokeCallback(dart.void, "onDown", dart.fn(() => this.onDown(details), VoidTovoid()));
    }
    [_checkStart](timestamp) {
      if (!(this[_initialButtons$] === 1)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/monodrag.dart", 326, 12, "_initialButtons == kPrimaryButton");
      let details = new src__gestures__drag_details.DragStartDetails.new({sourceTimeStamp: timestamp, globalPosition: this[_initialPosition]});
      if (this.onStart != null) this.invokeCallback(dart.void, "onStart", dart.fn(() => this.onStart(details), VoidTovoid()));
    }
    [_checkUpdate](opts) {
      let sourceTimeStamp = opts && 'sourceTimeStamp' in opts ? opts.sourceTimeStamp : null;
      let delta = opts && 'delta' in opts ? opts.delta : null;
      let primaryDelta = opts && 'primaryDelta' in opts ? opts.primaryDelta : null;
      let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : null;
      if (!(this[_initialButtons$] === 1)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/monodrag.dart", 341, 12, "_initialButtons == kPrimaryButton");
      let details = new src__gestures__drag_details.DragUpdateDetails.new({sourceTimeStamp: sourceTimeStamp, delta: delta, primaryDelta: primaryDelta, globalPosition: globalPosition});
      if (this.onUpdate != null) this.invokeCallback(dart.void, "onUpdate", dart.fn(() => this.onUpdate(details), VoidTovoid()));
    }
    [_checkEnd](pointer) {
      if (!(this[_initialButtons$] === 1)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/monodrag.dart", 353, 12, "_initialButtons == kPrimaryButton");
      if (this.onEnd == null) return;
      let tracker = this[_velocityTrackers][$_get](pointer);
      if (!(tracker != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/monodrag.dart", 357, 12, "tracker != null");
      let details = null;
      let debugReport = null;
      let estimate = tracker.getVelocityEstimate();
      if (estimate != null && dart.test(this[_isFlingGesture](estimate))) {
        let velocity = new src__gestures__velocity_tracker.Velocity.new({pixelsPerSecond: estimate.pixelsPerSecond}).clampMagnitude((() => {
          let l = this.minFlingVelocity;
          return l != null ? l : 50.0;
        })(), (() => {
          let l = this.maxFlingVelocity;
          return l != null ? l : 8000.0;
        })());
        details = new src__gestures__drag_details.DragEndDetails.new({velocity: velocity, primaryVelocity: this[_getPrimaryValueFromOffset](velocity.pixelsPerSecond)});
        debugReport = dart.fn(() => dart.str(estimate) + "; fling at " + dart.str(velocity) + ".", VoidToString());
      } else {
        details = new src__gestures__drag_details.DragEndDetails.new({velocity: src__gestures__velocity_tracker.Velocity.zero, primaryVelocity: 0.0});
        debugReport = dart.fn(() => {
          if (estimate == null) return "Could not estimate velocity.";
          return dart.str(estimate) + "; judged to not be a fling.";
        }, VoidToString());
      }
      this.invokeCallback(dart.void, "onEnd", dart.fn(() => this.onEnd(details), VoidTovoid()), {debugReport: VoidToString()._check(debugReport)});
    }
    [_checkCancel]() {
      if (!(this[_initialButtons$] === 1)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/monodrag.dart", 390, 12, "_initialButtons == kPrimaryButton");
      if (this.onCancel != null) this.invokeCallback(dart.void, "onCancel", this.onCancel);
    }
    dispose() {
      this[_velocityTrackers][$clear]();
      super.dispose();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (EnumPropertyOfDragStartBehavior()).new("start behavior", this.dragStartBehavior));
    }
  };
  (src__gestures__monodrag.DragGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : src__gestures__recognizer.DragStartBehavior.start;
    this[onDown] = null;
    this[onStart$] = null;
    this[onUpdate$] = null;
    this[onEnd$] = null;
    this[onCancel] = null;
    this[minFlingDistance] = null;
    this[minFlingVelocity] = null;
    this[maxFlingVelocity] = null;
    this[_state$] = src__gestures__monodrag._DragState.ready;
    this[_initialPosition] = null;
    this[_pendingDragOffset] = null;
    this[_lastPendingEventTimestamp] = null;
    this[_initialButtons$] = null;
    this[_velocityTrackers] = new (IdentityMapOfint$VelocityTracker()).new();
    this[dragStartBehavior$] = dragStartBehavior;
    if (!(dragStartBehavior != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/monodrag.dart", 66, 16, "dragStartBehavior != null");
    src__gestures__monodrag.DragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
  }).prototype = src__gestures__monodrag.DragGestureRecognizer.prototype;
  dart.addTypeTests(src__gestures__monodrag.DragGestureRecognizer);
  const dragStartBehavior$ = Symbol("DragGestureRecognizer.dragStartBehavior");
  const onDown = Symbol("DragGestureRecognizer.onDown");
  const onStart$ = Symbol("DragGestureRecognizer.onStart");
  const onUpdate$ = Symbol("DragGestureRecognizer.onUpdate");
  const onEnd$ = Symbol("DragGestureRecognizer.onEnd");
  const onCancel = Symbol("DragGestureRecognizer.onCancel");
  const minFlingDistance = Symbol("DragGestureRecognizer.minFlingDistance");
  const minFlingVelocity = Symbol("DragGestureRecognizer.minFlingVelocity");
  const maxFlingVelocity = Symbol("DragGestureRecognizer.maxFlingVelocity");
  dart.setMethodSignature(src__gestures__monodrag.DragGestureRecognizer, () => ({
    __proto__: dart.getMethods(src__gestures__monodrag.DragGestureRecognizer.__proto__),
    isPointerAllowed: dart.fnType(core.bool, [src__gestures__events.PointerEvent]),
    addAllowedPointer: dart.fnType(dart.void, [src__gestures__events.PointerEvent]),
    handleEvent: dart.fnType(dart.void, [src__gestures__events.PointerEvent]),
    didStopTrackingLastPointer: dart.fnType(dart.void, [core.int]),
    [_checkDown]: dart.fnType(dart.void, []),
    [_checkStart]: dart.fnType(dart.void, [core.Duration]),
    [_checkUpdate]: dart.fnType(dart.void, [], {sourceTimeStamp: core.Duration, delta: ui$.Offset, primaryDelta: core.double, globalPosition: ui$.Offset}),
    [_checkEnd]: dart.fnType(dart.void, [core.int]),
    [_checkCancel]: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(src__gestures__monodrag.DragGestureRecognizer, "package:flutter_web/src/gestures/monodrag.dart");
  dart.setFieldSignature(src__gestures__monodrag.DragGestureRecognizer, () => ({
    __proto__: dart.getFields(src__gestures__monodrag.DragGestureRecognizer.__proto__),
    dragStartBehavior: dart.fieldType(src__gestures__recognizer.DragStartBehavior),
    onDown: dart.fieldType(DragDownDetailsTovoid()),
    onStart: dart.fieldType(DragStartDetailsTovoid()),
    onUpdate: dart.fieldType(DragUpdateDetailsTovoid()),
    onEnd: dart.fieldType(DragEndDetailsTovoid()),
    onCancel: dart.fieldType(VoidTovoid()),
    minFlingDistance: dart.fieldType(core.double),
    minFlingVelocity: dart.fieldType(core.double),
    maxFlingVelocity: dart.fieldType(core.double),
    [_state$]: dart.fieldType(src__gestures__monodrag._DragState),
    [_initialPosition]: dart.fieldType(ui$.Offset),
    [_pendingDragOffset]: dart.fieldType(ui$.Offset),
    [_lastPendingEventTimestamp]: dart.fieldType(core.Duration),
    [_initialButtons$]: dart.fieldType(core.int),
    [_velocityTrackers]: dart.finalFieldType(MapOfint$VelocityTracker())
  }));
  src__gestures__monodrag.VerticalDragGestureRecognizer = class VerticalDragGestureRecognizer extends src__gestures__monodrag.DragGestureRecognizer {
    [_isFlingGesture](estimate) {
      let l = this.minFlingVelocity;
      let minVelocity = l != null ? l : 50.0;
      let l$ = this.minFlingDistance;
      let minDistance = l$ != null ? l$ : 18.0;
      return estimate.pixelsPerSecond.dy[$abs]() > minVelocity && estimate.offset.dy[$abs]() > minDistance;
    }
    get [_hasSufficientPendingDragDeltaToAccept]() {
      return this[_pendingDragOffset].dy[$abs]() > 18.0;
    }
    [_getDeltaForDetails](delta) {
      return new ui$.Offset.new(0.0, delta.dy);
    }
    [_getPrimaryValueFromOffset](value) {
      return value.dy;
    }
    get debugDescription() {
      return "vertical drag";
    }
  };
  (src__gestures__monodrag.VerticalDragGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    src__gestures__monodrag.VerticalDragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
  }).prototype = src__gestures__monodrag.VerticalDragGestureRecognizer.prototype;
  dart.addTypeTests(src__gestures__monodrag.VerticalDragGestureRecognizer);
  dart.setMethodSignature(src__gestures__monodrag.VerticalDragGestureRecognizer, () => ({
    __proto__: dart.getMethods(src__gestures__monodrag.VerticalDragGestureRecognizer.__proto__),
    [_isFlingGesture]: dart.fnType(core.bool, [src__gestures__velocity_tracker.VelocityEstimate]),
    [_getDeltaForDetails]: dart.fnType(ui$.Offset, [ui$.Offset]),
    [_getPrimaryValueFromOffset]: dart.fnType(core.double, [ui$.Offset])
  }));
  dart.setGetterSignature(src__gestures__monodrag.VerticalDragGestureRecognizer, () => ({
    __proto__: dart.getGetters(src__gestures__monodrag.VerticalDragGestureRecognizer.__proto__),
    [_hasSufficientPendingDragDeltaToAccept]: core.bool,
    debugDescription: core.String
  }));
  dart.setLibraryUri(src__gestures__monodrag.VerticalDragGestureRecognizer, "package:flutter_web/src/gestures/monodrag.dart");
  src__gestures__monodrag.HorizontalDragGestureRecognizer = class HorizontalDragGestureRecognizer extends src__gestures__monodrag.DragGestureRecognizer {
    [_isFlingGesture](estimate) {
      let l = this.minFlingVelocity;
      let minVelocity = l != null ? l : 50.0;
      let l$ = this.minFlingDistance;
      let minDistance = l$ != null ? l$ : 18.0;
      return estimate.pixelsPerSecond.dx[$abs]() > minVelocity && estimate.offset.dx[$abs]() > minDistance;
    }
    get [_hasSufficientPendingDragDeltaToAccept]() {
      return this[_pendingDragOffset].dx[$abs]() > 18.0;
    }
    [_getDeltaForDetails](delta) {
      return new ui$.Offset.new(delta.dx, 0.0);
    }
    [_getPrimaryValueFromOffset](value) {
      return value.dx;
    }
    get debugDescription() {
      return "horizontal drag";
    }
  };
  (src__gestures__monodrag.HorizontalDragGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    src__gestures__monodrag.HorizontalDragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
  }).prototype = src__gestures__monodrag.HorizontalDragGestureRecognizer.prototype;
  dart.addTypeTests(src__gestures__monodrag.HorizontalDragGestureRecognizer);
  dart.setMethodSignature(src__gestures__monodrag.HorizontalDragGestureRecognizer, () => ({
    __proto__: dart.getMethods(src__gestures__monodrag.HorizontalDragGestureRecognizer.__proto__),
    [_isFlingGesture]: dart.fnType(core.bool, [src__gestures__velocity_tracker.VelocityEstimate]),
    [_getDeltaForDetails]: dart.fnType(ui$.Offset, [ui$.Offset]),
    [_getPrimaryValueFromOffset]: dart.fnType(core.double, [ui$.Offset])
  }));
  dart.setGetterSignature(src__gestures__monodrag.HorizontalDragGestureRecognizer, () => ({
    __proto__: dart.getGetters(src__gestures__monodrag.HorizontalDragGestureRecognizer.__proto__),
    [_hasSufficientPendingDragDeltaToAccept]: core.bool,
    debugDescription: core.String
  }));
  dart.setLibraryUri(src__gestures__monodrag.HorizontalDragGestureRecognizer, "package:flutter_web/src/gestures/monodrag.dart");
  src__gestures__monodrag.PanGestureRecognizer = class PanGestureRecognizer extends src__gestures__monodrag.DragGestureRecognizer {
    [_isFlingGesture](estimate) {
      let l = this.minFlingVelocity;
      let minVelocity = l != null ? l : 50.0;
      let l$ = this.minFlingDistance;
      let minDistance = l$ != null ? l$ : 18.0;
      return dart.notNull(estimate.pixelsPerSecond.distanceSquared) > minVelocity * minVelocity && dart.notNull(estimate.offset.distanceSquared) > minDistance * minDistance;
    }
    get [_hasSufficientPendingDragDeltaToAccept]() {
      return dart.notNull(this[_pendingDragOffset].distance) > 36.0;
    }
    [_getDeltaForDetails](delta) {
      return delta;
    }
    [_getPrimaryValueFromOffset](value) {
      return null;
    }
    get debugDescription() {
      return "pan";
    }
  };
  (src__gestures__monodrag.PanGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    src__gestures__monodrag.PanGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner});
  }).prototype = src__gestures__monodrag.PanGestureRecognizer.prototype;
  dart.addTypeTests(src__gestures__monodrag.PanGestureRecognizer);
  dart.setMethodSignature(src__gestures__monodrag.PanGestureRecognizer, () => ({
    __proto__: dart.getMethods(src__gestures__monodrag.PanGestureRecognizer.__proto__),
    [_isFlingGesture]: dart.fnType(core.bool, [src__gestures__velocity_tracker.VelocityEstimate]),
    [_getDeltaForDetails]: dart.fnType(ui$.Offset, [ui$.Offset]),
    [_getPrimaryValueFromOffset]: dart.fnType(core.double, [ui$.Offset])
  }));
  dart.setGetterSignature(src__gestures__monodrag.PanGestureRecognizer, () => ({
    __proto__: dart.getGetters(src__gestures__monodrag.PanGestureRecognizer.__proto__),
    [_hasSufficientPendingDragDeltaToAccept]: core.bool,
    debugDescription: core.String
  }));
  dart.setLibraryUri(src__gestures__monodrag.PanGestureRecognizer, "package:flutter_web/src/gestures/monodrag.dart");
  src__gestures__mouse_tracking.MouseTrackerAnnotation = class MouseTrackerAnnotation extends core.Object {
    get onEnter() {
      return this[onEnter$];
    }
    set onEnter(value) {
      super.onEnter = value;
    }
    get onHover() {
      return this[onHover$];
    }
    set onHover(value) {
      super.onHover = value;
    }
    get onExit() {
      return this[onExit$];
    }
    set onExit(value) {
      super.onExit = value;
    }
    toString() {
      let none = this.onEnter == null && this.onExit == null && this.onHover == null ? " <none>" : "";
      return "[" + dart.str(this[$runtimeType]) + this[$hashCode][$toRadixString](16) + none + (this.onEnter == null ? "" : " onEnter") + (this.onHover == null ? "" : " onHover") + ((this.onExit == null ? "" : " onExit") + "]");
    }
  };
  (src__gestures__mouse_tracking.MouseTrackerAnnotation.new = function(opts) {
    let onEnter = opts && 'onEnter' in opts ? opts.onEnter : null;
    let onHover = opts && 'onHover' in opts ? opts.onHover : null;
    let onExit = opts && 'onExit' in opts ? opts.onExit : null;
    this[onEnter$] = onEnter;
    this[onHover$] = onHover;
    this[onExit$] = onExit;
  }).prototype = src__gestures__mouse_tracking.MouseTrackerAnnotation.prototype;
  dart.addTypeTests(src__gestures__mouse_tracking.MouseTrackerAnnotation);
  const onEnter$ = Symbol("MouseTrackerAnnotation.onEnter");
  const onHover$ = Symbol("MouseTrackerAnnotation.onHover");
  const onExit$ = Symbol("MouseTrackerAnnotation.onExit");
  dart.setLibraryUri(src__gestures__mouse_tracking.MouseTrackerAnnotation, "package:flutter_web/src/gestures/mouse_tracking.dart");
  dart.setFieldSignature(src__gestures__mouse_tracking.MouseTrackerAnnotation, () => ({
    __proto__: dart.getFields(src__gestures__mouse_tracking.MouseTrackerAnnotation.__proto__),
    onEnter: dart.finalFieldType(PointerEnterEventTovoid()),
    onHover: dart.finalFieldType(PointerHoverEventTovoid()),
    onExit: dart.finalFieldType(PointerExitEventTovoid())
  }));
  dart.defineExtensionMethods(src__gestures__mouse_tracking.MouseTrackerAnnotation, ['toString']);
  src__gestures__mouse_tracking._TrackedAnnotation = class _TrackedAnnotation extends core.Object {};
  (src__gestures__mouse_tracking._TrackedAnnotation.new = function(annotation) {
    this.activeDevices = SetOfint().new();
    this.annotation = annotation;
  }).prototype = src__gestures__mouse_tracking._TrackedAnnotation.prototype;
  dart.addTypeTests(src__gestures__mouse_tracking._TrackedAnnotation);
  dart.setLibraryUri(src__gestures__mouse_tracking._TrackedAnnotation, "package:flutter_web/src/gestures/mouse_tracking.dart");
  dart.setFieldSignature(src__gestures__mouse_tracking._TrackedAnnotation, () => ({
    __proto__: dart.getFields(src__gestures__mouse_tracking._TrackedAnnotation.__proto__),
    annotation: dart.finalFieldType(src__gestures__mouse_tracking.MouseTrackerAnnotation),
    activeDevices: dart.fieldType(SetOfint())
  }));
  const _trackedAnnotations = dart.privateName(src__gestures__mouse_tracking, "_trackedAnnotations");
  const _postFrameCheckScheduled = dart.privateName(src__gestures__mouse_tracking, "_postFrameCheckScheduled");
  const _lastMouseEvent = dart.privateName(src__gestures__mouse_tracking, "_lastMouseEvent");
  const _handleEvent = dart.privateName(src__gestures__mouse_tracking, "_handleEvent");
  const _scheduleMousePositionCheck = dart.privateName(src__gestures__mouse_tracking, "_scheduleMousePositionCheck");
  const _findAnnotation = dart.privateName(src__gestures__mouse_tracking, "_findAnnotation");
  const _addMouseEvent = dart.privateName(src__gestures__mouse_tracking, "_addMouseEvent");
  const _removeMouseEvent = dart.privateName(src__gestures__mouse_tracking, "_removeMouseEvent");
  src__gestures__mouse_tracking.MouseTracker = class MouseTracker extends src__foundation__change_notifier.ChangeNotifier {
    get annotationFinder() {
      return this[annotationFinder$];
    }
    set annotationFinder(value) {
      super.annotationFinder = value;
    }
    attachAnnotation(annotation) {
      this[_trackedAnnotations][$_set](annotation, new src__gestures__mouse_tracking._TrackedAnnotation.new(annotation));
      this[_scheduleMousePositionCheck]();
    }
    detachAnnotation(annotation) {
      let trackedAnnotation = this[_findAnnotation](annotation);
      for (let deviceId of trackedAnnotation.activeDevices) {
        if (annotation.onExit != null) {
          annotation.onExit(new src__gestures__events.PointerExitEvent.fromMouseEvent(this[_lastMouseEvent][$_get](deviceId)));
        }
      }
      this[_trackedAnnotations][$remove](annotation);
    }
    [_scheduleMousePositionCheck]() {
      if (dart.test(this[_trackedAnnotations][$isNotEmpty]) && !dart.test(this[_postFrameCheckScheduled])) {
        this[_postFrameCheckScheduled] = true;
        src__scheduler__binding.SchedulerBinding.instance.addPostFrameCallback(dart.fn(_ => {
          this[_postFrameCheckScheduled] = false;
          this.collectMousePositions();
        }, DurationToNull()));
        src__scheduler__binding.SchedulerBinding.instance.scheduleFrame();
      }
    }
    [_handleEvent](event) {
      if (event.kind !== ui$.PointerDeviceKind.mouse) {
        return;
      }
      let deviceId = event.device;
      if (src__gestures__events.PointerAddedEvent.is(event)) {
        this[_addMouseEvent](deviceId, event);
        return;
      }
      if (src__gestures__events.PointerRemovedEvent.is(event)) {
        this[_removeMouseEvent](deviceId);
        this[_scheduleMousePositionCheck]();
      } else {
        if (src__gestures__events.PointerMoveEvent.is(event) || src__gestures__events.PointerHoverEvent.is(event) || src__gestures__events.PointerDownEvent.is(event)) {
          if (!dart.test(this[_lastMouseEvent][$containsKey](deviceId)) || !dart.equals(this[_lastMouseEvent][$_get](deviceId).position, event.position)) {
            this[_scheduleMousePositionCheck]();
          }
          this[_addMouseEvent](deviceId, event);
        }
      }
    }
    [_findAnnotation](annotation) {
      let trackedAnnotation = this[_trackedAnnotations][$_get](annotation);
      if (!(trackedAnnotation != null)) dart.assertFailed("Unable to find annotation " + dart.str(annotation) + " in tracked annotations. " + "Check that attachAnnotation has been called for all annotated layers.", "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/mouse_tracking.dart", 189, 9, "trackedAnnotation != null");
      return trackedAnnotation;
    }
    isAnnotationAttached(annotation) {
      return this[_trackedAnnotations][$containsKey](annotation);
    }
    collectMousePositions() {
      const exitAnnotation = (trackedAnnotation, deviceId) => {
        if ((trackedAnnotation.annotation == null ? null : trackedAnnotation.annotation.onExit) != null && dart.test(trackedAnnotation.activeDevices.contains(deviceId))) {
          trackedAnnotation.annotation.onExit(new src__gestures__events.PointerExitEvent.fromMouseEvent(this[_lastMouseEvent][$_get](deviceId)));
          trackedAnnotation.activeDevices.remove(deviceId);
        }
      };
      dart.fn(exitAnnotation, _TrackedAnnotationAndintTovoid());
      function exitAllDevices(trackedAnnotation) {
        if (dart.test(trackedAnnotation.activeDevices.isNotEmpty)) {
          let deviceIds = trackedAnnotation.activeDevices.toSet();
          for (let deviceId of deviceIds) {
            exitAnnotation(trackedAnnotation, deviceId);
          }
        }
      }
      dart.fn(exitAllDevices, _TrackedAnnotationTovoid());
      if (!dart.test(this.mouseIsConnected)) {
        this[_trackedAnnotations][$values][$forEach](exitAllDevices);
        return;
      }
      for (let deviceId of this[_lastMouseEvent][$keys]) {
        let lastEvent = this[_lastMouseEvent][$_get](deviceId);
        let hits = this.annotationFinder(lastEvent.position);
        if (dart.test(hits[$isEmpty])) {
          for (let trackedAnnotation of this[_trackedAnnotations][$values]) {
            exitAnnotation(trackedAnnotation, deviceId);
          }
          continue;
        }
        let hitAnnotations = IterableOf_TrackedAnnotation()._check(hits[$map](src__gestures__mouse_tracking._TrackedAnnotation, dart.fn(hit => this[_findAnnotation](hit), MouseTrackerAnnotationTo_TrackedAnnotation())))[$toSet]();
        for (let hitAnnotation of hitAnnotations) {
          if (!dart.test(hitAnnotation.activeDevices.contains(deviceId))) {
            hitAnnotation.activeDevices.add(deviceId);
            if ((hitAnnotation.annotation == null ? null : hitAnnotation.annotation.onEnter) != null) {
              hitAnnotation.annotation.onEnter(new src__gestures__events.PointerEnterEvent.fromMouseEvent(lastEvent));
            }
          }
          if ((hitAnnotation.annotation == null ? null : hitAnnotation.annotation.onHover) != null && src__gestures__events.PointerHoverEvent.is(lastEvent)) {
            hitAnnotation.annotation.onHover(lastEvent);
          }
          for (let trackedAnnotation of this[_trackedAnnotations][$values]) {
            if (dart.test(hitAnnotations.contains(trackedAnnotation))) {
              continue;
            }
            if (dart.test(trackedAnnotation.activeDevices.contains(deviceId))) {
              if ((trackedAnnotation.annotation == null ? null : trackedAnnotation.annotation.onExit) != null) {
                trackedAnnotation.annotation.onExit(new src__gestures__events.PointerExitEvent.fromMouseEvent(lastEvent));
              }
              trackedAnnotation.activeDevices.remove(deviceId);
            }
          }
        }
      }
    }
    [_addMouseEvent](deviceId, event) {
      let wasConnected = this.mouseIsConnected;
      this[_lastMouseEvent][$_set](deviceId, event);
      if (this.mouseIsConnected != wasConnected) {
        this.notifyListeners();
      }
    }
    [_removeMouseEvent](deviceId) {
      let wasConnected = this.mouseIsConnected;
      this[_lastMouseEvent][$remove](deviceId);
      if (this.mouseIsConnected != wasConnected) {
        this.notifyListeners();
      }
    }
    get mouseIsConnected() {
      return this[_lastMouseEvent][$isNotEmpty];
    }
  };
  (src__gestures__mouse_tracking.MouseTracker.new = function(router, annotationFinder) {
    this[_trackedAnnotations] = new (LinkedMapOfMouseTrackerAnnotation$_TrackedAnnotation()).new();
    this[_postFrameCheckScheduled] = false;
    this[_lastMouseEvent] = new (IdentityMapOfint$PointerEvent()).new();
    this[annotationFinder$] = annotationFinder;
    if (!(router != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/mouse_tracking.dart", 100, 16, "router != null");
    if (!(annotationFinder != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/mouse_tracking.dart", 101, 16, "annotationFinder != null");
    src__gestures__mouse_tracking.MouseTracker.__proto__.new.call(this);
    router.addGlobalRoute(dart.bind(this, _handleEvent));
  }).prototype = src__gestures__mouse_tracking.MouseTracker.prototype;
  dart.addTypeTests(src__gestures__mouse_tracking.MouseTracker);
  const annotationFinder$ = Symbol("MouseTracker.annotationFinder");
  dart.setMethodSignature(src__gestures__mouse_tracking.MouseTracker, () => ({
    __proto__: dart.getMethods(src__gestures__mouse_tracking.MouseTracker.__proto__),
    attachAnnotation: dart.fnType(dart.void, [src__gestures__mouse_tracking.MouseTrackerAnnotation]),
    detachAnnotation: dart.fnType(dart.void, [src__gestures__mouse_tracking.MouseTrackerAnnotation]),
    [_scheduleMousePositionCheck]: dart.fnType(dart.void, []),
    [_handleEvent]: dart.fnType(dart.void, [src__gestures__events.PointerEvent]),
    [_findAnnotation]: dart.fnType(src__gestures__mouse_tracking._TrackedAnnotation, [src__gestures__mouse_tracking.MouseTrackerAnnotation]),
    isAnnotationAttached: dart.fnType(core.bool, [src__gestures__mouse_tracking.MouseTrackerAnnotation]),
    collectMousePositions: dart.fnType(dart.void, []),
    [_addMouseEvent]: dart.fnType(dart.void, [core.int, src__gestures__events.PointerEvent]),
    [_removeMouseEvent]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(src__gestures__mouse_tracking.MouseTracker, () => ({
    __proto__: dart.getGetters(src__gestures__mouse_tracking.MouseTracker.__proto__),
    mouseIsConnected: core.bool
  }));
  dart.setLibraryUri(src__gestures__mouse_tracking.MouseTracker, "package:flutter_web/src/gestures/mouse_tracking.dart");
  dart.setFieldSignature(src__gestures__mouse_tracking.MouseTracker, () => ({
    __proto__: dart.getFields(src__gestures__mouse_tracking.MouseTracker.__proto__),
    annotationFinder: dart.finalFieldType(OffsetToIterableOfMouseTrackerAnnotation()),
    [_trackedAnnotations]: dart.finalFieldType(MapOfMouseTrackerAnnotation$_TrackedAnnotation()),
    [_postFrameCheckScheduled]: dart.fieldType(core.bool),
    [_lastMouseEvent]: dart.finalFieldType(MapOfint$PointerEvent())
  }));
  const _velocityTracker = dart.privateName(src__gestures__multidrag, "_velocityTracker");
  const _client = dart.privateName(src__gestures__multidrag, "_client");
  const _pendingDelta = dart.privateName(src__gestures__multidrag, "_pendingDelta");
  const _lastPendingEventTimestamp$ = dart.privateName(src__gestures__multidrag, "_lastPendingEventTimestamp");
  const _arenaEntry = dart.privateName(src__gestures__multidrag, "_arenaEntry");
  const _setArenaEntry = dart.privateName(src__gestures__multidrag, "_setArenaEntry");
  const _move = dart.privateName(src__gestures__multidrag, "_move");
  const _startDrag = dart.privateName(src__gestures__multidrag, "_startDrag");
  const _up = dart.privateName(src__gestures__multidrag, "_up");
  const _cancel = dart.privateName(src__gestures__multidrag, "_cancel");
  src__gestures__multidrag.MultiDragPointerState = class MultiDragPointerState extends core.Object {
    get initialPosition() {
      return this[initialPosition$];
    }
    set initialPosition(value) {
      super.initialPosition = value;
    }
    get pendingDelta() {
      return this[_pendingDelta];
    }
    [_setArenaEntry](entry) {
      if (!(this[_arenaEntry] == null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 51, 12, "_arenaEntry == null");
      if (!(this.pendingDelta != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 52, 12, "pendingDelta != null");
      if (!(this[_client] == null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 53, 12, "_client == null");
      this[_arenaEntry] = entry;
    }
    resolve(disposition) {
      this[_arenaEntry].resolve(disposition);
    }
    [_move](event) {
      if (!(this[_arenaEntry] != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 65, 12, "_arenaEntry != null");
      if (!dart.test(event.synthesized)) this[_velocityTracker].addPosition(event.timeStamp, event.position);
      if (this[_client] != null) {
        if (!(this.pendingDelta == null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 69, 14, "pendingDelta == null");
        this[_client].update(new src__gestures__drag_details.DragUpdateDetails.new({sourceTimeStamp: event.timeStamp, delta: event.delta, globalPosition: event.position}));
      } else {
        if (!(this.pendingDelta != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 77, 14, "pendingDelta != null");
        this[_pendingDelta] = this[_pendingDelta]['+'](event.delta);
        this[_lastPendingEventTimestamp$] = event.timeStamp;
        this.checkForResolutionAfterMove();
      }
    }
    checkForResolutionAfterMove() {}
    rejected() {
      if (!(this[_arenaEntry] != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 103, 12, "_arenaEntry != null");
      if (!(this[_client] == null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 104, 12, "_client == null");
      if (!(this.pendingDelta != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 105, 12, "pendingDelta != null");
      this[_pendingDelta] = null;
      this[_lastPendingEventTimestamp$] = null;
      this[_arenaEntry] = null;
    }
    [_startDrag](client) {
      if (!(this[_arenaEntry] != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 112, 12, "_arenaEntry != null");
      if (!(this[_client] == null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 113, 12, "_client == null");
      if (!(client != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 114, 12, "client != null");
      if (!(this.pendingDelta != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 115, 12, "pendingDelta != null");
      this[_client] = client;
      let details = new src__gestures__drag_details.DragUpdateDetails.new({sourceTimeStamp: this[_lastPendingEventTimestamp$], delta: this.pendingDelta, globalPosition: this.initialPosition});
      this[_pendingDelta] = null;
      this[_lastPendingEventTimestamp$] = null;
      this[_client].update(details);
    }
    [_up]() {
      if (!(this[_arenaEntry] != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 129, 12, "_arenaEntry != null");
      if (this[_client] != null) {
        if (!(this.pendingDelta == null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 131, 14, "pendingDelta == null");
        let details = new src__gestures__drag_details.DragEndDetails.new({velocity: this[_velocityTracker].getVelocity()});
        let client = this[_client];
        this[_client] = null;
        client.end(details);
      } else {
        if (!(this.pendingDelta != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 139, 14, "pendingDelta != null");
        this[_pendingDelta] = null;
        this[_lastPendingEventTimestamp$] = null;
      }
    }
    [_cancel]() {
      if (!(this[_arenaEntry] != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 146, 12, "_arenaEntry != null");
      if (this[_client] != null) {
        if (!(this.pendingDelta == null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 148, 14, "pendingDelta == null");
        let client = this[_client];
        this[_client] = null;
        client.cancel();
      } else {
        if (!(this.pendingDelta != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 154, 14, "pendingDelta != null");
        this[_pendingDelta] = null;
        this[_lastPendingEventTimestamp$] = null;
      }
    }
    dispose() {
      let t = this[_arenaEntry];
      t == null ? null : t.resolve(src__gestures__arena.GestureDisposition.rejected);
      this[_arenaEntry] = null;
      if (!dart.test(dart.fn(() => {
        this[_pendingDelta] = null;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 166, 12, "() {_pendingDelta = null; return true;}()");
    }
  };
  (src__gestures__multidrag.MultiDragPointerState.new = function(initialPosition) {
    this[_velocityTracker] = new src__gestures__velocity_tracker.VelocityTracker.new();
    this[_client] = null;
    this[_pendingDelta] = ui$.Offset.zero;
    this[_lastPendingEventTimestamp$] = null;
    this[_arenaEntry] = null;
    this[initialPosition$] = initialPosition;
    if (!(initialPosition != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 30, 56, "initialPosition != null");
  }).prototype = src__gestures__multidrag.MultiDragPointerState.prototype;
  dart.addTypeTests(src__gestures__multidrag.MultiDragPointerState);
  const initialPosition$ = Symbol("MultiDragPointerState.initialPosition");
  dart.setMethodSignature(src__gestures__multidrag.MultiDragPointerState, () => ({
    __proto__: dart.getMethods(src__gestures__multidrag.MultiDragPointerState.__proto__),
    [_setArenaEntry]: dart.fnType(dart.void, [src__gestures__arena.GestureArenaEntry]),
    resolve: dart.fnType(dart.void, [src__gestures__arena.GestureDisposition]),
    [_move]: dart.fnType(dart.void, [src__gestures__events.PointerMoveEvent]),
    checkForResolutionAfterMove: dart.fnType(dart.void, []),
    rejected: dart.fnType(dart.void, []),
    [_startDrag]: dart.fnType(dart.void, [src__gestures__drag.Drag]),
    [_up]: dart.fnType(dart.void, []),
    [_cancel]: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__gestures__multidrag.MultiDragPointerState, () => ({
    __proto__: dart.getGetters(src__gestures__multidrag.MultiDragPointerState.__proto__),
    pendingDelta: ui$.Offset
  }));
  dart.setLibraryUri(src__gestures__multidrag.MultiDragPointerState, "package:flutter_web/src/gestures/multidrag.dart");
  dart.setFieldSignature(src__gestures__multidrag.MultiDragPointerState, () => ({
    __proto__: dart.getFields(src__gestures__multidrag.MultiDragPointerState.__proto__),
    initialPosition: dart.finalFieldType(ui$.Offset),
    [_velocityTracker]: dart.finalFieldType(src__gestures__velocity_tracker.VelocityTracker),
    [_client]: dart.fieldType(src__gestures__drag.Drag),
    [_pendingDelta]: dart.fieldType(ui$.Offset),
    [_lastPendingEventTimestamp$]: dart.fieldType(core.Duration),
    [_arenaEntry]: dart.fieldType(src__gestures__arena.GestureArenaEntry)
  }));
  const _pointers = dart.privateName(src__gestures__multidrag, "_pointers");
  const _handleEvent$ = dart.privateName(src__gestures__multidrag, "_handleEvent");
  const _removeState = dart.privateName(src__gestures__multidrag, "_removeState");
  const _is_MultiDragGestureRecognizer_default = Symbol('_is_MultiDragGestureRecognizer_default');
  src__gestures__multidrag.MultiDragGestureRecognizer$ = dart.generic(T => {
    let IdentityMapOfint$T = () => (IdentityMapOfint$T = dart.constFn(_js_helper.IdentityMap$(core.int, T)))();
    let MapOfint$T = () => (MapOfint$T = dart.constFn(core.Map$(core.int, T)))();
    class MultiDragGestureRecognizer extends src__gestures__recognizer.GestureRecognizer {
      get onStart() {
        return this[onStart];
      }
      set onStart(value) {
        this[onStart] = value;
      }
      addAllowedPointer(event) {
        if (!(this[_pointers] != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 211, 12, "_pointers != null");
        if (!(event.pointer != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 212, 12, "event.pointer != null");
        if (!(event.position != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 213, 12, "event.position != null");
        if (!!dart.test(this[_pointers][$containsKey](event.pointer))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 214, 12, "!_pointers.containsKey(event.pointer)");
        let state = this.createNewPointerState(event);
        this[_pointers][$_set](event.pointer, state);
        src__gestures__binding.GestureBinding.instance.pointerRouter.addRoute(event.pointer, dart.bind(this, _handleEvent$));
        state[_setArenaEntry](src__gestures__binding.GestureBinding.instance.gestureArena.add(event.pointer, this));
      }
      [_handleEvent$](event) {
        if (!(this[_pointers] != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 228, 12, "_pointers != null");
        if (!(event.pointer != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 229, 12, "event.pointer != null");
        if (!(event.timeStamp != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 230, 12, "event.timeStamp != null");
        if (!(event.position != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 231, 12, "event.position != null");
        if (!dart.test(this[_pointers][$containsKey](event.pointer))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 232, 12, "_pointers.containsKey(event.pointer)");
        let state = this[_pointers][$_get](event.pointer);
        if (src__gestures__events.PointerMoveEvent.is(event)) {
          state[_move](event);
        } else if (src__gestures__events.PointerUpEvent.is(event)) {
          if (!dart.equals(event.delta, ui$.Offset.zero)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 238, 14, "event.delta == Offset.zero");
          state[_up]();
          this[_removeState](event.pointer);
        } else if (src__gestures__events.PointerCancelEvent.is(event)) {
          if (!dart.equals(event.delta, ui$.Offset.zero)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 243, 14, "event.delta == Offset.zero");
          state[_cancel]();
          this[_removeState](event.pointer);
        } else if (!src__gestures__events.PointerDownEvent.is(event)) {
          if (!false) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 251, 14, "false");
        }
      }
      acceptGesture(pointer) {
        if (!(this[_pointers] != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 257, 12, "_pointers != null");
        let state = this[_pointers][$_get](pointer);
        if (state == null) return;
        state.accepted(dart.fn(initialPosition => this[_startDrag](initialPosition, pointer), OffsetToDrag()));
      }
      [_startDrag](initialPosition, pointer) {
        if (!(this[_pointers] != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 266, 12, "_pointers != null");
        let state = this[_pointers][$_get](pointer);
        if (!(state != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 268, 12, "state != null");
        if (!(state[_pendingDelta] != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 269, 12, "state._pendingDelta != null");
        let drag = null;
        if (this.onStart != null) drag = this.invokeCallback(src__gestures__drag.Drag, "onStart", dart.fn(() => this.onStart(initialPosition), VoidToDrag()));
        if (drag != null) {
          state[_startDrag](drag);
        } else {
          this[_removeState](pointer);
        }
        return drag;
      }
      rejectGesture(pointer) {
        if (!(this[_pointers] != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 283, 12, "_pointers != null");
        if (dart.test(this[_pointers][$containsKey](pointer))) {
          let state = this[_pointers][$_get](pointer);
          if (!(state != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 286, 14, "state != null");
          state.rejected();
          this[_removeState](pointer);
        }
      }
      [_removeState](pointer) {
        if (this[_pointers] == null) {
          return;
        }
        if (!dart.test(this[_pointers][$containsKey](pointer))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 298, 12, "_pointers.containsKey(pointer)");
        src__gestures__binding.GestureBinding.instance.pointerRouter.removeRoute(pointer, dart.bind(this, _handleEvent$));
        this[_pointers][$remove](pointer).dispose();
      }
      dispose() {
        this[_pointers][$keys][$toList]()[$forEach](dart.bind(this, _removeState));
        if (!dart.test(this[_pointers][$isEmpty])) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 306, 12, "_pointers.isEmpty");
        this[_pointers] = null;
        super.dispose();
      }
    }
    (MultiDragGestureRecognizer.new = function(opts) {
      let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
      let kind = opts && 'kind' in opts ? opts.kind : null;
      this[onStart] = null;
      this[_pointers] = new (IdentityMapOfint$T()).new();
      MultiDragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    }).prototype = MultiDragGestureRecognizer.prototype;
    dart.addTypeTests(MultiDragGestureRecognizer);
    MultiDragGestureRecognizer.prototype[_is_MultiDragGestureRecognizer_default] = true;
    const onStart = Symbol("MultiDragGestureRecognizer.onStart");
    dart.setMethodSignature(MultiDragGestureRecognizer, () => ({
      __proto__: dart.getMethods(MultiDragGestureRecognizer.__proto__),
      addAllowedPointer: dart.fnType(dart.void, [src__gestures__events.PointerDownEvent]),
      [_handleEvent$]: dart.fnType(dart.void, [src__gestures__events.PointerEvent]),
      acceptGesture: dart.fnType(dart.void, [core.int]),
      [_startDrag]: dart.fnType(src__gestures__drag.Drag, [ui$.Offset, core.int]),
      rejectGesture: dart.fnType(dart.void, [core.int]),
      [_removeState]: dart.fnType(dart.void, [core.int]),
      dispose: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(MultiDragGestureRecognizer, "package:flutter_web/src/gestures/multidrag.dart");
    dart.setFieldSignature(MultiDragGestureRecognizer, () => ({
      __proto__: dart.getFields(MultiDragGestureRecognizer.__proto__),
      onStart: dart.fieldType(OffsetToDrag()),
      [_pointers]: dart.fieldType(MapOfint$T())
    }));
    return MultiDragGestureRecognizer;
  });
  src__gestures__multidrag.MultiDragGestureRecognizer = src__gestures__multidrag.MultiDragGestureRecognizer$();
  dart.addTypeTests(src__gestures__multidrag.MultiDragGestureRecognizer, _is_MultiDragGestureRecognizer_default);
  src__gestures__multidrag._ImmediatePointerState = class _ImmediatePointerState extends src__gestures__multidrag.MultiDragPointerState {
    checkForResolutionAfterMove() {
      if (!(this.pendingDelta != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 317, 12, "pendingDelta != null");
      if (dart.notNull(this.pendingDelta.distance) > 18.0) this.resolve(src__gestures__arena.GestureDisposition.accepted);
    }
    accepted(starter) {
      starter(this.initialPosition);
    }
  };
  (src__gestures__multidrag._ImmediatePointerState.new = function(initialPosition) {
    src__gestures__multidrag._ImmediatePointerState.__proto__.new.call(this, initialPosition);
  }).prototype = src__gestures__multidrag._ImmediatePointerState.prototype;
  dart.addTypeTests(src__gestures__multidrag._ImmediatePointerState);
  dart.setMethodSignature(src__gestures__multidrag._ImmediatePointerState, () => ({
    __proto__: dart.getMethods(src__gestures__multidrag._ImmediatePointerState.__proto__),
    accepted: dart.fnType(dart.void, [dart.fnType(src__gestures__drag.Drag, [ui$.Offset])])
  }));
  dart.setLibraryUri(src__gestures__multidrag._ImmediatePointerState, "package:flutter_web/src/gestures/multidrag.dart");
  src__gestures__multidrag.ImmediateMultiDragGestureRecognizer = class ImmediateMultiDragGestureRecognizer extends src__gestures__multidrag.MultiDragGestureRecognizer$(src__gestures__multidrag._ImmediatePointerState) {
    createNewPointerState(event) {
      return new src__gestures__multidrag._ImmediatePointerState.new(event.position);
    }
    get debugDescription() {
      return "multidrag";
    }
  };
  (src__gestures__multidrag.ImmediateMultiDragGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    src__gestures__multidrag.ImmediateMultiDragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
  }).prototype = src__gestures__multidrag.ImmediateMultiDragGestureRecognizer.prototype;
  dart.addTypeTests(src__gestures__multidrag.ImmediateMultiDragGestureRecognizer);
  dart.setMethodSignature(src__gestures__multidrag.ImmediateMultiDragGestureRecognizer, () => ({
    __proto__: dart.getMethods(src__gestures__multidrag.ImmediateMultiDragGestureRecognizer.__proto__),
    createNewPointerState: dart.fnType(src__gestures__multidrag._ImmediatePointerState, [src__gestures__events.PointerDownEvent])
  }));
  dart.setGetterSignature(src__gestures__multidrag.ImmediateMultiDragGestureRecognizer, () => ({
    __proto__: dart.getGetters(src__gestures__multidrag.ImmediateMultiDragGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(src__gestures__multidrag.ImmediateMultiDragGestureRecognizer, "package:flutter_web/src/gestures/multidrag.dart");
  src__gestures__multidrag._HorizontalPointerState = class _HorizontalPointerState extends src__gestures__multidrag.MultiDragPointerState {
    checkForResolutionAfterMove() {
      if (!(this.pendingDelta != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 366, 12, "pendingDelta != null");
      if (this.pendingDelta.dx[$abs]() > 18.0) this.resolve(src__gestures__arena.GestureDisposition.accepted);
    }
    accepted(starter) {
      starter(this.initialPosition);
    }
  };
  (src__gestures__multidrag._HorizontalPointerState.new = function(initialPosition) {
    src__gestures__multidrag._HorizontalPointerState.__proto__.new.call(this, initialPosition);
  }).prototype = src__gestures__multidrag._HorizontalPointerState.prototype;
  dart.addTypeTests(src__gestures__multidrag._HorizontalPointerState);
  dart.setMethodSignature(src__gestures__multidrag._HorizontalPointerState, () => ({
    __proto__: dart.getMethods(src__gestures__multidrag._HorizontalPointerState.__proto__),
    accepted: dart.fnType(dart.void, [dart.fnType(src__gestures__drag.Drag, [ui$.Offset])])
  }));
  dart.setLibraryUri(src__gestures__multidrag._HorizontalPointerState, "package:flutter_web/src/gestures/multidrag.dart");
  src__gestures__multidrag.HorizontalMultiDragGestureRecognizer = class HorizontalMultiDragGestureRecognizer extends src__gestures__multidrag.MultiDragGestureRecognizer$(src__gestures__multidrag._HorizontalPointerState) {
    createNewPointerState(event) {
      return new src__gestures__multidrag._HorizontalPointerState.new(event.position);
    }
    get debugDescription() {
      return "horizontal multidrag";
    }
  };
  (src__gestures__multidrag.HorizontalMultiDragGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    src__gestures__multidrag.HorizontalMultiDragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
  }).prototype = src__gestures__multidrag.HorizontalMultiDragGestureRecognizer.prototype;
  dart.addTypeTests(src__gestures__multidrag.HorizontalMultiDragGestureRecognizer);
  dart.setMethodSignature(src__gestures__multidrag.HorizontalMultiDragGestureRecognizer, () => ({
    __proto__: dart.getMethods(src__gestures__multidrag.HorizontalMultiDragGestureRecognizer.__proto__),
    createNewPointerState: dart.fnType(src__gestures__multidrag._HorizontalPointerState, [src__gestures__events.PointerDownEvent])
  }));
  dart.setGetterSignature(src__gestures__multidrag.HorizontalMultiDragGestureRecognizer, () => ({
    __proto__: dart.getGetters(src__gestures__multidrag.HorizontalMultiDragGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(src__gestures__multidrag.HorizontalMultiDragGestureRecognizer, "package:flutter_web/src/gestures/multidrag.dart");
  src__gestures__multidrag._VerticalPointerState = class _VerticalPointerState extends src__gestures__multidrag.MultiDragPointerState {
    checkForResolutionAfterMove() {
      if (!(this.pendingDelta != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 415, 12, "pendingDelta != null");
      if (this.pendingDelta.dy[$abs]() > 18.0) this.resolve(src__gestures__arena.GestureDisposition.accepted);
    }
    accepted(starter) {
      starter(this.initialPosition);
    }
  };
  (src__gestures__multidrag._VerticalPointerState.new = function(initialPosition) {
    src__gestures__multidrag._VerticalPointerState.__proto__.new.call(this, initialPosition);
  }).prototype = src__gestures__multidrag._VerticalPointerState.prototype;
  dart.addTypeTests(src__gestures__multidrag._VerticalPointerState);
  dart.setMethodSignature(src__gestures__multidrag._VerticalPointerState, () => ({
    __proto__: dart.getMethods(src__gestures__multidrag._VerticalPointerState.__proto__),
    accepted: dart.fnType(dart.void, [dart.fnType(src__gestures__drag.Drag, [ui$.Offset])])
  }));
  dart.setLibraryUri(src__gestures__multidrag._VerticalPointerState, "package:flutter_web/src/gestures/multidrag.dart");
  src__gestures__multidrag.VerticalMultiDragGestureRecognizer = class VerticalMultiDragGestureRecognizer extends src__gestures__multidrag.MultiDragGestureRecognizer$(src__gestures__multidrag._VerticalPointerState) {
    createNewPointerState(event) {
      return new src__gestures__multidrag._VerticalPointerState.new(event.position);
    }
    get debugDescription() {
      return "vertical multidrag";
    }
  };
  (src__gestures__multidrag.VerticalMultiDragGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    src__gestures__multidrag.VerticalMultiDragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
  }).prototype = src__gestures__multidrag.VerticalMultiDragGestureRecognizer.prototype;
  dart.addTypeTests(src__gestures__multidrag.VerticalMultiDragGestureRecognizer);
  dart.setMethodSignature(src__gestures__multidrag.VerticalMultiDragGestureRecognizer, () => ({
    __proto__: dart.getMethods(src__gestures__multidrag.VerticalMultiDragGestureRecognizer.__proto__),
    createNewPointerState: dart.fnType(src__gestures__multidrag._VerticalPointerState, [src__gestures__events.PointerDownEvent])
  }));
  dart.setGetterSignature(src__gestures__multidrag.VerticalMultiDragGestureRecognizer, () => ({
    __proto__: dart.getGetters(src__gestures__multidrag.VerticalMultiDragGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(src__gestures__multidrag.VerticalMultiDragGestureRecognizer, "package:flutter_web/src/gestures/multidrag.dart");
  const _timer$ = dart.privateName(src__gestures__multidrag, "_timer");
  const _starter = dart.privateName(src__gestures__multidrag, "_starter");
  const _delayPassed = dart.privateName(src__gestures__multidrag, "_delayPassed");
  const _ensureTimerStopped = dart.privateName(src__gestures__multidrag, "_ensureTimerStopped");
  src__gestures__multidrag._DelayedPointerState = class _DelayedPointerState extends src__gestures__multidrag.MultiDragPointerState {
    [_delayPassed]() {
      if (!(this[_timer$] != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 470, 12, "_timer != null");
      if (!(this.pendingDelta != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 471, 12, "pendingDelta != null");
      if (!(dart.notNull(this.pendingDelta.distance) <= 18.0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 472, 12, "pendingDelta.distance <= kTouchSlop");
      this[_timer$] = null;
      if (this[_starter] != null) {
        this[_starter](this.initialPosition);
        this[_starter] = null;
      } else {
        this.resolve(src__gestures__arena.GestureDisposition.accepted);
      }
      if (!(this[_starter] == null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 480, 12, "_starter == null");
    }
    [_ensureTimerStopped]() {
      let t = this[_timer$];
      t == null ? null : t.cancel();
      this[_timer$] = null;
    }
    accepted(starter) {
      if (!(this[_starter] == null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 490, 12, "_starter == null");
      if (this[_timer$] == null)
        starter(this.initialPosition);
      else
        this[_starter] = starter;
    }
    checkForResolutionAfterMove() {
      if (this[_timer$] == null) {
        if (!(this[_starter] != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 505, 14, "_starter != null");
        return;
      }
      if (!(this.pendingDelta != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 508, 12, "pendingDelta != null");
      if (dart.notNull(this.pendingDelta.distance) > 18.0) {
        this.resolve(src__gestures__arena.GestureDisposition.rejected);
        this[_ensureTimerStopped]();
      }
    }
    dispose() {
      this[_ensureTimerStopped]();
      super.dispose();
    }
  };
  (src__gestures__multidrag._DelayedPointerState.new = function(initialPosition, delay) {
    this[_timer$] = null;
    this[_starter] = null;
    if (!(delay != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 461, 16, "delay != null");
    src__gestures__multidrag._DelayedPointerState.__proto__.new.call(this, initialPosition);
    this[_timer$] = async.Timer.new(delay, dart.bind(this, _delayPassed));
  }).prototype = src__gestures__multidrag._DelayedPointerState.prototype;
  dart.addTypeTests(src__gestures__multidrag._DelayedPointerState);
  dart.setMethodSignature(src__gestures__multidrag._DelayedPointerState, () => ({
    __proto__: dart.getMethods(src__gestures__multidrag._DelayedPointerState.__proto__),
    [_delayPassed]: dart.fnType(dart.void, []),
    [_ensureTimerStopped]: dart.fnType(dart.void, []),
    accepted: dart.fnType(dart.void, [dart.fnType(src__gestures__drag.Drag, [ui$.Offset])])
  }));
  dart.setLibraryUri(src__gestures__multidrag._DelayedPointerState, "package:flutter_web/src/gestures/multidrag.dart");
  dart.setFieldSignature(src__gestures__multidrag._DelayedPointerState, () => ({
    __proto__: dart.getFields(src__gestures__multidrag._DelayedPointerState.__proto__),
    [_timer$]: dart.fieldType(async.Timer),
    [_starter]: dart.fieldType(OffsetToDrag())
  }));
  src__gestures__multidrag.DelayedMultiDragGestureRecognizer = class DelayedMultiDragGestureRecognizer extends src__gestures__multidrag.MultiDragGestureRecognizer$(src__gestures__multidrag._DelayedPointerState) {
    get delay() {
      return this[delay$];
    }
    set delay(value) {
      super.delay = value;
    }
    createNewPointerState(event) {
      return new src__gestures__multidrag._DelayedPointerState.new(event.position, this.delay);
    }
    get debugDescription() {
      return "long multidrag";
    }
  };
  (src__gestures__multidrag.DelayedMultiDragGestureRecognizer.new = function(opts) {
    let delay = opts && 'delay' in opts ? opts.delay : src__gestures__constants.kLongPressTimeout;
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[delay$] = delay;
    if (!(delay != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multidrag.dart", 552, 16, "delay != null");
    src__gestures__multidrag.DelayedMultiDragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
  }).prototype = src__gestures__multidrag.DelayedMultiDragGestureRecognizer.prototype;
  dart.addTypeTests(src__gestures__multidrag.DelayedMultiDragGestureRecognizer);
  const delay$ = Symbol("DelayedMultiDragGestureRecognizer.delay");
  dart.setMethodSignature(src__gestures__multidrag.DelayedMultiDragGestureRecognizer, () => ({
    __proto__: dart.getMethods(src__gestures__multidrag.DelayedMultiDragGestureRecognizer.__proto__),
    createNewPointerState: dart.fnType(src__gestures__multidrag._DelayedPointerState, [src__gestures__events.PointerDownEvent])
  }));
  dart.setGetterSignature(src__gestures__multidrag.DelayedMultiDragGestureRecognizer, () => ({
    __proto__: dart.getGetters(src__gestures__multidrag.DelayedMultiDragGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(src__gestures__multidrag.DelayedMultiDragGestureRecognizer, "package:flutter_web/src/gestures/multidrag.dart");
  dart.setFieldSignature(src__gestures__multidrag.DelayedMultiDragGestureRecognizer, () => ({
    __proto__: dart.getFields(src__gestures__multidrag.DelayedMultiDragGestureRecognizer.__proto__),
    delay: dart.finalFieldType(core.Duration)
  }));
  src__gestures__tap.TapDownDetails = class TapDownDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$6];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    get kind() {
      return this[kind$0];
    }
    set kind(value) {
      super.kind = value;
    }
  };
  (src__gestures__tap.TapDownDetails.new = function(opts) {
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : ui$.Offset.zero;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[globalPosition$6] = globalPosition;
    this[kind$0] = kind;
    if (!(globalPosition != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/tap.dart", 26, 15, "globalPosition != null");
  }).prototype = src__gestures__tap.TapDownDetails.prototype;
  dart.addTypeTests(src__gestures__tap.TapDownDetails);
  const globalPosition$6 = Symbol("TapDownDetails.globalPosition");
  const kind$0 = Symbol("TapDownDetails.kind");
  dart.setLibraryUri(src__gestures__tap.TapDownDetails, "package:flutter_web/src/gestures/tap.dart");
  dart.setFieldSignature(src__gestures__tap.TapDownDetails, () => ({
    __proto__: dart.getFields(src__gestures__tap.TapDownDetails.__proto__),
    globalPosition: dart.finalFieldType(ui$.Offset),
    kind: dart.finalFieldType(ui$.PointerDeviceKind)
  }));
  src__gestures__tap.TapUpDetails = class TapUpDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$7];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
  };
  (src__gestures__tap.TapUpDetails.new = function(opts) {
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : ui$.Offset.zero;
    this[globalPosition$7] = globalPosition;
    if (!(globalPosition != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/tap.dart", 56, 16, "globalPosition != null");
  }).prototype = src__gestures__tap.TapUpDetails.prototype;
  dart.addTypeTests(src__gestures__tap.TapUpDetails);
  const globalPosition$7 = Symbol("TapUpDetails.globalPosition");
  dart.setLibraryUri(src__gestures__tap.TapUpDetails, "package:flutter_web/src/gestures/tap.dart");
  dart.setFieldSignature(src__gestures__tap.TapUpDetails, () => ({
    __proto__: dart.getFields(src__gestures__tap.TapUpDetails.__proto__),
    globalPosition: dart.finalFieldType(ui$.Offset)
  }));
  const _sentTapDown = dart.privateName(src__gestures__tap, "_sentTapDown");
  const _wonArenaForPrimaryPointer = dart.privateName(src__gestures__tap, "_wonArenaForPrimaryPointer");
  const _finalPosition = dart.privateName(src__gestures__tap, "_finalPosition");
  const _initialButtons$0 = dart.privateName(src__gestures__tap, "_initialButtons");
  const _checkUp = dart.privateName(src__gestures__tap, "_checkUp");
  const _checkCancel$ = dart.privateName(src__gestures__tap, "_checkCancel");
  const _reset$ = dart.privateName(src__gestures__tap, "_reset");
  const _checkDown$ = dart.privateName(src__gestures__tap, "_checkDown");
  src__gestures__tap.TapGestureRecognizer = class TapGestureRecognizer extends src__gestures__recognizer.PrimaryPointerGestureRecognizer {
    get onTapDown() {
      return this[onTapDown];
    }
    set onTapDown(value) {
      this[onTapDown] = value;
    }
    get onTapUp() {
      return this[onTapUp];
    }
    set onTapUp(value) {
      this[onTapUp] = value;
    }
    get onTap() {
      return this[onTap];
    }
    set onTap(value) {
      this[onTap] = value;
    }
    get onTapCancel() {
      return this[onTapCancel];
    }
    set onTapCancel(value) {
      this[onTapCancel] = value;
    }
    get onSecondaryTapDown() {
      return this[onSecondaryTapDown];
    }
    set onSecondaryTapDown(value) {
      this[onSecondaryTapDown] = value;
    }
    get onSecondaryTapUp() {
      return this[onSecondaryTapUp];
    }
    set onSecondaryTapUp(value) {
      this[onSecondaryTapUp] = value;
    }
    get onSecondaryTapCancel() {
      return this[onSecondaryTapCancel];
    }
    set onSecondaryTapCancel(value) {
      this[onSecondaryTapCancel] = value;
    }
    isPointerAllowed(event) {
      switch (event.buttons) {
        case 1:
        {
          if (this.onTapDown == null && this.onTap == null && this.onTapUp == null && this.onTapCancel == null) return false;
          break;
        }
        case 2:
        {
          if (this.onSecondaryTapDown == null && this.onSecondaryTapUp == null && this.onSecondaryTapCancel == null) return false;
          break;
        }
        default:
        {
          return false;
        }
      }
      return super.isPointerAllowed(event);
    }
    addAllowedPointer(event) {
      super.addAllowedPointer(event);
      this[_initialButtons$0] = event.buttons;
    }
    handlePrimaryPointer(event) {
      if (src__gestures__events.PointerUpEvent.is(event)) {
        this[_finalPosition] = event.position;
        this[_checkUp]();
      } else if (src__gestures__events.PointerCancelEvent.is(event)) {
        this.resolve(src__gestures__arena.GestureDisposition.rejected);
        if (dart.test(this[_sentTapDown])) {
          this[_checkCancel$]("");
        }
        this[_reset$]();
      } else if (event.buttons != this[_initialButtons$0]) {
        this.resolve(src__gestures__arena.GestureDisposition.rejected);
        this.stopTrackingPointer(this.primaryPointer);
      }
    }
    resolve(disposition) {
      if (dart.test(this[_wonArenaForPrimaryPointer]) && disposition === src__gestures__arena.GestureDisposition.rejected) {
        if (!dart.test(this[_sentTapDown])) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/tap.dart", 284, 14, "_sentTapDown");
        this[_checkCancel$]("spontaneous ");
        this[_reset$]();
      }
      super.resolve(disposition);
    }
    didExceedDeadlineWithEvent(event) {
      this[_checkDown$](event.pointer);
    }
    acceptGesture(pointer) {
      super.acceptGesture(pointer);
      if (pointer == this.primaryPointer) {
        this[_checkDown$](pointer);
        this[_wonArenaForPrimaryPointer] = true;
        this[_checkUp]();
      }
    }
    rejectGesture(pointer) {
      super.rejectGesture(pointer);
      if (pointer == this.primaryPointer) {
        if (!(this.state !== src__gestures__recognizer.GestureRecognizerState.possible)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/tap.dart", 311, 14, "state != GestureRecognizerState.possible");
        if (dart.test(this[_sentTapDown])) this[_checkCancel$]("forced ");
        this[_reset$]();
      }
    }
    [_checkDown$](pointer) {
      if (dart.test(this[_sentTapDown])) {
        return;
      }
      let details = new src__gestures__tap.TapDownDetails.new({globalPosition: this.initialPosition, kind: this.getKindForPointer(pointer)});
      switch (this[_initialButtons$0]) {
        case 1:
        {
          if (this.onTapDown != null) this.invokeCallback(dart.void, "onTapDown", dart.fn(() => this.onTapDown(details), VoidTovoid()));
          break;
        }
        case 2:
        {
          if (this.onSecondaryTapDown != null) this.invokeCallback(dart.void, "onSecondaryTapDown", dart.fn(() => this.onSecondaryTapDown(details), VoidTovoid()));
          break;
        }
        default:
      }
      this[_sentTapDown] = true;
    }
    [_checkUp]() {
      if (!dart.test(this[_wonArenaForPrimaryPointer]) || this[_finalPosition] == null) {
        return;
      }
      let details = new src__gestures__tap.TapUpDetails.new({globalPosition: this[_finalPosition]});
      switch (this[_initialButtons$0]) {
        case 1:
        {
          if (this.onTapUp != null) this.invokeCallback(dart.void, "onTapUp", dart.fn(() => this.onTapUp(details), VoidTovoid()));
          if (this.onTap != null) this.invokeCallback(dart.void, "onTap", this.onTap);
          break;
        }
        case 2:
        {
          if (this.onSecondaryTapUp != null) this.invokeCallback(dart.void, "onSecondaryTapUp", dart.fn(() => this.onSecondaryTapUp(details), VoidTovoid()));
          break;
        }
        default:
      }
      this[_reset$]();
    }
    [_checkCancel$](note) {
      switch (this[_initialButtons$0]) {
        case 1:
        {
          if (this.onTapCancel != null) this.invokeCallback(dart.void, dart.str(note) + "onTapCancel", this.onTapCancel);
          break;
        }
        case 2:
        {
          if (this.onSecondaryTapCancel != null) this.invokeCallback(dart.void, dart.str(note) + "onSecondaryTapCancel", this.onSecondaryTapCancel);
          break;
        }
        default:
      }
    }
    [_reset$]() {
      this[_sentTapDown] = false;
      this[_wonArenaForPrimaryPointer] = false;
      this[_finalPosition] = null;
      this[_initialButtons$0] = null;
    }
    get debugDescription() {
      return "tap";
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new src__foundation__diagnostics.FlagProperty.new("wonArenaForPrimaryPointer", {value: this[_wonArenaForPrimaryPointer], ifTrue: "won arena"}));
      properties.add(new (DiagnosticsPropertyOfOffset()).new("finalPosition", this[_finalPosition], {defaultValue: null}));
      properties.add(new src__foundation__diagnostics.FlagProperty.new("sentTapDown", {value: this[_sentTapDown], ifTrue: "sent tap down"}));
    }
  };
  (src__gestures__tap.TapGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    this[onTapDown] = null;
    this[onTapUp] = null;
    this[onTap] = null;
    this[onTapCancel] = null;
    this[onSecondaryTapDown] = null;
    this[onSecondaryTapUp] = null;
    this[onSecondaryTapCancel] = null;
    this[_sentTapDown] = false;
    this[_wonArenaForPrimaryPointer] = false;
    this[_finalPosition] = null;
    this[_initialButtons$0] = null;
    src__gestures__tap.TapGestureRecognizer.__proto__.new.call(this, {deadline: src__gestures__constants.kPressTimeout, debugOwner: debugOwner});
  }).prototype = src__gestures__tap.TapGestureRecognizer.prototype;
  dart.addTypeTests(src__gestures__tap.TapGestureRecognizer);
  const onTapDown = Symbol("TapGestureRecognizer.onTapDown");
  const onTapUp = Symbol("TapGestureRecognizer.onTapUp");
  const onTap = Symbol("TapGestureRecognizer.onTap");
  const onTapCancel = Symbol("TapGestureRecognizer.onTapCancel");
  const onSecondaryTapDown = Symbol("TapGestureRecognizer.onSecondaryTapDown");
  const onSecondaryTapUp = Symbol("TapGestureRecognizer.onSecondaryTapUp");
  const onSecondaryTapCancel = Symbol("TapGestureRecognizer.onSecondaryTapCancel");
  dart.setMethodSignature(src__gestures__tap.TapGestureRecognizer, () => ({
    __proto__: dart.getMethods(src__gestures__tap.TapGestureRecognizer.__proto__),
    handlePrimaryPointer: dart.fnType(dart.void, [src__gestures__events.PointerEvent]),
    [_checkDown$]: dart.fnType(dart.void, [core.int]),
    [_checkUp]: dart.fnType(dart.void, []),
    [_checkCancel$]: dart.fnType(dart.void, [core.String]),
    [_reset$]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__gestures__tap.TapGestureRecognizer, () => ({
    __proto__: dart.getGetters(src__gestures__tap.TapGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(src__gestures__tap.TapGestureRecognizer, "package:flutter_web/src/gestures/tap.dart");
  dart.setFieldSignature(src__gestures__tap.TapGestureRecognizer, () => ({
    __proto__: dart.getFields(src__gestures__tap.TapGestureRecognizer.__proto__),
    onTapDown: dart.fieldType(TapDownDetailsTovoid()),
    onTapUp: dart.fieldType(TapUpDetailsTovoid()),
    onTap: dart.fieldType(VoidTovoid()),
    onTapCancel: dart.fieldType(VoidTovoid()),
    onSecondaryTapDown: dart.fieldType(TapDownDetailsTovoid()),
    onSecondaryTapUp: dart.fieldType(TapUpDetailsTovoid()),
    onSecondaryTapCancel: dart.fieldType(VoidTovoid()),
    [_sentTapDown]: dart.fieldType(core.bool),
    [_wonArenaForPrimaryPointer]: dart.fieldType(core.bool),
    [_finalPosition]: dart.fieldType(ui$.Offset),
    [_initialButtons$0]: dart.fieldType(core.int)
  }));
  const _timeout = dart.privateName(src__gestures__multitap, "_timeout");
  const _timer$0 = dart.privateName(src__gestures__multitap, "_timer");
  const _onTimeout = dart.privateName(src__gestures__multitap, "_onTimeout");
  src__gestures__multitap._CountdownZoned = class _CountdownZoned extends core.Object {
    get timeout() {
      return this[_timeout];
    }
    [_onTimeout]() {
      this[_timeout] = true;
    }
  };
  (src__gestures__multitap._CountdownZoned.new = function(opts) {
    let duration = opts && 'duration' in opts ? opts.duration : null;
    this[_timeout] = false;
    this[_timer$0] = null;
    if (!(duration != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multitap.dart", 46, 59, "duration != null");
    this[_timer$0] = async.Timer.new(duration, dart.bind(this, _onTimeout));
  }).prototype = src__gestures__multitap._CountdownZoned.prototype;
  dart.addTypeTests(src__gestures__multitap._CountdownZoned);
  dart.setMethodSignature(src__gestures__multitap._CountdownZoned, () => ({
    __proto__: dart.getMethods(src__gestures__multitap._CountdownZoned.__proto__),
    [_onTimeout]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__gestures__multitap._CountdownZoned, () => ({
    __proto__: dart.getGetters(src__gestures__multitap._CountdownZoned.__proto__),
    timeout: core.bool
  }));
  dart.setLibraryUri(src__gestures__multitap._CountdownZoned, "package:flutter_web/src/gestures/multitap.dart");
  dart.setFieldSignature(src__gestures__multitap._CountdownZoned, () => ({
    __proto__: dart.getFields(src__gestures__multitap._CountdownZoned.__proto__),
    [_timeout]: dart.fieldType(core.bool),
    [_timer$0]: dart.fieldType(async.Timer)
  }));
  const _initialPosition$ = dart.privateName(src__gestures__multitap, "_initialPosition");
  const _doubleTapMinTimeCountdown = dart.privateName(src__gestures__multitap, "_doubleTapMinTimeCountdown");
  const _isTrackingPointer = dart.privateName(src__gestures__multitap, "_isTrackingPointer");
  src__gestures__multitap._TapTracker = class _TapTracker extends core.Object {
    startTrackingPointer(route) {
      if (!dart.test(this[_isTrackingPointer])) {
        this[_isTrackingPointer] = true;
        src__gestures__binding.GestureBinding.instance.pointerRouter.addRoute(this.pointer, route);
      }
    }
    stopTrackingPointer(route) {
      if (dart.test(this[_isTrackingPointer])) {
        this[_isTrackingPointer] = false;
        src__gestures__binding.GestureBinding.instance.pointerRouter.removeRoute(this.pointer, route);
      }
    }
    isWithinTolerance(event, tolerance) {
      let offset = event.position['-'](this[_initialPosition$]);
      return dart.notNull(offset.distance) <= dart.notNull(tolerance);
    }
    hasElapsedMinTime() {
      return this[_doubleTapMinTimeCountdown].timeout;
    }
    hasSameButton(event) {
      return event.buttons == this.initialButtons;
    }
  };
  (src__gestures__multitap._TapTracker.new = function(opts) {
    let event = opts && 'event' in opts ? opts.event : null;
    let entry = opts && 'entry' in opts ? opts.entry : null;
    let doubleTapMinTime = opts && 'doubleTapMinTime' in opts ? opts.doubleTapMinTime : null;
    this[_isTrackingPointer] = false;
    this.entry = entry;
    if (!(doubleTapMinTime != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multitap.dart", 67, 16, "doubleTapMinTime != null");
    if (!(event != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multitap.dart", 68, 16, "event != null");
    if (!(event.buttons != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multitap.dart", 69, 16, "event.buttons != null");
    this.pointer = event.pointer;
    this[_initialPosition$] = event.position;
    this.initialButtons = event.buttons;
    this[_doubleTapMinTimeCountdown] = new src__gestures__multitap._CountdownZoned.new({duration: doubleTapMinTime});
  }).prototype = src__gestures__multitap._TapTracker.prototype;
  dart.addTypeTests(src__gestures__multitap._TapTracker);
  dart.setMethodSignature(src__gestures__multitap._TapTracker, () => ({
    __proto__: dart.getMethods(src__gestures__multitap._TapTracker.__proto__),
    startTrackingPointer: dart.fnType(dart.void, [dart.fnType(dart.void, [src__gestures__events.PointerEvent])]),
    stopTrackingPointer: dart.fnType(dart.void, [dart.fnType(dart.void, [src__gestures__events.PointerEvent])]),
    isWithinTolerance: dart.fnType(core.bool, [src__gestures__events.PointerEvent, core.double]),
    hasElapsedMinTime: dart.fnType(core.bool, []),
    hasSameButton: dart.fnType(core.bool, [src__gestures__events.PointerDownEvent])
  }));
  dart.setLibraryUri(src__gestures__multitap._TapTracker, "package:flutter_web/src/gestures/multitap.dart");
  dart.setFieldSignature(src__gestures__multitap._TapTracker, () => ({
    __proto__: dart.getFields(src__gestures__multitap._TapTracker.__proto__),
    pointer: dart.finalFieldType(core.int),
    entry: dart.finalFieldType(src__gestures__arena.GestureArenaEntry),
    [_initialPosition$]: dart.finalFieldType(ui$.Offset),
    initialButtons: dart.finalFieldType(core.int),
    [_doubleTapMinTimeCountdown]: dart.finalFieldType(src__gestures__multitap._CountdownZoned),
    [_isTrackingPointer]: dart.fieldType(core.bool)
  }));
  const _doubleTapTimer = dart.privateName(src__gestures__multitap, "_doubleTapTimer");
  const _firstTap = dart.privateName(src__gestures__multitap, "_firstTap");
  const _trackers = dart.privateName(src__gestures__multitap, "_trackers");
  const _reset$0 = dart.privateName(src__gestures__multitap, "_reset");
  const _trackFirstTap = dart.privateName(src__gestures__multitap, "_trackFirstTap");
  const _stopDoubleTapTimer = dart.privateName(src__gestures__multitap, "_stopDoubleTapTimer");
  const _handleEvent$0 = dart.privateName(src__gestures__multitap, "_handleEvent");
  const _registerFirstTap = dart.privateName(src__gestures__multitap, "_registerFirstTap");
  const _registerSecondTap = dart.privateName(src__gestures__multitap, "_registerSecondTap");
  const _reject = dart.privateName(src__gestures__multitap, "_reject");
  const _freezeTracker = dart.privateName(src__gestures__multitap, "_freezeTracker");
  const _clearTrackers = dart.privateName(src__gestures__multitap, "_clearTrackers");
  const _startDoubleTapTimer = dart.privateName(src__gestures__multitap, "_startDoubleTapTimer");
  const _checkUp$ = dart.privateName(src__gestures__multitap, "_checkUp");
  src__gestures__multitap.DoubleTapGestureRecognizer = class DoubleTapGestureRecognizer extends src__gestures__recognizer.GestureRecognizer {
    get onDoubleTap() {
      return this[onDoubleTap];
    }
    set onDoubleTap(value) {
      this[onDoubleTap] = value;
    }
    isPointerAllowed(event) {
      if (this[_firstTap] == null) {
        switch (event.buttons) {
          case 1:
          {
            if (this.onDoubleTap == null) return false;
            break;
          }
          default:
          {
            return false;
          }
        }
      }
      return super.isPointerAllowed(src__gestures__events.PointerDownEvent._check(event));
    }
    addAllowedPointer(event) {
      if (this[_firstTap] != null) {
        if (!dart.test(this[_firstTap].isWithinTolerance(event, 100.0))) {
          return;
        } else if (!dart.test(this[_firstTap].hasElapsedMinTime()) || !dart.test(this[_firstTap].hasSameButton(src__gestures__events.PointerDownEvent._check(event)))) {
          this[_reset$0]();
          return this[_trackFirstTap](event);
        }
      }
      this[_trackFirstTap](event);
    }
    [_trackFirstTap](event) {
      this[_stopDoubleTapTimer]();
      let tracker = new src__gestures__multitap._TapTracker.new({event: src__gestures__events.PointerDownEvent._check(event), entry: src__gestures__binding.GestureBinding.instance.gestureArena.add(event.pointer, this), doubleTapMinTime: src__gestures__constants.kDoubleTapMinTime});
      this[_trackers][$_set](event.pointer, tracker);
      tracker.startTrackingPointer(dart.bind(this, _handleEvent$0));
    }
    [_handleEvent$0](event) {
      let tracker = this[_trackers][$_get](event.pointer);
      if (!(tracker != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multitap.dart", 206, 12, "tracker != null");
      if (src__gestures__events.PointerUpEvent.is(event)) {
        if (this[_firstTap] == null)
          this[_registerFirstTap](tracker);
        else
          this[_registerSecondTap](tracker);
      } else if (src__gestures__events.PointerMoveEvent.is(event)) {
        if (!dart.test(tracker.isWithinTolerance(event, 18.0))) this[_reject](tracker);
      } else if (src__gestures__events.PointerCancelEvent.is(event)) {
        this[_reject](tracker);
      }
    }
    acceptGesture(pointer) {}
    rejectGesture(pointer) {
      let tracker = this[_trackers][$_get](pointer);
      if (tracker == null && this[_firstTap] != null && this[_firstTap].pointer == pointer) tracker = this[_firstTap];
      if (tracker != null) this[_reject](tracker);
    }
    [_reject](tracker) {
      this[_trackers][$remove](tracker.pointer);
      tracker.entry.resolve(src__gestures__arena.GestureDisposition.rejected);
      this[_freezeTracker](tracker);
      if (this[_firstTap] != null && (dart.test(this[_trackers][$isEmpty]) || dart.equals(tracker, this[_firstTap]))) this[_reset$0]();
    }
    dispose() {
      this[_reset$0]();
      super.dispose();
    }
    [_reset$0]() {
      this[_stopDoubleTapTimer]();
      if (this[_firstTap] != null) {
        let tracker = this[_firstTap];
        this[_firstTap] = null;
        this[_reject](tracker);
        src__gestures__binding.GestureBinding.instance.gestureArena.release(tracker.pointer);
      }
      this[_clearTrackers]();
    }
    [_registerFirstTap](tracker) {
      this[_startDoubleTapTimer]();
      src__gestures__binding.GestureBinding.instance.gestureArena.hold(tracker.pointer);
      this[_freezeTracker](tracker);
      this[_trackers][$remove](tracker.pointer);
      this[_clearTrackers]();
      this[_firstTap] = tracker;
    }
    [_registerSecondTap](tracker) {
      this[_firstTap].entry.resolve(src__gestures__arena.GestureDisposition.accepted);
      tracker.entry.resolve(src__gestures__arena.GestureDisposition.accepted);
      this[_freezeTracker](tracker);
      this[_trackers][$remove](tracker.pointer);
      this[_checkUp$](tracker.initialButtons);
      this[_reset$0]();
    }
    [_clearTrackers]() {
      this[_trackers][$values][$toList]()[$forEach](dart.bind(this, _reject));
      if (!dart.test(this[_trackers][$isEmpty])) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multitap.dart", 285, 12, "_trackers.isEmpty");
    }
    [_freezeTracker](tracker) {
      tracker.stopTrackingPointer(dart.bind(this, _handleEvent$0));
    }
    [_startDoubleTapTimer]() {
      let t = this[_doubleTapTimer];
      t == null ? this[_doubleTapTimer] = async.Timer.new(src__gestures__constants.kDoubleTapTimeout, dart.bind(this, _reset$0)) : t;
    }
    [_stopDoubleTapTimer]() {
      if (this[_doubleTapTimer] != null) {
        this[_doubleTapTimer].cancel();
        this[_doubleTapTimer] = null;
      }
    }
    [_checkUp$](buttons) {
      if (!(buttons === 1)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multitap.dart", 304, 12, "buttons == kPrimaryButton");
      if (this.onDoubleTap != null) this.invokeCallback(dart.void, "onDoubleTap", this.onDoubleTap);
    }
    get debugDescription() {
      return "double tap";
    }
  };
  (src__gestures__multitap.DoubleTapGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[onDoubleTap] = null;
    this[_doubleTapTimer] = null;
    this[_firstTap] = null;
    this[_trackers] = new (IdentityMapOfint$_TapTracker()).new();
    src__gestures__multitap.DoubleTapGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
  }).prototype = src__gestures__multitap.DoubleTapGestureRecognizer.prototype;
  dart.addTypeTests(src__gestures__multitap.DoubleTapGestureRecognizer);
  const onDoubleTap = Symbol("DoubleTapGestureRecognizer.onDoubleTap");
  dart.setMethodSignature(src__gestures__multitap.DoubleTapGestureRecognizer, () => ({
    __proto__: dart.getMethods(src__gestures__multitap.DoubleTapGestureRecognizer.__proto__),
    isPointerAllowed: dart.fnType(core.bool, [src__gestures__events.PointerEvent]),
    addAllowedPointer: dart.fnType(dart.void, [src__gestures__events.PointerEvent]),
    [_trackFirstTap]: dart.fnType(dart.void, [src__gestures__events.PointerEvent]),
    [_handleEvent$0]: dart.fnType(dart.void, [src__gestures__events.PointerEvent]),
    acceptGesture: dart.fnType(dart.void, [core.int]),
    rejectGesture: dart.fnType(dart.void, [core.int]),
    [_reject]: dart.fnType(dart.void, [src__gestures__multitap._TapTracker]),
    [_reset$0]: dart.fnType(dart.void, []),
    [_registerFirstTap]: dart.fnType(dart.void, [src__gestures__multitap._TapTracker]),
    [_registerSecondTap]: dart.fnType(dart.void, [src__gestures__multitap._TapTracker]),
    [_clearTrackers]: dart.fnType(dart.void, []),
    [_freezeTracker]: dart.fnType(dart.void, [src__gestures__multitap._TapTracker]),
    [_startDoubleTapTimer]: dart.fnType(dart.void, []),
    [_stopDoubleTapTimer]: dart.fnType(dart.void, []),
    [_checkUp$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(src__gestures__multitap.DoubleTapGestureRecognizer, () => ({
    __proto__: dart.getGetters(src__gestures__multitap.DoubleTapGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(src__gestures__multitap.DoubleTapGestureRecognizer, "package:flutter_web/src/gestures/multitap.dart");
  dart.setFieldSignature(src__gestures__multitap.DoubleTapGestureRecognizer, () => ({
    __proto__: dart.getFields(src__gestures__multitap.DoubleTapGestureRecognizer.__proto__),
    onDoubleTap: dart.fieldType(VoidTovoid()),
    [_doubleTapTimer]: dart.fieldType(async.Timer),
    [_firstTap]: dart.fieldType(src__gestures__multitap._TapTracker),
    [_trackers]: dart.finalFieldType(MapOfint$_TapTracker())
  }));
  const _lastPosition$ = dart.privateName(src__gestures__multitap, "_lastPosition");
  const _wonArena = dart.privateName(src__gestures__multitap, "_wonArena");
  const _finalPosition$ = dart.privateName(src__gestures__multitap, "_finalPosition");
  const _dispatchLongTap = dart.privateName(src__gestures__multitap, "_dispatchLongTap");
  const _check = dart.privateName(src__gestures__multitap, "_check");
  const _dispatchCancel = dart.privateName(src__gestures__multitap, "_dispatchCancel");
  const _dispatchTap = dart.privateName(src__gestures__multitap, "_dispatchTap");
  src__gestures__multitap._TapGesture = class _TapGesture extends src__gestures__multitap._TapTracker {
    handleEvent(event) {
      if (!(event.pointer == this.pointer)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multitap.dart", 345, 12, "event.pointer == pointer");
      if (src__gestures__events.PointerMoveEvent.is(event)) {
        if (!dart.test(this.isWithinTolerance(event, 18.0)))
          this.cancel();
        else
          this[_lastPosition$] = event.position;
      } else if (src__gestures__events.PointerCancelEvent.is(event)) {
        this.cancel();
      } else if (src__gestures__events.PointerUpEvent.is(event)) {
        this.stopTrackingPointer(dart.bind(this, 'handleEvent'));
        this[_finalPosition$] = event.position;
        this[_check]();
      }
    }
    stopTrackingPointer(route) {
      let t = this[_timer$0];
      t == null ? null : t.cancel();
      this[_timer$0] = null;
      super.stopTrackingPointer(route);
    }
    accept() {
      this[_wonArena] = true;
      this[_check]();
    }
    reject() {
      this.stopTrackingPointer(dart.bind(this, 'handleEvent'));
      this.gestureRecognizer[_dispatchCancel](this.pointer);
    }
    cancel() {
      if (dart.test(this[_wonArena]))
        this.reject();
      else
        this.entry.resolve(src__gestures__arena.GestureDisposition.rejected);
    }
    [_check]() {
      if (dart.test(this[_wonArena]) && this[_finalPosition$] != null) this.gestureRecognizer[_dispatchTap](this.pointer, this[_finalPosition$]);
    }
  };
  (src__gestures__multitap._TapGesture.new = function(opts) {
    let gestureRecognizer = opts && 'gestureRecognizer' in opts ? opts.gestureRecognizer : null;
    let event = opts && 'event' in opts ? opts.event : null;
    let longTapDelay = opts && 'longTapDelay' in opts ? opts.longTapDelay : null;
    this[_wonArena] = false;
    this[_timer$0] = null;
    this[_finalPosition$] = null;
    this.gestureRecognizer = gestureRecognizer;
    this[_lastPosition$] = event.position;
    src__gestures__multitap._TapGesture.__proto__.new.call(this, {event: src__gestures__events.PointerDownEvent._check(event), entry: src__gestures__binding.GestureBinding.instance.gestureArena.add(event.pointer, gestureRecognizer), doubleTapMinTime: src__gestures__constants.kDoubleTapMinTime});
    this.startTrackingPointer(dart.bind(this, 'handleEvent'));
    if (dart.test(longTapDelay['>'](core.Duration.zero))) {
      this[_timer$0] = async.Timer.new(longTapDelay, dart.fn(() => {
        this[_timer$0] = null;
        this.gestureRecognizer[_dispatchLongTap](event.pointer, this[_lastPosition$]);
      }, VoidToNull()));
    }
  }).prototype = src__gestures__multitap._TapGesture.prototype;
  dart.addTypeTests(src__gestures__multitap._TapGesture);
  dart.setMethodSignature(src__gestures__multitap._TapGesture, () => ({
    __proto__: dart.getMethods(src__gestures__multitap._TapGesture.__proto__),
    handleEvent: dart.fnType(dart.void, [src__gestures__events.PointerEvent]),
    accept: dart.fnType(dart.void, []),
    reject: dart.fnType(dart.void, []),
    cancel: dart.fnType(dart.void, []),
    [_check]: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(src__gestures__multitap._TapGesture, "package:flutter_web/src/gestures/multitap.dart");
  dart.setFieldSignature(src__gestures__multitap._TapGesture, () => ({
    __proto__: dart.getFields(src__gestures__multitap._TapGesture.__proto__),
    gestureRecognizer: dart.finalFieldType(src__gestures__multitap.MultiTapGestureRecognizer),
    [_wonArena]: dart.fieldType(core.bool),
    [_timer$0]: dart.fieldType(async.Timer),
    [_lastPosition$]: dart.fieldType(ui$.Offset),
    [_finalPosition$]: dart.fieldType(ui$.Offset)
  }));
  const _gestureMap = dart.privateName(src__gestures__multitap, "_gestureMap");
  src__gestures__multitap.MultiTapGestureRecognizer = class MultiTapGestureRecognizer extends src__gestures__recognizer.GestureRecognizer {
    get onTapDown() {
      return this[onTapDown$];
    }
    set onTapDown(value) {
      this[onTapDown$] = value;
    }
    get onTapUp() {
      return this[onTapUp$];
    }
    set onTapUp(value) {
      this[onTapUp$] = value;
    }
    get onTap() {
      return this[onTap$];
    }
    set onTap(value) {
      this[onTap$] = value;
    }
    get onTapCancel() {
      return this[onTapCancel$];
    }
    set onTapCancel(value) {
      this[onTapCancel$] = value;
    }
    get longTapDelay() {
      return this[longTapDelay$];
    }
    set longTapDelay(value) {
      this[longTapDelay$] = value;
    }
    get onLongTapDown() {
      return this[onLongTapDown];
    }
    set onLongTapDown(value) {
      this[onLongTapDown] = value;
    }
    addAllowedPointer(event) {
      if (!!dart.test(this[_gestureMap][$containsKey](event.pointer))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multitap.dart", 438, 12, "!_gestureMap.containsKey(event.pointer)");
      this[_gestureMap][$_set](event.pointer, new src__gestures__multitap._TapGesture.new({gestureRecognizer: this, event: event, longTapDelay: this.longTapDelay}));
      if (this.onTapDown != null) this.invokeCallback(dart.void, "onTapDown", dart.fn(() => {
        this.onTapDown(event.pointer, new src__gestures__tap.TapDownDetails.new({globalPosition: event.position, kind: event.kind}));
      }, VoidToNull()));
    }
    acceptGesture(pointer) {
      if (!dart.test(this[_gestureMap][$containsKey](pointer))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multitap.dart", 457, 12, "_gestureMap.containsKey(pointer)");
      this[_gestureMap][$_get](pointer).accept();
    }
    rejectGesture(pointer) {
      if (!dart.test(this[_gestureMap][$containsKey](pointer))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multitap.dart", 463, 12, "_gestureMap.containsKey(pointer)");
      this[_gestureMap][$_get](pointer).reject();
      if (!!dart.test(this[_gestureMap][$containsKey](pointer))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multitap.dart", 465, 12, "!_gestureMap.containsKey(pointer)");
    }
    [_dispatchCancel](pointer) {
      if (!dart.test(this[_gestureMap][$containsKey](pointer))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multitap.dart", 469, 12, "_gestureMap.containsKey(pointer)");
      this[_gestureMap][$remove](pointer);
      if (this.onTapCancel != null) this.invokeCallback(dart.void, "onTapCancel", dart.fn(() => this.onTapCancel(pointer), VoidTovoid()));
    }
    [_dispatchTap](pointer, globalPosition) {
      if (!dart.test(this[_gestureMap][$containsKey](pointer))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multitap.dart", 476, 12, "_gestureMap.containsKey(pointer)");
      this[_gestureMap][$remove](pointer);
      if (this.onTapUp != null) this.invokeCallback(dart.void, "onTapUp", dart.fn(() => this.onTapUp(pointer, new src__gestures__tap.TapUpDetails.new({globalPosition: globalPosition})), VoidTovoid()));
      if (this.onTap != null) this.invokeCallback(dart.void, "onTap", dart.fn(() => this.onTap(pointer), VoidTovoid()));
    }
    [_dispatchLongTap](pointer, lastPosition) {
      if (!dart.test(this[_gestureMap][$containsKey](pointer))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multitap.dart", 485, 12, "_gestureMap.containsKey(pointer)");
      if (this.onLongTapDown != null) this.invokeCallback(dart.void, "onLongTapDown", dart.fn(() => {
        this.onLongTapDown(pointer, new src__gestures__tap.TapDownDetails.new({globalPosition: lastPosition, kind: this.getKindForPointer(pointer)}));
      }, VoidToNull()));
    }
    dispose() {
      let localGestures = ListOf_TapGesture().from(this[_gestureMap][$values]);
      for (let gesture of localGestures)
        gesture.cancel();
      if (!dart.test(this[_gestureMap][$isEmpty])) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/multitap.dart", 504, 12, "_gestureMap.isEmpty");
      super.dispose();
    }
    get debugDescription() {
      return "multitap";
    }
  };
  (src__gestures__multitap.MultiTapGestureRecognizer.new = function(opts) {
    let longTapDelay = opts && 'longTapDelay' in opts ? opts.longTapDelay : core.Duration.zero;
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[onTapDown$] = null;
    this[onTapUp$] = null;
    this[onTap$] = null;
    this[onTapCancel$] = null;
    this[onLongTapDown] = null;
    this[_gestureMap] = new (IdentityMapOfint$_TapGesture()).new();
    this[longTapDelay$] = longTapDelay;
    src__gestures__multitap.MultiTapGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
  }).prototype = src__gestures__multitap.MultiTapGestureRecognizer.prototype;
  dart.addTypeTests(src__gestures__multitap.MultiTapGestureRecognizer);
  const onTapDown$ = Symbol("MultiTapGestureRecognizer.onTapDown");
  const onTapUp$ = Symbol("MultiTapGestureRecognizer.onTapUp");
  const onTap$ = Symbol("MultiTapGestureRecognizer.onTap");
  const onTapCancel$ = Symbol("MultiTapGestureRecognizer.onTapCancel");
  const longTapDelay$ = Symbol("MultiTapGestureRecognizer.longTapDelay");
  const onLongTapDown = Symbol("MultiTapGestureRecognizer.onLongTapDown");
  dart.setMethodSignature(src__gestures__multitap.MultiTapGestureRecognizer, () => ({
    __proto__: dart.getMethods(src__gestures__multitap.MultiTapGestureRecognizer.__proto__),
    addAllowedPointer: dart.fnType(dart.void, [src__gestures__events.PointerEvent]),
    acceptGesture: dart.fnType(dart.void, [core.int]),
    rejectGesture: dart.fnType(dart.void, [core.int]),
    [_dispatchCancel]: dart.fnType(dart.void, [core.int]),
    [_dispatchTap]: dart.fnType(dart.void, [core.int, ui$.Offset]),
    [_dispatchLongTap]: dart.fnType(dart.void, [core.int, ui$.Offset])
  }));
  dart.setGetterSignature(src__gestures__multitap.MultiTapGestureRecognizer, () => ({
    __proto__: dart.getGetters(src__gestures__multitap.MultiTapGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(src__gestures__multitap.MultiTapGestureRecognizer, "package:flutter_web/src/gestures/multitap.dart");
  dart.setFieldSignature(src__gestures__multitap.MultiTapGestureRecognizer, () => ({
    __proto__: dart.getFields(src__gestures__multitap.MultiTapGestureRecognizer.__proto__),
    onTapDown: dart.fieldType(intAndTapDownDetailsTovoid()),
    onTapUp: dart.fieldType(intAndTapUpDetailsTovoid()),
    onTap: dart.fieldType(intTovoid()),
    onTapCancel: dart.fieldType(intTovoid()),
    longTapDelay: dart.fieldType(core.Duration),
    onLongTapDown: dart.fieldType(intAndTapDownDetailsTovoid()),
    [_gestureMap]: dart.finalFieldType(MapOfint$_TapGesture())
  }));
  src__gestures__scale._ScaleState = class _ScaleState extends core.Object {
    toString() {
      return {
        0: "_ScaleState.ready",
        1: "_ScaleState.possible",
        2: "_ScaleState.accepted",
        3: "_ScaleState.started"
      }[this.index];
    }
  };
  (src__gestures__scale._ScaleState.new = function(x) {
    this.index = x;
  }).prototype = src__gestures__scale._ScaleState.prototype;
  dart.addTypeTests(src__gestures__scale._ScaleState);
  dart.setLibraryUri(src__gestures__scale._ScaleState, "package:flutter_web/src/gestures/scale.dart");
  dart.setFieldSignature(src__gestures__scale._ScaleState, () => ({
    __proto__: dart.getFields(src__gestures__scale._ScaleState.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__gestures__scale._ScaleState, ['toString']);
  src__gestures__scale._ScaleState.ready = dart.const(new src__gestures__scale._ScaleState.new(0));
  src__gestures__scale._ScaleState.possible = dart.const(new src__gestures__scale._ScaleState.new(1));
  src__gestures__scale._ScaleState.accepted = dart.const(new src__gestures__scale._ScaleState.new(2));
  src__gestures__scale._ScaleState.started = dart.const(new src__gestures__scale._ScaleState.new(3));
  src__gestures__scale._ScaleState.values = dart.constList([src__gestures__scale._ScaleState.ready, src__gestures__scale._ScaleState.possible, src__gestures__scale._ScaleState.accepted, src__gestures__scale._ScaleState.started], src__gestures__scale._ScaleState);
  src__gestures__scale.ScaleStartDetails = class ScaleStartDetails extends core.Object {
    get focalPoint() {
      return this[focalPoint$];
    }
    set focalPoint(value) {
      super.focalPoint = value;
    }
    toString() {
      return "ScaleStartDetails(focalPoint: " + dart.str(this.focalPoint) + ")";
    }
  };
  (src__gestures__scale.ScaleStartDetails.new = function(opts) {
    let focalPoint = opts && 'focalPoint' in opts ? opts.focalPoint : ui$.Offset.zero;
    this[focalPoint$] = focalPoint;
    if (!(focalPoint != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/scale.dart", 38, 16, "focalPoint != null");
  }).prototype = src__gestures__scale.ScaleStartDetails.prototype;
  dart.addTypeTests(src__gestures__scale.ScaleStartDetails);
  const focalPoint$ = Symbol("ScaleStartDetails.focalPoint");
  dart.setLibraryUri(src__gestures__scale.ScaleStartDetails, "package:flutter_web/src/gestures/scale.dart");
  dart.setFieldSignature(src__gestures__scale.ScaleStartDetails, () => ({
    __proto__: dart.getFields(src__gestures__scale.ScaleStartDetails.__proto__),
    focalPoint: dart.finalFieldType(ui$.Offset)
  }));
  dart.defineExtensionMethods(src__gestures__scale.ScaleStartDetails, ['toString']);
  src__gestures__scale.ScaleUpdateDetails = class ScaleUpdateDetails extends core.Object {
    get focalPoint() {
      return this[focalPoint$0];
    }
    set focalPoint(value) {
      super.focalPoint = value;
    }
    get scale() {
      return this[scale$];
    }
    set scale(value) {
      super.scale = value;
    }
    get horizontalScale() {
      return this[horizontalScale$];
    }
    set horizontalScale(value) {
      super.horizontalScale = value;
    }
    get verticalScale() {
      return this[verticalScale$];
    }
    set verticalScale(value) {
      super.verticalScale = value;
    }
    get rotation() {
      return this[rotation$];
    }
    set rotation(value) {
      super.rotation = value;
    }
    toString() {
      return "ScaleUpdateDetails(focalPoint: " + dart.str(this.focalPoint) + ", scale: " + dart.str(this.scale) + ", horizontalScale: " + dart.str(this.horizontalScale) + ", verticalScale: " + dart.str(this.verticalScale) + ", rotation: " + dart.str(this.rotation) + ")";
    }
  };
  (src__gestures__scale.ScaleUpdateDetails.new = function(opts) {
    let focalPoint = opts && 'focalPoint' in opts ? opts.focalPoint : ui$.Offset.zero;
    let scale = opts && 'scale' in opts ? opts.scale : 1.0;
    let horizontalScale = opts && 'horizontalScale' in opts ? opts.horizontalScale : 1.0;
    let verticalScale = opts && 'verticalScale' in opts ? opts.verticalScale : 1.0;
    let rotation = opts && 'rotation' in opts ? opts.rotation : 0.0;
    this[focalPoint$0] = focalPoint;
    this[scale$] = scale;
    this[horizontalScale$] = horizontalScale;
    this[verticalScale$] = verticalScale;
    this[rotation$] = rotation;
    if (!(focalPoint != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/scale.dart", 61, 16, "focalPoint != null");
    if (!(scale != null && dart.notNull(scale) >= 0.0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/scale.dart", 62, 16, "scale != null && scale >= 0.0");
    if (!(horizontalScale != null && dart.notNull(horizontalScale) >= 0.0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/scale.dart", 63, 16, "horizontalScale != null && horizontalScale >= 0.0");
    if (!(verticalScale != null && dart.notNull(verticalScale) >= 0.0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/scale.dart", 64, 16, "verticalScale != null && verticalScale >= 0.0");
    if (!(rotation != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/scale.dart", 65, 16, "rotation != null");
  }).prototype = src__gestures__scale.ScaleUpdateDetails.prototype;
  dart.addTypeTests(src__gestures__scale.ScaleUpdateDetails);
  const focalPoint$0 = Symbol("ScaleUpdateDetails.focalPoint");
  const scale$ = Symbol("ScaleUpdateDetails.scale");
  const horizontalScale$ = Symbol("ScaleUpdateDetails.horizontalScale");
  const verticalScale$ = Symbol("ScaleUpdateDetails.verticalScale");
  const rotation$ = Symbol("ScaleUpdateDetails.rotation");
  dart.setLibraryUri(src__gestures__scale.ScaleUpdateDetails, "package:flutter_web/src/gestures/scale.dart");
  dart.setFieldSignature(src__gestures__scale.ScaleUpdateDetails, () => ({
    __proto__: dart.getFields(src__gestures__scale.ScaleUpdateDetails.__proto__),
    focalPoint: dart.finalFieldType(ui$.Offset),
    scale: dart.finalFieldType(core.double),
    horizontalScale: dart.finalFieldType(core.double),
    verticalScale: dart.finalFieldType(core.double),
    rotation: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(src__gestures__scale.ScaleUpdateDetails, ['toString']);
  src__gestures__scale.ScaleEndDetails = class ScaleEndDetails extends core.Object {
    get velocity() {
      return this[velocity$0];
    }
    set velocity(value) {
      super.velocity = value;
    }
    toString() {
      return "ScaleEndDetails(velocity: " + dart.str(this.velocity) + ")";
    }
  };
  (src__gestures__scale.ScaleEndDetails.new = function(opts) {
    let velocity = opts && 'velocity' in opts ? opts.velocity : src__gestures__velocity_tracker.Velocity.zero;
    this[velocity$0] = velocity;
    if (!(velocity != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/scale.dart", 121, 61, "velocity != null");
  }).prototype = src__gestures__scale.ScaleEndDetails.prototype;
  dart.addTypeTests(src__gestures__scale.ScaleEndDetails);
  const velocity$0 = Symbol("ScaleEndDetails.velocity");
  dart.setLibraryUri(src__gestures__scale.ScaleEndDetails, "package:flutter_web/src/gestures/scale.dart");
  dart.setFieldSignature(src__gestures__scale.ScaleEndDetails, () => ({
    __proto__: dart.getFields(src__gestures__scale.ScaleEndDetails.__proto__),
    velocity: dart.finalFieldType(src__gestures__velocity_tracker.Velocity)
  }));
  dart.defineExtensionMethods(src__gestures__scale.ScaleEndDetails, ['toString']);
  src__gestures__scale._isFlingGesture = function(velocity) {
    if (!(velocity != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/scale.dart", 142, 10, "velocity != null");
    let speedSquared = velocity.pixelsPerSecond.distanceSquared;
    return dart.notNull(speedSquared) > 50.0 * 50.0;
  };
  src__gestures__scale._LineBetweenPointers = class _LineBetweenPointers extends core.Object {};
  (src__gestures__scale._LineBetweenPointers.new = function(opts) {
    let pointerStartLocation = opts && 'pointerStartLocation' in opts ? opts.pointerStartLocation : ui$.Offset.zero;
    let pointerStartId = opts && 'pointerStartId' in opts ? opts.pointerStartId : 0;
    let pointerEndLocation = opts && 'pointerEndLocation' in opts ? opts.pointerEndLocation : ui$.Offset.zero;
    let pointerEndId = opts && 'pointerEndId' in opts ? opts.pointerEndId : 1;
    this.pointerStartLocation = pointerStartLocation;
    this.pointerStartId = pointerStartId;
    this.pointerEndLocation = pointerEndLocation;
    this.pointerEndId = pointerEndId;
    if (!(pointerStartLocation != null && pointerEndLocation != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/scale.dart", 160, 16, "pointerStartLocation != null && pointerEndLocation != null");
    if (!(pointerStartId != null && pointerEndId != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/scale.dart", 161, 16, "pointerStartId != null && pointerEndId != null");
    if (!(pointerStartId != pointerEndId)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/scale.dart", 162, 16, "pointerStartId != pointerEndId");
  }).prototype = src__gestures__scale._LineBetweenPointers.prototype;
  dart.addTypeTests(src__gestures__scale._LineBetweenPointers);
  dart.setLibraryUri(src__gestures__scale._LineBetweenPointers, "package:flutter_web/src/gestures/scale.dart");
  dart.setFieldSignature(src__gestures__scale._LineBetweenPointers, () => ({
    __proto__: dart.getFields(src__gestures__scale._LineBetweenPointers.__proto__),
    pointerStartLocation: dart.finalFieldType(ui$.Offset),
    pointerStartId: dart.finalFieldType(core.int),
    pointerEndLocation: dart.finalFieldType(ui$.Offset),
    pointerEndId: dart.finalFieldType(core.int)
  }));
  const _state$0 = dart.privateName(src__gestures__scale, "_state");
  const _initialFocalPoint = dart.privateName(src__gestures__scale, "_initialFocalPoint");
  const _currentFocalPoint = dart.privateName(src__gestures__scale, "_currentFocalPoint");
  const _initialSpan = dart.privateName(src__gestures__scale, "_initialSpan");
  const _currentSpan = dart.privateName(src__gestures__scale, "_currentSpan");
  const _initialHorizontalSpan = dart.privateName(src__gestures__scale, "_initialHorizontalSpan");
  const _currentHorizontalSpan = dart.privateName(src__gestures__scale, "_currentHorizontalSpan");
  const _initialVerticalSpan = dart.privateName(src__gestures__scale, "_initialVerticalSpan");
  const _currentVerticalSpan = dart.privateName(src__gestures__scale, "_currentVerticalSpan");
  const _initialLine = dart.privateName(src__gestures__scale, "_initialLine");
  const _currentLine = dart.privateName(src__gestures__scale, "_currentLine");
  const _pointerLocations = dart.privateName(src__gestures__scale, "_pointerLocations");
  const _pointerQueue = dart.privateName(src__gestures__scale, "_pointerQueue");
  const _velocityTrackers$ = dart.privateName(src__gestures__scale, "_velocityTrackers");
  const _scaleFactor = dart.privateName(src__gestures__scale, "_scaleFactor");
  const _horizontalScaleFactor = dart.privateName(src__gestures__scale, "_horizontalScaleFactor");
  const _verticalScaleFactor = dart.privateName(src__gestures__scale, "_verticalScaleFactor");
  const _computeRotationFactor = dart.privateName(src__gestures__scale, "_computeRotationFactor");
  const _updateLines = dart.privateName(src__gestures__scale, "_updateLines");
  const _update = dart.privateName(src__gestures__scale, "_update");
  const _reconfigure = dart.privateName(src__gestures__scale, "_reconfigure");
  const _advanceStateMachine = dart.privateName(src__gestures__scale, "_advanceStateMachine");
  const _dispatchOnStartCallbackIfNeeded = dart.privateName(src__gestures__scale, "_dispatchOnStartCallbackIfNeeded");
  src__gestures__scale.ScaleGestureRecognizer = class ScaleGestureRecognizer extends src__gestures__recognizer.OneSequenceGestureRecognizer {
    get onStart() {
      return this[onStart$0];
    }
    set onStart(value) {
      this[onStart$0] = value;
    }
    get onUpdate() {
      return this[onUpdate$0];
    }
    set onUpdate(value) {
      this[onUpdate$0] = value;
    }
    get onEnd() {
      return this[onEnd$0];
    }
    set onEnd(value) {
      this[onEnd$0] = value;
    }
    get [_scaleFactor]() {
      return dart.notNull(this[_initialSpan]) > 0.0 ? dart.notNull(this[_currentSpan]) / dart.notNull(this[_initialSpan]) : 1.0;
    }
    get [_horizontalScaleFactor]() {
      return dart.notNull(this[_initialHorizontalSpan]) > 0.0 ? dart.notNull(this[_currentHorizontalSpan]) / dart.notNull(this[_initialHorizontalSpan]) : 1.0;
    }
    get [_verticalScaleFactor]() {
      return dart.notNull(this[_initialVerticalSpan]) > 0.0 ? dart.notNull(this[_currentVerticalSpan]) / dart.notNull(this[_initialVerticalSpan]) : 1.0;
    }
    [_computeRotationFactor]() {
      if (this[_initialLine] == null || this[_currentLine] == null) {
        return 0.0;
      }
      let fx = this[_initialLine].pointerStartLocation.dx;
      let fy = this[_initialLine].pointerStartLocation.dy;
      let sx = this[_initialLine].pointerEndLocation.dx;
      let sy = this[_initialLine].pointerEndLocation.dy;
      let nfx = this[_currentLine].pointerStartLocation.dx;
      let nfy = this[_currentLine].pointerStartLocation.dy;
      let nsx = this[_currentLine].pointerEndLocation.dx;
      let nsy = this[_currentLine].pointerEndLocation.dy;
      let angle1 = math.atan2(dart.notNull(fy) - dart.notNull(sy), dart.notNull(fx) - dart.notNull(sx));
      let angle2 = math.atan2(dart.notNull(nfy) - dart.notNull(nsy), dart.notNull(nfx) - dart.notNull(nsx));
      return angle2 - angle1;
    }
    addAllowedPointer(event) {
      this.startTrackingPointer(event.pointer);
      this[_velocityTrackers$][$_set](event.pointer, new src__gestures__velocity_tracker.VelocityTracker.new());
      if (this[_state$0] === src__gestures__scale._ScaleState.ready) {
        this[_state$0] = src__gestures__scale._ScaleState.possible;
        this[_initialSpan] = 0.0;
        this[_currentSpan] = 0.0;
        this[_initialHorizontalSpan] = 0.0;
        this[_currentHorizontalSpan] = 0.0;
        this[_initialVerticalSpan] = 0.0;
        this[_currentVerticalSpan] = 0.0;
        this[_pointerLocations] = new (IdentityMapOfint$Offset()).new();
        this[_pointerQueue] = JSArrayOfint().of([]);
      }
    }
    handleEvent(event) {
      if (!(this[_state$0] !== src__gestures__scale._ScaleState.ready)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/scale.dart", 266, 12, "_state != _ScaleState.ready");
      let didChangeConfiguration = false;
      let shouldStartIfAccepted = false;
      if (src__gestures__events.PointerMoveEvent.is(event)) {
        let tracker = this[_velocityTrackers$][$_get](event.pointer);
        if (!(tracker != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/scale.dart", 271, 14, "tracker != null");
        if (!dart.test(event.synthesized)) tracker.addPosition(event.timeStamp, event.position);
        this[_pointerLocations][$_set](event.pointer, event.position);
        shouldStartIfAccepted = true;
      } else if (src__gestures__events.PointerDownEvent.is(event)) {
        this[_pointerLocations][$_set](event.pointer, event.position);
        this[_pointerQueue][$add](event.pointer);
        didChangeConfiguration = true;
        shouldStartIfAccepted = true;
      } else if (src__gestures__events.PointerUpEvent.is(event) || src__gestures__events.PointerCancelEvent.is(event)) {
        this[_pointerLocations][$remove](event.pointer);
        this[_pointerQueue][$remove](event.pointer);
        didChangeConfiguration = true;
      }
      this[_updateLines]();
      this[_update]();
      if (!didChangeConfiguration || dart.test(this[_reconfigure](event.pointer))) this[_advanceStateMachine](shouldStartIfAccepted);
      this.stopTrackingIfPointerNoLongerDown(event);
    }
    [_update]() {
      let count = this[_pointerLocations][$keys][$length];
      let focalPoint = ui$.Offset.zero;
      for (let pointer of this[_pointerLocations][$keys]) {
        focalPoint = focalPoint['+'](this[_pointerLocations][$_get](pointer));
      }
      this[_currentFocalPoint] = dart.notNull(count) > 0 ? focalPoint['/'](count[$toDouble]()) : ui$.Offset.zero;
      let totalDeviation = 0.0;
      let totalHorizontalDeviation = 0.0;
      let totalVerticalDeviation = 0.0;
      for (let pointer of this[_pointerLocations][$keys]) {
        totalDeviation = totalDeviation + dart.notNull(this[_currentFocalPoint]['-'](this[_pointerLocations][$_get](pointer)).distance);
        totalHorizontalDeviation = totalHorizontalDeviation + (dart.notNull(this[_currentFocalPoint].dx) - dart.notNull(this[_pointerLocations][$_get](pointer).dx))[$abs]();
        totalVerticalDeviation = totalVerticalDeviation + (dart.notNull(this[_currentFocalPoint].dy) - dart.notNull(this[_pointerLocations][$_get](pointer).dy))[$abs]();
      }
      this[_currentSpan] = dart.notNull(count) > 0 ? totalDeviation / dart.notNull(count) : 0.0;
      this[_currentHorizontalSpan] = dart.notNull(count) > 0 ? totalHorizontalDeviation / dart.notNull(count) : 0.0;
      this[_currentVerticalSpan] = dart.notNull(count) > 0 ? totalVerticalDeviation / dart.notNull(count) : 0.0;
    }
    [_updateLines]() {
      let count = this[_pointerLocations][$keys][$length];
      if (!(dart.notNull(this[_pointerQueue][$length]) >= dart.notNull(count))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/scale.dart", 328, 12, "_pointerQueue.length >= count");
      if (dart.notNull(count) < 2) {
        this[_initialLine] = this[_currentLine];
      } else if (this[_initialLine] != null && this[_initialLine].pointerStartId == this[_pointerQueue][$_get](0) && this[_initialLine].pointerEndId == this[_pointerQueue][$_get](1)) {
        this[_currentLine] = new src__gestures__scale._LineBetweenPointers.new({pointerStartId: this[_pointerQueue][$_get](0), pointerStartLocation: this[_pointerLocations][$_get](this[_pointerQueue][$_get](0)), pointerEndId: this[_pointerQueue][$_get](1), pointerEndLocation: this[_pointerLocations][$_get](this[_pointerQueue][$_get](1))});
      } else {
        this[_initialLine] = new src__gestures__scale._LineBetweenPointers.new({pointerStartId: this[_pointerQueue][$_get](0), pointerStartLocation: this[_pointerLocations][$_get](this[_pointerQueue][$_get](0)), pointerEndId: this[_pointerQueue][$_get](1), pointerEndLocation: this[_pointerLocations][$_get](this[_pointerQueue][$_get](1))});
        this[_currentLine] = null;
      }
    }
    [_reconfigure](pointer) {
      this[_initialFocalPoint] = this[_currentFocalPoint];
      this[_initialSpan] = this[_currentSpan];
      this[_initialLine] = this[_currentLine];
      this[_initialHorizontalSpan] = this[_currentHorizontalSpan];
      this[_initialVerticalSpan] = this[_currentVerticalSpan];
      if (this[_state$0] === src__gestures__scale._ScaleState.started) {
        if (this.onEnd != null) {
          let tracker = this[_velocityTrackers$][$_get](pointer);
          if (!(tracker != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/scale.dart", 364, 16, "tracker != null");
          let velocity = tracker.getVelocity();
          if (dart.test(src__gestures__scale._isFlingGesture(velocity))) {
            let pixelsPerSecond = velocity.pixelsPerSecond;
            if (dart.notNull(pixelsPerSecond.distanceSquared) > 8000.0 * 8000.0) velocity = new src__gestures__velocity_tracker.Velocity.new({pixelsPerSecond: pixelsPerSecond['/'](pixelsPerSecond.distance)['*'](8000.0)});
            this.invokeCallback(dart.void, "onEnd", dart.fn(() => this.onEnd(new src__gestures__scale.ScaleEndDetails.new({velocity: velocity})), VoidTovoid()));
          } else {
            this.invokeCallback(dart.void, "onEnd", dart.fn(() => this.onEnd(new src__gestures__scale.ScaleEndDetails.new({velocity: src__gestures__velocity_tracker.Velocity.zero})), VoidTovoid()));
          }
        }
        this[_state$0] = src__gestures__scale._ScaleState.accepted;
        return false;
      }
      return true;
    }
    [_advanceStateMachine](shouldStartIfAccepted) {
      if (this[_state$0] === src__gestures__scale._ScaleState.ready) this[_state$0] = src__gestures__scale._ScaleState.possible;
      if (this[_state$0] === src__gestures__scale._ScaleState.possible) {
        let spanDelta = (dart.notNull(this[_currentSpan]) - dart.notNull(this[_initialSpan]))[$abs]();
        let focalPointDelta = this[_currentFocalPoint]['-'](this[_initialFocalPoint]).distance;
        if (spanDelta > 18.0 || dart.notNull(focalPointDelta) > 36.0) this.resolve(src__gestures__arena.GestureDisposition.accepted);
      } else if (dart.notNull(this[_state$0].index) >= dart.notNull(src__gestures__scale._ScaleState.accepted.index)) {
        this.resolve(src__gestures__arena.GestureDisposition.accepted);
      }
      if (this[_state$0] === src__gestures__scale._ScaleState.accepted && dart.test(shouldStartIfAccepted)) {
        this[_state$0] = src__gestures__scale._ScaleState.started;
        this[_dispatchOnStartCallbackIfNeeded]();
      }
      if (this[_state$0] === src__gestures__scale._ScaleState.started && this.onUpdate != null) this.invokeCallback(dart.void, "onUpdate", dart.fn(() => {
        this.onUpdate(new src__gestures__scale.ScaleUpdateDetails.new({scale: this[_scaleFactor], horizontalScale: this[_horizontalScaleFactor], verticalScale: this[_verticalScaleFactor], focalPoint: this[_currentFocalPoint], rotation: this[_computeRotationFactor]()}));
      }, VoidToNull()));
    }
    [_dispatchOnStartCallbackIfNeeded]() {
      if (!(this[_state$0] === src__gestures__scale._ScaleState.started)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/scale.dart", 418, 12, "_state == _ScaleState.started");
      if (this.onStart != null) this.invokeCallback(dart.void, "onStart", dart.fn(() => this.onStart(new src__gestures__scale.ScaleStartDetails.new({focalPoint: this[_currentFocalPoint]})), VoidTovoid()));
    }
    acceptGesture(pointer) {
      if (this[_state$0] === src__gestures__scale._ScaleState.possible) {
        this[_state$0] = src__gestures__scale._ScaleState.started;
        this[_dispatchOnStartCallbackIfNeeded]();
      }
    }
    rejectGesture(pointer) {
      this.stopTrackingPointer(pointer);
    }
    didStopTrackingLastPointer(pointer) {
      switch (this[_state$0]) {
        case src__gestures__scale._ScaleState.possible:
        {
          this.resolve(src__gestures__arena.GestureDisposition.rejected);
          break;
        }
        case src__gestures__scale._ScaleState.ready:
        {
          if (!false) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/scale.dart", 444, 16, "false");
          break;
        }
        case src__gestures__scale._ScaleState.accepted:
        {
          break;
        }
        case src__gestures__scale._ScaleState.started:
        {
          if (!false) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/gestures/scale.dart", 449, 16, "false");
          break;
        }
      }
      this[_state$0] = src__gestures__scale._ScaleState.ready;
    }
    dispose() {
      this[_velocityTrackers$][$clear]();
      super.dispose();
    }
    get debugDescription() {
      return "scale";
    }
  };
  (src__gestures__scale.ScaleGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[onStart$0] = null;
    this[onUpdate$0] = null;
    this[onEnd$0] = null;
    this[_state$0] = src__gestures__scale._ScaleState.ready;
    this[_initialFocalPoint] = null;
    this[_currentFocalPoint] = null;
    this[_initialSpan] = null;
    this[_currentSpan] = null;
    this[_initialHorizontalSpan] = null;
    this[_currentHorizontalSpan] = null;
    this[_initialVerticalSpan] = null;
    this[_currentVerticalSpan] = null;
    this[_initialLine] = null;
    this[_currentLine] = null;
    this[_pointerLocations] = null;
    this[_pointerQueue] = null;
    this[_velocityTrackers$] = new (IdentityMapOfint$VelocityTracker()).new();
    src__gestures__scale.ScaleGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
  }).prototype = src__gestures__scale.ScaleGestureRecognizer.prototype;
  dart.addTypeTests(src__gestures__scale.ScaleGestureRecognizer);
  const onStart$0 = Symbol("ScaleGestureRecognizer.onStart");
  const onUpdate$0 = Symbol("ScaleGestureRecognizer.onUpdate");
  const onEnd$0 = Symbol("ScaleGestureRecognizer.onEnd");
  dart.setMethodSignature(src__gestures__scale.ScaleGestureRecognizer, () => ({
    __proto__: dart.getMethods(src__gestures__scale.ScaleGestureRecognizer.__proto__),
    [_computeRotationFactor]: dart.fnType(core.double, []),
    addAllowedPointer: dart.fnType(dart.void, [src__gestures__events.PointerEvent]),
    handleEvent: dart.fnType(dart.void, [src__gestures__events.PointerEvent]),
    [_update]: dart.fnType(dart.void, []),
    [_updateLines]: dart.fnType(dart.void, []),
    [_reconfigure]: dart.fnType(core.bool, [core.int]),
    [_advanceStateMachine]: dart.fnType(dart.void, [core.bool]),
    [_dispatchOnStartCallbackIfNeeded]: dart.fnType(dart.void, []),
    didStopTrackingLastPointer: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(src__gestures__scale.ScaleGestureRecognizer, () => ({
    __proto__: dart.getGetters(src__gestures__scale.ScaleGestureRecognizer.__proto__),
    [_scaleFactor]: core.double,
    [_horizontalScaleFactor]: core.double,
    [_verticalScaleFactor]: core.double,
    debugDescription: core.String
  }));
  dart.setLibraryUri(src__gestures__scale.ScaleGestureRecognizer, "package:flutter_web/src/gestures/scale.dart");
  dart.setFieldSignature(src__gestures__scale.ScaleGestureRecognizer, () => ({
    __proto__: dart.getFields(src__gestures__scale.ScaleGestureRecognizer.__proto__),
    onStart: dart.fieldType(ScaleStartDetailsTovoid()),
    onUpdate: dart.fieldType(ScaleUpdateDetailsTovoid()),
    onEnd: dart.fieldType(ScaleEndDetailsTovoid()),
    [_state$0]: dart.fieldType(src__gestures__scale._ScaleState),
    [_initialFocalPoint]: dart.fieldType(ui$.Offset),
    [_currentFocalPoint]: dart.fieldType(ui$.Offset),
    [_initialSpan]: dart.fieldType(core.double),
    [_currentSpan]: dart.fieldType(core.double),
    [_initialHorizontalSpan]: dart.fieldType(core.double),
    [_currentHorizontalSpan]: dart.fieldType(core.double),
    [_initialVerticalSpan]: dart.fieldType(core.double),
    [_currentVerticalSpan]: dart.fieldType(core.double),
    [_initialLine]: dart.fieldType(src__gestures__scale._LineBetweenPointers),
    [_currentLine]: dart.fieldType(src__gestures__scale._LineBetweenPointers),
    [_pointerLocations]: dart.fieldType(MapOfint$Offset()),
    [_pointerQueue]: dart.fieldType(ListOfint()),
    [_velocityTrackers$]: dart.finalFieldType(MapOfint$VelocityTracker())
  }));
  dart.trackLibraries("packages/flutter_web/src/gestures/arena.ddc", {
    "package:flutter_web/src/gestures/debug.dart": src__gestures__debug,
    "package:flutter_web/src/gestures/arena.dart": src__gestures__arena,
    "package:flutter_web/src/gestures/events.dart": src__gestures__events,
    "package:flutter_web/src/gestures/converter.dart": src__gestures__converter,
    "package:flutter_web/src/gestures/hit_test.dart": src__gestures__hit_test,
    "package:flutter_web/src/gestures/pointer_router.dart": src__gestures__pointer_router,
    "package:flutter_web/src/gestures/pointer_signal_resolver.dart": src__gestures__pointer_signal_resolver,
    "package:flutter_web/src/gestures/binding.dart": src__gestures__binding,
    "package:flutter_web/src/gestures/constants.dart": src__gestures__constants,
    "package:flutter_web/src/gestures/lsq_solver.dart": src__gestures__lsq_solver,
    "package:flutter_web/src/gestures/velocity_tracker.dart": src__gestures__velocity_tracker,
    "package:flutter_web/src/gestures/drag_details.dart": src__gestures__drag_details,
    "package:flutter_web/src/gestures/drag.dart": src__gestures__drag,
    "package:flutter_web/src/gestures/team.dart": src__gestures__team,
    "package:flutter_web/src/gestures/recognizer.dart": src__gestures__recognizer,
    "package:flutter_web/src/gestures/eager.dart": src__gestures__eager,
    "package:flutter_web/src/gestures/force_press.dart": src__gestures__force_press,
    "package:flutter_web/src/gestures/long_press.dart": src__gestures__long_press,
    "package:flutter_web/src/gestures/monodrag.dart": src__gestures__monodrag,
    "package:flutter_web/src/gestures/mouse_tracking.dart": src__gestures__mouse_tracking,
    "package:flutter_web/src/gestures/multidrag.dart": src__gestures__multidrag,
    "package:flutter_web/src/gestures/tap.dart": src__gestures__tap,
    "package:flutter_web/src/gestures/multitap.dart": src__gestures__multitap,
    "package:flutter_web/src/gestures/scale.dart": src__gestures__scale
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["debug.dart","arena.dart","events.dart","converter.dart","hit_test.dart","pointer_router.dart","pointer_signal_resolver.dart","binding.dart","constants.dart","lsq_solver.dart","velocity_tracker.dart","drag_details.dart","drag.dart","team.dart","recognizer.dart","eager.dart","force_press.dart","long_press.dart","monodrag.dart","mouse_tracking.dart","multidrag.dart","tap.dart","multitap.dart","scale.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAgBK,6CAAwB;YAAG;;;MAS3B,+CAA0B;YAAG;;;MAW7B,sDAAiC;YAAG;;;MAcpC,uDAAkC;YAAG;;;;kEASL,MAAa;AAChD,mBAAO;AACL,oBAAI,6CAAwB,eACxB,sDAAiC,eACjC,uDAAkC,GAAE,WAAM,4CAAY,CAAC,MAAM;AACjE,YAAO;;AAET,UAAO;EACT;;;;;;;;;;;;;;;;;;;;;;;;ECjCA;;;;;;;;YAiBe,WAA8B;AACzC,kBAAM,UAAS,CAAC,cAAQ,EAAE,aAAO,EAAE,WAAW;IAChD;;;IAZyB,YAAM;IAAO,cAAQ;IAAO,aAAO;EAAC;;;;;;;;;;;;;;QA2BpD,MAAyB;AAChC,qBAAO,WAAM;AACb,kBAAO,MAAI,CAAC,MAAM;IACpB;;AAIE,oBAAI,2BAAiB,GAAE;AACrB,YAAmB,aAAS,qBAAY;AACxC,sBAAI,YAAO,UAAQ,GAAE;AACnB,gBAAM,MAAM,CAAC;eACR;AACL,gBAAM,MAAM,2BAAC,YAAO,MAAI,cAAS,QAAC,MAAyB;AACzD,4BAAI,MAAM,EAAI,gBAAW,GAAE,MAAO,UAAE,MAAM;AAC1C,kBAAO,UAAE,MAAM;mDACV,CAAC;;AAEV,sBAAI,WAAM,GAAE,MAAM,MAAM,CAAC;AACzB,sBAAI,WAAM,GAAE,MAAM,MAAM,CAAC;AACzB,sBAAI,oBAAe,GAAE,MAAM,MAAM,CAAC;AAClC,cAAO,OAAM,SAAS;aACjB;AACL,cAAO,eAAc;;IAEzB;;;IAnC+B,YAAO,GAAG;IACpC,WAAM,GAAG;IACT,WAAM,GAAG;IACT,oBAAe,GAAG;IAMJ,gBAAW;EA2BhC;;;;;;;;;;;;;;;;;;;;;;QAawB,OAAW,EAAE,MAAyB;AAC1D,UAAoB,QAAQ,aAAO,cAAY,CAAC,OAAO,EAAE;AACvD,uBAAO,yBAAmB,CAAC,OAAO,EAAE;AACpC,mBAAO,sCAAa;;AAEtB,WAAK,IAAI,CAAC,MAAM;AAChB,qBAAO,yBAAmB,CAAC,OAAO,EAAE,sBAAU,MAAM;AACpD,iBAAO,yCAAmB,CAAC,MAAM,OAAO,EAAE,MAAM;IAClD;UAKW,OAAW;AACpB,UAAoB,QAAQ,aAAO,QAAC,OAAO;AAC3C,UAAI,KAAK,IAAI,MACX;AACF,WAAK,OAAO,GAAG;AACf,qBAAO,yBAAmB,CAAC,OAAO,EAAE,WAAW,KAAK;AACpD,8BAAkB,CAAC,OAAO,EAAE,KAAK;IACnC;UAeW,OAAW;AACpB,UAAoB,QAAQ,aAAO,QAAC,OAAO;AAC3C,UAAI,KAAK,IAAI,MACX;AACF,WAAO,WAAC,KAAK,OAAO;AACpB,oBAAI,KAAK,OAAO,GAAE;AAChB,aAAK,gBAAgB,GAAG;AACxB,uBAAO,yBAAmB,CAAC,OAAO,EAAE,kBAAkB,KAAK;AAC3D;;AAEF,qBAAO,yBAAmB,CAAC,OAAO,EAAE,YAAY,KAAK;AACrD,mBAAO,SAAO,CAAC,OAAO;AACtB,oBAAI,KAAK,QAAQ,aAAW,GAAE;AAE5B,uBAAO,yBAAmB,CAAC,OAAO,EAAE,sBAAW,KAAK,QAAQ,QAAM;AAClE,aAAK,QAAQ,QAAM,cAAc,CAAC,OAAO;AAEzC,iBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,KAAK,QAAQ,SAAO,GAAE,CAAC;AACzC,eAAK,QAAQ,QAAC,CAAC,eAAe,CAAC,OAAO;;IAE5C;SAcU,OAAW;AACnB,UAAoB,QAAQ,aAAO,QAAC,OAAO;AAC3C,UAAI,KAAK,IAAI,MACX;AACF,WAAK,OAAO,GAAG;AACf,qBAAO,yBAAmB,CAAC,OAAO,EAAE,WAAW,KAAK;IACtD;YAWa,OAAW;AACtB,UAAoB,QAAQ,aAAO,QAAC,OAAO;AAC3C,UAAI,KAAK,IAAI,MACX;AACF,WAAK,OAAO,GAAG;AACf,qBAAO,yBAAmB,CAAC,OAAO,EAAE,aAAa,KAAK;AACtD,oBAAI,KAAK,gBAAgB,GAAE,UAAK,CAAC,OAAO;IAC1C;eAMI,OAAW,EAAE,MAAyB,EAAE,WAA8B;AACxE,UAAoB,QAAQ,aAAO,QAAC,OAAO;AAC3C,UAAI,KAAK,IAAI,MAAM;AACnB,qBAAO,yBAAmB,CAAC,OAAO,EAC9B,CAAG,WAAW,KAAI,uCAAkB,SAAS,GAAG,cAAc,+BAAe,MAAM;AACvF,qBAAO,KAAK,QAAQ,WAAS,CAAC,MAAM;AACpC,UAAI,WAAW,KAAI,uCAAkB,SAAS,EAAE;AAC9C,aAAK,QAAQ,SAAO,CAAC,MAAM;AAC3B,cAAM,cAAc,CAAC,OAAO;AAC5B,uBAAK,KAAK,OAAO,GAAE,wBAAkB,CAAC,OAAO,EAAE,KAAK;aAC/C;AACL,cAAO,WAAW,KAAI,uCAAkB,SAAS;AACjD,sBAAI,KAAK,OAAO,GAAE;AAChB,uBAAK,YAAY;sBAAjB,KAAK,YAAY,GAAK,MAAM;eACvB;AACL,yBAAO,yBAAmB,CAAC,OAAO,EAAE,oCAAwB,MAAM;AAClE,iCAAiB,CAAC,OAAO,EAAE,KAAK,EAAE,MAAM;;;IAG9C;yBAEwB,OAAW,EAAE,KAAmB;AACtD,uBAAO,aAAO,QAAC,OAAO,GAAK,KAAK;AAChC,WAAO,WAAC,KAAK,OAAO;AACpB,UAAI,KAAK,QAAQ,SAAO,KAAI,GAAG;AAC7B,+BAAiB,CAAC,cAAM,uBAAiB,CAAC,OAAO,EAAE,KAAK;YACnD,eAAI,KAAK,QAAQ,UAAQ,GAAE;AAChC,qBAAO,SAAO,CAAC,OAAO;AACtB,uBAAO,yBAAmB,CAAC,OAAO,EAAE;YAC/B,KAAI,KAAK,YAAY,IAAI,MAAM;AACpC,uBACI,yBAAmB,CAAC,OAAO,EAAE,4BAAiB,KAAK,YAAY;AACnE,+BAAiB,CAAC,OAAO,EAAE,KAAK,EAAE,KAAK,YAAY;;IAEvD;wBAEuB,OAAW,EAAE,KAAmB;AACrD,qBAAK,aAAO,cAAY,CAAC,OAAO,IAAG;AACnC,uBAAO,aAAO,QAAC,OAAO,GAAK,KAAK;AAChC,WAAO,WAAC,KAAK,OAAO;AACpB,UAA+B,UAAU,KAAK,QAAQ;AACtD,YAAO,OAAO,SAAO,KAAI;AACzB,mBAAO,SAAO,CAAC,OAAO;AACtB,qBACI,yBAAmB,CAAC,OAAO,EAAE,8BAAmB,KAAK,QAAQ,QAAM;AACvE,WAAK,QAAQ,QAAM,cAAc,CAAC,OAAO;IAC3C;wBAGI,OAAW,EAAE,KAAmB,EAAE,MAAyB;AAC7D,uBAAO,KAAK,EAAI,aAAO,QAAC,OAAO;AAC/B,YAAO,KAAK,IAAI;AAChB,YAAO,AAA0B,KAArB,YAAY,IAAI,oBAAQ,KAAK,YAAY,EAAI,MAAM;AAC/D,WAAO,WAAC,KAAK,OAAO;AACpB,mBAAO,SAAO,CAAC,OAAO;AACtB,eAAwB,iBAAkB,MAAK,QAAQ,EAAE;AACvD,yBAAI,cAAc,EAAI,MAAM,GAAE,cAAc,cAAc,CAAC,OAAO;;AAEpE,YAAM,cAAc,CAAC,OAAO;IAC9B;0BAEyB,OAAW,EAAE,OAAc,EAAG,KAAmB;4BAAL;AACnE,qBAAO;AACL,sBAAI,sDAAiC,GAAE;AACrC,cAAU,QAAQ,KAAK,IAAI,OAAO,KAAK,QAAQ,SAAO,GAAG;AACzD,cAAa,IAAI,KAAK,KAAI,IAAI,MAAM;AACpC,2CAAU,CACN,iCAAiB,OAAO,YAAoB,CAAC,sBAAO,OAAO,KAAE,KAAK,IAAI,OAAO,oBAAQ,KAAK,gBAAQ,CAAC,SAAK;;AAE9G,cAAO;;AAET,YAAO;IACT;;;IA9K8B,aAAO,GAAG;EA+K1C;;;;;;;;;;;;;;;;;;;;;MC9PU,oCAAc;YAAG;;MAcjB,sCAAgB;YAAG;;MAWnB,yCAAmB;YAAG,EAAc;;MAWpC,2CAAqB;YAAG,EAAgB;;MASxC,oCAAc;YAAG,EAAc;;MAW/B,0CAAoB;YAAG,EAAgB;;MAOvC,wCAAkB;YAAG;;MAMrB,4CAAsB;YAAG;;MAMzB,sCAAgB;YAAG;;MAMnB,yCAAmB;YAAG;;MAStB,mCAAa;YAAG,EAAc;;;kDASrB,MAAU;UACzB,EAAqB,AAAiB,CAArC,CAAmB,cAAY,aAAP,MAAM,IAAG,KAAM,EAAe;;mDAQvC,MAAU;UAC1B,EAAsB,AAAiB,CAAtC,CAAoB,cAAY,aAAP,MAAM,IAAG,KAAM,EAAe;;kDAoBzC,OAAW;UAAK,EAAQ,aAAR,OAAO,IAAI,cAAC,OAAO;EAAC;kDAqBnC,OAAW;UAC3B,AAAa,QAAN,KAAI,KAAM,oCAAc,CAAC,OAAO,KAAK,OAAO;EAAC;;IAsDvC;;;;;;IAIL;;;;;;IAGc;;;;;;IAGd;;;;;;IAIG;;;;;;IAMA;;;;;;IAQH;;;;;;IAMC;;;;;;IAMA;;;;;;IAQE;;;;;;IAMA;;;;;;IAMA;;;;;;IAOA;;;;;;;YAKa;IAAG;IAMhB;;;;;;IAaA;;;;;;IAGA;;;;;;IAGA;;;;;;IAIA;;;;;;IAIA;;;;;;IA6BA;;;;;;IAcA;;;;;;IAGH;;;;;;IAcC;;;;;;wBAGc,UAAsC;AAC7D,+BAAyB,CAAC,UAAU;AACpC,gBAAU,IAAI,KAAC,mCAA2B,CAAC,YAAY,aAAQ;AAC/D,gBAAU,IAAI,KAAC,mCAA2B,CAAC,SAAS,UAAK,iBACvC,UAAM,KAAK,SAAS,4CAAe,MAAM;AAC3D,gBAAU,IAAI,KAAC,qCAA6B,CAAC,aAAa,cAAS,iBACjD,aAAQ,KAAK,SAAS,4CAAe,MAAM;AAC7D,gBAAU,IACF,KAAC,4CAAW,CAAC,WAAW,YAAO,UAAS,4CAAe,MAAM;AACrE,gBAAU,IAAI,KAAC,uCAA+B,CAAC,QAAQ,SAAI,UAChD,4CAAe,MAAM;AAChC,gBAAU,IAAI,KAAC,4CAAW,CAAC,UAAU,WAAM,iBACzB,UAAU,4CAAe,MAAM;AACjD,gBAAU,IAAI,KAAC,4CAAW,CAAC,WAAW,YAAO,iBAC3B,UAAU,4CAAe,MAAM;AACjD,gBAAU,IAAI,KACV,iCAAyB,CAAC,QAAQ,SAAI,UAAS,4CAAe,MAAM;AACxE,gBAAU,IAAI,KAAC,+CAAc,CAAC,YAAY,aAAQ,iBAChC,YAAY,4CAAe,MAAM;AACnD,gBAAU,IAAI,KAAC,+CAAc,CAAC,eAAe,gBAAW,iBACtC,YAAY,4CAAe,MAAM;AACnD,gBAAU,IAAI,KAAC,+CAAc,CAAC,eAAe,gBAAW,iBACtC,YAAY,4CAAe,MAAM;AACnD,gBAAU,IAAI,KAAC,+CAAc,CAAC,YAAY,aAAQ,iBAChC,YAAY,4CAAe,MAAM;AACnD,gBAAU,IAAI,KAAC,+CAAc,CAAC,eAAe,gBAAW,iBACtC,YAAY,4CAAe,MAAM;AACnD,gBAAU,IAAI,KAAC,+CAAc,CAAC,eAAe,gBAAW,iBACtC,YAAY,4CAAe,MAAM;AACnD,gBAAU,IAAI,KAAC,+CAAc,CAAC,QAAQ,SAAI,iBACxB,YAAY,4CAAe,MAAM;AACnD,gBAAU,IAAI,KAAC,+CAAc,CAAC,eAAe,gBAAW,iBACtC,YAAY,4CAAe,MAAM;AACnD,gBAAU,IAAI,KAAC,+CAAc,CAAC,eAAe,gBAAW,iBACtC,YAAY,4CAAe,MAAM;AACnD,gBAAU,IAAI,KAAC,+CAAc,CAAC,aAAa,cAAS,iBAClC,YAAY,4CAAe,MAAM;AACnD,gBAAU,IAAI,KAAC,+CAAc,CAAC,aAAa,cAAS,iBAClC,YAAY,4CAAe,MAAM;AACnD,gBAAU,IAAI,KAAC,+CAAc,CAAC,eAAe,gBAAW,iBACtC,YAAY,4CAAe,MAAM;AACnD,gBAAU,IAAI,KAAC,+CAAc,CAAC,QAAQ,SAAI,iBACxB,YAAY,4CAAe,MAAM;AACnD,gBAAU,IAAI,KAAC,4CAAW,CAAC,gBAAgB,iBAAY,iBACrC,UAAU,4CAAe,MAAM;AACjD,gBAAU,IAAI,KAAC,6CAAY,CAAC,oBACjB,aAAQ,UAAU,mBAAmB,4CAAe,MAAM;AACrE,gBAAU,IAAI,KAAC,6CAAY,CAAC,uBACjB,gBAAW,UACV,sBACD,4CAAe,MAAM;IAClC;;AAIE,YAAO,cAAQ,YAAW,4CAAe,KAAK;IAChD;;;QA1PO,2DAAY,aAAQ,KAAK;QACzB,qDAAU;QACV,4CAAO,qBAAiB,MAAM;QAC9B,kDAAS;QACT,wDAAW,UAAM,KAAK;QACtB,+CAAQ,UAAM,KAAK;QACnB,qDAAU;QACV,4CAAO;QACP,wDAAW;QACX,wDAAW;QACX,iEAAc;QACd,iEAAc;QACd,wDAAW;QACX,iEAAc;QACd,4CAAO;QACP,iEAAc;QACd,iEAAc;QACd,2DAAY;QACZ,2DAAY;QACZ,iEAAc;QACd,4CAAO;QACP,oEAAe;QACf,iEAAc;IAtBd,gBAAS,GAAT,SAAS;IACT,cAAO,GAAP,OAAO;IACP,WAAI,GAAJ,IAAI;IACJ,aAAM,GAAN,MAAM;IACN,eAAQ,GAAR,QAAQ;IACR,YAAK,GAAL,KAAK;IACL,cAAO,GAAP,OAAO;IACP,WAAI,GAAJ,IAAI;IACJ,eAAQ,GAAR,QAAQ;IACR,eAAQ,GAAR,QAAQ;IACR,kBAAW,GAAX,WAAW;IACX,kBAAW,GAAX,WAAW;IACX,eAAQ,GAAR,QAAQ;IACR,kBAAW,GAAX,WAAW;IACX,WAAI,GAAJ,IAAI;IACJ,kBAAW,GAAX,WAAW;IACX,kBAAW,GAAX,WAAW;IACX,gBAAS,GAAT,SAAS;IACT,gBAAS,GAAT,SAAS;IACT,kBAAW,GAAX,WAAW;IACX,WAAI,GAAJ,IAAI;IACJ,mBAAY,GAAZ,YAAY;IACZ,kBAAW,GAAX,WAAW;;EAChB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;QA+OS,2DAAY,aAAQ,KAAK;QAChB,4CAAO,qBAAiB,MAAM;QAC5C,kDAAS;QACN,wDAAW,UAAM,KAAK;QACxB,wDAAW;QACT,iEAAc;QACd,iEAAc;QACd,wDAAW;QACX,iEAAc;QACd,2DAAY;QACZ,2DAAY;QACZ,iEAAc;QACd,4CAAO;AACX,iFACc,SAAS,QACd,IAAI,UACF,MAAM,YACJ,QAAQ,YACR,QAAQ,YACR,kBACG,WAAW,eACX,WAAW,YACd,QAAQ,eACL,WAAW,aACb,SAAS,aACT,SAAS,eACP,WAAW,QAClB,IAAI;EACX;;;;;QAYI,2DAAY,aAAQ,KAAK;QAChB,4CAAO,qBAAiB,MAAM;QAC5C,kDAAS;QACN,wDAAW,UAAM,KAAK;QACxB,wDAAW;QACT,iEAAc;QACd,iEAAc;QACd,iEAAc;QACd,2DAAY;QACZ,2DAAY;AAChB,mFACc,SAAS,QACd,IAAI,UACF,MAAM,YACJ,QAAQ,YACR,QAAQ,YACR,kBACG,WAAW,eACX,WAAW,eACX,WAAW,aACb,SAAS,aACT,SAAS;EACrB;;;;;QAkBI,2DAAY,aAAQ,KAAK;QAChB,4CAAO,qBAAiB,MAAM;QAC5C,kDAAS;QACN,wDAAW,UAAM,KAAK;QACtB,+CAAQ,UAAM,KAAK;QACtB,qDAAU;QACT,wDAAW;QACT,iEAAc;QACd,iEAAc;QACd,wDAAW;QACX,iEAAc;QACd,4CAAO;QACP,iEAAc;QACd,iEAAc;QACd,2DAAY;QACZ,2DAAY;QACZ,iEAAc;QACd,4CAAO;QACT,iEAAc;AAChB,iFACc,SAAS,QACd,IAAI,UACF,MAAM,YACJ,QAAQ,SACX,KAAK,WACH,OAAO,QACV,iBACI,QAAQ,YACR,kBACG,WAAW,eACX,WAAW,YACd,QAAQ,eACL,WAAW,QAClB,IAAI,eACG,WAAW,eACX,WAAW,aACb,SAAS,aACT,SAAS,eACP,WAAW,QAClB,IAAI,eACG,WAAW;EACzB;;;;;QAkBI,2DAAY,aAAQ,KAAK;QAChB,4CAAO,qBAAiB,MAAM;QAC5C,kDAAS;QACN,wDAAW,UAAM,KAAK;QACtB,+CAAQ,UAAM,KAAK;QACtB,qDAAU;QACT,wDAAW;QACT,iEAAc;QACd,iEAAc;QACd,wDAAW;QACX,iEAAc;QACd,4CAAO;QACP,iEAAc;QACd,iEAAc;QACd,2DAAY;QACZ,2DAAY;QACZ,iEAAc;QACd,4CAAO;QACT,iEAAc;AAChB,iFACc,SAAS,QACd,IAAI,UACF,MAAM,YACJ,QAAQ,SACX,KAAK,WACH,OAAO,QACV,iBACI,QAAQ,YACR,kBACG,WAAW,eACX,WAAW,YACd,QAAQ,eACL,WAAW,QAClB,IAAI,eACG,WAAW,eACX,WAAW,aACb,SAAS,aACT,SAAS,eACP,WAAW,QAClB,IAAI,eACG,WAAW;EACzB;qEAM0B,KAAuB;sEAC9B,KAAK;EAAC;qEAKC,KAAkB;uEAEhC,KAAK,kBAAL,KAAK,UAAW,QACrB,KAAK,kBAAL,KAAK,KAAM,UACT,KAAK,kBAAL,KAAK,OAAQ,YACX,KAAK,kBAAL,KAAK,SAAU,SAClB,KAAK,kBAAL,KAAK,MAAO,WACV,KAAK,kBAAL,KAAK,QAAS,YACb,KAAK,kBAAL,KAAK,SAAU,eACZ,KAAK,kBAAL,KAAK,YAAa,eAClB,KAAK,kBAAL,KAAK,YAAa,YACrB,KAAK,kBAAL,KAAK,SAAU,eACZ,KAAK,kBAAL,KAAK,YAAa,QACzB,KAAK,kBAAL,KAAK,KAAM,eACJ,KAAK,kBAAL,KAAK,YAAa,eAClB,KAAK,kBAAL,KAAK,YAAa,aACpB,KAAK,kBAAL,KAAK,UAAW,aAChB,KAAK,kBAAL,KAAK,UAAW,eACd,KAAK,kBAAL,KAAK,YAAa,QACzB,KAAK,kBAAL,KAAK,KAAM,eACJ,KAAK,kBAAL,KAAK,YAAa;EAChC;;;;;QAkBI,2DAAY,aAAQ,KAAK;QAChB,4CAAO,qBAAiB,MAAM;QAC5C,kDAAS;QACN,wDAAW,UAAM,KAAK;QACtB,+CAAQ,UAAM,KAAK;QACtB,qDAAU;QACT,wDAAW;QACT,iEAAc;QACd,iEAAc;QACd,wDAAW;QACX,iEAAc;QACd,4CAAO;QACP,iEAAc;QACd,iEAAc;QACd,2DAAY;QACZ,2DAAY;QACZ,iEAAc;QACd,4CAAO;QACT,iEAAc;AAChB,gFACc,SAAS,QACd,IAAI,UACF,MAAM,YACJ,QAAQ,SACX,KAAK,WACH,OAAO,QACV,iBACI,QAAQ,YACR,kBACG,WAAW,eACX,WAAW,YACd,QAAQ,eACL,WAAW,QAClB,IAAI,eACG,WAAW,eACX,WAAW,aACb,SAAS,aACT,SAAS,eACP,WAAW,QAClB,IAAI,eACG,WAAW;EACzB;oEAMyB,KAAuB;qEAC7B,KAAK;EAAC;oEAKA,KAAkB;sEAE/B,KAAK,kBAAL,KAAK,UAAW,QACrB,KAAK,kBAAL,KAAK,KAAM,UACT,KAAK,kBAAL,KAAK,OAAQ,YACX,KAAK,kBAAL,KAAK,SAAU,SAClB,KAAK,kBAAL,KAAK,MAAO,WACV,KAAK,kBAAL,KAAK,QAAS,YACb,KAAK,kBAAL,KAAK,SAAU,eACZ,KAAK,kBAAL,KAAK,YAAa,eAClB,KAAK,kBAAL,KAAK,YAAa,YACrB,KAAK,kBAAL,KAAK,SAAU,eACZ,KAAK,kBAAL,KAAK,YAAa,QACzB,KAAK,kBAAL,KAAK,KAAM,eACJ,KAAK,kBAAL,KAAK,YAAa,eAClB,KAAK,kBAAL,KAAK,YAAa,aACpB,KAAK,kBAAL,KAAK,UAAW,aAChB,KAAK,kBAAL,KAAK,UAAW,eACd,KAAK,kBAAL,KAAK,YAAa,QACzB,KAAK,kBAAL,KAAK,KAAM,eACJ,KAAK,kBAAL,KAAK,YAAa;EAChC;;;;;QASI,2DAAY,aAAQ,KAAK;QAC9B,qDAAU;QACI,4CAAO,qBAAiB,MAAM;QAC5C,kDAAS;QACN,wDAAW,UAAM,KAAK;QACzB,qDAAU,CAAc;QACvB,wDAAW;QACT,wDAAW;QACX,iEAAc;QACd,iEAAc;QACd,iEAAc;QACd,4CAAO;QACP,iEAAc;QACd,iEAAc;QACd,2DAAY;QACZ,2DAAY;QACZ,iEAAc;QACd,4CAAO;AACX,gFACc,SAAS,WACX,OAAO,QACV,IAAI,UACF,MAAM,YACJ,QAAQ,WACT,OAAO,QACV,gBACI,QAAQ,YACR,QAAQ,eACL,WAAW,eACX,WAAW,YACd,kBACG,WAAW,QAClB,IAAI,eACG,WAAW,eACX,WAAW,aACb,SAAS,aACT,SAAS,eACP,WAAW,QAClB,IAAI;EACX;;;;;QAeI,2DAAY,aAAQ,KAAK;QAC9B,qDAAU;QACI,4CAAO,qBAAiB,MAAM;QAC5C,kDAAS;QACN,wDAAW,UAAM,KAAK;QACtB,+CAAQ,UAAM,KAAK;QACtB,qDAAU,CAAc;QACvB,wDAAW;QACT,wDAAW;QACX,iEAAc;QACd,iEAAc;QACd,iEAAc;QACd,4CAAO;QACP,iEAAc;QACd,iEAAc;QACd,2DAAY;QACZ,2DAAY;QACZ,iEAAc;QACd,4CAAO;QACV,oEAAe;QACd,iEAAc;AAChB,gFACc,SAAS,WACX,OAAO,QACV,IAAI,UACF,MAAM,YACJ,QAAQ,SACX,KAAK,WACH,OAAO,QACV,gBACI,QAAQ,YACR,QAAQ,eACL,WAAW,eACX,WAAW,YACd,kBACG,WAAW,QAClB,IAAI,eACG,WAAW,eACX,WAAW,aACb,SAAS,aACT,SAAS,eACP,WAAW,QAClB,IAAI,gBACI,YAAY,eACb,WAAW;EACzB;;;;;QASI,2DAAY,aAAQ,KAAK;QAC9B,qDAAU;QACI,4CAAO,qBAAiB,MAAM;QAC5C,kDAAS;QACN,wDAAW,UAAM,KAAK;QACzB,qDAAU;QACT,wDAAW;QAGT,wDAAW;QACX,iEAAc;QACd,iEAAc;QACd,wDAAW;QACX,iEAAc;QACd,4CAAO;QACP,iEAAc;QACd,iEAAc;QACd,2DAAY;QACZ,2DAAY;QACZ,iEAAc;QACd,4CAAO;AACX,8EACc,SAAS,WACX,OAAO,QACV,IAAI,UACF,MAAM,YACJ,QAAQ,WACT,OAAO,QACV,iBACI,QAAQ,YACR,QAAQ,eACL,WAAW,eACX,WAAW,YACd,QAAQ,eACL,WAAW,QAClB,IAAI,eACG,WAAW,eACX,WAAW,aACb,SAAS,aACT,SAAS,eACP,WAAW,QAClB,IAAI;EACX;;;;;QAYI,2DAAY,aAAQ,KAAK;QAC9B,qDAAU;QACI,4CAAO,qBAAiB,MAAM;QAC5C,kDAAS;QACN,wDAAW,UAAM,KAAK;AAC1B,kFACc,SAAS,WACX,OAAO,QACV,IAAI,UACF,MAAM,YACJ,QAAQ;EACnB;;;;IA8BM;;;;;;wBAGY,UAAsC;AAC7D,+BAAyB,CAAC,UAAU;AACpC,gBAAU,IAAI,KAAC,mCAA2B,CAAC,eAAe,gBAAW;IACvE;;;QAxBW,2DAAY,aAAQ,KAAK;QAChB,4CAAO,qBAAiB,MAAM;QAC5C,kDAAS;QACN,wDAAW,UAAM,KAAK;QACxB,iEAAc,UAAM,KAAK;IAAzB,kBAAW,GAAX,WAAW;UACL,SAAS,IAAI;UACb,IAAI,IAAI;UACR,MAAM,IAAI;UACV,QAAQ,IAAI;UACZ,WAAW,IAAI;AACtB,kFACa,SAAS,QACd,IAAI,UACF,MAAM,YACJ,QAAQ;EACnB;;;;;;;;;;QAkBI,2DAAY,aAAQ,KAAK;QAC9B,qDAAU;QACI,4CAAO,qBAAiB,MAAM;QAC5C,kDAAS;QACN,wDAAW,UAAM,KAAK;QACzB,qDAAU;QACT,wDAAW;QACT,iEAAc;QACd,iEAAc;QACd,wDAAW;QACX,iEAAc;QACd,4CAAO;QACP,iEAAc;QACd,iEAAc;QACd,2DAAY;QACZ,2DAAY;QACZ,iEAAc;QACd,4CAAO;AACX,kFACc,SAAS,WACX,OAAO,QACV,IAAI,UACF,MAAM,YACJ,QAAQ,WACT,OAAO,QACV,iBACI,QAAQ,YACR,kBACG,WAAW,eACX,WAAW,YACd,QAAQ,eACL,WAAW,QAClB,IAAI,eACG,WAAW,eACX,WAAW,aACb,SAAS,aACT,SAAS,eACP,WAAW,QAClB,IAAI;EACX;;;;;;;YC7/BY,gBAAQ;;;AAIzB,0DAAa,GAnBjB,aAmBI,oDAAa,IAAI;AACjB,qBAAQ,GAAG,oDAAa;IAC1B;;YAEiB,YAAK;;;AAGpB,WAAO,WAAC,WAAK;AACb,iBAAK,GAAG;IACV;;AAGE,qBAAO,WAAK;AACZ,iBAAK,GAAG;IACV;YAIe,EAAS;YAAK,AAAG,GAAD,MAAG,iBAAY;;;AAI5C,YAAO,sCAAyB,YAAO,0BAAS,SAAI,kCAAiB,iBAAY;IACnF;;yDA7Bc,YAAiB;IAG3B,eAAQ;IAQP,WAAK,GAAG;IAXM,iBAAY,GAAZ,YAAY;EAAC;;;;;;;;;;;;;;;;;;;;;;;MAIrB,oDAAa;YAAG;;;;6DAiCF,OAAW,EAAE,IAAsB;AAC5D,YAAQ,IAAI;UACL,sBAAiB,MAAM;;AAC1B,cAAO,QAAO;;UACX,sBAAiB,MAAM;UACvB,sBAAiB,OAAO;UACxB,sBAAiB,eAAe;;AACnC,cAAO,EAAQ,aAAR,OAAO,IAAG,CAAc;;;;AAI/B,cAAO,QAAO,KAAI,IAAI,CAAc,GAAG,OAAO;;;EAEpD;;;YAgBiC,yDAAS,QAAM;IAAE;kCAO5C,KAAoB,EAAE,QAAe;AACvC,YAAO,yDAAS,cAAY,CAC1B,KAAK,OAAO,EACZ,kBAAM,0CAAa,CAAC,QAAQ;IAEhC;kBAUI,IAA6B,EAAE,gBAAuB;AAAE;AAC1D,iBAAoB,QAAS,KAAI,EAAE;AACjC,cAAa,WACgC,IAAzC,cAAM,CAAC,KAAK,UAAU,EAAE,KAAK,UAAU,OAAI,gBAAgB;AAC/D,cAAa,cACT,+DAAgB,CAAC,KAAK,YAAY,EAAE,gBAAgB;AACxD,cAAa,cACT,+DAAgB,CAAC,KAAK,YAAY,EAAE,gBAAgB;AACxD,cAAa,YACT,+DAAgB,CAAC,KAAK,UAAU,EAAE,gBAAgB;AACtD,cAAa,YACT,+DAAgB,CAAC,KAAK,UAAU,EAAE,gBAAgB;AACtD,cAAe,YAAY,KAAK,UAAU;AAC1C,cAAwB,OAAO,KAAK,KAAK;AACzC,gBAAO,KAAK,OAAO,IAAI;AACvB,cAAI,KAAK,WAAW,IAAI,QACpB,KAAK,WAAW,KAAI,qBAAoB,KAAK,EAAE;AACjD,oBAAQ,KAAK,OAAO;kBACb,kBAAgB,IAAI;;AACvB,qBAAO,WAAC,wDAAS,cAAY,CAAC,KAAK,OAAO;AAC1C,oBAAoB,QAAQ,qEAAsB,CAAC,KAAK,EAAE,QAAQ;AAClE,iCAAO,KAAK,aAAa,EAAI,QAAQ;AACrC,0BAAM,2CAAiB,aACV,SAAS,QACd,IAAI,UACF,KAAK,OAAO,YACV,QAAQ,YACR,KAAK,SAAS,eACX,KAAK,YAAY,eACjB,KAAK,YAAY,YACpB,KAAK,SAAS,eACX,KAAK,YAAY,aACnB,SAAS,aACT,SAAS,eACP,KAAK,YAAY,QACxB,KAAK,KAAK;AAElB;;kBACG,kBAAgB,MAAM;;AACzB,oBAAW,eAAe,wDAAS,cAAY,CAAC,KAAK,OAAO;AAC5D,oBAAoB,QAAQ,qEAAsB,CAAC,KAAK,EAAE,QAAQ;AAClE,qBAAO,WAAC,KAAK,KAAK;AAClB,+BAAK,YAAY,GAAE;AACjB,mCAAO,KAAK,aAAa,EAAI,QAAQ;AACrC,4BAAM,2CAAiB,aACV,SAAS,QACd,IAAI,UACF,KAAK,OAAO,YACV,QAAQ,YACR,KAAK,SAAS,eACX,KAAK,YAAY,eACjB,KAAK,YAAY,YACpB,KAAK,SAAS,eACX,KAAK,YAAY,aACnB,SAAS,aACT,SAAS,eACP,KAAK,YAAY,QACxB,KAAK,KAAK;;AAGpB,0BAAM,2CAAiB,aACV,SAAS,QACd,IAAI,UACF,KAAK,OAAO,YACV,QAAQ,SACX,KAAK,QAAQ,CAAC,QAAQ,YACpB,KAAK,QAAQ,YACZ,KAAK,SAAS,eACX,KAAK,YAAY,eACjB,KAAK,YAAY,YACpB,KAAK,SAAS,eACX,KAAK,YAAY,QACxB,KAAK,KAAK,eACH,WAAW,eACX,WAAW,aACb,SAAS,aACT,SAAS,eACP,KAAK,YAAY,QACxB,KAAK,KAAK;AAElB,qBAAK,aAAa,GAAG,QAAQ;AAC7B;;kBACG,kBAAgB,KAAK;;AACxB,oBAAW,eAAe,wDAAS,cAAY,CAAC,KAAK,OAAO;AAC5D,oBAAoB,QAAQ,qEAAsB,CAAC,KAAK,EAAE,QAAQ;AAClE,qBAAO,WAAC,KAAK,KAAK;AAClB,+BAAK,YAAY,GAAE;AACjB,mCAAO,KAAK,aAAa,EAAI,QAAQ;AACrC,4BAAM,2CAAiB,aACV,SAAS,QACd,IAAI,UACF,KAAK,OAAO,YACV,QAAQ,YACR,KAAK,SAAS,eACX,KAAK,YAAY,eACjB,KAAK,YAAY,YACpB,KAAK,SAAS,eACX,KAAK,YAAY,aACnB,SAAS,aACT,SAAS,eACP,KAAK,YAAY,QACxB,KAAK,KAAK;;AAGpB,iCAAI,KAAK,aAAa,EAAI,QAAQ,GAAE;AAIlC,4BAAM,2CAAiB,aACV,SAAS,QACd,IAAI,UACF,KAAK,OAAO,YACV,QAAQ,SACX,KAAK,QAAQ,CAAC,QAAQ,YACpB,KAAK,QAAQ,YACZ,KAAK,SAAS,eACX,KAAK,YAAY,eACjB,KAAK,YAAY,YACpB,KAAK,SAAS,eACX,KAAK,YAAY,QACxB,KAAK,KAAK,eACH,WAAW,eACX,WAAW,aACb,SAAS,aACT,SAAS,eACP,KAAK,YAAY,QACxB,KAAK,KAAK,eACH;AAEf,uBAAK,aAAa,GAAG,QAAQ;;AAE/B,qBAAK,gBAAgB;AACrB,qBAAK,QAAQ;AACb,0BAAM,0CAAgB,aACT,SAAS,WACX,KAAK,QAAQ,QAChB,IAAI,UACF,KAAK,OAAO,YACV,QAAQ,WACT,+CAAsB,CAAC,KAAK,QAAQ,EAAE,IAAI,aACzC,KAAK,SAAS,YACd,KAAK,SAAS,eACX,KAAK,YAAY,eACjB,KAAK,YAAY,eACjB,KAAK,YAAY,QACxB,KAAK,KAAK,eACH,WAAW,eACX,WAAW,aACb,SAAS,aACT,SAAS,eACP,KAAK,YAAY,QACxB,KAAK,KAAK;AAElB;;kBACG,kBAAgB,KAAK;;AAIxB,+BAAO,wDAAS,cAAY,CAAC,KAAK,OAAO;AACzC,oBAAoB,QAAQ,wDAAS,QAAC,KAAK,OAAO;AAClD,+BAAO,KAAK,KAAK;AACjB,0BAAM,0CAAgB,aACT,SAAS,WACX,KAAK,QAAQ,QAChB,IAAI,UACF,KAAK,OAAO,YACV,QAAQ,SACX,KAAK,QAAQ,CAAC,QAAQ,YACpB,+CAAsB,CAAC,KAAK,QAAQ,EAAE,IAAI,aACzC,KAAK,SAAS,YACd,KAAK,SAAS,eACX,KAAK,YAAY,eACjB,KAAK,YAAY,eACjB,KAAK,YAAY,QACxB,KAAK,KAAK,eACH,WAAW,eACX,WAAW,aACb,SAAS,aACT,SAAS,eACP,KAAK,YAAY,QACxB,KAAK,KAAK,gBACF,KAAK,aAAa;AAElC,qBAAK,aAAa,GAAG,QAAQ;AAC7B;;kBACG,kBAAgB,GAAG;kBACnB,kBAAgB,OAAO;;AAC1B,+BAAO,wDAAS,cAAY,CAAC,KAAK,OAAO;AACzC,oBAAoB,QAAQ,wDAAS,QAAC,KAAK,OAAO;AAClD,+BAAO,KAAK,KAAK;AACjB,iCAAI,QAAQ,EAAI,KAAK,aAAa,GAAE;AAMlC,4BAAM,0CAAgB,aACT,SAAS,WACX,KAAK,QAAQ,QAChB,IAAI,UACF,KAAK,OAAO,YACV,QAAQ,SACX,KAAK,QAAQ,CAAC,QAAQ,YACpB,+CAAsB,CAAC,KAAK,QAAQ,EAAE,IAAI,aACzC,KAAK,SAAS,YACd,KAAK,SAAS,eACX,KAAK,YAAY,eACjB,KAAK,YAAY,eACjB,KAAK,YAAY,QACxB,KAAK,KAAK,eACH,WAAW,eACX,WAAW,aACb,SAAS,aACT,SAAS,eACP,KAAK,YAAY,QACxB,KAAK,KAAK,eACH;AAEf,uBAAK,aAAa,GAAG,QAAQ;;AAE/B,iCAAO,QAAQ,EAAI,KAAK,aAAa;AACrC,qBAAK,MAAM;AACX,oBAAI,KAAK,OAAO,KAAI,iBAAgB,GAAG,EAAE;AACvC,4BAAM,wCAAc,aACP,SAAS,WACX,KAAK,QAAQ,QAChB,IAAI,UACF,KAAK,OAAO,YACV,QAAQ,WACT,KAAK,QAAQ,YACZ,KAAK,SAAS,YACd,KAAK,SAAS,eACX,KAAK,YAAY,eACjB,KAAK,YAAY,YACpB,KAAK,SAAS,eACX,KAAK,YAAY,QACxB,KAAK,KAAK,eACH,WAAW,eACX,WAAW,aACb,SAAS,aACT,SAAS,eACP,KAAK,YAAY,QACxB,KAAK,KAAK;uBAEb;AACL,4BAAM,4CAAkB,aACX,SAAS,WACX,KAAK,QAAQ,QAChB,IAAI,UACF,KAAK,OAAO,YACV,QAAQ,WACT,KAAK,QAAQ,YACZ,KAAK,SAAS,eACX,KAAK,YAAY,eACjB,KAAK,YAAY,YACpB,KAAK,SAAS,eACX,KAAK,YAAY,QACxB,KAAK,KAAK,eACH,WAAW,eACX,WAAW,aACb,SAAS,aACT,SAAS,eACP,KAAK,YAAY,QACxB,KAAK,KAAK;;AAGpB;;kBACG,kBAAgB,OAAO;;AAC1B,+BAAO,wDAAS,cAAY,CAAC,KAAK,OAAO;AACzC,oBAAoB,QAAQ,wDAAS,QAAC,KAAK,OAAO;AAClD,8BAAI,KAAK,KAAK,GAAE;AACd,4BAAM,4CAAkB,aACX,SAAS,WACX,KAAK,QAAQ,QAChB,IAAI,UACF,KAAK,OAAO,YACV,KAAK,aAAa,WACnB,KAAK,QAAQ,YACZ,KAAK,SAAS,eACX,KAAK,YAAY,eACjB,KAAK,YAAY,YACpB,KAAK,SAAS,eACX,KAAK,YAAY,QACxB,KAAK,KAAK,eACH,WAAW,eACX,WAAW,aACb,SAAS,aACT,SAAS,eACP,KAAK,YAAY,QACxB,KAAK,KAAK;;AAGpB,iCAAI,QAAQ,EAAI,KAAK,aAAa,GAAE;AAClC,4BAAM,2CAAiB,aACV,SAAS,QACd,IAAI,UACF,KAAK,OAAO,YACV,QAAQ,SACX,KAAK,QAAQ,CAAC,QAAQ,YACpB,KAAK,QAAQ,YACZ,KAAK,SAAS,eACX,KAAK,YAAY,eACjB,KAAK,YAAY,YACpB,KAAK,SAAS,eACX,KAAK,YAAY,QACxB,KAAK,KAAK,eACH,WAAW,eACX,WAAW,aACb,SAAS,aACT,SAAS,eACP,KAAK,YAAY,QACxB,KAAK,KAAK,eACH;;AAGjB,wEAAS,SAAO,CAAC,KAAK,OAAO;AAC7B,0BAAM,6CAAmB,aACZ,SAAS,QACd,IAAI,UACF,KAAK,OAAO,YACV,QAAQ,YACR,KAAK,SAAS,eACX,KAAK,YAAY,eACjB,KAAK,YAAY,eACjB,KAAK,YAAY,aACnB,SAAS,aACT,SAAS;AAEtB;;;iBAEC;AACL,oBAAQ,KAAK,WAAW;kBACjB,sBAAoB,OAAO;;AAE9B,+BAAO,wDAAS,cAAY,CAAC,KAAK,OAAO;AACzC,oBAAoB,QAAQ,qEAAsB,CAAC,KAAK,EAAE,QAAQ;AAClE,iCAAI,KAAK,aAAa,EAAI,QAAQ,GAAE;AAKlC,gCAAI,KAAK,KAAK,GAAE;AACd,8BAAM,0CAAgB,aACT,SAAS,WACX,KAAK,QAAQ,QAChB,IAAI,UACF,KAAK,OAAO,YACV,QAAQ,SACX,KAAK,QAAQ,CAAC,QAAQ,YACpB,+CAAsB,CAAC,KAAK,QAAQ,EAAE,IAAI,aACzC,KAAK,SAAS,YACd,KAAK,SAAS,eACX,KAAK,YAAY,eACjB,KAAK,YAAY,eACjB,KAAK,YAAY,QACxB,KAAK,KAAK,eACH,WAAW,eACX,WAAW,aACb,SAAS,aACT,SAAS,eACP,KAAK,YAAY,QACxB,KAAK,KAAK,eACH;yBAEV;AACL,8BAAM,2CAAiB,aACV,SAAS,QACd,IAAI,UACF,KAAK,OAAO,YACV,QAAQ,SACX,KAAK,QAAQ,CAAC,QAAQ,YACpB,KAAK,QAAQ,YACZ,KAAK,SAAS,eACX,KAAK,YAAY,eACjB,KAAK,YAAY,YACpB,KAAK,SAAS,eACX,KAAK,YAAY,QACxB,KAAK,KAAK,eACH,WAAW,eACX,WAAW,aACb,SAAS,aACT,SAAS,eACP,KAAK,YAAY,QACxB,KAAK,KAAK,eACH;;AAGjB,uBAAK,aAAa,GAAG,QAAQ;;AAE/B,oBAAa,cACsC,IAA/C,cAAM,CAAC,KAAK,aAAa,EAAE,KAAK,aAAa,OACzC,gBAAgB;AACxB,0BAAM,4CAAkB,aACX,SAAS,QACd,IAAI,UACF,KAAK,OAAO,YACV,QAAQ,eACL,WAAW;AAE1B;;kBACG,sBAAoB,KAAK;;AAC5B,qBACI;AACJ;;kBACG,sBAAoB,QAAQ;;AAE/B;;;;;MAIV;;4BAGQ,cAAqB,EAAE,gBAAuB;YAClD,eAAc,IAAI,OAAO,OAAsB,aAAf,cAAc,iBAAG,gBAAgB;;;;EA5b5C;;;;MAYY,wDAAS;YAAG;;;;;ACtEzB,YAAG;IAAI;;;;;;;;AAaD,YAAG;IAAI;;;;;;;;AAUX,YAAG;IAAI;;;;;;;IAeb;;;;;;;YAGC,UAAE,WAAM;IAAC;;uDANX,MAAW;IAAN,aAAM,GAAN,MAAM;EAAC;;;;;;;;;;;;YA2BI,YAAK;;QAQ/B,KAAkB;AACzB,iBAAK,MAAI,CAAC,KAAK;IACjB;;AAKE,oBAAI,2BAAiB,GAAE;AACrB,cAAO,qBACH,mBAAG,WAAK,UAAQ,IAAG,iBAAiB,WAAK,OAAK,CAAC;aAC9C;AACL,cAAO,eAAc;;IAEzB;;;IApCkB,WAAK,GAAG;EAAgB;yDAQvB,MAAoB;IAAI,WAAK,GAAG,MAAM,OAAM;;;;;;;;;;;;;;;;;;;;;aC1CjD,OAAW,EAAE,KAAkB;AAC3C,UAAkC,SAC9B,eAAS,cAAY,CAAC,OAAO,EAAE,cAAM;AACzC,WAAO,WAAC,MAAM,SAAS,CAAC,KAAK;AAC7B,YAAM,IAAI,CAAC,KAAK;IAClB;gBASiB,OAAW,EAAE,KAAkB;AAC9C,qBAAO,eAAS,cAAY,CAAC,OAAO;AACpC,UAAkC,SAAS,eAAS,QAAC,OAAO;AAC5D,qBAAO,MAAM,SAAS,CAAC,KAAK;AAC5B,YAAM,OAAO,CAAC,KAAK;AACnB,oBAAI,MAAM,QAAQ,GAAE,eAAS,SAAO,CAAC,OAAO;IAC9C;mBAQoB,KAAkB;AACpC,WAAO,WAAC,mBAAa,SAAS,CAAC,KAAK;AACpC,yBAAa,IAAI,CAAC,KAAK;IACzB;sBASuB,KAAkB;AACvC,qBAAO,mBAAa,SAAS,CAAC,KAAK;AACnC,yBAAa,OAAO,CAAC,KAAK;IAC5B;gBAEe,KAAkB,EAAE,KAAkB;AACnD,UAAI;AACF,aAAK,CAAC,KAAK;;YACJ;YAAW;AAAO,AACzB,gDAAY,YAAY,KAAC,qEAAmC,aAC/C,SAAS,SACb,KAAK,WACH,gCACA,gDAAgB,CAAC,0CAClB,aACD,KAAK,SACL,KAAK,wBACU;AACpB,sBAAM,yCAAiC,CAAC,SAAS,KAAK,UAC3C,iDAAoB,cAAc;UAC/C;;IAGN;UAMW,KAAkB;AAC3B,UAAkC,SAAS,eAAS,QAAC,KAAK,QAAQ;AAClE,UAAyB,eACrB,+BAAuB,CAAC,mBAAa;AACzC,UAAI,MAAM,IAAI,MAAM;AAClB,iBAAkB,QAAS,gCAAuB,CAAC,MAAM,GAAG;AAC1D,wBAAI,MAAM,SAAS,CAAC,KAAK,IAAG,eAAS,CAAC,KAAK,EAAE,KAAK;;;AAGtD,eAAkB,QAAS,aAAY,EAAE;AACvC,sBAAI,mBAAa,SAAS,CAAC,KAAK,IAAG,eAAS,CAAC,KAAK,EAAE,KAAK;;IAE7D;;;IA7F4C,eAAS,GACjD;IAC8B,mBAAa,GAC3C;EA2FN;;;;;;;;;;;;;;;;;;IAmCsB;;;;;;IAGD;;;;;;IAGA;;;;;;;;QA3BT;QACG;QACJ;QACS;QACX;QACA;QACA;QACgB;QAChB,kDAAS;IAJT,aAAM,GAAN,MAAM;IACN,YAAK,GAAL,KAAK;IACL,YAAK,GAAL,KAAK;AAGP,2GACgB,SAAS,SACb,KAAK,WACH,OAAO,WACP,OAAO,wBACM,oBAAoB,UAClC,MAAM;EAAC;;;;;;;;;;;;;;;aC3GrB,KAAwB,EAAE,QAAsC;AAClE,YAAO,KAAK,IAAI;AAChB,YAAO,QAAQ,IAAI;AACnB,YAAO,AAAsB,mBAAT,IAAI,oBAAQ,mBAAa,EAAI,KAAK;AACtD,UAAI,8BAAwB,IAAI,MAAM;AACpC;;AAEF,yBAAa,GAAG,KAAK;AACrB,oCAAwB,GAAG,QAAQ;IACrC;YAOa,KAAwB;AACnC,UAAI,8BAAwB,IAAI,MAAM;AACpC,cAAO,mBAAa,IAAI;AACxB;;AAEF,uBAAO,mBAAa,EAAI,KAAK;AAC7B,UAAI;AACF,sCAAwB,CAAC,KAAK;;YACvB;YAAW;AAAO,AACzB,gDAAY,YAAY,KAAC,mDAAmB,aAC/B,SAAS,SACb,KAAK,WACH,gCACA,gDAAgB,CAAC,+DACJ;AACpB,sBAAM,+CAAuC,CAAC,SAAS,KAAK,UACjD,iDAAoB,cAAc;UAC/C;;AAGJ,oCAAwB,GAAG;AAC3B,yBAAa,GAAG;IAClB;;;IA5C8B,8BAAwB;IAEnC,mBAAa;EA2ClC;;;;;;;;;;;;;;;;;;;;YCQwC,gDAAS;;;;;AAZ7C,yBAAmB;AACnB,qDAAS,GAAG;AACZ,iBAAM,oBAAoB,GAAG,yCAAwB;IACvD;;AAIE,oBAAc;AACd,mCAAuB;IACzB;+BAQ8B,MAA2B;AAGvD,iCAAqB,OAAO,CACxB,8CAAqB,OAAO,CAAC,MAAM,KAAK,EAAE,WAAM,iBAAiB;AACrE,qBAAK,WAAM,GAAE,6BAAuB;IACtC;kBAMmB,OAAW;AAC5B,oBAAI,2BAAqB,QAAQ,gBAAK,WAAM,GAC1C,uBAAiB,CAAC,wCAAuB;AAC3C,iCAAqB,SAAS,KAAC,4CAAkB,WAAU,OAAO;IACpE;;AAGE,WAAO,WAAC,WAAM;AACd,uBAAO,2BAAqB,WAAW;AACrC,iCAAmB,CAAC,2BAAqB,YAAY;IACzD;IAGoB;;;;;;IAIM;;;;;;IAIE;;;;;;0BAQH,KAAkB;AACzC,WAAO,WAAC,WAAM;AACd,UAAc;AACd,oDAAI,KAAK,iDAAwB,KAAK,GAAwB;AAC5D,aAAO,WAAC,eAAS,cAAY,CAAC,KAAK,QAAQ;AAC3C,qBAAa,OAAG,yCAAa;AAC7B,oBAAO,CAAC,aAAa,EAAE,KAAK,SAAS;AACrC,sDAAI,KAAK,GAAsB;AAC7B,yBAAS,QAAC,KAAK,QAAQ,EAAI,aAAa;;AAE1C,uBAAO;AACL,wBAAI,6CAAwB,GAAE,iCAAU,CAAC,SAAE,KAAK,oBAAG,aAAa;AAChE,gBAAO;;YAEJ,6CAAI,KAAK,iDAAsB,KAAK,GAAwB;AACjE,qBAAa,GAAG,eAAS,SAAO,CAAC,KAAK,QAAQ;YACzC,eAAI,KAAK,KAAK,GAAE;AAMrB,qBAAa,GAAG,eAAS,QAAC,KAAK,QAAQ;;AAEzC,qBAAO;AACL,sBAAI,+CAA0B,gDAAI,KAAK,GACrC,iCAAU,CAAC,SAAE,KAAK;AACpB,cAAO;;AAET,UAAI,aAAa,IAAI,mDACjB,KAAK,gDACL,KAAK,kDACL,KAAK,GAAyB;AAChC,0BAAa,CAAC,KAAK,EAAE,aAAa;;IAEtC;YAIa,MAAoB,EAAE,QAAe;AAChD,YAAM,IAAI,KAAC,wCAAY,CAAC;IAC1B;kBASmB,KAAkB,EAAE,aAA2B;AAChE,WAAO,WAAC,WAAM;AAGd,UAAI,aAAa,IAAI,MAAM;AACzB,cAC+B,2CADxB,KAAK,gDACR,KAAK,kDACL,KAAK;AACT,YAAI;AACF,4BAAa,MAAM,CAAC,KAAK;;cAClB;cAAW;AAAO,AACzB,kDAAY,YAAY,KAAC,uEAA4C,aACxD,SAAS,SACb,KAAK,WACH,gCACA,gDAAgB,CACrB,4DACG,KAAK,gBACE,4BACQ;AACpB,wBAAM,yCAAiC,CAAC,SAAS,KAAK,UAC3C,iDAAoB,cAAc;YAC/C;;AAGJ;;AAEF,eAAkB,QAAS,cAAa,KAAK,EAAE;AAC7C,YAAI;AACF,eAAK,OAAO,YAAY,CAAC,KAAK,EAAE,KAAK;;cAC9B;cAAW;AAAO,AACzB,kDAAY,YAAY,KAAC,uEAA4C,aACxD,SAAS,SACb,KAAK,WACH,gCACA,gDAAgB,CAAC,6CACnB,KAAK,gBACE,KAAK,wBACG;AACpB,wBAAM,yCAAiC,CAAC,SAAS,KAAK,UAC3C,iDAAoB,cAAc;AAC7C,wBAAM,0CAAkC,CAAC,UAAU,KAAK,OAAO,UACpD,iDAAoB,cAAc;YAC/C;;;IAIR;gBAGiB,KAAkB,EAAE,KAAkB;AACrD,wBAAa,MAAM,CAAC,KAAK;AACzB,oDAAI,KAAK,GAAsB;AAC7B,yBAAY,MAAM,CAAC,KAAK,QAAQ;YAC3B,6CAAI,KAAK,GAAoB;AAClC,yBAAY,MAAM,CAAC,KAAK,QAAQ;YAC3B,iDAAI,KAAK,GAAwB;AACtC,kCAAqB,QAAQ,CAAC,KAAK;;IAEvC;;;IAxJ0B,2BAAqB,GAAG,yBAAmB;IA2BjD,mBAAa,OAAG,+CAAa;IAIvB,kBAAY,OAAG,4CAAmB;IAIhC,2BAAqB,OAAG,gEAAqB;IAM3C,eAAS,GAAG;EAgH5C;;;;;;;;;;;;;;;;;;;;;;;;;;MA3JwB,+CAAS;;;;;;IA0LZ;;;;;;IAQA;;;;;;;;QAzBT;QACG;QACJ;QACS;QACX;QACA;QACgB;QAChB,kDAAS;IAHT,aAAK,GAAL,KAAK;IACL,mBAAY,GAAZ,YAAY;AAGd,6GACgB,SAAS,SACb,KAAK,WACH,OAAO,WACP,OAAO,wBACM,oBAAoB,UAClC,MAAM;EAAC;;;;;;;;;;;MC3PZ,sCAAa;4BAAG,iBAAQ,gBAAe;;MAMvC,yCAAgB;4BAAG,iBAAQ,gBAAe;;MAM5C,sCAAa;YAAG;;MAGd,0CAAiB;4BAAG,iBAAQ,gBAAe;;MAM3C,0CAAiB;4BAAG,iBAAQ,gBAAe;;MAI3C,0CAAiB;4BAAG,iBAAQ,gBAAe;;MAK7C,4CAAmB;YAAG,KAAU;;MAKhC,uCAAc;YAAG;;MAIf,6CAAoB;4BAAG,iBAAQ,gBAAe;;MAYhD,mCAAU;YAAG;;MAOb,yCAAgB;YAAG,AAAW,KAAD,GAAG;;MAIhC,iCAAQ;YAAG,AAAW,KAAD,GAAG;;MAIxB,mCAAU;YAAG,KAAU;;MAKvB,yCAAgB;YAAG;;MAKnB,0CAAiB;YAAG;;MAKpB,0CAAiB;YAAG;;MAKlB,wCAAe;4BAAG,iBAAQ,gBAAe;;;;;;;SCpEnC,CAAK;YAAK,gBAAS,QAAG,aAAF,CAAC,iBAAG,aAAO;IAAC;SACjC,CAAK,EAAE,KAAY;AACnC,qBAAS,QAAG,aAAF,CAAC,iBAAG,aAAO,GAAI,KAAK;YADP,MAAY;IAErC;UAEkB,CAAS;AACzB,UAAO,SAAS;AAChB,eAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,aAAO,GAAE,CAAC,GAnClC,AAmCiC,CAAC,GAAI,GAAG;cAAM,GAnC/C,AAmCyC,MAAM,GAAY,aAAR,UAAK,CAAC,kBAAI,CAAC,MAAC,CAAC;;AAC5D,YAAO,OAAM;IACf;;YAEiB,AAAK,UAAI,CAAC,AAAK,UAAE;IAAK;;oDA3B/B,IAAQ;IACV,aAAO,GAAG;IACV,aAAO,GAAG,IAAI;IACd,eAAS,GAAG,0BAAW,CAAC,IAAI;EAAC;wDAEnB,MAAmB,EAAE,MAAU,EAAE,MAAU;IACrD,aAAO,GAAG,MAAM;IAChB,aAAO,GAAG,MAAM;IAChB,eAAS,GAAG,MAAM;;;;;;;;;;;;;;;;;;;QA+Bb,GAAO,EAAE,GAAO;YAAK,gBAAS,QAAK,AAAW,aAAf,GAAG,iBAAG,cAAQ,iBAAG,GAAG;IAAC;QACtD,GAAO,EAAE,GAAO,EAAE,KAAY;AACrC,qBAAS,QAAK,AAAW,aAAf,GAAG,iBAAG,cAAQ,iBAAG,GAAG,GAAI,KAAK;IACzC;WAEe,GAAO;iBAAK,yCAAe,CACpC,eAAS,EACL,aAAJ,GAAG,iBAAG,cAAQ,GACd,cAAQ;IACT;;oDAhBG,IAAQ,EAAE,IAAQ;IACpB,cAAQ,GAAG,IAAI;IACf,eAAS,GAAG,0BAAW,CAAM,aAAL,IAAI,iBAAG,IAAI;EAAC;;;;;;;;;;;;;;;IAyBvB;;;;;;IAKZ;;;;;;;0DARO,MAAU;IAQjB,gBAAU;IARW,kBAAY,GAAG,0BAAW,CAAQ,aAAP,MAAM,IAAG;EAAE;;;;;;;;;;;IAqB/C;;;;;;IAGA;;;;;;IAGA;;;;;;UAGC,MAAU;AAC5B,UAAW,aAAP,MAAM,iBAAG,MAAC,SAAO,GACnB,MAAO;AAET,UAAoB,aAAS,2CAAa,CAAC,MAAM;AAGjD,UAAU,IAAI,MAAC,SAAO;AACtB,UAAU,IAAW,aAAP,MAAM,IAAG;AAGvB,UAAc,QAAI,qCAAO,CAAC,CAAC,EAAE,CAAC;AAC9B,eAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,CAAC,GAAE,CAAC,GA9G5B,AA8G2B,CAAC,GAAI,GAAG;AAC7B,SAAC,IAAI,CAAC,GAAG,CAAC,EAAE,MAAC,QAAC,CAAC;AACf,iBAAS,IAAI,GAAG,AAAE,CAAD,GAAG,CAAC,EAAE,CAAC,GAhH9B,AAgH6B,CAAC,GAAI;AAAG,WAAC,IAAI,CAAC,CAAC,EAAE,CAAC,EAAkB,aAAhB,CAAC,IAAI,CAAC,AAAE,CAAD,GAAG,GAAG,CAAC,kBAAI,MAAC,QAAC,CAAC;;AAMlE,UAAc,QAAI,qCAAO,CAAC,CAAC,EAAE,CAAC;AAE9B,UAAc,QAAI,qCAAO,CAAC,CAAC,EAAE,CAAC;AAC9B,eAAS,IAAI,GAAG,AAAE,CAAD,GAAG,CAAC,EAAE,CAAC,GAzH5B,AAyH2B,CAAC,GAAI,GAAG;AAC7B,iBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,CAAC,GAAE,CAAC,GA1H9B,AA0H6B,CAAC,GAAI;AAAG,WAAC,IAAI,CAAC,CAAC,EAAE,CAAC,EAAE,CAAC,IAAI,CAAC,CAAC,EAAE,CAAC;AACrD,iBAAS,IAAI,GAAG,AAAE,CAAD,GAAG,CAAC,EAAE,CAAC,GA3H9B,AA2H6B,CAAC,GAAI,GAAG;AAC7B,cAAa,MAAM,AAAY,CAAX,OAAO,CAAC,CAAC,OAAI,CAAC,OAAO,CAAC,CAAC;AAC3C,mBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,CAAC,GAAE,CAAC,GA7HhC,AA6H+B,CAAC,GAAI;AAC1B,aAAC,IAAI,CAAC,CAAC,EAAE,CAAC,EAAc,aAAZ,CAAC,IAAI,CAAC,CAAC,EAAE,CAAC,KAAQ,aAAJ,GAAG,iBAAG,CAAC,IAAI,CAAC,CAAC,EAAE,CAAC;;AAG9C,YAAa,OAAO,CAAC,OAAO,CAAC,CAAC,MAAM;AACpC,YAAS,aAAL,IAAI,IAAG,KAAuB,EAAE;AAElC,gBAAO;;AAGT,YAAa,cAAc,AAAI,mBAAE,IAAI;AACrC,iBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,CAAC,GAAE,CAAC,GAxI9B,AAwI6B,CAAC,GAAI;AAAG,WAAC,IAAI,CAAC,CAAC,EAAE,CAAC,EAAc,aAAZ,CAAC,IAAI,CAAC,CAAC,EAAE,CAAC,KAAI,WAAW;AACpE,iBAAS,IAAI,GAAG,AAAE,CAAD,GAAG,CAAC,EAAE,CAAC,GAzI9B,AAyI6B,CAAC,GAAI;AAC1B,WAAC,IAAI,CAAC,CAAC,EAAE,CAAC,EAAE,AAAA,AAAE,CAAD,GAAG,CAAC,GAAG,MAAM,AAAY,CAAX,OAAO,CAAC,CAAC,OAAI,CAAC,OAAO,CAAC,CAAC;;AAKtD,UAAc,SAAK,qCAAO,CAAC,CAAC;AAC5B,eAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,CAAC,GAAE,CAAC,GAhJ5B,AAgJ2B,CAAC,GAAI;AAAG,UAAE,MAAC,CAAC,EAAS,aAAL,MAAC,QAAC,CAAC,kBAAI,MAAC,QAAC,CAAC;AACjD,eAAS,IAAI,AAAE,CAAD,GAAG,GAAG,AAAE,CAAD,IAAI,GAAG,CAAC,GAjJjC,AAiJgC,CAAC,GAAI,GAAG;AAClC,cAAM,aAAa,QAAC,CAAC,EAAI,AAAY,CAAX,OAAO,CAAC,CAAC,OAAI,EAAE;AACzC,iBAAS,IAAI,AAAE,CAAD,GAAG,GAAG,AAAE,CAAD,GAAG,CAAC,EAAE,CAAC,GAnJlC,AAmJiC,CAAC,GAAI,GAC9B;gBAAM,aAAa,QAAC,CAAC,EApJ7B,aAoJQ,MAAM,aAAa,QAAC,CAAC,KAAiB,aAAZ,CAAC,IAAI,CAAC,CAAC,EAAE,CAAC,kBAAI,MAAM,aAAa,QAAC,CAAC;;AAC/D,cAAM,aAAa,QAAC,CAAC,EArJ3B,aAqJM,MAAM,aAAa,QAAC,CAAC,kBAAK,CAAC,IAAI,CAAC,CAAC,EAAE,CAAC;;AAQtC,UAAO,QAAQ;AACf,eAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,CAAC,GAAE,CAAC,GA9J5B,AA8J2B,CAAC,GAAI,GAAG;aAAK,GA9JxC,AA8JmC,KAAK,gBAAI,MAAC,QAAC,CAAC;;AAC3C,WAAK,GA/JT,AA+JI,KAAK,gBAAI,CAAC;AAEV,UAAO,kBAAkB;AACzB,UAAO,kBAAkB;AACzB,eAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,CAAC,GAAE,CAAC,GAnK5B,AAmK2B,CAAC,GAAI,GAAG;AAC7B,YAAO,OAAO;AACd,YAAO,MAAW,aAAL,MAAC,QAAC,CAAC,kBAAI,MAAM,aAAa,QAAC;AACxC,iBAAS,IAAI,GAAG,AAAE,CAAD,GAAG,CAAC,EAAE,CAAC,GAtK9B,AAsK6B,CAAC,GAAI,GAAG;AAC7B,cAAI,GAvKZ,AAuKQ,IAAI,gBAAI,MAAC,QAAC,CAAC;AACX,aAAG,GAxKX,AAwKQ,GAAG,GAAI,AAAK,IAAD,gBAAG,MAAM,aAAa,QAAC,CAAC;;AAErC,uBAAe,GA1KrB,AA0KM,eAAe,GAAS,AAAO,AAAM,aAAlB,MAAC,QAAC,CAAC,kBAAI,MAAC,QAAC,CAAC,KAAI,GAAG,GAAG,GAAG;AAC1C,YAAa,IAAS,aAAL,MAAC,QAAC,CAAC,KAAI,KAAK;AAC7B,uBAAe,GA5KrB,AA4KM,eAAe,GAAS,AAAO,AAAI,aAAhB,MAAC,QAAC,CAAC,kBAAI,MAAC,QAAC,CAAC,KAAI,CAAC,GAAG,CAAC;;AAGxC,YAAM,WAAW,GAAG,AAAA,AAAgB,eAAD,IAAI,KAAuB,GACxD,MACA,AAAI,MAAG,AAAgB,eAAD,GAAG,eAAe;AAE9C,YAAO,OAAM;IACf;;+DAhGmB,CAAM,EAAE,CAAM,EAAE,CAAM;IAAjB,QAAC,GAAD,CAAC;IAAO,QAAC,GAAD,CAAC;IAAO,QAAC,GAAD,CAAC;UAC5B,CAAC,SAAO,IAAI,CAAC,SAAO;UACpB,CAAC,SAAO,IAAI,CAAC,SAAO;EAAC;;;;;;;;;;;;;;;;;IC5DrB;;;;;;;iBAGY,4CAAQ,mBAAkB,AAAC,oBAAe;IAAC;UAGhD,KAAc;AAChC,iBAAO,4CAAQ,mBAAkB,AAAgB,oBAAD,MAAG,KAAK,gBAAgB;IAC1E;UAGoB,KAAc;AAChC,iBAAO,4CAAQ,mBAAkB,AAAgB,oBAAD,MAAG,KAAK,gBAAgB;IAC1E;mBAYwB,QAAe,EAAE,QAAe;AACtD,YAAO,AAAiB,QAAT,IAAI,QAAiB,aAAT,QAAQ,KAAI;AACvC,YAAO,AAAoC,QAA5B,IAAI,QAAiB,aAAT,QAAQ,KAAI,OAAgB,aAAT,QAAQ,kBAAI,QAAQ;AAClE,UAAa,eAAe,oBAAe,gBAAgB;AAC3D,UAAiB,aAAb,YAAY,IAAY,aAAT,QAAQ,iBAAG,QAAQ,GACpC,WAAO,4CAAQ,mBAEN,AAAgB,AAA4B,oBAA7B,MAAG,oBAAe,SAAS,OAAI,QAAQ;AACjE,UAAiB,aAAb,YAAY,IAAY,aAAT,QAAQ,iBAAG,QAAQ,GACpC,WAAO,4CAAQ,mBAEN,AAAgB,AAA4B,oBAA7B,MAAG,oBAAe,SAAS,OAAI,QAAQ;AACjE,YAAO;IACT;YAGiB,KAAa;UAAb,KAAa;AAC5B,uDAAI,KAAK,GAAe,MAAO;AAC/B,UAAe,6DAAa,KAAK;AACjC,yBAAO,oBAAe,EAAI,UAAU,gBAAgB;IACtD;;2BAGoB,oBAAe;IAAS;;YAIxC,eAAY,oBAAe,GAAG,kBAAgB,CAAC,YAAO,oBAAe,GAAG,kBAAgB,CAAC;IAAK;;;QA3DjF;0BAAe,GAAf,eAAe;UACpB,eAAe,IAAI;EAAK;;;;;;;;;;;;;;;;;;MAGd,6CAAI;4BAAG,4CAAQ,mBAAkB,UAAM,KAAK;;;;IAsFrD;;;;;;IAMA;;;;;;IAIE;;;;;;IAIF;;;;;;;YAIT,uBAAoB,oBAAe,GAAG,kBAAgB,CAAC,YAAO,oBAAe,GAAG,kBAAgB,CAAC,6BAAc,WAAM,8BAAa,aAAQ,uBAAgB,eAAU,kBAAgB,CAAC;IAAK;;;QA5B7K;QACA;QACA;QACA;IAHA,uBAAe,GAAf,eAAe;IACf,iBAAU,GAAV,UAAU;IACV,eAAQ,GAAR,QAAQ;IACR,aAAM,GAAN,MAAM;UACV,eAAe,IAAI;UACnB,UAAU,IAAI;UACd,QAAQ,IAAI;UACZ,MAAM,IAAI;EAAK;;;;;;;;;;;;;;;;;YAiCP,4BAAe,UAAK,sBAAK,SAAI;IAAE;;+DARjC,KAAU,EAAE,IAAS;IAAhB,UAAK,GAAL,KAAK;IAAO,SAAI,GAAJ,IAAI;UAC3B,KAAK,IAAI;UACT,IAAI,IAAI;EAAK;;;;;;;;;;;;gBA8BT,IAAa,EAAE,QAAe;AAC7C,kBAAM,GApKV,aAoKI,YAAM,IAAI;AACV,UAAI,YAAM,KAAI,EAAY,EAAE,YAAM,GAAG;AACrC,oBAAQ,QAAC,YAAM,MAAI,gDAAY,CAAC,QAAQ,EAAE,IAAI;IAChD;;AASE,UAAmB,IAAI;AACvB,UAAmB,IAAI;AACvB,UAAmB,IAAI;AACvB,UAAmB,OAAO;AAC1B,UAAI,cAAc;AAClB,UAAI,QAAQ,YAAM;AAElB,UAAmB,eAAe,cAAQ,QAAC,KAAK;AAChD,UAAI,YAAY,IAAI,MAAM,MAAO;AAEjC,UAAa,iBAAiB,YAAY;AAC1C,UAAa,eAAe,YAAY;AAIxC,SAAG;AACD,YAAmB,SAAS,cAAQ,QAAC,KAAK;AAC1C,YAAI,MAAM,IAAI,MAAM;AAEpB,YAAa,MACT,AAAC,AAAkB,YAAN,KAAK,MAAG,MAAM,KAAK,gBAAgB,WAAS;AAC7D,YAAa,QACT,AAAC,AAAY,MAAN,KAAK,MAAG,cAAc,KAAK,gBAAgB,MAAI,aAAW;AACrE,sBAAc,GAAG,MAAM;AACvB,YAAI,AAAI,GAAD,GAAG,GAAoB,IAC1B,AAAM,KAAD,GAAG,EAAqC,EAAE;AAEnD,oBAAY,GAAG,MAAM;AACrB,YAAa,WAAW,MAAM,MAAM;AACpC,SAAC,MAAI,CAAC,QAAQ,GAAG;AACjB,SAAC,MAAI,CAAC,QAAQ,GAAG;AACjB,SAAC,MAAI,CAAC;AACN,YAAI,MAAI,CAAC,CAAC,GAAG;AACb,aAAK,GAAuC,aAAnC,KAAK,KAAI,IAAI,EAAY,GAAG,KAAK,IAAI;AAE9C,mBAAW,GAnNjB,AAmNM,WAAW,GAAI;eACR,AAAY,WAAD,GAAG,EAAY;AAEnC,UAAI,AAAY,WAAD,IAAI,CAAc,EAAE;AACjC,YAAyB,cAAU,gDAAkB,CAAC,IAAI,EAAE,CAAC,EAAE,CAAC;AAChE,YAAoB,OAAO,OAAO,MAAM,CAAC;AACzC,YAAI,IAAI,IAAI,MAAM;AAChB,cAAyB,cAAU,gDAAkB,CAAC,IAAI,EAAE,CAAC,EAAE,CAAC;AAChE,cAAoB,OAAO,OAAO,MAAM,CAAC;AACzC,cAAI,IAAI,IAAI,MAAM;AAChB,uBAAO,oDAAgB,uBAEJ,cAAM,CACE,aAArB,IAAI,aAAa,QAAC,MAAK,MAA2B,aAArB,IAAI,aAAa,QAAC,MAAK,mBAC5B,aAAhB,IAAI,WAAW,iBAAG,IAAI,WAAW,aACnC,AAAkB,YAAN,KAAK,MAAG,YAAY,KAAK,WACvC,AAAmB,YAAP,MAAM,MAAG,YAAY,MAAM;;;;AAQvD,iBAAO,oDAAgB,mBACJ,UAAM,KAAK,cAChB,eACF,AAAkB,YAAN,KAAK,MAAG,YAAY,KAAK,WACvC,AAAmB,YAAP,MAAM,MAAG,YAAY,MAAM;IAEnD;;AAUE,UAAuB,WAAW,wBAAmB;AACrD,UAAI,QAAQ,IAAI,oBAAQ,QAAQ,gBAAgB,EAAI,UAAM,KAAK,GAC7D,MAAO,yCAAQ,KAAK;AACtB,iBAAO,4CAAQ,mBAAkB,QAAQ,gBAAgB;IAC3D;;;IAhGyB,cAAQ,GAAG,wBAAkB,CAAC,EAAY;IAC/D,YAAM,GAAG;EAgGf;;;;;;;;;;;;;;;MAvGmB,qFAAqC;YAAG;;MACxC,4DAAY;YAAG;;MACf,oEAAoB;YAAG;;MACvB,8DAAc;YAAG;;;;IChIrB;;;;;;;YAGQ,UAAE,kBAAW,mBAAE,mBAAc;IAAE;;;QAT9B,0EAAiB,UAAM,KAAK;IAA5B,qBAAc,GAAd,cAAc;UACvB,cAAc,IAAI;EAAK;;;;;;;;;;IAsCrB;;;;;;IAKF;;;;;;;YAOQ,UAAE,kBAAW,mBAAE,mBAAc;IAAE;;;QAnB7B;QAAsB,0EAAiB,UAAM,KAAK;IAAlD,sBAAe,GAAf,eAAe;IAAO,sBAAc,GAAd,cAAc;UAC9C,cAAc,IAAI;EAAK;;;;;;;;;;;;IA4DrB;;;;;;IASF;;;;;;IAYA;;;;;;IAGA;;;;;;;YAGQ,UAAE,kBAAW,mBAAE,UAAK;IAAE;;;QAxCpC;QACA,+CAAQ,UAAM,KAAK;QACnB;QACU;IAHV,uBAAe,GAAf,eAAe;IACf,aAAK,GAAL,KAAK;IACL,mBAAY,GAAZ,YAAY;IACF,sBAAc,GAAd,cAAc;UAClB,KAAK,IAAI;UACT,AAC2C,YAD/B,IAAI,QAClB,YAAY,IAAI,KAAK,GAAG,IAAI,KAAK,GAAG,KAAI,OACxC,YAAY,IAAI,KAAK,GAAG,IAAI,KAAK,GAAG,KAAI;EAAK;;;;;;;;;;;;;;;;IAoEzC;;;;;;IAYF;;;;;;;YAGQ,UAAE,kBAAW,mBAAE,aAAQ;IAAE;;;QAzBvC,wDAAW,wCAAQ,KAAK;QACxB;IADA,eAAQ,GAAR,QAAQ;IACR,sBAAe,GAAf,eAAe;UACT,QAAQ,IAAI;UACZ,AAC4C,eAD7B,IAAI,QACtB,eAAe,IAAI,QAAQ,gBAAgB,GAAG,IAC9C,eAAe,IAAI,QAAQ,gBAAgB,GAAG;EAAC;;;;;;;;;;;;WC5J7C,OAAyB,GAAG;QAM/B,OAAsB,GAAG;cAMnB;;;EACjB;;;;;;;;;;;;;YCfe,WAA8B;AACzC,qBAAS,WAAS,CAAC,cAAO,EAAE,WAAW;IACzC;;;IARiC,eAAS;IAAO,cAAO;EAAC;;;;;;;;;;;;;;;;;;;;;;;kBAuBtC,OAAW;AAC5B,YAAO,gBAAQ,IAAI,OAAO;AAC1B,YAAO,AAAgB,aAAT,IAAI,kBAAQ,cAAQ,aAAW;AAC7C,kBAAM;AACN,2BAAO;;gBAAK,YAAM,QAAQ;4BAAnB,mBAAuB,cAAQ,QAAC;;AACvC,eAAwB,SAAU,eAAQ,EAAE;AAC1C,yBAAI,MAAM,EAAI,aAAO,GAAE,MAAM,cAAc,CAAC,OAAO;;AAErD,mBAAO,cAAc,CAAC,OAAO;IAC/B;kBAGmB,OAAW;AAC5B,YAAO,gBAAQ,IAAI,OAAO;AAC1B,kBAAM;AACN,eAAwB,SAAU,eAAQ;AAAE,cAAM,cAAc,CAAC,OAAO;IAC1E;;AAGE,WAAO,WAAC,eAAS;AACjB,qBAAS,GAAG;AACZ,UAAmC,WAC/B,YAAM,YAAW,SAAO,CAAC,gBAAQ;AACrC,uBAAO,QAAQ,EAAI;IACrB;WAEuB,OAAW,EAAE,MAAyB;AAC3D,WAAO,WAAC,eAAS;AACjB,YAAO,gBAAQ,IAAI,OAAO;AAC1B,oBAAQ,MAAI,CAAC,MAAM;AACnB,0BAAM;iCAAK,qCAAc,SAAS,aAAa,IAAI,CAAC,OAAO,EAAE;AAC7D,iBAAO,mDAA2B,CAAC,MAAM,MAAM;IACjD;gBAEc,MAAyB,EAAE,WAA8B;AACrE,oBAAI,eAAS,GAAE;AACf,UAAI,WAAW,KAAI,uCAAkB,SAAS,EAAE;AAC9C,sBAAQ,SAAO,CAAC,MAAM;AACtB,cAAM,cAAc,CAAC,gBAAQ;AAC7B,sBAAI,cAAQ,UAAQ,GAAE,YAAM,QAAQ,CAAC,WAAW;aAC3C;AACL,cAAO,WAAW,KAAI,uCAAkB,SAAS;AACjD,6BAAO;;kBAAK,YAAM,QAAQ;8BAAnB,mBAAuB,MAAM;;AACpC,oBAAM,QAAQ,CAAC,WAAW;;IAE9B;;;IArD+B,cAAQ,GAAG;IAGrC,eAAS,GAAG;IACE,aAAO;IACR,YAAM;IARU,YAAM;IAAO,gBAAQ;EAAC;;;;;;;;;;;;;;;;;;;;;IA6GrC;;;;;;QASG,OAAW,EAAE,MAAyB;AAC1D,UAAmC,WAAW,gBAAU,cAAY,CAChE,OAAO,EAAE,kBAAM,oDAA4B,CAAC,MAAM,OAAO;AAC7D,YAAO,SAAQ,MAAK,CAAC,OAAO,EAAE,MAAM;IACtC;;;IArB6C,gBAAU,GACnD;IAOe,aAAO;EAc5B;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ICrEe;;;;;;eAyBG,KAAsB;AACpC,0BAAc,QAAC,KAAK,QAAQ,EAAI,KAAK,KAAK;AAC1C,oBAAI,qBAAgB,CAAC,KAAK,IAAG;AAC3B,8BAAiB,CAAC,KAAK;aAClB;AACL,oCAAuB,CAAC,KAAK;;IAEjC;sBAUuB,KAAsB,GAAG;4BASnB,KAAsB,GAAG;qBAIhC,KAAsB;AAG1C,YAAO,AAAoB,kBAAT,IAAI,QAAQ,iBAAW,IAAI,KAAK,KAAK;IACzD;sBAOoC,OAAW;AAC7C,qBAAO,oBAAc,cAAY,CAAC,OAAO;AACzC,YAAO,qBAAc,QAAC,OAAO;IAC/B;eASgB;sBAgBI,IAAW,EAAE,QAA8B;UACnD;AACV,YAAO,QAAQ,IAAI;AACnB,UAAE;AACF,UAAI;AACF,uBAAO;AACL,wBAAI,uDAAkC,GAAE;AACtC,gBAAa,SAAS,WAAW,IAAI,OAAO,WAAW,KAAK;AAG5D,gBAAa,mBACT,sDAAiC,IAAG,AAAI,AAAK,YAAH,MAAK,OAAO;AAC1D,6CAAU,CACN,AAAE,MAAM,YAAC,+BAAc,IAAI,qBAAY,MAAM,kBAAN,MAAM,aAAY,MAAI,OAAO,eAAG,MAAM,IAAI;;AAEvF,gBAAO;;AAET,cAAM,GAAG,QAAQ;;YACV;YAAW;AAAO,AACzB,gDAAY,YAAY,KAAC,mDAAmB,aAC7B,SAAS,SACb,KAAK,WACH,wBACA,gDAAgB,CAAC,mDACJ;AACpB,sBAAM,+CAAc,CAAC,WAAW,IAAI;AACpC,sBAAM,8CAAsC,CAAC,cAAc,cAChD,iDAAoB,cAAc;UAC/C;;AAEN,YAAO,OAAM;IACf;wBAGyB,UAAsC;AAC7D,+BAAyB,CAAC,UAAU;AACpC,gBAAU,IAAI,KAAC,mCAA2B,CAAC,cAAc,eAAU,iBACjD;IACpB;;;QA3IwB;QAA8B;IAepB,oBAAc,GAAG;IAf3B,iBAAU,GAAV,UAAU;IAC5B,iBAAW,GAAG,IAAI;;;;;;;;;;;;;;;;;;;;;;;;;;4BAkKK,KAAsB;AACjD,kBAAO,CAAC,uCAAkB,SAAS;IACrC;kBAOmB,OAAW,GAAG;kBAGd,OAAW,GAAG;YAapB,WAA8B;AACzC,UAA8B,eAC1B,8BAA4B,CAAC,cAAQ,SAAO;AAChD,oBAAQ,QAAM;AACd,eAAuB,QAAS,aAAY;AAAE,aAAK,QAAQ,CAAC,WAAW;IACzE;;AAIE,kBAAO,CAAC,uCAAkB,SAAS;AACnC,eAAS,UAAW,uBAAgB;AAClC,6CAAc,SAAS,cAAc,YAAY,CAAC,OAAO,EAAE,8BAAW;AACxE,4BAAgB,MAAM;AACtB,qBAAO,cAAQ,UAAQ;AACvB,mBAAa;IACf;;YAY6B,YAAK;;aAIzB,KAAsB;AAC7B,YAAO,KAAK,IAAI;AAChB,qBAAO,cAAQ,UAAQ;AACvB,qBAAO,sBAAgB,QAAQ;AAC/B,YAAO,WAAK,IAAI;AAChB,iBAAK,GAAG,KAAK;IACf;yBAEqC,OAAW;AAC9C,UAAI,WAAK,IAAI,MAAM,MAAO,YAAK,IAAI,CAAC,OAAO,EAAE;AAC7C,YAAO,sCAAc,SAAS,aAAa,IAAI,CAAC,OAAO,EAAE;IAC3D;yBAQ0B,OAAW;AACnC,2CAAc,SAAS,cAAc,SAAS,CAAC,OAAO,EAAE,8BAAW;AACnE,4BAAgB,IAAI,CAAC,OAAO;AAC5B,WAAO,WAAC,cAAQ,gBAAc,CAAC,OAAO;AACtC,oBAAQ,QAAC,OAAO,EAAI,wBAAkB,CAAC,OAAO;IAChD;wBASyB,OAAW;AAClC,oBAAI,sBAAgB,SAAS,CAAC,OAAO,IAAG;AACtC,6CAAc,SAAS,cAAc,YAAY,CAAC,OAAO,EAAE,8BAAW;AACtE,8BAAgB,OAAO,CAAC,OAAO;AAC/B,sBAAI,sBAAgB,QAAQ,GAAE,+BAA0B,CAAC,OAAO;;IAEpE;sCAKuC,KAAkB;AACvD,kDAAI,KAAK,iDAAsB,KAAK,GAClC,wBAAmB,CAAC,KAAK,QAAQ;IACrC;;;QA/GS;QACW;IAGc,cAAQ,GAAG;IAC9B,sBAAgB,GAAG;IAwDjB,WAAK;AA3DjB,iGAAkB,UAAU,QAAQ,IAAI;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAqK/B;;;;;;IASF;;;;;;IAUA;;;;;;IAKU;;;;;;IAGnB;;;;;;IAGG;;;;;;sBAQgB,KAAsB;AAC3C,+BAAoB,CAAC,KAAK,QAAQ;AAClC,UAAI,UAAK,KAAI,gDAAsB,MAAM,EAAE;AACzC,kBAAK,GAAG,gDAAsB,SAAS;AACvC,2BAAc,GAAG,KAAK,QAAQ;AAC9B,4BAAe,GAAG,KAAK,SAAS;AAChC,YAAI,aAAQ,IAAI,MACd,YAAM,GAAG,eAAK,CAAC,aAAQ,EAAE,cAAM,+BAA0B,CAAC,KAAK;;IAErE;gBAGiB,KAAkB;AACjC,YAAO,UAAK,KAAI,gDAAsB,MAAM;AAC5C,UAAI,UAAK,KAAI,gDAAsB,SAAS,IACxC,KAAK,QAAQ,IAAI,mBAAc,EAAE;AACnC,YAAW,+BACwB,WADQ,sBAAgB,KACvD,2BAAsB,IAAI,QACN,aAApB,kBAAY,CAAC,KAAK,kBAAI,2BAAsB;AAChD,YAAW,gCACyB,UADO,sBAAgB,KACvD,4BAAuB,IAAI,QACP,aAApB,kBAAY,CAAC,KAAK,kBAAI,4BAAuB;AAEjD,sDAAI,KAAK,MACJ,4BAA4B,IAAI,6BAA6B,GAAG;AACnE,sBAAO,CAAC,uCAAkB,SAAS;AACnC,kCAAmB,CAAC,mBAAc;eAC7B;AACL,mCAAoB,CAAC,KAAK;;;AAG9B,4CAAiC,CAAC,KAAK;IACzC;;AAYE,YAAO,aAAQ,IAAI;IACrB;+BAQgC,KAAsB;AACpD,4BAAiB;IACnB;kBAGmB,OAAW;AAC5B,4BAAgB,GAAG;IACrB;kBAGmB,OAAW;AAC5B,UAAI,OAAO,IAAI,mBAAc,IAAI,UAAK,KAAI,gDAAsB,SAAS,EAAE;AACzE,wBAAU;AACV,kBAAK,GAAG,gDAAsB,QAAQ;;IAE1C;+BAGgC,OAAW;AACzC,YAAO,UAAK,KAAI,gDAAsB,MAAM;AAC5C,sBAAU;AACV,gBAAK,GAAG,gDAAsB,MAAM;IACtC;;AAIE,sBAAU;AACV,mBAAa;IACf;;AAGE,UAAI,YAAM,IAAI,MAAM;AAClB,oBAAM,OAAO;AACb,oBAAM,GAAG;;IAEb;mBAEoB,KAAkB;AACpC,UAAa,SAAS,AAAe,KAAV,SAAS,MAAG,oBAAe;AACtD,YAAO,OAAM,SAAS;IACxB;wBAGyB,UAAsC;AAC7D,+BAAyB,CAAC,UAAU;AACpC,gBAAU,IAAI,KAAC,4CAAoC,CAAC,SAAS,UAAK;IACpE;;;QA1JO;QACA,kGAAyB,IAAU;QACnC,qGAA0B,IAAU;QAClC;QACW;IAqCG,WAAK,GAAG,gDAAsB,MAAM;IAGvD,oBAAc;IAGX,qBAAe;IAIjB,sBAAgB,GAAG;IAClB,YAAM;IApDL,eAAQ,GAAR,QAAQ;IACR,6BAAsB,GAAtB,sBAAsB;IACtB,8BAAuB,GAAvB,uBAAuB;UAItB,AAA+B,sBAAT,IAAI,QAA+B,aAAvB,sBAAsB,KAAI,sBAC5D;UAGA,AAAgC,uBAAT,IAAI,QAAgC,aAAxB,uBAAuB,KAAI,sBAC9D;AAEF,oGAAkB,UAAU,QAAQ,IAAI;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;sBC5WxB,KAAsB;AAE3C,+BAAoB,CAAC,KAAK,QAAQ;AAClC,kBAAO,CAAC,uCAAkB,SAAS;AACnC,8BAAmB,CAAC,KAAK,QAAQ;IACnC;;YAG+B;IAAO;+BAGN,OAAW,GAAG;gBAG7B,KAAkB,GAAG;;;QAjBI;AAAS,gFAAY,IAAI;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ICwCvD;;;;;;IAGA;;;;;;;;QATI;QACA;IADA,sBAAc,GAAd,cAAc;IACd,gBAAQ,GAAR,QAAQ;UACZ,cAAc,IAAI;UAClB,QAAQ,IAAI;EAAK;;;;;;;;;;;;;;IAwFC;;;;;;IAWC;;;;;;IASF;;;;;;IAMD;;;;;;IAKhB;;;;;;IAMA;;;;;;IA2BmB;;;;;;sBAOT,KAAkB;AAIvC,mDAAM,KAAK,KAAyC,aAAlB,KAAK,YAAY,KAAI,KAAK;AAC1D,oBAAO,CAAC,uCAAkB,SAAS;aAC9B;AACL,iCAAoB,CAAC,KAAK,QAAQ;AAClC,YAAI,YAAM,KAAI,sCAAW,MAAM,EAAE;AAC/B,sBAAM,GAAG,sCAAW,SAAS;AAC7B,6BAAa,GAAG,KAAK,SAAS;;;IAGpC;gBAGiB,KAAkB;AACjC,YAAO,YAAM,KAAI,sCAAW,MAAM;AAElC,oDAAI,KAAK,+CAAwB,KAAK,GAAsB;AAC1D,YAAmB,aAAf,KAAK,SAAS,iBAAG,KAAK,YAAY,KACnB,aAAf,KAAK,SAAS,iBAAG,KAAK,YAAY,GAAE;AACtC,2CAAU,CACR,AAAgC,AACF,AACyB,AACtB,AACV,gDAHnB,KAAK,SAAS,IACd,mEACA,KAAK,YAAY,IACjB,mCACA,KAAK,YAAY;;AAIzB,YAAa,WACT,kBAAa,CAAC,KAAK,YAAY,EAAE,KAAK,YAAY,EAAE,KAAK,SAAS;AACtE,cAAiB,AAEI,aAFb,QAAQ,KAAI,OACC,aAAT,QAAQ,KACJ,OACR,QAAQ,QACE;AAGlB,2BAAa,GAAG,KAAK,SAAS;AAC9B,2BAAa,GAAG,QAAQ;AAExB,YAAI,YAAM,KAAI,sCAAW,SAAS,EAAE;AAClC,cAAa,aAAT,QAAQ,iBAAG,kBAAa,GAAE;AAC5B,wBAAM,GAAG,sCAAW,QAAQ;AAC5B,wBAAO,CAAC,uCAAkB,SAAS;gBAC9B,KAAgC,aAA5B,KAAK,MAAM,gBAAgB,IAAG,IAAU,EAAE;AACnD,wBAAO,CAAC,uCAAkB,SAAS;;;AAKvC,YAAa,aAAT,QAAQ,iBAAG,kBAAa,KAAI,YAAM,KAAI,sCAAW,SAAS,EAAE;AAC9D,sBAAM,GAAG,sCAAW,QAAQ;AAC5B,cAAI,YAAO,IAAI,MAAM;AACnB,+BAAc,YACV,WACA,cAAM,YAAO,KAAC,gDAAiB,YACf,QAAQ,kBACF,mBAAa;;;AAI3C,YAAI,WAAM,IAAI,QACD,aAAT,QAAQ,iBAAG,iBAAY,KACtB,YAAM,KAAI,sCAAW,QAAQ,EAAG;AACnC,sBAAM,GAAG,sCAAW,OAAO;AAC3B,cAAI,WAAM,IAAI,MAAM;AAClB,+BAAc,YACV,UACA,cAAM,WAAM,KAAC,gDAAiB,YACd,QAAQ,kBACF,KAAK,SAAS;;;AAI5C,YAAI,aAAQ,IAAI,SACX,QAAQ,QAAM,KACd,YAAM,KAAI,sCAAW,QAAQ,IAAI,YAAM,KAAI,sCAAW,OAAO,GAAG;AACnE,cAAI,aAAQ,IAAI,MAAM;AACpB,+BAAc,YACV,YACA,cAAM,aAAQ,KAAC,gDAAiB,YAChB,QAAQ,kBACF,KAAK,SAAS;;;;AAK9C,4CAAiC,CAAC,KAAK;IACzC;kBAGmB,OAAW;AAC5B,UAAI,YAAM,KAAI,sCAAW,SAAS,EAAE,YAAM,GAAG,sCAAW,SAAS;AAEjE,UAAI,YAAO,IAAI,QAAQ,YAAM,KAAI,sCAAW,QAAQ,EAAE;AACpD,2BAAc,YACV,WACA,cAAM,YAAO,KAAC,gDAAiB,YACf,mBAAa,kBACP,mBAAa;;IAG3C;+BAGgC,OAAW;AACzC,UAAW,cACP,AAA8B,YAAxB,KAAI,sCAAW,QAAQ,IAAI,YAAM,KAAI,sCAAW,OAAO;AACjE,UAAI,YAAM,KAAI,sCAAW,SAAS,EAAE;AAClC,oBAAO,CAAC,uCAAkB,SAAS;AACnC;;AAEF,UAAI,WAAW,IAAI,UAAK,IAAI,MAAM;AAChC,YAAI,UAAK,IAAI,MAAM;AACjB,6BAAc,YACV,SACA,cAAM,UAAK,KAAC,gDAAiB,YACb,qBACM,mBAAa;;;AAI3C,kBAAM,GAAG,sCAAW,MAAM;IAC5B;kBAGmB,OAAW;AAC5B,8BAAmB,CAAC,OAAO;AAC3B,qCAA0B,CAAC,OAAO;IACpC;wBAE2B,GAAU,EAAE,GAAU,EAAE,CAAQ;AACzD,YAAW,aAAJ,GAAG,kBAAI,GAAG;AACjB,UAAO,QAAkB,CAAP,aAAF,CAAC,iBAAG,GAAG,MAAS,aAAJ,GAAG,iBAAG,GAAG;AAIrC,WAAK,KAAK,QAAM,EAAE,KAAK,GAAG,KAAK,QAAM,CAAC,KAAK;AAC3C,YAAO,MAAK;IACd;;YAG+B;IAAa;;;QA3OrC,uEAAgB;QAChB,oEAAe;QACf,uEAAgB,gHAAY;QAC1B;QACW;IAcW,aAAO;IAWN,cAAQ;IASV,YAAM;IAMP,WAAK;IAwC3B,mBAAa;IACb,mBAAa;IACR,YAAM,GAAG,sCAAW,MAAM;IAtF/B,oBAAa,GAAb,aAAa;IACb,mBAAY,GAAZ,YAAY;IACZ,oBAAa,GAAb,aAAa;UAGP,aAAa,IAAI;UACjB,YAAY,IAAI;UAChB,aAAa,IAAI;UACJ,aAAb,YAAY,iBAAG,aAAa;AACnC,iGAAkB,UAAU,QAAQ,IAAI;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ICzElC;;;;;;;;QAJqB,0EAAiB,UAAM,KAAK;IAA5B,sBAAc,GAAd,cAAc;UACnC,cAAc,IAAI;EAAK;;;;;;;;;IAwBvB;;;;;;IAKA;;;;;;;;QAXN,0EAAiB,UAAM,KAAK;QAC5B,gFAAmB,UAAM,KAAK;IAD9B,sBAAc,GAAd,cAAc;IACd,uBAAgB,GAAhB,gBAAgB;UACV,cAAc,IAAI;UAClB,gBAAgB,IAAI;EAAK;;;;;;;;;;;IA0BzB;;;;;;;;QAJmB,0EAAiB,UAAM,KAAK;IAA5B,sBAAc,GAAd,cAAc;UACjC,cAAc,IAAI;EAAK;;;;;;;;;;;;;;;;IAqDX;;;;;;IASK;;;;;;IASK;;;;;;IAUR;;;;;;IAWC;;;;;;qBAGN,KAAsB;AAC1C,cAAQ,KAAK,QAAQ;YACd,EAAc;;AACjB,cAAI,qBAAgB,IAAI,QACpB,gBAAW,IAAI,QACf,0BAAqB,IAAI,QACzB,mBAAc,IAAI,QAClB,kBAAa,IAAI,MAAM,MAAO;AAClC;;;;AAEA,gBAAO;;;AAEX,YAAO,uBAAsB,CAAC,KAAK;IACrC;;AAKE,kBAAO,CAAC,uCAAkB,SAAS;AACnC,8BAAkB,GAAG;AACrB,yBAAmB,CAAC,mBAAc;AAClC,gCAAoB;IACtB;yBAG0B,KAAkB;AAC1C,kDAAI,KAAK,GAAoB;AAC3B,YAAI,wBAAkB,KAAI,MAAM;AAC9B,kCAAkB,CAAC,KAAK;eACnB;AAEL,sBAAO,CAAC,uCAAkB,SAAS;;AAErC,oBAAM;YACD,iDAAI,KAAK,GAAwB;AACtC,oBAAM;YACD,+CAAI,KAAK,GAAsB;AAEpC,8BAAgB,GAAG,KAAK,SAAS;AACjC,6BAAe,GAAG,KAAK,QAAQ;YAC1B,+CAAI,KAAK,GAAsB;AACpC,YAAI,KAAK,QAAQ,IAAI,qBAAe,EAAE;AACpC,sBAAO,CAAC,uCAAkB,SAAS;AACnC,kCAAmB,CAAC,mBAAc;cAC7B,eAAI,wBAAkB,GAAE;AAC7B,yCAAyB,CAAC,KAAK;;;IAGrC;;AAGE,YAAO,qBAAe,KAAI,CAAc;AACxC,UAA4B,cAAU,mDAAqB,kBACzC,sBAAgB;AAElC,UAAI,qBAAgB,IAAI,MACtB,mBAAc,YAAO,oBAAoB,cAAM,qBAAgB,CAAC,OAAO;AACzE,UAAI,gBAAW,IAAI,MAAM,mBAAc,YAAO,eAAe,gBAAW;IAC1E;gCAE+B,KAAkB;AAC/C,YAAO,qBAAe,KAAI,CAAc;AACxC,UAAiC,cAAU,wDAA0B,kBACnD,KAAK,SAAS,oBACZ,AAAe,KAAV,SAAS,MAAG,sBAAgB;AAErD,UAAI,0BAAqB,IAAI,MAC3B,mBAAc,YACV,yBAAyB,cAAM,0BAAqB,CAAC,OAAO;IACpE;yBAEwB,KAAkB;AACxC,YAAO,qBAAe,KAAI,CAAc;AACxC,UAA0B,cAAU,iDAAmB,kBACrC,KAAK,SAAS;AAEhC,UAAI,mBAAc,IAAI,MACpB,mBAAc,YAAO,kBAAkB,cAAM,mBAAc,CAAC,OAAO;AACrE,UAAI,kBAAa,IAAI,MACnB,mBAAc,YAAO,iBAAiB,kBAAa;IACvD;;AAGE,8BAAkB,GAAG;AACrB,4BAAgB,GAAG;AACnB,2BAAe,GAAG;IACpB;YAGa,WAA8B;AACzC,oBAAI,wBAAkB,KAAI,WAAW,KAAI,uCAAkB,SAAS,EAAE;AAGpE,oBAAM;;AAER,mBAAa,CAAC,WAAW;IAC3B;kBAGmB,OAAW,GAG9B;;YAG+B;IAAY;;;QA1KlC;QACW;QACX;IAQJ,wBAAkB,GAAG;IACnB,sBAAgB;IAGnB,qBAAe;IASM,iBAAW;IASN,sBAAgB;IASX,2BAAqB;IAU7B,mBAAa;IAWZ,oBAAc;AA3DrC,6FACa,0CAAiB,2BACF,uBAAuB,QAC1C,IAAI,cACE,UAAU;EACvB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ICnDW;;;;;;IAYM;;;;;;IAiBC;;;;;;IAYC;;;;;;IAaH;;;;;;IAOG;;;;;;IAOnB;;;;;;IAOA;;;;;;IAKA;;;;;;qBAkBe,KAAkB;AACtC,UAAI,sBAAe,IAAI,MAAM;AAC3B,gBAAQ,KAAK,QAAQ;cACd,EAAc;;AACjB,gBAAI,WAAM,IAAI,QACV,YAAO,IAAI,QACX,aAAQ,IAAI,QACZ,UAAK,IAAI,QACT,aAAQ,IAAI,MAAM,MAAO;AAC7B;;;;AAEA,kBAAO;;;aAEN;AAEL,YAAI,KAAK,QAAQ,IAAI,sBAAe,EAAE;AACpC,gBAAO;;;AAGX,YAAO,uBAAsB,+CAAC,KAAK;IACrC;sBAGuB,KAAkB;AACvC,+BAAoB,CAAC,KAAK,QAAQ;AAClC,6BAAiB,QAAC,KAAK,QAAQ,MAAI,mDAAe;AAClD,UAAI,aAAM,KAAI,kCAAU,MAAM,EAAE;AAC9B,qBAAM,GAAG,kCAAU,SAAS;AAC5B,8BAAgB,GAAG,KAAK,SAAS;AACjC,8BAAe,GAAG,KAAK,QAAQ;AAC/B,gCAAkB,GAAG,UAAM,KAAK;AAChC,wCAA0B,GAAG,KAAK,UAAU;AAC5C,wBAAU;YACL,KAAI,aAAM,KAAI,kCAAU,SAAS,EAAE;AACxC,oBAAO,CAAC,uCAAkB,SAAS;;IAEvC;gBAGiB,KAAkB;AACjC,YAAO,aAAM,KAAI,kCAAU,MAAM;AACjC,qBAAK,KAAK,YAAY,gDACjB,KAAK,+CAAwB,KAAK,IAAuB;AAC5D,YAAsB,UAAU,uBAAiB,QAAC,KAAK,QAAQ;AAC/D,cAAO,OAAO,IAAI;AAClB,eAAO,YAAY,CAAC,KAAK,UAAU,EAAE,KAAK,SAAS;;AAGrD,oDAAI,KAAK,GAAsB;AAC7B,YAAI,KAAK,QAAQ,IAAI,sBAAe,EAAE;AACpC,sBAAO,CAAC,uCAAkB,SAAS;AACnC,kCAAmB,CAAC,KAAK,QAAQ;AACjC;;AAEF,YAAa,QAAQ,KAAK,MAAM;AAChC,YAAI,aAAM,KAAI,kCAAU,SAAS,EAAE;AACjC,4BAAY,mBACO,KAAK,UAAU,SACzB,yBAAmB,CAAC,KAAK,iBAClB,gCAA0B,CAAC,KAAK,mBAC9B,KAAK,SAAS;eAE3B;AACL,kCAAkB,GA1P1B,AA0PQ,wBAAkB,MAAI,KAAK;AAC3B,0CAA0B,GAAG,KAAK,UAAU;AAC5C,wBAAI,4CAAsC,GACxC,YAAO,CAAC,uCAAkB,SAAS;;;AAGzC,4CAAiC,CAAC,KAAK;IACzC;kBAGmB,OAAW;AAC5B,UAAI,aAAM,KAAI,kCAAU,SAAS,EAAE;AACjC,qBAAM,GAAG,kCAAU,SAAS;AAC5B,YAAa,QAAQ,wBAAkB;AACvC,YAAe,YAAY,gCAA0B;AACrD,YAAO;AACP,gBAAQ,sBAAiB;cAClB,4CAAiB,MAAM;;AAC1B,kCAAgB,GAAG,AAAiB,sBAAD,MAAG,KAAK;AAC3C,uBAAW,GAAG,UAAM,KAAK;AACzB;;cACG,4CAAiB,KAAK;;AACzB,uBAAW,GAAG,yBAAmB,CAAC,KAAK;AACvC;;;AAEJ,gCAAkB,GAAG,UAAM,KAAK;AAChC,wCAA0B,GAAG;AAC7B,yBAAW,CAAC,SAAS;AACrB,yBAAI,WAAW,EAAI,UAAM,KAAK,GAAE;AAC9B,4BAAY,mBACO,SAAS,SACnB,WAAW,gBACJ,gCAA0B,CAAC,WAAW,mBACpC,AAAiB,sBAAD,MAC5B,WAAW;;;IAIvB;kBAGmB,OAAW;AAC5B,8BAAmB,CAAC,OAAO;IAC7B;+BAGgC,OAAW;AACzC,YAAO,aAAM,KAAI,kCAAU,MAAM;AACjC,cAAQ,aAAM;YACP,mCAAU,MAAM;;AACnB;;YAEG,mCAAU,SAAS;;AACtB,sBAAO,CAAC,uCAAkB,SAAS;AACnC,4BAAY;AACZ;;YAEG,mCAAU,SAAS;;AACtB,yBAAS,CAAC,OAAO;AACjB;;;AAEJ,6BAAiB,QAAM;AACvB,4BAAe,GAAG;AAClB,mBAAM,GAAG,kCAAU,MAAM;IAC3B;;AAGE,YAAO,sBAAe,KAAI,CAAc;AACxC,UAAsB,cAAU,+CAAe,kBAC7B,sBAAgB;AAElC,UAAI,WAAM,IAAI,MAAM,mBAAc,YAAO,UAAU,cAAM,WAAM,CAAC,OAAO;IACzE;kBAEiB,SAAkB;AACjC,YAAO,sBAAe,KAAI,CAAc;AACxC,UAAuB,cAAU,gDAAgB,mBAC9B,SAAS,kBACV,sBAAgB;AAElC,UAAI,YAAO,IAAI,MACb,mBAAc,YAAO,WAAW,cAAM,YAAO,CAAC,OAAO;IACzD;;UAGW;UACF;UACA;UACA;AAEP,YAAO,sBAAe,KAAI,CAAc;AACxC,UAAwB,cAAU,iDAAiB,mBAChC,eAAe,SACzB,KAAK,gBACE,YAAY,kBACV,cAAc;AAEhC,UAAI,aAAQ,IAAI,MACd,mBAAc,YAAO,YAAY,cAAM,aAAQ,CAAC,OAAO;IAC3D;gBAEe,OAAW;AACxB,YAAO,sBAAe,KAAI,CAAc;AACxC,UAAI,UAAK,IAAI,MAAM;AAEnB,UAAsB,UAAU,uBAAiB,QAAC,OAAO;AACzD,YAAO,OAAO,IAAI;AAElB,UAAe;AACf,UAAgB;AAEhB,UAAuB,WAAW,OAAO,oBAAoB;AAC7D,UAAI,QAAQ,IAAI,kBAAQ,qBAAe,CAAC,QAAQ,IAAG;AACjD,YAAe,eACX,4CAAQ,mBAAkB,QAAQ,gBAAgB,iBAAgB;kBAC9D,qBAAgB;iCAAI,IAAiB;;kBACrC,qBAAgB;iCAAI,MAAiB;;AAC7C,eAAO,OAAG,8CAAc,YACZ,QAAQ,mBACD,gCAA0B,CAAC,QAAQ,gBAAgB;AAEtE,mBAAW,GAAG,cACL,SAAE,QAAQ,6BAAY,QAAQ;aAElC;AACL,eAAO,OAAG,8CAAc,YACZ,wCAAQ,KAAK,mBACN;AAEnB,mBAAW,GAAG;AACZ,cAAI,QAAQ,IAAI,MAAM,MAAO;AAC7B,gBAAO,UAAE,QAAQ;;;AAGrB,yBAAc,YAAO,SAAS,cAAM,UAAK,CAAC,OAAO,sDAChC,WAAW;IAC9B;;AAGE,YAAO,sBAAe,KAAI,CAAc;AACxC,UAAI,aAAQ,IAAI,MAAM,mBAAc,YAAO,YAAY,aAAQ;IACjE;;AAIE,6BAAiB,QAAM;AACvB,mBAAa;IACf;wBAGyB,UAAsC;AAC7D,+BAAyB,CAAC,UAAU;AACpC,gBAAU,IAAI,KACV,uCAA+B,CAAC,kBAAkB,sBAAiB;IACzE;;;QAtVS;QACW;QACb,mFAAoB,2CAAiB,MAAM;IAqC1B,YAAM;IAiBL,cAAO;IAYN,eAAQ;IAaX,YAAK;IAOF,cAAQ;IAO3B,sBAAgB;IAOhB,sBAAgB;IAKhB,sBAAgB;IAEZ,aAAM,GAAG,kCAAU,MAAM;IAC7B,sBAAgB;IAChB,wBAAkB;IAChB,gCAA0B;IAG/B,sBAAe;IAOa,uBAAiB,GAAG;IAxH7C,wBAAiB,GAAjB,iBAAiB;UACX,iBAAiB,IAAI;AAC5B,wFAAkB,UAAU,QAAQ,IAAI;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;sBAyW1B,QAAyB;AAC5C,cAA2B,qBAAgB;UAA9B,8BAAkC,IAAiB;AAChE,eAA2B,qBAAgB;UAA9B,gCAAkC,IAAU;AACzD,YAAO,AAAkC,AAAc,SAAxC,gBAAgB,GAAG,MAAI,KAAK,WAAW,IAClD,AAAyB,QAAjB,OAAO,GAAG,MAAI,KAAK,WAAW;IAC5C;;YAII,AAA4B,yBAAV,GAAG,MAAI,KAAK,IAAU;;0BAGjB,KAAY;iBAAK,cAAM,CAAC,KAAK,KAAK,GAAG;IAAC;iCAG/B,KAAY;YAAK,MAAK,GAAG;;;YAG5B;IAAe;;;QAvBrC;QACW;AACf,gGAAkB,UAAU,QAAQ,IAAI;EAAC;;;;;;;;;;;;;;;sBA4CzB,QAAyB;AAC5C,cAA2B,qBAAgB;UAA9B,8BAAkC,IAAiB;AAChE,eAA2B,qBAAgB;UAA9B,gCAAkC,IAAU;AACzD,YAAO,AAAkC,AAAc,SAAxC,gBAAgB,GAAG,MAAI,KAAK,WAAW,IAClD,AAAyB,QAAjB,OAAO,GAAG,MAAI,KAAK,WAAW;IAC5C;;YAII,AAA4B,yBAAV,GAAG,MAAI,KAAK,IAAU;;0BAGjB,KAAY;iBAAK,cAAM,CAAC,KAAK,GAAG,EAAE;IAAI;iCAG/B,KAAY;YAAK,MAAK,GAAG;;;YAG5B;IAAiB;;;QAvBvC;QACW;AACf,kGAAkB,UAAU,QAAQ,IAAI;EAAC;;;;;;;;;;;;;;;sBAsCzB,QAAyB;AAC5C,cAA2B,qBAAgB;UAA9B,8BAAkC,IAAiB;AAChE,eAA2B,qBAAgB;UAA9B,gCAAkC,IAAU;AACzD,YAAgD,AACd,cAD3B,QAAQ,gBAAgB,gBAAgB,IACvC,AAAY,WAAD,GAAG,WAAW,IACG,aAAhC,QAAQ,OAAO,gBAAgB,IAAG,AAAY,WAAD,GAAG,WAAW;IACjE;;AAIE,YAAmC,cAA5B,wBAAkB,SAAS,IAAG,IAAQ;IAC/C;0BAG2B,KAAY;YAAK,MAAK;;iCAGf,KAAY;YAAK;IAAI;;YAGxB;IAAK;;;QAvBP;AAAe,uFAAkB,UAAU;EAAC;;;;;;;;;;;;;;;IC5czC;;;;;;IAIA;;;;;;IAID;;;;;;;AAI7B,UAAa,OACT,AAAC,YAAO,IAAI,QAAQ,WAAM,IAAI,QAAQ,YAAO,IAAI,OAAQ,YAAY;AACzE,YAAO,gBAAG,kBAAW,IAAE,eAAQ,gBAAc,CAAC,MAAK,IAAI,IAChD,YAAO,IAAI,OAAO,KAAK,eACvB,YAAO,IAAI,OAAO,KAAK,eAC1B,CAAG,WAAM,IAAI,OAAO,KAAK;IAC/B;;;QAtBmC;QAAc;QAAc;IAA5B,cAAO,GAAP,OAAO;IAAO,cAAO,GAAP,OAAO;IAAO,aAAM,GAAN,MAAM;EAAE;;;;;;;;;;;;;;mEA4BpD,UAAe;IAWzB,kBAAa,GAAG;IAXD,eAAU,GAAV,UAAU;EAAC;;;;;;;;;;;;;;;;;IAyCC;;;;;;qBAWd,UAAiC;AACrD,+BAAmB,QAAC,UAAU,MAAI,oDAAkB,CAAC,UAAU;AAG/D,uCAA2B;IAC7B;qBAOsB,UAAiC;AACrD,UAAyB,oBAAoB,qBAAe,CAAC,UAAU;AACvE,eAAS,WAAY,kBAAiB,cAAc,EAAE;AACpD,YAAI,UAAU,OAAO,IAAI,MAAM;AAC7B,oBAAU,OACC,KAAC,qDAA+B,CAAC,qBAAe,QAAC,QAAQ;;;AAGxE,+BAAmB,SAAO,CAAC,UAAU;IACvC;;AAOE,oBAAI,yBAAmB,aAAW,gBAAK,8BAAwB,GAAE;AAC/D,sCAAwB,GAAG;AAC3B,gDAAgB,SAAS,qBAAqB,CAAC,QAAC,CAAU;AACxD,wCAAwB,GAAG;AAC3B,oCAAqB;;AAEvB,gDAAgB,SAAS,cAAc;;IAE3C;mBAGkB,KAAkB;AAClC,UAAI,KAAK,KAAK,KAAI,qBAAiB,MAAM,EAAE;AACzC;;AAEF,UAAU,WAAW,KAAK,OAAO;AACjC,qDAAI,KAAK,GAAuB;AAC9B,4BAAc,CAAC,QAAQ,EAAE,KAAK;AAC9B;;AAEF,uDAAI,KAAK,GAAyB;AAChC,+BAAiB,CAAC,QAAQ;AAG1B,yCAA2B;aACtB;AACL,sDAAI,KAAK,gDACL,KAAK,+CACL,KAAK,GAAsB;AAC7B,yBAAK,qBAAe,cAAY,CAAC,QAAQ,mBACrC,qBAAe,QAAC,QAAQ,UAAU,EAAI,KAAK,SAAS,GAAE;AAGxD,6CAA2B;;AAE7B,8BAAc,CAAC,QAAQ,EAAE,KAAK;;;IAGpC;sBAEmC,UAAiC;AAClE,UAAyB,oBACrB,yBAAmB,QAAC,UAAU;AAClC,YACI,iBAAiB,IAAI,yBACrB,wCAA4B,UAAU,kCACtC;AACJ,YAAO,kBAAiB;IAC1B;yBAQ0B,UAAiC;AACzD,YAAO,0BAAmB,cAAY,CAAC,UAAU;IACnD;;AAaE,YAAK,kBAAe,iBAAoC,EAAE,QAAY;AACpE,aAAI,iBAAiB,WAAW,kBAA5B,iBAAiB,WAAW,OAAQ,KAAI,kBACxC,iBAAiB,cAAc,SAAS,CAAC,QAAQ,IAAG;AACtD,2BAAiB,WAAW,OACjB,KAAC,qDAA+B,CAAC,qBAAe,QAAC,QAAQ;AACpE,2BAAiB,cAAc,OAAO,CAAC,QAAQ;;;cAL9C;AASL,eAAK,eAAe,iBAAoC;AACtD,sBAAI,iBAAiB,cAAc,WAAW,GAAE;AAC9C,cAAe,YAAY,iBAAiB,cAAc,MAAM;AAChE,mBAAS,WAAY,UAAS,EAAE;AAC9B,0BAAc,CAAC,iBAAiB,EAAE,QAAQ;;;;cAJ3C;AAYL,qBAAK,qBAAgB,GAAE;AACrB,iCAAmB,SAAO,UAAQ,CAAC,cAAc;AACjD;;AAGF,eAAS,WAAY,sBAAe,OAAK,EAAE;AACzC,YAAmB,YAAY,qBAAe,QAAC,QAAQ;AACvD,YAAuC,OACnC,qBAAgB,CAAC,SAAS,SAAS;AAIvC,sBAAI,IAAI,UAAQ,GAAE;AAEhB,mBAAwB,oBACjB,0BAAmB,SAAO,EAAE;AACjC,0BAAc,CAAC,iBAAiB,EAAE,QAAQ;;AAE5C;;AAGF,YAA8B,uDAAiB,IAAI,MAC3C,mDACA,QAAC,GAA0B,IAAK,qBAAe,CAAC,GAAG,0DACjD;AACV,iBAAwB,gBAAiB,eAAc,EAAE;AACvD,yBAAK,aAAa,cAAc,SAAS,CAAC,QAAQ,IAAG;AAGnD,yBAAa,cAAc,IAAI,CAAC,QAAQ;AACxC,iBAAI,aAAa,WAAW,kBAAxB,aAAa,WAAW,QAAS,KAAI,MAAM;AAC7C,2BAAa,WAAW,QACZ,KAAC,sDAAgC,CAAC,SAAS;;;AAG3D,eAAI,aAAa,WAAW,kBAAxB,aAAa,WAAW,QAAS,KAAI,mDACrC,SAAS,GAAuB;AAClC,yBAAa,WAAW,QAAQ,CAAC,SAAS;;AAK5C,mBAAwB,oBACjB,0BAAmB,SAAO,EAAE;AACjC,0BAAI,cAAc,SAAS,CAAC,iBAAiB,IAAG;AAC9C;;AAEF,0BAAI,iBAAiB,cAAc,SAAS,CAAC,QAAQ,IAAG;AACtD,mBAAI,iBAAiB,WAAW,kBAA5B,iBAAiB,WAAW,OAAQ,KAAI,MAAM;AAChD,iCAAiB,WAAW,OACjB,KAAC,qDAA+B,CAAC,SAAS;;AAEvD,+BAAiB,cAAc,OAAO,CAAC,QAAQ;;;;;IAKzD;qBAEoB,QAAY,EAAE,KAAkB;AAClD,UAAW,eAAe,qBAAgB;AAC1C,2BAAe,QAAC,QAAQ,EAAI,KAAK;AACjC,UAAI,qBAAgB,IAAI,YAAY,EAAE;AACpC,4BAAe;;IAEnB;wBAEuB,QAAY;AACjC,UAAW,eAAe,qBAAgB;AAC1C,2BAAe,SAAO,CAAC,QAAQ;AAC/B,UAAI,qBAAgB,IAAI,YAAY,EAAE;AACpC,4BAAe;;IAEnB;;YAS6B,sBAAe,aAAW;;;6DA5N1C,MAAoB,EAAE,gBAAqB;IAWF,yBAAmB,GACrE;IA6BC,8BAAwB,GAAG;IAgLH,qBAAe,GAAG;IAzNP,uBAAgB,GAAhB,gBAAgB;UAC3C,MAAM,IAAI;UACV,gBAAgB,IAAI;;AAC/B,UAAM,eAAe,CAAC,6BAAY;EACpC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ICtEa;;;;;;;YAWc,oBAAa;;qBAMpB,KAAuB;AACzC,YAAO,iBAAW,IAAI;AACtB,YAAO,iBAAY,IAAI;AACvB,YAAO,aAAO,IAAI;AAClB,uBAAW,GAAG,KAAK;IACrB;YAKa,WAA8B;AACzC,uBAAW,QAAQ,CAAC,WAAW;IACjC;YAEW,KAAsB;AAC/B,YAAO,iBAAW,IAAI;AACtB,qBAAK,KAAK,YAAY,GACpB,sBAAgB,YAAY,CAAC,KAAK,UAAU,EAAE,KAAK,SAAS;AAC9D,UAAI,aAAO,IAAI,MAAM;AACnB,cAAO,iBAAY,IAAI;AAEvB,qBAAO,OAAO,KAAC,iDAAiB,mBACb,KAAK,UAAU,SACzB,KAAK,MAAM,kBACF,KAAK,SAAS;aAE3B;AACL,cAAO,iBAAY,IAAI;AACvB,2BAAa,GA7EnB,AA6EM,mBAAa,MAAI,KAAK,MAAM;AAC5B,yCAA0B,GAAG,KAAK,UAAU;AAC5C,wCAA2B;;IAE/B;mCAMoC;;AAelC,YAAO,iBAAW,IAAI;AACtB,YAAO,aAAO,IAAI;AAClB,YAAO,iBAAY,IAAI;AACvB,yBAAa,GAAG;AAChB,uCAA0B,GAAG;AAC7B,uBAAW,GAAG;IAChB;iBAEgB,MAAW;AACzB,YAAO,iBAAW,IAAI;AACtB,YAAO,aAAO,IAAI;AAClB,YAAO,MAAM,IAAI;AACjB,YAAO,iBAAY,IAAI;AACvB,mBAAO,GAAG,MAAM;AAChB,UAAwB,cAAU,iDAAiB,mBAChC,iCAA0B,SACpC,iBAAY,kBACH,oBAAe;AAEjC,yBAAa,GAAG;AAChB,uCAA0B,GAAG;AAE7B,mBAAO,OAAO,CAAC,OAAO;IACxB;;AAGE,YAAO,iBAAW,IAAI;AACtB,UAAI,aAAO,IAAI,MAAM;AACnB,cAAO,iBAAY,IAAI;AACvB,YAAqB,cACjB,8CAAc,YAAW,sBAAgB,YAAY;AACzD,YAAW,SAAS,aAAO;AAC3B,qBAAO,GAAG;AAEV,cAAM,IAAI,CAAC,OAAO;aACb;AACL,cAAO,iBAAY,IAAI;AACvB,2BAAa,GAAG;AAChB,yCAA0B,GAAG;;IAEjC;;AAGE,YAAO,iBAAW,IAAI;AACtB,UAAI,aAAO,IAAI,MAAM;AACnB,cAAO,iBAAY,IAAI;AACvB,YAAW,SAAS,aAAO;AAC3B,qBAAO,GAAG;AAEV,cAAM,OAAO;aACR;AACL,cAAO,iBAAY,IAAI;AACvB,2BAAa,GAAG;AAChB,yCAA0B,GAAG;;IAEjC;;AAME,+BAAW;mCAAU,uCAAkB,SAAS;AAChD,uBAAW,GAAG;AACd,qBAAO;AACL,2BAAa,GAAG;AAChB,cAAO;;IAEX;;iEA5IsB,eAAoB;IAKpB,sBAAgB,OAAG,mDAAe;IACnD,aAAO;IASL,mBAAa,GAAG,UAAM,KAAK;IAEzB,iCAA0B;IAEjB,iBAAW;IAnBF,sBAAe,GAAf,eAAe;UAAW,eAAe,IAAI;EAAK;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA+K/C;;;;;;wBAKP,KAAsB;AAC3C,cAAO,eAAS,IAAI;AACpB,cAAO,KAAK,QAAQ,IAAI;AACxB,cAAO,KAAK,SAAS,IAAI;AACzB,aAAO,WAAC,eAAS,cAAY,CAAC,KAAK,QAAQ;AAC3C,YAAQ,QAAQ,0BAAqB,CAAC,KAAK;AAC3C,uBAAS,QAAC,KAAK,QAAQ,EAAI,KAAK;AAChC,6CAAc,SAAS,cAAc,SAAS,CAAC,KAAK,QAAQ,EAAE,8BAAY;AAC1E,aAAK,gBAAe,CAChB,qCAAc,SAAS,aAAa,IAAI,CAAC,KAAK,QAAQ,EAAE;MAC9D;sBAOkB,KAAkB;AAClC,cAAO,eAAS,IAAI;AACpB,cAAO,KAAK,QAAQ,IAAI;AACxB,cAAO,KAAK,UAAU,IAAI;AAC1B,cAAO,KAAK,SAAS,IAAI;AACzB,uBAAO,eAAS,cAAY,CAAC,KAAK,QAAQ;AAC1C,YAAQ,QAAQ,eAAS,QAAC,KAAK,QAAQ;AACvC,sDAAI,KAAK,GAAsB;AAC7B,eAAK,OAAM,CAAC,KAAK;cAEZ,6CAAI,KAAK,GAAoB;AAClC,2BAAO,KAAK,MAAM,EAAI,UAAM,KAAK;AACjC,eAAK,KAAI;AAET,4BAAY,CAAC,KAAK,QAAQ;cACrB,iDAAI,KAAK,GAAwB;AACtC,2BAAO,KAAK,MAAM,EAAI,UAAM,KAAK;AACjC,eAAK,SAAQ;AAEb,4BAAY,CAAC,KAAK,QAAQ;cACrB,gDAAI,KAAK,GAAuB;AAIrC,eAAO;;MAEX;oBAGmB,OAAW;AAC5B,cAAO,eAAS,IAAI;AACpB,YAAQ,QAAQ,eAAS,QAAC,OAAO;AACjC,YAAI,KAAK,IAAI,MACX;AACF,aAAK,SAAS,CACV,QAAC,eAAsB,IAAK,gBAAU,CAAC,eAAe,EAAE,OAAO;MACrE;mBAEgB,eAAsB,EAAE,OAAW;AACjD,cAAO,eAAS,IAAI;AACpB,YAAQ,QAAQ,eAAS,QAAC,OAAO;AACjC,cAAO,KAAK,IAAI;AAChB,cAAO,KAAK,eAAc,IAAI;AAC9B,YAAK;AACL,YAAI,YAAO,IAAI,MACb,IAAI,GAAG,mBAAc,2BAAO,WAAW,cAAM,YAAO,CAAC,eAAe;AACtE,YAAI,IAAI,IAAI,MAAM;AAChB,eAAK,YAAW,CAAC,IAAI;eAChB;AACL,4BAAY,CAAC,OAAO;;AAEtB,cAAO,KAAI;MACb;oBAGmB,OAAW;AAC5B,cAAO,eAAS,IAAI;AACpB,sBAAI,eAAS,cAAY,CAAC,OAAO,IAAG;AAClC,cAAQ,QAAQ,eAAS,QAAC,OAAO;AACjC,gBAAO,KAAK,IAAI;AAChB,eAAK,SAAS;AACd,4BAAY,CAAC,OAAO;;MAExB;qBAEkB,OAAW;AAC3B,YAAI,eAAS,IAAI,MAAM;AAGrB;;AAEF,uBAAO,eAAS,cAAY,CAAC,OAAO;AACpC,6CAAc,SAAS,cAAc,YAAY,CAAC,OAAO,EAAE,8BAAY;AACvE,uBAAS,SAAO,CAAC,OAAO,SAAS;MACnC;;AAIE,uBAAS,OAAK,SAAO,YAAU,CAAC,6BAAY;AAC5C,uBAAO,eAAS,UAAQ;AACxB,uBAAS,GAAG;AACZ,qBAAa;MACf;;;UAhHmB;UACC;MAOU,aAAO;MAEzB,eAAS,GAAG;AARnB,uEAAkB,UAAU,QAAQ,IAAI;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;AAsH5C,YAAO,iBAAY,IAAI;AACvB,UAA0B,aAAtB,iBAAY,SAAS,IAAG,IAAU,EACpC,YAAO,CAAC,uCAAkB,SAAS;IACvC;aAGc,OAAqC;AACjD,aAAO,CAAC,oBAAe;IACzB;;kEAZuB,eAAsB;AAAI,6EAAM,eAAe;EAAC;;;;;;;;0BAwC1B,KAAsB;AACjE,iBAAO,mDAAsB,CAAC,KAAK,SAAS;IAC9C;;YAG+B;IAAW;;;QAVjC;QACW;AACf,uGAAkB,UAAU,QAAQ,IAAI;EAAC;;;;;;;;;;;;;AAgB5C,YAAO,iBAAY,IAAI;AACvB,UAAI,AAAsB,iBAAV,GAAG,MAAI,KAAK,IAAU,EACpC,YAAO,CAAC,uCAAkB,SAAS;IACvC;aAGc,OAAqC;AACjD,aAAO,CAAC,oBAAe;IACzB;;mEAZwB,eAAsB;AAAI,8EAAM,eAAe;EAAC;;;;;;;;0BAwC1B,KAAsB;AAClE,iBAAO,oDAAuB,CAAC,KAAK,SAAS;IAC/C;;YAG+B;IAAsB;;;QAV5C;QACW;AACf,wGAAkB,UAAU,QAAQ,IAAI;EAAC;;;;;;;;;;;;;AAgB5C,YAAO,iBAAY,IAAI;AACvB,UAAI,AAAsB,iBAAV,GAAG,MAAI,KAAK,IAAU,EACpC,YAAO,CAAC,uCAAkB,SAAS;IACvC;aAGc,OAAqC;AACjD,aAAO,CAAC,oBAAe;IACzB;;iEAZsB,eAAsB;AAAI,4EAAM,eAAe;EAAC;;;;;;;;0BAwC1B,KAAsB;AAChE,iBAAO,kDAAqB,CAAC,KAAK,SAAS;IAC7C;;YAG+B;IAAoB;;;QAV1C;QACW;AACf,sGAAkB,UAAU,QAAQ,IAAI;EAAC;;;;;;;;;;;;;;;;;AAsB5C,YAAO,aAAM,IAAI;AACjB,YAAO,iBAAY,IAAI;AACvB,YAA6B,aAAtB,iBAAY,SAAS,KAAI,IAAU;AAC1C,mBAAM,GAAG;AACT,UAAI,cAAQ,IAAI,MAAM;AACpB,sBAAQ,CAAC,oBAAe;AACxB,sBAAQ,GAAG;aACN;AACL,oBAAO,CAAC,uCAAkB,SAAS;;AAErC,YAAO,cAAQ,IAAI;IACrB;;AAGE,2BAAM;;AACN,mBAAM,GAAG;IACX;aAGc,OAAqC;AACjD,YAAO,cAAQ,IAAI;AACnB,UAAI,aAAM,IAAI;AACZ,eAAO,CAAC,oBAAe;;AAEvB,sBAAQ,GAAG,OAAO;IACtB;;AAIE,UAAI,aAAM,IAAI,MAAM;AAMlB,cAAO,cAAQ,IAAI;AACnB;;AAEF,YAAO,iBAAY,IAAI;AACvB,UAA0B,aAAtB,iBAAY,SAAS,IAAG,IAAU,EAAE;AACtC,oBAAO,CAAC,uCAAkB,SAAS;AACnC,iCAAmB;;IAEvB;;AAIE,+BAAmB;AACnB,mBAAa;IACf;;gEA3DqB,eAAsB,EAAE,KAAc;IAMrD,aAAM;IACkB,cAAQ;UANzB,KAAK,IAAI;AAChB,2EAAM,eAAe;AACzB,iBAAM,GAAG,eAAK,CAAC,KAAK,EAAE,6BAAY;EACpC;;;;;;;;;;;;;;;IA6Fe;;;;;;0BAG4B,KAAsB;AAC/D,iBAAO,iDAAoB,CAAC,KAAK,SAAS,EAAE,UAAK;IACnD;;YAG+B;IAAgB;;;QAhBxC,+CAAQ,0CAAiB;QACvB;QACW;IAFb,YAAK,GAAL,KAAK;UAGC,KAAK,IAAI;AAChB,qGAAkB,UAAU,QAAQ,IAAI;EAAC;;;;;;;;;;;;;;;;;IC5gBlC;;;;;;IAGW;;;;;;;;QARjB,0EAAiB,UAAM,KAAK;QAC5B;IADA,sBAAc,GAAd,cAAc;IACd,YAAI,GAAJ,IAAI;UACC,cAAc,IAAI;EAAK;;;;;;;;;;;IAiCtB;;;;;;;;QAJM,0EAAiB,UAAM,KAAK;IAA5B,sBAAc,GAAd,cAAc;UACpB,cAAc,IAAI;EAAK;;;;;;;;;;;;;;;;;IA2Eb;;;;;;IAgBF;;;;;;IAcF;;;;;;IAcM;;;;;;IAiBF;;;;;;IAgBF;;;;;;IAcI;;;;;;qBAUH,KAAsB;AAC1C,cAAQ,KAAK,QAAQ;YACd,EAAc;;AACjB,cAAI,cAAS,IAAI,QACb,UAAK,IAAI,QACT,YAAO,IAAI,QACX,gBAAW,IAAI,MAAM,MAAO;AAChC;;YACG,EAAgB;;AACnB,cAAI,uBAAkB,IAAI,QACtB,qBAAgB,IAAI,QACpB,yBAAoB,IAAI,MAAM,MAAO;AACzC;;;;AAEA,gBAAO;;;AAEX,YAAO,uBAAsB,CAAC,KAAK;IACrC;sBAGuB,KAAsB;AAC3C,6BAAuB,CAAC,KAAK;AAI7B,6BAAe,GAAG,KAAK,QAAQ;IACjC;yBAG0B,KAAkB;AAC1C,kDAAI,KAAK,GAAoB;AAC3B,4BAAc,GAAG,KAAK,SAAS;AAC/B,sBAAQ;YACH,iDAAI,KAAK,GAAwB;AACtC,oBAAO,CAAC,uCAAkB,SAAS;AACnC,sBAAI,kBAAY,GAAE;AAChB,6BAAY,CAAC;;AAEf,qBAAM;YACD,KAAI,KAAK,QAAQ,IAAI,uBAAe,EAAE;AAC3C,oBAAO,CAAC,uCAAkB,SAAS;AACnC,gCAAmB,CAAC,mBAAc;;IAEtC;YAGa,WAA8B;AACzC,oBAAI,gCAA0B,KAC1B,WAAW,KAAI,uCAAkB,SAAS,EAAE;AAI9C,uBAAO,kBAAY;AACnB,2BAAY,CAAC;AACb,qBAAM;;AAER,mBAAa,CAAC,WAAW;IAC3B;+BAGgC,KAAsB;AACpD,uBAAU,CAAC,KAAK,QAAQ;IAC1B;kBAGmB,OAAW;AAC5B,yBAAmB,CAAC,OAAO;AAC3B,UAAI,OAAO,IAAI,mBAAc,EAAE;AAC7B,yBAAU,CAAC,OAAO;AAClB,wCAA0B,GAAG;AAC7B,sBAAQ;;IAEZ;kBAGmB,OAAW;AAC5B,yBAAmB,CAAC,OAAO;AAC3B,UAAI,OAAO,IAAI,mBAAc,EAAE;AAE7B,cAAO,UAAK,KAAI,gDAAsB,SAAS;AAC/C,sBAAI,kBAAY,GAAE,mBAAY,CAAC;AAC/B,qBAAM;;IAEV;kBAEgB,OAAW;AACzB,oBAAI,kBAAY,GAAE;AAChB;;AAEF,UAAqB,cAAU,qCAAc,kBAC3B,oBAAe,QACzB,sBAAiB,CAAC,OAAO;AAEjC,cAAQ,uBAAe;YAChB,EAAc;;AACjB,cAAI,cAAS,IAAI,MACf,mBAAc,YAAO,aAAa,cAAM,cAAS,CAAC,OAAO;AAC3D;;YACG,EAAgB;;AACnB,cAAI,uBAAkB,IAAI,MACxB,mBAAc,YACV,sBAAsB,cAAM,uBAAkB,CAAC,OAAO;AAC5D;;;;AAGJ,wBAAY,GAAG;IACjB;;AAGE,qBAAK,gCAA0B,KAAI,oBAAc,IAAI,MAAM;AACzD;;AAEF,UAAmB,cAAU,mCAAY,kBACvB,oBAAc;AAEhC,cAAQ,uBAAe;YAChB,EAAc;;AACjB,cAAI,YAAO,IAAI,MACb,mBAAc,YAAO,WAAW,cAAM,YAAO,CAAC,OAAO;AACvD,cAAI,UAAK,IAAI,MAAM,mBAAc,YAAO,SAAS,UAAK;AACtD;;YACG,EAAgB;;AACnB,cAAI,qBAAgB,IAAI,MACtB,mBAAc,YACV,oBAAoB,cAAM,qBAAgB,CAAC,OAAO;AACxD;;;;AAGJ,mBAAM;IACR;oBAEkB,IAAW;AAC3B,cAAQ,uBAAe;YAChB,EAAc;;AACjB,cAAI,gBAAW,IAAI,MACjB,mBAAc,YAAO,SAAG,IAAI,mBAAe,gBAAW;AACxD;;YACG,EAAgB;;AACnB,cAAI,yBAAoB,IAAI,MAC1B,mBAAc,YACV,SAAG,IAAI,4BAAwB,yBAAoB;AACzD;;;;IAGN;;AAGE,wBAAY,GAAG;AACf,sCAA0B,GAAG;AAC7B,0BAAc,GAAG;AACjB,6BAAe,GAAG;IACpB;;YAG+B;IAAK;wBAGX,UAAsC;AAC7D,+BAAyB,CAAC,UAAU;AACpC,gBAAU,IAAI,KAAC,6CAAY,CAAC,qCACjB,gCAA0B,UAAU;AAC/C,gBAAU,IAAI,KAAC,mCAA2B,CAAC,iBAAiB,oBAAc,iBACxD;AAClB,gBAAU,IAAI,KAAC,6CAAY,CAAC,uBACjB,kBAAY,UAAU;IAEnC;;;QA7R6B;IAkBN,eAAS;IAgBX,aAAO;IAcT,WAAK;IAcC,iBAAW;IAiBb,wBAAkB;IAgBpB,sBAAgB;IAcZ,0BAAoB;IAExC,kBAAY,GAAG;IACf,gCAA0B,GAAG;IAC3B,oBAAc;IAGjB,uBAAe;AAnHb,gFAAgB,sCAAa,cAAc,UAAU;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;YC7DxC,eAAQ;;;AAG1B,oBAAQ,GAAG;IACb;;;QAXoC;IAI/B,cAAQ,GAAG;IACV,cAAM;UAL4C,QAAQ,IAAI;AAClE,kBAAM,GAAG,eAAK,CAAC,QAAQ,EAAE,2BAAU;EACrC;;;;;;;;;;;;;;;;;;;;yBAoC0B,KAAkB;AAC1C,qBAAK,wBAAkB,GAAE;AACvB,gCAAkB,GAAG;AACrB,6CAAc,SAAS,cAAc,SAAS,CAAC,YAAO,EAAE,KAAK;;IAEjE;wBAEyB,KAAkB;AACzC,oBAAI,wBAAkB,GAAE;AACtB,gCAAkB,GAAG;AACrB,6CAAc,SAAS,cAAc,YAAY,CAAC,YAAO,EAAE,KAAK;;IAEpE;sBAEuB,KAAkB,EAAE,SAAgB;AACzD,UAAa,SAAS,AAAe,KAAV,SAAS,MAAG,uBAAgB;AACvD,YAAuB,cAAhB,MAAM,SAAS,kBAAI,SAAS;IACrC;;AAGE,YAAO,iCAA0B,QAAQ;IAC3C;kBAEmB,KAAsB;AACvC,YAAO,MAAK,QAAQ,IAAI,mBAAc;IACxC;;;QA7C6B;QACtB;QACc;IAgBhB,wBAAkB,GAAG;IAjBnB,UAAK,GAAL,KAAK;UAEC,gBAAgB,IAAI;UACpB,KAAK,IAAI;UACT,KAAK,QAAQ,IAAI;IACxB,YAAO,GAAG,KAAK,QAAQ;IACvB,uBAAgB,GAAG,KAAK,SAAS;IACjC,mBAAc,GAAG,KAAK,QAAQ;IAC9B,gCAA0B,OACtB,2CAAe,YAAW,gBAAgB;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAkF5B;;;;;;qBAOH,KAAkB;AACtC,UAAI,eAAS,IAAI,MAAM;AACrB,gBAAQ,KAAK,QAAQ;cACd,EAAc;;AACjB,gBAAI,gBAAW,IAAI,MAAM,MAAO;AAChC;;;;AAEA,kBAAO;;;;AAGb,YAAO,uBAAsB,+CAAC,KAAK;IACrC;sBAGuB,KAAkB;AACvC,UAAI,eAAS,IAAI,MAAM;AACrB,uBAAK,eAAS,kBAAkB,CAAC,KAAK,EAAE,KAAc,IAAG;AAEvD;cACK,gBAAK,eAAS,kBAAkB,kBAClC,eAAS,cAAc,+CAAC,KAAK,KAAG;AAGnC,wBAAM;AACN,gBAAO,qBAAc,CAAC,KAAK;;;AAG/B,0BAAc,CAAC,KAAK;IACtB;qBAEoB,KAAkB;AACpC,+BAAmB;AACnB,UAAkB,cAAU,uCAAW,uDAC9B,KAAK,UACL,qCAAc,SAAS,aAAa,IAAI,CAAC,KAAK,QAAQ,EAAE,yBAC7C,0CAAiB;AAErC,qBAAS,QAAC,KAAK,QAAQ,EAAI,OAAO;AAClC,aAAO,qBAAqB,CAAC,+BAAY;IAC3C;qBAEkB,KAAkB;AAClC,UAAkB,UAAU,eAAS,QAAC,KAAK,QAAQ;AACnD,YAAO,OAAO,IAAI;AAClB,kDAAI,KAAK,GAAoB;AAC3B,YAAI,eAAS,IAAI;AACf,iCAAiB,CAAC,OAAO;;AAEzB,kCAAkB,CAAC,OAAO;YACvB,+CAAI,KAAK,GAAsB;AACpC,uBAAK,OAAO,kBAAkB,CAAC,KAAK,EAAE,IAAmB,IACvD,aAAO,CAAC,OAAO;YACZ,iDAAI,KAAK,GAAwB;AACtC,qBAAO,CAAC,OAAO;;IAEnB;kBAGmB,OAAW,GAAG;kBAGd,OAAW;AAC5B,UAAY,UAAU,eAAS,QAAC,OAAO;AAEvC,UAAI,OAAO,IAAI,QAAQ,eAAS,IAAI,QAAQ,eAAS,QAAQ,IAAI,OAAO,EACtE,OAAO,GAAG,eAAS;AAErB,UAAI,OAAO,IAAI,MAAM,aAAO,CAAC,OAAO;IACtC;cAEa,OAAmB;AAC9B,qBAAS,SAAO,CAAC,OAAO,QAAQ;AAChC,aAAO,MAAM,QAAQ,CAAC,uCAAkB,SAAS;AACjD,0BAAc,CAAC,OAAO;AAItB,UAAI,eAAS,IAAI,mBAAS,eAAS,UAAQ,iBAAI,OAAO,EAAI,eAAS,IACjE,cAAM;IACV;;AAIE,oBAAM;AACN,mBAAa;IACf;;AAGE,+BAAmB;AACnB,UAAI,eAAS,IAAI,MAAM;AAGrB,YAAkB,UAAU,eAAS;AACrC,uBAAS,GAAG;AACZ,qBAAO,CAAC,OAAO;AACf,6CAAc,SAAS,aAAa,QAAQ,CAAC,OAAO,QAAQ;;AAE9D,0BAAc;IAChB;wBAEuB,OAAmB;AACxC,gCAAoB;AACpB,2CAAc,SAAS,aAAa,KAAK,CAAC,OAAO,QAAQ;AAGzD,0BAAc,CAAC,OAAO;AACtB,qBAAS,SAAO,CAAC,OAAO,QAAQ;AAChC,0BAAc;AACd,qBAAS,GAAG,OAAO;IACrB;yBAEwB,OAAmB;AACzC,qBAAS,MAAM,QAAQ,CAAC,uCAAkB,SAAS;AACnD,aAAO,MAAM,QAAQ,CAAC,uCAAkB,SAAS;AACjD,0BAAc,CAAC,OAAO;AACtB,qBAAS,SAAO,CAAC,OAAO,QAAQ;AAChC,qBAAQ,CAAC,OAAO,eAAe;AAC/B,oBAAM;IACR;;AAGE,qBAAS,SAAO,SAAO,YAAU,CAAC,wBAAO;AACzC,qBAAO,eAAS,UAAQ;IAC1B;qBAEoB,OAAmB;AACrC,aAAO,oBAAoB,CAAC,+BAAY;IAC1C;;AAGE,mCAAe;0CAAK,eAAK,CAAC,0CAAiB,EAAE,yBAAM;IACrD;;AAGE,UAAI,qBAAe,IAAI,MAAM;AAC3B,6BAAe,OAAO;AACtB,6BAAe,GAAG;;IAEtB;gBAEc,OAAW;AACvB,YAAO,OAAO,KAAI,CAAc;AAChC,UAAI,gBAAW,IAAI,MAAM,mBAAc,YAAO,eAAe,gBAAW;IAC1E;;YAG+B;IAAY;;;QA1LlC;QACW;IAgCK,iBAAW;IAE9B,qBAAe;IACT,eAAS;IACO,eAAS,GAAG;AAnCnC,6FAAkB,UAAU,QAAQ,IAAI;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;gBA2N7B,KAAkB;AACjC,YAAO,KAAK,QAAQ,IAAI,YAAO;AAC/B,oDAAI,KAAK,GAAsB;AAC7B,uBAAK,sBAAiB,CAAC,KAAK,EAAE,IAAU;AACtC,qBAAM;;AAEN,8BAAa,GAAG,KAAK,SAAS;YAC3B,iDAAI,KAAK,GAAwB;AACtC,mBAAM;YACD,6CAAI,KAAK,GAAoB;AAClC,gCAAmB,CAAC,8BAAW;AAC/B,6BAAc,GAAG,KAAK,SAAS;AAC/B,oBAAM;;IAEV;wBAGyB,KAAkB;AACzC,4BAAM;;AACN,oBAAM,GAAG;AACT,+BAAyB,CAAC,KAAK;IACjC;;AAGE,qBAAS,GAAG;AACZ,kBAAM;IACR;;AAGE,8BAAmB,CAAC,8BAAW;AAC/B,4BAAiB,iBAAgB,CAAC,YAAO;IAC3C;;AAKE,oBAAI,eAAS;AACX,mBAAM;;AAEN,kBAAK,QAAQ,CAAC,uCAAkB,SAAS;IAC7C;;AAGE,oBAAI,eAAS,KAAI,qBAAc,IAAI,MACjC,sBAAiB,cAAa,CAAC,YAAO,EAAE,qBAAc;IAC1D;;;QAxEO;QACQ;QACJ;IAmBN,eAAS,GAAG;IACX,cAAM;IAGL,qBAAc;IAzBd,sBAAiB,GAAjB,iBAAiB;IAGlB,oBAAa,GAAG,KAAK,SAAS;AAC9B,uHACS,KAAK,UACL,qCAAc,SAAS,aAAa,IACnC,CAAC,KAAK,QAAQ,EAAE,iBAAiB,qBACvB,0CAAiB;AAEzC,6BAAoB,CAAC,8BAAW;AAChC,kBAAI,AAAa,YAAD,MAAG,aAAQ,KAAK,IAAE;AAChC,oBAAM,GAAG,eAAK,CAAC,YAAY,EAAE;AAC3B,sBAAM,GAAG;AACT,8BAAiB,kBAAiB,CAAC,KAAK,QAAQ,EAAE,oBAAa;;;EAGrE;;;;;;;;;;;;;;;;;;;;;IAgF4B;;;;;;IAIF;;;;;;IAGF;;;;;;IAIM;;;;;;IAGrB;;;;;;IAImB;;;;;;sBAKL,KAAkB;AACvC,WAAO,WAAC,iBAAW,cAAY,CAAC,KAAK,QAAQ;AAC7C,uBAAW,QAAC,KAAK,QAAQ,MAAI,uCAAW,qBACnB,aACZ,KAAK,gBACE,iBAAY;AAE5B,UAAI,cAAS,IAAI,MACf,mBAAc,YAAO,aAAa;AAChC,sBAAS,CACL,KAAK,QAAQ,MACb,qCAAc,kBACI,KAAK,SAAS,QACxB,KAAK,KAAK;;IAG5B;kBAGmB,OAAW;AAC5B,qBAAO,iBAAW,cAAY,CAAC,OAAO;AACtC,uBAAW,QAAC,OAAO,QAAQ;IAC7B;kBAGmB,OAAW;AAC5B,qBAAO,iBAAW,cAAY,CAAC,OAAO;AACtC,uBAAW,QAAC,OAAO,QAAQ;AAC3B,WAAO,WAAC,iBAAW,cAAY,CAAC,OAAO;IACzC;sBAEqB,OAAW;AAC9B,qBAAO,iBAAW,cAAY,CAAC,OAAO;AACtC,uBAAW,SAAO,CAAC,OAAO;AAC1B,UAAI,gBAAW,IAAI,MACjB,mBAAc,YAAO,eAAe,cAAM,gBAAW,CAAC,OAAO;IACjE;mBAEkB,OAAW,EAAE,cAAqB;AAClD,qBAAO,iBAAW,cAAY,CAAC,OAAO;AACtC,uBAAW,SAAO,CAAC,OAAO;AAC1B,UAAI,YAAO,IAAI,MACb,mBAAc,YAAO,WACjB,cAAM,YAAO,CAAC,OAAO,MAAE,mCAAY,kBAAiB,cAAc;AACxE,UAAI,UAAK,IAAI,MAAM,mBAAc,YAAO,SAAS,cAAM,UAAK,CAAC,OAAO;IACtE;uBAEsB,OAAW,EAAE,YAAmB;AACpD,qBAAO,iBAAW,cAAY,CAAC,OAAO;AACtC,UAAI,kBAAa,IAAI,MACnB,mBAAc,YAAO,iBAAiB;AACpC,0BAAa,CACX,OAAO,MACP,qCAAc,kBACI,YAAY,QACtB,sBAAiB,CAAC,OAAO;;IAIzC;;AAIE,UAAwB,gBACpB,wBAAsB,CAAC,iBAAW,SAAO;AAC7C,eAAiB,UAAW,cAAa;AAAE,eAAO,OAAO;AAEzD,qBAAO,iBAAW,UAAQ;AAC1B,mBAAa;IACf;;YAG+B;IAAU;;;QAtGlC,oEAAe,aAAQ,KAAK;QAC1B;QACW;IAKQ,gBAAS;IAIX,cAAO;IAGT,YAAK;IAIC,kBAAW;IAOb,mBAAa;IAEb,iBAAW,GAAG;IA3BnC,mBAAY,GAAZ,YAAY;AAGd,4FAAkB,UAAU,QAAQ,IAAI;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IChXjC;;;;;;;YAGQ,6CAAgC,eAAU;IAAE;;;QARzC,8DAAa,UAAM,KAAK;IAAxB,iBAAU,GAAV,UAAU;UACrB,UAAU,IAAI;EAAK;;;;;;;;;;IAgCnB;;;;;;IAWA;;;;;;IAWA;;;;;;IAWA;;;;;;IAMA;;;;;;;YAIT,8CAAiC,eAAU,2BAAU,UAAK,qCAAoB,oBAAe,mCAAkB,kBAAa,8BAAa,aAAQ;IAAE;;;QAzDhJ,8DAAa,UAAM,KAAK;QACxB,+CAAQ;QACR,6EAAkB;QAClB,uEAAgB;QAChB,wDAAW;IAJX,kBAAU,GAAV,UAAU;IACV,YAAK,GAAL,KAAK;IACL,sBAAe,GAAf,eAAe;IACf,oBAAa,GAAb,aAAa;IACb,eAAQ,GAAR,QAAQ;UACF,UAAU,IAAI;UACd,AAAc,KAAT,IAAI,QAAc,aAAN,KAAK,KAAI;UAC1B,AAAwB,eAAT,IAAI,QAAwB,aAAhB,eAAe,KAAI;UAC9C,AAAsB,aAAT,IAAI,QAAsB,aAAd,aAAa,KAAI;UAC1C,QAAQ,IAAI;EAAK;;;;;;;;;;;;;;;;;;IA2Df;;;;;;;YAGM,yCAA4B,aAAQ;IAAE;;;QANrC,wDAAW,wCAAQ,KAAK;IAAxB,gBAAQ,GAAR,QAAQ;UAA4B,QAAQ,IAAI;EAAK;;;;;;;;;kDAoBxD,QAAiB;AACpC,UAAO,QAAQ,IAAI;AACnB,QAAa,eAAe,QAAQ,gBAAgB,gBAAgB;AACpE,UAAoB,cAAb,YAAY,IAAG,AAAkB,IAAD,GAAG,IAAiB;EAC7D;;;QAWS,4FAAuB,UAAM,KAAK;QAClC,0EAAiB;QACjB,sFAAqB,UAAM,KAAK;QAChC,oEAAe;IAHf,yBAAoB,GAApB,oBAAoB;IACpB,mBAAc,GAAd,cAAc;IACd,uBAAkB,GAAlB,kBAAkB;IAClB,iBAAY,GAAZ,YAAY;UACN,AAA6B,oBAAT,IAAI,QAAQ,kBAAkB,IAAI;UACtD,AAAuB,cAAT,IAAI,QAAQ,YAAY,IAAI;UAC1C,cAAc,IAAI,YAAY;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA6BlB;;;;;;IAIC;;;;;;IAGH;;;;;;;YAmBpB,AAAa,cAAb,kBAAY,IAAG,MAAmB,aAAb,kBAAY,iBAAG,kBAAY,IAAG;IAAG;;YAErB,AAAuB,cAAvB,4BAAsB,IAAG,MACjC,aAAvB,4BAAsB,iBAAG,4BAAsB,IAC/C;IAAG;;YAE0B,AAAqB,cAArB,0BAAoB,IAAG,MAC/B,aAArB,0BAAoB,iBAAG,0BAAoB,IAC3C;IAAG;;AAGP,UAAI,kBAAY,IAAI,QAAQ,kBAAY,IAAI,MAAM;AAChD,cAAO;;AAET,UAAa,KAAK,kBAAY,qBAAqB,GAAG;AACtD,UAAa,KAAK,kBAAY,qBAAqB,GAAG;AACtD,UAAa,KAAK,kBAAY,mBAAmB,GAAG;AACpD,UAAa,KAAK,kBAAY,mBAAmB,GAAG;AAEpD,UAAa,MAAM,kBAAY,qBAAqB,GAAG;AACvD,UAAa,MAAM,kBAAY,qBAAqB,GAAG;AACvD,UAAa,MAAM,kBAAY,mBAAmB,GAAG;AACrD,UAAa,MAAM,kBAAY,mBAAmB,GAAG;AAErD,UAAa,SAAS,AAAK,UAAK,CAAI,aAAH,EAAE,iBAAG,EAAE,GAAK,aAAH,EAAE,iBAAG,EAAE;AACjD,UAAa,SAAS,AAAK,UAAK,CAAK,aAAJ,GAAG,iBAAG,GAAG,GAAM,aAAJ,GAAG,iBAAG,GAAG;AAErD,YAAO,AAAO,OAAD,GAAG,MAAM;IACxB;sBAGuB,KAAkB;AACvC,+BAAoB,CAAC,KAAK,QAAQ;AAClC,8BAAiB,QAAC,KAAK,QAAQ,MAAI,mDAAe;AAClD,UAAI,cAAM,KAAI,gCAAW,MAAM,EAAE;AAC/B,sBAAM,GAAG,gCAAW,SAAS;AAC7B,0BAAY,GAAG;AACf,0BAAY,GAAG;AACf,oCAAsB,GAAG;AACzB,oCAAsB,GAAG;AACzB,kCAAoB,GAAG;AACvB,kCAAoB,GAAG;AACvB,+BAAiB,GAAG;AACpB,2BAAa,GAAG;;IAEpB;gBAGiB,KAAkB;AACjC,YAAO,cAAM,KAAI,gCAAW,MAAM;AAClC,UAAK,yBAAyB;AAC9B,UAAK,wBAAwB;AAC7B,oDAAI,KAAK,GAAsB;AAC7B,YAAsB,UAAU,wBAAiB,QAAC,KAAK,QAAQ;AAC/D,cAAO,OAAO,IAAI;AAClB,uBAAK,KAAK,YAAY,GACpB,OAAO,YAAY,CAAC,KAAK,UAAU,EAAE,KAAK,SAAS;AACrD,+BAAiB,QAAC,KAAK,QAAQ,EAAI,KAAK,SAAS;AACjD,6BAAqB,GAAG;YACnB,+CAAI,KAAK,GAAsB;AACpC,+BAAiB,QAAC,KAAK,QAAQ,EAAI,KAAK,SAAS;AACjD,2BAAa,MAAI,CAAC,KAAK,QAAQ;AAC/B,8BAAsB,GAAG;AACzB,6BAAqB,GAAG;YACnB,6CAAI,KAAK,iDAAsB,KAAK,GAAwB;AACjE,+BAAiB,SAAO,CAAC,KAAK,QAAQ;AACtC,2BAAa,SAAO,CAAC,KAAK,QAAQ;AAClC,8BAAsB,GAAG;;AAG3B,wBAAY;AACZ,mBAAO;AAEP,WAAK,sBAAsB,cAAI,kBAAY,CAAC,KAAK,QAAQ,IACvD,0BAAoB,CAAC,qBAAqB;AAC5C,4CAAiC,CAAC,KAAK;IACzC;;AAGE,UAAU,QAAQ,uBAAiB,OAAK,SAAO;AAG/C,UAAO,aAAa,UAAM,KAAK;AAC/B,eAAS,UAAW,wBAAiB,OAAK,EACxC;kBAAU,GA5ShB,AA4SM,UAAU,MAAI,uBAAiB,QAAC,OAAO;;AACzC,8BAAkB,GACd,AAAM,aAAN,KAAK,IAAG,IAAI,AAAW,UAAD,MAAG,KAAK,WAAS,MAAK,UAAM,KAAK;AAK3D,UAAO,iBAAiB;AACxB,UAAO,2BAA2B;AAClC,UAAO,yBAAyB;AAChC,eAAS,UAAW,wBAAiB,OAAK,EAAE;AAC1C,sBAAc,GAvTpB,AAuTM,cAAc,gBACT,AAAmB,wBAAD,MAAG,uBAAiB,QAAC,OAAO,WAAW;AAC9D,gCAAwB,GAzT9B,AAyTM,wBAAwB,GACpB,CAAuB,aAAtB,wBAAkB,GAAG,iBAAG,uBAAiB,QAAC,OAAO,IAAI,QAAK;AAC/D,8BAAsB,GA3T5B,AA2TM,sBAAsB,GAClB,CAAuB,aAAtB,wBAAkB,GAAG,iBAAG,uBAAiB,QAAC,OAAO,IAAI,QAAK;;AAEjE,wBAAY,GAAG,AAAM,aAAN,KAAK,IAAG,IAAI,AAAe,cAAD,gBAAG,KAAK,IAAG;AACpD,kCAAsB,GAAG,AAAM,aAAN,KAAK,IAAG,IAAI,AAAyB,wBAAD,gBAAG,KAAK,IAAG;AACxE,gCAAoB,GAAG,AAAM,aAAN,KAAK,IAAG,IAAI,AAAuB,sBAAD,gBAAG,KAAK,IAAG;IACtE;;AAKE,UAAU,QAAQ,uBAAiB,OAAK,SAAO;AAC/C,YAA4B,aAArB,mBAAa,SAAO,kBAAI,KAAK;AAGpC,UAAU,aAAN,KAAK,IAAG,GAAG;AACb,0BAAY,GAAG,kBAAY;YACtB,KAAI,kBAAY,IAAI,QACvB,kBAAY,eAAe,IAAI,mBAAa,QAAC,MAC7C,kBAAY,aAAa,IAAI,mBAAa,QAAC,IAAI;AAEjD,0BAAY,OAAG,6CAAoB,kBACjB,mBAAa,QAAC,0BACR,uBAAiB,QAAC,mBAAa,QAAC,mBACxC,mBAAa,QAAC,wBACR,uBAAiB,QAAC,mBAAa,QAAC;aAEjD;AAEL,0BAAY,OAAG,6CAAoB,kBACjB,mBAAa,QAAC,0BACR,uBAAiB,QAAC,mBAAa,QAAC,mBACxC,mBAAa,QAAC,wBACR,uBAAiB,QAAC,mBAAa,QAAC;AAEtD,0BAAY,GAAG;;IAEnB;mBAEkB,OAAW;AAC3B,8BAAkB,GAAG,wBAAkB;AACvC,wBAAY,GAAG,kBAAY;AAC3B,wBAAY,GAAG,kBAAY;AAC3B,kCAAsB,GAAG,4BAAsB;AAC/C,gCAAoB,GAAG,0BAAoB;AAC3C,UAAI,cAAM,KAAI,gCAAW,QAAQ,EAAE;AACjC,YAAI,UAAK,IAAI,MAAM;AACjB,cAAsB,UAAU,wBAAiB,QAAC,OAAO;AACzD,gBAAO,OAAO,IAAI;AAElB,cAAS,WAAW,OAAO,YAAY;AACvC,wBAAI,oCAAe,CAAC,QAAQ,IAAG;AAC7B,gBAAa,kBAAkB,QAAQ,gBAAgB;AACvD,gBAAoC,aAAhC,eAAe,gBAAgB,IAC/B,AAAkB,MAAD,GAAG,MAAiB,EACvC,QAAQ,OAAG,4CAAQ,mBACG,AAAgB,AAA4B,eAA7B,MAAG,eAAe,SAAS,OACxD,MAAiB;AAC3B,+BAAc,YACV,SAAS,cAAM,UAAK,KAAC,wCAAe,YAAW,QAAQ;iBACtD;AACL,+BAAc,YACV,SAAS,cAAM,UAAK,KAAC,wCAAe,YAAW,wCAAQ,KAAK;;;AAGpE,sBAAM,GAAG,gCAAW,SAAS;AAC7B,cAAO;;AAET,YAAO;IACT;2BAE0B,qBAA0B;AAClD,UAAI,cAAM,KAAI,gCAAW,MAAM,EAAE,cAAM,GAAG,gCAAW,SAAS;AAE9D,UAAI,cAAM,KAAI,gCAAW,SAAS,EAAE;AAClC,YAAa,YAAY,CAAc,aAAb,kBAAY,iBAAG,kBAAY,QAAK;AAC1D,YAAa,kBACR,AAAmB,wBAAD,MAAG,wBAAkB,UAAU;AACtD,YAAI,AAAU,SAAD,GAAG,IAAU,IAAoB,aAAhB,eAAe,IAAG,IAAQ,EACtD,YAAO,CAAC,uCAAkB,SAAS;YAChC,KAAiB,aAAb,cAAM,MAAM,kBAAI,gCAAW,SAAS,MAAM,GAAE;AACrD,oBAAO,CAAC,uCAAkB,SAAS;;AAGrC,UAAI,cAAM,KAAI,gCAAW,SAAS,cAAI,qBAAqB,GAAE;AAC3D,sBAAM,GAAG,gCAAW,QAAQ;AAC5B,8CAAgC;;AAGlC,UAAI,cAAM,KAAI,gCAAW,QAAQ,IAAI,aAAQ,IAAI,MAC/C,mBAAc,YAAO,YAAY;AAC/B,qBAAQ,KAAC,2CAAkB,SAClB,kBAAY,mBACF,4BAAsB,iBACxB,0BAAoB,cACvB,wBAAkB,YACpB,4BAAsB;;IAGxC;;AAGE,YAAO,cAAM,KAAI,gCAAW,QAAQ;AACpC,UAAI,YAAO,IAAI,MACb,mBAAc,YAAO,WACjB,cAAM,YAAO,KAAC,0CAAiB,cAAa,wBAAkB;IACtE;kBAGmB,OAAW;AAC5B,UAAI,cAAM,KAAI,gCAAW,SAAS,EAAE;AAClC,sBAAM,GAAG,gCAAW,QAAQ;AAC5B,8CAAgC;;IAEpC;kBAGmB,OAAW;AAC5B,8BAAmB,CAAC,OAAO;IAC7B;+BAGgC,OAAW;AACzC,cAAQ,cAAM;YACP,iCAAW,SAAS;;AACvB,sBAAO,CAAC,uCAAkB,SAAS;AACnC;;YACG,iCAAW,MAAM;;AACpB,eAAO;AACP;;YACG,iCAAW,SAAS;;AACvB;;YACG,iCAAW,QAAQ;;AACtB,eAAO;AACP;;;AAEJ,oBAAM,GAAG,gCAAW,MAAM;IAC5B;;AAIE,8BAAiB,QAAM;AACvB,mBAAa;IACf;;YAG+B;IAAO;;;QArR7B;QACW;IAKM,eAAO;IAIN,gBAAQ;IAGX,aAAK;IAEjB,cAAM,GAAG,gCAAW,MAAM;IAE/B,wBAAkB;IAClB,wBAAkB;IAClB,kBAAY;IACZ,kBAAY;IACZ,4BAAsB;IACtB,4BAAsB;IACtB,0BAAoB;IACpB,0BAAoB;IACN,kBAAY;IACZ,kBAAY;IAChB,uBAAiB;IACxB,mBAAa;IACS,wBAAiB,GAAG;AA3B/C,sFAAkB,UAAU,QAAQ,IAAI;EAAC","file":"arena.ddc.js"}');
  // Exports:
  return {
    src__gestures__debug: src__gestures__debug,
    src__gestures__arena: src__gestures__arena,
    src__gestures__events: src__gestures__events,
    src__gestures__converter: src__gestures__converter,
    src__gestures__hit_test: src__gestures__hit_test,
    src__gestures__pointer_router: src__gestures__pointer_router,
    src__gestures__pointer_signal_resolver: src__gestures__pointer_signal_resolver,
    src__gestures__binding: src__gestures__binding,
    src__gestures__constants: src__gestures__constants,
    src__gestures__lsq_solver: src__gestures__lsq_solver,
    src__gestures__velocity_tracker: src__gestures__velocity_tracker,
    src__gestures__drag_details: src__gestures__drag_details,
    src__gestures__drag: src__gestures__drag,
    src__gestures__team: src__gestures__team,
    src__gestures__recognizer: src__gestures__recognizer,
    src__gestures__eager: src__gestures__eager,
    src__gestures__force_press: src__gestures__force_press,
    src__gestures__long_press: src__gestures__long_press,
    src__gestures__monodrag: src__gestures__monodrag,
    src__gestures__mouse_tracking: src__gestures__mouse_tracking,
    src__gestures__multidrag: src__gestures__multidrag,
    src__gestures__tap: src__gestures__tap,
    src__gestures__multitap: src__gestures__multitap,
    src__gestures__scale: src__gestures__scale
  };
});

//# sourceMappingURL=arena.ddc.js.map

define(['dart_sdk', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/foundation/assertions', 'packages/flutter_web/src/scheduler/binding', 'packages/flutter_web/services', 'packages/flutter_web/src/gestures/arena', 'packages/flutter_web/src/services/clipboard', 'packages/flutter_web/src/physics/clamped_simulation'], function(dart_sdk, ui, assertions, binding, services, arena, clipboard, clamped_simulation) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const typed_data = dart_sdk.typed_data;
  const math = dart_sdk.math;
  const convert = dart_sdk.convert;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ui$ = ui.ui;
  const src__foundation__binding = assertions.src__foundation__binding;
  const src__util = assertions.src__util;
  const src__foundation__diagnostics = assertions.src__foundation__diagnostics;
  const src__foundation__assertions = assertions.src__foundation__assertions;
  const src__foundation__platform = assertions.src__foundation__platform;
  const src__foundation__synchronous_future = assertions.src__foundation__synchronous_future;
  const src__foundation__collections = assertions.src__foundation__collections;
  const src__foundation__observer_list = assertions.src__foundation__observer_list;
  const src__foundation__change_notifier = assertions.src__foundation__change_notifier;
  const src__scheduler__binding = binding.src__scheduler__binding;
  const src__services__binding = services.src__services__binding;
  const src__services__asset_bundle = services.src__services__asset_bundle;
  const src__gestures__recognizer = arena.src__gestures__recognizer;
  const src__services__text_editing = clipboard.src__services__text_editing;
  const src__physics__tolerance = clamped_simulation.src__physics__tolerance;
  const src__physics__friction_simulation = clamped_simulation.src__physics__friction_simulation;
  const src__physics__spring_simulation = clamped_simulation.src__physics__spring_simulation;
  const src__physics__simulation = clamped_simulation.src__physics__simulation;
  const src__semantics__debug = Object.create(dart.library);
  const src__semantics__binding = Object.create(dart.library);
  const src__painting__alignment = Object.create(dart.library);
  const src__painting__basic_types = Object.create(dart.library);
  const src__painting__border_radius = Object.create(dart.library);
  const src__painting__image_stream = Object.create(dart.library);
  const src__painting__image_cache = Object.create(dart.library);
  const src__painting__binding = Object.create(dart.library);
  const src__painting__debug = Object.create(dart.library);
  const src__painting__box_shadow = Object.create(dart.library);
  const src__painting__image_provider = Object.create(dart.library);
  const src__painting__box_fit = Object.create(dart.library);
  const src__painting__gradient = Object.create(dart.library);
  const src__painting__clip = Object.create(dart.library);
  const src__painting__colors = Object.create(dart.library);
  const src__painting__text_style = Object.create(dart.library);
  const src__painting__strut_style = Object.create(dart.library);
  const src__painting__text_span = Object.create(dart.library);
  const src__painting__text_painter = Object.create(dart.library);
  const src__painting__fractional_offset = Object.create(dart.library);
  const src__painting__geometry = Object.create(dart.library);
  const src__painting__image_decoder = Object.create(dart.library);
  const src__painting__image_resolution = Object.create(dart.library);
  const src__painting__notched_shapes = Object.create(dart.library);
  const src__painting__paint_utilities = Object.create(dart.library);
  const src__animation__curves = Object.create(dart.library);
  const src__animation__listener_helpers = Object.create(dart.library);
  const src__animation__animations = Object.create(dart.library);
  const src__animation__tween = Object.create(dart.library);
  const src__animation__animation = Object.create(dart.library);
  const src__animation__tween_sequence = Object.create(dart.library);
  const src__rendering__platform_view = Object.create(dart.library);
  const src__widgets__icon_data = Object.create(dart.library);
  const src__widgets__scroll_simulation = Object.create(dart.library);
  const src__widgets__icon_theme_data = Object.create(dart.library);
  const $toDouble = dartx.toDouble;
  const $truncate = dartx.truncate;
  const $modulo = dartx['%'];
  const $toStringAsFixed = dartx.toStringAsFixed;
  const $runtimeType = dartx.runtimeType;
  const $_equals = dartx._equals;
  const $add = dartx.add;
  const $_get = dartx._get;
  const $removeAt = dartx.removeAt;
  const $length = dartx.length;
  const $isEmpty = dartx.isEmpty;
  const $toList = dartx.toList;
  const $map = dartx.map;
  const $where = dartx.where;
  const $isNotEmpty = dartx.isNotEmpty;
  const $clear = dartx.clear;
  const $remove = dartx.remove;
  const $_set = dartx._set;
  const $first = dartx.first;
  const $keys = dartx.keys;
  const $toInt = dartx.toInt;
  const $toString = dartx.toString;
  const $asUint8List = dartx.asUint8List;
  const $buffer = dartx.buffer;
  const $hashCode = dartx.hashCode;
  const $clamp = dartx.clamp;
  const $join = dartx.join;
  const $isNaN = dartx.isNaN;
  const $round = dartx.round;
  const $abs = dartx.abs;
  const $any = dartx.any;
  const $forEach = dartx.forEach;
  const $codeUnitAt = dartx.codeUnitAt;
  const $ceilToDouble = dartx.ceilToDouble;
  const $last = dartx.last;
  const $lastIndexOf = dartx.lastIndexOf;
  const $substring = dartx.substring;
  const $isFinite = dartx.isFinite;
  const $truncateToDouble = dartx.truncateToDouble;
  const $floor = dartx.floor;
  const $addAll = dartx.addAll;
  const $padLeft = dartx.padLeft;
  const $toUpperCase = dartx.toUpperCase;
  const $toRadixString = dartx.toRadixString;
  const $sign = dartx.sign;
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let ImageInfoAndboolTovoid = () => (ImageInfoAndboolTovoid = dart.constFn(dart.fnType(dart.void, [src__painting__image_stream.ImageInfo, core.bool])))();
  let dynamicAndStackTraceTovoid = () => (dynamicAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic, core.StackTrace])))();
  let JSArrayOf_ImageListenerPair = () => (JSArrayOf_ImageListenerPair = dart.constFn(_interceptors.JSArray$(src__painting__image_stream._ImageListenerPair)))();
  let ObjectFlagPropertyOfImageStreamCompleter = () => (ObjectFlagPropertyOfImageStreamCompleter = dart.constFn(src__foundation__diagnostics.ObjectFlagProperty$(src__painting__image_stream.ImageStreamCompleter)))();
  let ListOf_ImageListenerPair = () => (ListOf_ImageListenerPair = dart.constFn(core.List$(src__painting__image_stream._ImageListenerPair)))();
  let ObjectFlagPropertyOfListOf_ImageListenerPair = () => (ObjectFlagPropertyOfListOf_ImageListenerPair = dart.constFn(src__foundation__diagnostics.ObjectFlagProperty$(ListOf_ImageListenerPair())))();
  let _ImageListenerPairToFn = () => (_ImageListenerPairToFn = dart.constFn(dart.fnType(ImageInfoAndboolTovoid(), [src__painting__image_stream._ImageListenerPair])))();
  let IterableOfImageInfoAndboolTovoid = () => (IterableOfImageInfoAndboolTovoid = dart.constFn(core.Iterable$(ImageInfoAndboolTovoid())))();
  let FnTobool = () => (FnTobool = dart.constFn(dart.fnType(core.bool, [dynamicAndStackTraceTovoid()])))();
  let _ImageListenerPairToFn$ = () => (_ImageListenerPairToFn$ = dart.constFn(dart.fnType(dynamicAndStackTraceTovoid(), [src__painting__image_stream._ImageListenerPair])))();
  let IterableOfdynamicAndStackTraceTovoid = () => (IterableOfdynamicAndStackTraceTovoid = dart.constFn(core.Iterable$(dynamicAndStackTraceTovoid())))();
  let DiagnosticsPropertyOfImageInfo = () => (DiagnosticsPropertyOfImageInfo = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(src__painting__image_stream.ImageInfo)))();
  let dynamicAndStackTraceToNull = () => (dynamicAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, core.StackTrace])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let IterableOfDiagnosticsNode = () => (IterableOfDiagnosticsNode = dart.constFn(core.Iterable$(src__foundation__diagnostics.DiagnosticsNode)))();
  let VoidToIterableOfDiagnosticsNode = () => (VoidToIterableOfDiagnosticsNode = dart.constFn(dart.fnType(IterableOfDiagnosticsNode(), [])))();
  let LinkedMapOfObject$ImageStreamCompleter = () => (LinkedMapOfObject$ImageStreamCompleter = dart.constFn(_js_helper.LinkedMap$(core.Object, src__painting__image_stream.ImageStreamCompleter)))();
  let LinkedMapOfObject$_CachedImage = () => (LinkedMapOfObject$_CachedImage = dart.constFn(_js_helper.LinkedMap$(core.Object, src__painting__image_cache._CachedImage)))();
  let MapOfObject$ImageStreamCompleter = () => (MapOfObject$ImageStreamCompleter = dart.constFn(core.Map$(core.Object, src__painting__image_stream.ImageStreamCompleter)))();
  let MapOfObject$_CachedImage = () => (MapOfObject$_CachedImage = dart.constFn(core.Map$(core.Object, src__painting__image_cache._CachedImage)))();
  let JSArrayOfBoxShadow = () => (JSArrayOfBoxShadow = dart.constFn(_interceptors.JSArray$(src__painting__box_shadow.BoxShadow)))();
  let DiagnosticsPropertyOfImageProvider = () => (DiagnosticsPropertyOfImageProvider = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(src__painting__image_provider.ImageProvider)))();
  let DiagnosticsPropertyOfImageConfiguration = () => (DiagnosticsPropertyOfImageConfiguration = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(src__painting__image_provider.ImageConfiguration)))();
  let DiagnosticsPropertyOfObject = () => (DiagnosticsPropertyOfObject = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(core.Object)))();
  let SyncIterableOfDiagnosticsPropertyOfObject = () => (SyncIterableOfDiagnosticsPropertyOfObject = dart.constFn(_js_helper.SyncIterable$(DiagnosticsPropertyOfObject())))();
  let IterableOfDiagnosticsPropertyOfObject = () => (IterableOfDiagnosticsPropertyOfObject = dart.constFn(core.Iterable$(DiagnosticsPropertyOfObject())))();
  let VoidToIterableOfDiagnosticsPropertyOfObject = () => (VoidToIterableOfDiagnosticsPropertyOfObject = dart.constFn(dart.fnType(IterableOfDiagnosticsPropertyOfObject(), [])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let dynamicAndStackTraceToFutureOfNull = () => (dynamicAndStackTraceToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [dart.dynamic, core.StackTrace])))();
  let VoidToImageStreamCompleter = () => (VoidToImageStreamCompleter = dart.constFn(dart.fnType(src__painting__image_stream.ImageStreamCompleter, [])))();
  let DiagnosticsPropertyOfAssetBundleImageKey = () => (DiagnosticsPropertyOfAssetBundleImageKey = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(src__painting__image_provider.AssetBundleImageKey)))();
  let SynchronousFutureOfNetworkImage = () => (SynchronousFutureOfNetworkImage = dart.constFn(src__foundation__synchronous_future.SynchronousFuture$(src__painting__image_provider.NetworkImage)))();
  let DiagnosticsPropertyOfNetworkImage = () => (DiagnosticsPropertyOfNetworkImage = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(src__painting__image_provider.NetworkImage)))();
  let SyncIterableOfDiagnosticsPropertyOfImageProvider = () => (SyncIterableOfDiagnosticsPropertyOfImageProvider = dart.constFn(_js_helper.SyncIterable$(DiagnosticsPropertyOfImageProvider())))();
  let IterableOfDiagnosticsPropertyOfImageProvider = () => (IterableOfDiagnosticsPropertyOfImageProvider = dart.constFn(core.Iterable$(DiagnosticsPropertyOfImageProvider())))();
  let VoidToIterableOfDiagnosticsPropertyOfImageProvider = () => (VoidToIterableOfDiagnosticsPropertyOfImageProvider = dart.constFn(dart.fnType(IterableOfDiagnosticsPropertyOfImageProvider(), [])))();
  let MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
  let SynchronousFutureOfMemoryImage = () => (SynchronousFutureOfMemoryImage = dart.constFn(src__foundation__synchronous_future.SynchronousFuture$(src__painting__image_provider.MemoryImage)))();
  let SynchronousFutureOfAssetBundleImageKey = () => (SynchronousFutureOfAssetBundleImageKey = dart.constFn(src__foundation__synchronous_future.SynchronousFuture$(src__painting__image_provider.AssetBundleImageKey)))();
  let ListOfColor = () => (ListOfColor = dart.constFn(core.List$(ui$.Color)))();
  let ListOfdouble = () => (ListOfdouble = dart.constFn(core.List$(core.double)))();
  let JSArrayOfColor = () => (JSArrayOfColor = dart.constFn(_interceptors.JSArray$(ui$.Color)))();
  let JSArrayOfdouble = () => (JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))();
  let intTodouble = () => (intTodouble = dart.constFn(dart.fnType(core.double, [core.int])))();
  let ColorToColor = () => (ColorToColor = dart.constFn(dart.fnType(ui$.Color, [ui$.Color])))();
  let IterableOfColor = () => (IterableOfColor = dart.constFn(core.Iterable$(ui$.Color)))();
  let ColorToString = () => (ColorToString = dart.constFn(dart.fnType(core.String, [ui$.Color])))();
  let IterableOfString = () => (IterableOfString = dart.constFn(core.Iterable$(core.String)))();
  let boolTovoid = () => (boolTovoid = dart.constFn(dart.fnType(dart.void, [core.bool])))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(src__foundation__diagnostics.DiagnosticsNode)))();
  let DiagnosticsPropertyOfColor = () => (DiagnosticsPropertyOfColor = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(ui$.Color)))();
  let IterablePropertyOfString = () => (IterablePropertyOfString = dart.constFn(src__foundation__diagnostics.IterableProperty$(core.String)))();
  let DiagnosticsPropertyOfFontWeight = () => (DiagnosticsPropertyOfFontWeight = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(ui$.FontWeight)))();
  let EnumPropertyOfFontStyle = () => (EnumPropertyOfFontStyle = dart.constFn(src__foundation__diagnostics.EnumProperty$(ui$.FontStyle)))();
  let EnumPropertyOfTextBaseline = () => (EnumPropertyOfTextBaseline = dart.constFn(src__foundation__diagnostics.EnumProperty$(ui$.TextBaseline)))();
  let DiagnosticsPropertyOfLocale = () => (DiagnosticsPropertyOfLocale = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(ui$.Locale)))();
  let DiagnosticsPropertyOfPaint = () => (DiagnosticsPropertyOfPaint = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(ui$.Paint)))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let DiagnosticsPropertyOfTextDecoration = () => (DiagnosticsPropertyOfTextDecoration = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(ui$.TextDecoration)))();
  let DiagnosticsNodeTobool = () => (DiagnosticsNodeTobool = dart.constFn(dart.fnType(core.bool, [src__foundation__diagnostics.DiagnosticsNode])))();
  let DiagnosticsPropertyOfbool = () => (DiagnosticsPropertyOfbool = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(core.bool)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let ListOfShadow = () => (ListOfShadow = dart.constFn(core.List$(ui$.Shadow)))();
  let TextSpanTobool = () => (TextSpanTobool = dart.constFn(dart.fnType(core.bool, [src__painting__text_span.TextSpan])))();
  let DiagnosticsPropertyOfGestureRecognizer = () => (DiagnosticsPropertyOfGestureRecognizer = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(src__gestures__recognizer.GestureRecognizer)))();
  let TextSpanToDiagnosticsNode = () => (TextSpanToDiagnosticsNode = dart.constFn(dart.fnType(src__foundation__diagnostics.DiagnosticsNode, [src__painting__text_span.TextSpan])))();
  let ListOfTextSpan = () => (ListOfTextSpan = dart.constFn(core.List$(src__painting__text_span.TextSpan)))();
  let JSArrayOfTextBox = () => (JSArrayOfTextBox = dart.constFn(_interceptors.JSArray$(ui$.TextBox)))();
  let MapOfString$ListOfString = () => (MapOfString$ListOfString = dart.constFn(core.Map$(core.String, ListOfString())))();
  let MapOfString$ListOfStringToNull = () => (MapOfString$ListOfStringToNull = dart.constFn(dart.fnType(core.Null, [MapOfString$ListOfString()])))();
  let FutureOfMapOfString$ListOfString = () => (FutureOfMapOfString$ListOfString = dart.constFn(async.Future$(MapOfString$ListOfString())))();
  let StringToFutureOfMapOfString$ListOfString = () => (StringToFutureOfMapOfString$ListOfString = dart.constFn(dart.fnType(FutureOfMapOfString$ListOfString(), [core.String])))();
  let CompleterOfAssetBundleImageKey = () => (CompleterOfAssetBundleImageKey = dart.constFn(async.Completer$(src__painting__image_provider.AssetBundleImageKey)))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let StringToListOfString = () => (StringToListOfString = dart.constFn(dart.fnType(ListOfString(), [core.String])))();
  let IterableOfListOfString = () => (IterableOfListOfString = dart.constFn(core.Iterable$(ListOfString())))();
  let SynchronousFutureOfMapOfString$ListOfString = () => (SynchronousFutureOfMapOfString$ListOfString = dart.constFn(src__foundation__synchronous_future.SynchronousFuture$(MapOfString$ListOfString())))();
  let SplayTreeMapOfdouble$String = () => (SplayTreeMapOfdouble$String = dart.constFn(collection.SplayTreeMap$(core.double, core.String)))();
  let ListOfOffset = () => (ListOfOffset = dart.constFn(core.List$(ui$.Offset)))();
  let VoidCallback = () => (VoidCallback = dart.constFn(dart.fnType(dart.void, [])))();
  let ObserverListOfVoidCallback = () => (ObserverListOfVoidCallback = dart.constFn(src__foundation__observer_list.ObserverList$(VoidCallback())))();
  let ListOfVoidCallback = () => (ListOfVoidCallback = dart.constFn(core.List$(VoidCallback())))();
  let DiagnosticsPropertyOfAnimationLocalListenersMixin = () => (DiagnosticsPropertyOfAnimationLocalListenersMixin = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(src__animation__listener_helpers.AnimationLocalListenersMixin)))();
  let SyncIterableOfDiagnosticsPropertyOfAnimationLocalListenersMixin = () => (SyncIterableOfDiagnosticsPropertyOfAnimationLocalListenersMixin = dart.constFn(_js_helper.SyncIterable$(DiagnosticsPropertyOfAnimationLocalListenersMixin())))();
  let IterableOfDiagnosticsPropertyOfAnimationLocalListenersMixin = () => (IterableOfDiagnosticsPropertyOfAnimationLocalListenersMixin = dart.constFn(core.Iterable$(DiagnosticsPropertyOfAnimationLocalListenersMixin())))();
  let VoidToIterableOfDiagnosticsPropertyOfAnimationLocalListenersMixin = () => (VoidToIterableOfDiagnosticsPropertyOfAnimationLocalListenersMixin = dart.constFn(dart.fnType(IterableOfDiagnosticsPropertyOfAnimationLocalListenersMixin(), [])))();
  let AnimationStatusTovoid = () => (AnimationStatusTovoid = dart.constFn(dart.fnType(dart.void, [src__animation__animation.AnimationStatus])))();
  let ObserverListOfAnimationStatusTovoid = () => (ObserverListOfAnimationStatusTovoid = dart.constFn(src__foundation__observer_list.ObserverList$(AnimationStatusTovoid())))();
  let ListOfAnimationStatusTovoid = () => (ListOfAnimationStatusTovoid = dart.constFn(core.List$(AnimationStatusTovoid())))();
  let DiagnosticsPropertyOfAnimationLocalStatusListenersMixin = () => (DiagnosticsPropertyOfAnimationLocalStatusListenersMixin = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(src__animation__listener_helpers.AnimationLocalStatusListenersMixin)))();
  let SyncIterableOfDiagnosticsPropertyOfAnimationLocalStatusListenersMixin = () => (SyncIterableOfDiagnosticsPropertyOfAnimationLocalStatusListenersMixin = dart.constFn(_js_helper.SyncIterable$(DiagnosticsPropertyOfAnimationLocalStatusListenersMixin())))();
  let IterableOfDiagnosticsPropertyOfAnimationLocalStatusListenersMixin = () => (IterableOfDiagnosticsPropertyOfAnimationLocalStatusListenersMixin = dart.constFn(core.Iterable$(DiagnosticsPropertyOfAnimationLocalStatusListenersMixin())))();
  let VoidToIterableOfDiagnosticsPropertyOfAnimationLocalStatusListenersMixin = () => (VoidToIterableOfDiagnosticsPropertyOfAnimationLocalStatusListenersMixin = dart.constFn(dart.fnType(IterableOfDiagnosticsPropertyOfAnimationLocalStatusListenersMixin(), [])))();
  let AnimationOfdouble = () => (AnimationOfdouble = dart.constFn(src__animation__animation.Animation$(core.double)))();
  let AnimatableOfdouble = () => (AnimatableOfdouble = dart.constFn(src__animation__tween.Animatable$(core.double)))();
  let JSArrayOf_Interval = () => (JSArrayOf_Interval = dart.constFn(_interceptors.JSArray$(src__animation__tween_sequence._Interval)))();
  let ListOf_Interval = () => (ListOf_Interval = dart.constFn(core.List$(src__animation__tween_sequence._Interval)))();
  dart.defineLazy(src__semantics__debug, {
    /*src__semantics__debug.debugSemanticsDisableAnimations*/get debugSemanticsDisableAnimations() {
      return null;
    },
    set debugSemanticsDisableAnimations(_) {}
  });
  const _accessibilityFeatures = dart.privateName(src__semantics__binding, "_accessibilityFeatures");
  src__semantics__binding.SemanticsBinding = class SemanticsBinding extends core.Object {
    static get instance() {
      return src__semantics__binding.SemanticsBinding._instance;
    }
  };
  src__semantics__binding.SemanticsBinding[dart.mixinOn] = BindingBase => class SemanticsBinding extends BindingBase {
    initInstances() {
      super.initInstances();
      src__semantics__binding.SemanticsBinding._instance = this;
      this[_accessibilityFeatures] = ui$.window.accessibilityFeatures;
    }
    handleAccessibilityFeaturesChanged() {
      this[_accessibilityFeatures] = ui$.window.accessibilityFeatures;
    }
    get accessibilityFeatures() {
      return this[_accessibilityFeatures];
    }
    get disableAnimations() {
      let value = this[_accessibilityFeatures].disableAnimations;
      if (!dart.test(dart.fn(() => {
        if (src__semantics__debug.debugSemanticsDisableAnimations != null) value = src__semantics__debug.debugSemanticsDisableAnimations;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/semantics/binding.dart", 52, 12, "() {if (debugSemanticsDisableAnimations != null) value = debugSemanticsDisableAnimations; return true;}()");
      return value;
    }
  };
  (src__semantics__binding.SemanticsBinding.new = function() {
    this[_accessibilityFeatures] = null;
  }).prototype = src__semantics__binding.SemanticsBinding.prototype;
  dart.addTypeTests(src__semantics__binding.SemanticsBinding);
  src__semantics__binding.SemanticsBinding[dart.implements] = () => [src__foundation__binding.BindingBase];
  dart.setMethodSignature(src__semantics__binding.SemanticsBinding, () => ({
    __proto__: dart.getMethods(src__semantics__binding.SemanticsBinding.__proto__),
    handleAccessibilityFeaturesChanged: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__semantics__binding.SemanticsBinding, () => ({
    __proto__: dart.getGetters(src__semantics__binding.SemanticsBinding.__proto__),
    accessibilityFeatures: ui$.AccessibilityFeatures,
    disableAnimations: core.bool
  }));
  dart.setLibraryUri(src__semantics__binding.SemanticsBinding, "package:flutter_web/src/semantics/binding.dart");
  dart.setFieldSignature(src__semantics__binding.SemanticsBinding, () => ({
    __proto__: dart.getFields(src__semantics__binding.SemanticsBinding.__proto__),
    [_accessibilityFeatures]: dart.fieldType(ui$.AccessibilityFeatures)
  }));
  dart.defineLazy(src__semantics__binding.SemanticsBinding, {
    /*src__semantics__binding.SemanticsBinding._instance*/get _instance() {
      return null;
    },
    set _instance(_) {}
  });
  const _x = dart.privateName(src__painting__alignment, "_x");
  const _start = dart.privateName(src__painting__alignment, "_start");
  const _y = dart.privateName(src__painting__alignment, "_y");
  src__painting__alignment.AlignmentGeometry = class AlignmentGeometry extends core.Object {
    add(other) {
      return new src__painting__alignment._MixedAlignment.new(dart.notNull(this[_x]) + dart.notNull(other[_x]), dart.notNull(this[_start]) + dart.notNull(other[_start]), dart.notNull(this[_y]) + dart.notNull(other[_y]));
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/alignment.dart", 101, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return b['*'](t);
      if (b == null) return a['*'](1.0 - dart.notNull(t));
      if (src__painting__alignment.Alignment.is(a) && src__painting__alignment.Alignment.is(b)) return src__painting__alignment.Alignment.lerp(a, b, t);
      if (src__painting__alignment.AlignmentDirectional.is(a) && src__painting__alignment.AlignmentDirectional.is(b)) return src__painting__alignment.AlignmentDirectional.lerp(a, b, t);
      return new src__painting__alignment._MixedAlignment.new(ui$.lerpDouble(a[_x], b[_x], t), ui$.lerpDouble(a[_start], b[_start], t), ui$.lerpDouble(a[_y], b[_y], t));
    }
    toString() {
      if (dart.test(src__util.assertionsEnabled)) {
        if (this[_start] === 0.0) return src__painting__alignment.Alignment._stringify(this[_x], this[_y]);
        if (this[_x] === 0.0) return src__painting__alignment.AlignmentDirectional._stringify(this[_start], this[_y]);
        return dart.notNull(src__painting__alignment.Alignment._stringify(this[_x], this[_y])) + " + " + dart.notNull(src__painting__alignment.AlignmentDirectional._stringify(this[_start], 0.0));
      } else {
        return super.toString();
      }
    }
    _equals(other) {
      if (other == null) return false;
      if (!src__painting__alignment.AlignmentGeometry.is(other)) return false;
      let typedOther = src__painting__alignment.AlignmentGeometry._check(other);
      return this[_x] == typedOther[_x] && this[_start] == typedOther[_start] && this[_y] == typedOther[_y];
    }
    get hashCode() {
      return ui$.hashValues(this[_x], this[_start], this[_y]);
    }
    get x() {
      return this[_x];
    }
    get y() {
      return this[_y];
    }
  };
  (src__painting__alignment.AlignmentGeometry.new = function() {
  }).prototype = src__painting__alignment.AlignmentGeometry.prototype;
  dart.addTypeTests(src__painting__alignment.AlignmentGeometry);
  dart.setMethodSignature(src__painting__alignment.AlignmentGeometry, () => ({
    __proto__: dart.getMethods(src__painting__alignment.AlignmentGeometry.__proto__),
    add: dart.fnType(src__painting__alignment.AlignmentGeometry, [src__painting__alignment.AlignmentGeometry])
  }));
  dart.setGetterSignature(src__painting__alignment.AlignmentGeometry, () => ({
    __proto__: dart.getGetters(src__painting__alignment.AlignmentGeometry.__proto__),
    x: core.double,
    y: core.double
  }));
  dart.setLibraryUri(src__painting__alignment.AlignmentGeometry, "package:flutter_web/src/painting/alignment.dart");
  dart.defineExtensionMethods(src__painting__alignment.AlignmentGeometry, ['toString', '_equals']);
  dart.defineExtensionAccessors(src__painting__alignment.AlignmentGeometry, ['hashCode']);
  src__painting__alignment.Alignment = class Alignment extends src__painting__alignment.AlignmentGeometry {
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
    get [_x]() {
      return this.x;
    }
    get [_start]() {
      return 0.0;
    }
    get [_y]() {
      return this.y;
    }
    add(other) {
      if (src__painting__alignment.Alignment.is(other)) return this['+'](other);
      return super.add(other);
    }
    ['-'](other) {
      return new src__painting__alignment.Alignment.new(dart.notNull(this.x) - dart.notNull(other.x), dart.notNull(this.y) - dart.notNull(other.y));
    }
    ['+'](other) {
      return new src__painting__alignment.Alignment.new(dart.notNull(this.x) + dart.notNull(other.x), dart.notNull(this.y) + dart.notNull(other.y));
    }
    _negate() {
      return new src__painting__alignment.Alignment.new(-dart.notNull(this.x), -dart.notNull(this.y));
    }
    ['*'](other) {
      return new src__painting__alignment.Alignment.new(dart.notNull(this.x) * dart.notNull(other), dart.notNull(this.y) * dart.notNull(other));
    }
    ['/'](other) {
      return new src__painting__alignment.Alignment.new(dart.notNull(this.x) / dart.notNull(other), dart.notNull(this.y) / dart.notNull(other));
    }
    ['~/'](other) {
      return new src__painting__alignment.Alignment.new((dart.notNull(this.x) / dart.notNull(other))[$truncate]()[$toDouble](), (dart.notNull(this.y) / dart.notNull(other))[$truncate]()[$toDouble]());
    }
    ['%'](other) {
      return new src__painting__alignment.Alignment.new(this.x[$modulo](other), this.y[$modulo](other));
    }
    alongOffset(other) {
      let centerX = dart.notNull(other.dx) / 2.0;
      let centerY = dart.notNull(other.dy) / 2.0;
      return new ui$.Offset.new(centerX + dart.notNull(this.x) * centerX, centerY + dart.notNull(this.y) * centerY);
    }
    alongSize(other) {
      let centerX = dart.notNull(other.width) / 2.0;
      let centerY = dart.notNull(other.height) / 2.0;
      return new ui$.Offset.new(centerX + dart.notNull(this.x) * centerX, centerY + dart.notNull(this.y) * centerY);
    }
    withinRect(rect) {
      let halfWidth = dart.notNull(rect.width) / 2.0;
      let halfHeight = dart.notNull(rect.height) / 2.0;
      return new ui$.Offset.new(dart.notNull(rect.left) + halfWidth + dart.notNull(this.x) * halfWidth, dart.notNull(rect.top) + halfHeight + dart.notNull(this.y) * halfHeight);
    }
    inscribe(size, rect) {
      let halfWidthDelta = (dart.notNull(rect.width) - dart.notNull(size.width)) / 2.0;
      let halfHeightDelta = (dart.notNull(rect.height) - dart.notNull(size.height)) / 2.0;
      return new ui$.Rect.fromLTWH(dart.notNull(rect.left) + halfWidthDelta + dart.notNull(this.x) * halfWidthDelta, dart.notNull(rect.top) + halfHeightDelta + dart.notNull(this.y) * halfHeightDelta, size.width, size.height);
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/alignment.dart", 353, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return new src__painting__alignment.Alignment.new(ui$.lerpDouble(0.0, b.x, t), ui$.lerpDouble(0.0, b.y, t));
      if (b == null) return new src__painting__alignment.Alignment.new(ui$.lerpDouble(a.x, 0.0, t), ui$.lerpDouble(a.y, 0.0, t));
      return new src__painting__alignment.Alignment.new(ui$.lerpDouble(a.x, b.x, t), ui$.lerpDouble(a.y, b.y, t));
    }
    static _stringify(x, y) {
      if (x === -1.0 && y === -1.0) return "topLeft";
      if (x === 0.0 && y === -1.0) return "topCenter";
      if (x === 1.0 && y === -1.0) return "topRight";
      if (x === -1.0 && y === 0.0) return "centerLeft";
      if (x === 0.0 && y === 0.0) return "center";
      if (x === 1.0 && y === 0.0) return "centerRight";
      if (x === -1.0 && y === 1.0) return "bottomLeft";
      if (x === 0.0 && y === 1.0) return "bottomCenter";
      if (x === 1.0 && y === 1.0) return "bottomRight";
      return "Alignment(" + x[$toStringAsFixed](1) + ", " + (y[$toStringAsFixed](1) + ")");
    }
    resolve(direction) {
      return this;
    }
    toString() {
      if (dart.test(src__util.assertionsEnabled)) {
        return src__painting__alignment.Alignment._stringify(this.x, this.y);
      } else {
        return super.toString();
      }
    }
  };
  (src__painting__alignment.Alignment.new = function(x, y) {
    this[x$] = x;
    this[y$] = y;
    if (!(x != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/alignment.dart", 193, 16, "x != null");
    if (!(y != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/alignment.dart", 194, 16, "y != null");
    src__painting__alignment.Alignment.__proto__.new.call(this);
  }).prototype = src__painting__alignment.Alignment.prototype;
  dart.addTypeTests(src__painting__alignment.Alignment);
  const x$ = Symbol("Alignment.x");
  const y$ = Symbol("Alignment.y");
  dart.setMethodSignature(src__painting__alignment.Alignment, () => ({
    __proto__: dart.getMethods(src__painting__alignment.Alignment.__proto__),
    '-': dart.fnType(src__painting__alignment.Alignment, [src__painting__alignment.Alignment]),
    '+': dart.fnType(src__painting__alignment.Alignment, [src__painting__alignment.Alignment]),
    _negate: dart.fnType(src__painting__alignment.Alignment, []),
    '*': dart.fnType(src__painting__alignment.Alignment, [core.double]),
    '/': dart.fnType(src__painting__alignment.Alignment, [core.double]),
    '~/': dart.fnType(src__painting__alignment.Alignment, [core.double]),
    '%': dart.fnType(src__painting__alignment.Alignment, [core.double]),
    alongOffset: dart.fnType(ui$.Offset, [ui$.Offset]),
    alongSize: dart.fnType(ui$.Offset, [ui$.Size]),
    withinRect: dart.fnType(ui$.Offset, [ui$.Rect]),
    inscribe: dart.fnType(ui$.Rect, [ui$.Size, ui$.Rect]),
    resolve: dart.fnType(src__painting__alignment.Alignment, [ui$.TextDirection])
  }));
  dart.setGetterSignature(src__painting__alignment.Alignment, () => ({
    __proto__: dart.getGetters(src__painting__alignment.Alignment.__proto__),
    [_x]: core.double,
    [_start]: core.double,
    [_y]: core.double
  }));
  dart.setLibraryUri(src__painting__alignment.Alignment, "package:flutter_web/src/painting/alignment.dart");
  dart.setFieldSignature(src__painting__alignment.Alignment, () => ({
    __proto__: dart.getFields(src__painting__alignment.Alignment.__proto__),
    x: dart.finalFieldType(core.double),
    y: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(src__painting__alignment.Alignment, ['toString']);
  dart.defineLazy(src__painting__alignment.Alignment, {
    /*src__painting__alignment.Alignment.topLeft*/get topLeft() {
      return dart.const(new src__painting__alignment.Alignment.new(-1.0, -1.0));
    },
    /*src__painting__alignment.Alignment.topCenter*/get topCenter() {
      return dart.const(new src__painting__alignment.Alignment.new(0.0, -1.0));
    },
    /*src__painting__alignment.Alignment.topRight*/get topRight() {
      return dart.const(new src__painting__alignment.Alignment.new(1.0, -1.0));
    },
    /*src__painting__alignment.Alignment.centerLeft*/get centerLeft() {
      return dart.const(new src__painting__alignment.Alignment.new(-1.0, 0.0));
    },
    /*src__painting__alignment.Alignment.center*/get center() {
      return dart.const(new src__painting__alignment.Alignment.new(0.0, 0.0));
    },
    /*src__painting__alignment.Alignment.centerRight*/get centerRight() {
      return dart.const(new src__painting__alignment.Alignment.new(1.0, 0.0));
    },
    /*src__painting__alignment.Alignment.bottomLeft*/get bottomLeft() {
      return dart.const(new src__painting__alignment.Alignment.new(-1.0, 1.0));
    },
    /*src__painting__alignment.Alignment.bottomCenter*/get bottomCenter() {
      return dart.const(new src__painting__alignment.Alignment.new(0.0, 1.0));
    },
    /*src__painting__alignment.Alignment.bottomRight*/get bottomRight() {
      return dart.const(new src__painting__alignment.Alignment.new(1.0, 1.0));
    }
  });
  src__painting__alignment.AlignmentDirectional = class AlignmentDirectional extends src__painting__alignment.AlignmentGeometry {
    get start() {
      return this[start$];
    }
    set start(value) {
      super.start = value;
    }
    get y() {
      return this[y$0];
    }
    set y(value) {
      super.y = value;
    }
    get [_x]() {
      return 0.0;
    }
    get [_start]() {
      return this.start;
    }
    get [_y]() {
      return this.y;
    }
    add(other) {
      if (src__painting__alignment.AlignmentDirectional.is(other)) return this['+'](other);
      return super.add(other);
    }
    ['-'](other) {
      return new src__painting__alignment.AlignmentDirectional.new(dart.notNull(this.start) - dart.notNull(other.start), dart.notNull(this.y) - dart.notNull(other.y));
    }
    ['+'](other) {
      return new src__painting__alignment.AlignmentDirectional.new(dart.notNull(this.start) + dart.notNull(other.start), dart.notNull(this.y) + dart.notNull(other.y));
    }
    _negate() {
      return new src__painting__alignment.AlignmentDirectional.new(-dart.notNull(this.start), -dart.notNull(this.y));
    }
    ['*'](other) {
      return new src__painting__alignment.AlignmentDirectional.new(dart.notNull(this.start) * dart.notNull(other), dart.notNull(this.y) * dart.notNull(other));
    }
    ['/'](other) {
      return new src__painting__alignment.AlignmentDirectional.new(dart.notNull(this.start) / dart.notNull(other), dart.notNull(this.y) / dart.notNull(other));
    }
    ['~/'](other) {
      return new src__painting__alignment.AlignmentDirectional.new((dart.notNull(this.start) / dart.notNull(other))[$truncate]()[$toDouble](), (dart.notNull(this.y) / dart.notNull(other))[$truncate]()[$toDouble]());
    }
    ['%'](other) {
      return new src__painting__alignment.AlignmentDirectional.new(this.start[$modulo](other), this.y[$modulo](other));
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/alignment.dart", 552, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return new src__painting__alignment.AlignmentDirectional.new(ui$.lerpDouble(0.0, b.start, t), ui$.lerpDouble(0.0, b.y, t));
      if (b == null) return new src__painting__alignment.AlignmentDirectional.new(ui$.lerpDouble(a.start, 0.0, t), ui$.lerpDouble(a.y, 0.0, t));
      return new src__painting__alignment.AlignmentDirectional.new(ui$.lerpDouble(a.start, b.start, t), ui$.lerpDouble(a.y, b.y, t));
    }
    resolve(direction) {
      if (!(direction != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/alignment.dart", 566, 12, "direction != null");
      switch (direction) {
        case ui$.TextDirection.rtl:
        {
          return new src__painting__alignment.Alignment.new(-dart.notNull(this.start), this.y);
        }
        case ui$.TextDirection.ltr:
        {
          return new src__painting__alignment.Alignment.new(this.start, this.y);
        }
      }
      return null;
    }
    static _stringify(start, y) {
      if (start === -1.0 && y === -1.0) return "AlignmentDirectional.topStart";
      if (start === 0.0 && y === -1.0) return "AlignmentDirectional.topCenter";
      if (start === 1.0 && y === -1.0) return "AlignmentDirectional.topEnd";
      if (start === -1.0 && y === 0.0) return "AlignmentDirectional.centerStart";
      if (start === 0.0 && y === 0.0) return "AlignmentDirectional.center";
      if (start === 1.0 && y === 0.0) return "AlignmentDirectional.centerEnd";
      if (start === -1.0 && y === 1.0) return "AlignmentDirectional.bottomStart";
      if (start === 0.0 && y === 1.0) return "AlignmentDirectional.bottomCenter";
      if (start === 1.0 && y === 1.0) return "AlignmentDirectional.bottomEnd";
      return "AlignmentDirectional(" + start[$toStringAsFixed](1) + ", " + (y[$toStringAsFixed](1) + ")");
    }
    toString() {
      return src__painting__alignment.AlignmentDirectional._stringify(this.start, this.y);
    }
  };
  (src__painting__alignment.AlignmentDirectional.new = function(start, y) {
    this[start$] = start;
    this[y$0] = y;
    if (!(start != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/alignment.dart", 405, 16, "start != null");
    if (!(y != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/alignment.dart", 406, 16, "y != null");
    src__painting__alignment.AlignmentDirectional.__proto__.new.call(this);
  }).prototype = src__painting__alignment.AlignmentDirectional.prototype;
  dart.addTypeTests(src__painting__alignment.AlignmentDirectional);
  const start$ = Symbol("AlignmentDirectional.start");
  const y$0 = Symbol("AlignmentDirectional.y");
  dart.setMethodSignature(src__painting__alignment.AlignmentDirectional, () => ({
    __proto__: dart.getMethods(src__painting__alignment.AlignmentDirectional.__proto__),
    '-': dart.fnType(src__painting__alignment.AlignmentDirectional, [src__painting__alignment.AlignmentDirectional]),
    '+': dart.fnType(src__painting__alignment.AlignmentDirectional, [src__painting__alignment.AlignmentDirectional]),
    _negate: dart.fnType(src__painting__alignment.AlignmentDirectional, []),
    '*': dart.fnType(src__painting__alignment.AlignmentDirectional, [core.double]),
    '/': dart.fnType(src__painting__alignment.AlignmentDirectional, [core.double]),
    '~/': dart.fnType(src__painting__alignment.AlignmentDirectional, [core.double]),
    '%': dart.fnType(src__painting__alignment.AlignmentDirectional, [core.double]),
    resolve: dart.fnType(src__painting__alignment.Alignment, [ui$.TextDirection])
  }));
  dart.setGetterSignature(src__painting__alignment.AlignmentDirectional, () => ({
    __proto__: dart.getGetters(src__painting__alignment.AlignmentDirectional.__proto__),
    [_x]: core.double,
    [_start]: core.double,
    [_y]: core.double
  }));
  dart.setLibraryUri(src__painting__alignment.AlignmentDirectional, "package:flutter_web/src/painting/alignment.dart");
  dart.setFieldSignature(src__painting__alignment.AlignmentDirectional, () => ({
    __proto__: dart.getFields(src__painting__alignment.AlignmentDirectional.__proto__),
    start: dart.finalFieldType(core.double),
    y: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(src__painting__alignment.AlignmentDirectional, ['toString']);
  dart.defineLazy(src__painting__alignment.AlignmentDirectional, {
    /*src__painting__alignment.AlignmentDirectional.topStart*/get topStart() {
      return dart.const(new src__painting__alignment.AlignmentDirectional.new(-1.0, -1.0));
    },
    /*src__painting__alignment.AlignmentDirectional.topCenter*/get topCenter() {
      return dart.const(new src__painting__alignment.AlignmentDirectional.new(0.0, -1.0));
    },
    /*src__painting__alignment.AlignmentDirectional.topEnd*/get topEnd() {
      return dart.const(new src__painting__alignment.AlignmentDirectional.new(1.0, -1.0));
    },
    /*src__painting__alignment.AlignmentDirectional.centerStart*/get centerStart() {
      return dart.const(new src__painting__alignment.AlignmentDirectional.new(-1.0, 0.0));
    },
    /*src__painting__alignment.AlignmentDirectional.center*/get center() {
      return dart.const(new src__painting__alignment.AlignmentDirectional.new(0.0, 0.0));
    },
    /*src__painting__alignment.AlignmentDirectional.centerEnd*/get centerEnd() {
      return dart.const(new src__painting__alignment.AlignmentDirectional.new(1.0, 0.0));
    },
    /*src__painting__alignment.AlignmentDirectional.bottomStart*/get bottomStart() {
      return dart.const(new src__painting__alignment.AlignmentDirectional.new(-1.0, 1.0));
    },
    /*src__painting__alignment.AlignmentDirectional.bottomCenter*/get bottomCenter() {
      return dart.const(new src__painting__alignment.AlignmentDirectional.new(0.0, 1.0));
    },
    /*src__painting__alignment.AlignmentDirectional.bottomEnd*/get bottomEnd() {
      return dart.const(new src__painting__alignment.AlignmentDirectional.new(1.0, 1.0));
    }
  });
  src__painting__alignment._MixedAlignment = class _MixedAlignment extends src__painting__alignment.AlignmentGeometry {
    _negate() {
      return new src__painting__alignment._MixedAlignment.new(-dart.notNull(this[_x]), -dart.notNull(this[_start]), -dart.notNull(this[_y]));
    }
    ['*'](other) {
      return new src__painting__alignment._MixedAlignment.new(dart.notNull(this[_x]) * dart.notNull(other), dart.notNull(this[_start]) * dart.notNull(other), dart.notNull(this[_y]) * dart.notNull(other));
    }
    ['/'](other) {
      return new src__painting__alignment._MixedAlignment.new(dart.notNull(this[_x]) / dart.notNull(other), dart.notNull(this[_start]) / dart.notNull(other), dart.notNull(this[_y]) / dart.notNull(other));
    }
    ['~/'](other) {
      return new src__painting__alignment._MixedAlignment.new((dart.notNull(this[_x]) / dart.notNull(other))[$truncate]()[$toDouble](), (dart.notNull(this[_start]) / dart.notNull(other))[$truncate]()[$toDouble](), (dart.notNull(this[_y]) / dart.notNull(other))[$truncate]()[$toDouble]());
    }
    ['%'](other) {
      return new src__painting__alignment._MixedAlignment.new(this[_x][$modulo](other), this[_start][$modulo](other), this[_y][$modulo](other));
    }
    resolve(direction) {
      if (!(direction != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/alignment.dart", 653, 12, "direction != null");
      switch (direction) {
        case ui$.TextDirection.rtl:
        {
          return new src__painting__alignment.Alignment.new(dart.notNull(this[_x]) - dart.notNull(this[_start]), this[_y]);
        }
        case ui$.TextDirection.ltr:
        {
          return new src__painting__alignment.Alignment.new(dart.notNull(this[_x]) + dart.notNull(this[_start]), this[_y]);
        }
      }
      return null;
    }
  };
  (src__painting__alignment._MixedAlignment.new = function(x, start, y) {
    this[_x] = x;
    this[_start] = start;
    this[_y] = y;
    src__painting__alignment._MixedAlignment.__proto__.new.call(this);
  }).prototype = src__painting__alignment._MixedAlignment.prototype;
  dart.addTypeTests(src__painting__alignment._MixedAlignment);
  dart.setMethodSignature(src__painting__alignment._MixedAlignment, () => ({
    __proto__: dart.getMethods(src__painting__alignment._MixedAlignment.__proto__),
    _negate: dart.fnType(src__painting__alignment._MixedAlignment, []),
    '*': dart.fnType(src__painting__alignment._MixedAlignment, [core.double]),
    '/': dart.fnType(src__painting__alignment._MixedAlignment, [core.double]),
    '~/': dart.fnType(src__painting__alignment._MixedAlignment, [core.double]),
    '%': dart.fnType(src__painting__alignment._MixedAlignment, [core.double]),
    resolve: dart.fnType(src__painting__alignment.Alignment, [ui$.TextDirection])
  }));
  dart.setLibraryUri(src__painting__alignment._MixedAlignment, "package:flutter_web/src/painting/alignment.dart");
  dart.setFieldSignature(src__painting__alignment._MixedAlignment, () => ({
    __proto__: dart.getFields(src__painting__alignment._MixedAlignment.__proto__),
    [_x]: dart.finalFieldType(core.double),
    [_start]: dart.finalFieldType(core.double),
    [_y]: dart.finalFieldType(core.double)
  }));
  src__painting__basic_types.RenderComparison = class RenderComparison extends core.Object {
    toString() {
      return {
        0: "RenderComparison.identical",
        1: "RenderComparison.metadata",
        2: "RenderComparison.paint",
        3: "RenderComparison.layout"
      }[this.index];
    }
  };
  (src__painting__basic_types.RenderComparison.new = function(x) {
    this.index = x;
  }).prototype = src__painting__basic_types.RenderComparison.prototype;
  dart.addTypeTests(src__painting__basic_types.RenderComparison);
  dart.setLibraryUri(src__painting__basic_types.RenderComparison, "package:flutter_web/src/painting/basic_types.dart");
  dart.setFieldSignature(src__painting__basic_types.RenderComparison, () => ({
    __proto__: dart.getFields(src__painting__basic_types.RenderComparison.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__painting__basic_types.RenderComparison, ['toString']);
  src__painting__basic_types.RenderComparison.identical = dart.const(new src__painting__basic_types.RenderComparison.new(0));
  src__painting__basic_types.RenderComparison.metadata = dart.const(new src__painting__basic_types.RenderComparison.new(1));
  src__painting__basic_types.RenderComparison.paint = dart.const(new src__painting__basic_types.RenderComparison.new(2));
  src__painting__basic_types.RenderComparison.layout = dart.const(new src__painting__basic_types.RenderComparison.new(3));
  src__painting__basic_types.RenderComparison.values = dart.constList([src__painting__basic_types.RenderComparison.identical, src__painting__basic_types.RenderComparison.metadata, src__painting__basic_types.RenderComparison.paint, src__painting__basic_types.RenderComparison.layout], src__painting__basic_types.RenderComparison);
  src__painting__basic_types.Axis = class Axis extends core.Object {
    toString() {
      return {
        0: "Axis.horizontal",
        1: "Axis.vertical"
      }[this.index];
    }
  };
  (src__painting__basic_types.Axis.new = function(x) {
    this.index = x;
  }).prototype = src__painting__basic_types.Axis.prototype;
  dart.addTypeTests(src__painting__basic_types.Axis);
  dart.setLibraryUri(src__painting__basic_types.Axis, "package:flutter_web/src/painting/basic_types.dart");
  dart.setFieldSignature(src__painting__basic_types.Axis, () => ({
    __proto__: dart.getFields(src__painting__basic_types.Axis.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__painting__basic_types.Axis, ['toString']);
  src__painting__basic_types.Axis.horizontal = dart.const(new src__painting__basic_types.Axis.new(0));
  src__painting__basic_types.Axis.vertical = dart.const(new src__painting__basic_types.Axis.new(1));
  src__painting__basic_types.Axis.values = dart.constList([src__painting__basic_types.Axis.horizontal, src__painting__basic_types.Axis.vertical], src__painting__basic_types.Axis);
  src__painting__basic_types.flipAxis = function(direction) {
    if (!(direction != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/basic_types.dart", 142, 10, "direction != null");
    switch (direction) {
      case src__painting__basic_types.Axis.horizontal:
      {
        return src__painting__basic_types.Axis.vertical;
      }
      case src__painting__basic_types.Axis.vertical:
      {
        return src__painting__basic_types.Axis.horizontal;
      }
    }
    return null;
  };
  src__painting__basic_types.VerticalDirection = class VerticalDirection extends core.Object {
    toString() {
      return {
        0: "VerticalDirection.up",
        1: "VerticalDirection.down"
      }[this.index];
    }
  };
  (src__painting__basic_types.VerticalDirection.new = function(x) {
    this.index = x;
  }).prototype = src__painting__basic_types.VerticalDirection.prototype;
  dart.addTypeTests(src__painting__basic_types.VerticalDirection);
  dart.setLibraryUri(src__painting__basic_types.VerticalDirection, "package:flutter_web/src/painting/basic_types.dart");
  dart.setFieldSignature(src__painting__basic_types.VerticalDirection, () => ({
    __proto__: dart.getFields(src__painting__basic_types.VerticalDirection.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__painting__basic_types.VerticalDirection, ['toString']);
  src__painting__basic_types.VerticalDirection.up = dart.const(new src__painting__basic_types.VerticalDirection.new(0));
  src__painting__basic_types.VerticalDirection.down = dart.const(new src__painting__basic_types.VerticalDirection.new(1));
  src__painting__basic_types.VerticalDirection.values = dart.constList([src__painting__basic_types.VerticalDirection.up, src__painting__basic_types.VerticalDirection.down], src__painting__basic_types.VerticalDirection);
  src__painting__basic_types.AxisDirection = class AxisDirection extends core.Object {
    toString() {
      return {
        0: "AxisDirection.up",
        1: "AxisDirection.right",
        2: "AxisDirection.down",
        3: "AxisDirection.left"
      }[this.index];
    }
  };
  (src__painting__basic_types.AxisDirection.new = function(x) {
    this.index = x;
  }).prototype = src__painting__basic_types.AxisDirection.prototype;
  dart.addTypeTests(src__painting__basic_types.AxisDirection);
  dart.setLibraryUri(src__painting__basic_types.AxisDirection, "package:flutter_web/src/painting/basic_types.dart");
  dart.setFieldSignature(src__painting__basic_types.AxisDirection, () => ({
    __proto__: dart.getFields(src__painting__basic_types.AxisDirection.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__painting__basic_types.AxisDirection, ['toString']);
  src__painting__basic_types.AxisDirection.up = dart.const(new src__painting__basic_types.AxisDirection.new(0));
  src__painting__basic_types.AxisDirection.right = dart.const(new src__painting__basic_types.AxisDirection.new(1));
  src__painting__basic_types.AxisDirection.down = dart.const(new src__painting__basic_types.AxisDirection.new(2));
  src__painting__basic_types.AxisDirection.left = dart.const(new src__painting__basic_types.AxisDirection.new(3));
  src__painting__basic_types.AxisDirection.values = dart.constList([src__painting__basic_types.AxisDirection.up, src__painting__basic_types.AxisDirection.right, src__painting__basic_types.AxisDirection.down, src__painting__basic_types.AxisDirection.left], src__painting__basic_types.AxisDirection);
  src__painting__basic_types.axisDirectionToAxis = function(axisDirection) {
    if (!(axisDirection != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/basic_types.dart", 213, 10, "axisDirection != null");
    switch (axisDirection) {
      case src__painting__basic_types.AxisDirection.up:
      case src__painting__basic_types.AxisDirection.down:
      {
        return src__painting__basic_types.Axis.vertical;
      }
      case src__painting__basic_types.AxisDirection.left:
      case src__painting__basic_types.AxisDirection.right:
      {
        return src__painting__basic_types.Axis.horizontal;
      }
    }
    return null;
  };
  src__painting__basic_types.textDirectionToAxisDirection = function(textDirection) {
    if (!(textDirection != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/basic_types.dart", 231, 10, "textDirection != null");
    switch (textDirection) {
      case ui$.TextDirection.rtl:
      {
        return src__painting__basic_types.AxisDirection.left;
      }
      case ui$.TextDirection.ltr:
      {
        return src__painting__basic_types.AxisDirection.right;
      }
    }
    return null;
  };
  src__painting__basic_types.flipAxisDirection = function(axisDirection) {
    if (!(axisDirection != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/basic_types.dart", 251, 10, "axisDirection != null");
    switch (axisDirection) {
      case src__painting__basic_types.AxisDirection.up:
      {
        return src__painting__basic_types.AxisDirection.down;
      }
      case src__painting__basic_types.AxisDirection.right:
      {
        return src__painting__basic_types.AxisDirection.left;
      }
      case src__painting__basic_types.AxisDirection.down:
      {
        return src__painting__basic_types.AxisDirection.up;
      }
      case src__painting__basic_types.AxisDirection.left:
      {
        return src__painting__basic_types.AxisDirection.right;
      }
    }
    return null;
  };
  src__painting__basic_types.axisDirectionIsReversed = function(axisDirection) {
    if (!(axisDirection != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/basic_types.dart", 271, 10, "axisDirection != null");
    switch (axisDirection) {
      case src__painting__basic_types.AxisDirection.up:
      case src__painting__basic_types.AxisDirection.left:
      {
        return true;
      }
      case src__painting__basic_types.AxisDirection.down:
      case src__painting__basic_types.AxisDirection.right:
      {
        return false;
      }
    }
    return null;
  };
  const _topLeft = dart.privateName(src__painting__border_radius, "_topLeft");
  const _topRight = dart.privateName(src__painting__border_radius, "_topRight");
  const _bottomLeft = dart.privateName(src__painting__border_radius, "_bottomLeft");
  const _bottomRight = dart.privateName(src__painting__border_radius, "_bottomRight");
  const _topStart = dart.privateName(src__painting__border_radius, "_topStart");
  const _topEnd = dart.privateName(src__painting__border_radius, "_topEnd");
  const _bottomStart = dart.privateName(src__painting__border_radius, "_bottomStart");
  const _bottomEnd = dart.privateName(src__painting__border_radius, "_bottomEnd");
  src__painting__border_radius.BorderRadiusGeometry = class BorderRadiusGeometry extends core.Object {
    subtract(other) {
      return new src__painting__border_radius._MixedBorderRadius.new(this[_topLeft]['-'](other[_topLeft]), this[_topRight]['-'](other[_topRight]), this[_bottomLeft]['-'](other[_bottomLeft]), this[_bottomRight]['-'](other[_bottomRight]), this[_topStart]['-'](other[_topStart]), this[_topEnd]['-'](other[_topEnd]), this[_bottomStart]['-'](other[_bottomStart]), this[_bottomEnd]['-'](other[_bottomEnd]));
    }
    add(other) {
      return new src__painting__border_radius._MixedBorderRadius.new(this[_topLeft]['+'](other[_topLeft]), this[_topRight]['+'](other[_topRight]), this[_bottomLeft]['+'](other[_bottomLeft]), this[_bottomRight]['+'](other[_bottomRight]), this[_topStart]['+'](other[_topStart]), this[_topEnd]['+'](other[_topEnd]), this[_bottomStart]['+'](other[_bottomStart]), this[_bottomEnd]['+'](other[_bottomEnd]));
    }
    static lerp(a, b, t) {
      {
        if (!(t != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/border_radius.dart", 148, 12, "t != null");
        if (a == null && b == null) return null;
        let t$ = a;
        t$ == null ? a = src__painting__border_radius.BorderRadius.zero : t$;
        let t$0 = b;
        t$0 == null ? b = src__painting__border_radius.BorderRadius.zero : t$0;
        return a.add(b.subtract(a)['*'](t));
      }
    }
    toString() {
      if (dart.test(src__util.assertionsEnabled)) {
        let visual = null, logical = null;
        if (dart.equals(this[_topLeft], this[_topRight]) && dart.equals(this[_topRight], this[_bottomLeft]) && dart.equals(this[_bottomLeft], this[_bottomRight])) {
          if (!dart.equals(this[_topLeft], ui$.Radius.zero)) {
            if (this[_topLeft].x == this[_topLeft].y) {
              visual = "BorderRadius.circular(" + this[_topLeft].x[$toStringAsFixed](1) + ")";
            } else {
              visual = "BorderRadius.all(" + dart.str(this[_topLeft]) + ")";
            }
          }
        } else {
          let result = new core.StringBuffer.new();
          result.write("BorderRadius.only(");
          let comma = false;
          if (!dart.equals(this[_topLeft], ui$.Radius.zero)) {
            result.write("topLeft: " + dart.str(this[_topLeft]));
            comma = true;
          }
          if (!dart.equals(this[_topRight], ui$.Radius.zero)) {
            if (comma) result.write(", ");
            result.write("topRight: " + dart.str(this[_topRight]));
            comma = true;
          }
          if (!dart.equals(this[_bottomLeft], ui$.Radius.zero)) {
            if (comma) result.write(", ");
            result.write("bottomLeft: " + dart.str(this[_bottomLeft]));
            comma = true;
          }
          if (!dart.equals(this[_bottomRight], ui$.Radius.zero)) {
            if (comma) result.write(", ");
            result.write("bottomRight: " + dart.str(this[_bottomRight]));
          }
          result.write(")");
          visual = result.toString();
        }
        if (dart.equals(this[_topStart], this[_topEnd]) && dart.equals(this[_topEnd], this[_bottomEnd]) && dart.equals(this[_bottomEnd], this[_bottomStart])) {
          if (!dart.equals(this[_topStart], ui$.Radius.zero)) {
            if (this[_topStart].x == this[_topStart].y) {
              logical = "BorderRadiusDirectional.circular" + ("(" + this[_topStart].x[$toStringAsFixed](1) + ")");
            } else {
              logical = "BorderRadiusDirectional.all(" + dart.str(this[_topStart]) + ")";
            }
          }
        } else {
          let result = new core.StringBuffer.new();
          result.write("BorderRadiusDirectional.only(");
          let comma = false;
          if (!dart.equals(this[_topStart], ui$.Radius.zero)) {
            result.write("topStart: " + dart.str(this[_topStart]));
            comma = true;
          }
          if (!dart.equals(this[_topEnd], ui$.Radius.zero)) {
            if (comma) result.write(", ");
            result.write("topEnd: " + dart.str(this[_topEnd]));
            comma = true;
          }
          if (!dart.equals(this[_bottomStart], ui$.Radius.zero)) {
            if (comma) result.write(", ");
            result.write("bottomStart: " + dart.str(this[_bottomStart]));
            comma = true;
          }
          if (!dart.equals(this[_bottomEnd], ui$.Radius.zero)) {
            if (comma) result.write(", ");
            result.write("bottomEnd: " + dart.str(this[_bottomEnd]));
          }
          result.write(")");
          logical = result.toString();
        }
        if (visual != null && logical != null) return dart.str(visual) + " + " + dart.str(logical);
        if (visual != null) return visual;
        if (logical != null) return logical;
        return "BorderRadius.zero";
      } else {
        return super.toString();
      }
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(this[$runtimeType], dart.runtimeType(other))) return false;
      let typedOther = src__painting__border_radius.BorderRadiusGeometry._check(other);
      return dart.equals(this[_topLeft], typedOther[_topLeft]) && dart.equals(this[_topRight], typedOther[_topRight]) && dart.equals(this[_bottomLeft], typedOther[_bottomLeft]) && dart.equals(this[_bottomRight], typedOther[_bottomRight]) && dart.equals(this[_topStart], typedOther[_topStart]) && dart.equals(this[_topEnd], typedOther[_topEnd]) && dart.equals(this[_bottomStart], typedOther[_bottomStart]) && dart.equals(this[_bottomEnd], typedOther[_bottomEnd]);
    }
    get hashCode() {
      return ui$.hashValues(this[_topLeft], this[_topRight], this[_bottomLeft], this[_bottomRight], this[_topStart], this[_topEnd], this[_bottomStart], this[_bottomEnd]);
    }
  };
  (src__painting__border_radius.BorderRadiusGeometry.new = function() {
  }).prototype = src__painting__border_radius.BorderRadiusGeometry.prototype;
  dart.addTypeTests(src__painting__border_radius.BorderRadiusGeometry);
  dart.setMethodSignature(src__painting__border_radius.BorderRadiusGeometry, () => ({
    __proto__: dart.getMethods(src__painting__border_radius.BorderRadiusGeometry.__proto__),
    subtract: dart.fnType(src__painting__border_radius.BorderRadiusGeometry, [src__painting__border_radius.BorderRadiusGeometry]),
    add: dart.fnType(src__painting__border_radius.BorderRadiusGeometry, [src__painting__border_radius.BorderRadiusGeometry])
  }));
  dart.setLibraryUri(src__painting__border_radius.BorderRadiusGeometry, "package:flutter_web/src/painting/border_radius.dart");
  dart.defineExtensionMethods(src__painting__border_radius.BorderRadiusGeometry, ['toString', '_equals']);
  dart.defineExtensionAccessors(src__painting__border_radius.BorderRadiusGeometry, ['hashCode']);
  src__painting__border_radius.BorderRadius = class BorderRadius extends src__painting__border_radius.BorderRadiusGeometry {
    get topLeft() {
      return this[topLeft$];
    }
    set topLeft(value) {
      super.topLeft = value;
    }
    get [_topLeft]() {
      return this.topLeft;
    }
    get topRight() {
      return this[topRight$];
    }
    set topRight(value) {
      super.topRight = value;
    }
    get [_topRight]() {
      return this.topRight;
    }
    get bottomLeft() {
      return this[bottomLeft$];
    }
    set bottomLeft(value) {
      super.bottomLeft = value;
    }
    get [_bottomLeft]() {
      return this.bottomLeft;
    }
    get bottomRight() {
      return this[bottomRight$];
    }
    set bottomRight(value) {
      super.bottomRight = value;
    }
    get [_bottomRight]() {
      return this.bottomRight;
    }
    get [_topStart]() {
      return ui$.Radius.zero;
    }
    get [_topEnd]() {
      return ui$.Radius.zero;
    }
    get [_bottomStart]() {
      return ui$.Radius.zero;
    }
    get [_bottomEnd]() {
      return ui$.Radius.zero;
    }
    toRRect(rect) {
      return new ui$.RRect.fromRectAndCorners(rect, {topLeft: this.topLeft, topRight: this.topRight, bottomLeft: this.bottomLeft, bottomRight: this.bottomRight});
    }
    subtract(other) {
      if (src__painting__border_radius.BorderRadius.is(other)) return this['-'](other);
      return super.subtract(other);
    }
    add(other) {
      if (src__painting__border_radius.BorderRadius.is(other)) return this['+'](other);
      return super.add(other);
    }
    ['-'](other) {
      return new src__painting__border_radius.BorderRadius.only({topLeft: this.topLeft['-'](other.topLeft), topRight: this.topRight['-'](other.topRight), bottomLeft: this.bottomLeft['-'](other.bottomLeft), bottomRight: this.bottomRight['-'](other.bottomRight)});
    }
    ['+'](other) {
      return new src__painting__border_radius.BorderRadius.only({topLeft: this.topLeft['+'](other.topLeft), topRight: this.topRight['+'](other.topRight), bottomLeft: this.bottomLeft['+'](other.bottomLeft), bottomRight: this.bottomRight['+'](other.bottomRight)});
    }
    _negate() {
      return new src__painting__border_radius.BorderRadius.only({topLeft: this.topLeft._negate(), topRight: this.topRight._negate(), bottomLeft: this.bottomLeft._negate(), bottomRight: this.bottomRight._negate()});
    }
    ['*'](other) {
      return new src__painting__border_radius.BorderRadius.only({topLeft: this.topLeft['*'](other), topRight: this.topRight['*'](other), bottomLeft: this.bottomLeft['*'](other), bottomRight: this.bottomRight['*'](other)});
    }
    ['/'](other) {
      return new src__painting__border_radius.BorderRadius.only({topLeft: this.topLeft['/'](other), topRight: this.topRight['/'](other), bottomLeft: this.bottomLeft['/'](other), bottomRight: this.bottomRight['/'](other)});
    }
    ['~/'](other) {
      return new src__painting__border_radius.BorderRadius.only({topLeft: this.topLeft['~/'](other), topRight: this.topRight['~/'](other), bottomLeft: this.bottomLeft['~/'](other), bottomRight: this.bottomRight['~/'](other)});
    }
    ['%'](other) {
      return new src__painting__border_radius.BorderRadius.only({topLeft: this.topLeft['%'](other), topRight: this.topRight['%'](other), bottomLeft: this.bottomLeft['%'](other), bottomRight: this.bottomRight['%'](other)});
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/border_radius.dart", 495, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return b['*'](t);
      if (b == null) return a['*'](1.0 - dart.notNull(t));
      return new src__painting__border_radius.BorderRadius.only({topLeft: ui$.Radius.lerp(a.topLeft, b.topLeft, t), topRight: ui$.Radius.lerp(a.topRight, b.topRight, t), bottomLeft: ui$.Radius.lerp(a.bottomLeft, b.bottomLeft, t), bottomRight: ui$.Radius.lerp(a.bottomRight, b.bottomRight, t)});
    }
    resolve(direction) {
      return this;
    }
  };
  (src__painting__border_radius.BorderRadius.all = function(radius) {
    src__painting__border_radius.BorderRadius.only.call(this, {topLeft: radius, topRight: radius, bottomLeft: radius, bottomRight: radius});
  }).prototype = src__painting__border_radius.BorderRadius.prototype;
  (src__painting__border_radius.BorderRadius.circular = function(radius) {
    src__painting__border_radius.BorderRadius.all.call(this, new ui$.Radius.circular(radius));
  }).prototype = src__painting__border_radius.BorderRadius.prototype;
  (src__painting__border_radius.BorderRadius.vertical = function(opts) {
    let top = opts && 'top' in opts ? opts.top : ui$.Radius.zero;
    let bottom = opts && 'bottom' in opts ? opts.bottom : ui$.Radius.zero;
    src__painting__border_radius.BorderRadius.only.call(this, {topLeft: top, topRight: top, bottomLeft: bottom, bottomRight: bottom});
  }).prototype = src__painting__border_radius.BorderRadius.prototype;
  (src__painting__border_radius.BorderRadius.horizontal = function(opts) {
    let left = opts && 'left' in opts ? opts.left : ui$.Radius.zero;
    let right = opts && 'right' in opts ? opts.right : ui$.Radius.zero;
    src__painting__border_radius.BorderRadius.only.call(this, {topLeft: left, topRight: right, bottomLeft: left, bottomRight: right});
  }).prototype = src__painting__border_radius.BorderRadius.prototype;
  (src__painting__border_radius.BorderRadius.only = function(opts) {
    let topLeft = opts && 'topLeft' in opts ? opts.topLeft : ui$.Radius.zero;
    let topRight = opts && 'topRight' in opts ? opts.topRight : ui$.Radius.zero;
    let bottomLeft = opts && 'bottomLeft' in opts ? opts.bottomLeft : ui$.Radius.zero;
    let bottomRight = opts && 'bottomRight' in opts ? opts.bottomRight : ui$.Radius.zero;
    this[topLeft$] = topLeft;
    this[topRight$] = topRight;
    this[bottomLeft$] = bottomLeft;
    this[bottomRight$] = bottomRight;
    src__painting__border_radius.BorderRadius.__proto__.new.call(this);
  }).prototype = src__painting__border_radius.BorderRadius.prototype;
  dart.addTypeTests(src__painting__border_radius.BorderRadius);
  const topLeft$ = Symbol("BorderRadius.topLeft");
  const topRight$ = Symbol("BorderRadius.topRight");
  const bottomLeft$ = Symbol("BorderRadius.bottomLeft");
  const bottomRight$ = Symbol("BorderRadius.bottomRight");
  dart.setMethodSignature(src__painting__border_radius.BorderRadius, () => ({
    __proto__: dart.getMethods(src__painting__border_radius.BorderRadius.__proto__),
    toRRect: dart.fnType(ui$.RRect, [ui$.Rect]),
    '-': dart.fnType(src__painting__border_radius.BorderRadius, [src__painting__border_radius.BorderRadius]),
    '+': dart.fnType(src__painting__border_radius.BorderRadius, [src__painting__border_radius.BorderRadius]),
    _negate: dart.fnType(src__painting__border_radius.BorderRadius, []),
    '*': dart.fnType(src__painting__border_radius.BorderRadius, [core.double]),
    '/': dart.fnType(src__painting__border_radius.BorderRadius, [core.double]),
    '~/': dart.fnType(src__painting__border_radius.BorderRadius, [core.double]),
    '%': dart.fnType(src__painting__border_radius.BorderRadius, [core.double]),
    resolve: dart.fnType(src__painting__border_radius.BorderRadius, [ui$.TextDirection])
  }));
  dart.setGetterSignature(src__painting__border_radius.BorderRadius, () => ({
    __proto__: dart.getGetters(src__painting__border_radius.BorderRadius.__proto__),
    [_topLeft]: ui$.Radius,
    [_topRight]: ui$.Radius,
    [_bottomLeft]: ui$.Radius,
    [_bottomRight]: ui$.Radius,
    [_topStart]: ui$.Radius,
    [_topEnd]: ui$.Radius,
    [_bottomStart]: ui$.Radius,
    [_bottomEnd]: ui$.Radius
  }));
  dart.setLibraryUri(src__painting__border_radius.BorderRadius, "package:flutter_web/src/painting/border_radius.dart");
  dart.setFieldSignature(src__painting__border_radius.BorderRadius, () => ({
    __proto__: dart.getFields(src__painting__border_radius.BorderRadius.__proto__),
    topLeft: dart.finalFieldType(ui$.Radius),
    topRight: dart.finalFieldType(ui$.Radius),
    bottomLeft: dart.finalFieldType(ui$.Radius),
    bottomRight: dart.finalFieldType(ui$.Radius)
  }));
  dart.defineLazy(src__painting__border_radius.BorderRadius, {
    /*src__painting__border_radius.BorderRadius.zero*/get zero() {
      return dart.const(new src__painting__border_radius.BorderRadius.all(ui$.Radius.zero));
    }
  });
  src__painting__border_radius.BorderRadiusDirectional = class BorderRadiusDirectional extends src__painting__border_radius.BorderRadiusGeometry {
    get topStart() {
      return this[topStart$];
    }
    set topStart(value) {
      super.topStart = value;
    }
    get [_topStart]() {
      return this.topStart;
    }
    get topEnd() {
      return this[topEnd$];
    }
    set topEnd(value) {
      super.topEnd = value;
    }
    get [_topEnd]() {
      return this.topEnd;
    }
    get bottomStart() {
      return this[bottomStart$];
    }
    set bottomStart(value) {
      super.bottomStart = value;
    }
    get [_bottomStart]() {
      return this.bottomStart;
    }
    get bottomEnd() {
      return this[bottomEnd$];
    }
    set bottomEnd(value) {
      super.bottomEnd = value;
    }
    get [_bottomEnd]() {
      return this.bottomEnd;
    }
    get [_topLeft]() {
      return ui$.Radius.zero;
    }
    get [_topRight]() {
      return ui$.Radius.zero;
    }
    get [_bottomLeft]() {
      return ui$.Radius.zero;
    }
    get [_bottomRight]() {
      return ui$.Radius.zero;
    }
    subtract(other) {
      if (src__painting__border_radius.BorderRadiusDirectional.is(other)) return this['-'](other);
      return super.subtract(other);
    }
    add(other) {
      if (src__painting__border_radius.BorderRadiusDirectional.is(other)) return this['+'](other);
      return super.add(other);
    }
    ['-'](other) {
      return new src__painting__border_radius.BorderRadiusDirectional.only({topStart: this.topStart['-'](other.topStart), topEnd: this.topEnd['-'](other.topEnd), bottomStart: this.bottomStart['-'](other.bottomStart), bottomEnd: this.bottomEnd['-'](other.bottomEnd)});
    }
    ['+'](other) {
      return new src__painting__border_radius.BorderRadiusDirectional.only({topStart: this.topStart['+'](other.topStart), topEnd: this.topEnd['+'](other.topEnd), bottomStart: this.bottomStart['+'](other.bottomStart), bottomEnd: this.bottomEnd['+'](other.bottomEnd)});
    }
    _negate() {
      return new src__painting__border_radius.BorderRadiusDirectional.only({topStart: this.topStart._negate(), topEnd: this.topEnd._negate(), bottomStart: this.bottomStart._negate(), bottomEnd: this.bottomEnd._negate()});
    }
    ['*'](other) {
      return new src__painting__border_radius.BorderRadiusDirectional.only({topStart: this.topStart['*'](other), topEnd: this.topEnd['*'](other), bottomStart: this.bottomStart['*'](other), bottomEnd: this.bottomEnd['*'](other)});
    }
    ['/'](other) {
      return new src__painting__border_radius.BorderRadiusDirectional.only({topStart: this.topStart['/'](other), topEnd: this.topEnd['/'](other), bottomStart: this.bottomStart['/'](other), bottomEnd: this.bottomEnd['/'](other)});
    }
    ['~/'](other) {
      return new src__painting__border_radius.BorderRadiusDirectional.only({topStart: this.topStart['~/'](other), topEnd: this.topEnd['~/'](other), bottomStart: this.bottomStart['~/'](other), bottomEnd: this.bottomEnd['~/'](other)});
    }
    ['%'](other) {
      return new src__painting__border_radius.BorderRadiusDirectional.only({topStart: this.topStart['%'](other), topEnd: this.topEnd['%'](other), bottomStart: this.bottomStart['%'](other), bottomEnd: this.bottomEnd['%'](other)});
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/border_radius.dart", 721, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return b['*'](t);
      if (b == null) return a['*'](1.0 - dart.notNull(t));
      return new src__painting__border_radius.BorderRadiusDirectional.only({topStart: ui$.Radius.lerp(a.topStart, b.topStart, t), topEnd: ui$.Radius.lerp(a.topEnd, b.topEnd, t), bottomStart: ui$.Radius.lerp(a.bottomStart, b.bottomStart, t), bottomEnd: ui$.Radius.lerp(a.bottomEnd, b.bottomEnd, t)});
    }
    resolve(direction) {
      if (!(direction != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/border_radius.dart", 735, 12, "direction != null");
      switch (direction) {
        case ui$.TextDirection.rtl:
        {
          return new src__painting__border_radius.BorderRadius.only({topLeft: this.topEnd, topRight: this.topStart, bottomLeft: this.bottomEnd, bottomRight: this.bottomStart});
        }
        case ui$.TextDirection.ltr:
        {
          return new src__painting__border_radius.BorderRadius.only({topLeft: this.topStart, topRight: this.topEnd, bottomLeft: this.bottomStart, bottomRight: this.bottomEnd});
        }
      }
      return null;
    }
  };
  (src__painting__border_radius.BorderRadiusDirectional.all = function(radius) {
    src__painting__border_radius.BorderRadiusDirectional.only.call(this, {topStart: radius, topEnd: radius, bottomStart: radius, bottomEnd: radius});
  }).prototype = src__painting__border_radius.BorderRadiusDirectional.prototype;
  (src__painting__border_radius.BorderRadiusDirectional.circular = function(radius) {
    src__painting__border_radius.BorderRadiusDirectional.all.call(this, new ui$.Radius.circular(radius));
  }).prototype = src__painting__border_radius.BorderRadiusDirectional.prototype;
  (src__painting__border_radius.BorderRadiusDirectional.vertical = function(opts) {
    let top = opts && 'top' in opts ? opts.top : ui$.Radius.zero;
    let bottom = opts && 'bottom' in opts ? opts.bottom : ui$.Radius.zero;
    src__painting__border_radius.BorderRadiusDirectional.only.call(this, {topStart: top, topEnd: top, bottomStart: bottom, bottomEnd: bottom});
  }).prototype = src__painting__border_radius.BorderRadiusDirectional.prototype;
  (src__painting__border_radius.BorderRadiusDirectional.horizontal = function(opts) {
    let start = opts && 'start' in opts ? opts.start : ui$.Radius.zero;
    let end = opts && 'end' in opts ? opts.end : ui$.Radius.zero;
    src__painting__border_radius.BorderRadiusDirectional.only.call(this, {topStart: start, topEnd: end, bottomStart: start, bottomEnd: end});
  }).prototype = src__painting__border_radius.BorderRadiusDirectional.prototype;
  (src__painting__border_radius.BorderRadiusDirectional.only = function(opts) {
    let topStart = opts && 'topStart' in opts ? opts.topStart : ui$.Radius.zero;
    let topEnd = opts && 'topEnd' in opts ? opts.topEnd : ui$.Radius.zero;
    let bottomStart = opts && 'bottomStart' in opts ? opts.bottomStart : ui$.Radius.zero;
    let bottomEnd = opts && 'bottomEnd' in opts ? opts.bottomEnd : ui$.Radius.zero;
    this[topStart$] = topStart;
    this[topEnd$] = topEnd;
    this[bottomStart$] = bottomStart;
    this[bottomEnd$] = bottomEnd;
    src__painting__border_radius.BorderRadiusDirectional.__proto__.new.call(this);
  }).prototype = src__painting__border_radius.BorderRadiusDirectional.prototype;
  dart.addTypeTests(src__painting__border_radius.BorderRadiusDirectional);
  const topStart$ = Symbol("BorderRadiusDirectional.topStart");
  const topEnd$ = Symbol("BorderRadiusDirectional.topEnd");
  const bottomStart$ = Symbol("BorderRadiusDirectional.bottomStart");
  const bottomEnd$ = Symbol("BorderRadiusDirectional.bottomEnd");
  dart.setMethodSignature(src__painting__border_radius.BorderRadiusDirectional, () => ({
    __proto__: dart.getMethods(src__painting__border_radius.BorderRadiusDirectional.__proto__),
    '-': dart.fnType(src__painting__border_radius.BorderRadiusDirectional, [src__painting__border_radius.BorderRadiusDirectional]),
    '+': dart.fnType(src__painting__border_radius.BorderRadiusDirectional, [src__painting__border_radius.BorderRadiusDirectional]),
    _negate: dart.fnType(src__painting__border_radius.BorderRadiusDirectional, []),
    '*': dart.fnType(src__painting__border_radius.BorderRadiusDirectional, [core.double]),
    '/': dart.fnType(src__painting__border_radius.BorderRadiusDirectional, [core.double]),
    '~/': dart.fnType(src__painting__border_radius.BorderRadiusDirectional, [core.double]),
    '%': dart.fnType(src__painting__border_radius.BorderRadiusDirectional, [core.double]),
    resolve: dart.fnType(src__painting__border_radius.BorderRadius, [ui$.TextDirection])
  }));
  dart.setGetterSignature(src__painting__border_radius.BorderRadiusDirectional, () => ({
    __proto__: dart.getGetters(src__painting__border_radius.BorderRadiusDirectional.__proto__),
    [_topStart]: ui$.Radius,
    [_topEnd]: ui$.Radius,
    [_bottomStart]: ui$.Radius,
    [_bottomEnd]: ui$.Radius,
    [_topLeft]: ui$.Radius,
    [_topRight]: ui$.Radius,
    [_bottomLeft]: ui$.Radius,
    [_bottomRight]: ui$.Radius
  }));
  dart.setLibraryUri(src__painting__border_radius.BorderRadiusDirectional, "package:flutter_web/src/painting/border_radius.dart");
  dart.setFieldSignature(src__painting__border_radius.BorderRadiusDirectional, () => ({
    __proto__: dart.getFields(src__painting__border_radius.BorderRadiusDirectional.__proto__),
    topStart: dart.finalFieldType(ui$.Radius),
    topEnd: dart.finalFieldType(ui$.Radius),
    bottomStart: dart.finalFieldType(ui$.Radius),
    bottomEnd: dart.finalFieldType(ui$.Radius)
  }));
  dart.defineLazy(src__painting__border_radius.BorderRadiusDirectional, {
    /*src__painting__border_radius.BorderRadiusDirectional.zero*/get zero() {
      return dart.const(new src__painting__border_radius.BorderRadiusDirectional.all(ui$.Radius.zero));
    }
  });
  src__painting__border_radius._MixedBorderRadius = class _MixedBorderRadius extends src__painting__border_radius.BorderRadiusGeometry {
    _negate() {
      return new src__painting__border_radius._MixedBorderRadius.new(this[_topLeft]._negate(), this[_topRight]._negate(), this[_bottomLeft]._negate(), this[_bottomRight]._negate(), this[_topStart]._negate(), this[_topEnd]._negate(), this[_bottomStart]._negate(), this[_bottomEnd]._negate());
    }
    ['*'](other) {
      return new src__painting__border_radius._MixedBorderRadius.new(this[_topLeft]['*'](other), this[_topRight]['*'](other), this[_bottomLeft]['*'](other), this[_bottomRight]['*'](other), this[_topStart]['*'](other), this[_topEnd]['*'](other), this[_bottomStart]['*'](other), this[_bottomEnd]['*'](other));
    }
    ['/'](other) {
      return new src__painting__border_radius._MixedBorderRadius.new(this[_topLeft]['/'](other), this[_topRight]['/'](other), this[_bottomLeft]['/'](other), this[_bottomRight]['/'](other), this[_topStart]['/'](other), this[_topEnd]['/'](other), this[_bottomStart]['/'](other), this[_bottomEnd]['/'](other));
    }
    ['~/'](other) {
      return new src__painting__border_radius._MixedBorderRadius.new(this[_topLeft]['~/'](other), this[_topRight]['~/'](other), this[_bottomLeft]['~/'](other), this[_bottomRight]['~/'](other), this[_topStart]['~/'](other), this[_topEnd]['~/'](other), this[_bottomStart]['~/'](other), this[_bottomEnd]['~/'](other));
    }
    ['%'](other) {
      return new src__painting__border_radius._MixedBorderRadius.new(this[_topLeft]['%'](other), this[_topRight]['%'](other), this[_bottomLeft]['%'](other), this[_bottomRight]['%'](other), this[_topStart]['%'](other), this[_topEnd]['%'](other), this[_bottomStart]['%'](other), this[_bottomEnd]['%'](other));
    }
    resolve(direction) {
      if (!(direction != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/border_radius.dart", 865, 12, "direction != null");
      switch (direction) {
        case ui$.TextDirection.rtl:
        {
          return new src__painting__border_radius.BorderRadius.only({topLeft: this[_topLeft]['+'](this[_topEnd]), topRight: this[_topRight]['+'](this[_topStart]), bottomLeft: this[_bottomLeft]['+'](this[_bottomEnd]), bottomRight: this[_bottomRight]['+'](this[_bottomStart])});
        }
        case ui$.TextDirection.ltr:
        {
          return new src__painting__border_radius.BorderRadius.only({topLeft: this[_topLeft]['+'](this[_topStart]), topRight: this[_topRight]['+'](this[_topEnd]), bottomLeft: this[_bottomLeft]['+'](this[_bottomStart]), bottomRight: this[_bottomRight]['+'](this[_bottomEnd])});
        }
      }
      return null;
    }
  };
  (src__painting__border_radius._MixedBorderRadius.new = function(topLeft, topRight, bottomLeft, bottomRight, topStart, topEnd, bottomStart, bottomEnd) {
    this[_topLeft] = topLeft;
    this[_topRight] = topRight;
    this[_bottomLeft] = bottomLeft;
    this[_bottomRight] = bottomRight;
    this[_topStart] = topStart;
    this[_topEnd] = topEnd;
    this[_bottomStart] = bottomStart;
    this[_bottomEnd] = bottomEnd;
    src__painting__border_radius._MixedBorderRadius.__proto__.new.call(this);
  }).prototype = src__painting__border_radius._MixedBorderRadius.prototype;
  dart.addTypeTests(src__painting__border_radius._MixedBorderRadius);
  dart.setMethodSignature(src__painting__border_radius._MixedBorderRadius, () => ({
    __proto__: dart.getMethods(src__painting__border_radius._MixedBorderRadius.__proto__),
    _negate: dart.fnType(src__painting__border_radius._MixedBorderRadius, []),
    '*': dart.fnType(src__painting__border_radius._MixedBorderRadius, [core.double]),
    '/': dart.fnType(src__painting__border_radius._MixedBorderRadius, [core.double]),
    '~/': dart.fnType(src__painting__border_radius._MixedBorderRadius, [core.double]),
    '%': dart.fnType(src__painting__border_radius._MixedBorderRadius, [core.double]),
    resolve: dart.fnType(src__painting__border_radius.BorderRadius, [ui$.TextDirection])
  }));
  dart.setLibraryUri(src__painting__border_radius._MixedBorderRadius, "package:flutter_web/src/painting/border_radius.dart");
  dart.setFieldSignature(src__painting__border_radius._MixedBorderRadius, () => ({
    __proto__: dart.getFields(src__painting__border_radius._MixedBorderRadius.__proto__),
    [_topLeft]: dart.finalFieldType(ui$.Radius),
    [_topRight]: dart.finalFieldType(ui$.Radius),
    [_bottomLeft]: dart.finalFieldType(ui$.Radius),
    [_bottomRight]: dart.finalFieldType(ui$.Radius),
    [_topStart]: dart.finalFieldType(ui$.Radius),
    [_topEnd]: dart.finalFieldType(ui$.Radius),
    [_bottomStart]: dart.finalFieldType(ui$.Radius),
    [_bottomEnd]: dart.finalFieldType(ui$.Radius)
  }));
  src__painting__image_stream.ImageInfo = class ImageInfo extends core.Object {
    get image() {
      return this[image$];
    }
    set image(value) {
      super.image = value;
    }
    get scale() {
      return this[scale$];
    }
    set scale(value) {
      super.scale = value;
    }
    toString() {
      return dart.str(this.image) + " @ " + this.scale[$toStringAsFixed](1) + "x";
    }
    get hashCode() {
      return ui$.hashValues(this.image, this.scale);
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      let typedOther = src__painting__image_stream.ImageInfo._check(other);
      return dart.equals(typedOther.image, this.image) && typedOther.scale == this.scale;
    }
  };
  (src__painting__image_stream.ImageInfo.new = function(opts) {
    let image = opts && 'image' in opts ? opts.image : null;
    let scale = opts && 'scale' in opts ? opts.scale : 1.0;
    this[image$] = image;
    this[scale$] = scale;
    if (!(image != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/image_stream.dart", 23, 16, "image != null");
    if (!(scale != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/image_stream.dart", 24, 16, "scale != null");
  }).prototype = src__painting__image_stream.ImageInfo.prototype;
  dart.addTypeTests(src__painting__image_stream.ImageInfo);
  const image$ = Symbol("ImageInfo.image");
  const scale$ = Symbol("ImageInfo.scale");
  dart.setMethodSignature(src__painting__image_stream.ImageInfo, () => ({
    __proto__: dart.getMethods(src__painting__image_stream.ImageInfo.__proto__),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(src__painting__image_stream.ImageInfo, "package:flutter_web/src/painting/image_stream.dart");
  dart.setFieldSignature(src__painting__image_stream.ImageInfo, () => ({
    __proto__: dart.getFields(src__painting__image_stream.ImageInfo.__proto__),
    image: dart.finalFieldType(ui$.Image),
    scale: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(src__painting__image_stream.ImageInfo, ['toString', '_equals']);
  dart.defineExtensionAccessors(src__painting__image_stream.ImageInfo, ['hashCode']);
  src__painting__image_stream._ImageListenerPair = class _ImageListenerPair extends core.Object {};
  (src__painting__image_stream._ImageListenerPair.new = function(listener, errorListener) {
    this.listener = listener;
    this.errorListener = errorListener;
  }).prototype = src__painting__image_stream._ImageListenerPair.prototype;
  dart.addTypeTests(src__painting__image_stream._ImageListenerPair);
  dart.setLibraryUri(src__painting__image_stream._ImageListenerPair, "package:flutter_web/src/painting/image_stream.dart");
  dart.setFieldSignature(src__painting__image_stream._ImageListenerPair, () => ({
    __proto__: dart.getFields(src__painting__image_stream._ImageListenerPair.__proto__),
    listener: dart.finalFieldType(ImageInfoAndboolTovoid()),
    errorListener: dart.finalFieldType(dynamicAndStackTraceTovoid())
  }));
  const _completer = dart.privateName(src__painting__image_stream, "_completer");
  const _listeners = dart.privateName(src__painting__image_stream, "_listeners");
  src__painting__image_stream.ImageStream = class ImageStream extends src__foundation__diagnostics.Diagnosticable {
    get completer() {
      return this[_completer];
    }
    setCompleter(value) {
      if (!(this[_completer] == null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/image_stream.dart", 121, 12, "_completer == null");
      this[_completer] = value;
      if (this[_listeners] != null) {
        let initialListeners = this[_listeners];
        this[_listeners] = null;
        for (let listenerPair of initialListeners) {
          this[_completer].addListener(listenerPair.listener, {onError: listenerPair.errorListener});
        }
      }
    }
    addListener(listener, opts) {
      let onError = opts && 'onError' in opts ? opts.onError : null;
      if (this[_completer] != null) return this[_completer].addListener(listener, {onError: onError});
      let t = this[_listeners];
      t == null ? this[_listeners] = JSArrayOf_ImageListenerPair().of([]) : t;
      this[_listeners][$add](new src__painting__image_stream._ImageListenerPair.new(listener, onError));
    }
    removeListener(listener) {
      if (this[_completer] != null) return this[_completer].removeListener(listener);
      if (!(this[_listeners] != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/image_stream.dart", 165, 12, "_listeners != null");
      for (let i = 0; i < dart.notNull(this[_listeners][$length]); ++i) {
        if (dart.equals(this[_listeners][$_get](i).listener, listener)) {
          this[_listeners][$removeAt](i);
          continue;
        }
      }
    }
    get key() {
      return this[_completer] != null ? this[_completer] : this;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (ObjectFlagPropertyOfImageStreamCompleter()).new("completer", this[_completer], {ifPresent: (() => {
          let t = this[_completer];
          return t == null ? null : t.toStringShort();
        })(), ifNull: "unresolved"}));
      properties.add(new (ObjectFlagPropertyOfListOf_ImageListenerPair()).new("listeners", this[_listeners], {ifPresent: dart.str((() => {
          let t = this[_listeners];
          return t == null ? null : t[$length];
        })()) + " listener" + ((() => {
          let t = this[_listeners];
          return t == null ? null : t[$length];
        })() === 1 ? "" : "s"), ifNull: "no listeners", level: this[_completer] != null ? src__foundation__diagnostics.DiagnosticLevel.hidden : src__foundation__diagnostics.DiagnosticLevel.info}));
      let t = this[_completer];
      t == null ? null : t.debugFillProperties(properties);
    }
  };
  (src__painting__image_stream.ImageStream.new = function() {
    this[_completer] = null;
    this[_listeners] = null;
    src__painting__image_stream.ImageStream.__proto__.new.call(this);
  }).prototype = src__painting__image_stream.ImageStream.prototype;
  dart.addTypeTests(src__painting__image_stream.ImageStream);
  dart.setMethodSignature(src__painting__image_stream.ImageStream, () => ({
    __proto__: dart.getMethods(src__painting__image_stream.ImageStream.__proto__),
    setCompleter: dart.fnType(dart.void, [src__painting__image_stream.ImageStreamCompleter]),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [src__painting__image_stream.ImageInfo, core.bool])], {onError: dart.fnType(dart.void, [dart.dynamic, core.StackTrace])}),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [src__painting__image_stream.ImageInfo, core.bool])])
  }));
  dart.setGetterSignature(src__painting__image_stream.ImageStream, () => ({
    __proto__: dart.getGetters(src__painting__image_stream.ImageStream.__proto__),
    completer: src__painting__image_stream.ImageStreamCompleter,
    key: core.Object
  }));
  dart.setLibraryUri(src__painting__image_stream.ImageStream, "package:flutter_web/src/painting/image_stream.dart");
  dart.setFieldSignature(src__painting__image_stream.ImageStream, () => ({
    __proto__: dart.getFields(src__painting__image_stream.ImageStream.__proto__),
    [_completer]: dart.fieldType(src__painting__image_stream.ImageStreamCompleter),
    [_listeners]: dart.fieldType(ListOf_ImageListenerPair())
  }));
  const _currentImage = dart.privateName(src__painting__image_stream, "_currentImage");
  const _currentError = dart.privateName(src__painting__image_stream, "_currentError");
  src__painting__image_stream.ImageStreamCompleter = class ImageStreamCompleter extends src__foundation__diagnostics.Diagnosticable {
    addListener(listener, opts) {
      let onError = opts && 'onError' in opts ? opts.onError : null;
      this[_listeners][$add](new src__painting__image_stream._ImageListenerPair.new(listener, onError));
      if (this[_currentImage] != null) {
        try {
          listener(this[_currentImage], true);
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          this.reportError({context: "by a synchronously-called image listener", exception: exception, stack: stack});
        }
      }
      if (this[_currentError] != null && onError != null) {
        try {
          onError(this[_currentError].exception, this[_currentError].stack);
        } catch (e$) {
          let exception = dart.getThrown(e$);
          let stack = dart.stackTrace(e$);
          src__foundation__assertions.FlutterError.reportError(new src__foundation__assertions.FlutterErrorDetails.new({exception: exception, library: "image resource service", context: new src__foundation__assertions.ErrorDescription.new("by a synchronously-called image error listener"), stack: stack}));
        }
      }
    }
    removeListener(listener) {
      for (let i = 0; i < dart.notNull(this[_listeners][$length]); ++i) {
        if (dart.equals(this[_listeners][$_get](i).listener, listener)) {
          this[_listeners][$removeAt](i);
          continue;
        }
      }
    }
    setImage(image) {
      this[_currentImage] = image;
      if (dart.test(this[_listeners][$isEmpty])) return;
      let localListeners = IterableOfImageInfoAndboolTovoid()._check(this[_listeners][$map](ImageInfoAndboolTovoid(), dart.fn(listenerPair => listenerPair.listener, _ImageListenerPairToFn())))[$toList]();
      for (let listener of localListeners) {
        try {
          listener(image, false);
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          this.reportError({context: "by an image listener", exception: exception, stack: stack});
        }
      }
    }
    reportError(opts) {
      let context = opts && 'context' in opts ? opts.context : null;
      let exception = opts && 'exception' in opts ? opts.exception : null;
      let stack = opts && 'stack' in opts ? opts.stack : null;
      let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
      let silent = opts && 'silent' in opts ? opts.silent : false;
      this[_currentError] = new src__foundation__assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "image resource service", context: new src__foundation__assertions.ErrorDescription.new(context), informationCollector: informationCollector, silent: silent});
      let localErrorListeners = IterableOfdynamicAndStackTraceTovoid()._check(this[_listeners][$map](dynamicAndStackTraceTovoid(), dart.fn(listenerPair => listenerPair.errorListener, _ImageListenerPairToFn$())))[$where](dart.fn(errorListener => errorListener != null, FnTobool()))[$toList]();
      if (dart.test(localErrorListeners[$isEmpty])) {
        src__foundation__assertions.FlutterError.reportError(this[_currentError]);
      } else {
        for (let errorListener of localErrorListeners) {
          try {
            errorListener(exception, stack);
          } catch (e) {
            let exception = dart.getThrown(e);
            let stack = dart.stackTrace(e);
            src__foundation__assertions.FlutterError.reportError(new src__foundation__assertions.FlutterErrorDetails.new({context: new src__foundation__assertions.ErrorDescription.new("by an image error listener"), library: "image resource service", exception: exception, stack: stack}));
          }
        }
      }
    }
    debugFillProperties(description) {
      super.debugFillProperties(description);
      description.add(new (DiagnosticsPropertyOfImageInfo()).new("current", this[_currentImage], {ifNull: "unresolved", showName: false}));
      description.add(new (ObjectFlagPropertyOfListOf_ImageListenerPair()).new("listeners", this[_listeners], {ifPresent: dart.str(this[_listeners] == null ? null : this[_listeners][$length]) + " listener" + ((this[_listeners] == null ? null : this[_listeners][$length]) === 1 ? "" : "s")}));
    }
  };
  (src__painting__image_stream.ImageStreamCompleter.new = function() {
    this[_listeners] = JSArrayOf_ImageListenerPair().of([]);
    this[_currentImage] = null;
    this[_currentError] = null;
    src__painting__image_stream.ImageStreamCompleter.__proto__.new.call(this);
  }).prototype = src__painting__image_stream.ImageStreamCompleter.prototype;
  dart.addTypeTests(src__painting__image_stream.ImageStreamCompleter);
  dart.setMethodSignature(src__painting__image_stream.ImageStreamCompleter, () => ({
    __proto__: dart.getMethods(src__painting__image_stream.ImageStreamCompleter.__proto__),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [src__painting__image_stream.ImageInfo, core.bool])], {onError: dart.fnType(dart.void, [dart.dynamic, core.StackTrace])}),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [src__painting__image_stream.ImageInfo, core.bool])]),
    setImage: dart.fnType(dart.void, [src__painting__image_stream.ImageInfo]),
    reportError: dart.fnType(dart.void, [], {context: core.String, exception: dart.dynamic, stack: core.StackTrace, informationCollector: dart.fnType(core.Iterable$(src__foundation__diagnostics.DiagnosticsNode), []), silent: core.bool})
  }));
  dart.setLibraryUri(src__painting__image_stream.ImageStreamCompleter, "package:flutter_web/src/painting/image_stream.dart");
  dart.setFieldSignature(src__painting__image_stream.ImageStreamCompleter, () => ({
    __proto__: dart.getFields(src__painting__image_stream.ImageStreamCompleter.__proto__),
    [_listeners]: dart.finalFieldType(ListOf_ImageListenerPair()),
    [_currentImage]: dart.fieldType(src__painting__image_stream.ImageInfo),
    [_currentError]: dart.fieldType(src__foundation__assertions.FlutterErrorDetails)
  }));
  src__painting__image_stream.OneFrameImageStreamCompleter = class OneFrameImageStreamCompleter extends src__painting__image_stream.ImageStreamCompleter {};
  (src__painting__image_stream.OneFrameImageStreamCompleter.new = function(image, opts) {
    let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
    if (!(image != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/image_stream.dart", 377, 16, "image != null");
    src__painting__image_stream.OneFrameImageStreamCompleter.__proto__.new.call(this);
    image.then(dart.void, dart.bind(this, 'setImage'), {onError: dart.fn((error, stack) => {
        this.reportError({context: "resolving a single-frame image stream", exception: error, stack: stack, informationCollector: informationCollector, silent: true});
      }, dynamicAndStackTraceToNull())});
  }).prototype = src__painting__image_stream.OneFrameImageStreamCompleter.prototype;
  dart.addTypeTests(src__painting__image_stream.OneFrameImageStreamCompleter);
  dart.setLibraryUri(src__painting__image_stream.OneFrameImageStreamCompleter, "package:flutter_web/src/painting/image_stream.dart");
  const _informationCollector = dart.privateName(src__painting__image_stream, "_informationCollector");
  const _scale = dart.privateName(src__painting__image_stream, "_scale");
  const _framesEmitted = dart.privateName(src__painting__image_stream, "_framesEmitted");
  const _timer = dart.privateName(src__painting__image_stream, "_timer");
  const _codec = dart.privateName(src__painting__image_stream, "_codec");
  const _nextFrame = dart.privateName(src__painting__image_stream, "_nextFrame");
  const _shownTimestamp = dart.privateName(src__painting__image_stream, "_shownTimestamp");
  const _frameDuration = dart.privateName(src__painting__image_stream, "_frameDuration");
  const _handleCodecReady = dart.privateName(src__painting__image_stream, "_handleCodecReady");
  const _decodeNextFrameAndSchedule = dart.privateName(src__painting__image_stream, "_decodeNextFrameAndSchedule");
  const _hasActiveListeners = dart.privateName(src__painting__image_stream, "_hasActiveListeners");
  const _isFirstFrame = dart.privateName(src__painting__image_stream, "_isFirstFrame");
  const _hasFrameDurationPassed = dart.privateName(src__painting__image_stream, "_hasFrameDurationPassed");
  const _emitFrame = dart.privateName(src__painting__image_stream, "_emitFrame");
  const _handleAppFrame = dart.privateName(src__painting__image_stream, "_handleAppFrame");
  src__painting__image_stream.MultiFrameImageStreamCompleter = class MultiFrameImageStreamCompleter extends src__painting__image_stream.ImageStreamCompleter {
    [_handleCodecReady](codec) {
      this[_codec] = codec;
      if (!(this[_codec] != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/image_stream.dart", 466, 12, "_codec != null");
      this[_decodeNextFrameAndSchedule]();
    }
    [_handleAppFrame](timestamp) {
      if (!dart.test(this[_hasActiveListeners])) return;
      if (dart.test(this[_isFirstFrame]()) || dart.test(this[_hasFrameDurationPassed](timestamp))) {
        this[_emitFrame](new src__painting__image_stream.ImageInfo.new({image: this[_nextFrame].image, scale: this[_scale]}));
        this[_shownTimestamp] = timestamp;
        this[_frameDuration] = this[_nextFrame].duration;
        this[_nextFrame] = null;
        let completedCycles = (dart.notNull(this[_framesEmitted]) / dart.notNull(this[_codec].frameCount))[$truncate]();
        if (this[_codec].repetitionCount === -1 || completedCycles <= dart.notNull(this[_codec].repetitionCount)) {
          this[_decodeNextFrameAndSchedule]();
        }
        return;
      }
      let delay = this[_frameDuration]['-'](timestamp['-'](this[_shownTimestamp]));
      this[_timer] = async.Timer.new(delay['*'](src__scheduler__binding.timeDilation), dart.fn(() => {
        src__scheduler__binding.SchedulerBinding.instance.scheduleFrameCallback(dart.bind(this, _handleAppFrame));
      }, VoidToNull()));
    }
    [_isFirstFrame]() {
      return this[_frameDuration] == null;
    }
    [_hasFrameDurationPassed](timestamp) {
      if (!(this[_shownTimestamp] != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/image_stream.dart", 496, 12, "_shownTimestamp != null");
      return timestamp['-'](this[_shownTimestamp])['>='](this[_frameDuration]);
    }
    [_decodeNextFrameAndSchedule]() {
      return async.async(dart.void, (function* _decodeNextFrameAndSchedule() {
        try {
          this[_nextFrame] = (yield this[_codec].getNextFrame());
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          this.reportError({context: "resolving an image frame", exception: exception, stack: stack, informationCollector: this[_informationCollector], silent: true});
          return;
        }
        if (this[_codec].frameCount === 1) {
          this[_emitFrame](new src__painting__image_stream.ImageInfo.new({image: this[_nextFrame].image, scale: this[_scale]}));
          return;
        }
        src__scheduler__binding.SchedulerBinding.instance.scheduleFrameCallback(dart.bind(this, _handleAppFrame));
      }).bind(this));
    }
    [_emitFrame](imageInfo) {
      this.setImage(imageInfo);
      this[_framesEmitted] = dart.notNull(this[_framesEmitted]) + 1;
    }
    get [_hasActiveListeners]() {
      return this[_listeners][$isNotEmpty];
    }
    addListener(listener, opts) {
      let onError = opts && 'onError' in opts ? opts.onError : null;
      if (!dart.test(this[_hasActiveListeners]) && this[_codec] != null) {
        this[_decodeNextFrameAndSchedule]();
      }
      super.addListener(listener, {onError: onError});
    }
    removeListener(listener) {
      super.removeListener(listener);
      if (!dart.test(this[_hasActiveListeners])) {
        let t = this[_timer];
        t == null ? null : t.cancel();
        this[_timer] = null;
      }
    }
  };
  (src__painting__image_stream.MultiFrameImageStreamCompleter.new = function(opts) {
    let codec = opts && 'codec' in opts ? opts.codec : null;
    let scale = opts && 'scale' in opts ? opts.scale : null;
    let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
    this[_codec] = null;
    this[_nextFrame] = null;
    this[_shownTimestamp] = null;
    this[_frameDuration] = null;
    if (!(codec != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/image_stream.dart", 435, 16, "codec != null");
    this[_informationCollector] = informationCollector;
    this[_scale] = scale;
    this[_framesEmitted] = 0;
    this[_timer] = null;
    src__painting__image_stream.MultiFrameImageStreamCompleter.__proto__.new.call(this);
    codec.then(dart.void, dart.bind(this, _handleCodecReady), {onError: dart.fn((error, stack) => {
        this.reportError({context: "resolving an image codec", exception: error, stack: stack, informationCollector: informationCollector, silent: true});
      }, dynamicAndStackTraceToNull())});
  }).prototype = src__painting__image_stream.MultiFrameImageStreamCompleter.prototype;
  dart.addTypeTests(src__painting__image_stream.MultiFrameImageStreamCompleter);
  dart.setMethodSignature(src__painting__image_stream.MultiFrameImageStreamCompleter, () => ({
    __proto__: dart.getMethods(src__painting__image_stream.MultiFrameImageStreamCompleter.__proto__),
    [_handleCodecReady]: dart.fnType(dart.void, [ui$.Codec]),
    [_handleAppFrame]: dart.fnType(dart.void, [core.Duration]),
    [_isFirstFrame]: dart.fnType(core.bool, []),
    [_hasFrameDurationPassed]: dart.fnType(core.bool, [core.Duration]),
    [_decodeNextFrameAndSchedule]: dart.fnType(async.Future$(dart.void), []),
    [_emitFrame]: dart.fnType(dart.void, [src__painting__image_stream.ImageInfo])
  }));
  dart.setGetterSignature(src__painting__image_stream.MultiFrameImageStreamCompleter, () => ({
    __proto__: dart.getGetters(src__painting__image_stream.MultiFrameImageStreamCompleter.__proto__),
    [_hasActiveListeners]: core.bool
  }));
  dart.setLibraryUri(src__painting__image_stream.MultiFrameImageStreamCompleter, "package:flutter_web/src/painting/image_stream.dart");
  dart.setFieldSignature(src__painting__image_stream.MultiFrameImageStreamCompleter, () => ({
    __proto__: dart.getFields(src__painting__image_stream.MultiFrameImageStreamCompleter.__proto__),
    [_codec]: dart.fieldType(ui$.Codec),
    [_scale]: dart.finalFieldType(core.double),
    [_informationCollector]: dart.finalFieldType(VoidToIterableOfDiagnosticsNode()),
    [_nextFrame]: dart.fieldType(ui$.FrameInfo),
    [_shownTimestamp]: dart.fieldType(core.Duration),
    [_frameDuration]: dart.fieldType(core.Duration),
    [_framesEmitted]: dart.fieldType(core.int),
    [_timer]: dart.fieldType(async.Timer)
  }));
  dart.defineLazy(src__painting__image_cache, {
    /*src__painting__image_cache._kDefaultSize*/get _kDefaultSize() {
      return 1000;
    },
    /*src__painting__image_cache._kDefaultSizeBytes*/get _kDefaultSizeBytes() {
      return 100 << 20;
    }
  });
  const _pendingImages = dart.privateName(src__painting__image_cache, "_pendingImages");
  const _cache = dart.privateName(src__painting__image_cache, "_cache");
  const _maximumSize = dart.privateName(src__painting__image_cache, "_maximumSize");
  const _maximumSizeBytes = dart.privateName(src__painting__image_cache, "_maximumSizeBytes");
  const _currentSizeBytes = dart.privateName(src__painting__image_cache, "_currentSizeBytes");
  const _checkCacheSize = dart.privateName(src__painting__image_cache, "_checkCacheSize");
  src__painting__image_cache.ImageCache = class ImageCache extends core.Object {
    get maximumSize() {
      return this[_maximumSize];
    }
    set maximumSize(value) {
      if (!(value != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/image_cache.dart", 47, 12, "value != null");
      if (!(dart.notNull(value) >= 0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/image_cache.dart", 48, 12, "value >= 0");
      if (value == this.maximumSize) return;
      this[_maximumSize] = value;
      if (this.maximumSize === 0) {
        this[_cache][$clear]();
        this[_currentSizeBytes] = 0;
      } else {
        this[_checkCacheSize]();
      }
    }
    get currentSize() {
      return this[_cache][$length];
    }
    get maximumSizeBytes() {
      return this[_maximumSizeBytes];
    }
    set maximumSizeBytes(value) {
      if (!(value != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/image_cache.dart", 77, 12, "value != null");
      if (!(dart.notNull(value) >= 0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/image_cache.dart", 78, 12, "value >= 0");
      if (value == this[_maximumSizeBytes]) return;
      this[_maximumSizeBytes] = value;
      if (this[_maximumSizeBytes] === 0) {
        this[_cache][$clear]();
        this[_currentSizeBytes] = 0;
      } else {
        this[_checkCacheSize]();
      }
    }
    get currentSizeBytes() {
      return this[_currentSizeBytes];
    }
    clear() {
      this[_cache][$clear]();
      this[_currentSizeBytes] = 0;
    }
    evict(key) {
      let image = this[_cache][$remove](key);
      if (image != null) {
        this[_currentSizeBytes] = dart.notNull(this[_currentSizeBytes]) - dart.notNull(image.sizeBytes);
        return true;
      }
      return false;
    }
    putIfAbsent(key, loader) {
      if (!(key != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/image_cache.dart", 131, 12, "key != null");
      if (!(loader != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/image_cache.dart", 132, 12, "loader != null");
      let result = this[_pendingImages][$_get](key);
      if (result != null) return result;
      let image = this[_cache][$remove](key);
      if (image != null) {
        this[_cache][$_set](key, image);
        return image.completer;
      }
      result = loader();
      const listener = (info, syncCall) => {
        let imageSize = (info == null ? null : info.image) == null ? 0 : dart.notNull(info.image.height) * dart.notNull(info.image.width) * 4;
        let image = new src__painting__image_cache._CachedImage.new(result, imageSize);
        if (dart.notNull(this.maximumSizeBytes) > 0 && imageSize > dart.notNull(this.maximumSizeBytes)) {
          this[_maximumSizeBytes] = imageSize + 1000;
        }
        this[_currentSizeBytes] = dart.notNull(this[_currentSizeBytes]) + imageSize;
        this[_pendingImages][$remove](key);
        this[_cache][$_set](key, image);
        result.removeListener(listener);
        this[_checkCacheSize]();
      };
      dart.fn(listener, ImageInfoAndboolTovoid());
      if (dart.notNull(this.maximumSize) > 0 && dart.notNull(this.maximumSizeBytes) > 0) {
        this[_pendingImages][$_set](key, result);
        result.addListener(listener);
      }
      return result;
    }
    [_checkCacheSize]() {
      while (dart.notNull(this[_currentSizeBytes]) > dart.notNull(this[_maximumSizeBytes]) || dart.notNull(this[_cache][$length]) > dart.notNull(this[_maximumSize])) {
        let key = this[_cache][$keys][$first];
        let image = this[_cache][$_get](key);
        this[_currentSizeBytes] = dart.notNull(this[_currentSizeBytes]) - dart.notNull(image.sizeBytes);
        this[_cache][$remove](key);
      }
      if (!(dart.notNull(this[_currentSizeBytes]) >= 0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/image_cache.dart", 179, 12, "_currentSizeBytes >= 0");
      if (!(dart.notNull(this[_cache][$length]) <= dart.notNull(this.maximumSize))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/image_cache.dart", 180, 12, "_cache.length <= maximumSize");
      if (!(dart.notNull(this[_currentSizeBytes]) <= dart.notNull(this.maximumSizeBytes))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/image_cache.dart", 181, 12, "_currentSizeBytes <= maximumSizeBytes");
    }
  };
  (src__painting__image_cache.ImageCache.new = function() {
    this[_pendingImages] = new (LinkedMapOfObject$ImageStreamCompleter()).new();
    this[_cache] = new (LinkedMapOfObject$_CachedImage()).new();
    this[_maximumSize] = 1000;
    this[_maximumSizeBytes] = 104857600;
    this[_currentSizeBytes] = 0;
  }).prototype = src__painting__image_cache.ImageCache.prototype;
  dart.addTypeTests(src__painting__image_cache.ImageCache);
  dart.setMethodSignature(src__painting__image_cache.ImageCache, () => ({
    __proto__: dart.getMethods(src__painting__image_cache.ImageCache.__proto__),
    clear: dart.fnType(dart.void, []),
    evict: dart.fnType(core.bool, [core.Object]),
    putIfAbsent: dart.fnType(src__painting__image_stream.ImageStreamCompleter, [core.Object, dart.fnType(src__painting__image_stream.ImageStreamCompleter, [])]),
    [_checkCacheSize]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__painting__image_cache.ImageCache, () => ({
    __proto__: dart.getGetters(src__painting__image_cache.ImageCache.__proto__),
    maximumSize: core.int,
    currentSize: core.int,
    maximumSizeBytes: core.int,
    currentSizeBytes: core.int
  }));
  dart.setSetterSignature(src__painting__image_cache.ImageCache, () => ({
    __proto__: dart.getSetters(src__painting__image_cache.ImageCache.__proto__),
    maximumSize: core.int,
    maximumSizeBytes: core.int
  }));
  dart.setLibraryUri(src__painting__image_cache.ImageCache, "package:flutter_web/src/painting/image_cache.dart");
  dart.setFieldSignature(src__painting__image_cache.ImageCache, () => ({
    __proto__: dart.getFields(src__painting__image_cache.ImageCache.__proto__),
    [_pendingImages]: dart.finalFieldType(MapOfObject$ImageStreamCompleter()),
    [_cache]: dart.finalFieldType(MapOfObject$_CachedImage()),
    [_maximumSize]: dart.fieldType(core.int),
    [_maximumSizeBytes]: dart.fieldType(core.int),
    [_currentSizeBytes]: dart.fieldType(core.int)
  }));
  src__painting__image_cache._CachedImage = class _CachedImage extends core.Object {};
  (src__painting__image_cache._CachedImage.new = function(completer, sizeBytes) {
    this.completer = completer;
    this.sizeBytes = sizeBytes;
  }).prototype = src__painting__image_cache._CachedImage.prototype;
  dart.addTypeTests(src__painting__image_cache._CachedImage);
  dart.setLibraryUri(src__painting__image_cache._CachedImage, "package:flutter_web/src/painting/image_cache.dart");
  dart.setFieldSignature(src__painting__image_cache._CachedImage, () => ({
    __proto__: dart.getFields(src__painting__image_cache._CachedImage.__proto__),
    completer: dart.finalFieldType(src__painting__image_stream.ImageStreamCompleter),
    sizeBytes: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(src__painting__binding, {
    /*src__painting__binding._kDefaultDecodedCacheRatioCap*/get _kDefaultDecodedCacheRatioCap() {
      return 25.0;
    }
  });
  const _imageCache = dart.privateName(src__painting__binding, "_imageCache");
  const _kDecodedCacheRatioCap = dart.privateName(src__painting__binding, "_kDecodedCacheRatioCap");
  src__painting__binding.PaintingBinding = class PaintingBinding extends core.Object {
    static get instance() {
      return src__painting__binding.PaintingBinding._instance;
    }
  };
  src__painting__binding.PaintingBinding[dart.mixinOn] = BindingBase_ServicesBinding => class PaintingBinding extends BindingBase_ServicesBinding {
    initInstances() {
      super.initInstances();
      src__painting__binding.PaintingBinding._instance = this;
      this[_imageCache] = this.createImageCache();
    }
    get imageCache() {
      return this[_imageCache];
    }
    createImageCache() {
      return new src__painting__image_cache.ImageCache.new();
    }
    get decodedCacheRatioCap() {
      return this[_kDecodedCacheRatioCap];
    }
    set decodedCacheRatioCap(value) {
      if (!(value != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/binding.dart", 69, 12, "value != null");
      if (!(dart.notNull(value) >= 0.0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/binding.dart", 70, 12, "value >= 0.0");
      this[_kDecodedCacheRatioCap] = value;
    }
    instantiateImageCodec(list) {
      return ui$.instantiateImageCodec(list, {decodedCacheRatioCap: this.decodedCacheRatioCap});
    }
    evict(asset) {
      super.evict(asset);
      this.imageCache.clear();
    }
  };
  (src__painting__binding.PaintingBinding.new = function() {
    this[_imageCache] = null;
    this[_kDecodedCacheRatioCap] = 25.0;
  }).prototype = src__painting__binding.PaintingBinding.prototype;
  dart.addTypeTests(src__painting__binding.PaintingBinding);
  src__painting__binding.PaintingBinding[dart.implements] = () => [src__foundation__binding.BindingBase, src__services__binding.ServicesBinding];
  dart.setMethodSignature(src__painting__binding.PaintingBinding, () => ({
    __proto__: dart.getMethods(src__painting__binding.PaintingBinding.__proto__),
    createImageCache: dart.fnType(src__painting__image_cache.ImageCache, []),
    instantiateImageCodec: dart.fnType(async.Future$(ui$.Codec), [typed_data.Uint8List])
  }));
  dart.setGetterSignature(src__painting__binding.PaintingBinding, () => ({
    __proto__: dart.getGetters(src__painting__binding.PaintingBinding.__proto__),
    imageCache: src__painting__image_cache.ImageCache,
    decodedCacheRatioCap: core.double
  }));
  dart.setSetterSignature(src__painting__binding.PaintingBinding, () => ({
    __proto__: dart.getSetters(src__painting__binding.PaintingBinding.__proto__),
    decodedCacheRatioCap: core.double
  }));
  dart.setLibraryUri(src__painting__binding.PaintingBinding, "package:flutter_web/src/painting/binding.dart");
  dart.setFieldSignature(src__painting__binding.PaintingBinding, () => ({
    __proto__: dart.getFields(src__painting__binding.PaintingBinding.__proto__),
    [_imageCache]: dart.fieldType(src__painting__image_cache.ImageCache),
    [_kDecodedCacheRatioCap]: dart.fieldType(core.double)
  }));
  dart.defineLazy(src__painting__binding.PaintingBinding, {
    /*src__painting__binding.PaintingBinding._instance*/get _instance() {
      return null;
    },
    set _instance(_) {}
  });
  dart.copyProperties(src__painting__binding, {
    get imageCache() {
      return src__painting__binding.PaintingBinding.instance.imageCache;
    }
  });
  dart.defineLazy(src__painting__debug, {
    /*src__painting__debug.debugDisableShadows*/get debugDisableShadows() {
      return false;
    },
    set debugDisableShadows(_) {}
  });
  src__painting__debug.debugAssertAllPaintingVarsUnset = function(reason, opts) {
    let debugDisableShadowsOverride = opts && 'debugDisableShadowsOverride' in opts ? opts.debugDisableShadowsOverride : false;
    if (!dart.test(dart.fn(() => {
      if (src__painting__debug.debugDisableShadows != debugDisableShadowsOverride) {
        dart.throw(src__foundation__assertions.FlutterError.new(reason));
      }
      return true;
    }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/debug.dart", 28, 10, "() {if (debugDisableShadows != debugDisableShadowsOverride) {throw new FlutterError(reason);} return true;}()");
    return true;
  };
  let const$;
  src__painting__box_shadow.BoxShadow = class BoxShadow extends core.Object {
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      super.offset = value;
    }
    get blurRadius() {
      return this[blurRadius$];
    }
    set blurRadius(value) {
      super.blurRadius = value;
    }
    get spreadRadius() {
      return this[spreadRadius$];
    }
    set spreadRadius(value) {
      super.spreadRadius = value;
    }
    static convertRadiusToSigma(radius) {
      return dart.notNull(radius) * 0.57735 + 0.5;
    }
    get blurSigma() {
      return src__painting__box_shadow.BoxShadow.convertRadiusToSigma(this.blurRadius);
    }
    toPaint() {
      let result = new ui$.Paint.new();
      result.color = this.color;
      result.maskFilter = new ui$.MaskFilter.blur(ui$.BlurStyle.normal, this.blurSigma);
      if (!dart.test(dart.fn(() => {
        if (dart.test(src__painting__debug.debugDisableShadows)) result.maskFilter = null;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/box_shadow.dart", 73, 12, "() {if (debugDisableShadows) result.maskFilter = null; return true;}()");
      return result;
    }
    scale(factor) {
      return new src__painting__box_shadow.BoxShadow.new({color: this.color, offset: this.offset['*'](factor), blurRadius: dart.notNull(this.blurRadius) * dart.notNull(factor), spreadRadius: dart.notNull(this.spreadRadius) * dart.notNull(factor)});
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/box_shadow.dart", 108, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return b.scale(t);
      if (b == null) return a.scale(1.0 - dart.notNull(t));
      return new src__painting__box_shadow.BoxShadow.new({color: ui$.Color.lerp(a.color, b.color, t), offset: ui$.Offset.lerp(a.offset, b.offset, t), blurRadius: ui$.lerpDouble(a.blurRadius, b.blurRadius, t), spreadRadius: ui$.lerpDouble(a.spreadRadius, b.spreadRadius, t)});
    }
    static lerpList(a, b, t) {
      {
        if (!(t != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/box_shadow.dart", 137, 12, "t != null");
        if (a == null && b == null) return null;
        let t$ = a;
        t$ == null ? a = JSArrayOfBoxShadow().of([]) : t$;
        let t$0 = b;
        t$0 == null ? b = JSArrayOfBoxShadow().of([]) : t$0;
        let result = JSArrayOfBoxShadow().of([]);
        let commonLength = math.min(core.int, a[$length], b[$length]);
        for (let i = 0; i < commonLength; i = i + 1)
          result[$add](src__painting__box_shadow.BoxShadow.lerp(a[$_get](i), b[$_get](i), t));
        for (let i = commonLength; i < dart.notNull(a[$length]); i = i + 1)
          result[$add](a[$_get](i).scale(1.0 - dart.notNull(t)));
        for (let i = commonLength; i < dart.notNull(b[$length]); i = i + 1)
          result[$add](b[$_get](i).scale(t));
        return result;
      }
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(this[$runtimeType], dart.runtimeType(other))) return false;
      let typedOther = src__painting__box_shadow.BoxShadow._check(other);
      return dart.equals(this.color, typedOther.color) && dart.equals(this.offset, typedOther.offset) && this.blurRadius == typedOther.blurRadius && this.spreadRadius == typedOther.spreadRadius;
    }
    get hashCode() {
      return ui$.hashValues(this.color, this.offset, this.blurRadius, this.spreadRadius);
    }
    toString() {
      if (dart.test(src__util.assertionsEnabled)) {
        return "BoxShadow(" + dart.str(this.color) + ", " + dart.str(this.offset) + ", " + dart.str(this.blurRadius) + ", " + dart.str(this.spreadRadius) + ")";
      } else {
        return super.toString();
      }
    }
    toCssString() {
      if (this.blurRadius === 0.0 && this.spreadRadius === 0.0) {
        return dart.str(this.offset.dx) + "px " + dart.str(this.offset.dy) + "px " + dart.str(this.color.toCssString());
      } else if (this.spreadRadius === 0.0) {
        return dart.str(this.offset.dx) + "px " + dart.str(this.offset.dy) + "px " + dart.str(this.blurRadius[$toInt]()) + "px " + dart.str(this.color.toCssString());
      } else {
        return dart.str(this.offset.dx) + "px " + dart.str(this.offset.dy) + "px " + (dart.str(this.blurRadius[$toInt]()) + "px " + dart.str(this.spreadRadius[$toInt]()) + "px ") + dart.str(this.color.toCssString());
      }
    }
  };
  (src__painting__box_shadow.BoxShadow.new = function(opts) {
    let color = opts && 'color' in opts ? opts.color : const$ || (const$ = dart.const(new ui$.Color.new(4278190080)));
    let offset = opts && 'offset' in opts ? opts.offset : ui$.Offset.zero;
    let blurRadius = opts && 'blurRadius' in opts ? opts.blurRadius : 0.0;
    let spreadRadius = opts && 'spreadRadius' in opts ? opts.spreadRadius : 0.0;
    this[color$] = color;
    this[offset$] = offset;
    this[blurRadius$] = blurRadius;
    this[spreadRadius$] = spreadRadius;
  }).prototype = src__painting__box_shadow.BoxShadow.prototype;
  dart.addTypeTests(src__painting__box_shadow.BoxShadow);
  const color$ = Symbol("BoxShadow.color");
  const offset$ = Symbol("BoxShadow.offset");
  const blurRadius$ = Symbol("BoxShadow.blurRadius");
  const spreadRadius$ = Symbol("BoxShadow.spreadRadius");
  dart.setMethodSignature(src__painting__box_shadow.BoxShadow, () => ({
    __proto__: dart.getMethods(src__painting__box_shadow.BoxShadow.__proto__),
    toPaint: dart.fnType(ui$.Paint, []),
    scale: dart.fnType(src__painting__box_shadow.BoxShadow, [core.double]),
    toCssString: dart.fnType(core.String, [])
  }));
  dart.setGetterSignature(src__painting__box_shadow.BoxShadow, () => ({
    __proto__: dart.getGetters(src__painting__box_shadow.BoxShadow.__proto__),
    blurSigma: core.double
  }));
  dart.setLibraryUri(src__painting__box_shadow.BoxShadow, "package:flutter_web/src/painting/box_shadow.dart");
  dart.setFieldSignature(src__painting__box_shadow.BoxShadow, () => ({
    __proto__: dart.getFields(src__painting__box_shadow.BoxShadow.__proto__),
    color: dart.finalFieldType(ui$.Color),
    offset: dart.finalFieldType(ui$.Offset),
    blurRadius: dart.finalFieldType(core.double),
    spreadRadius: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(src__painting__box_shadow.BoxShadow, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__painting__box_shadow.BoxShadow, ['hashCode']);
  src__painting__image_provider.ImageConfiguration = class ImageConfiguration extends core.Object {
    copyWith(opts) {
      let bundle = opts && 'bundle' in opts ? opts.bundle : null;
      let devicePixelRatio = opts && 'devicePixelRatio' in opts ? opts.devicePixelRatio : null;
      let locale = opts && 'locale' in opts ? opts.locale : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let size = opts && 'size' in opts ? opts.size : null;
      let platform = opts && 'platform' in opts ? opts.platform : null;
      return new src__painting__image_provider.ImageConfiguration.new({bundle: bundle != null ? bundle : this.bundle, devicePixelRatio: devicePixelRatio != null ? devicePixelRatio : this.devicePixelRatio, locale: locale != null ? locale : this.locale, textDirection: textDirection != null ? textDirection : this.textDirection, size: size != null ? size : this.size, platform: src__foundation__platform.TargetPlatform._check(platform != null ? platform : this.platform)});
    }
    get bundle() {
      return this[bundle$];
    }
    set bundle(value) {
      super.bundle = value;
    }
    get devicePixelRatio() {
      return this[devicePixelRatio$];
    }
    set devicePixelRatio(value) {
      super.devicePixelRatio = value;
    }
    get locale() {
      return this[locale$];
    }
    set locale(value) {
      super.locale = value;
    }
    get textDirection() {
      return this[textDirection$];
    }
    set textDirection(value) {
      super.textDirection = value;
    }
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    get platform() {
      return this[platform$];
    }
    set platform(value) {
      super.platform = value;
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      let typedOther = src__painting__image_provider.ImageConfiguration._check(other);
      return dart.equals(typedOther.bundle, this.bundle) && typedOther.devicePixelRatio == this.devicePixelRatio && dart.equals(typedOther.locale, this.locale) && typedOther.textDirection == this.textDirection && dart.equals(typedOther.size, this.size) && typedOther.platform == this.platform;
    }
    get hashCode() {
      return ui$.hashValues(this.bundle, this.devicePixelRatio, this.locale, this.size, this.platform);
    }
    toString() {
      let result = new core.StringBuffer.new();
      result.write("ImageConfiguration(");
      let hasArguments = false;
      if (this.bundle != null) {
        if (hasArguments) result.write(", ");
        result.write("bundle: " + dart.str(this.bundle));
        hasArguments = true;
      }
      if (this.devicePixelRatio != null) {
        if (hasArguments) result.write(", ");
        result.write("devicePixelRatio: " + this.devicePixelRatio[$toStringAsFixed](1));
        hasArguments = true;
      }
      if (this.locale != null) {
        if (hasArguments) result.write(", ");
        result.write("locale: " + dart.str(this.locale));
        hasArguments = true;
      }
      if (this.textDirection != null) {
        if (hasArguments) result.write(", ");
        result.write("textDirection: " + dart.str(this.textDirection));
        hasArguments = true;
      }
      if (this.size != null) {
        if (hasArguments) result.write(", ");
        result.write("size: " + dart.str(this.size));
        hasArguments = true;
      }
      if (this.platform != null) {
        if (hasArguments) result.write(", ");
        result.write("platform: " + dart.str(src__foundation__diagnostics.describeEnum(this.platform)));
        hasArguments = true;
      }
      result.write(")");
      return result.toString();
    }
  };
  (src__painting__image_provider.ImageConfiguration.new = function(opts) {
    let bundle = opts && 'bundle' in opts ? opts.bundle : null;
    let devicePixelRatio = opts && 'devicePixelRatio' in opts ? opts.devicePixelRatio : null;
    let locale = opts && 'locale' in opts ? opts.locale : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let size = opts && 'size' in opts ? opts.size : null;
    let platform = opts && 'platform' in opts ? opts.platform : null;
    this[bundle$] = bundle;
    this[devicePixelRatio$] = devicePixelRatio;
    this[locale$] = locale;
    this[textDirection$] = textDirection;
    this[size$] = size;
    this[platform$] = platform;
  }).prototype = src__painting__image_provider.ImageConfiguration.prototype;
  dart.addTypeTests(src__painting__image_provider.ImageConfiguration);
  const bundle$ = Symbol("ImageConfiguration.bundle");
  const devicePixelRatio$ = Symbol("ImageConfiguration.devicePixelRatio");
  const locale$ = Symbol("ImageConfiguration.locale");
  const textDirection$ = Symbol("ImageConfiguration.textDirection");
  const size$ = Symbol("ImageConfiguration.size");
  const platform$ = Symbol("ImageConfiguration.platform");
  dart.setMethodSignature(src__painting__image_provider.ImageConfiguration, () => ({
    __proto__: dart.getMethods(src__painting__image_provider.ImageConfiguration.__proto__),
    copyWith: dart.fnType(src__painting__image_provider.ImageConfiguration, [], {bundle: src__services__asset_bundle.AssetBundle, devicePixelRatio: core.double, locale: ui$.Locale, textDirection: ui$.TextDirection, size: ui$.Size, platform: core.String})
  }));
  dart.setLibraryUri(src__painting__image_provider.ImageConfiguration, "package:flutter_web/src/painting/image_provider.dart");
  dart.setFieldSignature(src__painting__image_provider.ImageConfiguration, () => ({
    __proto__: dart.getFields(src__painting__image_provider.ImageConfiguration.__proto__),
    bundle: dart.finalFieldType(src__services__asset_bundle.AssetBundle),
    devicePixelRatio: dart.finalFieldType(core.double),
    locale: dart.finalFieldType(ui$.Locale),
    textDirection: dart.finalFieldType(ui$.TextDirection),
    size: dart.finalFieldType(ui$.Size),
    platform: dart.finalFieldType(src__foundation__platform.TargetPlatform)
  }));
  dart.defineExtensionMethods(src__painting__image_provider.ImageConfiguration, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__painting__image_provider.ImageConfiguration, ['hashCode']);
  dart.defineLazy(src__painting__image_provider.ImageConfiguration, {
    /*src__painting__image_provider.ImageConfiguration.empty*/get empty() {
      return dart.const(new src__painting__image_provider.ImageConfiguration.new());
    }
  });
  const _is_ImageProvider_default = Symbol('_is_ImageProvider_default');
  src__painting__image_provider.ImageProvider$ = dart.generic(T => {
    let DiagnosticsPropertyOfT = () => (DiagnosticsPropertyOfT = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(T)))();
    let TToNull = () => (TToNull = dart.constFn(dart.fnType(core.Null, [T])))();
    class ImageProvider extends core.Object {
      resolve(configuration) {
        if (!(configuration != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/image_provider.dart", 257, 12, "configuration != null");
        let stream = new src__painting__image_stream.ImageStream.new();
        let obtainedKey = null;
        this.obtainKey(configuration).then(dart.void, dart.fn(key => {
          obtainedKey = key;
          stream.setCompleter(src__painting__binding.PaintingBinding.instance.imageCache.putIfAbsent(key, dart.fn(() => this.load(key), VoidToImageStreamCompleter())));
        }, TToNull())).catchError(dart.fn((exception, stack) => async.async(core.Null, (function*() {
          src__foundation__assertions.FlutterError.reportError(new src__foundation__assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "services library", context: new src__foundation__assertions.ErrorDescription.new("while resolving an image"), silent: true, informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsPropertyOfObject()).new((function*() {
              yield new (DiagnosticsPropertyOfImageProvider()).new("Image provider", this);
              yield new (DiagnosticsPropertyOfImageConfiguration()).new("Image configuration", configuration);
              yield new (DiagnosticsPropertyOfT()).new("Image key", obtainedKey, {defaultValue: null});
            }).bind(this)), VoidToIterableOfDiagnosticsPropertyOfObject())}));
          return null;
        }).bind(this)), dynamicAndStackTraceToFutureOfNull()));
        return stream;
      }
      evict(opts) {
        let cache = opts && 'cache' in opts ? opts.cache : null;
        let configuration = opts && 'configuration' in opts ? opts.configuration : src__painting__image_provider.ImageConfiguration.empty;
        return async.async(core.bool, (function* evict() {
          let t = cache;
          t == null ? cache = src__painting__binding.imageCache : t;
          let key = (yield this.obtainKey(configuration));
          return cache.evict(key);
        }).bind(this));
      }
      toString() {
        return dart.str(this[$runtimeType]) + "()";
      }
    }
    (ImageProvider.new = function() {
    }).prototype = ImageProvider.prototype;
    dart.addTypeTests(ImageProvider);
    ImageProvider.prototype[_is_ImageProvider_default] = true;
    dart.setMethodSignature(ImageProvider, () => ({
      __proto__: dart.getMethods(ImageProvider.__proto__),
      resolve: dart.fnType(src__painting__image_stream.ImageStream, [src__painting__image_provider.ImageConfiguration]),
      evict: dart.fnType(async.Future$(core.bool), [], {cache: src__painting__image_cache.ImageCache, configuration: src__painting__image_provider.ImageConfiguration}),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, [])
    }));
    dart.setLibraryUri(ImageProvider, "package:flutter_web/src/painting/image_provider.dart");
    dart.defineExtensionMethods(ImageProvider, ['toString']);
    return ImageProvider;
  });
  src__painting__image_provider.ImageProvider = src__painting__image_provider.ImageProvider$();
  dart.addTypeTests(src__painting__image_provider.ImageProvider, _is_ImageProvider_default);
  src__painting__image_provider.AssetBundleImageKey = class AssetBundleImageKey extends core.Object {
    get bundle() {
      return this[bundle$0];
    }
    set bundle(value) {
      super.bundle = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get scale() {
      return this[scale$0];
    }
    set scale(value) {
      super.scale = value;
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      let typedOther = src__painting__image_provider.AssetBundleImageKey._check(other);
      return dart.equals(this.bundle, typedOther.bundle) && this.name == typedOther.name && this.scale == typedOther.scale;
    }
    get hashCode() {
      return ui$.hashValues(this.bundle, this.name, this.scale);
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(bundle: " + dart.str(this.bundle) + ", name: \"" + dart.str(this.name) + "\", scale: " + dart.str(this.scale) + ")";
    }
  };
  (src__painting__image_provider.AssetBundleImageKey.new = function(opts) {
    let bundle = opts && 'bundle' in opts ? opts.bundle : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let scale = opts && 'scale' in opts ? opts.scale : null;
    this[bundle$0] = bundle;
    this[name$] = name;
    this[scale$0] = scale;
    if (!(bundle != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/image_provider.dart", 360, 16, "bundle != null");
    if (!(name != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/image_provider.dart", 361, 16, "name != null");
    if (!(scale != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/image_provider.dart", 362, 16, "scale != null");
  }).prototype = src__painting__image_provider.AssetBundleImageKey.prototype;
  dart.addTypeTests(src__painting__image_provider.AssetBundleImageKey);
  const bundle$0 = Symbol("AssetBundleImageKey.bundle");
  const name$ = Symbol("AssetBundleImageKey.name");
  const scale$0 = Symbol("AssetBundleImageKey.scale");
  dart.setLibraryUri(src__painting__image_provider.AssetBundleImageKey, "package:flutter_web/src/painting/image_provider.dart");
  dart.setFieldSignature(src__painting__image_provider.AssetBundleImageKey, () => ({
    __proto__: dart.getFields(src__painting__image_provider.AssetBundleImageKey.__proto__),
    bundle: dart.finalFieldType(src__services__asset_bundle.AssetBundle),
    name: dart.finalFieldType(core.String),
    scale: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(src__painting__image_provider.AssetBundleImageKey, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__painting__image_provider.AssetBundleImageKey, ['hashCode']);
  const _loadAsync = dart.privateName(src__painting__image_provider, "_loadAsync");
  src__painting__image_provider.AssetBundleImageProvider = class AssetBundleImageProvider extends src__painting__image_provider.ImageProvider$(src__painting__image_provider.AssetBundleImageKey) {
    load(key) {
      src__painting__image_provider.AssetBundleImageKey._check(key);
      return new src__painting__image_stream.MultiFrameImageStreamCompleter.new({codec: this[_loadAsync](key), scale: key.scale, informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsPropertyOfObject()).new((function*() {
          yield new (DiagnosticsPropertyOfImageProvider()).new("Image provider", this);
          yield new (DiagnosticsPropertyOfAssetBundleImageKey()).new("Image key", key);
        }).bind(this)), VoidToIterableOfDiagnosticsPropertyOfObject())});
    }
    [_loadAsync](key) {
      return async.async(ui$.Codec, function* _loadAsync() {
        let data = (yield key.bundle.load(key.name));
        if (data == null) dart.throw("Unable to read data");
        return yield src__painting__binding.PaintingBinding.instance.instantiateImageCodec(data[$buffer][$asUint8List]());
      });
    }
  };
  (src__painting__image_provider.AssetBundleImageProvider.new = function() {
    src__painting__image_provider.AssetBundleImageProvider.__proto__.new.call(this);
  }).prototype = src__painting__image_provider.AssetBundleImageProvider.prototype;
  dart.addTypeTests(src__painting__image_provider.AssetBundleImageProvider);
  dart.setMethodSignature(src__painting__image_provider.AssetBundleImageProvider, () => ({
    __proto__: dart.getMethods(src__painting__image_provider.AssetBundleImageProvider.__proto__),
    load: dart.fnType(src__painting__image_stream.ImageStreamCompleter, [core.Object]),
    [_loadAsync]: dart.fnType(async.Future$(ui$.Codec), [src__painting__image_provider.AssetBundleImageKey])
  }));
  dart.setLibraryUri(src__painting__image_provider.AssetBundleImageProvider, "package:flutter_web/src/painting/image_provider.dart");
  src__painting__image_provider.NetworkImage = class NetworkImage extends src__painting__image_provider.ImageProvider {
    get url() {
      return this[url$];
    }
    set url(value) {
      super.url = value;
    }
    get scale() {
      return this[scale$1];
    }
    set scale(value) {
      super.scale = value;
    }
    get headers() {
      return this[headers$];
    }
    set headers(value) {
      super.headers = value;
    }
    obtainKey(configuration) {
      return new (SynchronousFutureOfNetworkImage()).new(this);
    }
    load(key) {
      src__painting__image_provider.NetworkImage._check(key);
      return new src__painting__image_stream.MultiFrameImageStreamCompleter.new({codec: this[_loadAsync](key), scale: key.scale, informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsPropertyOfImageProvider()).new((function*() {
          yield new (DiagnosticsPropertyOfImageProvider()).new("Image provider", this);
          yield new (DiagnosticsPropertyOfNetworkImage()).new("Image key", key);
        }).bind(this)), VoidToIterableOfDiagnosticsPropertyOfImageProvider())});
    }
    [_loadAsync](key) {
      return async.async(ui$.Codec, (function* _loadAsync() {
        if (!dart.equals(key, this)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/image_provider.dart", 476, 12, "key == this");
        let resolved = core.Uri.base.resolve(key.url);
        return ui$.webOnlyInstantiateImageCodecFromUrl(resolved);
      }).bind(this));
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      let typedOther = src__painting__image_provider.NetworkImage._check(other);
      return this.url == typedOther.url && this.scale == typedOther.scale;
    }
    get hashCode() {
      return ui$.hashValues(this.url, this.scale);
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(\"" + dart.str(this.url) + "\", scale: " + dart.str(this.scale) + ")";
    }
  };
  (src__painting__image_provider.NetworkImage.new = function(url, opts) {
    let scale = opts && 'scale' in opts ? opts.scale : 1.0;
    let headers = opts && 'headers' in opts ? opts.headers : null;
    this[url$] = url;
    this[scale$1] = scale;
    this[headers$] = headers;
    if (!(url != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/image_provider.dart", 446, 16, "url != null");
    if (!(scale != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/image_provider.dart", 447, 16, "scale != null");
    src__painting__image_provider.NetworkImage.__proto__.new.call(this);
  }).prototype = src__painting__image_provider.NetworkImage.prototype;
  dart.addTypeTests(src__painting__image_provider.NetworkImage);
  const url$ = Symbol("NetworkImage.url");
  const scale$1 = Symbol("NetworkImage.scale");
  const headers$ = Symbol("NetworkImage.headers");
  dart.setMethodSignature(src__painting__image_provider.NetworkImage, () => ({
    __proto__: dart.getMethods(src__painting__image_provider.NetworkImage.__proto__),
    obtainKey: dart.fnType(async.Future$(src__painting__image_provider.NetworkImage), [src__painting__image_provider.ImageConfiguration]),
    load: dart.fnType(src__painting__image_stream.ImageStreamCompleter, [core.Object]),
    [_loadAsync]: dart.fnType(async.Future$(ui$.Codec), [src__painting__image_provider.NetworkImage]),
    toString: dart.fnType(core.String, []),
    [$toString]: dart.fnType(core.String, [])
  }));
  dart.setLibraryUri(src__painting__image_provider.NetworkImage, "package:flutter_web/src/painting/image_provider.dart");
  dart.setFieldSignature(src__painting__image_provider.NetworkImage, () => ({
    __proto__: dart.getFields(src__painting__image_provider.NetworkImage.__proto__),
    url: dart.finalFieldType(core.String),
    scale: dart.finalFieldType(core.double),
    headers: dart.finalFieldType(MapOfString$String())
  }));
  dart.defineExtensionMethods(src__painting__image_provider.NetworkImage, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__painting__image_provider.NetworkImage, ['hashCode']);
  src__painting__image_provider.MemoryImage = class MemoryImage extends src__painting__image_provider.ImageProvider {
    get bytes() {
      return this[bytes$];
    }
    set bytes(value) {
      super.bytes = value;
    }
    get scale() {
      return this[scale$2];
    }
    set scale(value) {
      super.scale = value;
    }
    obtainKey(configuration) {
      return new (SynchronousFutureOfMemoryImage()).new(this);
    }
    load(key) {
      src__painting__image_provider.MemoryImage._check(key);
      return new src__painting__image_stream.MultiFrameImageStreamCompleter.new({codec: this[_loadAsync](key), scale: key.scale});
    }
    [_loadAsync](key) {
      if (!dart.equals(key, this)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/image_provider.dart", 534, 12, "key == this");
      return src__painting__binding.PaintingBinding.instance.instantiateImageCodec(this.bytes);
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      let typedOther = src__painting__image_provider.MemoryImage._check(other);
      return dart.equals(this.bytes, typedOther.bytes) && this.scale == typedOther.scale;
    }
    get hashCode() {
      return ui$.hashValues(dart.hashCode(this.bytes), this.scale);
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(src__foundation__diagnostics.describeIdentity(this.bytes)) + ", scale: " + dart.str(this.scale) + ")";
    }
  };
  (src__painting__image_provider.MemoryImage.new = function(bytes, opts) {
    let scale = opts && 'scale' in opts ? opts.scale : 1.0;
    this[bytes$] = bytes;
    this[scale$2] = scale;
    if (!(bytes != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/image_provider.dart", 513, 16, "bytes != null");
    if (!(scale != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/image_provider.dart", 514, 16, "scale != null");
    src__painting__image_provider.MemoryImage.__proto__.new.call(this);
  }).prototype = src__painting__image_provider.MemoryImage.prototype;
  dart.addTypeTests(src__painting__image_provider.MemoryImage);
  const bytes$ = Symbol("MemoryImage.bytes");
  const scale$2 = Symbol("MemoryImage.scale");
  dart.setMethodSignature(src__painting__image_provider.MemoryImage, () => ({
    __proto__: dart.getMethods(src__painting__image_provider.MemoryImage.__proto__),
    obtainKey: dart.fnType(async.Future$(src__painting__image_provider.MemoryImage), [src__painting__image_provider.ImageConfiguration]),
    load: dart.fnType(src__painting__image_stream.ImageStreamCompleter, [core.Object]),
    [_loadAsync]: dart.fnType(async.Future$(ui$.Codec), [src__painting__image_provider.MemoryImage]),
    toString: dart.fnType(core.String, []),
    [$toString]: dart.fnType(core.String, [])
  }));
  dart.setLibraryUri(src__painting__image_provider.MemoryImage, "package:flutter_web/src/painting/image_provider.dart");
  dart.setFieldSignature(src__painting__image_provider.MemoryImage, () => ({
    __proto__: dart.getFields(src__painting__image_provider.MemoryImage.__proto__),
    bytes: dart.finalFieldType(typed_data.Uint8List),
    scale: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(src__painting__image_provider.MemoryImage, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__painting__image_provider.MemoryImage, ['hashCode']);
  src__painting__image_provider.ExactAssetImage = class ExactAssetImage extends src__painting__image_provider.AssetBundleImageProvider {
    get assetName() {
      return this[assetName$];
    }
    set assetName(value) {
      super.assetName = value;
    }
    get keyName() {
      return this.package == null ? this.assetName : "packages/" + dart.str(this.package) + "/" + dart.str(this.assetName);
    }
    get scale() {
      return this[scale$3];
    }
    set scale(value) {
      super.scale = value;
    }
    get bundle() {
      return this[bundle$1];
    }
    set bundle(value) {
      super.bundle = value;
    }
    get package() {
      return this[package$];
    }
    set package(value) {
      super.package = value;
    }
    obtainKey(configuration) {
      return new (SynchronousFutureOfAssetBundleImageKey()).new(new src__painting__image_provider.AssetBundleImageKey.new({bundle: (() => {
          let l = this.bundle != null ? this.bundle : configuration.bundle;
          return l != null ? l : src__services__asset_bundle.rootBundle;
        })(), name: this.keyName, scale: this.scale}));
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      let typedOther = src__painting__image_provider.ExactAssetImage._check(other);
      return this.keyName == typedOther.keyName && this.scale == typedOther.scale && dart.equals(this.bundle, typedOther.bundle);
    }
    get hashCode() {
      return ui$.hashValues(this.keyName, this.scale, this.bundle);
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(name: \"" + dart.str(this.keyName) + "\", scale: " + dart.str(this.scale) + ", bundle: " + dart.str(this.bundle) + ")";
    }
  };
  (src__painting__image_provider.ExactAssetImage.new = function(assetName, opts) {
    let scale = opts && 'scale' in opts ? opts.scale : 1.0;
    let bundle = opts && 'bundle' in opts ? opts.bundle : null;
    let package$1 = opts && 'package' in opts ? opts.package : null;
    this[assetName$] = assetName;
    this[scale$3] = scale;
    this[bundle$1] = bundle;
    this[package$] = package$1;
    if (!(assetName != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/image_provider.dart", 639, 16, "assetName != null");
    if (!(scale != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/image_provider.dart", 640, 16, "scale != null");
    src__painting__image_provider.ExactAssetImage.__proto__.new.call(this);
  }).prototype = src__painting__image_provider.ExactAssetImage.prototype;
  dart.addTypeTests(src__painting__image_provider.ExactAssetImage);
  const assetName$ = Symbol("ExactAssetImage.assetName");
  const scale$3 = Symbol("ExactAssetImage.scale");
  const bundle$1 = Symbol("ExactAssetImage.bundle");
  const package$ = Symbol("ExactAssetImage.package");
  dart.setMethodSignature(src__painting__image_provider.ExactAssetImage, () => ({
    __proto__: dart.getMethods(src__painting__image_provider.ExactAssetImage.__proto__),
    obtainKey: dart.fnType(async.Future$(src__painting__image_provider.AssetBundleImageKey), [src__painting__image_provider.ImageConfiguration]),
    toString: dart.fnType(core.String, []),
    [$toString]: dart.fnType(core.String, [])
  }));
  dart.setGetterSignature(src__painting__image_provider.ExactAssetImage, () => ({
    __proto__: dart.getGetters(src__painting__image_provider.ExactAssetImage.__proto__),
    keyName: core.String
  }));
  dart.setLibraryUri(src__painting__image_provider.ExactAssetImage, "package:flutter_web/src/painting/image_provider.dart");
  dart.setFieldSignature(src__painting__image_provider.ExactAssetImage, () => ({
    __proto__: dart.getFields(src__painting__image_provider.ExactAssetImage.__proto__),
    assetName: dart.finalFieldType(core.String),
    scale: dart.finalFieldType(core.double),
    bundle: dart.finalFieldType(src__services__asset_bundle.AssetBundle),
    package: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__painting__image_provider.ExactAssetImage, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__painting__image_provider.ExactAssetImage, ['hashCode']);
  src__painting__box_fit.BoxFit = class BoxFit extends core.Object {
    toString() {
      return {
        0: "BoxFit.fill",
        1: "BoxFit.contain",
        2: "BoxFit.cover",
        3: "BoxFit.fitWidth",
        4: "BoxFit.fitHeight",
        5: "BoxFit.none",
        6: "BoxFit.scaleDown"
      }[this.index];
    }
  };
  (src__painting__box_fit.BoxFit.new = function(x) {
    this.index = x;
  }).prototype = src__painting__box_fit.BoxFit.prototype;
  dart.addTypeTests(src__painting__box_fit.BoxFit);
  dart.setLibraryUri(src__painting__box_fit.BoxFit, "package:flutter_web/src/painting/box_fit.dart");
  dart.setFieldSignature(src__painting__box_fit.BoxFit, () => ({
    __proto__: dart.getFields(src__painting__box_fit.BoxFit.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__painting__box_fit.BoxFit, ['toString']);
  src__painting__box_fit.BoxFit.fill = dart.const(new src__painting__box_fit.BoxFit.new(0));
  src__painting__box_fit.BoxFit.contain = dart.const(new src__painting__box_fit.BoxFit.new(1));
  src__painting__box_fit.BoxFit.cover = dart.const(new src__painting__box_fit.BoxFit.new(2));
  src__painting__box_fit.BoxFit.fitWidth = dart.const(new src__painting__box_fit.BoxFit.new(3));
  src__painting__box_fit.BoxFit.fitHeight = dart.const(new src__painting__box_fit.BoxFit.new(4));
  src__painting__box_fit.BoxFit.none = dart.const(new src__painting__box_fit.BoxFit.new(5));
  src__painting__box_fit.BoxFit.scaleDown = dart.const(new src__painting__box_fit.BoxFit.new(6));
  src__painting__box_fit.BoxFit.values = dart.constList([src__painting__box_fit.BoxFit.fill, src__painting__box_fit.BoxFit.contain, src__painting__box_fit.BoxFit.cover, src__painting__box_fit.BoxFit.fitWidth, src__painting__box_fit.BoxFit.fitHeight, src__painting__box_fit.BoxFit.none, src__painting__box_fit.BoxFit.scaleDown], src__painting__box_fit.BoxFit);
  src__painting__box_fit.FittedSizes = class FittedSizes extends core.Object {
    get source() {
      return this[source$];
    }
    set source(value) {
      super.source = value;
    }
    get destination() {
      return this[destination$];
    }
    set destination(value) {
      super.destination = value;
    }
  };
  (src__painting__box_fit.FittedSizes.new = function(source, destination) {
    this[source$] = source;
    this[destination$] = destination;
  }).prototype = src__painting__box_fit.FittedSizes.prototype;
  dart.addTypeTests(src__painting__box_fit.FittedSizes);
  const source$ = Symbol("FittedSizes.source");
  const destination$ = Symbol("FittedSizes.destination");
  dart.setLibraryUri(src__painting__box_fit.FittedSizes, "package:flutter_web/src/painting/box_fit.dart");
  dart.setFieldSignature(src__painting__box_fit.FittedSizes, () => ({
    __proto__: dart.getFields(src__painting__box_fit.FittedSizes.__proto__),
    source: dart.finalFieldType(ui$.Size),
    destination: dart.finalFieldType(ui$.Size)
  }));
  let const$0;
  src__painting__box_fit.applyBoxFit = function(fit, inputSize, outputSize) {
    if (dart.notNull(inputSize.height) <= 0.0 || dart.notNull(inputSize.width) <= 0.0 || dart.notNull(outputSize.height) <= 0.0 || dart.notNull(outputSize.width) <= 0.0) return const$0 || (const$0 = dart.const(new src__painting__box_fit.FittedSizes.new(ui$.Size.zero, ui$.Size.zero)));
    let sourceSize = null, destinationSize = null;
    switch (fit) {
      case src__painting__box_fit.BoxFit.fill:
      {
        sourceSize = inputSize;
        destinationSize = outputSize;
        break;
      }
      case src__painting__box_fit.BoxFit.contain:
      {
        sourceSize = inputSize;
        if (dart.notNull(outputSize.width) / dart.notNull(outputSize.height) > dart.notNull(sourceSize.width) / dart.notNull(sourceSize.height))
          destinationSize = new ui$.Size.new(dart.notNull(sourceSize.width) * dart.notNull(outputSize.height) / dart.notNull(sourceSize.height), outputSize.height);
        else
          destinationSize = new ui$.Size.new(outputSize.width, dart.notNull(sourceSize.height) * dart.notNull(outputSize.width) / dart.notNull(sourceSize.width));
        break;
      }
      case src__painting__box_fit.BoxFit.cover:
      {
        if (dart.notNull(outputSize.width) / dart.notNull(outputSize.height) > dart.notNull(inputSize.width) / dart.notNull(inputSize.height)) {
          sourceSize = new ui$.Size.new(inputSize.width, dart.notNull(inputSize.width) * dart.notNull(outputSize.height) / dart.notNull(outputSize.width));
        } else {
          sourceSize = new ui$.Size.new(dart.notNull(inputSize.height) * dart.notNull(outputSize.width) / dart.notNull(outputSize.height), inputSize.height);
        }
        destinationSize = outputSize;
        break;
      }
      case src__painting__box_fit.BoxFit.fitWidth:
      {
        sourceSize = new ui$.Size.new(inputSize.width, dart.notNull(inputSize.width) * dart.notNull(outputSize.height) / dart.notNull(outputSize.width));
        destinationSize = new ui$.Size.new(outputSize.width, dart.notNull(sourceSize.height) * dart.notNull(outputSize.width) / dart.notNull(sourceSize.width));
        break;
      }
      case src__painting__box_fit.BoxFit.fitHeight:
      {
        sourceSize = new ui$.Size.new(dart.notNull(inputSize.height) * dart.notNull(outputSize.width) / dart.notNull(outputSize.height), inputSize.height);
        destinationSize = new ui$.Size.new(dart.notNull(sourceSize.width) * dart.notNull(outputSize.height) / dart.notNull(sourceSize.height), outputSize.height);
        break;
      }
      case src__painting__box_fit.BoxFit.none:
      {
        sourceSize = new ui$.Size.new(math.min(core.double, inputSize.width, outputSize.width), math.min(core.double, inputSize.height, outputSize.height));
        destinationSize = sourceSize;
        break;
      }
      case src__painting__box_fit.BoxFit.scaleDown:
      {
        sourceSize = inputSize;
        destinationSize = inputSize;
        let aspectRatio = dart.notNull(inputSize.width) / dart.notNull(inputSize.height);
        if (dart.notNull(destinationSize.height) > dart.notNull(outputSize.height)) destinationSize = new ui$.Size.new(dart.notNull(outputSize.height) * aspectRatio, outputSize.height);
        if (dart.notNull(destinationSize.width) > dart.notNull(outputSize.width)) destinationSize = new ui$.Size.new(outputSize.width, dart.notNull(outputSize.width) / aspectRatio);
        break;
      }
    }
    return new src__painting__box_fit.FittedSizes.new(sourceSize, destinationSize);
  };
  src__painting__gradient._ColorsAndStops = class _ColorsAndStops extends core.Object {};
  (src__painting__gradient._ColorsAndStops.new = function(colors, stops) {
    this.colors = colors;
    this.stops = stops;
  }).prototype = src__painting__gradient._ColorsAndStops.prototype;
  dart.addTypeTests(src__painting__gradient._ColorsAndStops);
  dart.setLibraryUri(src__painting__gradient._ColorsAndStops, "package:flutter_web/src/painting/gradient.dart");
  dart.setFieldSignature(src__painting__gradient._ColorsAndStops, () => ({
    __proto__: dart.getFields(src__painting__gradient._ColorsAndStops.__proto__),
    colors: dart.finalFieldType(ListOfColor()),
    stops: dart.finalFieldType(ListOfdouble())
  }));
  let const$1;
  let const$2;
  src__painting__gradient._interpolateColorsAndStops = function(aColors, aStops, bColors, bStops, t) {
    if (!(aColors[$length] == bColors[$length])) dart.assertFailed("Cannot interpolate between two gradients with " + "a different number of colors.", "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/gradient.dart", 23, 7, "aColors.length == bColors.length");
    if (!(aStops == null && aColors[$length] === 2 || aStops != null && aStops[$length] == aColors[$length])) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/gradient.dart", 26, 10, "(aStops == null && aColors.length == 2) || (aStops != null && aStops.length == aColors.length)");
    if (!(bStops == null && bColors[$length] === 2 || bStops != null && bStops[$length] == bColors[$length])) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/gradient.dart", 28, 10, "(bStops == null && bColors.length == 2) || (bStops != null && bStops.length == bColors.length)");
    let interpolatedColors = JSArrayOfColor().of([]);
    for (let i = 0; i < dart.notNull(aColors[$length]); i = i + 1)
      interpolatedColors[$add](ui$.Color.lerp(aColors[$_get](i), bColors[$_get](i), t));
    let interpolatedStops = null;
    if (aStops != null || bStops != null) {
      let t$ = aStops;
      t$ == null ? aStops = const$1 || (const$1 = dart.constList([0.0, 1.0], core.double)) : t$;
      let t$0 = bStops;
      t$0 == null ? bStops = const$2 || (const$2 = dart.constList([0.0, 1.0], core.double)) : t$0;
      if (!(aStops[$length] == bStops[$length])) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/gradient.dart", 37, 12, "aStops.length == bStops.length");
      interpolatedStops = JSArrayOfdouble().of([]);
      for (let i = 0; i < dart.notNull(aStops[$length]); i = i + 1)
        interpolatedStops[$add](ui$.lerpDouble(aStops[$_get](i), bStops[$_get](i), t)[$clamp](0.0, 1.0));
    }
    return new src__painting__gradient._ColorsAndStops.new(interpolatedColors, interpolatedStops);
  };
  const _impliedStops = dart.privateName(src__painting__gradient, "_impliedStops");
  src__painting__gradient.Gradient = class Gradient extends core.Object {
    get colors() {
      return this[colors$];
    }
    set colors(value) {
      super.colors = value;
    }
    get stops() {
      return this[stops$];
    }
    set stops(value) {
      super.stops = value;
    }
    [_impliedStops]() {
      if (this.stops != null) return this.stops;
      if (this.colors[$length] === 2) return null;
      if (!(dart.notNull(this.colors[$length]) >= 2)) dart.assertFailed("colors list must have at least two colors", "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/gradient.dart", 93, 12, "colors.length >= 2");
      let separation = 1.0 / (dart.notNull(this.colors[$length]) - 1);
      return ListOfdouble().generate(this.colors[$length], dart.fn(index => dart.notNull(index) * separation, intTodouble()), {growable: false});
    }
    lerpFrom(a, t) {
      if (a == null) return this.scale(t);
      return null;
    }
    lerpTo(b, t) {
      if (b == null) return this.scale(1.0 - dart.notNull(t));
      return null;
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/gradient.dart", 201, 12, "t != null");
      let result = null;
      if (b != null) result = b.lerpFrom(a, t);
      if (result == null && a != null) result = a.lerpTo(b, t);
      if (result != null) return result;
      if (a == null && b == null) return null;
      if (!(a != null && b != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/gradient.dart", 209, 12, "a != null && b != null");
      return dart.notNull(t) < 0.5 ? a.scale(1.0 - dart.notNull(t) * 2.0) : b.scale((dart.notNull(t) - 0.5) * 2.0);
    }
  };
  (src__painting__gradient.Gradient.new = function(opts) {
    let colors = opts && 'colors' in opts ? opts.colors : null;
    let stops = opts && 'stops' in opts ? opts.stops : null;
    this[colors$] = colors;
    this[stops$] = stops;
    if (!(colors != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/gradient.dart", 62, 15, "colors != null");
  }).prototype = src__painting__gradient.Gradient.prototype;
  dart.addTypeTests(src__painting__gradient.Gradient);
  const colors$ = Symbol("Gradient.colors");
  const stops$ = Symbol("Gradient.stops");
  dart.setMethodSignature(src__painting__gradient.Gradient, () => ({
    __proto__: dart.getMethods(src__painting__gradient.Gradient.__proto__),
    [_impliedStops]: dart.fnType(core.List$(core.double), []),
    lerpFrom: dart.fnType(src__painting__gradient.Gradient, [src__painting__gradient.Gradient, core.double]),
    lerpTo: dart.fnType(src__painting__gradient.Gradient, [src__painting__gradient.Gradient, core.double])
  }));
  dart.setLibraryUri(src__painting__gradient.Gradient, "package:flutter_web/src/painting/gradient.dart");
  dart.setFieldSignature(src__painting__gradient.Gradient, () => ({
    __proto__: dart.getFields(src__painting__gradient.Gradient.__proto__),
    colors: dart.finalFieldType(ListOfColor()),
    stops: dart.finalFieldType(ListOfdouble())
  }));
  const _getDirectionCss = dart.privateName(src__painting__gradient, "_getDirectionCss");
  src__painting__gradient.LinearGradient = class LinearGradient extends src__painting__gradient.Gradient {
    get begin() {
      return this[begin$];
    }
    set begin(value) {
      super.begin = value;
    }
    get end() {
      return this[end$];
    }
    set end(value) {
      super.end = value;
    }
    get tileMode() {
      return this[tileMode$];
    }
    set tileMode(value) {
      super.tileMode = value;
    }
    createShader(rect, opts) {
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      return ui$.Gradient.linear(this.begin.resolve(textDirection).withinRect(rect), this.end.resolve(textDirection).withinRect(rect), this.colors, this[_impliedStops](), this.tileMode);
    }
    scale(factor) {
      return new src__painting__gradient.LinearGradient.new({begin: this.begin, end: this.end, colors: IterableOfColor()._check(this.colors[$map](ui$.Color, dart.fn(color => ui$.Color.lerp(null, color, factor), ColorToColor())))[$toList](), stops: this.stops, tileMode: this.tileMode});
    }
    toCssString() {
      let buffer = new core.StringBuffer.new();
      if (this.tileMode === ui$.TileMode.repeated) {
        buffer.write("repeating-");
      }
      buffer.write("linear-gradient(");
      let direction = this[_getDirectionCss]();
      if (direction != null) {
        buffer.write(direction);
        buffer.write(", ");
      }
      if (this.stops == null) {
        buffer.write(IterableOfString()._check(this.colors[$map](core.String, dart.fn(c => c.toCssString(), ColorToString())))[$join](", "));
      } else {
        if (this.colors[$length] != this.stops[$length]) {
          dart.throw(new core.ArgumentError.new("'colors' and 'stops' must be the same length."));
        }
        for (let i = 0; i < dart.notNull(this.colors[$length]); i++) {
          buffer.write(this.colors[$_get](i).toCssString());
          buffer.write(" ");
          buffer.write(dart.notNull(this.stops[$_get](i)) * 100);
          buffer.write("%");
          if (i !== dart.notNull(this.colors[$length]) - 1) {
            buffer.write(", ");
          }
        }
      }
      buffer.write(")");
      return buffer.toString();
    }
    [_getDirectionCss]() {
      if (dart.equals(this.begin, src__painting__alignment.Alignment.topCenter) && dart.equals(this.end, src__painting__alignment.Alignment.bottomCenter)) {
        return null;
      }
      if (dart.equals(this.begin, src__painting__alignment.Alignment.bottomCenter) && dart.equals(this.end, src__painting__alignment.Alignment.topCenter)) {
        return "to top";
      }
      if (dart.equals(this.begin, src__painting__alignment.Alignment.centerLeft) && dart.equals(this.end, src__painting__alignment.Alignment.centerRight)) {
        return "to right";
      }
      if (dart.equals(this.begin, src__painting__alignment.Alignment.centerRight) && dart.equals(this.end, src__painting__alignment.Alignment.centerLeft)) {
        return "to left";
      }
      if (dart.equals(this.begin, src__painting__alignment.Alignment.topLeft) && dart.equals(this.end, src__painting__alignment.Alignment.bottomRight)) {
        return "to bottom right";
      }
      if (dart.equals(this.begin, src__painting__alignment.Alignment.bottomLeft) && dart.equals(this.end, src__painting__alignment.Alignment.topRight)) {
        return "to top right";
      }
      if (dart.equals(this.begin, src__painting__alignment.Alignment.topRight) && dart.equals(this.end, src__painting__alignment.Alignment.bottomLeft)) {
        return "to bottom left";
      }
      if (dart.equals(this.begin, src__painting__alignment.Alignment.bottomRight) && dart.equals(this.end, src__painting__alignment.Alignment.topLeft)) {
        return "to top left";
      }
      let beginAlignment = src__painting__alignment.Alignment._check(this.begin);
      let endAlignment = src__painting__alignment.Alignment._check(this.end);
      let angle = math.atan2(dart.notNull(endAlignment.y) - dart.notNull(beginAlignment.y), dart.notNull(endAlignment.x) - dart.notNull(beginAlignment.x));
      return angle[$toStringAsFixed](4) + "rad";
    }
    lerpFrom(a, t) {
      if (a == null || src__painting__gradient.LinearGradient.is(a) && a.colors[$length] == this.colors[$length]) return src__painting__gradient.LinearGradient.lerp(src__painting__gradient.LinearGradient._check(a), this, t);
      return super.lerpFrom(a, t);
    }
    lerpTo(b, t) {
      if (b == null || src__painting__gradient.LinearGradient.is(b) && b.colors[$length] == this.colors[$length]) return src__painting__gradient.LinearGradient.lerp(this, src__painting__gradient.LinearGradient._check(b), t);
      return super.lerpTo(b, t);
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/gradient.dart", 464, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return b.scale(t);
      if (b == null) return a.scale(1.0 - dart.notNull(t));
      let interpolated = src__painting__gradient._interpolateColorsAndStops(a.colors, a.stops, b.colors, b.stops, t);
      return new src__painting__gradient.LinearGradient.new({begin: src__painting__alignment.AlignmentGeometry.lerp(a.begin, b.begin, t), end: src__painting__alignment.AlignmentGeometry.lerp(a.end, b.end, t), colors: interpolated.colors, stops: interpolated.stops, tileMode: dart.notNull(t) < 0.5 ? a.tileMode : b.tileMode});
    }
    get hashCode() {
      return ui$.hashValues(this.begin, this.end, this.tileMode, ui$.hashList(this.colors), ui$.hashList(this.stops));
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!src__painting__gradient.LinearGradient.is(other)) return false;
      let typedOther = src__painting__gradient.LinearGradient._check(other);
      if (!dart.equals(this.begin, typedOther.begin) || !dart.equals(this.end, typedOther.end) || this.tileMode != typedOther.tileMode || (this.colors == null ? null : this.colors[$length]) != (typedOther.colors == null ? null : typedOther.colors[$length]) || (this.stops == null ? null : this.stops[$length]) != (typedOther.stops == null ? null : typedOther.stops[$length])) return false;
      if (this.colors != null) {
        if (!(typedOther.colors != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/gradient.dart", 494, 14, "typedOther.colors != null");
        if (!(this.colors[$length] == typedOther.colors[$length])) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/gradient.dart", 495, 14, "colors.length == typedOther.colors.length");
        for (let i = 0; i < dart.notNull(this.colors[$length]); i = i + 1) {
          if (!dart.equals(this.colors[$_get](i), typedOther.colors[$_get](i))) return false;
        }
      }
      if (this.stops != null) {
        if (!(typedOther.stops != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/gradient.dart", 501, 14, "typedOther.stops != null");
        if (!(this.stops[$length] == typedOther.stops[$length])) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/gradient.dart", 502, 14, "stops.length == typedOther.stops.length");
        for (let i = 0; i < dart.notNull(this.stops[$length]); i = i + 1) {
          if (this.stops[$_get](i) != typedOther.stops[$_get](i)) return false;
        }
      }
      return true;
    }
    toString() {
      if (dart.test(src__util.assertionsEnabled)) {
        return "LinearGradient(" + dart.str(this.begin) + ", " + dart.str(this.end) + ", " + dart.str(this.colors) + ", " + dart.str(this.stops) + ", " + dart.str(this.tileMode) + ")";
      } else {
        return super.toString();
      }
    }
  };
  (src__painting__gradient.LinearGradient.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : src__painting__alignment.Alignment.centerLeft;
    let end = opts && 'end' in opts ? opts.end : src__painting__alignment.Alignment.centerRight;
    let colors = opts && 'colors' in opts ? opts.colors : null;
    let stops = opts && 'stops' in opts ? opts.stops : null;
    let tileMode = opts && 'tileMode' in opts ? opts.tileMode : ui$.TileMode.clamp;
    this[begin$] = begin;
    this[end$] = end;
    this[tileMode$] = tileMode;
    if (!(begin != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/gradient.dart", 276, 16, "begin != null");
    if (!(end != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/gradient.dart", 277, 16, "end != null");
    if (!(tileMode != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/gradient.dart", 278, 16, "tileMode != null");
    src__painting__gradient.LinearGradient.__proto__.new.call(this, {colors: colors, stops: stops});
  }).prototype = src__painting__gradient.LinearGradient.prototype;
  dart.addTypeTests(src__painting__gradient.LinearGradient);
  const begin$ = Symbol("LinearGradient.begin");
  const end$ = Symbol("LinearGradient.end");
  const tileMode$ = Symbol("LinearGradient.tileMode");
  dart.setMethodSignature(src__painting__gradient.LinearGradient, () => ({
    __proto__: dart.getMethods(src__painting__gradient.LinearGradient.__proto__),
    createShader: dart.fnType(ui$.Shader, [ui$.Rect], {textDirection: ui$.TextDirection}),
    scale: dart.fnType(src__painting__gradient.LinearGradient, [core.double]),
    toCssString: dart.fnType(core.String, []),
    [_getDirectionCss]: dart.fnType(core.String, [])
  }));
  dart.setLibraryUri(src__painting__gradient.LinearGradient, "package:flutter_web/src/painting/gradient.dart");
  dart.setFieldSignature(src__painting__gradient.LinearGradient, () => ({
    __proto__: dart.getFields(src__painting__gradient.LinearGradient.__proto__),
    begin: dart.finalFieldType(src__painting__alignment.AlignmentGeometry),
    end: dart.finalFieldType(src__painting__alignment.AlignmentGeometry),
    tileMode: dart.finalFieldType(ui$.TileMode)
  }));
  dart.defineExtensionMethods(src__painting__gradient.LinearGradient, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__painting__gradient.LinearGradient, ['hashCode']);
  src__painting__gradient.RadialGradient = class RadialGradient extends src__painting__gradient.Gradient {
    get center() {
      return this[center$];
    }
    set center(value) {
      super.center = value;
    }
    get radius() {
      return this[radius$];
    }
    set radius(value) {
      super.radius = value;
    }
    get tileMode() {
      return this[tileMode$0];
    }
    set tileMode(value) {
      super.tileMode = value;
    }
    scale(factor) {
      return new src__painting__gradient.RadialGradient.new({center: this.center, radius: this.radius, colors: IterableOfColor()._check(this.colors[$map](ui$.Color, dart.fn(color => ui$.Color.lerp(null, color, factor), ColorToColor())))[$toList](), stops: this.stops, tileMode: this.tileMode});
    }
    createShader(rect, opts) {
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      dart.throw(new core.UnimplementedError.new());
    }
    toCssString() {
      dart.throw(new core.UnimplementedError.new());
    }
    lerpFrom(a, t) {
      if (a == null || src__painting__gradient.RadialGradient.is(a) && a.colors[$length] == this.colors[$length]) return src__painting__gradient.RadialGradient.lerp(src__painting__gradient.RadialGradient._check(a), this, t);
      return super.lerpFrom(a, t);
    }
    lerpTo(b, t) {
      if (b == null || src__painting__gradient.RadialGradient.is(b) && b.colors[$length] == this.colors[$length]) return src__painting__gradient.RadialGradient.lerp(this, src__painting__gradient.RadialGradient._check(b), t);
      return super.lerpTo(b, t);
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/gradient.dart", 692, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return b.scale(t);
      if (b == null) return a.scale(1.0 - dart.notNull(t));
      let interpolated = src__painting__gradient._interpolateColorsAndStops(a.colors, a.stops, b.colors, b.stops, t);
      return new src__painting__gradient.RadialGradient.new({center: src__painting__alignment.AlignmentGeometry.lerp(a.center, b.center, t), radius: math.max(core.double, 0.0, ui$.lerpDouble(a.radius, b.radius, t)), colors: interpolated.colors, stops: interpolated.stops, tileMode: dart.notNull(t) < 0.5 ? a.tileMode : b.tileMode});
    }
    get hashCode() {
      return ui$.hashValues(this.center, this.radius, this.tileMode, ui$.hashList(this.colors), ui$.hashList(this.stops));
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!src__painting__gradient.RadialGradient.is(other)) return false;
      let typedOther = src__painting__gradient.RadialGradient._check(other);
      if (!dart.equals(this.center, typedOther.center) || this.radius != typedOther.radius || this.tileMode != typedOther.tileMode || (this.colors == null ? null : this.colors[$length]) != (typedOther.colors == null ? null : typedOther.colors[$length]) || (this.stops == null ? null : this.stops[$length]) != (typedOther.stops == null ? null : typedOther.stops[$length])) return false;
      if (this.colors != null) {
        if (!(typedOther.colors != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/gradient.dart", 722, 14, "typedOther.colors != null");
        if (!(this.colors[$length] == typedOther.colors[$length])) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/gradient.dart", 723, 14, "colors.length == typedOther.colors.length");
        for (let i = 0; i < dart.notNull(this.colors[$length]); i = i + 1) {
          if (!dart.equals(this.colors[$_get](i), typedOther.colors[$_get](i))) return false;
        }
      }
      if (this.stops != null) {
        if (!(typedOther.stops != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/gradient.dart", 729, 14, "typedOther.stops != null");
        if (!(this.stops[$length] == typedOther.stops[$length])) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/gradient.dart", 730, 14, "stops.length == typedOther.stops.length");
        for (let i = 0; i < dart.notNull(this.stops[$length]); i = i + 1) {
          if (this.stops[$_get](i) != typedOther.stops[$_get](i)) return false;
        }
      }
      return true;
    }
    toString() {
      if (dart.test(src__util.assertionsEnabled)) {
        return "RadialGradient(" + dart.str(this.center) + ", " + dart.str(this.radius) + ", " + dart.str(this.colors) + ", " + dart.str(this.stops) + ", " + dart.str(this.tileMode) + ")";
      } else {
        return super.toString();
      }
    }
  };
  (src__painting__gradient.RadialGradient.new = function(opts) {
    let center = opts && 'center' in opts ? opts.center : src__painting__alignment.Alignment.center;
    let radius = opts && 'radius' in opts ? opts.radius : 0.5;
    let colors = opts && 'colors' in opts ? opts.colors : null;
    let stops = opts && 'stops' in opts ? opts.stops : null;
    let tileMode = opts && 'tileMode' in opts ? opts.tileMode : ui$.TileMode.clamp;
    this[center$] = center;
    this[radius$] = radius;
    this[tileMode$0] = tileMode;
    if (!(center != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/gradient.dart", 586, 16, "center != null");
    if (!(radius != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/gradient.dart", 587, 16, "radius != null");
    if (!(tileMode != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/gradient.dart", 588, 16, "tileMode != null");
    src__painting__gradient.RadialGradient.__proto__.new.call(this, {colors: colors, stops: stops});
  }).prototype = src__painting__gradient.RadialGradient.prototype;
  dart.addTypeTests(src__painting__gradient.RadialGradient);
  const center$ = Symbol("RadialGradient.center");
  const radius$ = Symbol("RadialGradient.radius");
  const tileMode$0 = Symbol("RadialGradient.tileMode");
  dart.setMethodSignature(src__painting__gradient.RadialGradient, () => ({
    __proto__: dart.getMethods(src__painting__gradient.RadialGradient.__proto__),
    scale: dart.fnType(src__painting__gradient.RadialGradient, [core.double]),
    createShader: dart.fnType(ui$.Shader, [ui$.Rect], {textDirection: ui$.TextDirection}),
    toCssString: dart.fnType(core.String, [])
  }));
  dart.setLibraryUri(src__painting__gradient.RadialGradient, "package:flutter_web/src/painting/gradient.dart");
  dart.setFieldSignature(src__painting__gradient.RadialGradient, () => ({
    __proto__: dart.getFields(src__painting__gradient.RadialGradient.__proto__),
    center: dart.finalFieldType(src__painting__alignment.AlignmentGeometry),
    radius: dart.finalFieldType(core.double),
    tileMode: dart.finalFieldType(ui$.TileMode)
  }));
  dart.defineExtensionMethods(src__painting__gradient.RadialGradient, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__painting__gradient.RadialGradient, ['hashCode']);
  const _clipAndPaint = dart.privateName(src__painting__clip, "_clipAndPaint");
  src__painting__clip.ClipContext = class ClipContext extends core.Object {
    [_clipAndPaint](canvasClipCall, clipBehavior, bounds, painter) {
      if (!(canvasClipCall != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/clip.dart", 14, 12, "canvasClipCall != null");
      this.canvas.save();
      switch (clipBehavior) {
        case ui$.Clip.none:
        {
          break;
        }
        case ui$.Clip.hardEdge:
        {
          canvasClipCall(false);
          break;
        }
        case ui$.Clip.antiAlias:
        {
          canvasClipCall(true);
          break;
        }
        case ui$.Clip.antiAliasWithSaveLayer:
        {
          canvasClipCall(true);
          this.canvas.saveLayer(bounds, new ui$.Paint.new());
          break;
        }
      }
      painter();
      if (clipBehavior === ui$.Clip.antiAliasWithSaveLayer) {
        this.canvas.restore();
      }
      this.canvas.restore();
    }
    clipPathAndPaint(path, clipBehavior, bounds, painter) {
      this[_clipAndPaint](dart.fn(doAntiAias => this.canvas.clipPath(path, {doAntiAlias: doAntiAias}), boolTovoid()), clipBehavior, bounds, painter);
    }
    clipRRectAndPaint(rrect, clipBehavior, bounds, painter) {
      this[_clipAndPaint](dart.fn(doAntiAias => this.canvas.clipRRect(rrect, {doAntiAlias: doAntiAias}), boolTovoid()), clipBehavior, bounds, painter);
    }
    clipRectAndPaint(rect, clipBehavior, bounds, painter) {
      this[_clipAndPaint](dart.fn(doAntiAias => this.canvas.clipRect(rect, {doAntiAlias: doAntiAias}), boolTovoid()), clipBehavior, bounds, painter);
    }
  };
  (src__painting__clip.ClipContext.new = function() {
  }).prototype = src__painting__clip.ClipContext.prototype;
  dart.addTypeTests(src__painting__clip.ClipContext);
  dart.setMethodSignature(src__painting__clip.ClipContext, () => ({
    __proto__: dart.getMethods(src__painting__clip.ClipContext.__proto__),
    [_clipAndPaint]: dart.fnType(dart.void, [dart.fnType(dart.void, [core.bool]), ui$.Clip, ui$.Rect, dart.fnType(dart.void, [])]),
    clipPathAndPaint: dart.fnType(dart.void, [ui$.Path, ui$.Clip, ui$.Rect, dart.fnType(dart.void, [])]),
    clipRRectAndPaint: dart.fnType(dart.void, [ui$.RRect, ui$.Clip, ui$.Rect, dart.fnType(dart.void, [])]),
    clipRectAndPaint: dart.fnType(dart.void, [ui$.Rect, ui$.Clip, ui$.Rect, dart.fnType(dart.void, [])])
  }));
  dart.setLibraryUri(src__painting__clip.ClipContext, "package:flutter_web/src/painting/clip.dart");
  src__painting__colors._getHue = function(red, green, blue, max, delta) {
    let hue = null;
    if (max === 0.0) {
      hue = 0.0;
    } else if (max == red) {
      hue = 60.0 * ((dart.notNull(green) - dart.notNull(blue)) / dart.notNull(delta))[$modulo](6);
    } else if (max == green) {
      hue = 60.0 * ((dart.notNull(blue) - dart.notNull(red)) / dart.notNull(delta) + 2);
    } else if (max == blue) {
      hue = 60.0 * ((dart.notNull(red) - dart.notNull(green)) / dart.notNull(delta) + 4);
    }
    hue = hue[$isNaN] ? 0.0 : hue;
    return hue;
  };
  src__painting__colors._colorFromHue = function(alpha, hue, chroma, secondary, match) {
    let red = null;
    let green = null;
    let blue = null;
    if (dart.notNull(hue) < 60.0) {
      red = chroma;
      green = secondary;
      blue = 0.0;
    } else if (dart.notNull(hue) < 120.0) {
      red = secondary;
      green = chroma;
      blue = 0.0;
    } else if (dart.notNull(hue) < 180.0) {
      red = 0.0;
      green = chroma;
      blue = secondary;
    } else if (dart.notNull(hue) < 240.0) {
      red = 0.0;
      green = secondary;
      blue = chroma;
    } else if (dart.notNull(hue) < 300.0) {
      red = secondary;
      green = 0.0;
      blue = chroma;
    } else {
      red = chroma;
      green = 0.0;
      blue = secondary;
    }
    return new ui$.Color.fromARGB((dart.notNull(alpha) * 255)[$round](), ((dart.notNull(red) + dart.notNull(match)) * 255)[$round](), ((dart.notNull(green) + dart.notNull(match)) * 255)[$round](), ((dart.notNull(blue) + dart.notNull(match)) * 255)[$round]());
  };
  const _scaleAlpha = dart.privateName(src__painting__colors, "_scaleAlpha");
  src__painting__colors.HSVColor = class HSVColor extends core.Object {
    static fromColor(color) {
      let red = dart.notNull(color.red) / 255;
      let green = dart.notNull(color.green) / 255;
      let blue = dart.notNull(color.blue) / 255;
      let max = math.max(core.double, red, math.max(core.double, green, blue));
      let min = math.min(core.double, red, math.min(core.double, green, blue));
      let delta = max - min;
      let alpha = dart.notNull(color.alpha) / 255;
      let hue = src__painting__colors._getHue(red, green, blue, max, delta);
      let saturation = max === 0.0 ? 0.0 : delta / max;
      return new src__painting__colors.HSVColor.fromAHSV(alpha, hue, saturation, max);
    }
    get alpha() {
      return this[alpha$];
    }
    set alpha(value) {
      super.alpha = value;
    }
    get hue() {
      return this[hue$];
    }
    set hue(value) {
      super.hue = value;
    }
    get saturation() {
      return this[saturation$];
    }
    set saturation(value) {
      super.saturation = value;
    }
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    withAlpha(alpha) {
      return new src__painting__colors.HSVColor.fromAHSV(alpha, this.hue, this.saturation, this.value);
    }
    withHue(hue) {
      return new src__painting__colors.HSVColor.fromAHSV(this.alpha, hue, this.saturation, this.value);
    }
    withSaturation(saturation) {
      return new src__painting__colors.HSVColor.fromAHSV(this.alpha, this.hue, saturation, this.value);
    }
    withValue(value) {
      return new src__painting__colors.HSVColor.fromAHSV(this.alpha, this.hue, this.saturation, value);
    }
    toColor() {
      let chroma = dart.notNull(this.saturation) * dart.notNull(this.value);
      let secondary = chroma * (1.0 - ((dart.notNull(this.hue) / 60.0)[$modulo](2.0) - 1.0)[$abs]());
      let match = dart.notNull(this.value) - chroma;
      return src__painting__colors._colorFromHue(this.alpha, this.hue, chroma, secondary, match);
    }
    [_scaleAlpha](factor) {
      return this.withAlpha(dart.notNull(this.alpha) * dart.notNull(factor));
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/colors.dart", 204, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return b[_scaleAlpha](t);
      if (b == null) return a[_scaleAlpha](1.0 - dart.notNull(t));
      return new src__painting__colors.HSVColor.fromAHSV(ui$.lerpDouble(a.alpha, b.alpha, t)[$clamp](0.0, 1.0), ui$.lerpDouble(a.hue, b.hue, t)[$modulo](360.0), ui$.lerpDouble(a.saturation, b.saturation, t)[$clamp](0.0, 1.0), ui$.lerpDouble(a.value, b.value, t)[$clamp](0.0, 1.0));
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!src__painting__colors.HSVColor.is(other)) return false;
      let typedOther = src__painting__colors.HSVColor._check(other);
      return typedOther.alpha == this.alpha && typedOther.hue == this.hue && typedOther.saturation == this.saturation && typedOther.value == this.value;
    }
    get hashCode() {
      return ui$.hashValues(this.alpha, this.hue, this.saturation, this.value);
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.alpha) + ", " + dart.str(this.hue) + ", " + dart.str(this.saturation) + ", " + dart.str(this.value) + ")";
    }
  };
  (src__painting__colors.HSVColor.fromAHSV = function(alpha, hue, saturation, value) {
    this[alpha$] = alpha;
    this[hue$] = hue;
    this[saturation$] = saturation;
    this[value$] = value;
    if (!(alpha != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/colors.dart", 94, 16, "alpha != null");
    if (!(hue != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/colors.dart", 95, 16, "hue != null");
    if (!(saturation != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/colors.dart", 96, 16, "saturation != null");
    if (!(value != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/colors.dart", 97, 16, "value != null");
    if (!(dart.notNull(alpha) >= 0.0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/colors.dart", 98, 16, "alpha >= 0.0");
    if (!(dart.notNull(alpha) <= 1.0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/colors.dart", 99, 16, "alpha <= 1.0");
    if (!(dart.notNull(hue) >= 0.0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/colors.dart", 100, 16, "hue >= 0.0");
    if (!(dart.notNull(hue) <= 360.0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/colors.dart", 101, 16, "hue <= 360.0");
    if (!(dart.notNull(saturation) >= 0.0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/colors.dart", 102, 16, "saturation >= 0.0");
    if (!(dart.notNull(saturation) <= 1.0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/colors.dart", 103, 16, "saturation <= 1.0");
    if (!(dart.notNull(value) >= 0.0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/colors.dart", 104, 16, "value >= 0.0");
    if (!(dart.notNull(value) <= 1.0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/colors.dart", 105, 16, "value <= 1.0");
  }).prototype = src__painting__colors.HSVColor.prototype;
  dart.addTypeTests(src__painting__colors.HSVColor);
  const alpha$ = Symbol("HSVColor.alpha");
  const hue$ = Symbol("HSVColor.hue");
  const saturation$ = Symbol("HSVColor.saturation");
  const value$ = Symbol("HSVColor.value");
  dart.setMethodSignature(src__painting__colors.HSVColor, () => ({
    __proto__: dart.getMethods(src__painting__colors.HSVColor.__proto__),
    withAlpha: dart.fnType(src__painting__colors.HSVColor, [core.double]),
    withHue: dart.fnType(src__painting__colors.HSVColor, [core.double]),
    withSaturation: dart.fnType(src__painting__colors.HSVColor, [core.double]),
    withValue: dart.fnType(src__painting__colors.HSVColor, [core.double]),
    toColor: dart.fnType(ui$.Color, []),
    [_scaleAlpha]: dart.fnType(src__painting__colors.HSVColor, [core.double])
  }));
  dart.setLibraryUri(src__painting__colors.HSVColor, "package:flutter_web/src/painting/colors.dart");
  dart.setFieldSignature(src__painting__colors.HSVColor, () => ({
    __proto__: dart.getFields(src__painting__colors.HSVColor.__proto__),
    alpha: dart.finalFieldType(core.double),
    hue: dart.finalFieldType(core.double),
    saturation: dart.finalFieldType(core.double),
    value: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(src__painting__colors.HSVColor, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__painting__colors.HSVColor, ['hashCode']);
  src__painting__colors.HSLColor = class HSLColor extends core.Object {
    static fromColor(color) {
      let red = dart.notNull(color.red) / 255;
      let green = dart.notNull(color.green) / 255;
      let blue = dart.notNull(color.blue) / 255;
      let max = math.max(core.double, red, math.max(core.double, green, blue));
      let min = math.min(core.double, red, math.min(core.double, green, blue));
      let delta = max - min;
      let alpha = dart.notNull(color.alpha) / 255;
      let hue = src__painting__colors._getHue(red, green, blue, max, delta);
      let lightness = (max + min) / 2.0;
      let saturation = lightness === 1.0 ? 0.0 : (delta / (1.0 - (2.0 * lightness - 1.0)[$abs]()))[$clamp](0.0, 1.0);
      return new src__painting__colors.HSLColor.fromAHSL(alpha, hue, saturation, lightness);
    }
    get alpha() {
      return this[alpha$0];
    }
    set alpha(value) {
      super.alpha = value;
    }
    get hue() {
      return this[hue$0];
    }
    set hue(value) {
      super.hue = value;
    }
    get saturation() {
      return this[saturation$0];
    }
    set saturation(value) {
      super.saturation = value;
    }
    get lightness() {
      return this[lightness$];
    }
    set lightness(value) {
      super.lightness = value;
    }
    withAlpha(alpha) {
      return new src__painting__colors.HSLColor.fromAHSL(alpha, this.hue, this.saturation, this.lightness);
    }
    withHue(hue) {
      return new src__painting__colors.HSLColor.fromAHSL(this.alpha, hue, this.saturation, this.lightness);
    }
    withSaturation(saturation) {
      return new src__painting__colors.HSLColor.fromAHSL(this.alpha, this.hue, saturation, this.lightness);
    }
    withLightness(lightness) {
      return new src__painting__colors.HSLColor.fromAHSL(this.alpha, this.hue, this.saturation, lightness);
    }
    toColor() {
      let chroma = (1.0 - (2.0 * dart.notNull(this.lightness) - 1.0)[$abs]()) * dart.notNull(this.saturation);
      let secondary = chroma * (1.0 - ((dart.notNull(this.hue) / 60.0)[$modulo](2.0) - 1.0)[$abs]());
      let match = dart.notNull(this.lightness) - chroma / 2.0;
      return src__painting__colors._colorFromHue(this.alpha, this.hue, chroma, secondary, match);
    }
    [_scaleAlpha](factor) {
      return this.withAlpha(dart.notNull(this.alpha) * dart.notNull(factor));
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/colors.dart", 386, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return b[_scaleAlpha](t);
      if (b == null) return a[_scaleAlpha](1.0 - dart.notNull(t));
      return new src__painting__colors.HSLColor.fromAHSL(ui$.lerpDouble(a.alpha, b.alpha, t)[$clamp](0.0, 1.0), ui$.lerpDouble(a.hue, b.hue, t)[$modulo](360.0), ui$.lerpDouble(a.saturation, b.saturation, t)[$clamp](0.0, 1.0), ui$.lerpDouble(a.lightness, b.lightness, t)[$clamp](0.0, 1.0));
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!src__painting__colors.HSLColor.is(other)) return false;
      let typedOther = src__painting__colors.HSLColor._check(other);
      return typedOther.alpha == this.alpha && typedOther.hue == this.hue && typedOther.saturation == this.saturation && typedOther.lightness == this.lightness;
    }
    get hashCode() {
      return ui$.hashValues(this.alpha, this.hue, this.saturation, this.lightness);
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.alpha) + ", " + dart.str(this.hue) + ", " + dart.str(this.saturation) + ", " + dart.str(this.lightness) + ")";
    }
  };
  (src__painting__colors.HSLColor.fromAHSL = function(alpha, hue, saturation, lightness) {
    this[alpha$0] = alpha;
    this[hue$0] = hue;
    this[saturation$0] = saturation;
    this[lightness$] = lightness;
    if (!(alpha != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/colors.dart", 261, 16, "alpha != null");
    if (!(hue != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/colors.dart", 262, 16, "hue != null");
    if (!(saturation != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/colors.dart", 263, 16, "saturation != null");
    if (!(lightness != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/colors.dart", 264, 16, "lightness != null");
    if (!(dart.notNull(alpha) >= 0.0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/colors.dart", 265, 16, "alpha >= 0.0");
    if (!(dart.notNull(alpha) <= 1.0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/colors.dart", 266, 16, "alpha <= 1.0");
    if (!(dart.notNull(hue) >= 0.0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/colors.dart", 267, 16, "hue >= 0.0");
    if (!(dart.notNull(hue) <= 360.0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/colors.dart", 268, 16, "hue <= 360.0");
    if (!(dart.notNull(saturation) >= 0.0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/colors.dart", 269, 16, "saturation >= 0.0");
    if (!(dart.notNull(saturation) <= 1.0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/colors.dart", 270, 16, "saturation <= 1.0");
    if (!(dart.notNull(lightness) >= 0.0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/colors.dart", 271, 16, "lightness >= 0.0");
    if (!(dart.notNull(lightness) <= 1.0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/colors.dart", 272, 16, "lightness <= 1.0");
  }).prototype = src__painting__colors.HSLColor.prototype;
  dart.addTypeTests(src__painting__colors.HSLColor);
  const alpha$0 = Symbol("HSLColor.alpha");
  const hue$0 = Symbol("HSLColor.hue");
  const saturation$0 = Symbol("HSLColor.saturation");
  const lightness$ = Symbol("HSLColor.lightness");
  dart.setMethodSignature(src__painting__colors.HSLColor, () => ({
    __proto__: dart.getMethods(src__painting__colors.HSLColor.__proto__),
    withAlpha: dart.fnType(src__painting__colors.HSLColor, [core.double]),
    withHue: dart.fnType(src__painting__colors.HSLColor, [core.double]),
    withSaturation: dart.fnType(src__painting__colors.HSLColor, [core.double]),
    withLightness: dart.fnType(src__painting__colors.HSLColor, [core.double]),
    toColor: dart.fnType(ui$.Color, []),
    [_scaleAlpha]: dart.fnType(src__painting__colors.HSLColor, [core.double])
  }));
  dart.setLibraryUri(src__painting__colors.HSLColor, "package:flutter_web/src/painting/colors.dart");
  dart.setFieldSignature(src__painting__colors.HSLColor, () => ({
    __proto__: dart.getFields(src__painting__colors.HSLColor.__proto__),
    alpha: dart.finalFieldType(core.double),
    hue: dart.finalFieldType(core.double),
    saturation: dart.finalFieldType(core.double),
    lightness: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(src__painting__colors.HSLColor, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__painting__colors.HSLColor, ['hashCode']);
  const _swatch = dart.privateName(src__painting__colors, "_swatch");
  const _is_ColorSwatch_default = Symbol('_is_ColorSwatch_default');
  src__painting__colors.ColorSwatch$ = dart.generic(T => {
    let ColorSwatchOfT = () => (ColorSwatchOfT = dart.constFn(src__painting__colors.ColorSwatch$(T)))();
    let MapOfT$Color = () => (MapOfT$Color = dart.constFn(core.Map$(T, ui$.Color)))();
    class ColorSwatch extends ui$.Color {
      _get(index) {
        T._check(index);
        return this[_swatch][$_get](index);
      }
      _equals(other) {
        if (other == null) return false;
        if (this === other) return true;
        if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
        let typedOther = ColorSwatchOfT()._check(other);
        return super._equals(other) && dart.equals(this[_swatch], typedOther[_swatch]);
      }
      get hashCode() {
        return ui$.hashValues(this[$runtimeType], this.value, this[_swatch]);
      }
      toString() {
        return dart.str(this[$runtimeType]) + "(primary value: " + dart.str(super.toString()) + ")";
      }
    }
    (ColorSwatch.new = function(primary, swatch) {
      this[_swatch] = swatch;
      ColorSwatch.__proto__.new.call(this, primary);
    }).prototype = ColorSwatch.prototype;
    dart.addTypeTests(ColorSwatch);
    ColorSwatch.prototype[_is_ColorSwatch_default] = true;
    dart.setMethodSignature(ColorSwatch, () => ({
      __proto__: dart.getMethods(ColorSwatch.__proto__),
      _get: dart.fnType(ui$.Color, [core.Object]),
      _equals: dart.fnType(core.bool, [dart.dynamic]),
      [$_equals]: dart.fnType(core.bool, [dart.dynamic]),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, [])
    }));
    dart.setGetterSignature(ColorSwatch, () => ({
      __proto__: dart.getGetters(ColorSwatch.__proto__),
      hashCode: core.int,
      [$hashCode]: core.int
    }));
    dart.setLibraryUri(ColorSwatch, "package:flutter_web/src/painting/colors.dart");
    dart.setFieldSignature(ColorSwatch, () => ({
      __proto__: dart.getFields(ColorSwatch.__proto__),
      [_swatch]: dart.finalFieldType(MapOfT$Color())
    }));
    dart.defineExtensionMethods(ColorSwatch, ['_equals', 'toString']);
    dart.defineExtensionAccessors(ColorSwatch, ['hashCode']);
    return ColorSwatch;
  });
  src__painting__colors.ColorSwatch = src__painting__colors.ColorSwatch$();
  dart.addTypeTests(src__painting__colors.ColorSwatch, _is_ColorSwatch_default);
  dart.defineLazy(src__painting__text_style, {
    /*src__painting__text_style._kDefaultDebugLabel*/get _kDefaultDebugLabel() {
      return "unknown";
    },
    /*src__painting__text_style._kColorForegroundWarning*/get _kColorForegroundWarning() {
      return "Cannot provide both a color and a foreground\n" + "The color argument is just a shorthand for \"foreground: new Paint()..color = color\".";
    },
    /*src__painting__text_style._kColorBackgroundWarning*/get _kColorBackgroundWarning() {
      return "Cannot provide both a backgroundColor and a background\n" + "The backgroundColor argument is just a shorthand for \"background: new Paint()..color = color\".";
    }
  });
  const _fontFamilyFallback = dart.privateName(src__painting__text_style, "_fontFamilyFallback");
  const _package = dart.privateName(src__painting__text_style, "_package");
  src__painting__text_style.TextStyle = class TextStyle extends src__foundation__diagnostics.Diagnosticable {
    get inherit() {
      return this[inherit$];
    }
    set inherit(value) {
      super.inherit = value;
    }
    get color() {
      return this[color$0];
    }
    set color(value) {
      super.color = value;
    }
    get backgroundColor() {
      return this[backgroundColor$];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get fontFamily() {
      return this[fontFamily$];
    }
    set fontFamily(value) {
      super.fontFamily = value;
    }
    get fontFamilyFallback() {
      return this[_package] != null && this[_fontFamilyFallback] != null ? IterableOfString()._check(this[_fontFamilyFallback][$map](core.String, dart.fn(str => "packages/" + dart.str(this[_package]) + "/" + dart.str(str), StringToString())))[$toList]() : this[_fontFamilyFallback];
    }
    get fontSize() {
      return this[fontSize$];
    }
    set fontSize(value) {
      super.fontSize = value;
    }
    get fontWeight() {
      return this[fontWeight$];
    }
    set fontWeight(value) {
      super.fontWeight = value;
    }
    get fontStyle() {
      return this[fontStyle$];
    }
    set fontStyle(value) {
      super.fontStyle = value;
    }
    get letterSpacing() {
      return this[letterSpacing$];
    }
    set letterSpacing(value) {
      super.letterSpacing = value;
    }
    get wordSpacing() {
      return this[wordSpacing$];
    }
    set wordSpacing(value) {
      super.wordSpacing = value;
    }
    get textBaseline() {
      return this[textBaseline$];
    }
    set textBaseline(value) {
      super.textBaseline = value;
    }
    get height() {
      return this[height$];
    }
    set height(value) {
      super.height = value;
    }
    get locale() {
      return this[locale$0];
    }
    set locale(value) {
      super.locale = value;
    }
    get foreground() {
      return this[foreground$];
    }
    set foreground(value) {
      super.foreground = value;
    }
    get background() {
      return this[background$];
    }
    set background(value) {
      super.background = value;
    }
    get decoration() {
      return this[decoration$];
    }
    set decoration(value) {
      super.decoration = value;
    }
    get decorationColor() {
      return this[decorationColor$];
    }
    set decorationColor(value) {
      super.decorationColor = value;
    }
    get decorationStyle() {
      return this[decorationStyle$];
    }
    set decorationStyle(value) {
      super.decorationStyle = value;
    }
    get decorationThickness() {
      return this[decorationThickness$];
    }
    set decorationThickness(value) {
      super.decorationThickness = value;
    }
    get debugLabel() {
      return this[debugLabel$];
    }
    set debugLabel(value) {
      super.debugLabel = value;
    }
    get shadows() {
      return this[shadows$];
    }
    set shadows(value) {
      super.shadows = value;
    }
    copyWith(opts) {
      let inherit = opts && 'inherit' in opts ? opts.inherit : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
      let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
      let fontFamilyFallback = opts && 'fontFamilyFallback' in opts ? opts.fontFamilyFallback : null;
      let fontSize = opts && 'fontSize' in opts ? opts.fontSize : null;
      let fontWeight = opts && 'fontWeight' in opts ? opts.fontWeight : null;
      let fontStyle = opts && 'fontStyle' in opts ? opts.fontStyle : null;
      let letterSpacing = opts && 'letterSpacing' in opts ? opts.letterSpacing : null;
      let wordSpacing = opts && 'wordSpacing' in opts ? opts.wordSpacing : null;
      let textBaseline = opts && 'textBaseline' in opts ? opts.textBaseline : null;
      let height = opts && 'height' in opts ? opts.height : null;
      let locale = opts && 'locale' in opts ? opts.locale : null;
      let foreground = opts && 'foreground' in opts ? opts.foreground : null;
      let background = opts && 'background' in opts ? opts.background : null;
      let shadows = opts && 'shadows' in opts ? opts.shadows : null;
      let decoration = opts && 'decoration' in opts ? opts.decoration : null;
      let decorationColor = opts && 'decorationColor' in opts ? opts.decorationColor : null;
      let decorationStyle = opts && 'decorationStyle' in opts ? opts.decorationStyle : null;
      let decorationThickness = opts && 'decorationThickness' in opts ? opts.decorationThickness : null;
      let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
      if (!(color == null || foreground == null)) dart.assertFailed("Cannot provide both a color and a foreground\nThe color argument is just a shorthand for \"foreground: new Paint()..color = color\".", "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_style.dart", 607, 12, "color == null || foreground == null");
      if (!(backgroundColor == null || background == null)) dart.assertFailed("Cannot provide both a backgroundColor and a background\nThe backgroundColor argument is just a shorthand for \"background: new Paint()..color = color\".", "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_style.dart", 608, 12, "backgroundColor == null || background == null");
      let newDebugLabel = null;
      if (!dart.test(dart.fn(() => {
        if (this.debugLabel != null) {
          newDebugLabel = debugLabel != null ? debugLabel : "(" + dart.str(this.debugLabel) + ").copyWith";
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_style.dart", 611, 12, "() {if (this.debugLabel != null) newDebugLabel = debugLabel ?? '(${this.debugLabel}).copyWith'; return true;}()");
      return new src__painting__text_style.TextStyle.new({inherit: inherit != null ? inherit : this.inherit, color: this.foreground == null && foreground == null ? color != null ? color : this.color : null, backgroundColor: this.background == null && background == null ? backgroundColor != null ? backgroundColor : this.backgroundColor : null, fontFamily: fontFamily != null ? fontFamily : this.fontFamily, fontFamilyFallback: fontFamilyFallback != null ? fontFamilyFallback : this.fontFamilyFallback, fontSize: fontSize != null ? fontSize : this.fontSize, fontWeight: fontWeight != null ? fontWeight : this.fontWeight, fontStyle: fontStyle != null ? fontStyle : this.fontStyle, letterSpacing: letterSpacing != null ? letterSpacing : this.letterSpacing, wordSpacing: wordSpacing != null ? wordSpacing : this.wordSpacing, textBaseline: textBaseline != null ? textBaseline : this.textBaseline, height: height != null ? height : this.height, locale: locale != null ? locale : this.locale, foreground: foreground != null ? foreground : this.foreground, background: background != null ? background : this.background, shadows: shadows != null ? shadows : this.shadows, decoration: decoration != null ? decoration : this.decoration, decorationColor: decorationColor != null ? decorationColor : this.decorationColor, decorationStyle: decorationStyle != null ? decorationStyle : this.decorationStyle, decorationThickness: decorationThickness != null ? decorationThickness : this.decorationThickness, debugLabel: newDebugLabel});
    }
    apply(opts) {
      let color = opts && 'color' in opts ? opts.color : null;
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
      let decoration = opts && 'decoration' in opts ? opts.decoration : null;
      let decorationColor = opts && 'decorationColor' in opts ? opts.decorationColor : null;
      let decorationStyle = opts && 'decorationStyle' in opts ? opts.decorationStyle : null;
      let decorationThicknessFactor = opts && 'decorationThicknessFactor' in opts ? opts.decorationThicknessFactor : 1.0;
      let decorationThicknessDelta = opts && 'decorationThicknessDelta' in opts ? opts.decorationThicknessDelta : 0.0;
      let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
      let fontFamilyFallback = opts && 'fontFamilyFallback' in opts ? opts.fontFamilyFallback : null;
      let fontSizeFactor = opts && 'fontSizeFactor' in opts ? opts.fontSizeFactor : 1.0;
      let fontSizeDelta = opts && 'fontSizeDelta' in opts ? opts.fontSizeDelta : 0.0;
      let fontWeightDelta = opts && 'fontWeightDelta' in opts ? opts.fontWeightDelta : 0;
      let letterSpacingFactor = opts && 'letterSpacingFactor' in opts ? opts.letterSpacingFactor : 1.0;
      let letterSpacingDelta = opts && 'letterSpacingDelta' in opts ? opts.letterSpacingDelta : 0.0;
      let wordSpacingFactor = opts && 'wordSpacingFactor' in opts ? opts.wordSpacingFactor : 1.0;
      let wordSpacingDelta = opts && 'wordSpacingDelta' in opts ? opts.wordSpacingDelta : 0.0;
      let heightFactor = opts && 'heightFactor' in opts ? opts.heightFactor : 1.0;
      let heightDelta = opts && 'heightDelta' in opts ? opts.heightDelta : 0.0;
      if (!(fontSizeFactor != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_style.dart", 694, 12, "fontSizeFactor != null");
      if (!(fontSizeDelta != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_style.dart", 695, 12, "fontSizeDelta != null");
      if (!(this.fontSize != null || fontSizeFactor === 1.0 && fontSizeDelta === 0.0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_style.dart", 696, 12, "fontSize != null || (fontSizeFactor == 1.0 && fontSizeDelta == 0.0)");
      if (!(fontWeightDelta != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_style.dart", 697, 12, "fontWeightDelta != null");
      if (!(this.fontWeight != null || fontWeightDelta === 0.0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_style.dart", 698, 12, "fontWeight != null || fontWeightDelta == 0.0");
      if (!(letterSpacingFactor != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_style.dart", 699, 12, "letterSpacingFactor != null");
      if (!(letterSpacingDelta != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_style.dart", 700, 12, "letterSpacingDelta != null");
      if (!(this.letterSpacing != null || letterSpacingFactor === 1.0 && letterSpacingDelta === 0.0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_style.dart", 701, 12, "letterSpacing != null || (letterSpacingFactor == 1.0 && letterSpacingDelta == 0.0)");
      if (!(wordSpacingFactor != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_style.dart", 703, 12, "wordSpacingFactor != null");
      if (!(wordSpacingDelta != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_style.dart", 704, 12, "wordSpacingDelta != null");
      if (!(this.wordSpacing != null || wordSpacingFactor === 1.0 && wordSpacingDelta === 0.0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_style.dart", 705, 12, "wordSpacing != null || (wordSpacingFactor == 1.0 && wordSpacingDelta == 0.0)");
      if (!(heightFactor != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_style.dart", 707, 12, "heightFactor != null");
      if (!(heightDelta != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_style.dart", 708, 12, "heightDelta != null");
      if (!(heightFactor != null || heightFactor === 1.0 && heightDelta === 0.0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_style.dart", 709, 12, "heightFactor != null || (heightFactor == 1.0 && heightDelta == 0.0)");
      if (!(decorationThicknessFactor != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_style.dart", 710, 12, "decorationThicknessFactor != null");
      if (!(decorationThicknessDelta != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_style.dart", 711, 12, "decorationThicknessDelta != null");
      if (!(this.decorationThickness != null || decorationThicknessFactor === 1.0 && decorationThicknessDelta === 0.0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_style.dart", 712, 12, "decorationThickness != null || (decorationThicknessFactor == 1.0 && decorationThicknessDelta == 0.0)");
      let modifiedDebugLabel = null;
      if (!dart.test(dart.fn(() => {
        if (this.debugLabel != null) modifiedDebugLabel = "(" + dart.str(this.debugLabel) + ").apply";
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_style.dart", 716, 12, "() {if (debugLabel != null) modifiedDebugLabel = '($debugLabel).apply'; return true;}()");
      return new src__painting__text_style.TextStyle.new({inherit: this.inherit, color: this.foreground == null ? color != null ? color : this.color : null, backgroundColor: this.background == null ? backgroundColor != null ? backgroundColor : this.backgroundColor : null, fontFamily: fontFamily != null ? fontFamily : this.fontFamily, fontFamilyFallback: fontFamilyFallback != null ? fontFamilyFallback : this.fontFamilyFallback, fontSize: this.fontSize == null ? null : dart.notNull(this.fontSize) * dart.notNull(fontSizeFactor) + dart.notNull(fontSizeDelta), fontWeight: this.fontWeight == null ? null : ui$.FontWeight.values[$_get](dart.asInt((dart.notNull(this.fontWeight.index) + dart.notNull(fontWeightDelta))[$clamp](0, dart.notNull(ui$.FontWeight.values[$length]) - 1))), fontStyle: this.fontStyle, letterSpacing: this.letterSpacing == null ? null : dart.notNull(this.letterSpacing) * dart.notNull(letterSpacingFactor) + dart.notNull(letterSpacingDelta), wordSpacing: this.wordSpacing == null ? null : dart.notNull(this.wordSpacing) * dart.notNull(wordSpacingFactor) + dart.notNull(wordSpacingDelta), textBaseline: this.textBaseline, height: this.height == null ? null : dart.notNull(this.height) * dart.notNull(heightFactor) + dart.notNull(heightDelta), locale: this.locale, foreground: this.foreground, background: this.background, shadows: this.shadows, decoration: decoration != null ? decoration : this.decoration, decorationColor: decorationColor != null ? decorationColor : this.decorationColor, decorationStyle: decorationStyle != null ? decorationStyle : this.decorationStyle, decorationThickness: this.decorationThickness == null ? null : dart.notNull(this.decorationThickness) * dart.notNull(decorationThicknessFactor) + dart.notNull(decorationThicknessDelta), debugLabel: modifiedDebugLabel});
    }
    merge(other) {
      if (other == null) return this;
      if (!dart.test(other.inherit)) return other;
      let mergedDebugLabel = null;
      if (!dart.test(dart.fn(() => {
        if (other.debugLabel != null || this.debugLabel != null) mergedDebugLabel = "(" + (this.debugLabel != null ? this.debugLabel : "unknown") + ").merge(" + (other.debugLabel != null ? other.debugLabel : "unknown") + ")";
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_style.dart", 784, 12, "() {if (other.debugLabel != null || debugLabel != null) mergedDebugLabel = '(${debugLabel ?? _kDefaultDebugLabel}).merge(${other.debugLabel ?? _kDefaultDebugLabel})'; return true;}()");
      return this.copyWith({color: other.color, backgroundColor: other.backgroundColor, fontFamily: other.fontFamily, fontFamilyFallback: other.fontFamilyFallback, fontSize: other.fontSize, fontWeight: other.fontWeight, fontStyle: other.fontStyle, letterSpacing: other.letterSpacing, wordSpacing: other.wordSpacing, textBaseline: other.textBaseline, height: other.height, locale: other.locale, foreground: other.foreground, background: other.background, shadows: other.shadows, decoration: other.decoration, decorationColor: other.decorationColor, decorationStyle: other.decorationStyle, decorationThickness: other.decorationThickness, debugLabel: mergedDebugLabel});
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_style.dart", 829, 12, "t != null");
      if (!(a == null || b == null || a.inherit == b.inherit)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_style.dart", 830, 12, "a == null || b == null || a.inherit == b.inherit");
      if (a == null && b == null) {
        return null;
      }
      let lerpDebugLabel = null;
      if (!dart.test(dart.fn(() => {
        lerpDebugLabel = "lerp(" + (() => {
          let l = a == null ? null : a.debugLabel;
          return l != null ? l : "unknown";
        })() + " ⎯" + t[$toStringAsFixed](1) + "→ " + (() => {
          let l = b == null ? null : b.debugLabel;
          return l != null ? l : "unknown";
        })() + ")";
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_style.dart", 836, 12, "() {lerpDebugLabel = 'lerp(${a?.debugLabel ?? _kDefaultDebugLabel} ⎯${t.toStringAsFixed(1)}→ ${b?.debugLabel ?? _kDefaultDebugLabel})'; return true;}()");
      if (a == null) {
        return new src__painting__text_style.TextStyle.new({inherit: b.inherit, color: ui$.Color.lerp(null, b.color, t), backgroundColor: ui$.Color.lerp(null, b.backgroundColor, t), fontFamily: dart.notNull(t) < 0.5 ? null : b.fontFamily, fontFamilyFallback: dart.notNull(t) < 0.5 ? null : b.fontFamilyFallback, fontSize: dart.notNull(t) < 0.5 ? null : b.fontSize, fontWeight: ui$.FontWeight.lerp(null, b.fontWeight, t), fontStyle: dart.notNull(t) < 0.5 ? null : b.fontStyle, letterSpacing: dart.notNull(t) < 0.5 ? null : b.letterSpacing, wordSpacing: dart.notNull(t) < 0.5 ? null : b.wordSpacing, textBaseline: dart.notNull(t) < 0.5 ? null : b.textBaseline, height: dart.notNull(t) < 0.5 ? null : b.height, locale: dart.notNull(t) < 0.5 ? null : b.locale, foreground: dart.notNull(t) < 0.5 ? null : b.foreground, background: dart.notNull(t) < 0.5 ? null : b.background, decoration: dart.notNull(t) < 0.5 ? null : b.decoration, shadows: dart.notNull(t) < 0.5 ? null : b.shadows, decorationColor: ui$.Color.lerp(null, b.decorationColor, t), decorationStyle: dart.notNull(t) < 0.5 ? null : b.decorationStyle, decorationThickness: dart.notNull(t) < 0.5 ? null : b.decorationThickness, debugLabel: lerpDebugLabel});
      }
      if (b == null) {
        return new src__painting__text_style.TextStyle.new({inherit: a.inherit, color: ui$.Color.lerp(a.color, null, t), backgroundColor: ui$.Color.lerp(null, a.backgroundColor, t), fontFamily: dart.notNull(t) < 0.5 ? a.fontFamily : null, fontFamilyFallback: dart.notNull(t) < 0.5 ? a.fontFamilyFallback : null, fontSize: dart.notNull(t) < 0.5 ? a.fontSize : null, fontWeight: ui$.FontWeight.lerp(a.fontWeight, null, t), fontStyle: dart.notNull(t) < 0.5 ? a.fontStyle : null, letterSpacing: dart.notNull(t) < 0.5 ? a.letterSpacing : null, wordSpacing: dart.notNull(t) < 0.5 ? a.wordSpacing : null, textBaseline: dart.notNull(t) < 0.5 ? a.textBaseline : null, height: dart.notNull(t) < 0.5 ? a.height : null, locale: dart.notNull(t) < 0.5 ? a.locale : null, foreground: dart.notNull(t) < 0.5 ? a.foreground : null, background: dart.notNull(t) < 0.5 ? a.background : null, shadows: dart.notNull(t) < 0.5 ? a.shadows : null, decoration: dart.notNull(t) < 0.5 ? a.decoration : null, decorationColor: ui$.Color.lerp(a.decorationColor, null, t), decorationStyle: dart.notNull(t) < 0.5 ? a.decorationStyle : null, decorationThickness: dart.notNull(t) < 0.5 ? a.decorationThickness : null, debugLabel: lerpDebugLabel});
      }
      return new src__painting__text_style.TextStyle.new({inherit: b.inherit, color: a.foreground == null && b.foreground == null ? ui$.Color.lerp(a.color, b.color, t) : null, backgroundColor: a.background == null && b.background == null ? ui$.Color.lerp(a.backgroundColor, b.backgroundColor, t) : null, fontFamily: dart.notNull(t) < 0.5 ? a.fontFamily : b.fontFamily, fontFamilyFallback: dart.notNull(t) < 0.5 ? a.fontFamilyFallback : b.fontFamilyFallback, fontSize: ui$.lerpDouble(a.fontSize != null ? a.fontSize : b.fontSize, b.fontSize != null ? b.fontSize : a.fontSize, t), fontWeight: ui$.FontWeight.lerp(a.fontWeight, b.fontWeight, t), fontStyle: dart.notNull(t) < 0.5 ? a.fontStyle : b.fontStyle, letterSpacing: ui$.lerpDouble(a.letterSpacing != null ? a.letterSpacing : b.letterSpacing, b.letterSpacing != null ? b.letterSpacing : a.letterSpacing, t), wordSpacing: ui$.lerpDouble(a.wordSpacing != null ? a.wordSpacing : b.wordSpacing, b.wordSpacing != null ? b.wordSpacing : a.wordSpacing, t), textBaseline: dart.notNull(t) < 0.5 ? a.textBaseline : b.textBaseline, height: ui$.lerpDouble(a.height != null ? a.height : b.height, b.height != null ? b.height : a.height, t), locale: dart.notNull(t) < 0.5 ? a.locale : b.locale, foreground: a.foreground != null || b.foreground != null ? dart.notNull(t) < 0.5 ? a.foreground != null ? a.foreground : (() => {
          let _ = new ui$.Paint.new();
          _.color = a.color;
          return _;
        })() : b.foreground != null ? b.foreground : (() => {
          let _ = new ui$.Paint.new();
          _.color = b.color;
          return _;
        })() : null, background: a.background != null || b.background != null ? dart.notNull(t) < 0.5 ? a.background != null ? a.background : (() => {
          let _ = new ui$.Paint.new();
          _.color = a.backgroundColor;
          return _;
        })() : b.background != null ? b.background : (() => {
          let _ = new ui$.Paint.new();
          _.color = b.backgroundColor;
          return _;
        })() : null, shadows: dart.notNull(t) < 0.5 ? a.shadows : b.shadows, decoration: dart.notNull(t) < 0.5 ? a.decoration : b.decoration, decorationColor: ui$.Color.lerp(a.decorationColor, b.decorationColor, t), decorationStyle: dart.notNull(t) < 0.5 ? a.decorationStyle : b.decorationStyle, decorationThickness: ui$.lerpDouble(a.decorationThickness != null ? a.decorationThickness : b.decorationThickness, b.decorationThickness != null ? b.decorationThickness : a.decorationThickness, t), debugLabel: lerpDebugLabel});
    }
    getTextStyle(opts) {
      let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : 1.0;
      return new ui$.TextStyle.new({color: this.color, decoration: this.decoration, decorationColor: this.decorationColor, decorationStyle: this.decorationStyle, decorationThickness: this.decorationThickness, fontWeight: this.fontWeight, fontStyle: this.fontStyle, textBaseline: this.textBaseline, fontFamily: this.fontFamily, fontFamilyFallback: this.fontFamilyFallback, fontSize: this.fontSize == null ? null : dart.notNull(this.fontSize) * dart.notNull(textScaleFactor), letterSpacing: this.letterSpacing, wordSpacing: this.wordSpacing, height: this.height, locale: this.locale, foreground: this.foreground, background: this.background != null ? this.background : this.backgroundColor != null ? (() => {
          let _ = new ui$.Paint.new();
          _.color = this.backgroundColor;
          return _;
        })() : null, shadows: this.shadows});
    }
    getParagraphStyle(opts) {
      let textAlign = opts && 'textAlign' in opts ? opts.textAlign : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : 1.0;
      let ellipsis = opts && 'ellipsis' in opts ? opts.ellipsis : null;
      let maxLines = opts && 'maxLines' in opts ? opts.maxLines : null;
      let locale = opts && 'locale' in opts ? opts.locale : null;
      let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
      let fontSize = opts && 'fontSize' in opts ? opts.fontSize : null;
      let fontWeight = opts && 'fontWeight' in opts ? opts.fontWeight : null;
      let fontStyle = opts && 'fontStyle' in opts ? opts.fontStyle : null;
      let height = opts && 'height' in opts ? opts.height : null;
      let strutStyle = opts && 'strutStyle' in opts ? opts.strutStyle : null;
      if (!(textScaleFactor != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_style.dart", 984, 12, "textScaleFactor != null");
      if (!(maxLines == null || dart.notNull(maxLines) > 0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_style.dart", 985, 12, "maxLines == null || maxLines > 0");
      return new ui$.ParagraphStyle.new({textAlign: textAlign, textDirection: textDirection, fontWeight: fontWeight != null ? fontWeight : this.fontWeight, fontStyle: fontStyle != null ? fontStyle : this.fontStyle, fontFamily: fontFamily != null ? fontFamily : this.fontFamily, fontSize: (() => {
          let l = fontSize != null ? fontSize : this.fontSize;
          return l != null ? l : 14.0;
        })() * dart.notNull(textScaleFactor), height: height != null ? height : this.height, strutStyle: strutStyle == null ? null : new ui$.StrutStyle.new({fontFamily: strutStyle.fontFamily, fontFamilyFallback: strutStyle.fontFamilyFallback, fontSize: strutStyle.fontSize, height: strutStyle.height, leading: strutStyle.leading, fontWeight: strutStyle.fontWeight, fontStyle: strutStyle.fontStyle, forceStrutHeight: strutStyle.forceStrutHeight}), maxLines: maxLines, ellipsis: ellipsis, locale: locale});
    }
    compareTo(other) {
      if (this === other) return src__painting__basic_types.RenderComparison.identical;
      if (this.inherit != other.inherit || this.fontFamily != other.fontFamily || this.fontSize != other.fontSize || !dart.equals(this.fontWeight, other.fontWeight) || this.fontStyle != other.fontStyle || this.letterSpacing != other.letterSpacing || this.wordSpacing != other.wordSpacing || this.textBaseline != other.textBaseline || this.height != other.height || !dart.equals(this.locale, other.locale) || !dart.equals(this.foreground, other.foreground) || !dart.equals(this.background, other.background) || !dart.test(src__foundation__collections.listEquals(ui$.Shadow, this.shadows, other.shadows)) || !dart.test(src__foundation__collections.listEquals(core.String, this.fontFamilyFallback, other.fontFamilyFallback))) return src__painting__basic_types.RenderComparison.layout;
      if (!dart.equals(this.color, other.color) || !dart.equals(this.backgroundColor, other.backgroundColor) || !dart.equals(this.decoration, other.decoration) || !dart.equals(this.decorationColor, other.decorationColor) || this.decorationStyle != other.decorationStyle || this.decorationThickness != other.decorationThickness) return src__painting__basic_types.RenderComparison.paint;
      return src__painting__basic_types.RenderComparison.identical;
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      let typedOther = src__painting__text_style.TextStyle._check(other);
      return this.inherit == typedOther.inherit && dart.equals(this.color, typedOther.color) && dart.equals(this.backgroundColor, typedOther.backgroundColor) && this.fontFamily == typedOther.fontFamily && this.fontSize == typedOther.fontSize && dart.equals(this.fontWeight, typedOther.fontWeight) && this.fontStyle == typedOther.fontStyle && this.letterSpacing == typedOther.letterSpacing && this.wordSpacing == typedOther.wordSpacing && this.textBaseline == typedOther.textBaseline && this.height == typedOther.height && dart.equals(this.locale, typedOther.locale) && dart.equals(this.foreground, typedOther.foreground) && dart.equals(this.background, typedOther.background) && dart.equals(this.decoration, typedOther.decoration) && dart.equals(this.decorationColor, typedOther.decorationColor) && this.decorationStyle == typedOther.decorationStyle && this.decorationThickness == typedOther.decorationThickness && dart.test(src__foundation__collections.listEquals(ui$.Shadow, this.shadows, typedOther.shadows)) && dart.test(src__foundation__collections.listEquals(core.String, this.fontFamilyFallback, typedOther.fontFamilyFallback));
    }
    get hashCode() {
      return ui$.hashValues(this.inherit, this.color, this.backgroundColor, this.fontFamily, this.fontFamilyFallback, this.fontSize, this.fontWeight, this.fontStyle, this.letterSpacing, this.wordSpacing, this.textBaseline, this.height, this.locale, this.foreground, this.background, this.decoration, this.decorationColor, this.decorationStyle, this.shadows);
    }
    toStringShort() {
      return dart.str(this[$runtimeType]);
    }
    debugFillProperties(properties, opts) {
      let prefix = opts && 'prefix' in opts ? opts.prefix : "";
      super.debugFillProperties(properties);
      if (this.debugLabel != null) properties.add(new src__foundation__diagnostics.MessageProperty.new(dart.str(prefix) + "debugLabel", this.debugLabel));
      let styles = JSArrayOfDiagnosticsNode().of([]);
      styles[$add](new (DiagnosticsPropertyOfColor()).new(dart.str(prefix) + "color", this.color, {defaultValue: null}));
      styles[$add](new (DiagnosticsPropertyOfColor()).new(dart.str(prefix) + "backgroundColor", this.backgroundColor, {defaultValue: null}));
      styles[$add](new src__foundation__diagnostics.StringProperty.new(dart.str(prefix) + "family", this.fontFamily, {defaultValue: null, quoted: false}));
      styles[$add](new (IterablePropertyOfString()).new(dart.str(prefix) + "familyFallback", this.fontFamilyFallback, {defaultValue: null}));
      styles[$add](new src__foundation__diagnostics.DoubleProperty.new(dart.str(prefix) + "size", this.fontSize, {defaultValue: null}));
      let weightDescription = null;
      if (this.fontWeight != null) {
        weightDescription = dart.str(dart.notNull(this.fontWeight.index) + 1) + "00";
      }
      styles[$add](new (DiagnosticsPropertyOfFontWeight()).new(dart.str(prefix) + "weight", this.fontWeight, {description: weightDescription, defaultValue: null}));
      styles[$add](new (EnumPropertyOfFontStyle()).new(dart.str(prefix) + "style", this.fontStyle, {defaultValue: null}));
      styles[$add](new src__foundation__diagnostics.DoubleProperty.new(dart.str(prefix) + "letterSpacing", this.letterSpacing, {defaultValue: null}));
      styles[$add](new src__foundation__diagnostics.DoubleProperty.new(dart.str(prefix) + "wordSpacing", this.wordSpacing, {defaultValue: null}));
      styles[$add](new (EnumPropertyOfTextBaseline()).new(dart.str(prefix) + "baseline", this.textBaseline, {defaultValue: null}));
      styles[$add](new src__foundation__diagnostics.DoubleProperty.new(dart.str(prefix) + "height", this.height, {unit: "x", defaultValue: null}));
      styles[$add](new (DiagnosticsPropertyOfLocale()).new(dart.str(prefix) + "locale", this.locale, {defaultValue: null}));
      styles[$add](new (DiagnosticsPropertyOfPaint()).new(dart.str(prefix) + "foreground", this.foreground, {defaultValue: null}));
      styles[$add](new (DiagnosticsPropertyOfPaint()).new(dart.str(prefix) + "background", this.background, {defaultValue: null}));
      if (this.decoration != null || this.decorationColor != null || this.decorationStyle != null || this.decorationThickness != null) {
        let decorationDescription = JSArrayOfString().of([]);
        if (this.decorationStyle != null) decorationDescription[$add](src__foundation__diagnostics.describeEnum(this.decorationStyle));
        styles[$add](new (DiagnosticsPropertyOfColor()).new(dart.str(prefix) + "decorationColor", this.decorationColor, {defaultValue: null, level: src__foundation__diagnostics.DiagnosticLevel.fine}));
        if (this.decorationColor != null) decorationDescription[$add](dart.str(this.decorationColor));
        styles[$add](new (DiagnosticsPropertyOfTextDecoration()).new(dart.str(prefix) + "decoration", this.decoration, {defaultValue: null, level: src__foundation__diagnostics.DiagnosticLevel.hidden}));
        if (this.decoration != null) decorationDescription[$add](dart.str(this.decoration));
        if (!dart.test(decorationDescription[$isNotEmpty])) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_style.dart", 1175, 14, "decorationDescription.isNotEmpty");
        styles[$add](new src__foundation__diagnostics.MessageProperty.new(dart.str(prefix) + "decoration", decorationDescription[$join](" ")));
        styles[$add](new src__foundation__diagnostics.DoubleProperty.new(dart.str(prefix) + "decorationThickness", this.decorationThickness, {unit: "x", defaultValue: null}));
      }
      let styleSpecified = styles[$any](dart.fn(n => !dart.test(n.isFiltered(src__foundation__diagnostics.DiagnosticLevel.info)), DiagnosticsNodeTobool()));
      properties.add(new (DiagnosticsPropertyOfbool()).new(dart.str(prefix) + "inherit", this.inherit, {level: !dart.test(styleSpecified) && dart.test(this.inherit) ? src__foundation__diagnostics.DiagnosticLevel.fine : src__foundation__diagnostics.DiagnosticLevel.info}));
      styles[$forEach](dart.bind(properties, 'add'));
      if (!dart.test(styleSpecified)) properties.add(new src__foundation__diagnostics.FlagProperty.new("inherit", {value: this.inherit, ifTrue: dart.str(prefix) + "<all styles inherited>", ifFalse: dart.str(prefix) + "<no style specified>"}));
    }
  };
  (src__painting__text_style.TextStyle.new = function(opts) {
    let inherit = opts && 'inherit' in opts ? opts.inherit : true;
    let color = opts && 'color' in opts ? opts.color : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let fontSize = opts && 'fontSize' in opts ? opts.fontSize : null;
    let fontWeight = opts && 'fontWeight' in opts ? opts.fontWeight : null;
    let fontStyle = opts && 'fontStyle' in opts ? opts.fontStyle : null;
    let letterSpacing = opts && 'letterSpacing' in opts ? opts.letterSpacing : null;
    let wordSpacing = opts && 'wordSpacing' in opts ? opts.wordSpacing : null;
    let textBaseline = opts && 'textBaseline' in opts ? opts.textBaseline : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let locale = opts && 'locale' in opts ? opts.locale : null;
    let foreground = opts && 'foreground' in opts ? opts.foreground : null;
    let background = opts && 'background' in opts ? opts.background : null;
    let shadows = opts && 'shadows' in opts ? opts.shadows : null;
    let decoration = opts && 'decoration' in opts ? opts.decoration : null;
    let decorationColor = opts && 'decorationColor' in opts ? opts.decorationColor : null;
    let decorationStyle = opts && 'decorationStyle' in opts ? opts.decorationStyle : null;
    let decorationThickness = opts && 'decorationThickness' in opts ? opts.decorationThickness : null;
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
    let fontFamilyFallback = opts && 'fontFamilyFallback' in opts ? opts.fontFamilyFallback : null;
    let package$1 = opts && 'package' in opts ? opts.package : null;
    this[inherit$] = inherit;
    this[color$0] = color;
    this[backgroundColor$] = backgroundColor;
    this[fontSize$] = fontSize;
    this[fontWeight$] = fontWeight;
    this[fontStyle$] = fontStyle;
    this[letterSpacing$] = letterSpacing;
    this[wordSpacing$] = wordSpacing;
    this[textBaseline$] = textBaseline;
    this[height$] = height;
    this[locale$0] = locale;
    this[foreground$] = foreground;
    this[background$] = background;
    this[shadows$] = shadows;
    this[decoration$] = decoration;
    this[decorationColor$] = decorationColor;
    this[decorationStyle$] = decorationStyle;
    this[decorationThickness$] = decorationThickness;
    this[debugLabel$] = debugLabel;
    this[fontFamily$] = package$1 == null ? fontFamily : "packages/" + dart.str(package$1) + "/" + dart.str(fontFamily);
    this[_fontFamilyFallback] = fontFamilyFallback;
    this[_package] = package$1;
    if (!(inherit != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_style.dart", 335, 16, "inherit != null");
    if (!(color == null || foreground == null)) dart.assertFailed("Cannot provide both a color and a foreground\nThe color argument is just a shorthand for \"foreground: new Paint()..color = color\".", "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_style.dart", 336, 16, "color == null || foreground == null");
    if (!(backgroundColor == null || background == null)) dart.assertFailed("Cannot provide both a backgroundColor and a background\nThe backgroundColor argument is just a shorthand for \"background: new Paint()..color = color\".", "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_style.dart", 337, 16, "backgroundColor == null || background == null");
    src__painting__text_style.TextStyle.__proto__.new.call(this);
  }).prototype = src__painting__text_style.TextStyle.prototype;
  dart.addTypeTests(src__painting__text_style.TextStyle);
  const inherit$ = Symbol("TextStyle.inherit");
  const color$0 = Symbol("TextStyle.color");
  const backgroundColor$ = Symbol("TextStyle.backgroundColor");
  const fontFamily$ = Symbol("TextStyle.fontFamily");
  const fontSize$ = Symbol("TextStyle.fontSize");
  const fontWeight$ = Symbol("TextStyle.fontWeight");
  const fontStyle$ = Symbol("TextStyle.fontStyle");
  const letterSpacing$ = Symbol("TextStyle.letterSpacing");
  const wordSpacing$ = Symbol("TextStyle.wordSpacing");
  const textBaseline$ = Symbol("TextStyle.textBaseline");
  const height$ = Symbol("TextStyle.height");
  const locale$0 = Symbol("TextStyle.locale");
  const foreground$ = Symbol("TextStyle.foreground");
  const background$ = Symbol("TextStyle.background");
  const decoration$ = Symbol("TextStyle.decoration");
  const decorationColor$ = Symbol("TextStyle.decorationColor");
  const decorationStyle$ = Symbol("TextStyle.decorationStyle");
  const decorationThickness$ = Symbol("TextStyle.decorationThickness");
  const debugLabel$ = Symbol("TextStyle.debugLabel");
  const shadows$ = Symbol("TextStyle.shadows");
  dart.setMethodSignature(src__painting__text_style.TextStyle, () => ({
    __proto__: dart.getMethods(src__painting__text_style.TextStyle.__proto__),
    copyWith: dart.fnType(src__painting__text_style.TextStyle, [], {inherit: core.bool, color: ui$.Color, backgroundColor: ui$.Color, fontFamily: core.String, fontFamilyFallback: core.List$(core.String), fontSize: core.double, fontWeight: ui$.FontWeight, fontStyle: ui$.FontStyle, letterSpacing: core.double, wordSpacing: core.double, textBaseline: ui$.TextBaseline, height: core.double, locale: ui$.Locale, foreground: ui$.Paint, background: ui$.Paint, shadows: core.List$(ui$.Shadow), decoration: ui$.TextDecoration, decorationColor: ui$.Color, decorationStyle: ui$.TextDecorationStyle, decorationThickness: core.double, debugLabel: core.String}),
    apply: dart.fnType(src__painting__text_style.TextStyle, [], {color: ui$.Color, backgroundColor: ui$.Color, decoration: ui$.TextDecoration, decorationColor: ui$.Color, decorationStyle: ui$.TextDecorationStyle, decorationThicknessFactor: core.double, decorationThicknessDelta: core.double, fontFamily: core.String, fontFamilyFallback: core.List$(core.String), fontSizeFactor: core.double, fontSizeDelta: core.double, fontWeightDelta: core.int, letterSpacingFactor: core.double, letterSpacingDelta: core.double, wordSpacingFactor: core.double, wordSpacingDelta: core.double, heightFactor: core.double, heightDelta: core.double}),
    merge: dart.fnType(src__painting__text_style.TextStyle, [src__painting__text_style.TextStyle]),
    getTextStyle: dart.fnType(ui$.TextStyle, [], {textScaleFactor: core.double}),
    getParagraphStyle: dart.fnType(ui$.ParagraphStyle, [], {textAlign: ui$.TextAlign, textDirection: ui$.TextDirection, textScaleFactor: core.double, ellipsis: core.String, maxLines: core.int, locale: ui$.Locale, fontFamily: core.String, fontSize: core.double, fontWeight: ui$.FontWeight, fontStyle: ui$.FontStyle, height: core.double, strutStyle: src__painting__strut_style.StrutStyle}),
    compareTo: dart.fnType(src__painting__basic_types.RenderComparison, [src__painting__text_style.TextStyle]),
    debugFillProperties: dart.fnType(dart.void, [src__foundation__diagnostics.DiagnosticPropertiesBuilder], {prefix: core.String})
  }));
  dart.setGetterSignature(src__painting__text_style.TextStyle, () => ({
    __proto__: dart.getGetters(src__painting__text_style.TextStyle.__proto__),
    fontFamilyFallback: core.List$(core.String)
  }));
  dart.setLibraryUri(src__painting__text_style.TextStyle, "package:flutter_web/src/painting/text_style.dart");
  dart.setFieldSignature(src__painting__text_style.TextStyle, () => ({
    __proto__: dart.getFields(src__painting__text_style.TextStyle.__proto__),
    inherit: dart.finalFieldType(core.bool),
    color: dart.finalFieldType(ui$.Color),
    backgroundColor: dart.finalFieldType(ui$.Color),
    fontFamily: dart.finalFieldType(core.String),
    [_fontFamilyFallback]: dart.finalFieldType(ListOfString()),
    [_package]: dart.finalFieldType(core.String),
    fontSize: dart.finalFieldType(core.double),
    fontWeight: dart.finalFieldType(ui$.FontWeight),
    fontStyle: dart.finalFieldType(ui$.FontStyle),
    letterSpacing: dart.finalFieldType(core.double),
    wordSpacing: dart.finalFieldType(core.double),
    textBaseline: dart.finalFieldType(ui$.TextBaseline),
    height: dart.finalFieldType(core.double),
    locale: dart.finalFieldType(ui$.Locale),
    foreground: dart.finalFieldType(ui$.Paint),
    background: dart.finalFieldType(ui$.Paint),
    decoration: dart.finalFieldType(ui$.TextDecoration),
    decorationColor: dart.finalFieldType(ui$.Color),
    decorationStyle: dart.finalFieldType(ui$.TextDecorationStyle),
    decorationThickness: dart.finalFieldType(core.double),
    debugLabel: dart.finalFieldType(core.String),
    shadows: dart.finalFieldType(ListOfShadow())
  }));
  dart.defineExtensionMethods(src__painting__text_style.TextStyle, ['_equals']);
  dart.defineExtensionAccessors(src__painting__text_style.TextStyle, ['hashCode']);
  dart.defineLazy(src__painting__text_style.TextStyle, {
    /*src__painting__text_style.TextStyle._defaultFontSize*/get _defaultFontSize() {
      return 14.0;
    }
  });
  const _fontFamilyFallback$ = dart.privateName(src__painting__strut_style, "_fontFamilyFallback");
  const _package$ = dart.privateName(src__painting__strut_style, "_package");
  src__painting__strut_style.StrutStyle = class StrutStyle extends src__foundation__diagnostics.Diagnosticable {
    get fontFamily() {
      return this[fontFamily$0];
    }
    set fontFamily(value) {
      super.fontFamily = value;
    }
    get fontFamilyFallback() {
      if (this[_package$] != null && this[_fontFamilyFallback$] != null) return IterableOfString()._check(this[_fontFamilyFallback$][$map](core.String, dart.fn(family => "packages/" + dart.str(this[_package$]) + "/" + dart.str(family), StringToString())))[$toList]();
      return this[_fontFamilyFallback$];
    }
    get fontSize() {
      return this[fontSize$0];
    }
    set fontSize(value) {
      super.fontSize = value;
    }
    get height() {
      return this[height$0];
    }
    set height(value) {
      super.height = value;
    }
    get fontWeight() {
      return this[fontWeight$0];
    }
    set fontWeight(value) {
      super.fontWeight = value;
    }
    get fontStyle() {
      return this[fontStyle$0];
    }
    set fontStyle(value) {
      super.fontStyle = value;
    }
    get leading() {
      return this[leading$];
    }
    set leading(value) {
      super.leading = value;
    }
    get forceStrutHeight() {
      return this[forceStrutHeight$];
    }
    set forceStrutHeight(value) {
      super.forceStrutHeight = value;
    }
    get debugLabel() {
      return this[debugLabel$0];
    }
    set debugLabel(value) {
      super.debugLabel = value;
    }
    compareTo(other) {
      if (this === other) return src__painting__basic_types.RenderComparison.identical;
      if (this.fontFamily != other.fontFamily || this.fontSize != other.fontSize || !dart.equals(this.fontWeight, other.fontWeight) || this.fontStyle != other.fontStyle || this.height != other.height || this.leading != other.leading || this.forceStrutHeight != other.forceStrutHeight || !dart.test(src__foundation__collections.listEquals(core.String, this.fontFamilyFallback, other.fontFamilyFallback))) return src__painting__basic_types.RenderComparison.layout;
      return src__painting__basic_types.RenderComparison.identical;
    }
    inheritFromTextStyle(other) {
      if (other == null) return this;
      return new src__painting__strut_style.StrutStyle.new({fontFamily: this.fontFamily != null ? this.fontFamily : other.fontFamily, fontFamilyFallback: (() => {
          let l = this.fontFamilyFallback;
          return l != null ? l : other.fontFamilyFallback;
        })(), fontSize: this.fontSize != null ? this.fontSize : other.fontSize, height: this.height != null ? this.height : other.height, leading: this.leading, fontWeight: this.fontWeight != null ? this.fontWeight : other.fontWeight, fontStyle: this.fontStyle != null ? this.fontStyle : other.fontStyle, forceStrutHeight: this.forceStrutHeight, debugLabel: this.debugLabel != null ? this.debugLabel : other.debugLabel});
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      let typedOther = src__painting__strut_style.StrutStyle._check(other);
      return this.fontFamily == typedOther.fontFamily && this.fontSize == typedOther.fontSize && dart.equals(this.fontWeight, typedOther.fontWeight) && this.fontStyle == typedOther.fontStyle && this.height == typedOther.height && this.leading == typedOther.leading && this.forceStrutHeight == typedOther.forceStrutHeight;
    }
    get hashCode() {
      return ui$.hashValues(this.fontFamily, this.fontSize, this.fontWeight, this.fontStyle, this.height, this.leading, this.forceStrutHeight);
    }
    toStringShort() {
      return dart.str(this[$runtimeType]);
    }
    debugFillProperties(properties, opts) {
      let prefix = opts && 'prefix' in opts ? opts.prefix : "";
      super.debugFillProperties(properties);
      if (this.debugLabel != null) properties.add(new src__foundation__diagnostics.MessageProperty.new(dart.str(prefix) + "debugLabel", this.debugLabel));
      let styles = JSArrayOfDiagnosticsNode().of([]);
      styles[$add](new src__foundation__diagnostics.StringProperty.new(dart.str(prefix) + "family", this.fontFamily, {defaultValue: null, quoted: false}));
      styles[$add](new (IterablePropertyOfString()).new(dart.str(prefix) + "familyFallback", this.fontFamilyFallback, {defaultValue: null}));
      styles[$add](new src__foundation__diagnostics.DoubleProperty.new(dart.str(prefix) + "size", this.fontSize, {defaultValue: null}));
      let weightDescription = null;
      if (this.fontWeight != null) {
        weightDescription = "w" + dart.str(dart.notNull(this.fontWeight.index) + 1) + "00";
      }
      styles[$add](new (DiagnosticsPropertyOfFontWeight()).new(dart.str(prefix) + "weight", this.fontWeight, {description: weightDescription, defaultValue: null}));
      styles[$add](new (EnumPropertyOfFontStyle()).new(dart.str(prefix) + "style", this.fontStyle, {defaultValue: null}));
      styles[$add](new src__foundation__diagnostics.DoubleProperty.new(dart.str(prefix) + "height", this.height, {unit: "x", defaultValue: null}));
      styles[$add](new src__foundation__diagnostics.FlagProperty.new(dart.str(prefix) + "forceStrutHeight", {value: this.forceStrutHeight, defaultValue: null}));
      let styleSpecified = styles[$any](dart.fn(n => !dart.test(n.isFiltered(src__foundation__diagnostics.DiagnosticLevel.info)), DiagnosticsNodeTobool()));
      styles[$forEach](dart.bind(properties, 'add'));
      if (!dart.test(styleSpecified)) properties.add(new src__foundation__diagnostics.FlagProperty.new("forceStrutHeight", {value: this.forceStrutHeight, ifTrue: dart.str(prefix) + "<strut height forced>", ifFalse: dart.str(prefix) + "<strut height normal>"}));
    }
  };
  (src__painting__strut_style.StrutStyle.new = function(opts) {
    let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
    let fontFamilyFallback = opts && 'fontFamilyFallback' in opts ? opts.fontFamilyFallback : null;
    let fontSize = opts && 'fontSize' in opts ? opts.fontSize : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let leading = opts && 'leading' in opts ? opts.leading : null;
    let fontWeight = opts && 'fontWeight' in opts ? opts.fontWeight : null;
    let fontStyle = opts && 'fontStyle' in opts ? opts.fontStyle : null;
    let forceStrutHeight = opts && 'forceStrutHeight' in opts ? opts.forceStrutHeight : null;
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    let package$1 = opts && 'package' in opts ? opts.package : null;
    this[fontSize$0] = fontSize;
    this[height$0] = height;
    this[leading$] = leading;
    this[fontWeight$0] = fontWeight;
    this[fontStyle$0] = fontStyle;
    this[forceStrutHeight$] = forceStrutHeight;
    this[debugLabel$0] = debugLabel;
    this[fontFamily$0] = package$1 == null ? fontFamily : "packages/" + dart.str(package$1) + "/" + dart.str(fontFamily);
    this[_fontFamilyFallback$] = fontFamilyFallback;
    this[_package$] = package$1;
    if (!(fontSize == null || dart.notNull(fontSize) > 0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/strut_style.dart", 291, 16, "fontSize == null || fontSize > 0");
    if (!(leading == null || dart.notNull(leading) >= 0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/strut_style.dart", 292, 16, "leading == null || leading >= 0");
    if (!(package$1 == null || package$1 != null && (fontFamily != null || fontFamilyFallback != null))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/strut_style.dart", 293, 16, "package == null || (package != null && (fontFamily != null || fontFamilyFallback != null))");
    src__painting__strut_style.StrutStyle.__proto__.new.call(this);
  }).prototype = src__painting__strut_style.StrutStyle.prototype;
  (src__painting__strut_style.StrutStyle.fromTextStyle = function(textStyle, opts) {
    let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
    let fontFamilyFallback = opts && 'fontFamilyFallback' in opts ? opts.fontFamilyFallback : null;
    let fontSize = opts && 'fontSize' in opts ? opts.fontSize : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let leading = opts && 'leading' in opts ? opts.leading : null;
    let fontWeight = opts && 'fontWeight' in opts ? opts.fontWeight : null;
    let fontStyle = opts && 'fontStyle' in opts ? opts.fontStyle : null;
    let forceStrutHeight = opts && 'forceStrutHeight' in opts ? opts.forceStrutHeight : null;
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    let package$1 = opts && 'package' in opts ? opts.package : null;
    this[leading$] = leading;
    this[forceStrutHeight$] = forceStrutHeight;
    if (!(textStyle != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/strut_style.dart", 325, 16, "textStyle != null");
    if (!(fontSize == null || dart.notNull(fontSize) > 0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/strut_style.dart", 326, 16, "fontSize == null || fontSize > 0");
    if (!(leading == null || dart.notNull(leading) >= 0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/strut_style.dart", 327, 16, "leading == null || leading >= 0");
    if (!(package$1 == null || package$1 != null && (fontFamily != null || fontFamilyFallback != null))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/strut_style.dart", 328, 16, "package == null || (package != null && (fontFamily != null || fontFamilyFallback != null))");
    this[fontFamily$0] = fontFamily != null ? package$1 == null ? fontFamily : "packages/" + dart.str(package$1) + "/" + dart.str(fontFamily) : textStyle.fontFamily;
    let l = fontFamilyFallback;
    this[_fontFamilyFallback$] = l != null ? l : textStyle.fontFamilyFallback;
    let l$ = height;
    this[height$0] = l$ != null ? l$ : textStyle.height;
    let l$0 = fontSize;
    this[fontSize$0] = l$0 != null ? l$0 : textStyle.fontSize;
    let l$1 = fontWeight;
    this[fontWeight$0] = l$1 != null ? l$1 : textStyle.fontWeight;
    let l$2 = fontStyle;
    this[fontStyle$0] = l$2 != null ? l$2 : textStyle.fontStyle;
    let l$3 = debugLabel;
    this[debugLabel$0] = l$3 != null ? l$3 : textStyle.debugLabel;
    this[_package$] = package$1;
    src__painting__strut_style.StrutStyle.__proto__.new.call(this);
  }).prototype = src__painting__strut_style.StrutStyle.prototype;
  dart.addTypeTests(src__painting__strut_style.StrutStyle);
  const fontFamily$0 = Symbol("StrutStyle.fontFamily");
  const fontSize$0 = Symbol("StrutStyle.fontSize");
  const height$0 = Symbol("StrutStyle.height");
  const fontWeight$0 = Symbol("StrutStyle.fontWeight");
  const fontStyle$0 = Symbol("StrutStyle.fontStyle");
  const leading$ = Symbol("StrutStyle.leading");
  const forceStrutHeight$ = Symbol("StrutStyle.forceStrutHeight");
  const debugLabel$0 = Symbol("StrutStyle.debugLabel");
  dart.setMethodSignature(src__painting__strut_style.StrutStyle, () => ({
    __proto__: dart.getMethods(src__painting__strut_style.StrutStyle.__proto__),
    compareTo: dart.fnType(src__painting__basic_types.RenderComparison, [src__painting__strut_style.StrutStyle]),
    inheritFromTextStyle: dart.fnType(src__painting__strut_style.StrutStyle, [src__painting__text_style.TextStyle]),
    debugFillProperties: dart.fnType(dart.void, [src__foundation__diagnostics.DiagnosticPropertiesBuilder], {prefix: core.String})
  }));
  dart.setGetterSignature(src__painting__strut_style.StrutStyle, () => ({
    __proto__: dart.getGetters(src__painting__strut_style.StrutStyle.__proto__),
    fontFamilyFallback: core.List$(core.String)
  }));
  dart.setLibraryUri(src__painting__strut_style.StrutStyle, "package:flutter_web/src/painting/strut_style.dart");
  dart.setFieldSignature(src__painting__strut_style.StrutStyle, () => ({
    __proto__: dart.getFields(src__painting__strut_style.StrutStyle.__proto__),
    fontFamily: dart.finalFieldType(core.String),
    [_fontFamilyFallback$]: dart.finalFieldType(ListOfString()),
    [_package$]: dart.finalFieldType(core.String),
    fontSize: dart.finalFieldType(core.double),
    height: dart.finalFieldType(core.double),
    fontWeight: dart.finalFieldType(ui$.FontWeight),
    fontStyle: dart.finalFieldType(ui$.FontStyle),
    leading: dart.finalFieldType(core.double),
    forceStrutHeight: dart.finalFieldType(core.bool),
    debugLabel: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__painting__strut_style.StrutStyle, ['_equals']);
  dart.defineExtensionAccessors(src__painting__strut_style.StrutStyle, ['hashCode']);
  dart.defineLazy(src__painting__strut_style.StrutStyle, {
    /*src__painting__strut_style.StrutStyle.disabled*/get disabled() {
      return dart.const(new src__painting__strut_style.StrutStyle.new({height: 0.0, leading: 0.0}));
    }
  });
  let const$3;
  src__painting__text_span.TextSpan = class TextSpan extends src__foundation__diagnostics.DiagnosticableTree {
    get style() {
      return this[style$];
    }
    set style(value) {
      super.style = value;
    }
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    get children() {
      return this[children$];
    }
    set children(value) {
      super.children = value;
    }
    get recognizer() {
      return this[recognizer$];
    }
    set recognizer(value) {
      super.recognizer = value;
    }
    get semanticsLabel() {
      return this[semanticsLabel$];
    }
    set semanticsLabel(value) {
      super.semanticsLabel = value;
    }
    build(builder, opts) {
      let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : 1.0;
      if (!dart.test(this.debugAssertIsValid())) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_span.dart", 181, 12, "debugAssertIsValid()");
      let hasStyle = this.style != null;
      if (hasStyle) builder.pushStyle(this.style.getTextStyle({textScaleFactor: textScaleFactor}));
      if (this.text != null) builder.addText(this.text);
      if (this.children != null) {
        for (let child of this.children) {
          if (!(child != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_span.dart", 188, 16, "child != null");
          child.build(builder, {textScaleFactor: textScaleFactor});
        }
      }
      if (hasStyle) builder.pop();
    }
    visitTextSpan(visitor) {
      if (this.text != null) {
        if (!dart.test(visitor(this))) return false;
      }
      if (this.children != null) {
        for (let child of this.children) {
          if (!dart.test(child.visitTextSpan(visitor))) return false;
        }
      }
      return true;
    }
    getSpanForPosition(position) {
      if (!dart.test(this.debugAssertIsValid())) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_span.dart", 211, 12, "debugAssertIsValid()");
      let affinity = position.affinity;
      let targetOffset = position.offset;
      let offset = 0;
      let result = null;
      this.visitTextSpan(dart.fn(span => {
        if (!(result == null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_span.dart", 217, 14, "result == null");
        let endOffset = offset + span.text.length;
        if (targetOffset === offset && affinity === ui$.TextAffinity.downstream || dart.notNull(targetOffset) > offset && dart.notNull(targetOffset) < endOffset || targetOffset === endOffset && affinity === ui$.TextAffinity.upstream) {
          result = span;
          return false;
        }
        offset = endOffset;
        return true;
      }, TextSpanTobool()));
      return result;
    }
    toPlainText(opts) {
      let includeSemanticsLabels = opts && 'includeSemanticsLabels' in opts ? opts.includeSemanticsLabels : true;
      if (!dart.test(this.debugAssertIsValid())) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_span.dart", 237, 12, "debugAssertIsValid()");
      let buffer = new core.StringBuffer.new();
      this.visitTextSpan(dart.fn(span => {
        if (span.semanticsLabel != null && dart.test(includeSemanticsLabels)) {
          buffer.write(span.semanticsLabel);
        } else {
          buffer.write(span.text);
        }
        return true;
      }, TextSpanTobool()));
      return buffer.toString();
    }
    codeUnitAt(index) {
      if (dart.notNull(index) < 0) return null;
      let offset = 0;
      let result = null;
      this.visitTextSpan(dart.fn(span => {
        if (dart.notNull(index) - offset < span.text.length) {
          result = span.text[$codeUnitAt](dart.notNull(index) - offset);
          return false;
        }
        offset = offset + span.text.length;
        return true;
      }, TextSpanTobool()));
      return result;
    }
    debugAssertIsValid() {
      if (!dart.test(dart.fn(() => {
        if (!dart.test(this.visitTextSpan(dart.fn(span => {
          if (span.children != null) {
            for (let child of span.children) {
              if (child == null) return false;
            }
          }
          return true;
        }, TextSpanTobool())))) {
          dart.throw(src__foundation__assertions.FlutterError.new("TextSpan contains a null child.\n" + "A TextSpan object with a non-null child list should not have any nulls in its child list.\n" + "The full text in question was:\n" + dart.str(this.toStringDeep({prefixLineOne: "  "}))));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_span.dart", 277, 12, "() {if (!visitTextSpan((TextSpan span) {if (span.children != null) {for (TextSpan child in span.children) {if (child == null) return false;}} return true;})) {throw FlutterError('TextSpan contains a null child.\\n' 'A TextSpan object with a non-null child list should not have any nulls in its child list.\\n' 'The full text in question was:\\n' '${toStringDeep(prefixLineOne: '  ')}');} return true;}()");
      return true;
    }
    compareTo(other) {
      if (this === other) return src__painting__basic_types.RenderComparison.identical;
      if (other.text != this.text || (this.children == null ? null : this.children[$length]) != (other.children == null ? null : other.children[$length]) || this.style == null !== (other.style == null)) return src__painting__basic_types.RenderComparison.layout;
      let result = dart.equals(this.recognizer, other.recognizer) ? src__painting__basic_types.RenderComparison.identical : src__painting__basic_types.RenderComparison.metadata;
      if (this.style != null) {
        let candidate = this.style.compareTo(other.style);
        if (dart.notNull(candidate.index) > dart.notNull(result.index)) result = candidate;
        if (result === src__painting__basic_types.RenderComparison.layout) return result;
      }
      if (this.children != null) {
        for (let index = 0; index < dart.notNull(this.children[$length]); index = index + 1) {
          let candidate = this.children[$_get](index).compareTo(other.children[$_get](index));
          if (dart.notNull(candidate.index) > dart.notNull(result.index)) result = candidate;
          if (result === src__painting__basic_types.RenderComparison.layout) return result;
        }
      }
      return result;
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      let typedOther = src__painting__text_span.TextSpan._check(other);
      return typedOther.text == this.text && dart.equals(typedOther.style, this.style) && dart.equals(typedOther.recognizer, this.recognizer) && typedOther.semanticsLabel == this.semanticsLabel && dart.test(src__foundation__collections.listEquals(src__painting__text_span.TextSpan, typedOther.children, this.children));
    }
    get hashCode() {
      return ui$.hashValues(this.style, this.text, this.recognizer, this.semanticsLabel, ui$.hashList(this.children));
    }
    toStringShort() {
      return dart.str(this[$runtimeType]);
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.defaultDiagnosticsTreeStyle = src__foundation__diagnostics.DiagnosticsTreeStyle.whitespace;
      if (this.style != null) this.style.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfGestureRecognizer()).new("recognizer", this.recognizer, {description: (() => {
          let t = this.recognizer == null ? null : dart.runtimeType(this.recognizer);
          return t == null ? null : dart.toString(t);
        })(), defaultValue: null}));
      if (this.semanticsLabel != null) {
        properties.add(new src__foundation__diagnostics.StringProperty.new("semanticsLabel", this.semanticsLabel));
      }
      properties.add(new src__foundation__diagnostics.StringProperty.new("text", this.text, {showName: false, defaultValue: null}));
      if (this.style == null && this.text == null && this.children == null) properties.add(src__foundation__diagnostics.DiagnosticsNode.message("(empty)"));
    }
    debugDescribeChildren() {
      if (this.children == null) return const$3 || (const$3 = dart.constList([], src__foundation__diagnostics.DiagnosticsNode));
      return IterableOfDiagnosticsNode()._check(this.children[$map](src__foundation__diagnostics.DiagnosticsNode, dart.fn(child => {
        if (child != null) {
          return child.toDiagnosticsNode();
        } else {
          return src__foundation__diagnostics.DiagnosticsNode.message("<null child>");
        }
      }, TextSpanToDiagnosticsNode())))[$toList]();
    }
  };
  (src__painting__text_span.TextSpan.new = function(opts) {
    let style = opts && 'style' in opts ? opts.style : null;
    let text = opts && 'text' in opts ? opts.text : null;
    let children = opts && 'children' in opts ? opts.children : null;
    let recognizer = opts && 'recognizer' in opts ? opts.recognizer : null;
    let semanticsLabel = opts && 'semanticsLabel' in opts ? opts.semanticsLabel : null;
    this[style$] = style;
    this[text$] = text;
    this[children$] = children;
    this[recognizer$] = recognizer;
    this[semanticsLabel$] = semanticsLabel;
    src__painting__text_span.TextSpan.__proto__.new.call(this);
  }).prototype = src__painting__text_span.TextSpan.prototype;
  dart.addTypeTests(src__painting__text_span.TextSpan);
  const style$ = Symbol("TextSpan.style");
  const text$ = Symbol("TextSpan.text");
  const children$ = Symbol("TextSpan.children");
  const recognizer$ = Symbol("TextSpan.recognizer");
  const semanticsLabel$ = Symbol("TextSpan.semanticsLabel");
  dart.setMethodSignature(src__painting__text_span.TextSpan, () => ({
    __proto__: dart.getMethods(src__painting__text_span.TextSpan.__proto__),
    build: dart.fnType(dart.void, [ui$.ParagraphBuilder], {textScaleFactor: core.double}),
    visitTextSpan: dart.fnType(core.bool, [dart.fnType(core.bool, [src__painting__text_span.TextSpan])]),
    getSpanForPosition: dart.fnType(src__painting__text_span.TextSpan, [ui$.TextPosition]),
    toPlainText: dart.fnType(core.String, [], {includeSemanticsLabels: core.bool}),
    codeUnitAt: dart.fnType(core.int, [core.int]),
    debugAssertIsValid: dart.fnType(core.bool, []),
    compareTo: dart.fnType(src__painting__basic_types.RenderComparison, [src__painting__text_span.TextSpan])
  }));
  dart.setLibraryUri(src__painting__text_span.TextSpan, "package:flutter_web/src/painting/text_span.dart");
  dart.setFieldSignature(src__painting__text_span.TextSpan, () => ({
    __proto__: dart.getFields(src__painting__text_span.TextSpan.__proto__),
    style: dart.finalFieldType(src__painting__text_style.TextStyle),
    text: dart.finalFieldType(core.String),
    children: dart.finalFieldType(ListOfTextSpan()),
    recognizer: dart.finalFieldType(src__gestures__recognizer.GestureRecognizer),
    semanticsLabel: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__painting__text_span.TextSpan, ['_equals']);
  dart.defineExtensionAccessors(src__painting__text_span.TextSpan, ['hashCode']);
  src__painting__text_painter.TextWidthBasis = class TextWidthBasis extends core.Object {
    toString() {
      return {
        0: "TextWidthBasis.parent",
        1: "TextWidthBasis.longestLine"
      }[this.index];
    }
  };
  (src__painting__text_painter.TextWidthBasis.new = function(x) {
    this.index = x;
  }).prototype = src__painting__text_painter.TextWidthBasis.prototype;
  dart.addTypeTests(src__painting__text_painter.TextWidthBasis);
  dart.setLibraryUri(src__painting__text_painter.TextWidthBasis, "package:flutter_web/src/painting/text_painter.dart");
  dart.setFieldSignature(src__painting__text_painter.TextWidthBasis, () => ({
    __proto__: dart.getFields(src__painting__text_painter.TextWidthBasis.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__painting__text_painter.TextWidthBasis, ['toString']);
  src__painting__text_painter.TextWidthBasis.parent = dart.const(new src__painting__text_painter.TextWidthBasis.new(0));
  src__painting__text_painter.TextWidthBasis.longestLine = dart.const(new src__painting__text_painter.TextWidthBasis.new(1));
  src__painting__text_painter.TextWidthBasis.values = dart.constList([src__painting__text_painter.TextWidthBasis.parent, src__painting__text_painter.TextWidthBasis.longestLine], src__painting__text_painter.TextWidthBasis);
  src__painting__text_painter._CaretMetrics = class _CaretMetrics extends core.Object {};
  (src__painting__text_painter._CaretMetrics.new = function(opts) {
    let offset = opts && 'offset' in opts ? opts.offset : null;
    let fullHeight = opts && 'fullHeight' in opts ? opts.fullHeight : null;
    this.offset = offset;
    this.fullHeight = fullHeight;
  }).prototype = src__painting__text_painter._CaretMetrics.prototype;
  dart.addTypeTests(src__painting__text_painter._CaretMetrics);
  dart.setLibraryUri(src__painting__text_painter._CaretMetrics, "package:flutter_web/src/painting/text_painter.dart");
  dart.setFieldSignature(src__painting__text_painter._CaretMetrics, () => ({
    __proto__: dart.getFields(src__painting__text_painter._CaretMetrics.__proto__),
    offset: dart.finalFieldType(ui$.Offset),
    fullHeight: dart.finalFieldType(core.double)
  }));
  const _text = dart.privateName(src__painting__text_painter, "_text");
  const _textAlign = dart.privateName(src__painting__text_painter, "_textAlign");
  const _textDirection = dart.privateName(src__painting__text_painter, "_textDirection");
  const _textScaleFactor = dart.privateName(src__painting__text_painter, "_textScaleFactor");
  const _maxLines = dart.privateName(src__painting__text_painter, "_maxLines");
  const _ellipsis = dart.privateName(src__painting__text_painter, "_ellipsis");
  const _locale = dart.privateName(src__painting__text_painter, "_locale");
  const _strutStyle = dart.privateName(src__painting__text_painter, "_strutStyle");
  const _textWidthBasis = dart.privateName(src__painting__text_painter, "_textWidthBasis");
  const _paragraph = dart.privateName(src__painting__text_painter, "_paragraph");
  const _needsLayout = dart.privateName(src__painting__text_painter, "_needsLayout");
  const _layoutTemplate = dart.privateName(src__painting__text_painter, "_layoutTemplate");
  const _lastMinWidth = dart.privateName(src__painting__text_painter, "_lastMinWidth");
  const _lastMaxWidth = dart.privateName(src__painting__text_painter, "_lastMaxWidth");
  const _caretMetrics = dart.privateName(src__painting__text_painter, "_caretMetrics");
  const _previousCaretPosition = dart.privateName(src__painting__text_painter, "_previousCaretPosition");
  const _previousCaretPrototype = dart.privateName(src__painting__text_painter, "_previousCaretPrototype");
  const _createParagraphStyle = dart.privateName(src__painting__text_painter, "_createParagraphStyle");
  let const$4;
  const _applyFloatingPointHack = dart.privateName(src__painting__text_painter, "_applyFloatingPointHack");
  const _isUtf16Surrogate = dart.privateName(src__painting__text_painter, "_isUtf16Surrogate");
  const _emptyOffset = dart.privateName(src__painting__text_painter, "_emptyOffset");
  const _getRectFromUpstream = dart.privateName(src__painting__text_painter, "_getRectFromUpstream");
  const _getRectFromDownstream = dart.privateName(src__painting__text_painter, "_getRectFromDownstream");
  const _computeCaretMetrics = dart.privateName(src__painting__text_painter, "_computeCaretMetrics");
  src__painting__text_painter.TextPainter = class TextPainter extends core.Object {
    get text() {
      return this[_text];
    }
    set text(value) {
      if (!(value == null || dart.test(value.debugAssertIsValid()))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_painter.dart", 108, 12, "value == null || value.debugAssertIsValid()");
      if (dart.equals(this[_text], value)) return;
      if (!dart.equals((() => {
        let t = this[_text];
        return t == null ? null : t.style;
      })(), value == null ? null : value.style)) this[_layoutTemplate] = null;
      this[_text] = value;
      this[_paragraph] = null;
      this[_needsLayout] = true;
    }
    get textAlign() {
      return this[_textAlign];
    }
    set textAlign(value) {
      if (!(value != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_painter.dart", 124, 12, "value != null");
      if (this[_textAlign] == value) return;
      this[_textAlign] = value;
      this[_paragraph] = null;
      this[_needsLayout] = true;
    }
    get textDirection() {
      return this[_textDirection];
    }
    set textDirection(value) {
      if (this[_textDirection] == value) return;
      this[_textDirection] = value;
      this[_paragraph] = null;
      this[_layoutTemplate] = null;
      this[_needsLayout] = true;
    }
    get textScaleFactor() {
      return this[_textScaleFactor];
    }
    set textScaleFactor(value) {
      if (!(value != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_painter.dart", 166, 12, "value != null");
      if (this[_textScaleFactor] == value) return;
      this[_textScaleFactor] = value;
      this[_paragraph] = null;
      this[_layoutTemplate] = null;
      this[_needsLayout] = true;
    }
    get ellipsis() {
      return this[_ellipsis];
    }
    set ellipsis(value) {
      if (!(value == null || value[$isNotEmpty])) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_painter.dart", 193, 12, "value == null || value.isNotEmpty");
      if (this[_ellipsis] == value) return;
      this[_ellipsis] = value;
      this[_paragraph] = null;
      this[_needsLayout] = true;
    }
    get locale() {
      return this[_locale];
    }
    set locale(value) {
      if (dart.equals(this[_locale], value)) return;
      this[_locale] = value;
      this[_paragraph] = null;
      this[_needsLayout] = true;
    }
    get maxLines() {
      return this[_maxLines];
    }
    set maxLines(value) {
      if (!(value == null || dart.notNull(value) > 0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_painter.dart", 222, 12, "value == null || value > 0");
      if (this[_maxLines] == value) return;
      this[_maxLines] = value;
      this[_paragraph] = null;
      this[_needsLayout] = true;
    }
    get strutStyle() {
      return this[_strutStyle];
    }
    set strutStyle(value) {
      if (dart.equals(this[_strutStyle], value)) return;
      this[_strutStyle] = value;
      this[_paragraph] = null;
      this[_needsLayout] = true;
    }
    get textWidthBasis() {
      return this[_textWidthBasis];
    }
    set textWidthBasis(value) {
      if (!(value != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_painter.dart", 254, 12, "value != null");
      if (this[_textWidthBasis] == value) return;
      this[_textWidthBasis] = value;
      this[_paragraph] = null;
      this[_needsLayout] = true;
    }
    [_createParagraphStyle](defaultTextDirection) {
      if (defaultTextDirection === void 0) defaultTextDirection = null;
      if (!(this.textAlign != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_painter.dart", 267, 12, "textAlign != null");
      if (!(this.textDirection != null || defaultTextDirection != null)) dart.assertFailed("TextPainter.textDirection must be set to a non-null value before using the TextPainter.", "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_painter.dart", 268, 12, "textDirection != null || defaultTextDirection != null");
      let l = this[_text].style == null ? null : this[_text].style.getParagraphStyle({textAlign: this.textAlign, textDirection: (() => {
          let l = this.textDirection;
          return l != null ? l : defaultTextDirection;
        })(), textScaleFactor: this.textScaleFactor, maxLines: this[_maxLines], ellipsis: this[_ellipsis], locale: this[_locale], strutStyle: this[_strutStyle]});
      return l != null ? l : new ui$.ParagraphStyle.new({textAlign: this.textAlign, textDirection: (() => {
          let l = this.textDirection;
          return l != null ? l : defaultTextDirection;
        })(), maxLines: this.maxLines, ellipsis: this.ellipsis, locale: this.locale});
    }
    get preferredLineHeight() {
      if (this[_layoutTemplate] == null) {
        let builder = new ui$.ParagraphBuilder.new(this[_createParagraphStyle](ui$.TextDirection.rtl));
        if ((() => {
          let t = this.text;
          return t == null ? null : t.style;
        })() != null) builder.pushStyle(this.text.style.getTextStyle({textScaleFactor: this.textScaleFactor}));
        builder.addText(" ");
        let _ = builder.build();
        _.layout(const$4 || (const$4 = dart.const(new ui$.ParagraphConstraints.new({width: core.double.infinity}))));
        this[_layoutTemplate] = _;
      }
      return this[_layoutTemplate].height;
    }
    [_applyFloatingPointHack](layoutValue) {
      return layoutValue[$ceilToDouble]();
    }
    get minIntrinsicWidth() {
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_painter.dart", 331, 12, "!_needsLayout");
      return this[_applyFloatingPointHack](this[_paragraph].minIntrinsicWidth);
    }
    get maxIntrinsicWidth() {
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_painter.dart", 339, 12, "!_needsLayout");
      return this[_applyFloatingPointHack](this[_paragraph].maxIntrinsicWidth);
    }
    get width() {
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_painter.dart", 347, 12, "!_needsLayout");
      return this[_applyFloatingPointHack](this[_paragraph].width);
    }
    get height() {
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_painter.dart", 358, 12, "!_needsLayout");
      return this[_applyFloatingPointHack](this[_paragraph].height);
    }
    get size() {
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_painter.dart", 366, 12, "!_needsLayout");
      return new ui$.Size.new(this.width, this.height);
    }
    computeDistanceToActualBaseline(baseline) {
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_painter.dart", 375, 12, "!_needsLayout");
      if (!(baseline != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_painter.dart", 376, 12, "baseline != null");
      switch (baseline) {
        case ui$.TextBaseline.alphabetic:
        {
          return this[_paragraph].alphabeticBaseline;
        }
        case ui$.TextBaseline.ideographic:
        {
          return this[_paragraph].ideographicBaseline;
        }
      }
      return null;
    }
    get didExceedMaxLines() {
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_painter.dart", 398, 12, "!_needsLayout");
      return this[_paragraph].didExceedMaxLines;
    }
    layout(opts) {
      let minWidth = opts && 'minWidth' in opts ? opts.minWidth : 0.0;
      let maxWidth = opts && 'maxWidth' in opts ? opts.maxWidth : core.double.infinity;
      if (!(this.text != null)) dart.assertFailed("TextPainter.text must be set to a non-null value before using the TextPainter.", "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_painter.dart", 414, 12, "text != null");
      if (!(this.textDirection != null)) dart.assertFailed("TextPainter.textDirection must be set to a non-null value before using the TextPainter.", "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_painter.dart", 416, 12, "textDirection != null");
      if (!dart.test(this[_needsLayout]) && minWidth == this[_lastMinWidth] && maxWidth == this[_lastMaxWidth]) return;
      this[_needsLayout] = false;
      if (this[_paragraph] == null) {
        let builder = new ui$.ParagraphBuilder.new(this[_createParagraphStyle]());
        this[_text].build(builder, {textScaleFactor: this.textScaleFactor});
        this[_paragraph] = builder.build();
      }
      this[_lastMinWidth] = minWidth;
      this[_lastMaxWidth] = maxWidth;
      this[_paragraph].layout(new ui$.ParagraphConstraints.new({width: maxWidth}));
      if (minWidth != maxWidth) {
        let newWidth = this.maxIntrinsicWidth[$clamp](minWidth, maxWidth);
        if (newWidth != this.width) this[_paragraph].layout(new ui$.ParagraphConstraints.new({width: newWidth}));
      }
    }
    paint(canvas, offset) {
      if (!dart.test(dart.fn(() => {
        if (dart.test(this[_needsLayout])) {
          dart.throw(src__foundation__assertions.FlutterError.new("TextPainter.paint called when text geometry was not yet calculated.\n" + "Please call layout() before paint() to position the text before painting it."));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_painter.dart", 450, 12, "() {if (_needsLayout) {throw FlutterError('TextPainter.paint called when text geometry was not yet calculated.\\n' 'Please call layout() before paint() to position the text before painting it.');} return true;}()");
      canvas.drawParagraph(this[_paragraph], offset);
    }
    [_isUtf16Surrogate](value) {
      return (dart.notNull(value) & 63488) === 55296;
    }
    getOffsetAfter(offset) {
      let nextCodeUnit = this[_text].codeUnitAt(offset);
      if (nextCodeUnit == null) return null;
      return dart.test(this[_isUtf16Surrogate](nextCodeUnit)) ? dart.notNull(offset) + 2 : dart.notNull(offset) + 1;
    }
    getOffsetBefore(offset) {
      let prevCodeUnit = this[_text].codeUnitAt(dart.notNull(offset) - 1);
      if (prevCodeUnit == null) return null;
      return dart.test(this[_isUtf16Surrogate](prevCodeUnit)) ? dart.notNull(offset) - 2 : dart.notNull(offset) - 1;
    }
    [_getRectFromUpstream](offset, caretPrototype) {
      let flattenedText = this[_text].toPlainText();
      let prevCodeUnit = this[_text].codeUnitAt(math.max(core.int, 0, dart.notNull(offset) - 1));
      if (prevCodeUnit == null) return null;
      let needsSearch = dart.test(this[_isUtf16Surrogate](prevCodeUnit)) || this[_text].codeUnitAt(offset) === 8205;
      let graphemeClusterLength = needsSearch ? 2 : 1;
      let boxes = JSArrayOfTextBox().of([]);
      while (dart.test(boxes[$isEmpty]) && flattenedText != null) {
        let prevRuneOffset = dart.notNull(offset) - graphemeClusterLength;
        boxes = this[_paragraph].getBoxesForRange(prevRuneOffset, offset);
        if (dart.test(boxes[$isEmpty])) {
          if (!needsSearch) break;
          if (prevRuneOffset < -flattenedText.length) break;
          graphemeClusterLength = graphemeClusterLength * 2;
          continue;
        }
        let box = boxes[$first];
        let NEWLINE_CODE_UNIT = 10;
        if (prevCodeUnit === NEWLINE_CODE_UNIT) {
          return new ui$.Rect.fromLTRB(this[_emptyOffset].dx, box.bottom, this[_emptyOffset].dx, dart.notNull(box.bottom) + dart.notNull(box.bottom) - dart.notNull(box.top));
        }
        let caretEnd = box.end;
        let dx = box.direction === ui$.TextDirection.rtl ? dart.notNull(caretEnd) - dart.notNull(caretPrototype.width) : caretEnd;
        return new ui$.Rect.fromLTRB(math.min(core.double, dx, this.width), box.top, math.min(core.double, dx, this.width), box.bottom);
      }
      return null;
    }
    [_getRectFromDownstream](offset, caretPrototype) {
      let flattenedText = this[_text].toPlainText();
      let nextCodeUnit = this[_text].codeUnitAt(math.min(core.int, offset, flattenedText == null ? 0 : flattenedText.length - 1));
      if (nextCodeUnit == null) return null;
      let needsSearch = dart.test(this[_isUtf16Surrogate](nextCodeUnit)) || nextCodeUnit === 8205;
      let graphemeClusterLength = needsSearch ? 2 : 1;
      let boxes = JSArrayOfTextBox().of([]);
      while (dart.test(boxes[$isEmpty]) && flattenedText != null) {
        let nextRuneOffset = dart.notNull(offset) + graphemeClusterLength;
        boxes = this[_paragraph].getBoxesForRange(offset, nextRuneOffset);
        if (dart.test(boxes[$isEmpty])) {
          if (!needsSearch) break;
          if (nextRuneOffset >= flattenedText.length << 1 >>> 0) break;
          graphemeClusterLength = graphemeClusterLength * 2;
          continue;
        }
        let box = boxes[$last];
        let caretStart = box.start;
        let dx = box.direction === ui$.TextDirection.rtl ? dart.notNull(caretStart) - dart.notNull(caretPrototype.width) : caretStart;
        return new ui$.Rect.fromLTRB(math.min(core.double, dx, this.width), box.top, math.min(core.double, dx, this.width), box.bottom);
      }
      return null;
    }
    get [_emptyOffset]() {
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_painter.dart", 582, 12, "!_needsLayout");
      if (!(this.textAlign != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_painter.dart", 583, 12, "textAlign != null");
      switch (this.textAlign) {
        case ui$.TextAlign.left:
        {
          return ui$.Offset.zero;
        }
        case ui$.TextAlign.right:
        {
          return new ui$.Offset.new(this.width, 0.0);
        }
        case ui$.TextAlign.center:
        {
          return new ui$.Offset.new(dart.notNull(this.width) / 2.0, 0.0);
        }
        case ui$.TextAlign.justify:
        case ui$.TextAlign.start:
        {
          if (!(this.textDirection != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_painter.dart", 593, 16, "textDirection != null");
          switch (this.textDirection) {
            case ui$.TextDirection.rtl:
            {
              return new ui$.Offset.new(this.width, 0.0);
            }
            case ui$.TextDirection.ltr:
            {
              return ui$.Offset.zero;
            }
          }
          return null;
        }
        case ui$.TextAlign.end:
        {
          if (!(this.textDirection != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_painter.dart", 602, 16, "textDirection != null");
          switch (this.textDirection) {
            case ui$.TextDirection.rtl:
            {
              return ui$.Offset.zero;
            }
            case ui$.TextDirection.ltr:
            {
              return new ui$.Offset.new(this.width, 0.0);
            }
          }
          return null;
        }
      }
      return null;
    }
    getOffsetForCaret(position, caretPrototype) {
      this[_computeCaretMetrics](position, caretPrototype);
      return this[_caretMetrics].offset;
    }
    getFullHeightForCaret(position, caretPrototype) {
      this[_computeCaretMetrics](position, caretPrototype);
      return this[_caretMetrics].fullHeight;
    }
    [_computeCaretMetrics](position, caretPrototype) {
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_painter.dart", 644, 12, "!_needsLayout");
      if (dart.equals(position, this[_previousCaretPosition]) && dart.equals(caretPrototype, this[_previousCaretPrototype])) return;
      let offset = position.offset;
      if (!(position.affinity != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_painter.dart", 648, 12, "position.affinity != null");
      let rect = null;
      switch (position.affinity) {
        case ui$.TextAffinity.upstream:
        {
          {
            let l = this[_getRectFromUpstream](offset, caretPrototype);
            rect = l != null ? l : this[_getRectFromDownstream](offset, caretPrototype);
            break;
          }
        }
        case ui$.TextAffinity.downstream:
        {
          {
            let l$ = this[_getRectFromDownstream](offset, caretPrototype);
            rect = l$ != null ? l$ : this[_getRectFromUpstream](offset, caretPrototype);
            break;
          }
        }
      }
      this[_caretMetrics] = new src__painting__text_painter._CaretMetrics.new({offset: rect != null ? new ui$.Offset.new(rect.left, rect.top) : this[_emptyOffset], fullHeight: rect != null ? dart.notNull(rect.bottom) - dart.notNull(rect.top) : null});
    }
    getBoxesForSelection(selection) {
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_painter.dart", 676, 12, "!_needsLayout");
      return this[_paragraph].getBoxesForRange(selection.start, selection.end);
    }
    getPositionForOffset(offset) {
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_painter.dart", 682, 12, "!_needsLayout");
      return this[_paragraph].getPositionForOffset(offset);
    }
    getWordBoundary(position) {
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_painter.dart", 694, 12, "!_needsLayout");
      let indices = this[_paragraph].getWordBoundary(position.offset);
      return new src__services__text_editing.TextRange.new({start: indices[$_get](0), end: indices[$_get](1)});
    }
  };
  (src__painting__text_painter.TextPainter.new = function(opts) {
    let text = opts && 'text' in opts ? opts.text : null;
    let textAlign = opts && 'textAlign' in opts ? opts.textAlign : ui$.TextAlign.start;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : 1.0;
    let maxLines = opts && 'maxLines' in opts ? opts.maxLines : null;
    let ellipsis = opts && 'ellipsis' in opts ? opts.ellipsis : null;
    let locale = opts && 'locale' in opts ? opts.locale : null;
    let strutStyle = opts && 'strutStyle' in opts ? opts.strutStyle : null;
    let textWidthBasis = opts && 'textWidthBasis' in opts ? opts.textWidthBasis : src__painting__text_painter.TextWidthBasis.parent;
    this[_paragraph] = null;
    this[_needsLayout] = true;
    this[_layoutTemplate] = null;
    this[_lastMinWidth] = null;
    this[_lastMaxWidth] = null;
    this[_caretMetrics] = null;
    this[_previousCaretPosition] = null;
    this[_previousCaretPrototype] = null;
    if (!(text == null || dart.test(text.debugAssertIsValid()))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_painter.dart", 82, 16, "text == null || text.debugAssertIsValid()");
    if (!(textAlign != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_painter.dart", 83, 16, "textAlign != null");
    if (!(textScaleFactor != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_painter.dart", 84, 16, "textScaleFactor != null");
    if (!(maxLines == null || dart.notNull(maxLines) > 0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_painter.dart", 85, 16, "maxLines == null || maxLines > 0");
    if (!(textWidthBasis != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/text_painter.dart", 86, 16, "textWidthBasis != null");
    this[_text] = text;
    this[_textAlign] = textAlign;
    this[_textDirection] = textDirection;
    this[_textScaleFactor] = textScaleFactor;
    this[_maxLines] = maxLines;
    this[_ellipsis] = ellipsis;
    this[_locale] = locale;
    this[_strutStyle] = strutStyle;
    this[_textWidthBasis] = textWidthBasis;
  }).prototype = src__painting__text_painter.TextPainter.prototype;
  dart.addTypeTests(src__painting__text_painter.TextPainter);
  dart.setMethodSignature(src__painting__text_painter.TextPainter, () => ({
    __proto__: dart.getMethods(src__painting__text_painter.TextPainter.__proto__),
    [_createParagraphStyle]: dart.fnType(ui$.ParagraphStyle, [], [ui$.TextDirection]),
    [_applyFloatingPointHack]: dart.fnType(core.double, [core.double]),
    computeDistanceToActualBaseline: dart.fnType(core.double, [ui$.TextBaseline]),
    layout: dart.fnType(dart.void, [], {minWidth: core.double, maxWidth: core.double}),
    paint: dart.fnType(dart.void, [ui$.Canvas, ui$.Offset]),
    [_isUtf16Surrogate]: dart.fnType(core.bool, [core.int]),
    getOffsetAfter: dart.fnType(core.int, [core.int]),
    getOffsetBefore: dart.fnType(core.int, [core.int]),
    [_getRectFromUpstream]: dart.fnType(ui$.Rect, [core.int, ui$.Rect]),
    [_getRectFromDownstream]: dart.fnType(ui$.Rect, [core.int, ui$.Rect]),
    getOffsetForCaret: dart.fnType(ui$.Offset, [ui$.TextPosition, ui$.Rect]),
    getFullHeightForCaret: dart.fnType(core.double, [ui$.TextPosition, ui$.Rect]),
    [_computeCaretMetrics]: dart.fnType(dart.void, [ui$.TextPosition, ui$.Rect]),
    getBoxesForSelection: dart.fnType(core.List$(ui$.TextBox), [src__services__text_editing.TextSelection]),
    getPositionForOffset: dart.fnType(ui$.TextPosition, [ui$.Offset]),
    getWordBoundary: dart.fnType(src__services__text_editing.TextRange, [ui$.TextPosition])
  }));
  dart.setGetterSignature(src__painting__text_painter.TextPainter, () => ({
    __proto__: dart.getGetters(src__painting__text_painter.TextPainter.__proto__),
    text: src__painting__text_span.TextSpan,
    textAlign: ui$.TextAlign,
    textDirection: ui$.TextDirection,
    textScaleFactor: core.double,
    ellipsis: core.String,
    locale: ui$.Locale,
    maxLines: core.int,
    strutStyle: src__painting__strut_style.StrutStyle,
    textWidthBasis: src__painting__text_painter.TextWidthBasis,
    preferredLineHeight: core.double,
    minIntrinsicWidth: core.double,
    maxIntrinsicWidth: core.double,
    width: core.double,
    height: core.double,
    size: ui$.Size,
    didExceedMaxLines: core.bool,
    [_emptyOffset]: ui$.Offset
  }));
  dart.setSetterSignature(src__painting__text_painter.TextPainter, () => ({
    __proto__: dart.getSetters(src__painting__text_painter.TextPainter.__proto__),
    text: src__painting__text_span.TextSpan,
    textAlign: ui$.TextAlign,
    textDirection: ui$.TextDirection,
    textScaleFactor: core.double,
    ellipsis: core.String,
    locale: ui$.Locale,
    maxLines: core.int,
    strutStyle: src__painting__strut_style.StrutStyle,
    textWidthBasis: src__painting__text_painter.TextWidthBasis
  }));
  dart.setLibraryUri(src__painting__text_painter.TextPainter, "package:flutter_web/src/painting/text_painter.dart");
  dart.setFieldSignature(src__painting__text_painter.TextPainter, () => ({
    __proto__: dart.getFields(src__painting__text_painter.TextPainter.__proto__),
    [_paragraph]: dart.fieldType(ui$.Paragraph),
    [_needsLayout]: dart.fieldType(core.bool),
    [_text]: dart.fieldType(src__painting__text_span.TextSpan),
    [_textAlign]: dart.fieldType(ui$.TextAlign),
    [_textDirection]: dart.fieldType(ui$.TextDirection),
    [_textScaleFactor]: dart.fieldType(core.double),
    [_ellipsis]: dart.fieldType(core.String),
    [_locale]: dart.fieldType(ui$.Locale),
    [_maxLines]: dart.fieldType(core.int),
    [_strutStyle]: dart.fieldType(src__painting__strut_style.StrutStyle),
    [_textWidthBasis]: dart.fieldType(src__painting__text_painter.TextWidthBasis),
    [_layoutTemplate]: dart.fieldType(ui$.Paragraph),
    [_lastMinWidth]: dart.fieldType(core.double),
    [_lastMaxWidth]: dart.fieldType(core.double),
    [_caretMetrics]: dart.fieldType(src__painting__text_painter._CaretMetrics),
    [_previousCaretPosition]: dart.fieldType(ui$.TextPosition),
    [_previousCaretPrototype]: dart.fieldType(ui$.Rect)
  }));
  dart.defineLazy(src__painting__text_painter.TextPainter, {
    /*src__painting__text_painter.TextPainter._zwjUtf16*/get _zwjUtf16() {
      return 8205;
    }
  });
  src__painting__fractional_offset.FractionalOffset = class FractionalOffset extends src__painting__alignment.Alignment {
    static fromOffsetAndSize(offset, size) {
      if (!(size != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/fractional_offset.dart", 67, 12, "size != null");
      if (!(offset != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/fractional_offset.dart", 68, 12, "offset != null");
      return new src__painting__fractional_offset.FractionalOffset.new(dart.notNull(offset.dx) / dart.notNull(size.width), dart.notNull(offset.dy) / dart.notNull(size.height));
    }
    static fromOffsetAndRect(offset, rect) {
      return src__painting__fractional_offset.FractionalOffset.fromOffsetAndSize(offset['-'](rect.topLeft), rect.size);
    }
    get dx() {
      return (dart.notNull(this.x) + 1.0) / 2.0;
    }
    get dy() {
      return (dart.notNull(this.y) + 1.0) / 2.0;
    }
    ['-'](other) {
      if (!src__painting__fractional_offset.FractionalOffset.is(other)) return super['-'](other);
      let typedOther = src__painting__fractional_offset.FractionalOffset._check(other);
      return new src__painting__fractional_offset.FractionalOffset.new(dart.notNull(this.dx) - dart.notNull(typedOther.dx), dart.notNull(this.dy) - dart.notNull(typedOther.dy));
    }
    ['+'](other) {
      if (!src__painting__fractional_offset.FractionalOffset.is(other)) return super['+'](other);
      let typedOther = src__painting__fractional_offset.FractionalOffset._check(other);
      return new src__painting__fractional_offset.FractionalOffset.new(dart.notNull(this.dx) + dart.notNull(typedOther.dx), dart.notNull(this.dy) + dart.notNull(typedOther.dy));
    }
    _negate() {
      return new src__painting__fractional_offset.FractionalOffset.new(-dart.notNull(this.dx), -dart.notNull(this.dy));
    }
    ['*'](other) {
      return new src__painting__fractional_offset.FractionalOffset.new(dart.notNull(this.dx) * dart.notNull(other), dart.notNull(this.dy) * dart.notNull(other));
    }
    ['/'](other) {
      return new src__painting__fractional_offset.FractionalOffset.new(dart.notNull(this.dx) / dart.notNull(other), dart.notNull(this.dy) / dart.notNull(other));
    }
    ['~/'](other) {
      return new src__painting__fractional_offset.FractionalOffset.new((dart.notNull(this.dx) / dart.notNull(other))[$truncate]()[$toDouble](), (dart.notNull(this.dy) / dart.notNull(other))[$truncate]()[$toDouble]());
    }
    ['%'](other) {
      return new src__painting__fractional_offset.FractionalOffset.new(this.dx[$modulo](other), this.dy[$modulo](other));
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/fractional_offset.dart", 181, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return new src__painting__fractional_offset.FractionalOffset.new(ui$.lerpDouble(0.5, b.dx, t), ui$.lerpDouble(0.5, b.dy, t));
      if (b == null) return new src__painting__fractional_offset.FractionalOffset.new(ui$.lerpDouble(a.dx, 0.5, t), ui$.lerpDouble(a.dy, 0.5, t));
      return new src__painting__fractional_offset.FractionalOffset.new(ui$.lerpDouble(a.dx, b.dx, t), ui$.lerpDouble(a.dy, b.dy, t));
    }
    toString() {
      return "FractionalOffset(" + this.dx[$toStringAsFixed](1) + ", " + (this.dy[$toStringAsFixed](1) + ")");
    }
  };
  (src__painting__fractional_offset.FractionalOffset.new = function(dx, dy) {
    if (!(dx != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/fractional_offset.dart", 58, 16, "dx != null");
    if (!(dy != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/fractional_offset.dart", 59, 16, "dy != null");
    src__painting__fractional_offset.FractionalOffset.__proto__.new.call(this, dart.notNull(dx) * 2.0 - 1.0, dart.notNull(dy) * 2.0 - 1.0);
  }).prototype = src__painting__fractional_offset.FractionalOffset.prototype;
  dart.addTypeTests(src__painting__fractional_offset.FractionalOffset);
  dart.setMethodSignature(src__painting__fractional_offset.FractionalOffset, () => ({
    __proto__: dart.getMethods(src__painting__fractional_offset.FractionalOffset.__proto__),
    _negate: dart.fnType(src__painting__fractional_offset.FractionalOffset, []),
    '*': dart.fnType(src__painting__fractional_offset.FractionalOffset, [core.double]),
    '/': dart.fnType(src__painting__fractional_offset.FractionalOffset, [core.double]),
    '~/': dart.fnType(src__painting__fractional_offset.FractionalOffset, [core.double]),
    '%': dart.fnType(src__painting__fractional_offset.FractionalOffset, [core.double])
  }));
  dart.setGetterSignature(src__painting__fractional_offset.FractionalOffset, () => ({
    __proto__: dart.getGetters(src__painting__fractional_offset.FractionalOffset.__proto__),
    dx: core.double,
    dy: core.double
  }));
  dart.setLibraryUri(src__painting__fractional_offset.FractionalOffset, "package:flutter_web/src/painting/fractional_offset.dart");
  dart.defineExtensionMethods(src__painting__fractional_offset.FractionalOffset, ['toString']);
  dart.defineLazy(src__painting__fractional_offset.FractionalOffset, {
    /*src__painting__fractional_offset.FractionalOffset.topLeft*/get topLeft() {
      return dart.const(new src__painting__fractional_offset.FractionalOffset.new(0.0, 0.0));
    },
    /*src__painting__fractional_offset.FractionalOffset.topCenter*/get topCenter() {
      return dart.const(new src__painting__fractional_offset.FractionalOffset.new(0.5, 0.0));
    },
    /*src__painting__fractional_offset.FractionalOffset.topRight*/get topRight() {
      return dart.const(new src__painting__fractional_offset.FractionalOffset.new(1.0, 0.0));
    },
    /*src__painting__fractional_offset.FractionalOffset.centerLeft*/get centerLeft() {
      return dart.const(new src__painting__fractional_offset.FractionalOffset.new(0.0, 0.5));
    },
    /*src__painting__fractional_offset.FractionalOffset.center*/get center() {
      return dart.const(new src__painting__fractional_offset.FractionalOffset.new(0.5, 0.5));
    },
    /*src__painting__fractional_offset.FractionalOffset.centerRight*/get centerRight() {
      return dart.const(new src__painting__fractional_offset.FractionalOffset.new(1.0, 0.5));
    },
    /*src__painting__fractional_offset.FractionalOffset.bottomLeft*/get bottomLeft() {
      return dart.const(new src__painting__fractional_offset.FractionalOffset.new(0.0, 1.0));
    },
    /*src__painting__fractional_offset.FractionalOffset.bottomCenter*/get bottomCenter() {
      return dart.const(new src__painting__fractional_offset.FractionalOffset.new(0.5, 1.0));
    },
    /*src__painting__fractional_offset.FractionalOffset.bottomRight*/get bottomRight() {
      return dart.const(new src__painting__fractional_offset.FractionalOffset.new(1.0, 1.0));
    }
  });
  src__painting__geometry.positionDependentBox = function(opts) {
    let size = opts && 'size' in opts ? opts.size : null;
    let childSize = opts && 'childSize' in opts ? opts.childSize : null;
    let target = opts && 'target' in opts ? opts.target : null;
    let preferBelow = opts && 'preferBelow' in opts ? opts.preferBelow : null;
    let verticalOffset = opts && 'verticalOffset' in opts ? opts.verticalOffset : 0.0;
    let margin = opts && 'margin' in opts ? opts.margin : 10.0;
    if (!(size != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/geometry.dart", 49, 10, "size != null");
    if (!(childSize != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/geometry.dart", 50, 10, "childSize != null");
    if (!(target != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/geometry.dart", 51, 10, "target != null");
    if (!(verticalOffset != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/geometry.dart", 52, 10, "verticalOffset != null");
    if (!(preferBelow != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/geometry.dart", 53, 10, "preferBelow != null");
    if (!(margin != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/geometry.dart", 54, 10, "margin != null");
    let fitsBelow = dart.notNull(target.dy) + dart.notNull(verticalOffset) + dart.notNull(childSize.height) <= dart.notNull(size.height) - dart.notNull(margin);
    let fitsAbove = dart.notNull(target.dy) - dart.notNull(verticalOffset) - dart.notNull(childSize.height) >= dart.notNull(margin);
    let tooltipBelow = dart.test(preferBelow) ? fitsBelow || !fitsAbove : !(fitsAbove || !fitsBelow);
    let y = null;
    if (tooltipBelow)
      y = math.min(core.double, dart.notNull(target.dy) + dart.notNull(verticalOffset), dart.notNull(size.height) - dart.notNull(margin));
    else
      y = math.max(core.double, dart.notNull(target.dy) - dart.notNull(verticalOffset) - dart.notNull(childSize.height), margin);
    let x = null;
    if (dart.notNull(size.width) - dart.notNull(margin) * 2.0 < dart.notNull(childSize.width)) {
      x = (dart.notNull(size.width) - dart.notNull(childSize.width)) / 2.0;
    } else {
      let normalizedTargetX = target.dx[$clamp](margin, dart.notNull(size.width) - dart.notNull(margin));
      let edge = dart.notNull(margin) + dart.notNull(childSize.width) / 2.0;
      if (dart.notNull(normalizedTargetX) < edge) {
        x = margin;
      } else if (dart.notNull(normalizedTargetX) > dart.notNull(size.width) - edge) {
        x = dart.notNull(size.width) - dart.notNull(margin) - dart.notNull(childSize.width);
      } else {
        x = dart.notNull(normalizedTargetX) - dart.notNull(childSize.width) / 2.0;
      }
    }
    return new ui$.Offset.new(x, y);
  };
  src__painting__image_decoder.decodeImageFromList = function(bytes) {
    return async.async(ui$.Image, function* decodeImageFromList() {
      let codec = (yield src__painting__binding.PaintingBinding.instance.instantiateImageCodec(bytes));
      let frameInfo = (yield codec.getNextFrame());
      return frameInfo.image;
    });
  };
  dart.defineLazy(src__painting__image_resolution, {
    /*src__painting__image_resolution._kAssetManifestFileName*/get _kAssetManifestFileName() {
      return "AssetManifest.json";
    }
  });
  const _chooseVariant = dart.privateName(src__painting__image_resolution, "_chooseVariant");
  const _parseScale = dart.privateName(src__painting__image_resolution, "_parseScale");
  const _findNearest = dart.privateName(src__painting__image_resolution, "_findNearest");
  src__painting__image_resolution.AssetImage = class AssetImage extends src__painting__image_provider.AssetBundleImageProvider {
    get assetName() {
      return this[assetName$0];
    }
    set assetName(value) {
      super.assetName = value;
    }
    get keyName() {
      return this.package == null ? this.assetName : "packages/" + dart.str(this.package) + "/" + dart.str(this.assetName);
    }
    get bundle() {
      return this[bundle$2];
    }
    set bundle(value) {
      super.bundle = value;
    }
    get package() {
      return this[package$0];
    }
    set package(value) {
      super.package = value;
    }
    obtainKey(configuration) {
      let l = this.bundle != null ? this.bundle : configuration.bundle;
      let chosenBundle = l != null ? l : src__services__asset_bundle.rootBundle;
      let completer = null;
      let result = null;
      chosenBundle.loadStructuredData(MapOfString$ListOfString(), "AssetManifest.json", dart.fn(src__painting__image_resolution.AssetImage._manifestParser, StringToFutureOfMapOfString$ListOfString())).then(dart.void, dart.fn(manifest => {
        let chosenName = this[_chooseVariant](this.keyName, configuration, manifest == null ? null : manifest[$_get](this.keyName));
        let chosenScale = this[_parseScale](chosenName);
        let key = new src__painting__image_provider.AssetBundleImageKey.new({bundle: chosenBundle, name: chosenName, scale: chosenScale});
        if (completer != null) {
          completer.complete(key);
        } else {
          result = new (SynchronousFutureOfAssetBundleImageKey()).new(key);
        }
      }, MapOfString$ListOfStringToNull())).catchError(dart.fn((error, stack) => {
        if (!(completer != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/image_resolution.dart", 200, 14, "completer != null");
        if (!(result == null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/image_resolution.dart", 201, 14, "result == null");
        completer.completeError(error, stack);
      }, dynamicAndStackTraceToNull()));
      if (result != null) {
        return result;
      }
      completer = CompleterOfAssetBundleImageKey().new();
      return completer.future;
    }
    static _manifestParser(jsonData) {
      if (jsonData == null) return null;
      let parsedJson = MapOfString$dynamic()._check(convert.json.decode(jsonData));
      let keys = parsedJson[$keys];
      let parsedManifest = MapOfString$ListOfString().fromIterables(keys, IterableOfListOfString()._check(keys[$map](ListOfString(), dart.fn(key => ListOfString().from(core.Iterable._check(parsedJson[$_get](key))), StringToListOfString()))));
      return new (SynchronousFutureOfMapOfString$ListOfString()).new(parsedManifest);
    }
    [_chooseVariant](main, config, candidates) {
      if (config.devicePixelRatio == null || candidates == null || dart.test(candidates[$isEmpty])) return main;
      let mapping = new (SplayTreeMapOfdouble$String()).new();
      for (let candidate of candidates)
        mapping._set(this[_parseScale](candidate), candidate);
      return this[_findNearest](mapping, config.devicePixelRatio);
    }
    [_findNearest](candidates, value) {
      if (dart.test(candidates.containsKey(value))) return candidates._get(value);
      let lower = candidates.lastKeyBefore(value);
      let upper = candidates.firstKeyAfter(value);
      if (lower == null) return candidates._get(upper);
      if (upper == null) return candidates._get(lower);
      if (dart.notNull(value) > (dart.notNull(lower) + dart.notNull(upper)) / 2)
        return candidates._get(upper);
      else
        return candidates._get(lower);
    }
    [_parseScale](key) {
      if (key == this.assetName) {
        return 1.0;
      }
      let assetDir = key[$substring](0, key[$lastIndexOf]("/"));
      let match = src__painting__image_resolution.AssetImage._extractRatioRegExp.firstMatch(assetDir);
      if (match != null && dart.notNull(match.groupCount) > 0) return core.double.parse(match.group(1));
      return 1.0;
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      let typedOther = src__painting__image_resolution.AssetImage._check(other);
      return this.keyName == typedOther.keyName && dart.equals(this.bundle, typedOther.bundle);
    }
    get hashCode() {
      return ui$.hashValues(this.keyName, this.bundle);
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(bundle: " + dart.str(this.bundle) + ", name: \"" + dart.str(this.keyName) + "\")";
    }
  };
  (src__painting__image_resolution.AssetImage.new = function(assetName, opts) {
    let bundle = opts && 'bundle' in opts ? opts.bundle : null;
    let package$1 = opts && 'package' in opts ? opts.package : null;
    this[assetName$0] = assetName;
    this[bundle$2] = bundle;
    this[package$0] = package$1;
    if (!(assetName != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/image_resolution.dart", 134, 15, "assetName != null");
    src__painting__image_resolution.AssetImage.__proto__.new.call(this);
  }).prototype = src__painting__image_resolution.AssetImage.prototype;
  dart.addTypeTests(src__painting__image_resolution.AssetImage);
  const assetName$0 = Symbol("AssetImage.assetName");
  const bundle$2 = Symbol("AssetImage.bundle");
  const package$0 = Symbol("AssetImage.package");
  dart.setMethodSignature(src__painting__image_resolution.AssetImage, () => ({
    __proto__: dart.getMethods(src__painting__image_resolution.AssetImage.__proto__),
    obtainKey: dart.fnType(async.Future$(src__painting__image_provider.AssetBundleImageKey), [src__painting__image_provider.ImageConfiguration]),
    [_chooseVariant]: dart.fnType(core.String, [core.String, src__painting__image_provider.ImageConfiguration, core.List$(core.String)]),
    [_findNearest]: dart.fnType(core.String, [collection.SplayTreeMap$(core.double, core.String), core.double]),
    [_parseScale]: dart.fnType(core.double, [core.String]),
    toString: dart.fnType(core.String, []),
    [$toString]: dart.fnType(core.String, [])
  }));
  dart.setGetterSignature(src__painting__image_resolution.AssetImage, () => ({
    __proto__: dart.getGetters(src__painting__image_resolution.AssetImage.__proto__),
    keyName: core.String
  }));
  dart.setLibraryUri(src__painting__image_resolution.AssetImage, "package:flutter_web/src/painting/image_resolution.dart");
  dart.setFieldSignature(src__painting__image_resolution.AssetImage, () => ({
    __proto__: dart.getFields(src__painting__image_resolution.AssetImage.__proto__),
    assetName: dart.finalFieldType(core.String),
    bundle: dart.finalFieldType(src__services__asset_bundle.AssetBundle),
    package: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__painting__image_resolution.AssetImage, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__painting__image_resolution.AssetImage, ['hashCode']);
  dart.defineLazy(src__painting__image_resolution.AssetImage, {
    /*src__painting__image_resolution.AssetImage._naturalResolution*/get _naturalResolution() {
      return 1.0;
    },
    /*src__painting__image_resolution.AssetImage._extractRatioRegExp*/get _extractRatioRegExp() {
      return core.RegExp.new("/?(\\d+(\\.\\d*)?)x$");
    }
  });
  src__painting__notched_shapes.NotchedShape = class NotchedShape extends core.Object {};
  (src__painting__notched_shapes.NotchedShape.new = function() {
  }).prototype = src__painting__notched_shapes.NotchedShape.prototype;
  dart.addTypeTests(src__painting__notched_shapes.NotchedShape);
  dart.setLibraryUri(src__painting__notched_shapes.NotchedShape, "package:flutter_web/src/painting/notched_shapes.dart");
  src__painting__notched_shapes.CircularNotchedRectangle = class CircularNotchedRectangle extends core.Object {
    getOuterPath(host, guest) {
      if (!dart.test(host.overlaps(guest))) {
        let _ = new ui$.Path.new();
        _.addRect(host);
        return _;
      }
      let notchRadius = dart.notNull(guest.width) / 2.0;
      let s1 = 15.0;
      let s2 = 1.0;
      let r = notchRadius;
      let a = -1.0 * r - s2;
      let b = dart.notNull(host.top) - dart.notNull(guest.center.dy);
      let n2 = math.sqrt(b * b * r * r * (a * a + b * b - r * r));
      let p2xA = (a * r * r - n2) / (a * a + b * b);
      let p2xB = (a * r * r + n2) / (a * a + b * b);
      let p2yA = math.sqrt(r * r - p2xA * p2xA);
      let p2yB = math.sqrt(r * r - p2xB * p2xB);
      let p = ListOfOffset().new(6);
      p[$_set](0, new ui$.Offset.new(a - s1, b));
      p[$_set](1, new ui$.Offset.new(a, b));
      let cmp = b < 0 ? -1.0 : 1.0;
      p[$_set](2, cmp * p2yA > cmp * p2yB ? new ui$.Offset.new(p2xA, p2yA) : new ui$.Offset.new(p2xB, p2yB));
      p[$_set](3, new ui$.Offset.new(-1.0 * dart.notNull(p[$_get](2).dx), p[$_get](2).dy));
      p[$_set](4, new ui$.Offset.new(-1.0 * dart.notNull(p[$_get](1).dx), p[$_get](1).dy));
      p[$_set](5, new ui$.Offset.new(-1.0 * dart.notNull(p[$_get](0).dx), p[$_get](0).dy));
      for (let i = 0; i < dart.notNull(p[$length]); i = i + 1) {
        p[$_set](i, p[$_get](i)['+'](guest.center));
      }
      let _$ = new ui$.Path.new();
      _$.moveTo(host.left, host.top);
      _$.lineTo(p[$_get](0).dx, p[$_get](0).dy);
      _$.quadraticBezierTo(p[$_get](1).dx, p[$_get](1).dy, p[$_get](2).dx, p[$_get](2).dy);
      _$.arcToPoint(p[$_get](3), {radius: new ui$.Radius.circular(notchRadius), clockwise: false});
      _$.quadraticBezierTo(p[$_get](4).dx, p[$_get](4).dy, p[$_get](5).dx, p[$_get](5).dy);
      _$.lineTo(host.right, host.top);
      _$.lineTo(host.right, host.bottom);
      _$.lineTo(host.left, host.bottom);
      _$.close();
      return _$;
    }
  };
  (src__painting__notched_shapes.CircularNotchedRectangle.new = function() {
  }).prototype = src__painting__notched_shapes.CircularNotchedRectangle.prototype;
  dart.addTypeTests(src__painting__notched_shapes.CircularNotchedRectangle);
  src__painting__notched_shapes.CircularNotchedRectangle[dart.implements] = () => [src__painting__notched_shapes.NotchedShape];
  dart.setMethodSignature(src__painting__notched_shapes.CircularNotchedRectangle, () => ({
    __proto__: dart.getMethods(src__painting__notched_shapes.CircularNotchedRectangle.__proto__),
    getOuterPath: dart.fnType(ui$.Path, [ui$.Rect, ui$.Rect])
  }));
  dart.setLibraryUri(src__painting__notched_shapes.CircularNotchedRectangle, "package:flutter_web/src/painting/notched_shapes.dart");
  src__painting__paint_utilities.paintZigZag = function(canvas, paint, start, end, zigs, width) {
    if (!zigs[$isFinite]) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/paint_utilities.dart", 25, 10, "zigs.isFinite");
    if (!(dart.notNull(zigs) > 0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/painting/paint_utilities.dart", 26, 10, "zigs > 0");
    canvas.save();
    canvas.translate(start.dx, start.dy);
    end = end['-'](start);
    canvas.rotate(math.atan2(end.dy, end.dx));
    let length = end.distance;
    let spacing = dart.notNull(length) / (dart.notNull(zigs) * 2.0);
    let path = new ui$.Path.new();
    path.moveTo(0.0, 0.0);
    for (let index = 0; index < dart.notNull(zigs); index = index + 1) {
      let x = (index * 2.0 + 1.0) * spacing;
      let y = dart.notNull(width) * (index[$modulo](2.0) * 2.0 - 1.0);
      path.lineTo(x, y);
    }
    path.lineTo(length, 0.0);
    canvas.drawPath(path, paint);
    canvas.restore();
  };
  src__animation__curves.Curve = class Curve extends core.Object {
    transform(t) {
      if (!(dart.notNull(t) >= 0.0 && dart.notNull(t) <= 1.0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/curves.dart", 44, 12, "t >= 0.0 && t <= 1.0");
      if (t === 0.0 || t === 1.0) {
        return t;
      }
      return this.transformInternal(t);
    }
    transformInternal(t) {
      dart.throw(new core.UnimplementedError.new());
    }
    get flipped() {
      return new src__animation__curves.FlippedCurve.new(this);
    }
    toString() {
      return dart.str(this[$runtimeType]);
    }
  };
  (src__animation__curves.Curve.new = function() {
  }).prototype = src__animation__curves.Curve.prototype;
  dart.addTypeTests(src__animation__curves.Curve);
  dart.setMethodSignature(src__animation__curves.Curve, () => ({
    __proto__: dart.getMethods(src__animation__curves.Curve.__proto__),
    transform: dart.fnType(core.double, [core.double]),
    transformInternal: dart.fnType(core.double, [core.double])
  }));
  dart.setGetterSignature(src__animation__curves.Curve, () => ({
    __proto__: dart.getGetters(src__animation__curves.Curve.__proto__),
    flipped: src__animation__curves.Curve
  }));
  dart.setLibraryUri(src__animation__curves.Curve, "package:flutter_web/src/animation/curves.dart");
  dart.defineExtensionMethods(src__animation__curves.Curve, ['toString']);
  src__animation__curves._Linear = class _Linear extends src__animation__curves.Curve {
    transformInternal(t) {
      return t;
    }
  };
  (src__animation__curves._Linear.__ = function() {
    src__animation__curves._Linear.__proto__.new.call(this);
  }).prototype = src__animation__curves._Linear.prototype;
  dart.addTypeTests(src__animation__curves._Linear);
  dart.setLibraryUri(src__animation__curves._Linear, "package:flutter_web/src/animation/curves.dart");
  src__animation__curves.SawTooth = class SawTooth extends src__animation__curves.Curve {
    get count() {
      return this[count$];
    }
    set count(value) {
      super.count = value;
    }
    transformInternal(t) {
      t = dart.notNull(t) * dart.notNull(this.count);
      return dart.notNull(t) - t[$truncateToDouble]();
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.count) + ")";
    }
  };
  (src__animation__curves.SawTooth.new = function(count) {
    this[count$] = count;
    if (!(count != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/curves.dart", 98, 39, "count != null");
    src__animation__curves.SawTooth.__proto__.new.call(this);
  }).prototype = src__animation__curves.SawTooth.prototype;
  dart.addTypeTests(src__animation__curves.SawTooth);
  const count$ = Symbol("SawTooth.count");
  dart.setLibraryUri(src__animation__curves.SawTooth, "package:flutter_web/src/animation/curves.dart");
  dart.setFieldSignature(src__animation__curves.SawTooth, () => ({
    __proto__: dart.getFields(src__animation__curves.SawTooth.__proto__),
    count: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__animation__curves.SawTooth, ['toString']);
  src__animation__curves.Interval = class Interval extends src__animation__curves.Curve {
    get begin() {
      return this[begin$0];
    }
    set begin(value) {
      super.begin = value;
    }
    get end() {
      return this[end$0];
    }
    set end(value) {
      super.end = value;
    }
    get curve() {
      return this[curve$];
    }
    set curve(value) {
      super.curve = value;
    }
    transformInternal(t) {
      if (!(dart.notNull(this.begin) >= 0.0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/curves.dart", 148, 12, "begin >= 0.0");
      if (!(dart.notNull(this.begin) <= 1.0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/curves.dart", 149, 12, "begin <= 1.0");
      if (!(dart.notNull(this.end) >= 0.0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/curves.dart", 150, 12, "end >= 0.0");
      if (!(dart.notNull(this.end) <= 1.0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/curves.dart", 151, 12, "end <= 1.0");
      if (!(dart.notNull(this.end) >= dart.notNull(this.begin))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/curves.dart", 152, 12, "end >= begin");
      t = ((dart.notNull(t) - dart.notNull(this.begin)) / (dart.notNull(this.end) - dart.notNull(this.begin)))[$clamp](0.0, 1.0);
      if (t === 0.0 || t === 1.0) return t;
      return this.curve.transform(t);
    }
    toString() {
      if (!src__animation__curves._Linear.is(this.curve)) return dart.str(this[$runtimeType]) + "(" + dart.str(this.begin) + "⋯" + dart.str(this.end) + ")➩" + dart.str(this.curve);
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.begin) + "⋯" + dart.str(this.end) + ")";
    }
  };
  (src__animation__curves.Interval.new = function(begin, end, opts) {
    let curve = opts && 'curve' in opts ? opts.curve : src__animation__curves.Curves.linear;
    this[begin$0] = begin;
    this[end$0] = end;
    this[curve$] = curve;
    if (!(begin != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/curves.dart", 129, 16, "begin != null");
    if (!(end != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/curves.dart", 130, 16, "end != null");
    if (!(curve != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/curves.dart", 131, 16, "curve != null");
    src__animation__curves.Interval.__proto__.new.call(this);
  }).prototype = src__animation__curves.Interval.prototype;
  dart.addTypeTests(src__animation__curves.Interval);
  const begin$0 = Symbol("Interval.begin");
  const end$0 = Symbol("Interval.end");
  const curve$ = Symbol("Interval.curve");
  dart.setLibraryUri(src__animation__curves.Interval, "package:flutter_web/src/animation/curves.dart");
  dart.setFieldSignature(src__animation__curves.Interval, () => ({
    __proto__: dart.getFields(src__animation__curves.Interval.__proto__),
    begin: dart.finalFieldType(core.double),
    end: dart.finalFieldType(core.double),
    curve: dart.finalFieldType(src__animation__curves.Curve)
  }));
  dart.defineExtensionMethods(src__animation__curves.Interval, ['toString']);
  src__animation__curves.Threshold = class Threshold extends src__animation__curves.Curve {
    get threshold() {
      return this[threshold$];
    }
    set threshold(value) {
      super.threshold = value;
    }
    transformInternal(t) {
      if (!(dart.notNull(this.threshold) >= 0.0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/curves.dart", 181, 12, "threshold >= 0.0");
      if (!(dart.notNull(this.threshold) <= 1.0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/curves.dart", 182, 12, "threshold <= 1.0");
      return dart.notNull(t) < dart.notNull(this.threshold) ? 0.0 : 1.0;
    }
  };
  (src__animation__curves.Threshold.new = function(threshold) {
    this[threshold$] = threshold;
    if (!(threshold != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/curves.dart", 172, 44, "threshold != null");
    src__animation__curves.Threshold.__proto__.new.call(this);
  }).prototype = src__animation__curves.Threshold.prototype;
  dart.addTypeTests(src__animation__curves.Threshold);
  const threshold$ = Symbol("Threshold.threshold");
  dart.setLibraryUri(src__animation__curves.Threshold, "package:flutter_web/src/animation/curves.dart");
  dart.setFieldSignature(src__animation__curves.Threshold, () => ({
    __proto__: dart.getFields(src__animation__curves.Threshold.__proto__),
    threshold: dart.finalFieldType(core.double)
  }));
  const _evaluateCubic = dart.privateName(src__animation__curves, "_evaluateCubic");
  src__animation__curves.Cubic = class Cubic extends src__animation__curves.Curve {
    get a() {
      return this[a$];
    }
    set a(value) {
      super.a = value;
    }
    get b() {
      return this[b$];
    }
    set b(value) {
      super.b = value;
    }
    get c() {
      return this[c$];
    }
    set c(value) {
      super.c = value;
    }
    get d() {
      return this[d$];
    }
    set d(value) {
      super.d = value;
    }
    [_evaluateCubic](a, b, m) {
      return 3 * dart.notNull(a) * (1 - dart.notNull(m)) * (1 - dart.notNull(m)) * dart.notNull(m) + 3 * dart.notNull(b) * (1 - dart.notNull(m)) * dart.notNull(m) * dart.notNull(m) + dart.notNull(m) * dart.notNull(m) * dart.notNull(m);
    }
    transformInternal(t) {
      let start = 0.0;
      let end = 1.0;
      while (true) {
        let midpoint = (start + end) / 2;
        let estimate = this[_evaluateCubic](this.a, this.c, midpoint);
        if ((dart.notNull(t) - dart.notNull(estimate))[$abs]() < 0.001) return this[_evaluateCubic](this.b, this.d, midpoint);
        if (dart.notNull(estimate) < dart.notNull(t))
          start = midpoint;
        else
          end = midpoint;
      }
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + this.a[$toStringAsFixed](2) + ", " + this.b[$toStringAsFixed](2) + ", " + this.c[$toStringAsFixed](2) + ", " + this.d[$toStringAsFixed](2) + ")";
    }
  };
  (src__animation__curves.Cubic.new = function(a, b, c, d) {
    this[a$] = a;
    this[b$] = b;
    this[c$] = c;
    this[d$] = d;
    if (!(a != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/curves.dart", 210, 16, "a != null");
    if (!(b != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/curves.dart", 211, 16, "b != null");
    if (!(c != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/curves.dart", 212, 16, "c != null");
    if (!(d != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/curves.dart", 213, 16, "d != null");
    src__animation__curves.Cubic.__proto__.new.call(this);
  }).prototype = src__animation__curves.Cubic.prototype;
  dart.addTypeTests(src__animation__curves.Cubic);
  const a$ = Symbol("Cubic.a");
  const b$ = Symbol("Cubic.b");
  const c$ = Symbol("Cubic.c");
  const d$ = Symbol("Cubic.d");
  dart.setMethodSignature(src__animation__curves.Cubic, () => ({
    __proto__: dart.getMethods(src__animation__curves.Cubic.__proto__),
    [_evaluateCubic]: dart.fnType(core.double, [core.double, core.double, core.double])
  }));
  dart.setLibraryUri(src__animation__curves.Cubic, "package:flutter_web/src/animation/curves.dart");
  dart.setFieldSignature(src__animation__curves.Cubic, () => ({
    __proto__: dart.getFields(src__animation__curves.Cubic.__proto__),
    a: dart.finalFieldType(core.double),
    b: dart.finalFieldType(core.double),
    c: dart.finalFieldType(core.double),
    d: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(src__animation__curves.Cubic, ['toString']);
  dart.defineLazy(src__animation__curves.Cubic, {
    /*src__animation__curves.Cubic._cubicErrorBound*/get _cubicErrorBound() {
      return 0.001;
    }
  });
  src__animation__curves.FlippedCurve = class FlippedCurve extends src__animation__curves.Curve {
    get curve() {
      return this[curve$0];
    }
    set curve(value) {
      super.curve = value;
    }
    transformInternal(t) {
      return 1.0 - dart.notNull(this.curve.transform(1.0 - dart.notNull(t)));
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.curve) + ")";
    }
  };
  (src__animation__curves.FlippedCurve.new = function(curve) {
    this[curve$0] = curve;
    if (!(curve != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/curves.dart", 289, 43, "curve != null");
    src__animation__curves.FlippedCurve.__proto__.new.call(this);
  }).prototype = src__animation__curves.FlippedCurve.prototype;
  dart.addTypeTests(src__animation__curves.FlippedCurve);
  const curve$0 = Symbol("FlippedCurve.curve");
  dart.setLibraryUri(src__animation__curves.FlippedCurve, "package:flutter_web/src/animation/curves.dart");
  dart.setFieldSignature(src__animation__curves.FlippedCurve, () => ({
    __proto__: dart.getFields(src__animation__curves.FlippedCurve.__proto__),
    curve: dart.finalFieldType(src__animation__curves.Curve)
  }));
  dart.defineExtensionMethods(src__animation__curves.FlippedCurve, ['toString']);
  src__animation__curves._DecelerateCurve = class _DecelerateCurve extends src__animation__curves.Curve {
    transformInternal(t) {
      t = 1.0 - dart.notNull(t);
      return 1.0 - dart.notNull(t) * dart.notNull(t);
    }
  };
  (src__animation__curves._DecelerateCurve.__ = function() {
    src__animation__curves._DecelerateCurve.__proto__.new.call(this);
  }).prototype = src__animation__curves._DecelerateCurve.prototype;
  dart.addTypeTests(src__animation__curves._DecelerateCurve);
  dart.setLibraryUri(src__animation__curves._DecelerateCurve, "package:flutter_web/src/animation/curves.dart");
  src__animation__curves._bounce = function(t) {
    if (dart.notNull(t) < 1.0 / 2.75) {
      return 7.5625 * dart.notNull(t) * dart.notNull(t);
    } else if (dart.notNull(t) < 2 / 2.75) {
      t = dart.notNull(t) - 1.5 / 2.75;
      return 7.5625 * dart.notNull(t) * dart.notNull(t) + 0.75;
    } else if (dart.notNull(t) < 2.5 / 2.75) {
      t = dart.notNull(t) - 2.25 / 2.75;
      return 7.5625 * dart.notNull(t) * dart.notNull(t) + 0.9375;
    }
    t = dart.notNull(t) - 2.625 / 2.75;
    return 7.5625 * dart.notNull(t) * dart.notNull(t) + 0.984375;
  };
  src__animation__curves._BounceInCurve = class _BounceInCurve extends src__animation__curves.Curve {
    transformInternal(t) {
      return 1.0 - dart.notNull(src__animation__curves._bounce(1.0 - dart.notNull(t)));
    }
  };
  (src__animation__curves._BounceInCurve.__ = function() {
    src__animation__curves._BounceInCurve.__proto__.new.call(this);
  }).prototype = src__animation__curves._BounceInCurve.prototype;
  dart.addTypeTests(src__animation__curves._BounceInCurve);
  dart.setLibraryUri(src__animation__curves._BounceInCurve, "package:flutter_web/src/animation/curves.dart");
  src__animation__curves._BounceOutCurve = class _BounceOutCurve extends src__animation__curves.Curve {
    transformInternal(t) {
      return src__animation__curves._bounce(t);
    }
  };
  (src__animation__curves._BounceOutCurve.__ = function() {
    src__animation__curves._BounceOutCurve.__proto__.new.call(this);
  }).prototype = src__animation__curves._BounceOutCurve.prototype;
  dart.addTypeTests(src__animation__curves._BounceOutCurve);
  dart.setLibraryUri(src__animation__curves._BounceOutCurve, "package:flutter_web/src/animation/curves.dart");
  src__animation__curves._BounceInOutCurve = class _BounceInOutCurve extends src__animation__curves.Curve {
    transformInternal(t) {
      if (dart.notNull(t) < 0.5)
        return (1.0 - dart.notNull(src__animation__curves._bounce(1.0 - dart.notNull(t) * 2.0))) * 0.5;
      else
        return dart.notNull(src__animation__curves._bounce(dart.notNull(t) * 2.0 - 1.0)) * 0.5 + 0.5;
    }
  };
  (src__animation__curves._BounceInOutCurve.__ = function() {
    src__animation__curves._BounceInOutCurve.__proto__.new.call(this);
  }).prototype = src__animation__curves._BounceInOutCurve.prototype;
  dart.addTypeTests(src__animation__curves._BounceInOutCurve);
  dart.setLibraryUri(src__animation__curves._BounceInOutCurve, "package:flutter_web/src/animation/curves.dart");
  src__animation__curves.ElasticInCurve = class ElasticInCurve extends src__animation__curves.Curve {
    get period() {
      return this[period$];
    }
    set period(value) {
      super.period = value;
    }
    transformInternal(t) {
      let s = dart.notNull(this.period) / 4.0;
      t = dart.notNull(t) - 1.0;
      return -math.pow(2.0, 10.0 * dart.notNull(t)) * math.sin((dart.notNull(t) - s) * (3.141592653589793 * 2.0) / dart.notNull(this.period));
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.period) + ")";
    }
  };
  (src__animation__curves.ElasticInCurve.new = function(period) {
    if (period === void 0) period = 0.4;
    this[period$] = period;
    src__animation__curves.ElasticInCurve.__proto__.new.call(this);
  }).prototype = src__animation__curves.ElasticInCurve.prototype;
  dart.addTypeTests(src__animation__curves.ElasticInCurve);
  const period$ = Symbol("ElasticInCurve.period");
  dart.setLibraryUri(src__animation__curves.ElasticInCurve, "package:flutter_web/src/animation/curves.dart");
  dart.setFieldSignature(src__animation__curves.ElasticInCurve, () => ({
    __proto__: dart.getFields(src__animation__curves.ElasticInCurve.__proto__),
    period: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(src__animation__curves.ElasticInCurve, ['toString']);
  src__animation__curves.ElasticOutCurve = class ElasticOutCurve extends src__animation__curves.Curve {
    get period() {
      return this[period$0];
    }
    set period(value) {
      super.period = value;
    }
    transformInternal(t) {
      let s = dart.notNull(this.period) / 4.0;
      return math.pow(2.0, -10 * dart.notNull(t)) * math.sin((dart.notNull(t) - s) * (3.141592653589793 * 2.0) / dart.notNull(this.period)) + 1.0;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.period) + ")";
    }
  };
  (src__animation__curves.ElasticOutCurve.new = function(period) {
    if (period === void 0) period = 0.4;
    this[period$0] = period;
    src__animation__curves.ElasticOutCurve.__proto__.new.call(this);
  }).prototype = src__animation__curves.ElasticOutCurve.prototype;
  dart.addTypeTests(src__animation__curves.ElasticOutCurve);
  const period$0 = Symbol("ElasticOutCurve.period");
  dart.setLibraryUri(src__animation__curves.ElasticOutCurve, "package:flutter_web/src/animation/curves.dart");
  dart.setFieldSignature(src__animation__curves.ElasticOutCurve, () => ({
    __proto__: dart.getFields(src__animation__curves.ElasticOutCurve.__proto__),
    period: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(src__animation__curves.ElasticOutCurve, ['toString']);
  src__animation__curves.ElasticInOutCurve = class ElasticInOutCurve extends src__animation__curves.Curve {
    get period() {
      return this[period$1];
    }
    set period(value) {
      super.period = value;
    }
    transformInternal(t) {
      let s = dart.notNull(this.period) / 4.0;
      t = 2.0 * dart.notNull(t) - 1.0;
      if (dart.notNull(t) < 0.0)
        return -0.5 * math.pow(2.0, 10.0 * dart.notNull(t)) * math.sin((dart.notNull(t) - s) * (3.141592653589793 * 2.0) / dart.notNull(this.period));
      else
        return math.pow(2.0, -10.0 * dart.notNull(t)) * math.sin((dart.notNull(t) - s) * (3.141592653589793 * 2.0) / dart.notNull(this.period)) * 0.5 + 1.0;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.period) + ")";
    }
  };
  (src__animation__curves.ElasticInOutCurve.new = function(period) {
    if (period === void 0) period = 0.4;
    this[period$1] = period;
    src__animation__curves.ElasticInOutCurve.__proto__.new.call(this);
  }).prototype = src__animation__curves.ElasticInOutCurve.prototype;
  dart.addTypeTests(src__animation__curves.ElasticInOutCurve);
  const period$1 = Symbol("ElasticInOutCurve.period");
  dart.setLibraryUri(src__animation__curves.ElasticInOutCurve, "package:flutter_web/src/animation/curves.dart");
  dart.setFieldSignature(src__animation__curves.ElasticInOutCurve, () => ({
    __proto__: dart.getFields(src__animation__curves.ElasticInOutCurve.__proto__),
    period: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(src__animation__curves.ElasticInOutCurve, ['toString']);
  src__animation__curves.Curves = class Curves extends core.Object {};
  (src__animation__curves.Curves.__ = function() {
  }).prototype = src__animation__curves.Curves.prototype;
  dart.addTypeTests(src__animation__curves.Curves);
  dart.setLibraryUri(src__animation__curves.Curves, "package:flutter_web/src/animation/curves.dart");
  dart.defineLazy(src__animation__curves.Curves, {
    /*src__animation__curves.Curves.linear*/get linear() {
      return dart.const(new src__animation__curves._Linear.__());
    },
    /*src__animation__curves.Curves.decelerate*/get decelerate() {
      return dart.const(new src__animation__curves._DecelerateCurve.__());
    },
    /*src__animation__curves.Curves.fastLinearToSlowEaseIn*/get fastLinearToSlowEaseIn() {
      return dart.const(new src__animation__curves.Cubic.new(0.18, 1.0, 0.04, 1.0));
    },
    /*src__animation__curves.Curves.ease*/get ease() {
      return dart.const(new src__animation__curves.Cubic.new(0.25, 0.1, 0.25, 1.0));
    },
    /*src__animation__curves.Curves.easeIn*/get easeIn() {
      return dart.const(new src__animation__curves.Cubic.new(0.42, 0.0, 1.0, 1.0));
    },
    /*src__animation__curves.Curves.easeInToLinear*/get easeInToLinear() {
      return dart.const(new src__animation__curves.Cubic.new(0.67, 0.03, 0.65, 0.09));
    },
    /*src__animation__curves.Curves.easeInSine*/get easeInSine() {
      return dart.const(new src__animation__curves.Cubic.new(0.47, 0.0, 0.745, 0.715));
    },
    /*src__animation__curves.Curves.easeInQuad*/get easeInQuad() {
      return dart.const(new src__animation__curves.Cubic.new(0.55, 0.085, 0.68, 0.53));
    },
    /*src__animation__curves.Curves.easeInCubic*/get easeInCubic() {
      return dart.const(new src__animation__curves.Cubic.new(0.55, 0.055, 0.675, 0.19));
    },
    /*src__animation__curves.Curves.easeInQuart*/get easeInQuart() {
      return dart.const(new src__animation__curves.Cubic.new(0.895, 0.03, 0.685, 0.22));
    },
    /*src__animation__curves.Curves.easeInQuint*/get easeInQuint() {
      return dart.const(new src__animation__curves.Cubic.new(0.755, 0.05, 0.855, 0.06));
    },
    /*src__animation__curves.Curves.easeInExpo*/get easeInExpo() {
      return dart.const(new src__animation__curves.Cubic.new(0.95, 0.05, 0.795, 0.035));
    },
    /*src__animation__curves.Curves.easeInCirc*/get easeInCirc() {
      return dart.const(new src__animation__curves.Cubic.new(0.6, 0.04, 0.98, 0.335));
    },
    /*src__animation__curves.Curves.easeInBack*/get easeInBack() {
      return dart.const(new src__animation__curves.Cubic.new(0.6, -0.28, 0.735, 0.045));
    },
    /*src__animation__curves.Curves.easeOut*/get easeOut() {
      return dart.const(new src__animation__curves.Cubic.new(0.0, 0.0, 0.58, 1.0));
    },
    /*src__animation__curves.Curves.linearToEaseOut*/get linearToEaseOut() {
      return dart.const(new src__animation__curves.Cubic.new(0.35, 0.91, 0.33, 0.97));
    },
    /*src__animation__curves.Curves.easeOutSine*/get easeOutSine() {
      return dart.const(new src__animation__curves.Cubic.new(0.39, 0.575, 0.565, 1.0));
    },
    /*src__animation__curves.Curves.easeOutQuad*/get easeOutQuad() {
      return dart.const(new src__animation__curves.Cubic.new(0.25, 0.46, 0.45, 0.94));
    },
    /*src__animation__curves.Curves.easeOutCubic*/get easeOutCubic() {
      return dart.const(new src__animation__curves.Cubic.new(0.215, 0.61, 0.355, 1.0));
    },
    /*src__animation__curves.Curves.easeOutQuart*/get easeOutQuart() {
      return dart.const(new src__animation__curves.Cubic.new(0.165, 0.84, 0.44, 1.0));
    },
    /*src__animation__curves.Curves.easeOutQuint*/get easeOutQuint() {
      return dart.const(new src__animation__curves.Cubic.new(0.23, 1.0, 0.32, 1.0));
    },
    /*src__animation__curves.Curves.easeOutExpo*/get easeOutExpo() {
      return dart.const(new src__animation__curves.Cubic.new(0.19, 1.0, 0.22, 1.0));
    },
    /*src__animation__curves.Curves.easeOutCirc*/get easeOutCirc() {
      return dart.const(new src__animation__curves.Cubic.new(0.075, 0.82, 0.165, 1.0));
    },
    /*src__animation__curves.Curves.easeOutBack*/get easeOutBack() {
      return dart.const(new src__animation__curves.Cubic.new(0.175, 0.885, 0.32, 1.275));
    },
    /*src__animation__curves.Curves.easeInOut*/get easeInOut() {
      return dart.const(new src__animation__curves.Cubic.new(0.42, 0.0, 0.58, 1.0));
    },
    /*src__animation__curves.Curves.easeInOutSine*/get easeInOutSine() {
      return dart.const(new src__animation__curves.Cubic.new(0.445, 0.05, 0.55, 0.95));
    },
    /*src__animation__curves.Curves.easeInOutQuad*/get easeInOutQuad() {
      return dart.const(new src__animation__curves.Cubic.new(0.455, 0.03, 0.515, 0.955));
    },
    /*src__animation__curves.Curves.easeInOutCubic*/get easeInOutCubic() {
      return dart.const(new src__animation__curves.Cubic.new(0.645, 0.045, 0.355, 1.0));
    },
    /*src__animation__curves.Curves.easeInOutQuart*/get easeInOutQuart() {
      return dart.const(new src__animation__curves.Cubic.new(0.77, 0.0, 0.175, 1.0));
    },
    /*src__animation__curves.Curves.easeInOutQuint*/get easeInOutQuint() {
      return dart.const(new src__animation__curves.Cubic.new(0.86, 0.0, 0.07, 1.0));
    },
    /*src__animation__curves.Curves.easeInOutExpo*/get easeInOutExpo() {
      return dart.const(new src__animation__curves.Cubic.new(1.0, 0.0, 0.0, 1.0));
    },
    /*src__animation__curves.Curves.easeInOutCirc*/get easeInOutCirc() {
      return dart.const(new src__animation__curves.Cubic.new(0.785, 0.135, 0.15, 0.86));
    },
    /*src__animation__curves.Curves.easeInOutBack*/get easeInOutBack() {
      return dart.const(new src__animation__curves.Cubic.new(0.68, -0.55, 0.265, 1.55));
    },
    /*src__animation__curves.Curves.fastOutSlowIn*/get fastOutSlowIn() {
      return dart.const(new src__animation__curves.Cubic.new(0.4, 0.0, 0.2, 1.0));
    },
    /*src__animation__curves.Curves.slowMiddle*/get slowMiddle() {
      return dart.const(new src__animation__curves.Cubic.new(0.15, 0.85, 0.85, 0.15));
    },
    /*src__animation__curves.Curves.bounceIn*/get bounceIn() {
      return dart.const(new src__animation__curves._BounceInCurve.__());
    },
    /*src__animation__curves.Curves.bounceOut*/get bounceOut() {
      return dart.const(new src__animation__curves._BounceOutCurve.__());
    },
    /*src__animation__curves.Curves.bounceInOut*/get bounceInOut() {
      return dart.const(new src__animation__curves._BounceInOutCurve.__());
    },
    /*src__animation__curves.Curves.elasticIn*/get elasticIn() {
      return dart.const(new src__animation__curves.ElasticInCurve.new());
    },
    /*src__animation__curves.Curves.elasticOut*/get elasticOut() {
      return dart.const(new src__animation__curves.ElasticOutCurve.new());
    },
    /*src__animation__curves.Curves.elasticInOut*/get elasticInOut() {
      return dart.const(new src__animation__curves.ElasticInOutCurve.new());
    }
  });
  const _listenerCounter = dart.privateName(src__animation__listener_helpers, "_listenerCounter");
  src__animation__listener_helpers.AnimationLazyListenerMixin = class AnimationLazyListenerMixin extends core.Object {};
  src__animation__listener_helpers.AnimationLazyListenerMixin[dart.mixinOn] = Object => class AnimationLazyListenerMixin extends Object {
    didRegisterListener() {
      if (!(dart.notNull(this[_listenerCounter]) >= 0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/listener_helpers.dart", 29, 12, "_listenerCounter >= 0");
      if (this[_listenerCounter] === 0) this.didStartListening();
      this[_listenerCounter] = dart.notNull(this[_listenerCounter]) + 1;
    }
    didUnregisterListener() {
      if (!(dart.notNull(this[_listenerCounter]) >= 1)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/listener_helpers.dart", 41, 12, "_listenerCounter >= 1");
      this[_listenerCounter] = dart.notNull(this[_listenerCounter]) - 1;
      if (this[_listenerCounter] === 0) this.didStopListening();
    }
    get isListening() {
      return dart.notNull(this[_listenerCounter]) > 0;
    }
  };
  (src__animation__listener_helpers.AnimationLazyListenerMixin.new = function() {
    this[_listenerCounter] = 0;
  }).prototype = src__animation__listener_helpers.AnimationLazyListenerMixin.prototype;
  dart.addTypeTests(src__animation__listener_helpers.AnimationLazyListenerMixin);
  src__animation__listener_helpers.AnimationLazyListenerMixin[dart.implements] = () => [core.Object];
  dart.setMethodSignature(src__animation__listener_helpers.AnimationLazyListenerMixin, () => ({
    __proto__: dart.getMethods(src__animation__listener_helpers.AnimationLazyListenerMixin.__proto__),
    didRegisterListener: dart.fnType(dart.void, []),
    didUnregisterListener: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__animation__listener_helpers.AnimationLazyListenerMixin, () => ({
    __proto__: dart.getGetters(src__animation__listener_helpers.AnimationLazyListenerMixin.__proto__),
    isListening: core.bool
  }));
  dart.setLibraryUri(src__animation__listener_helpers.AnimationLazyListenerMixin, "package:flutter_web/src/animation/listener_helpers.dart");
  dart.setFieldSignature(src__animation__listener_helpers.AnimationLazyListenerMixin, () => ({
    __proto__: dart.getFields(src__animation__listener_helpers.AnimationLazyListenerMixin.__proto__),
    [_listenerCounter]: dart.fieldType(core.int)
  }));
  src__animation__listener_helpers.AnimationEagerListenerMixin = class AnimationEagerListenerMixin extends core.Object {};
  src__animation__listener_helpers.AnimationEagerListenerMixin[dart.mixinOn] = Object => class AnimationEagerListenerMixin extends Object {
    didRegisterListener() {}
    didUnregisterListener() {}
    dispose() {}
  };
  (src__animation__listener_helpers.AnimationEagerListenerMixin.new = function() {
  }).prototype = src__animation__listener_helpers.AnimationEagerListenerMixin.prototype;
  dart.addTypeTests(src__animation__listener_helpers.AnimationEagerListenerMixin);
  src__animation__listener_helpers.AnimationEagerListenerMixin[dart.implements] = () => [core.Object];
  dart.setMethodSignature(src__animation__listener_helpers.AnimationEagerListenerMixin, () => ({
    __proto__: dart.getMethods(src__animation__listener_helpers.AnimationEagerListenerMixin.__proto__),
    didRegisterListener: dart.fnType(dart.void, []),
    didUnregisterListener: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(src__animation__listener_helpers.AnimationEagerListenerMixin, "package:flutter_web/src/animation/listener_helpers.dart");
  const _listeners$ = dart.privateName(src__animation__listener_helpers, "_listeners");
  src__animation__listener_helpers.AnimationLocalListenersMixin = class AnimationLocalListenersMixin extends core.Object {};
  src__animation__listener_helpers.AnimationLocalListenersMixin[dart.mixinOn] = Object => class AnimationLocalListenersMixin extends Object {
    addListener(listener) {
      this.didRegisterListener();
      this[_listeners$].add(listener);
    }
    removeListener(listener) {
      let removed = this[_listeners$].remove(listener);
      if (dart.test(removed)) {
        this.didUnregisterListener();
      }
    }
    notifyListeners() {
      let localListeners = ListOfVoidCallback().from(this[_listeners$]);
      for (let listener of localListeners) {
        try {
          if (dart.test(this[_listeners$].contains(listener))) listener();
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          src__foundation__assertions.FlutterError.reportError(new src__foundation__assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "animation library", context: new src__foundation__assertions.ErrorDescription.new("while notifying listeners for " + dart.str(this[$runtimeType])), informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsPropertyOfAnimationLocalListenersMixin()).new((function*() {
              yield new (DiagnosticsPropertyOfAnimationLocalListenersMixin()).new("The " + dart.str(this[$runtimeType]) + " notifying listeners was", this, {style: src__foundation__diagnostics.DiagnosticsTreeStyle.errorProperty});
            }).bind(this)), VoidToIterableOfDiagnosticsPropertyOfAnimationLocalListenersMixin())}));
        }
      }
    }
  };
  (src__animation__listener_helpers.AnimationLocalListenersMixin.new = function() {
    this[_listeners$] = new (ObserverListOfVoidCallback()).new();
  }).prototype = src__animation__listener_helpers.AnimationLocalListenersMixin.prototype;
  dart.addTypeTests(src__animation__listener_helpers.AnimationLocalListenersMixin);
  src__animation__listener_helpers.AnimationLocalListenersMixin[dart.implements] = () => [core.Object];
  dart.setMethodSignature(src__animation__listener_helpers.AnimationLocalListenersMixin, () => ({
    __proto__: dart.getMethods(src__animation__listener_helpers.AnimationLocalListenersMixin.__proto__),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    notifyListeners: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(src__animation__listener_helpers.AnimationLocalListenersMixin, "package:flutter_web/src/animation/listener_helpers.dart");
  dart.setFieldSignature(src__animation__listener_helpers.AnimationLocalListenersMixin, () => ({
    __proto__: dart.getFields(src__animation__listener_helpers.AnimationLocalListenersMixin.__proto__),
    [_listeners$]: dart.finalFieldType(ObserverListOfVoidCallback())
  }));
  const _statusListeners = dart.privateName(src__animation__listener_helpers, "_statusListeners");
  src__animation__listener_helpers.AnimationLocalStatusListenersMixin = class AnimationLocalStatusListenersMixin extends core.Object {};
  src__animation__listener_helpers.AnimationLocalStatusListenersMixin[dart.mixinOn] = Object => class AnimationLocalStatusListenersMixin extends Object {
    addStatusListener(listener) {
      this.didRegisterListener();
      this[_statusListeners].add(listener);
    }
    removeStatusListener(listener) {
      let removed = this[_statusListeners].remove(listener);
      if (dart.test(removed)) {
        this.didUnregisterListener();
      }
    }
    notifyStatusListeners(status) {
      let localListeners = ListOfAnimationStatusTovoid().from(this[_statusListeners]);
      for (let listener of localListeners) {
        try {
          if (dart.test(this[_statusListeners].contains(listener))) listener(status);
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          src__foundation__assertions.FlutterError.reportError(new src__foundation__assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "animation library", context: new src__foundation__assertions.ErrorDescription.new("while notifying status listeners for " + dart.str(this[$runtimeType])), informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsPropertyOfAnimationLocalStatusListenersMixin()).new((function*() {
              yield new (DiagnosticsPropertyOfAnimationLocalStatusListenersMixin()).new("The " + dart.str(this[$runtimeType]) + " notifying status listeners was", this, {style: src__foundation__diagnostics.DiagnosticsTreeStyle.errorProperty});
            }).bind(this)), VoidToIterableOfDiagnosticsPropertyOfAnimationLocalStatusListenersMixin())}));
        }
      }
    }
  };
  (src__animation__listener_helpers.AnimationLocalStatusListenersMixin.new = function() {
    this[_statusListeners] = new (ObserverListOfAnimationStatusTovoid()).new();
  }).prototype = src__animation__listener_helpers.AnimationLocalStatusListenersMixin.prototype;
  dart.addTypeTests(src__animation__listener_helpers.AnimationLocalStatusListenersMixin);
  src__animation__listener_helpers.AnimationLocalStatusListenersMixin[dart.implements] = () => [core.Object];
  dart.setMethodSignature(src__animation__listener_helpers.AnimationLocalStatusListenersMixin, () => ({
    __proto__: dart.getMethods(src__animation__listener_helpers.AnimationLocalStatusListenersMixin.__proto__),
    addStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [src__animation__animation.AnimationStatus])]),
    removeStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [src__animation__animation.AnimationStatus])]),
    notifyStatusListeners: dart.fnType(dart.void, [src__animation__animation.AnimationStatus])
  }));
  dart.setLibraryUri(src__animation__listener_helpers.AnimationLocalStatusListenersMixin, "package:flutter_web/src/animation/listener_helpers.dart");
  dart.setFieldSignature(src__animation__listener_helpers.AnimationLocalStatusListenersMixin, () => ({
    __proto__: dart.getFields(src__animation__listener_helpers.AnimationLocalStatusListenersMixin.__proto__),
    [_statusListeners]: dart.finalFieldType(ObserverListOfAnimationStatusTovoid())
  }));
  const _is_Animation_default = Symbol('_is_Animation_default');
  src__animation__animation.Animation$ = dart.generic(T => {
    let ValueListenableOfT = () => (ValueListenableOfT = dart.constFn(src__foundation__change_notifier.ValueListenable$(T)))();
    class Animation extends src__foundation__change_notifier.Listenable {
      get isDismissed() {
        return this.status === src__animation__animation.AnimationStatus.dismissed;
      }
      get isCompleted() {
        return this.status === src__animation__animation.AnimationStatus.completed;
      }
      drive(U, child) {
        if (!AnimationOfdouble().is(this)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/animation.dart", 162, 12, "this is Animation<double>");
        return child.animate(AnimationOfdouble()._check(this));
      }
      toString() {
        return dart.str(src__foundation__diagnostics.describeIdentity(this)) + "(" + dart.str(this.toStringDetails()) + ")";
      }
      toStringDetails() {
        if (!(this.status != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/animation.dart", 187, 12, "status != null");
        let icon = null;
        switch (this.status) {
          case src__animation__animation.AnimationStatus.forward:
          {
            icon = "▶";
            break;
          }
          case src__animation__animation.AnimationStatus.reverse:
          {
            icon = "◀";
            break;
          }
          case src__animation__animation.AnimationStatus.completed:
          {
            icon = "⏭";
            break;
          }
          case src__animation__animation.AnimationStatus.dismissed:
          {
            icon = "⏮";
            break;
          }
        }
        if (!(icon != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/animation.dart", 203, 12, "icon != null");
        return dart.str(icon);
      }
    }
    (Animation.new = function() {
      Animation.__proto__.new.call(this);
    }).prototype = Animation.prototype;
    dart.addTypeTests(Animation);
    Animation.prototype[_is_Animation_default] = true;
    Animation[dart.implements] = () => [ValueListenableOfT()];
    dart.setMethodSignature(Animation, () => ({
      __proto__: dart.getMethods(Animation.__proto__),
      drive: dart.gFnType(U => [src__animation__animation.Animation$(U), [src__animation__tween.Animatable$(U)]]),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, []),
      toStringDetails: dart.fnType(core.String, [])
    }));
    dart.setGetterSignature(Animation, () => ({
      __proto__: dart.getGetters(Animation.__proto__),
      isDismissed: core.bool,
      isCompleted: core.bool
    }));
    dart.setLibraryUri(Animation, "package:flutter_web/src/animation/animation.dart");
    dart.defineExtensionMethods(Animation, ['toString']);
    return Animation;
  });
  src__animation__animation.Animation = src__animation__animation.Animation$();
  dart.addTypeTests(src__animation__animation.Animation, _is_Animation_default);
  src__animation__animations._AlwaysCompleteAnimation = class _AlwaysCompleteAnimation extends src__animation__animation.Animation$(core.double) {
    addListener(listener) {}
    removeListener(listener) {}
    addStatusListener(listener) {}
    removeStatusListener(listener) {}
    get status() {
      return src__animation__animation.AnimationStatus.completed;
    }
    get value() {
      return 1.0;
    }
    toString() {
      return "kAlwaysCompleteAnimation";
    }
  };
  (src__animation__animations._AlwaysCompleteAnimation.new = function() {
    src__animation__animations._AlwaysCompleteAnimation.__proto__.new.call(this);
  }).prototype = src__animation__animations._AlwaysCompleteAnimation.prototype;
  dart.addTypeTests(src__animation__animations._AlwaysCompleteAnimation);
  dart.setMethodSignature(src__animation__animations._AlwaysCompleteAnimation, () => ({
    __proto__: dart.getMethods(src__animation__animations._AlwaysCompleteAnimation.__proto__),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    addStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [src__animation__animation.AnimationStatus])]),
    removeStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [src__animation__animation.AnimationStatus])]),
    toString: dart.fnType(core.String, []),
    [$toString]: dart.fnType(core.String, [])
  }));
  dart.setGetterSignature(src__animation__animations._AlwaysCompleteAnimation, () => ({
    __proto__: dart.getGetters(src__animation__animations._AlwaysCompleteAnimation.__proto__),
    status: src__animation__animation.AnimationStatus,
    value: core.double
  }));
  dart.setLibraryUri(src__animation__animations._AlwaysCompleteAnimation, "package:flutter_web/src/animation/animations.dart");
  dart.defineExtensionMethods(src__animation__animations._AlwaysCompleteAnimation, ['toString']);
  dart.defineLazy(src__animation__animations, {
    /*src__animation__animations.kAlwaysCompleteAnimation*/get kAlwaysCompleteAnimation() {
      return dart.const(new src__animation__animations._AlwaysCompleteAnimation.new());
    }
  });
  src__animation__animations._AlwaysDismissedAnimation = class _AlwaysDismissedAnimation extends src__animation__animation.Animation$(core.double) {
    addListener(listener) {}
    removeListener(listener) {}
    addStatusListener(listener) {}
    removeStatusListener(listener) {}
    get status() {
      return src__animation__animation.AnimationStatus.dismissed;
    }
    get value() {
      return 0.0;
    }
    toString() {
      return "kAlwaysDismissedAnimation";
    }
  };
  (src__animation__animations._AlwaysDismissedAnimation.new = function() {
    src__animation__animations._AlwaysDismissedAnimation.__proto__.new.call(this);
  }).prototype = src__animation__animations._AlwaysDismissedAnimation.prototype;
  dart.addTypeTests(src__animation__animations._AlwaysDismissedAnimation);
  dart.setMethodSignature(src__animation__animations._AlwaysDismissedAnimation, () => ({
    __proto__: dart.getMethods(src__animation__animations._AlwaysDismissedAnimation.__proto__),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    addStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [src__animation__animation.AnimationStatus])]),
    removeStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [src__animation__animation.AnimationStatus])]),
    toString: dart.fnType(core.String, []),
    [$toString]: dart.fnType(core.String, [])
  }));
  dart.setGetterSignature(src__animation__animations._AlwaysDismissedAnimation, () => ({
    __proto__: dart.getGetters(src__animation__animations._AlwaysDismissedAnimation.__proto__),
    status: src__animation__animation.AnimationStatus,
    value: core.double
  }));
  dart.setLibraryUri(src__animation__animations._AlwaysDismissedAnimation, "package:flutter_web/src/animation/animations.dart");
  dart.defineExtensionMethods(src__animation__animations._AlwaysDismissedAnimation, ['toString']);
  dart.defineLazy(src__animation__animations, {
    /*src__animation__animations.kAlwaysDismissedAnimation*/get kAlwaysDismissedAnimation() {
      return dart.const(new src__animation__animations._AlwaysDismissedAnimation.new());
    }
  });
  const _is_AlwaysStoppedAnimation_default = Symbol('_is_AlwaysStoppedAnimation_default');
  src__animation__animations.AlwaysStoppedAnimation$ = dart.generic(T => {
    class AlwaysStoppedAnimation extends src__animation__animation.Animation$(T) {
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      addListener(listener) {}
      removeListener(listener) {}
      addStatusListener(listener) {}
      removeStatusListener(listener) {}
      get status() {
        return src__animation__animation.AnimationStatus.forward;
      }
      toStringDetails() {
        return dart.str(super.toStringDetails()) + " " + dart.str(this.value) + "; paused";
      }
    }
    (AlwaysStoppedAnimation.new = function(value) {
      this[value$] = value;
      AlwaysStoppedAnimation.__proto__.new.call(this);
    }).prototype = AlwaysStoppedAnimation.prototype;
    dart.addTypeTests(AlwaysStoppedAnimation);
    AlwaysStoppedAnimation.prototype[_is_AlwaysStoppedAnimation_default] = true;
    const value$ = Symbol("AlwaysStoppedAnimation.value");
    dart.setMethodSignature(AlwaysStoppedAnimation, () => ({
      __proto__: dart.getMethods(AlwaysStoppedAnimation.__proto__),
      addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      addStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [src__animation__animation.AnimationStatus])]),
      removeStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [src__animation__animation.AnimationStatus])])
    }));
    dart.setGetterSignature(AlwaysStoppedAnimation, () => ({
      __proto__: dart.getGetters(AlwaysStoppedAnimation.__proto__),
      status: src__animation__animation.AnimationStatus
    }));
    dart.setLibraryUri(AlwaysStoppedAnimation, "package:flutter_web/src/animation/animations.dart");
    dart.setFieldSignature(AlwaysStoppedAnimation, () => ({
      __proto__: dart.getFields(AlwaysStoppedAnimation.__proto__),
      value: dart.finalFieldType(T)
    }));
    return AlwaysStoppedAnimation;
  });
  src__animation__animations.AlwaysStoppedAnimation = src__animation__animations.AlwaysStoppedAnimation$();
  dart.addTypeTests(src__animation__animations.AlwaysStoppedAnimation, _is_AlwaysStoppedAnimation_default);
  const _is_AnimationWithParentMixin_default = Symbol('_is_AnimationWithParentMixin_default');
  src__animation__animations.AnimationWithParentMixin$ = dart.generic(T => {
    class AnimationWithParentMixin extends core.Object {}
    AnimationWithParentMixin[dart.mixinOn] = Object => class AnimationWithParentMixin extends Object {
      addListener(listener) {
        return this.parent.addListener(listener);
      }
      removeListener(listener) {
        return this.parent.removeListener(listener);
      }
      addStatusListener(listener) {
        return this.parent.addStatusListener(listener);
      }
      removeStatusListener(listener) {
        return this.parent.removeStatusListener(listener);
      }
      get status() {
        return this.parent.status;
      }
    };
    (AnimationWithParentMixin.new = function() {
    }).prototype = AnimationWithParentMixin.prototype;
    dart.addTypeTests(AnimationWithParentMixin);
    AnimationWithParentMixin.prototype[_is_AnimationWithParentMixin_default] = true;
    AnimationWithParentMixin[dart.implements] = () => [core.Object];
    dart.setMethodSignature(AnimationWithParentMixin, () => ({
      __proto__: dart.getMethods(AnimationWithParentMixin.__proto__),
      addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      addStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [src__animation__animation.AnimationStatus])]),
      removeStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [src__animation__animation.AnimationStatus])])
    }));
    dart.setGetterSignature(AnimationWithParentMixin, () => ({
      __proto__: dart.getGetters(AnimationWithParentMixin.__proto__),
      status: src__animation__animation.AnimationStatus
    }));
    dart.setLibraryUri(AnimationWithParentMixin, "package:flutter_web/src/animation/animations.dart");
    return AnimationWithParentMixin;
  });
  src__animation__animations.AnimationWithParentMixin = src__animation__animations.AnimationWithParentMixin$();
  dart.addTypeTests(src__animation__animations.AnimationWithParentMixin, _is_AnimationWithParentMixin_default);
  const _status = dart.privateName(src__animation__animations, "_status");
  const _value = dart.privateName(src__animation__animations, "_value");
  const _parent = dart.privateName(src__animation__animations, "_parent");
  const Animation_AnimationLazyListenerMixin$ = class Animation_AnimationLazyListenerMixin extends src__animation__animation.Animation$(core.double) {};
  (Animation_AnimationLazyListenerMixin$.new = function() {
    src__animation__listener_helpers.AnimationLazyListenerMixin.new.call(this);
    Animation_AnimationLazyListenerMixin$.__proto__.new.call(this);
  }).prototype = Animation_AnimationLazyListenerMixin$.prototype;
  dart.applyMixin(Animation_AnimationLazyListenerMixin$, src__animation__listener_helpers.AnimationLazyListenerMixin);
  const Animation_AnimationLocalListenersMixin$ = class Animation_AnimationLocalListenersMixin extends Animation_AnimationLazyListenerMixin$ {};
  (Animation_AnimationLocalListenersMixin$.new = function() {
    src__animation__listener_helpers.AnimationLocalListenersMixin.new.call(this);
    Animation_AnimationLocalListenersMixin$.__proto__.new.call(this);
  }).prototype = Animation_AnimationLocalListenersMixin$.prototype;
  dart.applyMixin(Animation_AnimationLocalListenersMixin$, src__animation__listener_helpers.AnimationLocalListenersMixin);
  const Animation_AnimationLocalStatusListenersMixin$ = class Animation_AnimationLocalStatusListenersMixin extends Animation_AnimationLocalListenersMixin$ {};
  (Animation_AnimationLocalStatusListenersMixin$.new = function() {
    src__animation__listener_helpers.AnimationLocalStatusListenersMixin.new.call(this);
    Animation_AnimationLocalStatusListenersMixin$.__proto__.new.call(this);
  }).prototype = Animation_AnimationLocalStatusListenersMixin$.prototype;
  dart.applyMixin(Animation_AnimationLocalStatusListenersMixin$, src__animation__listener_helpers.AnimationLocalStatusListenersMixin);
  src__animation__animations.ProxyAnimation = class ProxyAnimation extends Animation_AnimationLocalStatusListenersMixin$ {
    get parent() {
      return this[_parent];
    }
    set parent(value) {
      if (dart.equals(value, this[_parent])) return;
      if (this[_parent] != null) {
        this[_status] = this[_parent].status;
        this[_value] = this[_parent].value;
        if (dart.test(this.isListening)) this.didStopListening();
      }
      this[_parent] = value;
      if (this[_parent] != null) {
        if (dart.test(this.isListening)) this.didStartListening();
        if (this[_value] != this[_parent].value) this.notifyListeners();
        if (this[_status] != this[_parent].status) this.notifyStatusListeners(this[_parent].status);
        this[_status] = null;
        this[_value] = null;
      }
    }
    didStartListening() {
      if (this[_parent] != null) {
        this[_parent].addListener(dart.bind(this, 'notifyListeners'));
        this[_parent].addStatusListener(dart.bind(this, 'notifyStatusListeners'));
      }
    }
    didStopListening() {
      if (this[_parent] != null) {
        this[_parent].removeListener(dart.bind(this, 'notifyListeners'));
        this[_parent].removeStatusListener(dart.bind(this, 'notifyStatusListeners'));
      }
    }
    get status() {
      return this[_parent] != null ? this[_parent].status : this[_status];
    }
    get value() {
      return this[_parent] != null ? this[_parent].value : this[_value];
    }
    toString() {
      if (this.parent == null) return dart.str(this[$runtimeType]) + "(null; " + dart.str(super.toStringDetails()) + " " + this.value[$toStringAsFixed](3) + ")";
      return dart.str(this.parent) + "➩" + dart.str(this[$runtimeType]);
    }
  };
  (src__animation__animations.ProxyAnimation.new = function(animation) {
    if (animation === void 0) animation = null;
    this[_status] = null;
    this[_value] = null;
    this[_parent] = null;
    src__animation__animations.ProxyAnimation.__proto__.new.call(this);
    this[_parent] = animation;
    if (this[_parent] == null) {
      this[_status] = src__animation__animation.AnimationStatus.dismissed;
      this[_value] = 0.0;
    }
  }).prototype = src__animation__animations.ProxyAnimation.prototype;
  dart.addTypeTests(src__animation__animations.ProxyAnimation);
  dart.setMethodSignature(src__animation__animations.ProxyAnimation, () => ({
    __proto__: dart.getMethods(src__animation__animations.ProxyAnimation.__proto__),
    didStartListening: dart.fnType(dart.void, []),
    didStopListening: dart.fnType(dart.void, []),
    toString: dart.fnType(core.String, []),
    [$toString]: dart.fnType(core.String, [])
  }));
  dart.setGetterSignature(src__animation__animations.ProxyAnimation, () => ({
    __proto__: dart.getGetters(src__animation__animations.ProxyAnimation.__proto__),
    parent: src__animation__animation.Animation$(core.double),
    status: src__animation__animation.AnimationStatus,
    value: core.double
  }));
  dart.setSetterSignature(src__animation__animations.ProxyAnimation, () => ({
    __proto__: dart.getSetters(src__animation__animations.ProxyAnimation.__proto__),
    parent: src__animation__animation.Animation$(core.double)
  }));
  dart.setLibraryUri(src__animation__animations.ProxyAnimation, "package:flutter_web/src/animation/animations.dart");
  dart.setFieldSignature(src__animation__animations.ProxyAnimation, () => ({
    __proto__: dart.getFields(src__animation__animations.ProxyAnimation.__proto__),
    [_status]: dart.fieldType(src__animation__animation.AnimationStatus),
    [_value]: dart.fieldType(core.double),
    [_parent]: dart.fieldType(AnimationOfdouble())
  }));
  dart.defineExtensionMethods(src__animation__animations.ProxyAnimation, ['toString']);
  const _statusChangeHandler = dart.privateName(src__animation__animations, "_statusChangeHandler");
  const _reverseStatus = dart.privateName(src__animation__animations, "_reverseStatus");
  const Animation_AnimationLazyListenerMixin$$ = class Animation_AnimationLazyListenerMixin extends src__animation__animation.Animation$(core.double) {};
  (Animation_AnimationLazyListenerMixin$$.new = function() {
    src__animation__listener_helpers.AnimationLazyListenerMixin.new.call(this);
    Animation_AnimationLazyListenerMixin$$.__proto__.new.call(this);
  }).prototype = Animation_AnimationLazyListenerMixin$$.prototype;
  dart.applyMixin(Animation_AnimationLazyListenerMixin$$, src__animation__listener_helpers.AnimationLazyListenerMixin);
  const Animation_AnimationLocalStatusListenersMixin$$ = class Animation_AnimationLocalStatusListenersMixin extends Animation_AnimationLazyListenerMixin$$ {};
  (Animation_AnimationLocalStatusListenersMixin$$.new = function() {
    src__animation__listener_helpers.AnimationLocalStatusListenersMixin.new.call(this);
    Animation_AnimationLocalStatusListenersMixin$$.__proto__.new.call(this);
  }).prototype = Animation_AnimationLocalStatusListenersMixin$$.prototype;
  dart.applyMixin(Animation_AnimationLocalStatusListenersMixin$$, src__animation__listener_helpers.AnimationLocalStatusListenersMixin);
  src__animation__animations.ReverseAnimation = class ReverseAnimation extends Animation_AnimationLocalStatusListenersMixin$$ {
    get parent() {
      return this[parent$];
    }
    set parent(value) {
      super.parent = value;
    }
    addListener(listener) {
      this.didRegisterListener();
      this.parent.addListener(listener);
    }
    removeListener(listener) {
      this.parent.removeListener(listener);
      this.didUnregisterListener();
    }
    didStartListening() {
      this.parent.addStatusListener(dart.bind(this, _statusChangeHandler));
    }
    didStopListening() {
      this.parent.removeStatusListener(dart.bind(this, _statusChangeHandler));
    }
    [_statusChangeHandler](status) {
      this.notifyStatusListeners(this[_reverseStatus](status));
    }
    get status() {
      return this[_reverseStatus](this.parent.status);
    }
    get value() {
      return 1.0 - dart.notNull(this.parent.value);
    }
    [_reverseStatus](status) {
      if (!(status != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/animations.dart", 301, 12, "status != null");
      switch (status) {
        case src__animation__animation.AnimationStatus.forward:
        {
          return src__animation__animation.AnimationStatus.reverse;
        }
        case src__animation__animation.AnimationStatus.reverse:
        {
          return src__animation__animation.AnimationStatus.forward;
        }
        case src__animation__animation.AnimationStatus.completed:
        {
          return src__animation__animation.AnimationStatus.dismissed;
        }
        case src__animation__animation.AnimationStatus.dismissed:
        {
          return src__animation__animation.AnimationStatus.completed;
        }
      }
      return null;
    }
    toString() {
      return dart.str(this.parent) + "➪" + dart.str(this[$runtimeType]);
    }
  };
  (src__animation__animations.ReverseAnimation.new = function(parent) {
    this[parent$] = parent;
    if (!(parent != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/animations.dart", 263, 42, "parent != null");
    src__animation__animations.ReverseAnimation.__proto__.new.call(this);
  }).prototype = src__animation__animations.ReverseAnimation.prototype;
  dart.addTypeTests(src__animation__animations.ReverseAnimation);
  const parent$ = Symbol("ReverseAnimation.parent");
  dart.setMethodSignature(src__animation__animations.ReverseAnimation, () => ({
    __proto__: dart.getMethods(src__animation__animations.ReverseAnimation.__proto__),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    didStartListening: dart.fnType(dart.void, []),
    didStopListening: dart.fnType(dart.void, []),
    [_statusChangeHandler]: dart.fnType(dart.void, [src__animation__animation.AnimationStatus]),
    [_reverseStatus]: dart.fnType(src__animation__animation.AnimationStatus, [src__animation__animation.AnimationStatus]),
    toString: dart.fnType(core.String, []),
    [$toString]: dart.fnType(core.String, [])
  }));
  dart.setGetterSignature(src__animation__animations.ReverseAnimation, () => ({
    __proto__: dart.getGetters(src__animation__animations.ReverseAnimation.__proto__),
    status: src__animation__animation.AnimationStatus,
    value: core.double
  }));
  dart.setLibraryUri(src__animation__animations.ReverseAnimation, "package:flutter_web/src/animation/animations.dart");
  dart.setFieldSignature(src__animation__animations.ReverseAnimation, () => ({
    __proto__: dart.getFields(src__animation__animations.ReverseAnimation.__proto__),
    parent: dart.finalFieldType(AnimationOfdouble())
  }));
  dart.defineExtensionMethods(src__animation__animations.ReverseAnimation, ['toString']);
  const _curveDirection = dart.privateName(src__animation__animations, "_curveDirection");
  const _updateCurveDirection = dart.privateName(src__animation__animations, "_updateCurveDirection");
  const _useForwardCurve = dart.privateName(src__animation__animations, "_useForwardCurve");
  const Animation_AnimationWithParentMixin$ = class Animation_AnimationWithParentMixin extends src__animation__animation.Animation$(core.double) {};
  (Animation_AnimationWithParentMixin$.new = function() {
    Animation_AnimationWithParentMixin$.__proto__.new.call(this);
  }).prototype = Animation_AnimationWithParentMixin$.prototype;
  dart.applyMixin(Animation_AnimationWithParentMixin$, src__animation__animations.AnimationWithParentMixin$(core.double));
  src__animation__animations.CurvedAnimation = class CurvedAnimation extends Animation_AnimationWithParentMixin$ {
    get parent() {
      return this[parent$0];
    }
    set parent(value) {
      super.parent = value;
    }
    get curve() {
      return this[curve$1];
    }
    set curve(value) {
      this[curve$1] = value;
    }
    get reverseCurve() {
      return this[reverseCurve$];
    }
    set reverseCurve(value) {
      this[reverseCurve$] = value;
    }
    [_updateCurveDirection](status) {
      switch (status) {
        case src__animation__animation.AnimationStatus.dismissed:
        case src__animation__animation.AnimationStatus.completed:
        {
          this[_curveDirection] = null;
          break;
        }
        case src__animation__animation.AnimationStatus.forward:
        {
          let t = this[_curveDirection];
          t == null ? this[_curveDirection] = src__animation__animation.AnimationStatus.forward : t;
          break;
        }
        case src__animation__animation.AnimationStatus.reverse:
        {
          let t$ = this[_curveDirection];
          t$ == null ? this[_curveDirection] = src__animation__animation.AnimationStatus.reverse : t$;
          break;
        }
      }
    }
    get [_useForwardCurve]() {
      return this.reverseCurve == null || (() => {
        let l = this[_curveDirection];
        return l != null ? l : this.parent.status;
      })() !== src__animation__animation.AnimationStatus.reverse;
    }
    get value() {
      let activeCurve = dart.test(this[_useForwardCurve]) ? this.curve : this.reverseCurve;
      let t = this.parent.value;
      if (activeCurve == null) return t;
      if (t === 0.0 || t === 1.0) {
        if (!dart.test(dart.fn(() => {
          let transformedValue = activeCurve.transform(t);
          let roundedTransformedValue = transformedValue[$round]()[$toDouble]();
          if (roundedTransformedValue !== t) {
            dart.throw(src__foundation__assertions.FlutterError.new("Invalid curve endpoint at " + dart.str(t) + ".\n" + "Curves must map 0.0 to near zero and 1.0 to near one but " + (dart.str(dart.runtimeType(activeCurve)) + " mapped " + dart.str(t) + " to " + dart.str(transformedValue) + ", which ") + ("is near " + dart.str(roundedTransformedValue) + ".")));
          }
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/animations.dart", 443, 14, "() {final double transformedValue = activeCurve.transform(t); final double roundedTransformedValue = transformedValue.round().toDouble(); if (roundedTransformedValue != t) {throw FlutterError('Invalid curve endpoint at $t.\\n' 'Curves must map 0.0 to near zero and 1.0 to near one but ' '${activeCurve.runtimeType} mapped $t to $transformedValue, which ' 'is near $roundedTransformedValue.');} return true;}()");
        return t;
      }
      return activeCurve.transform(t);
    }
    toString() {
      if (this.reverseCurve == null) return dart.str(this.parent) + "➩" + dart.str(this.curve);
      if (dart.test(this[_useForwardCurve])) return dart.str(this.parent) + "➩" + dart.str(this.curve) + "ₒₙ/" + dart.str(this.reverseCurve);
      return dart.str(this.parent) + "➩" + dart.str(this.curve) + "/" + dart.str(this.reverseCurve) + "ₒₙ";
    }
  };
  (src__animation__animations.CurvedAnimation.new = function(opts) {
    let parent = opts && 'parent' in opts ? opts.parent : null;
    let curve = opts && 'curve' in opts ? opts.curve : null;
    let reverseCurve = opts && 'reverseCurve' in opts ? opts.reverseCurve : null;
    this[_curveDirection] = null;
    this[parent$0] = parent;
    this[curve$1] = curve;
    this[reverseCurve$] = reverseCurve;
    if (!(parent != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/animations.dart", 381, 16, "parent != null");
    if (!(curve != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/animations.dart", 382, 16, "curve != null");
    src__animation__animations.CurvedAnimation.__proto__.new.call(this);
    this[_updateCurveDirection](this.parent.status);
    this.parent.addStatusListener(dart.bind(this, _updateCurveDirection));
  }).prototype = src__animation__animations.CurvedAnimation.prototype;
  dart.addTypeTests(src__animation__animations.CurvedAnimation);
  const parent$0 = Symbol("CurvedAnimation.parent");
  const curve$1 = Symbol("CurvedAnimation.curve");
  const reverseCurve$ = Symbol("CurvedAnimation.reverseCurve");
  dart.setMethodSignature(src__animation__animations.CurvedAnimation, () => ({
    __proto__: dart.getMethods(src__animation__animations.CurvedAnimation.__proto__),
    [_updateCurveDirection]: dart.fnType(dart.void, [src__animation__animation.AnimationStatus]),
    toString: dart.fnType(core.String, []),
    [$toString]: dart.fnType(core.String, [])
  }));
  dart.setGetterSignature(src__animation__animations.CurvedAnimation, () => ({
    __proto__: dart.getGetters(src__animation__animations.CurvedAnimation.__proto__),
    [_useForwardCurve]: core.bool,
    value: core.double
  }));
  dart.setLibraryUri(src__animation__animations.CurvedAnimation, "package:flutter_web/src/animation/animations.dart");
  dart.setFieldSignature(src__animation__animations.CurvedAnimation, () => ({
    __proto__: dart.getFields(src__animation__animations.CurvedAnimation.__proto__),
    parent: dart.finalFieldType(AnimationOfdouble()),
    curve: dart.fieldType(src__animation__curves.Curve),
    reverseCurve: dart.fieldType(src__animation__curves.Curve),
    [_curveDirection]: dart.fieldType(src__animation__animation.AnimationStatus)
  }));
  dart.defineExtensionMethods(src__animation__animations.CurvedAnimation, ['toString']);
  src__animation__animations._TrainHoppingMode = class _TrainHoppingMode extends core.Object {
    toString() {
      return {
        0: "_TrainHoppingMode.minimize",
        1: "_TrainHoppingMode.maximize"
      }[this.index];
    }
  };
  (src__animation__animations._TrainHoppingMode.new = function(x) {
    this.index = x;
  }).prototype = src__animation__animations._TrainHoppingMode.prototype;
  dart.addTypeTests(src__animation__animations._TrainHoppingMode);
  dart.setLibraryUri(src__animation__animations._TrainHoppingMode, "package:flutter_web/src/animation/animations.dart");
  dart.setFieldSignature(src__animation__animations._TrainHoppingMode, () => ({
    __proto__: dart.getFields(src__animation__animations._TrainHoppingMode.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__animation__animations._TrainHoppingMode, ['toString']);
  src__animation__animations._TrainHoppingMode.minimize = dart.const(new src__animation__animations._TrainHoppingMode.new(0));
  src__animation__animations._TrainHoppingMode.maximize = dart.const(new src__animation__animations._TrainHoppingMode.new(1));
  src__animation__animations._TrainHoppingMode.values = dart.constList([src__animation__animations._TrainHoppingMode.minimize, src__animation__animations._TrainHoppingMode.maximize], src__animation__animations._TrainHoppingMode);
  const _currentTrain = dart.privateName(src__animation__animations, "_currentTrain");
  const _nextTrain = dart.privateName(src__animation__animations, "_nextTrain");
  const _mode = dart.privateName(src__animation__animations, "_mode");
  const _lastStatus = dart.privateName(src__animation__animations, "_lastStatus");
  const _lastValue = dart.privateName(src__animation__animations, "_lastValue");
  const _valueChangeHandler = dart.privateName(src__animation__animations, "_valueChangeHandler");
  const Animation_AnimationEagerListenerMixin$ = class Animation_AnimationEagerListenerMixin extends src__animation__animation.Animation$(core.double) {};
  (Animation_AnimationEagerListenerMixin$.new = function() {
    Animation_AnimationEagerListenerMixin$.__proto__.new.call(this);
  }).prototype = Animation_AnimationEagerListenerMixin$.prototype;
  dart.applyMixin(Animation_AnimationEagerListenerMixin$, src__animation__listener_helpers.AnimationEagerListenerMixin);
  const Animation_AnimationLocalListenersMixin$$ = class Animation_AnimationLocalListenersMixin extends Animation_AnimationEagerListenerMixin$ {};
  (Animation_AnimationLocalListenersMixin$$.new = function() {
    src__animation__listener_helpers.AnimationLocalListenersMixin.new.call(this);
    Animation_AnimationLocalListenersMixin$$.__proto__.new.call(this);
  }).prototype = Animation_AnimationLocalListenersMixin$$.prototype;
  dart.applyMixin(Animation_AnimationLocalListenersMixin$$, src__animation__listener_helpers.AnimationLocalListenersMixin);
  const Animation_AnimationLocalStatusListenersMixin$$0 = class Animation_AnimationLocalStatusListenersMixin extends Animation_AnimationLocalListenersMixin$$ {};
  (Animation_AnimationLocalStatusListenersMixin$$0.new = function() {
    src__animation__listener_helpers.AnimationLocalStatusListenersMixin.new.call(this);
    Animation_AnimationLocalStatusListenersMixin$$0.__proto__.new.call(this);
  }).prototype = Animation_AnimationLocalStatusListenersMixin$$0.prototype;
  dart.applyMixin(Animation_AnimationLocalStatusListenersMixin$$0, src__animation__listener_helpers.AnimationLocalStatusListenersMixin);
  src__animation__animations.TrainHoppingAnimation = class TrainHoppingAnimation extends Animation_AnimationLocalStatusListenersMixin$$0 {
    get currentTrain() {
      return this[_currentTrain];
    }
    get onSwitchedTrain() {
      return this[onSwitchedTrain$];
    }
    set onSwitchedTrain(value) {
      this[onSwitchedTrain$] = value;
    }
    [_statusChangeHandler](status) {
      if (!(this[_currentTrain] != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/animations.dart", 537, 12, "_currentTrain != null");
      if (status != this[_lastStatus]) {
        this.notifyListeners();
        this[_lastStatus] = status;
      }
      if (!(this[_lastStatus] != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/animations.dart", 542, 12, "_lastStatus != null");
    }
    get status() {
      return this[_currentTrain].status;
    }
    [_valueChangeHandler]() {
      if (!(this[_currentTrain] != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/animations.dart", 550, 12, "_currentTrain != null");
      let hop = false;
      if (this[_nextTrain] != null) {
        if (!(this[_mode] != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/animations.dart", 553, 14, "_mode != null");
        switch (this[_mode]) {
          case src__animation__animations._TrainHoppingMode.minimize:
          {
            hop = dart.notNull(this[_nextTrain].value) <= dart.notNull(this[_currentTrain].value);
            break;
          }
          case src__animation__animations._TrainHoppingMode.maximize:
          {
            hop = dart.notNull(this[_nextTrain].value) >= dart.notNull(this[_currentTrain].value);
            break;
          }
        }
        if (hop) {
          let _ = this[_currentTrain];
          _.removeStatusListener(dart.bind(this, _statusChangeHandler));
          _.removeListener(dart.bind(this, _valueChangeHandler));
          this[_currentTrain] = this[_nextTrain];
          this[_nextTrain] = null;
          this[_currentTrain].addStatusListener(dart.bind(this, _statusChangeHandler));
          this[_statusChangeHandler](this[_currentTrain].status);
        }
      }
      let newValue = this.value;
      if (newValue != this[_lastValue]) {
        this.notifyListeners();
        this[_lastValue] = newValue;
      }
      if (!(this[_lastValue] != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/animations.dart", 577, 12, "_lastValue != null");
      if (hop && this.onSwitchedTrain != null) this.onSwitchedTrain();
    }
    get value() {
      return this[_currentTrain].value;
    }
    dispose() {
      if (!(this[_currentTrain] != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/animations.dart", 588, 12, "_currentTrain != null");
      this[_currentTrain].removeStatusListener(dart.bind(this, _statusChangeHandler));
      this[_currentTrain].removeListener(dart.bind(this, _valueChangeHandler));
      this[_currentTrain] = null;
      let t = this[_nextTrain];
      t == null ? null : t.removeListener(dart.bind(this, _valueChangeHandler));
      this[_nextTrain] = null;
      super.dispose();
    }
    toString() {
      if (this[_nextTrain] != null) return dart.str(this.currentTrain) + "➩" + dart.str(this[$runtimeType]) + "(next: " + dart.str(this[_nextTrain]) + ")";
      return dart.str(this.currentTrain) + "➩" + dart.str(this[$runtimeType]) + "(no next)";
    }
  };
  (src__animation__animations.TrainHoppingAnimation.new = function(currentTrain, nextTrain, opts) {
    let onSwitchedTrain = opts && 'onSwitchedTrain' in opts ? opts.onSwitchedTrain : null;
    this[_mode] = null;
    this[_lastStatus] = null;
    this[_lastValue] = null;
    this[_currentTrain] = currentTrain;
    this[_nextTrain] = nextTrain;
    this[onSwitchedTrain$] = onSwitchedTrain;
    if (!(currentTrain != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/animations.dart", 501, 16, "_currentTrain != null");
    src__animation__animations.TrainHoppingAnimation.__proto__.new.call(this);
    if (this[_nextTrain] != null) {
      if (this[_currentTrain].value == this[_nextTrain].value) {
        this[_currentTrain] = this[_nextTrain];
        this[_nextTrain] = null;
      } else if (dart.notNull(this[_currentTrain].value) > dart.notNull(this[_nextTrain].value)) {
        this[_mode] = src__animation__animations._TrainHoppingMode.maximize;
      } else {
        if (!(dart.notNull(this[_currentTrain].value) < dart.notNull(this[_nextTrain].value))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/animations.dart", 509, 16, "_currentTrain.value < _nextTrain.value");
        this[_mode] = src__animation__animations._TrainHoppingMode.minimize;
      }
    }
    this[_currentTrain].addStatusListener(dart.bind(this, _statusChangeHandler));
    this[_currentTrain].addListener(dart.bind(this, _valueChangeHandler));
    let t = this[_nextTrain];
    t == null ? null : t.addListener(dart.bind(this, _valueChangeHandler));
    if (!(this[_mode] != null || this[_nextTrain] == null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/animations.dart", 516, 12, "_mode != null || _nextTrain == null");
  }).prototype = src__animation__animations.TrainHoppingAnimation.prototype;
  dart.addTypeTests(src__animation__animations.TrainHoppingAnimation);
  const onSwitchedTrain$ = Symbol("TrainHoppingAnimation.onSwitchedTrain");
  dart.setMethodSignature(src__animation__animations.TrainHoppingAnimation, () => ({
    __proto__: dart.getMethods(src__animation__animations.TrainHoppingAnimation.__proto__),
    [_statusChangeHandler]: dart.fnType(dart.void, [src__animation__animation.AnimationStatus]),
    [_valueChangeHandler]: dart.fnType(dart.void, []),
    toString: dart.fnType(core.String, []),
    [$toString]: dart.fnType(core.String, [])
  }));
  dart.setGetterSignature(src__animation__animations.TrainHoppingAnimation, () => ({
    __proto__: dart.getGetters(src__animation__animations.TrainHoppingAnimation.__proto__),
    currentTrain: src__animation__animation.Animation$(core.double),
    status: src__animation__animation.AnimationStatus,
    value: core.double
  }));
  dart.setLibraryUri(src__animation__animations.TrainHoppingAnimation, "package:flutter_web/src/animation/animations.dart");
  dart.setFieldSignature(src__animation__animations.TrainHoppingAnimation, () => ({
    __proto__: dart.getFields(src__animation__animations.TrainHoppingAnimation.__proto__),
    [_currentTrain]: dart.fieldType(AnimationOfdouble()),
    [_nextTrain]: dart.fieldType(AnimationOfdouble()),
    [_mode]: dart.fieldType(src__animation__animations._TrainHoppingMode),
    onSwitchedTrain: dart.fieldType(VoidCallback()),
    [_lastStatus]: dart.fieldType(src__animation__animation.AnimationStatus),
    [_lastValue]: dart.fieldType(core.double)
  }));
  dart.defineExtensionMethods(src__animation__animations.TrainHoppingAnimation, ['toString']);
  const _maybeNotifyListeners = dart.privateName(src__animation__animations, "_maybeNotifyListeners");
  const _maybeNotifyStatusListeners = dart.privateName(src__animation__animations, "_maybeNotifyStatusListeners");
  const _is_CompoundAnimation_default = Symbol('_is_CompoundAnimation_default');
  src__animation__animations.CompoundAnimation$ = dart.generic(T => {
    let AnimationOfT = () => (AnimationOfT = dart.constFn(src__animation__animation.Animation$(T)))();
    const Animation_AnimationLazyListenerMixin$ = class Animation_AnimationLazyListenerMixin extends src__animation__animation.Animation$(T) {};
    (Animation_AnimationLazyListenerMixin$.new = function() {
      src__animation__listener_helpers.AnimationLazyListenerMixin.new.call(this);
      Animation_AnimationLazyListenerMixin$.__proto__.new.call(this);
    }).prototype = Animation_AnimationLazyListenerMixin$.prototype;
    dart.applyMixin(Animation_AnimationLazyListenerMixin$, src__animation__listener_helpers.AnimationLazyListenerMixin);
    const Animation_AnimationLocalListenersMixin$ = class Animation_AnimationLocalListenersMixin extends Animation_AnimationLazyListenerMixin$ {};
    (Animation_AnimationLocalListenersMixin$.new = function() {
      src__animation__listener_helpers.AnimationLocalListenersMixin.new.call(this);
      Animation_AnimationLocalListenersMixin$.__proto__.new.call(this);
    }).prototype = Animation_AnimationLocalListenersMixin$.prototype;
    dart.applyMixin(Animation_AnimationLocalListenersMixin$, src__animation__listener_helpers.AnimationLocalListenersMixin);
    const Animation_AnimationLocalStatusListenersMixin$ = class Animation_AnimationLocalStatusListenersMixin extends Animation_AnimationLocalListenersMixin$ {};
    (Animation_AnimationLocalStatusListenersMixin$.new = function() {
      src__animation__listener_helpers.AnimationLocalStatusListenersMixin.new.call(this);
      Animation_AnimationLocalStatusListenersMixin$.__proto__.new.call(this);
    }).prototype = Animation_AnimationLocalStatusListenersMixin$.prototype;
    dart.applyMixin(Animation_AnimationLocalStatusListenersMixin$, src__animation__listener_helpers.AnimationLocalStatusListenersMixin);
    class CompoundAnimation extends Animation_AnimationLocalStatusListenersMixin$ {
      get first() {
        return this[first$];
      }
      set first(value) {
        super.first = value;
      }
      get next() {
        return this[next$];
      }
      set next(value) {
        super.next = value;
      }
      didStartListening() {
        this.first.addListener(dart.bind(this, _maybeNotifyListeners));
        this.first.addStatusListener(dart.bind(this, _maybeNotifyStatusListeners));
        this.next.addListener(dart.bind(this, _maybeNotifyListeners));
        this.next.addStatusListener(dart.bind(this, _maybeNotifyStatusListeners));
      }
      didStopListening() {
        this.first.removeListener(dart.bind(this, _maybeNotifyListeners));
        this.first.removeStatusListener(dart.bind(this, _maybeNotifyStatusListeners));
        this.next.removeListener(dart.bind(this, _maybeNotifyListeners));
        this.next.removeStatusListener(dart.bind(this, _maybeNotifyStatusListeners));
      }
      get status() {
        if (this.next.status === src__animation__animation.AnimationStatus.forward || this.next.status === src__animation__animation.AnimationStatus.reverse) return this.next.status;
        return this.first.status;
      }
      toString() {
        return dart.str(this[$runtimeType]) + "(" + dart.str(this.first) + ", " + dart.str(this.next) + ")";
      }
      [_maybeNotifyStatusListeners](_) {
        if (this.status != this[_lastStatus]) {
          this[_lastStatus] = this.status;
          this.notifyStatusListeners(this.status);
        }
      }
      [_maybeNotifyListeners]() {
        if (!dart.equals(this.value, this[_lastValue])) {
          this[_lastValue] = this.value;
          this.notifyListeners();
        }
      }
    }
    (CompoundAnimation.new = function(opts) {
      let first = opts && 'first' in opts ? opts.first : null;
      let next = opts && 'next' in opts ? opts.next : null;
      this[_lastStatus] = null;
      this[_lastValue] = null;
      this[first$] = first;
      this[next$] = next;
      if (!(first != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/animations.dart", 625, 16, "first != null");
      if (!(next != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/animations.dart", 626, 16, "next != null");
      CompoundAnimation.__proto__.new.call(this);
    }).prototype = CompoundAnimation.prototype;
    dart.addTypeTests(CompoundAnimation);
    CompoundAnimation.prototype[_is_CompoundAnimation_default] = true;
    const first$ = Symbol("CompoundAnimation.first");
    const next$ = Symbol("CompoundAnimation.next");
    dart.setMethodSignature(CompoundAnimation, () => ({
      __proto__: dart.getMethods(CompoundAnimation.__proto__),
      didStartListening: dart.fnType(dart.void, []),
      didStopListening: dart.fnType(dart.void, []),
      [_maybeNotifyStatusListeners]: dart.fnType(dart.void, [src__animation__animation.AnimationStatus]),
      [_maybeNotifyListeners]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(CompoundAnimation, () => ({
      __proto__: dart.getGetters(CompoundAnimation.__proto__),
      status: src__animation__animation.AnimationStatus
    }));
    dart.setLibraryUri(CompoundAnimation, "package:flutter_web/src/animation/animations.dart");
    dart.setFieldSignature(CompoundAnimation, () => ({
      __proto__: dart.getFields(CompoundAnimation.__proto__),
      first: dart.finalFieldType(AnimationOfT()),
      next: dart.finalFieldType(AnimationOfT()),
      [_lastStatus]: dart.fieldType(src__animation__animation.AnimationStatus),
      [_lastValue]: dart.fieldType(T)
    }));
    dart.defineExtensionMethods(CompoundAnimation, ['toString']);
    return CompoundAnimation;
  });
  src__animation__animations.CompoundAnimation = src__animation__animations.CompoundAnimation$();
  dart.addTypeTests(src__animation__animations.CompoundAnimation, _is_CompoundAnimation_default);
  src__animation__animations.AnimationMean = class AnimationMean extends src__animation__animations.CompoundAnimation$(core.double) {
    get value() {
      return (dart.notNull(this.first.value) + dart.notNull(this.next.value)) / 2.0;
    }
  };
  (src__animation__animations.AnimationMean.new = function(opts) {
    let left = opts && 'left' in opts ? opts.left : null;
    let right = opts && 'right' in opts ? opts.right : null;
    src__animation__animations.AnimationMean.__proto__.new.call(this, {first: left, next: right});
  }).prototype = src__animation__animations.AnimationMean.prototype;
  dart.addTypeTests(src__animation__animations.AnimationMean);
  dart.setGetterSignature(src__animation__animations.AnimationMean, () => ({
    __proto__: dart.getGetters(src__animation__animations.AnimationMean.__proto__),
    value: core.double
  }));
  dart.setLibraryUri(src__animation__animations.AnimationMean, "package:flutter_web/src/animation/animations.dart");
  const _is_AnimationMax_default = Symbol('_is_AnimationMax_default');
  src__animation__animations.AnimationMax$ = dart.generic(T => {
    class AnimationMax extends src__animation__animations.CompoundAnimation$(T) {
      get value() {
        return math.max(T, this.first.value, this.next.value);
      }
    }
    (AnimationMax.new = function(first, next) {
      AnimationMax.__proto__.new.call(this, {first: first, next: next});
    }).prototype = AnimationMax.prototype;
    dart.addTypeTests(AnimationMax);
    AnimationMax.prototype[_is_AnimationMax_default] = true;
    dart.setGetterSignature(AnimationMax, () => ({
      __proto__: dart.getGetters(AnimationMax.__proto__),
      value: T
    }));
    dart.setLibraryUri(AnimationMax, "package:flutter_web/src/animation/animations.dart");
    return AnimationMax;
  });
  src__animation__animations.AnimationMax = src__animation__animations.AnimationMax$();
  dart.addTypeTests(src__animation__animations.AnimationMax, _is_AnimationMax_default);
  const _is_AnimationMin_default = Symbol('_is_AnimationMin_default');
  src__animation__animations.AnimationMin$ = dart.generic(T => {
    class AnimationMin extends src__animation__animations.CompoundAnimation$(T) {
      get value() {
        return math.min(T, this.first.value, this.next.value);
      }
    }
    (AnimationMin.new = function(first, next) {
      AnimationMin.__proto__.new.call(this, {first: first, next: next});
    }).prototype = AnimationMin.prototype;
    dart.addTypeTests(AnimationMin);
    AnimationMin.prototype[_is_AnimationMin_default] = true;
    dart.setGetterSignature(AnimationMin, () => ({
      __proto__: dart.getGetters(AnimationMin.__proto__),
      value: T
    }));
    dart.setLibraryUri(AnimationMin, "package:flutter_web/src/animation/animations.dart");
    return AnimationMin;
  });
  src__animation__animations.AnimationMin = src__animation__animations.AnimationMin$();
  dart.addTypeTests(src__animation__animations.AnimationMin, _is_AnimationMin_default);
  const _is_Animatable_default = Symbol('_is_Animatable_default');
  src__animation__tween.Animatable$ = dart.generic(T => {
    let _AnimatedEvaluationOfT = () => (_AnimatedEvaluationOfT = dart.constFn(src__animation__tween._AnimatedEvaluation$(T)))();
    let _ChainedEvaluationOfT = () => (_ChainedEvaluationOfT = dart.constFn(src__animation__tween._ChainedEvaluation$(T)))();
    class Animatable extends core.Object {
      evaluate(animation) {
        return this.transform(animation.value);
      }
      animate(parent) {
        return new (_AnimatedEvaluationOfT()).new(parent, this);
      }
      chain(parent) {
        return new (_ChainedEvaluationOfT()).new(parent, this);
      }
    }
    (Animatable.new = function() {
    }).prototype = Animatable.prototype;
    dart.addTypeTests(Animatable);
    Animatable.prototype[_is_Animatable_default] = true;
    dart.setMethodSignature(Animatable, () => ({
      __proto__: dart.getMethods(Animatable.__proto__),
      evaluate: dart.fnType(T, [src__animation__animation.Animation$(core.double)]),
      animate: dart.fnType(src__animation__animation.Animation$(T), [src__animation__animation.Animation$(core.double)]),
      chain: dart.fnType(src__animation__tween.Animatable$(T), [src__animation__tween.Animatable$(core.double)])
    }));
    dart.setLibraryUri(Animatable, "package:flutter_web/src/animation/tween.dart");
    return Animatable;
  });
  src__animation__tween.Animatable = src__animation__tween.Animatable$();
  dart.addTypeTests(src__animation__tween.Animatable, _is_Animatable_default);
  const _evaluatable = dart.privateName(src__animation__tween, "_evaluatable");
  const _is__AnimatedEvaluation_default = Symbol('_is__AnimatedEvaluation_default');
  src__animation__tween._AnimatedEvaluation$ = dart.generic(T => {
    let AnimatableOfT = () => (AnimatableOfT = dart.constFn(src__animation__tween.Animatable$(T)))();
    const Animation_AnimationWithParentMixin$ = class Animation_AnimationWithParentMixin extends src__animation__animation.Animation$(T) {};
    (Animation_AnimationWithParentMixin$.new = function() {
      Animation_AnimationWithParentMixin$.__proto__.new.call(this);
    }).prototype = Animation_AnimationWithParentMixin$.prototype;
    dart.applyMixin(Animation_AnimationWithParentMixin$, src__animation__animations.AnimationWithParentMixin$(core.double));
    class _AnimatedEvaluation extends Animation_AnimationWithParentMixin$ {
      get value() {
        return this[_evaluatable].evaluate(this.parent);
      }
      toString() {
        return dart.str(this.parent) + "➩" + dart.str(this[_evaluatable]) + "➩" + dart.str(this.value);
      }
      toStringDetails() {
        return dart.str(super.toStringDetails()) + " " + dart.str(this[_evaluatable]);
      }
    }
    (_AnimatedEvaluation.new = function(parent, evaluatable) {
      this.parent = parent;
      this[_evaluatable] = evaluatable;
      _AnimatedEvaluation.__proto__.new.call(this);
    }).prototype = _AnimatedEvaluation.prototype;
    dart.addTypeTests(_AnimatedEvaluation);
    _AnimatedEvaluation.prototype[_is__AnimatedEvaluation_default] = true;
    dart.setGetterSignature(_AnimatedEvaluation, () => ({
      __proto__: dart.getGetters(_AnimatedEvaluation.__proto__),
      value: T
    }));
    dart.setLibraryUri(_AnimatedEvaluation, "package:flutter_web/src/animation/tween.dart");
    dart.setFieldSignature(_AnimatedEvaluation, () => ({
      __proto__: dart.getFields(_AnimatedEvaluation.__proto__),
      parent: dart.finalFieldType(AnimationOfdouble()),
      [_evaluatable]: dart.finalFieldType(AnimatableOfT())
    }));
    dart.defineExtensionMethods(_AnimatedEvaluation, ['toString']);
    return _AnimatedEvaluation;
  });
  src__animation__tween._AnimatedEvaluation = src__animation__tween._AnimatedEvaluation$();
  dart.addTypeTests(src__animation__tween._AnimatedEvaluation, _is__AnimatedEvaluation_default);
  const _parent$ = dart.privateName(src__animation__tween, "_parent");
  const _is__ChainedEvaluation_default = Symbol('_is__ChainedEvaluation_default');
  src__animation__tween._ChainedEvaluation$ = dart.generic(T => {
    let AnimatableOfT = () => (AnimatableOfT = dart.constFn(src__animation__tween.Animatable$(T)))();
    class _ChainedEvaluation extends src__animation__tween.Animatable$(T) {
      transform(t) {
        return this[_evaluatable].transform(this[_parent$].transform(t));
      }
      toString() {
        return dart.str(this[_parent$]) + "➩" + dart.str(this[_evaluatable]);
      }
    }
    (_ChainedEvaluation.new = function(parent, evaluatable) {
      this[_parent$] = parent;
      this[_evaluatable] = evaluatable;
      _ChainedEvaluation.__proto__.new.call(this);
    }).prototype = _ChainedEvaluation.prototype;
    dart.addTypeTests(_ChainedEvaluation);
    _ChainedEvaluation.prototype[_is__ChainedEvaluation_default] = true;
    dart.setMethodSignature(_ChainedEvaluation, () => ({
      __proto__: dart.getMethods(_ChainedEvaluation.__proto__),
      transform: dart.fnType(T, [core.double]),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, [])
    }));
    dart.setLibraryUri(_ChainedEvaluation, "package:flutter_web/src/animation/tween.dart");
    dart.setFieldSignature(_ChainedEvaluation, () => ({
      __proto__: dart.getFields(_ChainedEvaluation.__proto__),
      [_parent$]: dart.finalFieldType(AnimatableOfdouble()),
      [_evaluatable]: dart.finalFieldType(AnimatableOfT())
    }));
    dart.defineExtensionMethods(_ChainedEvaluation, ['toString']);
    return _ChainedEvaluation;
  });
  src__animation__tween._ChainedEvaluation = src__animation__tween._ChainedEvaluation$();
  dart.addTypeTests(src__animation__tween._ChainedEvaluation, _is__ChainedEvaluation_default);
  const _is_Tween_default = Symbol('_is_Tween_default');
  src__animation__tween.Tween$ = dart.generic(T => {
    class Tween extends src__animation__tween.Animatable$(T) {
      get begin() {
        return this[begin$];
      }
      set begin(value) {
        this[begin$] = T._check(value);
      }
      get end() {
        return this[end$];
      }
      set end(value) {
        this[end$] = T._check(value);
      }
      lerp(t) {
        if (!(this.begin != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/tween.dart", 238, 12, "begin != null");
        if (!(this.end != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/tween.dart", 239, 12, "end != null");
        return T._check(dart.dsend(this.begin, '+', [dart.dsend(dart.dsend(this.end, '-', [this.begin]), '*', [t])]));
      }
      transform(t) {
        if (t === 0.0) return this.begin;
        if (t === 1.0) return this.end;
        return this.lerp(t);
      }
      toString() {
        return dart.str(this[$runtimeType]) + "(" + dart.str(this.begin) + " → " + dart.str(this.end) + ")";
      }
    }
    (Tween.new = function(opts) {
      let begin = opts && 'begin' in opts ? opts.begin : null;
      let end = opts && 'end' in opts ? opts.end : null;
      this[begin$] = begin;
      this[end$] = end;
      Tween.__proto__.new.call(this);
    }).prototype = Tween.prototype;
    dart.addTypeTests(Tween);
    Tween.prototype[_is_Tween_default] = true;
    const begin$ = Symbol("Tween.begin");
    const end$ = Symbol("Tween.end");
    dart.setMethodSignature(Tween, () => ({
      __proto__: dart.getMethods(Tween.__proto__),
      lerp: dart.fnType(T, [core.double]),
      transform: dart.fnType(T, [core.double]),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, [])
    }));
    dart.setLibraryUri(Tween, "package:flutter_web/src/animation/tween.dart");
    dart.setFieldSignature(Tween, () => ({
      __proto__: dart.getFields(Tween.__proto__),
      begin: dart.fieldType(T),
      end: dart.fieldType(T)
    }));
    dart.defineExtensionMethods(Tween, ['toString']);
    return Tween;
  });
  src__animation__tween.Tween = src__animation__tween.Tween$();
  dart.addTypeTests(src__animation__tween.Tween, _is_Tween_default);
  const _is_ReverseTween_default = Symbol('_is_ReverseTween_default');
  src__animation__tween.ReverseTween$ = dart.generic(T => {
    let TweenOfT = () => (TweenOfT = dart.constFn(src__animation__tween.Tween$(T)))();
    class ReverseTween extends src__animation__tween.Tween$(T) {
      get parent() {
        return this[parent$];
      }
      set parent(value) {
        super.parent = value;
      }
      lerp(t) {
        return this.parent.lerp(1.0 - dart.notNull(t));
      }
    }
    (ReverseTween.new = function(parent) {
      this[parent$] = parent;
      if (!(parent != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/tween.dart", 270, 16, "parent != null");
      ReverseTween.__proto__.new.call(this, {begin: parent.end, end: parent.begin});
    }).prototype = ReverseTween.prototype;
    dart.addTypeTests(ReverseTween);
    ReverseTween.prototype[_is_ReverseTween_default] = true;
    const parent$ = Symbol("ReverseTween.parent");
    dart.setLibraryUri(ReverseTween, "package:flutter_web/src/animation/tween.dart");
    dart.setFieldSignature(ReverseTween, () => ({
      __proto__: dart.getFields(ReverseTween.__proto__),
      parent: dart.finalFieldType(TweenOfT())
    }));
    return ReverseTween;
  });
  src__animation__tween.ReverseTween = src__animation__tween.ReverseTween$();
  dart.addTypeTests(src__animation__tween.ReverseTween, _is_ReverseTween_default);
  src__animation__tween.ColorTween = class ColorTween extends src__animation__tween.Tween$(ui$.Color) {
    lerp(t) {
      return ui$.Color.lerp(this.begin, this.end, t);
    }
  };
  (src__animation__tween.ColorTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    src__animation__tween.ColorTween.__proto__.new.call(this, {begin: begin, end: end});
  }).prototype = src__animation__tween.ColorTween.prototype;
  dart.addTypeTests(src__animation__tween.ColorTween);
  dart.setMethodSignature(src__animation__tween.ColorTween, () => ({
    __proto__: dart.getMethods(src__animation__tween.ColorTween.__proto__),
    lerp: dart.fnType(ui$.Color, [core.double])
  }));
  dart.setLibraryUri(src__animation__tween.ColorTween, "package:flutter_web/src/animation/tween.dart");
  src__animation__tween.SizeTween = class SizeTween extends src__animation__tween.Tween$(ui$.Size) {
    lerp(t) {
      return ui$.Size.lerp(this.begin, this.end, t);
    }
  };
  (src__animation__tween.SizeTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    src__animation__tween.SizeTween.__proto__.new.call(this, {begin: begin, end: end});
  }).prototype = src__animation__tween.SizeTween.prototype;
  dart.addTypeTests(src__animation__tween.SizeTween);
  dart.setMethodSignature(src__animation__tween.SizeTween, () => ({
    __proto__: dart.getMethods(src__animation__tween.SizeTween.__proto__),
    lerp: dart.fnType(ui$.Size, [core.double])
  }));
  dart.setLibraryUri(src__animation__tween.SizeTween, "package:flutter_web/src/animation/tween.dart");
  src__animation__tween.RectTween = class RectTween extends src__animation__tween.Tween$(ui$.Rect) {
    lerp(t) {
      return ui$.Rect.lerp(this.begin, this.end, t);
    }
  };
  (src__animation__tween.RectTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    src__animation__tween.RectTween.__proto__.new.call(this, {begin: begin, end: end});
  }).prototype = src__animation__tween.RectTween.prototype;
  dart.addTypeTests(src__animation__tween.RectTween);
  dart.setMethodSignature(src__animation__tween.RectTween, () => ({
    __proto__: dart.getMethods(src__animation__tween.RectTween.__proto__),
    lerp: dart.fnType(ui$.Rect, [core.double])
  }));
  dart.setLibraryUri(src__animation__tween.RectTween, "package:flutter_web/src/animation/tween.dart");
  src__animation__tween.IntTween = class IntTween extends src__animation__tween.Tween$(core.int) {
    lerp(t) {
      return (dart.notNull(this.begin) + (dart.notNull(this.end) - dart.notNull(this.begin)) * dart.notNull(t))[$round]();
    }
  };
  (src__animation__tween.IntTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    src__animation__tween.IntTween.__proto__.new.call(this, {begin: begin, end: end});
  }).prototype = src__animation__tween.IntTween.prototype;
  dart.addTypeTests(src__animation__tween.IntTween);
  dart.setMethodSignature(src__animation__tween.IntTween, () => ({
    __proto__: dart.getMethods(src__animation__tween.IntTween.__proto__),
    lerp: dart.fnType(core.int, [core.double])
  }));
  dart.setLibraryUri(src__animation__tween.IntTween, "package:flutter_web/src/animation/tween.dart");
  src__animation__tween.StepTween = class StepTween extends src__animation__tween.Tween$(core.int) {
    lerp(t) {
      return (dart.notNull(this.begin) + (dart.notNull(this.end) - dart.notNull(this.begin)) * dart.notNull(t))[$floor]();
    }
  };
  (src__animation__tween.StepTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    src__animation__tween.StepTween.__proto__.new.call(this, {begin: begin, end: end});
  }).prototype = src__animation__tween.StepTween.prototype;
  dart.addTypeTests(src__animation__tween.StepTween);
  dart.setMethodSignature(src__animation__tween.StepTween, () => ({
    __proto__: dart.getMethods(src__animation__tween.StepTween.__proto__),
    lerp: dart.fnType(core.int, [core.double])
  }));
  dart.setLibraryUri(src__animation__tween.StepTween, "package:flutter_web/src/animation/tween.dart");
  const _is_ConstantTween_default = Symbol('_is_ConstantTween_default');
  src__animation__tween.ConstantTween$ = dart.generic(T => {
    class ConstantTween extends src__animation__tween.Tween$(T) {
      lerp(t) {
        return this.begin;
      }
      toString() {
        return dart.str(this[$runtimeType]) + "(value: begin)";
      }
    }
    (ConstantTween.new = function(value) {
      ConstantTween.__proto__.new.call(this, {begin: value, end: value});
    }).prototype = ConstantTween.prototype;
    dart.addTypeTests(ConstantTween);
    ConstantTween.prototype[_is_ConstantTween_default] = true;
    dart.setLibraryUri(ConstantTween, "package:flutter_web/src/animation/tween.dart");
    dart.defineExtensionMethods(ConstantTween, ['toString']);
    return ConstantTween;
  });
  src__animation__tween.ConstantTween = src__animation__tween.ConstantTween$();
  dart.addTypeTests(src__animation__tween.ConstantTween, _is_ConstantTween_default);
  src__animation__tween.CurveTween = class CurveTween extends src__animation__tween.Animatable$(core.double) {
    get curve() {
      return this[curve$2];
    }
    set curve(value) {
      this[curve$2] = value;
    }
    transform(t) {
      if (t === 0.0 || t === 1.0) {
        if (!(this.curve.transform(t)[$round]() === t)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/tween.dart", 444, 14, "curve.transform(t).round() == t");
        return t;
      }
      return this.curve.transform(t);
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(curve: " + dart.str(this.curve) + ")";
    }
  };
  (src__animation__tween.CurveTween.new = function(opts) {
    let curve = opts && 'curve' in opts ? opts.curve : null;
    this[curve$2] = curve;
    if (!(curve != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/tween.dart", 436, 47, "curve != null");
    src__animation__tween.CurveTween.__proto__.new.call(this);
  }).prototype = src__animation__tween.CurveTween.prototype;
  dart.addTypeTests(src__animation__tween.CurveTween);
  const curve$2 = Symbol("CurveTween.curve");
  dart.setMethodSignature(src__animation__tween.CurveTween, () => ({
    __proto__: dart.getMethods(src__animation__tween.CurveTween.__proto__),
    transform: dart.fnType(core.double, [core.double])
  }));
  dart.setLibraryUri(src__animation__tween.CurveTween, "package:flutter_web/src/animation/tween.dart");
  dart.setFieldSignature(src__animation__tween.CurveTween, () => ({
    __proto__: dart.getFields(src__animation__tween.CurveTween.__proto__),
    curve: dart.fieldType(src__animation__curves.Curve)
  }));
  dart.defineExtensionMethods(src__animation__tween.CurveTween, ['toString']);
  src__animation__animation.AnimationStatus = class AnimationStatus extends core.Object {
    toString() {
      return {
        0: "AnimationStatus.dismissed",
        1: "AnimationStatus.forward",
        2: "AnimationStatus.reverse",
        3: "AnimationStatus.completed"
      }[this.index];
    }
  };
  (src__animation__animation.AnimationStatus.new = function(x) {
    this.index = x;
  }).prototype = src__animation__animation.AnimationStatus.prototype;
  dart.addTypeTests(src__animation__animation.AnimationStatus);
  dart.setLibraryUri(src__animation__animation.AnimationStatus, "package:flutter_web/src/animation/animation.dart");
  dart.setFieldSignature(src__animation__animation.AnimationStatus, () => ({
    __proto__: dart.getFields(src__animation__animation.AnimationStatus.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__animation__animation.AnimationStatus, ['toString']);
  src__animation__animation.AnimationStatus.dismissed = dart.const(new src__animation__animation.AnimationStatus.new(0));
  src__animation__animation.AnimationStatus.forward = dart.const(new src__animation__animation.AnimationStatus.new(1));
  src__animation__animation.AnimationStatus.reverse = dart.const(new src__animation__animation.AnimationStatus.new(2));
  src__animation__animation.AnimationStatus.completed = dart.const(new src__animation__animation.AnimationStatus.new(3));
  src__animation__animation.AnimationStatus.values = dart.constList([src__animation__animation.AnimationStatus.dismissed, src__animation__animation.AnimationStatus.forward, src__animation__animation.AnimationStatus.reverse, src__animation__animation.AnimationStatus.completed], src__animation__animation.AnimationStatus);
  const _items = dart.privateName(src__animation__tween_sequence, "_items");
  const _intervals = dart.privateName(src__animation__tween_sequence, "_intervals");
  const _evaluateAt = dart.privateName(src__animation__tween_sequence, "_evaluateAt");
  const _is_TweenSequence_default = Symbol('_is_TweenSequence_default');
  src__animation__tween_sequence.TweenSequence$ = dart.generic(T => {
    let TweenSequenceItemOfT = () => (TweenSequenceItemOfT = dart.constFn(src__animation__tween_sequence.TweenSequenceItem$(T)))();
    let JSArrayOfTweenSequenceItemOfT = () => (JSArrayOfTweenSequenceItemOfT = dart.constFn(_interceptors.JSArray$(TweenSequenceItemOfT())))();
    let ListOfTweenSequenceItemOfT = () => (ListOfTweenSequenceItemOfT = dart.constFn(core.List$(TweenSequenceItemOfT())))();
    class TweenSequence extends src__animation__tween.Animatable$(T) {
      [_evaluateAt](t, index) {
        let element = this[_items][$_get](index);
        let tInterval = this[_intervals][$_get](index).value(t);
        return element.tween.transform(tInterval);
      }
      transform(t) {
        if (!(dart.notNull(t) >= 0.0 && dart.notNull(t) <= 1.0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/tween_sequence.dart", 79, 12, "t >= 0.0 && t <= 1.0");
        if (t === 1.0) return this[_evaluateAt](t, dart.notNull(this[_items][$length]) - 1);
        for (let index = 0; index < dart.notNull(this[_items][$length]); index++) {
          if (dart.test(this[_intervals][$_get](index).contains(t))) return this[_evaluateAt](t, index);
        }
        if (!false) dart.assertFailed("TweenSequence.evaluate() could not find a interval for " + dart.str(t), "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/tween_sequence.dart", 85, 12, "false");
        return null;
      }
      toString() {
        return "TweenSequence(" + dart.str(this[_items][$length]) + " items)";
      }
    }
    (TweenSequence.new = function(items) {
      this[_items] = JSArrayOfTweenSequenceItemOfT().of([]);
      this[_intervals] = JSArrayOf_Interval().of([]);
      if (!(items != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/tween_sequence.dart", 51, 16, "items != null");
      if (!dart.test(items[$isNotEmpty])) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/tween_sequence.dart", 52, 16, "items.isNotEmpty");
      TweenSequence.__proto__.new.call(this);
      this[_items][$addAll](items);
      let totalWeight = 0.0;
      for (let item of this[_items]) {
        totalWeight = totalWeight + dart.notNull(item.weight);
      }
      if (!(totalWeight > 0.0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/tween_sequence.dart", 57, 12, "totalWeight > 0.0");
      let start = 0.0;
      for (let i = 0; i < dart.notNull(this[_items][$length]); i = i + 1) {
        let end = i === dart.notNull(this[_items][$length]) - 1 ? 1.0 : start + dart.notNull(this[_items][$_get](i).weight) / totalWeight;
        this[_intervals][$add](new src__animation__tween_sequence._Interval.new(start, end));
        start = end;
      }
    }).prototype = TweenSequence.prototype;
    dart.addTypeTests(TweenSequence);
    TweenSequence.prototype[_is_TweenSequence_default] = true;
    dart.setMethodSignature(TweenSequence, () => ({
      __proto__: dart.getMethods(TweenSequence.__proto__),
      [_evaluateAt]: dart.fnType(T, [core.double, core.int]),
      transform: dart.fnType(T, [core.double]),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, [])
    }));
    dart.setLibraryUri(TweenSequence, "package:flutter_web/src/animation/tween_sequence.dart");
    dart.setFieldSignature(TweenSequence, () => ({
      __proto__: dart.getFields(TweenSequence.__proto__),
      [_items]: dart.finalFieldType(ListOfTweenSequenceItemOfT()),
      [_intervals]: dart.finalFieldType(ListOf_Interval())
    }));
    dart.defineExtensionMethods(TweenSequence, ['toString']);
    return TweenSequence;
  });
  src__animation__tween_sequence.TweenSequence = src__animation__tween_sequence.TweenSequence$();
  dart.addTypeTests(src__animation__tween_sequence.TweenSequence, _is_TweenSequence_default);
  const _is_TweenSequenceItem_default = Symbol('_is_TweenSequenceItem_default');
  src__animation__tween_sequence.TweenSequenceItem$ = dart.generic(T => {
    let AnimatableOfT = () => (AnimatableOfT = dart.constFn(src__animation__tween.Animatable$(T)))();
    class TweenSequenceItem extends core.Object {
      get tween() {
        return this[tween$];
      }
      set tween(value) {
        super.tween = value;
      }
      get weight() {
        return this[weight$];
      }
      set weight(value) {
        super.weight = value;
      }
    }
    (TweenSequenceItem.new = function(opts) {
      let tween = opts && 'tween' in opts ? opts.tween : null;
      let weight = opts && 'weight' in opts ? opts.weight : null;
      this[tween$] = tween;
      this[weight$] = weight;
      if (!(tween != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/tween_sequence.dart", 101, 16, "tween != null");
      if (!(weight != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/tween_sequence.dart", 102, 16, "weight != null");
      if (!(dart.notNull(weight) > 0.0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/tween_sequence.dart", 103, 16, "weight > 0.0");
    }).prototype = TweenSequenceItem.prototype;
    dart.addTypeTests(TweenSequenceItem);
    TweenSequenceItem.prototype[_is_TweenSequenceItem_default] = true;
    const tween$ = Symbol("TweenSequenceItem.tween");
    const weight$ = Symbol("TweenSequenceItem.weight");
    dart.setLibraryUri(TweenSequenceItem, "package:flutter_web/src/animation/tween_sequence.dart");
    dart.setFieldSignature(TweenSequenceItem, () => ({
      __proto__: dart.getFields(TweenSequenceItem.__proto__),
      tween: dart.finalFieldType(AnimatableOfT()),
      weight: dart.finalFieldType(core.double)
    }));
    return TweenSequenceItem;
  });
  src__animation__tween_sequence.TweenSequenceItem = src__animation__tween_sequence.TweenSequenceItem$();
  dart.addTypeTests(src__animation__tween_sequence.TweenSequenceItem, _is_TweenSequenceItem_default);
  src__animation__tween_sequence._Interval = class _Interval extends core.Object {
    contains(t) {
      return dart.notNull(t) >= dart.notNull(this.start) && dart.notNull(t) < dart.notNull(this.end);
    }
    value(t) {
      return (dart.notNull(t) - dart.notNull(this.start)) / (dart.notNull(this.end) - dart.notNull(this.start));
    }
    toString() {
      return "<" + dart.str(this.start) + ", " + dart.str(this.end) + ">";
    }
  };
  (src__animation__tween_sequence._Interval.new = function(start, end) {
    this.start = start;
    this.end = end;
    if (!(dart.notNull(end) > dart.notNull(start))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/animation/tween_sequence.dart", 130, 50, "end > start");
  }).prototype = src__animation__tween_sequence._Interval.prototype;
  dart.addTypeTests(src__animation__tween_sequence._Interval);
  dart.setMethodSignature(src__animation__tween_sequence._Interval, () => ({
    __proto__: dart.getMethods(src__animation__tween_sequence._Interval.__proto__),
    contains: dart.fnType(core.bool, [core.double]),
    value: dart.fnType(core.double, [core.double])
  }));
  dart.setLibraryUri(src__animation__tween_sequence._Interval, "package:flutter_web/src/animation/tween_sequence.dart");
  dart.setFieldSignature(src__animation__tween_sequence._Interval, () => ({
    __proto__: dart.getFields(src__animation__tween_sequence._Interval.__proto__),
    start: dart.finalFieldType(core.double),
    end: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(src__animation__tween_sequence._Interval, ['toString']);
  src__rendering__platform_view.PlatformViewHitTestBehavior = class PlatformViewHitTestBehavior extends core.Object {
    toString() {
      return {
        0: "PlatformViewHitTestBehavior.opaque",
        1: "PlatformViewHitTestBehavior.translucent",
        2: "PlatformViewHitTestBehavior.transparent"
      }[this.index];
    }
  };
  (src__rendering__platform_view.PlatformViewHitTestBehavior.new = function(x) {
    this.index = x;
  }).prototype = src__rendering__platform_view.PlatformViewHitTestBehavior.prototype;
  dart.addTypeTests(src__rendering__platform_view.PlatformViewHitTestBehavior);
  dart.setLibraryUri(src__rendering__platform_view.PlatformViewHitTestBehavior, "package:flutter_web/src/rendering/platform_view.dart");
  dart.setFieldSignature(src__rendering__platform_view.PlatformViewHitTestBehavior, () => ({
    __proto__: dart.getFields(src__rendering__platform_view.PlatformViewHitTestBehavior.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__rendering__platform_view.PlatformViewHitTestBehavior, ['toString']);
  src__rendering__platform_view.PlatformViewHitTestBehavior.opaque = dart.const(new src__rendering__platform_view.PlatformViewHitTestBehavior.new(0));
  src__rendering__platform_view.PlatformViewHitTestBehavior.translucent = dart.const(new src__rendering__platform_view.PlatformViewHitTestBehavior.new(1));
  src__rendering__platform_view.PlatformViewHitTestBehavior.transparent = dart.const(new src__rendering__platform_view.PlatformViewHitTestBehavior.new(2));
  src__rendering__platform_view.PlatformViewHitTestBehavior.values = dart.constList([src__rendering__platform_view.PlatformViewHitTestBehavior.opaque, src__rendering__platform_view.PlatformViewHitTestBehavior.translucent, src__rendering__platform_view.PlatformViewHitTestBehavior.transparent], src__rendering__platform_view.PlatformViewHitTestBehavior);
  src__widgets__icon_data.IconData = class IconData extends core.Object {
    get codePoint() {
      return this[codePoint$];
    }
    set codePoint(value) {
      super.codePoint = value;
    }
    get fontFamily() {
      return this[fontFamily$1];
    }
    set fontFamily(value) {
      super.fontFamily = value;
    }
    get fontPackage() {
      return this[fontPackage$];
    }
    set fontPackage(value) {
      super.fontPackage = value;
    }
    get matchTextDirection() {
      return this[matchTextDirection$];
    }
    set matchTextDirection(value) {
      super.matchTextDirection = value;
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(this[$runtimeType], dart.runtimeType(other))) return false;
      let typedOther = src__widgets__icon_data.IconData._check(other);
      return this.codePoint == typedOther.codePoint && this.fontFamily == typedOther.fontFamily && this.fontPackage == typedOther.fontPackage && this.matchTextDirection == typedOther.matchTextDirection;
    }
    get hashCode() {
      return ui$.hashValues(this.codePoint, this.fontFamily, this.fontPackage, this.matchTextDirection);
    }
    toString() {
      if (dart.test(src__util.assertionsEnabled)) {
        let data = this.codePoint[$toRadixString](16)[$toUpperCase]()[$padLeft](5, "0");
        return "IconData(U+" + data + ")";
      } else {
        return super.toString();
      }
    }
  };
  (src__widgets__icon_data.IconData.new = function(codePoint, opts) {
    let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
    let fontPackage = opts && 'fontPackage' in opts ? opts.fontPackage : null;
    let matchTextDirection = opts && 'matchTextDirection' in opts ? opts.matchTextDirection : false;
    this[codePoint$] = codePoint;
    this[fontFamily$1] = fontFamily;
    this[fontPackage$] = fontPackage;
    this[matchTextDirection$] = matchTextDirection;
  }).prototype = src__widgets__icon_data.IconData.prototype;
  dart.addTypeTests(src__widgets__icon_data.IconData);
  const codePoint$ = Symbol("IconData.codePoint");
  const fontFamily$1 = Symbol("IconData.fontFamily");
  const fontPackage$ = Symbol("IconData.fontPackage");
  const matchTextDirection$ = Symbol("IconData.matchTextDirection");
  dart.setLibraryUri(src__widgets__icon_data.IconData, "package:flutter_web/src/widgets/icon_data.dart");
  dart.setFieldSignature(src__widgets__icon_data.IconData, () => ({
    __proto__: dart.getFields(src__widgets__icon_data.IconData.__proto__),
    codePoint: dart.finalFieldType(core.int),
    fontFamily: dart.finalFieldType(core.String),
    fontPackage: dart.finalFieldType(core.String),
    matchTextDirection: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(src__widgets__icon_data.IconData, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__widgets__icon_data.IconData, ['hashCode']);
  const _frictionSimulation = dart.privateName(src__widgets__scroll_simulation, "_frictionSimulation");
  const _springSimulation = dart.privateName(src__widgets__scroll_simulation, "_springSimulation");
  const _springTime = dart.privateName(src__widgets__scroll_simulation, "_springTime");
  const _timeOffset = dart.privateName(src__widgets__scroll_simulation, "_timeOffset");
  const _underscrollSimulation = dart.privateName(src__widgets__scroll_simulation, "_underscrollSimulation");
  const _overscrollSimulation = dart.privateName(src__widgets__scroll_simulation, "_overscrollSimulation");
  const _simulation = dart.privateName(src__widgets__scroll_simulation, "_simulation");
  src__widgets__scroll_simulation.BouncingScrollSimulation = class BouncingScrollSimulation extends src__physics__simulation.Simulation {
    get leadingExtent() {
      return this[leadingExtent$];
    }
    set leadingExtent(value) {
      super.leadingExtent = value;
    }
    get trailingExtent() {
      return this[trailingExtent$];
    }
    set trailingExtent(value) {
      super.trailingExtent = value;
    }
    get spring() {
      return this[spring$];
    }
    set spring(value) {
      super.spring = value;
    }
    [_underscrollSimulation](x, dx) {
      return new src__physics__spring_simulation.ScrollSpringSimulation.new(this.spring, x, this.leadingExtent, dx);
    }
    [_overscrollSimulation](x, dx) {
      return new src__physics__spring_simulation.ScrollSpringSimulation.new(this.spring, x, this.trailingExtent, dx);
    }
    [_simulation](time) {
      let simulation = null;
      if (dart.notNull(time) > dart.notNull(this[_springTime])) {
        this[_timeOffset] = this[_springTime][$isFinite] ? this[_springTime] : 0.0;
        simulation = this[_springSimulation];
      } else {
        this[_timeOffset] = 0.0;
        simulation = this[_frictionSimulation];
      }
      simulation.tolerance = this.tolerance;
      return simulation;
    }
    x(time) {
      return this[_simulation](time).x(dart.notNull(time) - dart.notNull(this[_timeOffset]));
    }
    dx(time) {
      return this[_simulation](time).dx(dart.notNull(time) - dart.notNull(this[_timeOffset]));
    }
    isDone(time) {
      return this[_simulation](time).isDone(dart.notNull(time) - dart.notNull(this[_timeOffset]));
    }
    toString() {
      if (dart.test(src__util.assertionsEnabled)) {
        return dart.str(this[$runtimeType]) + "(leadingExtent: " + dart.str(this.leadingExtent) + ", " + ("trailingExtent: " + dart.str(this.trailingExtent) + ")");
      } else {
        return super.toString();
      }
    }
  };
  (src__widgets__scroll_simulation.BouncingScrollSimulation.new = function(opts) {
    let position = opts && 'position' in opts ? opts.position : null;
    let velocity = opts && 'velocity' in opts ? opts.velocity : null;
    let leadingExtent = opts && 'leadingExtent' in opts ? opts.leadingExtent : null;
    let trailingExtent = opts && 'trailingExtent' in opts ? opts.trailingExtent : null;
    let spring = opts && 'spring' in opts ? opts.spring : null;
    let tolerance = opts && 'tolerance' in opts ? opts.tolerance : src__physics__tolerance.Tolerance.defaultTolerance;
    this[_frictionSimulation] = null;
    this[_springSimulation] = null;
    this[_springTime] = null;
    this[_timeOffset] = 0.0;
    this[leadingExtent$] = leadingExtent;
    this[trailingExtent$] = trailingExtent;
    this[spring$] = spring;
    if (!(position != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/widgets/scroll_simulation.dart", 40, 16, "position != null");
    if (!(velocity != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/widgets/scroll_simulation.dart", 41, 16, "velocity != null");
    if (!(leadingExtent != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/widgets/scroll_simulation.dart", 42, 16, "leadingExtent != null");
    if (!(trailingExtent != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/widgets/scroll_simulation.dart", 43, 16, "trailingExtent != null");
    if (!(dart.notNull(leadingExtent) <= dart.notNull(trailingExtent))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/widgets/scroll_simulation.dart", 44, 16, "leadingExtent <= trailingExtent");
    if (!(spring != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/widgets/scroll_simulation.dart", 45, 16, "spring != null");
    src__widgets__scroll_simulation.BouncingScrollSimulation.__proto__.new.call(this, {tolerance: tolerance});
    if (dart.notNull(position) < dart.notNull(this.leadingExtent)) {
      this[_springSimulation] = this[_underscrollSimulation](position, velocity);
      this[_springTime] = core.double.negativeInfinity;
    } else if (dart.notNull(position) > dart.notNull(this.trailingExtent)) {
      this[_springSimulation] = this[_overscrollSimulation](position, velocity);
      this[_springTime] = core.double.negativeInfinity;
    } else {
      this[_frictionSimulation] = new src__physics__friction_simulation.FrictionSimulation.new(0.135, position, velocity);
      let finalX = this[_frictionSimulation].finalX;
      if (dart.notNull(velocity) > 0.0 && dart.notNull(finalX) > dart.notNull(this.trailingExtent)) {
        this[_springTime] = this[_frictionSimulation].timeAtX(this.trailingExtent);
        this[_springSimulation] = this[_overscrollSimulation](this.trailingExtent, math.min(core.double, this[_frictionSimulation].dx(this[_springTime]), 5000.0));
        if (!this[_springTime][$isFinite]) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/widgets/scroll_simulation.dart", 63, 16, "_springTime.isFinite");
      } else if (dart.notNull(velocity) < 0.0 && dart.notNull(finalX) < dart.notNull(this.leadingExtent)) {
        this[_springTime] = this[_frictionSimulation].timeAtX(this.leadingExtent);
        this[_springSimulation] = this[_underscrollSimulation](this.leadingExtent, math.min(core.double, this[_frictionSimulation].dx(this[_springTime]), 5000.0));
        if (!this[_springTime][$isFinite]) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/widgets/scroll_simulation.dart", 71, 16, "_springTime.isFinite");
      } else {
        this[_springTime] = core.double.infinity;
      }
    }
    if (!(this[_springTime] != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/widgets/scroll_simulation.dart", 76, 12, "_springTime != null");
  }).prototype = src__widgets__scroll_simulation.BouncingScrollSimulation.prototype;
  dart.addTypeTests(src__widgets__scroll_simulation.BouncingScrollSimulation);
  const leadingExtent$ = Symbol("BouncingScrollSimulation.leadingExtent");
  const trailingExtent$ = Symbol("BouncingScrollSimulation.trailingExtent");
  const spring$ = Symbol("BouncingScrollSimulation.spring");
  dart.setMethodSignature(src__widgets__scroll_simulation.BouncingScrollSimulation, () => ({
    __proto__: dart.getMethods(src__widgets__scroll_simulation.BouncingScrollSimulation.__proto__),
    [_underscrollSimulation]: dart.fnType(src__physics__simulation.Simulation, [core.double, core.double]),
    [_overscrollSimulation]: dart.fnType(src__physics__simulation.Simulation, [core.double, core.double]),
    [_simulation]: dart.fnType(src__physics__simulation.Simulation, [core.double]),
    x: dart.fnType(core.double, [core.double]),
    dx: dart.fnType(core.double, [core.double]),
    isDone: dart.fnType(core.bool, [core.double])
  }));
  dart.setLibraryUri(src__widgets__scroll_simulation.BouncingScrollSimulation, "package:flutter_web/src/widgets/scroll_simulation.dart");
  dart.setFieldSignature(src__widgets__scroll_simulation.BouncingScrollSimulation, () => ({
    __proto__: dart.getFields(src__widgets__scroll_simulation.BouncingScrollSimulation.__proto__),
    leadingExtent: dart.finalFieldType(core.double),
    trailingExtent: dart.finalFieldType(core.double),
    spring: dart.finalFieldType(src__physics__spring_simulation.SpringDescription),
    [_frictionSimulation]: dart.fieldType(src__physics__friction_simulation.FrictionSimulation),
    [_springSimulation]: dart.fieldType(src__physics__simulation.Simulation),
    [_springTime]: dart.fieldType(core.double),
    [_timeOffset]: dart.fieldType(core.double)
  }));
  dart.defineExtensionMethods(src__widgets__scroll_simulation.BouncingScrollSimulation, ['toString']);
  dart.defineLazy(src__widgets__scroll_simulation.BouncingScrollSimulation, {
    /*src__widgets__scroll_simulation.BouncingScrollSimulation.maxSpringTransferVelocity*/get maxSpringTransferVelocity() {
      return 5000.0;
    }
  });
  const _duration = dart.privateName(src__widgets__scroll_simulation, "_duration");
  const _distance = dart.privateName(src__widgets__scroll_simulation, "_distance");
  const _flingDuration = dart.privateName(src__widgets__scroll_simulation, "_flingDuration");
  src__widgets__scroll_simulation.ClampingScrollSimulation = class ClampingScrollSimulation extends src__physics__simulation.Simulation {
    get position() {
      return this[position$];
    }
    set position(value) {
      super.position = value;
    }
    get velocity() {
      return this[velocity$];
    }
    set velocity(value) {
      super.velocity = value;
    }
    get friction() {
      return this[friction$];
    }
    set friction(value) {
      super.friction = value;
    }
    static _decelerationForFriction(friction) {
      return dart.notNull(friction) * 61774.04968;
    }
    [_flingDuration](velocity) {
      let scaledFriction = dart.notNull(this.friction) * dart.notNull(src__widgets__scroll_simulation.ClampingScrollSimulation._decelerationForFriction(0.84));
      let deceleration = math.log(0.35 * velocity[$abs]() / scaledFriction);
      return math.exp(deceleration / (dart.notNull(src__widgets__scroll_simulation.ClampingScrollSimulation._kDecelerationRate) - 1.0));
    }
    static _flingDistancePenetration(t) {
      return 1.2 * dart.notNull(t) * dart.notNull(t) * dart.notNull(t) - 3.27 * dart.notNull(t) * dart.notNull(t) + 3.065 * dart.notNull(t);
    }
    static _flingVelocityPenetration(t) {
      return 3.6 * dart.notNull(t) * dart.notNull(t) - 6.54 * dart.notNull(t) + 3.065;
    }
    x(time) {
      let t = (dart.notNull(time) / dart.notNull(this[_duration]))[$clamp](0.0, 1.0);
      return dart.notNull(this.position) + dart.notNull(this[_distance]) * dart.notNull(src__widgets__scroll_simulation.ClampingScrollSimulation._flingDistancePenetration(t)) * this.velocity[$sign];
    }
    dx(time) {
      let t = (dart.notNull(time) / dart.notNull(this[_duration]))[$clamp](0.0, 1.0);
      return dart.notNull(this[_distance]) * dart.notNull(src__widgets__scroll_simulation.ClampingScrollSimulation._flingVelocityPenetration(t)) * this.velocity[$sign] / dart.notNull(this[_duration]);
    }
    isDone(time) {
      return dart.notNull(time) >= dart.notNull(this[_duration]);
    }
  };
  (src__widgets__scroll_simulation.ClampingScrollSimulation.new = function(opts) {
    let position = opts && 'position' in opts ? opts.position : null;
    let velocity = opts && 'velocity' in opts ? opts.velocity : null;
    let friction = opts && 'friction' in opts ? opts.friction : 0.015;
    let tolerance = opts && 'tolerance' in opts ? opts.tolerance : src__physics__tolerance.Tolerance.defaultTolerance;
    this[_duration] = null;
    this[_distance] = null;
    this[position$] = position;
    this[velocity$] = velocity;
    this[friction$] = friction;
    if (!(src__widgets__scroll_simulation.ClampingScrollSimulation._flingVelocityPenetration(0.0) === 3.065)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/widgets/scroll_simulation.dart", 160, 16, "_flingVelocityPenetration(0.0) == _initialVelocityPenetration");
    src__widgets__scroll_simulation.ClampingScrollSimulation.__proto__.new.call(this, {tolerance: tolerance});
    this[_duration] = this[_flingDuration](this.velocity);
    this[_distance] = (dart.notNull(this.velocity) * dart.notNull(this[_duration]) / 3.065)[$abs]();
  }).prototype = src__widgets__scroll_simulation.ClampingScrollSimulation.prototype;
  dart.addTypeTests(src__widgets__scroll_simulation.ClampingScrollSimulation);
  const position$ = Symbol("ClampingScrollSimulation.position");
  const velocity$ = Symbol("ClampingScrollSimulation.velocity");
  const friction$ = Symbol("ClampingScrollSimulation.friction");
  dart.setMethodSignature(src__widgets__scroll_simulation.ClampingScrollSimulation, () => ({
    __proto__: dart.getMethods(src__widgets__scroll_simulation.ClampingScrollSimulation.__proto__),
    [_flingDuration]: dart.fnType(core.double, [core.double]),
    x: dart.fnType(core.double, [core.double]),
    dx: dart.fnType(core.double, [core.double]),
    isDone: dart.fnType(core.bool, [core.double])
  }));
  dart.setLibraryUri(src__widgets__scroll_simulation.ClampingScrollSimulation, "package:flutter_web/src/widgets/scroll_simulation.dart");
  dart.setFieldSignature(src__widgets__scroll_simulation.ClampingScrollSimulation, () => ({
    __proto__: dart.getFields(src__widgets__scroll_simulation.ClampingScrollSimulation.__proto__),
    position: dart.finalFieldType(core.double),
    velocity: dart.finalFieldType(core.double),
    friction: dart.finalFieldType(core.double),
    [_duration]: dart.fieldType(core.double),
    [_distance]: dart.fieldType(core.double)
  }));
  dart.defineLazy(src__widgets__scroll_simulation.ClampingScrollSimulation, {
    /*src__widgets__scroll_simulation.ClampingScrollSimulation._kDecelerationRate*/get _kDecelerationRate() {
      return math.log(0.78) / math.log(0.9);
    },
    /*src__widgets__scroll_simulation.ClampingScrollSimulation._initialVelocityPenetration*/get _initialVelocityPenetration() {
      return 3.065;
    }
  });
  const _opacity = dart.privateName(src__widgets__icon_theme_data, "_opacity");
  let const$5;
  src__widgets__icon_theme_data.IconThemeData = class IconThemeData extends src__foundation__diagnostics.Diagnosticable {
    copyWith(opts) {
      let color = opts && 'color' in opts ? opts.color : null;
      let opacity = opts && 'opacity' in opts ? opts.opacity : null;
      let size = opts && 'size' in opts ? opts.size : null;
      return new src__widgets__icon_theme_data.IconThemeData.new({color: color != null ? color : this.color, opacity: opacity != null ? opacity : this.opacity, size: size != null ? size : this.size});
    }
    merge(other) {
      if (other == null) return this;
      return this.copyWith({color: other.color, opacity: other.opacity, size: other.size});
    }
    get isConcrete() {
      return this.color != null && this.opacity != null && this.size != null;
    }
    get color() {
      return this[color$1];
    }
    set color(value) {
      super.color = value;
    }
    get opacity() {
      return this[_opacity] == null ? null : this[_opacity][$clamp](0.0, 1.0);
    }
    get size() {
      return this[size$0];
    }
    set size(value) {
      super.size = value;
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/widgets/icon_theme_data.dart", 73, 12, "t != null");
      return new src__widgets__icon_theme_data.IconThemeData.new({color: ui$.Color.lerp(a == null ? null : a.color, b == null ? null : b.color, t), opacity: ui$.lerpDouble(a == null ? null : a.opacity, b == null ? null : b.opacity, t), size: ui$.lerpDouble(a == null ? null : a.size, b == null ? null : b.size, t)});
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      let typedOther = src__widgets__icon_theme_data.IconThemeData._check(other);
      return dart.equals(this.color, typedOther.color) && this.opacity == typedOther.opacity && this.size == typedOther.size;
    }
    get hashCode() {
      return ui$.hashValues(this.color, this.opacity, this.size);
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfColor()).new("color", this.color, {defaultValue: null}));
      properties.add(new src__foundation__diagnostics.DoubleProperty.new("opacity", this.opacity, {defaultValue: null}));
      properties.add(new src__foundation__diagnostics.DoubleProperty.new("size", this.size, {defaultValue: null}));
    }
  };
  (src__widgets__icon_theme_data.IconThemeData.new = function(opts) {
    let color = opts && 'color' in opts ? opts.color : null;
    let opacity = opts && 'opacity' in opts ? opts.opacity : null;
    let size = opts && 'size' in opts ? opts.size : null;
    this[color$1] = color;
    this[size$0] = size;
    this[_opacity] = opacity;
    src__widgets__icon_theme_data.IconThemeData.__proto__.new.call(this);
  }).prototype = src__widgets__icon_theme_data.IconThemeData.prototype;
  (src__widgets__icon_theme_data.IconThemeData.fallback = function() {
    this[color$1] = const$5 || (const$5 = dart.const(new ui$.Color.new(4278190080)));
    this[_opacity] = 1.0;
    this[size$0] = 24.0;
    src__widgets__icon_theme_data.IconThemeData.__proto__.new.call(this);
  }).prototype = src__widgets__icon_theme_data.IconThemeData.prototype;
  dart.addTypeTests(src__widgets__icon_theme_data.IconThemeData);
  const color$1 = Symbol("IconThemeData.color");
  const size$0 = Symbol("IconThemeData.size");
  dart.setMethodSignature(src__widgets__icon_theme_data.IconThemeData, () => ({
    __proto__: dart.getMethods(src__widgets__icon_theme_data.IconThemeData.__proto__),
    copyWith: dart.fnType(src__widgets__icon_theme_data.IconThemeData, [], {color: ui$.Color, opacity: core.double, size: core.double}),
    merge: dart.fnType(src__widgets__icon_theme_data.IconThemeData, [src__widgets__icon_theme_data.IconThemeData])
  }));
  dart.setGetterSignature(src__widgets__icon_theme_data.IconThemeData, () => ({
    __proto__: dart.getGetters(src__widgets__icon_theme_data.IconThemeData.__proto__),
    isConcrete: core.bool,
    opacity: core.double
  }));
  dart.setLibraryUri(src__widgets__icon_theme_data.IconThemeData, "package:flutter_web/src/widgets/icon_theme_data.dart");
  dart.setFieldSignature(src__widgets__icon_theme_data.IconThemeData, () => ({
    __proto__: dart.getFields(src__widgets__icon_theme_data.IconThemeData.__proto__),
    color: dart.finalFieldType(ui$.Color),
    [_opacity]: dart.finalFieldType(core.double),
    size: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(src__widgets__icon_theme_data.IconThemeData, ['_equals']);
  dart.defineExtensionAccessors(src__widgets__icon_theme_data.IconThemeData, ['hashCode']);
  dart.setBaseClass(src__painting__image_provider.NetworkImage, src__painting__image_provider.ImageProvider$(src__painting__image_provider.NetworkImage));
  dart.setBaseClass(src__painting__image_provider.MemoryImage, src__painting__image_provider.ImageProvider$(src__painting__image_provider.MemoryImage));
  dart.trackLibraries("packages/flutter_web/src/animation/animation.ddc", {
    "package:flutter_web/src/semantics/debug.dart": src__semantics__debug,
    "package:flutter_web/src/semantics/binding.dart": src__semantics__binding,
    "package:flutter_web/src/painting/alignment.dart": src__painting__alignment,
    "package:flutter_web/src/painting/basic_types.dart": src__painting__basic_types,
    "package:flutter_web/src/painting/border_radius.dart": src__painting__border_radius,
    "package:flutter_web/src/painting/image_stream.dart": src__painting__image_stream,
    "package:flutter_web/src/painting/image_cache.dart": src__painting__image_cache,
    "package:flutter_web/src/painting/binding.dart": src__painting__binding,
    "package:flutter_web/src/painting/debug.dart": src__painting__debug,
    "package:flutter_web/src/painting/box_shadow.dart": src__painting__box_shadow,
    "package:flutter_web/src/painting/image_provider.dart": src__painting__image_provider,
    "package:flutter_web/src/painting/box_fit.dart": src__painting__box_fit,
    "package:flutter_web/src/painting/gradient.dart": src__painting__gradient,
    "package:flutter_web/src/painting/clip.dart": src__painting__clip,
    "package:flutter_web/src/painting/colors.dart": src__painting__colors,
    "package:flutter_web/src/painting/text_style.dart": src__painting__text_style,
    "package:flutter_web/src/painting/strut_style.dart": src__painting__strut_style,
    "package:flutter_web/src/painting/text_span.dart": src__painting__text_span,
    "package:flutter_web/src/painting/text_painter.dart": src__painting__text_painter,
    "package:flutter_web/src/painting/fractional_offset.dart": src__painting__fractional_offset,
    "package:flutter_web/src/painting/geometry.dart": src__painting__geometry,
    "package:flutter_web/src/painting/image_decoder.dart": src__painting__image_decoder,
    "package:flutter_web/src/painting/image_resolution.dart": src__painting__image_resolution,
    "package:flutter_web/src/painting/notched_shapes.dart": src__painting__notched_shapes,
    "package:flutter_web/src/painting/paint_utilities.dart": src__painting__paint_utilities,
    "package:flutter_web/src/animation/curves.dart": src__animation__curves,
    "package:flutter_web/src/animation/listener_helpers.dart": src__animation__listener_helpers,
    "package:flutter_web/src/animation/animations.dart": src__animation__animations,
    "package:flutter_web/src/animation/tween.dart": src__animation__tween,
    "package:flutter_web/src/animation/animation.dart": src__animation__animation,
    "package:flutter_web/src/animation/tween_sequence.dart": src__animation__tween_sequence,
    "package:flutter_web/src/rendering/platform_view.dart": src__rendering__platform_view,
    "package:flutter_web/src/widgets/icon_data.dart": src__widgets__icon_data,
    "package:flutter_web/src/widgets/scroll_simulation.dart": src__widgets__scroll_simulation,
    "package:flutter_web/src/widgets/icon_theme_data.dart": src__widgets__icon_theme_data
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../semantics/debug.dart","../semantics/binding.dart","../painting/alignment.dart","../painting/basic_types.dart","../painting/border_radius.dart","../painting/image_stream.dart","../painting/image_cache.dart","../painting/binding.dart","../painting/debug.dart","../painting/box_shadow.dart","../painting/image_provider.dart","../painting/box_fit.dart","../painting/gradient.dart","../painting/clip.dart","../painting/colors.dart","../painting/text_style.dart","../painting/strut_style.dart","../painting/text_span.dart","../painting/text_painter.dart","../painting/fractional_offset.dart","../painting/geometry.dart","../painting/image_decoder.dart","../painting/image_resolution.dart","../painting/notched_shapes.dart","../painting/paint_utilities.dart","curves.dart","listener_helpers.dart","animation.dart","animations.dart","tween.dart","tween_sequence.dart","../widgets/icon_data.dart","../widgets/scroll_simulation.dart","../widgets/icon_theme_data.dart"],"names":[],"mappings":"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","file":"animation.ddc.js"}');
  // Exports:
  return {
    src__semantics__debug: src__semantics__debug,
    src__semantics__binding: src__semantics__binding,
    src__painting__alignment: src__painting__alignment,
    src__painting__basic_types: src__painting__basic_types,
    src__painting__border_radius: src__painting__border_radius,
    src__painting__image_stream: src__painting__image_stream,
    src__painting__image_cache: src__painting__image_cache,
    src__painting__binding: src__painting__binding,
    src__painting__debug: src__painting__debug,
    src__painting__box_shadow: src__painting__box_shadow,
    src__painting__image_provider: src__painting__image_provider,
    src__painting__box_fit: src__painting__box_fit,
    src__painting__gradient: src__painting__gradient,
    src__painting__clip: src__painting__clip,
    src__painting__colors: src__painting__colors,
    src__painting__text_style: src__painting__text_style,
    src__painting__strut_style: src__painting__strut_style,
    src__painting__text_span: src__painting__text_span,
    src__painting__text_painter: src__painting__text_painter,
    src__painting__fractional_offset: src__painting__fractional_offset,
    src__painting__geometry: src__painting__geometry,
    src__painting__image_decoder: src__painting__image_decoder,
    src__painting__image_resolution: src__painting__image_resolution,
    src__painting__notched_shapes: src__painting__notched_shapes,
    src__painting__paint_utilities: src__painting__paint_utilities,
    src__animation__curves: src__animation__curves,
    src__animation__listener_helpers: src__animation__listener_helpers,
    src__animation__animations: src__animation__animations,
    src__animation__tween: src__animation__tween,
    src__animation__animation: src__animation__animation,
    src__animation__tween_sequence: src__animation__tween_sequence,
    src__rendering__platform_view: src__rendering__platform_view,
    src__widgets__icon_data: src__widgets__icon_data,
    src__widgets__scroll_simulation: src__widgets__scroll_simulation,
    src__widgets__icon_theme_data: src__widgets__icon_theme_data
  };
});

//# sourceMappingURL=animation.ddc.js.map

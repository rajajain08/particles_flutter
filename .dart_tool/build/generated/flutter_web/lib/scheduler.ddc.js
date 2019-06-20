define(['dart_sdk', 'packages/flutter_web/src/scheduler/binding', 'packages/flutter_web/src/foundation/assertions'], function(dart_sdk, binding, assertions) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__scheduler__binding = binding.src__scheduler__binding;
  const src__foundation__assertions = assertions.src__foundation__assertions;
  const src__scheduler__ticker = Object.create(dart.library);
  const scheduler = Object.create(dart.library);
  const $runtimeType = dartx.runtimeType;
  const $forEach = dartx.forEach;
  const $split = dartx.split;
  const $trimRight = dartx.trimRight;
  const $toString = dartx.toString;
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let DurationTovoid = () => (DurationTovoid = dart.constFn(dart.fnType(dart.void, [core.Duration])))();
  let CompleterOfNull = () => (CompleterOfNull = dart.constFn(async.Completer$(core.Null)))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let FutureOrOfNull = () => (FutureOrOfNull = dart.constFn(async.FutureOr$(core.Null)))();
  let VoidToFutureOrOfNull = () => (VoidToFutureOrOfNull = dart.constFn(dart.fnType(FutureOrOfNull(), [])))();
  let FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  src__scheduler__ticker.TickerProvider = class TickerProvider extends core.Object {};
  (src__scheduler__ticker.TickerProvider.new = function() {
  }).prototype = src__scheduler__ticker.TickerProvider.prototype;
  dart.addTypeTests(src__scheduler__ticker.TickerProvider);
  dart.setLibraryUri(src__scheduler__ticker.TickerProvider, "package:flutter_web/src/scheduler/ticker.dart");
  const _onTick = dart.privateName(src__scheduler__ticker, "_onTick");
  const _future = dart.privateName(src__scheduler__ticker, "_future");
  const _muted = dart.privateName(src__scheduler__ticker, "_muted");
  const _startTime = dart.privateName(src__scheduler__ticker, "_startTime");
  const _animationId = dart.privateName(src__scheduler__ticker, "_animationId");
  const _debugCreationStack = dart.privateName(src__scheduler__ticker, "_debugCreationStack");
  const _cancel = dart.privateName(src__scheduler__ticker, "_cancel");
  const _complete = dart.privateName(src__scheduler__ticker, "_complete");
  const _tick = dart.privateName(src__scheduler__ticker, "_tick");
  src__scheduler__ticker.Ticker = class Ticker extends core.Object {
    get muted() {
      return this[_muted];
    }
    set muted(value) {
      if (value == this.muted) return;
      this[_muted] = value;
      if (dart.test(value)) {
        this.unscheduleTick();
      } else if (dart.test(this.shouldScheduleTick)) {
        this.scheduleTick();
      }
    }
    get isTicking() {
      if (this[_future] == null) return false;
      if (dart.test(this.muted)) return false;
      if (dart.test(src__scheduler__binding.SchedulerBinding.instance.framesEnabled)) return true;
      if (src__scheduler__binding.SchedulerBinding.instance.schedulerPhase !== src__scheduler__binding.SchedulerPhase.idle) return true;
      return false;
    }
    get isActive() {
      return this[_future] != null;
    }
    start() {
      if (!dart.test(dart.fn(() => {
        if (dart.test(this.isActive)) {
          dart.throw(src__foundation__assertions.FlutterError.new("A ticker was started twice.\n" + "A ticker that is already active cannot be started again without first stopping it.\n" + ("The affected ticker was: " + dart.str(this.toString({debugIncludeStack: true})))));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/scheduler/ticker.dart", 143, 12, "() {if (isActive) {throw FlutterError('A ticker was started twice.\\n' 'A ticker that is already active cannot be started again without first stopping it.\\n' 'The affected ticker was: ${toString(debugIncludeStack: true)}');} return true;}()");
      if (!(this[_startTime] == null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/scheduler/ticker.dart", 151, 12, "_startTime == null");
      this[_future] = new src__scheduler__ticker.TickerFuture.__();
      if (dart.test(this.shouldScheduleTick)) {
        this.scheduleTick();
      }
      if (dart.notNull(src__scheduler__binding.SchedulerBinding.instance.schedulerPhase.index) > dart.notNull(src__scheduler__binding.SchedulerPhase.idle.index) && dart.notNull(src__scheduler__binding.SchedulerBinding.instance.schedulerPhase.index) < dart.notNull(src__scheduler__binding.SchedulerPhase.postFrameCallbacks.index)) this[_startTime] = src__scheduler__binding.SchedulerBinding.instance.currentFrameTimeStamp;
      return this[_future];
    }
    stop(opts) {
      let canceled = opts && 'canceled' in opts ? opts.canceled : false;
      if (!dart.test(this.isActive)) return;
      let localFuture = this[_future];
      this[_future] = null;
      this[_startTime] = null;
      if (!!dart.test(this.isActive)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/scheduler/ticker.dart", 187, 12, "!isActive");
      this.unscheduleTick();
      if (dart.test(canceled)) {
        localFuture[_cancel](this);
      } else {
        localFuture[_complete]();
      }
    }
    get scheduled() {
      return this[_animationId] != null;
    }
    get shouldScheduleTick() {
      return !dart.test(this.muted) && dart.test(this.isActive) && !dart.test(this.scheduled);
    }
    [_tick](timeStamp) {
      if (!dart.test(this.isTicking)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/scheduler/ticker.dart", 218, 12, "isTicking");
      if (!dart.test(this.scheduled)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/scheduler/ticker.dart", 219, 12, "scheduled");
      this[_animationId] = null;
      let t = this[_startTime];
      t == null ? this[_startTime] = timeStamp : t;
      this[_onTick](timeStamp['-'](this[_startTime]));
      if (dart.test(this.shouldScheduleTick)) this.scheduleTick({rescheduling: true});
    }
    scheduleTick(opts) {
      let rescheduling = opts && 'rescheduling' in opts ? opts.rescheduling : false;
      if (!!dart.test(this.scheduled)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/scheduler/ticker.dart", 235, 12, "!scheduled");
      if (!dart.test(this.shouldScheduleTick)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/scheduler/ticker.dart", 236, 12, "shouldScheduleTick");
      this[_animationId] = src__scheduler__binding.SchedulerBinding.instance.scheduleFrameCallback(dart.bind(this, _tick), {rescheduling: rescheduling});
    }
    unscheduleTick() {
      if (dart.test(this.scheduled)) {
        src__scheduler__binding.SchedulerBinding.instance.cancelFrameCallbackWithId(this[_animationId]);
        this[_animationId] = null;
      }
      if (!!dart.test(this.shouldScheduleTick)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/scheduler/ticker.dart", 253, 12, "!shouldScheduleTick");
    }
    absorbTicker(originalTicker) {
      if (!!dart.test(this.isActive)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/scheduler/ticker.dart", 266, 12, "!isActive");
      if (!(this[_future] == null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/scheduler/ticker.dart", 267, 12, "_future == null");
      if (!(this[_startTime] == null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/scheduler/ticker.dart", 268, 12, "_startTime == null");
      if (!(this[_animationId] == null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/scheduler/ticker.dart", 269, 12, "_animationId == null");
      if (!(originalTicker[_future] == null === (originalTicker[_startTime] == null))) dart.assertFailed("Cannot absorb Ticker after it has been disposed.", "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/scheduler/ticker.dart", 271, 9, "(originalTicker._future == null) == (originalTicker._startTime == null)");
      if (originalTicker[_future] != null) {
        this[_future] = originalTicker[_future];
        this[_startTime] = originalTicker[_startTime];
        if (dart.test(this.shouldScheduleTick)) this.scheduleTick();
        originalTicker[_future] = null;
        originalTicker.unscheduleTick();
      }
      originalTicker.dispose();
    }
    dispose() {
      if (this[_future] != null) {
        let localFuture = this[_future];
        this[_future] = null;
        if (!!dart.test(this.isActive)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/scheduler/ticker.dart", 291, 14, "!isActive");
        this.unscheduleTick();
        localFuture[_cancel](this);
      }
      if (!dart.test(dart.fn(() => {
        this[_startTime] = core.Duration.zero;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/scheduler/ticker.dart", 295, 12, "() {_startTime = Duration.zero; return true;}()");
    }
    get debugLabel() {
      return this[debugLabel$];
    }
    set debugLabel(value) {
      super.debugLabel = value;
    }
    toString(opts) {
      let debugIncludeStack = opts && 'debugIncludeStack' in opts ? opts.debugIncludeStack : false;
      let buffer = new core.StringBuffer.new();
      buffer.write(dart.str(this[$runtimeType]) + "(");
      if (!dart.test(dart.fn(() => {
        buffer.write(this.debugLabel != null ? this.debugLabel : "");
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/scheduler/ticker.dart", 314, 12, "() {buffer.write(debugLabel ?? ''); return true;}()");
      buffer.write(")");
      if (!dart.test(dart.fn(() => {
        if (dart.test(debugIncludeStack)) {
          buffer.writeln();
          buffer.writeln("The stack trace when the " + dart.str(this[$runtimeType]) + " was actually created was:");
          src__foundation__assertions.FlutterError.defaultStackFilter(dart.toString(this[_debugCreationStack])[$trimRight]()[$split]("\n"))[$forEach](dart.bind(buffer, 'writeln'));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/scheduler/ticker.dart", 319, 12, "() {if (debugIncludeStack) {buffer.writeln(); buffer.writeln('The stack trace when the $runtimeType was actually created was:'); FlutterError.defaultStackFilter(_debugCreationStack.toString().trimRight().split('\\n')).forEach(buffer.writeln);} return true;}()");
      return buffer.toString();
    }
  };
  (src__scheduler__ticker.Ticker.new = function(onTick, opts) {
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    this[_future] = null;
    this[_muted] = false;
    this[_startTime] = null;
    this[_animationId] = null;
    this[_debugCreationStack] = null;
    this[_onTick] = onTick;
    this[debugLabel$] = debugLabel;
    if (!dart.test(dart.fn(() => {
      this[_debugCreationStack] = core.StackTrace.current;
      return true;
    }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/scheduler/ticker.dart", 63, 12, "() {_debugCreationStack = StackTrace.current; return true;}()");
  }).prototype = src__scheduler__ticker.Ticker.prototype;
  dart.addTypeTests(src__scheduler__ticker.Ticker);
  const debugLabel$ = Symbol("Ticker.debugLabel");
  dart.setMethodSignature(src__scheduler__ticker.Ticker, () => ({
    __proto__: dart.getMethods(src__scheduler__ticker.Ticker.__proto__),
    start: dart.fnType(src__scheduler__ticker.TickerFuture, []),
    stop: dart.fnType(dart.void, [], {canceled: core.bool}),
    [_tick]: dart.fnType(dart.void, [core.Duration]),
    scheduleTick: dart.fnType(dart.void, [], {rescheduling: core.bool}),
    unscheduleTick: dart.fnType(dart.void, []),
    absorbTicker: dart.fnType(dart.void, [src__scheduler__ticker.Ticker]),
    dispose: dart.fnType(dart.void, []),
    toString: dart.fnType(core.String, [], {debugIncludeStack: core.bool}),
    [$toString]: dart.fnType(core.String, [], {debugIncludeStack: core.bool})
  }));
  dart.setGetterSignature(src__scheduler__ticker.Ticker, () => ({
    __proto__: dart.getGetters(src__scheduler__ticker.Ticker.__proto__),
    muted: core.bool,
    isTicking: core.bool,
    isActive: core.bool,
    scheduled: core.bool,
    shouldScheduleTick: core.bool
  }));
  dart.setSetterSignature(src__scheduler__ticker.Ticker, () => ({
    __proto__: dart.getSetters(src__scheduler__ticker.Ticker.__proto__),
    muted: core.bool
  }));
  dart.setLibraryUri(src__scheduler__ticker.Ticker, "package:flutter_web/src/scheduler/ticker.dart");
  dart.setFieldSignature(src__scheduler__ticker.Ticker, () => ({
    __proto__: dart.getFields(src__scheduler__ticker.Ticker.__proto__),
    [_future]: dart.fieldType(src__scheduler__ticker.TickerFuture),
    [_muted]: dart.fieldType(core.bool),
    [_startTime]: dart.fieldType(core.Duration),
    [_onTick]: dart.finalFieldType(DurationTovoid()),
    [_animationId]: dart.fieldType(core.int),
    debugLabel: dart.finalFieldType(core.String),
    [_debugCreationStack]: dart.fieldType(core.StackTrace)
  }));
  dart.defineExtensionMethods(src__scheduler__ticker.Ticker, ['toString']);
  const _primaryCompleter = dart.privateName(src__scheduler__ticker, "_primaryCompleter");
  const _secondaryCompleter = dart.privateName(src__scheduler__ticker, "_secondaryCompleter");
  const _completed = dart.privateName(src__scheduler__ticker, "_completed");
  let const$;
  src__scheduler__ticker.TickerFuture = class TickerFuture extends core.Object {
    [_complete]() {
      if (!(this[_completed] == null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/scheduler/ticker.dart", 370, 12, "_completed == null");
      this[_completed] = true;
      this[_primaryCompleter].complete(null);
      let t = this[_secondaryCompleter];
      t == null ? null : t.complete(null);
    }
    [_cancel](ticker) {
      if (!(this[_completed] == null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/scheduler/ticker.dart", 377, 12, "_completed == null");
      this[_completed] = false;
      let t = this[_secondaryCompleter];
      t == null ? null : t.completeError(new src__scheduler__ticker.TickerCanceled.new(ticker));
    }
    whenCompleteOrCancel(callback) {
      function thunk(value) {
        callback();
        return null;
      }
      dart.fn(thunk, dynamicToNull());
      FutureOfNull()._check(this.orCancel.then(core.Null, thunk, {onError: thunk}));
    }
    get orCancel() {
      if (this[_secondaryCompleter] == null) {
        this[_secondaryCompleter] = CompleterOfNull().new();
        if (this[_completed] != null) {
          if (dart.test(this[_completed])) {
            this[_secondaryCompleter].complete(null);
          } else {
            this[_secondaryCompleter].completeError(const$ || (const$ = dart.const(new src__scheduler__ticker.TickerCanceled.new())));
          }
        }
      }
      return this[_secondaryCompleter].future;
    }
    asStream() {
      return this[_primaryCompleter].future.asStream();
    }
    catchError(onError, opts) {
      let test = opts && 'test' in opts ? opts.test : null;
      return this[_primaryCompleter].future.catchError(onError, {test: test});
    }
    then(E, f, opts) {
      let onError = opts && 'onError' in opts ? opts.onError : null;
      return async.Future$(E)._check(this[_primaryCompleter].future.then(E, dart.fnType(async.FutureOr$(E), [core.Null])._check(f), {onError: onError}));
    }
    timeout(timeLimit, opts) {
      let onTimeout = opts && 'onTimeout' in opts ? opts.onTimeout : null;
      return this[_primaryCompleter].future.timeout(timeLimit, {onTimeout: VoidToFutureOrOfNull()._check(onTimeout)});
    }
    whenComplete(action) {
      return this[_primaryCompleter].future.whenComplete(action);
    }
  };
  (src__scheduler__ticker.TickerFuture.__ = function() {
    this[_primaryCompleter] = CompleterOfNull().new();
    this[_secondaryCompleter] = null;
    this[_completed] = null;
  }).prototype = src__scheduler__ticker.TickerFuture.prototype;
  (src__scheduler__ticker.TickerFuture.complete = function() {
    this[_primaryCompleter] = CompleterOfNull().new();
    this[_secondaryCompleter] = null;
    this[_completed] = null;
    this[_complete]();
  }).prototype = src__scheduler__ticker.TickerFuture.prototype;
  src__scheduler__ticker.TickerFuture.prototype[dart.isFuture] = true;
  dart.addTypeTests(src__scheduler__ticker.TickerFuture);
  src__scheduler__ticker.TickerFuture[dart.implements] = () => [FutureOfvoid()];
  dart.setMethodSignature(src__scheduler__ticker.TickerFuture, () => ({
    __proto__: dart.getMethods(src__scheduler__ticker.TickerFuture.__proto__),
    [_complete]: dart.fnType(dart.void, []),
    [_cancel]: dart.fnType(dart.void, [src__scheduler__ticker.Ticker]),
    whenCompleteOrCancel: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    asStream: dart.fnType(async.Stream$(core.Null), []),
    catchError: dart.fnType(async.Future$(dart.void), [core.Function], {test: dart.fnType(core.bool, [dart.dynamic])}),
    then: dart.gFnType(E => [async.Future$(E), [dart.fnType(dart.dynamic, [core.Null])], {onError: core.Function}]),
    timeout: dart.fnType(async.Future$(dart.void), [core.Duration], {onTimeout: dart.fnType(dart.dynamic, [])}),
    whenComplete: dart.fnType(async.Future$(dart.void), [dart.fnType(dart.dynamic, [])])
  }));
  dart.setGetterSignature(src__scheduler__ticker.TickerFuture, () => ({
    __proto__: dart.getGetters(src__scheduler__ticker.TickerFuture.__proto__),
    orCancel: async.Future$(dart.void)
  }));
  dart.setLibraryUri(src__scheduler__ticker.TickerFuture, "package:flutter_web/src/scheduler/ticker.dart");
  dart.setFieldSignature(src__scheduler__ticker.TickerFuture, () => ({
    __proto__: dart.getFields(src__scheduler__ticker.TickerFuture.__proto__),
    [_primaryCompleter]: dart.finalFieldType(CompleterOfNull()),
    [_secondaryCompleter]: dart.fieldType(CompleterOfNull()),
    [_completed]: dart.fieldType(core.bool)
  }));
  src__scheduler__ticker.TickerCanceled = class TickerCanceled extends core.Object {
    get ticker() {
      return this[ticker$];
    }
    set ticker(value) {
      super.ticker = value;
    }
    toString() {
      if (this.ticker != null) return "This ticker was canceled: " + dart.str(this.ticker);
      return "The ticker was canceled before the \"orCancel\" property was first " + "used.";
    }
  };
  (src__scheduler__ticker.TickerCanceled.new = function(ticker) {
    if (ticker === void 0) ticker = null;
    this[ticker$] = ticker;
  }).prototype = src__scheduler__ticker.TickerCanceled.prototype;
  dart.addTypeTests(src__scheduler__ticker.TickerCanceled);
  const ticker$ = Symbol("TickerCanceled.ticker");
  src__scheduler__ticker.TickerCanceled[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(src__scheduler__ticker.TickerCanceled, "package:flutter_web/src/scheduler/ticker.dart");
  dart.setFieldSignature(src__scheduler__ticker.TickerCanceled, () => ({
    __proto__: dart.getFields(src__scheduler__ticker.TickerCanceled.__proto__),
    ticker: dart.finalFieldType(src__scheduler__ticker.Ticker)
  }));
  dart.defineExtensionMethods(src__scheduler__ticker.TickerCanceled, ['toString']);
  dart.trackLibraries("packages/flutter_web/scheduler.ddc", {
    "package:flutter_web/src/scheduler/ticker.dart": src__scheduler__ticker,
    "package:flutter_web/scheduler.dart": scheduler
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/scheduler/ticker.dart"],"names":[],"mappings":"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","file":"scheduler.ddc.js"}');
  // Exports:
  return {
    src__scheduler__ticker: src__scheduler__ticker,
    scheduler: scheduler
  };
});

//# sourceMappingURL=scheduler.ddc.js.map

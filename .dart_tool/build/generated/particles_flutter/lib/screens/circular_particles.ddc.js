define(['dart_sdk', 'packages/flutter_web/material', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/animation', 'packages/flutter_web/src/gestures/arena', 'packages/particles_flutter/component/painter'], function(dart_sdk, material, ui, animation, animation$, arena, painter) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__material__colors = material.src__material__colors;
  const ui$ = ui.ui;
  const src__animation__curves = animation.src__animation__curves;
  const src__animation__tween = animation.src__animation__tween;
  const src__animation__animation = animation.src__animation__animation;
  const src__animation__animations = animation.src__animation__animations;
  const src__widgets__framework = animation$.src__widgets__framework;
  const src__widgets__binding = animation$.src__widgets__binding;
  const src__animation__animation_controller = animation$.src__animation__animation_controller;
  const src__widgets__basic = animation$.src__widgets__basic;
  const src__widgets__gesture_detector = animation$.src__widgets__gesture_detector;
  const src__widgets__ticker_provider = animation$.src__widgets__ticker_provider;
  const src__gestures__tap = arena.src__gestures__tap;
  const src__gestures__drag_details = arena.src__gestures__drag_details;
  const component__painter = painter.component__painter;
  const screens__circular_particles = Object.create(dart.library);
  const $add = dartx.add;
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $length = dartx.length;
  const $floor = dartx.floor;
  const $removeAt = dartx.removeAt;
  let ListOfColor = () => (ListOfColor = dart.constFn(core.List$(ui$.Color)))();
  let JSArrayOfdouble = () => (JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let TweenOfdouble = () => (TweenOfdouble = dart.constFn(src__animation__tween.Tween$(core.double)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let FutureOfbool = () => (FutureOfbool = dart.constFn(async.Future$(core.bool)))();
  let VoidToFutureOfbool = () => (VoidToFutureOfbool = dart.constFn(dart.fnType(FutureOfbool(), [])))();
  let AnimationOfOffset = () => (AnimationOfOffset = dart.constFn(src__animation__animation.Animation$(ui$.Offset)))();
  let JSArrayOfAnimationOfOffset = () => (JSArrayOfAnimationOfOffset = dart.constFn(_interceptors.JSArray$(AnimationOfOffset())))();
  let TweenOfOffset = () => (TweenOfOffset = dart.constFn(src__animation__tween.Tween$(ui$.Offset)))();
  let TapDownDetailsToNull = () => (TapDownDetailsToNull = dart.constFn(dart.fnType(core.Null, [src__gestures__tap.TapDownDetails])))();
  let DragUpdateDetailsToNull = () => (DragUpdateDetailsToNull = dart.constFn(dart.fnType(core.Null, [src__gestures__drag_details.DragUpdateDetails])))();
  let DragEndDetailsToNull = () => (DragEndDetailsToNull = dart.constFn(dart.fnType(core.Null, [src__gestures__drag_details.DragEndDetails])))();
  let AnimationOfdouble = () => (AnimationOfdouble = dart.constFn(src__animation__animation.Animation$(core.double)))();
  let ListOfdouble = () => (ListOfdouble = dart.constFn(core.List$(core.double)))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let JSArrayOfOffset = () => (JSArrayOfOffset = dart.constFn(_interceptors.JSArray$(ui$.Offset)))();
  let JSArrayOfbool = () => (JSArrayOfbool = dart.constFn(_interceptors.JSArray$(core.bool)))();
  let const$;
  let const$0;
  screens__circular_particles.CircularParticle = class CircularParticle extends src__widgets__framework.StatefulWidget {
    get awayRadius() {
      return this[awayRadius$];
    }
    set awayRadius(value) {
      super.awayRadius = value;
    }
    get height() {
      return this[height$];
    }
    set height(value) {
      super.height = value;
    }
    get width() {
      return this[width$];
    }
    set width(value) {
      super.width = value;
    }
    get onTapAnimation() {
      return this[onTapAnimation$];
    }
    set onTapAnimation(value) {
      super.onTapAnimation = value;
    }
    get numberOfParticles() {
      return this[numberOfParticles$];
    }
    set numberOfParticles(value) {
      super.numberOfParticles = value;
    }
    get speedOfParticles() {
      return this[speedOfParticles$];
    }
    set speedOfParticles(value) {
      super.speedOfParticles = value;
    }
    get isRandomColor() {
      return this[isRandomColor$];
    }
    set isRandomColor(value) {
      super.isRandomColor = value;
    }
    get particleColor() {
      return this[particleColor$];
    }
    set particleColor(value) {
      super.particleColor = value;
    }
    get awayAnimationDuration() {
      return this[awayAnimationDuration$];
    }
    set awayAnimationDuration(value) {
      super.awayAnimationDuration = value;
    }
    get awayAnimationCurve() {
      return this[awayAnimationCurve$];
    }
    set awayAnimationCurve(value) {
      super.awayAnimationCurve = value;
    }
    get maxParticleSize() {
      return this[maxParticleSize$];
    }
    set maxParticleSize(value) {
      super.maxParticleSize = value;
    }
    get isRandSize() {
      return this[isRandSize$];
    }
    set isRandSize(value) {
      super.isRandSize = value;
    }
    get randColorList() {
      return this[randColorList$];
    }
    set randColorList(value) {
      super.randColorList = value;
    }
    get enableHover() {
      return this[enableHover$];
    }
    set enableHover(value) {
      super.enableHover = value;
    }
    get hoverColor() {
      return this[hoverColor$];
    }
    set hoverColor(value) {
      super.hoverColor = value;
    }
    get hoverRadius() {
      return this[hoverRadius$];
    }
    set hoverRadius(value) {
      super.hoverRadius = value;
    }
    createState() {
      return new screens__circular_particles._CircularParticleState.new();
    }
  };
  (screens__circular_particles.CircularParticle.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let onTapAnimation = opts && 'onTapAnimation' in opts ? opts.onTapAnimation : true;
    let numberOfParticles = opts && 'numberOfParticles' in opts ? opts.numberOfParticles : 500;
    let speedOfParticles = opts && 'speedOfParticles' in opts ? opts.speedOfParticles : 2;
    let awayRadius = opts && 'awayRadius' in opts ? opts.awayRadius : 100;
    let isRandomColor = opts && 'isRandomColor' in opts ? opts.isRandomColor : null;
    let particleColor = opts && 'particleColor' in opts ? opts.particleColor : src__material__colors.Colors.white;
    let awayAnimationDuration = opts && 'awayAnimationDuration' in opts ? opts.awayAnimationDuration : const$ || (const$ = dart.const(new core.Duration.new({milliseconds: 600})));
    let maxParticleSize = opts && 'maxParticleSize' in opts ? opts.maxParticleSize : 4;
    let isRandSize = opts && 'isRandSize' in opts ? opts.isRandSize : false;
    let randColorList = opts && 'randColorList' in opts ? opts.randColorList : const$0 || (const$0 = dart.constList([src__material__colors.Colors.black, src__material__colors.Colors.blue, src__material__colors.Colors.white, src__material__colors.Colors.red, src__material__colors.Colors.green], ui$.Color));
    let awayAnimationCurve = opts && 'awayAnimationCurve' in opts ? opts.awayAnimationCurve : src__animation__curves.Curves.easeIn;
    let enableHover = opts && 'enableHover' in opts ? opts.enableHover : false;
    let hoverColor = opts && 'hoverColor' in opts ? opts.hoverColor : src__material__colors.Colors.orangeAccent;
    let hoverRadius = opts && 'hoverRadius' in opts ? opts.hoverRadius : 80;
    this[height$] = height;
    this[width$] = width;
    this[onTapAnimation$] = onTapAnimation;
    this[numberOfParticles$] = numberOfParticles;
    this[speedOfParticles$] = speedOfParticles;
    this[awayRadius$] = awayRadius;
    this[isRandomColor$] = isRandomColor;
    this[particleColor$] = particleColor;
    this[awayAnimationDuration$] = awayAnimationDuration;
    this[maxParticleSize$] = maxParticleSize;
    this[isRandSize$] = isRandSize;
    this[randColorList$] = randColorList;
    this[awayAnimationCurve$] = awayAnimationCurve;
    this[enableHover$] = enableHover;
    this[hoverColor$] = hoverColor;
    this[hoverRadius$] = hoverRadius;
    screens__circular_particles.CircularParticle.__proto__.new.call(this, {key: key});
  }).prototype = screens__circular_particles.CircularParticle.prototype;
  dart.addTypeTests(screens__circular_particles.CircularParticle);
  const awayRadius$ = Symbol("CircularParticle.awayRadius");
  const height$ = Symbol("CircularParticle.height");
  const width$ = Symbol("CircularParticle.width");
  const onTapAnimation$ = Symbol("CircularParticle.onTapAnimation");
  const numberOfParticles$ = Symbol("CircularParticle.numberOfParticles");
  const speedOfParticles$ = Symbol("CircularParticle.speedOfParticles");
  const isRandomColor$ = Symbol("CircularParticle.isRandomColor");
  const particleColor$ = Symbol("CircularParticle.particleColor");
  const awayAnimationDuration$ = Symbol("CircularParticle.awayAnimationDuration");
  const awayAnimationCurve$ = Symbol("CircularParticle.awayAnimationCurve");
  const maxParticleSize$ = Symbol("CircularParticle.maxParticleSize");
  const isRandSize$ = Symbol("CircularParticle.isRandSize");
  const randColorList$ = Symbol("CircularParticle.randColorList");
  const enableHover$ = Symbol("CircularParticle.enableHover");
  const hoverColor$ = Symbol("CircularParticle.hoverColor");
  const hoverRadius$ = Symbol("CircularParticle.hoverRadius");
  dart.setMethodSignature(screens__circular_particles.CircularParticle, () => ({
    __proto__: dart.getMethods(screens__circular_particles.CircularParticle.__proto__),
    createState: dart.fnType(screens__circular_particles._CircularParticleState, [])
  }));
  dart.setLibraryUri(screens__circular_particles.CircularParticle, "package:particles_flutter/screens/circular_particles.dart");
  dart.setFieldSignature(screens__circular_particles.CircularParticle, () => ({
    __proto__: dart.getFields(screens__circular_particles.CircularParticle.__proto__),
    awayRadius: dart.finalFieldType(core.double),
    height: dart.finalFieldType(core.double),
    width: dart.finalFieldType(core.double),
    onTapAnimation: dart.finalFieldType(core.bool),
    numberOfParticles: dart.finalFieldType(core.double),
    speedOfParticles: dart.finalFieldType(core.double),
    isRandomColor: dart.finalFieldType(core.bool),
    particleColor: dart.finalFieldType(ui$.Color),
    awayAnimationDuration: dart.finalFieldType(core.Duration),
    awayAnimationCurve: dart.finalFieldType(src__animation__curves.Curve),
    maxParticleSize: dart.finalFieldType(core.double),
    isRandSize: dart.finalFieldType(core.bool),
    randColorList: dart.finalFieldType(ListOfColor()),
    enableHover: dart.finalFieldType(core.bool),
    hoverColor: dart.finalFieldType(ui$.Color),
    hoverRadius: dart.finalFieldType(dart.dynamic)
  }));
  let const$1;
  const State_TickerProviderStateMixin$ = class State_TickerProviderStateMixin extends src__widgets__framework.State$(screens__circular_particles.CircularParticle) {};
  (State_TickerProviderStateMixin$.new = function() {
    src__widgets__ticker_provider.TickerProviderStateMixin$(screens__circular_particles.CircularParticle).new.call(this);
    State_TickerProviderStateMixin$.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$, src__widgets__ticker_provider.TickerProviderStateMixin$(screens__circular_particles.CircularParticle));
  screens__circular_particles._CircularParticleState = class _CircularParticleState extends State_TickerProviderStateMixin$ {
    initailizeOffsets(_) {
      for (let index = 0; index < dart.notNull(this.widget.numberOfParticles); index++) {
        screens__circular_particles._CircularParticleState.offsets[$add](new ui$.Offset.new(dart.notNull(this.rng.nextDouble()) * dart.notNull(this.widget.width), dart.notNull(this.rng.nextDouble()) * dart.notNull(this.widget.height)));
        this.randomDouble[$add](this.rng.nextDouble());
        screens__circular_particles._CircularParticleState.randDirection[$add](this.rng.nextBool());
        this.randomSize[$add](this.rng.nextDouble());
      }
    }
    initState() {
      src__widgets__binding.WidgetsBinding.instance.addPostFrameCallback(dart.bind(this, 'initailizeOffsets'));
      this.controller = new src__animation__animation_controller.AnimationController.new({duration: const$1 || (const$1 = dart.const(new core.Duration.new({seconds: 10}))), vsync: this});
      let _ = new (TweenOfdouble()).new({begin: 0, end: 1}).animate(this.controller);
      _.addListener(dart.fn(() => {
        this.setState(dart.fn(() => {
          this.speedOfparticle = this.widget.speedOfParticles;
          for (let index = 0; index < dart.notNull(screens__circular_particles._CircularParticleState.offsets[$length]); index++) {
            if (dart.test(screens__circular_particles._CircularParticleState.randDirection[$_get](index))) {
              this.randValue = -dart.notNull(this.speedOfparticle);
            } else {
              this.randValue = this.speedOfparticle;
            }
            this.dx = dart.notNull(screens__circular_particles._CircularParticleState.offsets[$_get](index).dx) + dart.notNull(this.randValue) * dart.notNull(this.randomDouble[$_get](index));
            this.dy = dart.notNull(screens__circular_particles._CircularParticleState.offsets[$_get](index).dy) + dart.notNull(this.randomDouble[$_get](index)) * dart.notNull(this.speedOfparticle);
            if (dart.notNull(this.dx) > dart.notNull(this.widget.width)) {
              this.dx = dart.notNull(this.dx) - dart.notNull(this.widget.width);
            } else if (dart.notNull(this.dx) < 0) {
              this.dx = dart.notNull(this.dx) + dart.notNull(this.widget.width);
            }
            if (dart.notNull(this.dy) > dart.notNull(this.widget.height)) {
              this.dy = dart.notNull(this.dy) - dart.notNull(this.widget.height);
            } else if (dart.notNull(this.dy) < 0) {
              this.dy = dart.notNull(this.dy) + dart.notNull(this.widget.height);
            }
            screens__circular_particles._CircularParticleState.offsets[$_set](index, new ui$.Offset.new(this.dx, this.dy));
          }
        }, VoidToNull()));
      }, VoidToNull()));
      this.animation = _;
      this.controller.repeat();
      this.changeDirection();
      super.initState();
    }
    dispose() {
      this.awayAnimationController.dispose();
      this.controller.dispose();
      super.dispose();
    }
    changeDirection() {
      return async.async(dart.dynamic, (function* changeDirection() {
        async.Future.doWhile(dart.fn(() => async.async(core.bool, (function*() {
          yield async.Future.delayed(new core.Duration.new({milliseconds: 600}));
          for (let index = 0; index < dart.notNull(this.widget.numberOfParticles); index++) {
            screens__circular_particles._CircularParticleState.randDirection[$_set](index, this.rng.nextBool());
          }
          return true;
        }).bind(this)), VoidToFutureOfbool()));
      }).bind(this));
    }
    onTapGesture(tapdx, tapdy) {
      this.awayAnimationController = new src__animation__animation_controller.AnimationController.new({duration: this.widget.awayAnimationDuration, vsync: this});
      this.awayAnimationController.reset();
      let directiondx = null;
      let directiondy = null;
      let distance = JSArrayOfdouble().of([]);
      let noAnimationDistance = 0;
      if (dart.test(this.widget.onTapAnimation)) {
        let awayAnimation = JSArrayOfAnimationOfOffset().of([]);
        this.awayAnimationController.forward();
        for (let index = 0; index < dart.notNull(screens__circular_particles._CircularParticleState.offsets[$length]); index++) {
          distance[$add](math.sqrt((dart.notNull(tapdx) - dart.notNull(screens__circular_particles._CircularParticleState.offsets[$_get](index).dx)) * (dart.notNull(tapdx) - dart.notNull(screens__circular_particles._CircularParticleState.offsets[$_get](index).dx)) + (dart.notNull(tapdy) - dart.notNull(screens__circular_particles._CircularParticleState.offsets[$_get](index).dy)) * (dart.notNull(tapdy) - dart.notNull(screens__circular_particles._CircularParticleState.offsets[$_get](index).dy))));
          directiondx = (dart.notNull(tapdx) - dart.notNull(screens__circular_particles._CircularParticleState.offsets[$_get](index).dx)) / dart.notNull(distance[$_get](index));
          directiondy = (dart.notNull(tapdy) - dart.notNull(screens__circular_particles._CircularParticleState.offsets[$_get](index).dy)) / dart.notNull(distance[$_get](index));
          let begin = screens__circular_particles._CircularParticleState.offsets[$_get](index);
          awayAnimation[$add]((() => {
            let _ = new (TweenOfOffset()).new({begin: begin, end: new ui$.Offset.new(dart.notNull(screens__circular_particles._CircularParticleState.offsets[$_get](index).dx) - (dart.notNull(this.widget.awayRadius) - dart.notNull(distance[$_get](index))) * dart.notNull(directiondx), dart.notNull(screens__circular_particles._CircularParticleState.offsets[$_get](index).dy) - (dart.notNull(this.widget.awayRadius) - dart.notNull(distance[$_get](index))) * dart.notNull(directiondy))}).animate(new src__animation__animations.CurvedAnimation.new({parent: this.awayAnimationController, curve: this.widget.awayAnimationCurve}));
            _.addListener(dart.fn(() => {
              if (dart.notNull(distance[$_get](index)) < dart.notNull(this.widget.awayRadius)) this.setState(dart.fn(() => {
                screens__circular_particles._CircularParticleState.offsets[$_set](index, awayAnimation[$_get](index).value);
              }, VoidToNull()));
              if (dart.test(this.awayAnimationController.isCompleted) && index === dart.notNull(screens__circular_particles._CircularParticleState.offsets[$length]) - 1) {
                this.awayAnimationController.dispose();
              }
            }, VoidToNull()));
            return _;
          })());
        }
      } else {
        for (let index = 0; index < dart.notNull(screens__circular_particles._CircularParticleState.offsets[$length]); index++) {
          noAnimationDistance = math.sqrt((dart.notNull(tapdx) - dart.notNull(screens__circular_particles._CircularParticleState.offsets[$_get](index).dx)) * (dart.notNull(tapdx) - dart.notNull(screens__circular_particles._CircularParticleState.offsets[$_get](index).dx)) + (dart.notNull(tapdy) - dart.notNull(screens__circular_particles._CircularParticleState.offsets[$_get](index).dy)) * (dart.notNull(tapdy) - dart.notNull(screens__circular_particles._CircularParticleState.offsets[$_get](index).dy)));
          directiondx = (dart.notNull(tapdx) - dart.notNull(screens__circular_particles._CircularParticleState.offsets[$_get](index).dx)) / noAnimationDistance;
          directiondy = (dart.notNull(tapdy) - dart.notNull(screens__circular_particles._CircularParticleState.offsets[$_get](index).dy)) / noAnimationDistance;
          if (noAnimationDistance < dart.notNull(this.widget.awayRadius)) {
            this.setState(dart.fn(() => {
              screens__circular_particles._CircularParticleState.offsets[$_set](index, new ui$.Offset.new(dart.notNull(screens__circular_particles._CircularParticleState.offsets[$_get](index).dx) - (dart.notNull(this.widget.awayRadius) - noAnimationDistance) * dart.notNull(directiondx), dart.notNull(screens__circular_particles._CircularParticleState.offsets[$_get](index).dy) - (dart.notNull(this.widget.awayRadius) - noAnimationDistance) * dart.notNull(directiondy)));
            }, VoidToNull()));
          }
        }
      }
    }
    onHover(tapdx, tapdy) {
      {
        this.awayAnimationController = new src__animation__animation_controller.AnimationController.new({duration: this.widget.awayAnimationDuration, vsync: this});
        this.awayAnimationController.reset();
        let noAnimationDistance = 0;
        for (let index = 0; index < dart.notNull(screens__circular_particles._CircularParticleState.offsets[$length]); index++) {
          noAnimationDistance = math.sqrt(core.num._check(dart.dsend(dart.dsend(dart.dsend(tapdx, '-', [screens__circular_particles._CircularParticleState.offsets[$_get](index).dx]), '*', [dart.dsend(tapdx, '-', [screens__circular_particles._CircularParticleState.offsets[$_get](index).dx])]), '+', [dart.dsend(dart.dsend(tapdy, '-', [screens__circular_particles._CircularParticleState.offsets[$_get](index).dy]), '*', [dart.dsend(tapdy, '-', [screens__circular_particles._CircularParticleState.offsets[$_get](index).dy])])])));
          if (noAnimationDistance < dart.notNull(core.num._check(this.widget.hoverRadius))) {
            this.setState(dart.fn(() => {
              if (dart.notNull(this.hoverIndex[$length]) > (dart.notNull(this.widget.numberOfParticles) * 0.1)[$floor]() + 1) {
                this.hoverIndex[$removeAt](0);
              }
              this.hoverIndex[$add](index);
            }, VoidToNull()));
          }
        }
      }
    }
    build(context) {
      return new src__widgets__gesture_detector.GestureDetector.new({onTapDown: dart.fn(details => {
          this.onTapGesture(details.globalPosition.dx, details.globalPosition.dy);
        }, TapDownDetailsToNull()), onPanUpdate: dart.fn(details => {
          if (dart.test(this.widget.enableHover)) this.onHover(details.globalPosition.dx, details.globalPosition.dy);
        }, DragUpdateDetailsToNull()), onPanEnd: dart.fn(details => {
          this.hoverIndex = JSArrayOfint().of([]);
        }, DragEndDetailsToNull()), child: new src__widgets__basic.SizedBox.new({height: this.widget.height, width: this.widget.width, child: new src__widgets__basic.CustomPaint.new({painter: new component__painter.ParticlePainter.new({offsets: screens__circular_particles._CircularParticleState.offsets, isRandomColor: this.widget.isRandomColor, particleColor: this.widget.particleColor, maxParticleSize: this.widget.maxParticleSize, randSize: this.randomSize, isRandSize: this.widget.isRandSize, randColorList: this.widget.randColorList, hoverIndex: this.hoverIndex, enableHover: this.widget.enableHover, hoverColor: this.widget.hoverColor})})})});
    }
  };
  (screens__circular_particles._CircularParticleState.new = function() {
    this.animation = null;
    this.controller = null;
    this.speedOfparticle = 0;
    this.rng = math.Random.new();
    this.randValue = 0;
    this.dx = null;
    this.dy = null;
    this.randomDouble = JSArrayOfdouble().of([]);
    this.awayAnimationController = null;
    this.randomSize = JSArrayOfdouble().of([]);
    this.hoverIndex = JSArrayOfint().of([]);
    screens__circular_particles._CircularParticleState.__proto__.new.call(this);
  }).prototype = screens__circular_particles._CircularParticleState.prototype;
  dart.addTypeTests(screens__circular_particles._CircularParticleState);
  dart.setMethodSignature(screens__circular_particles._CircularParticleState, () => ({
    __proto__: dart.getMethods(screens__circular_particles._CircularParticleState.__proto__),
    initailizeOffsets: dart.fnType(dart.dynamic, [dart.dynamic]),
    initState: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, []),
    changeDirection: dart.fnType(dart.dynamic, []),
    onTapGesture: dart.fnType(dart.dynamic, [core.double, core.double]),
    onHover: dart.fnType(dart.dynamic, [dart.dynamic, dart.dynamic]),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(screens__circular_particles._CircularParticleState, "package:particles_flutter/screens/circular_particles.dart");
  dart.setFieldSignature(screens__circular_particles._CircularParticleState, () => ({
    __proto__: dart.getFields(screens__circular_particles._CircularParticleState.__proto__),
    animation: dart.fieldType(AnimationOfdouble()),
    controller: dart.fieldType(src__animation__animation_controller.AnimationController),
    speedOfparticle: dart.fieldType(core.double),
    rng: dart.fieldType(math.Random),
    randValue: dart.fieldType(core.double),
    dx: dart.fieldType(core.double),
    dy: dart.fieldType(core.double),
    randomDouble: dart.fieldType(ListOfdouble()),
    awayAnimationController: dart.fieldType(src__animation__animation_controller.AnimationController),
    randomSize: dart.fieldType(ListOfdouble()),
    hoverIndex: dart.fieldType(ListOfint())
  }));
  dart.defineLazy(screens__circular_particles._CircularParticleState, {
    /*screens__circular_particles._CircularParticleState.offsets*/get offsets() {
      return JSArrayOfOffset().of([]);
    },
    set offsets(_) {},
    /*screens__circular_particles._CircularParticleState.randDirection*/get randDirection() {
      return JSArrayOfbool().of([]);
    },
    set randDirection(_) {}
  });
  dart.trackLibraries("packages/particles_flutter/screens/circular_particles.ddc", {
    "package:particles_flutter/screens/circular_particles.dart": screens__circular_particles
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["circular_particles.dart"],"names":[],"mappings":"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","file":"circular_particles.ddc.js"}');
  // Exports:
  return {
    screens__circular_particles: screens__circular_particles
  };
});

//# sourceMappingURL=circular_particles.ddc.js.map

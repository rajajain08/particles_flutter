define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__physics__tolerance = Object.create(dart.library);
  const src__physics__simulation = Object.create(dart.library);
  const src__physics__clamped_simulation = Object.create(dart.library);
  const src__physics__friction_simulation = Object.create(dart.library);
  const src__physics__gravity_simulation = Object.create(dart.library);
  const src__physics__utils = Object.create(dart.library);
  const src__physics__spring_simulation = Object.create(dart.library);
  const $runtimeType = dartx.runtimeType;
  const $clamp = dartx.clamp;
  const $sign = dartx.sign;
  const $abs = dartx.abs;
  const $toStringAsFixed = dartx.toStringAsFixed;
  src__physics__tolerance.Tolerance = class Tolerance extends core.Object {
    get distance() {
      return this[distance$];
    }
    set distance(value) {
      super.distance = value;
    }
    get time() {
      return this[time$];
    }
    set time(value) {
      super.time = value;
    }
    get velocity() {
      return this[velocity$];
    }
    set velocity(value) {
      super.velocity = value;
    }
    toString() {
      return "Tolerance(distance: ±" + dart.str(this.distance) + ", time: ±" + dart.str(this.time) + ", velocity: ±" + dart.str(this.velocity) + ")";
    }
  };
  (src__physics__tolerance.Tolerance.new = function(opts) {
    let distance = opts && 'distance' in opts ? opts.distance : 0.001;
    let time = opts && 'time' in opts ? opts.time : 0.001;
    let velocity = opts && 'velocity' in opts ? opts.velocity : 0.001;
    this[distance$] = distance;
    this[time$] = time;
    this[velocity$] = velocity;
  }).prototype = src__physics__tolerance.Tolerance.prototype;
  dart.addTypeTests(src__physics__tolerance.Tolerance);
  const distance$ = Symbol("Tolerance.distance");
  const time$ = Symbol("Tolerance.time");
  const velocity$ = Symbol("Tolerance.velocity");
  dart.setLibraryUri(src__physics__tolerance.Tolerance, "package:flutter_web/src/physics/tolerance.dart");
  dart.setFieldSignature(src__physics__tolerance.Tolerance, () => ({
    __proto__: dart.getFields(src__physics__tolerance.Tolerance.__proto__),
    distance: dart.finalFieldType(core.double),
    time: dart.finalFieldType(core.double),
    velocity: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(src__physics__tolerance.Tolerance, ['toString']);
  dart.defineLazy(src__physics__tolerance.Tolerance, {
    /*src__physics__tolerance.Tolerance._epsilonDefault*/get _epsilonDefault() {
      return 0.001;
    },
    /*src__physics__tolerance.Tolerance.defaultTolerance*/get defaultTolerance() {
      return dart.const(new src__physics__tolerance.Tolerance.new());
    }
  });
  src__physics__simulation.Simulation = class Simulation extends core.Object {
    get tolerance() {
      return this[tolerance$];
    }
    set tolerance(value) {
      this[tolerance$] = value;
    }
    toString() {
      return dart.str(this[$runtimeType]);
    }
  };
  (src__physics__simulation.Simulation.new = function(opts) {
    let tolerance = opts && 'tolerance' in opts ? opts.tolerance : src__physics__tolerance.Tolerance.defaultTolerance;
    this[tolerance$] = tolerance;
  }).prototype = src__physics__simulation.Simulation.prototype;
  dart.addTypeTests(src__physics__simulation.Simulation);
  const tolerance$ = Symbol("Simulation.tolerance");
  dart.setLibraryUri(src__physics__simulation.Simulation, "package:flutter_web/src/physics/simulation.dart");
  dart.setFieldSignature(src__physics__simulation.Simulation, () => ({
    __proto__: dart.getFields(src__physics__simulation.Simulation.__proto__),
    tolerance: dart.fieldType(src__physics__tolerance.Tolerance)
  }));
  dart.defineExtensionMethods(src__physics__simulation.Simulation, ['toString']);
  src__physics__clamped_simulation.ClampedSimulation = class ClampedSimulation extends src__physics__simulation.Simulation {
    get simulation() {
      return this[simulation$];
    }
    set simulation(value) {
      super.simulation = value;
    }
    get xMin() {
      return this[xMin$];
    }
    set xMin(value) {
      super.xMin = value;
    }
    get xMax() {
      return this[xMax$];
    }
    set xMax(value) {
      super.xMax = value;
    }
    get dxMin() {
      return this[dxMin$];
    }
    set dxMin(value) {
      super.dxMin = value;
    }
    get dxMax() {
      return this[dxMax$];
    }
    set dxMax(value) {
      super.dxMax = value;
    }
    x(time) {
      return this.simulation.x(time)[$clamp](this.xMin, this.xMax);
    }
    dx(time) {
      return this.simulation.dx(time)[$clamp](this.dxMin, this.dxMax);
    }
    isDone(time) {
      return this.simulation.isDone(time);
    }
  };
  (src__physics__clamped_simulation.ClampedSimulation.new = function(simulation, opts) {
    let xMin = opts && 'xMin' in opts ? opts.xMin : core.double.negativeInfinity;
    let xMax = opts && 'xMax' in opts ? opts.xMax : core.double.infinity;
    let dxMin = opts && 'dxMin' in opts ? opts.dxMin : core.double.negativeInfinity;
    let dxMax = opts && 'dxMax' in opts ? opts.dxMax : core.double.infinity;
    this[simulation$] = simulation;
    this[xMin$] = xMin;
    this[xMax$] = xMax;
    this[dxMin$] = dxMin;
    this[dxMax$] = dxMax;
    if (!(simulation != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/physics/clamped_simulation.dart", 30, 16, "simulation != null");
    if (!(dart.notNull(xMax) >= dart.notNull(xMin))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/physics/clamped_simulation.dart", 31, 16, "xMax >= xMin");
    if (!(dart.notNull(dxMax) >= dart.notNull(dxMin))) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/physics/clamped_simulation.dart", 32, 16, "dxMax >= dxMin");
    src__physics__clamped_simulation.ClampedSimulation.__proto__.new.call(this);
  }).prototype = src__physics__clamped_simulation.ClampedSimulation.prototype;
  dart.addTypeTests(src__physics__clamped_simulation.ClampedSimulation);
  const simulation$ = Symbol("ClampedSimulation.simulation");
  const xMin$ = Symbol("ClampedSimulation.xMin");
  const xMax$ = Symbol("ClampedSimulation.xMax");
  const dxMin$ = Symbol("ClampedSimulation.dxMin");
  const dxMax$ = Symbol("ClampedSimulation.dxMax");
  dart.setMethodSignature(src__physics__clamped_simulation.ClampedSimulation, () => ({
    __proto__: dart.getMethods(src__physics__clamped_simulation.ClampedSimulation.__proto__),
    x: dart.fnType(core.double, [core.double]),
    dx: dart.fnType(core.double, [core.double]),
    isDone: dart.fnType(core.bool, [core.double])
  }));
  dart.setLibraryUri(src__physics__clamped_simulation.ClampedSimulation, "package:flutter_web/src/physics/clamped_simulation.dart");
  dart.setFieldSignature(src__physics__clamped_simulation.ClampedSimulation, () => ({
    __proto__: dart.getFields(src__physics__clamped_simulation.ClampedSimulation.__proto__),
    simulation: dart.finalFieldType(src__physics__simulation.Simulation),
    xMin: dart.finalFieldType(core.double),
    xMax: dart.finalFieldType(core.double),
    dxMin: dart.finalFieldType(core.double),
    dxMax: dart.finalFieldType(core.double)
  }));
  const _drag = dart.privateName(src__physics__friction_simulation, "_drag");
  const _dragLog = dart.privateName(src__physics__friction_simulation, "_dragLog");
  const _x = dart.privateName(src__physics__friction_simulation, "_x");
  const _v = dart.privateName(src__physics__friction_simulation, "_v");
  src__physics__friction_simulation.FrictionSimulation = class FrictionSimulation extends src__physics__simulation.Simulation {
    static through(startPosition, endPosition, startVelocity, endVelocity) {
      if (!(startVelocity === 0.0 || endVelocity === 0.0 || startVelocity[$sign] === endVelocity[$sign])) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/physics/friction_simulation.dart", 46, 12, "startVelocity == 0.0 || endVelocity == 0.0 || startVelocity.sign == endVelocity.sign");
      if (!(startVelocity[$abs]() >= endVelocity[$abs]())) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/physics/friction_simulation.dart", 49, 12, "startVelocity.abs() >= endVelocity.abs()");
      if (!((dart.notNull(endPosition) - dart.notNull(startPosition))[$sign] === startVelocity[$sign])) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/physics/friction_simulation.dart", 50, 12, "(endPosition - startPosition).sign == startVelocity.sign");
      return new src__physics__friction_simulation.FrictionSimulation.new(src__physics__friction_simulation.FrictionSimulation._dragFor(startPosition, endPosition, startVelocity, endVelocity), startPosition, startVelocity, {tolerance: new src__physics__tolerance.Tolerance.new({velocity: endVelocity[$abs]()})});
    }
    static _dragFor(startPosition, endPosition, startVelocity, endVelocity) {
      return math.pow(2.718281828459045, (dart.notNull(startVelocity) - dart.notNull(endVelocity)) / (dart.notNull(startPosition) - dart.notNull(endPosition)));
    }
    x(time) {
      return dart.notNull(this[_x]) + dart.notNull(this[_v]) * math.pow(this[_drag], time) / dart.notNull(this[_dragLog]) - dart.notNull(this[_v]) / dart.notNull(this[_dragLog]);
    }
    dx(time) {
      return dart.notNull(this[_v]) * math.pow(this[_drag], time);
    }
    get finalX() {
      return dart.notNull(this[_x]) - dart.notNull(this[_v]) / dart.notNull(this[_dragLog]);
    }
    timeAtX(x) {
      if (x == this[_x]) return 0.0;
      if (this[_v] === 0.0 || (dart.notNull(this[_v]) > 0 ? dart.notNull(x) < dart.notNull(this[_x]) || dart.notNull(x) > dart.notNull(this.finalX) : dart.notNull(x) > dart.notNull(this[_x]) || dart.notNull(x) < dart.notNull(this.finalX))) return core.double.infinity;
      return math.log(dart.notNull(this[_dragLog]) * (dart.notNull(x) - dart.notNull(this[_x])) / dart.notNull(this[_v]) + 1.0) / dart.notNull(this[_dragLog]);
    }
    isDone(time) {
      return this.dx(time)[$abs]() < dart.notNull(this.tolerance.velocity);
    }
  };
  (src__physics__friction_simulation.FrictionSimulation.new = function(drag, position, velocity, opts) {
    let tolerance = opts && 'tolerance' in opts ? opts.tolerance : src__physics__tolerance.Tolerance.defaultTolerance;
    this[_drag] = drag;
    this[_dragLog] = math.log(drag);
    this[_x] = position;
    this[_v] = velocity;
    src__physics__friction_simulation.FrictionSimulation.__proto__.new.call(this, {tolerance: tolerance});
  }).prototype = src__physics__friction_simulation.FrictionSimulation.prototype;
  dart.addTypeTests(src__physics__friction_simulation.FrictionSimulation);
  dart.setMethodSignature(src__physics__friction_simulation.FrictionSimulation, () => ({
    __proto__: dart.getMethods(src__physics__friction_simulation.FrictionSimulation.__proto__),
    x: dart.fnType(core.double, [core.double]),
    dx: dart.fnType(core.double, [core.double]),
    timeAtX: dart.fnType(core.double, [core.double]),
    isDone: dart.fnType(core.bool, [core.double])
  }));
  dart.setGetterSignature(src__physics__friction_simulation.FrictionSimulation, () => ({
    __proto__: dart.getGetters(src__physics__friction_simulation.FrictionSimulation.__proto__),
    finalX: core.double
  }));
  dart.setLibraryUri(src__physics__friction_simulation.FrictionSimulation, "package:flutter_web/src/physics/friction_simulation.dart");
  dart.setFieldSignature(src__physics__friction_simulation.FrictionSimulation, () => ({
    __proto__: dart.getFields(src__physics__friction_simulation.FrictionSimulation.__proto__),
    [_drag]: dart.finalFieldType(core.double),
    [_dragLog]: dart.finalFieldType(core.double),
    [_x]: dart.finalFieldType(core.double),
    [_v]: dart.finalFieldType(core.double)
  }));
  const _minX = dart.privateName(src__physics__friction_simulation, "_minX");
  const _maxX = dart.privateName(src__physics__friction_simulation, "_maxX");
  src__physics__friction_simulation.BoundedFrictionSimulation = class BoundedFrictionSimulation extends src__physics__friction_simulation.FrictionSimulation {
    x(time) {
      return super.x(time)[$clamp](this[_minX], this[_maxX]);
    }
    isDone(time) {
      return dart.test(super.isDone(time)) || (dart.notNull(this.x(time)) - dart.notNull(this[_minX]))[$abs]() < dart.notNull(this.tolerance.distance) || (dart.notNull(this.x(time)) - dart.notNull(this[_maxX]))[$abs]() < dart.notNull(this.tolerance.distance);
    }
  };
  (src__physics__friction_simulation.BoundedFrictionSimulation.new = function(drag, position, velocity, minX, maxX) {
    this[_minX] = minX;
    this[_maxX] = maxX;
    if (!(position[$clamp](minX, maxX) === position)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/physics/friction_simulation.dart", 117, 16, "position.clamp(_minX, _maxX) == position");
    src__physics__friction_simulation.BoundedFrictionSimulation.__proto__.new.call(this, drag, position, velocity);
  }).prototype = src__physics__friction_simulation.BoundedFrictionSimulation.prototype;
  dart.addTypeTests(src__physics__friction_simulation.BoundedFrictionSimulation);
  dart.setLibraryUri(src__physics__friction_simulation.BoundedFrictionSimulation, "package:flutter_web/src/physics/friction_simulation.dart");
  dart.setFieldSignature(src__physics__friction_simulation.BoundedFrictionSimulation, () => ({
    __proto__: dart.getFields(src__physics__friction_simulation.BoundedFrictionSimulation.__proto__),
    [_minX]: dart.finalFieldType(core.double),
    [_maxX]: dart.finalFieldType(core.double)
  }));
  const _a = dart.privateName(src__physics__gravity_simulation, "_a");
  const _x$ = dart.privateName(src__physics__gravity_simulation, "_x");
  const _v$ = dart.privateName(src__physics__gravity_simulation, "_v");
  const _end = dart.privateName(src__physics__gravity_simulation, "_end");
  src__physics__gravity_simulation.GravitySimulation = class GravitySimulation extends src__physics__simulation.Simulation {
    x(time) {
      return dart.notNull(this[_x$]) + dart.notNull(this[_v$]) * dart.notNull(time) + 0.5 * dart.notNull(this[_a]) * dart.notNull(time) * dart.notNull(time);
    }
    dx(time) {
      return dart.notNull(this[_v$]) + dart.notNull(time) * dart.notNull(this[_a]);
    }
    isDone(time) {
      return this.x(time)[$abs]() >= dart.notNull(this[_end]);
    }
  };
  (src__physics__gravity_simulation.GravitySimulation.new = function(acceleration, distance, endDistance, velocity) {
    if (!(acceleration != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/physics/gravity_simulation.dart", 52, 16, "acceleration != null");
    if (!(distance != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/physics/gravity_simulation.dart", 53, 16, "distance != null");
    if (!(velocity != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/physics/gravity_simulation.dart", 54, 16, "velocity != null");
    if (!(endDistance != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/physics/gravity_simulation.dart", 55, 16, "endDistance != null");
    if (!(dart.notNull(endDistance) >= 0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/physics/gravity_simulation.dart", 56, 16, "endDistance >= 0");
    this[_a] = acceleration;
    this[_x$] = distance;
    this[_v$] = velocity;
    this[_end] = endDistance;
    src__physics__gravity_simulation.GravitySimulation.__proto__.new.call(this);
  }).prototype = src__physics__gravity_simulation.GravitySimulation.prototype;
  dart.addTypeTests(src__physics__gravity_simulation.GravitySimulation);
  dart.setMethodSignature(src__physics__gravity_simulation.GravitySimulation, () => ({
    __proto__: dart.getMethods(src__physics__gravity_simulation.GravitySimulation.__proto__),
    x: dart.fnType(core.double, [core.double]),
    dx: dart.fnType(core.double, [core.double]),
    isDone: dart.fnType(core.bool, [core.double])
  }));
  dart.setLibraryUri(src__physics__gravity_simulation.GravitySimulation, "package:flutter_web/src/physics/gravity_simulation.dart");
  dart.setFieldSignature(src__physics__gravity_simulation.GravitySimulation, () => ({
    __proto__: dart.getFields(src__physics__gravity_simulation.GravitySimulation.__proto__),
    [_x$]: dart.finalFieldType(core.double),
    [_v$]: dart.finalFieldType(core.double),
    [_a]: dart.finalFieldType(core.double),
    [_end]: dart.finalFieldType(core.double)
  }));
  src__physics__utils.nearEqual = function(a, b, epsilon) {
    if (!(epsilon != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/physics/utils.dart", 11, 10, "epsilon != null");
    if (!(dart.notNull(epsilon) >= 0.0)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/physics/utils.dart", 12, 10, "epsilon >= 0.0");
    if (a == null || b == null) return a == b;
    return dart.notNull(a) > dart.notNull(b) - dart.notNull(epsilon) && dart.notNull(a) < dart.notNull(b) + dart.notNull(epsilon) || a == b;
  };
  src__physics__utils.nearZero = function(a, epsilon) {
    return src__physics__utils.nearEqual(a, 0.0, epsilon);
  };
  src__physics__spring_simulation.SpringDescription = class SpringDescription extends core.Object {
    get mass() {
      return this[mass$];
    }
    set mass(value) {
      super.mass = value;
    }
    get stiffness() {
      return this[stiffness$];
    }
    set stiffness(value) {
      super.stiffness = value;
    }
    get damping() {
      return this[damping$];
    }
    set damping(value) {
      super.damping = value;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(mass: " + this.mass[$toStringAsFixed](1) + ", stiffness: " + (this.stiffness[$toStringAsFixed](1) + ", damping: ") + (this.damping[$toStringAsFixed](1) + ")");
    }
  };
  (src__physics__spring_simulation.SpringDescription.new = function(opts) {
    let mass = opts && 'mass' in opts ? opts.mass : null;
    let stiffness = opts && 'stiffness' in opts ? opts.stiffness : null;
    let damping = opts && 'damping' in opts ? opts.damping : null;
    this[mass$] = mass;
    this[stiffness$] = stiffness;
    this[damping$] = damping;
  }).prototype = src__physics__spring_simulation.SpringDescription.prototype;
  (src__physics__spring_simulation.SpringDescription.withDampingRatio = function(opts) {
    let mass = opts && 'mass' in opts ? opts.mass : null;
    let stiffness = opts && 'stiffness' in opts ? opts.stiffness : null;
    let ratio = opts && 'ratio' in opts ? opts.ratio : 1.0;
    this[mass$] = mass;
    this[stiffness$] = stiffness;
    this[damping$] = dart.notNull(ratio) * 2.0 * math.sqrt(dart.notNull(mass) * dart.notNull(stiffness));
  }).prototype = src__physics__spring_simulation.SpringDescription.prototype;
  dart.addTypeTests(src__physics__spring_simulation.SpringDescription);
  const mass$ = Symbol("SpringDescription.mass");
  const stiffness$ = Symbol("SpringDescription.stiffness");
  const damping$ = Symbol("SpringDescription.damping");
  dart.setLibraryUri(src__physics__spring_simulation.SpringDescription, "package:flutter_web/src/physics/spring_simulation.dart");
  dart.setFieldSignature(src__physics__spring_simulation.SpringDescription, () => ({
    __proto__: dart.getFields(src__physics__spring_simulation.SpringDescription.__proto__),
    mass: dart.finalFieldType(core.double),
    stiffness: dart.finalFieldType(core.double),
    damping: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(src__physics__spring_simulation.SpringDescription, ['toString']);
  src__physics__spring_simulation.SpringType = class SpringType extends core.Object {
    toString() {
      return {
        0: "SpringType.criticallyDamped",
        1: "SpringType.underDamped",
        2: "SpringType.overDamped"
      }[this.index];
    }
  };
  (src__physics__spring_simulation.SpringType.new = function(x) {
    this.index = x;
  }).prototype = src__physics__spring_simulation.SpringType.prototype;
  dart.addTypeTests(src__physics__spring_simulation.SpringType);
  dart.setLibraryUri(src__physics__spring_simulation.SpringType, "package:flutter_web/src/physics/spring_simulation.dart");
  dart.setFieldSignature(src__physics__spring_simulation.SpringType, () => ({
    __proto__: dart.getFields(src__physics__spring_simulation.SpringType.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__physics__spring_simulation.SpringType, ['toString']);
  src__physics__spring_simulation.SpringType.criticallyDamped = dart.const(new src__physics__spring_simulation.SpringType.new(0));
  src__physics__spring_simulation.SpringType.underDamped = dart.const(new src__physics__spring_simulation.SpringType.new(1));
  src__physics__spring_simulation.SpringType.overDamped = dart.const(new src__physics__spring_simulation.SpringType.new(2));
  src__physics__spring_simulation.SpringType.values = dart.constList([src__physics__spring_simulation.SpringType.criticallyDamped, src__physics__spring_simulation.SpringType.underDamped, src__physics__spring_simulation.SpringType.overDamped], src__physics__spring_simulation.SpringType);
  const _endPosition = dart.privateName(src__physics__spring_simulation, "_endPosition");
  const _solution = dart.privateName(src__physics__spring_simulation, "_solution");
  src__physics__spring_simulation.SpringSimulation = class SpringSimulation extends src__physics__simulation.Simulation {
    get type() {
      return this[_solution].type;
    }
    x(time) {
      return dart.notNull(this[_endPosition]) + dart.notNull(this[_solution].x(time));
    }
    dx(time) {
      return this[_solution].dx(time);
    }
    isDone(time) {
      return dart.test(src__physics__utils.nearZero(this[_solution].x(time), this.tolerance.distance)) && dart.test(src__physics__utils.nearZero(this[_solution].dx(time), this.tolerance.velocity));
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(end: " + dart.str(this[_endPosition]) + ", " + dart.str(this.type) + ")";
    }
  };
  (src__physics__spring_simulation.SpringSimulation.new = function(spring, start, end, velocity, opts) {
    let tolerance = opts && 'tolerance' in opts ? opts.tolerance : src__physics__tolerance.Tolerance.defaultTolerance;
    this[_endPosition] = end;
    this[_solution] = src__physics__spring_simulation._SpringSolution.new(spring, dart.notNull(start) - dart.notNull(end), velocity);
    src__physics__spring_simulation.SpringSimulation.__proto__.new.call(this, {tolerance: tolerance});
  }).prototype = src__physics__spring_simulation.SpringSimulation.prototype;
  dart.addTypeTests(src__physics__spring_simulation.SpringSimulation);
  dart.setMethodSignature(src__physics__spring_simulation.SpringSimulation, () => ({
    __proto__: dart.getMethods(src__physics__spring_simulation.SpringSimulation.__proto__),
    x: dart.fnType(core.double, [core.double]),
    dx: dart.fnType(core.double, [core.double]),
    isDone: dart.fnType(core.bool, [core.double])
  }));
  dart.setGetterSignature(src__physics__spring_simulation.SpringSimulation, () => ({
    __proto__: dart.getGetters(src__physics__spring_simulation.SpringSimulation.__proto__),
    type: src__physics__spring_simulation.SpringType
  }));
  dart.setLibraryUri(src__physics__spring_simulation.SpringSimulation, "package:flutter_web/src/physics/spring_simulation.dart");
  dart.setFieldSignature(src__physics__spring_simulation.SpringSimulation, () => ({
    __proto__: dart.getFields(src__physics__spring_simulation.SpringSimulation.__proto__),
    [_endPosition]: dart.finalFieldType(core.double),
    [_solution]: dart.finalFieldType(src__physics__spring_simulation._SpringSolution)
  }));
  dart.defineExtensionMethods(src__physics__spring_simulation.SpringSimulation, ['toString']);
  src__physics__spring_simulation.ScrollSpringSimulation = class ScrollSpringSimulation extends src__physics__spring_simulation.SpringSimulation {
    x(time) {
      return dart.test(this.isDone(time)) ? this[_endPosition] : super.x(time);
    }
  };
  (src__physics__spring_simulation.ScrollSpringSimulation.new = function(spring, start, end, velocity, opts) {
    let tolerance = opts && 'tolerance' in opts ? opts.tolerance : src__physics__tolerance.Tolerance.defaultTolerance;
    src__physics__spring_simulation.ScrollSpringSimulation.__proto__.new.call(this, spring, start, end, velocity, {tolerance: tolerance});
  }).prototype = src__physics__spring_simulation.ScrollSpringSimulation.prototype;
  dart.addTypeTests(src__physics__spring_simulation.ScrollSpringSimulation);
  dart.setLibraryUri(src__physics__spring_simulation.ScrollSpringSimulation, "package:flutter_web/src/physics/spring_simulation.dart");
  src__physics__spring_simulation._SpringSolution = class _SpringSolution extends core.Object {
    static new(spring, initialPosition, initialVelocity) {
      if (!(spring != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/physics/spring_simulation.dart", 148, 12, "spring != null");
      if (!(spring.mass != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/physics/spring_simulation.dart", 149, 12, "spring.mass != null");
      if (!(spring.stiffness != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/physics/spring_simulation.dart", 150, 12, "spring.stiffness != null");
      if (!(spring.damping != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/physics/spring_simulation.dart", 151, 12, "spring.damping != null");
      if (!(initialPosition != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/physics/spring_simulation.dart", 152, 12, "initialPosition != null");
      if (!(initialVelocity != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/physics/spring_simulation.dart", 153, 12, "initialVelocity != null");
      let cmk = dart.notNull(spring.damping) * dart.notNull(spring.damping) - 4 * dart.notNull(spring.mass) * dart.notNull(spring.stiffness);
      if (cmk === 0.0) return src__physics__spring_simulation._CriticalSolution.new(spring, initialPosition, initialVelocity);
      if (cmk > 0.0) return src__physics__spring_simulation._OverdampedSolution.new(spring, initialPosition, initialVelocity);
      return src__physics__spring_simulation._UnderdampedSolution.new(spring, initialPosition, initialVelocity);
    }
  };
  (src__physics__spring_simulation._SpringSolution[dart.mixinNew] = function() {
  }).prototype = src__physics__spring_simulation._SpringSolution.prototype;
  dart.addTypeTests(src__physics__spring_simulation._SpringSolution);
  dart.setLibraryUri(src__physics__spring_simulation._SpringSolution, "package:flutter_web/src/physics/spring_simulation.dart");
  const _r = dart.privateName(src__physics__spring_simulation, "_r");
  const _c1 = dart.privateName(src__physics__spring_simulation, "_c1");
  const _c2 = dart.privateName(src__physics__spring_simulation, "_c2");
  src__physics__spring_simulation._CriticalSolution = class _CriticalSolution extends core.Object {
    static new(spring, distance, velocity) {
      let r = -dart.notNull(spring.damping) / (2.0 * dart.notNull(spring.mass));
      let c1 = distance;
      let c2 = dart.notNull(velocity) / (r * dart.notNull(distance));
      return new src__physics__spring_simulation._CriticalSolution.withArgs(r, c1, c2);
    }
    x(time) {
      return (dart.notNull(this[_c1]) + dart.notNull(this[_c2]) * dart.notNull(time)) * math.pow(2.718281828459045, dart.notNull(this[_r]) * dart.notNull(time));
    }
    dx(time) {
      let power = math.pow(2.718281828459045, dart.notNull(this[_r]) * dart.notNull(time));
      return dart.notNull(this[_r]) * (dart.notNull(this[_c1]) + dart.notNull(this[_c2]) * dart.notNull(time)) * dart.notNull(power) + dart.notNull(this[_c2]) * dart.notNull(power);
    }
    get type() {
      return src__physics__spring_simulation.SpringType.criticallyDamped;
    }
  };
  (src__physics__spring_simulation._CriticalSolution.withArgs = function(r, c1, c2) {
    this[_r] = r;
    this[_c1] = c1;
    this[_c2] = c2;
  }).prototype = src__physics__spring_simulation._CriticalSolution.prototype;
  dart.addTypeTests(src__physics__spring_simulation._CriticalSolution);
  src__physics__spring_simulation._CriticalSolution[dart.implements] = () => [src__physics__spring_simulation._SpringSolution];
  dart.setMethodSignature(src__physics__spring_simulation._CriticalSolution, () => ({
    __proto__: dart.getMethods(src__physics__spring_simulation._CriticalSolution.__proto__),
    x: dart.fnType(core.double, [core.double]),
    dx: dart.fnType(core.double, [core.double])
  }));
  dart.setGetterSignature(src__physics__spring_simulation._CriticalSolution, () => ({
    __proto__: dart.getGetters(src__physics__spring_simulation._CriticalSolution.__proto__),
    type: src__physics__spring_simulation.SpringType
  }));
  dart.setLibraryUri(src__physics__spring_simulation._CriticalSolution, "package:flutter_web/src/physics/spring_simulation.dart");
  dart.setFieldSignature(src__physics__spring_simulation._CriticalSolution, () => ({
    __proto__: dart.getFields(src__physics__spring_simulation._CriticalSolution.__proto__),
    [_r]: dart.finalFieldType(core.double),
    [_c1]: dart.finalFieldType(core.double),
    [_c2]: dart.finalFieldType(core.double)
  }));
  const _r1 = dart.privateName(src__physics__spring_simulation, "_r1");
  const _r2 = dart.privateName(src__physics__spring_simulation, "_r2");
  src__physics__spring_simulation._OverdampedSolution = class _OverdampedSolution extends core.Object {
    static new(spring, distance, velocity) {
      let cmk = dart.notNull(spring.damping) * dart.notNull(spring.damping) - 4 * dart.notNull(spring.mass) * dart.notNull(spring.stiffness);
      let r1 = (-dart.notNull(spring.damping) - math.sqrt(cmk)) / (2.0 * dart.notNull(spring.mass));
      let r2 = (-dart.notNull(spring.damping) + math.sqrt(cmk)) / (2.0 * dart.notNull(spring.mass));
      let c2 = (dart.notNull(velocity) - r1 * dart.notNull(distance)) / (r2 - r1);
      let c1 = dart.notNull(distance) - c2;
      return new src__physics__spring_simulation._OverdampedSolution.withArgs(r1, r2, c1, c2);
    }
    x(time) {
      return dart.notNull(this[_c1]) * math.pow(2.718281828459045, dart.notNull(this[_r1]) * dart.notNull(time)) + dart.notNull(this[_c2]) * math.pow(2.718281828459045, dart.notNull(this[_r2]) * dart.notNull(time));
    }
    dx(time) {
      return dart.notNull(this[_c1]) * dart.notNull(this[_r1]) * math.pow(2.718281828459045, dart.notNull(this[_r1]) * dart.notNull(time)) + dart.notNull(this[_c2]) * dart.notNull(this[_r2]) * math.pow(2.718281828459045, dart.notNull(this[_r2]) * dart.notNull(time));
    }
    get type() {
      return src__physics__spring_simulation.SpringType.overDamped;
    }
  };
  (src__physics__spring_simulation._OverdampedSolution.withArgs = function(r1, r2, c1, c2) {
    this[_r1] = r1;
    this[_r2] = r2;
    this[_c1] = c1;
    this[_c2] = c2;
  }).prototype = src__physics__spring_simulation._OverdampedSolution.prototype;
  dart.addTypeTests(src__physics__spring_simulation._OverdampedSolution);
  src__physics__spring_simulation._OverdampedSolution[dart.implements] = () => [src__physics__spring_simulation._SpringSolution];
  dart.setMethodSignature(src__physics__spring_simulation._OverdampedSolution, () => ({
    __proto__: dart.getMethods(src__physics__spring_simulation._OverdampedSolution.__proto__),
    x: dart.fnType(core.double, [core.double]),
    dx: dart.fnType(core.double, [core.double])
  }));
  dart.setGetterSignature(src__physics__spring_simulation._OverdampedSolution, () => ({
    __proto__: dart.getGetters(src__physics__spring_simulation._OverdampedSolution.__proto__),
    type: src__physics__spring_simulation.SpringType
  }));
  dart.setLibraryUri(src__physics__spring_simulation._OverdampedSolution, "package:flutter_web/src/physics/spring_simulation.dart");
  dart.setFieldSignature(src__physics__spring_simulation._OverdampedSolution, () => ({
    __proto__: dart.getFields(src__physics__spring_simulation._OverdampedSolution.__proto__),
    [_r1]: dart.finalFieldType(core.double),
    [_r2]: dart.finalFieldType(core.double),
    [_c1]: dart.finalFieldType(core.double),
    [_c2]: dart.finalFieldType(core.double)
  }));
  const _w = dart.privateName(src__physics__spring_simulation, "_w");
  src__physics__spring_simulation._UnderdampedSolution = class _UnderdampedSolution extends core.Object {
    static new(spring, distance, velocity) {
      let w = math.sqrt(4.0 * dart.notNull(spring.mass) * dart.notNull(spring.stiffness) - dart.notNull(spring.damping) * dart.notNull(spring.damping)) / (2.0 * dart.notNull(spring.mass));
      let r = -(dart.notNull(spring.damping) / 2.0 * dart.notNull(spring.mass));
      let c1 = distance;
      let c2 = (dart.notNull(velocity) - r * dart.notNull(distance)) / w;
      return new src__physics__spring_simulation._UnderdampedSolution.withArgs(w, r, c1, c2);
    }
    x(time) {
      return math.pow(2.718281828459045, dart.notNull(this[_r]) * dart.notNull(time)) * (dart.notNull(this[_c1]) * math.cos(dart.notNull(this[_w]) * dart.notNull(time)) + dart.notNull(this[_c2]) * math.sin(dart.notNull(this[_w]) * dart.notNull(time)));
    }
    dx(time) {
      let power = math.pow(2.718281828459045, dart.notNull(this[_r]) * dart.notNull(time));
      let cosine = math.cos(dart.notNull(this[_w]) * dart.notNull(time));
      let sine = math.sin(dart.notNull(this[_w]) * dart.notNull(time));
      return dart.notNull(power) * (dart.notNull(this[_c2]) * dart.notNull(this[_w]) * cosine - dart.notNull(this[_c1]) * dart.notNull(this[_w]) * sine) + dart.notNull(this[_r]) * dart.notNull(power) * (dart.notNull(this[_c2]) * sine + dart.notNull(this[_c1]) * cosine);
    }
    get type() {
      return src__physics__spring_simulation.SpringType.underDamped;
    }
  };
  (src__physics__spring_simulation._UnderdampedSolution.withArgs = function(w, r, c1, c2) {
    this[_w] = w;
    this[_r] = r;
    this[_c1] = c1;
    this[_c2] = c2;
  }).prototype = src__physics__spring_simulation._UnderdampedSolution.prototype;
  dart.addTypeTests(src__physics__spring_simulation._UnderdampedSolution);
  src__physics__spring_simulation._UnderdampedSolution[dart.implements] = () => [src__physics__spring_simulation._SpringSolution];
  dart.setMethodSignature(src__physics__spring_simulation._UnderdampedSolution, () => ({
    __proto__: dart.getMethods(src__physics__spring_simulation._UnderdampedSolution.__proto__),
    x: dart.fnType(core.double, [core.double]),
    dx: dart.fnType(core.double, [core.double])
  }));
  dart.setGetterSignature(src__physics__spring_simulation._UnderdampedSolution, () => ({
    __proto__: dart.getGetters(src__physics__spring_simulation._UnderdampedSolution.__proto__),
    type: src__physics__spring_simulation.SpringType
  }));
  dart.setLibraryUri(src__physics__spring_simulation._UnderdampedSolution, "package:flutter_web/src/physics/spring_simulation.dart");
  dart.setFieldSignature(src__physics__spring_simulation._UnderdampedSolution, () => ({
    __proto__: dart.getFields(src__physics__spring_simulation._UnderdampedSolution.__proto__),
    [_w]: dart.finalFieldType(core.double),
    [_r]: dart.finalFieldType(core.double),
    [_c1]: dart.finalFieldType(core.double),
    [_c2]: dart.finalFieldType(core.double)
  }));
  dart.trackLibraries("packages/flutter_web/src/physics/clamped_simulation.ddc", {
    "package:flutter_web/src/physics/tolerance.dart": src__physics__tolerance,
    "package:flutter_web/src/physics/simulation.dart": src__physics__simulation,
    "package:flutter_web/src/physics/clamped_simulation.dart": src__physics__clamped_simulation,
    "package:flutter_web/src/physics/friction_simulation.dart": src__physics__friction_simulation,
    "package:flutter_web/src/physics/gravity_simulation.dart": src__physics__gravity_simulation,
    "package:flutter_web/src/physics/utils.dart": src__physics__utils,
    "package:flutter_web/src/physics/spring_simulation.dart": src__physics__spring_simulation
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["tolerance.dart","simulation.dart","clamped_simulation.dart","friction_simulation.dart","gravity_simulation.dart","utils.dart","spring_simulation.dart"],"names":[],"mappings":"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","file":"clamped_simulation.ddc.js"}');
  // Exports:
  return {
    src__physics__tolerance: src__physics__tolerance,
    src__physics__simulation: src__physics__simulation,
    src__physics__clamped_simulation: src__physics__clamped_simulation,
    src__physics__friction_simulation: src__physics__friction_simulation,
    src__physics__gravity_simulation: src__physics__gravity_simulation,
    src__physics__utils: src__physics__utils,
    src__physics__spring_simulation: src__physics__spring_simulation
  };
});

//# sourceMappingURL=clamped_simulation.ddc.js.map

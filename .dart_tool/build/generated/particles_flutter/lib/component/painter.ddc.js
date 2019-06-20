define(['dart_sdk', 'packages/flutter_web_ui/ui', 'packages/flutter_web/animation', 'packages/flutter_web/material'], function(dart_sdk, ui, animation, material) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ui$ = ui.ui;
  const src__rendering__custom_paint = animation.src__rendering__custom_paint;
  const src__material__colors = material.src__material__colors;
  const component__painter = Object.create(dart.library);
  const $_get = dartx._get;
  const $modulo = dartx['%'];
  const $length = dartx.length;
  const $contains = dartx.contains;
  let ListOfOffset = () => (ListOfOffset = dart.constFn(core.List$(ui$.Offset)))();
  let ListOfdouble = () => (ListOfdouble = dart.constFn(core.List$(core.double)))();
  let ListOfColor = () => (ListOfColor = dart.constFn(core.List$(ui$.Color)))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  component__painter.ParticlePainter = class ParticlePainter extends src__rendering__custom_paint.CustomPainter {
    get offsets() {
      return this[offsets$];
    }
    set offsets(value) {
      super.offsets = value;
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
    get constColorPaint() {
      return this[constColorPaint];
    }
    set constColorPaint(value) {
      super.constColorPaint = value;
    }
    get maxParticleSize() {
      return this[maxParticleSize$];
    }
    set maxParticleSize(value) {
      super.maxParticleSize = value;
    }
    get hoverPaint() {
      return this[hoverPaint];
    }
    set hoverPaint(value) {
      super.hoverPaint = value;
    }
    get randSize() {
      return this[randSize$];
    }
    set randSize(value) {
      super.randSize = value;
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
    get hoverIndex() {
      return this[hoverIndex$];
    }
    set hoverIndex(value) {
      super.hoverIndex = value;
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
    paint(canvas, size) {
      for (let index = 0; index < dart.notNull(this.offsets[$length]); index++) {
        if (dart.test(this.isRandomColor)) {
          component__painter.ParticlePainter.randomColor = this.randColorList[$_get](index[$modulo](this.randColorList[$length]));
          component__painter.ParticlePainter.randomColorPaint = (() => {
            let _ = new ui$.Paint.new();
            _.color = component__painter.ParticlePainter.randomColor;
            return _;
          })();
          canvas.drawCircle(this.offsets[$_get](index), dart.test(this.isRandSize) ? dart.notNull(this.maxParticleSize) * dart.notNull(this.randSize[$_get](index)) : this.maxParticleSize, dart.test(this.hoverIndex[$contains](index)) ? this.hoverPaint : component__painter.ParticlePainter.randomColorPaint);
        } else {
          component__painter.ParticlePainter.randomColorPaint = (() => {
            let _ = new ui$.Paint.new();
            _.color = component__painter.ParticlePainter.randomColor;
            return _;
          })();
          canvas.drawCircle(this.offsets[$_get](index), dart.test(this.isRandSize) ? dart.notNull(this.maxParticleSize) * dart.notNull(this.randSize[$_get](index)) : this.maxParticleSize, dart.test(this.hoverIndex[$contains](index)) ? this.hoverPaint : this.constColorPaint);
        }
      }
    }
    shouldRepaint(oldDelegate) {
      src__rendering__custom_paint.CustomPainter._check(oldDelegate);
      return true;
    }
  };
  (component__painter.ParticlePainter.new = function(opts) {
    let enableHover = opts && 'enableHover' in opts ? opts.enableHover : null;
    let randColorList = opts && 'randColorList' in opts ? opts.randColorList : null;
    let isRandSize = opts && 'isRandSize' in opts ? opts.isRandSize : null;
    let maxParticleSize = opts && 'maxParticleSize' in opts ? opts.maxParticleSize : null;
    let offsets = opts && 'offsets' in opts ? opts.offsets : null;
    let isRandomColor = opts && 'isRandomColor' in opts ? opts.isRandomColor : null;
    let particleColor = opts && 'particleColor' in opts ? opts.particleColor : null;
    let randSize = opts && 'randSize' in opts ? opts.randSize : null;
    let hoverIndex = opts && 'hoverIndex' in opts ? opts.hoverIndex : null;
    let hoverColor = opts && 'hoverColor' in opts ? opts.hoverColor : null;
    this[enableHover$] = enableHover;
    this[randColorList$] = randColorList;
    this[isRandSize$] = isRandSize;
    this[maxParticleSize$] = maxParticleSize;
    this[offsets$] = offsets;
    this[isRandomColor$] = isRandomColor;
    this[particleColor$] = particleColor;
    this[randSize$] = randSize;
    this[hoverIndex$] = hoverIndex;
    this[hoverColor$] = hoverColor;
    let _ = new ui$.Paint.new();
    _.color = particleColor;
    this[constColorPaint] = _;
    let _$ = new ui$.Paint.new();
    _$.color = hoverColor;
    this[hoverPaint] = _$;
    component__painter.ParticlePainter.__proto__.new.call(this);
  }).prototype = component__painter.ParticlePainter.prototype;
  dart.addTypeTests(component__painter.ParticlePainter);
  const offsets$ = Symbol("ParticlePainter.offsets");
  const isRandomColor$ = Symbol("ParticlePainter.isRandomColor");
  const particleColor$ = Symbol("ParticlePainter.particleColor");
  const constColorPaint = Symbol("ParticlePainter.constColorPaint");
  const maxParticleSize$ = Symbol("ParticlePainter.maxParticleSize");
  const hoverPaint = Symbol("ParticlePainter.hoverPaint");
  const randSize$ = Symbol("ParticlePainter.randSize");
  const isRandSize$ = Symbol("ParticlePainter.isRandSize");
  const randColorList$ = Symbol("ParticlePainter.randColorList");
  const hoverIndex$ = Symbol("ParticlePainter.hoverIndex");
  const enableHover$ = Symbol("ParticlePainter.enableHover");
  const hoverColor$ = Symbol("ParticlePainter.hoverColor");
  dart.setMethodSignature(component__painter.ParticlePainter, () => ({
    __proto__: dart.getMethods(component__painter.ParticlePainter.__proto__),
    paint: dart.fnType(dart.void, [ui$.Canvas, ui$.Size]),
    shouldRepaint: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(component__painter.ParticlePainter, "package:particles_flutter/component/painter.dart");
  dart.setFieldSignature(component__painter.ParticlePainter, () => ({
    __proto__: dart.getFields(component__painter.ParticlePainter.__proto__),
    offsets: dart.finalFieldType(ListOfOffset()),
    isRandomColor: dart.finalFieldType(core.bool),
    particleColor: dart.finalFieldType(ui$.Color),
    constColorPaint: dart.finalFieldType(ui$.Paint),
    maxParticleSize: dart.finalFieldType(core.double),
    hoverPaint: dart.finalFieldType(ui$.Paint),
    randSize: dart.finalFieldType(ListOfdouble()),
    isRandSize: dart.finalFieldType(core.bool),
    randColorList: dart.finalFieldType(ListOfColor()),
    hoverIndex: dart.finalFieldType(ListOfint()),
    enableHover: dart.finalFieldType(core.bool),
    hoverColor: dart.finalFieldType(ui$.Color)
  }));
  dart.defineLazy(component__painter.ParticlePainter, {
    /*component__painter.ParticlePainter.randomColor*/get randomColor() {
      return src__material__colors.Colors.blue;
    },
    set randomColor(_) {},
    /*component__painter.ParticlePainter.randomColorPaint*/get randomColorPaint() {
      return null;
    },
    set randomColorPaint(_) {}
  });
  dart.trackLibraries("packages/particles_flutter/component/painter.ddc", {
    "package:particles_flutter/component/painter.dart": component__painter
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["painter.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;IAMqB;;;;;;IACR;;;;;;IACC;;;;;;IACA;;;;;;IACC;;;;;;IAGD;;;;;;IACO;;;;;;IACR;;;;;;IACO;;;;;;IACF;;;;;;IACL;;;;;;IACC;;;;;;UAiBD,MAAa,EAAE,IAAS;AACjC,eAAS,QAAQ,GAAG,AAAM,KAAD,gBAAG,YAAO,SAAO,GAAE,KAAK,IAAI;AACnD,sBAAI,kBAAa,GAAE;AACjB,wDAAW,GAAG,kBAAa,QAAC,AAAM,KAAD,UAAG,kBAAa,SAAO;AAExD,6DAAgB;wBAAG,aAAK;sBAAY,8CAAW;;;AAC/C,gBAAM,WAAW,CACb,YAAO,QAAC,KAAK,aACb,eAAU,IAAmB,aAAhB,oBAAe,iBAAI,aAAQ,QAAC,KAAK,KAAK,oBAAe,YAClE,eAAU,WAAS,CAAC,KAAK,KAAI,eAAU,GAAG,mDAAgB;eACzD;AACL,6DAAgB;wBAAG,aAAK;sBAAY,8CAAW;;;AAC/C,gBAAM,WAAW,CACb,YAAO,QAAC,KAAK,aACb,eAAU,IAAmB,aAAhB,oBAAe,iBAAI,aAAQ,QAAC,KAAK,KAAK,oBAAe,YAClE,eAAU,WAAS,CAAC,KAAK,KAAI,eAAU,GAAG,oBAAe;;;IAGnE;kBAGmB,WAAyB;wDAAX;AAC/B,YAAO;IACT;;;QArCO;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;IATA,kBAAW,GAAX,WAAW;IACX,oBAAa,GAAb,aAAa;IACb,iBAAU,GAAV,UAAU;IACV,sBAAe,GAAf,eAAe;IACf,cAAO,GAAP,OAAO;IACP,oBAAa,GAAb,aAAa;IACb,oBAAa,GAAb,aAAa;IACb,eAAQ,GAAR,QAAQ;IACR,iBAAU,GAAV,UAAU;IACV,iBAAU,GAAV,UAAU;gBACO,aAAK;cAAY,aAAa;IAAhD,qBAAe;iBACF,aAAK;eAAY,UAAU;IAAxC,gBAAU;;EAA8B;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAtBjC,8CAAW;YAAG,6BAAM,KAAK;;;MACzB,mDAAgB","file":"painter.ddc.js"}');
  // Exports:
  return {
    component__painter: component__painter
  };
});

//# sourceMappingURL=painter.ddc.js.map

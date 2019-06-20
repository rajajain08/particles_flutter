define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const meta = Object.create(dart.library);
  dart.defineLazy(meta, {
    /*meta.alwaysThrows*/get alwaysThrows() {
      return dart.const(new meta._AlwaysThrows.new());
    },
    /*meta.checked*/get checked() {
      return dart.const(new meta._Checked.new());
    },
    /*meta.experimental*/get experimental() {
      return dart.const(new meta._Experimental.new());
    },
    /*meta.factory*/get factory() {
      return dart.const(new meta._Factory.new());
    },
    /*meta.immutable*/get immutable() {
      return dart.const(new meta.Immutable.new());
    },
    /*meta.isTest*/get isTest() {
      return dart.const(new meta._IsTest.new());
    },
    /*meta.isTestGroup*/get isTestGroup() {
      return dart.const(new meta._IsTestGroup.new());
    },
    /*meta.literal*/get literal() {
      return dart.const(new meta._Literal.new());
    },
    /*meta.mustCallSuper*/get mustCallSuper() {
      return dart.const(new meta._MustCallSuper.new());
    },
    /*meta.optionalTypeArgs*/get optionalTypeArgs() {
      return dart.const(new meta._OptionalTypeArgs.new());
    },
    /*meta.protected*/get protected() {
      return dart.const(new meta._Protected.new());
    },
    /*meta.required*/get required() {
      return dart.const(new meta.Required.new());
    },
    /*meta.sealed*/get sealed() {
      return dart.const(new meta._Sealed.new());
    },
    /*meta.virtual*/get virtual() {
      return dart.const(new meta._Virtual.new());
    },
    /*meta.visibleForOverriding*/get visibleForOverriding() {
      return dart.const(new meta._VisibleForOverriding.new());
    },
    /*meta.visibleForTesting*/get visibleForTesting() {
      return dart.const(new meta._VisibleForTesting.new());
    }
  });
  meta.Immutable = class Immutable extends core.Object {
    get reason() {
      return this[reason$];
    }
    set reason(value) {
      super.reason = value;
    }
  };
  (meta.Immutable.new = function(reason) {
    if (reason === void 0) reason = null;
    this[reason$] = reason;
  }).prototype = meta.Immutable.prototype;
  dart.addTypeTests(meta.Immutable);
  const reason$ = Symbol("Immutable.reason");
  dart.setLibraryUri(meta.Immutable, "package:meta/meta.dart");
  dart.setFieldSignature(meta.Immutable, () => ({
    __proto__: dart.getFields(meta.Immutable.__proto__),
    reason: dart.finalFieldType(core.String)
  }));
  meta.Required = class Required extends core.Object {
    get reason() {
      return this[reason$0];
    }
    set reason(value) {
      super.reason = value;
    }
  };
  (meta.Required.new = function(reason) {
    if (reason === void 0) reason = null;
    this[reason$0] = reason;
  }).prototype = meta.Required.prototype;
  dart.addTypeTests(meta.Required);
  const reason$0 = Symbol("Required.reason");
  dart.setLibraryUri(meta.Required, "package:meta/meta.dart");
  dart.setFieldSignature(meta.Required, () => ({
    __proto__: dart.getFields(meta.Required.__proto__),
    reason: dart.finalFieldType(core.String)
  }));
  meta._AlwaysThrows = class _AlwaysThrows extends core.Object {};
  (meta._AlwaysThrows.new = function() {
  }).prototype = meta._AlwaysThrows.prototype;
  dart.addTypeTests(meta._AlwaysThrows);
  dart.setLibraryUri(meta._AlwaysThrows, "package:meta/meta.dart");
  meta._Checked = class _Checked extends core.Object {};
  (meta._Checked.new = function() {
  }).prototype = meta._Checked.prototype;
  dart.addTypeTests(meta._Checked);
  dart.setLibraryUri(meta._Checked, "package:meta/meta.dart");
  meta._Experimental = class _Experimental extends core.Object {};
  (meta._Experimental.new = function() {
  }).prototype = meta._Experimental.prototype;
  dart.addTypeTests(meta._Experimental);
  dart.setLibraryUri(meta._Experimental, "package:meta/meta.dart");
  meta._Factory = class _Factory extends core.Object {};
  (meta._Factory.new = function() {
  }).prototype = meta._Factory.prototype;
  dart.addTypeTests(meta._Factory);
  dart.setLibraryUri(meta._Factory, "package:meta/meta.dart");
  meta._IsTest = class _IsTest extends core.Object {};
  (meta._IsTest.new = function() {
  }).prototype = meta._IsTest.prototype;
  dart.addTypeTests(meta._IsTest);
  dart.setLibraryUri(meta._IsTest, "package:meta/meta.dart");
  meta._IsTestGroup = class _IsTestGroup extends core.Object {};
  (meta._IsTestGroup.new = function() {
  }).prototype = meta._IsTestGroup.prototype;
  dart.addTypeTests(meta._IsTestGroup);
  dart.setLibraryUri(meta._IsTestGroup, "package:meta/meta.dart");
  meta._Literal = class _Literal extends core.Object {};
  (meta._Literal.new = function() {
  }).prototype = meta._Literal.prototype;
  dart.addTypeTests(meta._Literal);
  dart.setLibraryUri(meta._Literal, "package:meta/meta.dart");
  meta._MustCallSuper = class _MustCallSuper extends core.Object {};
  (meta._MustCallSuper.new = function() {
  }).prototype = meta._MustCallSuper.prototype;
  dart.addTypeTests(meta._MustCallSuper);
  dart.setLibraryUri(meta._MustCallSuper, "package:meta/meta.dart");
  meta._OptionalTypeArgs = class _OptionalTypeArgs extends core.Object {};
  (meta._OptionalTypeArgs.new = function() {
  }).prototype = meta._OptionalTypeArgs.prototype;
  dart.addTypeTests(meta._OptionalTypeArgs);
  dart.setLibraryUri(meta._OptionalTypeArgs, "package:meta/meta.dart");
  meta._Protected = class _Protected extends core.Object {};
  (meta._Protected.new = function() {
  }).prototype = meta._Protected.prototype;
  dart.addTypeTests(meta._Protected);
  dart.setLibraryUri(meta._Protected, "package:meta/meta.dart");
  meta._Sealed = class _Sealed extends core.Object {};
  (meta._Sealed.new = function() {
  }).prototype = meta._Sealed.prototype;
  dart.addTypeTests(meta._Sealed);
  dart.setLibraryUri(meta._Sealed, "package:meta/meta.dart");
  meta._Virtual = class _Virtual extends core.Object {};
  (meta._Virtual.new = function() {
  }).prototype = meta._Virtual.prototype;
  dart.addTypeTests(meta._Virtual);
  dart.setLibraryUri(meta._Virtual, "package:meta/meta.dart");
  meta._VisibleForOverriding = class _VisibleForOverriding extends core.Object {};
  (meta._VisibleForOverriding.new = function() {
  }).prototype = meta._VisibleForOverriding.prototype;
  dart.addTypeTests(meta._VisibleForOverriding);
  dart.setLibraryUri(meta._VisibleForOverriding, "package:meta/meta.dart");
  meta._VisibleForTesting = class _VisibleForTesting extends core.Object {};
  (meta._VisibleForTesting.new = function() {
  }).prototype = meta._VisibleForTesting.prototype;
  dart.addTypeTests(meta._VisibleForTesting);
  dart.setLibraryUri(meta._VisibleForTesting, "package:meta/meta.dart");
  dart.trackLibraries("packages/meta/meta.ddc", {
    "package:meta/meta.dart": meta
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["meta.dart"],"names":[],"mappings":";;;;;;;MAgDoB,iBAAY;YAAG,gBAAM,sBAAa;;MAWvC,YAAO;YAAG,gBAAM,iBAAQ;;MAsBnB,iBAAY;YAAG,gBAAM,sBAAa;;MAYvC,YAAO;YAAG,gBAAM,iBAAQ;;MAYvB,cAAS;YAAG,gBAAM,kBAAS;;MAQ7B,WAAM;YAAG,gBAAM,gBAAO;;MAQjB,gBAAW;YAAG,gBAAM,qBAAY;;MAapC,YAAO;YAAG,gBAAM,iBAAQ;;MAelB,kBAAa;YAAG,gBAAM,uBAAc;;MAMjC,qBAAgB;YAAG,gBAAM,0BAAiB;;MAkBjD,cAAS;YAAG,gBAAM,mBAAU;;MAe9B,aAAQ;YAAG,gBAAM,iBAAQ;;MAa1B,WAAM;YAAG,gBAAM,gBAAO;;MAQrB,YAAO;YAAG,gBAAM,iBAAQ;;MAWX,yBAAoB;YAC5C,gBAAM,8BAAqB;;MAWN,sBAAiB;YAAG,gBAAM,2BAAkB;;;;IAOtD;;;;;;;iCAGI,MAAW;2BAAN;iBAAM,GAAN,MAAM;EAAE;;;;;;;;;IAgBjB;;;;;;;gCAGG,MAAW;2BAAN;kBAAM,GAAN,MAAM;EAAE;;;;;;;;;;EAIR;;;;;EAIL;;;;;EAIK;;;;;EAIL;;;;;EAID;;;;;EAIK;;;;;EAIJ;;;;;EAIM;;;;;EAIG;;;;;EAIP;;;;;EAIH;;;;;EAKC;;;;;EAIa;;;;;EAIH","file":"meta.ddc.js"}');
  // Exports:
  return {
    meta: meta
  };
});

//# sourceMappingURL=meta.ddc.js.map

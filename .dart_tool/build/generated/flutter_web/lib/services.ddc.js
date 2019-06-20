define(['dart_sdk', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/services/clipboard', 'packages/flutter_web/src/foundation/assertions'], function(dart_sdk, ui, clipboard, assertions) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const typed_data = dart_sdk.typed_data;
  const _interceptors = dart_sdk._interceptors;
  const convert = dart_sdk.convert;
  const html = dart_sdk.html;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ui$ = ui.ui;
  const src__services__platform_messages = clipboard.src__services__platform_messages;
  const src__foundation__licenses = assertions.src__foundation__licenses;
  const src__foundation__isolates = assertions.src__foundation__isolates;
  const src__foundation__binding = assertions.src__foundation__binding;
  const src__foundation__assertions = assertions.src__foundation__assertions;
  const src__foundation__diagnostics = assertions.src__foundation__diagnostics;
  const src__foundation__synchronous_future = assertions.src__foundation__synchronous_future;
  const src__services__binding = Object.create(dart.library);
  const src__services__asset_bundle = Object.create(dart.library);
  const services = Object.create(dart.library);
  const $times = dartx['*'];
  const $split = dartx.split;
  const $indexOf = dartx.indexOf;
  const $substring = dartx.substring;
  const $add = dartx.add;
  const $lengthInBytes = dartx.lengthInBytes;
  const $asUint8List = dartx.asUint8List;
  const $buffer = dartx.buffer;
  const $response = dartx.response;
  const $asByteData = dartx.asByteData;
  const $putIfAbsent = dartx.putIfAbsent;
  const $containsKey = dartx.containsKey;
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $remove = dartx.remove;
  let FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  let ByteDataTovoid = () => (ByteDataTovoid = dart.constFn(dart.fnType(dart.void, [typed_data.ByteData])))();
  let StringAndByteDataAndFnToFutureOfvoid = () => (StringAndByteDataAndFnToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [core.String, typed_data.ByteData, ByteDataTovoid()])))();
  let CompleterOfString = () => (CompleterOfString = dart.constFn(async.Completer$(core.String)))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let ListOfLicenseEntry = () => (ListOfLicenseEntry = dart.constFn(core.List$(src__foundation__licenses.LicenseEntry)))();
  let CompleterOfListOfLicenseEntry = () => (CompleterOfListOfLicenseEntry = dart.constFn(async.Completer$(ListOfLicenseEntry())))();
  let StringToListOfLicenseEntry = () => (StringToListOfLicenseEntry = dart.constFn(dart.fnType(ListOfLicenseEntry(), [core.String])))();
  let StreamOfLicenseEntry = () => (StreamOfLicenseEntry = dart.constFn(async.Stream$(src__foundation__licenses.LicenseEntry)))();
  let _AsyncStarImplOfLicenseEntry = () => (_AsyncStarImplOfLicenseEntry = dart.constFn(async._AsyncStarImpl$(src__foundation__licenses.LicenseEntry)))();
  let JSArrayOfLicenseEntry = () => (JSArrayOfLicenseEntry = dart.constFn(_interceptors.JSArray$(src__foundation__licenses.LicenseEntry)))();
  let FutureOfString = () => (FutureOfString = dart.constFn(async.Future$(core.String)))();
  let VoidToFutureOfString = () => (VoidToFutureOfString = dart.constFn(dart.fnType(FutureOfString(), [])))();
  let StringToFutureOfNull = () => (StringToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [core.String])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let IdentityMapOfString$FutureOfString = () => (IdentityMapOfString$FutureOfString = dart.constFn(_js_helper.IdentityMap$(core.String, FutureOfString())))();
  let IdentityMapOfString$Future = () => (IdentityMapOfString$Future = dart.constFn(_js_helper.IdentityMap$(core.String, async.Future)))();
  let MapOfString$FutureOfString = () => (MapOfString$FutureOfString = dart.constFn(core.Map$(core.String, FutureOfString())))();
  let MapOfString$Future = () => (MapOfString$Future = dart.constFn(core.Map$(core.String, async.Future)))();
  const _addLicenses = dart.privateName(src__services__binding, "_addLicenses");
  let const$;
  src__services__binding.ServicesBinding = class ServicesBinding extends core.Object {
    static _parseLicenses(rawLicenses) {
      let _licenseSeparator = "\n" + "-"[$times](80) + "\n";
      let result = JSArrayOfLicenseEntry().of([]);
      let licenses = rawLicenses[$split](_licenseSeparator);
      for (let license of licenses) {
        let split = license[$indexOf]("\n\n");
        if (split >= 0) {
          result[$add](new src__foundation__licenses.LicenseEntryWithLineBreaks.new(license[$substring](0, split)[$split]("\n"), license[$substring](split + 2)));
        } else {
          result[$add](new src__foundation__licenses.LicenseEntryWithLineBreaks.new(const$ || (const$ = dart.constList([], core.String)), license));
        }
      }
      return result;
    }
  };
  src__services__binding.ServicesBinding[dart.mixinOn] = BindingBase => class ServicesBinding extends BindingBase {
    initInstances() {
      super.initInstances();
      ui$.window.onPlatformMessage = dart.fn(src__services__platform_messages.BinaryMessages.handlePlatformMessage, StringAndByteDataAndFnToFutureOfvoid());
      this.initLicenses();
    }
    initLicenses() {
      src__foundation__licenses.LicenseRegistry.addLicense(dart.bind(this, _addLicenses));
    }
    [_addLicenses]() {
      return new (_AsyncStarImplOfLicenseEntry()).new(function* _addLicenses(stream) {
        let rawLicenses = CompleterOfString().new();
        async.Timer.run(dart.fn(() => async.async(core.Null, function*() {
          rawLicenses.complete(src__services__asset_bundle.rootBundle.loadString("LICENSE", {cache: false}));
        }), VoidToFutureOfNull()));
        yield rawLicenses.future;
        let parsedLicenses = CompleterOfListOfLicenseEntry().new();
        async.Timer.run(dart.fn(() => async.async(core.Null, function*() {
          parsedLicenses.complete(src__foundation__isolates.compute(core.String, ListOfLicenseEntry(), dart.fn(src__services__binding.ServicesBinding._parseLicenses, StringToListOfLicenseEntry()), yield rawLicenses.future, {debugLabel: "parseLicenses"}));
        }), VoidToFutureOfNull()));
        yield parsedLicenses.future;
        if (stream.addStream(StreamOfLicenseEntry().fromIterable(yield parsedLicenses.future))) return;
        yield;
      }).stream;
    }
    initServiceExtensions() {
      super.initServiceExtensions();
      if (!dart.test(dart.fn(() => {
        this.registerStringServiceExtension({name: "evict", getter: dart.fn(() => async.async(core.String, function*() {
            return "";
          }), VoidToFutureOfString()), setter: dart.fn(value => async.async(core.Null, (function*() {
            this.evict(value);
          }).bind(this)), StringToFutureOfNull())});
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/services/binding.dart", 90, 12, "() {registerStringServiceExtension(name: 'evict', getter: () async => '', setter: (String value) async {evict(value);}); return true;}()");
    }
    evict(asset) {
      src__services__asset_bundle.rootBundle.evict(asset);
    }
  };
  (src__services__binding.ServicesBinding.new = function() {
  }).prototype = src__services__binding.ServicesBinding.prototype;
  dart.addTypeTests(src__services__binding.ServicesBinding);
  src__services__binding.ServicesBinding[dart.implements] = () => [src__foundation__binding.BindingBase];
  dart.setMethodSignature(src__services__binding.ServicesBinding, () => ({
    __proto__: dart.getMethods(src__services__binding.ServicesBinding.__proto__),
    initLicenses: dart.fnType(dart.void, []),
    [_addLicenses]: dart.fnType(async.Stream$(src__foundation__licenses.LicenseEntry), []),
    evict: dart.fnType(dart.void, [core.String])
  }));
  dart.setLibraryUri(src__services__binding.ServicesBinding, "package:flutter_web/src/services/binding.dart");
  src__services__asset_bundle.AssetBundle = class AssetBundle extends core.Object {
    loadString(key, opts) {
      let cache = opts && 'cache' in opts ? opts.cache : true;
      return async.async(core.String, (function* loadString() {
        let data = (yield this.load(key));
        if (data == null) dart.throw(src__foundation__assertions.FlutterError.new("Unable to load asset: " + dart.str(key)));
        if (dart.notNull(data[$lengthInBytes]) < 20 * 1024) {
          return convert.utf8.decode(data[$buffer][$asUint8List]());
        }
        return src__services__asset_bundle.AssetBundle._utf8decode(data);
      }).bind(this));
    }
    static _utf8decode(data) {
      return convert.utf8.decode(data[$buffer][$asUint8List]());
    }
    evict(key) {}
    toString() {
      return dart.str(src__foundation__diagnostics.describeIdentity(this)) + "()";
    }
  };
  (src__services__asset_bundle.AssetBundle.new = function() {
  }).prototype = src__services__asset_bundle.AssetBundle.prototype;
  dart.addTypeTests(src__services__asset_bundle.AssetBundle);
  dart.setMethodSignature(src__services__asset_bundle.AssetBundle, () => ({
    __proto__: dart.getMethods(src__services__asset_bundle.AssetBundle.__proto__),
    loadString: dart.fnType(async.Future$(core.String), [core.String], {cache: core.bool}),
    evict: dart.fnType(dart.void, [core.String])
  }));
  dart.setLibraryUri(src__services__asset_bundle.AssetBundle, "package:flutter_web/src/services/asset_bundle.dart");
  dart.defineExtensionMethods(src__services__asset_bundle.AssetBundle, ['toString']);
  const _baseUrl = dart.privateName(src__services__asset_bundle, "_baseUrl");
  const _urlFromKey = dart.privateName(src__services__asset_bundle, "_urlFromKey");
  src__services__asset_bundle.NetworkAssetBundle = class NetworkAssetBundle extends src__services__asset_bundle.AssetBundle {
    [_urlFromKey](key) {
      return this[_baseUrl].resolve(key);
    }
    load(key) {
      return async.async(typed_data.ByteData, (function* load() {
        let request = (yield html.HttpRequest.request(dart.toString(this[_urlFromKey](key)), {method: "GET"}));
        let buffer = typed_data.ByteBuffer._check(request[$response]);
        return buffer[$asByteData]();
      }).bind(this));
    }
    loadStructuredData(T, key, parser) {
      return async.async(T, (function* loadStructuredData() {
        if (!(key != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/services/asset_bundle.dart", 134, 12, "key != null");
        if (!(parser != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/services/asset_bundle.dart", 135, 12, "parser != null");
        return parser(yield this.loadString(key));
      }).bind(this));
    }
  };
  (src__services__asset_bundle.NetworkAssetBundle.new = function(baseUrl) {
    this[_baseUrl] = baseUrl;
  }).prototype = src__services__asset_bundle.NetworkAssetBundle.prototype;
  dart.addTypeTests(src__services__asset_bundle.NetworkAssetBundle);
  dart.setMethodSignature(src__services__asset_bundle.NetworkAssetBundle, () => ({
    __proto__: dart.getMethods(src__services__asset_bundle.NetworkAssetBundle.__proto__),
    [_urlFromKey]: dart.fnType(core.Uri, [core.String]),
    load: dart.fnType(async.Future$(typed_data.ByteData), [core.String]),
    loadStructuredData: dart.gFnType(T => [async.Future$(T), [core.String, dart.fnType(async.Future$(T), [core.String])]])
  }));
  dart.setLibraryUri(src__services__asset_bundle.NetworkAssetBundle, "package:flutter_web/src/services/asset_bundle.dart");
  dart.setFieldSignature(src__services__asset_bundle.NetworkAssetBundle, () => ({
    __proto__: dart.getFields(src__services__asset_bundle.NetworkAssetBundle.__proto__),
    [_baseUrl]: dart.finalFieldType(core.Uri)
  }));
  const _stringCache = dart.privateName(src__services__asset_bundle, "_stringCache");
  const _structuredDataCache = dart.privateName(src__services__asset_bundle, "_structuredDataCache");
  src__services__asset_bundle.CachingAssetBundle = class CachingAssetBundle extends src__services__asset_bundle.AssetBundle {
    loadString(key, opts) {
      let cache = opts && 'cache' in opts ? opts.cache : true;
      if (dart.test(cache)) return this[_stringCache][$putIfAbsent](key, dart.fn(() => super.loadString(key), VoidToFutureOfString()));
      return super.loadString(key);
    }
    loadStructuredData(T, key, parser) {
      if (!(key != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/services/asset_bundle.dart", 177, 12, "key != null");
      if (!(parser != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/flutter_web/src/services/asset_bundle.dart", 178, 12, "parser != null");
      if (dart.test(this[_structuredDataCache][$containsKey](key))) return async.Future$(T)._check(this[_structuredDataCache][$_get](key));
      let completer = null;
      let result = null;
      async.Future$(T)._check(this.loadString(key, {cache: false}).then(T, parser)).then(dart.void, dart.fn(value => {
        result = new (src__foundation__synchronous_future.SynchronousFuture$(T)).new(value);
        this[_structuredDataCache][$_set](key, result);
        if (completer != null) {
          completer.complete(value);
        }
      }, dart.fnType(core.Null, [T])));
      if (result != null) {
        return result;
      }
      completer = async.Completer$(T).new();
      this[_structuredDataCache][$_set](key, completer.future);
      return completer.future;
    }
    evict(key) {
      this[_stringCache][$remove](key);
      this[_structuredDataCache][$remove](key);
    }
  };
  (src__services__asset_bundle.CachingAssetBundle.new = function() {
    this[_stringCache] = new (IdentityMapOfString$FutureOfString()).new();
    this[_structuredDataCache] = new (IdentityMapOfString$Future()).new();
  }).prototype = src__services__asset_bundle.CachingAssetBundle.prototype;
  dart.addTypeTests(src__services__asset_bundle.CachingAssetBundle);
  dart.setMethodSignature(src__services__asset_bundle.CachingAssetBundle, () => ({
    __proto__: dart.getMethods(src__services__asset_bundle.CachingAssetBundle.__proto__),
    loadStructuredData: dart.gFnType(T => [async.Future$(T), [core.String, dart.fnType(async.Future$(T), [core.String])]])
  }));
  dart.setLibraryUri(src__services__asset_bundle.CachingAssetBundle, "package:flutter_web/src/services/asset_bundle.dart");
  dart.setFieldSignature(src__services__asset_bundle.CachingAssetBundle, () => ({
    __proto__: dart.getFields(src__services__asset_bundle.CachingAssetBundle.__proto__),
    [_stringCache]: dart.finalFieldType(MapOfString$FutureOfString()),
    [_structuredDataCache]: dart.finalFieldType(MapOfString$Future())
  }));
  src__services__asset_bundle.PlatformAssetBundle = class PlatformAssetBundle extends src__services__asset_bundle.CachingAssetBundle {
    load(key) {
      return async.async(typed_data.ByteData, function* load() {
        let encoded = typed_data.Uint8List._check(convert.utf8.encoder.convert(core.Uri.new({path: core.Uri.encodeFull(key)}).path));
        let asset = (yield src__services__platform_messages.BinaryMessages.send("flutter/assets", encoded[$buffer][$asByteData]()));
        if (asset == null) dart.throw(src__foundation__assertions.FlutterError.new("Unable to load asset: " + dart.str(key)));
        return asset;
      });
    }
  };
  (src__services__asset_bundle.PlatformAssetBundle.new = function() {
    src__services__asset_bundle.PlatformAssetBundle.__proto__.new.call(this);
  }).prototype = src__services__asset_bundle.PlatformAssetBundle.prototype;
  dart.addTypeTests(src__services__asset_bundle.PlatformAssetBundle);
  dart.setMethodSignature(src__services__asset_bundle.PlatformAssetBundle, () => ({
    __proto__: dart.getMethods(src__services__asset_bundle.PlatformAssetBundle.__proto__),
    load: dart.fnType(async.Future$(typed_data.ByteData), [core.String])
  }));
  dart.setLibraryUri(src__services__asset_bundle.PlatformAssetBundle, "package:flutter_web/src/services/asset_bundle.dart");
  src__services__asset_bundle._initRootBundle = function() {
    return new src__services__asset_bundle.PlatformAssetBundle.new();
  };
  dart.defineLazy(src__services__asset_bundle, {
    /*src__services__asset_bundle.rootBundle*/get rootBundle() {
      return src__services__asset_bundle._initRootBundle();
    }
  });
  dart.trackLibraries("packages/flutter_web/services.ddc", {
    "package:flutter_web/src/services/binding.dart": src__services__binding,
    "package:flutter_web/src/services/asset_bundle.dart": src__services__asset_bundle,
    "package:flutter_web/services.dart": services
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/services/binding.dart","src/services/asset_bundle.dart"],"names":[],"mappings":"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","file":"services.ddc.js"}');
  // Exports:
  return {
    src__services__binding: src__services__binding,
    src__services__asset_bundle: src__services__asset_bundle,
    services: services
  };
});

//# sourceMappingURL=services.ddc.js.map

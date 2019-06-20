define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const typed_data = dart_sdk.typed_data;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const typed_buffers = Object.create(dart.library);
  const $length = dartx.length;
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $setRange = dartx.setRange;
  const $elementSizeInBytes = dartx.elementSizeInBytes;
  const $offsetInBytes = dartx.offsetInBytes;
  const $buffer = dartx.buffer;
  const $add = dartx.add;
  const $addAll = dartx.addAll;
  const $insertAll = dartx.insertAll;
  const $insert = dartx.insert;
  const _buffer = dart.privateName(typed_buffers, "_buffer");
  const _length = dart.privateName(typed_buffers, "_length");
  const _typedBuffer = dart.privateName(typed_buffers, "_typedBuffer");
  const _defaultValue = dart.privateName(typed_buffers, "_defaultValue");
  const _createBuffer = dart.privateName(typed_buffers, "_createBuffer");
  const _createBiggerBuffer = dart.privateName(typed_buffers, "_createBiggerBuffer");
  const _grow = dart.privateName(typed_buffers, "_grow");
  const _add = dart.privateName(typed_buffers, "_add");
  const _addAll = dart.privateName(typed_buffers, "_addAll");
  const _insertKnownLength = dart.privateName(typed_buffers, "_insertKnownLength");
  const _ensureCapacity = dart.privateName(typed_buffers, "_ensureCapacity");
  const _setRange = dart.privateName(typed_buffers, "_setRange");
  const _is__TypedDataBuffer_default = Symbol('_is__TypedDataBuffer_default');
  typed_buffers._TypedDataBuffer$ = dart.generic(E => {
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    let _TypedDataBufferOfE = () => (_TypedDataBufferOfE = dart.constFn(typed_buffers._TypedDataBuffer$(E)))();
    let ListOfE = () => (ListOfE = dart.constFn(core.List$(E)))();
    class _TypedDataBuffer extends collection.ListBase$(E) {
      get [_typedBuffer]() {
        return typed_data.TypedData.as(this[_buffer]);
      }
      get length() {
        return this[_length];
      }
      _get(index) {
        if (dart.notNull(index) >= dart.notNull(this.length)) dart.throw(core.RangeError.index(index, this));
        return this[_buffer][$_get](index);
      }
      _set(index, value) {
        E._check(value);
        if (dart.notNull(index) >= dart.notNull(this.length)) dart.throw(core.RangeError.index(index, this));
        this[_buffer][$_set](index, value);
        return value;
      }
      set length(newLength) {
        if (dart.notNull(newLength) < dart.notNull(this[_length])) {
          let defaultValue = this[_defaultValue];
          for (let i = newLength; dart.notNull(i) < dart.notNull(this[_length]); i = dart.notNull(i) + 1) {
            this[_buffer][$_set](i, defaultValue);
          }
        } else if (dart.notNull(newLength) > dart.notNull(this[_buffer][$length])) {
          let newBuffer = null;
          if (this[_buffer][$length] === 0) {
            newBuffer = this[_createBuffer](newLength);
          } else {
            newBuffer = this[_createBiggerBuffer](newLength);
          }
          newBuffer[$setRange](0, this[_length], this[_buffer]);
          this[_buffer] = newBuffer;
        }
        this[_length] = newLength;
      }
      [_add](value) {
        E._check(value);
        if (this[_length] == this[_buffer][$length]) this[_grow](this[_length]);
        this[_buffer][$_set]((() => {
          let x = this[_length];
          this[_length] = dart.notNull(x) + 1;
          return x;
        })(), value);
      }
      add(value) {
        E._check(value);
        this[_add](value);
      }
      addAll(values, start, end) {
        IterableOfE()._check(values);
        if (start === void 0) start = 0;
        if (end === void 0) end = null;
        core.RangeError.checkNotNegative(start, "start");
        if (end != null && dart.notNull(start) > dart.notNull(end)) {
          dart.throw(new core.RangeError.range(end, start, null, "end"));
        }
        this[_addAll](values, start, end);
      }
      insertAll(index, values, start, end) {
        IterableOfE()._check(values);
        if (start === void 0) start = 0;
        if (end === void 0) end = null;
        core.RangeError.checkValidIndex(index, this, "index", dart.notNull(this[_length]) + 1);
        core.RangeError.checkNotNegative(start, "start");
        if (end != null) {
          if (dart.notNull(start) > dart.notNull(end)) {
            dart.throw(new core.RangeError.range(end, start, null, "end"));
          }
          if (start == end) return;
        }
        if (index == this[_length]) {
          this[_addAll](values, start, end);
          return;
        }
        if (end == null && core.List.is(values)) {
          end = values[$length];
        }
        if (end != null) {
          this[_insertKnownLength](index, values, start, end);
          return;
        }
        let writeIndex = this[_length];
        let skipCount = start;
        for (let value of values) {
          if (dart.notNull(skipCount) > 0) {
            skipCount = dart.notNull(skipCount) - 1;
            continue;
          }
          if (writeIndex == this[_buffer][$length]) {
            this[_grow](writeIndex);
          }
          this[_buffer][$_set]((() => {
            let x = writeIndex;
            writeIndex = dart.notNull(x) + 1;
            return x;
          })(), value);
        }
        if (dart.notNull(skipCount) > 0) {
          dart.throw(new core.StateError.new("Too few elements"));
        }
        if (end != null && dart.notNull(writeIndex) < dart.notNull(end)) {
          dart.throw(new core.RangeError.range(end, start, writeIndex, "end"));
        }
        typed_buffers._TypedDataBuffer._reverse(this[_buffer], index, this[_length]);
        typed_buffers._TypedDataBuffer._reverse(this[_buffer], this[_length], writeIndex);
        typed_buffers._TypedDataBuffer._reverse(this[_buffer], index, writeIndex);
        this[_length] = writeIndex;
        return;
      }
      static _reverse(buffer, start, end) {
        end = dart.notNull(end) - 1;
        while (dart.notNull(start) < dart.notNull(end)) {
          let first = buffer[$_get](start);
          let last = buffer[$_get](end);
          buffer[$_set](end, first);
          buffer[$_set](start, last);
          start = dart.notNull(start) + 1;
          end = dart.notNull(end) - 1;
        }
      }
      [_addAll](values, start, end) {
        IterableOfE()._check(values);
        if (start === void 0) start = 0;
        if (end === void 0) end = null;
        if (core.List.is(values)) {
          let t = end;
          t == null ? end = values[$length] : t;
        }
        if (end != null) {
          this[_insertKnownLength](this[_length], values, start, end);
          return;
        }
        let i = 0;
        for (let value of values) {
          if (i >= dart.notNull(start)) this.add(value);
          i++;
        }
        if (i < dart.notNull(start)) dart.throw(new core.StateError.new("Too few elements"));
      }
      [_insertKnownLength](index, values, start, end) {
        IterableOfE()._check(values);
        if (core.List.is(values)) {
          let t = end;
          t == null ? end = values[$length] : t;
          if (dart.notNull(start) > dart.notNull(values[$length]) || dart.notNull(end) > dart.notNull(values[$length])) {
            dart.throw(new core.StateError.new("Too few elements"));
          }
        } else {
          if (!(end != null)) dart.assertFailed(null, "file:///private/var/folders/s4/f2p8qm_n0wdf82gw3d7t9wc00000gn/T/scratch_spaceTpW4FV/packages/typed_data/typed_buffers.dart", 210, 14, "end != null");
        }
        let valuesLength = dart.notNull(end) - dart.notNull(start);
        let newLength = dart.notNull(this[_length]) + valuesLength;
        this[_ensureCapacity](newLength);
        this[_buffer][$setRange](dart.notNull(index) + valuesLength, dart.notNull(this[_length]) + valuesLength, this[_buffer], index);
        this[_buffer][$setRange](index, dart.notNull(index) + valuesLength, values, start);
        this[_length] = newLength;
      }
      insert(index, element) {
        E._check(element);
        if (dart.notNull(index) < 0 || dart.notNull(index) > dart.notNull(this[_length])) {
          dart.throw(new core.RangeError.range(index, 0, this[_length]));
        }
        if (dart.notNull(this[_length]) < dart.notNull(this[_buffer][$length])) {
          this[_buffer][$setRange](dart.notNull(index) + 1, dart.notNull(this[_length]) + 1, this[_buffer], index);
          this[_buffer][$_set](index, element);
          this[_length] = dart.notNull(this[_length]) + 1;
          return;
        }
        let newBuffer = this[_createBiggerBuffer](null);
        newBuffer[$setRange](0, index, this[_buffer]);
        newBuffer[$setRange](dart.notNull(index) + 1, dart.notNull(this[_length]) + 1, this[_buffer], index);
        newBuffer[$_set](index, element);
        this[_length] = dart.notNull(this[_length]) + 1;
        this[_buffer] = newBuffer;
      }
      [_ensureCapacity](requiredCapacity) {
        if (dart.notNull(requiredCapacity) <= dart.notNull(this[_buffer][$length])) return;
        let newBuffer = this[_createBiggerBuffer](requiredCapacity);
        newBuffer[$setRange](0, this[_length], this[_buffer]);
        this[_buffer] = newBuffer;
      }
      [_createBiggerBuffer](requiredCapacity) {
        let newLength = dart.notNull(this[_buffer][$length]) * 2;
        if (requiredCapacity != null && dart.notNull(newLength) < dart.notNull(requiredCapacity)) {
          newLength = requiredCapacity;
        } else if (dart.notNull(newLength) < 8) {
          newLength = 8;
        }
        return this[_createBuffer](newLength);
      }
      [_grow](length) {
        let _ = this[_createBiggerBuffer](null);
        _[$setRange](0, length, this[_buffer]);
        this[_buffer] = _;
      }
      setRange(start, end, source, skipCount) {
        IterableOfE()._check(source);
        if (skipCount === void 0) skipCount = 0;
        if (dart.notNull(end) > dart.notNull(this[_length])) dart.throw(new core.RangeError.range(end, 0, this[_length]));
        this[_setRange](start, end, source, skipCount);
      }
      [_setRange](start, end, source, skipCount) {
        IterableOfE()._check(source);
        if (_TypedDataBufferOfE().is(source)) {
          this[_buffer][$setRange](start, end, source[_buffer], skipCount);
        } else {
          this[_buffer][$setRange](start, end, source, skipCount);
        }
      }
      get elementSizeInBytes() {
        return this[_typedBuffer][$elementSizeInBytes];
      }
      get lengthInBytes() {
        return dart.notNull(this[_length]) * dart.notNull(this[_typedBuffer][$elementSizeInBytes]);
      }
      get offsetInBytes() {
        return this[_typedBuffer][$offsetInBytes];
      }
      get buffer() {
        return this[_typedBuffer][$buffer];
      }
    }
    (_TypedDataBuffer.new = function(buffer) {
      this[_buffer] = buffer;
      this[_length] = buffer[$length];
    }).prototype = _TypedDataBuffer.prototype;
    dart.addTypeTests(_TypedDataBuffer);
    _TypedDataBuffer.prototype[_is__TypedDataBuffer_default] = true;
    dart.setMethodSignature(_TypedDataBuffer, () => ({
      __proto__: dart.getMethods(_TypedDataBuffer.__proto__),
      _get: dart.fnType(E, [core.int]),
      [$_get]: dart.fnType(E, [core.int]),
      _set: dart.fnType(dart.void, [core.int, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.int, core.Object]),
      [_add]: dart.fnType(dart.void, [core.Object]),
      add: dart.fnType(dart.void, [core.Object]),
      [$add]: dart.fnType(dart.void, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object], [core.int, core.int]),
      [$addAll]: dart.fnType(dart.void, [core.Object], [core.int, core.int]),
      insertAll: dart.fnType(dart.void, [core.int, core.Object], [core.int, core.int]),
      [$insertAll]: dart.fnType(dart.void, [core.int, core.Object], [core.int, core.int]),
      [_addAll]: dart.fnType(dart.void, [core.Object], [core.int, core.int]),
      [_insertKnownLength]: dart.fnType(dart.void, [core.int, core.Object, core.int, core.int]),
      insert: dart.fnType(dart.void, [core.int, core.Object]),
      [$insert]: dart.fnType(dart.void, [core.int, core.Object]),
      [_ensureCapacity]: dart.fnType(dart.void, [core.int]),
      [_createBiggerBuffer]: dart.fnType(core.List$(E), [core.int]),
      [_grow]: dart.fnType(dart.void, [core.int]),
      setRange: dart.fnType(dart.void, [core.int, core.int, core.Object], [core.int]),
      [$setRange]: dart.fnType(dart.void, [core.int, core.int, core.Object], [core.int]),
      [_setRange]: dart.fnType(dart.void, [core.int, core.int, core.Object, core.int])
    }));
    dart.setGetterSignature(_TypedDataBuffer, () => ({
      __proto__: dart.getGetters(_TypedDataBuffer.__proto__),
      [_typedBuffer]: typed_data.TypedData,
      length: core.int,
      [$length]: core.int,
      elementSizeInBytes: core.int,
      lengthInBytes: core.int,
      offsetInBytes: core.int,
      buffer: typed_data.ByteBuffer
    }));
    dart.setSetterSignature(_TypedDataBuffer, () => ({
      __proto__: dart.getSetters(_TypedDataBuffer.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setLibraryUri(_TypedDataBuffer, "package:typed_data/typed_buffers.dart");
    dart.setFieldSignature(_TypedDataBuffer, () => ({
      __proto__: dart.getFields(_TypedDataBuffer.__proto__),
      [_buffer]: dart.fieldType(ListOfE()),
      [_length]: dart.fieldType(core.int)
    }));
    dart.defineExtensionMethods(_TypedDataBuffer, [
      '_get',
      '_set',
      'add',
      'addAll',
      'insertAll',
      'insert',
      'setRange'
    ]);
    dart.defineExtensionAccessors(_TypedDataBuffer, ['length']);
    return _TypedDataBuffer;
  });
  typed_buffers._TypedDataBuffer = typed_buffers._TypedDataBuffer$();
  dart.defineLazy(typed_buffers._TypedDataBuffer, {
    /*typed_buffers._TypedDataBuffer.INITIAL_LENGTH*/get INITIAL_LENGTH() {
      return 8;
    }
  });
  dart.addTypeTests(typed_buffers._TypedDataBuffer, _is__TypedDataBuffer_default);
  typed_buffers._IntBuffer = class _IntBuffer extends typed_buffers._TypedDataBuffer$(core.int) {
    get [_defaultValue]() {
      return 0;
    }
  };
  (typed_buffers._IntBuffer.new = function(buffer) {
    typed_buffers._IntBuffer.__proto__.new.call(this, buffer);
  }).prototype = typed_buffers._IntBuffer.prototype;
  dart.addTypeTests(typed_buffers._IntBuffer);
  dart.setGetterSignature(typed_buffers._IntBuffer, () => ({
    __proto__: dart.getGetters(typed_buffers._IntBuffer.__proto__),
    [_defaultValue]: core.int
  }));
  dart.setLibraryUri(typed_buffers._IntBuffer, "package:typed_data/typed_buffers.dart");
  typed_buffers._FloatBuffer = class _FloatBuffer extends typed_buffers._TypedDataBuffer$(core.double) {
    get [_defaultValue]() {
      return 0.0;
    }
  };
  (typed_buffers._FloatBuffer.new = function(buffer) {
    typed_buffers._FloatBuffer.__proto__.new.call(this, buffer);
  }).prototype = typed_buffers._FloatBuffer.prototype;
  dart.addTypeTests(typed_buffers._FloatBuffer);
  dart.setGetterSignature(typed_buffers._FloatBuffer, () => ({
    __proto__: dart.getGetters(typed_buffers._FloatBuffer.__proto__),
    [_defaultValue]: core.double
  }));
  dart.setLibraryUri(typed_buffers._FloatBuffer, "package:typed_data/typed_buffers.dart");
  typed_buffers.Uint8Buffer = class Uint8Buffer extends typed_buffers._IntBuffer {
    [_createBuffer](size) {
      return typed_data.Uint8List.new(size);
    }
  };
  (typed_buffers.Uint8Buffer.new = function(initialLength) {
    if (initialLength === void 0) initialLength = 0;
    typed_buffers.Uint8Buffer.__proto__.new.call(this, typed_data.Uint8List.new(initialLength));
  }).prototype = typed_buffers.Uint8Buffer.prototype;
  dart.addTypeTests(typed_buffers.Uint8Buffer);
  dart.setMethodSignature(typed_buffers.Uint8Buffer, () => ({
    __proto__: dart.getMethods(typed_buffers.Uint8Buffer.__proto__),
    [_createBuffer]: dart.fnType(typed_data.Uint8List, [core.int])
  }));
  dart.setLibraryUri(typed_buffers.Uint8Buffer, "package:typed_data/typed_buffers.dart");
  typed_buffers.Int8Buffer = class Int8Buffer extends typed_buffers._IntBuffer {
    [_createBuffer](size) {
      return typed_data.Int8List.new(size);
    }
  };
  (typed_buffers.Int8Buffer.new = function(initialLength) {
    if (initialLength === void 0) initialLength = 0;
    typed_buffers.Int8Buffer.__proto__.new.call(this, typed_data.Int8List.new(initialLength));
  }).prototype = typed_buffers.Int8Buffer.prototype;
  dart.addTypeTests(typed_buffers.Int8Buffer);
  dart.setMethodSignature(typed_buffers.Int8Buffer, () => ({
    __proto__: dart.getMethods(typed_buffers.Int8Buffer.__proto__),
    [_createBuffer]: dart.fnType(typed_data.Int8List, [core.int])
  }));
  dart.setLibraryUri(typed_buffers.Int8Buffer, "package:typed_data/typed_buffers.dart");
  typed_buffers.Uint8ClampedBuffer = class Uint8ClampedBuffer extends typed_buffers._IntBuffer {
    [_createBuffer](size) {
      return typed_data.Uint8ClampedList.new(size);
    }
  };
  (typed_buffers.Uint8ClampedBuffer.new = function(initialLength) {
    if (initialLength === void 0) initialLength = 0;
    typed_buffers.Uint8ClampedBuffer.__proto__.new.call(this, typed_data.Uint8ClampedList.new(initialLength));
  }).prototype = typed_buffers.Uint8ClampedBuffer.prototype;
  dart.addTypeTests(typed_buffers.Uint8ClampedBuffer);
  dart.setMethodSignature(typed_buffers.Uint8ClampedBuffer, () => ({
    __proto__: dart.getMethods(typed_buffers.Uint8ClampedBuffer.__proto__),
    [_createBuffer]: dart.fnType(typed_data.Uint8ClampedList, [core.int])
  }));
  dart.setLibraryUri(typed_buffers.Uint8ClampedBuffer, "package:typed_data/typed_buffers.dart");
  typed_buffers.Uint16Buffer = class Uint16Buffer extends typed_buffers._IntBuffer {
    [_createBuffer](size) {
      return typed_data.Uint16List.new(size);
    }
  };
  (typed_buffers.Uint16Buffer.new = function(initialLength) {
    if (initialLength === void 0) initialLength = 0;
    typed_buffers.Uint16Buffer.__proto__.new.call(this, typed_data.Uint16List.new(initialLength));
  }).prototype = typed_buffers.Uint16Buffer.prototype;
  dart.addTypeTests(typed_buffers.Uint16Buffer);
  dart.setMethodSignature(typed_buffers.Uint16Buffer, () => ({
    __proto__: dart.getMethods(typed_buffers.Uint16Buffer.__proto__),
    [_createBuffer]: dart.fnType(typed_data.Uint16List, [core.int])
  }));
  dart.setLibraryUri(typed_buffers.Uint16Buffer, "package:typed_data/typed_buffers.dart");
  typed_buffers.Int16Buffer = class Int16Buffer extends typed_buffers._IntBuffer {
    [_createBuffer](size) {
      return typed_data.Int16List.new(size);
    }
  };
  (typed_buffers.Int16Buffer.new = function(initialLength) {
    if (initialLength === void 0) initialLength = 0;
    typed_buffers.Int16Buffer.__proto__.new.call(this, typed_data.Int16List.new(initialLength));
  }).prototype = typed_buffers.Int16Buffer.prototype;
  dart.addTypeTests(typed_buffers.Int16Buffer);
  dart.setMethodSignature(typed_buffers.Int16Buffer, () => ({
    __proto__: dart.getMethods(typed_buffers.Int16Buffer.__proto__),
    [_createBuffer]: dart.fnType(typed_data.Int16List, [core.int])
  }));
  dart.setLibraryUri(typed_buffers.Int16Buffer, "package:typed_data/typed_buffers.dart");
  typed_buffers.Uint32Buffer = class Uint32Buffer extends typed_buffers._IntBuffer {
    [_createBuffer](size) {
      return typed_data.Uint32List.new(size);
    }
  };
  (typed_buffers.Uint32Buffer.new = function(initialLength) {
    if (initialLength === void 0) initialLength = 0;
    typed_buffers.Uint32Buffer.__proto__.new.call(this, typed_data.Uint32List.new(initialLength));
  }).prototype = typed_buffers.Uint32Buffer.prototype;
  dart.addTypeTests(typed_buffers.Uint32Buffer);
  dart.setMethodSignature(typed_buffers.Uint32Buffer, () => ({
    __proto__: dart.getMethods(typed_buffers.Uint32Buffer.__proto__),
    [_createBuffer]: dart.fnType(typed_data.Uint32List, [core.int])
  }));
  dart.setLibraryUri(typed_buffers.Uint32Buffer, "package:typed_data/typed_buffers.dart");
  typed_buffers.Int32Buffer = class Int32Buffer extends typed_buffers._IntBuffer {
    [_createBuffer](size) {
      return typed_data.Int32List.new(size);
    }
  };
  (typed_buffers.Int32Buffer.new = function(initialLength) {
    if (initialLength === void 0) initialLength = 0;
    typed_buffers.Int32Buffer.__proto__.new.call(this, typed_data.Int32List.new(initialLength));
  }).prototype = typed_buffers.Int32Buffer.prototype;
  dart.addTypeTests(typed_buffers.Int32Buffer);
  dart.setMethodSignature(typed_buffers.Int32Buffer, () => ({
    __proto__: dart.getMethods(typed_buffers.Int32Buffer.__proto__),
    [_createBuffer]: dart.fnType(typed_data.Int32List, [core.int])
  }));
  dart.setLibraryUri(typed_buffers.Int32Buffer, "package:typed_data/typed_buffers.dart");
  typed_buffers.Uint64Buffer = class Uint64Buffer extends typed_buffers._IntBuffer {
    [_createBuffer](size) {
      return typed_data.Uint64List.new(size);
    }
  };
  (typed_buffers.Uint64Buffer.new = function(initialLength) {
    if (initialLength === void 0) initialLength = 0;
    typed_buffers.Uint64Buffer.__proto__.new.call(this, typed_data.Uint64List.new(initialLength));
  }).prototype = typed_buffers.Uint64Buffer.prototype;
  dart.addTypeTests(typed_buffers.Uint64Buffer);
  dart.setMethodSignature(typed_buffers.Uint64Buffer, () => ({
    __proto__: dart.getMethods(typed_buffers.Uint64Buffer.__proto__),
    [_createBuffer]: dart.fnType(typed_data.Uint64List, [core.int])
  }));
  dart.setLibraryUri(typed_buffers.Uint64Buffer, "package:typed_data/typed_buffers.dart");
  typed_buffers.Int64Buffer = class Int64Buffer extends typed_buffers._IntBuffer {
    [_createBuffer](size) {
      return typed_data.Int64List.new(size);
    }
  };
  (typed_buffers.Int64Buffer.new = function(initialLength) {
    if (initialLength === void 0) initialLength = 0;
    typed_buffers.Int64Buffer.__proto__.new.call(this, typed_data.Int64List.new(initialLength));
  }).prototype = typed_buffers.Int64Buffer.prototype;
  dart.addTypeTests(typed_buffers.Int64Buffer);
  dart.setMethodSignature(typed_buffers.Int64Buffer, () => ({
    __proto__: dart.getMethods(typed_buffers.Int64Buffer.__proto__),
    [_createBuffer]: dart.fnType(typed_data.Int64List, [core.int])
  }));
  dart.setLibraryUri(typed_buffers.Int64Buffer, "package:typed_data/typed_buffers.dart");
  typed_buffers.Float32Buffer = class Float32Buffer extends typed_buffers._FloatBuffer {
    [_createBuffer](size) {
      return typed_data.Float32List.new(size);
    }
  };
  (typed_buffers.Float32Buffer.new = function(initialLength) {
    if (initialLength === void 0) initialLength = 0;
    typed_buffers.Float32Buffer.__proto__.new.call(this, typed_data.Float32List.new(initialLength));
  }).prototype = typed_buffers.Float32Buffer.prototype;
  dart.addTypeTests(typed_buffers.Float32Buffer);
  dart.setMethodSignature(typed_buffers.Float32Buffer, () => ({
    __proto__: dart.getMethods(typed_buffers.Float32Buffer.__proto__),
    [_createBuffer]: dart.fnType(typed_data.Float32List, [core.int])
  }));
  dart.setLibraryUri(typed_buffers.Float32Buffer, "package:typed_data/typed_buffers.dart");
  typed_buffers.Float64Buffer = class Float64Buffer extends typed_buffers._FloatBuffer {
    [_createBuffer](size) {
      return typed_data.Float64List.new(size);
    }
  };
  (typed_buffers.Float64Buffer.new = function(initialLength) {
    if (initialLength === void 0) initialLength = 0;
    typed_buffers.Float64Buffer.__proto__.new.call(this, typed_data.Float64List.new(initialLength));
  }).prototype = typed_buffers.Float64Buffer.prototype;
  dart.addTypeTests(typed_buffers.Float64Buffer);
  dart.setMethodSignature(typed_buffers.Float64Buffer, () => ({
    __proto__: dart.getMethods(typed_buffers.Float64Buffer.__proto__),
    [_createBuffer]: dart.fnType(typed_data.Float64List, [core.int])
  }));
  dart.setLibraryUri(typed_buffers.Float64Buffer, "package:typed_data/typed_buffers.dart");
  typed_buffers.Int32x4Buffer = class Int32x4Buffer extends typed_buffers._TypedDataBuffer$(typed_data.Int32x4) {
    get [_defaultValue]() {
      return typed_buffers.Int32x4Buffer._zero;
    }
    [_createBuffer](size) {
      return typed_data.Int32x4List.new(size);
    }
  };
  (typed_buffers.Int32x4Buffer.new = function(initialLength) {
    if (initialLength === void 0) initialLength = 0;
    typed_buffers.Int32x4Buffer.__proto__.new.call(this, typed_data.Int32x4List.new(initialLength));
  }).prototype = typed_buffers.Int32x4Buffer.prototype;
  dart.addTypeTests(typed_buffers.Int32x4Buffer);
  dart.setMethodSignature(typed_buffers.Int32x4Buffer, () => ({
    __proto__: dart.getMethods(typed_buffers.Int32x4Buffer.__proto__),
    [_createBuffer]: dart.fnType(typed_data.Int32x4List, [core.int])
  }));
  dart.setGetterSignature(typed_buffers.Int32x4Buffer, () => ({
    __proto__: dart.getGetters(typed_buffers.Int32x4Buffer.__proto__),
    [_defaultValue]: typed_data.Int32x4
  }));
  dart.setLibraryUri(typed_buffers.Int32x4Buffer, "package:typed_data/typed_buffers.dart");
  dart.defineLazy(typed_buffers.Int32x4Buffer, {
    /*typed_buffers.Int32x4Buffer._zero*/get _zero() {
      return typed_data.Int32x4.new(0, 0, 0, 0);
    },
    set _zero(_) {}
  });
  typed_buffers.Float32x4Buffer = class Float32x4Buffer extends typed_buffers._TypedDataBuffer$(typed_data.Float32x4) {
    get [_defaultValue]() {
      return typed_data.Float32x4.zero();
    }
    [_createBuffer](size) {
      return typed_data.Float32x4List.new(size);
    }
  };
  (typed_buffers.Float32x4Buffer.new = function(initialLength) {
    if (initialLength === void 0) initialLength = 0;
    typed_buffers.Float32x4Buffer.__proto__.new.call(this, typed_data.Float32x4List.new(initialLength));
  }).prototype = typed_buffers.Float32x4Buffer.prototype;
  dart.addTypeTests(typed_buffers.Float32x4Buffer);
  dart.setMethodSignature(typed_buffers.Float32x4Buffer, () => ({
    __proto__: dart.getMethods(typed_buffers.Float32x4Buffer.__proto__),
    [_createBuffer]: dart.fnType(typed_data.Float32x4List, [core.int])
  }));
  dart.setGetterSignature(typed_buffers.Float32x4Buffer, () => ({
    __proto__: dart.getGetters(typed_buffers.Float32x4Buffer.__proto__),
    [_defaultValue]: typed_data.Float32x4
  }));
  dart.setLibraryUri(typed_buffers.Float32x4Buffer, "package:typed_data/typed_buffers.dart");
  dart.trackLibraries("packages/typed_data/typed_buffers.ddc", {
    "package:typed_data/typed_buffers.dart": typed_buffers
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["typed_buffers.dart"],"names":[],"mappings":"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","file":"typed_buffers.ddc.js"}');
  // Exports:
  return {
    typed_buffers: typed_buffers
  };
});

//# sourceMappingURL=typed_buffers.ddc.js.map

/*!
 * chat-ui-react v0.3.0
 * 
 * Copyright (c) 2020 twihike. All rights reserved.
 * This source code is licensed under the MIT license.
 */
/*!
 * @package audio-recorder-polyfill
 * @version 0.4.1
 * @license MIT
 * @author Andrey Sitnik
 * @url https://github.com/ai/audio-recorder-polyfill
 *//*!
 * @package @babel/runtime-corejs3
 * @version 7.15.4
 * @license MIT
 * @author The Babel Team
 * @url https://github.com/babel/babel
 *//*!
 * @package dayjs
 * @version 1.10.7
 * @license MIT
 * @author iamkun
 * @url https://github.com/iamkun/dayjs
 *//*!
 * @package regenerator-runtime
 * @version 0.13.9
 * @license MIT
 * @author Ben Newman
 * @url https://github.com/facebook/regenerator/tree/master/packages/runtime
 *//*!
 * @package core-js-pure
 * @version 3.17.3
 * @license MIT
 * @author undefined
 * @url https://github.com/zloirock/core-js
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@mui/material'), require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', '@mui/material', 'react'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ChatUiReact = {}, global.MaterialUI, global.React));
}(this, (function (exports, material, React) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var check = function (it) {
	  return it && it.Math == Math && it;
	};

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global$k =
	  // eslint-disable-next-line es/no-global-this -- safe
	  check(typeof globalThis == 'object' && globalThis) ||
	  check(typeof window == 'object' && window) ||
	  // eslint-disable-next-line no-restricted-globals -- safe
	  check(typeof self == 'object' && self) ||
	  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
	  // eslint-disable-next-line no-new-func -- fallback
	  (function () { return this; })() || Function('return this')();

	var objectGetOwnPropertyDescriptor = {};

	var fails$f = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	var fails$e = fails$f;

	// Detect IE8's incomplete defineProperty implementation
	var descriptors = !fails$e(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
	});

	var objectPropertyIsEnumerable = {};

	var $propertyIsEnumerable$1 = {}.propertyIsEnumerable;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getOwnPropertyDescriptor$7 = Object.getOwnPropertyDescriptor;

	// Nashorn ~ JDK8 bug
	var NASHORN_BUG = getOwnPropertyDescriptor$7 && !$propertyIsEnumerable$1.call({ 1: 2 }, 1);

	// `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
	objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor$7(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : $propertyIsEnumerable$1;

	var createPropertyDescriptor$6 = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var toString$7 = {}.toString;

	var classofRaw$1 = function (it) {
	  return toString$7.call(it).slice(8, -1);
	};

	var fails$d = fails$f;
	var classof$8 = classofRaw$1;

	var split = ''.split;

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var indexedObject = fails$d(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return !Object('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classof$8(it) == 'String' ? split.call(it, '') : Object(it);
	} : Object;

	// `RequireObjectCoercible` abstract operation
	// https://tc39.es/ecma262/#sec-requireobjectcoercible
	var requireObjectCoercible$4 = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on " + it);
	  return it;
	};

	// toObject with fallback for non-array-like ES3 strings
	var IndexedObject$1 = indexedObject;
	var requireObjectCoercible$3 = requireObjectCoercible$4;

	var toIndexedObject$9 = function (it) {
	  return IndexedObject$1(requireObjectCoercible$3(it));
	};

	var isObject$d = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

	var path$e = {};

	var path$d = path$e;
	var global$j = global$k;

	var aFunction$7 = function (variable) {
	  return typeof variable == 'function' ? variable : undefined;
	};

	var getBuiltIn$9 = function (namespace, method) {
	  return arguments.length < 2 ? aFunction$7(path$d[namespace]) || aFunction$7(global$j[namespace])
	    : path$d[namespace] && path$d[namespace][method] || global$j[namespace] && global$j[namespace][method];
	};

	var getBuiltIn$8 = getBuiltIn$9;

	var engineUserAgent = getBuiltIn$8('navigator', 'userAgent') || '';

	var global$i = global$k;
	var userAgent$3 = engineUserAgent;

	var process$3 = global$i.process;
	var Deno = global$i.Deno;
	var versions = process$3 && process$3.versions || Deno && Deno.version;
	var v8 = versions && versions.v8;
	var match, version;

	if (v8) {
	  match = v8.split('.');
	  version = match[0] < 4 ? 1 : match[0] + match[1];
	} else if (userAgent$3) {
	  match = userAgent$3.match(/Edge\/(\d+)/);
	  if (!match || match[1] >= 74) {
	    match = userAgent$3.match(/Chrome\/(\d+)/);
	    if (match) version = match[1];
	  }
	}

	var engineV8Version = version && +version;

	/* eslint-disable es/no-symbol -- required for testing */

	var V8_VERSION$3 = engineV8Version;
	var fails$c = fails$f;

	// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
	var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$c(function () {
	  var symbol = Symbol();
	  // Chrome 38 Symbol has incorrect toString conversion
	  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
	  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
	    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
	    !Symbol.sham && V8_VERSION$3 && V8_VERSION$3 < 41;
	});

	/* eslint-disable es/no-symbol -- required for testing */

	var NATIVE_SYMBOL$2 = nativeSymbol;

	var useSymbolAsUid = NATIVE_SYMBOL$2
	  && !Symbol.sham
	  && typeof Symbol.iterator == 'symbol';

	var getBuiltIn$7 = getBuiltIn$9;
	var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

	var isSymbol$4 = USE_SYMBOL_AS_UID$1 ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  var $Symbol = getBuiltIn$7('Symbol');
	  return typeof $Symbol == 'function' && Object(it) instanceof $Symbol;
	};

	var isObject$c = isObject$d;

	// `OrdinaryToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-ordinarytoprimitive
	var ordinaryToPrimitive$1 = function (input, pref) {
	  var fn, val;
	  if (pref === 'string' && typeof (fn = input.toString) == 'function' && !isObject$c(val = fn.call(input))) return val;
	  if (typeof (fn = input.valueOf) == 'function' && !isObject$c(val = fn.call(input))) return val;
	  if (pref !== 'string' && typeof (fn = input.toString) == 'function' && !isObject$c(val = fn.call(input))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

	var shared$4 = {exports: {}};

	var isPure = true;

	var global$h = global$k;

	var setGlobal$1 = function (key, value) {
	  try {
	    // eslint-disable-next-line es/no-object-defineproperty -- safe
	    Object.defineProperty(global$h, key, { value: value, configurable: true, writable: true });
	  } catch (error) {
	    global$h[key] = value;
	  } return value;
	};

	var global$g = global$k;
	var setGlobal = setGlobal$1;

	var SHARED = '__core-js_shared__';
	var store$3 = global$g[SHARED] || setGlobal(SHARED, {});

	var sharedStore = store$3;

	var store$2 = sharedStore;

	(shared$4.exports = function (key, value) {
	  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.17.3',
	  mode: 'pure' ,
	  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
	});

	var requireObjectCoercible$2 = requireObjectCoercible$4;

	// `ToObject` abstract operation
	// https://tc39.es/ecma262/#sec-toobject
	var toObject$7 = function (argument) {
	  return Object(requireObjectCoercible$2(argument));
	};

	var toObject$6 = toObject$7;

	var hasOwnProperty = {}.hasOwnProperty;

	var has$9 = Object.hasOwn || function hasOwn(it, key) {
	  return hasOwnProperty.call(toObject$6(it), key);
	};

	var id = 0;
	var postfix = Math.random();

	var uid$3 = function (key) {
	  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
	};

	var global$f = global$k;
	var shared$3 = shared$4.exports;
	var has$8 = has$9;
	var uid$2 = uid$3;
	var NATIVE_SYMBOL$1 = nativeSymbol;
	var USE_SYMBOL_AS_UID = useSymbolAsUid;

	var WellKnownSymbolsStore$1 = shared$3('wks');
	var Symbol$1 = global$f.Symbol;
	var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$2;

	var wellKnownSymbol$l = function (name) {
	  if (!has$8(WellKnownSymbolsStore$1, name) || !(NATIVE_SYMBOL$1 || typeof WellKnownSymbolsStore$1[name] == 'string')) {
	    if (NATIVE_SYMBOL$1 && has$8(Symbol$1, name)) {
	      WellKnownSymbolsStore$1[name] = Symbol$1[name];
	    } else {
	      WellKnownSymbolsStore$1[name] = createWellKnownSymbol('Symbol.' + name);
	    }
	  } return WellKnownSymbolsStore$1[name];
	};

	var isObject$b = isObject$d;
	var isSymbol$3 = isSymbol$4;
	var ordinaryToPrimitive = ordinaryToPrimitive$1;
	var wellKnownSymbol$k = wellKnownSymbol$l;

	var TO_PRIMITIVE$1 = wellKnownSymbol$k('toPrimitive');

	// `ToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-toprimitive
	var toPrimitive$1 = function (input, pref) {
	  if (!isObject$b(input) || isSymbol$3(input)) return input;
	  var exoticToPrim = input[TO_PRIMITIVE$1];
	  var result;
	  if (exoticToPrim !== undefined) {
	    if (pref === undefined) pref = 'default';
	    result = exoticToPrim.call(input, pref);
	    if (!isObject$b(result) || isSymbol$3(result)) return result;
	    throw TypeError("Can't convert object to primitive value");
	  }
	  if (pref === undefined) pref = 'number';
	  return ordinaryToPrimitive(input, pref);
	};

	var toPrimitive = toPrimitive$1;
	var isSymbol$2 = isSymbol$4;

	// `ToPropertyKey` abstract operation
	// https://tc39.es/ecma262/#sec-topropertykey
	var toPropertyKey$4 = function (argument) {
	  var key = toPrimitive(argument, 'string');
	  return isSymbol$2(key) ? key : String(key);
	};

	var global$e = global$k;
	var isObject$a = isObject$d;

	var document$3 = global$e.document;
	// typeof document.createElement is 'object' in old IE
	var EXISTS = isObject$a(document$3) && isObject$a(document$3.createElement);

	var documentCreateElement$1 = function (it) {
	  return EXISTS ? document$3.createElement(it) : {};
	};

	var DESCRIPTORS$a = descriptors;
	var fails$b = fails$f;
	var createElement$1 = documentCreateElement$1;

	// Thank's IE8 for his funny defineProperty
	var ie8DomDefine = !DESCRIPTORS$a && !fails$b(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
	  return Object.defineProperty(createElement$1('div'), 'a', {
	    get: function () { return 7; }
	  }).a != 7;
	});

	var DESCRIPTORS$9 = descriptors;
	var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
	var createPropertyDescriptor$5 = createPropertyDescriptor$6;
	var toIndexedObject$8 = toIndexedObject$9;
	var toPropertyKey$3 = toPropertyKey$4;
	var has$7 = has$9;
	var IE8_DOM_DEFINE$1 = ie8DomDefine;

	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
	objectGetOwnPropertyDescriptor.f = DESCRIPTORS$9 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject$8(O);
	  P = toPropertyKey$3(P);
	  if (IE8_DOM_DEFINE$1) try {
	    return $getOwnPropertyDescriptor$1(O, P);
	  } catch (error) { /* empty */ }
	  if (has$7(O, P)) return createPropertyDescriptor$5(!propertyIsEnumerableModule$1.f.call(O, P), O[P]);
	};

	var fails$a = fails$f;

	var replacement = /#|\.prototype\./;

	var isForced$2 = function (feature, detection) {
	  var value = data[normalize(feature)];
	  return value == POLYFILL ? true
	    : value == NATIVE ? false
	    : typeof detection == 'function' ? fails$a(detection)
	    : !!detection;
	};

	var normalize = isForced$2.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};

	var data = isForced$2.data = {};
	var NATIVE = isForced$2.NATIVE = 'N';
	var POLYFILL = isForced$2.POLYFILL = 'P';

	var isForced_1 = isForced$2;

	var aFunction$6 = function (it) {
	  if (typeof it != 'function') {
	    throw TypeError(String(it) + ' is not a function');
	  } return it;
	};

	var aFunction$5 = aFunction$6;

	// optional / simple context binding
	var functionBindContext = function (fn, that, length) {
	  aFunction$5(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 0: return function () {
	      return fn.call(that);
	    };
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	var objectDefineProperty = {};

	var isObject$9 = isObject$d;

	var anObject$c = function (it) {
	  if (!isObject$9(it)) {
	    throw TypeError(String(it) + ' is not an object');
	  } return it;
	};

	var DESCRIPTORS$8 = descriptors;
	var IE8_DOM_DEFINE = ie8DomDefine;
	var anObject$b = anObject$c;
	var toPropertyKey$2 = toPropertyKey$4;

	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var $defineProperty$1 = Object.defineProperty;

	// `Object.defineProperty` method
	// https://tc39.es/ecma262/#sec-object.defineproperty
	objectDefineProperty.f = DESCRIPTORS$8 ? $defineProperty$1 : function defineProperty(O, P, Attributes) {
	  anObject$b(O);
	  P = toPropertyKey$2(P);
	  anObject$b(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return $defineProperty$1(O, P, Attributes);
	  } catch (error) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var DESCRIPTORS$7 = descriptors;
	var definePropertyModule$4 = objectDefineProperty;
	var createPropertyDescriptor$4 = createPropertyDescriptor$6;

	var createNonEnumerableProperty$9 = DESCRIPTORS$7 ? function (object, key, value) {
	  return definePropertyModule$4.f(object, key, createPropertyDescriptor$4(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var global$d = global$k;
	var getOwnPropertyDescriptor$6 = objectGetOwnPropertyDescriptor.f;
	var isForced$1 = isForced_1;
	var path$c = path$e;
	var bind$5 = functionBindContext;
	var createNonEnumerableProperty$8 = createNonEnumerableProperty$9;
	var has$6 = has$9;

	var wrapConstructor = function (NativeConstructor) {
	  var Wrapper = function (a, b, c) {
	    if (this instanceof NativeConstructor) {
	      switch (arguments.length) {
	        case 0: return new NativeConstructor();
	        case 1: return new NativeConstructor(a);
	        case 2: return new NativeConstructor(a, b);
	      } return new NativeConstructor(a, b, c);
	    } return NativeConstructor.apply(this, arguments);
	  };
	  Wrapper.prototype = NativeConstructor.prototype;
	  return Wrapper;
	};

	/*
	  options.target      - name of the target object
	  options.global      - target is the global object
	  options.stat        - export as static methods of target
	  options.proto       - export as prototype methods of target
	  options.real        - real prototype method for the `pure` version
	  options.forced      - export even if the native feature is available
	  options.bind        - bind methods to the target, required for the `pure` version
	  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
	  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
	  options.sham        - add a flag to not completely full polyfills
	  options.enumerable  - export as enumerable property
	  options.noTargetGet - prevent calling a getter on target
	*/
	var _export = function (options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var PROTO = options.proto;

	  var nativeSource = GLOBAL ? global$d : STATIC ? global$d[TARGET] : (global$d[TARGET] || {}).prototype;

	  var target = GLOBAL ? path$c : path$c[TARGET] || createNonEnumerableProperty$8(path$c, TARGET, {})[TARGET];
	  var targetPrototype = target.prototype;

	  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
	  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

	  for (key in source) {
	    FORCED = isForced$1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
	    // contains in native
	    USE_NATIVE = !FORCED && nativeSource && has$6(nativeSource, key);

	    targetProperty = target[key];

	    if (USE_NATIVE) if (options.noTargetGet) {
	      descriptor = getOwnPropertyDescriptor$6(nativeSource, key);
	      nativeProperty = descriptor && descriptor.value;
	    } else nativeProperty = nativeSource[key];

	    // export native or implementation
	    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

	    if (USE_NATIVE && typeof targetProperty === typeof sourceProperty) continue;

	    // bind timers to global for call from export context
	    if (options.bind && USE_NATIVE) resultProperty = bind$5(sourceProperty, global$d);
	    // wrap global constructors for prevent changs in this version
	    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
	    // make static versions for prototype methods
	    else if (PROTO && typeof sourceProperty == 'function') resultProperty = bind$5(Function.call, sourceProperty);
	    // default case
	    else resultProperty = sourceProperty;

	    // add a flag to not completely full polyfills
	    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
	      createNonEnumerableProperty$8(resultProperty, 'sham', true);
	    }

	    createNonEnumerableProperty$8(target, key, resultProperty);

	    if (PROTO) {
	      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
	      if (!has$6(path$c, VIRTUAL_PROTOTYPE)) {
	        createNonEnumerableProperty$8(path$c, VIRTUAL_PROTOTYPE, {});
	      }
	      // export virtual prototype methods
	      createNonEnumerableProperty$8(path$c[VIRTUAL_PROTOTYPE], key, sourceProperty);
	      // export real prototype methods
	      if (options.real && targetPrototype && !targetPrototype[key]) {
	        createNonEnumerableProperty$8(targetPrototype, key, sourceProperty);
	      }
	    }
	  }
	};

	var shared$2 = shared$4.exports;
	var uid$1 = uid$3;

	var keys$4 = shared$2('keys');

	var sharedKey$4 = function (key) {
	  return keys$4[key] || (keys$4[key] = uid$1(key));
	};

	var fails$9 = fails$f;

	var correctPrototypeGetter = !fails$9(function () {
	  function F() { /* empty */ }
	  F.prototype.constructor = null;
	  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
	  return Object.getPrototypeOf(new F()) !== F.prototype;
	});

	var has$5 = has$9;
	var toObject$5 = toObject$7;
	var sharedKey$3 = sharedKey$4;
	var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

	var IE_PROTO$1 = sharedKey$3('IE_PROTO');
	var ObjectPrototype$1 = Object.prototype;

	// `Object.getPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.getprototypeof
	// eslint-disable-next-line es/no-object-getprototypeof -- safe
	var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
	  O = toObject$5(O);
	  if (has$5(O, IE_PROTO$1)) return O[IE_PROTO$1];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectPrototype$1 : null;
	};

	var isObject$8 = isObject$d;

	var aPossiblePrototype$1 = function (it) {
	  if (!isObject$8(it) && it !== null) {
	    throw TypeError("Can't set " + String(it) + ' as a prototype');
	  } return it;
	};

	/* eslint-disable no-proto -- safe */

	var anObject$a = anObject$c;
	var aPossiblePrototype = aPossiblePrototype$1;

	// `Object.setPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.setprototypeof
	// Works with __proto__ only. Old v8 can't work with null proto objects.
	// eslint-disable-next-line es/no-object-setprototypeof -- safe
	var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
	  var CORRECT_SETTER = false;
	  var test = {};
	  var setter;
	  try {
	    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
	    setter.call(test, []);
	    CORRECT_SETTER = test instanceof Array;
	  } catch (error) { /* empty */ }
	  return function setPrototypeOf(O, proto) {
	    anObject$a(O);
	    aPossiblePrototype(proto);
	    if (CORRECT_SETTER) setter.call(O, proto);
	    else O.__proto__ = proto;
	    return O;
	  };
	}() : undefined);

	var ceil = Math.ceil;
	var floor = Math.floor;

	// `ToInteger` abstract operation
	// https://tc39.es/ecma262/#sec-tointeger
	var toInteger$3 = function (argument) {
	  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
	};

	var toInteger$2 = toInteger$3;

	var min$1 = Math.min;

	// `ToLength` abstract operation
	// https://tc39.es/ecma262/#sec-tolength
	var toLength$6 = function (argument) {
	  return argument > 0 ? min$1(toInteger$2(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};

	var toInteger$1 = toInteger$3;

	var max$1 = Math.max;
	var min = Math.min;

	// Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
	var toAbsoluteIndex$2 = function (index, length) {
	  var integer = toInteger$1(index);
	  return integer < 0 ? max$1(integer + length, 0) : min(integer, length);
	};

	var toIndexedObject$7 = toIndexedObject$9;
	var toLength$5 = toLength$6;
	var toAbsoluteIndex$1 = toAbsoluteIndex$2;

	// `Array.prototype.{ indexOf, includes }` methods implementation
	var createMethod$2 = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject$7($this);
	    var length = toLength$5(O.length);
	    var index = toAbsoluteIndex$1(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare -- NaN check
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare -- NaN check
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) {
	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var arrayIncludes$1 = {
	  // `Array.prototype.includes` method
	  // https://tc39.es/ecma262/#sec-array.prototype.includes
	  includes: createMethod$2(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.es/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod$2(false)
	};

	var hiddenKeys$5 = {};

	var has$4 = has$9;
	var toIndexedObject$6 = toIndexedObject$9;
	var indexOf$5 = arrayIncludes$1.indexOf;
	var hiddenKeys$4 = hiddenKeys$5;

	var objectKeysInternal = function (object, names) {
	  var O = toIndexedObject$6(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) !has$4(hiddenKeys$4, key) && has$4(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has$4(O, key = names[i++])) {
	    ~indexOf$5(result, key) || result.push(key);
	  }
	  return result;
	};

	// IE8- don't enum bug keys
	var enumBugKeys$3 = [
	  'constructor',
	  'hasOwnProperty',
	  'isPrototypeOf',
	  'propertyIsEnumerable',
	  'toLocaleString',
	  'toString',
	  'valueOf'
	];

	var internalObjectKeys$1 = objectKeysInternal;
	var enumBugKeys$2 = enumBugKeys$3;

	// `Object.keys` method
	// https://tc39.es/ecma262/#sec-object.keys
	// eslint-disable-next-line es/no-object-keys -- safe
	var objectKeys$2 = Object.keys || function keys(O) {
	  return internalObjectKeys$1(O, enumBugKeys$2);
	};

	var DESCRIPTORS$6 = descriptors;
	var definePropertyModule$3 = objectDefineProperty;
	var anObject$9 = anObject$c;
	var objectKeys$1 = objectKeys$2;

	// `Object.defineProperties` method
	// https://tc39.es/ecma262/#sec-object.defineproperties
	// eslint-disable-next-line es/no-object-defineproperties -- safe
	var objectDefineProperties = DESCRIPTORS$6 ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject$9(O);
	  var keys = objectKeys$1(Properties);
	  var length = keys.length;
	  var index = 0;
	  var key;
	  while (length > index) definePropertyModule$3.f(O, key = keys[index++], Properties[key]);
	  return O;
	};

	var getBuiltIn$6 = getBuiltIn$9;

	var html$2 = getBuiltIn$6('document', 'documentElement');

	/* global ActiveXObject -- old IE, WSH */

	var anObject$8 = anObject$c;
	var defineProperties$6 = objectDefineProperties;
	var enumBugKeys$1 = enumBugKeys$3;
	var hiddenKeys$3 = hiddenKeys$5;
	var html$1 = html$2;
	var documentCreateElement = documentCreateElement$1;
	var sharedKey$2 = sharedKey$4;

	var GT = '>';
	var LT = '<';
	var PROTOTYPE$1 = 'prototype';
	var SCRIPT = 'script';
	var IE_PROTO = sharedKey$2('IE_PROTO');

	var EmptyConstructor = function () { /* empty */ };

	var scriptTag = function (content) {
	  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
	};

	// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
	var NullProtoObjectViaActiveX = function (activeXDocument) {
	  activeXDocument.write(scriptTag(''));
	  activeXDocument.close();
	  var temp = activeXDocument.parentWindow.Object;
	  activeXDocument = null; // avoid memory leak
	  return temp;
	};

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var NullProtoObjectViaIFrame = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = documentCreateElement('iframe');
	  var JS = 'java' + SCRIPT + ':';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  html$1.appendChild(iframe);
	  // https://github.com/zloirock/core-js/issues/475
	  iframe.src = String(JS);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(scriptTag('document.F=Object'));
	  iframeDocument.close();
	  return iframeDocument.F;
	};

	// Check for document.domain and active x support
	// No need to use active x approach when document.domain is not set
	// see https://github.com/es-shims/es5-shim/issues/150
	// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
	// avoid IE GC bug
	var activeXDocument;
	var NullProtoObject = function () {
	  try {
	    activeXDocument = new ActiveXObject('htmlfile');
	  } catch (error) { /* ignore */ }
	  NullProtoObject = typeof document != 'undefined'
	    ? document.domain && activeXDocument
	      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
	      : NullProtoObjectViaIFrame()
	    : NullProtoObjectViaActiveX(activeXDocument); // WSH
	  var length = enumBugKeys$1.length;
	  while (length--) delete NullProtoObject[PROTOTYPE$1][enumBugKeys$1[length]];
	  return NullProtoObject();
	};

	hiddenKeys$3[IE_PROTO] = true;

	// `Object.create` method
	// https://tc39.es/ecma262/#sec-object.create
	var objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    EmptyConstructor[PROTOTYPE$1] = anObject$8(O);
	    result = new EmptyConstructor();
	    EmptyConstructor[PROTOTYPE$1] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = NullProtoObject();
	  return Properties === undefined ? result : defineProperties$6(result, Properties);
	};

	var iterators = {};

	var wellKnownSymbol$j = wellKnownSymbol$l;
	var Iterators$5 = iterators;

	var ITERATOR$4 = wellKnownSymbol$j('iterator');
	var ArrayPrototype$8 = Array.prototype;

	// check on default Array iterator
	var isArrayIteratorMethod$2 = function (it) {
	  return it !== undefined && (Iterators$5.Array === it || ArrayPrototype$8[ITERATOR$4] === it);
	};

	var wellKnownSymbol$i = wellKnownSymbol$l;

	var TO_STRING_TAG$3 = wellKnownSymbol$i('toStringTag');
	var test = {};

	test[TO_STRING_TAG$3] = 'z';

	var toStringTagSupport = String(test) === '[object z]';

	var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
	var classofRaw = classofRaw$1;
	var wellKnownSymbol$h = wellKnownSymbol$l;

	var TO_STRING_TAG$2 = wellKnownSymbol$h('toStringTag');
	// ES3 wrong here
	var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (error) { /* empty */ }
	};

	// getting tag from ES6+ `Object.prototype.toString`
	var classof$7 = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$2)) == 'string' ? tag
	    // builtinTag case
	    : CORRECT_ARGUMENTS ? classofRaw(O)
	    // ES3 arguments fallback
	    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
	};

	var classof$6 = classof$7;
	var Iterators$4 = iterators;
	var wellKnownSymbol$g = wellKnownSymbol$l;

	var ITERATOR$3 = wellKnownSymbol$g('iterator');

	var getIteratorMethod$7 = function (it) {
	  if (it != undefined) return it[ITERATOR$3]
	    || it['@@iterator']
	    || Iterators$4[classof$6(it)];
	};

	var anObject$7 = anObject$c;
	var getIteratorMethod$6 = getIteratorMethod$7;

	var getIterator$2 = function (it, usingIterator) {
	  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$6(it) : usingIterator;
	  if (typeof iteratorMethod != 'function') {
	    throw TypeError(String(it) + ' is not iterable');
	  } return anObject$7(iteratorMethod.call(it));
	};

	var anObject$6 = anObject$c;

	var iteratorClose$2 = function (iterator, kind, value) {
	  var innerResult, innerError;
	  anObject$6(iterator);
	  try {
	    innerResult = iterator['return'];
	    if (innerResult === undefined) {
	      if (kind === 'throw') throw value;
	      return value;
	    }
	    innerResult = innerResult.call(iterator);
	  } catch (error) {
	    innerError = true;
	    innerResult = error;
	  }
	  if (kind === 'throw') throw value;
	  if (innerError) throw innerResult;
	  anObject$6(innerResult);
	  return value;
	};

	var anObject$5 = anObject$c;
	var isArrayIteratorMethod$1 = isArrayIteratorMethod$2;
	var toLength$4 = toLength$6;
	var bind$4 = functionBindContext;
	var getIterator$1 = getIterator$2;
	var getIteratorMethod$5 = getIteratorMethod$7;
	var iteratorClose$1 = iteratorClose$2;

	var Result = function (stopped, result) {
	  this.stopped = stopped;
	  this.result = result;
	};

	var iterate$4 = function (iterable, unboundFunction, options) {
	  var that = options && options.that;
	  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
	  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
	  var INTERRUPTED = !!(options && options.INTERRUPTED);
	  var fn = bind$4(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
	  var iterator, iterFn, index, length, result, next, step;

	  var stop = function (condition) {
	    if (iterator) iteratorClose$1(iterator, 'normal', condition);
	    return new Result(true, condition);
	  };

	  var callFn = function (value) {
	    if (AS_ENTRIES) {
	      anObject$5(value);
	      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
	    } return INTERRUPTED ? fn(value, stop) : fn(value);
	  };

	  if (IS_ITERATOR) {
	    iterator = iterable;
	  } else {
	    iterFn = getIteratorMethod$5(iterable);
	    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
	    // optimisation for array iterators
	    if (isArrayIteratorMethod$1(iterFn)) {
	      for (index = 0, length = toLength$4(iterable.length); length > index; index++) {
	        result = callFn(iterable[index]);
	        if (result && result instanceof Result) return result;
	      } return new Result(false);
	    }
	    iterator = getIterator$1(iterable, iterFn);
	  }

	  next = iterator.next;
	  while (!(step = next.call(iterator)).done) {
	    try {
	      result = callFn(step.value);
	    } catch (error) {
	      iteratorClose$1(iterator, 'throw', error);
	    }
	    if (typeof result == 'object' && result && result instanceof Result) return result;
	  } return new Result(false);
	};

	var isSymbol$1 = isSymbol$4;

	var toString$6 = function (argument) {
	  if (isSymbol$1(argument)) throw TypeError('Cannot convert a Symbol value to a string');
	  return String(argument);
	};

	var $$n = _export;
	var getPrototypeOf$2 = objectGetPrototypeOf;
	var setPrototypeOf = objectSetPrototypeOf;
	var create$2 = objectCreate;
	var createNonEnumerableProperty$7 = createNonEnumerableProperty$9;
	var createPropertyDescriptor$3 = createPropertyDescriptor$6;
	var iterate$3 = iterate$4;
	var toString$5 = toString$6;

	var $AggregateError = function AggregateError(errors, message) {
	  var that = this;
	  if (!(that instanceof $AggregateError)) return new $AggregateError(errors, message);
	  if (setPrototypeOf) {
	    // eslint-disable-next-line unicorn/error-message -- expected
	    that = setPrototypeOf(new Error(undefined), getPrototypeOf$2(that));
	  }
	  if (message !== undefined) createNonEnumerableProperty$7(that, 'message', toString$5(message));
	  var errorsArray = [];
	  iterate$3(errors, errorsArray.push, { that: errorsArray });
	  createNonEnumerableProperty$7(that, 'errors', errorsArray);
	  return that;
	};

	$AggregateError.prototype = create$2(Error.prototype, {
	  constructor: createPropertyDescriptor$3(5, $AggregateError),
	  message: createPropertyDescriptor$3(5, ''),
	  name: createPropertyDescriptor$3(5, 'AggregateError')
	});

	// `AggregateError` constructor
	// https://tc39.es/ecma262/#sec-aggregate-error-constructor
	$$n({ global: true }, {
	  AggregateError: $AggregateError
	});

	var store$1 = sharedStore;

	var functionToString = Function.toString;

	// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
	if (typeof store$1.inspectSource != 'function') {
	  store$1.inspectSource = function (it) {
	    return functionToString.call(it);
	  };
	}

	var inspectSource$2 = store$1.inspectSource;

	var global$c = global$k;
	var inspectSource$1 = inspectSource$2;

	var WeakMap$1 = global$c.WeakMap;

	var nativeWeakMap = typeof WeakMap$1 === 'function' && /native code/.test(inspectSource$1(WeakMap$1));

	var NATIVE_WEAK_MAP = nativeWeakMap;
	var global$b = global$k;
	var isObject$7 = isObject$d;
	var createNonEnumerableProperty$6 = createNonEnumerableProperty$9;
	var objectHas = has$9;
	var shared$1 = sharedStore;
	var sharedKey$1 = sharedKey$4;
	var hiddenKeys$2 = hiddenKeys$5;

	var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
	var WeakMap = global$b.WeakMap;
	var set$1, get, has$3;

	var enforce = function (it) {
	  return has$3(it) ? get(it) : set$1(it, {});
	};

	var getterFor = function (TYPE) {
	  return function (it) {
	    var state;
	    if (!isObject$7(it) || (state = get(it)).type !== TYPE) {
	      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
	    } return state;
	  };
	};

	if (NATIVE_WEAK_MAP || shared$1.state) {
	  var store = shared$1.state || (shared$1.state = new WeakMap());
	  var wmget = store.get;
	  var wmhas = store.has;
	  var wmset = store.set;
	  set$1 = function (it, metadata) {
	    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    wmset.call(store, it, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return wmget.call(store, it) || {};
	  };
	  has$3 = function (it) {
	    return wmhas.call(store, it);
	  };
	} else {
	  var STATE = sharedKey$1('state');
	  hiddenKeys$2[STATE] = true;
	  set$1 = function (it, metadata) {
	    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    createNonEnumerableProperty$6(it, STATE, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return objectHas(it, STATE) ? it[STATE] : {};
	  };
	  has$3 = function (it) {
	    return objectHas(it, STATE);
	  };
	}

	var internalState = {
	  set: set$1,
	  get: get,
	  has: has$3,
	  enforce: enforce,
	  getterFor: getterFor
	};

	var fails$8 = fails$f;
	var create$1 = objectCreate;
	var getPrototypeOf$1 = objectGetPrototypeOf;
	var createNonEnumerableProperty$5 = createNonEnumerableProperty$9;
	var wellKnownSymbol$f = wellKnownSymbol$l;

	var ITERATOR$2 = wellKnownSymbol$f('iterator');
	var BUGGY_SAFARI_ITERATORS$1 = false;

	// `%IteratorPrototype%` object
	// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
	var IteratorPrototype$1, PrototypeOfArrayIteratorPrototype, arrayIterator;

	/* eslint-disable es/no-array-prototype-keys -- safe */
	if ([].keys) {
	  arrayIterator = [].keys();
	  // Safari 8 has buggy iterators w/o `next`
	  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
	  else {
	    PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
	    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$1 = PrototypeOfArrayIteratorPrototype;
	  }
	}

	var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$1 == undefined || fails$8(function () {
	  var test = {};
	  // FF44- legacy iterators case
	  return IteratorPrototype$1[ITERATOR$2].call(test) !== test;
	});

	if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$1 = {};
	else IteratorPrototype$1 = create$1(IteratorPrototype$1);

	// `%IteratorPrototype%[@@iterator]()` method
	// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
	if (typeof IteratorPrototype$1[ITERATOR$2] !== 'function') {
	  createNonEnumerableProperty$5(IteratorPrototype$1, ITERATOR$2, function () {
	    return this;
	  });
	}

	var iteratorsCore = {
	  IteratorPrototype: IteratorPrototype$1,
	  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
	};

	var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
	var classof$5 = classof$7;

	// `Object.prototype.toString` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.tostring
	var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
	  return '[object ' + classof$5(this) + ']';
	};

	var TO_STRING_TAG_SUPPORT = toStringTagSupport;
	var defineProperty$6 = objectDefineProperty.f;
	var createNonEnumerableProperty$4 = createNonEnumerableProperty$9;
	var has$2 = has$9;
	var toString$4 = objectToString;
	var wellKnownSymbol$e = wellKnownSymbol$l;

	var TO_STRING_TAG$1 = wellKnownSymbol$e('toStringTag');

	var setToStringTag$5 = function (it, TAG, STATIC, SET_METHOD) {
	  if (it) {
	    var target = STATIC ? it : it.prototype;
	    if (!has$2(target, TO_STRING_TAG$1)) {
	      defineProperty$6(target, TO_STRING_TAG$1, { configurable: true, value: TAG });
	    }
	    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
	      createNonEnumerableProperty$4(target, 'toString', toString$4);
	    }
	  }
	};

	var IteratorPrototype = iteratorsCore.IteratorPrototype;
	var create = objectCreate;
	var createPropertyDescriptor$2 = createPropertyDescriptor$6;
	var setToStringTag$4 = setToStringTag$5;
	var Iterators$3 = iterators;

	var returnThis$1 = function () { return this; };

	var createIteratorConstructor$1 = function (IteratorConstructor, NAME, next) {
	  var TO_STRING_TAG = NAME + ' Iterator';
	  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor$2(1, next) });
	  setToStringTag$4(IteratorConstructor, TO_STRING_TAG, false, true);
	  Iterators$3[TO_STRING_TAG] = returnThis$1;
	  return IteratorConstructor;
	};

	var createNonEnumerableProperty$3 = createNonEnumerableProperty$9;

	var redefine$3 = function (target, key, value, options) {
	  if (options && options.enumerable) target[key] = value;
	  else createNonEnumerableProperty$3(target, key, value);
	};

	var $$m = _export;
	var createIteratorConstructor = createIteratorConstructor$1;
	var getPrototypeOf = objectGetPrototypeOf;
	var setToStringTag$3 = setToStringTag$5;
	var createNonEnumerableProperty$2 = createNonEnumerableProperty$9;
	var redefine$2 = redefine$3;
	var wellKnownSymbol$d = wellKnownSymbol$l;
	var Iterators$2 = iterators;
	var IteratorsCore = iteratorsCore;
	var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
	var ITERATOR$1 = wellKnownSymbol$d('iterator');
	var KEYS = 'keys';
	var VALUES = 'values';
	var ENTRIES = 'entries';

	var returnThis = function () { return this; };

	var defineIterator$2 = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
	  createIteratorConstructor(IteratorConstructor, NAME, next);

	  var getIterationMethod = function (KIND) {
	    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
	    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
	    switch (KIND) {
	      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
	      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
	      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
	    } return function () { return new IteratorConstructor(this); };
	  };

	  var TO_STRING_TAG = NAME + ' Iterator';
	  var INCORRECT_VALUES_NAME = false;
	  var IterablePrototype = Iterable.prototype;
	  var nativeIterator = IterablePrototype[ITERATOR$1]
	    || IterablePrototype['@@iterator']
	    || DEFAULT && IterablePrototype[DEFAULT];
	  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
	  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
	  var CurrentIteratorPrototype, methods, KEY;

	  // fix native
	  if (anyNativeIterator) {
	    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
	    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag$3(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
	      Iterators$2[TO_STRING_TAG] = returnThis;
	    }
	  }

	  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
	  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
	    INCORRECT_VALUES_NAME = true;
	    defaultIterator = function values() { return nativeIterator.call(this); };
	  }

	  // define iterator
	  if ((FORCED) && IterablePrototype[ITERATOR$1] !== defaultIterator) {
	    createNonEnumerableProperty$2(IterablePrototype, ITERATOR$1, defaultIterator);
	  }
	  Iterators$2[NAME] = defaultIterator;

	  // export additional methods
	  if (DEFAULT) {
	    methods = {
	      values: getIterationMethod(VALUES),
	      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
	      entries: getIterationMethod(ENTRIES)
	    };
	    if (FORCED) for (KEY in methods) {
	      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
	        redefine$2(IterablePrototype, KEY, methods[KEY]);
	      }
	    } else $$m({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
	  }

	  return methods;
	};

	var toIndexedObject$5 = toIndexedObject$9;
	var Iterators$1 = iterators;
	var InternalStateModule$3 = internalState;
	var defineIterator$1 = defineIterator$2;

	var ARRAY_ITERATOR = 'Array Iterator';
	var setInternalState$3 = InternalStateModule$3.set;
	var getInternalState$3 = InternalStateModule$3.getterFor(ARRAY_ITERATOR);

	// `Array.prototype.entries` method
	// https://tc39.es/ecma262/#sec-array.prototype.entries
	// `Array.prototype.keys` method
	// https://tc39.es/ecma262/#sec-array.prototype.keys
	// `Array.prototype.values` method
	// https://tc39.es/ecma262/#sec-array.prototype.values
	// `Array.prototype[@@iterator]` method
	// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
	// `CreateArrayIterator` internal method
	// https://tc39.es/ecma262/#sec-createarrayiterator
	defineIterator$1(Array, 'Array', function (iterated, kind) {
	  setInternalState$3(this, {
	    type: ARRAY_ITERATOR,
	    target: toIndexedObject$5(iterated), // target
	    index: 0,                          // next index
	    kind: kind                         // kind
	  });
	// `%ArrayIteratorPrototype%.next` method
	// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
	}, function () {
	  var state = getInternalState$3(this);
	  var target = state.target;
	  var kind = state.kind;
	  var index = state.index++;
	  if (!target || index >= target.length) {
	    state.target = undefined;
	    return { value: undefined, done: true };
	  }
	  if (kind == 'keys') return { value: index, done: false };
	  if (kind == 'values') return { value: target[index], done: false };
	  return { value: [index, target[index]], done: false };
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values%
	// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
	// https://tc39.es/ecma262/#sec-createmappedargumentsobject
	Iterators$1.Arguments = Iterators$1.Array;

	var global$a = global$k;

	var nativePromiseConstructor = global$a.Promise;

	var redefine$1 = redefine$3;

	var redefineAll$1 = function (target, src, options) {
	  for (var key in src) {
	    if (options && options.unsafe && target[key]) target[key] = src[key];
	    else redefine$1(target, key, src[key], options);
	  } return target;
	};

	var getBuiltIn$5 = getBuiltIn$9;
	var definePropertyModule$2 = objectDefineProperty;
	var wellKnownSymbol$c = wellKnownSymbol$l;
	var DESCRIPTORS$5 = descriptors;

	var SPECIES$5 = wellKnownSymbol$c('species');

	var setSpecies$1 = function (CONSTRUCTOR_NAME) {
	  var Constructor = getBuiltIn$5(CONSTRUCTOR_NAME);
	  var defineProperty = definePropertyModule$2.f;

	  if (DESCRIPTORS$5 && Constructor && !Constructor[SPECIES$5]) {
	    defineProperty(Constructor, SPECIES$5, {
	      configurable: true,
	      get: function () { return this; }
	    });
	  }
	};

	var anInstance$1 = function (it, Constructor, name) {
	  if (!(it instanceof Constructor)) {
	    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
	  } return it;
	};

	var wellKnownSymbol$b = wellKnownSymbol$l;

	var ITERATOR = wellKnownSymbol$b('iterator');
	var SAFE_CLOSING = false;

	try {
	  var called = 0;
	  var iteratorWithReturn = {
	    next: function () {
	      return { done: !!called++ };
	    },
	    'return': function () {
	      SAFE_CLOSING = true;
	    }
	  };
	  iteratorWithReturn[ITERATOR] = function () {
	    return this;
	  };
	  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
	  Array.from(iteratorWithReturn, function () { throw 2; });
	} catch (error) { /* empty */ }

	var checkCorrectnessOfIteration$2 = function (exec, SKIP_CLOSING) {
	  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
	  var ITERATION_SUPPORT = false;
	  try {
	    var object = {};
	    object[ITERATOR] = function () {
	      return {
	        next: function () {
	          return { done: ITERATION_SUPPORT = true };
	        }
	      };
	    };
	    exec(object);
	  } catch (error) { /* empty */ }
	  return ITERATION_SUPPORT;
	};

	var anObject$4 = anObject$c;
	var aFunction$4 = aFunction$6;
	var wellKnownSymbol$a = wellKnownSymbol$l;

	var SPECIES$4 = wellKnownSymbol$a('species');

	// `SpeciesConstructor` abstract operation
	// https://tc39.es/ecma262/#sec-speciesconstructor
	var speciesConstructor$2 = function (O, defaultConstructor) {
	  var C = anObject$4(O).constructor;
	  var S;
	  return C === undefined || (S = anObject$4(C)[SPECIES$4]) == undefined ? defaultConstructor : aFunction$4(S);
	};

	var userAgent$2 = engineUserAgent;

	var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$2);

	var classof$4 = classofRaw$1;
	var global$9 = global$k;

	var engineIsNode = classof$4(global$9.process) == 'process';

	var global$8 = global$k;
	var fails$7 = fails$f;
	var bind$3 = functionBindContext;
	var html = html$2;
	var createElement = documentCreateElement$1;
	var IS_IOS$1 = engineIsIos;
	var IS_NODE$2 = engineIsNode;

	var set = global$8.setImmediate;
	var clear = global$8.clearImmediate;
	var process$2 = global$8.process;
	var MessageChannel = global$8.MessageChannel;
	var Dispatch = global$8.Dispatch;
	var counter = 0;
	var queue = {};
	var ONREADYSTATECHANGE = 'onreadystatechange';
	var location, defer, channel, port;

	try {
	  // Deno throws a ReferenceError on `location` access without `--location` flag
	  location = global$8.location;
	} catch (error) { /* empty */ }

	var run = function (id) {
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};

	var runner = function (id) {
	  return function () {
	    run(id);
	  };
	};

	var listener = function (event) {
	  run(event.data);
	};

	var post = function (id) {
	  // old engines have not location.origin
	  global$8.postMessage(String(id), location.protocol + '//' + location.host);
	};

	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!set || !clear) {
	  set = function setImmediate(fn) {
	    var args = [];
	    var argumentsLength = arguments.length;
	    var i = 1;
	    while (argumentsLength > i) args.push(arguments[i++]);
	    queue[++counter] = function () {
	      // eslint-disable-next-line no-new-func -- spec requirement
	      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clear = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (IS_NODE$2) {
	    defer = function (id) {
	      process$2.nextTick(runner(id));
	    };
	  // Sphere (JS game engine) Dispatch API
	  } else if (Dispatch && Dispatch.now) {
	    defer = function (id) {
	      Dispatch.now(runner(id));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  // except iOS - https://github.com/zloirock/core-js/issues/624
	  } else if (MessageChannel && !IS_IOS$1) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = bind$3(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (
	    global$8.addEventListener &&
	    typeof postMessage == 'function' &&
	    !global$8.importScripts &&
	    location && location.protocol !== 'file:' &&
	    !fails$7(post)
	  ) {
	    defer = post;
	    global$8.addEventListener('message', listener, false);
	  // IE8-
	  } else if (ONREADYSTATECHANGE in createElement('script')) {
	    defer = function (id) {
	      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function (id) {
	      setTimeout(runner(id), 0);
	    };
	  }
	}

	var task$1 = {
	  set: set,
	  clear: clear
	};

	var userAgent$1 = engineUserAgent;
	var global$7 = global$k;

	var engineIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$1) && global$7.Pebble !== undefined;

	var userAgent = engineUserAgent;

	var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent);

	var global$6 = global$k;
	var getOwnPropertyDescriptor$5 = objectGetOwnPropertyDescriptor.f;
	var macrotask = task$1.set;
	var IS_IOS = engineIsIos;
	var IS_IOS_PEBBLE = engineIsIosPebble;
	var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
	var IS_NODE$1 = engineIsNode;

	var MutationObserver = global$6.MutationObserver || global$6.WebKitMutationObserver;
	var document$2 = global$6.document;
	var process$1 = global$6.process;
	var Promise$1 = global$6.Promise;
	// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
	var queueMicrotaskDescriptor = getOwnPropertyDescriptor$5(global$6, 'queueMicrotask');
	var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

	var flush, head, last, notify$1, toggle, node, promise$4, then;

	// modern engines have queueMicrotask method
	if (!queueMicrotask) {
	  flush = function () {
	    var parent, fn;
	    if (IS_NODE$1 && (parent = process$1.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (error) {
	        if (head) notify$1();
	        else last = undefined;
	        throw error;
	      }
	    } last = undefined;
	    if (parent) parent.enter();
	  };

	  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
	  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
	  if (!IS_IOS && !IS_NODE$1 && !IS_WEBOS_WEBKIT && MutationObserver && document$2) {
	    toggle = true;
	    node = document$2.createTextNode('');
	    new MutationObserver(flush).observe(node, { characterData: true });
	    notify$1 = function () {
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if (!IS_IOS_PEBBLE && Promise$1 && Promise$1.resolve) {
	    // Promise.resolve without an argument throws an error in LG WebOS 2
	    promise$4 = Promise$1.resolve(undefined);
	    // workaround of WebKit ~ iOS Safari 10.1 bug
	    promise$4.constructor = Promise$1;
	    then = promise$4.then;
	    notify$1 = function () {
	      then.call(promise$4, flush);
	    };
	  // Node.js without promises
	  } else if (IS_NODE$1) {
	    notify$1 = function () {
	      process$1.nextTick(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify$1 = function () {
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global$6, flush);
	    };
	  }
	}

	var microtask$1 = queueMicrotask || function (fn) {
	  var task = { fn: fn, next: undefined };
	  if (last) last.next = task;
	  if (!head) {
	    head = task;
	    notify$1();
	  } last = task;
	};

	var newPromiseCapability$2 = {};

	var aFunction$3 = aFunction$6;

	var PromiseCapability = function (C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aFunction$3(resolve);
	  this.reject = aFunction$3(reject);
	};

	// `NewPromiseCapability` abstract operation
	// https://tc39.es/ecma262/#sec-newpromisecapability
	newPromiseCapability$2.f = function (C) {
	  return new PromiseCapability(C);
	};

	var anObject$3 = anObject$c;
	var isObject$6 = isObject$d;
	var newPromiseCapability$1 = newPromiseCapability$2;

	var promiseResolve$2 = function (C, x) {
	  anObject$3(C);
	  if (isObject$6(x) && x.constructor === C) return x;
	  var promiseCapability = newPromiseCapability$1.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};

	var global$5 = global$k;

	var hostReportErrors$1 = function (a, b) {
	  var console = global$5.console;
	  if (console && console.error) {
	    arguments.length === 1 ? console.error(a) : console.error(a, b);
	  }
	};

	var perform$4 = function (exec) {
	  try {
	    return { error: false, value: exec() };
	  } catch (error) {
	    return { error: true, value: error };
	  }
	};

	var engineIsBrowser = typeof window == 'object';

	var $$l = _export;
	var IS_PURE = isPure;
	var global$4 = global$k;
	var getBuiltIn$4 = getBuiltIn$9;
	var NativePromise$1 = nativePromiseConstructor;
	var redefineAll = redefineAll$1;
	var setToStringTag$2 = setToStringTag$5;
	var setSpecies = setSpecies$1;
	var isObject$5 = isObject$d;
	var aFunction$2 = aFunction$6;
	var anInstance = anInstance$1;
	var inspectSource = inspectSource$2;
	var iterate$2 = iterate$4;
	var checkCorrectnessOfIteration$1 = checkCorrectnessOfIteration$2;
	var speciesConstructor$1 = speciesConstructor$2;
	var task = task$1.set;
	var microtask = microtask$1;
	var promiseResolve$1 = promiseResolve$2;
	var hostReportErrors = hostReportErrors$1;
	var newPromiseCapabilityModule$3 = newPromiseCapability$2;
	var perform$3 = perform$4;
	var InternalStateModule$2 = internalState;
	var isForced = isForced_1;
	var wellKnownSymbol$9 = wellKnownSymbol$l;
	var IS_BROWSER = engineIsBrowser;
	var IS_NODE = engineIsNode;
	var V8_VERSION$2 = engineV8Version;

	var SPECIES$3 = wellKnownSymbol$9('species');
	var PROMISE = 'Promise';
	var getInternalState$2 = InternalStateModule$2.get;
	var setInternalState$2 = InternalStateModule$2.set;
	var getInternalPromiseState = InternalStateModule$2.getterFor(PROMISE);
	var NativePromisePrototype = NativePromise$1 && NativePromise$1.prototype;
	var PromiseConstructor = NativePromise$1;
	var PromiseConstructorPrototype = NativePromisePrototype;
	var TypeError$1 = global$4.TypeError;
	var document$1 = global$4.document;
	var process = global$4.process;
	var newPromiseCapability = newPromiseCapabilityModule$3.f;
	var newGenericPromiseCapability = newPromiseCapability;
	var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$4.dispatchEvent);
	var NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';
	var UNHANDLED_REJECTION = 'unhandledrejection';
	var REJECTION_HANDLED = 'rejectionhandled';
	var PENDING = 0;
	var FULFILLED = 1;
	var REJECTED = 2;
	var HANDLED = 1;
	var UNHANDLED = 2;
	var SUBCLASSING = false;
	var Internal, OwnPromiseCapability, PromiseWrapper;

	var FORCED$2 = isForced(PROMISE, function () {
	  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(PromiseConstructor);
	  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(PromiseConstructor);
	  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
	  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
	  // We can't detect it synchronously, so just check versions
	  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION$2 === 66) return true;
	  // We need Promise#finally in the pure version for preventing prototype pollution
	  if (!PromiseConstructorPrototype['finally']) return true;
	  // We can't use @@species feature detection in V8 since it causes
	  // deoptimization and performance degradation
	  // https://github.com/zloirock/core-js/issues/679
	  if (V8_VERSION$2 >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) return false;
	  // Detect correctness of subclassing with @@species support
	  var promise = new PromiseConstructor(function (resolve) { resolve(1); });
	  var FakePromise = function (exec) {
	    exec(function () { /* empty */ }, function () { /* empty */ });
	  };
	  var constructor = promise.constructor = {};
	  constructor[SPECIES$3] = FakePromise;
	  SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
	  if (!SUBCLASSING) return true;
	  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	  return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER && !NATIVE_REJECTION_EVENT;
	});

	var INCORRECT_ITERATION$1 = FORCED$2 || !checkCorrectnessOfIteration$1(function (iterable) {
	  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
	});

	// helpers
	var isThenable = function (it) {
	  var then;
	  return isObject$5(it) && typeof (then = it.then) == 'function' ? then : false;
	};

	var notify = function (state, isReject) {
	  if (state.notified) return;
	  state.notified = true;
	  var chain = state.reactions;
	  microtask(function () {
	    var value = state.value;
	    var ok = state.state == FULFILLED;
	    var index = 0;
	    // variable length - can't use forEach
	    while (chain.length > index) {
	      var reaction = chain[index++];
	      var handler = ok ? reaction.ok : reaction.fail;
	      var resolve = reaction.resolve;
	      var reject = reaction.reject;
	      var domain = reaction.domain;
	      var result, then, exited;
	      try {
	        if (handler) {
	          if (!ok) {
	            if (state.rejection === UNHANDLED) onHandleUnhandled(state);
	            state.rejection = HANDLED;
	          }
	          if (handler === true) result = value;
	          else {
	            if (domain) domain.enter();
	            result = handler(value); // can throw
	            if (domain) {
	              domain.exit();
	              exited = true;
	            }
	          }
	          if (result === reaction.promise) {
	            reject(TypeError$1('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (error) {
	        if (domain && !exited) domain.exit();
	        reject(error);
	      }
	    }
	    state.reactions = [];
	    state.notified = false;
	    if (isReject && !state.rejection) onUnhandled(state);
	  });
	};

	var dispatchEvent = function (name, promise, reason) {
	  var event, handler;
	  if (DISPATCH_EVENT) {
	    event = document$1.createEvent('Event');
	    event.promise = promise;
	    event.reason = reason;
	    event.initEvent(name, false, true);
	    global$4.dispatchEvent(event);
	  } else event = { promise: promise, reason: reason };
	  if (!NATIVE_REJECTION_EVENT && (handler = global$4['on' + name])) handler(event);
	  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
	};

	var onUnhandled = function (state) {
	  task.call(global$4, function () {
	    var promise = state.facade;
	    var value = state.value;
	    var IS_UNHANDLED = isUnhandled(state);
	    var result;
	    if (IS_UNHANDLED) {
	      result = perform$3(function () {
	        if (IS_NODE) {
	          process.emit('unhandledRejection', value, promise);
	        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
	      if (result.error) throw result.value;
	    }
	  });
	};

	var isUnhandled = function (state) {
	  return state.rejection !== HANDLED && !state.parent;
	};

	var onHandleUnhandled = function (state) {
	  task.call(global$4, function () {
	    var promise = state.facade;
	    if (IS_NODE) {
	      process.emit('rejectionHandled', promise);
	    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
	  });
	};

	var bind$2 = function (fn, state, unwrap) {
	  return function (value) {
	    fn(state, value, unwrap);
	  };
	};

	var internalReject = function (state, value, unwrap) {
	  if (state.done) return;
	  state.done = true;
	  if (unwrap) state = unwrap;
	  state.value = value;
	  state.state = REJECTED;
	  notify(state, true);
	};

	var internalResolve = function (state, value, unwrap) {
	  if (state.done) return;
	  state.done = true;
	  if (unwrap) state = unwrap;
	  try {
	    if (state.facade === value) throw TypeError$1("Promise can't be resolved itself");
	    var then = isThenable(value);
	    if (then) {
	      microtask(function () {
	        var wrapper = { done: false };
	        try {
	          then.call(value,
	            bind$2(internalResolve, wrapper, state),
	            bind$2(internalReject, wrapper, state)
	          );
	        } catch (error) {
	          internalReject(wrapper, error, state);
	        }
	      });
	    } else {
	      state.value = value;
	      state.state = FULFILLED;
	      notify(state, false);
	    }
	  } catch (error) {
	    internalReject({ done: false }, error, state);
	  }
	};

	// constructor polyfill
	if (FORCED$2) {
	  // 25.4.3.1 Promise(executor)
	  PromiseConstructor = function Promise(executor) {
	    anInstance(this, PromiseConstructor, PROMISE);
	    aFunction$2(executor);
	    Internal.call(this);
	    var state = getInternalState$2(this);
	    try {
	      executor(bind$2(internalResolve, state), bind$2(internalReject, state));
	    } catch (error) {
	      internalReject(state, error);
	    }
	  };
	  PromiseConstructorPrototype = PromiseConstructor.prototype;
	  // eslint-disable-next-line no-unused-vars -- required for `.length`
	  Internal = function Promise(executor) {
	    setInternalState$2(this, {
	      type: PROMISE,
	      done: false,
	      notified: false,
	      parent: false,
	      reactions: [],
	      rejection: false,
	      state: PENDING,
	      value: undefined
	    });
	  };
	  Internal.prototype = redefineAll(PromiseConstructorPrototype, {
	    // `Promise.prototype.then` method
	    // https://tc39.es/ecma262/#sec-promise.prototype.then
	    then: function then(onFulfilled, onRejected) {
	      var state = getInternalPromiseState(this);
	      var reaction = newPromiseCapability(speciesConstructor$1(this, PromiseConstructor));
	      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      reaction.domain = IS_NODE ? process.domain : undefined;
	      state.parent = true;
	      state.reactions.push(reaction);
	      if (state.state != PENDING) notify(state, false);
	      return reaction.promise;
	    },
	    // `Promise.prototype.catch` method
	    // https://tc39.es/ecma262/#sec-promise.prototype.catch
	    'catch': function (onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  OwnPromiseCapability = function () {
	    var promise = new Internal();
	    var state = getInternalState$2(promise);
	    this.promise = promise;
	    this.resolve = bind$2(internalResolve, state);
	    this.reject = bind$2(internalReject, state);
	  };
	  newPromiseCapabilityModule$3.f = newPromiseCapability = function (C) {
	    return C === PromiseConstructor || C === PromiseWrapper
	      ? new OwnPromiseCapability(C)
	      : newGenericPromiseCapability(C);
	  };
	}

	$$l({ global: true, wrap: true, forced: FORCED$2 }, {
	  Promise: PromiseConstructor
	});

	setToStringTag$2(PromiseConstructor, PROMISE, false, true);
	setSpecies(PROMISE);

	PromiseWrapper = getBuiltIn$4(PROMISE);

	// statics
	$$l({ target: PROMISE, stat: true, forced: FORCED$2 }, {
	  // `Promise.reject` method
	  // https://tc39.es/ecma262/#sec-promise.reject
	  reject: function reject(r) {
	    var capability = newPromiseCapability(this);
	    capability.reject.call(undefined, r);
	    return capability.promise;
	  }
	});

	$$l({ target: PROMISE, stat: true, forced: IS_PURE  }, {
	  // `Promise.resolve` method
	  // https://tc39.es/ecma262/#sec-promise.resolve
	  resolve: function resolve(x) {
	    return promiseResolve$1(this === PromiseWrapper ? PromiseConstructor : this, x);
	  }
	});

	$$l({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION$1 }, {
	  // `Promise.all` method
	  // https://tc39.es/ecma262/#sec-promise.all
	  all: function all(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform$3(function () {
	      var $promiseResolve = aFunction$2(C.resolve);
	      var values = [];
	      var counter = 0;
	      var remaining = 1;
	      iterate$2(iterable, function (promise) {
	        var index = counter++;
	        var alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        $promiseResolve.call(C, promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  },
	  // `Promise.race` method
	  // https://tc39.es/ecma262/#sec-promise.race
	  race: function race(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var reject = capability.reject;
	    var result = perform$3(function () {
	      var $promiseResolve = aFunction$2(C.resolve);
	      iterate$2(iterable, function (promise) {
	        $promiseResolve.call(C, promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	var $$k = _export;
	var aFunction$1 = aFunction$6;
	var newPromiseCapabilityModule$2 = newPromiseCapability$2;
	var perform$2 = perform$4;
	var iterate$1 = iterate$4;

	// `Promise.allSettled` method
	// https://tc39.es/ecma262/#sec-promise.allsettled
	$$k({ target: 'Promise', stat: true }, {
	  allSettled: function allSettled(iterable) {
	    var C = this;
	    var capability = newPromiseCapabilityModule$2.f(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform$2(function () {
	      var promiseResolve = aFunction$1(C.resolve);
	      var values = [];
	      var counter = 0;
	      var remaining = 1;
	      iterate$1(iterable, function (promise) {
	        var index = counter++;
	        var alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        promiseResolve.call(C, promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[index] = { status: 'fulfilled', value: value };
	          --remaining || resolve(values);
	        }, function (error) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[index] = { status: 'rejected', reason: error };
	          --remaining || resolve(values);
	        });
	      });
	      --remaining || resolve(values);
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	var $$j = _export;
	var aFunction = aFunction$6;
	var getBuiltIn$3 = getBuiltIn$9;
	var newPromiseCapabilityModule$1 = newPromiseCapability$2;
	var perform$1 = perform$4;
	var iterate = iterate$4;

	var PROMISE_ANY_ERROR = 'No one promise resolved';

	// `Promise.any` method
	// https://tc39.es/ecma262/#sec-promise.any
	$$j({ target: 'Promise', stat: true }, {
	  any: function any(iterable) {
	    var C = this;
	    var capability = newPromiseCapabilityModule$1.f(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform$1(function () {
	      var promiseResolve = aFunction(C.resolve);
	      var errors = [];
	      var counter = 0;
	      var remaining = 1;
	      var alreadyResolved = false;
	      iterate(iterable, function (promise) {
	        var index = counter++;
	        var alreadyRejected = false;
	        errors.push(undefined);
	        remaining++;
	        promiseResolve.call(C, promise).then(function (value) {
	          if (alreadyRejected || alreadyResolved) return;
	          alreadyResolved = true;
	          resolve(value);
	        }, function (error) {
	          if (alreadyRejected || alreadyResolved) return;
	          alreadyRejected = true;
	          errors[index] = error;
	          --remaining || reject(new (getBuiltIn$3('AggregateError'))(errors, PROMISE_ANY_ERROR));
	        });
	      });
	      --remaining || reject(new (getBuiltIn$3('AggregateError'))(errors, PROMISE_ANY_ERROR));
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	var $$i = _export;
	var NativePromise = nativePromiseConstructor;
	var fails$6 = fails$f;
	var getBuiltIn$2 = getBuiltIn$9;
	var speciesConstructor = speciesConstructor$2;
	var promiseResolve = promiseResolve$2;

	// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
	var NON_GENERIC = !!NativePromise && fails$6(function () {
	  NativePromise.prototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
	});

	// `Promise.prototype.finally` method
	// https://tc39.es/ecma262/#sec-promise.prototype.finally
	$$i({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
	  'finally': function (onFinally) {
	    var C = speciesConstructor(this, getBuiltIn$2('Promise'));
	    var isFunction = typeof onFinally == 'function';
	    return this.then(
	      isFunction ? function (x) {
	        return promiseResolve(C, onFinally()).then(function () { return x; });
	      } : onFinally,
	      isFunction ? function (e) {
	        return promiseResolve(C, onFinally()).then(function () { throw e; });
	      } : onFinally
	    );
	  }
	});

	var toInteger = toInteger$3;
	var toString$3 = toString$6;
	var requireObjectCoercible$1 = requireObjectCoercible$4;

	// `String.prototype.codePointAt` methods implementation
	var createMethod$1 = function (CONVERT_TO_STRING) {
	  return function ($this, pos) {
	    var S = toString$3(requireObjectCoercible$1($this));
	    var position = toInteger(pos);
	    var size = S.length;
	    var first, second;
	    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
	    first = S.charCodeAt(position);
	    return first < 0xD800 || first > 0xDBFF || position + 1 === size
	      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
	        ? CONVERT_TO_STRING ? S.charAt(position) : first
	        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
	  };
	};

	var stringMultibyte = {
	  // `String.prototype.codePointAt` method
	  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
	  codeAt: createMethod$1(false),
	  // `String.prototype.at` method
	  // https://github.com/mathiasbynens/String.prototype.at
	  charAt: createMethod$1(true)
	};

	var charAt = stringMultibyte.charAt;
	var toString$2 = toString$6;
	var InternalStateModule$1 = internalState;
	var defineIterator = defineIterator$2;

	var STRING_ITERATOR = 'String Iterator';
	var setInternalState$1 = InternalStateModule$1.set;
	var getInternalState$1 = InternalStateModule$1.getterFor(STRING_ITERATOR);

	// `String.prototype[@@iterator]` method
	// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
	defineIterator(String, 'String', function (iterated) {
	  setInternalState$1(this, {
	    type: STRING_ITERATOR,
	    string: toString$2(iterated),
	    index: 0
	  });
	// `%StringIteratorPrototype%.next` method
	// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
	}, function next() {
	  var state = getInternalState$1(this);
	  var string = state.string;
	  var index = state.index;
	  var point;
	  if (index >= string.length) return { value: undefined, done: true };
	  point = charAt(string, index);
	  state.index += point.length;
	  return { value: point, done: false };
	});

	var path$b = path$e;

	var promise$3 = path$b.Promise;

	// iterable DOM collections
	// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
	var domIterables = {
	  CSSRuleList: 0,
	  CSSStyleDeclaration: 0,
	  CSSValueList: 0,
	  ClientRectList: 0,
	  DOMRectList: 0,
	  DOMStringList: 0,
	  DOMTokenList: 1,
	  DataTransferItemList: 0,
	  FileList: 0,
	  HTMLAllCollection: 0,
	  HTMLCollection: 0,
	  HTMLFormElement: 0,
	  HTMLSelectElement: 0,
	  MediaList: 0,
	  MimeTypeArray: 0,
	  NamedNodeMap: 0,
	  NodeList: 1,
	  PaintRequestList: 0,
	  Plugin: 0,
	  PluginArray: 0,
	  SVGLengthList: 0,
	  SVGNumberList: 0,
	  SVGPathSegList: 0,
	  SVGPointList: 0,
	  SVGStringList: 0,
	  SVGTransformList: 0,
	  SourceBufferList: 0,
	  StyleSheetList: 0,
	  TextTrackCueList: 0,
	  TextTrackList: 0,
	  TouchList: 0
	};

	var DOMIterables$1 = domIterables;
	var global$3 = global$k;
	var classof$3 = classof$7;
	var createNonEnumerableProperty$1 = createNonEnumerableProperty$9;
	var Iterators = iterators;
	var wellKnownSymbol$8 = wellKnownSymbol$l;

	var TO_STRING_TAG = wellKnownSymbol$8('toStringTag');

	for (var COLLECTION_NAME in DOMIterables$1) {
	  var Collection = global$3[COLLECTION_NAME];
	  var CollectionPrototype = Collection && Collection.prototype;
	  if (CollectionPrototype && classof$3(CollectionPrototype) !== TO_STRING_TAG) {
	    createNonEnumerableProperty$1(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
	  }
	  Iterators[COLLECTION_NAME] = Iterators.Array;
	}

	var parent$B = promise$3;


	var promise$2 = parent$B;

	var $$h = _export;
	var newPromiseCapabilityModule = newPromiseCapability$2;
	var perform = perform$4;

	// `Promise.try` method
	// https://github.com/tc39/proposal-promise-try
	$$h({ target: 'Promise', stat: true }, {
	  'try': function (callbackfn) {
	    var promiseCapability = newPromiseCapabilityModule.f(this);
	    var result = perform(callbackfn);
	    (result.error ? promiseCapability.reject : promiseCapability.resolve)(result.value);
	    return promiseCapability.promise;
	  }
	});

	var parent$A = promise$2;

	// TODO: Remove from `core-js@4`




	var promise$1 = parent$A;

	var promise = promise$1;

	function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
	  try {
	    var info = gen[key](arg);
	    var value = info.value;
	  } catch (error) {
	    reject(error);
	    return;
	  }

	  if (info.done) {
	    resolve(value);
	  } else {
	    promise.resolve(value).then(_next, _throw);
	  }
	}

	function _asyncToGenerator(fn) {
	  return function () {
	    var self = this,
	        args = arguments;
	    return new promise(function (resolve, reject) {
	      var gen = fn.apply(self, args);

	      function _next(value) {
	        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
	      }

	      function _throw(err) {
	        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
	      }

	      _next(undefined);
	    });
	  };
	}

	var classof$2 = classofRaw$1;

	// `IsArray` abstract operation
	// https://tc39.es/ecma262/#sec-isarray
	// eslint-disable-next-line es/no-array-isarray -- safe
	var isArray$9 = Array.isArray || function isArray(arg) {
	  return classof$2(arg) == 'Array';
	};

	var $$g = _export;
	var isArray$8 = isArray$9;

	// `Array.isArray` method
	// https://tc39.es/ecma262/#sec-array.isarray
	$$g({ target: 'Array', stat: true }, {
	  isArray: isArray$8
	});

	var path$a = path$e;

	var isArray$7 = path$a.Array.isArray;

	var parent$z = isArray$7;

	var isArray$6 = parent$z;

	var parent$y = isArray$6;

	var isArray$5 = parent$y;

	var isArray$4 = isArray$5;

	function _arrayLikeToArray(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;

	  for (var i = 0, arr2 = new Array(len); i < len; i++) {
	    arr2[i] = arr[i];
	  }

	  return arr2;
	}

	function _arrayWithoutHoles(arr) {
	  if (isArray$4(arr)) return _arrayLikeToArray(arr);
	}

	var toPropertyKey$1 = toPropertyKey$4;
	var definePropertyModule$1 = objectDefineProperty;
	var createPropertyDescriptor$1 = createPropertyDescriptor$6;

	var createProperty$4 = function (object, key, value) {
	  var propertyKey = toPropertyKey$1(key);
	  if (propertyKey in object) definePropertyModule$1.f(object, propertyKey, createPropertyDescriptor$1(0, value));
	  else object[propertyKey] = value;
	};

	var isObject$4 = isObject$d;
	var isArray$3 = isArray$9;
	var wellKnownSymbol$7 = wellKnownSymbol$l;

	var SPECIES$2 = wellKnownSymbol$7('species');

	// a part of `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate
	var arraySpeciesConstructor$1 = function (originalArray) {
	  var C;
	  if (isArray$3(originalArray)) {
	    C = originalArray.constructor;
	    // cross-realm fallback
	    if (typeof C == 'function' && (C === Array || isArray$3(C.prototype))) C = undefined;
	    else if (isObject$4(C)) {
	      C = C[SPECIES$2];
	      if (C === null) C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

	var arraySpeciesConstructor = arraySpeciesConstructor$1;

	// `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate
	var arraySpeciesCreate$2 = function (originalArray, length) {
	  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
	};

	var fails$5 = fails$f;
	var wellKnownSymbol$6 = wellKnownSymbol$l;
	var V8_VERSION$1 = engineV8Version;

	var SPECIES$1 = wellKnownSymbol$6('species');

	var arrayMethodHasSpeciesSupport$4 = function (METHOD_NAME) {
	  // We can't use this feature detection in V8 since it causes
	  // deoptimization and serious performance degradation
	  // https://github.com/zloirock/core-js/issues/677
	  return V8_VERSION$1 >= 51 || !fails$5(function () {
	    var array = [];
	    var constructor = array.constructor = {};
	    constructor[SPECIES$1] = function () {
	      return { foo: 1 };
	    };
	    return array[METHOD_NAME](Boolean).foo !== 1;
	  });
	};

	var $$f = _export;
	var fails$4 = fails$f;
	var isArray$2 = isArray$9;
	var isObject$3 = isObject$d;
	var toObject$4 = toObject$7;
	var toLength$3 = toLength$6;
	var createProperty$3 = createProperty$4;
	var arraySpeciesCreate$1 = arraySpeciesCreate$2;
	var arrayMethodHasSpeciesSupport$3 = arrayMethodHasSpeciesSupport$4;
	var wellKnownSymbol$5 = wellKnownSymbol$l;
	var V8_VERSION = engineV8Version;

	var IS_CONCAT_SPREADABLE = wellKnownSymbol$5('isConcatSpreadable');
	var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
	var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

	// We can't use this feature detection in V8 since it causes
	// deoptimization and serious performance degradation
	// https://github.com/zloirock/core-js/issues/679
	var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails$4(function () {
	  var array = [];
	  array[IS_CONCAT_SPREADABLE] = false;
	  return array.concat()[0] !== array;
	});

	var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport$3('concat');

	var isConcatSpreadable = function (O) {
	  if (!isObject$3(O)) return false;
	  var spreadable = O[IS_CONCAT_SPREADABLE];
	  return spreadable !== undefined ? !!spreadable : isArray$2(O);
	};

	var FORCED$1 = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

	// `Array.prototype.concat` method
	// https://tc39.es/ecma262/#sec-array.prototype.concat
	// with adding support of @@isConcatSpreadable and @@species
	$$f({ target: 'Array', proto: true, forced: FORCED$1 }, {
	  // eslint-disable-next-line no-unused-vars -- required for `.length`
	  concat: function concat(arg) {
	    var O = toObject$4(this);
	    var A = arraySpeciesCreate$1(O, 0);
	    var n = 0;
	    var i, k, length, len, E;
	    for (i = -1, length = arguments.length; i < length; i++) {
	      E = i === -1 ? O : arguments[i];
	      if (isConcatSpreadable(E)) {
	        len = toLength$3(E.length);
	        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
	        for (k = 0; k < len; k++, n++) if (k in E) createProperty$3(A, n, E[k]);
	      } else {
	        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
	        createProperty$3(A, n++, E);
	      }
	    }
	    A.length = n;
	    return A;
	  }
	});

	var objectGetOwnPropertyNames = {};

	var internalObjectKeys = objectKeysInternal;
	var enumBugKeys = enumBugKeys$3;

	var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype');

	// `Object.getOwnPropertyNames` method
	// https://tc39.es/ecma262/#sec-object.getownpropertynames
	// eslint-disable-next-line es/no-object-getownpropertynames -- safe
	objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return internalObjectKeys(O, hiddenKeys$1);
	};

	var objectGetOwnPropertyNamesExternal = {};

	/* eslint-disable es/no-object-getownpropertynames -- safe */

	var toIndexedObject$4 = toIndexedObject$9;
	var $getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;

	var toString$1 = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return $getOwnPropertyNames$1(it);
	  } catch (error) {
	    return windowNames.slice();
	  }
	};

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
	  return windowNames && toString$1.call(it) == '[object Window]'
	    ? getWindowNames(it)
	    : $getOwnPropertyNames$1(toIndexedObject$4(it));
	};

	var objectGetOwnPropertySymbols = {};

	// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
	objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

	var wellKnownSymbolWrapped = {};

	var wellKnownSymbol$4 = wellKnownSymbol$l;

	wellKnownSymbolWrapped.f = wellKnownSymbol$4;

	var path$9 = path$e;
	var has$1 = has$9;
	var wrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;
	var defineProperty$5 = objectDefineProperty.f;

	var defineWellKnownSymbol$l = function (NAME) {
	  var Symbol = path$9.Symbol || (path$9.Symbol = {});
	  if (!has$1(Symbol, NAME)) defineProperty$5(Symbol, NAME, {
	    value: wrappedWellKnownSymbolModule$1.f(NAME)
	  });
	};

	var bind$1 = functionBindContext;
	var IndexedObject = indexedObject;
	var toObject$3 = toObject$7;
	var toLength$2 = toLength$6;
	var arraySpeciesCreate = arraySpeciesCreate$2;

	var push = [].push;

	// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
	var createMethod = function (TYPE) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var IS_FILTER_REJECT = TYPE == 7;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  return function ($this, callbackfn, that, specificCreate) {
	    var O = toObject$3($this);
	    var self = IndexedObject(O);
	    var boundFunction = bind$1(callbackfn, that, 3);
	    var length = toLength$2(self.length);
	    var index = 0;
	    var create = specificCreate || arraySpeciesCreate;
	    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
	    var value, result;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      value = self[index];
	      result = boundFunction(value, index, O);
	      if (TYPE) {
	        if (IS_MAP) target[index] = result; // map
	        else if (result) switch (TYPE) {
	          case 3: return true;              // some
	          case 5: return value;             // find
	          case 6: return index;             // findIndex
	          case 2: push.call(target, value); // filter
	        } else switch (TYPE) {
	          case 4: return false;             // every
	          case 7: push.call(target, value); // filterReject
	        }
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
	  };
	};

	var arrayIteration = {
	  // `Array.prototype.forEach` method
	  // https://tc39.es/ecma262/#sec-array.prototype.foreach
	  forEach: createMethod(0),
	  // `Array.prototype.map` method
	  // https://tc39.es/ecma262/#sec-array.prototype.map
	  map: createMethod(1),
	  // `Array.prototype.filter` method
	  // https://tc39.es/ecma262/#sec-array.prototype.filter
	  filter: createMethod(2),
	  // `Array.prototype.some` method
	  // https://tc39.es/ecma262/#sec-array.prototype.some
	  some: createMethod(3),
	  // `Array.prototype.every` method
	  // https://tc39.es/ecma262/#sec-array.prototype.every
	  every: createMethod(4),
	  // `Array.prototype.find` method
	  // https://tc39.es/ecma262/#sec-array.prototype.find
	  find: createMethod(5),
	  // `Array.prototype.findIndex` method
	  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
	  findIndex: createMethod(6),
	  // `Array.prototype.filterReject` method
	  // https://github.com/tc39/proposal-array-filtering
	  filterReject: createMethod(7)
	};

	var $$e = _export;
	var global$2 = global$k;
	var getBuiltIn$1 = getBuiltIn$9;
	var DESCRIPTORS$4 = descriptors;
	var NATIVE_SYMBOL = nativeSymbol;
	var fails$3 = fails$f;
	var has = has$9;
	var isArray$1 = isArray$9;
	var isObject$2 = isObject$d;
	var isSymbol = isSymbol$4;
	var anObject$2 = anObject$c;
	var toObject$2 = toObject$7;
	var toIndexedObject$3 = toIndexedObject$9;
	var toPropertyKey = toPropertyKey$4;
	var $toString = toString$6;
	var createPropertyDescriptor = createPropertyDescriptor$6;
	var nativeObjectCreate = objectCreate;
	var objectKeys = objectKeys$2;
	var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames;
	var getOwnPropertyNamesExternal = objectGetOwnPropertyNamesExternal;
	var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
	var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor;
	var definePropertyModule = objectDefineProperty;
	var propertyIsEnumerableModule = objectPropertyIsEnumerable;
	var createNonEnumerableProperty = createNonEnumerableProperty$9;
	var redefine = redefine$3;
	var shared = shared$4.exports;
	var sharedKey = sharedKey$4;
	var hiddenKeys = hiddenKeys$5;
	var uid = uid$3;
	var wellKnownSymbol$3 = wellKnownSymbol$l;
	var wrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
	var defineWellKnownSymbol$k = defineWellKnownSymbol$l;
	var setToStringTag$1 = setToStringTag$5;
	var InternalStateModule = internalState;
	var $forEach$1 = arrayIteration.forEach;

	var HIDDEN = sharedKey('hidden');
	var SYMBOL = 'Symbol';
	var PROTOTYPE = 'prototype';
	var TO_PRIMITIVE = wellKnownSymbol$3('toPrimitive');
	var setInternalState = InternalStateModule.set;
	var getInternalState = InternalStateModule.getterFor(SYMBOL);
	var ObjectPrototype = Object[PROTOTYPE];
	var $Symbol = global$2.Symbol;
	var $stringify = getBuiltIn$1('JSON', 'stringify');
	var nativeGetOwnPropertyDescriptor$1 = getOwnPropertyDescriptorModule$1.f;
	var nativeDefineProperty = definePropertyModule.f;
	var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
	var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
	var AllSymbols = shared('symbols');
	var ObjectPrototypeSymbols = shared('op-symbols');
	var StringToSymbolRegistry = shared('string-to-symbol-registry');
	var SymbolToStringRegistry = shared('symbol-to-string-registry');
	var WellKnownSymbolsStore = shared('wks');
	var QObject = global$2.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDescriptor = DESCRIPTORS$4 && fails$3(function () {
	  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
	    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (O, P, Attributes) {
	  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$1(ObjectPrototype, P);
	  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
	  nativeDefineProperty(O, P, Attributes);
	  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
	    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
	  }
	} : nativeDefineProperty;

	var wrap = function (tag, description) {
	  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
	  setInternalState(symbol, {
	    type: SYMBOL,
	    tag: tag,
	    description: description
	  });
	  if (!DESCRIPTORS$4) symbol.description = description;
	  return symbol;
	};

	var $defineProperty = function defineProperty(O, P, Attributes) {
	  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
	  anObject$2(O);
	  var key = toPropertyKey(P);
	  anObject$2(Attributes);
	  if (has(AllSymbols, key)) {
	    if (!Attributes.enumerable) {
	      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
	      O[HIDDEN][key] = true;
	    } else {
	      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
	      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
	    } return setSymbolDescriptor(O, key, Attributes);
	  } return nativeDefineProperty(O, key, Attributes);
	};

	var $defineProperties = function defineProperties(O, Properties) {
	  anObject$2(O);
	  var properties = toIndexedObject$3(Properties);
	  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
	  $forEach$1(keys, function (key) {
	    if (!DESCRIPTORS$4 || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
	  });
	  return O;
	};

	var $create = function create(O, Properties) {
	  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
	};

	var $propertyIsEnumerable = function propertyIsEnumerable(V) {
	  var P = toPropertyKey(V);
	  var enumerable = nativePropertyIsEnumerable.call(this, P);
	  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
	  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
	};

	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
	  var it = toIndexedObject$3(O);
	  var key = toPropertyKey(P);
	  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
	  var descriptor = nativeGetOwnPropertyDescriptor$1(it, key);
	  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
	    descriptor.enumerable = true;
	  }
	  return descriptor;
	};

	var $getOwnPropertyNames = function getOwnPropertyNames(O) {
	  var names = nativeGetOwnPropertyNames(toIndexedObject$3(O));
	  var result = [];
	  $forEach$1(names, function (key) {
	    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
	  });
	  return result;
	};

	var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
	  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
	  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$3(O));
	  var result = [];
	  $forEach$1(names, function (key) {
	    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
	      result.push(AllSymbols[key]);
	    }
	  });
	  return result;
	};

	// `Symbol` constructor
	// https://tc39.es/ecma262/#sec-symbol-constructor
	if (!NATIVE_SYMBOL) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
	    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
	    var tag = uid(description);
	    var setter = function (value) {
	      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
	    };
	    if (DESCRIPTORS$4 && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
	    return wrap(tag, description);
	  };

	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return getInternalState(this).tag;
	  });

	  redefine($Symbol, 'withoutSetter', function (description) {
	    return wrap(uid(description), description);
	  });

	  propertyIsEnumerableModule.f = $propertyIsEnumerable;
	  definePropertyModule.f = $defineProperty;
	  getOwnPropertyDescriptorModule$1.f = $getOwnPropertyDescriptor;
	  getOwnPropertyNamesModule$1.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
	  getOwnPropertySymbolsModule$1.f = $getOwnPropertySymbols;

	  wrappedWellKnownSymbolModule.f = function (name) {
	    return wrap(wellKnownSymbol$3(name), name);
	  };

	  if (DESCRIPTORS$4) {
	    // https://github.com/tc39/proposal-Symbol-description
	    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
	      configurable: true,
	      get: function description() {
	        return getInternalState(this).description;
	      }
	    });
	  }
	}

	$$e({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
	  Symbol: $Symbol
	});

	$forEach$1(objectKeys(WellKnownSymbolsStore), function (name) {
	  defineWellKnownSymbol$k(name);
	});

	$$e({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
	  // `Symbol.for` method
	  // https://tc39.es/ecma262/#sec-symbol.for
	  'for': function (key) {
	    var string = $toString(key);
	    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
	    var symbol = $Symbol(string);
	    StringToSymbolRegistry[string] = symbol;
	    SymbolToStringRegistry[symbol] = string;
	    return symbol;
	  },
	  // `Symbol.keyFor` method
	  // https://tc39.es/ecma262/#sec-symbol.keyfor
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
	    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
	  },
	  useSetter: function () { USE_SETTER = true; },
	  useSimple: function () { USE_SETTER = false; }
	});

	$$e({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS$4 }, {
	  // `Object.create` method
	  // https://tc39.es/ecma262/#sec-object.create
	  create: $create,
	  // `Object.defineProperty` method
	  // https://tc39.es/ecma262/#sec-object.defineproperty
	  defineProperty: $defineProperty,
	  // `Object.defineProperties` method
	  // https://tc39.es/ecma262/#sec-object.defineproperties
	  defineProperties: $defineProperties,
	  // `Object.getOwnPropertyDescriptor` method
	  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
	});

	$$e({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
	  // `Object.getOwnPropertyNames` method
	  // https://tc39.es/ecma262/#sec-object.getownpropertynames
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // `Object.getOwnPropertySymbols` method
	  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
	// https://bugs.chromium.org/p/v8/issues/detail?id=3443
	$$e({ target: 'Object', stat: true, forced: fails$3(function () { getOwnPropertySymbolsModule$1.f(1); }) }, {
	  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
	    return getOwnPropertySymbolsModule$1.f(toObject$2(it));
	  }
	});

	// `JSON.stringify` method behavior with symbols
	// https://tc39.es/ecma262/#sec-json.stringify
	if ($stringify) {
	  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails$3(function () {
	    var symbol = $Symbol();
	    // MS Edge converts symbol values to JSON as {}
	    return $stringify([symbol]) != '[null]'
	      // WebKit converts symbol values to JSON as null
	      || $stringify({ a: symbol }) != '{}'
	      // V8 throws on boxed symbols
	      || $stringify(Object(symbol)) != '{}';
	  });

	  $$e({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
	    // eslint-disable-next-line no-unused-vars -- required for `.length`
	    stringify: function stringify(it, replacer, space) {
	      var args = [it];
	      var index = 1;
	      var $replacer;
	      while (arguments.length > index) args.push(arguments[index++]);
	      $replacer = replacer;
	      if (!isObject$2(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	      if (!isArray$1(replacer)) replacer = function (key, value) {
	        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
	        if (!isSymbol(value)) return value;
	      };
	      args[1] = replacer;
	      return $stringify.apply(null, args);
	    }
	  });
	}

	// `Symbol.prototype[@@toPrimitive]` method
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
	if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
	  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	}
	// `Symbol.prototype[@@toStringTag]` property
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
	setToStringTag$1($Symbol, SYMBOL);

	hiddenKeys[HIDDEN] = true;

	var defineWellKnownSymbol$j = defineWellKnownSymbol$l;

	// `Symbol.asyncIterator` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.asynciterator
	defineWellKnownSymbol$j('asyncIterator');

	var defineWellKnownSymbol$i = defineWellKnownSymbol$l;

	// `Symbol.hasInstance` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.hasinstance
	defineWellKnownSymbol$i('hasInstance');

	var defineWellKnownSymbol$h = defineWellKnownSymbol$l;

	// `Symbol.isConcatSpreadable` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.isconcatspreadable
	defineWellKnownSymbol$h('isConcatSpreadable');

	var defineWellKnownSymbol$g = defineWellKnownSymbol$l;

	// `Symbol.iterator` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.iterator
	defineWellKnownSymbol$g('iterator');

	var defineWellKnownSymbol$f = defineWellKnownSymbol$l;

	// `Symbol.match` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.match
	defineWellKnownSymbol$f('match');

	var defineWellKnownSymbol$e = defineWellKnownSymbol$l;

	// `Symbol.matchAll` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.matchall
	defineWellKnownSymbol$e('matchAll');

	var defineWellKnownSymbol$d = defineWellKnownSymbol$l;

	// `Symbol.replace` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.replace
	defineWellKnownSymbol$d('replace');

	var defineWellKnownSymbol$c = defineWellKnownSymbol$l;

	// `Symbol.search` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.search
	defineWellKnownSymbol$c('search');

	var defineWellKnownSymbol$b = defineWellKnownSymbol$l;

	// `Symbol.species` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.species
	defineWellKnownSymbol$b('species');

	var defineWellKnownSymbol$a = defineWellKnownSymbol$l;

	// `Symbol.split` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.split
	defineWellKnownSymbol$a('split');

	var defineWellKnownSymbol$9 = defineWellKnownSymbol$l;

	// `Symbol.toPrimitive` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.toprimitive
	defineWellKnownSymbol$9('toPrimitive');

	var defineWellKnownSymbol$8 = defineWellKnownSymbol$l;

	// `Symbol.toStringTag` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.tostringtag
	defineWellKnownSymbol$8('toStringTag');

	var defineWellKnownSymbol$7 = defineWellKnownSymbol$l;

	// `Symbol.unscopables` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.unscopables
	defineWellKnownSymbol$7('unscopables');

	var global$1 = global$k;
	var setToStringTag = setToStringTag$5;

	// JSON[@@toStringTag] property
	// https://tc39.es/ecma262/#sec-json-@@tostringtag
	setToStringTag(global$1.JSON, 'JSON', true);

	var path$8 = path$e;

	var symbol$3 = path$8.Symbol;

	var parent$x = symbol$3;


	var symbol$2 = parent$x;

	var defineWellKnownSymbol$6 = defineWellKnownSymbol$l;

	// `Symbol.asyncDispose` well-known symbol
	// https://github.com/tc39/proposal-using-statement
	defineWellKnownSymbol$6('asyncDispose');

	var defineWellKnownSymbol$5 = defineWellKnownSymbol$l;

	// `Symbol.dispose` well-known symbol
	// https://github.com/tc39/proposal-using-statement
	defineWellKnownSymbol$5('dispose');

	var defineWellKnownSymbol$4 = defineWellKnownSymbol$l;

	// `Symbol.matcher` well-known symbol
	// https://github.com/tc39/proposal-pattern-matching
	defineWellKnownSymbol$4('matcher');

	var defineWellKnownSymbol$3 = defineWellKnownSymbol$l;

	// `Symbol.metadata` well-known symbol
	// https://github.com/tc39/proposal-decorators
	defineWellKnownSymbol$3('metadata');

	var defineWellKnownSymbol$2 = defineWellKnownSymbol$l;

	// `Symbol.observable` well-known symbol
	// https://github.com/tc39/proposal-observable
	defineWellKnownSymbol$2('observable');

	// TODO: remove from `core-js@4`
	var defineWellKnownSymbol$1 = defineWellKnownSymbol$l;

	// `Symbol.patternMatch` well-known symbol
	// https://github.com/tc39/proposal-pattern-matching
	defineWellKnownSymbol$1('patternMatch');

	// TODO: remove from `core-js@4`
	var defineWellKnownSymbol = defineWellKnownSymbol$l;

	defineWellKnownSymbol('replaceAll');

	var parent$w = symbol$2;





	// TODO: Remove from `core-js@4`

	// TODO: Remove from `core-js@4`


	var symbol$1 = parent$w;

	var symbol = symbol$1;

	var getIteratorMethod$4 = getIteratorMethod$7;

	var getIteratorMethod_1 = getIteratorMethod$4;

	var parent$v = getIteratorMethod_1;


	var getIteratorMethod$3 = parent$v;

	var parent$u = getIteratorMethod$3;

	var getIteratorMethod$2 = parent$u;

	var getIteratorMethod$1 = getIteratorMethod$2;

	var anObject$1 = anObject$c;
	var iteratorClose = iteratorClose$2;

	// call something on iterator step with safe closing on error
	var callWithSafeIterationClosing$1 = function (iterator, fn, value, ENTRIES) {
	  try {
	    return ENTRIES ? fn(anObject$1(value)[0], value[1]) : fn(value);
	  } catch (error) {
	    iteratorClose(iterator, 'throw', error);
	  }
	};

	var bind = functionBindContext;
	var toObject$1 = toObject$7;
	var callWithSafeIterationClosing = callWithSafeIterationClosing$1;
	var isArrayIteratorMethod = isArrayIteratorMethod$2;
	var toLength$1 = toLength$6;
	var createProperty$2 = createProperty$4;
	var getIterator = getIterator$2;
	var getIteratorMethod = getIteratorMethod$7;

	// `Array.from` method implementation
	// https://tc39.es/ecma262/#sec-array.from
	var arrayFrom = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	  var O = toObject$1(arrayLike);
	  var C = typeof this == 'function' ? this : Array;
	  var argumentsLength = arguments.length;
	  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
	  var mapping = mapfn !== undefined;
	  var iteratorMethod = getIteratorMethod(O);
	  var index = 0;
	  var length, result, step, iterator, next, value;
	  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
	  // if the target is not iterable or it's an array with the default iterator - use a simple case
	  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
	    iterator = getIterator(O, iteratorMethod);
	    next = iterator.next;
	    result = new C();
	    for (;!(step = next.call(iterator)).done; index++) {
	      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
	      createProperty$2(result, index, value);
	    }
	  } else {
	    length = toLength$1(O.length);
	    result = new C(length);
	    for (;length > index; index++) {
	      value = mapping ? mapfn(O[index], index) : O[index];
	      createProperty$2(result, index, value);
	    }
	  }
	  result.length = index;
	  return result;
	};

	var $$d = _export;
	var from$4 = arrayFrom;
	var checkCorrectnessOfIteration = checkCorrectnessOfIteration$2;

	var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
	  // eslint-disable-next-line es/no-array-from -- required for testing
	  Array.from(iterable);
	});

	// `Array.from` method
	// https://tc39.es/ecma262/#sec-array.from
	$$d({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
	  from: from$4
	});

	var path$7 = path$e;

	var from$3 = path$7.Array.from;

	var parent$t = from$3;

	var from$2 = parent$t;

	var parent$s = from$2;

	var from$1 = parent$s;

	var from = from$1;

	function _iterableToArray(iter) {
	  if (typeof symbol !== "undefined" && getIteratorMethod$1(iter) != null || iter["@@iterator"] != null) return from(iter);
	}

	var $$c = _export;
	var isObject$1 = isObject$d;
	var isArray = isArray$9;
	var toAbsoluteIndex = toAbsoluteIndex$2;
	var toLength = toLength$6;
	var toIndexedObject$2 = toIndexedObject$9;
	var createProperty$1 = createProperty$4;
	var wellKnownSymbol$2 = wellKnownSymbol$l;
	var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$4;

	var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$2('slice');

	var SPECIES = wellKnownSymbol$2('species');
	var nativeSlice = [].slice;
	var max = Math.max;

	// `Array.prototype.slice` method
	// https://tc39.es/ecma262/#sec-array.prototype.slice
	// fallback for not array-like ES3 strings and DOM objects
	$$c({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$2 }, {
	  slice: function slice(start, end) {
	    var O = toIndexedObject$2(this);
	    var length = toLength(O.length);
	    var k = toAbsoluteIndex(start, length);
	    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
	    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
	    var Constructor, result, n;
	    if (isArray(O)) {
	      Constructor = O.constructor;
	      // cross-realm fallback
	      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
	        Constructor = undefined;
	      } else if (isObject$1(Constructor)) {
	        Constructor = Constructor[SPECIES];
	        if (Constructor === null) Constructor = undefined;
	      }
	      if (Constructor === Array || Constructor === undefined) {
	        return nativeSlice.call(O, k, fin);
	      }
	    }
	    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
	    for (n = 0; k < fin; k++, n++) if (k in O) createProperty$1(result, n, O[k]);
	    result.length = n;
	    return result;
	  }
	});

	var path$6 = path$e;

	var entryVirtual$9 = function (CONSTRUCTOR) {
	  return path$6[CONSTRUCTOR + 'Prototype'];
	};

	var entryVirtual$8 = entryVirtual$9;

	var slice$4 = entryVirtual$8('Array').slice;

	var slice$3 = slice$4;

	var ArrayPrototype$7 = Array.prototype;

	var slice_1 = function (it) {
	  var own = it.slice;
	  return it === ArrayPrototype$7 || (it instanceof Array && own === ArrayPrototype$7.slice) ? slice$3 : own;
	};

	var parent$r = slice_1;

	var slice$2 = parent$r;

	var parent$q = slice$2;

	var slice$1 = parent$q;

	var slice = slice$1;

	function _unsupportedIterableToArray(o, minLen) {
	  var _context;

	  if (!o) return;
	  if (typeof o === "string") return _arrayLikeToArray(o, minLen);

	  var n = slice(_context = Object.prototype.toString.call(o)).call(_context, 8, -1);

	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
	}

	function _nonIterableSpread() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	function _toConsumableArray(arr) {
	  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
	}

	var $$b = _export;
	var toObject = toObject$7;
	var nativeKeys = objectKeys$2;
	var fails$2 = fails$f;

	var FAILS_ON_PRIMITIVES$1 = fails$2(function () { nativeKeys(1); });

	// `Object.keys` method
	// https://tc39.es/ecma262/#sec-object.keys
	$$b({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$1 }, {
	  keys: function keys(it) {
	    return nativeKeys(toObject(it));
	  }
	});

	var path$5 = path$e;

	var keys$3 = path$5.Object.keys;

	var parent$p = keys$3;

	var keys$2 = parent$p;

	var parent$o = keys$2;

	var keys$1 = parent$o;

	var keys = keys$1;

	var path$4 = path$e;

	var getOwnPropertySymbols$3 = path$4.Object.getOwnPropertySymbols;

	var parent$n = getOwnPropertySymbols$3;

	var getOwnPropertySymbols$2 = parent$n;

	var parent$m = getOwnPropertySymbols$2;

	var getOwnPropertySymbols$1 = parent$m;

	var getOwnPropertySymbols = getOwnPropertySymbols$1;

	var $$a = _export;
	var $filter = arrayIteration.filter;
	var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$4;

	var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('filter');

	// `Array.prototype.filter` method
	// https://tc39.es/ecma262/#sec-array.prototype.filter
	// with adding support of @@species
	$$a({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 }, {
	  filter: function filter(callbackfn /* , thisArg */) {
	    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var entryVirtual$7 = entryVirtual$9;

	var filter$4 = entryVirtual$7('Array').filter;

	var filter$3 = filter$4;

	var ArrayPrototype$6 = Array.prototype;

	var filter_1 = function (it) {
	  var own = it.filter;
	  return it === ArrayPrototype$6 || (it instanceof Array && own === ArrayPrototype$6.filter) ? filter$3 : own;
	};

	var parent$l = filter_1;

	var filter$2 = parent$l;

	var parent$k = filter$2;

	var filter$1 = parent$k;

	var filter = filter$1;

	var getOwnPropertyDescriptor$4 = {exports: {}};

	var $$9 = _export;
	var fails$1 = fails$f;
	var toIndexedObject$1 = toIndexedObject$9;
	var nativeGetOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
	var DESCRIPTORS$3 = descriptors;

	var FAILS_ON_PRIMITIVES = fails$1(function () { nativeGetOwnPropertyDescriptor(1); });
	var FORCED = !DESCRIPTORS$3 || FAILS_ON_PRIMITIVES;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
	$$9({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS$3 }, {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
	    return nativeGetOwnPropertyDescriptor(toIndexedObject$1(it), key);
	  }
	});

	var path$3 = path$e;

	var Object$3 = path$3.Object;

	var getOwnPropertyDescriptor$3 = getOwnPropertyDescriptor$4.exports = function getOwnPropertyDescriptor(it, key) {
	  return Object$3.getOwnPropertyDescriptor(it, key);
	};

	if (Object$3.getOwnPropertyDescriptor.sham) getOwnPropertyDescriptor$3.sham = true;

	var parent$j = getOwnPropertyDescriptor$4.exports;

	var getOwnPropertyDescriptor$2 = parent$j;

	var parent$i = getOwnPropertyDescriptor$2;

	var getOwnPropertyDescriptor$1 = parent$i;

	var getOwnPropertyDescriptor = getOwnPropertyDescriptor$1;

	var fails = fails$f;

	var arrayMethodIsStrict$2 = function (METHOD_NAME, argument) {
	  var method = [][METHOD_NAME];
	  return !!method && fails(function () {
	    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
	    method.call(null, argument || function () { throw 1; }, 1);
	  });
	};

	var $forEach = arrayIteration.forEach;
	var arrayMethodIsStrict$1 = arrayMethodIsStrict$2;

	var STRICT_METHOD$1 = arrayMethodIsStrict$1('forEach');

	// `Array.prototype.forEach` method implementation
	// https://tc39.es/ecma262/#sec-array.prototype.foreach
	var arrayForEach = !STRICT_METHOD$1 ? function forEach(callbackfn /* , thisArg */) {
	  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	// eslint-disable-next-line es/no-array-prototype-foreach -- safe
	} : [].forEach;

	var $$8 = _export;
	var forEach$5 = arrayForEach;

	// `Array.prototype.forEach` method
	// https://tc39.es/ecma262/#sec-array.prototype.foreach
	// eslint-disable-next-line es/no-array-prototype-foreach -- safe
	$$8({ target: 'Array', proto: true, forced: [].forEach != forEach$5 }, {
	  forEach: forEach$5
	});

	var entryVirtual$6 = entryVirtual$9;

	var forEach$4 = entryVirtual$6('Array').forEach;

	var parent$h = forEach$4;

	var forEach$3 = parent$h;

	var forEach$2 = forEach$3;
	var classof$1 = classof$7;
	var ArrayPrototype$5 = Array.prototype;

	var DOMIterables = {
	  DOMTokenList: true,
	  NodeList: true
	};

	var forEach_1 = function (it) {
	  var own = it.forEach;
	  return it === ArrayPrototype$5 || (it instanceof Array && own === ArrayPrototype$5.forEach)
	    // eslint-disable-next-line no-prototype-builtins -- safe
	    || DOMIterables.hasOwnProperty(classof$1(it)) ? forEach$2 : own;
	};

	var parent$g = forEach_1;

	var forEach$1 = parent$g;

	var forEach = forEach$1;

	var getBuiltIn = getBuiltIn$9;
	var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
	var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
	var anObject = anObject$c;

	// all object keys, includes non-enumerable and symbols
	var ownKeys$2 = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = getOwnPropertyNamesModule.f(anObject(it));
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
	  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
	};

	var $$7 = _export;
	var DESCRIPTORS$2 = descriptors;
	var ownKeys$1 = ownKeys$2;
	var toIndexedObject = toIndexedObject$9;
	var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
	var createProperty = createProperty$4;

	// `Object.getOwnPropertyDescriptors` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
	$$7({ target: 'Object', stat: true, sham: !DESCRIPTORS$2 }, {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
	    var O = toIndexedObject(object);
	    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
	    var keys = ownKeys$1(O);
	    var result = {};
	    var index = 0;
	    var key, descriptor;
	    while (keys.length > index) {
	      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
	      if (descriptor !== undefined) createProperty(result, key, descriptor);
	    }
	    return result;
	  }
	});

	var path$2 = path$e;

	var getOwnPropertyDescriptors$3 = path$2.Object.getOwnPropertyDescriptors;

	var parent$f = getOwnPropertyDescriptors$3;

	var getOwnPropertyDescriptors$2 = parent$f;

	var parent$e = getOwnPropertyDescriptors$2;

	var getOwnPropertyDescriptors$1 = parent$e;

	var getOwnPropertyDescriptors = getOwnPropertyDescriptors$1;

	var defineProperties$5 = {exports: {}};

	var $$6 = _export;
	var DESCRIPTORS$1 = descriptors;
	var defineProperties$4 = objectDefineProperties;

	// `Object.defineProperties` method
	// https://tc39.es/ecma262/#sec-object.defineproperties
	$$6({ target: 'Object', stat: true, forced: !DESCRIPTORS$1, sham: !DESCRIPTORS$1 }, {
	  defineProperties: defineProperties$4
	});

	var path$1 = path$e;

	var Object$2 = path$1.Object;

	var defineProperties$3 = defineProperties$5.exports = function defineProperties(T, D) {
	  return Object$2.defineProperties(T, D);
	};

	if (Object$2.defineProperties.sham) defineProperties$3.sham = true;

	var parent$d = defineProperties$5.exports;

	var defineProperties$2 = parent$d;

	var parent$c = defineProperties$2;

	var defineProperties$1 = parent$c;

	var defineProperties = defineProperties$1;

	var defineProperty$4 = {exports: {}};

	var $$5 = _export;
	var DESCRIPTORS = descriptors;
	var objectDefinePropertyModile = objectDefineProperty;

	// `Object.defineProperty` method
	// https://tc39.es/ecma262/#sec-object.defineproperty
	$$5({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
	  defineProperty: objectDefinePropertyModile.f
	});

	var path = path$e;

	var Object$1 = path.Object;

	var defineProperty$3 = defineProperty$4.exports = function defineProperty(it, key, desc) {
	  return Object$1.defineProperty(it, key, desc);
	};

	if (Object$1.defineProperty.sham) defineProperty$3.sham = true;

	var parent$b = defineProperty$4.exports;

	var defineProperty$2 = parent$b;

	var parent$a = defineProperty$2;

	var defineProperty$1 = parent$a;

	var defineProperty = defineProperty$1;

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	function ownKeys(object, enumerableOnly) {
	  var keys$1 = keys(object);

	  if (getOwnPropertySymbols) {
	    var symbols = getOwnPropertySymbols(object);

	    if (enumerableOnly) {
	      symbols = filter(symbols).call(symbols, function (sym) {
	        return getOwnPropertyDescriptor(object, sym).enumerable;
	      });
	    }

	    keys$1.push.apply(keys$1, symbols);
	  }

	  return keys$1;
	}

	function _objectSpread2(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i] != null ? arguments[i] : {};

	    if (i % 2) {
	      var _context;

	      forEach(_context = ownKeys(Object(source), true)).call(_context, function (key) {
	        _defineProperty(target, key, source[key]);
	      });
	    } else if (getOwnPropertyDescriptors) {
	      defineProperties(target, getOwnPropertyDescriptors(source));
	    } else {
	      var _context2;

	      forEach(_context2 = ownKeys(Object(source))).call(_context2, function (key) {
	        defineProperty(target, key, getOwnPropertyDescriptor(source, key));
	      });
	    }
	  }

	  return target;
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;

	    defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  return Constructor;
	}

	var runtime = {exports: {}};

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	(function (module) {
	var runtime = (function (exports) {

	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined$1; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  function define(obj, key, value) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	    return obj[key];
	  }
	  try {
	    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
	    define({}, "");
	  } catch (err) {
	    define = function(obj, key, value) {
	      return obj[key] = value;
	    };
	  }

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  exports.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  define(IteratorPrototype, iteratorSymbol, function () {
	    return this;
	  });

	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }

	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = GeneratorFunctionPrototype;
	  define(Gp, "constructor", GeneratorFunctionPrototype);
	  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
	  GeneratorFunction.displayName = define(
	    GeneratorFunctionPrototype,
	    toStringTagSymbol,
	    "GeneratorFunction"
	  );

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      define(prototype, method, function(arg) {
	        return this._invoke(method, arg);
	      });
	    });
	  }

	  exports.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  exports.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      define(genFun, toStringTagSymbol, "GeneratorFunction");
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  exports.awrap = function(arg) {
	    return { __await: arg };
	  };

	  function AsyncIterator(generator, PromiseImpl) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return PromiseImpl.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return PromiseImpl.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration.
	          result.value = unwrapped;
	          resolve(result);
	        }, function(error) {
	          // If a rejected Promise was yielded, throw the rejection back
	          // into the async generator function so it can be handled there.
	          return invoke("throw", error, resolve, reject);
	        });
	      }
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new PromiseImpl(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);
	  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
	    return this;
	  });
	  exports.AsyncIterator = AsyncIterator;

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
	    if (PromiseImpl === void 0) PromiseImpl = Promise;

	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList),
	      PromiseImpl
	    );

	    return exports.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      context.method = method;
	      context.arg = arg;

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }

	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;

	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }

	          context.dispatchException(context.arg);

	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          if (record.arg === ContinueSentinel) {
	            continue;
	          }

	          return {
	            value: record.arg,
	            done: context.done
	          };

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }

	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined$1) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;

	      if (context.method === "throw") {
	        // Note: ["return"] must be used for ES3 parsing compatibility.
	        if (delegate.iterator["return"]) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined$1;
	          maybeInvokeDelegate(delegate, context);

	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }

	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }

	      return ContinueSentinel;
	    }

	    var record = tryCatch(method, delegate.iterator, context.arg);

	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    var info = record.arg;

	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;

	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;

	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined$1;
	      }

	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }

	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  define(Gp, toStringTagSymbol, "Generator");

	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  define(Gp, iteratorSymbol, function() {
	    return this;
	  });

	  define(Gp, "toString", function() {
	    return "[object Generator]";
	  });

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  exports.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined$1;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  exports.values = values;

	  function doneResult() {
	    return { value: undefined$1, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined$1;
	      this.done = false;
	      this.delegate = null;

	      this.method = "next";
	      this.arg = undefined$1;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined$1;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;

	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined$1;
	        }

	        return !! caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }

	      return this.complete(record);
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }

	      return ContinueSentinel;
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined$1;
	      }

	      return ContinueSentinel;
	    }
	  };

	  // Regardless of whether this script is executing as a CommonJS module
	  // or not, return the runtime object so that we can declare the variable
	  // regeneratorRuntime in the outer scope, which allows this module to be
	  // injected easily by `bin/regenerator --include-runtime script.js`.
	  return exports;

	}(
	  // If this script is executing as a CommonJS module, use module.exports
	  // as the regeneratorRuntime namespace. Otherwise create a new empty
	  // object. Either way, the resulting object will be used to initialize
	  // the regeneratorRuntime variable at the top of this file.
	  module.exports 
	));

	try {
	  regeneratorRuntime = runtime;
	} catch (accidentalStrictMode) {
	  // This module should not be running in strict mode, so the above
	  // assignment should always work unless something is misconfigured. Just
	  // in case runtime.js accidentally runs in strict mode, in modern engines
	  // we can explicitly access globalThis. In older engines we can escape
	  // strict mode using a global Function call. This could conceivably fail
	  // if a Content Security Policy forbids using Function, but in that case
	  // the proper solution is to fix the accidental strict mode problem. If
	  // you've misconfigured your bundler to force strict mode and applied a
	  // CSP to forbid Function, and you're not willing to fix either of those
	  // problems, please detail your unique predicament in a GitHub issue.
	  if (typeof globalThis === "object") {
	    globalThis.regeneratorRuntime = runtime;
	  } else {
	    Function("r", "regeneratorRuntime = r")(runtime);
	  }
	}
	}(runtime));

	var regenerator = runtime.exports;

	var $$4 = _export;
	var $map = arrayIteration.map;
	var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$4;

	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

	// `Array.prototype.map` method
	// https://tc39.es/ecma262/#sec-array.prototype.map
	// with adding support of @@species
	$$4({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
	  map: function map(callbackfn /* , thisArg */) {
	    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var entryVirtual$5 = entryVirtual$9;

	var map$4 = entryVirtual$5('Array').map;

	var map$3 = map$4;

	var ArrayPrototype$4 = Array.prototype;

	var map_1 = function (it) {
	  var own = it.map;
	  return it === ArrayPrototype$4 || (it instanceof Array && own === ArrayPrototype$4.map) ? map$3 : own;
	};

	var parent$9 = map_1;

	var map$2 = parent$9;

	var parent$8 = map$2;

	var map$1 = parent$8;

	var map = map$1;

	/* eslint-disable es/no-array-prototype-indexof -- required for testing */
	var $$3 = _export;
	var $indexOf = arrayIncludes$1.indexOf;
	var arrayMethodIsStrict = arrayMethodIsStrict$2;

	var nativeIndexOf = [].indexOf;

	var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
	var STRICT_METHOD = arrayMethodIsStrict('indexOf');

	// `Array.prototype.indexOf` method
	// https://tc39.es/ecma262/#sec-array.prototype.indexof
	$$3({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD }, {
	  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? nativeIndexOf.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var entryVirtual$4 = entryVirtual$9;

	var indexOf$4 = entryVirtual$4('Array').indexOf;

	var indexOf$3 = indexOf$4;

	var ArrayPrototype$3 = Array.prototype;

	var indexOf_1 = function (it) {
	  var own = it.indexOf;
	  return it === ArrayPrototype$3 || (it instanceof Array && own === ArrayPrototype$3.indexOf) ? indexOf$3 : own;
	};

	var parent$7 = indexOf_1;

	var indexOf$2 = parent$7;

	var parent$6 = indexOf$2;

	var indexOf$1 = parent$6;

	var indexOf = indexOf$1;

	var ChatController = /*#__PURE__*/function () {
	  function ChatController(option) {
	    _classCallCheck(this, ChatController);

	    _defineProperty(this, "state", void 0);

	    _defineProperty(this, "defaultOption", {
	      delay: 300
	    });

	    _defineProperty(this, "emptyAction", {
	      request: {
	        type: 'empty'
	      },
	      responses: [],
	      onResnponsed: []
	    });

	    _defineProperty(this, "defaultActionRequest", {
	      always: false,
	      addMessage: true
	    });

	    this.state = {
	      option: _objectSpread2(_objectSpread2({}, this.defaultOption), option),
	      messages: [],
	      action: this.emptyAction,
	      actionHistory: [],
	      onMessagesChanged: [],
	      onActionChanged: []
	    };
	  }

	  _createClass(ChatController, [{
	    key: "addMessage",
	    value: function addMessage(message) {
	      var _this = this;

	      return new promise(function (resolve) {
	        setTimeout(function () {
	          var len = _this.state.messages.push(message);

	          var idx = len - 1;
	          _this.state.messages[idx].createdAt = new Date();

	          _this.callOnMessagesChanged();

	          resolve(idx);
	        }, _this.state.option.delay);
	      });
	    }
	  }, {
	    key: "updateMessage",
	    value: function updateMessage(index, message) {
	      if (message !== this.state.messages[index]) {
	        var createdAt = this.state.messages[index].createdAt;
	        this.state.messages[index] = message;
	        this.state.messages[index].createdAt = createdAt;
	      }

	      this.state.messages[index].updatedAt = new Date();
	      this.callOnMessagesChanged();
	    }
	  }, {
	    key: "removeMessage",
	    value: function removeMessage(index) {
	      this.state.messages[index].deletedAt = new Date();
	      this.callOnMessagesChanged();
	    }
	  }, {
	    key: "getMessages",
	    value: function getMessages() {
	      return this.state.messages;
	    }
	  }, {
	    key: "setMessages",
	    value: function setMessages(messages) {
	      this.clearMessages();
	      this.state.messages = _toConsumableArray(messages);
	      this.callOnMessagesChanged();
	    }
	  }, {
	    key: "clearMessages",
	    value: function clearMessages() {
	      this.state.messages = [];
	      this.callOnMessagesChanged();
	    }
	  }, {
	    key: "callOnMessagesChanged",
	    value: function callOnMessagesChanged() {
	      var _context,
	          _this2 = this;

	      map(_context = this.state.onMessagesChanged).call(_context, function (h) {
	        return h(_this2.state.messages);
	      });
	    }
	  }, {
	    key: "addOnMessagesChanged",
	    value: function addOnMessagesChanged(callback) {
	      this.state.onMessagesChanged.push(callback);
	    }
	  }, {
	    key: "removeOnMessagesChanged",
	    value: function removeOnMessagesChanged(callback) {
	      var _context2;

	      var idx = indexOf(_context2 = this.state.onMessagesChanged).call(_context2, callback); // eslint-disable-next-line @typescript-eslint/no-empty-function


	      this.state.onActionChanged[idx] = function () {};
	    }
	  }, {
	    key: "setActionRequest",
	    value: function setActionRequest(request, onResponse) {
	      var _this3 = this;

	      var action = {
	        request: _objectSpread2(_objectSpread2({}, this.defaultActionRequest), request),
	        responses: [],
	        onResnponsed: []
	      }; // See setActionResponse method

	      return new promise(function (resolve, reject) {
	        if (!request.always) {
	          var returnResponse = function returnResponse(response) {
	            if (!response.error) {
	              resolve(response);
	            } else {
	              reject(response.error);
	            }
	          };

	          action.onResnponsed.push(returnResponse);
	        }

	        if (onResponse) {
	          action.onResnponsed.push(onResponse);
	        }

	        _this3.state.action = action;

	        _this3.state.actionHistory.push(action);

	        _this3.callOnActionChanged(action.request);

	        if (request.always) {
	          resolve({
	            type: 'text',
	            value: 'dummy'
	          });
	        }
	      });
	    }
	  }, {
	    key: "cancelActionRequest",
	    value: function cancelActionRequest() {
	      this.state.action = this.emptyAction;
	      this.callOnActionChanged(this.emptyAction.request);
	    }
	  }, {
	    key: "getActionRequest",
	    value: function getActionRequest() {
	      var _this$state$action = this.state.action,
	          request = _this$state$action.request,
	          responses = _this$state$action.responses;

	      if (!request.always && responses.length > 0) {
	        return undefined;
	      }

	      return request;
	    }
	  }, {
	    key: "setActionResponse",
	    value: function () {
	      var _setActionResponse = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(request, response) {
	        var _this$state$action2, origReq, responses, onResnponsed;

	        return regenerator.wrap(function _callee$(_context3) {
	          while (1) {
	            switch (_context3.prev = _context3.next) {
	              case 0:
	                _this$state$action2 = this.state.action, origReq = _this$state$action2.request, responses = _this$state$action2.responses, onResnponsed = _this$state$action2.onResnponsed;

	                if (!(request !== origReq)) {
	                  _context3.next = 3;
	                  break;
	                }

	                throw new Error('Invalid action.');

	              case 3:
	                if (!(!request.always && onResnponsed.length === 0)) {
	                  _context3.next = 5;
	                  break;
	                }

	                throw new Error('onResponsed is not set.');

	              case 5:
	                responses.push(response);
	                this.callOnActionChanged(request, response);

	                if (!request.addMessage) {
	                  _context3.next = 10;
	                  break;
	                }

	                _context3.next = 10;
	                return this.addMessage({
	                  type: 'text',
	                  content: response.value,
	                  self: true
	                });

	              case 10:
	                map(onResnponsed).call(onResnponsed, function (h) {
	                  return h(response);
	                });

	              case 11:
	              case "end":
	                return _context3.stop();
	            }
	          }
	        }, _callee, this);
	      }));

	      function setActionResponse(_x, _x2) {
	        return _setActionResponse.apply(this, arguments);
	      }

	      return setActionResponse;
	    }()
	  }, {
	    key: "getActionResponses",
	    value: function getActionResponses() {
	      return this.state.action.responses;
	    }
	  }, {
	    key: "callOnActionChanged",
	    value: function callOnActionChanged(request, response) {
	      var _context4;

	      map(_context4 = this.state.onActionChanged).call(_context4, function (h) {
	        return h(request, response);
	      });
	    }
	  }, {
	    key: "addOnActionChanged",
	    value: function addOnActionChanged(callback) {
	      this.state.onActionChanged.push(callback);
	    }
	  }, {
	    key: "removeOnActionChanged",
	    value: function removeOnActionChanged(callback) {
	      var _context5;

	      var idx = indexOf(_context5 = this.state.onActionChanged).call(_context5, callback); // eslint-disable-next-line @typescript-eslint/no-empty-function


	      this.state.onActionChanged[idx] = function () {};
	    }
	  }, {
	    key: "getOption",
	    value: function getOption() {
	      return this.state.option;
	    }
	  }]);

	  return ChatController;
	}();

	// Copied from https://github.com/chris-rudmin/Recorderjs

	var waveEncoder = () => {
	  let BYTES_PER_SAMPLE = 2;

	  let recorded = [];

	  function encode (buffer) {
	    let length = buffer.length;
	    let data = new Uint8Array(length * BYTES_PER_SAMPLE);
	    for (let i = 0; i < length; i++) {
	      let index = i * BYTES_PER_SAMPLE;
	      let sample = buffer[i];
	      if (sample > 1) {
	        sample = 1;
	      } else if (sample < -1) {
	        sample = -1;
	      }
	      sample = sample * 32768;
	      data[index] = sample;
	      data[index + 1] = sample >> 8;
	    }
	    recorded.push(data);
	  }

	  function dump (sampleRate) {
	    let bufferLength = recorded.length ? recorded[0].length : 0;
	    let length = recorded.length * bufferLength;
	    let wav = new Uint8Array(44 + length);
	    let view = new DataView(wav.buffer);

	    // RIFF identifier 'RIFF'
	    view.setUint32(0, 1380533830, false);
	    // file length minus RIFF identifier length and file description length
	    view.setUint32(4, 36 + length, true);
	    // RIFF type 'WAVE'
	    view.setUint32(8, 1463899717, false);
	    // format chunk identifier 'fmt '
	    view.setUint32(12, 1718449184, false);
	    // format chunk length
	    view.setUint32(16, 16, true);
	    // sample format (raw)
	    view.setUint16(20, 1, true);
	    // channel count
	    view.setUint16(22, 1, true);
	    // sample rate
	    view.setUint32(24, sampleRate, true);
	    // byte rate (sample rate * block align)
	    view.setUint32(28, sampleRate * BYTES_PER_SAMPLE, true);
	    // block align (channel count * bytes per sample)
	    view.setUint16(32, BYTES_PER_SAMPLE, true);
	    // bits per sample
	    view.setUint16(34, 8 * BYTES_PER_SAMPLE, true);
	    // data chunk identifier 'data'
	    view.setUint32(36, 1684108385, false);
	    // data chunk length
	    view.setUint32(40, length, true);

	    // eslint-disable-next-line unicorn/no-for-loop
	    for (let i = 0; i < recorded.length; i++) {
	      wav.set(recorded[i], i * bufferLength + 44);
	    }

	    recorded = [];
	    postMessage(wav.buffer, [wav.buffer]);
	  }

	  onmessage = e => {
	    if (e.data[0] === 'encode') {
	      encode(e.data[1]);
	    } else if (e.data[0] === 'dump') {
	      dump(e.data[1]);
	    }
	  };
	};

	let AudioContext = window.AudioContext || window.webkitAudioContext;

	let createWorker = fn => {
	  let js = fn
	    .toString()
	    .replace(/^(\(\)\s*=>|function\s*\(\))\s*{/, '')
	    .replace(/}$/, '');
	  let blob = new Blob([js]);
	  return new Worker(URL.createObjectURL(blob))
	};

	let error = method => {
	  let event = new Event('error');
	  event.data = new Error('Wrong state for ' + method);
	  return event
	};

	let context;

	/**
	 * Audio Recorder with MediaRecorder API.
	 *
	 * @example
	 * navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
	 *   let recorder = new MediaRecorder(stream)
	 * })
	 */
	class MediaRecorder$1 {
	  /**
	   * @param {MediaStream} stream The audio stream to record.
	   */
	  constructor (stream, config = null) {
	    /**
	     * The `MediaStream` passed into the constructor.
	     * @type {MediaStream}
	     */
	    this.stream = stream;
	    this.config = config;
	    /**
	     * The current state of recording process.
	     * @type {"inactive"|"recording"|"paused"}
	     */
	    this.state = 'inactive';

	    this.em = document.createDocumentFragment();
	    this.encoder = createWorker(MediaRecorder$1.encoder);

	    let recorder = this;
	    this.encoder.addEventListener('message', e => {
	      let event = new Event('dataavailable');
	      event.data = new Blob([e.data], { type: recorder.mimeType });
	      recorder.em.dispatchEvent(event);
	      if (recorder.state === 'inactive') {
	        recorder.em.dispatchEvent(new Event('stop'));
	      }
	    });
	  }

	  /**
	   * Begins recording media.
	   *
	   * @param {number} [timeslice] The milliseconds to record into each `Blob`.
	   *                             If this parameter isn’t included, single `Blob`
	   *                             will be recorded.
	   *
	   * @return {undefined}
	   *
	   * @example
	   * recordButton.addEventListener('click', () => {
	   *   recorder.start()
	   * })
	   */
	  start (timeslice) {
	    if (this.state !== 'inactive') {
	      return this.em.dispatchEvent(error('start'))
	    }

	    this.state = 'recording';

	    if (!context) {
	      context = new AudioContext(this.config);
	    }
	    this.clone = this.stream.clone();
	    this.input = context.createMediaStreamSource(this.clone);
	    this.processor = context.createScriptProcessor(2048, 1, 1);

	    this.encoder.postMessage(['init', context.sampleRate]);

	    this.processor.onaudioprocess = e => {
	      if (this.state === 'recording') {
	        this.encoder.postMessage(['encode', e.inputBuffer.getChannelData(0)]);
	      }
	    };

	    this.input.connect(this.processor);
	    this.processor.connect(context.destination);

	    this.em.dispatchEvent(new Event('start'));

	    if (timeslice) {
	      this.slicing = setInterval(() => {
	        if (this.state === 'recording') this.requestData();
	      }, timeslice);
	    }

	    return undefined
	  }

	  /**
	   * Stop media capture and raise `dataavailable` event with recorded data.
	   *
	   * @return {undefined}
	   *
	   * @example
	   * finishButton.addEventListener('click', () => {
	   *   recorder.stop()
	   * })
	   */
	  stop () {
	    if (this.state === 'inactive') {
	      return this.em.dispatchEvent(error('stop'))
	    }

	    this.requestData();
	    this.state = 'inactive';
	    this.clone.getTracks().forEach(track => {
	      track.stop();
	    });
	    this.processor.disconnect();
	    this.input.disconnect();
	    return clearInterval(this.slicing)
	  }

	  /**
	   * Pauses recording of media streams.
	   *
	   * @return {undefined}
	   *
	   * @example
	   * pauseButton.addEventListener('click', () => {
	   *   recorder.pause()
	   * })
	   */
	  pause () {
	    if (this.state !== 'recording') {
	      return this.em.dispatchEvent(error('pause'))
	    }

	    this.state = 'paused';
	    return this.em.dispatchEvent(new Event('pause'))
	  }

	  /**
	   * Resumes media recording when it has been previously paused.
	   *
	   * @return {undefined}
	   *
	   * @example
	   * resumeButton.addEventListener('click', () => {
	   *   recorder.resume()
	   * })
	   */
	  resume () {
	    if (this.state !== 'paused') {
	      return this.em.dispatchEvent(error('resume'))
	    }

	    this.state = 'recording';
	    return this.em.dispatchEvent(new Event('resume'))
	  }

	  /**
	   * Raise a `dataavailable` event containing the captured media.
	   *
	   * @return {undefined}
	   *
	   * @example
	   * this.on('nextData', () => {
	   *   recorder.requestData()
	   * })
	   */
	  requestData () {
	    if (this.state === 'inactive') {
	      return this.em.dispatchEvent(error('requestData'))
	    }

	    return this.encoder.postMessage(['dump', context.sampleRate])
	  }

	  /**
	   * Add listener for specified event type.
	   *
	   * @param {"start"|"stop"|"pause"|"resume"|"dataavailable"|"error"}
	   * type Event type.
	   * @param {function} listener The listener function.
	   *
	   * @return {undefined}
	   *
	   * @example
	   * recorder.addEventListener('dataavailable', e => {
	   *   audio.src = URL.createObjectURL(e.data)
	   * })
	   */
	  addEventListener (...args) {
	    this.em.addEventListener(...args);
	  }

	  /**
	   * Remove event listener.
	   *
	   * @param {"start"|"stop"|"pause"|"resume"|"dataavailable"|"error"}
	   * type Event type.
	   * @param {function} listener The same function used in `addEventListener`.
	   *
	   * @return {undefined}
	   */
	  removeEventListener (...args) {
	    this.em.removeEventListener(...args);
	  }

	  /**
	   * Calls each of the listeners registered for a given event.
	   *
	   * @param {Event} event The event object.
	   *
	   * @return {boolean} Is event was no canceled by any listener.
	   */
	  dispatchEvent (...args) {
	    this.em.dispatchEvent(...args);
	  }
	}

	/**
	 * The MIME type that is being used for recording.
	 * @type {string}
	 */
	MediaRecorder$1.prototype.mimeType = 'audio/wav';

	/**
	 * Returns `true` if the MIME type specified is one the polyfill can record.
	 *
	 * This polyfill supports `audio/wav` and `audio/mpeg`.
	 *
	 * @param {string} mimeType The mimeType to check.
	 *
	 * @return {boolean} `true` on `audio/wav` and `audio/mpeg` MIME type.
	 */
	MediaRecorder$1.isTypeSupported = mimeType => {
	  return MediaRecorder$1.prototype.mimeType === mimeType
	};

	/**
	 * `true` if MediaRecorder can not be polyfilled in the current browser.
	 * @type {boolean}
	 *
	 * @example
	 * if (MediaRecorder.notSupported) {
	 *   showWarning('Audio recording is not supported in this browser')
	 * }
	 */
	MediaRecorder$1.notSupported = !navigator.mediaDevices || !AudioContext;

	/**
	 * Converts RAW audio buffer to compressed audio files.
	 * It will be loaded to Web Worker.
	 * By default, WAVE encoder will be used.
	 * @type {function}
	 *
	 * @example
	 * MediaRecorder.prototype.mimeType = 'audio/ogg'
	 * MediaRecorder.encoder = oggEncoder
	 */
	MediaRecorder$1.encoder = waveEncoder;

	var AudioMediaRecorder = /*#__PURE__*/function () {
	  function AudioMediaRecorder() {
	    _classCallCheck(this, AudioMediaRecorder);

	    _defineProperty(this, "md", void 0);

	    _defineProperty(this, "recordChunks", void 0);

	    if (!window.MediaRecorder) {
	      window.MediaRecorder = MediaRecorder$1;
	    }

	    this.recordChunks = [];
	  }

	  _createClass(AudioMediaRecorder, [{
	    key: "initialize",
	    value: function () {
	      var _initialize = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
	        var stream;
	        return regenerator.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                if (!this.md) {
	                  _context.next = 2;
	                  break;
	                }

	                return _context.abrupt("return", this);

	              case 2:
	                _context.next = 4;
	                return navigator.mediaDevices.getUserMedia({
	                  audio: true,
	                  video: false
	                });

	              case 4:
	                stream = _context.sent;
	                this.md = new MediaRecorder(stream);
	                this.recordChunks = [];
	                return _context.abrupt("return", this);

	              case 8:
	              case "end":
	                return _context.stop();
	            }
	          }
	        }, _callee, this);
	      }));

	      function initialize() {
	        return _initialize.apply(this, arguments);
	      }

	      return initialize;
	    }()
	  }, {
	    key: "startRecord",
	    value: function () {
	      var _startRecord = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2() {
	        var _this = this;

	        return regenerator.wrap(function _callee2$(_context2) {
	          while (1) {
	            switch (_context2.prev = _context2.next) {
	              case 0:
	                return _context2.abrupt("return", new promise(function (resolve) {
	                  if (!_this.md) {
	                    throw new Error('Must be initialized.');
	                  }

	                  _this.recordChunks = [];

	                  _this.md.addEventListener('start', function () {
	                    resolve();
	                  }); // eslint-disable-next-line @typescript-eslint/ban-ts-comment
	                  // @ts-ignore


	                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
	                  // @ts-ignore
	                  _this.md.addEventListener('dataavailable', function (e) {
	                    if (e.data.size > 0) {
	                      _this.recordChunks.push(e.data);
	                    }
	                  });

	                  _this.md.start();
	                }));

	              case 1:
	              case "end":
	                return _context2.stop();
	            }
	          }
	        }, _callee2);
	      }));

	      function startRecord() {
	        return _startRecord.apply(this, arguments);
	      }

	      return startRecord;
	    }()
	  }, {
	    key: "stopRecord",
	    value: function () {
	      var _stopRecord = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee3() {
	        var _this2 = this;

	        return regenerator.wrap(function _callee3$(_context3) {
	          while (1) {
	            switch (_context3.prev = _context3.next) {
	              case 0:
	                return _context3.abrupt("return", new promise(function (resolve) {
	                  if (!_this2.md) {
	                    throw new Error('Must be initialized.');
	                  }

	                  _this2.md.addEventListener('stop', function () {
	                    resolve(new Blob(_this2.recordChunks));
	                  });

	                  _this2.md.stop();
	                }));

	              case 1:
	              case "end":
	                return _context3.stop();
	            }
	          }
	        }, _callee3);
	      }));

	      function stopRecord() {
	        return _stopRecord.apply(this, arguments);
	      }

	      return stopRecord;
	    }()
	  }], [{
	    key: "getInstance",
	    value: function getInstance() {
	      if (!this.instance) {
	        this.instance = new AudioMediaRecorder();
	      }

	      return this.instance;
	    }
	  }]);

	  return AudioMediaRecorder;
	}();

	_defineProperty(AudioMediaRecorder, "instance", void 0);

	function _arrayWithHoles(arr) {
	  if (isArray$4(arr)) return arr;
	}

	function _iterableToArrayLimit(arr, i) {
	  var _i = arr == null ? null : typeof symbol !== "undefined" && getIteratorMethod$1(arr) || arr["@@iterator"];

	  if (_i == null) return;
	  var _arr = [];
	  var _n = true;
	  var _d = false;

	  var _s, _e;

	  try {
	    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
	      _arr.push(_s.value);

	      if (i && _arr.length === i) break;
	    }
	  } catch (err) {
	    _d = true;
	    _e = err;
	  } finally {
	    try {
	      if (!_n && _i["return"] != null) _i["return"]();
	    } finally {
	      if (_d) throw _e;
	    }
	  }

	  return _arr;
	}

	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	function _slicedToArray(arr, i) {
	  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
	}

	var dayjs_min = {exports: {}};

	(function (module, exports) {
	!function(t,e){module.exports=e();}(commonjsGlobal,(function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return -t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return +(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return {M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else {var i=t.name;v[i]=t,r=i;}return !n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t);}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init();},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},m.$utils=function(){return O},m.isValid=function(){return !(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d;}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])};})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));
	}(dayjs_min));

	var dayjs = dayjs_min.exports;

	function MuiAudioInput(_ref) {
	  var chatController = _ref.chatController,
	      actionRequest = _ref.actionRequest;
	  var chatCtl = chatController;

	  var _React$useState = React__default['default'].useState(AudioMediaRecorder.getInstance()),
	      _React$useState2 = _slicedToArray(_React$useState, 1),
	      audioRec = _React$useState2[0];

	  var _React$useState3 = React__default['default'].useState(true),
	      _React$useState4 = _slicedToArray(_React$useState3, 2),
	      stopped = _React$useState4[0],
	      setStopped = _React$useState4[1];

	  var _React$useState5 = React__default['default'].useState(),
	      _React$useState6 = _slicedToArray(_React$useState5, 2),
	      audio = _React$useState6[0],
	      setAudio = _React$useState6[1];

	  var handleError = React__default['default'].useCallback(function (error) {
	    var value = {
	      type: 'audio',
	      value: error.message,
	      error: error
	    };
	    chatCtl.setActionResponse(actionRequest, value);
	  }, [actionRequest, chatCtl]);
	  var handleStart = React__default['default'].useCallback( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
	    return regenerator.wrap(function _callee$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            _context.prev = 0;
	            _context.next = 3;
	            return audioRec.initialize();

	          case 3:
	            _context.next = 5;
	            return audioRec.startRecord();

	          case 5:
	            setStopped(false);
	            _context.next = 11;
	            break;

	          case 8:
	            _context.prev = 8;
	            _context.t0 = _context["catch"](0);
	            handleError(_context.t0);

	          case 11:
	          case "end":
	            return _context.stop();
	        }
	      }
	    }, _callee, null, [[0, 8]]);
	  })), [audioRec, handleError]);
	  var handleStop = React__default['default'].useCallback( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2() {
	    var a;
	    return regenerator.wrap(function _callee2$(_context2) {
	      while (1) {
	        switch (_context2.prev = _context2.next) {
	          case 0:
	            _context2.prev = 0;
	            _context2.next = 3;
	            return audioRec.stopRecord();

	          case 3:
	            a = _context2.sent;
	            setAudio(a);
	            setStopped(true);
	            _context2.next = 11;
	            break;

	          case 8:
	            _context2.prev = 8;
	            _context2.t0 = _context2["catch"](0);
	            handleError(_context2.t0);

	          case 11:
	          case "end":
	            return _context2.stop();
	        }
	      }
	    }, _callee2, null, [[0, 8]]);
	  })), [audioRec, handleError]);
	  var sendResponse = React__default['default'].useCallback(function () {
	    if (audio) {
	      var value = {
	        type: 'audio',
	        value: 'Audio',
	        audio: audio
	      };
	      chatCtl.setActionResponse(actionRequest, value);
	      setAudio(undefined);
	    }
	  }, [actionRequest, audio, chatCtl]);
	  var sendButtonText = actionRequest.sendButtonText ? actionRequest.sendButtonText : 'Send';
	  return /*#__PURE__*/React__default['default'].createElement(material.Box, {
	    sx: {
	      flex: '1 1 auto',
	      display: 'flex',
	      '& > *': {
	        flex: '1 1 auto',
	        minWidth: 0
	      },
	      '& > * + *': {
	        ml: 1
	      }
	    }
	  }, stopped && /*#__PURE__*/React__default['default'].createElement(material.Button, {
	    type: "button",
	    onClick: handleStart,
	    disabled: !stopped,
	    variant: "contained",
	    color: "primary",
	    startIcon: /*#__PURE__*/React__default['default'].createElement(material.Icon, null, "keyboard_voice")
	  }, "Rec start"), !stopped && /*#__PURE__*/React__default['default'].createElement(material.Button, {
	    type: "button",
	    onClick: handleStop,
	    disabled: stopped,
	    variant: "contained",
	    color: "primary",
	    startIcon: /*#__PURE__*/React__default['default'].createElement(material.Icon, null, "stop")
	  }, "Rec stop"), /*#__PURE__*/React__default['default'].createElement(material.Button, {
	    type: "button",
	    onClick: sendResponse,
	    disabled: !audio,
	    variant: "contained",
	    color: "primary",
	    startIcon: /*#__PURE__*/React__default['default'].createElement(material.Icon, null, "send")
	  }, sendButtonText));
	}

	var entryVirtual$3 = entryVirtual$9;

	var concat$4 = entryVirtual$3('Array').concat;

	var concat$3 = concat$4;

	var ArrayPrototype$2 = Array.prototype;

	var concat_1 = function (it) {
	  var own = it.concat;
	  return it === ArrayPrototype$2 || (it instanceof Array && own === ArrayPrototype$2.concat) ? concat$3 : own;
	};

	var parent$5 = concat_1;

	var concat$2 = parent$5;

	var parent$4 = concat$2;

	var concat$1 = parent$4;

	var concat = concat$1;

	function MuiFileInput(_ref) {
	  var chatController = _ref.chatController,
	      actionRequest = _ref.actionRequest;
	  var chatCtl = chatController;

	  var _React$useState = React__default['default'].useState([]),
	      _React$useState2 = _slicedToArray(_React$useState, 2),
	      files = _React$useState2[0],
	      setFiles = _React$useState2[1];

	  var handleFileChange = React__default['default'].useCallback(function (fileList) {
	    // Convert FileList to File[]
	    var fileArray = [];

	    if (fileList) {
	      for (var i = 0; i < fileList.length; i += 1) {
	        var file = fileList.item(i);

	        if (file) {
	          fileArray.push(file);
	        }
	      }
	    }

	    setFiles(fileArray);
	  }, []);
	  var setResponse = React__default['default'].useCallback(function () {
	    if (files.length > 0) {
	      var value = map(files).call(files, function (f) {
	        return f.name;
	      }).toString();

	      var res = {
	        type: 'file',
	        value: value,
	        files: files
	      };
	      chatCtl.setActionResponse(actionRequest, res);
	    }
	  }, [actionRequest, chatCtl, files]);
	  var sendButtonText = actionRequest.sendButtonText ? actionRequest.sendButtonText : 'Send';
	  return /*#__PURE__*/React__default['default'].createElement(material.Box, {
	    sx: {
	      flex: '1 1 auto',
	      maxWidth: '100%',
	      display: 'flex',
	      flexDirection: 'column',
	      '& > *': {
	        flex: '0 0 auto',
	        maxWidth: '100%'
	      },
	      '& > * + *': {
	        mt: 1
	      }
	    }
	  }, /*#__PURE__*/React__default['default'].createElement(material.List, null, map(files).call(files, function (f) {
	    var _context;

	    return /*#__PURE__*/React__default['default'].createElement("div", {
	      key: concat(_context = "".concat(f.name, "-")).call(_context, f.size)
	    }, /*#__PURE__*/React__default['default'].createElement(material.Divider, null), /*#__PURE__*/React__default['default'].createElement(material.ListItem, {
	      key: f.name
	    }, /*#__PURE__*/React__default['default'].createElement(material.ListItemIcon, null, /*#__PURE__*/React__default['default'].createElement(material.Icon, null, "attach_file")), /*#__PURE__*/React__default['default'].createElement(material.Typography, {
	      style: {
	        overflowWrap: 'break-word',
	        minWidth: 0
	      }
	    }, f.name)));
	  })), /*#__PURE__*/React__default['default'].createElement(material.Box, {
	    sx: {
	      display: 'flex',
	      '& > *': {
	        flex: '1 1 auto',
	        minWidth: 0
	      },
	      '& > * + *': {
	        ml: 1
	      }
	    }
	  }, /*#__PURE__*/React__default['default'].createElement(material.Button, {
	    disabled: false,
	    component: "label",
	    variant: "contained",
	    color: "primary",
	    startIcon: /*#__PURE__*/React__default['default'].createElement(material.Icon, null, "folder")
	  }, "Select file", /*#__PURE__*/React__default['default'].createElement("input", {
	    type: "file",
	    accept: actionRequest.accept,
	    multiple: actionRequest.multiple,
	    onChange: function onChange(e) {
	      return handleFileChange(e.target.files);
	    },
	    style: {
	      display: 'none'
	    }
	  })), /*#__PURE__*/React__default['default'].createElement(material.Button, {
	    type: "button",
	    onClick: setResponse,
	    disabled: files.length === 0,
	    variant: "contained",
	    color: "primary",
	    startIcon: /*#__PURE__*/React__default['default'].createElement(material.Icon, null, "send")
	  }, sendButtonText)));
	}

	function MuiMessage(_ref) {
	  var id = _ref.id,
	      message = _ref.message,
	      showDate = _ref.showDate,
	      showTime = _ref.showTime;

	  if (message.deletedAt) {
	    return /*#__PURE__*/React__default['default'].createElement("div", {
	      id: id
	    });
	  }

	  var dispDate = message.updatedAt ? message.updatedAt : message.createdAt;
	  var ChatAvator = /*#__PURE__*/React__default['default'].createElement(material.Box, {
	    minWidth: 0,
	    flexShrink: 0,
	    ml: message.self ? 1 : 0,
	    mr: message.self ? 0 : 1
	  }, /*#__PURE__*/React__default['default'].createElement(material.Avatar, {
	    alt: message.username,
	    src: message.avatar
	  }));
	  var ChatUsername = /*#__PURE__*/React__default['default'].createElement(material.Box, {
	    maxWidth: "100%",
	    mx: 1
	  }, /*#__PURE__*/React__default['default'].createElement(material.Typography, {
	    variant: "body2",
	    align: message.self ? 'right' : 'left'
	  }, message.username));
	  var ChatDate = /*#__PURE__*/React__default['default'].createElement(material.Box, {
	    maxWidth: "100%",
	    mx: 1
	  }, /*#__PURE__*/React__default['default'].createElement(material.Typography, {
	    variant: "body2",
	    align: message.self ? 'right' : 'left',
	    color: "textSecondary"
	  }, dispDate === null || dispDate === void 0 ? void 0 : dispDate.toLocaleTimeString([], {
	    hour: '2-digit',
	    minute: '2-digit'
	  })));
	  return /*#__PURE__*/React__default['default'].createElement(material.Grow, {
	    in: true
	  }, /*#__PURE__*/React__default['default'].createElement(material.Box, {
	    maxWidth: "100%",
	    display: "flex",
	    flexDirection: "column"
	  }, showDate && /*#__PURE__*/React__default['default'].createElement(material.Typography, {
	    align: "center"
	  }, dispDate === null || dispDate === void 0 ? void 0 : dispDate.toLocaleDateString()), /*#__PURE__*/React__default['default'].createElement(material.Box, {
	    id: id,
	    maxWidth: "100%",
	    my: 1,
	    pl: message.self ? '20%' : 0,
	    pr: message.self ? 0 : '20%',
	    display: "flex",
	    justifyContent: message.self ? 'flex-end' : 'flex-start',
	    style: {
	      overflowWrap: 'break-word'
	    }
	  }, message.avatar && !message.self && ChatAvator, /*#__PURE__*/React__default['default'].createElement(material.Box, {
	    minWidth: 0,
	    display: "flex",
	    flexDirection: "column"
	  }, message.username && ChatUsername, /*#__PURE__*/React__default['default'].createElement(material.Box, {
	    maxWidth: "100%",
	    py: 1,
	    px: 2,
	    bgcolor: message.self ? 'primary.main' : 'background.paper',
	    color: message.self ? 'primary.contrastText' : 'text.primary',
	    borderRadius: 4,
	    boxShadow: 2
	  }, message.type === 'text' && /*#__PURE__*/React__default['default'].createElement(material.Typography, {
	    variant: "body1",
	    style: {
	      whiteSpace: 'pre-wrap'
	    }
	  }, message.content), message.type === 'jsx' && /*#__PURE__*/React__default['default'].createElement("div", null, message.content)), showTime && ChatDate), message.avatar && message.self && ChatAvator)));
	}

	var $$2 = _export;
	var $includes = arrayIncludes$1.includes;

	// `Array.prototype.includes` method
	// https://tc39.es/ecma262/#sec-array.prototype.includes
	$$2({ target: 'Array', proto: true }, {
	  includes: function includes(el /* , fromIndex = 0 */) {
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var entryVirtual$2 = entryVirtual$9;

	var includes$5 = entryVirtual$2('Array').includes;

	var isObject = isObject$d;
	var classof = classofRaw$1;
	var wellKnownSymbol$1 = wellKnownSymbol$l;

	var MATCH$1 = wellKnownSymbol$1('match');

	// `IsRegExp` abstract operation
	// https://tc39.es/ecma262/#sec-isregexp
	var isRegexp = function (it) {
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
	};

	var isRegExp = isRegexp;

	var notARegexp = function (it) {
	  if (isRegExp(it)) {
	    throw TypeError("The method doesn't accept regular expressions");
	  } return it;
	};

	var wellKnownSymbol = wellKnownSymbol$l;

	var MATCH = wellKnownSymbol('match');

	var correctIsRegexpLogic = function (METHOD_NAME) {
	  var regexp = /./;
	  try {
	    '/./'[METHOD_NAME](regexp);
	  } catch (error1) {
	    try {
	      regexp[MATCH] = false;
	      return '/./'[METHOD_NAME](regexp);
	    } catch (error2) { /* empty */ }
	  } return false;
	};

	var $$1 = _export;
	var notARegExp = notARegexp;
	var requireObjectCoercible = requireObjectCoercible$4;
	var toString = toString$6;
	var correctIsRegExpLogic = correctIsRegexpLogic;

	// `String.prototype.includes` method
	// https://tc39.es/ecma262/#sec-string.prototype.includes
	$$1({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
	  includes: function includes(searchString /* , position = 0 */) {
	    return !!~toString(requireObjectCoercible(this))
	      .indexOf(toString(notARegExp(searchString)), arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var entryVirtual$1 = entryVirtual$9;

	var includes$4 = entryVirtual$1('String').includes;

	var arrayIncludes = includes$5;
	var stringIncludes = includes$4;

	var ArrayPrototype$1 = Array.prototype;
	var StringPrototype = String.prototype;

	var includes$3 = function (it) {
	  var own = it.includes;
	  if (it === ArrayPrototype$1 || (it instanceof Array && own === ArrayPrototype$1.includes)) return arrayIncludes;
	  if (typeof it === 'string' || it === StringPrototype || (it instanceof String && own === StringPrototype.includes)) {
	    return stringIncludes;
	  } return own;
	};

	var parent$3 = includes$3;

	var includes$2 = parent$3;

	var parent$2 = includes$2;

	var includes$1 = parent$2;

	var includes = includes$1;

	function MuiMultiSelectInput(_ref) {
	  var _context3;

	  var chatController = _ref.chatController,
	      actionRequest = _ref.actionRequest;
	  var chatCtl = chatController;

	  var _React$useState = React__default['default'].useState([]),
	      _React$useState2 = _slicedToArray(_React$useState, 2),
	      values = _React$useState2[0],
	      setValues = _React$useState2[1];

	  var handleSelect = React__default['default'].useCallback(function (value) {
	    if (!includes(values).call(values, value)) {
	      var _context;

	      setValues(concat(_context = []).call(_context, _toConsumableArray(values), [value]));
	    } else {
	      setValues(filter(values).call(values, function (v) {
	        return v !== value;
	      }));
	    }
	  }, [values]);
	  var setResponse = React__default['default'].useCallback(function () {
	    var _context2;

	    var options = filter(_context2 = actionRequest.options).call(_context2, function (o) {
	      return includes(values).call(values, o.value);
	    });

	    var res = {
	      type: 'multi-select',
	      value: map(options).call(options, function (o) {
	        return o.text;
	      }).toString(),
	      options: options
	    };
	    chatCtl.setActionResponse(actionRequest, res);
	    setValues([]);
	  }, [actionRequest, chatCtl, values]);
	  var sendButtonText = actionRequest.sendButtonText ? actionRequest.sendButtonText : 'Send';
	  return /*#__PURE__*/React__default['default'].createElement(material.Box, {
	    sx: {
	      flex: '1 1 auto',
	      display: 'flex',
	      flexDirection: 'column',
	      '& > *': {
	        flex: '0 0 auto',
	        maxWidth: '100%'
	      },
	      '& > * + *': {
	        mt: 1
	      }
	    }
	  }, map(_context3 = actionRequest.options).call(_context3, function (o) {
	    var _context4;

	    return /*#__PURE__*/React__default['default'].createElement(material.Button, {
	      key: indexOf(_context4 = actionRequest.options).call(_context4, o),
	      type: "button",
	      value: o.value,
	      onClick: function onClick(e) {
	        return handleSelect(e.currentTarget.value);
	      },
	      variant: !includes(values).call(values, o.value) ? 'outlined' : 'contained',
	      color: "primary"
	    }, o.text);
	  }), /*#__PURE__*/React__default['default'].createElement(material.Button, {
	    type: "button",
	    onClick: setResponse,
	    disabled: values.length === 0,
	    variant: "contained",
	    color: "primary",
	    startIcon: /*#__PURE__*/React__default['default'].createElement(material.Icon, null, "send")
	  }, sendButtonText));
	}

	var $ = _export;
	var $find = arrayIteration.find;

	var FIND = 'find';
	var SKIPS_HOLES = true;

	// Shouldn't skip holes
	if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

	// `Array.prototype.find` method
	// https://tc39.es/ecma262/#sec-array.prototype.find
	$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
	  find: function find(callbackfn /* , that = undefined */) {
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var entryVirtual = entryVirtual$9;

	var find$4 = entryVirtual('Array').find;

	var find$3 = find$4;

	var ArrayPrototype = Array.prototype;

	var find_1 = function (it) {
	  var own = it.find;
	  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.find) ? find$3 : own;
	};

	var parent$1 = find_1;

	var find$2 = parent$1;

	var parent = find$2;

	var find$1 = parent;

	var find = find$1;

	function MuiSelectInput(_ref) {
	  var _context2;

	  var chatController = _ref.chatController,
	      actionRequest = _ref.actionRequest;
	  var chatCtl = chatController;
	  var setResponse = React__default['default'].useCallback(function (value) {
	    var _context;

	    var option = find(_context = actionRequest.options).call(_context, function (o) {
	      return o.value === value;
	    });

	    if (!option) {
	      throw new Error("Unknown value: ".concat(value));
	    }

	    var res = {
	      type: 'select',
	      value: option.text,
	      option: option
	    };
	    chatCtl.setActionResponse(actionRequest, res);
	  }, [actionRequest, chatCtl]);
	  return /*#__PURE__*/React__default['default'].createElement(material.Box, {
	    sx: {
	      flex: '1 1 auto',
	      display: 'flex',
	      flexDirection: 'column',
	      '& > *': {
	        flex: '0 0 auto',
	        maxWidth: '100%'
	      },
	      '& > * + *': {
	        mt: 1
	      }
	    }
	  }, map(_context2 = actionRequest.options).call(_context2, function (o) {
	    var _context3;

	    return /*#__PURE__*/React__default['default'].createElement(material.Button, {
	      key: indexOf(_context3 = actionRequest.options).call(_context3, o),
	      type: "button",
	      value: o.value,
	      onClick: function onClick(e) {
	        return setResponse(e.currentTarget.value);
	      },
	      variant: "contained",
	      color: "primary"
	    }, o.text);
	  }));
	}

	function MuiTextInput(_ref) {
	  var chatController = _ref.chatController,
	      actionRequest = _ref.actionRequest;
	  var chatCtl = chatController;

	  var _React$useState = React__default['default'].useState(actionRequest.defaultValue),
	      _React$useState2 = _slicedToArray(_React$useState, 2),
	      value = _React$useState2[0],
	      setValue = _React$useState2[1];

	  var setResponse = React__default['default'].useCallback(function () {
	    if (value) {
	      var res = {
	        type: 'text',
	        value: value
	      };
	      chatCtl.setActionResponse(actionRequest, res);
	      setValue('');
	    }
	  }, [actionRequest, chatCtl, value]);
	  var handleKeyDown = React__default['default'].useCallback(function (e) {
	    if (e.nativeEvent.isComposing) {
	      return;
	    }

	    if (e.key === 'Enter' && !e.shiftKey) {
	      e.preventDefault();
	      setResponse();
	    }
	  }, [setResponse]);
	  var sendButtonText = actionRequest.sendButtonText ? actionRequest.sendButtonText : 'Send';
	  return /*#__PURE__*/React__default['default'].createElement(material.Box, {
	    sx: {
	      flex: '1 1 auto',
	      display: 'flex',
	      '& > *': {
	        flex: '1 1 auto',
	        minWidth: 0
	      },
	      '& > * + *': {
	        ml: 1
	      },
	      '& :last-child': {
	        flex: '0 1 auto'
	      }
	    }
	  }, /*#__PURE__*/React__default['default'].createElement(material.TextField, {
	    placeholder: actionRequest.placeholder,
	    value: value,
	    onChange: function onChange(e) {
	      return setValue(e.target.value);
	    },
	    autoFocus: true,
	    multiline: true,
	    inputProps: {
	      onKeyDown: handleKeyDown
	    },
	    variant: "outlined",
	    maxRows: 10
	  }), /*#__PURE__*/React__default['default'].createElement(material.Button, {
	    type: "button",
	    onClick: setResponse,
	    disabled: !value,
	    variant: "contained",
	    color: "primary",
	    startIcon: /*#__PURE__*/React__default['default'].createElement(material.Icon, null, "send")
	  }, sendButtonText));
	}

	function MuiChat(_ref) {
	  var chatController = _ref.chatController;
	  var chatCtl = chatController;

	  var _React$useState = React__default['default'].useState(chatCtl.getMessages()),
	      _React$useState2 = _slicedToArray(_React$useState, 2),
	      messages = _React$useState2[0],
	      setMessages = _React$useState2[1];

	  var _React$useState3 = React__default['default'].useState(chatCtl.getActionRequest()),
	      _React$useState4 = _slicedToArray(_React$useState3, 2),
	      actReq = _React$useState4[0],
	      setActReq = _React$useState4[1];

	  var msgRef = React__default['default'].useRef(null);
	  var scroll = React__default['default'].useCallback(function () {
	    if (msgRef.current) {
	      msgRef.current.scrollTop = msgRef.current.scrollHeight; // msgRef.current.scrollIntoView(true);
	    }
	  }, [msgRef]);
	  React__default['default'].useEffect(function () {
	    function handleMassagesChanged() {
	      setMessages(_toConsumableArray(chatCtl.getMessages()));
	      scroll();
	    }

	    function handleActionChanged() {
	      setActReq(chatCtl.getActionRequest());
	      scroll();
	    }

	    chatCtl.addOnMessagesChanged(handleMassagesChanged);
	    chatCtl.addOnActionChanged(handleActionChanged);
	  }, [chatCtl, scroll]);
	  var CustomComponent = React__default['default'].useMemo(function () {
	    if (!actReq || actReq.type !== 'custom') {
	      return null;
	    }

	    return actReq.Component;
	  }, [actReq]);
	  var unknownMsg = {
	    type: 'text',
	    content: 'Unknown message.',
	    self: false
	  };
	  var prevDate = dayjs(0);
	  var prevTime = dayjs(0);
	  return /*#__PURE__*/React__default['default'].createElement(material.Box, {
	    sx: {
	      height: '100%',
	      width: '100%',
	      p: 1,
	      bgcolor: 'background.default',
	      display: 'flex',
	      flexDirection: 'column',
	      '& > *': {
	        maxWidth: '100%'
	      },
	      '& > * + *': {
	        mt: 1
	      }
	    }
	  }, /*#__PURE__*/React__default['default'].createElement(material.Box, {
	    sx: {
	      flex: '1 1 0%',
	      overflowY: 'auto',
	      WebkitOverflowScrolling: 'touch',
	      display: 'flex',
	      flexDirection: 'column',
	      '& > *': {
	        maxWidth: '100%'
	      }
	    },
	    ref: msgRef
	  }, map(messages).call(messages, function (msg) {
	    var showDate = false;
	    var showTime = !!chatCtl.getOption().showDateTime;

	    if (!!chatCtl.getOption().showDateTime && !msg.deletedAt) {
	      var current = dayjs(msg.updatedAt ? msg.updatedAt : msg.createdAt);

	      if (current.format('YYYYMMDD') !== prevDate.format('YYYYMMDD')) {
	        showDate = true;
	      }

	      prevDate = current;

	      if (current.diff(prevTime) < 60000) {
	        showTime = false;
	      } else {
	        prevTime = current;
	      }
	    }

	    if (msg.type === 'text' || msg.type === 'jsx') {
	      return /*#__PURE__*/React__default['default'].createElement(MuiMessage, {
	        key: indexOf(messages).call(messages, msg),
	        id: "cu-msg-".concat(indexOf(messages).call(messages, msg) + 1),
	        message: msg,
	        showDate: showDate,
	        showTime: showTime
	      });
	    }

	    return /*#__PURE__*/React__default['default'].createElement(MuiMessage, {
	      key: indexOf(messages).call(messages, msg),
	      id: "cu-msg-".concat(indexOf(messages).call(messages, msg) + 1),
	      message: unknownMsg,
	      showDate: showDate,
	      showTime: showTime
	    });
	  })), /*#__PURE__*/React__default['default'].createElement(material.Box, {
	    sx: {
	      flex: '0 1 auto',
	      display: 'flex',
	      alignContent: 'flex-end',
	      '& > *': {
	        minWidth: 0
	      }
	    }
	  }, actReq && actReq.type === 'text' && /*#__PURE__*/React__default['default'].createElement(MuiTextInput, {
	    chatController: chatCtl,
	    actionRequest: actReq
	  }), actReq && actReq.type === 'select' && /*#__PURE__*/React__default['default'].createElement(MuiSelectInput, {
	    chatController: chatCtl,
	    actionRequest: actReq
	  }), actReq && actReq.type === 'multi-select' && /*#__PURE__*/React__default['default'].createElement(MuiMultiSelectInput, {
	    chatController: chatCtl,
	    actionRequest: actReq
	  }), actReq && actReq.type === 'file' && /*#__PURE__*/React__default['default'].createElement(MuiFileInput, {
	    chatController: chatCtl,
	    actionRequest: actReq
	  }), actReq && actReq.type === 'audio' && /*#__PURE__*/React__default['default'].createElement(MuiAudioInput, {
	    chatController: chatCtl,
	    actionRequest: actReq
	  }), actReq && actReq.type === 'custom' && /*#__PURE__*/React__default['default'].createElement(CustomComponent, {
	    chatController: chatCtl,
	    actionRequest: actReq
	  })));
	}

	exports.AudioMediaRecorder = AudioMediaRecorder;
	exports.ChatController = ChatController;
	exports.MuiAudioInput = MuiAudioInput;
	exports.MuiChat = MuiChat;
	exports.MuiFileInput = MuiFileInput;
	exports.MuiMessage = MuiMessage;
	exports.MuiMultiSelectInput = MuiMultiSelectInput;
	exports.MuiSelectInput = MuiSelectInput;
	exports.MuiTextInput = MuiTextInput;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC11aS1yZWFjdC51bWQucG9seWZpbGwuanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2dsb2JhbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2ZhaWxzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvY2xhc3NvZi1yYXcuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9pbmRleGVkLW9iamVjdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaXMtb2JqZWN0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvcGF0aC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9uYXRpdmUtc3ltYm9sLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9pcy1zeW1ib2wuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9vcmRpbmFyeS10by1wcmltaXRpdmUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9pcy1wdXJlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvc2V0LWdsb2JhbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3NoYXJlZC1zdG9yZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3NoYXJlZC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3RvLW9iamVjdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2hhcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3VpZC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9pcy1mb3JjZWQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9hLWZ1bmN0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvYW4tb2JqZWN0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2V4cG9ydC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3NoYXJlZC1rZXkuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2EtcG9zc2libGUtcHJvdG90eXBlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvb2JqZWN0LXNldC1wcm90b3R5cGUtb2YuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy90by1pbnRlZ2VyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2hpZGRlbi1rZXlzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvb2JqZWN0LWtleXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnRpZXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9odG1sLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2l0ZXJhdG9ycy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2lzLWFycmF5LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3RvLXN0cmluZy10YWctc3VwcG9ydC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2NsYXNzb2YuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaXRlcmF0b3ItY2xvc2UuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9pdGVyYXRlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvdG8tc3RyaW5nLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLmFnZ3JlZ2F0ZS1lcnJvci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvbmF0aXZlLXdlYWstbWFwLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9pdGVyYXRvcnMtY29yZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL29iamVjdC10by1zdHJpbmcuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2NyZWF0ZS1pdGVyYXRvci1jb25zdHJ1Y3Rvci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3JlZGVmaW5lLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZGVmaW5lLWl0ZXJhdG9yLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLmFycmF5Lml0ZXJhdG9yLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvbmF0aXZlLXByb21pc2UtY29uc3RydWN0b3IuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9yZWRlZmluZS1hbGwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9zZXQtc3BlY2llcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2FuLWluc3RhbmNlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvY2hlY2stY29ycmVjdG5lc3Mtb2YtaXRlcmF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2VuZ2luZS1pcy1pb3MuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9lbmdpbmUtaXMtbm9kZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3Rhc2suanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9lbmdpbmUtaXMtaW9zLXBlYmJsZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2VuZ2luZS1pcy13ZWJvcy13ZWJraXQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9taWNyb3Rhc2suanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvcHJvbWlzZS1yZXNvbHZlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaG9zdC1yZXBvcnQtZXJyb3JzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvcGVyZm9ybS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2VuZ2luZS1pcy1icm93c2VyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLnByb21pc2UuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMucHJvbWlzZS5hbGwtc2V0dGxlZC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5wcm9taXNlLmFueS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5wcm9taXNlLmZpbmFsbHkuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9zdHJpbmctbXVsdGlieXRlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLnN0cmluZy5pdGVyYXRvci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZXMvcHJvbWlzZS9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2RvbS1pdGVyYWJsZXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5pdGVyYXRvci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvc3RhYmxlL3Byb21pc2UvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXNuZXh0LnByb21pc2UudHJ5LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9mZWF0dXJlcy9wcm9taXNlL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy9wcm9taXNlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2lzLWFycmF5LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLmFycmF5LmlzLWFycmF5LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9lcy9hcnJheS9pcy1hcnJheS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvc3RhYmxlL2FycmF5L2lzLWFycmF5LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9mZWF0dXJlcy9hcnJheS9pcy1hcnJheS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMvYXJyYXkvaXMtYXJyYXkuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvaGVscGVycy9lc20vYXJyYXlXaXRob3V0SG9sZXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHkuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5hcnJheS5jb25jYXQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLWV4dGVybmFsLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLXdyYXBwZWQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9kZWZpbmUtd2VsbC1rbm93bi1zeW1ib2wuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMuc3ltYm9sLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5zeW1ib2wuaGFzLWluc3RhbmNlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLnN5bWJvbC5pcy1jb25jYXQtc3ByZWFkYWJsZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5zeW1ib2wuaXRlcmF0b3IuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMuc3ltYm9sLm1hdGNoLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLnN5bWJvbC5tYXRjaC1hbGwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMuc3ltYm9sLnJlcGxhY2UuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMuc3ltYm9sLnNlYXJjaC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5zeW1ib2wuc3BlY2llcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5zeW1ib2wuc3BsaXQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMuc3ltYm9sLnRvLXByaW1pdGl2ZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5zeW1ib2wudG8tc3RyaW5nLXRhZy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5zeW1ib2wudW5zY29wYWJsZXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMuanNvbi50by1zdHJpbmctdGFnLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9lcy9zeW1ib2wvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL3N0YWJsZS9zeW1ib2wvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXNuZXh0LnN5bWJvbC5hc3luYy1kaXNwb3NlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzbmV4dC5zeW1ib2wuZGlzcG9zZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lc25leHQuc3ltYm9sLm1hdGNoZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXNuZXh0LnN5bWJvbC5tZXRhZGF0YS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lc25leHQuc3ltYm9sLm9ic2VydmFibGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXNuZXh0LnN5bWJvbC5wYXR0ZXJuLW1hdGNoLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzbmV4dC5zeW1ib2wucmVwbGFjZS1hbGwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ZlYXR1cmVzL3N5bWJvbC9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMvc3ltYm9sLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9lcy9nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9zdGFibGUvZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZmVhdHVyZXMvZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMvZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2NhbGwtd2l0aC1zYWZlLWl0ZXJhdGlvbi1jbG9zaW5nLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvYXJyYXktZnJvbS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5hcnJheS5mcm9tLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9lcy9hcnJheS9mcm9tLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9zdGFibGUvYXJyYXkvZnJvbS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZmVhdHVyZXMvYXJyYXkvZnJvbS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMvYXJyYXkvZnJvbS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5hcnJheS5zbGljZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2VudHJ5LXZpcnR1YWwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2VzL2FycmF5L3ZpcnR1YWwvc2xpY2UuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2VzL2luc3RhbmNlL3NsaWNlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9zdGFibGUvaW5zdGFuY2Uvc2xpY2UuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ZlYXR1cmVzL2luc3RhbmNlL3NsaWNlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy9pbnN0YW5jZS9zbGljZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5vYmplY3Qua2V5cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZXMvb2JqZWN0L2tleXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL3N0YWJsZS9vYmplY3Qva2V5cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZmVhdHVyZXMvb2JqZWN0L2tleXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzL29iamVjdC9rZXlzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9lcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9zdGFibGUvb2JqZWN0L2dldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZmVhdHVyZXMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5hcnJheS5maWx0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2VzL2FycmF5L3ZpcnR1YWwvZmlsdGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9lcy9pbnN0YW5jZS9maWx0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL3N0YWJsZS9pbnN0YW5jZS9maWx0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ZlYXR1cmVzL2luc3RhbmNlL2ZpbHRlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMvaW5zdGFuY2UvZmlsdGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2VzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL3N0YWJsZS9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9mZWF0dXJlcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLmFycmF5LmZvci1lYWNoLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9lcy9hcnJheS92aXJ0dWFsL2Zvci1lYWNoLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9zdGFibGUvYXJyYXkvdmlydHVhbC9mb3ItZWFjaC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvc3RhYmxlL2luc3RhbmNlL2Zvci1lYWNoLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9mZWF0dXJlcy9pbnN0YW5jZS9mb3ItZWFjaC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMvaW5zdGFuY2UvZm9yLWVhY2guanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9vd24ta2V5cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9ycy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZXMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcnMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL3N0YWJsZS9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9ycy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZmVhdHVyZXMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcnMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLm9iamVjdC5kZWZpbmUtcHJvcGVydGllcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZXMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0aWVzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9zdGFibGUvb2JqZWN0L2RlZmluZS1wcm9wZXJ0aWVzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9mZWF0dXJlcy9vYmplY3QvZGVmaW5lLXByb3BlcnRpZXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydGllcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9lcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9zdGFibGUvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZmVhdHVyZXMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvcmVnZW5lcmF0b3IvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMuYXJyYXkubWFwLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9lcy9hcnJheS92aXJ0dWFsL21hcC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZXMvaW5zdGFuY2UvbWFwLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9zdGFibGUvaW5zdGFuY2UvbWFwLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9mZWF0dXJlcy9pbnN0YW5jZS9tYXAuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzL2luc3RhbmNlL21hcC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5hcnJheS5pbmRleC1vZi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZXMvYXJyYXkvdmlydHVhbC9pbmRleC1vZi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZXMvaW5zdGFuY2UvaW5kZXgtb2YuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL3N0YWJsZS9pbnN0YW5jZS9pbmRleC1vZi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZmVhdHVyZXMvaW5zdGFuY2UvaW5kZXgtb2YuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzL2luc3RhbmNlL2luZGV4LW9mLmpzIiwiLi4vLi4vc3JjL2NoYXQtY29udHJvbGxlci50cyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hdWRpby1yZWNvcmRlci1wb2x5ZmlsbC93YXZlLWVuY29kZXIvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYXVkaW8tcmVjb3JkZXItcG9seWZpbGwvaW5kZXguanMiLCIuLi8uLi9zcmMvYXVkaW8tbWVkaWEtcmVjb3JkZXIudHMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9oZWxwZXJzL2VzbS9hcnJheVdpdGhIb2xlcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kYXlqcy9kYXlqcy5taW4uanMiLCIuLi8uLi9zcmMvbXVpL011aUF1ZGlvSW5wdXQudHN4IiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9lcy9hcnJheS92aXJ0dWFsL2NvbmNhdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZXMvaW5zdGFuY2UvY29uY2F0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9zdGFibGUvaW5zdGFuY2UvY29uY2F0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9mZWF0dXJlcy9pbnN0YW5jZS9jb25jYXQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzL2luc3RhbmNlL2NvbmNhdC5qcyIsIi4uLy4uL3NyYy9tdWkvTXVpRmlsZUlucHV0LnRzeCIsIi4uLy4uL3NyYy9tdWkvTXVpTWVzc2FnZS50c3giLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMuYXJyYXkuaW5jbHVkZXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2VzL2FycmF5L3ZpcnR1YWwvaW5jbHVkZXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9pcy1yZWdleHAuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9ub3QtYS1yZWdleHAuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9jb3JyZWN0LWlzLXJlZ2V4cC1sb2dpYy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5zdHJpbmcuaW5jbHVkZXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2VzL3N0cmluZy92aXJ0dWFsL2luY2x1ZGVzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9lcy9pbnN0YW5jZS9pbmNsdWRlcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvc3RhYmxlL2luc3RhbmNlL2luY2x1ZGVzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9mZWF0dXJlcy9pbnN0YW5jZS9pbmNsdWRlcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMvaW5zdGFuY2UvaW5jbHVkZXMuanMiLCIuLi8uLi9zcmMvbXVpL011aU11bHRpU2VsZWN0SW5wdXQudHN4IiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLmFycmF5LmZpbmQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2VzL2FycmF5L3ZpcnR1YWwvZmluZC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZXMvaW5zdGFuY2UvZmluZC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvc3RhYmxlL2luc3RhbmNlL2ZpbmQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ZlYXR1cmVzL2luc3RhbmNlL2ZpbmQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzL2luc3RhbmNlL2ZpbmQuanMiLCIuLi8uLi9zcmMvbXVpL011aVNlbGVjdElucHV0LnRzeCIsIi4uLy4uL3NyYy9tdWkvTXVpVGV4dElucHV0LnRzeCIsIi4uLy4uL3NyYy9tdWkvTXVpQ2hhdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGNoZWNrID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAmJiBpdC5NYXRoID09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZ2xvYmFsLXRoaXMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gZmFsbGJhY2tcbiAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pKCkgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gRGV0ZWN0IElFOCdzIGluY29tcGxldGUgZGVmaW5lUHJvcGVydHkgaW1wbGVtZW50YXRpb25cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAxLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KVsxXSAhPSA3O1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gTmFzaG9ybiB+IEpESzggYnVnXG52YXIgTkFTSE9STl9CVUcgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgISRwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgMTogMiB9LCAxKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnByb3BlcnR5aXNlbnVtZXJhYmxlXG5leHBvcnRzLmYgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgVik7XG4gIHJldHVybiAhIWRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5lbnVtZXJhYmxlO1xufSA6ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbnZhciBzcGxpdCA9ICcnLnNwbGl0O1xuXG4vLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xubW9kdWxlLmV4cG9ydHMgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIHRocm93cyBhbiBlcnJvciBpbiByaGlubywgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3JoaW5vL2lzc3Vlcy8zNDZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGlucyAtLSBzYWZlXG4gIHJldHVybiAhT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCk7XG59KSA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY2xhc3NvZihpdCkgPT0gJ1N0cmluZycgPyBzcGxpdC5jYWxsKGl0LCAnJykgOiBPYmplY3QoaXQpO1xufSA6IE9iamVjdDtcbiIsIi8vIGBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVxdWlyZW9iamVjdGNvZXJjaWJsZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSW5kZXhlZE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGl0KSk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwidmFyIHBhdGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGF0aCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxudmFyIGFGdW5jdGlvbiA9IGZ1bmN0aW9uICh2YXJpYWJsZSkge1xuICByZXR1cm4gdHlwZW9mIHZhcmlhYmxlID09ICdmdW5jdGlvbicgPyB2YXJpYWJsZSA6IHVuZGVmaW5lZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWVzcGFjZSwgbWV0aG9kKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGFGdW5jdGlvbihwYXRoW25hbWVzcGFjZV0pIHx8IGFGdW5jdGlvbihnbG9iYWxbbmFtZXNwYWNlXSlcbiAgICA6IHBhdGhbbmFtZXNwYWNlXSAmJiBwYXRoW25hbWVzcGFjZV1bbWV0aG9kXSB8fCBnbG9iYWxbbmFtZXNwYWNlXSAmJiBnbG9iYWxbbmFtZXNwYWNlXVttZXRob2RdO1xufTtcbiIsInZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ25hdmlnYXRvcicsICd1c2VyQWdlbnQnKSB8fCAnJztcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG5cbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgRGVubyA9IGdsb2JhbC5EZW5vO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zIHx8IERlbm8gJiYgRGVuby52ZXJzaW9uO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjg7XG52YXIgbWF0Y2gsIHZlcnNpb247XG5cbmlmICh2OCkge1xuICBtYXRjaCA9IHY4LnNwbGl0KCcuJyk7XG4gIHZlcnNpb24gPSBtYXRjaFswXSA8IDQgPyAxIDogbWF0Y2hbMF0gKyBtYXRjaFsxXTtcbn0gZWxzZSBpZiAodXNlckFnZW50KSB7XG4gIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvKFxcZCspLyk7XG4gIGlmICghbWF0Y2ggfHwgbWF0Y2hbMV0gPj0gNzQpIHtcbiAgICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvQ2hyb21lXFwvKFxcZCspLyk7XG4gICAgaWYgKG1hdGNoKSB2ZXJzaW9uID0gbWF0Y2hbMV07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJzaW9uICYmICt2ZXJzaW9uO1xuIiwiLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9ICEhT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgc3ltYm9sID0gU3ltYm9sKCk7XG4gIC8vIENocm9tZSAzOCBTeW1ib2wgaGFzIGluY29ycmVjdCB0b1N0cmluZyBjb252ZXJzaW9uXG4gIC8vIGBnZXQtb3duLXByb3BlcnR5LXN5bWJvbHNgIHBvbHlmaWxsIHN5bWJvbHMgY29udmVydGVkIHRvIG9iamVjdCBhcmUgbm90IFN5bWJvbCBpbnN0YW5jZXNcbiAgcmV0dXJuICFTdHJpbmcoc3ltYm9sKSB8fCAhKE9iamVjdChzeW1ib2wpIGluc3RhbmNlb2YgU3ltYm9sKSB8fFxuICAgIC8vIENocm9tZSAzOC00MCBzeW1ib2xzIGFyZSBub3QgaW5oZXJpdGVkIGZyb20gRE9NIGNvbGxlY3Rpb25zIHByb3RvdHlwZXMgdG8gaW5zdGFuY2VzXG4gICAgIVN5bWJvbC5zaGFtICYmIFY4X1ZFUlNJT04gJiYgVjhfVkVSU0lPTiA8IDQxO1xufSk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25hdGl2ZS1zeW1ib2wnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfU1lNQk9MXG4gICYmICFTeW1ib2wuc2hhbVxuICAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnO1xuIiwidmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgJFN5bWJvbCA9IGdldEJ1aWx0SW4oJ1N5bWJvbCcpO1xuICByZXR1cm4gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJyAmJiBPYmplY3QoaXQpIGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbi8vIGBPcmRpbmFyeVRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb3JkaW5hcnl0b3ByaW1pdGl2ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5wdXQsIHByZWYpIHtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChwcmVmID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgKGZuID0gaW5wdXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpbnB1dC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChwcmVmICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgKGZuID0gaW5wdXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdHJ5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZ2xvYmFsLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFtrZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2V0R2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1nbG9iYWwnKTtcblxudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgc2V0R2xvYmFsKFNIQVJFRCwge30pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0b3JlO1xuIiwidmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogJzMuMTcuMycsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAyMSBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbn0pO1xuIiwidmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbi8vIGBUb09iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvb2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpKTtcbn07XG4iLCJ2YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5oYXNPd24gfHwgZnVuY3Rpb24gaGFzT3duKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwodG9PYmplY3QoaXQpLCBrZXkpO1xufTtcbiIsInZhciBpZCA9IDA7XG52YXIgcG9zdGZpeCA9IE1hdGgucmFuZG9tKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnICsgU3RyaW5nKGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXkpICsgJylfJyArICgrK2lkICsgcG9zdGZpeCkudG9TdHJpbmcoMzYpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uYXRpdmUtc3ltYm9sJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciBjcmVhdGVXZWxsS25vd25TeW1ib2wgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IFN5bWJvbCA6IFN5bWJvbCAmJiBTeW1ib2wud2l0aG91dFNldHRlciB8fCB1aWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKCFoYXMoV2VsbEtub3duU3ltYm9sc1N0b3JlLCBuYW1lKSB8fCAhKE5BVElWRV9TWU1CT0wgfHwgdHlwZW9mIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9PSAnc3RyaW5nJykpIHtcbiAgICBpZiAoTkFUSVZFX1NZTUJPTCAmJiBoYXMoU3ltYm9sLCBuYW1lKSkge1xuICAgICAgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gU3ltYm9sW25hbWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV0gPSBjcmVhdGVXZWxsS25vd25TeW1ib2woJ1N5bWJvbC4nICsgbmFtZSk7XG4gICAgfVxuICB9IHJldHVybiBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV07XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xudmFyIG9yZGluYXJ5VG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3JkaW5hcnktdG8tcHJpbWl0aXZlJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBUT19QUklNSVRJVkUgPSB3ZWxsS25vd25TeW1ib2woJ3RvUHJpbWl0aXZlJyk7XG5cbi8vIGBUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICBpZiAoIWlzT2JqZWN0KGlucHV0KSB8fCBpc1N5bWJvbChpbnB1dCkpIHJldHVybiBpbnB1dDtcbiAgdmFyIGV4b3RpY1RvUHJpbSA9IGlucHV0W1RPX1BSSU1JVElWRV07XG4gIHZhciByZXN1bHQ7XG4gIGlmIChleG90aWNUb1ByaW0gIT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnZGVmYXVsdCc7XG4gICAgcmVzdWx0ID0gZXhvdGljVG9QcmltLmNhbGwoaW5wdXQsIHByZWYpO1xuICAgIGlmICghaXNPYmplY3QocmVzdWx0KSB8fCBpc1N5bWJvbChyZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xuICAgIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbiAgfVxuICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ251bWJlcic7XG4gIHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBwcmVmKTtcbn07XG4iLCJ2YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG5cbi8vIGBUb1Byb3BlcnR5S2V5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcm9wZXJ0eWtleVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCAnc3RyaW5nJyk7XG4gIHJldHVybiBpc1N5bWJvbChrZXkpID8ga2V5IDogU3RyaW5nKGtleSk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyIGRvY3VtZW50ID0gZ2xvYmFsLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgRVhJU1RTID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gRVhJU1RTID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxuLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aWVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9IDc7XG59KTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyIHJlcGxhY2VtZW50ID0gLyN8XFwucHJvdG90eXBlXFwuLztcblxudmFyIGlzRm9yY2VkID0gZnVuY3Rpb24gKGZlYXR1cmUsIGRldGVjdGlvbikge1xuICB2YXIgdmFsdWUgPSBkYXRhW25vcm1hbGl6ZShmZWF0dXJlKV07XG4gIHJldHVybiB2YWx1ZSA9PSBQT0xZRklMTCA/IHRydWVcbiAgICA6IHZhbHVlID09IE5BVElWRSA/IGZhbHNlXG4gICAgOiB0eXBlb2YgZGV0ZWN0aW9uID09ICdmdW5jdGlvbicgPyBmYWlscyhkZXRlY3Rpb24pXG4gICAgOiAhIWRldGVjdGlvbjtcbn07XG5cbnZhciBub3JtYWxpemUgPSBpc0ZvcmNlZC5ub3JtYWxpemUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKHJlcGxhY2VtZW50LCAnLicpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgZGF0YSA9IGlzRm9yY2VkLmRhdGEgPSB7fTtcbnZhciBOQVRJVkUgPSBpc0ZvcmNlZC5OQVRJVkUgPSAnTic7XG52YXIgUE9MWUZJTEwgPSBpc0ZvcmNlZC5QT0xZRklMTCA9ICdQJztcblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZvcmNlZDtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IFR5cGVFcnJvcihTdHJpbmcoaXQpICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJ2YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcblxuLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0KTtcbiAgICB9O1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoU3RyaW5nKGl0KSArICcgaXMgbm90IGFuIG9iamVjdCcpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyAkZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBrZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcbnZhciBwYXRoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3BhdGgnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG5cbnZhciB3cmFwQ29uc3RydWN0b3IgPSBmdW5jdGlvbiAoTmF0aXZlQ29uc3RydWN0b3IpIHtcbiAgdmFyIFdyYXBwZXIgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgTmF0aXZlQ29uc3RydWN0b3IpIHtcbiAgICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgTmF0aXZlQ29uc3RydWN0b3IoKTtcbiAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IE5hdGl2ZUNvbnN0cnVjdG9yKGEpO1xuICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgTmF0aXZlQ29uc3RydWN0b3IoYSwgYik7XG4gICAgICB9IHJldHVybiBuZXcgTmF0aXZlQ29uc3RydWN0b3IoYSwgYiwgYyk7XG4gICAgfSByZXR1cm4gTmF0aXZlQ29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbiAgV3JhcHBlci5wcm90b3R5cGUgPSBOYXRpdmVDb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIHJldHVybiBXcmFwcGVyO1xufTtcblxuLypcbiAgb3B0aW9ucy50YXJnZXQgICAgICAtIG5hbWUgb2YgdGhlIHRhcmdldCBvYmplY3RcbiAgb3B0aW9ucy5nbG9iYWwgICAgICAtIHRhcmdldCBpcyB0aGUgZ2xvYmFsIG9iamVjdFxuICBvcHRpb25zLnN0YXQgICAgICAgIC0gZXhwb3J0IGFzIHN0YXRpYyBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnByb3RvICAgICAgIC0gZXhwb3J0IGFzIHByb3RvdHlwZSBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnJlYWwgICAgICAgIC0gcmVhbCBwcm90b3R5cGUgbWV0aG9kIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy5mb3JjZWQgICAgICAtIGV4cG9ydCBldmVuIGlmIHRoZSBuYXRpdmUgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgb3B0aW9ucy5iaW5kICAgICAgICAtIGJpbmQgbWV0aG9kcyB0byB0aGUgdGFyZ2V0LCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMud3JhcCAgICAgICAgLSB3cmFwIGNvbnN0cnVjdG9ycyB0byBwcmV2ZW50aW5nIGdsb2JhbCBwb2xsdXRpb24sIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy51bnNhZmUgICAgICAtIHVzZSB0aGUgc2ltcGxlIGFzc2lnbm1lbnQgb2YgcHJvcGVydHkgaW5zdGVhZCBvZiBkZWxldGUgKyBkZWZpbmVQcm9wZXJ0eVxuICBvcHRpb25zLnNoYW0gICAgICAgIC0gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICBvcHRpb25zLmVudW1lcmFibGUgIC0gZXhwb3J0IGFzIGVudW1lcmFibGUgcHJvcGVydHlcbiAgb3B0aW9ucy5ub1RhcmdldEdldCAtIHByZXZlbnQgY2FsbGluZyBhIGdldHRlciBvbiB0YXJnZXRcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRpb25zLCBzb3VyY2UpIHtcbiAgdmFyIFRBUkdFVCA9IG9wdGlvbnMudGFyZ2V0O1xuICB2YXIgR0xPQkFMID0gb3B0aW9ucy5nbG9iYWw7XG4gIHZhciBTVEFUSUMgPSBvcHRpb25zLnN0YXQ7XG4gIHZhciBQUk9UTyA9IG9wdGlvbnMucHJvdG87XG5cbiAgdmFyIG5hdGl2ZVNvdXJjZSA9IEdMT0JBTCA/IGdsb2JhbCA6IFNUQVRJQyA/IGdsb2JhbFtUQVJHRVRdIDogKGdsb2JhbFtUQVJHRVRdIHx8IHt9KS5wcm90b3R5cGU7XG5cbiAgdmFyIHRhcmdldCA9IEdMT0JBTCA/IHBhdGggOiBwYXRoW1RBUkdFVF0gfHwgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHBhdGgsIFRBUkdFVCwge30pW1RBUkdFVF07XG4gIHZhciB0YXJnZXRQcm90b3R5cGUgPSB0YXJnZXQucHJvdG90eXBlO1xuXG4gIHZhciBGT1JDRUQsIFVTRV9OQVRJVkUsIFZJUlRVQUxfUFJPVE9UWVBFO1xuICB2YXIga2V5LCBzb3VyY2VQcm9wZXJ0eSwgdGFyZ2V0UHJvcGVydHksIG5hdGl2ZVByb3BlcnR5LCByZXN1bHRQcm9wZXJ0eSwgZGVzY3JpcHRvcjtcblxuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICBGT1JDRUQgPSBpc0ZvcmNlZChHTE9CQUwgPyBrZXkgOiBUQVJHRVQgKyAoU1RBVElDID8gJy4nIDogJyMnKSArIGtleSwgb3B0aW9ucy5mb3JjZWQpO1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIFVTRV9OQVRJVkUgPSAhRk9SQ0VEICYmIG5hdGl2ZVNvdXJjZSAmJiBoYXMobmF0aXZlU291cmNlLCBrZXkpO1xuXG4gICAgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRba2V5XTtcblxuICAgIGlmIChVU0VfTkFUSVZFKSBpZiAob3B0aW9ucy5ub1RhcmdldEdldCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihuYXRpdmVTb3VyY2UsIGtleSk7XG4gICAgICBuYXRpdmVQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZTtcbiAgICB9IGVsc2UgbmF0aXZlUHJvcGVydHkgPSBuYXRpdmVTb3VyY2Vba2V5XTtcblxuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgaW1wbGVtZW50YXRpb25cbiAgICBzb3VyY2VQcm9wZXJ0eSA9IChVU0VfTkFUSVZFICYmIG5hdGl2ZVByb3BlcnR5KSA/IG5hdGl2ZVByb3BlcnR5IDogc291cmNlW2tleV07XG5cbiAgICBpZiAoVVNFX05BVElWRSAmJiB0eXBlb2YgdGFyZ2V0UHJvcGVydHkgPT09IHR5cGVvZiBzb3VyY2VQcm9wZXJ0eSkgY29udGludWU7XG5cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGlmIChvcHRpb25zLmJpbmQgJiYgVVNFX05BVElWRSkgcmVzdWx0UHJvcGVydHkgPSBiaW5kKHNvdXJjZVByb3BlcnR5LCBnbG9iYWwpO1xuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ3MgaW4gdGhpcyB2ZXJzaW9uXG4gICAgZWxzZSBpZiAob3B0aW9ucy53cmFwICYmIFVTRV9OQVRJVkUpIHJlc3VsdFByb3BlcnR5ID0gd3JhcENvbnN0cnVjdG9yKHNvdXJjZVByb3BlcnR5KTtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICBlbHNlIGlmIChQUk9UTyAmJiB0eXBlb2Ygc291cmNlUHJvcGVydHkgPT0gJ2Z1bmN0aW9uJykgcmVzdWx0UHJvcGVydHkgPSBiaW5kKEZ1bmN0aW9uLmNhbGwsIHNvdXJjZVByb3BlcnR5KTtcbiAgICAvLyBkZWZhdWx0IGNhc2VcbiAgICBlbHNlIHJlc3VsdFByb3BlcnR5ID0gc291cmNlUHJvcGVydHk7XG5cbiAgICAvLyBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gICAgaWYgKG9wdGlvbnMuc2hhbSB8fCAoc291cmNlUHJvcGVydHkgJiYgc291cmNlUHJvcGVydHkuc2hhbSkgfHwgKHRhcmdldFByb3BlcnR5ICYmIHRhcmdldFByb3BlcnR5LnNoYW0pKSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkocmVzdWx0UHJvcGVydHksICdzaGFtJywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHRhcmdldCwga2V5LCByZXN1bHRQcm9wZXJ0eSk7XG5cbiAgICBpZiAoUFJPVE8pIHtcbiAgICAgIFZJUlRVQUxfUFJPVE9UWVBFID0gVEFSR0VUICsgJ1Byb3RvdHlwZSc7XG4gICAgICBpZiAoIWhhcyhwYXRoLCBWSVJUVUFMX1BST1RPVFlQRSkpIHtcbiAgICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHBhdGgsIFZJUlRVQUxfUFJPVE9UWVBFLCB7fSk7XG4gICAgICB9XG4gICAgICAvLyBleHBvcnQgdmlydHVhbCBwcm90b3R5cGUgbWV0aG9kc1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHBhdGhbVklSVFVBTF9QUk9UT1RZUEVdLCBrZXksIHNvdXJjZVByb3BlcnR5KTtcbiAgICAgIC8vIGV4cG9ydCByZWFsIHByb3RvdHlwZSBtZXRob2RzXG4gICAgICBpZiAob3B0aW9ucy5yZWFsICYmIHRhcmdldFByb3RvdHlwZSAmJiAhdGFyZ2V0UHJvdG90eXBlW2tleV0pIHtcbiAgICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHRhcmdldFByb3RvdHlwZSwga2V5LCBzb3VyY2VQcm9wZXJ0eSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG5cbnZhciBrZXlzID0gc2hhcmVkKCdrZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4ga2V5c1trZXldIHx8IChrZXlzW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRigpIHsgLyogZW1wdHkgKi8gfVxuICBGLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IG51bGw7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0cHJvdG90eXBlb2YgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZihuZXcgRigpKSAhPT0gRi5wcm90b3R5cGU7XG59KTtcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBDT1JSRUNUX1BST1RPVFlQRV9HRVRURVIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29ycmVjdC1wcm90b3R5cGUtZ2V0dGVyJyk7XG5cbnZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlO1xuXG4vLyBgT2JqZWN0LmdldFByb3RvdHlwZU9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldHByb3RvdHlwZW9mXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldHByb3RvdHlwZW9mIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gQ09SUkVDVF9QUk9UT1RZUEVfR0VUVEVSID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvdHlwZSA6IG51bGw7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSAmJiBpdCAhPT0gbnVsbCkge1xuICAgIHRocm93IFR5cGVFcnJvcihcIkNhbid0IHNldCBcIiArIFN0cmluZyhpdCkgKyAnIGFzIGEgcHJvdG90eXBlJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvIC0tIHNhZmUgKi9cbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBhUG9zc2libGVQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1wb3NzaWJsZS1wcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5zZXRQcm90b3R5cGVPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5zZXRwcm90b3R5cGVvZlxuLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LXNldHByb3RvdHlwZW9mIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IGZ1bmN0aW9uICgpIHtcbiAgdmFyIENPUlJFQ1RfU0VUVEVSID0gZmFsc2U7XG4gIHZhciB0ZXN0ID0ge307XG4gIHZhciBzZXR0ZXI7XG4gIHRyeSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxuICAgIHNldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldDtcbiAgICBzZXR0ZXIuY2FsbCh0ZXN0LCBbXSk7XG4gICAgQ09SUkVDVF9TRVRURVIgPSB0ZXN0IGluc3RhbmNlb2YgQXJyYXk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgYW5PYmplY3QoTyk7XG4gICAgYVBvc3NpYmxlUHJvdG90eXBlKHByb3RvKTtcbiAgICBpZiAoQ09SUkVDVF9TRVRURVIpIHNldHRlci5jYWxsKE8sIHByb3RvKTtcbiAgICBlbHNlIE8uX19wcm90b19fID0gcHJvdG87XG4gICAgcmV0dXJuIE87XG4gIH07XG59KCkgOiB1bmRlZmluZWQpO1xuIiwidmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgVG9JbnRlZ2VyYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9pbnRlZ2VyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gaXNOYU4oYXJndW1lbnQgPSArYXJndW1lbnQpID8gMCA6IChhcmd1bWVudCA+IDAgPyBmbG9vciA6IGNlaWwpKGFyZ3VtZW50KTtcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXInKTtcblxudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgVG9MZW5ndGhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2xlbmd0aFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGFyZ3VtZW50ID4gMCA/IG1pbih0b0ludGVnZXIoYXJndW1lbnQpLCAweDFGRkZGRkZGRkZGRkZGKSA6IDA7IC8vIDIgKiogNTMgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXInKTtcblxudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBIZWxwZXIgZm9yIGEgcG9wdWxhciByZXBlYXRpbmcgY2FzZSBvZiB0aGUgc3BlYzpcbi8vIExldCBpbnRlZ2VyIGJlID8gVG9JbnRlZ2VyKGluZGV4KS5cbi8vIElmIGludGVnZXIgPCAwLCBsZXQgcmVzdWx0IGJlIG1heCgobGVuZ3RoICsgaW50ZWdlciksIDApOyBlbHNlIGxldCByZXN1bHQgYmUgbWluKGludGVnZXIsIGxlbmd0aCkuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIHZhciBpbnRlZ2VyID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGludGVnZXIgPCAwID8gbWF4KGludGVnZXIgKyBsZW5ndGgsIDApIDogbWluKGludGVnZXIsIGxlbmd0aCk7XG59O1xuIiwidmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgaW5kZXhPZiwgaW5jbHVkZXMgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgIGlmICgoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykgJiYgT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG4gIGluY2x1ZGVzOiBjcmVhdGVNZXRob2QodHJ1ZSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5kZXhPZmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiAgaW5kZXhPZjogY3JlYXRlTWV0aG9kKGZhbHNlKVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGluZGV4T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmRleE9mO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgIWhhcyhoaWRkZW5LZXlzLCBrZXkpICYmIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+aW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIi8vIElFOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSBbXG4gICdjb25zdHJ1Y3RvcicsXG4gICdoYXNPd25Qcm9wZXJ0eScsXG4gICdpc1Byb3RvdHlwZU9mJyxcbiAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcbiAgJ3RvTG9jYWxlU3RyaW5nJyxcbiAgJ3RvU3RyaW5nJyxcbiAgJ3ZhbHVlT2YnXG5dO1xuIiwidmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxuLy8gYE9iamVjdC5rZXlzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmtleXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3Qta2V5cyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cycpO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnRpZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydGllc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0aWVzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBvYmplY3RLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsZW5ndGggPiBpbmRleCkgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXkgPSBrZXlzW2luZGV4KytdLCBQcm9wZXJ0aWVzW2tleV0pO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCdkb2N1bWVudCcsICdkb2N1bWVudEVsZW1lbnQnKTtcbiIsIi8qIGdsb2JhbCBBY3RpdmVYT2JqZWN0IC0tIG9sZCBJRSwgV1NIICovXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZGVmaW5lUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaHRtbCcpO1xudmFyIGRvY3VtZW50Q3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG5cbnZhciBHVCA9ICc+JztcbnZhciBMVCA9ICc8JztcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBTQ1JJUFQgPSAnc2NyaXB0JztcbnZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcblxudmFyIEVtcHR5Q29uc3RydWN0b3IgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cbnZhciBzY3JpcHRUYWcgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICByZXR1cm4gTFQgKyBTQ1JJUFQgKyBHVCArIGNvbnRlbnQgKyBMVCArICcvJyArIFNDUklQVCArIEdUO1xufTtcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIEFjdGl2ZVggT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYID0gZnVuY3Rpb24gKGFjdGl2ZVhEb2N1bWVudCkge1xuICBhY3RpdmVYRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCcnKSk7XG4gIGFjdGl2ZVhEb2N1bWVudC5jbG9zZSgpO1xuICB2YXIgdGVtcCA9IGFjdGl2ZVhEb2N1bWVudC5wYXJlbnRXaW5kb3cuT2JqZWN0O1xuICBhY3RpdmVYRG9jdW1lbnQgPSBudWxsOyAvLyBhdm9pZCBtZW1vcnkgbGVha1xuICByZXR1cm4gdGVtcDtcbn07XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSBkb2N1bWVudENyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICB2YXIgSlMgPSAnamF2YScgKyBTQ1JJUFQgKyAnOic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGh0bWwuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzQ3NVxuICBpZnJhbWUuc3JjID0gU3RyaW5nKEpTKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShzY3JpcHRUYWcoJ2RvY3VtZW50LkY9T2JqZWN0JykpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICByZXR1cm4gaWZyYW1lRG9jdW1lbnQuRjtcbn07XG5cbi8vIENoZWNrIGZvciBkb2N1bWVudC5kb21haW4gYW5kIGFjdGl2ZSB4IHN1cHBvcnRcbi8vIE5vIG5lZWQgdG8gdXNlIGFjdGl2ZSB4IGFwcHJvYWNoIHdoZW4gZG9jdW1lbnQuZG9tYWluIGlzIG5vdCBzZXRcbi8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW0vaXNzdWVzLzE1MFxuLy8gdmFyaWF0aW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9raXRjYW1icmlkZ2UvZXM1LXNoaW0vY29tbWl0LzRmNzM4YWMwNjYzNDZcbi8vIGF2b2lkIElFIEdDIGJ1Z1xudmFyIGFjdGl2ZVhEb2N1bWVudDtcbnZhciBOdWxsUHJvdG9PYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgYWN0aXZlWERvY3VtZW50ID0gbmV3IEFjdGl2ZVhPYmplY3QoJ2h0bWxmaWxlJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGlnbm9yZSAqLyB9XG4gIE51bGxQcm90b09iamVjdCA9IHR5cGVvZiBkb2N1bWVudCAhPSAndW5kZWZpbmVkJ1xuICAgID8gZG9jdW1lbnQuZG9tYWluICYmIGFjdGl2ZVhEb2N1bWVudFxuICAgICAgPyBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYKGFjdGl2ZVhEb2N1bWVudCkgLy8gb2xkIElFXG4gICAgICA6IE51bGxQcm90b09iamVjdFZpYUlGcmFtZSgpXG4gICAgOiBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYKGFjdGl2ZVhEb2N1bWVudCk7IC8vIFdTSFxuICB2YXIgbGVuZ3RoID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIGRlbGV0ZSBOdWxsUHJvdG9PYmplY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tsZW5ndGhdXTtcbiAgcmV0dXJuIE51bGxQcm90b09iamVjdCgpO1xufTtcblxuaGlkZGVuS2V5c1tJRV9QUk9UT10gPSB0cnVlO1xuXG4vLyBgT2JqZWN0LmNyZWF0ZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5jcmVhdGVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5Q29uc3RydWN0b3JbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eUNvbnN0cnVjdG9yKCk7XG4gICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBOdWxsUHJvdG9PYmplY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRlZmluZVByb3BlcnRpZXMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwidmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlO1xuXG4vLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvdHlwZVtJVEVSQVRPUl0gPT09IGl0KTtcbn07XG4iLCJ2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xudmFyIHRlc3QgPSB7fTtcblxudGVzdFtUT19TVFJJTkdfVEFHXSA9ICd6JztcblxubW9kdWxlLmV4cG9ydHMgPSBTdHJpbmcodGVzdCkgPT09ICdbb2JqZWN0IHpdJztcbiIsInZhciBUT19TVFJJTkdfVEFHX1NVUFBPUlQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nLXRhZy1zdXBwb3J0Jyk7XG52YXIgY2xhc3NvZlJhdyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQ09SUkVDVF9BUkdVTUVOVFMgPSBjbGFzc29mUmF3KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG4vLyBnZXR0aW5nIHRhZyBmcm9tIEVTNisgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgXG5tb2R1bGUuZXhwb3J0cyA9IFRPX1NUUklOR19UQUdfU1VQUE9SVCA/IGNsYXNzb2ZSYXcgOiBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIHRhZywgcmVzdWx0O1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAodGFnID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUT19TVFJJTkdfVEFHKSkgPT0gJ3N0cmluZycgPyB0YWdcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IENPUlJFQ1RfQVJHVU1FTlRTID8gY2xhc3NvZlJhdyhPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChyZXN1bHQgPSBjbGFzc29mUmF3KE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogcmVzdWx0O1xufTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBnZXRJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB1c2luZ0l0ZXJhdG9yKSB7XG4gIHZhciBpdGVyYXRvck1ldGhvZCA9IGFyZ3VtZW50cy5sZW5ndGggPCAyID8gZ2V0SXRlcmF0b3JNZXRob2QoaXQpIDogdXNpbmdJdGVyYXRvcjtcbiAgaWYgKHR5cGVvZiBpdGVyYXRvck1ldGhvZCAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFN0cmluZyhpdCkgKyAnIGlzIG5vdCBpdGVyYWJsZScpO1xuICB9IHJldHVybiBhbk9iamVjdChpdGVyYXRvck1ldGhvZC5jYWxsKGl0KSk7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwga2luZCwgdmFsdWUpIHtcbiAgdmFyIGlubmVyUmVzdWx0LCBpbm5lckVycm9yO1xuICBhbk9iamVjdChpdGVyYXRvcik7XG4gIHRyeSB7XG4gICAgaW5uZXJSZXN1bHQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYgKGlubmVyUmVzdWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChraW5kID09PSAndGhyb3cnKSB0aHJvdyB2YWx1ZTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgaW5uZXJSZXN1bHQgPSBpbm5lclJlc3VsdC5jYWxsKGl0ZXJhdG9yKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpbm5lckVycm9yID0gdHJ1ZTtcbiAgICBpbm5lclJlc3VsdCA9IGVycm9yO1xuICB9XG4gIGlmIChraW5kID09PSAndGhyb3cnKSB0aHJvdyB2YWx1ZTtcbiAgaWYgKGlubmVyRXJyb3IpIHRocm93IGlubmVyUmVzdWx0O1xuICBhbk9iamVjdChpbm5lclJlc3VsdCk7XG4gIHJldHVybiB2YWx1ZTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgaXNBcnJheUl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG52YXIgZ2V0SXRlcmF0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yJyk7XG52YXIgZ2V0SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIGl0ZXJhdG9yQ2xvc2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItY2xvc2UnKTtcblxudmFyIFJlc3VsdCA9IGZ1bmN0aW9uIChzdG9wcGVkLCByZXN1bHQpIHtcbiAgdGhpcy5zdG9wcGVkID0gc3RvcHBlZDtcbiAgdGhpcy5yZXN1bHQgPSByZXN1bHQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgdW5ib3VuZEZ1bmN0aW9uLCBvcHRpb25zKSB7XG4gIHZhciB0aGF0ID0gb3B0aW9ucyAmJiBvcHRpb25zLnRoYXQ7XG4gIHZhciBBU19FTlRSSUVTID0gISEob3B0aW9ucyAmJiBvcHRpb25zLkFTX0VOVFJJRVMpO1xuICB2YXIgSVNfSVRFUkFUT1IgPSAhIShvcHRpb25zICYmIG9wdGlvbnMuSVNfSVRFUkFUT1IpO1xuICB2YXIgSU5URVJSVVBURUQgPSAhIShvcHRpb25zICYmIG9wdGlvbnMuSU5URVJSVVBURUQpO1xuICB2YXIgZm4gPSBiaW5kKHVuYm91bmRGdW5jdGlvbiwgdGhhdCwgMSArIEFTX0VOVFJJRVMgKyBJTlRFUlJVUFRFRCk7XG4gIHZhciBpdGVyYXRvciwgaXRlckZuLCBpbmRleCwgbGVuZ3RoLCByZXN1bHQsIG5leHQsIHN0ZXA7XG5cbiAgdmFyIHN0b3AgPSBmdW5jdGlvbiAoY29uZGl0aW9uKSB7XG4gICAgaWYgKGl0ZXJhdG9yKSBpdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCAnbm9ybWFsJywgY29uZGl0aW9uKTtcbiAgICByZXR1cm4gbmV3IFJlc3VsdCh0cnVlLCBjb25kaXRpb24pO1xuICB9O1xuXG4gIHZhciBjYWxsRm4gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoQVNfRU5UUklFUykge1xuICAgICAgYW5PYmplY3QodmFsdWUpO1xuICAgICAgcmV0dXJuIElOVEVSUlVQVEVEID8gZm4odmFsdWVbMF0sIHZhbHVlWzFdLCBzdG9wKSA6IGZuKHZhbHVlWzBdLCB2YWx1ZVsxXSk7XG4gICAgfSByZXR1cm4gSU5URVJSVVBURUQgPyBmbih2YWx1ZSwgc3RvcCkgOiBmbih2YWx1ZSk7XG4gIH07XG5cbiAgaWYgKElTX0lURVJBVE9SKSB7XG4gICAgaXRlcmF0b3IgPSBpdGVyYWJsZTtcbiAgfSBlbHNlIHtcbiAgICBpdGVyRm4gPSBnZXRJdGVyYXRvck1ldGhvZChpdGVyYWJsZSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKCdUYXJnZXQgaXMgbm90IGl0ZXJhYmxlJyk7XG4gICAgLy8gb3B0aW1pc2F0aW9uIGZvciBhcnJheSBpdGVyYXRvcnNcbiAgICBpZiAoaXNBcnJheUl0ZXJhdG9yTWV0aG9kKGl0ZXJGbikpIHtcbiAgICAgIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgICByZXN1bHQgPSBjYWxsRm4oaXRlcmFibGVbaW5kZXhdKTtcbiAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQgaW5zdGFuY2VvZiBSZXN1bHQpIHJldHVybiByZXN1bHQ7XG4gICAgICB9IHJldHVybiBuZXcgUmVzdWx0KGZhbHNlKTtcbiAgICB9XG4gICAgaXRlcmF0b3IgPSBnZXRJdGVyYXRvcihpdGVyYWJsZSwgaXRlckZuKTtcbiAgfVxuXG4gIG5leHQgPSBpdGVyYXRvci5uZXh0O1xuICB3aGlsZSAoIShzdGVwID0gbmV4dC5jYWxsKGl0ZXJhdG9yKSkuZG9uZSkge1xuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSBjYWxsRm4oc3RlcC52YWx1ZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsICd0aHJvdycsIGVycm9yKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiByZXN1bHQgPT0gJ29iamVjdCcgJiYgcmVzdWx0ICYmIHJlc3VsdCBpbnN0YW5jZW9mIFJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcbiAgfSByZXR1cm4gbmV3IFJlc3VsdChmYWxzZSk7XG59O1xuIiwidmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNTeW1ib2woYXJndW1lbnQpKSB0aHJvdyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IGEgU3ltYm9sIHZhbHVlIHRvIGEgc3RyaW5nJyk7XG4gIHJldHVybiBTdHJpbmcoYXJndW1lbnQpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXNldC1wcm90b3R5cGUtb2YnKTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBpdGVyYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdGUnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcblxudmFyICRBZ2dyZWdhdGVFcnJvciA9IGZ1bmN0aW9uIEFnZ3JlZ2F0ZUVycm9yKGVycm9ycywgbWVzc2FnZSkge1xuICB2YXIgdGhhdCA9IHRoaXM7XG4gIGlmICghKHRoYXQgaW5zdGFuY2VvZiAkQWdncmVnYXRlRXJyb3IpKSByZXR1cm4gbmV3ICRBZ2dyZWdhdGVFcnJvcihlcnJvcnMsIG1lc3NhZ2UpO1xuICBpZiAoc2V0UHJvdG90eXBlT2YpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9lcnJvci1tZXNzYWdlIC0tIGV4cGVjdGVkXG4gICAgdGhhdCA9IHNldFByb3RvdHlwZU9mKG5ldyBFcnJvcih1bmRlZmluZWQpLCBnZXRQcm90b3R5cGVPZih0aGF0KSk7XG4gIH1cbiAgaWYgKG1lc3NhZ2UgIT09IHVuZGVmaW5lZCkgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHRoYXQsICdtZXNzYWdlJywgdG9TdHJpbmcobWVzc2FnZSkpO1xuICB2YXIgZXJyb3JzQXJyYXkgPSBbXTtcbiAgaXRlcmF0ZShlcnJvcnMsIGVycm9yc0FycmF5LnB1c2gsIHsgdGhhdDogZXJyb3JzQXJyYXkgfSk7XG4gIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSh0aGF0LCAnZXJyb3JzJywgZXJyb3JzQXJyYXkpO1xuICByZXR1cm4gdGhhdDtcbn07XG5cbiRBZ2dyZWdhdGVFcnJvci5wcm90b3R5cGUgPSBjcmVhdGUoRXJyb3IucHJvdG90eXBlLCB7XG4gIGNvbnN0cnVjdG9yOiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoNSwgJEFnZ3JlZ2F0ZUVycm9yKSxcbiAgbWVzc2FnZTogY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDUsICcnKSxcbiAgbmFtZTogY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDUsICdBZ2dyZWdhdGVFcnJvcicpXG59KTtcblxuLy8gYEFnZ3JlZ2F0ZUVycm9yYCBjb25zdHJ1Y3RvclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hZ2dyZWdhdGUtZXJyb3ItY29uc3RydWN0b3JcbiQoeyBnbG9iYWw6IHRydWUgfSwge1xuICBBZ2dyZWdhdGVFcnJvcjogJEFnZ3JlZ2F0ZUVycm9yXG59KTtcbiIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxudmFyIGZ1bmN0aW9uVG9TdHJpbmcgPSBGdW5jdGlvbi50b1N0cmluZztcblxuLy8gdGhpcyBoZWxwZXIgYnJva2VuIGluIGBjb3JlLWpzQDMuNC4xLTMuNC40YCwgc28gd2UgY2FuJ3QgdXNlIGBzaGFyZWRgIGhlbHBlclxuaWYgKHR5cGVvZiBzdG9yZS5pbnNwZWN0U291cmNlICE9ICdmdW5jdGlvbicpIHtcbiAgc3RvcmUuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBmdW5jdGlvblRvU3RyaW5nLmNhbGwoaXQpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0b3JlLmluc3BlY3RTb3VyY2U7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGluc3BlY3RTb3VyY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyAmJiAvbmF0aXZlIGNvZGUvLnRlc3QoaW5zcGVjdFNvdXJjZShXZWFrTWFwKSk7XG4iLCJ2YXIgTkFUSVZFX1dFQUtfTUFQID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25hdGl2ZS13ZWFrLW1hcCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgb2JqZWN0SGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEID0gJ09iamVjdCBhbHJlYWR5IGluaXRpYWxpemVkJztcbnZhciBXZWFrTWFwID0gZ2xvYmFsLldlYWtNYXA7XG52YXIgc2V0LCBnZXQsIGhhcztcblxudmFyIGVuZm9yY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGhhcyhpdCkgPyBnZXQoaXQpIDogc2V0KGl0LCB7fSk7XG59O1xuXG52YXIgZ2V0dGVyRm9yID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBzdGF0ZTtcbiAgICBpZiAoIWlzT2JqZWN0KGl0KSB8fCAoc3RhdGUgPSBnZXQoaXQpKS50eXBlICE9PSBUWVBFKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQIHx8IHNoYXJlZC5zdGF0ZSkge1xuICB2YXIgc3RvcmUgPSBzaGFyZWQuc3RhdGUgfHwgKHNoYXJlZC5zdGF0ZSA9IG5ldyBXZWFrTWFwKCkpO1xuICB2YXIgd21nZXQgPSBzdG9yZS5nZXQ7XG4gIHZhciB3bWhhcyA9IHN0b3JlLmhhcztcbiAgdmFyIHdtc2V0ID0gc3RvcmUuc2V0O1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKHdtaGFzLmNhbGwoc3RvcmUsIGl0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCk7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgd21zZXQuY2FsbChzdG9yZSwgaXQsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiB3bWdldC5jYWxsKHN0b3JlLCBpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiB3bWhhcy5jYWxsKHN0b3JlLCBpdCk7XG4gIH07XG59IGVsc2Uge1xuICB2YXIgU1RBVEUgPSBzaGFyZWRLZXkoJ3N0YXRlJyk7XG4gIGhpZGRlbktleXNbU1RBVEVdID0gdHJ1ZTtcbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGlmIChvYmplY3RIYXMoaXQsIFNUQVRFKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCk7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KGl0LCBTVEFURSwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIG9iamVjdEhhcyhpdCwgU1RBVEUpID8gaXRbU1RBVEVdIDoge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBvYmplY3RIYXMoaXQsIFNUQVRFKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0LFxuICBnZXQ6IGdldCxcbiAgaGFzOiBoYXMsXG4gIGVuZm9yY2U6IGVuZm9yY2UsXG4gIGdldHRlckZvcjogZ2V0dGVyRm9yXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZicpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSBmYWxzZTtcblxuLy8gYCVJdGVyYXRvclByb3RvdHlwZSVgIG9iamVjdFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0laXRlcmF0b3Jwcm90b3R5cGUlLW9iamVjdFxudmFyIEl0ZXJhdG9yUHJvdG90eXBlLCBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUsIGFycmF5SXRlcmF0b3I7XG5cbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLWFycmF5LXByb3RvdHlwZS1rZXlzIC0tIHNhZmUgKi9cbmlmIChbXS5rZXlzKSB7XG4gIGFycmF5SXRlcmF0b3IgPSBbXS5rZXlzKCk7XG4gIC8vIFNhZmFyaSA4IGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICBpZiAoISgnbmV4dCcgaW4gYXJyYXlJdGVyYXRvcikpIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSB0cnVlO1xuICBlbHNlIHtcbiAgICBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZihnZXRQcm90b3R5cGVPZihhcnJheUl0ZXJhdG9yKSk7XG4gICAgaWYgKFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSkgSXRlcmF0b3JQcm90b3R5cGUgPSBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cbn1cblxudmFyIE5FV19JVEVSQVRPUl9QUk9UT1RZUEUgPSBJdGVyYXRvclByb3RvdHlwZSA9PSB1bmRlZmluZWQgfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgdGVzdCA9IHt9O1xuICAvLyBGRjQ0LSBsZWdhY3kgaXRlcmF0b3JzIGNhc2VcbiAgcmV0dXJuIEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXS5jYWxsKHRlc3QpICE9PSB0ZXN0O1xufSk7XG5cbmlmIChORVdfSVRFUkFUT1JfUFJPVE9UWVBFKSBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuZWxzZSBpZiAoSVNfUFVSRSkgSXRlcmF0b3JQcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuXG4vLyBgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJWl0ZXJhdG9ycHJvdG90eXBlJS1AQGl0ZXJhdG9yXG5pZiAodHlwZW9mIEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSAhPT0gJ2Z1bmN0aW9uJykge1xuICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgSXRlcmF0b3JQcm90b3R5cGU6IEl0ZXJhdG9yUHJvdG90eXBlLFxuICBCVUdHWV9TQUZBUklfSVRFUkFUT1JTOiBCVUdHWV9TQUZBUklfSVRFUkFUT1JTXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIFRPX1NUUklOR19UQUdfU1VQUE9SVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YnKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IFRPX1NUUklOR19UQUdfU1VQUE9SVCA/IHt9LnRvU3RyaW5nIDogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnW29iamVjdCAnICsgY2xhc3NvZih0aGlzKSArICddJztcbn07XG4iLCJ2YXIgVE9fU1RSSU5HX1RBR19TVVBQT1JUID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZy10YWctc3VwcG9ydCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXRvLXN0cmluZycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFRBRywgU1RBVElDLCBTRVRfTUVUSE9EKSB7XG4gIGlmIChpdCkge1xuICAgIHZhciB0YXJnZXQgPSBTVEFUSUMgPyBpdCA6IGl0LnByb3RvdHlwZTtcbiAgICBpZiAoIWhhcyh0YXJnZXQsIFRPX1NUUklOR19UQUcpKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIFRPX1NUUklOR19UQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogVEFHIH0pO1xuICAgIH1cbiAgICBpZiAoU0VUX01FVEhPRCAmJiAhVE9fU1RSSU5HX1RBR19TVVBQT1JUKSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkodGFyZ2V0LCAndG9TdHJpbmcnLCB0b1N0cmluZyk7XG4gICAgfVxuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycy1jb3JlJykuSXRlcmF0b3JQcm90b3R5cGU7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJdGVyYXRvckNvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIHZhciBUT19TVFJJTkdfVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICBJdGVyYXRvckNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yQ29uc3RydWN0b3IsIFRPX1NUUklOR19UQUcsIGZhbHNlLCB0cnVlKTtcbiAgSXRlcmF0b3JzW1RPX1NUUklOR19UQUddID0gcmV0dXJuVGhpcztcbiAgcmV0dXJuIEl0ZXJhdG9yQ29uc3RydWN0b3I7XG59O1xuIiwidmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZW51bWVyYWJsZSkgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgZWxzZSBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkodGFyZ2V0LCBrZXksIHZhbHVlKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBjcmVhdGVJdGVyYXRvckNvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1pdGVyYXRvci1jb25zdHJ1Y3RvcicpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXNldC1wcm90b3R5cGUtb2YnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcbnZhciBJdGVyYXRvcnNDb3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycy1jb3JlJyk7XG5cbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IEl0ZXJhdG9yc0NvcmUuSXRlcmF0b3JQcm90b3R5cGU7XG52YXIgQlVHR1lfU0FGQVJJX0lURVJBVE9SUyA9IEl0ZXJhdG9yc0NvcmUuQlVHR1lfU0FGQVJJX0lURVJBVE9SUztcbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xudmFyIEVOVFJJRVMgPSAnZW50cmllcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSXRlcmFibGUsIE5BTUUsIEl0ZXJhdG9yQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gIGNyZWF0ZUl0ZXJhdG9yQ29uc3RydWN0b3IoSXRlcmF0b3JDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG5cbiAgdmFyIGdldEl0ZXJhdGlvbk1ldGhvZCA9IGZ1bmN0aW9uIChLSU5EKSB7XG4gICAgaWYgKEtJTkQgPT09IERFRkFVTFQgJiYgZGVmYXVsdEl0ZXJhdG9yKSByZXR1cm4gZGVmYXVsdEl0ZXJhdG9yO1xuICAgIGlmICghQlVHR1lfU0FGQVJJX0lURVJBVE9SUyAmJiBLSU5EIGluIEl0ZXJhYmxlUHJvdG90eXBlKSByZXR1cm4gSXRlcmFibGVQcm90b3R5cGVbS0lORF07XG4gICAgc3dpdGNoIChLSU5EKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IEl0ZXJhdG9yQ29uc3RydWN0b3IodGhpcywgS0lORCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMsIEtJTkQpOyB9O1xuICAgICAgY2FzZSBFTlRSSUVTOiByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMsIEtJTkQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMpOyB9O1xuICB9O1xuXG4gIHZhciBUT19TVFJJTkdfVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgSU5DT1JSRUNUX1ZBTFVFU19OQU1FID0gZmFsc2U7XG4gIHZhciBJdGVyYWJsZVByb3RvdHlwZSA9IEl0ZXJhYmxlLnByb3RvdHlwZTtcbiAgdmFyIG5hdGl2ZUl0ZXJhdG9yID0gSXRlcmFibGVQcm90b3R5cGVbSVRFUkFUT1JdXG4gICAgfHwgSXRlcmFibGVQcm90b3R5cGVbJ0BAaXRlcmF0b3InXVxuICAgIHx8IERFRkFVTFQgJiYgSXRlcmFibGVQcm90b3R5cGVbREVGQVVMVF07XG4gIHZhciBkZWZhdWx0SXRlcmF0b3IgPSAhQlVHR1lfU0FGQVJJX0lURVJBVE9SUyAmJiBuYXRpdmVJdGVyYXRvciB8fCBnZXRJdGVyYXRpb25NZXRob2QoREVGQVVMVCk7XG4gIHZhciBhbnlOYXRpdmVJdGVyYXRvciA9IE5BTUUgPT0gJ0FycmF5JyA/IEl0ZXJhYmxlUHJvdG90eXBlLmVudHJpZXMgfHwgbmF0aXZlSXRlcmF0b3IgOiBuYXRpdmVJdGVyYXRvcjtcbiAgdmFyIEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgbWV0aG9kcywgS0VZO1xuXG4gIC8vIGZpeCBuYXRpdmVcbiAgaWYgKGFueU5hdGl2ZUl0ZXJhdG9yKSB7XG4gICAgQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoYW55TmF0aXZlSXRlcmF0b3IuY2FsbChuZXcgSXRlcmFibGUoKSkpO1xuICAgIGlmIChDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIGlmICghSVNfUFVSRSAmJiBnZXRQcm90b3R5cGVPZihDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUpICE9PSBJdGVyYXRvclByb3RvdHlwZSkge1xuICAgICAgICBpZiAoc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgICAgICBzZXRQcm90b3R5cGVPZihDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIFRPX1NUUklOR19UQUcsIHRydWUsIHRydWUpO1xuICAgICAgaWYgKElTX1BVUkUpIEl0ZXJhdG9yc1tUT19TVFJJTkdfVEFHXSA9IHJldHVyblRoaXM7XG4gICAgfVxuICB9XG5cbiAgLy8gZml4IEFycmF5LnByb3RvdHlwZS57IHZhbHVlcywgQEBpdGVyYXRvciB9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGQVVMVCA9PSBWQUxVRVMgJiYgbmF0aXZlSXRlcmF0b3IgJiYgbmF0aXZlSXRlcmF0b3IubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgSU5DT1JSRUNUX1ZBTFVFU19OQU1FID0gdHJ1ZTtcbiAgICBkZWZhdWx0SXRlcmF0b3IgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuYXRpdmVJdGVyYXRvci5jYWxsKHRoaXMpOyB9O1xuICB9XG5cbiAgLy8gZGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUlTX1BVUkUgfHwgRk9SQ0VEKSAmJiBJdGVyYWJsZVByb3RvdHlwZVtJVEVSQVRPUl0gIT09IGRlZmF1bHRJdGVyYXRvcikge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShJdGVyYWJsZVByb3RvdHlwZSwgSVRFUkFUT1IsIGRlZmF1bHRJdGVyYXRvcik7XG4gIH1cbiAgSXRlcmF0b3JzW05BTUVdID0gZGVmYXVsdEl0ZXJhdG9yO1xuXG4gIC8vIGV4cG9ydCBhZGRpdGlvbmFsIG1ldGhvZHNcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBnZXRJdGVyYXRpb25NZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/IGRlZmF1bHRJdGVyYXRvciA6IGdldEl0ZXJhdGlvbk1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6IGdldEl0ZXJhdGlvbk1ldGhvZChFTlRSSUVTKVxuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChLRVkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgfHwgSU5DT1JSRUNUX1ZBTFVFU19OQU1FIHx8ICEoS0VZIGluIEl0ZXJhYmxlUHJvdG90eXBlKSkge1xuICAgICAgICByZWRlZmluZShJdGVyYWJsZVByb3RvdHlwZSwgS0VZLCBtZXRob2RzW0tFWV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSAkKHsgdGFyZ2V0OiBOQU1FLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBCVUdHWV9TQUZBUklfSVRFUkFUT1JTIHx8IElOQ09SUkVDVF9WQUxVRVNfTkFNRSB9LCBtZXRob2RzKTtcbiAgfVxuXG4gIHJldHVybiBtZXRob2RzO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG52YXIgZGVmaW5lSXRlcmF0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWl0ZXJhdG9yJyk7XG5cbnZhciBBUlJBWV9JVEVSQVRPUiA9ICdBcnJheSBJdGVyYXRvcic7XG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcihBUlJBWV9JVEVSQVRPUik7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZW50cmllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5lbnRyaWVzXG4vLyBgQXJyYXkucHJvdG90eXBlLmtleXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUua2V5c1xuLy8gYEFycmF5LnByb3RvdHlwZS52YWx1ZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUudmFsdWVzXG4vLyBgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAaXRlcmF0b3Jcbi8vIGBDcmVhdGVBcnJheUl0ZXJhdG9yYCBpbnRlcm5hbCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtY3JlYXRlYXJyYXlpdGVyYXRvclxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVJdGVyYXRvcihBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHNldEludGVybmFsU3RhdGUodGhpcywge1xuICAgIHR5cGU6IEFSUkFZX0lURVJBVE9SLFxuICAgIHRhcmdldDogdG9JbmRleGVkT2JqZWN0KGl0ZXJhdGVkKSwgLy8gdGFyZ2V0XG4gICAgaW5kZXg6IDAsICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gICAga2luZDoga2luZCAgICAgICAgICAgICAgICAgICAgICAgICAvLyBraW5kXG4gIH0pO1xuLy8gYCVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJWFycmF5aXRlcmF0b3Jwcm90b3R5cGUlLm5leHRcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKTtcbiAgdmFyIHRhcmdldCA9IHN0YXRlLnRhcmdldDtcbiAgdmFyIGtpbmQgPSBzdGF0ZS5raW5kO1xuICB2YXIgaW5kZXggPSBzdGF0ZS5pbmRleCsrO1xuICBpZiAoIXRhcmdldCB8fCBpbmRleCA+PSB0YXJnZXQubGVuZ3RoKSB7XG4gICAgc3RhdGUudGFyZ2V0ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiB7IHZhbHVlOiBpbmRleCwgZG9uZTogZmFsc2UgfTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiB7IHZhbHVlOiB0YXJnZXRbaW5kZXhdLCBkb25lOiBmYWxzZSB9O1xuICByZXR1cm4geyB2YWx1ZTogW2luZGV4LCB0YXJnZXRbaW5kZXhdXSwgZG9uZTogZmFsc2UgfTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWNyZWF0ZXVubWFwcGVkYXJndW1lbnRzb2JqZWN0XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWNyZWF0ZW1hcHBlZGFyZ3VtZW50c29iamVjdFxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdsb2JhbC5Qcm9taXNlO1xuIiwidmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIHtcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnVuc2FmZSAmJiB0YXJnZXRba2V5XSkgdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICBlbHNlIHJlZGVmaW5lKHRhcmdldCwga2V5LCBzcmNba2V5XSwgb3B0aW9ucyk7XG4gIH0gcmV0dXJuIHRhcmdldDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ09OU1RSVUNUT1JfTkFNRSkge1xuICB2YXIgQ29uc3RydWN0b3IgPSBnZXRCdWlsdEluKENPTlNUUlVDVE9SX05BTUUpO1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xuXG4gIGlmIChERVNDUklQVE9SUyAmJiBDb25zdHJ1Y3RvciAmJiAhQ29uc3RydWN0b3JbU1BFQ0lFU10pIHtcbiAgICBkZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgU1BFQ0lFUywge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gICAgfSk7XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgQ29uc3RydWN0b3IsIG5hbWUpIHtcbiAgaWYgKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ0luY29ycmVjdCAnICsgKG5hbWUgPyBuYW1lICsgJyAnIDogJycpICsgJ2ludm9jYXRpb24nKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwidmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciBjYWxsZWQgPSAwO1xuICB2YXIgaXRlcmF0b3JXaXRoUmV0dXJuID0ge1xuICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7IGRvbmU6ICEhY2FsbGVkKysgfTtcbiAgICB9LFxuICAgICdyZXR1cm4nOiBmdW5jdGlvbiAoKSB7XG4gICAgICBTQUZFX0NMT1NJTkcgPSB0cnVlO1xuICAgIH1cbiAgfTtcbiAgaXRlcmF0b3JXaXRoUmV0dXJuW0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWZyb20sIG5vLXRocm93LWxpdGVyYWwgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgQXJyYXkuZnJvbShpdGVyYXRvcldpdGhSZXR1cm4sIGZ1bmN0aW9uICgpIHsgdGhyb3cgMjsgfSk7XG59IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIFNLSVBfQ0xPU0lORykge1xuICBpZiAoIVNLSVBfQ0xPU0lORyAmJiAhU0FGRV9DTE9TSU5HKSByZXR1cm4gZmFsc2U7XG4gIHZhciBJVEVSQVRJT05fU1VQUE9SVCA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBvYmplY3QgPSB7fTtcbiAgICBvYmplY3RbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB7IGRvbmU6IElURVJBVElPTl9TVVBQT1JUID0gdHJ1ZSB9O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH07XG4gICAgZXhlYyhvYmplY3QpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBJVEVSQVRJT05fU1VQUE9SVDtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxuLy8gYFNwZWNpZXNDb25zdHJ1Y3RvcmAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXNwZWNpZXNjb25zdHJ1Y3RvclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgZGVmYXVsdENvbnN0cnVjdG9yKSB7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3I7XG4gIHZhciBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IGRlZmF1bHRDb25zdHJ1Y3RvciA6IGFGdW5jdGlvbihTKTtcbn07XG4iLCJ2YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gLyg/OmlwYWR8aXBob25lfGlwb2QpLiphcHBsZXdlYmtpdC9pLnRlc3QodXNlckFnZW50KTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzb2YoZ2xvYmFsLnByb2Nlc3MpID09ICdwcm9jZXNzJztcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dCcpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaHRtbCcpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcbnZhciBJU19JT1MgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLWlzLWlvcycpO1xudmFyIElTX05PREUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLWlzLW5vZGUnKTtcblxudmFyIHNldCA9IGdsb2JhbC5zZXRJbW1lZGlhdGU7XG52YXIgY2xlYXIgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGU7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIE1lc3NhZ2VDaGFubmVsID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsO1xudmFyIERpc3BhdGNoID0gZ2xvYmFsLkRpc3BhdGNoO1xudmFyIGNvdW50ZXIgPSAwO1xudmFyIHF1ZXVlID0ge307XG52YXIgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG52YXIgbG9jYXRpb24sIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xuXG50cnkge1xuICAvLyBEZW5vIHRocm93cyBhIFJlZmVyZW5jZUVycm9yIG9uIGBsb2NhdGlvbmAgYWNjZXNzIHdpdGhvdXQgYC0tbG9jYXRpb25gIGZsYWdcbiAgbG9jYXRpb24gPSBnbG9iYWwubG9jYXRpb247XG59IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG5cbnZhciBydW4gPSBmdW5jdGlvbiAoaWQpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGlucyAtLSBzYWZlXG4gIGlmIChxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xuXG52YXIgcnVubmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcnVuKGlkKTtcbiAgfTtcbn07XG5cbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICBydW4oZXZlbnQuZGF0YSk7XG59O1xuXG52YXIgcG9zdCA9IGZ1bmN0aW9uIChpZCkge1xuICAvLyBvbGQgZW5naW5lcyBoYXZlIG5vdCBsb2NhdGlvbi5vcmlnaW5cbiAgZ2xvYmFsLnBvc3RNZXNzYWdlKFN0cmluZyhpZCksIGxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGxvY2F0aW9uLmhvc3QpO1xufTtcblxuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYgKCFzZXQgfHwgIWNsZWFyKSB7XG4gIHNldCA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbikge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgdmFyIGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgdmFyIGkgPSAxO1xuICAgIHdoaWxlIChhcmd1bWVudHNMZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gc3BlYyByZXF1aXJlbWVudFxuICAgICAgKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbikpLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXIgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCkge1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZiAoSVNfTk9ERSkge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKHJ1bm5lcihpZCkpO1xuICAgIH07XG4gIC8vIFNwaGVyZSAoSlMgZ2FtZSBlbmdpbmUpIERpc3BhdGNoIEFQSVxuICB9IGVsc2UgaWYgKERpc3BhdGNoICYmIERpc3BhdGNoLm5vdykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBEaXNwYXRjaC5ub3cocnVubmVyKGlkKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICAvLyBleGNlcHQgaU9TIC0gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzYyNFxuICB9IGVsc2UgaWYgKE1lc3NhZ2VDaGFubmVsICYmICFJU19JT1MpIHtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgcG9ydCA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGJpbmQocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYgKFxuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmXG4gICAgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiZcbiAgICAhZ2xvYmFsLmltcG9ydFNjcmlwdHMgJiZcbiAgICBsb2NhdGlvbiAmJiBsb2NhdGlvbi5wcm90b2NvbCAhPT0gJ2ZpbGU6JyAmJlxuICAgICFmYWlscyhwb3N0KVxuICApIHtcbiAgICBkZWZlciA9IHBvc3Q7XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZiAoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bihpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHNldFRpbWVvdXQocnVubmVyKGlkKSwgMCk7XG4gICAgfTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXQsXG4gIGNsZWFyOiBjbGVhclxufTtcbiIsInZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gL2lwYWR8aXBob25lfGlwb2QvaS50ZXN0KHVzZXJBZ2VudCkgJiYgZ2xvYmFsLlBlYmJsZSAhPT0gdW5kZWZpbmVkO1xuIiwidmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IC93ZWIwcyg/IS4qY2hyb21lKS9pLnRlc3QodXNlckFnZW50KTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90YXNrJykuc2V0O1xudmFyIElTX0lPUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtaXMtaW9zJyk7XG52YXIgSVNfSU9TX1BFQkJMRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtaXMtaW9zLXBlYmJsZScpO1xudmFyIElTX1dFQk9TX1dFQktJVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtaXMtd2Vib3Mtd2Via2l0Jyk7XG52YXIgSVNfTk9ERSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtaXMtbm9kZScpO1xuXG52YXIgTXV0YXRpb25PYnNlcnZlciA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xudmFyIGRvY3VtZW50ID0gZ2xvYmFsLmRvY3VtZW50O1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBQcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG4vLyBOb2RlLmpzIDExIHNob3dzIEV4cGVyaW1lbnRhbFdhcm5pbmcgb24gZ2V0dGluZyBgcXVldWVNaWNyb3Rhc2tgXG52YXIgcXVldWVNaWNyb3Rhc2tEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGdsb2JhbCwgJ3F1ZXVlTWljcm90YXNrJyk7XG52YXIgcXVldWVNaWNyb3Rhc2sgPSBxdWV1ZU1pY3JvdGFza0Rlc2NyaXB0b3IgJiYgcXVldWVNaWNyb3Rhc2tEZXNjcmlwdG9yLnZhbHVlO1xuXG52YXIgZmx1c2gsIGhlYWQsIGxhc3QsIG5vdGlmeSwgdG9nZ2xlLCBub2RlLCBwcm9taXNlLCB0aGVuO1xuXG4vLyBtb2Rlcm4gZW5naW5lcyBoYXZlIHF1ZXVlTWljcm90YXNrIG1ldGhvZFxuaWYgKCFxdWV1ZU1pY3JvdGFzaykge1xuICBmbHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZiAoSVNfTk9ERSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKSBwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlIChoZWFkKSB7XG4gICAgICBmbiA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmIChoZWFkKSBub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHBhcmVudCkgcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyLCBleGNlcHQgaU9TIC0gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzMzOVxuICAvLyBhbHNvIGV4Y2VwdCBXZWJPUyBXZWJraXQgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg5OFxuICBpZiAoIUlTX0lPUyAmJiAhSVNfTk9ERSAmJiAhSVNfV0VCT1NfV0VCS0lUICYmIE11dGF0aW9uT2JzZXJ2ZXIgJiYgZG9jdW1lbnQpIHtcbiAgICB0b2dnbGUgPSB0cnVlO1xuICAgIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmICghSVNfSU9TX1BFQkJMRSAmJiBQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSkge1xuICAgIC8vIFByb21pc2UucmVzb2x2ZSB3aXRob3V0IGFuIGFyZ3VtZW50IHRocm93cyBhbiBlcnJvciBpbiBMRyBXZWJPUyAyXG4gICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgIC8vIHdvcmthcm91bmQgb2YgV2ViS2l0IH4gaU9TIFNhZmFyaSAxMC4xIGJ1Z1xuICAgIHByb21pc2UuY29uc3RydWN0b3IgPSBQcm9taXNlO1xuICAgIHRoZW4gPSBwcm9taXNlLnRoZW47XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhlbi5jYWxsKHByb21pc2UsIGZsdXNoKTtcbiAgICB9O1xuICAvLyBOb2RlLmpzIHdpdGhvdXQgcHJvbWlzZXNcbiAgfSBlbHNlIGlmIChJU19OT0RFKSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICAgIH07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBxdWV1ZU1pY3JvdGFzayB8fCBmdW5jdGlvbiAoZm4pIHtcbiAgdmFyIHRhc2sgPSB7IGZuOiBmbiwgbmV4dDogdW5kZWZpbmVkIH07XG4gIGlmIChsYXN0KSBsYXN0Lm5leHQgPSB0YXNrO1xuICBpZiAoIWhlYWQpIHtcbiAgICBoZWFkID0gdGFzaztcbiAgICBub3RpZnkoKTtcbiAgfSBsYXN0ID0gdGFzaztcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcblxudmFyIFByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKEMpIHtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24gKCQkcmVzb2x2ZSwgJCRyZWplY3QpIHtcbiAgICBpZiAocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn07XG5cbi8vIGBOZXdQcm9taXNlQ2FwYWJpbGl0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW5ld3Byb21pc2VjYXBhYmlsaXR5XG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gKEMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDLCB4KSB7XG4gIGFuT2JqZWN0KEMpO1xuICBpZiAoaXNPYmplY3QoeCkgJiYgeC5jb25zdHJ1Y3RvciA9PT0gQykgcmV0dXJuIHg7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYoQyk7XG4gIHZhciByZXNvbHZlID0gcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgcmVzb2x2ZSh4KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYSwgYikge1xuICB2YXIgY29uc29sZSA9IGdsb2JhbC5jb25zb2xlO1xuICBpZiAoY29uc29sZSAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgYXJndW1lbnRzLmxlbmd0aCA9PT0gMSA/IGNvbnNvbGUuZXJyb3IoYSkgOiBjb25zb2xlLmVycm9yKGEsIGIpO1xuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiB7IGVycm9yOiBmYWxzZSwgdmFsdWU6IGV4ZWMoKSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IGVycm9yOiB0cnVlLCB2YWx1ZTogZXJyb3IgfTtcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JztcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIE5hdGl2ZVByb21pc2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXByb21pc2UtY29uc3RydWN0b3InKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lLWFsbCcpO1xudmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBzZXRTcGVjaWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1zcGVjaWVzJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLWluc3RhbmNlJyk7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xudmFyIGl0ZXJhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0ZScpO1xudmFyIGNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jaGVjay1jb3JyZWN0bmVzcy1vZi1pdGVyYXRpb24nKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHRhc2sgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdGFzaycpLnNldDtcbnZhciBtaWNyb3Rhc2sgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWljcm90YXNrJyk7XG52YXIgcHJvbWlzZVJlc29sdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcHJvbWlzZS1yZXNvbHZlJyk7XG52YXIgaG9zdFJlcG9ydEVycm9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9ob3N0LXJlcG9ydC1lcnJvcnMnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wZXJmb3JtJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIElTX0JST1dTRVIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLWlzLWJyb3dzZXInKTtcbnZhciBJU19OT0RFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS1pcy1ub2RlJyk7XG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xudmFyIFBST01JU0UgPSAnUHJvbWlzZSc7XG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0O1xudmFyIHNldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLnNldDtcbnZhciBnZXRJbnRlcm5hbFByb21pc2VTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0dGVyRm9yKFBST01JU0UpO1xudmFyIE5hdGl2ZVByb21pc2VQcm90b3R5cGUgPSBOYXRpdmVQcm9taXNlICYmIE5hdGl2ZVByb21pc2UucHJvdG90eXBlO1xudmFyIFByb21pc2VDb25zdHJ1Y3RvciA9IE5hdGl2ZVByb21pc2U7XG52YXIgUHJvbWlzZUNvbnN0cnVjdG9yUHJvdG90eXBlID0gTmF0aXZlUHJvbWlzZVByb3RvdHlwZTtcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIGRvY3VtZW50ID0gZ2xvYmFsLmRvY3VtZW50O1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmY7XG52YXIgbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHk7XG52YXIgRElTUEFUQ0hfRVZFTlQgPSAhIShkb2N1bWVudCAmJiBkb2N1bWVudC5jcmVhdGVFdmVudCAmJiBnbG9iYWwuZGlzcGF0Y2hFdmVudCk7XG52YXIgTkFUSVZFX1JFSkVDVElPTl9FVkVOVCA9IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJztcbnZhciBVTkhBTkRMRURfUkVKRUNUSU9OID0gJ3VuaGFuZGxlZHJlamVjdGlvbic7XG52YXIgUkVKRUNUSU9OX0hBTkRMRUQgPSAncmVqZWN0aW9uaGFuZGxlZCc7XG52YXIgUEVORElORyA9IDA7XG52YXIgRlVMRklMTEVEID0gMTtcbnZhciBSRUpFQ1RFRCA9IDI7XG52YXIgSEFORExFRCA9IDE7XG52YXIgVU5IQU5ETEVEID0gMjtcbnZhciBTVUJDTEFTU0lORyA9IGZhbHNlO1xudmFyIEludGVybmFsLCBPd25Qcm9taXNlQ2FwYWJpbGl0eSwgUHJvbWlzZVdyYXBwZXIsIG5hdGl2ZVRoZW47XG5cbnZhciBGT1JDRUQgPSBpc0ZvcmNlZChQUk9NSVNFLCBmdW5jdGlvbiAoKSB7XG4gIHZhciBQUk9NSVNFX0NPTlNUUlVDVE9SX1NPVVJDRSA9IGluc3BlY3RTb3VyY2UoUHJvbWlzZUNvbnN0cnVjdG9yKTtcbiAgdmFyIEdMT0JBTF9DT1JFX0pTX1BST01JU0UgPSBQUk9NSVNFX0NPTlNUUlVDVE9SX1NPVVJDRSAhPT0gU3RyaW5nKFByb21pc2VDb25zdHJ1Y3Rvcik7XG4gIC8vIFY4IDYuNiAoTm9kZSAxMCBhbmQgQ2hyb21lIDY2KSBoYXZlIGEgYnVnIHdpdGggcmVzb2x2aW5nIGN1c3RvbSB0aGVuYWJsZXNcbiAgLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9ODMwNTY1XG4gIC8vIFdlIGNhbid0IGRldGVjdCBpdCBzeW5jaHJvbm91c2x5LCBzbyBqdXN0IGNoZWNrIHZlcnNpb25zXG4gIGlmICghR0xPQkFMX0NPUkVfSlNfUFJPTUlTRSAmJiBWOF9WRVJTSU9OID09PSA2NikgcmV0dXJuIHRydWU7XG4gIC8vIFdlIG5lZWQgUHJvbWlzZSNmaW5hbGx5IGluIHRoZSBwdXJlIHZlcnNpb24gZm9yIHByZXZlbnRpbmcgcHJvdG90eXBlIHBvbGx1dGlvblxuICBpZiAoSVNfUFVSRSAmJiAhUHJvbWlzZUNvbnN0cnVjdG9yUHJvdG90eXBlWydmaW5hbGx5J10pIHJldHVybiB0cnVlO1xuICAvLyBXZSBjYW4ndCB1c2UgQEBzcGVjaWVzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuICAvLyBkZW9wdGltaXphdGlvbiBhbmQgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3OVxuICBpZiAoVjhfVkVSU0lPTiA+PSA1MSAmJiAvbmF0aXZlIGNvZGUvLnRlc3QoUFJPTUlTRV9DT05TVFJVQ1RPUl9TT1VSQ0UpKSByZXR1cm4gZmFsc2U7XG4gIC8vIERldGVjdCBjb3JyZWN0bmVzcyBvZiBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gIHZhciBwcm9taXNlID0gbmV3IFByb21pc2VDb25zdHJ1Y3RvcihmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKDEpOyB9KTtcbiAgdmFyIEZha2VQcm9taXNlID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgICBleGVjKGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KTtcbiAgfTtcbiAgdmFyIGNvbnN0cnVjdG9yID0gcHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9O1xuICBjb25zdHJ1Y3RvcltTUEVDSUVTXSA9IEZha2VQcm9taXNlO1xuICBTVUJDTEFTU0lORyA9IHByb21pc2UudGhlbihmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0pIGluc3RhbmNlb2YgRmFrZVByb21pc2U7XG4gIGlmICghU1VCQ0xBU1NJTkcpIHJldHVybiB0cnVlO1xuICAvLyBVbmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gIHJldHVybiAhR0xPQkFMX0NPUkVfSlNfUFJPTUlTRSAmJiBJU19CUk9XU0VSICYmICFOQVRJVkVfUkVKRUNUSU9OX0VWRU5UO1xufSk7XG5cbnZhciBJTkNPUlJFQ1RfSVRFUkFUSU9OID0gRk9SQ0VEIHx8ICFjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24oZnVuY3Rpb24gKGl0ZXJhYmxlKSB7XG4gIFByb21pc2VDb25zdHJ1Y3Rvci5hbGwoaXRlcmFibGUpWydjYXRjaCddKGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSk7XG59KTtcblxuLy8gaGVscGVyc1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG5cbnZhciBub3RpZnkgPSBmdW5jdGlvbiAoc3RhdGUsIGlzUmVqZWN0KSB7XG4gIGlmIChzdGF0ZS5ub3RpZmllZCkgcmV0dXJuO1xuICBzdGF0ZS5ub3RpZmllZCA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHN0YXRlLnJlYWN0aW9ucztcbiAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBzdGF0ZS52YWx1ZTtcbiAgICB2YXIgb2sgPSBzdGF0ZS5zdGF0ZSA9PSBGVUxGSUxMRUQ7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHdoaWxlIChjaGFpbi5sZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFyIHJlYWN0aW9uID0gY2hhaW5baW5kZXgrK107XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsO1xuICAgICAgdmFyIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlO1xuICAgICAgdmFyIHJlamVjdCA9IHJlYWN0aW9uLnJlamVjdDtcbiAgICAgIHZhciBkb21haW4gPSByZWFjdGlvbi5kb21haW47XG4gICAgICB2YXIgcmVzdWx0LCB0aGVuLCBleGl0ZWQ7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgIGlmICghb2spIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5yZWplY3Rpb24gPT09IFVOSEFORExFRCkgb25IYW5kbGVVbmhhbmRsZWQoc3RhdGUpO1xuICAgICAgICAgICAgc3RhdGUucmVqZWN0aW9uID0gSEFORExFRDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhhbmRsZXIgPT09IHRydWUpIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRvbWFpbikgZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTsgLy8gY2FuIHRocm93XG4gICAgICAgICAgICBpZiAoZG9tYWluKSB7XG4gICAgICAgICAgICAgIGRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgICAgIGV4aXRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2UpIHtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKGRvbWFpbiAmJiAhZXhpdGVkKSBkb21haW4uZXhpdCgpO1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgICBzdGF0ZS5yZWFjdGlvbnMgPSBbXTtcbiAgICBzdGF0ZS5ub3RpZmllZCA9IGZhbHNlO1xuICAgIGlmIChpc1JlamVjdCAmJiAhc3RhdGUucmVqZWN0aW9uKSBvblVuaGFuZGxlZChzdGF0ZSk7XG4gIH0pO1xufTtcblxudmFyIGRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiAobmFtZSwgcHJvbWlzZSwgcmVhc29uKSB7XG4gIHZhciBldmVudCwgaGFuZGxlcjtcbiAgaWYgKERJU1BBVENIX0VWRU5UKSB7XG4gICAgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICBldmVudC5wcm9taXNlID0gcHJvbWlzZTtcbiAgICBldmVudC5yZWFzb24gPSByZWFzb247XG4gICAgZXZlbnQuaW5pdEV2ZW50KG5hbWUsIGZhbHNlLCB0cnVlKTtcbiAgICBnbG9iYWwuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIH0gZWxzZSBldmVudCA9IHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiByZWFzb24gfTtcbiAgaWYgKCFOQVRJVkVfUkVKRUNUSU9OX0VWRU5UICYmIChoYW5kbGVyID0gZ2xvYmFsWydvbicgKyBuYW1lXSkpIGhhbmRsZXIoZXZlbnQpO1xuICBlbHNlIGlmIChuYW1lID09PSBVTkhBTkRMRURfUkVKRUNUSU9OKSBob3N0UmVwb3J0RXJyb3JzKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCByZWFzb24pO1xufTtcblxudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvbWlzZSA9IHN0YXRlLmZhY2FkZTtcbiAgICB2YXIgdmFsdWUgPSBzdGF0ZS52YWx1ZTtcbiAgICB2YXIgSVNfVU5IQU5ETEVEID0gaXNVbmhhbmRsZWQoc3RhdGUpO1xuICAgIHZhciByZXN1bHQ7XG4gICAgaWYgKElTX1VOSEFORExFRCkge1xuICAgICAgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChJU19OT0RFKSB7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBkaXNwYXRjaEV2ZW50KFVOSEFORExFRF9SRUpFQ1RJT04sIHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHN0YXRlLnJlamVjdGlvbiA9IElTX05PREUgfHwgaXNVbmhhbmRsZWQoc3RhdGUpID8gVU5IQU5ETEVEIDogSEFORExFRDtcbiAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHRocm93IHJlc3VsdC52YWx1ZTtcbiAgICB9XG4gIH0pO1xufTtcblxudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gIHJldHVybiBzdGF0ZS5yZWplY3Rpb24gIT09IEhBTkRMRUQgJiYgIXN0YXRlLnBhcmVudDtcbn07XG5cbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb21pc2UgPSBzdGF0ZS5mYWNhZGU7XG4gICAgaWYgKElTX05PREUpIHtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBkaXNwYXRjaEV2ZW50KFJFSkVDVElPTl9IQU5ETEVELCBwcm9taXNlLCBzdGF0ZS52YWx1ZSk7XG4gIH0pO1xufTtcblxudmFyIGJpbmQgPSBmdW5jdGlvbiAoZm4sIHN0YXRlLCB1bndyYXApIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGZuKHN0YXRlLCB2YWx1ZSwgdW53cmFwKTtcbiAgfTtcbn07XG5cbnZhciBpbnRlcm5hbFJlamVjdCA9IGZ1bmN0aW9uIChzdGF0ZSwgdmFsdWUsIHVud3JhcCkge1xuICBpZiAoc3RhdGUuZG9uZSkgcmV0dXJuO1xuICBzdGF0ZS5kb25lID0gdHJ1ZTtcbiAgaWYgKHVud3JhcCkgc3RhdGUgPSB1bndyYXA7XG4gIHN0YXRlLnZhbHVlID0gdmFsdWU7XG4gIHN0YXRlLnN0YXRlID0gUkVKRUNURUQ7XG4gIG5vdGlmeShzdGF0ZSwgdHJ1ZSk7XG59O1xuXG52YXIgaW50ZXJuYWxSZXNvbHZlID0gZnVuY3Rpb24gKHN0YXRlLCB2YWx1ZSwgdW53cmFwKSB7XG4gIGlmIChzdGF0ZS5kb25lKSByZXR1cm47XG4gIHN0YXRlLmRvbmUgPSB0cnVlO1xuICBpZiAodW53cmFwKSBzdGF0ZSA9IHVud3JhcDtcbiAgdHJ5IHtcbiAgICBpZiAoc3RhdGUuZmFjYWRlID09PSB2YWx1ZSkgdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgdmFyIHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKTtcbiAgICBpZiAodGhlbikge1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7IGRvbmU6IGZhbHNlIH07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLFxuICAgICAgICAgICAgYmluZChpbnRlcm5hbFJlc29sdmUsIHdyYXBwZXIsIHN0YXRlKSxcbiAgICAgICAgICAgIGJpbmQoaW50ZXJuYWxSZWplY3QsIHdyYXBwZXIsIHN0YXRlKVxuICAgICAgICAgICk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgaW50ZXJuYWxSZWplY3Qod3JhcHBlciwgZXJyb3IsIHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlLnZhbHVlID0gdmFsdWU7XG4gICAgICBzdGF0ZS5zdGF0ZSA9IEZVTEZJTExFRDtcbiAgICAgIG5vdGlmeShzdGF0ZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpbnRlcm5hbFJlamVjdCh7IGRvbmU6IGZhbHNlIH0sIGVycm9yLCBzdGF0ZSk7XG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZiAoRk9SQ0VEKSB7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gIFByb21pc2VDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICBhbkluc3RhbmNlKHRoaXMsIFByb21pc2VDb25zdHJ1Y3RvciwgUFJPTUlTRSk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGJpbmQoaW50ZXJuYWxSZXNvbHZlLCBzdGF0ZSksIGJpbmQoaW50ZXJuYWxSZWplY3QsIHN0YXRlKSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGludGVybmFsUmVqZWN0KHN0YXRlLCBlcnJvcik7XG4gICAgfVxuICB9O1xuICBQcm9taXNlQ29uc3RydWN0b3JQcm90b3R5cGUgPSBQcm9taXNlQ29uc3RydWN0b3IucHJvdG90eXBlO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnMgLS0gcmVxdWlyZWQgZm9yIGAubGVuZ3RoYFxuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICBzZXRJbnRlcm5hbFN0YXRlKHRoaXMsIHtcbiAgICAgIHR5cGU6IFBST01JU0UsXG4gICAgICBkb25lOiBmYWxzZSxcbiAgICAgIG5vdGlmaWVkOiBmYWxzZSxcbiAgICAgIHBhcmVudDogZmFsc2UsXG4gICAgICByZWFjdGlvbnM6IFtdLFxuICAgICAgcmVqZWN0aW9uOiBmYWxzZSxcbiAgICAgIHN0YXRlOiBQRU5ESU5HLFxuICAgICAgdmFsdWU6IHVuZGVmaW5lZFxuICAgIH0pO1xuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZWRlZmluZUFsbChQcm9taXNlQ29uc3RydWN0b3JQcm90b3R5cGUsIHtcbiAgICAvLyBgUHJvbWlzZS5wcm90b3R5cGUudGhlbmAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1wcm9taXNlLnByb3RvdHlwZS50aGVuXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxQcm9taXNlU3RhdGUodGhpcyk7XG4gICAgICB2YXIgcmVhY3Rpb24gPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgUHJvbWlzZUNvbnN0cnVjdG9yKSk7XG4gICAgICByZWFjdGlvbi5vayA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IElTX05PREUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHN0YXRlLnBhcmVudCA9IHRydWU7XG4gICAgICBzdGF0ZS5yZWFjdGlvbnMucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAoc3RhdGUuc3RhdGUgIT0gUEVORElORykgbm90aWZ5KHN0YXRlLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIGBQcm9taXNlLnByb3RvdHlwZS5jYXRjaGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1wcm9taXNlLnByb3RvdHlwZS5jYXRjaFxuICAgICdjYXRjaCc6IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgT3duUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgSW50ZXJuYWwoKTtcbiAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHByb21pc2UpO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gYmluZChpbnRlcm5hbFJlc29sdmUsIHN0YXRlKTtcbiAgICB0aGlzLnJlamVjdCA9IGJpbmQoaW50ZXJuYWxSZWplY3QsIHN0YXRlKTtcbiAgfTtcbiAgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKEMpIHtcbiAgICByZXR1cm4gQyA9PT0gUHJvbWlzZUNvbnN0cnVjdG9yIHx8IEMgPT09IFByb21pc2VXcmFwcGVyXG4gICAgICA/IG5ldyBPd25Qcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgOiBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gIH07XG5cbiAgaWYgKCFJU19QVVJFICYmIHR5cGVvZiBOYXRpdmVQcm9taXNlID09ICdmdW5jdGlvbicgJiYgTmF0aXZlUHJvbWlzZVByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSkge1xuICAgIG5hdGl2ZVRoZW4gPSBOYXRpdmVQcm9taXNlUHJvdG90eXBlLnRoZW47XG5cbiAgICBpZiAoIVNVQkNMQVNTSU5HKSB7XG4gICAgICAvLyBtYWtlIGBQcm9taXNlI3RoZW5gIHJldHVybiBhIHBvbHlmaWxsZWQgYFByb21pc2VgIGZvciBuYXRpdmUgcHJvbWlzZS1iYXNlZCBBUElzXG4gICAgICByZWRlZmluZShOYXRpdmVQcm9taXNlUHJvdG90eXBlLCAndGhlbicsIGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VDb25zdHJ1Y3RvcihmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgbmF0aXZlVGhlbi5jYWxsKHRoYXQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpO1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY0MFxuICAgICAgfSwgeyB1bnNhZmU6IHRydWUgfSk7XG5cbiAgICAgIC8vIG1ha2VzIHN1cmUgdGhhdCBuYXRpdmUgcHJvbWlzZS1iYXNlZCBBUElzIGBQcm9taXNlI2NhdGNoYCBwcm9wZXJseSB3b3JrcyB3aXRoIHBhdGNoZWQgYFByb21pc2UjdGhlbmBcbiAgICAgIHJlZGVmaW5lKE5hdGl2ZVByb21pc2VQcm90b3R5cGUsICdjYXRjaCcsIFByb21pc2VDb25zdHJ1Y3RvclByb3RvdHlwZVsnY2F0Y2gnXSwgeyB1bnNhZmU6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgLy8gbWFrZSBgLmNvbnN0cnVjdG9yID09PSBQcm9taXNlYCB3b3JrIGZvciBuYXRpdmUgcHJvbWlzZS1iYXNlZCBBUElzXG4gICAgdHJ5IHtcbiAgICAgIGRlbGV0ZSBOYXRpdmVQcm9taXNlUHJvdG90eXBlLmNvbnN0cnVjdG9yO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cblxuICAgIC8vIG1ha2UgYGluc3RhbmNlb2YgUHJvbWlzZWAgd29yayBmb3IgbmF0aXZlIHByb21pc2UtYmFzZWQgQVBJc1xuICAgIGlmIChzZXRQcm90b3R5cGVPZikge1xuICAgICAgc2V0UHJvdG90eXBlT2YoTmF0aXZlUHJvbWlzZVByb3RvdHlwZSwgUHJvbWlzZUNvbnN0cnVjdG9yUHJvdG90eXBlKTtcbiAgICB9XG4gIH1cbn1cblxuJCh7IGdsb2JhbDogdHJ1ZSwgd3JhcDogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICBQcm9taXNlOiBQcm9taXNlQ29uc3RydWN0b3Jcbn0pO1xuXG5zZXRUb1N0cmluZ1RhZyhQcm9taXNlQ29uc3RydWN0b3IsIFBST01JU0UsIGZhbHNlLCB0cnVlKTtcbnNldFNwZWNpZXMoUFJPTUlTRSk7XG5cblByb21pc2VXcmFwcGVyID0gZ2V0QnVpbHRJbihQUk9NSVNFKTtcblxuLy8gc3RhdGljc1xuJCh7IHRhcmdldDogUFJPTUlTRSwgc3RhdDogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICAvLyBgUHJvbWlzZS5yZWplY3RgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXByb21pc2UucmVqZWN0XG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpIHtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpO1xuICAgIGNhcGFiaWxpdHkucmVqZWN0LmNhbGwodW5kZWZpbmVkLCByKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcblxuJCh7IHRhcmdldDogUFJPTUlTRSwgc3RhdDogdHJ1ZSwgZm9yY2VkOiBJU19QVVJFIHx8IEZPUkNFRCB9LCB7XG4gIC8vIGBQcm9taXNlLnJlc29sdmVgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXByb21pc2UucmVzb2x2ZVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpIHtcbiAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoSVNfUFVSRSAmJiB0aGlzID09PSBQcm9taXNlV3JhcHBlciA/IFByb21pc2VDb25zdHJ1Y3RvciA6IHRoaXMsIHgpO1xuICB9XG59KTtcblxuJCh7IHRhcmdldDogUFJPTUlTRSwgc3RhdDogdHJ1ZSwgZm9yY2VkOiBJTkNPUlJFQ1RfSVRFUkFUSU9OIH0sIHtcbiAgLy8gYFByb21pc2UuYWxsYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1wcm9taXNlLmFsbFxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZXNvbHZlID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHByb21pc2VSZXNvbHZlID0gYUZ1bmN0aW9uKEMucmVzb2x2ZSk7XG4gICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICB2YXIgY291bnRlciA9IDA7XG4gICAgICB2YXIgcmVtYWluaW5nID0gMTtcbiAgICAgIGl0ZXJhdGUoaXRlcmFibGUsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIHZhciBpbmRleCA9IGNvdW50ZXIrKztcbiAgICAgICAgdmFyIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgICRwcm9taXNlUmVzb2x2ZS5jYWxsKEMsIHByb21pc2UpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKGFscmVhZHlDYWxsZWQpIHJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lcnJvcikgcmVqZWN0KHJlc3VsdC52YWx1ZSk7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gYFByb21pc2UucmFjZWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcHJvbWlzZS5yYWNlXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRwcm9taXNlUmVzb2x2ZSA9IGFGdW5jdGlvbihDLnJlc29sdmUpO1xuICAgICAgaXRlcmF0ZShpdGVyYWJsZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgJHByb21pc2VSZXNvbHZlLmNhbGwoQywgcHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmVycm9yKSByZWplY3QocmVzdWx0LnZhbHVlKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWZ1bmN0aW9uJyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGVyZm9ybScpO1xudmFyIGl0ZXJhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0ZScpO1xuXG4vLyBgUHJvbWlzZS5hbGxTZXR0bGVkYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcHJvbWlzZS5hbGxzZXR0bGVkXG4kKHsgdGFyZ2V0OiAnUHJvbWlzZScsIHN0YXQ6IHRydWUgfSwge1xuICBhbGxTZXR0bGVkOiBmdW5jdGlvbiBhbGxTZXR0bGVkKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZihDKTtcbiAgICB2YXIgcmVzb2x2ZSA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHByb21pc2VSZXNvbHZlID0gYUZ1bmN0aW9uKEMucmVzb2x2ZSk7XG4gICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICB2YXIgY291bnRlciA9IDA7XG4gICAgICB2YXIgcmVtYWluaW5nID0gMTtcbiAgICAgIGl0ZXJhdGUoaXRlcmFibGUsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIHZhciBpbmRleCA9IGNvdW50ZXIrKztcbiAgICAgICAgdmFyIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIHByb21pc2VSZXNvbHZlLmNhbGwoQywgcHJvbWlzZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpZiAoYWxyZWFkeUNhbGxlZCkgcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1tpbmRleF0gPSB7IHN0YXR1czogJ2Z1bGZpbGxlZCcsIHZhbHVlOiB2YWx1ZSB9O1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgaWYgKGFscmVhZHlDYWxsZWQpIHJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbaW5kZXhdID0geyBzdGF0dXM6ICdyZWplY3RlZCcsIHJlYXNvbjogZXJyb3IgfTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lcnJvcikgcmVqZWN0KHJlc3VsdC52YWx1ZSk7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1mdW5jdGlvbicpO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGVyZm9ybScpO1xudmFyIGl0ZXJhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0ZScpO1xuXG52YXIgUFJPTUlTRV9BTllfRVJST1IgPSAnTm8gb25lIHByb21pc2UgcmVzb2x2ZWQnO1xuXG4vLyBgUHJvbWlzZS5hbnlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1wcm9taXNlLmFueVxuJCh7IHRhcmdldDogJ1Byb21pc2UnLCBzdGF0OiB0cnVlIH0sIHtcbiAgYW55OiBmdW5jdGlvbiBhbnkoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mKEMpO1xuICAgIHZhciByZXNvbHZlID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcHJvbWlzZVJlc29sdmUgPSBhRnVuY3Rpb24oQy5yZXNvbHZlKTtcbiAgICAgIHZhciBlcnJvcnMgPSBbXTtcbiAgICAgIHZhciBjb3VudGVyID0gMDtcbiAgICAgIHZhciByZW1haW5pbmcgPSAxO1xuICAgICAgdmFyIGFscmVhZHlSZXNvbHZlZCA9IGZhbHNlO1xuICAgICAgaXRlcmF0ZShpdGVyYWJsZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gY291bnRlcisrO1xuICAgICAgICB2YXIgYWxyZWFkeVJlamVjdGVkID0gZmFsc2U7XG4gICAgICAgIGVycm9ycy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBwcm9taXNlUmVzb2x2ZS5jYWxsKEMsIHByb21pc2UpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKGFscmVhZHlSZWplY3RlZCB8fCBhbHJlYWR5UmVzb2x2ZWQpIHJldHVybjtcbiAgICAgICAgICBhbHJlYWR5UmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICBpZiAoYWxyZWFkeVJlamVjdGVkIHx8IGFscmVhZHlSZXNvbHZlZCkgcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlSZWplY3RlZCA9IHRydWU7XG4gICAgICAgICAgZXJyb3JzW2luZGV4XSA9IGVycm9yO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlamVjdChuZXcgKGdldEJ1aWx0SW4oJ0FnZ3JlZ2F0ZUVycm9yJykpKGVycm9ycywgUFJPTUlTRV9BTllfRVJST1IpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlamVjdChuZXcgKGdldEJ1aWx0SW4oJ0FnZ3JlZ2F0ZUVycm9yJykpKGVycm9ycywgUFJPTUlTRV9BTllfRVJST1IpKTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmVycm9yKSByZWplY3QocmVzdWx0LnZhbHVlKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIE5hdGl2ZVByb21pc2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXByb21pc2UtY29uc3RydWN0b3InKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wcm9taXNlLXJlc29sdmUnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xuXG4vLyBTYWZhcmkgYnVnIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDA4MjlcbnZhciBOT05fR0VORVJJQyA9ICEhTmF0aXZlUHJvbWlzZSAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIE5hdGl2ZVByb21pc2UucHJvdG90eXBlWydmaW5hbGx5J10uY2FsbCh7IHRoZW46IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSB9LCBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0pO1xufSk7XG5cbi8vIGBQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcHJvbWlzZS5wcm90b3R5cGUuZmluYWxseVxuJCh7IHRhcmdldDogJ1Byb21pc2UnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiBOT05fR0VORVJJQyB9LCB7XG4gICdmaW5hbGx5JzogZnVuY3Rpb24gKG9uRmluYWxseSkge1xuICAgIHZhciBDID0gc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsIGdldEJ1aWx0SW4oJ1Byb21pc2UnKSk7XG4gICAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2Ygb25GaW5hbGx5ID09ICdmdW5jdGlvbic7XG4gICAgcmV0dXJuIHRoaXMudGhlbihcbiAgICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoQywgb25GaW5hbGx5KCkpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4geDsgfSk7XG4gICAgICB9IDogb25GaW5hbGx5LFxuICAgICAgaXNGdW5jdGlvbiA/IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDLCBvbkZpbmFsbHkoKSkudGhlbihmdW5jdGlvbiAoKSB7IHRocm93IGU7IH0pO1xuICAgICAgfSA6IG9uRmluYWxseVxuICAgICk7XG4gIH1cbn0pO1xuXG4vLyBtYWtlcyBzdXJlIHRoYXQgbmF0aXZlIHByb21pc2UtYmFzZWQgQVBJcyBgUHJvbWlzZSNmaW5hbGx5YCBwcm9wZXJseSB3b3JrcyB3aXRoIHBhdGNoZWQgYFByb21pc2UjdGhlbmBcbmlmICghSVNfUFVSRSAmJiB0eXBlb2YgTmF0aXZlUHJvbWlzZSA9PSAnZnVuY3Rpb24nKSB7XG4gIHZhciBtZXRob2QgPSBnZXRCdWlsdEluKCdQcm9taXNlJykucHJvdG90eXBlWydmaW5hbGx5J107XG4gIGlmIChOYXRpdmVQcm9taXNlLnByb3RvdHlwZVsnZmluYWxseSddICE9PSBtZXRob2QpIHtcbiAgICByZWRlZmluZShOYXRpdmVQcm9taXNlLnByb3RvdHlwZSwgJ2ZpbmFsbHknLCBtZXRob2QsIHsgdW5zYWZlOiB0cnVlIH0pO1xuICB9XG59XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXInKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS5jb2RlUG9pbnRBdGAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChDT05WRVJUX1RPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBwb3MpIHtcbiAgICB2YXIgUyA9IHRvU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUoJHRoaXMpKTtcbiAgICB2YXIgcG9zaXRpb24gPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgc2l6ZSA9IFMubGVuZ3RoO1xuICAgIHZhciBmaXJzdCwgc2Vjb25kO1xuICAgIGlmIChwb3NpdGlvbiA8IDAgfHwgcG9zaXRpb24gPj0gc2l6ZSkgcmV0dXJuIENPTlZFUlRfVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgZmlyc3QgPSBTLmNoYXJDb2RlQXQocG9zaXRpb24pO1xuICAgIHJldHVybiBmaXJzdCA8IDB4RDgwMCB8fCBmaXJzdCA+IDB4REJGRiB8fCBwb3NpdGlvbiArIDEgPT09IHNpemVcbiAgICAgIHx8IChzZWNvbmQgPSBTLmNoYXJDb2RlQXQocG9zaXRpb24gKyAxKSkgPCAweERDMDAgfHwgc2Vjb25kID4gMHhERkZGXG4gICAgICAgID8gQ09OVkVSVF9UT19TVFJJTkcgPyBTLmNoYXJBdChwb3NpdGlvbikgOiBmaXJzdFxuICAgICAgICA6IENPTlZFUlRfVE9fU1RSSU5HID8gUy5zbGljZShwb3NpdGlvbiwgcG9zaXRpb24gKyAyKSA6IChmaXJzdCAtIDB4RDgwMCA8PCAxMCkgKyAoc2Vjb25kIC0gMHhEQzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUuY29kZVBvaW50QXRgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuY29kZXBvaW50YXRcbiAgY29kZUF0OiBjcmVhdGVNZXRob2QoZmFsc2UpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS5hdGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRoaWFzYnluZW5zL1N0cmluZy5wcm90b3R5cGUuYXRcbiAgY2hhckF0OiBjcmVhdGVNZXRob2QodHJ1ZSlcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2hhckF0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy1tdWx0aWJ5dGUnKS5jaGFyQXQ7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xudmFyIGRlZmluZUl0ZXJhdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1pdGVyYXRvcicpO1xuXG52YXIgU1RSSU5HX0lURVJBVE9SID0gJ1N0cmluZyBJdGVyYXRvcic7XG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcihTVFJJTkdfSVRFUkFUT1IpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUtQEBpdGVyYXRvclxuZGVmaW5lSXRlcmF0b3IoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gIHNldEludGVybmFsU3RhdGUodGhpcywge1xuICAgIHR5cGU6IFNUUklOR19JVEVSQVRPUixcbiAgICBzdHJpbmc6IHRvU3RyaW5nKGl0ZXJhdGVkKSxcbiAgICBpbmRleDogMFxuICB9KTtcbi8vIGAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0lc3RyaW5naXRlcmF0b3Jwcm90b3R5cGUlLm5leHRcbn0sIGZ1bmN0aW9uIG5leHQoKSB7XG4gIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhpcyk7XG4gIHZhciBzdHJpbmcgPSBzdGF0ZS5zdHJpbmc7XG4gIHZhciBpbmRleCA9IHN0YXRlLmluZGV4O1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBzdHJpbmcubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gY2hhckF0KHN0cmluZywgaW5kZXgpO1xuICBzdGF0ZS5pbmRleCArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lcy5hZ2dyZWdhdGUtZXJyb3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMuYXJyYXkuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lcy5wcm9taXNlJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLnByb21pc2UuYWxsLXNldHRsZWQnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMucHJvbWlzZS5hbnknKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMucHJvbWlzZS5maW5hbGx5Jyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLnN0cmluZy5pdGVyYXRvcicpO1xudmFyIHBhdGggPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbHMvcGF0aCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGguUHJvbWlzZTtcbiIsIi8vIGl0ZXJhYmxlIERPTSBjb2xsZWN0aW9uc1xuLy8gZmxhZyAtIGBpdGVyYWJsZWAgaW50ZXJmYWNlIC0gJ2VudHJpZXMnLCAna2V5cycsICd2YWx1ZXMnLCAnZm9yRWFjaCcgbWV0aG9kc1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIENTU1J1bGVMaXN0OiAwLFxuICBDU1NTdHlsZURlY2xhcmF0aW9uOiAwLFxuICBDU1NWYWx1ZUxpc3Q6IDAsXG4gIENsaWVudFJlY3RMaXN0OiAwLFxuICBET01SZWN0TGlzdDogMCxcbiAgRE9NU3RyaW5nTGlzdDogMCxcbiAgRE9NVG9rZW5MaXN0OiAxLFxuICBEYXRhVHJhbnNmZXJJdGVtTGlzdDogMCxcbiAgRmlsZUxpc3Q6IDAsXG4gIEhUTUxBbGxDb2xsZWN0aW9uOiAwLFxuICBIVE1MQ29sbGVjdGlvbjogMCxcbiAgSFRNTEZvcm1FbGVtZW50OiAwLFxuICBIVE1MU2VsZWN0RWxlbWVudDogMCxcbiAgTWVkaWFMaXN0OiAwLFxuICBNaW1lVHlwZUFycmF5OiAwLFxuICBOYW1lZE5vZGVNYXA6IDAsXG4gIE5vZGVMaXN0OiAxLFxuICBQYWludFJlcXVlc3RMaXN0OiAwLFxuICBQbHVnaW46IDAsXG4gIFBsdWdpbkFycmF5OiAwLFxuICBTVkdMZW5ndGhMaXN0OiAwLFxuICBTVkdOdW1iZXJMaXN0OiAwLFxuICBTVkdQYXRoU2VnTGlzdDogMCxcbiAgU1ZHUG9pbnRMaXN0OiAwLFxuICBTVkdTdHJpbmdMaXN0OiAwLFxuICBTVkdUcmFuc2Zvcm1MaXN0OiAwLFxuICBTb3VyY2VCdWZmZXJMaXN0OiAwLFxuICBTdHlsZVNoZWV0TGlzdDogMCxcbiAgVGV4dFRyYWNrQ3VlTGlzdDogMCxcbiAgVGV4dFRyYWNrTGlzdDogMCxcbiAgVG91Y2hMaXN0OiAwXG59O1xuIiwicmVxdWlyZSgnLi9lcy5hcnJheS5pdGVyYXRvcicpO1xudmFyIERPTUl0ZXJhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20taXRlcmFibGVzJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZicpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xuXG5mb3IgKHZhciBDT0xMRUNUSU9OX05BTUUgaW4gRE9NSXRlcmFibGVzKSB7XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW0NPTExFQ1RJT05fTkFNRV07XG4gIHZhciBDb2xsZWN0aW9uUHJvdG90eXBlID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGUgJiYgY2xhc3NvZihDb2xsZWN0aW9uUHJvdG90eXBlKSAhPT0gVE9fU1RSSU5HX1RBRykge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCBUT19TVFJJTkdfVEFHLCBDT0xMRUNUSU9OX05BTUUpO1xuICB9XG4gIEl0ZXJhdG9yc1tDT0xMRUNUSU9OX05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuIiwidmFyIHBhcmVudCA9IHJlcXVpcmUoJy4uLy4uL2VzL3Byb21pc2UnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5pdGVyYXRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcmVudDtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3BlcmZvcm0nKTtcblxuLy8gYFByb21pc2UudHJ5YCBtZXRob2Rcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByb21pc2UtdHJ5XG4kKHsgdGFyZ2V0OiAnUHJvbWlzZScsIHN0YXQ6IHRydWUgfSwge1xuICAndHJ5JzogZnVuY3Rpb24gKGNhbGxiYWNrZm4pIHtcbiAgICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mKHRoaXMpO1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGNhbGxiYWNrZm4pO1xuICAgIChyZXN1bHQuZXJyb3IgPyBwcm9taXNlQ2FwYWJpbGl0eS5yZWplY3QgOiBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlKShyZXN1bHQudmFsdWUpO1xuICAgIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiIsInZhciBwYXJlbnQgPSByZXF1aXJlKCcuLi8uLi9zdGFibGUvcHJvbWlzZScpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lc25leHQuYWdncmVnYXRlLWVycm9yJyk7XG4vLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lc25leHQucHJvbWlzZS5hbGwtc2V0dGxlZCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lc25leHQucHJvbWlzZS50cnknKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXNuZXh0LnByb21pc2UuYW55Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyZW50O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy1wdXJlL2ZlYXR1cmVzL3Byb21pc2VcIik7IiwiaW1wb3J0IF9Qcm9taXNlIGZyb20gXCJAYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMvcHJvbWlzZVwiO1xuXG5mdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgX1Byb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IF9Qcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbi8vIGBJc0FycmF5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNhcnJheVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWlzYXJyYXkgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjbGFzc29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG5cbi8vIGBBcnJheS5pc0FycmF5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkuaXNhcnJheVxuJCh7IHRhcmdldDogJ0FycmF5Jywgc3RhdDogdHJ1ZSB9LCB7XG4gIGlzQXJyYXk6IGlzQXJyYXlcbn0pO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lcy5hcnJheS5pcy1hcnJheScpO1xudmFyIHBhdGggPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbHMvcGF0aCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGguQXJyYXkuaXNBcnJheTtcbiIsInZhciBwYXJlbnQgPSByZXF1aXJlKCcuLi8uLi9lcy9hcnJheS9pcy1hcnJheScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcmVudDtcbiIsInZhciBwYXJlbnQgPSByZXF1aXJlKCcuLi8uLi9zdGFibGUvYXJyYXkvaXMtYXJyYXknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJlbnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzLXB1cmUvZmVhdHVyZXMvYXJyYXkvaXMtYXJyYXlcIik7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufSIsImltcG9ydCBfQXJyYXkkaXNBcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzL2FycmF5L2lzLWFycmF5XCI7XG5pbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChfQXJyYXkkaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufSIsIid1c2Ugc3RyaWN0JztcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHZhciBwcm9wZXJ0eUtleSA9IHRvUHJvcGVydHlLZXkoa2V5KTtcbiAgaWYgKHByb3BlcnR5S2V5IGluIG9iamVjdCkgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIHByb3BlcnR5S2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbcHJvcGVydHlLZXldID0gdmFsdWU7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxuLy8gYSBwYXJ0IG9mIGBBcnJheVNwZWNpZXNDcmVhdGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheXNwZWNpZXNjcmVhdGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsQXJyYXkpIHtcbiAgdmFyIEM7XG4gIGlmIChpc0FycmF5KG9yaWdpbmFsQXJyYXkpKSB7XG4gICAgQyA9IG9yaWdpbmFsQXJyYXkuY29uc3RydWN0b3I7XG4gICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICBpZiAodHlwZW9mIEMgPT0gJ2Z1bmN0aW9uJyAmJiAoQyA9PT0gQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKSBDID0gdW5kZWZpbmVkO1xuICAgIGVsc2UgaWYgKGlzT2JqZWN0KEMpKSB7XG4gICAgICBDID0gQ1tTUEVDSUVTXTtcbiAgICAgIGlmIChDID09PSBudWxsKSBDID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSByZXR1cm4gQyA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDO1xufTtcbiIsInZhciBhcnJheVNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG5cbi8vIGBBcnJheVNwZWNpZXNDcmVhdGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheXNwZWNpZXNjcmVhdGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsQXJyYXksIGxlbmd0aCkge1xuICByZXR1cm4gbmV3IChhcnJheVNwZWNpZXNDb25zdHJ1Y3RvcihvcmlnaW5hbEFycmF5KSkobGVuZ3RoID09PSAwID8gMCA6IGxlbmd0aCk7XG59O1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICAvLyBXZSBjYW4ndCB1c2UgdGhpcyBmZWF0dXJlIGRldGVjdGlvbiBpbiBWOCBzaW5jZSBpdCBjYXVzZXNcbiAgLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3N1xuICByZXR1cm4gVjhfVkVSU0lPTiA+PSA1MSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcnJheSA9IFtdO1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGFycmF5LmNvbnN0cnVjdG9yID0ge307XG4gICAgY29uc3RydWN0b3JbU1BFQ0lFU10gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4geyBmb286IDEgfTtcbiAgICB9O1xuICAgIHJldHVybiBhcnJheVtNRVRIT0RfTkFNRV0oQm9vbGVhbikuZm9vICE9PSAxO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xuXG52YXIgSVNfQ09OQ0FUX1NQUkVBREFCTEUgPSB3ZWxsS25vd25TeW1ib2woJ2lzQ29uY2F0U3ByZWFkYWJsZScpO1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSAweDFGRkZGRkZGRkZGRkZGO1xudmFyIE1BWElNVU1fQUxMT1dFRF9JTkRFWF9FWENFRURFRCA9ICdNYXhpbXVtIGFsbG93ZWQgaW5kZXggZXhjZWVkZWQnO1xuXG4vLyBXZSBjYW4ndCB1c2UgdGhpcyBmZWF0dXJlIGRldGVjdGlvbiBpbiBWOCBzaW5jZSBpdCBjYXVzZXNcbi8vIGRlb3B0aW1pemF0aW9uIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjc5XG52YXIgSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCA9IFY4X1ZFUlNJT04gPj0gNTEgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGFycmF5ID0gW107XG4gIGFycmF5W0lTX0NPTkNBVF9TUFJFQURBQkxFXSA9IGZhbHNlO1xuICByZXR1cm4gYXJyYXkuY29uY2F0KClbMF0gIT09IGFycmF5O1xufSk7XG5cbnZhciBTUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdjb25jYXQnKTtcblxudmFyIGlzQ29uY2F0U3ByZWFkYWJsZSA9IGZ1bmN0aW9uIChPKSB7XG4gIGlmICghaXNPYmplY3QoTykpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNwcmVhZGFibGUgPSBPW0lTX0NPTkNBVF9TUFJFQURBQkxFXTtcbiAgcmV0dXJuIHNwcmVhZGFibGUgIT09IHVuZGVmaW5lZCA/ICEhc3ByZWFkYWJsZSA6IGlzQXJyYXkoTyk7XG59O1xuXG52YXIgRk9SQ0VEID0gIUlTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgfHwgIVNQRUNJRVNfU1VQUE9SVDtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5jb25jYXRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuY29uY2F0XG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAaXNDb25jYXRTcHJlYWRhYmxlIGFuZCBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycyAtLSByZXF1aXJlZCBmb3IgYC5sZW5ndGhgXG4gIGNvbmNhdDogZnVuY3Rpb24gY29uY2F0KGFyZykge1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIEEgPSBhcnJheVNwZWNpZXNDcmVhdGUoTywgMCk7XG4gICAgdmFyIG4gPSAwO1xuICAgIHZhciBpLCBrLCBsZW5ndGgsIGxlbiwgRTtcbiAgICBmb3IgKGkgPSAtMSwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBFID0gaSA9PT0gLTEgPyBPIDogYXJndW1lbnRzW2ldO1xuICAgICAgaWYgKGlzQ29uY2F0U3ByZWFkYWJsZShFKSkge1xuICAgICAgICBsZW4gPSB0b0xlbmd0aChFLmxlbmd0aCk7XG4gICAgICAgIGlmIChuICsgbGVuID4gTUFYX1NBRkVfSU5URUdFUikgdGhyb3cgVHlwZUVycm9yKE1BWElNVU1fQUxMT1dFRF9JTkRFWF9FWENFRURFRCk7XG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBsZW47IGsrKywgbisrKSBpZiAoayBpbiBFKSBjcmVhdGVQcm9wZXJ0eShBLCBuLCBFW2tdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChuID49IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93IFR5cGVFcnJvcihNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQpO1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShBLCBuKyssIEUpO1xuICAgICAgfVxuICAgIH1cbiAgICBBLmxlbmd0aCA9IG47XG4gICAgcmV0dXJuIEE7XG4gIH1cbn0pO1xuIiwidmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxudmFyIGhpZGRlbktleXMgPSBlbnVtQnVnS2V5cy5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHluYW1lcyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHluYW1lcyAtLSBzYWZlICovXG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKS5mO1xuXG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uIChpdCkge1xuICB0cnkge1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlOYW1lcyhpdCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJ1xuICAgID8gZ2V0V2luZG93TmFtZXMoaXQpXG4gICAgOiAkZ2V0T3duUHJvcGVydHlOYW1lcyh0b0luZGV4ZWRPYmplY3QoaXQpKTtcbn07XG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwidmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG5leHBvcnRzLmYgPSB3ZWxsS25vd25TeW1ib2w7XG4iLCJ2YXIgcGF0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wYXRoJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHdyYXBwZWRXZWxsS25vd25TeW1ib2xNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wtd3JhcHBlZCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChOQU1FKSB7XG4gIHZhciBTeW1ib2wgPSBwYXRoLlN5bWJvbCB8fCAocGF0aC5TeW1ib2wgPSB7fSk7XG4gIGlmICghaGFzKFN5bWJvbCwgTkFNRSkpIGRlZmluZVByb3BlcnR5KFN5bWJvbCwgTkFNRSwge1xuICAgIHZhbHVlOiB3cmFwcGVkV2VsbEtub3duU3ltYm9sTW9kdWxlLmYoTkFNRSlcbiAgfSk7XG59O1xuIiwidmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xuXG52YXIgcHVzaCA9IFtdLnB1c2g7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyBmb3JFYWNoLCBtYXAsIGZpbHRlciwgc29tZSwgZXZlcnksIGZpbmQsIGZpbmRJbmRleCwgZmlsdGVyUmVqZWN0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoVFlQRSkge1xuICB2YXIgSVNfTUFQID0gVFlQRSA9PSAxO1xuICB2YXIgSVNfRklMVEVSID0gVFlQRSA9PSAyO1xuICB2YXIgSVNfU09NRSA9IFRZUEUgPT0gMztcbiAgdmFyIElTX0VWRVJZID0gVFlQRSA9PSA0O1xuICB2YXIgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNjtcbiAgdmFyIElTX0ZJTFRFUl9SRUpFQ1QgPSBUWVBFID09IDc7XG4gIHZhciBOT19IT0xFUyA9IFRZUEUgPT0gNSB8fCBJU19GSU5EX0lOREVYO1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBjYWxsYmFja2ZuLCB0aGF0LCBzcGVjaWZpY0NyZWF0ZSkge1xuICAgIHZhciBPID0gdG9PYmplY3QoJHRoaXMpO1xuICAgIHZhciBzZWxmID0gSW5kZXhlZE9iamVjdChPKTtcbiAgICB2YXIgYm91bmRGdW5jdGlvbiA9IGJpbmQoY2FsbGJhY2tmbiwgdGhhdCwgMyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKHNlbGYubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBjcmVhdGUgPSBzcGVjaWZpY0NyZWF0ZSB8fCBhcnJheVNwZWNpZXNDcmVhdGU7XG4gICAgdmFyIHRhcmdldCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiB8fCBJU19GSUxURVJfUkVKRUNUID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgdmFsdWUsIHJlc3VsdDtcbiAgICBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpIHtcbiAgICAgIHZhbHVlID0gc2VsZltpbmRleF07XG4gICAgICByZXN1bHQgPSBib3VuZEZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgTyk7XG4gICAgICBpZiAoVFlQRSkge1xuICAgICAgICBpZiAoSVNfTUFQKSB0YXJnZXRbaW5kZXhdID0gcmVzdWx0OyAvLyBtYXBcbiAgICAgICAgZWxzZSBpZiAocmVzdWx0KSBzd2l0Y2ggKFRZUEUpIHtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAgLy8gc29tZVxuICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbHVlOyAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcHVzaC5jYWxsKHRhcmdldCwgdmFsdWUpOyAvLyBmaWx0ZXJcbiAgICAgICAgfSBlbHNlIHN3aXRjaCAoVFlQRSkge1xuICAgICAgICAgIGNhc2UgNDogcmV0dXJuIGZhbHNlOyAgICAgICAgICAgICAvLyBldmVyeVxuICAgICAgICAgIGNhc2UgNzogcHVzaC5jYWxsKHRhcmdldCwgdmFsdWUpOyAvLyBmaWx0ZXJSZWplY3RcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSVNfRklORF9JTkRFWCA/IC0xIDogSVNfU09NRSB8fCBJU19FVkVSWSA/IElTX0VWRVJZIDogdGFyZ2V0O1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbiAgZm9yRWFjaDogY3JlYXRlTWV0aG9kKDApLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxuICBtYXA6IGNyZWF0ZU1ldGhvZCgxKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgZmlsdGVyOiBjcmVhdGVNZXRob2QoMiksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuc29tZWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnNvbWVcbiAgc29tZTogY3JlYXRlTWV0aG9kKDMpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmV2ZXJ5YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZXZlcnlcbiAgZXZlcnk6IGNyZWF0ZU1ldGhvZCg0KSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maW5kYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZFxuICBmaW5kOiBjcmVhdGVNZXRob2QoNSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZEluZGV4XG4gIGZpbmRJbmRleDogY3JlYXRlTWV0aG9kKDYpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlclJlamVjdGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWFycmF5LWZpbHRlcmluZ1xuICBmaWx0ZXJSZWplY3Q6IGNyZWF0ZU1ldGhvZCg3KVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uYXRpdmUtc3ltYm9sJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG52YXIgJHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIG5hdGl2ZU9iamVjdENyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzRXh0ZXJuYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMtZXh0ZXJuYWwnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciB3cmFwcGVkV2VsbEtub3duU3ltYm9sTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLXdyYXBwZWQnKTtcbnZhciBkZWZpbmVXZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLXdlbGwta25vd24tc3ltYm9sJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG52YXIgJGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZm9yRWFjaDtcblxudmFyIEhJRERFTiA9IHNoYXJlZEtleSgnaGlkZGVuJyk7XG52YXIgU1lNQk9MID0gJ1N5bWJvbCc7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgVE9fUFJJTUlUSVZFID0gd2VsbEtub3duU3ltYm9sKCd0b1ByaW1pdGl2ZScpO1xudmFyIHNldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLnNldDtcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXR0ZXJGb3IoU1lNQk9MKTtcbnZhciBPYmplY3RQcm90b3R5cGUgPSBPYmplY3RbUFJPVE9UWVBFXTtcbnZhciAkU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciAkc3RyaW5naWZ5ID0gZ2V0QnVpbHRJbignSlNPTicsICdzdHJpbmdpZnknKTtcbnZhciBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUuZjtcbnZhciBuYXRpdmVEZWZpbmVQcm9wZXJ0eSA9IGRlZmluZVByb3BlcnR5TW9kdWxlLmY7XG52YXIgbmF0aXZlR2V0T3duUHJvcGVydHlOYW1lcyA9IGdldE93blByb3BlcnR5TmFtZXNFeHRlcm5hbC5mO1xudmFyIG5hdGl2ZVByb3BlcnR5SXNFbnVtZXJhYmxlID0gcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZjtcbnZhciBBbGxTeW1ib2xzID0gc2hhcmVkKCdzeW1ib2xzJyk7XG52YXIgT2JqZWN0UHJvdG90eXBlU3ltYm9scyA9IHNoYXJlZCgnb3Atc3ltYm9scycpO1xudmFyIFN0cmluZ1RvU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N0cmluZy10by1zeW1ib2wtcmVnaXN0cnknKTtcbnZhciBTeW1ib2xUb1N0cmluZ1JlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtdG8tc3RyaW5nLXJlZ2lzdHJ5Jyk7XG52YXIgV2VsbEtub3duU3ltYm9sc1N0b3JlID0gc2hhcmVkKCd3a3MnKTtcbnZhciBRT2JqZWN0ID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBVU0VfU0VUVEVSID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzY3JpcHRvciA9IERFU0NSSVBUT1JTICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdENyZWF0ZShuYXRpdmVEZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBuYXRpdmVEZWZpbmVQcm9wZXJ0eSh0aGlzLCAnYScsIHsgdmFsdWU6IDcgfSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbiAoTywgUCwgQXR0cmlidXRlcykge1xuICB2YXIgT2JqZWN0UHJvdG90eXBlRGVzY3JpcHRvciA9IG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvcihPYmplY3RQcm90b3R5cGUsIFApO1xuICBpZiAoT2JqZWN0UHJvdG90eXBlRGVzY3JpcHRvcikgZGVsZXRlIE9iamVjdFByb3RvdHlwZVtQXTtcbiAgbmF0aXZlRGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIGlmIChPYmplY3RQcm90b3R5cGVEZXNjcmlwdG9yICYmIE8gIT09IE9iamVjdFByb3RvdHlwZSkge1xuICAgIG5hdGl2ZURlZmluZVByb3BlcnR5KE9iamVjdFByb3RvdHlwZSwgUCwgT2JqZWN0UHJvdG90eXBlRGVzY3JpcHRvcik7XG4gIH1cbn0gOiBuYXRpdmVEZWZpbmVQcm9wZXJ0eTtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAodGFnLCBkZXNjcmlwdGlvbikge1xuICB2YXIgc3ltYm9sID0gQWxsU3ltYm9sc1t0YWddID0gbmF0aXZlT2JqZWN0Q3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHNldEludGVybmFsU3RhdGUoc3ltYm9sLCB7XG4gICAgdHlwZTogU1lNQk9MLFxuICAgIHRhZzogdGFnLFxuICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvblxuICB9KTtcbiAgaWYgKCFERVNDUklQVE9SUykgc3ltYm9sLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIHJldHVybiBzeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBpZiAoTyA9PT0gT2JqZWN0UHJvdG90eXBlKSAkZGVmaW5lUHJvcGVydHkoT2JqZWN0UHJvdG90eXBlU3ltYm9scywgUCwgQXR0cmlidXRlcyk7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5ID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChoYXMoQWxsU3ltYm9scywga2V5KSkge1xuICAgIGlmICghQXR0cmlidXRlcy5lbnVtZXJhYmxlKSB7XG4gICAgICBpZiAoIWhhcyhPLCBISURERU4pKSBuYXRpdmVEZWZpbmVQcm9wZXJ0eShPLCBISURERU4sIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCB7fSkpO1xuICAgICAgT1tISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzKE8sIEhJRERFTikgJiYgT1tISURERU5dW2tleV0pIE9bSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBBdHRyaWJ1dGVzID0gbmF0aXZlT2JqZWN0Q3JlYXRlKEF0dHJpYnV0ZXMsIHsgZW51bWVyYWJsZTogY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDAsIGZhbHNlKSB9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjcmlwdG9yKE8sIGtleSwgQXR0cmlidXRlcyk7XG4gIH0gcmV0dXJuIG5hdGl2ZURlZmluZVByb3BlcnR5KE8sIGtleSwgQXR0cmlidXRlcyk7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBwcm9wZXJ0aWVzID0gdG9JbmRleGVkT2JqZWN0KFByb3BlcnRpZXMpO1xuICB2YXIga2V5cyA9IG9iamVjdEtleXMocHJvcGVydGllcykuY29uY2F0KCRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMocHJvcGVydGllcykpO1xuICAkZm9yRWFjaChrZXlzLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKCFERVNDUklQVE9SUyB8fCAkcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChwcm9wZXJ0aWVzLCBrZXkpKSAkZGVmaW5lUHJvcGVydHkoTywga2V5LCBwcm9wZXJ0aWVzW2tleV0pO1xuICB9KTtcbiAgcmV0dXJuIE87XG59O1xuXG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyBuYXRpdmVPYmplY3RDcmVhdGUoTykgOiAkZGVmaW5lUHJvcGVydGllcyhuYXRpdmVPYmplY3RDcmVhdGUoTyksIFByb3BlcnRpZXMpO1xufTtcblxudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIFAgPSB0b1Byb3BlcnR5S2V5KFYpO1xuICB2YXIgZW51bWVyYWJsZSA9IG5hdGl2ZVByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodGhpcywgUCk7XG4gIGlmICh0aGlzID09PSBPYmplY3RQcm90b3R5cGUgJiYgaGFzKEFsbFN5bWJvbHMsIFApICYmICFoYXMoT2JqZWN0UHJvdG90eXBlU3ltYm9scywgUCkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIGVudW1lcmFibGUgfHwgIWhhcyh0aGlzLCBQKSB8fCAhaGFzKEFsbFN5bWJvbHMsIFApIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtQXSA/IGVudW1lcmFibGUgOiB0cnVlO1xufTtcblxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICB2YXIgaXQgPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIHZhciBrZXkgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvdHlwZSAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9iamVjdFByb3RvdHlwZVN5bWJvbHMsIGtleSkpIHJldHVybjtcbiAgdmFyIGRlc2NyaXB0b3IgPSBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSk7XG4gIGlmIChkZXNjcmlwdG9yICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpIHtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSB0cnVlO1xuICB9XG4gIHJldHVybiBkZXNjcmlwdG9yO1xufTtcblxudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHZhciBuYW1lcyA9IG5hdGl2ZUdldE93blByb3BlcnR5TmFtZXModG9JbmRleGVkT2JqZWN0KE8pKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICAkZm9yRWFjaChuYW1lcywgZnVuY3Rpb24gKGtleSkge1xuICAgIGlmICghaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhoaWRkZW5LZXlzLCBrZXkpKSByZXN1bHQucHVzaChrZXkpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pIHtcbiAgdmFyIElTX09CSkVDVF9QUk9UT1RZUEUgPSBPID09PSBPYmplY3RQcm90b3R5cGU7XG4gIHZhciBuYW1lcyA9IG5hdGl2ZUdldE93blByb3BlcnR5TmFtZXMoSVNfT0JKRUNUX1BST1RPVFlQRSA/IE9iamVjdFByb3RvdHlwZVN5bWJvbHMgOiB0b0luZGV4ZWRPYmplY3QoTykpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gICRmb3JFYWNoKG5hbWVzLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICghSVNfT0JKRUNUX1BST1RPVFlQRSB8fCBoYXMoT2JqZWN0UHJvdG90eXBlLCBrZXkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gYFN5bWJvbGAgY29uc3RydWN0b3Jcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3ltYm9sLWNvbnN0cnVjdG9yXG5pZiAoIU5BVElWRV9TWU1CT0wpIHtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpIHRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yJyk7XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gIWFyZ3VtZW50cy5sZW5ndGggfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiAkdG9TdHJpbmcoYXJndW1lbnRzWzBdKTtcbiAgICB2YXIgdGFnID0gdWlkKGRlc2NyaXB0aW9uKTtcbiAgICB2YXIgc2V0dGVyID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG90eXBlKSBzZXR0ZXIuY2FsbChPYmplY3RQcm90b3R5cGVTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZiAoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSkgdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2NyaXB0b3IodGhpcywgdGFnLCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmIChERVNDUklQVE9SUyAmJiBVU0VfU0VUVEVSKSBzZXRTeW1ib2xEZXNjcmlwdG9yKE9iamVjdFByb3RvdHlwZSwgdGFnLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiBzZXR0ZXIgfSk7XG4gICAgcmV0dXJuIHdyYXAodGFnLCBkZXNjcmlwdGlvbik7XG4gIH07XG5cbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS50YWc7XG4gIH0pO1xuXG4gIHJlZGVmaW5lKCRTeW1ib2wsICd3aXRob3V0U2V0dGVyJywgZnVuY3Rpb24gKGRlc2NyaXB0aW9uKSB7XG4gICAgcmV0dXJuIHdyYXAodWlkKGRlc2NyaXB0aW9uKSwgZGVzY3JpcHRpb24pO1xuICB9KTtcblxuICBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mID0gJGRlZmluZVByb3BlcnR5O1xuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZiA9IGdldE93blByb3BlcnR5TmFtZXNFeHRlcm5hbC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICB3cmFwcGVkV2VsbEtub3duU3ltYm9sTW9kdWxlLmYgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiB3cmFwKHdlbGxLbm93blN5bWJvbChuYW1lKSwgbmFtZSk7XG4gIH07XG5cbiAgaWYgKERFU0NSSVBUT1JTKSB7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtU3ltYm9sLWRlc2NyaXB0aW9uXG4gICAgbmF0aXZlRGVmaW5lUHJvcGVydHkoJFN5bWJvbFtQUk9UT1RZUEVdLCAnZGVzY3JpcHRpb24nLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGRlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS5kZXNjcmlwdGlvbjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoIUlTX1BVUkUpIHtcbiAgICAgIHJlZGVmaW5lKE9iamVjdFByb3RvdHlwZSwgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB7IHVuc2FmZTogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cbn1cblxuJCh7IGdsb2JhbDogdHJ1ZSwgd3JhcDogdHJ1ZSwgZm9yY2VkOiAhTkFUSVZFX1NZTUJPTCwgc2hhbTogIU5BVElWRV9TWU1CT0wgfSwge1xuICBTeW1ib2w6ICRTeW1ib2xcbn0pO1xuXG4kZm9yRWFjaChvYmplY3RLZXlzKFdlbGxLbm93blN5bWJvbHNTdG9yZSksIGZ1bmN0aW9uIChuYW1lKSB7XG4gIGRlZmluZVdlbGxLbm93blN5bWJvbChuYW1lKTtcbn0pO1xuXG4kKHsgdGFyZ2V0OiBTWU1CT0wsIHN0YXQ6IHRydWUsIGZvcmNlZDogIU5BVElWRV9TWU1CT0wgfSwge1xuICAvLyBgU3ltYm9sLmZvcmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3ltYm9sLmZvclxuICAnZm9yJzogZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBzdHJpbmcgPSAkdG9TdHJpbmcoa2V5KTtcbiAgICBpZiAoaGFzKFN0cmluZ1RvU3ltYm9sUmVnaXN0cnksIHN0cmluZykpIHJldHVybiBTdHJpbmdUb1N5bWJvbFJlZ2lzdHJ5W3N0cmluZ107XG4gICAgdmFyIHN5bWJvbCA9ICRTeW1ib2woc3RyaW5nKTtcbiAgICBTdHJpbmdUb1N5bWJvbFJlZ2lzdHJ5W3N0cmluZ10gPSBzeW1ib2w7XG4gICAgU3ltYm9sVG9TdHJpbmdSZWdpc3RyeVtzeW1ib2xdID0gc3RyaW5nO1xuICAgIHJldHVybiBzeW1ib2w7XG4gIH0sXG4gIC8vIGBTeW1ib2wua2V5Rm9yYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zeW1ib2wua2V5Zm9yXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKHN5bSkge1xuICAgIGlmICghaXNTeW1ib2woc3ltKSkgdGhyb3cgVHlwZUVycm9yKHN5bSArICcgaXMgbm90IGEgc3ltYm9sJyk7XG4gICAgaWYgKGhhcyhTeW1ib2xUb1N0cmluZ1JlZ2lzdHJ5LCBzeW0pKSByZXR1cm4gU3ltYm9sVG9TdHJpbmdSZWdpc3RyeVtzeW1dO1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uICgpIHsgVVNFX1NFVFRFUiA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24gKCkgeyBVU0VfU0VUVEVSID0gZmFsc2U7IH1cbn0pO1xuXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiAhTkFUSVZFX1NZTUJPTCwgc2hhbTogIURFU0NSSVBUT1JTIH0sIHtcbiAgLy8gYE9iamVjdC5jcmVhdGVgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5jcmVhdGVcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydGllc1xuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JzXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvclxufSk7XG5cbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6ICFOQVRJVkVfU1lNQk9MIH0sIHtcbiAgLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHluYW1lc1xuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eXN5bWJvbHNcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gQ2hyb21lIDM4IGFuZCAzOSBgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sc2AgZmFpbHMgb24gcHJpbWl0aXZlc1xuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzQ0M1xuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogZmFpbHMoZnVuY3Rpb24gKCkgeyBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZigxKTsgfSkgfSwge1xuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICAgIHJldHVybiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZih0b09iamVjdChpdCkpO1xuICB9XG59KTtcblxuLy8gYEpTT04uc3RyaW5naWZ5YCBtZXRob2QgYmVoYXZpb3Igd2l0aCBzeW1ib2xzXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWpzb24uc3RyaW5naWZ5XG5pZiAoJHN0cmluZ2lmeSkge1xuICB2YXIgRk9SQ0VEX0pTT05fU1RSSU5HSUZZID0gIU5BVElWRV9TWU1CT0wgfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciBzeW1ib2wgPSAkU3ltYm9sKCk7XG4gICAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgICByZXR1cm4gJHN0cmluZ2lmeShbc3ltYm9sXSkgIT0gJ1tudWxsXSdcbiAgICAgIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAgICAgfHwgJHN0cmluZ2lmeSh7IGE6IHN5bWJvbCB9KSAhPSAne30nXG4gICAgICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICAgICAgfHwgJHN0cmluZ2lmeShPYmplY3Qoc3ltYm9sKSkgIT0gJ3t9JztcbiAgfSk7XG5cbiAgJCh7IHRhcmdldDogJ0pTT04nLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IEZPUkNFRF9KU09OX1NUUklOR0lGWSB9LCB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzIC0tIHJlcXVpcmVkIGZvciBgLmxlbmd0aGBcbiAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCwgcmVwbGFjZXIsIHNwYWNlKSB7XG4gICAgICB2YXIgYXJncyA9IFtpdF07XG4gICAgICB2YXIgaW5kZXggPSAxO1xuICAgICAgdmFyICRyZXBsYWNlcjtcbiAgICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaW5kZXgpIGFyZ3MucHVzaChhcmd1bWVudHNbaW5kZXgrK10pO1xuICAgICAgJHJlcGxhY2VyID0gcmVwbGFjZXI7XG4gICAgICBpZiAoIWlzT2JqZWN0KHJlcGxhY2VyKSAmJiBpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSkgcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgICBpZiAoIWlzQXJyYXkocmVwbGFjZXIpKSByZXBsYWNlciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgJHJlcGxhY2VyID09ICdmdW5jdGlvbicpIHZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICAgIGlmICghaXNTeW1ib2wodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgICB9O1xuICAgICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgICAgcmV0dXJuICRzdHJpbmdpZnkuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfVxuICB9KTtcbn1cblxuLy8gYFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV1gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zeW1ib2wucHJvdG90eXBlLUBAdG9wcmltaXRpdmVcbmlmICghJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0pIHtcbiAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG59XG4vLyBgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXWAgcHJvcGVydHlcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3ltYm9sLnByb3RvdHlwZS1AQHRvc3RyaW5ndGFnXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCBTWU1CT0wpO1xuXG5oaWRkZW5LZXlzW0hJRERFTl0gPSB0cnVlO1xuIiwidmFyIGRlZmluZVdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtd2VsbC1rbm93bi1zeW1ib2wnKTtcblxuLy8gYFN5bWJvbC5hc3luY0l0ZXJhdG9yYCB3ZWxsLWtub3duIHN5bWJvbFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zeW1ib2wuYXN5bmNpdGVyYXRvclxuZGVmaW5lV2VsbEtub3duU3ltYm9sKCdhc3luY0l0ZXJhdG9yJyk7XG4iLCJ2YXIgZGVmaW5lV2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS13ZWxsLWtub3duLXN5bWJvbCcpO1xuXG4vLyBgU3ltYm9sLmhhc0luc3RhbmNlYCB3ZWxsLWtub3duIHN5bWJvbFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zeW1ib2wuaGFzaW5zdGFuY2VcbmRlZmluZVdlbGxLbm93blN5bWJvbCgnaGFzSW5zdGFuY2UnKTtcbiIsInZhciBkZWZpbmVXZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLXdlbGwta25vd24tc3ltYm9sJyk7XG5cbi8vIGBTeW1ib2wuaXNDb25jYXRTcHJlYWRhYmxlYCB3ZWxsLWtub3duIHN5bWJvbFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zeW1ib2wuaXNjb25jYXRzcHJlYWRhYmxlXG5kZWZpbmVXZWxsS25vd25TeW1ib2woJ2lzQ29uY2F0U3ByZWFkYWJsZScpO1xuIiwidmFyIGRlZmluZVdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtd2VsbC1rbm93bi1zeW1ib2wnKTtcblxuLy8gYFN5bWJvbC5pdGVyYXRvcmAgd2VsbC1rbm93biBzeW1ib2xcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3ltYm9sLml0ZXJhdG9yXG5kZWZpbmVXZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG4iLCJ2YXIgZGVmaW5lV2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS13ZWxsLWtub3duLXN5bWJvbCcpO1xuXG4vLyBgU3ltYm9sLm1hdGNoYCB3ZWxsLWtub3duIHN5bWJvbFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zeW1ib2wubWF0Y2hcbmRlZmluZVdlbGxLbm93blN5bWJvbCgnbWF0Y2gnKTtcbiIsInZhciBkZWZpbmVXZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLXdlbGwta25vd24tc3ltYm9sJyk7XG5cbi8vIGBTeW1ib2wubWF0Y2hBbGxgIHdlbGwta25vd24gc3ltYm9sXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN5bWJvbC5tYXRjaGFsbFxuZGVmaW5lV2VsbEtub3duU3ltYm9sKCdtYXRjaEFsbCcpO1xuIiwidmFyIGRlZmluZVdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtd2VsbC1rbm93bi1zeW1ib2wnKTtcblxuLy8gYFN5bWJvbC5yZXBsYWNlYCB3ZWxsLWtub3duIHN5bWJvbFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zeW1ib2wucmVwbGFjZVxuZGVmaW5lV2VsbEtub3duU3ltYm9sKCdyZXBsYWNlJyk7XG4iLCJ2YXIgZGVmaW5lV2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS13ZWxsLWtub3duLXN5bWJvbCcpO1xuXG4vLyBgU3ltYm9sLnNlYXJjaGAgd2VsbC1rbm93biBzeW1ib2xcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3ltYm9sLnNlYXJjaFxuZGVmaW5lV2VsbEtub3duU3ltYm9sKCdzZWFyY2gnKTtcbiIsInZhciBkZWZpbmVXZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLXdlbGwta25vd24tc3ltYm9sJyk7XG5cbi8vIGBTeW1ib2wuc3BlY2llc2Agd2VsbC1rbm93biBzeW1ib2xcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3ltYm9sLnNwZWNpZXNcbmRlZmluZVdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuIiwidmFyIGRlZmluZVdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtd2VsbC1rbm93bi1zeW1ib2wnKTtcblxuLy8gYFN5bWJvbC5zcGxpdGAgd2VsbC1rbm93biBzeW1ib2xcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3ltYm9sLnNwbGl0XG5kZWZpbmVXZWxsS25vd25TeW1ib2woJ3NwbGl0Jyk7XG4iLCJ2YXIgZGVmaW5lV2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS13ZWxsLWtub3duLXN5bWJvbCcpO1xuXG4vLyBgU3ltYm9sLnRvUHJpbWl0aXZlYCB3ZWxsLWtub3duIHN5bWJvbFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zeW1ib2wudG9wcmltaXRpdmVcbmRlZmluZVdlbGxLbm93blN5bWJvbCgndG9QcmltaXRpdmUnKTtcbiIsInZhciBkZWZpbmVXZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLXdlbGwta25vd24tc3ltYm9sJyk7XG5cbi8vIGBTeW1ib2wudG9TdHJpbmdUYWdgIHdlbGwta25vd24gc3ltYm9sXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN5bWJvbC50b3N0cmluZ3RhZ1xuZGVmaW5lV2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xuIiwidmFyIGRlZmluZVdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtd2VsbC1rbm93bi1zeW1ib2wnKTtcblxuLy8gYFN5bWJvbC51bnNjb3BhYmxlc2Agd2VsbC1rbm93biBzeW1ib2xcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3ltYm9sLnVuc2NvcGFibGVzXG5kZWZpbmVXZWxsS25vd25TeW1ib2woJ3Vuc2NvcGFibGVzJyk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnJyk7XG5cbi8vIEpTT05bQEB0b1N0cmluZ1RhZ10gcHJvcGVydHlcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtanNvbi1AQHRvc3RyaW5ndGFnXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMuYXJyYXkuY29uY2F0Jyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lcy5zeW1ib2wuZGVzY3JpcHRpb24nKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMuc3ltYm9sLmhhcy1pbnN0YW5jZScpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lcy5zeW1ib2wuaXMtY29uY2F0LXNwcmVhZGFibGUnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMuc3ltYm9sLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLnN5bWJvbC5tYXRjaCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lcy5zeW1ib2wubWF0Y2gtYWxsJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLnN5bWJvbC5yZXBsYWNlJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLnN5bWJvbC5zZWFyY2gnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMuc3ltYm9sLnNwZWNpZXMnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMuc3ltYm9sLnNwbGl0Jyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLnN5bWJvbC50by1wcmltaXRpdmUnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMuc3ltYm9sLnRvLXN0cmluZy10YWcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMuc3ltYm9sLnVuc2NvcGFibGVzJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLmpzb24udG8tc3RyaW5nLXRhZycpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lcy5tYXRoLnRvLXN0cmluZy10YWcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMucmVmbGVjdC50by1zdHJpbmctdGFnJyk7XG52YXIgcGF0aCA9IHJlcXVpcmUoJy4uLy4uL2ludGVybmFscy9wYXRoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcGF0aC5TeW1ib2w7XG4iLCJ2YXIgcGFyZW50ID0gcmVxdWlyZSgnLi4vLi4vZXMvc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuaXRlcmF0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJlbnQ7XG4iLCJ2YXIgZGVmaW5lV2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS13ZWxsLWtub3duLXN5bWJvbCcpO1xuXG4vLyBgU3ltYm9sLmFzeW5jRGlzcG9zZWAgd2VsbC1rbm93biBzeW1ib2xcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXVzaW5nLXN0YXRlbWVudFxuZGVmaW5lV2VsbEtub3duU3ltYm9sKCdhc3luY0Rpc3Bvc2UnKTtcbiIsInZhciBkZWZpbmVXZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLXdlbGwta25vd24tc3ltYm9sJyk7XG5cbi8vIGBTeW1ib2wuZGlzcG9zZWAgd2VsbC1rbm93biBzeW1ib2xcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXVzaW5nLXN0YXRlbWVudFxuZGVmaW5lV2VsbEtub3duU3ltYm9sKCdkaXNwb3NlJyk7XG4iLCJ2YXIgZGVmaW5lV2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS13ZWxsLWtub3duLXN5bWJvbCcpO1xuXG4vLyBgU3ltYm9sLm1hdGNoZXJgIHdlbGwta25vd24gc3ltYm9sXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wYXR0ZXJuLW1hdGNoaW5nXG5kZWZpbmVXZWxsS25vd25TeW1ib2woJ21hdGNoZXInKTtcbiIsInZhciBkZWZpbmVXZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLXdlbGwta25vd24tc3ltYm9sJyk7XG5cbi8vIGBTeW1ib2wubWV0YWRhdGFgIHdlbGwta25vd24gc3ltYm9sXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1kZWNvcmF0b3JzXG5kZWZpbmVXZWxsS25vd25TeW1ib2woJ21ldGFkYXRhJyk7XG4iLCJ2YXIgZGVmaW5lV2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS13ZWxsLWtub3duLXN5bWJvbCcpO1xuXG4vLyBgU3ltYm9sLm9ic2VydmFibGVgIHdlbGwta25vd24gc3ltYm9sXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1vYnNlcnZhYmxlXG5kZWZpbmVXZWxsS25vd25TeW1ib2woJ29ic2VydmFibGUnKTtcbiIsIi8vIFRPRE86IHJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG52YXIgZGVmaW5lV2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS13ZWxsLWtub3duLXN5bWJvbCcpO1xuXG4vLyBgU3ltYm9sLnBhdHRlcm5NYXRjaGAgd2VsbC1rbm93biBzeW1ib2xcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXBhdHRlcm4tbWF0Y2hpbmdcbmRlZmluZVdlbGxLbm93blN5bWJvbCgncGF0dGVybk1hdGNoJyk7XG4iLCIvLyBUT0RPOiByZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxudmFyIGRlZmluZVdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtd2VsbC1rbm93bi1zeW1ib2wnKTtcblxuZGVmaW5lV2VsbEtub3duU3ltYm9sKCdyZXBsYWNlQWxsJyk7XG4iLCJ2YXIgcGFyZW50ID0gcmVxdWlyZSgnLi4vLi4vc3RhYmxlL3N5bWJvbCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lc25leHQuc3ltYm9sLmFzeW5jLWRpc3Bvc2UnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXNuZXh0LnN5bWJvbC5kaXNwb3NlJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzbmV4dC5zeW1ib2wubWF0Y2hlcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lc25leHQuc3ltYm9sLm1ldGFkYXRhJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzbmV4dC5zeW1ib2wub2JzZXJ2YWJsZScpO1xuLy8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGBcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXNuZXh0LnN5bWJvbC5wYXR0ZXJuLW1hdGNoJyk7XG4vLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lc25leHQuc3ltYm9sLnJlcGxhY2UtYWxsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyZW50O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy1wdXJlL2ZlYXR1cmVzL3N5bWJvbFwiKTsiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzLmFycmF5Lml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLnN0cmluZy5pdGVyYXRvcicpO1xudmFyIGdldEl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1tZXRob2QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRJdGVyYXRvck1ldGhvZDtcbiIsInZhciBwYXJlbnQgPSByZXF1aXJlKCcuLi9lcy9nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuaXRlcmF0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJlbnQ7XG4iLCJ2YXIgcGFyZW50ID0gcmVxdWlyZSgnLi4vc3RhYmxlL2dldC1pdGVyYXRvci1tZXRob2QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJlbnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzLXB1cmUvZmVhdHVyZXMvZ2V0LWl0ZXJhdG9yLW1ldGhvZFwiKTsiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgaXRlcmF0b3JDbG9zZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1jbG9zZScpO1xuXG4vLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBFTlRSSUVTKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEVOVFJJRVMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCAndGhyb3cnLCBlcnJvcik7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NhbGwtd2l0aC1zYWZlLWl0ZXJhdGlvbi1jbG9zaW5nJyk7XG52YXIgaXNBcnJheUl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGdldEl0ZXJhdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvcicpO1xudmFyIGdldEl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1tZXRob2QnKTtcblxuLy8gYEFycmF5LmZyb21gIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5mcm9tXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlIC8qICwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQgKi8pIHtcbiAgdmFyIE8gPSB0b09iamVjdChhcnJheUxpa2UpO1xuICB2YXIgQyA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXk7XG4gIHZhciBhcmd1bWVudHNMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgbWFwZm4gPSBhcmd1bWVudHNMZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICB2YXIgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWQ7XG4gIHZhciBpdGVyYXRvck1ldGhvZCA9IGdldEl0ZXJhdG9yTWV0aG9kKE8pO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yLCBuZXh0LCB2YWx1ZTtcbiAgaWYgKG1hcHBpbmcpIG1hcGZuID0gYmluZChtYXBmbiwgYXJndW1lbnRzTGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCwgMik7XG4gIC8vIGlmIHRoZSB0YXJnZXQgaXMgbm90IGl0ZXJhYmxlIG9yIGl0J3MgYW4gYXJyYXkgd2l0aCB0aGUgZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBhIHNpbXBsZSBjYXNlXG4gIGlmIChpdGVyYXRvck1ldGhvZCAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyYXRvck1ldGhvZChpdGVyYXRvck1ldGhvZCkpKSB7XG4gICAgaXRlcmF0b3IgPSBnZXRJdGVyYXRvcihPLCBpdGVyYXRvck1ldGhvZCk7XG4gICAgbmV4dCA9IGl0ZXJhdG9yLm5leHQ7XG4gICAgcmVzdWx0ID0gbmV3IEMoKTtcbiAgICBmb3IgKDshKHN0ZXAgPSBuZXh0LmNhbGwoaXRlcmF0b3IpKS5kb25lOyBpbmRleCsrKSB7XG4gICAgICB2YWx1ZSA9IG1hcHBpbmcgPyBjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlO1xuICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgdmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgcmVzdWx0ID0gbmV3IEMobGVuZ3RoKTtcbiAgICBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgdmFsdWUgPSBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdO1xuICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgdmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZnJvbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mcm9tJyk7XG52YXIgY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NoZWNrLWNvcnJlY3RuZXNzLW9mLWl0ZXJhdGlvbicpO1xuXG52YXIgSU5DT1JSRUNUX0lURVJBVElPTiA9ICFjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24oZnVuY3Rpb24gKGl0ZXJhYmxlKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1mcm9tIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIEFycmF5LmZyb20oaXRlcmFibGUpO1xufSk7XG5cbi8vIGBBcnJheS5mcm9tYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkuZnJvbVxuJCh7IHRhcmdldDogJ0FycmF5Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBJTkNPUlJFQ1RfSVRFUkFUSU9OIH0sIHtcbiAgZnJvbTogZnJvbVxufSk7XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lcy5hcnJheS5mcm9tJyk7XG52YXIgcGF0aCA9IHJlcXVpcmUoJy4uLy4uL2ludGVybmFscy9wYXRoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcGF0aC5BcnJheS5mcm9tO1xuIiwidmFyIHBhcmVudCA9IHJlcXVpcmUoJy4uLy4uL2VzL2FycmF5L2Zyb20nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJlbnQ7XG4iLCJ2YXIgcGFyZW50ID0gcmVxdWlyZSgnLi4vLi4vc3RhYmxlL2FycmF5L2Zyb20nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJlbnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzLXB1cmUvZmVhdHVyZXMvYXJyYXkvZnJvbVwiKTsiLCJpbXBvcnQgX1N5bWJvbCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzL3N5bWJvbFwiO1xuaW1wb3J0IF9nZXRJdGVyYXRvck1ldGhvZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzL2dldC1pdGVyYXRvci1tZXRob2RcIjtcbmltcG9ydCBfQXJyYXkkZnJvbSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzL2FycmF5L2Zyb21cIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIF9TeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgX2dldEl0ZXJhdG9yTWV0aG9kKGl0ZXIpICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIF9BcnJheSRmcm9tKGl0ZXIpO1xufSIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXgnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnc2xpY2UnKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcbnZhciBuYXRpdmVTbGljZSA9IFtdLnNsaWNlO1xudmFyIG1heCA9IE1hdGgubWF4O1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnNsaWNlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnNsaWNlXG4vLyBmYWxsYmFjayBmb3Igbm90IGFycmF5LWxpa2UgRVMzIHN0cmluZ3MgYW5kIERPTSBvYmplY3RzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIHNsaWNlOiBmdW5jdGlvbiBzbGljZShzdGFydCwgZW5kKSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QodGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgayA9IHRvQWJzb2x1dGVJbmRleChzdGFydCwgbGVuZ3RoKTtcbiAgICB2YXIgZmluID0gdG9BYnNvbHV0ZUluZGV4KGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuZ3RoIDogZW5kLCBsZW5ndGgpO1xuICAgIC8vIGlubGluZSBgQXJyYXlTcGVjaWVzQ3JlYXRlYCBmb3IgdXNhZ2UgbmF0aXZlIGBBcnJheSNzbGljZWAgd2hlcmUgaXQncyBwb3NzaWJsZVxuICAgIHZhciBDb25zdHJ1Y3RvciwgcmVzdWx0LCBuO1xuICAgIGlmIChpc0FycmF5KE8pKSB7XG4gICAgICBDb25zdHJ1Y3RvciA9IE8uY29uc3RydWN0b3I7XG4gICAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgICAgaWYgKHR5cGVvZiBDb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIChDb25zdHJ1Y3RvciA9PT0gQXJyYXkgfHwgaXNBcnJheShDb25zdHJ1Y3Rvci5wcm90b3R5cGUpKSkge1xuICAgICAgICBDb25zdHJ1Y3RvciA9IHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QoQ29uc3RydWN0b3IpKSB7XG4gICAgICAgIENvbnN0cnVjdG9yID0gQ29uc3RydWN0b3JbU1BFQ0lFU107XG4gICAgICAgIGlmIChDb25zdHJ1Y3RvciA9PT0gbnVsbCkgQ29uc3RydWN0b3IgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBpZiAoQ29uc3RydWN0b3IgPT09IEFycmF5IHx8IENvbnN0cnVjdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIG5hdGl2ZVNsaWNlLmNhbGwoTywgaywgZmluKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0ID0gbmV3IChDb25zdHJ1Y3RvciA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDb25zdHJ1Y3RvcikobWF4KGZpbiAtIGssIDApKTtcbiAgICBmb3IgKG4gPSAwOyBrIDwgZmluOyBrKyssIG4rKykgaWYgKGsgaW4gTykgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBuLCBPW2tdKTtcbiAgICByZXN1bHQubGVuZ3RoID0gbjtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiIsInZhciBwYXRoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3BhdGgnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ09OU1RSVUNUT1IpIHtcbiAgcmV0dXJuIHBhdGhbQ09OU1RSVUNUT1IgKyAnUHJvdG90eXBlJ107XG59O1xuIiwicmVxdWlyZSgnLi4vLi4vLi4vbW9kdWxlcy9lcy5hcnJheS5zbGljZScpO1xudmFyIGVudHJ5VmlydHVhbCA9IHJlcXVpcmUoJy4uLy4uLy4uL2ludGVybmFscy9lbnRyeS12aXJ0dWFsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZW50cnlWaXJ0dWFsKCdBcnJheScpLnNsaWNlO1xuIiwidmFyIHNsaWNlID0gcmVxdWlyZSgnLi4vYXJyYXkvdmlydHVhbC9zbGljZScpO1xuXG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBvd24gPSBpdC5zbGljZTtcbiAgcmV0dXJuIGl0ID09PSBBcnJheVByb3RvdHlwZSB8fCAoaXQgaW5zdGFuY2VvZiBBcnJheSAmJiBvd24gPT09IEFycmF5UHJvdG90eXBlLnNsaWNlKSA/IHNsaWNlIDogb3duO1xufTtcbiIsInZhciBwYXJlbnQgPSByZXF1aXJlKCcuLi8uLi9lcy9pbnN0YW5jZS9zbGljZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcmVudDtcbiIsInZhciBwYXJlbnQgPSByZXF1aXJlKCcuLi8uLi9zdGFibGUvaW5zdGFuY2Uvc2xpY2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJlbnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzLXB1cmUvZmVhdHVyZXMvaW5zdGFuY2Uvc2xpY2VcIik7IiwiaW1wb3J0IF9zbGljZUluc3RhbmNlUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy9pbnN0YW5jZS9zbGljZVwiO1xuaW1wb3J0IF9BcnJheSRmcm9tIGZyb20gXCJAYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMvYXJyYXkvZnJvbVwiO1xuaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICB2YXIgX2NvbnRleHQ7XG5cbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcblxuICB2YXIgbiA9IF9zbGljZUluc3RhbmNlUHJvcGVydHkoX2NvbnRleHQgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykpLmNhbGwoX2NvbnRleHQsIDgsIC0xKTtcblxuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gX0FycmF5JGZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiaW1wb3J0IGFycmF5V2l0aG91dEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgbm9uSXRlcmFibGVTcHJlYWQgZnJvbSBcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufSIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIG5hdGl2ZUtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG52YXIgRkFJTFNfT05fUFJJTUlUSVZFUyA9IGZhaWxzKGZ1bmN0aW9uICgpIHsgbmF0aXZlS2V5cygxKTsgfSk7XG5cbi8vIGBPYmplY3Qua2V5c2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5rZXlzXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBGQUlMU19PTl9QUklNSVRJVkVTIH0sIHtcbiAga2V5czogZnVuY3Rpb24ga2V5cyhpdCkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH1cbn0pO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lcy5vYmplY3Qua2V5cycpO1xudmFyIHBhdGggPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbHMvcGF0aCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGguT2JqZWN0LmtleXM7XG4iLCJ2YXIgcGFyZW50ID0gcmVxdWlyZSgnLi4vLi4vZXMvb2JqZWN0L2tleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJlbnQ7XG4iLCJ2YXIgcGFyZW50ID0gcmVxdWlyZSgnLi4vLi4vc3RhYmxlL29iamVjdC9rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyZW50O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy1wdXJlL2ZlYXR1cmVzL29iamVjdC9rZXlzXCIpOyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMuc3ltYm9sJyk7XG52YXIgcGF0aCA9IHJlcXVpcmUoJy4uLy4uL2ludGVybmFscy9wYXRoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcGF0aC5PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwidmFyIHBhcmVudCA9IHJlcXVpcmUoJy4uLy4uL2VzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJlbnQ7XG4iLCJ2YXIgcGFyZW50ID0gcmVxdWlyZSgnLi4vLi4vc3RhYmxlL29iamVjdC9nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJlbnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzLXB1cmUvZmVhdHVyZXMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktc3ltYm9sc1wiKTsiLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkZmlsdGVyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbHRlcjtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnZmlsdGVyJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmlsdGVyYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbHRlclxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIH0sIHtcbiAgZmlsdGVyOiBmdW5jdGlvbiBmaWx0ZXIoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJGZpbHRlcih0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwicmVxdWlyZSgnLi4vLi4vLi4vbW9kdWxlcy9lcy5hcnJheS5maWx0ZXInKTtcbnZhciBlbnRyeVZpcnR1YWwgPSByZXF1aXJlKCcuLi8uLi8uLi9pbnRlcm5hbHMvZW50cnktdmlydHVhbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVudHJ5VmlydHVhbCgnQXJyYXknKS5maWx0ZXI7XG4iLCJ2YXIgZmlsdGVyID0gcmVxdWlyZSgnLi4vYXJyYXkvdmlydHVhbC9maWx0ZXInKTtcblxudmFyIEFycmF5UHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgb3duID0gaXQuZmlsdGVyO1xuICByZXR1cm4gaXQgPT09IEFycmF5UHJvdG90eXBlIHx8IChpdCBpbnN0YW5jZW9mIEFycmF5ICYmIG93biA9PT0gQXJyYXlQcm90b3R5cGUuZmlsdGVyKSA/IGZpbHRlciA6IG93bjtcbn07XG4iLCJ2YXIgcGFyZW50ID0gcmVxdWlyZSgnLi4vLi4vZXMvaW5zdGFuY2UvZmlsdGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyZW50O1xuIiwidmFyIHBhcmVudCA9IHJlcXVpcmUoJy4uLy4uL3N0YWJsZS9pbnN0YW5jZS9maWx0ZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJlbnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzLXB1cmUvZmVhdHVyZXMvaW5zdGFuY2UvZmlsdGVyXCIpOyIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG5cbnZhciBGQUlMU19PTl9QUklNSVRJVkVTID0gZmFpbHMoZnVuY3Rpb24gKCkgeyBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoMSk7IH0pO1xudmFyIEZPUkNFRCA9ICFERVNDUklQVE9SUyB8fCBGQUlMU19PTl9QUklNSVRJVkVTO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCwgc2hhbTogIURFU0NSSVBUT1JTIH0sIHtcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICAgIHJldHVybiBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodG9JbmRleGVkT2JqZWN0KGl0KSwga2V5KTtcbiAgfVxufSk7XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBwYXRoID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWxzL3BhdGgnKTtcblxudmFyIE9iamVjdCA9IHBhdGguT2JqZWN0O1xuXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KTtcbn07XG5cbmlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLnNoYW0pIGdldE93blByb3BlcnR5RGVzY3JpcHRvci5zaGFtID0gdHJ1ZTtcbiIsInZhciBwYXJlbnQgPSByZXF1aXJlKCcuLi8uLi9lcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyZW50O1xuIiwidmFyIHBhcmVudCA9IHJlcXVpcmUoJy4uLy4uL3N0YWJsZS9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyZW50O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy1wdXJlL2ZlYXR1cmVzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIik7IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FLCBhcmd1bWVudCkge1xuICB2YXIgbWV0aG9kID0gW11bTUVUSE9EX05BTUVdO1xuICByZXR1cm4gISFtZXRob2QgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWNhbGwsbm8tdGhyb3ctbGl0ZXJhbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICAgIG1ldGhvZC5jYWxsKG51bGwsIGFyZ3VtZW50IHx8IGZ1bmN0aW9uICgpIHsgdGhyb3cgMTsgfSwgMSk7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5mb3JFYWNoO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xuXG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2ZvckVhY2gnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbm1vZHVsZS5leHBvcnRzID0gIVNUUklDVF9NRVRIT0QgPyBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gIHJldHVybiAkZm9yRWFjaCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWZvcmVhY2ggLS0gc2FmZVxufSA6IFtdLmZvckVhY2g7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWZvcmVhY2ggLS0gc2FmZVxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogW10uZm9yRWFjaCAhPSBmb3JFYWNoIH0sIHtcbiAgZm9yRWFjaDogZm9yRWFjaFxufSk7XG4iLCJyZXF1aXJlKCcuLi8uLi8uLi9tb2R1bGVzL2VzLmFycmF5LmZvci1lYWNoJyk7XG52YXIgZW50cnlWaXJ0dWFsID0gcmVxdWlyZSgnLi4vLi4vLi4vaW50ZXJuYWxzL2VudHJ5LXZpcnR1YWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbnRyeVZpcnR1YWwoJ0FycmF5JykuZm9yRWFjaDtcbiIsInZhciBwYXJlbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lcy9hcnJheS92aXJ0dWFsL2Zvci1lYWNoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyZW50O1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLml0ZXJhdG9yJyk7XG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2FycmF5L3ZpcnR1YWwvZm9yLWVhY2gnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWxzL2NsYXNzb2YnKTtcbnZhciBBcnJheVByb3RvdHlwZSA9IEFycmF5LnByb3RvdHlwZTtcblxudmFyIERPTUl0ZXJhYmxlcyA9IHtcbiAgRE9NVG9rZW5MaXN0OiB0cnVlLFxuICBOb2RlTGlzdDogdHJ1ZVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIG93biA9IGl0LmZvckVhY2g7XG4gIHJldHVybiBpdCA9PT0gQXJyYXlQcm90b3R5cGUgfHwgKGl0IGluc3RhbmNlb2YgQXJyYXkgJiYgb3duID09PSBBcnJheVByb3RvdHlwZS5mb3JFYWNoKVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICAgIHx8IERPTUl0ZXJhYmxlcy5oYXNPd25Qcm9wZXJ0eShjbGFzc29mKGl0KSkgPyBmb3JFYWNoIDogb3duO1xufTtcbiIsInZhciBwYXJlbnQgPSByZXF1aXJlKCcuLi8uLi9zdGFibGUvaW5zdGFuY2UvZm9yLWVhY2gnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJlbnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzLXB1cmUvZmVhdHVyZXMvaW5zdGFuY2UvZm9yLWVhY2hcIik7IiwidmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbi8vIGFsbCBvYmplY3Qga2V5cywgaW5jbHVkZXMgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbHNcbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignUmVmbGVjdCcsICdvd25LZXlzJykgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCkge1xuICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZihhbk9iamVjdChpdCkpO1xuICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmY7XG4gIHJldHVybiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpKSA6IGtleXM7XG59O1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBvd25LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL293bi1rZXlzJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvcnNcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBzaGFtOiAhREVTQ1JJUFRPUlMgfSwge1xuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9iamVjdCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KG9iamVjdCk7XG4gICAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xuICAgIHZhciBrZXlzID0gb3duS2V5cyhPKTtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIga2V5LCBkZXNjcmlwdG9yO1xuICAgIHdoaWxlIChrZXlzLmxlbmd0aCA+IGluZGV4KSB7XG4gICAgICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIGtleSA9IGtleXNbaW5kZXgrK10pO1xuICAgICAgaWYgKGRlc2NyaXB0b3IgIT09IHVuZGVmaW5lZCkgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcnMnKTtcbnZhciBwYXRoID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWxzL3BhdGgnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYXRoLk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzO1xuIiwidmFyIHBhcmVudCA9IHJlcXVpcmUoJy4uLy4uL2VzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyZW50O1xuIiwidmFyIHBhcmVudCA9IHJlcXVpcmUoJy4uLy4uL3N0YWJsZS9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9ycycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcmVudDtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMtcHVyZS9mZWF0dXJlcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yc1wiKTsiLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzJyk7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydGllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0aWVzXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiAhREVTQ1JJUFRPUlMsIHNoYW06ICFERVNDUklQVE9SUyB9LCB7XG4gIGRlZmluZVByb3BlcnRpZXM6IGRlZmluZVByb3BlcnRpZXNcbn0pO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lcy5vYmplY3QuZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBwYXRoID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWxzL3BhdGgnKTtcblxudmFyIE9iamVjdCA9IHBhdGguT2JqZWN0O1xuXG52YXIgZGVmaW5lUHJvcGVydGllcyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhULCBEKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhULCBEKTtcbn07XG5cbmlmIChPYmplY3QuZGVmaW5lUHJvcGVydGllcy5zaGFtKSBkZWZpbmVQcm9wZXJ0aWVzLnNoYW0gPSB0cnVlO1xuIiwidmFyIHBhcmVudCA9IHJlcXVpcmUoJy4uLy4uL2VzL29iamVjdC9kZWZpbmUtcHJvcGVydGllcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcmVudDtcbiIsInZhciBwYXJlbnQgPSByZXF1aXJlKCcuLi8uLi9zdGFibGUvb2JqZWN0L2RlZmluZS1wcm9wZXJ0aWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyZW50O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy1wdXJlL2ZlYXR1cmVzL29iamVjdC9kZWZpbmUtcHJvcGVydGllc1wiKTsiLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIG9iamVjdERlZmluZVByb3BlcnR5TW9kaWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogIURFU0NSSVBUT1JTLCBzaGFtOiAhREVTQ1JJUFRPUlMgfSwge1xuICBkZWZpbmVQcm9wZXJ0eTogb2JqZWN0RGVmaW5lUHJvcGVydHlNb2RpbGUuZlxufSk7XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnZhciBwYXRoID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWxzL3BhdGgnKTtcblxudmFyIE9iamVjdCA9IHBhdGguT2JqZWN0O1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07XG5cbmlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkuc2hhbSkgZGVmaW5lUHJvcGVydHkuc2hhbSA9IHRydWU7XG4iLCJ2YXIgcGFyZW50ID0gcmVxdWlyZSgnLi4vLi4vZXMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcmVudDtcbiIsInZhciBwYXJlbnQgPSByZXF1aXJlKCcuLi8uLi9zdGFibGUvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcmVudDtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMtcHVyZS9mZWF0dXJlcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpOyIsImltcG9ydCBfT2JqZWN0JGRlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIF9PYmplY3QkZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImltcG9ydCBfT2JqZWN0JGtleXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy9vYmplY3Qva2V5c1wiO1xuaW1wb3J0IF9PYmplY3QkZ2V0T3duUHJvcGVydHlTeW1ib2xzIGZyb20gXCJAYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktc3ltYm9sc1wiO1xuaW1wb3J0IF9maWx0ZXJJbnN0YW5jZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMvaW5zdGFuY2UvZmlsdGVyXCI7XG5pbXBvcnQgX09iamVjdCRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgZnJvbSBcIkBiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCI7XG5pbXBvcnQgX2ZvckVhY2hJbnN0YW5jZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMvaW5zdGFuY2UvZm9yLWVhY2hcIjtcbmltcG9ydCBfT2JqZWN0JGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgZnJvbSBcIkBiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yc1wiO1xuaW1wb3J0IF9PYmplY3QkZGVmaW5lUHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydGllc1wiO1xuaW1wb3J0IF9PYmplY3QkZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCI7XG5pbXBvcnQgZGVmaW5lUHJvcGVydHkgZnJvbSBcIi4vZGVmaW5lUHJvcGVydHkuanNcIjtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gX09iamVjdCRrZXlzKG9iamVjdCk7XG5cbiAgaWYgKF9PYmplY3QkZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBfT2JqZWN0JGdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuXG4gICAgaWYgKGVudW1lcmFibGVPbmx5KSB7XG4gICAgICBzeW1ib2xzID0gX2ZpbHRlckluc3RhbmNlUHJvcGVydHkoc3ltYm9scykuY2FsbChzeW1ib2xzLCBmdW5jdGlvbiAoc3ltKSB7XG4gICAgICAgIHJldHVybiBfT2JqZWN0JGdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTtcbiAgfVxuXG4gIHJldHVybiBrZXlzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcblxuICAgIGlmIChpICUgMikge1xuICAgICAgdmFyIF9jb250ZXh0O1xuXG4gICAgICBfZm9yRWFjaEluc3RhbmNlUHJvcGVydHkoX2NvbnRleHQgPSBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKSkuY2FsbChfY29udGV4dCwgZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChfT2JqZWN0JGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHtcbiAgICAgIF9PYmplY3QkZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIF9PYmplY3QkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9jb250ZXh0MjtcblxuICAgICAgX2ZvckVhY2hJbnN0YW5jZVByb3BlcnR5KF9jb250ZXh0MiA9IG93bktleXMoT2JqZWN0KHNvdXJjZSkpKS5jYWxsKF9jb250ZXh0MiwgZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfT2JqZWN0JGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBfT2JqZWN0JGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImltcG9ydCBfT2JqZWN0JGRlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcblxuICAgIF9PYmplY3QkZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgZGVmaW5lKEl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBkZWZpbmUoR3AsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICBkZWZpbmUoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb24pO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIGRlZmluZShBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSwgYXN5bmNJdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBkZWZpbmUoR3AsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgZGVmaW5lKEdwLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9KTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCBpbiBtb2Rlcm4gZW5naW5lc1xuICAvLyB3ZSBjYW4gZXhwbGljaXRseSBhY2Nlc3MgZ2xvYmFsVGhpcy4gSW4gb2xkZXIgZW5naW5lcyB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09IFwib2JqZWN0XCIpIHtcbiAgICBnbG9iYWxUaGlzLnJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG4gIH0gZWxzZSB7XG4gICAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRtYXAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykubWFwO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdtYXAnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5tYXBgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUubWFwXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfSwge1xuICBtYXA6IGZ1bmN0aW9uIG1hcChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkbWFwKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCJyZXF1aXJlKCcuLi8uLi8uLi9tb2R1bGVzL2VzLmFycmF5Lm1hcCcpO1xudmFyIGVudHJ5VmlydHVhbCA9IHJlcXVpcmUoJy4uLy4uLy4uL2ludGVybmFscy9lbnRyeS12aXJ0dWFsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZW50cnlWaXJ0dWFsKCdBcnJheScpLm1hcDtcbiIsInZhciBtYXAgPSByZXF1aXJlKCcuLi9hcnJheS92aXJ0dWFsL21hcCcpO1xuXG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBvd24gPSBpdC5tYXA7XG4gIHJldHVybiBpdCA9PT0gQXJyYXlQcm90b3R5cGUgfHwgKGl0IGluc3RhbmNlb2YgQXJyYXkgJiYgb3duID09PSBBcnJheVByb3RvdHlwZS5tYXApID8gbWFwIDogb3duO1xufTtcbiIsInZhciBwYXJlbnQgPSByZXF1aXJlKCcuLi8uLi9lcy9pbnN0YW5jZS9tYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJlbnQ7XG4iLCJ2YXIgcGFyZW50ID0gcmVxdWlyZSgnLi4vLi4vc3RhYmxlL2luc3RhbmNlL21hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcmVudDtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMtcHVyZS9mZWF0dXJlcy9pbnN0YW5jZS9tYXBcIik7IiwiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWluZGV4b2YgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIG5hdGl2ZUluZGV4T2YgPSBbXS5pbmRleE9mO1xuXG52YXIgTkVHQVRJVkVfWkVSTyA9ICEhbmF0aXZlSW5kZXhPZiAmJiAxIC8gWzFdLmluZGV4T2YoMSwgLTApIDwgMDtcbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnaW5kZXhPZicpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogTkVHQVRJVkVfWkVSTyB8fCAhU1RSSUNUX01FVEhPRCB9LCB7XG4gIGluZGV4T2Y6IGZ1bmN0aW9uIGluZGV4T2Yoc2VhcmNoRWxlbWVudCAvKiAsIGZyb21JbmRleCA9IDAgKi8pIHtcbiAgICByZXR1cm4gTkVHQVRJVkVfWkVST1xuICAgICAgLy8gY29udmVydCAtMCB0byArMFxuICAgICAgPyBuYXRpdmVJbmRleE9mLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgMFxuICAgICAgOiAkaW5kZXhPZih0aGlzLCBzZWFyY2hFbGVtZW50LCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwicmVxdWlyZSgnLi4vLi4vLi4vbW9kdWxlcy9lcy5hcnJheS5pbmRleC1vZicpO1xudmFyIGVudHJ5VmlydHVhbCA9IHJlcXVpcmUoJy4uLy4uLy4uL2ludGVybmFscy9lbnRyeS12aXJ0dWFsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZW50cnlWaXJ0dWFsKCdBcnJheScpLmluZGV4T2Y7XG4iLCJ2YXIgaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2FycmF5L3ZpcnR1YWwvaW5kZXgtb2YnKTtcblxudmFyIEFycmF5UHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgb3duID0gaXQuaW5kZXhPZjtcbiAgcmV0dXJuIGl0ID09PSBBcnJheVByb3RvdHlwZSB8fCAoaXQgaW5zdGFuY2VvZiBBcnJheSAmJiBvd24gPT09IEFycmF5UHJvdG90eXBlLmluZGV4T2YpID8gaW5kZXhPZiA6IG93bjtcbn07XG4iLCJ2YXIgcGFyZW50ID0gcmVxdWlyZSgnLi4vLi4vZXMvaW5zdGFuY2UvaW5kZXgtb2YnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJlbnQ7XG4iLCJ2YXIgcGFyZW50ID0gcmVxdWlyZSgnLi4vLi4vc3RhYmxlL2luc3RhbmNlL2luZGV4LW9mJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyZW50O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy1wdXJlL2ZlYXR1cmVzL2luc3RhbmNlL2luZGV4LW9mXCIpOyIsImltcG9ydCB7XG4gIEFjdGlvblJlcXVlc3QsXG4gIEFjdGlvblJlc3BvbnNlLFxuICBDaGF0T3B0aW9uLFxuICBNZXNzYWdlLFxuICBNZXNzYWdlQ29udGVudCxcbiAgT25BY3Rpb25DaGFuZ2VkLFxuICBPbkFjdGlvblJlc3BvbnNlZCxcbiAgT25NZXNzYWdlc0NoYW5nZWQsXG59IGZyb20gJy4vY2hhdC10eXBlcyc7XG5cbmludGVyZmFjZSBDaGF0U3RhdGUge1xuICBvcHRpb246IENoYXRPcHRpb247XG4gIG1lc3NhZ2VzOiBNZXNzYWdlPE1lc3NhZ2VDb250ZW50PltdO1xuICBhY3Rpb246IEFjdGlvbjtcbiAgYWN0aW9uSGlzdG9yeTogQWN0aW9uW107XG4gIG9uTWVzc2FnZXNDaGFuZ2VkOiBPbk1lc3NhZ2VzQ2hhbmdlZFtdO1xuICBvbkFjdGlvbkNoYW5nZWQ6IE9uQWN0aW9uQ2hhbmdlZFtdO1xufVxuXG5pbnRlcmZhY2UgQWN0aW9uIHtcbiAgcmVxdWVzdDogQWN0aW9uUmVxdWVzdDtcbiAgcmVzcG9uc2VzOiBBY3Rpb25SZXNwb25zZVtdO1xuICBvblJlc25wb25zZWQ6IE9uQWN0aW9uUmVzcG9uc2VkW107XG59XG5cbmV4cG9ydCBjbGFzcyBDaGF0Q29udHJvbGxlciB7XG4gIHByaXZhdGUgc3RhdGU6IENoYXRTdGF0ZTtcblxuICBwcml2YXRlIGRlZmF1bHRPcHRpb246IENoYXRPcHRpb24gPSB7XG4gICAgZGVsYXk6IDMwMCxcbiAgfTtcblxuICBwcml2YXRlIGVtcHR5QWN0aW9uOiBBY3Rpb24gPSB7XG4gICAgcmVxdWVzdDogeyB0eXBlOiAnZW1wdHknIH0sXG4gICAgcmVzcG9uc2VzOiBbXSxcbiAgICBvblJlc25wb25zZWQ6IFtdLFxuICB9O1xuXG4gIHByaXZhdGUgZGVmYXVsdEFjdGlvblJlcXVlc3QgPSB7XG4gICAgYWx3YXlzOiBmYWxzZSxcbiAgICBhZGRNZXNzYWdlOiB0cnVlLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbj86IENoYXRPcHRpb24pIHtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3B0aW9uOiB7IC4uLnRoaXMuZGVmYXVsdE9wdGlvbiwgLi4ub3B0aW9uIH0sXG4gICAgICBtZXNzYWdlczogW10sXG4gICAgICBhY3Rpb246IHRoaXMuZW1wdHlBY3Rpb24sXG4gICAgICBhY3Rpb25IaXN0b3J5OiBbXSxcbiAgICAgIG9uTWVzc2FnZXNDaGFuZ2VkOiBbXSxcbiAgICAgIG9uQWN0aW9uQ2hhbmdlZDogW10sXG4gICAgfTtcbiAgfVxuXG4gIGFkZE1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZTxNZXNzYWdlQ29udGVudD4pOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxlbiA9IHRoaXMuc3RhdGUubWVzc2FnZXMucHVzaChtZXNzYWdlKTtcbiAgICAgICAgY29uc3QgaWR4ID0gbGVuIC0gMTtcbiAgICAgICAgdGhpcy5zdGF0ZS5tZXNzYWdlc1tpZHhdLmNyZWF0ZWRBdCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHRoaXMuY2FsbE9uTWVzc2FnZXNDaGFuZ2VkKCk7XG5cbiAgICAgICAgcmVzb2x2ZShpZHgpO1xuICAgICAgfSwgdGhpcy5zdGF0ZS5vcHRpb24uZGVsYXkpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlTWVzc2FnZShpbmRleDogbnVtYmVyLCBtZXNzYWdlOiBNZXNzYWdlPE1lc3NhZ2VDb250ZW50Pik6IHZvaWQge1xuICAgIGlmIChtZXNzYWdlICE9PSB0aGlzLnN0YXRlLm1lc3NhZ2VzW2luZGV4XSkge1xuICAgICAgY29uc3QgeyBjcmVhdGVkQXQgfSA9IHRoaXMuc3RhdGUubWVzc2FnZXNbaW5kZXhdO1xuICAgICAgdGhpcy5zdGF0ZS5tZXNzYWdlc1tpbmRleF0gPSBtZXNzYWdlO1xuICAgICAgdGhpcy5zdGF0ZS5tZXNzYWdlc1tpbmRleF0uY3JlYXRlZEF0ID0gY3JlYXRlZEF0O1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUubWVzc2FnZXNbaW5kZXhdLnVwZGF0ZWRBdCA9IG5ldyBEYXRlKCk7XG4gICAgdGhpcy5jYWxsT25NZXNzYWdlc0NoYW5nZWQoKTtcbiAgfVxuXG4gIHJlbW92ZU1lc3NhZ2UoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc3RhdGUubWVzc2FnZXNbaW5kZXhdLmRlbGV0ZWRBdCA9IG5ldyBEYXRlKCk7XG4gICAgdGhpcy5jYWxsT25NZXNzYWdlc0NoYW5nZWQoKTtcbiAgfVxuXG4gIGdldE1lc3NhZ2VzKCk6IE1lc3NhZ2U8TWVzc2FnZUNvbnRlbnQ+W10ge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLm1lc3NhZ2VzO1xuICB9XG5cbiAgc2V0TWVzc2FnZXMobWVzc2FnZXM6IE1lc3NhZ2U8TWVzc2FnZUNvbnRlbnQ+W10pOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyTWVzc2FnZXMoKTtcbiAgICB0aGlzLnN0YXRlLm1lc3NhZ2VzID0gWy4uLm1lc3NhZ2VzXTtcbiAgICB0aGlzLmNhbGxPbk1lc3NhZ2VzQ2hhbmdlZCgpO1xuICB9XG5cbiAgY2xlYXJNZXNzYWdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXRlLm1lc3NhZ2VzID0gW107XG4gICAgdGhpcy5jYWxsT25NZXNzYWdlc0NoYW5nZWQoKTtcbiAgfVxuXG4gIHByaXZhdGUgY2FsbE9uTWVzc2FnZXNDaGFuZ2VkKCk6IHZvaWQge1xuICAgIHRoaXMuc3RhdGUub25NZXNzYWdlc0NoYW5nZWQubWFwKChoKSA9PiBoKHRoaXMuc3RhdGUubWVzc2FnZXMpKTtcbiAgfVxuXG4gIGFkZE9uTWVzc2FnZXNDaGFuZ2VkKGNhbGxiYWNrOiBPbk1lc3NhZ2VzQ2hhbmdlZCk6IHZvaWQge1xuICAgIHRoaXMuc3RhdGUub25NZXNzYWdlc0NoYW5nZWQucHVzaChjYWxsYmFjayk7XG4gIH1cblxuICByZW1vdmVPbk1lc3NhZ2VzQ2hhbmdlZChjYWxsYmFjazogT25NZXNzYWdlc0NoYW5nZWQpOiB2b2lkIHtcbiAgICBjb25zdCBpZHggPSB0aGlzLnN0YXRlLm9uTWVzc2FnZXNDaGFuZ2VkLmluZGV4T2YoY2FsbGJhY2spO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktZnVuY3Rpb25cbiAgICB0aGlzLnN0YXRlLm9uQWN0aW9uQ2hhbmdlZFtpZHhdID0gKCk6IHZvaWQgPT4ge307XG4gIH1cblxuICBzZXRBY3Rpb25SZXF1ZXN0PFQgZXh0ZW5kcyBBY3Rpb25SZXF1ZXN0PihcbiAgICByZXF1ZXN0OiBULFxuICAgIG9uUmVzcG9uc2U/OiBPbkFjdGlvblJlc3BvbnNlZCxcbiAgKTogUHJvbWlzZTxBY3Rpb25SZXNwb25zZT4ge1xuICAgIGNvbnN0IGFjdGlvbjogQWN0aW9uID0ge1xuICAgICAgcmVxdWVzdDogeyAuLi50aGlzLmRlZmF1bHRBY3Rpb25SZXF1ZXN0LCAuLi5yZXF1ZXN0IH0sXG4gICAgICByZXNwb25zZXM6IFtdLFxuICAgICAgb25SZXNucG9uc2VkOiBbXSxcbiAgICB9O1xuXG4gICAgLy8gU2VlIHNldEFjdGlvblJlc3BvbnNlIG1ldGhvZFxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXJlcXVlc3QuYWx3YXlzKSB7XG4gICAgICAgIGNvbnN0IHJldHVyblJlc3BvbnNlID0gKHJlc3BvbnNlOiBBY3Rpb25SZXNwb25zZSk6IHZvaWQgPT4ge1xuICAgICAgICAgIGlmICghcmVzcG9uc2UuZXJyb3IpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QocmVzcG9uc2UuZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgYWN0aW9uLm9uUmVzbnBvbnNlZC5wdXNoKHJldHVyblJlc3BvbnNlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9uUmVzcG9uc2UpIHtcbiAgICAgICAgYWN0aW9uLm9uUmVzbnBvbnNlZC5wdXNoKG9uUmVzcG9uc2UpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnN0YXRlLmFjdGlvbiA9IGFjdGlvbjtcbiAgICAgIHRoaXMuc3RhdGUuYWN0aW9uSGlzdG9yeS5wdXNoKGFjdGlvbik7XG4gICAgICB0aGlzLmNhbGxPbkFjdGlvbkNoYW5nZWQoYWN0aW9uLnJlcXVlc3QpO1xuXG4gICAgICBpZiAocmVxdWVzdC5hbHdheXMpIHtcbiAgICAgICAgcmVzb2x2ZSh7IHR5cGU6ICd0ZXh0JywgdmFsdWU6ICdkdW1teScgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjYW5jZWxBY3Rpb25SZXF1ZXN0KCk6IHZvaWQge1xuICAgIHRoaXMuc3RhdGUuYWN0aW9uID0gdGhpcy5lbXB0eUFjdGlvbjtcbiAgICB0aGlzLmNhbGxPbkFjdGlvbkNoYW5nZWQodGhpcy5lbXB0eUFjdGlvbi5yZXF1ZXN0KTtcbiAgfVxuXG4gIGdldEFjdGlvblJlcXVlc3QoKTogQWN0aW9uUmVxdWVzdCB8IHVuZGVmaW5lZCB7XG4gICAgY29uc3QgeyByZXF1ZXN0LCByZXNwb25zZXMgfSA9IHRoaXMuc3RhdGUuYWN0aW9uO1xuICAgIGlmICghcmVxdWVzdC5hbHdheXMgJiYgcmVzcG9uc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcXVlc3Q7XG4gIH1cblxuICBhc3luYyBzZXRBY3Rpb25SZXNwb25zZShcbiAgICByZXF1ZXN0OiBBY3Rpb25SZXF1ZXN0LFxuICAgIHJlc3BvbnNlOiBBY3Rpb25SZXNwb25zZSxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgeyByZXF1ZXN0OiBvcmlnUmVxLCByZXNwb25zZXMsIG9uUmVzbnBvbnNlZCB9ID0gdGhpcy5zdGF0ZS5hY3Rpb247XG4gICAgaWYgKHJlcXVlc3QgIT09IG9yaWdSZXEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBhY3Rpb24uJyk7XG4gICAgfVxuICAgIGlmICghcmVxdWVzdC5hbHdheXMgJiYgb25SZXNucG9uc2VkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdvblJlc3BvbnNlZCBpcyBub3Qgc2V0LicpO1xuICAgIH1cblxuICAgIHJlc3BvbnNlcy5wdXNoKHJlc3BvbnNlKTtcbiAgICB0aGlzLmNhbGxPbkFjdGlvbkNoYW5nZWQocmVxdWVzdCwgcmVzcG9uc2UpO1xuXG4gICAgaWYgKHJlcXVlc3QuYWRkTWVzc2FnZSkge1xuICAgICAgYXdhaXQgdGhpcy5hZGRNZXNzYWdlKHtcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBjb250ZW50OiByZXNwb25zZS52YWx1ZSxcbiAgICAgICAgc2VsZjogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uUmVzbnBvbnNlZC5tYXAoKGgpID0+IGgocmVzcG9uc2UpKTtcbiAgfVxuXG4gIGdldEFjdGlvblJlc3BvbnNlcygpOiBBY3Rpb25SZXNwb25zZVtdIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5hY3Rpb24ucmVzcG9uc2VzO1xuICB9XG5cbiAgcHJpdmF0ZSBjYWxsT25BY3Rpb25DaGFuZ2VkKFxuICAgIHJlcXVlc3Q6IEFjdGlvblJlcXVlc3QsXG4gICAgcmVzcG9uc2U/OiBBY3Rpb25SZXNwb25zZSxcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZS5vbkFjdGlvbkNoYW5nZWQubWFwKChoKSA9PiBoKHJlcXVlc3QsIHJlc3BvbnNlKSk7XG4gIH1cblxuICBhZGRPbkFjdGlvbkNoYW5nZWQoY2FsbGJhY2s6IE9uQWN0aW9uQ2hhbmdlZCk6IHZvaWQge1xuICAgIHRoaXMuc3RhdGUub25BY3Rpb25DaGFuZ2VkLnB1c2goY2FsbGJhY2spO1xuICB9XG5cbiAgcmVtb3ZlT25BY3Rpb25DaGFuZ2VkKGNhbGxiYWNrOiBPbkFjdGlvbkNoYW5nZWQpOiB2b2lkIHtcbiAgICBjb25zdCBpZHggPSB0aGlzLnN0YXRlLm9uQWN0aW9uQ2hhbmdlZC5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWZ1bmN0aW9uXG4gICAgdGhpcy5zdGF0ZS5vbkFjdGlvbkNoYW5nZWRbaWR4XSA9ICgpOiB2b2lkID0+IHt9O1xuICB9XG5cbiAgZ2V0T3B0aW9uKCk6IENoYXRPcHRpb24ge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLm9wdGlvbjtcbiAgfVxufVxuIiwiLy8gQ29waWVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2NocmlzLXJ1ZG1pbi9SZWNvcmRlcmpzXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgbGV0IEJZVEVTX1BFUl9TQU1QTEUgPSAyXG5cbiAgbGV0IHJlY29yZGVkID0gW11cblxuICBmdW5jdGlvbiBlbmNvZGUgKGJ1ZmZlcikge1xuICAgIGxldCBsZW5ndGggPSBidWZmZXIubGVuZ3RoXG4gICAgbGV0IGRhdGEgPSBuZXcgVWludDhBcnJheShsZW5ndGggKiBCWVRFU19QRVJfU0FNUExFKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBpbmRleCA9IGkgKiBCWVRFU19QRVJfU0FNUExFXG4gICAgICBsZXQgc2FtcGxlID0gYnVmZmVyW2ldXG4gICAgICBpZiAoc2FtcGxlID4gMSkge1xuICAgICAgICBzYW1wbGUgPSAxXG4gICAgICB9IGVsc2UgaWYgKHNhbXBsZSA8IC0xKSB7XG4gICAgICAgIHNhbXBsZSA9IC0xXG4gICAgICB9XG4gICAgICBzYW1wbGUgPSBzYW1wbGUgKiAzMjc2OFxuICAgICAgZGF0YVtpbmRleF0gPSBzYW1wbGVcbiAgICAgIGRhdGFbaW5kZXggKyAxXSA9IHNhbXBsZSA+PiA4XG4gICAgfVxuICAgIHJlY29yZGVkLnB1c2goZGF0YSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGR1bXAgKHNhbXBsZVJhdGUpIHtcbiAgICBsZXQgYnVmZmVyTGVuZ3RoID0gcmVjb3JkZWQubGVuZ3RoID8gcmVjb3JkZWRbMF0ubGVuZ3RoIDogMFxuICAgIGxldCBsZW5ndGggPSByZWNvcmRlZC5sZW5ndGggKiBidWZmZXJMZW5ndGhcbiAgICBsZXQgd2F2ID0gbmV3IFVpbnQ4QXJyYXkoNDQgKyBsZW5ndGgpXG4gICAgbGV0IHZpZXcgPSBuZXcgRGF0YVZpZXcod2F2LmJ1ZmZlcilcblxuICAgIC8vIFJJRkYgaWRlbnRpZmllciAnUklGRidcbiAgICB2aWV3LnNldFVpbnQzMigwLCAxMzgwNTMzODMwLCBmYWxzZSlcbiAgICAvLyBmaWxlIGxlbmd0aCBtaW51cyBSSUZGIGlkZW50aWZpZXIgbGVuZ3RoIGFuZCBmaWxlIGRlc2NyaXB0aW9uIGxlbmd0aFxuICAgIHZpZXcuc2V0VWludDMyKDQsIDM2ICsgbGVuZ3RoLCB0cnVlKVxuICAgIC8vIFJJRkYgdHlwZSAnV0FWRSdcbiAgICB2aWV3LnNldFVpbnQzMig4LCAxNDYzODk5NzE3LCBmYWxzZSlcbiAgICAvLyBmb3JtYXQgY2h1bmsgaWRlbnRpZmllciAnZm10ICdcbiAgICB2aWV3LnNldFVpbnQzMigxMiwgMTcxODQ0OTE4NCwgZmFsc2UpXG4gICAgLy8gZm9ybWF0IGNodW5rIGxlbmd0aFxuICAgIHZpZXcuc2V0VWludDMyKDE2LCAxNiwgdHJ1ZSlcbiAgICAvLyBzYW1wbGUgZm9ybWF0IChyYXcpXG4gICAgdmlldy5zZXRVaW50MTYoMjAsIDEsIHRydWUpXG4gICAgLy8gY2hhbm5lbCBjb3VudFxuICAgIHZpZXcuc2V0VWludDE2KDIyLCAxLCB0cnVlKVxuICAgIC8vIHNhbXBsZSByYXRlXG4gICAgdmlldy5zZXRVaW50MzIoMjQsIHNhbXBsZVJhdGUsIHRydWUpXG4gICAgLy8gYnl0ZSByYXRlIChzYW1wbGUgcmF0ZSAqIGJsb2NrIGFsaWduKVxuICAgIHZpZXcuc2V0VWludDMyKDI4LCBzYW1wbGVSYXRlICogQllURVNfUEVSX1NBTVBMRSwgdHJ1ZSlcbiAgICAvLyBibG9jayBhbGlnbiAoY2hhbm5lbCBjb3VudCAqIGJ5dGVzIHBlciBzYW1wbGUpXG4gICAgdmlldy5zZXRVaW50MTYoMzIsIEJZVEVTX1BFUl9TQU1QTEUsIHRydWUpXG4gICAgLy8gYml0cyBwZXIgc2FtcGxlXG4gICAgdmlldy5zZXRVaW50MTYoMzQsIDggKiBCWVRFU19QRVJfU0FNUExFLCB0cnVlKVxuICAgIC8vIGRhdGEgY2h1bmsgaWRlbnRpZmllciAnZGF0YSdcbiAgICB2aWV3LnNldFVpbnQzMigzNiwgMTY4NDEwODM4NSwgZmFsc2UpXG4gICAgLy8gZGF0YSBjaHVuayBsZW5ndGhcbiAgICB2aWV3LnNldFVpbnQzMig0MCwgbGVuZ3RoLCB0cnVlKVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vbm8tZm9yLWxvb3BcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlY29yZGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICB3YXYuc2V0KHJlY29yZGVkW2ldLCBpICogYnVmZmVyTGVuZ3RoICsgNDQpXG4gICAgfVxuXG4gICAgcmVjb3JkZWQgPSBbXVxuICAgIHBvc3RNZXNzYWdlKHdhdi5idWZmZXIsIFt3YXYuYnVmZmVyXSlcbiAgfVxuXG4gIG9ubWVzc2FnZSA9IGUgPT4ge1xuICAgIGlmIChlLmRhdGFbMF0gPT09ICdlbmNvZGUnKSB7XG4gICAgICBlbmNvZGUoZS5kYXRhWzFdKVxuICAgIH0gZWxzZSBpZiAoZS5kYXRhWzBdID09PSAnZHVtcCcpIHtcbiAgICAgIGR1bXAoZS5kYXRhWzFdKVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHdhdmVFbmNvZGVyIGZyb20gJy4vd2F2ZS1lbmNvZGVyL2luZGV4LmpzJ1xuXG5sZXQgQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0XG5cbmxldCBjcmVhdGVXb3JrZXIgPSBmbiA9PiB7XG4gIGxldCBqcyA9IGZuXG4gICAgLnRvU3RyaW5nKClcbiAgICAucmVwbGFjZSgvXihcXChcXClcXHMqPT58ZnVuY3Rpb25cXHMqXFwoXFwpKVxccyp7LywgJycpXG4gICAgLnJlcGxhY2UoL30kLywgJycpXG4gIGxldCBibG9iID0gbmV3IEJsb2IoW2pzXSlcbiAgcmV0dXJuIG5ldyBXb3JrZXIoVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSlcbn1cblxubGV0IGVycm9yID0gbWV0aG9kID0+IHtcbiAgbGV0IGV2ZW50ID0gbmV3IEV2ZW50KCdlcnJvcicpXG4gIGV2ZW50LmRhdGEgPSBuZXcgRXJyb3IoJ1dyb25nIHN0YXRlIGZvciAnICsgbWV0aG9kKVxuICByZXR1cm4gZXZlbnRcbn1cblxubGV0IGNvbnRleHRcblxuLyoqXG4gKiBBdWRpbyBSZWNvcmRlciB3aXRoIE1lZGlhUmVjb3JkZXIgQVBJLlxuICpcbiAqIEBleGFtcGxlXG4gKiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7IGF1ZGlvOiB0cnVlIH0pLnRoZW4oc3RyZWFtID0+IHtcbiAqICAgbGV0IHJlY29yZGVyID0gbmV3IE1lZGlhUmVjb3JkZXIoc3RyZWFtKVxuICogfSlcbiAqL1xuY2xhc3MgTWVkaWFSZWNvcmRlciB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge01lZGlhU3RyZWFtfSBzdHJlYW0gVGhlIGF1ZGlvIHN0cmVhbSB0byByZWNvcmQuXG4gICAqL1xuICBjb25zdHJ1Y3RvciAoc3RyZWFtLCBjb25maWcgPSBudWxsKSB7XG4gICAgLyoqXG4gICAgICogVGhlIGBNZWRpYVN0cmVhbWAgcGFzc2VkIGludG8gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAqIEB0eXBlIHtNZWRpYVN0cmVhbX1cbiAgICAgKi9cbiAgICB0aGlzLnN0cmVhbSA9IHN0cmVhbVxuICAgIHRoaXMuY29uZmlnID0gY29uZmlnXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgc3RhdGUgb2YgcmVjb3JkaW5nIHByb2Nlc3MuXG4gICAgICogQHR5cGUge1wiaW5hY3RpdmVcInxcInJlY29yZGluZ1wifFwicGF1c2VkXCJ9XG4gICAgICovXG4gICAgdGhpcy5zdGF0ZSA9ICdpbmFjdGl2ZSdcblxuICAgIHRoaXMuZW0gPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcbiAgICB0aGlzLmVuY29kZXIgPSBjcmVhdGVXb3JrZXIoTWVkaWFSZWNvcmRlci5lbmNvZGVyKVxuXG4gICAgbGV0IHJlY29yZGVyID0gdGhpc1xuICAgIHRoaXMuZW5jb2Rlci5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZSA9PiB7XG4gICAgICBsZXQgZXZlbnQgPSBuZXcgRXZlbnQoJ2RhdGFhdmFpbGFibGUnKVxuICAgICAgZXZlbnQuZGF0YSA9IG5ldyBCbG9iKFtlLmRhdGFdLCB7IHR5cGU6IHJlY29yZGVyLm1pbWVUeXBlIH0pXG4gICAgICByZWNvcmRlci5lbS5kaXNwYXRjaEV2ZW50KGV2ZW50KVxuICAgICAgaWYgKHJlY29yZGVyLnN0YXRlID09PSAnaW5hY3RpdmUnKSB7XG4gICAgICAgIHJlY29yZGVyLmVtLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdzdG9wJykpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBCZWdpbnMgcmVjb3JkaW5nIG1lZGlhLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gW3RpbWVzbGljZV0gVGhlIG1pbGxpc2Vjb25kcyB0byByZWNvcmQgaW50byBlYWNoIGBCbG9iYC5cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIElmIHRoaXMgcGFyYW1ldGVyIGlzbuKAmXQgaW5jbHVkZWQsIHNpbmdsZSBgQmxvYmBcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbGwgYmUgcmVjb3JkZWQuXG4gICAqXG4gICAqIEByZXR1cm4ge3VuZGVmaW5lZH1cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogcmVjb3JkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgKiAgIHJlY29yZGVyLnN0YXJ0KClcbiAgICogfSlcbiAgICovXG4gIHN0YXJ0ICh0aW1lc2xpY2UpIHtcbiAgICBpZiAodGhpcy5zdGF0ZSAhPT0gJ2luYWN0aXZlJykge1xuICAgICAgcmV0dXJuIHRoaXMuZW0uZGlzcGF0Y2hFdmVudChlcnJvcignc3RhcnQnKSlcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0gJ3JlY29yZGluZydcblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgY29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQodGhpcy5jb25maWcpXG4gICAgfVxuICAgIHRoaXMuY2xvbmUgPSB0aGlzLnN0cmVhbS5jbG9uZSgpXG4gICAgdGhpcy5pbnB1dCA9IGNvbnRleHQuY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2UodGhpcy5jbG9uZSlcbiAgICB0aGlzLnByb2Nlc3NvciA9IGNvbnRleHQuY3JlYXRlU2NyaXB0UHJvY2Vzc29yKDIwNDgsIDEsIDEpXG5cbiAgICB0aGlzLmVuY29kZXIucG9zdE1lc3NhZ2UoWydpbml0JywgY29udGV4dC5zYW1wbGVSYXRlXSlcblxuICAgIHRoaXMucHJvY2Vzc29yLm9uYXVkaW9wcm9jZXNzID0gZSA9PiB7XG4gICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ3JlY29yZGluZycpIHtcbiAgICAgICAgdGhpcy5lbmNvZGVyLnBvc3RNZXNzYWdlKFsnZW5jb2RlJywgZS5pbnB1dEJ1ZmZlci5nZXRDaGFubmVsRGF0YSgwKV0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5pbnB1dC5jb25uZWN0KHRoaXMucHJvY2Vzc29yKVxuICAgIHRoaXMucHJvY2Vzc29yLmNvbm5lY3QoY29udGV4dC5kZXN0aW5hdGlvbilcblxuICAgIHRoaXMuZW0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3N0YXJ0JykpXG5cbiAgICBpZiAodGltZXNsaWNlKSB7XG4gICAgICB0aGlzLnNsaWNpbmcgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSAncmVjb3JkaW5nJykgdGhpcy5yZXF1ZXN0RGF0YSgpXG4gICAgICB9LCB0aW1lc2xpY2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgLyoqXG4gICAqIFN0b3AgbWVkaWEgY2FwdHVyZSBhbmQgcmFpc2UgYGRhdGFhdmFpbGFibGVgIGV2ZW50IHdpdGggcmVjb3JkZWQgZGF0YS5cbiAgICpcbiAgICogQHJldHVybiB7dW5kZWZpbmVkfVxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBmaW5pc2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAqICAgcmVjb3JkZXIuc3RvcCgpXG4gICAqIH0pXG4gICAqL1xuICBzdG9wICgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ2luYWN0aXZlJykge1xuICAgICAgcmV0dXJuIHRoaXMuZW0uZGlzcGF0Y2hFdmVudChlcnJvcignc3RvcCcpKVxuICAgIH1cblxuICAgIHRoaXMucmVxdWVzdERhdGEoKVxuICAgIHRoaXMuc3RhdGUgPSAnaW5hY3RpdmUnXG4gICAgdGhpcy5jbG9uZS5nZXRUcmFja3MoKS5mb3JFYWNoKHRyYWNrID0+IHtcbiAgICAgIHRyYWNrLnN0b3AoKVxuICAgIH0pXG4gICAgdGhpcy5wcm9jZXNzb3IuZGlzY29ubmVjdCgpXG4gICAgdGhpcy5pbnB1dC5kaXNjb25uZWN0KClcbiAgICByZXR1cm4gY2xlYXJJbnRlcnZhbCh0aGlzLnNsaWNpbmcpXG4gIH1cblxuICAvKipcbiAgICogUGF1c2VzIHJlY29yZGluZyBvZiBtZWRpYSBzdHJlYW1zLlxuICAgKlxuICAgKiBAcmV0dXJuIHt1bmRlZmluZWR9XG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIHBhdXNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgKiAgIHJlY29yZGVyLnBhdXNlKClcbiAgICogfSlcbiAgICovXG4gIHBhdXNlICgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZSAhPT0gJ3JlY29yZGluZycpIHtcbiAgICAgIHJldHVybiB0aGlzLmVtLmRpc3BhdGNoRXZlbnQoZXJyb3IoJ3BhdXNlJykpXG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9ICdwYXVzZWQnXG4gICAgcmV0dXJuIHRoaXMuZW0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3BhdXNlJykpXG4gIH1cblxuICAvKipcbiAgICogUmVzdW1lcyBtZWRpYSByZWNvcmRpbmcgd2hlbiBpdCBoYXMgYmVlbiBwcmV2aW91c2x5IHBhdXNlZC5cbiAgICpcbiAgICogQHJldHVybiB7dW5kZWZpbmVkfVxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiByZXN1bWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAqICAgcmVjb3JkZXIucmVzdW1lKClcbiAgICogfSlcbiAgICovXG4gIHJlc3VtZSAoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUgIT09ICdwYXVzZWQnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbS5kaXNwYXRjaEV2ZW50KGVycm9yKCdyZXN1bWUnKSlcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0gJ3JlY29yZGluZydcbiAgICByZXR1cm4gdGhpcy5lbS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgncmVzdW1lJykpXG4gIH1cblxuICAvKipcbiAgICogUmFpc2UgYSBgZGF0YWF2YWlsYWJsZWAgZXZlbnQgY29udGFpbmluZyB0aGUgY2FwdHVyZWQgbWVkaWEuXG4gICAqXG4gICAqIEByZXR1cm4ge3VuZGVmaW5lZH1cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogdGhpcy5vbignbmV4dERhdGEnLCAoKSA9PiB7XG4gICAqICAgcmVjb3JkZXIucmVxdWVzdERhdGEoKVxuICAgKiB9KVxuICAgKi9cbiAgcmVxdWVzdERhdGEgKCkge1xuICAgIGlmICh0aGlzLnN0YXRlID09PSAnaW5hY3RpdmUnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbS5kaXNwYXRjaEV2ZW50KGVycm9yKCdyZXF1ZXN0RGF0YScpKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmVuY29kZXIucG9zdE1lc3NhZ2UoWydkdW1wJywgY29udGV4dC5zYW1wbGVSYXRlXSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgbGlzdGVuZXIgZm9yIHNwZWNpZmllZCBldmVudCB0eXBlLlxuICAgKlxuICAgKiBAcGFyYW0ge1wic3RhcnRcInxcInN0b3BcInxcInBhdXNlXCJ8XCJyZXN1bWVcInxcImRhdGFhdmFpbGFibGVcInxcImVycm9yXCJ9XG4gICAqIHR5cGUgRXZlbnQgdHlwZS5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gbGlzdGVuZXIgVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJuIHt1bmRlZmluZWR9XG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIHJlY29yZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RhdGFhdmFpbGFibGUnLCBlID0+IHtcbiAgICogICBhdWRpby5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGUuZGF0YSlcbiAgICogfSlcbiAgICovXG4gIGFkZEV2ZW50TGlzdGVuZXIgKC4uLmFyZ3MpIHtcbiAgICB0aGlzLmVtLmFkZEV2ZW50TGlzdGVuZXIoLi4uYXJncylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgZXZlbnQgbGlzdGVuZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7XCJzdGFydFwifFwic3RvcFwifFwicGF1c2VcInxcInJlc3VtZVwifFwiZGF0YWF2YWlsYWJsZVwifFwiZXJyb3JcIn1cbiAgICogdHlwZSBFdmVudCB0eXBlLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBsaXN0ZW5lciBUaGUgc2FtZSBmdW5jdGlvbiB1c2VkIGluIGBhZGRFdmVudExpc3RlbmVyYC5cbiAgICpcbiAgICogQHJldHVybiB7dW5kZWZpbmVkfVxuICAgKi9cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lciAoLi4uYXJncykge1xuICAgIHRoaXMuZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lciguLi5hcmdzKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxzIGVhY2ggb2YgdGhlIGxpc3RlbmVycyByZWdpc3RlcmVkIGZvciBhIGdpdmVuIGV2ZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgb2JqZWN0LlxuICAgKlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBJcyBldmVudCB3YXMgbm8gY2FuY2VsZWQgYnkgYW55IGxpc3RlbmVyLlxuICAgKi9cbiAgZGlzcGF0Y2hFdmVudCAoLi4uYXJncykge1xuICAgIHRoaXMuZW0uZGlzcGF0Y2hFdmVudCguLi5hcmdzKVxuICB9XG59XG5cbi8qKlxuICogVGhlIE1JTUUgdHlwZSB0aGF0IGlzIGJlaW5nIHVzZWQgZm9yIHJlY29yZGluZy5cbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbk1lZGlhUmVjb3JkZXIucHJvdG90eXBlLm1pbWVUeXBlID0gJ2F1ZGlvL3dhdidcblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgTUlNRSB0eXBlIHNwZWNpZmllZCBpcyBvbmUgdGhlIHBvbHlmaWxsIGNhbiByZWNvcmQuXG4gKlxuICogVGhpcyBwb2x5ZmlsbCBzdXBwb3J0cyBgYXVkaW8vd2F2YCBhbmQgYGF1ZGlvL21wZWdgLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtaW1lVHlwZSBUaGUgbWltZVR5cGUgdG8gY2hlY2suXG4gKlxuICogQHJldHVybiB7Ym9vbGVhbn0gYHRydWVgIG9uIGBhdWRpby93YXZgIGFuZCBgYXVkaW8vbXBlZ2AgTUlNRSB0eXBlLlxuICovXG5NZWRpYVJlY29yZGVyLmlzVHlwZVN1cHBvcnRlZCA9IG1pbWVUeXBlID0+IHtcbiAgcmV0dXJuIE1lZGlhUmVjb3JkZXIucHJvdG90eXBlLm1pbWVUeXBlID09PSBtaW1lVHlwZVxufVxuXG4vKipcbiAqIGB0cnVlYCBpZiBNZWRpYVJlY29yZGVyIGNhbiBub3QgYmUgcG9seWZpbGxlZCBpbiB0aGUgY3VycmVudCBicm93c2VyLlxuICogQHR5cGUge2Jvb2xlYW59XG4gKlxuICogQGV4YW1wbGVcbiAqIGlmIChNZWRpYVJlY29yZGVyLm5vdFN1cHBvcnRlZCkge1xuICogICBzaG93V2FybmluZygnQXVkaW8gcmVjb3JkaW5nIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyJylcbiAqIH1cbiAqL1xuTWVkaWFSZWNvcmRlci5ub3RTdXBwb3J0ZWQgPSAhbmF2aWdhdG9yLm1lZGlhRGV2aWNlcyB8fCAhQXVkaW9Db250ZXh0XG5cbi8qKlxuICogQ29udmVydHMgUkFXIGF1ZGlvIGJ1ZmZlciB0byBjb21wcmVzc2VkIGF1ZGlvIGZpbGVzLlxuICogSXQgd2lsbCBiZSBsb2FkZWQgdG8gV2ViIFdvcmtlci5cbiAqIEJ5IGRlZmF1bHQsIFdBVkUgZW5jb2RlciB3aWxsIGJlIHVzZWQuXG4gKiBAdHlwZSB7ZnVuY3Rpb259XG4gKlxuICogQGV4YW1wbGVcbiAqIE1lZGlhUmVjb3JkZXIucHJvdG90eXBlLm1pbWVUeXBlID0gJ2F1ZGlvL29nZydcbiAqIE1lZGlhUmVjb3JkZXIuZW5jb2RlciA9IG9nZ0VuY29kZXJcbiAqL1xuTWVkaWFSZWNvcmRlci5lbmNvZGVyID0gd2F2ZUVuY29kZXJcblxuZXhwb3J0IGRlZmF1bHQgTWVkaWFSZWNvcmRlclxuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IEF1ZGlvUmVjb3JkZXIgZnJvbSAnYXVkaW8tcmVjb3JkZXItcG9seWZpbGwnO1xuXG5leHBvcnQgY2xhc3MgQXVkaW9NZWRpYVJlY29yZGVyIHtcbiAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEF1ZGlvTWVkaWFSZWNvcmRlcjtcblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogQXVkaW9NZWRpYVJlY29yZGVyIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgQXVkaW9NZWRpYVJlY29yZGVyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gIH1cblxuICBwcml2YXRlIG1kPzogTWVkaWFSZWNvcmRlcjtcblxuICBwcml2YXRlIHJlY29yZENodW5rczogQmxvYltdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmICghd2luZG93Lk1lZGlhUmVjb3JkZXIpIHtcbiAgICAgIHdpbmRvdy5NZWRpYVJlY29yZGVyID0gQXVkaW9SZWNvcmRlcjtcbiAgICB9XG4gICAgdGhpcy5yZWNvcmRDaHVua3MgPSBbXTtcbiAgfVxuXG4gIGFzeW5jIGluaXRpYWxpemUoKTogUHJvbWlzZTxBdWRpb01lZGlhUmVjb3JkZXI+IHtcbiAgICBpZiAodGhpcy5tZCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe1xuICAgICAgYXVkaW86IHRydWUsXG4gICAgICB2aWRlbzogZmFsc2UsXG4gICAgfSk7XG4gICAgdGhpcy5tZCA9IG5ldyBNZWRpYVJlY29yZGVyKHN0cmVhbSk7XG4gICAgdGhpcy5yZWNvcmRDaHVua3MgPSBbXTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYXN5bmMgc3RhcnRSZWNvcmQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZiAoIXRoaXMubWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdXN0IGJlIGluaXRpYWxpemVkLicpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnJlY29yZENodW5rcyA9IFtdO1xuXG4gICAgICB0aGlzLm1kLmFkZEV2ZW50TGlzdGVuZXIoJ3N0YXJ0JywgKCkgPT4ge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgdGhpcy5tZC5hZGRFdmVudExpc3RlbmVyKCdkYXRhYXZhaWxhYmxlJywgKGU6IEJsb2JFdmVudCkgPT4ge1xuICAgICAgICBpZiAoZS5kYXRhLnNpemUgPiAwKSB7XG4gICAgICAgICAgdGhpcy5yZWNvcmRDaHVua3MucHVzaChlLmRhdGEpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5tZC5zdGFydCgpO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgc3RvcFJlY29yZCgpOiBQcm9taXNlPEJsb2I+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGlmICghdGhpcy5tZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ011c3QgYmUgaW5pdGlhbGl6ZWQuJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubWQuYWRkRXZlbnRMaXN0ZW5lcignc3RvcCcsICgpID0+IHtcbiAgICAgICAgcmVzb2x2ZShuZXcgQmxvYih0aGlzLnJlY29yZENodW5rcykpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMubWQuc3RvcCgpO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgX0FycmF5JGlzQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy9hcnJheS9pcy1hcnJheVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoX0FycmF5JGlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn0iLCJpbXBvcnQgX1N5bWJvbCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzL3N5bWJvbFwiO1xuaW1wb3J0IF9nZXRJdGVyYXRvck1ldGhvZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzL2dldC1pdGVyYXRvci1tZXRob2RcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIF9TeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgX2dldEl0ZXJhdG9yTWV0aG9kKGFycikgfHwgYXJyW1wiQEBpdGVyYXRvclwiXTtcblxuICBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcblxuICB2YXIgX3MsIF9lO1xuXG4gIHRyeSB7XG4gICAgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRoSG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRoSG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXlMaW1pdCBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qc1wiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgbm9uSXRlcmFibGVSZXN0IGZyb20gXCIuL25vbkl0ZXJhYmxlUmVzdC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn0iLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKToodD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOnR8fHNlbGYpLmRheWpzPWUoKX0odGhpcywoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgdD0xZTMsZT02ZTQsbj0zNmU1LHI9XCJtaWxsaXNlY29uZFwiLGk9XCJzZWNvbmRcIixzPVwibWludXRlXCIsdT1cImhvdXJcIixhPVwiZGF5XCIsbz1cIndlZWtcIixmPVwibW9udGhcIixoPVwicXVhcnRlclwiLGM9XCJ5ZWFyXCIsZD1cImRhdGVcIiwkPVwiSW52YWxpZCBEYXRlXCIsbD0vXihcXGR7NH0pWy0vXT8oXFxkezEsMn0pP1stL10/KFxcZHswLDJ9KVtUdFxcc10qKFxcZHsxLDJ9KT86PyhcXGR7MSwyfSk/Oj8oXFxkezEsMn0pP1suOl0/KFxcZCspPyQvLHk9L1xcWyhbXlxcXV0rKV18WXsxLDR9fE17MSw0fXxEezEsMn18ZHsxLDR9fEh7MSwyfXxoezEsMn18YXxBfG17MSwyfXxzezEsMn18WnsxLDJ9fFNTUy9nLE09e25hbWU6XCJlblwiLHdlZWtkYXlzOlwiU3VuZGF5X01vbmRheV9UdWVzZGF5X1dlZG5lc2RheV9UaHVyc2RheV9GcmlkYXlfU2F0dXJkYXlcIi5zcGxpdChcIl9cIiksbW9udGhzOlwiSmFudWFyeV9GZWJydWFyeV9NYXJjaF9BcHJpbF9NYXlfSnVuZV9KdWx5X0F1Z3VzdF9TZXB0ZW1iZXJfT2N0b2Jlcl9Ob3ZlbWJlcl9EZWNlbWJlclwiLnNwbGl0KFwiX1wiKX0sbT1mdW5jdGlvbih0LGUsbil7dmFyIHI9U3RyaW5nKHQpO3JldHVybiFyfHxyLmxlbmd0aD49ZT90OlwiXCIrQXJyYXkoZSsxLXIubGVuZ3RoKS5qb2luKG4pK3R9LGc9e3M6bSx6OmZ1bmN0aW9uKHQpe3ZhciBlPS10LnV0Y09mZnNldCgpLG49TWF0aC5hYnMoZSkscj1NYXRoLmZsb29yKG4vNjApLGk9biU2MDtyZXR1cm4oZTw9MD9cIitcIjpcIi1cIikrbShyLDIsXCIwXCIpK1wiOlwiK20oaSwyLFwiMFwiKX0sbTpmdW5jdGlvbiB0KGUsbil7aWYoZS5kYXRlKCk8bi5kYXRlKCkpcmV0dXJuLXQobixlKTt2YXIgcj0xMioobi55ZWFyKCktZS55ZWFyKCkpKyhuLm1vbnRoKCktZS5tb250aCgpKSxpPWUuY2xvbmUoKS5hZGQocixmKSxzPW4taTwwLHU9ZS5jbG9uZSgpLmFkZChyKyhzPy0xOjEpLGYpO3JldHVybisoLShyKyhuLWkpLyhzP2ktdTp1LWkpKXx8MCl9LGE6ZnVuY3Rpb24odCl7cmV0dXJuIHQ8MD9NYXRoLmNlaWwodCl8fDA6TWF0aC5mbG9vcih0KX0scDpmdW5jdGlvbih0KXtyZXR1cm57TTpmLHk6Yyx3Om8sZDphLEQ6ZCxoOnUsbTpzLHM6aSxtczpyLFE6aH1bdF18fFN0cmluZyh0fHxcIlwiKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL3MkLyxcIlwiKX0sdTpmdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dH19LEQ9XCJlblwiLHY9e307dltEXT1NO3ZhciBwPWZ1bmN0aW9uKHQpe3JldHVybiB0IGluc3RhbmNlb2YgX30sUz1mdW5jdGlvbih0LGUsbil7dmFyIHI7aWYoIXQpcmV0dXJuIEQ7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpdlt0XSYmKHI9dCksZSYmKHZbdF09ZSxyPXQpO2Vsc2V7dmFyIGk9dC5uYW1lO3ZbaV09dCxyPWl9cmV0dXJuIW4mJnImJihEPXIpLHJ8fCFuJiZEfSx3PWZ1bmN0aW9uKHQsZSl7aWYocCh0KSlyZXR1cm4gdC5jbG9uZSgpO3ZhciBuPVwib2JqZWN0XCI9PXR5cGVvZiBlP2U6e307cmV0dXJuIG4uZGF0ZT10LG4uYXJncz1hcmd1bWVudHMsbmV3IF8obil9LE89ZztPLmw9UyxPLmk9cCxPLnc9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdyh0LHtsb2NhbGU6ZS4kTCx1dGM6ZS4kdSx4OmUuJHgsJG9mZnNldDplLiRvZmZzZXR9KX07dmFyIF89ZnVuY3Rpb24oKXtmdW5jdGlvbiBNKHQpe3RoaXMuJEw9Uyh0LmxvY2FsZSxudWxsLCEwKSx0aGlzLnBhcnNlKHQpfXZhciBtPU0ucHJvdG90eXBlO3JldHVybiBtLnBhcnNlPWZ1bmN0aW9uKHQpe3RoaXMuJGQ9ZnVuY3Rpb24odCl7dmFyIGU9dC5kYXRlLG49dC51dGM7aWYobnVsbD09PWUpcmV0dXJuIG5ldyBEYXRlKE5hTik7aWYoTy51KGUpKXJldHVybiBuZXcgRGF0ZTtpZihlIGluc3RhbmNlb2YgRGF0ZSlyZXR1cm4gbmV3IERhdGUoZSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUmJiEvWiQvaS50ZXN0KGUpKXt2YXIgcj1lLm1hdGNoKGwpO2lmKHIpe3ZhciBpPXJbMl0tMXx8MCxzPShyWzddfHxcIjBcIikuc3Vic3RyaW5nKDAsMyk7cmV0dXJuIG4/bmV3IERhdGUoRGF0ZS5VVEMoclsxXSxpLHJbM118fDEscls0XXx8MCxyWzVdfHwwLHJbNl18fDAscykpOm5ldyBEYXRlKHJbMV0saSxyWzNdfHwxLHJbNF18fDAscls1XXx8MCxyWzZdfHwwLHMpfX1yZXR1cm4gbmV3IERhdGUoZSl9KHQpLHRoaXMuJHg9dC54fHx7fSx0aGlzLmluaXQoKX0sbS5pbml0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy4kZDt0aGlzLiR5PXQuZ2V0RnVsbFllYXIoKSx0aGlzLiRNPXQuZ2V0TW9udGgoKSx0aGlzLiREPXQuZ2V0RGF0ZSgpLHRoaXMuJFc9dC5nZXREYXkoKSx0aGlzLiRIPXQuZ2V0SG91cnMoKSx0aGlzLiRtPXQuZ2V0TWludXRlcygpLHRoaXMuJHM9dC5nZXRTZWNvbmRzKCksdGhpcy4kbXM9dC5nZXRNaWxsaXNlY29uZHMoKX0sbS4kdXRpbHM9ZnVuY3Rpb24oKXtyZXR1cm4gT30sbS5pc1ZhbGlkPWZ1bmN0aW9uKCl7cmV0dXJuISh0aGlzLiRkLnRvU3RyaW5nKCk9PT0kKX0sbS5pc1NhbWU9ZnVuY3Rpb24odCxlKXt2YXIgbj13KHQpO3JldHVybiB0aGlzLnN0YXJ0T2YoZSk8PW4mJm48PXRoaXMuZW5kT2YoZSl9LG0uaXNBZnRlcj1mdW5jdGlvbih0LGUpe3JldHVybiB3KHQpPHRoaXMuc3RhcnRPZihlKX0sbS5pc0JlZm9yZT1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmVuZE9mKGUpPHcodCl9LG0uJGc9ZnVuY3Rpb24odCxlLG4pe3JldHVybiBPLnUodCk/dGhpc1tlXTp0aGlzLnNldChuLHQpfSxtLnVuaXg9ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5mbG9vcih0aGlzLnZhbHVlT2YoKS8xZTMpfSxtLnZhbHVlT2Y9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC5nZXRUaW1lKCl9LG0uc3RhcnRPZj1mdW5jdGlvbih0LGUpe3ZhciBuPXRoaXMscj0hIU8udShlKXx8ZSxoPU8ucCh0KSwkPWZ1bmN0aW9uKHQsZSl7dmFyIGk9Ty53KG4uJHU/RGF0ZS5VVEMobi4keSxlLHQpOm5ldyBEYXRlKG4uJHksZSx0KSxuKTtyZXR1cm4gcj9pOmkuZW5kT2YoYSl9LGw9ZnVuY3Rpb24odCxlKXtyZXR1cm4gTy53KG4udG9EYXRlKClbdF0uYXBwbHkobi50b0RhdGUoXCJzXCIpLChyP1swLDAsMCwwXTpbMjMsNTksNTksOTk5XSkuc2xpY2UoZSkpLG4pfSx5PXRoaXMuJFcsTT10aGlzLiRNLG09dGhpcy4kRCxnPVwic2V0XCIrKHRoaXMuJHU/XCJVVENcIjpcIlwiKTtzd2l0Y2goaCl7Y2FzZSBjOnJldHVybiByPyQoMSwwKTokKDMxLDExKTtjYXNlIGY6cmV0dXJuIHI/JCgxLE0pOiQoMCxNKzEpO2Nhc2Ugbzp2YXIgRD10aGlzLiRsb2NhbGUoKS53ZWVrU3RhcnR8fDAsdj0oeTxEP3krNzp5KS1EO3JldHVybiAkKHI/bS12Om0rKDYtdiksTSk7Y2FzZSBhOmNhc2UgZDpyZXR1cm4gbChnK1wiSG91cnNcIiwwKTtjYXNlIHU6cmV0dXJuIGwoZytcIk1pbnV0ZXNcIiwxKTtjYXNlIHM6cmV0dXJuIGwoZytcIlNlY29uZHNcIiwyKTtjYXNlIGk6cmV0dXJuIGwoZytcIk1pbGxpc2Vjb25kc1wiLDMpO2RlZmF1bHQ6cmV0dXJuIHRoaXMuY2xvbmUoKX19LG0uZW5kT2Y9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc3RhcnRPZih0LCExKX0sbS4kc2V0PWZ1bmN0aW9uKHQsZSl7dmFyIG4sbz1PLnAodCksaD1cInNldFwiKyh0aGlzLiR1P1wiVVRDXCI6XCJcIiksJD0obj17fSxuW2FdPWgrXCJEYXRlXCIsbltkXT1oK1wiRGF0ZVwiLG5bZl09aCtcIk1vbnRoXCIsbltjXT1oK1wiRnVsbFllYXJcIixuW3VdPWgrXCJIb3Vyc1wiLG5bc109aCtcIk1pbnV0ZXNcIixuW2ldPWgrXCJTZWNvbmRzXCIsbltyXT1oK1wiTWlsbGlzZWNvbmRzXCIsbilbb10sbD1vPT09YT90aGlzLiREKyhlLXRoaXMuJFcpOmU7aWYobz09PWZ8fG89PT1jKXt2YXIgeT10aGlzLmNsb25lKCkuc2V0KGQsMSk7eS4kZFskXShsKSx5LmluaXQoKSx0aGlzLiRkPXkuc2V0KGQsTWF0aC5taW4odGhpcy4kRCx5LmRheXNJbk1vbnRoKCkpKS4kZH1lbHNlICQmJnRoaXMuJGRbJF0obCk7cmV0dXJuIHRoaXMuaW5pdCgpLHRoaXN9LG0uc2V0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuY2xvbmUoKS4kc2V0KHQsZSl9LG0uZ2V0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzW08ucCh0KV0oKX0sbS5hZGQ9ZnVuY3Rpb24ocixoKXt2YXIgZCwkPXRoaXM7cj1OdW1iZXIocik7dmFyIGw9Ty5wKGgpLHk9ZnVuY3Rpb24odCl7dmFyIGU9dygkKTtyZXR1cm4gTy53KGUuZGF0ZShlLmRhdGUoKStNYXRoLnJvdW5kKHQqcikpLCQpfTtpZihsPT09ZilyZXR1cm4gdGhpcy5zZXQoZix0aGlzLiRNK3IpO2lmKGw9PT1jKXJldHVybiB0aGlzLnNldChjLHRoaXMuJHkrcik7aWYobD09PWEpcmV0dXJuIHkoMSk7aWYobD09PW8pcmV0dXJuIHkoNyk7dmFyIE09KGQ9e30sZFtzXT1lLGRbdV09bixkW2ldPXQsZClbbF18fDEsbT10aGlzLiRkLmdldFRpbWUoKStyKk07cmV0dXJuIE8udyhtLHRoaXMpfSxtLnN1YnRyYWN0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuYWRkKC0xKnQsZSl9LG0uZm9ybWF0PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsbj10aGlzLiRsb2NhbGUoKTtpZighdGhpcy5pc1ZhbGlkKCkpcmV0dXJuIG4uaW52YWxpZERhdGV8fCQ7dmFyIHI9dHx8XCJZWVlZLU1NLUREVEhIOm1tOnNzWlwiLGk9Ty56KHRoaXMpLHM9dGhpcy4kSCx1PXRoaXMuJG0sYT10aGlzLiRNLG89bi53ZWVrZGF5cyxmPW4ubW9udGhzLGg9ZnVuY3Rpb24odCxuLGkscyl7cmV0dXJuIHQmJih0W25dfHx0KGUscikpfHxpW25dLnN1YnN0cigwLHMpfSxjPWZ1bmN0aW9uKHQpe3JldHVybiBPLnMocyUxMnx8MTIsdCxcIjBcIil9LGQ9bi5tZXJpZGllbXx8ZnVuY3Rpb24odCxlLG4pe3ZhciByPXQ8MTI/XCJBTVwiOlwiUE1cIjtyZXR1cm4gbj9yLnRvTG93ZXJDYXNlKCk6cn0sbD17WVk6U3RyaW5nKHRoaXMuJHkpLnNsaWNlKC0yKSxZWVlZOnRoaXMuJHksTTphKzEsTU06Ty5zKGErMSwyLFwiMFwiKSxNTU06aChuLm1vbnRoc1Nob3J0LGEsZiwzKSxNTU1NOmgoZixhKSxEOnRoaXMuJEQsREQ6Ty5zKHRoaXMuJEQsMixcIjBcIiksZDpTdHJpbmcodGhpcy4kVyksZGQ6aChuLndlZWtkYXlzTWluLHRoaXMuJFcsbywyKSxkZGQ6aChuLndlZWtkYXlzU2hvcnQsdGhpcy4kVyxvLDMpLGRkZGQ6b1t0aGlzLiRXXSxIOlN0cmluZyhzKSxISDpPLnMocywyLFwiMFwiKSxoOmMoMSksaGg6YygyKSxhOmQocyx1LCEwKSxBOmQocyx1LCExKSxtOlN0cmluZyh1KSxtbTpPLnModSwyLFwiMFwiKSxzOlN0cmluZyh0aGlzLiRzKSxzczpPLnModGhpcy4kcywyLFwiMFwiKSxTU1M6Ty5zKHRoaXMuJG1zLDMsXCIwXCIpLFo6aX07cmV0dXJuIHIucmVwbGFjZSh5LChmdW5jdGlvbih0LGUpe3JldHVybiBlfHxsW3RdfHxpLnJlcGxhY2UoXCI6XCIsXCJcIil9KSl9LG0udXRjT2Zmc2V0PWZ1bmN0aW9uKCl7cmV0dXJuIDE1Ki1NYXRoLnJvdW5kKHRoaXMuJGQuZ2V0VGltZXpvbmVPZmZzZXQoKS8xNSl9LG0uZGlmZj1mdW5jdGlvbihyLGQsJCl7dmFyIGwseT1PLnAoZCksTT13KHIpLG09KE0udXRjT2Zmc2V0KCktdGhpcy51dGNPZmZzZXQoKSkqZSxnPXRoaXMtTSxEPU8ubSh0aGlzLE0pO3JldHVybiBEPShsPXt9LGxbY109RC8xMixsW2ZdPUQsbFtoXT1ELzMsbFtvXT0oZy1tKS82MDQ4ZTUsbFthXT0oZy1tKS84NjRlNSxsW3VdPWcvbixsW3NdPWcvZSxsW2ldPWcvdCxsKVt5XXx8ZywkP0Q6Ty5hKEQpfSxtLmRheXNJbk1vbnRoPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZW5kT2YoZikuJER9LG0uJGxvY2FsZT1mdW5jdGlvbigpe3JldHVybiB2W3RoaXMuJExdfSxtLmxvY2FsZT1mdW5jdGlvbih0LGUpe2lmKCF0KXJldHVybiB0aGlzLiRMO3ZhciBuPXRoaXMuY2xvbmUoKSxyPVModCxlLCEwKTtyZXR1cm4gciYmKG4uJEw9ciksbn0sbS5jbG9uZT1mdW5jdGlvbigpe3JldHVybiBPLncodGhpcy4kZCx0aGlzKX0sbS50b0RhdGU9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IERhdGUodGhpcy52YWx1ZU9mKCkpfSxtLnRvSlNPTj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmlzVmFsaWQoKT90aGlzLnRvSVNPU3RyaW5nKCk6bnVsbH0sbS50b0lTT1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLnRvSVNPU3RyaW5nKCl9LG0udG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC50b1VUQ1N0cmluZygpfSxNfSgpLGI9Xy5wcm90b3R5cGU7cmV0dXJuIHcucHJvdG90eXBlPWIsW1tcIiRtc1wiLHJdLFtcIiRzXCIsaV0sW1wiJG1cIixzXSxbXCIkSFwiLHVdLFtcIiRXXCIsYV0sW1wiJE1cIixmXSxbXCIkeVwiLGNdLFtcIiREXCIsZF1dLmZvckVhY2goKGZ1bmN0aW9uKHQpe2JbdFsxXV09ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuJGcoZSx0WzBdLHRbMV0pfX0pKSx3LmV4dGVuZD1mdW5jdGlvbih0LGUpe3JldHVybiB0LiRpfHwodChlLF8sdyksdC4kaT0hMCksd30sdy5sb2NhbGU9Uyx3LmlzRGF5anM9cCx3LnVuaXg9ZnVuY3Rpb24odCl7cmV0dXJuIHcoMWUzKnQpfSx3LmVuPXZbRF0sdy5Mcz12LHcucD17fSx3fSkpOyIsImltcG9ydCB7IEJveCwgQnV0dG9uLCBJY29uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBBdWRpb01lZGlhUmVjb3JkZXIgfSBmcm9tICcuLi9hdWRpby1tZWRpYS1yZWNvcmRlcic7XG5pbXBvcnQgeyBDaGF0Q29udHJvbGxlciB9IGZyb20gJy4uL2NoYXQtY29udHJvbGxlcic7XG5pbXBvcnQgeyBBdWRpb0FjdGlvblJlcXVlc3QsIEF1ZGlvQWN0aW9uUmVzcG9uc2UgfSBmcm9tICcuLi9jaGF0LXR5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIE11aUF1ZGlvSW5wdXQoe1xuICBjaGF0Q29udHJvbGxlcixcbiAgYWN0aW9uUmVxdWVzdCxcbn06IHtcbiAgY2hhdENvbnRyb2xsZXI6IENoYXRDb250cm9sbGVyO1xuICBhY3Rpb25SZXF1ZXN0OiBBdWRpb0FjdGlvblJlcXVlc3Q7XG59KTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgY29uc3QgY2hhdEN0bCA9IGNoYXRDb250cm9sbGVyO1xuICBjb25zdCBbYXVkaW9SZWNdID0gUmVhY3QudXNlU3RhdGUoQXVkaW9NZWRpYVJlY29yZGVyLmdldEluc3RhbmNlKCkpO1xuICBjb25zdCBbc3RvcHBlZCwgc2V0U3RvcHBlZF0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2F1ZGlvLCBzZXRBdWRpb10gPSBSZWFjdC51c2VTdGF0ZTxCbG9iIHwgdW5kZWZpbmVkPigpO1xuXG4gIGNvbnN0IGhhbmRsZUVycm9yID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGVycm9yOiBFcnJvcik6IHZvaWQgPT4ge1xuICAgICAgY29uc3QgdmFsdWU6IEF1ZGlvQWN0aW9uUmVzcG9uc2UgPSB7XG4gICAgICAgIHR5cGU6ICdhdWRpbycsXG4gICAgICAgIHZhbHVlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICBlcnJvcixcbiAgICAgIH07XG4gICAgICBjaGF0Q3RsLnNldEFjdGlvblJlc3BvbnNlKGFjdGlvblJlcXVlc3QsIHZhbHVlKTtcbiAgICB9LFxuICAgIFthY3Rpb25SZXF1ZXN0LCBjaGF0Q3RsXSxcbiAgKTtcblxuICBjb25zdCBoYW5kbGVTdGFydCA9IFJlYWN0LnVzZUNhbGxiYWNrKGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgYXVkaW9SZWMuaW5pdGlhbGl6ZSgpO1xuICAgICAgYXdhaXQgYXVkaW9SZWMuc3RhcnRSZWNvcmQoKTtcbiAgICAgIHNldFN0b3BwZWQoZmFsc2UpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBoYW5kbGVFcnJvcihlcnJvciBhcyBFcnJvcik7XG4gICAgfVxuICB9LCBbYXVkaW9SZWMsIGhhbmRsZUVycm9yXSk7XG5cbiAgY29uc3QgaGFuZGxlU3RvcCA9IFJlYWN0LnVzZUNhbGxiYWNrKGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYSA9IGF3YWl0IGF1ZGlvUmVjLnN0b3BSZWNvcmQoKTtcbiAgICAgIHNldEF1ZGlvKGEpO1xuICAgICAgc2V0U3RvcHBlZCh0cnVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaGFuZGxlRXJyb3IoZXJyb3IgYXMgRXJyb3IpO1xuICAgIH1cbiAgfSwgW2F1ZGlvUmVjLCBoYW5kbGVFcnJvcl0pO1xuXG4gIGNvbnN0IHNlbmRSZXNwb25zZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpOiB2b2lkID0+IHtcbiAgICBpZiAoYXVkaW8pIHtcbiAgICAgIGNvbnN0IHZhbHVlOiBBdWRpb0FjdGlvblJlc3BvbnNlID0ge1xuICAgICAgICB0eXBlOiAnYXVkaW8nLFxuICAgICAgICB2YWx1ZTogJ0F1ZGlvJyxcbiAgICAgICAgYXVkaW8sXG4gICAgICB9O1xuICAgICAgY2hhdEN0bC5zZXRBY3Rpb25SZXNwb25zZShhY3Rpb25SZXF1ZXN0LCB2YWx1ZSk7XG4gICAgICBzZXRBdWRpbyh1bmRlZmluZWQpO1xuICAgIH1cbiAgfSwgW2FjdGlvblJlcXVlc3QsIGF1ZGlvLCBjaGF0Q3RsXSk7XG5cbiAgY29uc3Qgc2VuZEJ1dHRvblRleHQgPSBhY3Rpb25SZXF1ZXN0LnNlbmRCdXR0b25UZXh0XG4gICAgPyBhY3Rpb25SZXF1ZXN0LnNlbmRCdXR0b25UZXh0XG4gICAgOiAnU2VuZCc7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBzeD17e1xuICAgICAgICBmbGV4OiAnMSAxIGF1dG8nLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICcmID4gKic6IHtcbiAgICAgICAgICBmbGV4OiAnMSAxIGF1dG8nLFxuICAgICAgICAgIG1pbldpZHRoOiAwLFxuICAgICAgICB9LFxuICAgICAgICAnJiA+ICogKyAqJzoge1xuICAgICAgICAgIG1sOiAxLFxuICAgICAgICB9LFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7c3RvcHBlZCAmJiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdGFydH1cbiAgICAgICAgICBkaXNhYmxlZD17IXN0b3BwZWR9XG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBzdGFydEljb249ezxJY29uPmtleWJvYXJkX3ZvaWNlPC9JY29uPn1cbiAgICAgICAgPlxuICAgICAgICAgIFJlYyBzdGFydFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICl9XG4gICAgICB7IXN0b3BwZWQgJiYgKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlU3RvcH1cbiAgICAgICAgICBkaXNhYmxlZD17c3RvcHBlZH1cbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIHN0YXJ0SWNvbj17PEljb24+c3RvcDwvSWNvbj59XG4gICAgICAgID5cbiAgICAgICAgICBSZWMgc3RvcFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICl9XG4gICAgICA8QnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBvbkNsaWNrPXtzZW5kUmVzcG9uc2V9XG4gICAgICAgIGRpc2FibGVkPXshYXVkaW99XG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICBzdGFydEljb249ezxJY29uPnNlbmQ8L0ljb24+fVxuICAgICAgPlxuICAgICAgICB7c2VuZEJ1dHRvblRleHR9XG4gICAgICA8L0J1dHRvbj5cbiAgICA8L0JveD5cbiAgKTtcbn1cbiIsInJlcXVpcmUoJy4uLy4uLy4uL21vZHVsZXMvZXMuYXJyYXkuY29uY2F0Jyk7XG52YXIgZW50cnlWaXJ0dWFsID0gcmVxdWlyZSgnLi4vLi4vLi4vaW50ZXJuYWxzL2VudHJ5LXZpcnR1YWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbnRyeVZpcnR1YWwoJ0FycmF5JykuY29uY2F0O1xuIiwidmFyIGNvbmNhdCA9IHJlcXVpcmUoJy4uL2FycmF5L3ZpcnR1YWwvY29uY2F0Jyk7XG5cbnZhciBBcnJheVByb3RvdHlwZSA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIG93biA9IGl0LmNvbmNhdDtcbiAgcmV0dXJuIGl0ID09PSBBcnJheVByb3RvdHlwZSB8fCAoaXQgaW5zdGFuY2VvZiBBcnJheSAmJiBvd24gPT09IEFycmF5UHJvdG90eXBlLmNvbmNhdCkgPyBjb25jYXQgOiBvd247XG59O1xuIiwidmFyIHBhcmVudCA9IHJlcXVpcmUoJy4uLy4uL2VzL2luc3RhbmNlL2NvbmNhdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcmVudDtcbiIsInZhciBwYXJlbnQgPSByZXF1aXJlKCcuLi8uLi9zdGFibGUvaW5zdGFuY2UvY29uY2F0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyZW50O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy1wdXJlL2ZlYXR1cmVzL2luc3RhbmNlL2NvbmNhdFwiKTsiLCJpbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvbixcbiAgRGl2aWRlcixcbiAgSWNvbixcbiAgTGlzdCxcbiAgTGlzdEl0ZW0sXG4gIExpc3RJdGVtSWNvbixcbiAgVHlwb2dyYXBoeSxcbn0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBDaGF0Q29udHJvbGxlciB9IGZyb20gJy4uL2NoYXQtY29udHJvbGxlcic7XG5pbXBvcnQgeyBGaWxlQWN0aW9uUmVxdWVzdCwgRmlsZUFjdGlvblJlc3BvbnNlIH0gZnJvbSAnLi4vY2hhdC10eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBNdWlGaWxlSW5wdXQoe1xuICBjaGF0Q29udHJvbGxlcixcbiAgYWN0aW9uUmVxdWVzdCxcbn06IHtcbiAgY2hhdENvbnRyb2xsZXI6IENoYXRDb250cm9sbGVyO1xuICBhY3Rpb25SZXF1ZXN0OiBGaWxlQWN0aW9uUmVxdWVzdDtcbn0pOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICBjb25zdCBjaGF0Q3RsID0gY2hhdENvbnRyb2xsZXI7XG4gIGNvbnN0IFtmaWxlcywgc2V0RmlsZXNdID0gUmVhY3QudXNlU3RhdGU8RmlsZVtdPihbXSk7XG5cbiAgY29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChmaWxlTGlzdDogRmlsZUxpc3QgfCBudWxsKTogdm9pZCA9PiB7XG4gICAgICAvLyBDb252ZXJ0IEZpbGVMaXN0IHRvIEZpbGVbXVxuICAgICAgY29uc3QgZmlsZUFycmF5OiBGaWxlW10gPSBbXTtcbiAgICAgIGlmIChmaWxlTGlzdCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVMaXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgY29uc3QgZmlsZSA9IGZpbGVMaXN0Lml0ZW0oaSk7XG4gICAgICAgICAgaWYgKGZpbGUpIHtcbiAgICAgICAgICAgIGZpbGVBcnJheS5wdXNoKGZpbGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2V0RmlsZXMoZmlsZUFycmF5KTtcbiAgICB9LFxuICAgIFtdLFxuICApO1xuXG4gIGNvbnN0IHNldFJlc3BvbnNlID0gUmVhY3QudXNlQ2FsbGJhY2soKCk6IHZvaWQgPT4ge1xuICAgIGlmIChmaWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGZpbGVzLm1hcCgoZikgPT4gZi5uYW1lKS50b1N0cmluZygpO1xuICAgICAgY29uc3QgcmVzOiBGaWxlQWN0aW9uUmVzcG9uc2UgPSB7IHR5cGU6ICdmaWxlJywgdmFsdWUsIGZpbGVzIH07XG4gICAgICBjaGF0Q3RsLnNldEFjdGlvblJlc3BvbnNlKGFjdGlvblJlcXVlc3QsIHJlcyk7XG4gICAgfVxuICB9LCBbYWN0aW9uUmVxdWVzdCwgY2hhdEN0bCwgZmlsZXNdKTtcblxuICBjb25zdCBzZW5kQnV0dG9uVGV4dCA9IGFjdGlvblJlcXVlc3Quc2VuZEJ1dHRvblRleHRcbiAgICA/IGFjdGlvblJlcXVlc3Quc2VuZEJ1dHRvblRleHRcbiAgICA6ICdTZW5kJztcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHN4PXt7XG4gICAgICAgIGZsZXg6ICcxIDEgYXV0bycsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICcmID4gKic6IHtcbiAgICAgICAgICBmbGV4OiAnMCAwIGF1dG8nLFxuICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIH0sXG4gICAgICAgICcmID4gKiArIConOiB7XG4gICAgICAgICAgbXQ6IDEsXG4gICAgICAgIH0sXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxMaXN0PlxuICAgICAgICB7ZmlsZXMubWFwKChmKSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2Ake2YubmFtZX0tJHtmLnNpemV9YH0+XG4gICAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgICAgPExpc3RJdGVtIGtleT17Zi5uYW1lfT5cbiAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICA8SWNvbj5hdHRhY2hfZmlsZTwvSWNvbj5cbiAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN0eWxlPXt7IG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnLCBtaW5XaWR0aDogMCB9fT5cbiAgICAgICAgICAgICAgICB7Zi5uYW1lfVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIHsvKiA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2YubmFtZX0gLz4gKi99XG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvTGlzdD5cbiAgICAgIDxCb3hcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgJyYgPiAqJzoge1xuICAgICAgICAgICAgZmxleDogJzEgMSBhdXRvJyxcbiAgICAgICAgICAgIG1pbldpZHRoOiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJyYgPiAqICsgKic6IHtcbiAgICAgICAgICAgIG1sOiAxLFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBkaXNhYmxlZD17ZmFsc2V9XG4gICAgICAgICAgY29tcG9uZW50PVwibGFiZWxcIlxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgc3RhcnRJY29uPXs8SWNvbj5mb2xkZXI8L0ljb24+fVxuICAgICAgICA+XG4gICAgICAgICAgU2VsZWN0IGZpbGVcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgIGFjY2VwdD17YWN0aW9uUmVxdWVzdC5hY2NlcHR9XG4gICAgICAgICAgICBtdWx0aXBsZT17YWN0aW9uUmVxdWVzdC5tdWx0aXBsZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk6IHZvaWQgPT4gaGFuZGxlRmlsZUNoYW5nZShlLnRhcmdldC5maWxlcyl9XG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIG9uQ2xpY2s9e3NldFJlc3BvbnNlfVxuICAgICAgICAgIGRpc2FibGVkPXtmaWxlcy5sZW5ndGggPT09IDB9XG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBzdGFydEljb249ezxJY29uPnNlbmQ8L0ljb24+fVxuICAgICAgICA+XG4gICAgICAgICAge3NlbmRCdXR0b25UZXh0fVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufVxuIiwiaW1wb3J0IHsgQXZhdGFyLCBCb3gsIEdyb3csIFR5cG9ncmFwaHkgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IE1lc3NhZ2UsIE1lc3NhZ2VDb250ZW50IH0gZnJvbSAnLi4vY2hhdC10eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBNdWlNZXNzYWdlKHtcbiAgaWQsXG4gIG1lc3NhZ2UsXG4gIHNob3dEYXRlLFxuICBzaG93VGltZSxcbn06IHtcbiAgaWQ6IHN0cmluZztcbiAgbWVzc2FnZTogTWVzc2FnZTxNZXNzYWdlQ29udGVudD47XG4gIHNob3dEYXRlOiBib29sZWFuO1xuICBzaG93VGltZTogYm9vbGVhbjtcbn0pOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICBpZiAobWVzc2FnZS5kZWxldGVkQXQpIHtcbiAgICByZXR1cm4gPGRpdiBpZD17aWR9IC8+O1xuICB9XG5cbiAgY29uc3QgZGlzcERhdGUgPSBtZXNzYWdlLnVwZGF0ZWRBdCA/IG1lc3NhZ2UudXBkYXRlZEF0IDogbWVzc2FnZS5jcmVhdGVkQXQ7XG5cbiAgY29uc3QgQ2hhdEF2YXRvciA9IChcbiAgICA8Qm94XG4gICAgICBtaW5XaWR0aD17MH1cbiAgICAgIGZsZXhTaHJpbms9ezB9XG4gICAgICBtbD17bWVzc2FnZS5zZWxmID8gMSA6IDB9XG4gICAgICBtcj17bWVzc2FnZS5zZWxmID8gMCA6IDF9XG4gICAgPlxuICAgICAgPEF2YXRhciBhbHQ9e21lc3NhZ2UudXNlcm5hbWV9IHNyYz17bWVzc2FnZS5hdmF0YXJ9IC8+XG4gICAgPC9Cb3g+XG4gICk7XG5cbiAgY29uc3QgQ2hhdFVzZXJuYW1lID0gKFxuICAgIDxCb3ggbWF4V2lkdGg9XCIxMDAlXCIgbXg9ezF9PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgYWxpZ249e21lc3NhZ2Uuc2VsZiA/ICdyaWdodCcgOiAnbGVmdCd9PlxuICAgICAgICB7bWVzc2FnZS51c2VybmFtZX1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICA8L0JveD5cbiAgKTtcblxuICBjb25zdCBDaGF0RGF0ZSA9IChcbiAgICA8Qm94IG1heFdpZHRoPVwiMTAwJVwiIG14PXsxfT5cbiAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXG4gICAgICAgIGFsaWduPXttZXNzYWdlLnNlbGYgPyAncmlnaHQnIDogJ2xlZnQnfVxuICAgICAgICBjb2xvcj1cInRleHRTZWNvbmRhcnlcIlxuICAgICAgPlxuICAgICAgICB7ZGlzcERhdGU/LnRvTG9jYWxlVGltZVN0cmluZyhbXSwge1xuICAgICAgICAgIGhvdXI6ICcyLWRpZ2l0JyxcbiAgICAgICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcbiAgICAgICAgfSl9XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgPC9Cb3g+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8R3JvdyBpbj5cbiAgICAgIDxCb3ggbWF4V2lkdGg9XCIxMDAlXCIgZGlzcGxheT1cImZsZXhcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgIHtzaG93RGF0ZSAmJiAoXG4gICAgICAgICAgPFR5cG9ncmFwaHkgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIHtkaXNwRGF0ZT8udG9Mb2NhbGVEYXRlU3RyaW5nKCl9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICApfVxuICAgICAgICA8Qm94XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIG1heFdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgbXk9ezF9XG4gICAgICAgICAgcGw9e21lc3NhZ2Uuc2VsZiA/ICcyMCUnIDogMH1cbiAgICAgICAgICBwcj17bWVzc2FnZS5zZWxmID8gMCA6ICcyMCUnfVxuICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD17bWVzc2FnZS5zZWxmID8gJ2ZsZXgtZW5kJyA6ICdmbGV4LXN0YXJ0J31cbiAgICAgICAgICBzdHlsZT17eyBvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJyB9fVxuICAgICAgICA+XG4gICAgICAgICAge21lc3NhZ2UuYXZhdGFyICYmICFtZXNzYWdlLnNlbGYgJiYgQ2hhdEF2YXRvcn1cbiAgICAgICAgICA8Qm94IG1pbldpZHRoPXswfSBkaXNwbGF5PVwiZmxleFwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIHttZXNzYWdlLnVzZXJuYW1lICYmIENoYXRVc2VybmFtZX1cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgbWF4V2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgcHk9ezF9XG4gICAgICAgICAgICAgIHB4PXsyfVxuICAgICAgICAgICAgICBiZ2NvbG9yPXttZXNzYWdlLnNlbGYgPyAncHJpbWFyeS5tYWluJyA6ICdiYWNrZ3JvdW5kLnBhcGVyJ31cbiAgICAgICAgICAgICAgY29sb3I9e21lc3NhZ2Uuc2VsZiA/ICdwcmltYXJ5LmNvbnRyYXN0VGV4dCcgOiAndGV4dC5wcmltYXJ5J31cbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPXs0fVxuICAgICAgICAgICAgICBib3hTaGFkb3c9ezJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHttZXNzYWdlLnR5cGUgPT09ICd0ZXh0JyAmJiAoXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgc3R5bGU9e3sgd2hpdGVTcGFjZTogJ3ByZS13cmFwJyB9fT5cbiAgICAgICAgICAgICAgICAgIHttZXNzYWdlLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7bWVzc2FnZS50eXBlID09PSAnanN4JyAmJiA8ZGl2PnttZXNzYWdlLmNvbnRlbnR9PC9kaXY+fVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICB7c2hvd1RpbWUgJiYgQ2hhdERhdGV9XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAge21lc3NhZ2UuYXZhdGFyICYmIG1lc3NhZ2Uuc2VsZiAmJiBDaGF0QXZhdG9yfVxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIDwvR3Jvdz5cbiAgKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRpbmNsdWRlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluY2x1ZGVzO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlIH0sIHtcbiAgaW5jbHVkZXM6IGZ1bmN0aW9uIGluY2x1ZGVzKGVsIC8qICwgZnJvbUluZGV4ID0gMCAqLykge1xuICAgIHJldHVybiAkaW5jbHVkZXModGhpcywgZWwsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcbmFkZFRvVW5zY29wYWJsZXMoJ2luY2x1ZGVzJyk7XG4iLCJyZXF1aXJlKCcuLi8uLi8uLi9tb2R1bGVzL2VzLmFycmF5LmluY2x1ZGVzJyk7XG52YXIgZW50cnlWaXJ0dWFsID0gcmVxdWlyZSgnLi4vLi4vLi4vaW50ZXJuYWxzL2VudHJ5LXZpcnR1YWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbnRyeVZpcnR1YWwoJ0FycmF5JykuaW5jbHVkZXM7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgTUFUQ0ggPSB3ZWxsS25vd25TeW1ib2woJ21hdGNoJyk7XG5cbi8vIGBJc1JlZ0V4cGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzcmVnZXhwXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgaXNSZWdFeHA7XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgKChpc1JlZ0V4cCA9IGl0W01BVENIXSkgIT09IHVuZGVmaW5lZCA/ICEhaXNSZWdFeHAgOiBjbGFzc29mKGl0KSA9PSAnUmVnRXhwJyk7XG59O1xuIiwidmFyIGlzUmVnRXhwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXJlZ2V4cCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNSZWdFeHAoaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFwiVGhlIG1ldGhvZCBkb2Vzbid0IGFjY2VwdCByZWd1bGFyIGV4cHJlc3Npb25zXCIpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJ2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBNQVRDSCA9IHdlbGxLbm93blN5bWJvbCgnbWF0Y2gnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUpIHtcbiAgdmFyIHJlZ2V4cCA9IC8uLztcbiAgdHJ5IHtcbiAgICAnLy4vJ1tNRVRIT0RfTkFNRV0ocmVnZXhwKTtcbiAgfSBjYXRjaCAoZXJyb3IxKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlZ2V4cFtNQVRDSF0gPSBmYWxzZTtcbiAgICAgIHJldHVybiAnLy4vJ1tNRVRIT0RfTkFNRV0ocmVnZXhwKTtcbiAgICB9IGNhdGNoIChlcnJvcjIpIHsgLyogZW1wdHkgKi8gfVxuICB9IHJldHVybiBmYWxzZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBub3RBUmVnRXhwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25vdC1hLXJlZ2V4cCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgY29ycmVjdElzUmVnRXhwTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29ycmVjdC1pcy1yZWdleHAtbG9naWMnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzXG4kKHsgdGFyZ2V0OiAnU3RyaW5nJywgcHJvdG86IHRydWUsIGZvcmNlZDogIWNvcnJlY3RJc1JlZ0V4cExvZ2ljKCdpbmNsdWRlcycpIH0sIHtcbiAgaW5jbHVkZXM6IGZ1bmN0aW9uIGluY2x1ZGVzKHNlYXJjaFN0cmluZyAvKiAsIHBvc2l0aW9uID0gMCAqLykge1xuICAgIHJldHVybiAhIX50b1N0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpKVxuICAgICAgLmluZGV4T2YodG9TdHJpbmcobm90QVJlZ0V4cChzZWFyY2hTdHJpbmcpKSwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsInJlcXVpcmUoJy4uLy4uLy4uL21vZHVsZXMvZXMuc3RyaW5nLmluY2x1ZGVzJyk7XG52YXIgZW50cnlWaXJ0dWFsID0gcmVxdWlyZSgnLi4vLi4vLi4vaW50ZXJuYWxzL2VudHJ5LXZpcnR1YWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbnRyeVZpcnR1YWwoJ1N0cmluZycpLmluY2x1ZGVzO1xuIiwidmFyIGFycmF5SW5jbHVkZXMgPSByZXF1aXJlKCcuLi9hcnJheS92aXJ0dWFsL2luY2x1ZGVzJyk7XG52YXIgc3RyaW5nSW5jbHVkZXMgPSByZXF1aXJlKCcuLi9zdHJpbmcvdmlydHVhbC9pbmNsdWRlcycpO1xuXG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG52YXIgU3RyaW5nUHJvdG90eXBlID0gU3RyaW5nLnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIG93biA9IGl0LmluY2x1ZGVzO1xuICBpZiAoaXQgPT09IEFycmF5UHJvdG90eXBlIHx8IChpdCBpbnN0YW5jZW9mIEFycmF5ICYmIG93biA9PT0gQXJyYXlQcm90b3R5cGUuaW5jbHVkZXMpKSByZXR1cm4gYXJyYXlJbmNsdWRlcztcbiAgaWYgKHR5cGVvZiBpdCA9PT0gJ3N0cmluZycgfHwgaXQgPT09IFN0cmluZ1Byb3RvdHlwZSB8fCAoaXQgaW5zdGFuY2VvZiBTdHJpbmcgJiYgb3duID09PSBTdHJpbmdQcm90b3R5cGUuaW5jbHVkZXMpKSB7XG4gICAgcmV0dXJuIHN0cmluZ0luY2x1ZGVzO1xuICB9IHJldHVybiBvd247XG59O1xuIiwidmFyIHBhcmVudCA9IHJlcXVpcmUoJy4uLy4uL2VzL2luc3RhbmNlL2luY2x1ZGVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyZW50O1xuIiwidmFyIHBhcmVudCA9IHJlcXVpcmUoJy4uLy4uL3N0YWJsZS9pbnN0YW5jZS9pbmNsdWRlcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcmVudDtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMtcHVyZS9mZWF0dXJlcy9pbnN0YW5jZS9pbmNsdWRlc1wiKTsiLCJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgSWNvbiB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ2hhdENvbnRyb2xsZXIgfSBmcm9tICcuLi9jaGF0LWNvbnRyb2xsZXInO1xuaW1wb3J0IHtcbiAgTXVsdGlTZWxlY3RBY3Rpb25SZXF1ZXN0LFxuICBNdWx0aVNlbGVjdEFjdGlvblJlc3BvbnNlLFxufSBmcm9tICcuLi9jaGF0LXR5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIE11aU11bHRpU2VsZWN0SW5wdXQoe1xuICBjaGF0Q29udHJvbGxlcixcbiAgYWN0aW9uUmVxdWVzdCxcbn06IHtcbiAgY2hhdENvbnRyb2xsZXI6IENoYXRDb250cm9sbGVyO1xuICBhY3Rpb25SZXF1ZXN0OiBNdWx0aVNlbGVjdEFjdGlvblJlcXVlc3Q7XG59KTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgY29uc3QgY2hhdEN0bCA9IGNoYXRDb250cm9sbGVyO1xuICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcblxuICBjb25zdCBoYW5kbGVTZWxlY3QgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAodmFsdWU6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgICAgaWYgKCF2YWx1ZXMuaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICAgIHNldFZhbHVlcyhbLi4udmFsdWVzLCB2YWx1ZV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VmFsdWVzKHZhbHVlcy5maWx0ZXIoKHYpID0+IHYgIT09IHZhbHVlKSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbdmFsdWVzXSxcbiAgKTtcblxuICBjb25zdCBzZXRSZXNwb25zZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpOiB2b2lkID0+IHtcbiAgICBjb25zdCBvcHRpb25zID0gYWN0aW9uUmVxdWVzdC5vcHRpb25zLmZpbHRlcigobykgPT5cbiAgICAgIHZhbHVlcy5pbmNsdWRlcyhvLnZhbHVlKSxcbiAgICApO1xuXG4gICAgY29uc3QgcmVzOiBNdWx0aVNlbGVjdEFjdGlvblJlc3BvbnNlID0ge1xuICAgICAgdHlwZTogJ211bHRpLXNlbGVjdCcsXG4gICAgICB2YWx1ZTogb3B0aW9ucy5tYXAoKG8pID0+IG8udGV4dCkudG9TdHJpbmcoKSxcbiAgICAgIG9wdGlvbnMsXG4gICAgfTtcbiAgICBjaGF0Q3RsLnNldEFjdGlvblJlc3BvbnNlKGFjdGlvblJlcXVlc3QsIHJlcyk7XG4gICAgc2V0VmFsdWVzKFtdKTtcbiAgfSwgW2FjdGlvblJlcXVlc3QsIGNoYXRDdGwsIHZhbHVlc10pO1xuXG4gIGNvbnN0IHNlbmRCdXR0b25UZXh0ID0gYWN0aW9uUmVxdWVzdC5zZW5kQnV0dG9uVGV4dFxuICAgID8gYWN0aW9uUmVxdWVzdC5zZW5kQnV0dG9uVGV4dFxuICAgIDogJ1NlbmQnO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgc3g9e3tcbiAgICAgICAgZmxleDogJzEgMSBhdXRvJyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgJyYgPiAqJzoge1xuICAgICAgICAgIGZsZXg6ICcwIDAgYXV0bycsXG4gICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgfSxcbiAgICAgICAgJyYgPiAqICsgKic6IHtcbiAgICAgICAgICBtdDogMSxcbiAgICAgICAgfSxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2FjdGlvblJlcXVlc3Qub3B0aW9ucy5tYXAoKG8pID0+IChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGtleT17YWN0aW9uUmVxdWVzdC5vcHRpb25zLmluZGV4T2Yobyl9XG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgdmFsdWU9e28udmFsdWV9XG4gICAgICAgICAgb25DbGljaz17KGUpOiB2b2lkID0+IGhhbmRsZVNlbGVjdChlLmN1cnJlbnRUYXJnZXQudmFsdWUpfVxuICAgICAgICAgIHZhcmlhbnQ9eyF2YWx1ZXMuaW5jbHVkZXMoby52YWx1ZSkgPyAnb3V0bGluZWQnIDogJ2NvbnRhaW5lZCd9XG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgPlxuICAgICAgICAgIHtvLnRleHR9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKSl9XG4gICAgICA8QnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBvbkNsaWNrPXtzZXRSZXNwb25zZX1cbiAgICAgICAgZGlzYWJsZWQ9e3ZhbHVlcy5sZW5ndGggPT09IDB9XG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICBzdGFydEljb249ezxJY29uPnNlbmQ8L0ljb24+fVxuICAgICAgPlxuICAgICAgICB7c2VuZEJ1dHRvblRleHR9XG4gICAgICA8L0J1dHRvbj5cbiAgICA8L0JveD5cbiAgKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRmaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbmQ7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcblxudmFyIEZJTkQgPSAnZmluZCc7XG52YXIgU0tJUFNfSE9MRVMgPSB0cnVlO1xuXG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuaWYgKEZJTkQgaW4gW10pIEFycmF5KDEpW0ZJTkRdKGZ1bmN0aW9uICgpIHsgU0tJUFNfSE9MRVMgPSBmYWxzZTsgfSk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmluZGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBTS0lQU19IT0xFUyB9LCB7XG4gIGZpbmQ6IGZ1bmN0aW9uIGZpbmQoY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuYWRkVG9VbnNjb3BhYmxlcyhGSU5EKTtcbiIsInJlcXVpcmUoJy4uLy4uLy4uL21vZHVsZXMvZXMuYXJyYXkuZmluZCcpO1xudmFyIGVudHJ5VmlydHVhbCA9IHJlcXVpcmUoJy4uLy4uLy4uL2ludGVybmFscy9lbnRyeS12aXJ0dWFsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZW50cnlWaXJ0dWFsKCdBcnJheScpLmZpbmQ7XG4iLCJ2YXIgZmluZCA9IHJlcXVpcmUoJy4uL2FycmF5L3ZpcnR1YWwvZmluZCcpO1xuXG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBvd24gPSBpdC5maW5kO1xuICByZXR1cm4gaXQgPT09IEFycmF5UHJvdG90eXBlIHx8IChpdCBpbnN0YW5jZW9mIEFycmF5ICYmIG93biA9PT0gQXJyYXlQcm90b3R5cGUuZmluZCkgPyBmaW5kIDogb3duO1xufTtcbiIsInZhciBwYXJlbnQgPSByZXF1aXJlKCcuLi8uLi9lcy9pbnN0YW5jZS9maW5kJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyZW50O1xuIiwidmFyIHBhcmVudCA9IHJlcXVpcmUoJy4uLy4uL3N0YWJsZS9pbnN0YW5jZS9maW5kJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyZW50O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy1wdXJlL2ZlYXR1cmVzL2luc3RhbmNlL2ZpbmRcIik7IiwiaW1wb3J0IHsgQm94LCBCdXR0b24gfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENoYXRDb250cm9sbGVyIH0gZnJvbSAnLi4vY2hhdC1jb250cm9sbGVyJztcbmltcG9ydCB7IFNlbGVjdEFjdGlvblJlcXVlc3QsIFNlbGVjdEFjdGlvblJlc3BvbnNlIH0gZnJvbSAnLi4vY2hhdC10eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBNdWlTZWxlY3RJbnB1dCh7XG4gIGNoYXRDb250cm9sbGVyLFxuICBhY3Rpb25SZXF1ZXN0LFxufToge1xuICBjaGF0Q29udHJvbGxlcjogQ2hhdENvbnRyb2xsZXI7XG4gIGFjdGlvblJlcXVlc3Q6IFNlbGVjdEFjdGlvblJlcXVlc3Q7XG59KTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgY29uc3QgY2hhdEN0bCA9IGNoYXRDb250cm9sbGVyO1xuXG4gIGNvbnN0IHNldFJlc3BvbnNlID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKHZhbHVlOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGFjdGlvblJlcXVlc3Qub3B0aW9ucy5maW5kKChvKSA9PiBvLnZhbHVlID09PSB2YWx1ZSk7XG4gICAgICBpZiAoIW9wdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gdmFsdWU6ICR7dmFsdWV9YCk7XG4gICAgICB9XG4gICAgICBjb25zdCByZXM6IFNlbGVjdEFjdGlvblJlc3BvbnNlID0ge1xuICAgICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgICAgdmFsdWU6IG9wdGlvbi50ZXh0LFxuICAgICAgICBvcHRpb24sXG4gICAgICB9O1xuICAgICAgY2hhdEN0bC5zZXRBY3Rpb25SZXNwb25zZShhY3Rpb25SZXF1ZXN0LCByZXMpO1xuICAgIH0sXG4gICAgW2FjdGlvblJlcXVlc3QsIGNoYXRDdGxdLFxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgc3g9e3tcbiAgICAgICAgZmxleDogJzEgMSBhdXRvJyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgJyYgPiAqJzoge1xuICAgICAgICAgIGZsZXg6ICcwIDAgYXV0bycsXG4gICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgfSxcbiAgICAgICAgJyYgPiAqICsgKic6IHtcbiAgICAgICAgICBtdDogMSxcbiAgICAgICAgfSxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2FjdGlvblJlcXVlc3Qub3B0aW9ucy5tYXAoKG8pID0+IChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGtleT17YWN0aW9uUmVxdWVzdC5vcHRpb25zLmluZGV4T2Yobyl9XG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgdmFsdWU9e28udmFsdWV9XG4gICAgICAgICAgb25DbGljaz17KGUpOiB2b2lkID0+IHNldFJlc3BvbnNlKGUuY3VycmVudFRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgPlxuICAgICAgICAgIHtvLnRleHR9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKSl9XG4gICAgPC9Cb3g+XG4gICk7XG59XG4iLCJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgSWNvbiwgVGV4dEZpZWxkIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBDaGF0Q29udHJvbGxlciB9IGZyb20gJy4uL2NoYXQtY29udHJvbGxlcic7XG5pbXBvcnQgeyBUZXh0QWN0aW9uUmVxdWVzdCwgVGV4dEFjdGlvblJlc3BvbnNlIH0gZnJvbSAnLi4vY2hhdC10eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBNdWlUZXh0SW5wdXQoe1xuICBjaGF0Q29udHJvbGxlcixcbiAgYWN0aW9uUmVxdWVzdCxcbn06IHtcbiAgY2hhdENvbnRyb2xsZXI6IENoYXRDb250cm9sbGVyO1xuICBhY3Rpb25SZXF1ZXN0OiBUZXh0QWN0aW9uUmVxdWVzdDtcbn0pOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICBjb25zdCBjaGF0Q3RsID0gY2hhdENvbnRyb2xsZXI7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoYWN0aW9uUmVxdWVzdC5kZWZhdWx0VmFsdWUpO1xuXG4gIGNvbnN0IHNldFJlc3BvbnNlID0gUmVhY3QudXNlQ2FsbGJhY2soKCk6IHZvaWQgPT4ge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgY29uc3QgcmVzOiBUZXh0QWN0aW9uUmVzcG9uc2UgPSB7IHR5cGU6ICd0ZXh0JywgdmFsdWUgfTtcbiAgICAgIGNoYXRDdGwuc2V0QWN0aW9uUmVzcG9uc2UoYWN0aW9uUmVxdWVzdCwgcmVzKTtcbiAgICAgIHNldFZhbHVlKCcnKTtcbiAgICB9XG4gIH0sIFthY3Rpb25SZXF1ZXN0LCBjaGF0Q3RsLCB2YWx1ZV0pO1xuXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50Pik6IHZvaWQgPT4ge1xuICAgICAgaWYgKGUubmF0aXZlRXZlbnQuaXNDb21wb3NpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicgJiYgIWUuc2hpZnRLZXkpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXRSZXNwb25zZSgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgW3NldFJlc3BvbnNlXSxcbiAgKTtcblxuICBjb25zdCBzZW5kQnV0dG9uVGV4dCA9IGFjdGlvblJlcXVlc3Quc2VuZEJ1dHRvblRleHRcbiAgICA/IGFjdGlvblJlcXVlc3Quc2VuZEJ1dHRvblRleHRcbiAgICA6ICdTZW5kJztcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHN4PXt7XG4gICAgICAgIGZsZXg6ICcxIDEgYXV0bycsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgJyYgPiAqJzoge1xuICAgICAgICAgIGZsZXg6ICcxIDEgYXV0bycsXG4gICAgICAgICAgbWluV2lkdGg6IDAsXG4gICAgICAgIH0sXG4gICAgICAgICcmID4gKiArIConOiB7XG4gICAgICAgICAgbWw6IDEsXG4gICAgICAgIH0sXG4gICAgICAgICcmIDpsYXN0LWNoaWxkJzoge1xuICAgICAgICAgIGZsZXg6ICcwIDEgYXV0bycsXG4gICAgICAgIH0sXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgcGxhY2Vob2xkZXI9e2FjdGlvblJlcXVlc3QucGxhY2Vob2xkZXJ9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKTogdm9pZCA9PiBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICBtdWx0aWxpbmVcbiAgICAgICAgaW5wdXRQcm9wcz17eyBvbktleURvd246IGhhbmRsZUtleURvd24gfX1cbiAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgbWF4Um93cz17MTB9XG4gICAgICAvPlxuICAgICAgPEJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgb25DbGljaz17c2V0UmVzcG9uc2V9XG4gICAgICAgIGRpc2FibGVkPXshdmFsdWV9XG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICBzdGFydEljb249ezxJY29uPnNlbmQ8L0ljb24+fVxuICAgICAgPlxuICAgICAgICB7c2VuZEJ1dHRvblRleHR9XG4gICAgICA8L0J1dHRvbj5cbiAgICA8L0JveD5cbiAgKTtcbn1cbiIsImltcG9ydCB7IEJveCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENoYXRDb250cm9sbGVyIH0gZnJvbSAnLi4vY2hhdC1jb250cm9sbGVyJztcbmltcG9ydCB7XG4gIEFjdGlvblJlcXVlc3QsXG4gIEF1ZGlvQWN0aW9uUmVxdWVzdCxcbiAgQ3VzdG9tQWN0aW9uUmVxdWVzdCxcbiAgRmlsZUFjdGlvblJlcXVlc3QsXG4gIE11bHRpU2VsZWN0QWN0aW9uUmVxdWVzdCxcbiAgU2VsZWN0QWN0aW9uUmVxdWVzdCxcbiAgVGV4dEFjdGlvblJlcXVlc3QsXG59IGZyb20gJy4uL2NoYXQtdHlwZXMnO1xuXG5pbXBvcnQgeyBNdWlBdWRpb0lucHV0IH0gZnJvbSAnLi9NdWlBdWRpb0lucHV0JztcbmltcG9ydCB7IE11aUZpbGVJbnB1dCB9IGZyb20gJy4vTXVpRmlsZUlucHV0JztcbmltcG9ydCB7IE11aU1lc3NhZ2UgfSBmcm9tICcuL011aU1lc3NhZ2UnO1xuaW1wb3J0IHsgTXVpTXVsdGlTZWxlY3RJbnB1dCB9IGZyb20gJy4vTXVpTXVsdGlTZWxlY3RJbnB1dCc7XG5pbXBvcnQgeyBNdWlTZWxlY3RJbnB1dCB9IGZyb20gJy4vTXVpU2VsZWN0SW5wdXQnO1xuaW1wb3J0IHsgTXVpVGV4dElucHV0IH0gZnJvbSAnLi9NdWlUZXh0SW5wdXQnO1xuXG5leHBvcnQgZnVuY3Rpb24gTXVpQ2hhdCh7XG4gIGNoYXRDb250cm9sbGVyLFxufTogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48e1xuICBjaGF0Q29udHJvbGxlcjogQ2hhdENvbnRyb2xsZXI7XG59Pik6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IGNoYXRDdGwgPSBjaGF0Q29udHJvbGxlcjtcbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSBSZWFjdC51c2VTdGF0ZShjaGF0Q3RsLmdldE1lc3NhZ2VzKCkpO1xuICBjb25zdCBbYWN0UmVxLCBzZXRBY3RSZXFdID0gUmVhY3QudXNlU3RhdGUoY2hhdEN0bC5nZXRBY3Rpb25SZXF1ZXN0KCkpO1xuXG4gIGNvbnN0IG1zZ1JlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IHNjcm9sbCA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpOiB2b2lkID0+IHtcbiAgICBpZiAobXNnUmVmLmN1cnJlbnQpIHtcbiAgICAgIG1zZ1JlZi5jdXJyZW50LnNjcm9sbFRvcCA9IG1zZ1JlZi5jdXJyZW50LnNjcm9sbEhlaWdodDtcbiAgICAgIC8vIG1zZ1JlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHRydWUpO1xuICAgIH1cbiAgfSwgW21zZ1JlZl0pO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGhhbmRsZU1hc3NhZ2VzQ2hhbmdlZCgpOiB2b2lkIHtcbiAgICAgIHNldE1lc3NhZ2VzKFsuLi5jaGF0Q3RsLmdldE1lc3NhZ2VzKCldKTtcbiAgICAgIHNjcm9sbCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVBY3Rpb25DaGFuZ2VkKCk6IHZvaWQge1xuICAgICAgc2V0QWN0UmVxKGNoYXRDdGwuZ2V0QWN0aW9uUmVxdWVzdCgpKTtcbiAgICAgIHNjcm9sbCgpO1xuICAgIH1cbiAgICBjaGF0Q3RsLmFkZE9uTWVzc2FnZXNDaGFuZ2VkKGhhbmRsZU1hc3NhZ2VzQ2hhbmdlZCk7XG4gICAgY2hhdEN0bC5hZGRPbkFjdGlvbkNoYW5nZWQoaGFuZGxlQWN0aW9uQ2hhbmdlZCk7XG4gIH0sIFtjaGF0Q3RsLCBzY3JvbGxdKTtcblxuICB0eXBlIEN1c3RvbUNvbXBvbmVudFR5cGUgPSBSZWFjdC5GQzx7XG4gICAgY2hhdENvbnRyb2xsZXI6IENoYXRDb250cm9sbGVyO1xuICAgIGFjdGlvblJlcXVlc3Q6IEFjdGlvblJlcXVlc3Q7XG4gIH0+O1xuICBjb25zdCBDdXN0b21Db21wb25lbnQgPSBSZWFjdC51c2VNZW1vKCgpOiBDdXN0b21Db21wb25lbnRUeXBlID0+IHtcbiAgICBpZiAoIWFjdFJlcSB8fCBhY3RSZXEudHlwZSAhPT0gJ2N1c3RvbScpIHtcbiAgICAgIHJldHVybiBudWxsIGFzIHVua25vd24gYXMgQ3VzdG9tQ29tcG9uZW50VHlwZTtcbiAgICB9XG4gICAgcmV0dXJuIChhY3RSZXEgYXMgQ3VzdG9tQWN0aW9uUmVxdWVzdClcbiAgICAgIC5Db21wb25lbnQgYXMgdW5rbm93biBhcyBDdXN0b21Db21wb25lbnRUeXBlO1xuICB9LCBbYWN0UmVxXSk7XG5cbiAgY29uc3QgdW5rbm93bk1zZyA9IHtcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgY29udGVudDogJ1Vua25vd24gbWVzc2FnZS4nLFxuICAgIHNlbGY6IGZhbHNlLFxuICB9O1xuXG4gIGxldCBwcmV2RGF0ZSA9IGRheWpzKDApO1xuICBsZXQgcHJldlRpbWUgPSBkYXlqcygwKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHN4PXt7XG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBwOiAxLFxuICAgICAgICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5kZWZhdWx0JyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgJyYgPiAqJzoge1xuICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIH0sXG4gICAgICAgICcmID4gKiArIConOiB7XG4gICAgICAgICAgbXQ6IDEsXG4gICAgICAgIH0sXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxCb3hcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBmbGV4OiAnMSAxIDAlJyxcbiAgICAgICAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICAgICAgICBXZWJraXRPdmVyZmxvd1Njcm9sbGluZzogJ3RvdWNoJyxcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgJyYgPiAqJzoge1xuICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgICByZWY9e21zZ1JlZn1cbiAgICAgID5cbiAgICAgICAge21lc3NhZ2VzLm1hcCgobXNnKTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcbiAgICAgICAgICBsZXQgc2hvd0RhdGUgPSBmYWxzZTtcbiAgICAgICAgICBsZXQgc2hvd1RpbWUgPSAhIWNoYXRDdGwuZ2V0T3B0aW9uKCkuc2hvd0RhdGVUaW1lO1xuICAgICAgICAgIGlmICghIWNoYXRDdGwuZ2V0T3B0aW9uKCkuc2hvd0RhdGVUaW1lICYmICFtc2cuZGVsZXRlZEF0KSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gZGF5anMoXG4gICAgICAgICAgICAgIG1zZy51cGRhdGVkQXQgPyBtc2cudXBkYXRlZEF0IDogbXNnLmNyZWF0ZWRBdCxcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50LmZvcm1hdCgnWVlZWU1NREQnKSAhPT0gcHJldkRhdGUuZm9ybWF0KCdZWVlZTU1ERCcpKSB7XG4gICAgICAgICAgICAgIHNob3dEYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByZXZEYXRlID0gY3VycmVudDtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnQuZGlmZihwcmV2VGltZSkgPCA2MF8wMDApIHtcbiAgICAgICAgICAgICAgc2hvd1RpbWUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHByZXZUaW1lID0gY3VycmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG1zZy50eXBlID09PSAndGV4dCcgfHwgbXNnLnR5cGUgPT09ICdqc3gnKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8TXVpTWVzc2FnZVxuICAgICAgICAgICAgICAgIGtleT17bWVzc2FnZXMuaW5kZXhPZihtc2cpfVxuICAgICAgICAgICAgICAgIGlkPXtgY3UtbXNnLSR7bWVzc2FnZXMuaW5kZXhPZihtc2cpICsgMX1gfVxuICAgICAgICAgICAgICAgIG1lc3NhZ2U9e21zZ31cbiAgICAgICAgICAgICAgICBzaG93RGF0ZT17c2hvd0RhdGV9XG4gICAgICAgICAgICAgICAgc2hvd1RpbWU9e3Nob3dUaW1lfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNdWlNZXNzYWdlXG4gICAgICAgICAgICAgIGtleT17bWVzc2FnZXMuaW5kZXhPZihtc2cpfVxuICAgICAgICAgICAgICBpZD17YGN1LW1zZy0ke21lc3NhZ2VzLmluZGV4T2YobXNnKSArIDF9YH1cbiAgICAgICAgICAgICAgbWVzc2FnZT17dW5rbm93bk1zZ31cbiAgICAgICAgICAgICAgc2hvd0RhdGU9e3Nob3dEYXRlfVxuICAgICAgICAgICAgICBzaG93VGltZT17c2hvd1RpbWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9Cb3g+XG4gICAgICA8Qm94XG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgZmxleDogJzAgMSBhdXRvJyxcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgYWxpZ25Db250ZW50OiAnZmxleC1lbmQnLFxuICAgICAgICAgICcmID4gKic6IHtcbiAgICAgICAgICAgIG1pbldpZHRoOiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHthY3RSZXEgJiYgYWN0UmVxLnR5cGUgPT09ICd0ZXh0JyAmJiAoXG4gICAgICAgICAgPE11aVRleHRJbnB1dFxuICAgICAgICAgICAgY2hhdENvbnRyb2xsZXI9e2NoYXRDdGx9XG4gICAgICAgICAgICBhY3Rpb25SZXF1ZXN0PXthY3RSZXEgYXMgVGV4dEFjdGlvblJlcXVlc3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge2FjdFJlcSAmJiBhY3RSZXEudHlwZSA9PT0gJ3NlbGVjdCcgJiYgKFxuICAgICAgICAgIDxNdWlTZWxlY3RJbnB1dFxuICAgICAgICAgICAgY2hhdENvbnRyb2xsZXI9e2NoYXRDdGx9XG4gICAgICAgICAgICBhY3Rpb25SZXF1ZXN0PXthY3RSZXEgYXMgU2VsZWN0QWN0aW9uUmVxdWVzdH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7YWN0UmVxICYmIGFjdFJlcS50eXBlID09PSAnbXVsdGktc2VsZWN0JyAmJiAoXG4gICAgICAgICAgPE11aU11bHRpU2VsZWN0SW5wdXRcbiAgICAgICAgICAgIGNoYXRDb250cm9sbGVyPXtjaGF0Q3RsfVxuICAgICAgICAgICAgYWN0aW9uUmVxdWVzdD17YWN0UmVxIGFzIE11bHRpU2VsZWN0QWN0aW9uUmVxdWVzdH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7YWN0UmVxICYmIGFjdFJlcS50eXBlID09PSAnZmlsZScgJiYgKFxuICAgICAgICAgIDxNdWlGaWxlSW5wdXRcbiAgICAgICAgICAgIGNoYXRDb250cm9sbGVyPXtjaGF0Q3RsfVxuICAgICAgICAgICAgYWN0aW9uUmVxdWVzdD17YWN0UmVxIGFzIEZpbGVBY3Rpb25SZXF1ZXN0fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHthY3RSZXEgJiYgYWN0UmVxLnR5cGUgPT09ICdhdWRpbycgJiYgKFxuICAgICAgICAgIDxNdWlBdWRpb0lucHV0XG4gICAgICAgICAgICBjaGF0Q29udHJvbGxlcj17Y2hhdEN0bH1cbiAgICAgICAgICAgIGFjdGlvblJlcXVlc3Q9e2FjdFJlcSBhcyBBdWRpb0FjdGlvblJlcXVlc3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge2FjdFJlcSAmJiBhY3RSZXEudHlwZSA9PT0gJ2N1c3RvbScgJiYgKFxuICAgICAgICAgIDxDdXN0b21Db21wb25lbnRcbiAgICAgICAgICAgIGNoYXRDb250cm9sbGVyPXtjaGF0Q3RsfVxuICAgICAgICAgICAgYWN0aW9uUmVxdWVzdD17YWN0UmVxIGFzIEN1c3RvbUFjdGlvblJlcXVlc3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufVxuIl0sIm5hbWVzIjpbImdsb2JhbCIsImZhaWxzIiwicmVxdWlyZSQkMCIsIiRwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciIsInRvU3RyaW5nIiwiY2xhc3NvZlJhdyIsImNsYXNzb2YiLCJyZXF1aXJlJCQxIiwicmVxdWlyZU9iamVjdENvZXJjaWJsZSIsIkluZGV4ZWRPYmplY3QiLCJ0b0luZGV4ZWRPYmplY3QiLCJpc09iamVjdCIsInBhdGgiLCJhRnVuY3Rpb24iLCJnZXRCdWlsdEluIiwidXNlckFnZW50IiwicHJvY2VzcyIsIlY4X1ZFUlNJT04iLCJOQVRJVkVfU1lNQk9MIiwiVVNFX1NZTUJPTF9BU19VSUQiLCJpc1N5bWJvbCIsIm9yZGluYXJ5VG9QcmltaXRpdmUiLCJzZXRHbG9iYWwiLCJzdG9yZSIsInNoYXJlZE1vZHVsZSIsInRvT2JqZWN0IiwiaGFzIiwidWlkIiwic2hhcmVkIiwicmVxdWlyZSQkMiIsInJlcXVpcmUkJDMiLCJyZXF1aXJlJCQ0IiwicmVxdWlyZSQkNSIsIldlbGxLbm93blN5bWJvbHNTdG9yZSIsIlN5bWJvbCIsIndlbGxLbm93blN5bWJvbCIsIlRPX1BSSU1JVElWRSIsInRvUHJpbWl0aXZlIiwidG9Qcm9wZXJ0eUtleSIsImRvY3VtZW50IiwiZG9jdW1lbnRDcmVhdGVFbGVtZW50IiwiREVTQ1JJUFRPUlMiLCJjcmVhdGVFbGVtZW50IiwicHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUiLCJJRThfRE9NX0RFRklORSIsInJlcXVpcmUkJDYiLCIkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiaXNGb3JjZWQiLCJhbk9iamVjdCIsIiRkZWZpbmVQcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5TW9kdWxlIiwiY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5IiwiYmluZCIsImtleXMiLCJzaGFyZWRLZXkiLCJJRV9QUk9UTyIsIk9iamVjdFByb3RvdHlwZSIsImFQb3NzaWJsZVByb3RvdHlwZSIsInRvSW50ZWdlciIsIm1pbiIsInRvTGVuZ3RoIiwibWF4IiwidG9BYnNvbHV0ZUluZGV4IiwiY3JlYXRlTWV0aG9kIiwiYXJyYXlJbmNsdWRlcyIsImhpZGRlbktleXMiLCJpbmRleE9mIiwiZW51bUJ1Z0tleXMiLCJpbnRlcm5hbE9iamVjdEtleXMiLCJvYmplY3RLZXlzIiwiaHRtbCIsImRlZmluZVByb3BlcnRpZXMiLCJQUk9UT1RZUEUiLCJJdGVyYXRvcnMiLCJJVEVSQVRPUiIsIkFycmF5UHJvdG90eXBlIiwiaXNBcnJheUl0ZXJhdG9yTWV0aG9kIiwiVE9fU1RSSU5HX1RBRyIsIlRPX1NUUklOR19UQUdfU1VQUE9SVCIsImdldEl0ZXJhdG9yTWV0aG9kIiwiZ2V0SXRlcmF0b3IiLCJpdGVyYXRvckNsb3NlIiwiaXRlcmF0ZSIsIiQiLCJnZXRQcm90b3R5cGVPZiIsImNyZWF0ZSIsInJlcXVpcmUkJDciLCJpbnNwZWN0U291cmNlIiwiV2Vha01hcCIsInNldCIsIkJVR0dZX1NBRkFSSV9JVEVSQVRPUlMiLCJJdGVyYXRvclByb3RvdHlwZSIsImRlZmluZVByb3BlcnR5Iiwic2V0VG9TdHJpbmdUYWciLCJyZXR1cm5UaGlzIiwiY3JlYXRlSXRlcmF0b3JDb25zdHJ1Y3RvciIsInJlZGVmaW5lIiwicmVxdWlyZSQkOSIsInJlcXVpcmUkJDEwIiwiZGVmaW5lSXRlcmF0b3IiLCJJbnRlcm5hbFN0YXRlTW9kdWxlIiwic2V0SW50ZXJuYWxTdGF0ZSIsImdldEludGVybmFsU3RhdGUiLCJyZWRlZmluZUFsbCIsIlNQRUNJRVMiLCJzZXRTcGVjaWVzIiwiYW5JbnN0YW5jZSIsImNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbiIsInNwZWNpZXNDb25zdHJ1Y3RvciIsIklTX0lPUyIsIklTX05PREUiLCJ0YXNrIiwiUHJvbWlzZSIsIm5vdGlmeSIsInByb21pc2UiLCJtaWNyb3Rhc2siLCJuZXdQcm9taXNlQ2FwYWJpbGl0eSIsInByb21pc2VSZXNvbHZlIiwiaG9zdFJlcG9ydEVycm9ycyIsInBlcmZvcm0iLCJOYXRpdmVQcm9taXNlIiwicmVxdWlyZSQkOCIsInJlcXVpcmUkJDExIiwicmVxdWlyZSQkMTIiLCJyZXF1aXJlJCQxMyIsInJlcXVpcmUkJDE0IiwicmVxdWlyZSQkMTUiLCJyZXF1aXJlJCQxNiIsInJlcXVpcmUkJDE3IiwicmVxdWlyZSQkMTgiLCJyZXF1aXJlJCQxOSIsInJlcXVpcmUkJDIwIiwibmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUiLCJyZXF1aXJlJCQyMSIsInJlcXVpcmUkJDIyIiwicmVxdWlyZSQkMjMiLCJyZXF1aXJlJCQyNCIsInJlcXVpcmUkJDI1IiwicmVxdWlyZSQkMjYiLCJyZXF1aXJlJCQyNyIsInJlcXVpcmUkJDI4IiwiVHlwZUVycm9yIiwiRk9SQ0VEIiwiSU5DT1JSRUNUX0lURVJBVElPTiIsIkRPTUl0ZXJhYmxlcyIsInBhcmVudCIsIl9Qcm9taXNlIiwiaXNBcnJheSIsIl9BcnJheSRpc0FycmF5IiwiYXJyYXlMaWtlVG9BcnJheSIsImNyZWF0ZVByb3BlcnR5IiwiYXJyYXlTcGVjaWVzQ29uc3RydWN0b3IiLCJhcnJheVNwZWNpZXNDcmVhdGUiLCJhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0IiwiJGdldE93blByb3BlcnR5TmFtZXMiLCJ3cmFwcGVkV2VsbEtub3duU3ltYm9sTW9kdWxlIiwiZGVmaW5lV2VsbEtub3duU3ltYm9sIiwiZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSIsImdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSIsInJlcXVpcmUkJDI5IiwicmVxdWlyZSQkMzAiLCJyZXF1aXJlJCQzMSIsInJlcXVpcmUkJDMyIiwicmVxdWlyZSQkMzMiLCJyZXF1aXJlJCQzNCIsInJlcXVpcmUkJDM1IiwiJGZvckVhY2giLCJyZXF1aXJlJCQzNiIsIm5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInN5bWJvbCIsImNhbGxXaXRoU2FmZUl0ZXJhdGlvbkNsb3NpbmciLCJmcm9tIiwiX1N5bWJvbCIsIl9nZXRJdGVyYXRvck1ldGhvZCIsIl9BcnJheSRmcm9tIiwiSEFTX1NQRUNJRVNfU1VQUE9SVCIsImVudHJ5VmlydHVhbCIsInNsaWNlIiwiX3NsaWNlSW5zdGFuY2VQcm9wZXJ0eSIsImFycmF5V2l0aG91dEhvbGVzIiwiaXRlcmFibGVUb0FycmF5IiwidW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJub25JdGVyYWJsZVNwcmVhZCIsIkZBSUxTX09OX1BSSU1JVElWRVMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJmaWx0ZXIiLCJPYmplY3QiLCJhcnJheU1ldGhvZElzU3RyaWN0IiwiU1RSSUNUX01FVEhPRCIsImZvckVhY2giLCJvd25LZXlzIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXNNb2R1bGUiLCJfT2JqZWN0JGRlZmluZVByb3BlcnR5IiwiX09iamVjdCRrZXlzIiwiX09iamVjdCRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJfZmlsdGVySW5zdGFuY2VQcm9wZXJ0eSIsIl9PYmplY3QkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiX2ZvckVhY2hJbnN0YW5jZVByb3BlcnR5IiwiX09iamVjdCRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiX09iamVjdCRkZWZpbmVQcm9wZXJ0aWVzIiwidW5kZWZpbmVkIiwibWFwIiwiQ2hhdENvbnRyb2xsZXIiLCJvcHRpb24iLCJkZWxheSIsInJlcXVlc3QiLCJ0eXBlIiwicmVzcG9uc2VzIiwib25SZXNucG9uc2VkIiwiYWx3YXlzIiwiYWRkTWVzc2FnZSIsInN0YXRlIiwiZGVmYXVsdE9wdGlvbiIsIm1lc3NhZ2VzIiwiYWN0aW9uIiwiZW1wdHlBY3Rpb24iLCJhY3Rpb25IaXN0b3J5Iiwib25NZXNzYWdlc0NoYW5nZWQiLCJvbkFjdGlvbkNoYW5nZWQiLCJtZXNzYWdlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJsZW4iLCJwdXNoIiwiaWR4IiwiY3JlYXRlZEF0IiwiRGF0ZSIsImNhbGxPbk1lc3NhZ2VzQ2hhbmdlZCIsImluZGV4IiwidXBkYXRlZEF0IiwiZGVsZXRlZEF0IiwiY2xlYXJNZXNzYWdlcyIsImgiLCJjYWxsYmFjayIsIl9pbmRleE9mSW5zdGFuY2VQcm9wZXJ0eSIsIm9uUmVzcG9uc2UiLCJkZWZhdWx0QWN0aW9uUmVxdWVzdCIsInJlamVjdCIsInJldHVyblJlc3BvbnNlIiwicmVzcG9uc2UiLCJlcnJvciIsImNhbGxPbkFjdGlvbkNoYW5nZWQiLCJ2YWx1ZSIsImxlbmd0aCIsIm9yaWdSZXEiLCJFcnJvciIsImNvbnRlbnQiLCJzZWxmIiwiTWVkaWFSZWNvcmRlciIsIkF1ZGlvTWVkaWFSZWNvcmRlciIsIndpbmRvdyIsIkF1ZGlvUmVjb3JkZXIiLCJyZWNvcmRDaHVua3MiLCJtZCIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImF1ZGlvIiwidmlkZW8iLCJzdHJlYW0iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImRhdGEiLCJzaXplIiwic3RhcnQiLCJCbG9iIiwic3RvcCIsImluc3RhbmNlIiwiYXJyYXlXaXRoSG9sZXMiLCJpdGVyYWJsZVRvQXJyYXlMaW1pdCIsIm5vbkl0ZXJhYmxlUmVzdCIsInRoaXMiLCJNdWlBdWRpb0lucHV0IiwiY2hhdENvbnRyb2xsZXIiLCJhY3Rpb25SZXF1ZXN0IiwiY2hhdEN0bCIsIlJlYWN0IiwidXNlU3RhdGUiLCJnZXRJbnN0YW5jZSIsImF1ZGlvUmVjIiwic3RvcHBlZCIsInNldFN0b3BwZWQiLCJzZXRBdWRpbyIsImhhbmRsZUVycm9yIiwidXNlQ2FsbGJhY2siLCJzZXRBY3Rpb25SZXNwb25zZSIsImhhbmRsZVN0YXJ0IiwiaW5pdGlhbGl6ZSIsInN0YXJ0UmVjb3JkIiwiaGFuZGxlU3RvcCIsInN0b3BSZWNvcmQiLCJhIiwic2VuZFJlc3BvbnNlIiwic2VuZEJ1dHRvblRleHQiLCJCb3giLCJmbGV4IiwiZGlzcGxheSIsIm1pbldpZHRoIiwibWwiLCJCdXR0b24iLCJJY29uIiwiY29uY2F0IiwiTXVpRmlsZUlucHV0IiwiZmlsZXMiLCJzZXRGaWxlcyIsImhhbmRsZUZpbGVDaGFuZ2UiLCJmaWxlTGlzdCIsImZpbGVBcnJheSIsImkiLCJmaWxlIiwiaXRlbSIsInNldFJlc3BvbnNlIiwiX21hcEluc3RhbmNlUHJvcGVydHkiLCJmIiwibmFtZSIsInJlcyIsIm1heFdpZHRoIiwiZmxleERpcmVjdGlvbiIsIm10IiwiTGlzdCIsIkRpdmlkZXIiLCJMaXN0SXRlbSIsIkxpc3RJdGVtSWNvbiIsIlR5cG9ncmFwaHkiLCJvdmVyZmxvd1dyYXAiLCJhY2NlcHQiLCJtdWx0aXBsZSIsInRhcmdldCIsIk11aU1lc3NhZ2UiLCJpZCIsInNob3dEYXRlIiwic2hvd1RpbWUiLCJkaXNwRGF0ZSIsIkNoYXRBdmF0b3IiLCJBdmF0YXIiLCJ1c2VybmFtZSIsImF2YXRhciIsIkNoYXRVc2VybmFtZSIsIkNoYXREYXRlIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwiaG91ciIsIm1pbnV0ZSIsIkdyb3ciLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ3aGl0ZVNwYWNlIiwiaW5jbHVkZXMiLCJNQVRDSCIsIk11aU11bHRpU2VsZWN0SW5wdXQiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJoYW5kbGVTZWxlY3QiLCJfaW5jbHVkZXNJbnN0YW5jZVByb3BlcnR5IiwidiIsIm9wdGlvbnMiLCJvIiwidGV4dCIsImN1cnJlbnRUYXJnZXQiLCJmaW5kIiwiTXVpU2VsZWN0SW5wdXQiLCJfZmluZEluc3RhbmNlUHJvcGVydHkiLCJNdWlUZXh0SW5wdXQiLCJkZWZhdWx0VmFsdWUiLCJzZXRWYWx1ZSIsImhhbmRsZUtleURvd24iLCJuYXRpdmVFdmVudCIsImlzQ29tcG9zaW5nIiwia2V5Iiwic2hpZnRLZXkiLCJwcmV2ZW50RGVmYXVsdCIsIlRleHRGaWVsZCIsInBsYWNlaG9sZGVyIiwib25LZXlEb3duIiwiTXVpQ2hhdCIsImdldE1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJnZXRBY3Rpb25SZXF1ZXN0IiwiYWN0UmVxIiwic2V0QWN0UmVxIiwibXNnUmVmIiwidXNlUmVmIiwic2Nyb2xsIiwiY3VycmVudCIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsInVzZUVmZmVjdCIsImhhbmRsZU1hc3NhZ2VzQ2hhbmdlZCIsImhhbmRsZUFjdGlvbkNoYW5nZWQiLCJhZGRPbk1lc3NhZ2VzQ2hhbmdlZCIsImFkZE9uQWN0aW9uQ2hhbmdlZCIsIkN1c3RvbUNvbXBvbmVudCIsInVzZU1lbW8iLCJDb21wb25lbnQiLCJ1bmtub3duTXNnIiwicHJldkRhdGUiLCJkYXlqcyIsInByZXZUaW1lIiwiaGVpZ2h0Iiwid2lkdGgiLCJwIiwiYmdjb2xvciIsIm92ZXJmbG93WSIsIldlYmtpdE92ZXJmbG93U2Nyb2xsaW5nIiwibXNnIiwiZ2V0T3B0aW9uIiwic2hvd0RhdGVUaW1lIiwiZm9ybWF0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TSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsNEZBQTRGLENBQUMsQ0FBQyxDQUFDLHFGQUFxRixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLDBEQUEwRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsdUZBQXVGLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLE9BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGVBQWUsR0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTs7Ozs7Q0NPdDFNLFNBQVNDLGFBQVQsT0FNZ0I7Q0FBQSxNQUxyQkMsY0FLcUIsUUFMckJBLGNBS3FCO0NBQUEsTUFKckJDLGFBSXFCLFFBSnJCQSxhQUlxQjtDQUNyQixNQUFNQyxPQUFPLEdBQUdGLGNBQWhCOztDQUNBLHdCQUFtQkcseUJBQUssQ0FBQ0MsUUFBTixDQUFlNUIsa0JBQWtCLENBQUM2QixXQUFuQixFQUFmLENBQW5CO0NBQUE7Q0FBQSxNQUFPQyxRQUFQOztDQUNBLHlCQUE4QkgseUJBQUssQ0FBQ0MsUUFBTixDQUFlLElBQWYsQ0FBOUI7Q0FBQTtDQUFBLE1BQU9HLE9BQVA7Q0FBQSxNQUFnQkMsVUFBaEI7O0NBQ0EseUJBQTBCTCx5QkFBSyxDQUFDQyxRQUFOLEVBQTFCO0NBQUE7Q0FBQSxNQUFPcEIsS0FBUDtDQUFBLE1BQWN5QixRQUFkOztDQUVBLE1BQU1DLFdBQVcsR0FBR1AseUJBQUssQ0FBQ1EsV0FBTixDQUNsQixVQUFDNUMsS0FBRCxFQUF3QjtDQUN0QixRQUFNRSxLQUEwQixHQUFHO0NBQ2pDcEMsTUFBQUEsSUFBSSxFQUFFLE9BRDJCO0NBRWpDb0MsTUFBQUEsS0FBSyxFQUFFRixLQUFLLENBQUNyQixPQUZvQjtDQUdqQ3FCLE1BQUFBLEtBQUssRUFBTEE7Q0FIaUMsS0FBbkM7Q0FLQW1DLElBQUFBLE9BQU8sQ0FBQ1UsaUJBQVIsQ0FBMEJYLGFBQTFCLEVBQXlDaEMsS0FBekM7Q0FDRCxHQVJpQixFQVNsQixDQUFDZ0MsYUFBRCxFQUFnQkMsT0FBaEIsQ0FUa0IsQ0FBcEI7Q0FZQSxNQUFNVyxXQUFXLEdBQUdWLHlCQUFLLENBQUNRLFdBQU4sZ0VBQWtCO0NBQUE7Q0FBQTtDQUFBO0NBQUE7Q0FBQTtDQUFBO0NBQUEsbUJBRTVCTCxRQUFRLENBQUNRLFVBQVQsRUFGNEI7O0NBQUE7Q0FBQTtDQUFBLG1CQUc1QlIsUUFBUSxDQUFDUyxXQUFULEVBSDRCOztDQUFBO0NBSWxDUCxZQUFBQSxVQUFVLENBQUMsS0FBRCxDQUFWO0NBSmtDO0NBQUE7O0NBQUE7Q0FBQTtDQUFBO0NBTWxDRSxZQUFBQSxXQUFXLGFBQVg7O0NBTmtDO0NBQUE7Q0FBQTtDQUFBO0NBQUE7Q0FBQTtDQUFBLEdBQWxCLElBUWpCLENBQUNKLFFBQUQsRUFBV0ksV0FBWCxDQVJpQixDQUFwQjtDQVVBLE1BQU1NLFVBQVUsR0FBR2IseUJBQUssQ0FBQ1EsV0FBTixnRUFBa0I7Q0FBQTtDQUFBO0NBQUE7Q0FBQTtDQUFBO0NBQUE7Q0FBQTtDQUFBLG1CQUVqQkwsUUFBUSxDQUFDVyxVQUFULEVBRmlCOztDQUFBO0NBRTNCQyxZQUFBQSxDQUYyQjtDQUdqQ1QsWUFBQUEsUUFBUSxDQUFDUyxDQUFELENBQVI7Q0FDQVYsWUFBQUEsVUFBVSxDQUFDLElBQUQsQ0FBVjtDQUppQztDQUFBOztDQUFBO0NBQUE7Q0FBQTtDQU1qQ0UsWUFBQUEsV0FBVyxjQUFYOztDQU5pQztDQUFBO0NBQUE7Q0FBQTtDQUFBO0NBQUE7Q0FBQSxHQUFsQixJQVFoQixDQUFDSixRQUFELEVBQVdJLFdBQVgsQ0FSZ0IsQ0FBbkI7Q0FVQSxNQUFNUyxZQUFZLEdBQUdoQix5QkFBSyxDQUFDUSxXQUFOLENBQWtCLFlBQVk7Q0FDakQsUUFBSTNCLEtBQUosRUFBVztDQUNULFVBQU1mLEtBQTBCLEdBQUc7Q0FDakNwQyxRQUFBQSxJQUFJLEVBQUUsT0FEMkI7Q0FFakNvQyxRQUFBQSxLQUFLLEVBQUUsT0FGMEI7Q0FHakNlLFFBQUFBLEtBQUssRUFBTEE7Q0FIaUMsT0FBbkM7Q0FLQWtCLE1BQUFBLE9BQU8sQ0FBQ1UsaUJBQVIsQ0FBMEJYLGFBQTFCLEVBQXlDaEMsS0FBekM7Q0FDQXdDLE1BQUFBLFFBQVEsQ0FBQ2xGLFNBQUQsQ0FBUjtDQUNEO0NBQ0YsR0FWb0IsRUFVbEIsQ0FBQzBFLGFBQUQsRUFBZ0JqQixLQUFoQixFQUF1QmtCLE9BQXZCLENBVmtCLENBQXJCO0NBWUEsTUFBTWtCLGNBQWMsR0FBR25CLGFBQWEsQ0FBQ21CLGNBQWQsR0FDbkJuQixhQUFhLENBQUNtQixjQURLLEdBRW5CLE1BRko7Q0FJQSxzQkFDRWpCLHdDQUFDa0IsWUFBRDtDQUNFLElBQUEsRUFBRSxFQUFFO0NBQ0ZDLE1BQUFBLElBQUksRUFBRSxVQURKO0NBRUZDLE1BQUFBLE9BQU8sRUFBRSxNQUZQO0NBR0YsZUFBUztDQUNQRCxRQUFBQSxJQUFJLEVBQUUsVUFEQztDQUVQRSxRQUFBQSxRQUFRLEVBQUU7Q0FGSCxPQUhQO0NBT0YsbUJBQWE7Q0FDWEMsUUFBQUEsRUFBRSxFQUFFO0NBRE87Q0FQWDtDQUROLEtBYUdsQixPQUFPLGlCQUNOSix3Q0FBQ3VCLGVBQUQ7Q0FDRSxJQUFBLElBQUksRUFBQyxRQURQO0NBRUUsSUFBQSxPQUFPLEVBQUViLFdBRlg7Q0FHRSxJQUFBLFFBQVEsRUFBRSxDQUFDTixPQUhiO0NBSUUsSUFBQSxPQUFPLEVBQUMsV0FKVjtDQUtFLElBQUEsS0FBSyxFQUFDLFNBTFI7Q0FNRSxJQUFBLFNBQVMsZUFBRUosd0NBQUN3QixhQUFEO0NBTmIsaUJBZEosRUF5QkcsQ0FBQ3BCLE9BQUQsaUJBQ0NKLHdDQUFDdUIsZUFBRDtDQUNFLElBQUEsSUFBSSxFQUFDLFFBRFA7Q0FFRSxJQUFBLE9BQU8sRUFBRVYsVUFGWDtDQUdFLElBQUEsUUFBUSxFQUFFVCxPQUhaO0NBSUUsSUFBQSxPQUFPLEVBQUMsV0FKVjtDQUtFLElBQUEsS0FBSyxFQUFDLFNBTFI7Q0FNRSxJQUFBLFNBQVMsZUFBRUosd0NBQUN3QixhQUFEO0NBTmIsZ0JBMUJKLGVBcUNFeEIsd0NBQUN1QixlQUFEO0NBQ0UsSUFBQSxJQUFJLEVBQUMsUUFEUDtDQUVFLElBQUEsT0FBTyxFQUFFUCxZQUZYO0NBR0UsSUFBQSxRQUFRLEVBQUUsQ0FBQ25DLEtBSGI7Q0FJRSxJQUFBLE9BQU8sRUFBQyxXQUpWO0NBS0UsSUFBQSxLQUFLLEVBQUMsU0FMUjtDQU1FLElBQUEsU0FBUyxlQUFFbUIsd0NBQUN3QixhQUFEO0NBTmIsS0FRR1AsY0FSSCxDQXJDRixDQURGO0NBa0REOztDQ3BIRCxJQUFJdEgsY0FBWSxHQUFHakwsY0FBMkMsQ0FBQztBQUMvRDtLQUNBK1MsUUFBYyxHQUFHOUgsY0FBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU07O0NDSDdDLElBQUk4SCxRQUFNLEdBQUcvUyxRQUFrQyxDQUFDO0FBQ2hEO0NBQ0EsSUFBSTJFLGdCQUFjLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztBQUNyQztLQUNBLFFBQWMsR0FBRyxVQUFVLEVBQUUsRUFBRTtDQUMvQixFQUFFLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7Q0FDdEIsRUFBRSxPQUFPLEVBQUUsS0FBS0EsZ0JBQWMsS0FBSyxFQUFFLFlBQVksS0FBSyxJQUFJLEdBQUcsS0FBS0EsZ0JBQWMsQ0FBQyxNQUFNLENBQUMsR0FBR29PLFFBQU0sR0FBRyxHQUFHLENBQUM7Q0FDeEcsQ0FBQzs7Q0NQRCxJQUFJOUosUUFBTSxHQUFHakosUUFBbUMsQ0FBQztBQUNqRDtLQUNBK1MsUUFBYyxHQUFHOUosUUFBTTs7Q0NGdkIsSUFBSUEsUUFBTSxHQUFHakosUUFBdUMsQ0FBQztBQUNyRDtLQUNBK1MsUUFBYyxHQUFHOUosUUFBTTs7S0NGdkIsTUFBYyxHQUFHakosUUFBZ0Q7O0NDZTFELFNBQVNnVCxZQUFULE9BTWdCO0NBQUEsTUFMckI3QixjQUtxQixRQUxyQkEsY0FLcUI7Q0FBQSxNQUpyQkMsYUFJcUIsUUFKckJBLGFBSXFCO0NBQ3JCLE1BQU1DLE9BQU8sR0FBR0YsY0FBaEI7O0NBQ0Esd0JBQTBCRyx5QkFBSyxDQUFDQyxRQUFOLENBQXVCLEVBQXZCLENBQTFCO0NBQUE7Q0FBQSxNQUFPMEIsS0FBUDtDQUFBLE1BQWNDLFFBQWQ7O0NBRUEsTUFBTUMsZ0JBQWdCLEdBQUc3Qix5QkFBSyxDQUFDUSxXQUFOLENBQ3ZCLFVBQUNzQixRQUFELEVBQXFDO0NBQ25DO0NBQ0EsUUFBTUMsU0FBaUIsR0FBRyxFQUExQjs7Q0FDQSxRQUFJRCxRQUFKLEVBQWM7Q0FDWixXQUFLLElBQUlFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLFFBQVEsQ0FBQy9ELE1BQTdCLEVBQXFDaUUsQ0FBQyxJQUFJLENBQTFDLEVBQTZDO0NBQzNDLFlBQU1DLElBQUksR0FBR0gsUUFBUSxDQUFDSSxJQUFULENBQWNGLENBQWQsQ0FBYjs7Q0FDQSxZQUFJQyxJQUFKLEVBQVU7Q0FDUkYsVUFBQUEsU0FBUyxDQUFDcEYsSUFBVixDQUFlc0YsSUFBZjtDQUNEO0NBQ0Y7Q0FDRjs7Q0FDREwsSUFBQUEsUUFBUSxDQUFDRyxTQUFELENBQVI7Q0FDRCxHQWJzQixFQWN2QixFQWR1QixDQUF6QjtDQWlCQSxNQUFNSSxXQUFXLEdBQUduQyx5QkFBSyxDQUFDUSxXQUFOLENBQWtCLFlBQVk7Q0FDaEQsUUFBSW1CLEtBQUssQ0FBQzVELE1BQU4sR0FBZSxDQUFuQixFQUFzQjtDQUNwQixVQUFNRCxLQUFLLEdBQUdzRSxJQUFBVCxLQUFLLE1BQUwsQ0FBQUEsS0FBSyxFQUFLLFVBQUNVLENBQUQ7Q0FBQSxlQUFPQSxDQUFDLENBQUNDLElBQVQ7Q0FBQSxPQUFMLENBQUwsQ0FBeUJ4VCxRQUF6QixFQUFkOztDQUNBLFVBQU15VCxHQUF1QixHQUFHO0NBQUU3RyxRQUFBQSxJQUFJLEVBQUUsTUFBUjtDQUFnQm9DLFFBQUFBLEtBQUssRUFBTEEsS0FBaEI7Q0FBdUI2RCxRQUFBQSxLQUFLLEVBQUxBO0NBQXZCLE9BQWhDO0NBQ0E1QixNQUFBQSxPQUFPLENBQUNVLGlCQUFSLENBQTBCWCxhQUExQixFQUF5Q3lDLEdBQXpDO0NBQ0Q7Q0FDRixHQU5tQixFQU1qQixDQUFDekMsYUFBRCxFQUFnQkMsT0FBaEIsRUFBeUI0QixLQUF6QixDQU5pQixDQUFwQjtDQVFBLE1BQU1WLGNBQWMsR0FBR25CLGFBQWEsQ0FBQ21CLGNBQWQsR0FDbkJuQixhQUFhLENBQUNtQixjQURLLEdBRW5CLE1BRko7Q0FJQSxzQkFDRWpCLHdDQUFDa0IsWUFBRDtDQUNFLElBQUEsRUFBRSxFQUFFO0NBQ0ZDLE1BQUFBLElBQUksRUFBRSxVQURKO0NBRUZxQixNQUFBQSxRQUFRLEVBQUUsTUFGUjtDQUdGcEIsTUFBQUEsT0FBTyxFQUFFLE1BSFA7Q0FJRnFCLE1BQUFBLGFBQWEsRUFBRSxRQUpiO0NBS0YsZUFBUztDQUNQdEIsUUFBQUEsSUFBSSxFQUFFLFVBREM7Q0FFUHFCLFFBQUFBLFFBQVEsRUFBRTtDQUZILE9BTFA7Q0FTRixtQkFBYTtDQUNYRSxRQUFBQSxFQUFFLEVBQUU7Q0FETztDQVRYO0NBRE4sa0JBZUUxQyx3Q0FBQzJDLGFBQUQsUUFDR1AsSUFBQVQsS0FBSyxNQUFMLENBQUFBLEtBQUssRUFBSyxVQUFDVSxDQUFEO0NBQUE7O0NBQUEsd0JBQ1RyQztDQUFLLE1BQUEsR0FBRyw4QkFBS3FDLENBQUMsQ0FBQ0MsSUFBUCx1QkFBZUQsQ0FBQyxDQUFDbEQsSUFBakI7Q0FBUixvQkFDRWEsd0NBQUM0QyxnQkFBRCxPQURGLGVBRUU1Qyx3Q0FBQzZDLGlCQUFEO0NBQVUsTUFBQSxHQUFHLEVBQUVSLENBQUMsQ0FBQ0M7Q0FBakIsb0JBQ0V0Qyx3Q0FBQzhDLHFCQUFELHFCQUNFOUMsd0NBQUN3QixhQUFELHNCQURGLENBREYsZUFJRXhCLHdDQUFDK0MsbUJBQUQ7Q0FBWSxNQUFBLEtBQUssRUFBRTtDQUFFQyxRQUFBQSxZQUFZLEVBQUUsWUFBaEI7Q0FBOEIzQixRQUFBQSxRQUFRLEVBQUU7Q0FBeEM7Q0FBbkIsT0FDR2dCLENBQUMsQ0FBQ0MsSUFETCxDQUpGLENBRkYsQ0FEUztDQUFBLEdBQUwsQ0FEUixDQWZGLGVBK0JFdEMsd0NBQUNrQixZQUFEO0NBQ0UsSUFBQSxFQUFFLEVBQUU7Q0FDRkUsTUFBQUEsT0FBTyxFQUFFLE1BRFA7Q0FFRixlQUFTO0NBQ1BELFFBQUFBLElBQUksRUFBRSxVQURDO0NBRVBFLFFBQUFBLFFBQVEsRUFBRTtDQUZILE9BRlA7Q0FNRixtQkFBYTtDQUNYQyxRQUFBQSxFQUFFLEVBQUU7Q0FETztDQU5YO0NBRE4sa0JBWUV0Qix3Q0FBQ3VCLGVBQUQ7Q0FDRSxJQUFBLFFBQVEsRUFBRSxLQURaO0NBRUUsSUFBQSxTQUFTLEVBQUMsT0FGWjtDQUdFLElBQUEsT0FBTyxFQUFDLFdBSFY7Q0FJRSxJQUFBLEtBQUssRUFBQyxTQUpSO0NBS0UsSUFBQSxTQUFTLGVBQUV2Qix3Q0FBQ3dCLGFBQUQ7Q0FMYixpQ0FRRXhCO0NBQ0UsSUFBQSxJQUFJLEVBQUMsTUFEUDtDQUVFLElBQUEsTUFBTSxFQUFFRixhQUFhLENBQUNtRCxNQUZ4QjtDQUdFLElBQUEsUUFBUSxFQUFFbkQsYUFBYSxDQUFDb0QsUUFIMUI7Q0FJRSxJQUFBLFFBQVEsRUFBRSxrQkFBQ2pFLENBQUQ7Q0FBQSxhQUFhNEMsZ0JBQWdCLENBQUM1QyxDQUFDLENBQUNrRSxNQUFGLENBQVN4QixLQUFWLENBQTdCO0NBQUEsS0FKWjtDQUtFLElBQUEsS0FBSyxFQUFFO0NBQUVQLE1BQUFBLE9BQU8sRUFBRTtDQUFYO0NBTFQsSUFSRixDQVpGLGVBNEJFcEIsd0NBQUN1QixlQUFEO0NBQ0UsSUFBQSxJQUFJLEVBQUMsUUFEUDtDQUVFLElBQUEsT0FBTyxFQUFFWSxXQUZYO0NBR0UsSUFBQSxRQUFRLEVBQUVSLEtBQUssQ0FBQzVELE1BQU4sS0FBaUIsQ0FIN0I7Q0FJRSxJQUFBLE9BQU8sRUFBQyxXQUpWO0NBS0UsSUFBQSxLQUFLLEVBQUMsU0FMUjtDQU1FLElBQUEsU0FBUyxlQUFFaUMsd0NBQUN3QixhQUFEO0NBTmIsS0FRR1AsY0FSSCxDQTVCRixDQS9CRixDQURGO0NBeUVEOztDQzFITSxTQUFTbUMsVUFBVCxPQVVnQjtDQUFBLE1BVHJCQyxFQVNxQixRQVRyQkEsRUFTcUI7Q0FBQSxNQVJyQjlHLE9BUXFCLFFBUnJCQSxPQVFxQjtDQUFBLE1BUHJCK0csUUFPcUIsUUFQckJBLFFBT3FCO0NBQUEsTUFOckJDLFFBTXFCLFFBTnJCQSxRQU1xQjs7Q0FDckIsTUFBSWhILE9BQU8sQ0FBQ1csU0FBWixFQUF1QjtDQUNyQix3QkFBTzhDO0NBQUssTUFBQSxFQUFFLEVBQUVxRDtDQUFULE1BQVA7Q0FDRDs7Q0FFRCxNQUFNRyxRQUFRLEdBQUdqSCxPQUFPLENBQUNVLFNBQVIsR0FBb0JWLE9BQU8sQ0FBQ1UsU0FBNUIsR0FBd0NWLE9BQU8sQ0FBQ00sU0FBakU7Q0FFQSxNQUFNNEcsVUFBVSxnQkFDZHpELHdDQUFDa0IsWUFBRDtDQUNFLElBQUEsUUFBUSxFQUFFLENBRFo7Q0FFRSxJQUFBLFVBQVUsRUFBRSxDQUZkO0NBR0UsSUFBQSxFQUFFLEVBQUUzRSxPQUFPLENBQUM0QixJQUFSLEdBQWUsQ0FBZixHQUFtQixDQUh6QjtDQUlFLElBQUEsRUFBRSxFQUFFNUIsT0FBTyxDQUFDNEIsSUFBUixHQUFlLENBQWYsR0FBbUI7Q0FKekIsa0JBTUU2Qix3Q0FBQzBELGVBQUQ7Q0FBUSxJQUFBLEdBQUcsRUFBRW5ILE9BQU8sQ0FBQ29ILFFBQXJCO0NBQStCLElBQUEsR0FBRyxFQUFFcEgsT0FBTyxDQUFDcUg7Q0FBNUMsSUFORixDQURGO0NBV0EsTUFBTUMsWUFBWSxnQkFDaEI3RCx3Q0FBQ2tCLFlBQUQ7Q0FBSyxJQUFBLFFBQVEsRUFBQyxNQUFkO0NBQXFCLElBQUEsRUFBRSxFQUFFO0NBQXpCLGtCQUNFbEIsd0NBQUMrQyxtQkFBRDtDQUFZLElBQUEsT0FBTyxFQUFDLE9BQXBCO0NBQTRCLElBQUEsS0FBSyxFQUFFeEcsT0FBTyxDQUFDNEIsSUFBUixHQUFlLE9BQWYsR0FBeUI7Q0FBNUQsS0FDRzVCLE9BQU8sQ0FBQ29ILFFBRFgsQ0FERixDQURGO0NBUUEsTUFBTUcsUUFBUSxnQkFDWjlELHdDQUFDa0IsWUFBRDtDQUFLLElBQUEsUUFBUSxFQUFDLE1BQWQ7Q0FBcUIsSUFBQSxFQUFFLEVBQUU7Q0FBekIsa0JBQ0VsQix3Q0FBQytDLG1CQUFEO0NBQ0UsSUFBQSxPQUFPLEVBQUMsT0FEVjtDQUVFLElBQUEsS0FBSyxFQUFFeEcsT0FBTyxDQUFDNEIsSUFBUixHQUFlLE9BQWYsR0FBeUIsTUFGbEM7Q0FHRSxJQUFBLEtBQUssRUFBQztDQUhSLEtBS0dxRixRQUxILGFBS0dBLFFBTEgsdUJBS0dBLFFBQVEsQ0FBRU8sa0JBQVYsQ0FBNkIsRUFBN0IsRUFBaUM7Q0FDaENDLElBQUFBLElBQUksRUFBRSxTQUQwQjtDQUVoQ0MsSUFBQUEsTUFBTSxFQUFFO0NBRndCLEdBQWpDLENBTEgsQ0FERixDQURGO0NBZUEsc0JBQ0VqRSx3Q0FBQ2tFLGFBQUQ7Q0FBTSxJQUFBLEVBQUU7Q0FBUixrQkFDRWxFLHdDQUFDa0IsWUFBRDtDQUFLLElBQUEsUUFBUSxFQUFDLE1BQWQ7Q0FBcUIsSUFBQSxPQUFPLEVBQUMsTUFBN0I7Q0FBb0MsSUFBQSxhQUFhLEVBQUM7Q0FBbEQsS0FDR29DLFFBQVEsaUJBQ1B0RCx3Q0FBQytDLG1CQUFEO0NBQVksSUFBQSxLQUFLLEVBQUM7Q0FBbEIsS0FDR1MsUUFESCxhQUNHQSxRQURILHVCQUNHQSxRQUFRLENBQUVXLGtCQUFWLEVBREgsQ0FGSixlQU1FbkUsd0NBQUNrQixZQUFEO0NBQ0UsSUFBQSxFQUFFLEVBQUVtQyxFQUROO0NBRUUsSUFBQSxRQUFRLEVBQUMsTUFGWDtDQUdFLElBQUEsRUFBRSxFQUFFLENBSE47Q0FJRSxJQUFBLEVBQUUsRUFBRTlHLE9BQU8sQ0FBQzRCLElBQVIsR0FBZSxLQUFmLEdBQXVCLENBSjdCO0NBS0UsSUFBQSxFQUFFLEVBQUU1QixPQUFPLENBQUM0QixJQUFSLEdBQWUsQ0FBZixHQUFtQixLQUx6QjtDQU1FLElBQUEsT0FBTyxFQUFDLE1BTlY7Q0FPRSxJQUFBLGNBQWMsRUFBRTVCLE9BQU8sQ0FBQzRCLElBQVIsR0FBZSxVQUFmLEdBQTRCLFlBUDlDO0NBUUUsSUFBQSxLQUFLLEVBQUU7Q0FBRTZFLE1BQUFBLFlBQVksRUFBRTtDQUFoQjtDQVJULEtBVUd6RyxPQUFPLENBQUNxSCxNQUFSLElBQWtCLENBQUNySCxPQUFPLENBQUM0QixJQUEzQixJQUFtQ3NGLFVBVnRDLGVBV0V6RCx3Q0FBQ2tCLFlBQUQ7Q0FBSyxJQUFBLFFBQVEsRUFBRSxDQUFmO0NBQWtCLElBQUEsT0FBTyxFQUFDLE1BQTFCO0NBQWlDLElBQUEsYUFBYSxFQUFDO0NBQS9DLEtBQ0czRSxPQUFPLENBQUNvSCxRQUFSLElBQW9CRSxZQUR2QixlQUVFN0Qsd0NBQUNrQixZQUFEO0NBQ0UsSUFBQSxRQUFRLEVBQUMsTUFEWDtDQUVFLElBQUEsRUFBRSxFQUFFLENBRk47Q0FHRSxJQUFBLEVBQUUsRUFBRSxDQUhOO0NBSUUsSUFBQSxPQUFPLEVBQUUzRSxPQUFPLENBQUM0QixJQUFSLEdBQWUsY0FBZixHQUFnQyxrQkFKM0M7Q0FLRSxJQUFBLEtBQUssRUFBRTVCLE9BQU8sQ0FBQzRCLElBQVIsR0FBZSxzQkFBZixHQUF3QyxjQUxqRDtDQU1FLElBQUEsWUFBWSxFQUFFLENBTmhCO0NBT0UsSUFBQSxTQUFTLEVBQUU7Q0FQYixLQVNHNUIsT0FBTyxDQUFDYixJQUFSLEtBQWlCLE1BQWpCLGlCQUNDc0Usd0NBQUMrQyxtQkFBRDtDQUFZLElBQUEsT0FBTyxFQUFDLE9BQXBCO0NBQTRCLElBQUEsS0FBSyxFQUFFO0NBQUVxQixNQUFBQSxVQUFVLEVBQUU7Q0FBZDtDQUFuQyxLQUNHN0gsT0FBTyxDQUFDMkIsT0FEWCxDQVZKLEVBY0czQixPQUFPLENBQUNiLElBQVIsS0FBaUIsS0FBakIsaUJBQTBCc0UscURBQU16RCxPQUFPLENBQUMyQixPQUFkLENBZDdCLENBRkYsRUFrQkdxRixRQUFRLElBQUlPLFFBbEJmLENBWEYsRUErQkd2SCxPQUFPLENBQUNxSCxNQUFSLElBQWtCckgsT0FBTyxDQUFDNEIsSUFBMUIsSUFBa0NzRixVQS9CckMsQ0FORixDQURGLENBREY7Q0E0Q0Q7O0NDbkdELElBQUk1UCxHQUFDLEdBQUduRixPQUE4QixDQUFDO0NBQ3ZDLElBQUksU0FBUyxHQUFHTyxlQUFzQyxDQUFDLFFBQVEsQ0FBQztBQUVoRTtDQUNBO0NBQ0E7QUFDQTRFLElBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFO0NBQ3BDLEVBQUUsUUFBUSxFQUFFLFNBQVMsUUFBUSxDQUFDLEVBQUUsd0JBQXdCO0NBQ3hELElBQUksT0FBTyxTQUFTLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUM7Q0FDaEYsR0FBRztDQUNILENBQUMsQ0FBQzs7Q0NWRixJQUFJOEYsY0FBWSxHQUFHakwsY0FBMkMsQ0FBQztBQUMvRDtLQUNBMlYsVUFBYyxHQUFHMUssY0FBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVE7O0NDSC9DLElBQUksUUFBUSxHQUFHakwsVUFBaUMsQ0FBQztDQUNqRCxJQUFJLE9BQU8sR0FBR08sWUFBbUMsQ0FBQztDQUNsRCxJQUFJNEIsaUJBQWUsR0FBR04saUJBQXlDLENBQUM7QUFDaEU7Q0FDQSxJQUFJK1QsT0FBSyxHQUFHelQsaUJBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNyQztDQUNBO0NBQ0E7S0FDQSxRQUFjLEdBQUcsVUFBVSxFQUFFLEVBQUU7Q0FDL0IsRUFBRSxJQUFJLFFBQVEsQ0FBQztDQUNmLEVBQUUsT0FBTyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDeVQsT0FBSyxDQUFDLE1BQU0sU0FBUyxHQUFHLENBQUMsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDO0NBQ3ZHLENBQUM7O0NDWEQsSUFBSSxRQUFRLEdBQUc1VixRQUFpQyxDQUFDO0FBQ2pEO0tBQ0EsVUFBYyxHQUFHLFVBQVUsRUFBRSxFQUFFO0NBQy9CLEVBQUUsSUFBSSxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUU7Q0FDcEIsSUFBSSxNQUFNLFNBQVMsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO0NBQ3JFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztDQUNkLENBQUM7O0NDTkQsSUFBSSxlQUFlLEdBQUdBLGlCQUF5QyxDQUFDO0FBQ2hFO0NBQ0EsSUFBSSxLQUFLLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3JDO0tBQ0Esb0JBQWMsR0FBRyxVQUFVLFdBQVcsRUFBRTtDQUN4QyxFQUFFLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQztDQUNuQixFQUFFLElBQUk7Q0FDTixJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztDQUMvQixHQUFHLENBQUMsT0FBTyxNQUFNLEVBQUU7Q0FDbkIsSUFBSSxJQUFJO0NBQ1IsTUFBTSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO0NBQzVCLE1BQU0sT0FBTyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7Q0FDeEMsS0FBSyxDQUFDLE9BQU8sTUFBTSxFQUFFLGVBQWU7Q0FDcEMsR0FBRyxDQUFDLE9BQU8sS0FBSyxDQUFDO0NBQ2pCLENBQUM7O0NDYkQsSUFBSW1GLEdBQUMsR0FBR25GLE9BQThCLENBQUM7Q0FDdkMsSUFBSSxVQUFVLEdBQUdPLFVBQW9DLENBQUM7Q0FDdEQsSUFBSSxzQkFBc0IsR0FBR3NCLHdCQUFnRCxDQUFDO0NBQzlFLElBQUksUUFBUSxHQUFHQyxVQUFpQyxDQUFDO0NBQ2pELElBQUksb0JBQW9CLEdBQUdDLG9CQUErQyxDQUFDO0FBQzNFO0NBQ0E7Q0FDQTtBQUNBb0QsSUFBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUU7Q0FDaEYsRUFBRSxRQUFRLEVBQUUsU0FBUyxRQUFRLENBQUMsWUFBWSx1QkFBdUI7Q0FDakUsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztDQUNwRCxPQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDO0NBQ3BHLEdBQUc7Q0FDSCxDQUFDLENBQUM7O0NDYkYsSUFBSThGLGNBQVksR0FBR2pMLGNBQTJDLENBQUM7QUFDL0Q7S0FDQTJWLFVBQWMsR0FBRzFLLGNBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFROztDQ0hoRCxJQUFJLGFBQWEsR0FBR2pMLFVBQW9DLENBQUM7Q0FDekQsSUFBSSxjQUFjLEdBQUdPLFVBQXFDLENBQUM7QUFDM0Q7Q0FDQSxJQUFJb0UsZ0JBQWMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO0NBQ3JDLElBQUksZUFBZSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7QUFDdkM7S0FDQWdSLFVBQWMsR0FBRyxVQUFVLEVBQUUsRUFBRTtDQUMvQixFQUFFLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUM7Q0FDeEIsRUFBRSxJQUFJLEVBQUUsS0FBS2hSLGdCQUFjLEtBQUssRUFBRSxZQUFZLEtBQUssSUFBSSxHQUFHLEtBQUtBLGdCQUFjLENBQUMsUUFBUSxDQUFDLEVBQUUsT0FBTyxhQUFhLENBQUM7Q0FDOUcsRUFBRSxJQUFJLE9BQU8sRUFBRSxLQUFLLFFBQVEsSUFBSSxFQUFFLEtBQUssZUFBZSxLQUFLLEVBQUUsWUFBWSxNQUFNLElBQUksR0FBRyxLQUFLLGVBQWUsQ0FBQyxRQUFRLENBQUMsRUFBRTtDQUN0SCxJQUFJLE9BQU8sY0FBYyxDQUFDO0NBQzFCLEdBQUcsQ0FBQyxPQUFPLEdBQUcsQ0FBQztDQUNmLENBQUM7O0NDWkQsSUFBSXNFLFFBQU0sR0FBR2pKLFVBQXFDLENBQUM7QUFDbkQ7S0FDQTJWLFVBQWMsR0FBRzFNLFFBQU07O0NDRnZCLElBQUlBLFFBQU0sR0FBR2pKLFVBQXlDLENBQUM7QUFDdkQ7S0FDQTJWLFVBQWMsR0FBRzFNLFFBQU07O0tDRnZCLFFBQWMsR0FBR2pKLFVBQWtEOztDQ1M1RCxTQUFTNlYsbUJBQVQsT0FNZ0I7Q0FBQTs7Q0FBQSxNQUxyQjFFLGNBS3FCLFFBTHJCQSxjQUtxQjtDQUFBLE1BSnJCQyxhQUlxQixRQUpyQkEsYUFJcUI7Q0FDckIsTUFBTUMsT0FBTyxHQUFHRixjQUFoQjs7Q0FDQSx3QkFBNEJHLHlCQUFLLENBQUNDLFFBQU4sQ0FBeUIsRUFBekIsQ0FBNUI7Q0FBQTtDQUFBLE1BQU91RSxNQUFQO0NBQUEsTUFBZUMsU0FBZjs7Q0FFQSxNQUFNQyxZQUFZLEdBQUcxRSx5QkFBSyxDQUFDUSxXQUFOLENBQ25CLFVBQUMxQyxLQUFELEVBQXlCO0NBQ3ZCLFFBQUksQ0FBQzZHLFNBQUFILE1BQU0sTUFBTixDQUFBQSxNQUFNLEVBQVUxRyxLQUFWLENBQVgsRUFBNkI7Q0FBQTs7Q0FDM0IyRyxNQUFBQSxTQUFTLHlEQUFLRCxNQUFMLElBQWExRyxLQUFiLEdBQVQ7Q0FDRCxLQUZELE1BRU87Q0FDTDJHLE1BQUFBLFNBQVMsQ0FBQzFKLE9BQUF5SixNQUFNLE1BQU4sQ0FBQUEsTUFBTSxFQUFRLFVBQUNJLENBQUQ7Q0FBQSxlQUFPQSxDQUFDLEtBQUs5RyxLQUFiO0NBQUEsT0FBUixDQUFQLENBQVQ7Q0FDRDtDQUNGLEdBUGtCLEVBUW5CLENBQUMwRyxNQUFELENBUm1CLENBQXJCO0NBV0EsTUFBTXJDLFdBQVcsR0FBR25DLHlCQUFLLENBQUNRLFdBQU4sQ0FBa0IsWUFBWTtDQUFBOztDQUNoRCxRQUFNcUUsT0FBTyxHQUFHOUosbUJBQUErRSxhQUFhLENBQUMrRSxPQUFkLGtCQUE2QixVQUFDQyxDQUFEO0NBQUEsYUFDM0NILFNBQUFILE1BQU0sTUFBTixDQUFBQSxNQUFNLEVBQVVNLENBQUMsQ0FBQ2hILEtBQVosQ0FEcUM7Q0FBQSxLQUE3QixDQUFoQjs7Q0FJQSxRQUFNeUUsR0FBOEIsR0FBRztDQUNyQzdHLE1BQUFBLElBQUksRUFBRSxjQUQrQjtDQUVyQ29DLE1BQUFBLEtBQUssRUFBRXNFLElBQUF5QyxPQUFPLE1BQVAsQ0FBQUEsT0FBTyxFQUFLLFVBQUNDLENBQUQ7Q0FBQSxlQUFPQSxDQUFDLENBQUNDLElBQVQ7Q0FBQSxPQUFMLENBQVAsQ0FBMkJqVyxRQUEzQixFQUY4QjtDQUdyQytWLE1BQUFBLE9BQU8sRUFBUEE7Q0FIcUMsS0FBdkM7Q0FLQTlFLElBQUFBLE9BQU8sQ0FBQ1UsaUJBQVIsQ0FBMEJYLGFBQTFCLEVBQXlDeUMsR0FBekM7Q0FDQWtDLElBQUFBLFNBQVMsQ0FBQyxFQUFELENBQVQ7Q0FDRCxHQVptQixFQVlqQixDQUFDM0UsYUFBRCxFQUFnQkMsT0FBaEIsRUFBeUJ5RSxNQUF6QixDQVppQixDQUFwQjtDQWNBLE1BQU12RCxjQUFjLEdBQUduQixhQUFhLENBQUNtQixjQUFkLEdBQ25CbkIsYUFBYSxDQUFDbUIsY0FESyxHQUVuQixNQUZKO0NBSUEsc0JBQ0VqQix3Q0FBQ2tCLFlBQUQ7Q0FDRSxJQUFBLEVBQUUsRUFBRTtDQUNGQyxNQUFBQSxJQUFJLEVBQUUsVUFESjtDQUVGQyxNQUFBQSxPQUFPLEVBQUUsTUFGUDtDQUdGcUIsTUFBQUEsYUFBYSxFQUFFLFFBSGI7Q0FJRixlQUFTO0NBQ1B0QixRQUFBQSxJQUFJLEVBQUUsVUFEQztDQUVQcUIsUUFBQUEsUUFBUSxFQUFFO0NBRkgsT0FKUDtDQVFGLG1CQUFhO0NBQ1hFLFFBQUFBLEVBQUUsRUFBRTtDQURPO0NBUlg7Q0FETixLQWNHTixnQkFBQXRDLGFBQWEsQ0FBQytFLE9BQWQsa0JBQTBCLFVBQUNDLENBQUQ7Q0FBQTs7Q0FBQSx3QkFDekI5RSx3Q0FBQ3VCLGVBQUQ7Q0FDRSxNQUFBLEdBQUcsRUFBRWpFLG9CQUFBd0MsYUFBYSxDQUFDK0UsT0FBZCxrQkFBOEJDLENBQTlCLENBRFA7Q0FFRSxNQUFBLElBQUksRUFBQyxRQUZQO0NBR0UsTUFBQSxLQUFLLEVBQUVBLENBQUMsQ0FBQ2hILEtBSFg7Q0FJRSxNQUFBLE9BQU8sRUFBRSxpQkFBQ21CLENBQUQ7Q0FBQSxlQUFheUYsWUFBWSxDQUFDekYsQ0FBQyxDQUFDK0YsYUFBRixDQUFnQmxILEtBQWpCLENBQXpCO0NBQUEsT0FKWDtDQUtFLE1BQUEsT0FBTyxFQUFFLENBQUM2RyxTQUFBSCxNQUFNLE1BQU4sQ0FBQUEsTUFBTSxFQUFVTSxDQUFDLENBQUNoSCxLQUFaLENBQVAsR0FBNEIsVUFBNUIsR0FBeUMsV0FMcEQ7Q0FNRSxNQUFBLEtBQUssRUFBQztDQU5SLE9BUUdnSCxDQUFDLENBQUNDLElBUkwsQ0FEeUI7Q0FBQSxHQUExQixDQWRILGVBMEJFL0Usd0NBQUN1QixlQUFEO0NBQ0UsSUFBQSxJQUFJLEVBQUMsUUFEUDtDQUVFLElBQUEsT0FBTyxFQUFFWSxXQUZYO0NBR0UsSUFBQSxRQUFRLEVBQUVxQyxNQUFNLENBQUN6RyxNQUFQLEtBQWtCLENBSDlCO0NBSUUsSUFBQSxPQUFPLEVBQUMsV0FKVjtDQUtFLElBQUEsS0FBSyxFQUFDLFNBTFI7Q0FNRSxJQUFBLFNBQVMsZUFBRWlDLHdDQUFDd0IsYUFBRDtDQU5iLEtBUUdQLGNBUkgsQ0ExQkYsQ0FERjtDQXVDRDs7Q0N0RkQsSUFBSSxDQUFDLEdBQUd2UyxPQUE4QixDQUFDO0NBQ3ZDLElBQUksS0FBSyxHQUFHTyxjQUF1QyxDQUFDLElBQUksQ0FBQztBQUV6RDtDQUNBLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQztDQUNsQixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDdkI7Q0FDQTtDQUNBLElBQUksSUFBSSxJQUFJLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxFQUFFLFdBQVcsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDckU7Q0FDQTtDQUNBO0NBQ0EsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsRUFBRTtDQUN6RCxFQUFFLElBQUksRUFBRSxTQUFTLElBQUksQ0FBQyxVQUFVLDJCQUEyQjtDQUMzRCxJQUFJLE9BQU8sS0FBSyxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDO0NBQ3BGLEdBQUc7Q0FDSCxDQUFDLENBQUM7O0NDaEJGLElBQUksWUFBWSxHQUFHUCxjQUEyQyxDQUFDO0FBQy9EO0tBQ0F1VyxNQUFjLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUk7O0NDSDNDLElBQUlBLE1BQUksR0FBR3ZXLE1BQWdDLENBQUM7QUFDNUM7Q0FDQSxJQUFJLGNBQWMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO0FBQ3JDO0tBQ0EsTUFBYyxHQUFHLFVBQVUsRUFBRSxFQUFFO0NBQy9CLEVBQUUsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztDQUNwQixFQUFFLE9BQU8sRUFBRSxLQUFLLGNBQWMsS0FBSyxFQUFFLFlBQVksS0FBSyxJQUFJLEdBQUcsS0FBSyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUd1VyxNQUFJLEdBQUcsR0FBRyxDQUFDO0NBQ3BHLENBQUM7O0NDUEQsSUFBSXROLFFBQU0sR0FBR2pKLE1BQWlDLENBQUM7QUFDL0M7S0FDQXVXLE1BQWMsR0FBR3ROLFFBQU07O0NDRnZCLElBQUksTUFBTSxHQUFHakosTUFBcUMsQ0FBQztBQUNuRDtLQUNBdVcsTUFBYyxHQUFHLE1BQU07O0tDRnZCLElBQWMsR0FBR3ZXLE1BQThDOztDQ014RCxTQUFTd1csY0FBVCxPQU1nQjtDQUFBOztDQUFBLE1BTHJCckYsY0FLcUIsUUFMckJBLGNBS3FCO0NBQUEsTUFKckJDLGFBSXFCLFFBSnJCQSxhQUlxQjtDQUNyQixNQUFNQyxPQUFPLEdBQUdGLGNBQWhCO0NBRUEsTUFBTXNDLFdBQVcsR0FBR25DLHlCQUFLLENBQUNRLFdBQU4sQ0FDbEIsVUFBQzFDLEtBQUQsRUFBeUI7Q0FBQTs7Q0FDdkIsUUFBTXZDLE1BQU0sR0FBRzRKLGdCQUFBckYsYUFBYSxDQUFDK0UsT0FBZCxpQkFBMkIsVUFBQ0MsQ0FBRDtDQUFBLGFBQU9BLENBQUMsQ0FBQ2hILEtBQUYsS0FBWUEsS0FBbkI7Q0FBQSxLQUEzQixDQUFmOztDQUNBLFFBQUksQ0FBQ3ZDLE1BQUwsRUFBYTtDQUNYLFlBQU0sSUFBSTBDLEtBQUosMEJBQTRCSCxLQUE1QixFQUFOO0NBQ0Q7O0NBQ0QsUUFBTXlFLEdBQXlCLEdBQUc7Q0FDaEM3RyxNQUFBQSxJQUFJLEVBQUUsUUFEMEI7Q0FFaENvQyxNQUFBQSxLQUFLLEVBQUV2QyxNQUFNLENBQUN3SixJQUZrQjtDQUdoQ3hKLE1BQUFBLE1BQU0sRUFBTkE7Q0FIZ0MsS0FBbEM7Q0FLQXdFLElBQUFBLE9BQU8sQ0FBQ1UsaUJBQVIsQ0FBMEJYLGFBQTFCLEVBQXlDeUMsR0FBekM7Q0FDRCxHQVppQixFQWFsQixDQUFDekMsYUFBRCxFQUFnQkMsT0FBaEIsQ0Fia0IsQ0FBcEI7Q0FnQkEsc0JBQ0VDLHdDQUFDa0IsWUFBRDtDQUNFLElBQUEsRUFBRSxFQUFFO0NBQ0ZDLE1BQUFBLElBQUksRUFBRSxVQURKO0NBRUZDLE1BQUFBLE9BQU8sRUFBRSxNQUZQO0NBR0ZxQixNQUFBQSxhQUFhLEVBQUUsUUFIYjtDQUlGLGVBQVM7Q0FDUHRCLFFBQUFBLElBQUksRUFBRSxVQURDO0NBRVBxQixRQUFBQSxRQUFRLEVBQUU7Q0FGSCxPQUpQO0NBUUYsbUJBQWE7Q0FDWEUsUUFBQUEsRUFBRSxFQUFFO0NBRE87Q0FSWDtDQUROLEtBY0dOLGdCQUFBdEMsYUFBYSxDQUFDK0UsT0FBZCxrQkFBMEIsVUFBQ0MsQ0FBRDtDQUFBOztDQUFBLHdCQUN6QjlFLHdDQUFDdUIsZUFBRDtDQUNFLE1BQUEsR0FBRyxFQUFFakUsb0JBQUF3QyxhQUFhLENBQUMrRSxPQUFkLGtCQUE4QkMsQ0FBOUIsQ0FEUDtDQUVFLE1BQUEsSUFBSSxFQUFDLFFBRlA7Q0FHRSxNQUFBLEtBQUssRUFBRUEsQ0FBQyxDQUFDaEgsS0FIWDtDQUlFLE1BQUEsT0FBTyxFQUFFLGlCQUFDbUIsQ0FBRDtDQUFBLGVBQWFrRCxXQUFXLENBQUNsRCxDQUFDLENBQUMrRixhQUFGLENBQWdCbEgsS0FBakIsQ0FBeEI7Q0FBQSxPQUpYO0NBS0UsTUFBQSxPQUFPLEVBQUMsV0FMVjtDQU1FLE1BQUEsS0FBSyxFQUFDO0NBTlIsT0FRR2dILENBQUMsQ0FBQ0MsSUFSTCxDQUR5QjtDQUFBLEdBQTFCLENBZEgsQ0FERjtDQTZCRDs7Q0N0RE0sU0FBU0ssWUFBVCxPQU1nQjtDQUFBLE1BTHJCdkYsY0FLcUIsUUFMckJBLGNBS3FCO0NBQUEsTUFKckJDLGFBSXFCLFFBSnJCQSxhQUlxQjtDQUNyQixNQUFNQyxPQUFPLEdBQUdGLGNBQWhCOztDQUNBLHdCQUEwQkcseUJBQUssQ0FBQ0MsUUFBTixDQUFlSCxhQUFhLENBQUN1RixZQUE3QixDQUExQjtDQUFBO0NBQUEsTUFBT3ZILEtBQVA7Q0FBQSxNQUFjd0gsUUFBZDs7Q0FFQSxNQUFNbkQsV0FBVyxHQUFHbkMseUJBQUssQ0FBQ1EsV0FBTixDQUFrQixZQUFZO0NBQ2hELFFBQUkxQyxLQUFKLEVBQVc7Q0FDVCxVQUFNeUUsR0FBdUIsR0FBRztDQUFFN0csUUFBQUEsSUFBSSxFQUFFLE1BQVI7Q0FBZ0JvQyxRQUFBQSxLQUFLLEVBQUxBO0NBQWhCLE9BQWhDO0NBQ0FpQyxNQUFBQSxPQUFPLENBQUNVLGlCQUFSLENBQTBCWCxhQUExQixFQUF5Q3lDLEdBQXpDO0NBQ0ErQyxNQUFBQSxRQUFRLENBQUMsRUFBRCxDQUFSO0NBQ0Q7Q0FDRixHQU5tQixFQU1qQixDQUFDeEYsYUFBRCxFQUFnQkMsT0FBaEIsRUFBeUJqQyxLQUF6QixDQU5pQixDQUFwQjtDQVFBLE1BQU15SCxhQUFhLEdBQUd2Rix5QkFBSyxDQUFDUSxXQUFOLENBQ3BCLFVBQUN2QixDQUFELEVBQXVEO0NBQ3JELFFBQUlBLENBQUMsQ0FBQ3VHLFdBQUYsQ0FBY0MsV0FBbEIsRUFBK0I7Q0FDN0I7Q0FDRDs7Q0FFRCxRQUFJeEcsQ0FBQyxDQUFDeUcsR0FBRixLQUFVLE9BQVYsSUFBcUIsQ0FBQ3pHLENBQUMsQ0FBQzBHLFFBQTVCLEVBQXNDO0NBQ3BDMUcsTUFBQUEsQ0FBQyxDQUFDMkcsY0FBRjtDQUNBekQsTUFBQUEsV0FBVztDQUNaO0NBQ0YsR0FWbUIsRUFXcEIsQ0FBQ0EsV0FBRCxDQVhvQixDQUF0QjtDQWNBLE1BQU1sQixjQUFjLEdBQUduQixhQUFhLENBQUNtQixjQUFkLEdBQ25CbkIsYUFBYSxDQUFDbUIsY0FESyxHQUVuQixNQUZKO0NBSUEsc0JBQ0VqQix3Q0FBQ2tCLFlBQUQ7Q0FDRSxJQUFBLEVBQUUsRUFBRTtDQUNGQyxNQUFBQSxJQUFJLEVBQUUsVUFESjtDQUVGQyxNQUFBQSxPQUFPLEVBQUUsTUFGUDtDQUdGLGVBQVM7Q0FDUEQsUUFBQUEsSUFBSSxFQUFFLFVBREM7Q0FFUEUsUUFBQUEsUUFBUSxFQUFFO0NBRkgsT0FIUDtDQU9GLG1CQUFhO0NBQ1hDLFFBQUFBLEVBQUUsRUFBRTtDQURPLE9BUFg7Q0FVRix1QkFBaUI7Q0FDZkgsUUFBQUEsSUFBSSxFQUFFO0NBRFM7Q0FWZjtDQUROLGtCQWdCRW5CLHdDQUFDNkYsa0JBQUQ7Q0FDRSxJQUFBLFdBQVcsRUFBRS9GLGFBQWEsQ0FBQ2dHLFdBRDdCO0NBRUUsSUFBQSxLQUFLLEVBQUVoSSxLQUZUO0NBR0UsSUFBQSxRQUFRLEVBQUUsa0JBQUNtQixDQUFEO0NBQUEsYUFBYXFHLFFBQVEsQ0FBQ3JHLENBQUMsQ0FBQ2tFLE1BQUYsQ0FBU3JGLEtBQVYsQ0FBckI7Q0FBQSxLQUhaO0NBSUUsSUFBQSxTQUFTLE1BSlg7Q0FLRSxJQUFBLFNBQVMsTUFMWDtDQU1FLElBQUEsVUFBVSxFQUFFO0NBQUVpSSxNQUFBQSxTQUFTLEVBQUVSO0NBQWIsS0FOZDtDQU9FLElBQUEsT0FBTyxFQUFDLFVBUFY7Q0FRRSxJQUFBLE9BQU8sRUFBRTtDQVJYLElBaEJGLGVBMEJFdkYsd0NBQUN1QixlQUFEO0NBQ0UsSUFBQSxJQUFJLEVBQUMsUUFEUDtDQUVFLElBQUEsT0FBTyxFQUFFWSxXQUZYO0NBR0UsSUFBQSxRQUFRLEVBQUUsQ0FBQ3JFLEtBSGI7Q0FJRSxJQUFBLE9BQU8sRUFBQyxXQUpWO0NBS0UsSUFBQSxLQUFLLEVBQUMsU0FMUjtDQU1FLElBQUEsU0FBUyxlQUFFa0Msd0NBQUN3QixhQUFEO0NBTmIsS0FRR1AsY0FSSCxDQTFCRixDQURGO0NBdUNEOztDQzNETSxTQUFTK0UsT0FBVCxPQUlpQjtDQUFBLE1BSHRCbkcsY0FHc0IsUUFIdEJBLGNBR3NCO0NBQ3RCLE1BQU1FLE9BQU8sR0FBR0YsY0FBaEI7O0NBQ0Esd0JBQWdDRyx5QkFBSyxDQUFDQyxRQUFOLENBQWVGLE9BQU8sQ0FBQ2tHLFdBQVIsRUFBZixDQUFoQztDQUFBO0NBQUEsTUFBT2hLLFFBQVA7Q0FBQSxNQUFpQmlLLFdBQWpCOztDQUNBLHlCQUE0QmxHLHlCQUFLLENBQUNDLFFBQU4sQ0FBZUYsT0FBTyxDQUFDb0csZ0JBQVIsRUFBZixDQUE1QjtDQUFBO0NBQUEsTUFBT0MsTUFBUDtDQUFBLE1BQWVDLFNBQWY7O0NBRUEsTUFBTUMsTUFBTSxHQUFHdEcseUJBQUssQ0FBQ3VHLE1BQU4sQ0FBNkIsSUFBN0IsQ0FBZjtDQUNBLE1BQU1DLE1BQU0sR0FBR3hHLHlCQUFLLENBQUNRLFdBQU4sQ0FBa0IsWUFBWTtDQUMzQyxRQUFJOEYsTUFBTSxDQUFDRyxPQUFYLEVBQW9CO0NBQ2xCSCxNQUFBQSxNQUFNLENBQUNHLE9BQVAsQ0FBZUMsU0FBZixHQUEyQkosTUFBTSxDQUFDRyxPQUFQLENBQWVFLFlBQTFDLENBRGtCO0NBR25CO0NBQ0YsR0FMYyxFQUtaLENBQUNMLE1BQUQsQ0FMWSxDQUFmO0NBTUF0RyxFQUFBQSx5QkFBSyxDQUFDNEcsU0FBTixDQUFnQixZQUFNO0NBQ3BCLGFBQVNDLHFCQUFULEdBQXVDO0NBQ3JDWCxNQUFBQSxXQUFXLG9CQUFLbkcsT0FBTyxDQUFDa0csV0FBUixFQUFMLEVBQVg7Q0FDQU8sTUFBQUEsTUFBTTtDQUNQOztDQUNELGFBQVNNLG1CQUFULEdBQXFDO0NBQ25DVCxNQUFBQSxTQUFTLENBQUN0RyxPQUFPLENBQUNvRyxnQkFBUixFQUFELENBQVQ7Q0FDQUssTUFBQUEsTUFBTTtDQUNQOztDQUNEekcsSUFBQUEsT0FBTyxDQUFDZ0gsb0JBQVIsQ0FBNkJGLHFCQUE3QjtDQUNBOUcsSUFBQUEsT0FBTyxDQUFDaUgsa0JBQVIsQ0FBMkJGLG1CQUEzQjtDQUNELEdBWEQsRUFXRyxDQUFDL0csT0FBRCxFQUFVeUcsTUFBVixDQVhIO0NBaUJBLE1BQU1TLGVBQWUsR0FBR2pILHlCQUFLLENBQUNrSCxPQUFOLENBQWMsWUFBMkI7Q0FDL0QsUUFBSSxDQUFDZCxNQUFELElBQVdBLE1BQU0sQ0FBQzFLLElBQVAsS0FBZ0IsUUFBL0IsRUFBeUM7Q0FDdkMsYUFBTyxJQUFQO0NBQ0Q7O0NBQ0QsV0FBUTBLLE1BQUQsQ0FDSmUsU0FESDtDQUVELEdBTnVCLEVBTXJCLENBQUNmLE1BQUQsQ0FOcUIsQ0FBeEI7Q0FRQSxNQUFNZ0IsVUFBVSxHQUFHO0NBQ2pCMUwsSUFBQUEsSUFBSSxFQUFFLE1BRFc7Q0FFakJ3QyxJQUFBQSxPQUFPLEVBQUUsa0JBRlE7Q0FHakJDLElBQUFBLElBQUksRUFBRTtDQUhXLEdBQW5CO0NBTUEsTUFBSWtKLFFBQVEsR0FBR0MsS0FBSyxDQUFDLENBQUQsQ0FBcEI7Q0FDQSxNQUFJQyxRQUFRLEdBQUdELEtBQUssQ0FBQyxDQUFELENBQXBCO0NBRUEsc0JBQ0V0SCx3Q0FBQ2tCLFlBQUQ7Q0FDRSxJQUFBLEVBQUUsRUFBRTtDQUNGc0csTUFBQUEsTUFBTSxFQUFFLE1BRE47Q0FFRkMsTUFBQUEsS0FBSyxFQUFFLE1BRkw7Q0FHRkMsTUFBQUEsQ0FBQyxFQUFFLENBSEQ7Q0FJRkMsTUFBQUEsT0FBTyxFQUFFLG9CQUpQO0NBS0Z2RyxNQUFBQSxPQUFPLEVBQUUsTUFMUDtDQU1GcUIsTUFBQUEsYUFBYSxFQUFFLFFBTmI7Q0FPRixlQUFTO0NBQ1BELFFBQUFBLFFBQVEsRUFBRTtDQURILE9BUFA7Q0FVRixtQkFBYTtDQUNYRSxRQUFBQSxFQUFFLEVBQUU7Q0FETztDQVZYO0NBRE4sa0JBZ0JFMUMsd0NBQUNrQixZQUFEO0NBQ0UsSUFBQSxFQUFFLEVBQUU7Q0FDRkMsTUFBQUEsSUFBSSxFQUFFLFFBREo7Q0FFRnlHLE1BQUFBLFNBQVMsRUFBRSxNQUZUO0NBR0ZDLE1BQUFBLHVCQUF1QixFQUFFLE9BSHZCO0NBSUZ6RyxNQUFBQSxPQUFPLEVBQUUsTUFKUDtDQUtGcUIsTUFBQUEsYUFBYSxFQUFFLFFBTGI7Q0FNRixlQUFTO0NBQ1BELFFBQUFBLFFBQVEsRUFBRTtDQURIO0NBTlAsS0FETjtDQVdFLElBQUEsR0FBRyxFQUFFOEQ7Q0FYUCxLQWFHbEUsSUFBQW5HLFFBQVEsTUFBUixDQUFBQSxRQUFRLEVBQUssVUFBQzZMLEdBQUQsRUFBNkI7Q0FDekMsUUFBSXhFLFFBQVEsR0FBRyxLQUFmO0NBQ0EsUUFBSUMsUUFBUSxHQUFHLENBQUMsQ0FBQ3hELE9BQU8sQ0FBQ2dJLFNBQVIsR0FBb0JDLFlBQXJDOztDQUNBLFFBQUksQ0FBQyxDQUFDakksT0FBTyxDQUFDZ0ksU0FBUixHQUFvQkMsWUFBdEIsSUFBc0MsQ0FBQ0YsR0FBRyxDQUFDNUssU0FBL0MsRUFBMEQ7Q0FDeEQsVUFBTXVKLE9BQU8sR0FBR2EsS0FBSyxDQUNuQlEsR0FBRyxDQUFDN0ssU0FBSixHQUFnQjZLLEdBQUcsQ0FBQzdLLFNBQXBCLEdBQWdDNkssR0FBRyxDQUFDakwsU0FEakIsQ0FBckI7O0NBSUEsVUFBSTRKLE9BQU8sQ0FBQ3dCLE1BQVIsQ0FBZSxVQUFmLE1BQStCWixRQUFRLENBQUNZLE1BQVQsQ0FBZ0IsVUFBaEIsQ0FBbkMsRUFBZ0U7Q0FDOUQzRSxRQUFBQSxRQUFRLEdBQUcsSUFBWDtDQUNEOztDQUNEK0QsTUFBQUEsUUFBUSxHQUFHWixPQUFYOztDQUVBLFVBQUlBLE9BQU8sQ0FBQ3lCLElBQVIsQ0FBYVgsUUFBYixJQUF5QixLQUE3QixFQUFxQztDQUNuQ2hFLFFBQUFBLFFBQVEsR0FBRyxLQUFYO0NBQ0QsT0FGRCxNQUVPO0NBQ0xnRSxRQUFBQSxRQUFRLEdBQUdkLE9BQVg7Q0FDRDtDQUNGOztDQUNELFFBQUlxQixHQUFHLENBQUNwTSxJQUFKLEtBQWEsTUFBYixJQUF1Qm9NLEdBQUcsQ0FBQ3BNLElBQUosS0FBYSxLQUF4QyxFQUErQztDQUM3QywwQkFDRXNFLHdDQUFDLFVBQUQ7Q0FDRSxRQUFBLEdBQUcsRUFBRTFDLFFBQUFyQixRQUFRLE1BQVIsQ0FBQUEsUUFBUSxFQUFTNkwsR0FBVCxDQURmO0NBRUUsUUFBQSxFQUFFLG1CQUFZeEssUUFBQXJCLFFBQVEsTUFBUixDQUFBQSxRQUFRLEVBQVM2TCxHQUFULENBQVIsR0FBd0IsQ0FBcEMsQ0FGSjtDQUdFLFFBQUEsT0FBTyxFQUFFQSxHQUhYO0NBSUUsUUFBQSxRQUFRLEVBQUV4RSxRQUpaO0NBS0UsUUFBQSxRQUFRLEVBQUVDO0NBTFosUUFERjtDQVNEOztDQUNELHdCQUNFdkQsd0NBQUMsVUFBRDtDQUNFLE1BQUEsR0FBRyxFQUFFMUMsUUFBQXJCLFFBQVEsTUFBUixDQUFBQSxRQUFRLEVBQVM2TCxHQUFULENBRGY7Q0FFRSxNQUFBLEVBQUUsbUJBQVl4SyxRQUFBckIsUUFBUSxNQUFSLENBQUFBLFFBQVEsRUFBUzZMLEdBQVQsQ0FBUixHQUF3QixDQUFwQyxDQUZKO0NBR0UsTUFBQSxPQUFPLEVBQUVWLFVBSFg7Q0FJRSxNQUFBLFFBQVEsRUFBRTlELFFBSlo7Q0FLRSxNQUFBLFFBQVEsRUFBRUM7Q0FMWixNQURGO0NBU0QsR0F2Q1EsQ0FiWCxDQWhCRixlQXNFRXZELHdDQUFDa0IsWUFBRDtDQUNFLElBQUEsRUFBRSxFQUFFO0NBQ0ZDLE1BQUFBLElBQUksRUFBRSxVQURKO0NBRUZDLE1BQUFBLE9BQU8sRUFBRSxNQUZQO0NBR0YrRyxNQUFBQSxZQUFZLEVBQUUsVUFIWjtDQUlGLGVBQVM7Q0FDUDlHLFFBQUFBLFFBQVEsRUFBRTtDQURIO0NBSlA7Q0FETixLQVVHK0UsTUFBTSxJQUFJQSxNQUFNLENBQUMxSyxJQUFQLEtBQWdCLE1BQTFCLGlCQUNDc0Usd0NBQUMsWUFBRDtDQUNFLElBQUEsY0FBYyxFQUFFRCxPQURsQjtDQUVFLElBQUEsYUFBYSxFQUFFcUc7Q0FGakIsSUFYSixFQWdCR0EsTUFBTSxJQUFJQSxNQUFNLENBQUMxSyxJQUFQLEtBQWdCLFFBQTFCLGlCQUNDc0Usd0NBQUMsY0FBRDtDQUNFLElBQUEsY0FBYyxFQUFFRCxPQURsQjtDQUVFLElBQUEsYUFBYSxFQUFFcUc7Q0FGakIsSUFqQkosRUFzQkdBLE1BQU0sSUFBSUEsTUFBTSxDQUFDMUssSUFBUCxLQUFnQixjQUExQixpQkFDQ3NFLHdDQUFDLG1CQUFEO0NBQ0UsSUFBQSxjQUFjLEVBQUVELE9BRGxCO0NBRUUsSUFBQSxhQUFhLEVBQUVxRztDQUZqQixJQXZCSixFQTRCR0EsTUFBTSxJQUFJQSxNQUFNLENBQUMxSyxJQUFQLEtBQWdCLE1BQTFCLGlCQUNDc0Usd0NBQUMsWUFBRDtDQUNFLElBQUEsY0FBYyxFQUFFRCxPQURsQjtDQUVFLElBQUEsYUFBYSxFQUFFcUc7Q0FGakIsSUE3QkosRUFrQ0dBLE1BQU0sSUFBSUEsTUFBTSxDQUFDMUssSUFBUCxLQUFnQixPQUExQixpQkFDQ3NFLHdDQUFDLGFBQUQ7Q0FDRSxJQUFBLGNBQWMsRUFBRUQsT0FEbEI7Q0FFRSxJQUFBLGFBQWEsRUFBRXFHO0NBRmpCLElBbkNKLEVBd0NHQSxNQUFNLElBQUlBLE1BQU0sQ0FBQzFLLElBQVAsS0FBZ0IsUUFBMUIsaUJBQ0NzRSx3Q0FBQyxlQUFEO0NBQ0UsSUFBQSxjQUFjLEVBQUVELE9BRGxCO0NBRUUsSUFBQSxhQUFhLEVBQUVxRztDQUZqQixJQXpDSixDQXRFRixDQURGO0NBd0hEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=

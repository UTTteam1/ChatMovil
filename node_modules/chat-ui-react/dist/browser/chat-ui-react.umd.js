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
 * @package @babel/runtime
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
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@mui/material'), require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', '@mui/material', 'react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ChatUiReact = {}, global.MaterialUI, global.React));
}(this, (function (exports, material, React) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
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

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
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
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

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

        return new Promise(function (resolve) {
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
        var _this2 = this;

        this.state.onMessagesChanged.map(function (h) {
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
        var idx = this.state.onMessagesChanged.indexOf(callback); // eslint-disable-next-line @typescript-eslint/no-empty-function

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

        return new Promise(function (resolve, reject) {
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

          return regenerator.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this$state$action2 = this.state.action, origReq = _this$state$action2.request, responses = _this$state$action2.responses, onResnponsed = _this$state$action2.onResnponsed;

                  if (!(request !== origReq)) {
                    _context.next = 3;
                    break;
                  }

                  throw new Error('Invalid action.');

                case 3:
                  if (!(!request.always && onResnponsed.length === 0)) {
                    _context.next = 5;
                    break;
                  }

                  throw new Error('onResponsed is not set.');

                case 5:
                  responses.push(response);
                  this.callOnActionChanged(request, response);

                  if (!request.addMessage) {
                    _context.next = 10;
                    break;
                  }

                  _context.next = 10;
                  return this.addMessage({
                    type: 'text',
                    content: response.value,
                    self: true
                  });

                case 10:
                  onResnponsed.map(function (h) {
                    return h(response);
                  });

                case 11:
                case "end":
                  return _context.stop();
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
        this.state.onActionChanged.map(function (h) {
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
        var idx = this.state.onActionChanged.indexOf(callback); // eslint-disable-next-line @typescript-eslint/no-empty-function

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
                  return _context2.abrupt("return", new Promise(function (resolve) {
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
                  return _context3.abrupt("return", new Promise(function (resolve) {
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
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

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
        var value = files.map(function (f) {
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
    }, /*#__PURE__*/React__default['default'].createElement(material.List, null, files.map(function (f) {
      return /*#__PURE__*/React__default['default'].createElement("div", {
        key: "".concat(f.name, "-").concat(f.size)
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

  function MuiMultiSelectInput(_ref) {
    var chatController = _ref.chatController,
        actionRequest = _ref.actionRequest;
    var chatCtl = chatController;

    var _React$useState = React__default['default'].useState([]),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        values = _React$useState2[0],
        setValues = _React$useState2[1];

    var handleSelect = React__default['default'].useCallback(function (value) {
      if (!values.includes(value)) {
        setValues([].concat(_toConsumableArray(values), [value]));
      } else {
        setValues(values.filter(function (v) {
          return v !== value;
        }));
      }
    }, [values]);
    var setResponse = React__default['default'].useCallback(function () {
      var options = actionRequest.options.filter(function (o) {
        return values.includes(o.value);
      });
      var res = {
        type: 'multi-select',
        value: options.map(function (o) {
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
    }, actionRequest.options.map(function (o) {
      return /*#__PURE__*/React__default['default'].createElement(material.Button, {
        key: actionRequest.options.indexOf(o),
        type: "button",
        value: o.value,
        onClick: function onClick(e) {
          return handleSelect(e.currentTarget.value);
        },
        variant: !values.includes(o.value) ? 'outlined' : 'contained',
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

  function MuiSelectInput(_ref) {
    var chatController = _ref.chatController,
        actionRequest = _ref.actionRequest;
    var chatCtl = chatController;
    var setResponse = React__default['default'].useCallback(function (value) {
      var option = actionRequest.options.find(function (o) {
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
    }, actionRequest.options.map(function (o) {
      return /*#__PURE__*/React__default['default'].createElement(material.Button, {
        key: actionRequest.options.indexOf(o),
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
    }, messages.map(function (msg) {
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
          key: messages.indexOf(msg),
          id: "cu-msg-".concat(messages.indexOf(msg) + 1),
          message: msg,
          showDate: showDate,
          showTime: showTime
        });
      }

      return /*#__PURE__*/React__default['default'].createElement(MuiMessage, {
        key: messages.indexOf(msg),
        id: "cu-msg-".concat(messages.indexOf(msg) + 1),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC11aS1yZWFjdC51bWQuanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRob3V0SG9sZXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwiLi4vLi4vc3JjL2NoYXQtY29udHJvbGxlci50cyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hdWRpby1yZWNvcmRlci1wb2x5ZmlsbC93YXZlLWVuY29kZXIvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYXVkaW8tcmVjb3JkZXItcG9seWZpbGwvaW5kZXguanMiLCIuLi8uLi9zcmMvYXVkaW8tbWVkaWEtcmVjb3JkZXIudHMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRoSG9sZXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXkuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZGF5anMvZGF5anMubWluLmpzIiwiLi4vLi4vc3JjL211aS9NdWlBdWRpb0lucHV0LnRzeCIsIi4uLy4uL3NyYy9tdWkvTXVpRmlsZUlucHV0LnRzeCIsIi4uLy4uL3NyYy9tdWkvTXVpTWVzc2FnZS50c3giLCIuLi8uLi9zcmMvbXVpL011aU11bHRpU2VsZWN0SW5wdXQudHN4IiwiLi4vLi4vc3JjL211aS9NdWlTZWxlY3RJbnB1dC50c3giLCIuLi8uLi9zcmMvbXVpL011aVRleHRJbnB1dC50c3giLCIuLi8uLi9zcmMvbXVpL011aUNoYXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRob3V0SG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVNwcmVhZCBmcm9tIFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiaW1wb3J0IGRlZmluZVByb3BlcnR5IGZyb20gXCIuL2RlZmluZVByb3BlcnR5LmpzXCI7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcblxuICAgIGlmIChlbnVtZXJhYmxlT25seSkge1xuICAgICAgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gIH1cblxuICByZXR1cm4ga2V5cztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG5cbiAgICBpZiAoaSAlIDIpIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBkZWZpbmUoSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIGRlZmluZShHcCwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gIGRlZmluZShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvbik7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBhc3luY0l0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIGRlZmluZShHcCwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICBkZWZpbmUoR3AsIFwidG9TdHJpbmdcIiwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIGluIG1vZGVybiBlbmdpbmVzXG4gIC8vIHdlIGNhbiBleHBsaWNpdGx5IGFjY2VzcyBnbG9iYWxUaGlzLiBJbiBvbGRlciBlbmdpbmVzIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJvYmplY3RcIikge1xuICAgIGdsb2JhbFRoaXMucmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbiAgfSBlbHNlIHtcbiAgICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiaW1wb3J0IHtcbiAgQWN0aW9uUmVxdWVzdCxcbiAgQWN0aW9uUmVzcG9uc2UsXG4gIENoYXRPcHRpb24sXG4gIE1lc3NhZ2UsXG4gIE1lc3NhZ2VDb250ZW50LFxuICBPbkFjdGlvbkNoYW5nZWQsXG4gIE9uQWN0aW9uUmVzcG9uc2VkLFxuICBPbk1lc3NhZ2VzQ2hhbmdlZCxcbn0gZnJvbSAnLi9jaGF0LXR5cGVzJztcblxuaW50ZXJmYWNlIENoYXRTdGF0ZSB7XG4gIG9wdGlvbjogQ2hhdE9wdGlvbjtcbiAgbWVzc2FnZXM6IE1lc3NhZ2U8TWVzc2FnZUNvbnRlbnQ+W107XG4gIGFjdGlvbjogQWN0aW9uO1xuICBhY3Rpb25IaXN0b3J5OiBBY3Rpb25bXTtcbiAgb25NZXNzYWdlc0NoYW5nZWQ6IE9uTWVzc2FnZXNDaGFuZ2VkW107XG4gIG9uQWN0aW9uQ2hhbmdlZDogT25BY3Rpb25DaGFuZ2VkW107XG59XG5cbmludGVyZmFjZSBBY3Rpb24ge1xuICByZXF1ZXN0OiBBY3Rpb25SZXF1ZXN0O1xuICByZXNwb25zZXM6IEFjdGlvblJlc3BvbnNlW107XG4gIG9uUmVzbnBvbnNlZDogT25BY3Rpb25SZXNwb25zZWRbXTtcbn1cblxuZXhwb3J0IGNsYXNzIENoYXRDb250cm9sbGVyIHtcbiAgcHJpdmF0ZSBzdGF0ZTogQ2hhdFN0YXRlO1xuXG4gIHByaXZhdGUgZGVmYXVsdE9wdGlvbjogQ2hhdE9wdGlvbiA9IHtcbiAgICBkZWxheTogMzAwLFxuICB9O1xuXG4gIHByaXZhdGUgZW1wdHlBY3Rpb246IEFjdGlvbiA9IHtcbiAgICByZXF1ZXN0OiB7IHR5cGU6ICdlbXB0eScgfSxcbiAgICByZXNwb25zZXM6IFtdLFxuICAgIG9uUmVzbnBvbnNlZDogW10sXG4gIH07XG5cbiAgcHJpdmF0ZSBkZWZhdWx0QWN0aW9uUmVxdWVzdCA9IHtcbiAgICBhbHdheXM6IGZhbHNlLFxuICAgIGFkZE1lc3NhZ2U6IHRydWUsXG4gIH07XG5cbiAgY29uc3RydWN0b3Iob3B0aW9uPzogQ2hhdE9wdGlvbikge1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcHRpb246IHsgLi4udGhpcy5kZWZhdWx0T3B0aW9uLCAuLi5vcHRpb24gfSxcbiAgICAgIG1lc3NhZ2VzOiBbXSxcbiAgICAgIGFjdGlvbjogdGhpcy5lbXB0eUFjdGlvbixcbiAgICAgIGFjdGlvbkhpc3Rvcnk6IFtdLFxuICAgICAgb25NZXNzYWdlc0NoYW5nZWQ6IFtdLFxuICAgICAgb25BY3Rpb25DaGFuZ2VkOiBbXSxcbiAgICB9O1xuICB9XG5cbiAgYWRkTWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlPE1lc3NhZ2VDb250ZW50Pik6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgbGVuID0gdGhpcy5zdGF0ZS5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICAgICAgICBjb25zdCBpZHggPSBsZW4gLSAxO1xuICAgICAgICB0aGlzLnN0YXRlLm1lc3NhZ2VzW2lkeF0uY3JlYXRlZEF0ID0gbmV3IERhdGUoKTtcbiAgICAgICAgdGhpcy5jYWxsT25NZXNzYWdlc0NoYW5nZWQoKTtcblxuICAgICAgICByZXNvbHZlKGlkeCk7XG4gICAgICB9LCB0aGlzLnN0YXRlLm9wdGlvbi5kZWxheSk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVNZXNzYWdlKGluZGV4OiBudW1iZXIsIG1lc3NhZ2U6IE1lc3NhZ2U8TWVzc2FnZUNvbnRlbnQ+KTogdm9pZCB7XG4gICAgaWYgKG1lc3NhZ2UgIT09IHRoaXMuc3RhdGUubWVzc2FnZXNbaW5kZXhdKSB7XG4gICAgICBjb25zdCB7IGNyZWF0ZWRBdCB9ID0gdGhpcy5zdGF0ZS5tZXNzYWdlc1tpbmRleF07XG4gICAgICB0aGlzLnN0YXRlLm1lc3NhZ2VzW2luZGV4XSA9IG1lc3NhZ2U7XG4gICAgICB0aGlzLnN0YXRlLm1lc3NhZ2VzW2luZGV4XS5jcmVhdGVkQXQgPSBjcmVhdGVkQXQ7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZS5tZXNzYWdlc1tpbmRleF0udXBkYXRlZEF0ID0gbmV3IERhdGUoKTtcbiAgICB0aGlzLmNhbGxPbk1lc3NhZ2VzQ2hhbmdlZCgpO1xuICB9XG5cbiAgcmVtb3ZlTWVzc2FnZShpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZS5tZXNzYWdlc1tpbmRleF0uZGVsZXRlZEF0ID0gbmV3IERhdGUoKTtcbiAgICB0aGlzLmNhbGxPbk1lc3NhZ2VzQ2hhbmdlZCgpO1xuICB9XG5cbiAgZ2V0TWVzc2FnZXMoKTogTWVzc2FnZTxNZXNzYWdlQ29udGVudD5bXSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUubWVzc2FnZXM7XG4gIH1cblxuICBzZXRNZXNzYWdlcyhtZXNzYWdlczogTWVzc2FnZTxNZXNzYWdlQ29udGVudD5bXSk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJNZXNzYWdlcygpO1xuICAgIHRoaXMuc3RhdGUubWVzc2FnZXMgPSBbLi4ubWVzc2FnZXNdO1xuICAgIHRoaXMuY2FsbE9uTWVzc2FnZXNDaGFuZ2VkKCk7XG4gIH1cblxuICBjbGVhck1lc3NhZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuc3RhdGUubWVzc2FnZXMgPSBbXTtcbiAgICB0aGlzLmNhbGxPbk1lc3NhZ2VzQ2hhbmdlZCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjYWxsT25NZXNzYWdlc0NoYW5nZWQoKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZS5vbk1lc3NhZ2VzQ2hhbmdlZC5tYXAoKGgpID0+IGgodGhpcy5zdGF0ZS5tZXNzYWdlcykpO1xuICB9XG5cbiAgYWRkT25NZXNzYWdlc0NoYW5nZWQoY2FsbGJhY2s6IE9uTWVzc2FnZXNDaGFuZ2VkKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZS5vbk1lc3NhZ2VzQ2hhbmdlZC5wdXNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlbW92ZU9uTWVzc2FnZXNDaGFuZ2VkKGNhbGxiYWNrOiBPbk1lc3NhZ2VzQ2hhbmdlZCk6IHZvaWQge1xuICAgIGNvbnN0IGlkeCA9IHRoaXMuc3RhdGUub25NZXNzYWdlc0NoYW5nZWQuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1mdW5jdGlvblxuICAgIHRoaXMuc3RhdGUub25BY3Rpb25DaGFuZ2VkW2lkeF0gPSAoKTogdm9pZCA9PiB7fTtcbiAgfVxuXG4gIHNldEFjdGlvblJlcXVlc3Q8VCBleHRlbmRzIEFjdGlvblJlcXVlc3Q+KFxuICAgIHJlcXVlc3Q6IFQsXG4gICAgb25SZXNwb25zZT86IE9uQWN0aW9uUmVzcG9uc2VkLFxuICApOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgY29uc3QgYWN0aW9uOiBBY3Rpb24gPSB7XG4gICAgICByZXF1ZXN0OiB7IC4uLnRoaXMuZGVmYXVsdEFjdGlvblJlcXVlc3QsIC4uLnJlcXVlc3QgfSxcbiAgICAgIHJlc3BvbnNlczogW10sXG4gICAgICBvblJlc25wb25zZWQ6IFtdLFxuICAgIH07XG5cbiAgICAvLyBTZWUgc2V0QWN0aW9uUmVzcG9uc2UgbWV0aG9kXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghcmVxdWVzdC5hbHdheXMpIHtcbiAgICAgICAgY29uc3QgcmV0dXJuUmVzcG9uc2UgPSAocmVzcG9uc2U6IEFjdGlvblJlc3BvbnNlKTogdm9pZCA9PiB7XG4gICAgICAgICAgaWYgKCFyZXNwb25zZS5lcnJvcikge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChyZXNwb25zZS5lcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBhY3Rpb24ub25SZXNucG9uc2VkLnB1c2gocmV0dXJuUmVzcG9uc2UpO1xuICAgICAgfVxuXG4gICAgICBpZiAob25SZXNwb25zZSkge1xuICAgICAgICBhY3Rpb24ub25SZXNucG9uc2VkLnB1c2gob25SZXNwb25zZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RhdGUuYWN0aW9uID0gYWN0aW9uO1xuICAgICAgdGhpcy5zdGF0ZS5hY3Rpb25IaXN0b3J5LnB1c2goYWN0aW9uKTtcbiAgICAgIHRoaXMuY2FsbE9uQWN0aW9uQ2hhbmdlZChhY3Rpb24ucmVxdWVzdCk7XG5cbiAgICAgIGlmIChyZXF1ZXN0LmFsd2F5cykge1xuICAgICAgICByZXNvbHZlKHsgdHlwZTogJ3RleHQnLCB2YWx1ZTogJ2R1bW15JyB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNhbmNlbEFjdGlvblJlcXVlc3QoKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZS5hY3Rpb24gPSB0aGlzLmVtcHR5QWN0aW9uO1xuICAgIHRoaXMuY2FsbE9uQWN0aW9uQ2hhbmdlZCh0aGlzLmVtcHR5QWN0aW9uLnJlcXVlc3QpO1xuICB9XG5cbiAgZ2V0QWN0aW9uUmVxdWVzdCgpOiBBY3Rpb25SZXF1ZXN0IHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCB7IHJlcXVlc3QsIHJlc3BvbnNlcyB9ID0gdGhpcy5zdGF0ZS5hY3Rpb247XG4gICAgaWYgKCFyZXF1ZXN0LmFsd2F5cyAmJiByZXNwb25zZXMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVxdWVzdDtcbiAgfVxuXG4gIGFzeW5jIHNldEFjdGlvblJlc3BvbnNlKFxuICAgIHJlcXVlc3Q6IEFjdGlvblJlcXVlc3QsXG4gICAgcmVzcG9uc2U6IEFjdGlvblJlc3BvbnNlLFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB7IHJlcXVlc3Q6IG9yaWdSZXEsIHJlc3BvbnNlcywgb25SZXNucG9uc2VkIH0gPSB0aGlzLnN0YXRlLmFjdGlvbjtcbiAgICBpZiAocmVxdWVzdCAhPT0gb3JpZ1JlcSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGFjdGlvbi4nKTtcbiAgICB9XG4gICAgaWYgKCFyZXF1ZXN0LmFsd2F5cyAmJiBvblJlc25wb25zZWQubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ29uUmVzcG9uc2VkIGlzIG5vdCBzZXQuJyk7XG4gICAgfVxuXG4gICAgcmVzcG9uc2VzLnB1c2gocmVzcG9uc2UpO1xuICAgIHRoaXMuY2FsbE9uQWN0aW9uQ2hhbmdlZChyZXF1ZXN0LCByZXNwb25zZSk7XG5cbiAgICBpZiAocmVxdWVzdC5hZGRNZXNzYWdlKSB7XG4gICAgICBhd2FpdCB0aGlzLmFkZE1lc3NhZ2Uoe1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIGNvbnRlbnQ6IHJlc3BvbnNlLnZhbHVlLFxuICAgICAgICBzZWxmOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25SZXNucG9uc2VkLm1hcCgoaCkgPT4gaChyZXNwb25zZSkpO1xuICB9XG5cbiAgZ2V0QWN0aW9uUmVzcG9uc2VzKCk6IEFjdGlvblJlc3BvbnNlW10ge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmFjdGlvbi5yZXNwb25zZXM7XG4gIH1cblxuICBwcml2YXRlIGNhbGxPbkFjdGlvbkNoYW5nZWQoXG4gICAgcmVxdWVzdDogQWN0aW9uUmVxdWVzdCxcbiAgICByZXNwb25zZT86IEFjdGlvblJlc3BvbnNlLFxuICApOiB2b2lkIHtcbiAgICB0aGlzLnN0YXRlLm9uQWN0aW9uQ2hhbmdlZC5tYXAoKGgpID0+IGgocmVxdWVzdCwgcmVzcG9uc2UpKTtcbiAgfVxuXG4gIGFkZE9uQWN0aW9uQ2hhbmdlZChjYWxsYmFjazogT25BY3Rpb25DaGFuZ2VkKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZS5vbkFjdGlvbkNoYW5nZWQucHVzaChjYWxsYmFjayk7XG4gIH1cblxuICByZW1vdmVPbkFjdGlvbkNoYW5nZWQoY2FsbGJhY2s6IE9uQWN0aW9uQ2hhbmdlZCk6IHZvaWQge1xuICAgIGNvbnN0IGlkeCA9IHRoaXMuc3RhdGUub25BY3Rpb25DaGFuZ2VkLmluZGV4T2YoY2FsbGJhY2spO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktZnVuY3Rpb25cbiAgICB0aGlzLnN0YXRlLm9uQWN0aW9uQ2hhbmdlZFtpZHhdID0gKCk6IHZvaWQgPT4ge307XG4gIH1cblxuICBnZXRPcHRpb24oKTogQ2hhdE9wdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUub3B0aW9uO1xuICB9XG59XG4iLCIvLyBDb3BpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vY2hyaXMtcnVkbWluL1JlY29yZGVyanNcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBsZXQgQllURVNfUEVSX1NBTVBMRSA9IDJcblxuICBsZXQgcmVjb3JkZWQgPSBbXVxuXG4gIGZ1bmN0aW9uIGVuY29kZSAoYnVmZmVyKSB7XG4gICAgbGV0IGxlbmd0aCA9IGJ1ZmZlci5sZW5ndGhcbiAgICBsZXQgZGF0YSA9IG5ldyBVaW50OEFycmF5KGxlbmd0aCAqIEJZVEVTX1BFUl9TQU1QTEUpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGluZGV4ID0gaSAqIEJZVEVTX1BFUl9TQU1QTEVcbiAgICAgIGxldCBzYW1wbGUgPSBidWZmZXJbaV1cbiAgICAgIGlmIChzYW1wbGUgPiAxKSB7XG4gICAgICAgIHNhbXBsZSA9IDFcbiAgICAgIH0gZWxzZSBpZiAoc2FtcGxlIDwgLTEpIHtcbiAgICAgICAgc2FtcGxlID0gLTFcbiAgICAgIH1cbiAgICAgIHNhbXBsZSA9IHNhbXBsZSAqIDMyNzY4XG4gICAgICBkYXRhW2luZGV4XSA9IHNhbXBsZVxuICAgICAgZGF0YVtpbmRleCArIDFdID0gc2FtcGxlID4+IDhcbiAgICB9XG4gICAgcmVjb3JkZWQucHVzaChkYXRhKVxuICB9XG5cbiAgZnVuY3Rpb24gZHVtcCAoc2FtcGxlUmF0ZSkge1xuICAgIGxldCBidWZmZXJMZW5ndGggPSByZWNvcmRlZC5sZW5ndGggPyByZWNvcmRlZFswXS5sZW5ndGggOiAwXG4gICAgbGV0IGxlbmd0aCA9IHJlY29yZGVkLmxlbmd0aCAqIGJ1ZmZlckxlbmd0aFxuICAgIGxldCB3YXYgPSBuZXcgVWludDhBcnJheSg0NCArIGxlbmd0aClcbiAgICBsZXQgdmlldyA9IG5ldyBEYXRhVmlldyh3YXYuYnVmZmVyKVxuXG4gICAgLy8gUklGRiBpZGVudGlmaWVyICdSSUZGJ1xuICAgIHZpZXcuc2V0VWludDMyKDAsIDEzODA1MzM4MzAsIGZhbHNlKVxuICAgIC8vIGZpbGUgbGVuZ3RoIG1pbnVzIFJJRkYgaWRlbnRpZmllciBsZW5ndGggYW5kIGZpbGUgZGVzY3JpcHRpb24gbGVuZ3RoXG4gICAgdmlldy5zZXRVaW50MzIoNCwgMzYgKyBsZW5ndGgsIHRydWUpXG4gICAgLy8gUklGRiB0eXBlICdXQVZFJ1xuICAgIHZpZXcuc2V0VWludDMyKDgsIDE0NjM4OTk3MTcsIGZhbHNlKVxuICAgIC8vIGZvcm1hdCBjaHVuayBpZGVudGlmaWVyICdmbXQgJ1xuICAgIHZpZXcuc2V0VWludDMyKDEyLCAxNzE4NDQ5MTg0LCBmYWxzZSlcbiAgICAvLyBmb3JtYXQgY2h1bmsgbGVuZ3RoXG4gICAgdmlldy5zZXRVaW50MzIoMTYsIDE2LCB0cnVlKVxuICAgIC8vIHNhbXBsZSBmb3JtYXQgKHJhdylcbiAgICB2aWV3LnNldFVpbnQxNigyMCwgMSwgdHJ1ZSlcbiAgICAvLyBjaGFubmVsIGNvdW50XG4gICAgdmlldy5zZXRVaW50MTYoMjIsIDEsIHRydWUpXG4gICAgLy8gc2FtcGxlIHJhdGVcbiAgICB2aWV3LnNldFVpbnQzMigyNCwgc2FtcGxlUmF0ZSwgdHJ1ZSlcbiAgICAvLyBieXRlIHJhdGUgKHNhbXBsZSByYXRlICogYmxvY2sgYWxpZ24pXG4gICAgdmlldy5zZXRVaW50MzIoMjgsIHNhbXBsZVJhdGUgKiBCWVRFU19QRVJfU0FNUExFLCB0cnVlKVxuICAgIC8vIGJsb2NrIGFsaWduIChjaGFubmVsIGNvdW50ICogYnl0ZXMgcGVyIHNhbXBsZSlcbiAgICB2aWV3LnNldFVpbnQxNigzMiwgQllURVNfUEVSX1NBTVBMRSwgdHJ1ZSlcbiAgICAvLyBiaXRzIHBlciBzYW1wbGVcbiAgICB2aWV3LnNldFVpbnQxNigzNCwgOCAqIEJZVEVTX1BFUl9TQU1QTEUsIHRydWUpXG4gICAgLy8gZGF0YSBjaHVuayBpZGVudGlmaWVyICdkYXRhJ1xuICAgIHZpZXcuc2V0VWludDMyKDM2LCAxNjg0MTA4Mzg1LCBmYWxzZSlcbiAgICAvLyBkYXRhIGNodW5rIGxlbmd0aFxuICAgIHZpZXcuc2V0VWludDMyKDQwLCBsZW5ndGgsIHRydWUpXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby1mb3ItbG9vcFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVjb3JkZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgIHdhdi5zZXQocmVjb3JkZWRbaV0sIGkgKiBidWZmZXJMZW5ndGggKyA0NClcbiAgICB9XG5cbiAgICByZWNvcmRlZCA9IFtdXG4gICAgcG9zdE1lc3NhZ2Uod2F2LmJ1ZmZlciwgW3dhdi5idWZmZXJdKVxuICB9XG5cbiAgb25tZXNzYWdlID0gZSA9PiB7XG4gICAgaWYgKGUuZGF0YVswXSA9PT0gJ2VuY29kZScpIHtcbiAgICAgIGVuY29kZShlLmRhdGFbMV0pXG4gICAgfSBlbHNlIGlmIChlLmRhdGFbMF0gPT09ICdkdW1wJykge1xuICAgICAgZHVtcChlLmRhdGFbMV0pXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgd2F2ZUVuY29kZXIgZnJvbSAnLi93YXZlLWVuY29kZXIvaW5kZXguanMnXG5cbmxldCBBdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHRcblxubGV0IGNyZWF0ZVdvcmtlciA9IGZuID0+IHtcbiAgbGV0IGpzID0gZm5cbiAgICAudG9TdHJpbmcoKVxuICAgIC5yZXBsYWNlKC9eKFxcKFxcKVxccyo9PnxmdW5jdGlvblxccypcXChcXCkpXFxzKnsvLCAnJylcbiAgICAucmVwbGFjZSgvfSQvLCAnJylcbiAgbGV0IGJsb2IgPSBuZXcgQmxvYihbanNdKVxuICByZXR1cm4gbmV3IFdvcmtlcihVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpKVxufVxuXG5sZXQgZXJyb3IgPSBtZXRob2QgPT4ge1xuICBsZXQgZXZlbnQgPSBuZXcgRXZlbnQoJ2Vycm9yJylcbiAgZXZlbnQuZGF0YSA9IG5ldyBFcnJvcignV3Jvbmcgc3RhdGUgZm9yICcgKyBtZXRob2QpXG4gIHJldHVybiBldmVudFxufVxuXG5sZXQgY29udGV4dFxuXG4vKipcbiAqIEF1ZGlvIFJlY29yZGVyIHdpdGggTWVkaWFSZWNvcmRlciBBUEkuXG4gKlxuICogQGV4YW1wbGVcbiAqIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHsgYXVkaW86IHRydWUgfSkudGhlbihzdHJlYW0gPT4ge1xuICogICBsZXQgcmVjb3JkZXIgPSBuZXcgTWVkaWFSZWNvcmRlcihzdHJlYW0pXG4gKiB9KVxuICovXG5jbGFzcyBNZWRpYVJlY29yZGVyIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7TWVkaWFTdHJlYW19IHN0cmVhbSBUaGUgYXVkaW8gc3RyZWFtIHRvIHJlY29yZC5cbiAgICovXG4gIGNvbnN0cnVjdG9yIChzdHJlYW0sIGNvbmZpZyA9IG51bGwpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgYE1lZGlhU3RyZWFtYCBwYXNzZWQgaW50byB0aGUgY29uc3RydWN0b3IuXG4gICAgICogQHR5cGUge01lZGlhU3RyZWFtfVxuICAgICAqL1xuICAgIHRoaXMuc3RyZWFtID0gc3RyZWFtXG4gICAgdGhpcy5jb25maWcgPSBjb25maWdcbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBzdGF0ZSBvZiByZWNvcmRpbmcgcHJvY2Vzcy5cbiAgICAgKiBAdHlwZSB7XCJpbmFjdGl2ZVwifFwicmVjb3JkaW5nXCJ8XCJwYXVzZWRcIn1cbiAgICAgKi9cbiAgICB0aGlzLnN0YXRlID0gJ2luYWN0aXZlJ1xuXG4gICAgdGhpcy5lbSA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuICAgIHRoaXMuZW5jb2RlciA9IGNyZWF0ZVdvcmtlcihNZWRpYVJlY29yZGVyLmVuY29kZXIpXG5cbiAgICBsZXQgcmVjb3JkZXIgPSB0aGlzXG4gICAgdGhpcy5lbmNvZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBlID0+IHtcbiAgICAgIGxldCBldmVudCA9IG5ldyBFdmVudCgnZGF0YWF2YWlsYWJsZScpXG4gICAgICBldmVudC5kYXRhID0gbmV3IEJsb2IoW2UuZGF0YV0sIHsgdHlwZTogcmVjb3JkZXIubWltZVR5cGUgfSlcbiAgICAgIHJlY29yZGVyLmVtLmRpc3BhdGNoRXZlbnQoZXZlbnQpXG4gICAgICBpZiAocmVjb3JkZXIuc3RhdGUgPT09ICdpbmFjdGl2ZScpIHtcbiAgICAgICAgcmVjb3JkZXIuZW0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3N0b3AnKSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEJlZ2lucyByZWNvcmRpbmcgbWVkaWEuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbdGltZXNsaWNlXSBUaGUgbWlsbGlzZWNvbmRzIHRvIHJlY29yZCBpbnRvIGVhY2ggYEJsb2JgLlxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSWYgdGhpcyBwYXJhbWV0ZXIgaXNu4oCZdCBpbmNsdWRlZCwgc2luZ2xlIGBCbG9iYFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lsbCBiZSByZWNvcmRlZC5cbiAgICpcbiAgICogQHJldHVybiB7dW5kZWZpbmVkfVxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiByZWNvcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAqICAgcmVjb3JkZXIuc3RhcnQoKVxuICAgKiB9KVxuICAgKi9cbiAgc3RhcnQgKHRpbWVzbGljZSkge1xuICAgIGlmICh0aGlzLnN0YXRlICE9PSAnaW5hY3RpdmUnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbS5kaXNwYXRjaEV2ZW50KGVycm9yKCdzdGFydCcpKVxuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSAncmVjb3JkaW5nJ1xuXG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICBjb250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCh0aGlzLmNvbmZpZylcbiAgICB9XG4gICAgdGhpcy5jbG9uZSA9IHRoaXMuc3RyZWFtLmNsb25lKClcbiAgICB0aGlzLmlucHV0ID0gY29udGV4dC5jcmVhdGVNZWRpYVN0cmVhbVNvdXJjZSh0aGlzLmNsb25lKVxuICAgIHRoaXMucHJvY2Vzc29yID0gY29udGV4dC5jcmVhdGVTY3JpcHRQcm9jZXNzb3IoMjA0OCwgMSwgMSlcblxuICAgIHRoaXMuZW5jb2Rlci5wb3N0TWVzc2FnZShbJ2luaXQnLCBjb250ZXh0LnNhbXBsZVJhdGVdKVxuXG4gICAgdGhpcy5wcm9jZXNzb3Iub25hdWRpb3Byb2Nlc3MgPSBlID0+IHtcbiAgICAgIGlmICh0aGlzLnN0YXRlID09PSAncmVjb3JkaW5nJykge1xuICAgICAgICB0aGlzLmVuY29kZXIucG9zdE1lc3NhZ2UoWydlbmNvZGUnLCBlLmlucHV0QnVmZmVyLmdldENoYW5uZWxEYXRhKDApXSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmlucHV0LmNvbm5lY3QodGhpcy5wcm9jZXNzb3IpXG4gICAgdGhpcy5wcm9jZXNzb3IuY29ubmVjdChjb250ZXh0LmRlc3RpbmF0aW9uKVxuXG4gICAgdGhpcy5lbS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnc3RhcnQnKSlcblxuICAgIGlmICh0aW1lc2xpY2UpIHtcbiAgICAgIHRoaXMuc2xpY2luZyA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09ICdyZWNvcmRpbmcnKSB0aGlzLnJlcXVlc3REYXRhKClcbiAgICAgIH0sIHRpbWVzbGljZSlcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICAvKipcbiAgICogU3RvcCBtZWRpYSBjYXB0dXJlIGFuZCByYWlzZSBgZGF0YWF2YWlsYWJsZWAgZXZlbnQgd2l0aCByZWNvcmRlZCBkYXRhLlxuICAgKlxuICAgKiBAcmV0dXJuIHt1bmRlZmluZWR9XG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGZpbmlzaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICogICByZWNvcmRlci5zdG9wKClcbiAgICogfSlcbiAgICovXG4gIHN0b3AgKCkge1xuICAgIGlmICh0aGlzLnN0YXRlID09PSAnaW5hY3RpdmUnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbS5kaXNwYXRjaEV2ZW50KGVycm9yKCdzdG9wJykpXG4gICAgfVxuXG4gICAgdGhpcy5yZXF1ZXN0RGF0YSgpXG4gICAgdGhpcy5zdGF0ZSA9ICdpbmFjdGl2ZSdcbiAgICB0aGlzLmNsb25lLmdldFRyYWNrcygpLmZvckVhY2godHJhY2sgPT4ge1xuICAgICAgdHJhY2suc3RvcCgpXG4gICAgfSlcbiAgICB0aGlzLnByb2Nlc3Nvci5kaXNjb25uZWN0KClcbiAgICB0aGlzLmlucHV0LmRpc2Nvbm5lY3QoKVxuICAgIHJldHVybiBjbGVhckludGVydmFsKHRoaXMuc2xpY2luZylcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXVzZXMgcmVjb3JkaW5nIG9mIG1lZGlhIHN0cmVhbXMuXG4gICAqXG4gICAqIEByZXR1cm4ge3VuZGVmaW5lZH1cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogcGF1c2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAqICAgcmVjb3JkZXIucGF1c2UoKVxuICAgKiB9KVxuICAgKi9cbiAgcGF1c2UgKCkge1xuICAgIGlmICh0aGlzLnN0YXRlICE9PSAncmVjb3JkaW5nJykge1xuICAgICAgcmV0dXJuIHRoaXMuZW0uZGlzcGF0Y2hFdmVudChlcnJvcigncGF1c2UnKSlcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0gJ3BhdXNlZCdcbiAgICByZXR1cm4gdGhpcy5lbS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgncGF1c2UnKSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXN1bWVzIG1lZGlhIHJlY29yZGluZyB3aGVuIGl0IGhhcyBiZWVuIHByZXZpb3VzbHkgcGF1c2VkLlxuICAgKlxuICAgKiBAcmV0dXJuIHt1bmRlZmluZWR9XG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIHJlc3VtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICogICByZWNvcmRlci5yZXN1bWUoKVxuICAgKiB9KVxuICAgKi9cbiAgcmVzdW1lICgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZSAhPT0gJ3BhdXNlZCcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVtLmRpc3BhdGNoRXZlbnQoZXJyb3IoJ3Jlc3VtZScpKVxuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSAncmVjb3JkaW5nJ1xuICAgIHJldHVybiB0aGlzLmVtLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdyZXN1bWUnKSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSYWlzZSBhIGBkYXRhYXZhaWxhYmxlYCBldmVudCBjb250YWluaW5nIHRoZSBjYXB0dXJlZCBtZWRpYS5cbiAgICpcbiAgICogQHJldHVybiB7dW5kZWZpbmVkfVxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiB0aGlzLm9uKCduZXh0RGF0YScsICgpID0+IHtcbiAgICogICByZWNvcmRlci5yZXF1ZXN0RGF0YSgpXG4gICAqIH0pXG4gICAqL1xuICByZXF1ZXN0RGF0YSAoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUgPT09ICdpbmFjdGl2ZScpIHtcbiAgICAgIHJldHVybiB0aGlzLmVtLmRpc3BhdGNoRXZlbnQoZXJyb3IoJ3JlcXVlc3REYXRhJykpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZW5jb2Rlci5wb3N0TWVzc2FnZShbJ2R1bXAnLCBjb250ZXh0LnNhbXBsZVJhdGVdKVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBsaXN0ZW5lciBmb3Igc3BlY2lmaWVkIGV2ZW50IHR5cGUuXG4gICAqXG4gICAqIEBwYXJhbSB7XCJzdGFydFwifFwic3RvcFwifFwicGF1c2VcInxcInJlc3VtZVwifFwiZGF0YWF2YWlsYWJsZVwifFwiZXJyb3JcIn1cbiAgICogdHlwZSBFdmVudCB0eXBlLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBsaXN0ZW5lciBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gICAqXG4gICAqIEByZXR1cm4ge3VuZGVmaW5lZH1cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogcmVjb3JkZXIuYWRkRXZlbnRMaXN0ZW5lcignZGF0YWF2YWlsYWJsZScsIGUgPT4ge1xuICAgKiAgIGF1ZGlvLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZS5kYXRhKVxuICAgKiB9KVxuICAgKi9cbiAgYWRkRXZlbnRMaXN0ZW5lciAoLi4uYXJncykge1xuICAgIHRoaXMuZW0uYWRkRXZlbnRMaXN0ZW5lciguLi5hcmdzKVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBldmVudCBsaXN0ZW5lci5cbiAgICpcbiAgICogQHBhcmFtIHtcInN0YXJ0XCJ8XCJzdG9wXCJ8XCJwYXVzZVwifFwicmVzdW1lXCJ8XCJkYXRhYXZhaWxhYmxlXCJ8XCJlcnJvclwifVxuICAgKiB0eXBlIEV2ZW50IHR5cGUuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGxpc3RlbmVyIFRoZSBzYW1lIGZ1bmN0aW9uIHVzZWQgaW4gYGFkZEV2ZW50TGlzdGVuZXJgLlxuICAgKlxuICAgKiBAcmV0dXJuIHt1bmRlZmluZWR9XG4gICAqL1xuICByZW1vdmVFdmVudExpc3RlbmVyICguLi5hcmdzKSB7XG4gICAgdGhpcy5lbS5yZW1vdmVFdmVudExpc3RlbmVyKC4uLmFyZ3MpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbHMgZWFjaCBvZiB0aGUgbGlzdGVuZXJzIHJlZ2lzdGVyZWQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCBvYmplY3QuXG4gICAqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IElzIGV2ZW50IHdhcyBubyBjYW5jZWxlZCBieSBhbnkgbGlzdGVuZXIuXG4gICAqL1xuICBkaXNwYXRjaEV2ZW50ICguLi5hcmdzKSB7XG4gICAgdGhpcy5lbS5kaXNwYXRjaEV2ZW50KC4uLmFyZ3MpXG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgTUlNRSB0eXBlIHRoYXQgaXMgYmVpbmcgdXNlZCBmb3IgcmVjb3JkaW5nLlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuTWVkaWFSZWNvcmRlci5wcm90b3R5cGUubWltZVR5cGUgPSAnYXVkaW8vd2F2J1xuXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBNSU1FIHR5cGUgc3BlY2lmaWVkIGlzIG9uZSB0aGUgcG9seWZpbGwgY2FuIHJlY29yZC5cbiAqXG4gKiBUaGlzIHBvbHlmaWxsIHN1cHBvcnRzIGBhdWRpby93YXZgIGFuZCBgYXVkaW8vbXBlZ2AuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1pbWVUeXBlIFRoZSBtaW1lVHlwZSB0byBjaGVjay5cbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgb24gYGF1ZGlvL3dhdmAgYW5kIGBhdWRpby9tcGVnYCBNSU1FIHR5cGUuXG4gKi9cbk1lZGlhUmVjb3JkZXIuaXNUeXBlU3VwcG9ydGVkID0gbWltZVR5cGUgPT4ge1xuICByZXR1cm4gTWVkaWFSZWNvcmRlci5wcm90b3R5cGUubWltZVR5cGUgPT09IG1pbWVUeXBlXG59XG5cbi8qKlxuICogYHRydWVgIGlmIE1lZGlhUmVjb3JkZXIgY2FuIG5vdCBiZSBwb2x5ZmlsbGVkIGluIHRoZSBjdXJyZW50IGJyb3dzZXIuXG4gKiBAdHlwZSB7Ym9vbGVhbn1cbiAqXG4gKiBAZXhhbXBsZVxuICogaWYgKE1lZGlhUmVjb3JkZXIubm90U3VwcG9ydGVkKSB7XG4gKiAgIHNob3dXYXJuaW5nKCdBdWRpbyByZWNvcmRpbmcgaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXInKVxuICogfVxuICovXG5NZWRpYVJlY29yZGVyLm5vdFN1cHBvcnRlZCA9ICFuYXZpZ2F0b3IubWVkaWFEZXZpY2VzIHx8ICFBdWRpb0NvbnRleHRcblxuLyoqXG4gKiBDb252ZXJ0cyBSQVcgYXVkaW8gYnVmZmVyIHRvIGNvbXByZXNzZWQgYXVkaW8gZmlsZXMuXG4gKiBJdCB3aWxsIGJlIGxvYWRlZCB0byBXZWIgV29ya2VyLlxuICogQnkgZGVmYXVsdCwgV0FWRSBlbmNvZGVyIHdpbGwgYmUgdXNlZC5cbiAqIEB0eXBlIHtmdW5jdGlvbn1cbiAqXG4gKiBAZXhhbXBsZVxuICogTWVkaWFSZWNvcmRlci5wcm90b3R5cGUubWltZVR5cGUgPSAnYXVkaW8vb2dnJ1xuICogTWVkaWFSZWNvcmRlci5lbmNvZGVyID0gb2dnRW5jb2RlclxuICovXG5NZWRpYVJlY29yZGVyLmVuY29kZXIgPSB3YXZlRW5jb2RlclxuXG5leHBvcnQgZGVmYXVsdCBNZWRpYVJlY29yZGVyXG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgQXVkaW9SZWNvcmRlciBmcm9tICdhdWRpby1yZWNvcmRlci1wb2x5ZmlsbCc7XG5cbmV4cG9ydCBjbGFzcyBBdWRpb01lZGlhUmVjb3JkZXIge1xuICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogQXVkaW9NZWRpYVJlY29yZGVyO1xuXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBBdWRpb01lZGlhUmVjb3JkZXIge1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBBdWRpb01lZGlhUmVjb3JkZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIHByaXZhdGUgbWQ/OiBNZWRpYVJlY29yZGVyO1xuXG4gIHByaXZhdGUgcmVjb3JkQ2h1bmtzOiBCbG9iW107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKCF3aW5kb3cuTWVkaWFSZWNvcmRlcikge1xuICAgICAgd2luZG93Lk1lZGlhUmVjb3JkZXIgPSBBdWRpb1JlY29yZGVyO1xuICAgIH1cbiAgICB0aGlzLnJlY29yZENodW5rcyA9IFtdO1xuICB9XG5cbiAgYXN5bmMgaW5pdGlhbGl6ZSgpOiBQcm9taXNlPEF1ZGlvTWVkaWFSZWNvcmRlcj4ge1xuICAgIGlmICh0aGlzLm1kKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjb25zdCBzdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7XG4gICAgICBhdWRpbzogdHJ1ZSxcbiAgICAgIHZpZGVvOiBmYWxzZSxcbiAgICB9KTtcbiAgICB0aGlzLm1kID0gbmV3IE1lZGlhUmVjb3JkZXIoc3RyZWFtKTtcbiAgICB0aGlzLnJlY29yZENodW5rcyA9IFtdO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhc3luYyBzdGFydFJlY29yZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGlmICghdGhpcy5tZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ011c3QgYmUgaW5pdGlhbGl6ZWQuJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucmVjb3JkQ2h1bmtzID0gW107XG5cbiAgICAgIHRoaXMubWQuYWRkRXZlbnRMaXN0ZW5lcignc3RhcnQnLCAoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICB0aGlzLm1kLmFkZEV2ZW50TGlzdGVuZXIoJ2RhdGFhdmFpbGFibGUnLCAoZTogQmxvYkV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChlLmRhdGEuc2l6ZSA+IDApIHtcbiAgICAgICAgICB0aGlzLnJlY29yZENodW5rcy5wdXNoKGUuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLm1kLnN0YXJ0KCk7XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBzdG9wUmVjb3JkKCk6IFByb21pc2U8QmxvYj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgaWYgKCF0aGlzLm1kKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTXVzdCBiZSBpbml0aWFsaXplZC4nKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5tZC5hZGRFdmVudExpc3RlbmVyKCdzdG9wJywgKCkgPT4ge1xuICAgICAgICByZXNvbHZlKG5ldyBCbG9iKHRoaXMucmVjb3JkQ2h1bmtzKSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5tZC5zdG9wKCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTtcblxuICBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcblxuICB2YXIgX3MsIF9lO1xuXG4gIHRyeSB7XG4gICAgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRoSG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRoSG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXlMaW1pdCBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qc1wiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgbm9uSXRlcmFibGVSZXN0IGZyb20gXCIuL25vbkl0ZXJhYmxlUmVzdC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn0iLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKToodD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOnR8fHNlbGYpLmRheWpzPWUoKX0odGhpcywoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgdD0xZTMsZT02ZTQsbj0zNmU1LHI9XCJtaWxsaXNlY29uZFwiLGk9XCJzZWNvbmRcIixzPVwibWludXRlXCIsdT1cImhvdXJcIixhPVwiZGF5XCIsbz1cIndlZWtcIixmPVwibW9udGhcIixoPVwicXVhcnRlclwiLGM9XCJ5ZWFyXCIsZD1cImRhdGVcIiwkPVwiSW52YWxpZCBEYXRlXCIsbD0vXihcXGR7NH0pWy0vXT8oXFxkezEsMn0pP1stL10/KFxcZHswLDJ9KVtUdFxcc10qKFxcZHsxLDJ9KT86PyhcXGR7MSwyfSk/Oj8oXFxkezEsMn0pP1suOl0/KFxcZCspPyQvLHk9L1xcWyhbXlxcXV0rKV18WXsxLDR9fE17MSw0fXxEezEsMn18ZHsxLDR9fEh7MSwyfXxoezEsMn18YXxBfG17MSwyfXxzezEsMn18WnsxLDJ9fFNTUy9nLE09e25hbWU6XCJlblwiLHdlZWtkYXlzOlwiU3VuZGF5X01vbmRheV9UdWVzZGF5X1dlZG5lc2RheV9UaHVyc2RheV9GcmlkYXlfU2F0dXJkYXlcIi5zcGxpdChcIl9cIiksbW9udGhzOlwiSmFudWFyeV9GZWJydWFyeV9NYXJjaF9BcHJpbF9NYXlfSnVuZV9KdWx5X0F1Z3VzdF9TZXB0ZW1iZXJfT2N0b2Jlcl9Ob3ZlbWJlcl9EZWNlbWJlclwiLnNwbGl0KFwiX1wiKX0sbT1mdW5jdGlvbih0LGUsbil7dmFyIHI9U3RyaW5nKHQpO3JldHVybiFyfHxyLmxlbmd0aD49ZT90OlwiXCIrQXJyYXkoZSsxLXIubGVuZ3RoKS5qb2luKG4pK3R9LGc9e3M6bSx6OmZ1bmN0aW9uKHQpe3ZhciBlPS10LnV0Y09mZnNldCgpLG49TWF0aC5hYnMoZSkscj1NYXRoLmZsb29yKG4vNjApLGk9biU2MDtyZXR1cm4oZTw9MD9cIitcIjpcIi1cIikrbShyLDIsXCIwXCIpK1wiOlwiK20oaSwyLFwiMFwiKX0sbTpmdW5jdGlvbiB0KGUsbil7aWYoZS5kYXRlKCk8bi5kYXRlKCkpcmV0dXJuLXQobixlKTt2YXIgcj0xMioobi55ZWFyKCktZS55ZWFyKCkpKyhuLm1vbnRoKCktZS5tb250aCgpKSxpPWUuY2xvbmUoKS5hZGQocixmKSxzPW4taTwwLHU9ZS5jbG9uZSgpLmFkZChyKyhzPy0xOjEpLGYpO3JldHVybisoLShyKyhuLWkpLyhzP2ktdTp1LWkpKXx8MCl9LGE6ZnVuY3Rpb24odCl7cmV0dXJuIHQ8MD9NYXRoLmNlaWwodCl8fDA6TWF0aC5mbG9vcih0KX0scDpmdW5jdGlvbih0KXtyZXR1cm57TTpmLHk6Yyx3Om8sZDphLEQ6ZCxoOnUsbTpzLHM6aSxtczpyLFE6aH1bdF18fFN0cmluZyh0fHxcIlwiKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL3MkLyxcIlwiKX0sdTpmdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dH19LEQ9XCJlblwiLHY9e307dltEXT1NO3ZhciBwPWZ1bmN0aW9uKHQpe3JldHVybiB0IGluc3RhbmNlb2YgX30sUz1mdW5jdGlvbih0LGUsbil7dmFyIHI7aWYoIXQpcmV0dXJuIEQ7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpdlt0XSYmKHI9dCksZSYmKHZbdF09ZSxyPXQpO2Vsc2V7dmFyIGk9dC5uYW1lO3ZbaV09dCxyPWl9cmV0dXJuIW4mJnImJihEPXIpLHJ8fCFuJiZEfSx3PWZ1bmN0aW9uKHQsZSl7aWYocCh0KSlyZXR1cm4gdC5jbG9uZSgpO3ZhciBuPVwib2JqZWN0XCI9PXR5cGVvZiBlP2U6e307cmV0dXJuIG4uZGF0ZT10LG4uYXJncz1hcmd1bWVudHMsbmV3IF8obil9LE89ZztPLmw9UyxPLmk9cCxPLnc9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdyh0LHtsb2NhbGU6ZS4kTCx1dGM6ZS4kdSx4OmUuJHgsJG9mZnNldDplLiRvZmZzZXR9KX07dmFyIF89ZnVuY3Rpb24oKXtmdW5jdGlvbiBNKHQpe3RoaXMuJEw9Uyh0LmxvY2FsZSxudWxsLCEwKSx0aGlzLnBhcnNlKHQpfXZhciBtPU0ucHJvdG90eXBlO3JldHVybiBtLnBhcnNlPWZ1bmN0aW9uKHQpe3RoaXMuJGQ9ZnVuY3Rpb24odCl7dmFyIGU9dC5kYXRlLG49dC51dGM7aWYobnVsbD09PWUpcmV0dXJuIG5ldyBEYXRlKE5hTik7aWYoTy51KGUpKXJldHVybiBuZXcgRGF0ZTtpZihlIGluc3RhbmNlb2YgRGF0ZSlyZXR1cm4gbmV3IERhdGUoZSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUmJiEvWiQvaS50ZXN0KGUpKXt2YXIgcj1lLm1hdGNoKGwpO2lmKHIpe3ZhciBpPXJbMl0tMXx8MCxzPShyWzddfHxcIjBcIikuc3Vic3RyaW5nKDAsMyk7cmV0dXJuIG4/bmV3IERhdGUoRGF0ZS5VVEMoclsxXSxpLHJbM118fDEscls0XXx8MCxyWzVdfHwwLHJbNl18fDAscykpOm5ldyBEYXRlKHJbMV0saSxyWzNdfHwxLHJbNF18fDAscls1XXx8MCxyWzZdfHwwLHMpfX1yZXR1cm4gbmV3IERhdGUoZSl9KHQpLHRoaXMuJHg9dC54fHx7fSx0aGlzLmluaXQoKX0sbS5pbml0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy4kZDt0aGlzLiR5PXQuZ2V0RnVsbFllYXIoKSx0aGlzLiRNPXQuZ2V0TW9udGgoKSx0aGlzLiREPXQuZ2V0RGF0ZSgpLHRoaXMuJFc9dC5nZXREYXkoKSx0aGlzLiRIPXQuZ2V0SG91cnMoKSx0aGlzLiRtPXQuZ2V0TWludXRlcygpLHRoaXMuJHM9dC5nZXRTZWNvbmRzKCksdGhpcy4kbXM9dC5nZXRNaWxsaXNlY29uZHMoKX0sbS4kdXRpbHM9ZnVuY3Rpb24oKXtyZXR1cm4gT30sbS5pc1ZhbGlkPWZ1bmN0aW9uKCl7cmV0dXJuISh0aGlzLiRkLnRvU3RyaW5nKCk9PT0kKX0sbS5pc1NhbWU9ZnVuY3Rpb24odCxlKXt2YXIgbj13KHQpO3JldHVybiB0aGlzLnN0YXJ0T2YoZSk8PW4mJm48PXRoaXMuZW5kT2YoZSl9LG0uaXNBZnRlcj1mdW5jdGlvbih0LGUpe3JldHVybiB3KHQpPHRoaXMuc3RhcnRPZihlKX0sbS5pc0JlZm9yZT1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmVuZE9mKGUpPHcodCl9LG0uJGc9ZnVuY3Rpb24odCxlLG4pe3JldHVybiBPLnUodCk/dGhpc1tlXTp0aGlzLnNldChuLHQpfSxtLnVuaXg9ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5mbG9vcih0aGlzLnZhbHVlT2YoKS8xZTMpfSxtLnZhbHVlT2Y9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC5nZXRUaW1lKCl9LG0uc3RhcnRPZj1mdW5jdGlvbih0LGUpe3ZhciBuPXRoaXMscj0hIU8udShlKXx8ZSxoPU8ucCh0KSwkPWZ1bmN0aW9uKHQsZSl7dmFyIGk9Ty53KG4uJHU/RGF0ZS5VVEMobi4keSxlLHQpOm5ldyBEYXRlKG4uJHksZSx0KSxuKTtyZXR1cm4gcj9pOmkuZW5kT2YoYSl9LGw9ZnVuY3Rpb24odCxlKXtyZXR1cm4gTy53KG4udG9EYXRlKClbdF0uYXBwbHkobi50b0RhdGUoXCJzXCIpLChyP1swLDAsMCwwXTpbMjMsNTksNTksOTk5XSkuc2xpY2UoZSkpLG4pfSx5PXRoaXMuJFcsTT10aGlzLiRNLG09dGhpcy4kRCxnPVwic2V0XCIrKHRoaXMuJHU/XCJVVENcIjpcIlwiKTtzd2l0Y2goaCl7Y2FzZSBjOnJldHVybiByPyQoMSwwKTokKDMxLDExKTtjYXNlIGY6cmV0dXJuIHI/JCgxLE0pOiQoMCxNKzEpO2Nhc2Ugbzp2YXIgRD10aGlzLiRsb2NhbGUoKS53ZWVrU3RhcnR8fDAsdj0oeTxEP3krNzp5KS1EO3JldHVybiAkKHI/bS12Om0rKDYtdiksTSk7Y2FzZSBhOmNhc2UgZDpyZXR1cm4gbChnK1wiSG91cnNcIiwwKTtjYXNlIHU6cmV0dXJuIGwoZytcIk1pbnV0ZXNcIiwxKTtjYXNlIHM6cmV0dXJuIGwoZytcIlNlY29uZHNcIiwyKTtjYXNlIGk6cmV0dXJuIGwoZytcIk1pbGxpc2Vjb25kc1wiLDMpO2RlZmF1bHQ6cmV0dXJuIHRoaXMuY2xvbmUoKX19LG0uZW5kT2Y9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc3RhcnRPZih0LCExKX0sbS4kc2V0PWZ1bmN0aW9uKHQsZSl7dmFyIG4sbz1PLnAodCksaD1cInNldFwiKyh0aGlzLiR1P1wiVVRDXCI6XCJcIiksJD0obj17fSxuW2FdPWgrXCJEYXRlXCIsbltkXT1oK1wiRGF0ZVwiLG5bZl09aCtcIk1vbnRoXCIsbltjXT1oK1wiRnVsbFllYXJcIixuW3VdPWgrXCJIb3Vyc1wiLG5bc109aCtcIk1pbnV0ZXNcIixuW2ldPWgrXCJTZWNvbmRzXCIsbltyXT1oK1wiTWlsbGlzZWNvbmRzXCIsbilbb10sbD1vPT09YT90aGlzLiREKyhlLXRoaXMuJFcpOmU7aWYobz09PWZ8fG89PT1jKXt2YXIgeT10aGlzLmNsb25lKCkuc2V0KGQsMSk7eS4kZFskXShsKSx5LmluaXQoKSx0aGlzLiRkPXkuc2V0KGQsTWF0aC5taW4odGhpcy4kRCx5LmRheXNJbk1vbnRoKCkpKS4kZH1lbHNlICQmJnRoaXMuJGRbJF0obCk7cmV0dXJuIHRoaXMuaW5pdCgpLHRoaXN9LG0uc2V0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuY2xvbmUoKS4kc2V0KHQsZSl9LG0uZ2V0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzW08ucCh0KV0oKX0sbS5hZGQ9ZnVuY3Rpb24ocixoKXt2YXIgZCwkPXRoaXM7cj1OdW1iZXIocik7dmFyIGw9Ty5wKGgpLHk9ZnVuY3Rpb24odCl7dmFyIGU9dygkKTtyZXR1cm4gTy53KGUuZGF0ZShlLmRhdGUoKStNYXRoLnJvdW5kKHQqcikpLCQpfTtpZihsPT09ZilyZXR1cm4gdGhpcy5zZXQoZix0aGlzLiRNK3IpO2lmKGw9PT1jKXJldHVybiB0aGlzLnNldChjLHRoaXMuJHkrcik7aWYobD09PWEpcmV0dXJuIHkoMSk7aWYobD09PW8pcmV0dXJuIHkoNyk7dmFyIE09KGQ9e30sZFtzXT1lLGRbdV09bixkW2ldPXQsZClbbF18fDEsbT10aGlzLiRkLmdldFRpbWUoKStyKk07cmV0dXJuIE8udyhtLHRoaXMpfSxtLnN1YnRyYWN0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuYWRkKC0xKnQsZSl9LG0uZm9ybWF0PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsbj10aGlzLiRsb2NhbGUoKTtpZighdGhpcy5pc1ZhbGlkKCkpcmV0dXJuIG4uaW52YWxpZERhdGV8fCQ7dmFyIHI9dHx8XCJZWVlZLU1NLUREVEhIOm1tOnNzWlwiLGk9Ty56KHRoaXMpLHM9dGhpcy4kSCx1PXRoaXMuJG0sYT10aGlzLiRNLG89bi53ZWVrZGF5cyxmPW4ubW9udGhzLGg9ZnVuY3Rpb24odCxuLGkscyl7cmV0dXJuIHQmJih0W25dfHx0KGUscikpfHxpW25dLnN1YnN0cigwLHMpfSxjPWZ1bmN0aW9uKHQpe3JldHVybiBPLnMocyUxMnx8MTIsdCxcIjBcIil9LGQ9bi5tZXJpZGllbXx8ZnVuY3Rpb24odCxlLG4pe3ZhciByPXQ8MTI/XCJBTVwiOlwiUE1cIjtyZXR1cm4gbj9yLnRvTG93ZXJDYXNlKCk6cn0sbD17WVk6U3RyaW5nKHRoaXMuJHkpLnNsaWNlKC0yKSxZWVlZOnRoaXMuJHksTTphKzEsTU06Ty5zKGErMSwyLFwiMFwiKSxNTU06aChuLm1vbnRoc1Nob3J0LGEsZiwzKSxNTU1NOmgoZixhKSxEOnRoaXMuJEQsREQ6Ty5zKHRoaXMuJEQsMixcIjBcIiksZDpTdHJpbmcodGhpcy4kVyksZGQ6aChuLndlZWtkYXlzTWluLHRoaXMuJFcsbywyKSxkZGQ6aChuLndlZWtkYXlzU2hvcnQsdGhpcy4kVyxvLDMpLGRkZGQ6b1t0aGlzLiRXXSxIOlN0cmluZyhzKSxISDpPLnMocywyLFwiMFwiKSxoOmMoMSksaGg6YygyKSxhOmQocyx1LCEwKSxBOmQocyx1LCExKSxtOlN0cmluZyh1KSxtbTpPLnModSwyLFwiMFwiKSxzOlN0cmluZyh0aGlzLiRzKSxzczpPLnModGhpcy4kcywyLFwiMFwiKSxTU1M6Ty5zKHRoaXMuJG1zLDMsXCIwXCIpLFo6aX07cmV0dXJuIHIucmVwbGFjZSh5LChmdW5jdGlvbih0LGUpe3JldHVybiBlfHxsW3RdfHxpLnJlcGxhY2UoXCI6XCIsXCJcIil9KSl9LG0udXRjT2Zmc2V0PWZ1bmN0aW9uKCl7cmV0dXJuIDE1Ki1NYXRoLnJvdW5kKHRoaXMuJGQuZ2V0VGltZXpvbmVPZmZzZXQoKS8xNSl9LG0uZGlmZj1mdW5jdGlvbihyLGQsJCl7dmFyIGwseT1PLnAoZCksTT13KHIpLG09KE0udXRjT2Zmc2V0KCktdGhpcy51dGNPZmZzZXQoKSkqZSxnPXRoaXMtTSxEPU8ubSh0aGlzLE0pO3JldHVybiBEPShsPXt9LGxbY109RC8xMixsW2ZdPUQsbFtoXT1ELzMsbFtvXT0oZy1tKS82MDQ4ZTUsbFthXT0oZy1tKS84NjRlNSxsW3VdPWcvbixsW3NdPWcvZSxsW2ldPWcvdCxsKVt5XXx8ZywkP0Q6Ty5hKEQpfSxtLmRheXNJbk1vbnRoPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZW5kT2YoZikuJER9LG0uJGxvY2FsZT1mdW5jdGlvbigpe3JldHVybiB2W3RoaXMuJExdfSxtLmxvY2FsZT1mdW5jdGlvbih0LGUpe2lmKCF0KXJldHVybiB0aGlzLiRMO3ZhciBuPXRoaXMuY2xvbmUoKSxyPVModCxlLCEwKTtyZXR1cm4gciYmKG4uJEw9ciksbn0sbS5jbG9uZT1mdW5jdGlvbigpe3JldHVybiBPLncodGhpcy4kZCx0aGlzKX0sbS50b0RhdGU9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IERhdGUodGhpcy52YWx1ZU9mKCkpfSxtLnRvSlNPTj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmlzVmFsaWQoKT90aGlzLnRvSVNPU3RyaW5nKCk6bnVsbH0sbS50b0lTT1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLnRvSVNPU3RyaW5nKCl9LG0udG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC50b1VUQ1N0cmluZygpfSxNfSgpLGI9Xy5wcm90b3R5cGU7cmV0dXJuIHcucHJvdG90eXBlPWIsW1tcIiRtc1wiLHJdLFtcIiRzXCIsaV0sW1wiJG1cIixzXSxbXCIkSFwiLHVdLFtcIiRXXCIsYV0sW1wiJE1cIixmXSxbXCIkeVwiLGNdLFtcIiREXCIsZF1dLmZvckVhY2goKGZ1bmN0aW9uKHQpe2JbdFsxXV09ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuJGcoZSx0WzBdLHRbMV0pfX0pKSx3LmV4dGVuZD1mdW5jdGlvbih0LGUpe3JldHVybiB0LiRpfHwodChlLF8sdyksdC4kaT0hMCksd30sdy5sb2NhbGU9Uyx3LmlzRGF5anM9cCx3LnVuaXg9ZnVuY3Rpb24odCl7cmV0dXJuIHcoMWUzKnQpfSx3LmVuPXZbRF0sdy5Mcz12LHcucD17fSx3fSkpOyIsImltcG9ydCB7IEJveCwgQnV0dG9uLCBJY29uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBBdWRpb01lZGlhUmVjb3JkZXIgfSBmcm9tICcuLi9hdWRpby1tZWRpYS1yZWNvcmRlcic7XG5pbXBvcnQgeyBDaGF0Q29udHJvbGxlciB9IGZyb20gJy4uL2NoYXQtY29udHJvbGxlcic7XG5pbXBvcnQgeyBBdWRpb0FjdGlvblJlcXVlc3QsIEF1ZGlvQWN0aW9uUmVzcG9uc2UgfSBmcm9tICcuLi9jaGF0LXR5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIE11aUF1ZGlvSW5wdXQoe1xuICBjaGF0Q29udHJvbGxlcixcbiAgYWN0aW9uUmVxdWVzdCxcbn06IHtcbiAgY2hhdENvbnRyb2xsZXI6IENoYXRDb250cm9sbGVyO1xuICBhY3Rpb25SZXF1ZXN0OiBBdWRpb0FjdGlvblJlcXVlc3Q7XG59KTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgY29uc3QgY2hhdEN0bCA9IGNoYXRDb250cm9sbGVyO1xuICBjb25zdCBbYXVkaW9SZWNdID0gUmVhY3QudXNlU3RhdGUoQXVkaW9NZWRpYVJlY29yZGVyLmdldEluc3RhbmNlKCkpO1xuICBjb25zdCBbc3RvcHBlZCwgc2V0U3RvcHBlZF0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2F1ZGlvLCBzZXRBdWRpb10gPSBSZWFjdC51c2VTdGF0ZTxCbG9iIHwgdW5kZWZpbmVkPigpO1xuXG4gIGNvbnN0IGhhbmRsZUVycm9yID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGVycm9yOiBFcnJvcik6IHZvaWQgPT4ge1xuICAgICAgY29uc3QgdmFsdWU6IEF1ZGlvQWN0aW9uUmVzcG9uc2UgPSB7XG4gICAgICAgIHR5cGU6ICdhdWRpbycsXG4gICAgICAgIHZhbHVlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICBlcnJvcixcbiAgICAgIH07XG4gICAgICBjaGF0Q3RsLnNldEFjdGlvblJlc3BvbnNlKGFjdGlvblJlcXVlc3QsIHZhbHVlKTtcbiAgICB9LFxuICAgIFthY3Rpb25SZXF1ZXN0LCBjaGF0Q3RsXSxcbiAgKTtcblxuICBjb25zdCBoYW5kbGVTdGFydCA9IFJlYWN0LnVzZUNhbGxiYWNrKGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgYXVkaW9SZWMuaW5pdGlhbGl6ZSgpO1xuICAgICAgYXdhaXQgYXVkaW9SZWMuc3RhcnRSZWNvcmQoKTtcbiAgICAgIHNldFN0b3BwZWQoZmFsc2UpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBoYW5kbGVFcnJvcihlcnJvciBhcyBFcnJvcik7XG4gICAgfVxuICB9LCBbYXVkaW9SZWMsIGhhbmRsZUVycm9yXSk7XG5cbiAgY29uc3QgaGFuZGxlU3RvcCA9IFJlYWN0LnVzZUNhbGxiYWNrKGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYSA9IGF3YWl0IGF1ZGlvUmVjLnN0b3BSZWNvcmQoKTtcbiAgICAgIHNldEF1ZGlvKGEpO1xuICAgICAgc2V0U3RvcHBlZCh0cnVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaGFuZGxlRXJyb3IoZXJyb3IgYXMgRXJyb3IpO1xuICAgIH1cbiAgfSwgW2F1ZGlvUmVjLCBoYW5kbGVFcnJvcl0pO1xuXG4gIGNvbnN0IHNlbmRSZXNwb25zZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpOiB2b2lkID0+IHtcbiAgICBpZiAoYXVkaW8pIHtcbiAgICAgIGNvbnN0IHZhbHVlOiBBdWRpb0FjdGlvblJlc3BvbnNlID0ge1xuICAgICAgICB0eXBlOiAnYXVkaW8nLFxuICAgICAgICB2YWx1ZTogJ0F1ZGlvJyxcbiAgICAgICAgYXVkaW8sXG4gICAgICB9O1xuICAgICAgY2hhdEN0bC5zZXRBY3Rpb25SZXNwb25zZShhY3Rpb25SZXF1ZXN0LCB2YWx1ZSk7XG4gICAgICBzZXRBdWRpbyh1bmRlZmluZWQpO1xuICAgIH1cbiAgfSwgW2FjdGlvblJlcXVlc3QsIGF1ZGlvLCBjaGF0Q3RsXSk7XG5cbiAgY29uc3Qgc2VuZEJ1dHRvblRleHQgPSBhY3Rpb25SZXF1ZXN0LnNlbmRCdXR0b25UZXh0XG4gICAgPyBhY3Rpb25SZXF1ZXN0LnNlbmRCdXR0b25UZXh0XG4gICAgOiAnU2VuZCc7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBzeD17e1xuICAgICAgICBmbGV4OiAnMSAxIGF1dG8nLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICcmID4gKic6IHtcbiAgICAgICAgICBmbGV4OiAnMSAxIGF1dG8nLFxuICAgICAgICAgIG1pbldpZHRoOiAwLFxuICAgICAgICB9LFxuICAgICAgICAnJiA+ICogKyAqJzoge1xuICAgICAgICAgIG1sOiAxLFxuICAgICAgICB9LFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7c3RvcHBlZCAmJiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdGFydH1cbiAgICAgICAgICBkaXNhYmxlZD17IXN0b3BwZWR9XG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBzdGFydEljb249ezxJY29uPmtleWJvYXJkX3ZvaWNlPC9JY29uPn1cbiAgICAgICAgPlxuICAgICAgICAgIFJlYyBzdGFydFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICl9XG4gICAgICB7IXN0b3BwZWQgJiYgKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlU3RvcH1cbiAgICAgICAgICBkaXNhYmxlZD17c3RvcHBlZH1cbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIHN0YXJ0SWNvbj17PEljb24+c3RvcDwvSWNvbj59XG4gICAgICAgID5cbiAgICAgICAgICBSZWMgc3RvcFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICl9XG4gICAgICA8QnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBvbkNsaWNrPXtzZW5kUmVzcG9uc2V9XG4gICAgICAgIGRpc2FibGVkPXshYXVkaW99XG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICBzdGFydEljb249ezxJY29uPnNlbmQ8L0ljb24+fVxuICAgICAgPlxuICAgICAgICB7c2VuZEJ1dHRvblRleHR9XG4gICAgICA8L0J1dHRvbj5cbiAgICA8L0JveD5cbiAgKTtcbn1cbiIsImltcG9ydCB7XG4gIEJveCxcbiAgQnV0dG9uLFxuICBEaXZpZGVyLFxuICBJY29uLFxuICBMaXN0LFxuICBMaXN0SXRlbSxcbiAgTGlzdEl0ZW1JY29uLFxuICBUeXBvZ3JhcGh5LFxufSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENoYXRDb250cm9sbGVyIH0gZnJvbSAnLi4vY2hhdC1jb250cm9sbGVyJztcbmltcG9ydCB7IEZpbGVBY3Rpb25SZXF1ZXN0LCBGaWxlQWN0aW9uUmVzcG9uc2UgfSBmcm9tICcuLi9jaGF0LXR5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIE11aUZpbGVJbnB1dCh7XG4gIGNoYXRDb250cm9sbGVyLFxuICBhY3Rpb25SZXF1ZXN0LFxufToge1xuICBjaGF0Q29udHJvbGxlcjogQ2hhdENvbnRyb2xsZXI7XG4gIGFjdGlvblJlcXVlc3Q6IEZpbGVBY3Rpb25SZXF1ZXN0O1xufSk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IGNoYXRDdGwgPSBjaGF0Q29udHJvbGxlcjtcbiAgY29uc3QgW2ZpbGVzLCBzZXRGaWxlc10gPSBSZWFjdC51c2VTdGF0ZTxGaWxlW10+KFtdKTtcblxuICBjb25zdCBoYW5kbGVGaWxlQ2hhbmdlID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGZpbGVMaXN0OiBGaWxlTGlzdCB8IG51bGwpOiB2b2lkID0+IHtcbiAgICAgIC8vIENvbnZlcnQgRmlsZUxpc3QgdG8gRmlsZVtdXG4gICAgICBjb25zdCBmaWxlQXJyYXk6IEZpbGVbXSA9IFtdO1xuICAgICAgaWYgKGZpbGVMaXN0KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZUxpc3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBjb25zdCBmaWxlID0gZmlsZUxpc3QuaXRlbShpKTtcbiAgICAgICAgICBpZiAoZmlsZSkge1xuICAgICAgICAgICAgZmlsZUFycmF5LnB1c2goZmlsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzZXRGaWxlcyhmaWxlQXJyYXkpO1xuICAgIH0sXG4gICAgW10sXG4gICk7XG5cbiAgY29uc3Qgc2V0UmVzcG9uc2UgPSBSZWFjdC51c2VDYWxsYmFjaygoKTogdm9pZCA9PiB7XG4gICAgaWYgKGZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZmlsZXMubWFwKChmKSA9PiBmLm5hbWUpLnRvU3RyaW5nKCk7XG4gICAgICBjb25zdCByZXM6IEZpbGVBY3Rpb25SZXNwb25zZSA9IHsgdHlwZTogJ2ZpbGUnLCB2YWx1ZSwgZmlsZXMgfTtcbiAgICAgIGNoYXRDdGwuc2V0QWN0aW9uUmVzcG9uc2UoYWN0aW9uUmVxdWVzdCwgcmVzKTtcbiAgICB9XG4gIH0sIFthY3Rpb25SZXF1ZXN0LCBjaGF0Q3RsLCBmaWxlc10pO1xuXG4gIGNvbnN0IHNlbmRCdXR0b25UZXh0ID0gYWN0aW9uUmVxdWVzdC5zZW5kQnV0dG9uVGV4dFxuICAgID8gYWN0aW9uUmVxdWVzdC5zZW5kQnV0dG9uVGV4dFxuICAgIDogJ1NlbmQnO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgc3g9e3tcbiAgICAgICAgZmxleDogJzEgMSBhdXRvJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgJyYgPiAqJzoge1xuICAgICAgICAgIGZsZXg6ICcwIDAgYXV0bycsXG4gICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgfSxcbiAgICAgICAgJyYgPiAqICsgKic6IHtcbiAgICAgICAgICBtdDogMSxcbiAgICAgICAgfSxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPExpc3Q+XG4gICAgICAgIHtmaWxlcy5tYXAoKGYpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17YCR7Zi5uYW1lfS0ke2Yuc2l6ZX1gfT5cbiAgICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXtmLm5hbWV9PlxuICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgIDxJY29uPmF0dGFjaF9maWxlPC9JY29uPlxuICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3R5bGU9e3sgb3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCcsIG1pbldpZHRoOiAwIH19PlxuICAgICAgICAgICAgICAgIHtmLm5hbWV9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgey8qIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17Zi5uYW1lfSAvPiAqL31cbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9MaXN0PlxuICAgICAgPEJveFxuICAgICAgICBzeD17e1xuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAnJiA+IConOiB7XG4gICAgICAgICAgICBmbGV4OiAnMSAxIGF1dG8nLFxuICAgICAgICAgICAgbWluV2lkdGg6IDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnJiA+ICogKyAqJzoge1xuICAgICAgICAgICAgbWw6IDEsXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGRpc2FibGVkPXtmYWxzZX1cbiAgICAgICAgICBjb21wb25lbnQ9XCJsYWJlbFwiXG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBzdGFydEljb249ezxJY29uPmZvbGRlcjwvSWNvbj59XG4gICAgICAgID5cbiAgICAgICAgICBTZWxlY3QgZmlsZVxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgYWNjZXB0PXthY3Rpb25SZXF1ZXN0LmFjY2VwdH1cbiAgICAgICAgICAgIG11bHRpcGxlPXthY3Rpb25SZXF1ZXN0Lm11bHRpcGxlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKTogdm9pZCA9PiBoYW5kbGVGaWxlQ2hhbmdlKGUudGFyZ2V0LmZpbGVzKX1cbiAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgb25DbGljaz17c2V0UmVzcG9uc2V9XG4gICAgICAgICAgZGlzYWJsZWQ9e2ZpbGVzLmxlbmd0aCA9PT0gMH1cbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIHN0YXJ0SWNvbj17PEljb24+c2VuZDwvSWNvbj59XG4gICAgICAgID5cbiAgICAgICAgICB7c2VuZEJ1dHRvblRleHR9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59XG4iLCJpbXBvcnQgeyBBdmF0YXIsIEJveCwgR3JvdywgVHlwb2dyYXBoeSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTWVzc2FnZSwgTWVzc2FnZUNvbnRlbnQgfSBmcm9tICcuLi9jaGF0LXR5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIE11aU1lc3NhZ2Uoe1xuICBpZCxcbiAgbWVzc2FnZSxcbiAgc2hvd0RhdGUsXG4gIHNob3dUaW1lLFxufToge1xuICBpZDogc3RyaW5nO1xuICBtZXNzYWdlOiBNZXNzYWdlPE1lc3NhZ2VDb250ZW50PjtcbiAgc2hvd0RhdGU6IGJvb2xlYW47XG4gIHNob3dUaW1lOiBib29sZWFuO1xufSk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gIGlmIChtZXNzYWdlLmRlbGV0ZWRBdCkge1xuICAgIHJldHVybiA8ZGl2IGlkPXtpZH0gLz47XG4gIH1cblxuICBjb25zdCBkaXNwRGF0ZSA9IG1lc3NhZ2UudXBkYXRlZEF0ID8gbWVzc2FnZS51cGRhdGVkQXQgOiBtZXNzYWdlLmNyZWF0ZWRBdDtcblxuICBjb25zdCBDaGF0QXZhdG9yID0gKFxuICAgIDxCb3hcbiAgICAgIG1pbldpZHRoPXswfVxuICAgICAgZmxleFNocmluaz17MH1cbiAgICAgIG1sPXttZXNzYWdlLnNlbGYgPyAxIDogMH1cbiAgICAgIG1yPXttZXNzYWdlLnNlbGYgPyAwIDogMX1cbiAgICA+XG4gICAgICA8QXZhdGFyIGFsdD17bWVzc2FnZS51c2VybmFtZX0gc3JjPXttZXNzYWdlLmF2YXRhcn0gLz5cbiAgICA8L0JveD5cbiAgKTtcblxuICBjb25zdCBDaGF0VXNlcm5hbWUgPSAoXG4gICAgPEJveCBtYXhXaWR0aD1cIjEwMCVcIiBteD17MX0+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBhbGlnbj17bWVzc2FnZS5zZWxmID8gJ3JpZ2h0JyA6ICdsZWZ0J30+XG4gICAgICAgIHttZXNzYWdlLnVzZXJuYW1lfVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgIDwvQm94PlxuICApO1xuXG4gIGNvbnN0IENoYXREYXRlID0gKFxuICAgIDxCb3ggbWF4V2lkdGg9XCIxMDAlXCIgbXg9ezF9PlxuICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgdmFyaWFudD1cImJvZHkyXCJcbiAgICAgICAgYWxpZ249e21lc3NhZ2Uuc2VsZiA/ICdyaWdodCcgOiAnbGVmdCd9XG4gICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXG4gICAgICA+XG4gICAgICAgIHtkaXNwRGF0ZT8udG9Mb2NhbGVUaW1lU3RyaW5nKFtdLCB7XG4gICAgICAgICAgaG91cjogJzItZGlnaXQnLFxuICAgICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICAgICAgICB9KX1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICA8L0JveD5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxHcm93IGluPlxuICAgICAgPEJveCBtYXhXaWR0aD1cIjEwMCVcIiBkaXNwbGF5PVwiZmxleFwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAge3Nob3dEYXRlICYmIChcbiAgICAgICAgICA8VHlwb2dyYXBoeSBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAge2Rpc3BEYXRlPy50b0xvY2FsZURhdGVTdHJpbmcoKX1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICl9XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgbWF4V2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICBteT17MX1cbiAgICAgICAgICBwbD17bWVzc2FnZS5zZWxmID8gJzIwJScgOiAwfVxuICAgICAgICAgIHByPXttZXNzYWdlLnNlbGYgPyAwIDogJzIwJSd9XG4gICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgIGp1c3RpZnlDb250ZW50PXttZXNzYWdlLnNlbGYgPyAnZmxleC1lbmQnIDogJ2ZsZXgtc3RhcnQnfVxuICAgICAgICAgIHN0eWxlPXt7IG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnIH19XG4gICAgICAgID5cbiAgICAgICAgICB7bWVzc2FnZS5hdmF0YXIgJiYgIW1lc3NhZ2Uuc2VsZiAmJiBDaGF0QXZhdG9yfVxuICAgICAgICAgIDxCb3ggbWluV2lkdGg9ezB9IGRpc3BsYXk9XCJmbGV4XCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgICAge21lc3NhZ2UudXNlcm5hbWUgJiYgQ2hhdFVzZXJuYW1lfVxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBtYXhXaWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICBweT17MX1cbiAgICAgICAgICAgICAgcHg9ezJ9XG4gICAgICAgICAgICAgIGJnY29sb3I9e21lc3NhZ2Uuc2VsZiA/ICdwcmltYXJ5Lm1haW4nIDogJ2JhY2tncm91bmQucGFwZXInfVxuICAgICAgICAgICAgICBjb2xvcj17bWVzc2FnZS5zZWxmID8gJ3ByaW1hcnkuY29udHJhc3RUZXh0JyA6ICd0ZXh0LnByaW1hcnknfVxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9ezR9XG4gICAgICAgICAgICAgIGJveFNoYWRvdz17Mn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge21lc3NhZ2UudHlwZSA9PT0gJ3RleHQnICYmIChcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBzdHlsZT17eyB3aGl0ZVNwYWNlOiAncHJlLXdyYXAnIH19PlxuICAgICAgICAgICAgICAgICAge21lc3NhZ2UuY29udGVudH1cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHttZXNzYWdlLnR5cGUgPT09ICdqc3gnICYmIDxkaXY+e21lc3NhZ2UuY29udGVudH08L2Rpdj59XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIHtzaG93VGltZSAmJiBDaGF0RGF0ZX1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICB7bWVzc2FnZS5hdmF0YXIgJiYgbWVzc2FnZS5zZWxmICYmIENoYXRBdmF0b3J9XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgPC9Hcm93PlxuICApO1xufVxuIiwiaW1wb3J0IHsgQm94LCBCdXR0b24sIEljb24gfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENoYXRDb250cm9sbGVyIH0gZnJvbSAnLi4vY2hhdC1jb250cm9sbGVyJztcbmltcG9ydCB7XG4gIE11bHRpU2VsZWN0QWN0aW9uUmVxdWVzdCxcbiAgTXVsdGlTZWxlY3RBY3Rpb25SZXNwb25zZSxcbn0gZnJvbSAnLi4vY2hhdC10eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBNdWlNdWx0aVNlbGVjdElucHV0KHtcbiAgY2hhdENvbnRyb2xsZXIsXG4gIGFjdGlvblJlcXVlc3QsXG59OiB7XG4gIGNoYXRDb250cm9sbGVyOiBDaGF0Q29udHJvbGxlcjtcbiAgYWN0aW9uUmVxdWVzdDogTXVsdGlTZWxlY3RBY3Rpb25SZXF1ZXN0O1xufSk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IGNoYXRDdGwgPSBjaGF0Q29udHJvbGxlcjtcbiAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG5cbiAgY29uc3QgaGFuZGxlU2VsZWN0ID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKHZhbHVlOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICAgIGlmICghdmFsdWVzLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgICBzZXRWYWx1ZXMoWy4uLnZhbHVlcywgdmFsdWVdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFZhbHVlcyh2YWx1ZXMuZmlsdGVyKCh2KSA9PiB2ICE9PSB2YWx1ZSkpO1xuICAgICAgfVxuICAgIH0sXG4gICAgW3ZhbHVlc10sXG4gICk7XG5cbiAgY29uc3Qgc2V0UmVzcG9uc2UgPSBSZWFjdC51c2VDYWxsYmFjaygoKTogdm9pZCA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGFjdGlvblJlcXVlc3Qub3B0aW9ucy5maWx0ZXIoKG8pID0+XG4gICAgICB2YWx1ZXMuaW5jbHVkZXMoby52YWx1ZSksXG4gICAgKTtcblxuICAgIGNvbnN0IHJlczogTXVsdGlTZWxlY3RBY3Rpb25SZXNwb25zZSA9IHtcbiAgICAgIHR5cGU6ICdtdWx0aS1zZWxlY3QnLFxuICAgICAgdmFsdWU6IG9wdGlvbnMubWFwKChvKSA9PiBvLnRleHQpLnRvU3RyaW5nKCksXG4gICAgICBvcHRpb25zLFxuICAgIH07XG4gICAgY2hhdEN0bC5zZXRBY3Rpb25SZXNwb25zZShhY3Rpb25SZXF1ZXN0LCByZXMpO1xuICAgIHNldFZhbHVlcyhbXSk7XG4gIH0sIFthY3Rpb25SZXF1ZXN0LCBjaGF0Q3RsLCB2YWx1ZXNdKTtcblxuICBjb25zdCBzZW5kQnV0dG9uVGV4dCA9IGFjdGlvblJlcXVlc3Quc2VuZEJ1dHRvblRleHRcbiAgICA/IGFjdGlvblJlcXVlc3Quc2VuZEJ1dHRvblRleHRcbiAgICA6ICdTZW5kJztcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHN4PXt7XG4gICAgICAgIGZsZXg6ICcxIDEgYXV0bycsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICcmID4gKic6IHtcbiAgICAgICAgICBmbGV4OiAnMCAwIGF1dG8nLFxuICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIH0sXG4gICAgICAgICcmID4gKiArIConOiB7XG4gICAgICAgICAgbXQ6IDEsXG4gICAgICAgIH0sXG4gICAgICB9fVxuICAgID5cbiAgICAgIHthY3Rpb25SZXF1ZXN0Lm9wdGlvbnMubWFwKChvKSA9PiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBrZXk9e2FjdGlvblJlcXVlc3Qub3B0aW9ucy5pbmRleE9mKG8pfVxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIHZhbHVlPXtvLnZhbHVlfVxuICAgICAgICAgIG9uQ2xpY2s9eyhlKTogdm9pZCA9PiBoYW5kbGVTZWxlY3QoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICB2YXJpYW50PXshdmFsdWVzLmluY2x1ZGVzKG8udmFsdWUpID8gJ291dGxpbmVkJyA6ICdjb250YWluZWQnfVxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgID5cbiAgICAgICAgICB7by50ZXh0fVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICkpfVxuICAgICAgPEJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgb25DbGljaz17c2V0UmVzcG9uc2V9XG4gICAgICAgIGRpc2FibGVkPXt2YWx1ZXMubGVuZ3RoID09PSAwfVxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgc3RhcnRJY29uPXs8SWNvbj5zZW5kPC9JY29uPn1cbiAgICAgID5cbiAgICAgICAge3NlbmRCdXR0b25UZXh0fVxuICAgICAgPC9CdXR0b24+XG4gICAgPC9Cb3g+XG4gICk7XG59XG4iLCJpbXBvcnQgeyBCb3gsIEJ1dHRvbiB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ2hhdENvbnRyb2xsZXIgfSBmcm9tICcuLi9jaGF0LWNvbnRyb2xsZXInO1xuaW1wb3J0IHsgU2VsZWN0QWN0aW9uUmVxdWVzdCwgU2VsZWN0QWN0aW9uUmVzcG9uc2UgfSBmcm9tICcuLi9jaGF0LXR5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIE11aVNlbGVjdElucHV0KHtcbiAgY2hhdENvbnRyb2xsZXIsXG4gIGFjdGlvblJlcXVlc3QsXG59OiB7XG4gIGNoYXRDb250cm9sbGVyOiBDaGF0Q29udHJvbGxlcjtcbiAgYWN0aW9uUmVxdWVzdDogU2VsZWN0QWN0aW9uUmVxdWVzdDtcbn0pOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICBjb25zdCBjaGF0Q3RsID0gY2hhdENvbnRyb2xsZXI7XG5cbiAgY29uc3Qgc2V0UmVzcG9uc2UgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAodmFsdWU6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gYWN0aW9uUmVxdWVzdC5vcHRpb25zLmZpbmQoKG8pID0+IG8udmFsdWUgPT09IHZhbHVlKTtcbiAgICAgIGlmICghb3B0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biB2YWx1ZTogJHt2YWx1ZX1gKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlczogU2VsZWN0QWN0aW9uUmVzcG9uc2UgPSB7XG4gICAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgICB2YWx1ZTogb3B0aW9uLnRleHQsXG4gICAgICAgIG9wdGlvbixcbiAgICAgIH07XG4gICAgICBjaGF0Q3RsLnNldEFjdGlvblJlc3BvbnNlKGFjdGlvblJlcXVlc3QsIHJlcyk7XG4gICAgfSxcbiAgICBbYWN0aW9uUmVxdWVzdCwgY2hhdEN0bF0sXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBzeD17e1xuICAgICAgICBmbGV4OiAnMSAxIGF1dG8nLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAnJiA+IConOiB7XG4gICAgICAgICAgZmxleDogJzAgMCBhdXRvJyxcbiAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICB9LFxuICAgICAgICAnJiA+ICogKyAqJzoge1xuICAgICAgICAgIG10OiAxLFxuICAgICAgICB9LFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7YWN0aW9uUmVxdWVzdC5vcHRpb25zLm1hcCgobykgPT4gKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAga2V5PXthY3Rpb25SZXF1ZXN0Lm9wdGlvbnMuaW5kZXhPZihvKX1cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICB2YWx1ZT17by52YWx1ZX1cbiAgICAgICAgICBvbkNsaWNrPXsoZSk6IHZvaWQgPT4gc2V0UmVzcG9uc2UoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICA+XG4gICAgICAgICAge28udGV4dH1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApKX1cbiAgICA8L0JveD5cbiAgKTtcbn1cbiIsImltcG9ydCB7IEJveCwgQnV0dG9uLCBJY29uLCBUZXh0RmllbGQgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENoYXRDb250cm9sbGVyIH0gZnJvbSAnLi4vY2hhdC1jb250cm9sbGVyJztcbmltcG9ydCB7IFRleHRBY3Rpb25SZXF1ZXN0LCBUZXh0QWN0aW9uUmVzcG9uc2UgfSBmcm9tICcuLi9jaGF0LXR5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIE11aVRleHRJbnB1dCh7XG4gIGNoYXRDb250cm9sbGVyLFxuICBhY3Rpb25SZXF1ZXN0LFxufToge1xuICBjaGF0Q29udHJvbGxlcjogQ2hhdENvbnRyb2xsZXI7XG4gIGFjdGlvblJlcXVlc3Q6IFRleHRBY3Rpb25SZXF1ZXN0O1xufSk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IGNoYXRDdGwgPSBjaGF0Q29udHJvbGxlcjtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShhY3Rpb25SZXF1ZXN0LmRlZmF1bHRWYWx1ZSk7XG5cbiAgY29uc3Qgc2V0UmVzcG9uc2UgPSBSZWFjdC51c2VDYWxsYmFjaygoKTogdm9pZCA9PiB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBjb25zdCByZXM6IFRleHRBY3Rpb25SZXNwb25zZSA9IHsgdHlwZTogJ3RleHQnLCB2YWx1ZSB9O1xuICAgICAgY2hhdEN0bC5zZXRBY3Rpb25SZXNwb25zZShhY3Rpb25SZXF1ZXN0LCByZXMpO1xuICAgICAgc2V0VmFsdWUoJycpO1xuICAgIH1cbiAgfSwgW2FjdGlvblJlcXVlc3QsIGNoYXRDdGwsIHZhbHVlXSk7XG5cbiAgY29uc3QgaGFuZGxlS2V5RG93biA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlOiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KTogdm9pZCA9PiB7XG4gICAgICBpZiAoZS5uYXRpdmVFdmVudC5pc0NvbXBvc2luZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyAmJiAhZS5zaGlmdEtleSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldFJlc3BvbnNlKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbc2V0UmVzcG9uc2VdLFxuICApO1xuXG4gIGNvbnN0IHNlbmRCdXR0b25UZXh0ID0gYWN0aW9uUmVxdWVzdC5zZW5kQnV0dG9uVGV4dFxuICAgID8gYWN0aW9uUmVxdWVzdC5zZW5kQnV0dG9uVGV4dFxuICAgIDogJ1NlbmQnO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgc3g9e3tcbiAgICAgICAgZmxleDogJzEgMSBhdXRvJyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAnJiA+IConOiB7XG4gICAgICAgICAgZmxleDogJzEgMSBhdXRvJyxcbiAgICAgICAgICBtaW5XaWR0aDogMCxcbiAgICAgICAgfSxcbiAgICAgICAgJyYgPiAqICsgKic6IHtcbiAgICAgICAgICBtbDogMSxcbiAgICAgICAgfSxcbiAgICAgICAgJyYgOmxhc3QtY2hpbGQnOiB7XG4gICAgICAgICAgZmxleDogJzAgMSBhdXRvJyxcbiAgICAgICAgfSxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPFRleHRGaWVsZFxuICAgICAgICBwbGFjZWhvbGRlcj17YWN0aW9uUmVxdWVzdC5wbGFjZWhvbGRlcn1cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17KGUpOiB2b2lkID0+IHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgIG11bHRpbGluZVxuICAgICAgICBpbnB1dFByb3BzPXt7IG9uS2V5RG93bjogaGFuZGxlS2V5RG93biB9fVxuICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICBtYXhSb3dzPXsxMH1cbiAgICAgIC8+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBvbkNsaWNrPXtzZXRSZXNwb25zZX1cbiAgICAgICAgZGlzYWJsZWQ9eyF2YWx1ZX1cbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgIHN0YXJ0SWNvbj17PEljb24+c2VuZDwvSWNvbj59XG4gICAgICA+XG4gICAgICAgIHtzZW5kQnV0dG9uVGV4dH1cbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvQm94PlxuICApO1xufVxuIiwiaW1wb3J0IHsgQm94IH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ2hhdENvbnRyb2xsZXIgfSBmcm9tICcuLi9jaGF0LWNvbnRyb2xsZXInO1xuaW1wb3J0IHtcbiAgQWN0aW9uUmVxdWVzdCxcbiAgQXVkaW9BY3Rpb25SZXF1ZXN0LFxuICBDdXN0b21BY3Rpb25SZXF1ZXN0LFxuICBGaWxlQWN0aW9uUmVxdWVzdCxcbiAgTXVsdGlTZWxlY3RBY3Rpb25SZXF1ZXN0LFxuICBTZWxlY3RBY3Rpb25SZXF1ZXN0LFxuICBUZXh0QWN0aW9uUmVxdWVzdCxcbn0gZnJvbSAnLi4vY2hhdC10eXBlcyc7XG5cbmltcG9ydCB7IE11aUF1ZGlvSW5wdXQgfSBmcm9tICcuL011aUF1ZGlvSW5wdXQnO1xuaW1wb3J0IHsgTXVpRmlsZUlucHV0IH0gZnJvbSAnLi9NdWlGaWxlSW5wdXQnO1xuaW1wb3J0IHsgTXVpTWVzc2FnZSB9IGZyb20gJy4vTXVpTWVzc2FnZSc7XG5pbXBvcnQgeyBNdWlNdWx0aVNlbGVjdElucHV0IH0gZnJvbSAnLi9NdWlNdWx0aVNlbGVjdElucHV0JztcbmltcG9ydCB7IE11aVNlbGVjdElucHV0IH0gZnJvbSAnLi9NdWlTZWxlY3RJbnB1dCc7XG5pbXBvcnQgeyBNdWlUZXh0SW5wdXQgfSBmcm9tICcuL011aVRleHRJbnB1dCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBNdWlDaGF0KHtcbiAgY2hhdENvbnRyb2xsZXIsXG59OiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjx7XG4gIGNoYXRDb250cm9sbGVyOiBDaGF0Q29udHJvbGxlcjtcbn0+KTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgY29uc3QgY2hhdEN0bCA9IGNoYXRDb250cm9sbGVyO1xuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IFJlYWN0LnVzZVN0YXRlKGNoYXRDdGwuZ2V0TWVzc2FnZXMoKSk7XG4gIGNvbnN0IFthY3RSZXEsIHNldEFjdFJlcV0gPSBSZWFjdC51c2VTdGF0ZShjaGF0Q3RsLmdldEFjdGlvblJlcXVlc3QoKSk7XG5cbiAgY29uc3QgbXNnUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3Qgc2Nyb2xsID0gUmVhY3QudXNlQ2FsbGJhY2soKCk6IHZvaWQgPT4ge1xuICAgIGlmIChtc2dSZWYuY3VycmVudCkge1xuICAgICAgbXNnUmVmLmN1cnJlbnQuc2Nyb2xsVG9wID0gbXNnUmVmLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0O1xuICAgICAgLy8gbXNnUmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcodHJ1ZSk7XG4gICAgfVxuICB9LCBbbXNnUmVmXSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZnVuY3Rpb24gaGFuZGxlTWFzc2FnZXNDaGFuZ2VkKCk6IHZvaWQge1xuICAgICAgc2V0TWVzc2FnZXMoWy4uLmNoYXRDdGwuZ2V0TWVzc2FnZXMoKV0pO1xuICAgICAgc2Nyb2xsKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZUFjdGlvbkNoYW5nZWQoKTogdm9pZCB7XG4gICAgICBzZXRBY3RSZXEoY2hhdEN0bC5nZXRBY3Rpb25SZXF1ZXN0KCkpO1xuICAgICAgc2Nyb2xsKCk7XG4gICAgfVxuICAgIGNoYXRDdGwuYWRkT25NZXNzYWdlc0NoYW5nZWQoaGFuZGxlTWFzc2FnZXNDaGFuZ2VkKTtcbiAgICBjaGF0Q3RsLmFkZE9uQWN0aW9uQ2hhbmdlZChoYW5kbGVBY3Rpb25DaGFuZ2VkKTtcbiAgfSwgW2NoYXRDdGwsIHNjcm9sbF0pO1xuXG4gIHR5cGUgQ3VzdG9tQ29tcG9uZW50VHlwZSA9IFJlYWN0LkZDPHtcbiAgICBjaGF0Q29udHJvbGxlcjogQ2hhdENvbnRyb2xsZXI7XG4gICAgYWN0aW9uUmVxdWVzdDogQWN0aW9uUmVxdWVzdDtcbiAgfT47XG4gIGNvbnN0IEN1c3RvbUNvbXBvbmVudCA9IFJlYWN0LnVzZU1lbW8oKCk6IEN1c3RvbUNvbXBvbmVudFR5cGUgPT4ge1xuICAgIGlmICghYWN0UmVxIHx8IGFjdFJlcS50eXBlICE9PSAnY3VzdG9tJykge1xuICAgICAgcmV0dXJuIG51bGwgYXMgdW5rbm93biBhcyBDdXN0b21Db21wb25lbnRUeXBlO1xuICAgIH1cbiAgICByZXR1cm4gKGFjdFJlcSBhcyBDdXN0b21BY3Rpb25SZXF1ZXN0KVxuICAgICAgLkNvbXBvbmVudCBhcyB1bmtub3duIGFzIEN1c3RvbUNvbXBvbmVudFR5cGU7XG4gIH0sIFthY3RSZXFdKTtcblxuICBjb25zdCB1bmtub3duTXNnID0ge1xuICAgIHR5cGU6ICd0ZXh0JyxcbiAgICBjb250ZW50OiAnVW5rbm93biBtZXNzYWdlLicsXG4gICAgc2VsZjogZmFsc2UsXG4gIH07XG5cbiAgbGV0IHByZXZEYXRlID0gZGF5anMoMCk7XG4gIGxldCBwcmV2VGltZSA9IGRheWpzKDApO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgc3g9e3tcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIHA6IDEsXG4gICAgICAgIGJnY29sb3I6ICdiYWNrZ3JvdW5kLmRlZmF1bHQnLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAnJiA+IConOiB7XG4gICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgfSxcbiAgICAgICAgJyYgPiAqICsgKic6IHtcbiAgICAgICAgICBtdDogMSxcbiAgICAgICAgfSxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEJveFxuICAgICAgICBzeD17e1xuICAgICAgICAgIGZsZXg6ICcxIDEgMCUnLFxuICAgICAgICAgIG92ZXJmbG93WTogJ2F1dG8nLFxuICAgICAgICAgIFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nOiAndG91Y2gnLFxuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAnJiA+IConOiB7XG4gICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICAgIHJlZj17bXNnUmVmfVxuICAgICAgPlxuICAgICAgICB7bWVzc2FnZXMubWFwKChtc2cpOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xuICAgICAgICAgIGxldCBzaG93RGF0ZSA9IGZhbHNlO1xuICAgICAgICAgIGxldCBzaG93VGltZSA9ICEhY2hhdEN0bC5nZXRPcHRpb24oKS5zaG93RGF0ZVRpbWU7XG4gICAgICAgICAgaWYgKCEhY2hhdEN0bC5nZXRPcHRpb24oKS5zaG93RGF0ZVRpbWUgJiYgIW1zZy5kZWxldGVkQXQpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSBkYXlqcyhcbiAgICAgICAgICAgICAgbXNnLnVwZGF0ZWRBdCA/IG1zZy51cGRhdGVkQXQgOiBtc2cuY3JlYXRlZEF0LFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnQuZm9ybWF0KCdZWVlZTU1ERCcpICE9PSBwcmV2RGF0ZS5mb3JtYXQoJ1lZWVlNTUREJykpIHtcbiAgICAgICAgICAgICAgc2hvd0RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJldkRhdGUgPSBjdXJyZW50O1xuXG4gICAgICAgICAgICBpZiAoY3VycmVudC5kaWZmKHByZXZUaW1lKSA8IDYwXzAwMCkge1xuICAgICAgICAgICAgICBzaG93VGltZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcHJldlRpbWUgPSBjdXJyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobXNnLnR5cGUgPT09ICd0ZXh0JyB8fCBtc2cudHlwZSA9PT0gJ2pzeCcpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxNdWlNZXNzYWdlXG4gICAgICAgICAgICAgICAga2V5PXttZXNzYWdlcy5pbmRleE9mKG1zZyl9XG4gICAgICAgICAgICAgICAgaWQ9e2BjdS1tc2ctJHttZXNzYWdlcy5pbmRleE9mKG1zZykgKyAxfWB9XG4gICAgICAgICAgICAgICAgbWVzc2FnZT17bXNnfVxuICAgICAgICAgICAgICAgIHNob3dEYXRlPXtzaG93RGF0ZX1cbiAgICAgICAgICAgICAgICBzaG93VGltZT17c2hvd1RpbWV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE11aU1lc3NhZ2VcbiAgICAgICAgICAgICAga2V5PXttZXNzYWdlcy5pbmRleE9mKG1zZyl9XG4gICAgICAgICAgICAgIGlkPXtgY3UtbXNnLSR7bWVzc2FnZXMuaW5kZXhPZihtc2cpICsgMX1gfVxuICAgICAgICAgICAgICBtZXNzYWdlPXt1bmtub3duTXNnfVxuICAgICAgICAgICAgICBzaG93RGF0ZT17c2hvd0RhdGV9XG4gICAgICAgICAgICAgIHNob3dUaW1lPXtzaG93VGltZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L0JveD5cbiAgICAgIDxCb3hcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBmbGV4OiAnMCAxIGF1dG8nLFxuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBhbGlnbkNvbnRlbnQ6ICdmbGV4LWVuZCcsXG4gICAgICAgICAgJyYgPiAqJzoge1xuICAgICAgICAgICAgbWluV2lkdGg6IDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2FjdFJlcSAmJiBhY3RSZXEudHlwZSA9PT0gJ3RleHQnICYmIChcbiAgICAgICAgICA8TXVpVGV4dElucHV0XG4gICAgICAgICAgICBjaGF0Q29udHJvbGxlcj17Y2hhdEN0bH1cbiAgICAgICAgICAgIGFjdGlvblJlcXVlc3Q9e2FjdFJlcSBhcyBUZXh0QWN0aW9uUmVxdWVzdH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7YWN0UmVxICYmIGFjdFJlcS50eXBlID09PSAnc2VsZWN0JyAmJiAoXG4gICAgICAgICAgPE11aVNlbGVjdElucHV0XG4gICAgICAgICAgICBjaGF0Q29udHJvbGxlcj17Y2hhdEN0bH1cbiAgICAgICAgICAgIGFjdGlvblJlcXVlc3Q9e2FjdFJlcSBhcyBTZWxlY3RBY3Rpb25SZXF1ZXN0fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHthY3RSZXEgJiYgYWN0UmVxLnR5cGUgPT09ICdtdWx0aS1zZWxlY3QnICYmIChcbiAgICAgICAgICA8TXVpTXVsdGlTZWxlY3RJbnB1dFxuICAgICAgICAgICAgY2hhdENvbnRyb2xsZXI9e2NoYXRDdGx9XG4gICAgICAgICAgICBhY3Rpb25SZXF1ZXN0PXthY3RSZXEgYXMgTXVsdGlTZWxlY3RBY3Rpb25SZXF1ZXN0fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHthY3RSZXEgJiYgYWN0UmVxLnR5cGUgPT09ICdmaWxlJyAmJiAoXG4gICAgICAgICAgPE11aUZpbGVJbnB1dFxuICAgICAgICAgICAgY2hhdENvbnRyb2xsZXI9e2NoYXRDdGx9XG4gICAgICAgICAgICBhY3Rpb25SZXF1ZXN0PXthY3RSZXEgYXMgRmlsZUFjdGlvblJlcXVlc3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge2FjdFJlcSAmJiBhY3RSZXEudHlwZSA9PT0gJ2F1ZGlvJyAmJiAoXG4gICAgICAgICAgPE11aUF1ZGlvSW5wdXRcbiAgICAgICAgICAgIGNoYXRDb250cm9sbGVyPXtjaGF0Q3RsfVxuICAgICAgICAgICAgYWN0aW9uUmVxdWVzdD17YWN0UmVxIGFzIEF1ZGlvQWN0aW9uUmVxdWVzdH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7YWN0UmVxICYmIGFjdFJlcS50eXBlID09PSAnY3VzdG9tJyAmJiAoXG4gICAgICAgICAgPEN1c3RvbUNvbXBvbmVudFxuICAgICAgICAgICAgY2hhdENvbnRyb2xsZXI9e2NoYXRDdGx9XG4gICAgICAgICAgICBhY3Rpb25SZXF1ZXN0PXthY3RSZXEgYXMgQ3VzdG9tQWN0aW9uUmVxdWVzdH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiYXJyYXlMaWtlVG9BcnJheSIsImFycmF5V2l0aG91dEhvbGVzIiwiaXRlcmFibGVUb0FycmF5IiwidW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJub25JdGVyYWJsZVNwcmVhZCIsImRlZmluZVByb3BlcnR5IiwidW5kZWZpbmVkIiwicmVxdWlyZSQkMCIsIkNoYXRDb250cm9sbGVyIiwib3B0aW9uIiwiZGVsYXkiLCJyZXF1ZXN0IiwidHlwZSIsInJlc3BvbnNlcyIsIm9uUmVzbnBvbnNlZCIsImFsd2F5cyIsImFkZE1lc3NhZ2UiLCJzdGF0ZSIsImRlZmF1bHRPcHRpb24iLCJtZXNzYWdlcyIsImFjdGlvbiIsImVtcHR5QWN0aW9uIiwiYWN0aW9uSGlzdG9yeSIsIm9uTWVzc2FnZXNDaGFuZ2VkIiwib25BY3Rpb25DaGFuZ2VkIiwibWVzc2FnZSIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImxlbiIsInB1c2giLCJpZHgiLCJjcmVhdGVkQXQiLCJEYXRlIiwiY2FsbE9uTWVzc2FnZXNDaGFuZ2VkIiwiaW5kZXgiLCJ1cGRhdGVkQXQiLCJkZWxldGVkQXQiLCJjbGVhck1lc3NhZ2VzIiwibWFwIiwiaCIsImNhbGxiYWNrIiwiaW5kZXhPZiIsIm9uUmVzcG9uc2UiLCJkZWZhdWx0QWN0aW9uUmVxdWVzdCIsInJlamVjdCIsInJldHVyblJlc3BvbnNlIiwicmVzcG9uc2UiLCJlcnJvciIsImNhbGxPbkFjdGlvbkNoYW5nZWQiLCJ2YWx1ZSIsImxlbmd0aCIsIm9yaWdSZXEiLCJFcnJvciIsImNvbnRlbnQiLCJzZWxmIiwiTWVkaWFSZWNvcmRlciIsIkF1ZGlvTWVkaWFSZWNvcmRlciIsIndpbmRvdyIsIkF1ZGlvUmVjb3JkZXIiLCJyZWNvcmRDaHVua3MiLCJtZCIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImF1ZGlvIiwidmlkZW8iLCJzdHJlYW0iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImRhdGEiLCJzaXplIiwic3RhcnQiLCJCbG9iIiwic3RvcCIsImluc3RhbmNlIiwiYXJyYXlXaXRoSG9sZXMiLCJpdGVyYWJsZVRvQXJyYXlMaW1pdCIsIm5vbkl0ZXJhYmxlUmVzdCIsInRoaXMiLCJNdWlBdWRpb0lucHV0IiwiY2hhdENvbnRyb2xsZXIiLCJhY3Rpb25SZXF1ZXN0IiwiY2hhdEN0bCIsIlJlYWN0IiwidXNlU3RhdGUiLCJnZXRJbnN0YW5jZSIsImF1ZGlvUmVjIiwic3RvcHBlZCIsInNldFN0b3BwZWQiLCJzZXRBdWRpbyIsImhhbmRsZUVycm9yIiwidXNlQ2FsbGJhY2siLCJzZXRBY3Rpb25SZXNwb25zZSIsImhhbmRsZVN0YXJ0IiwiaW5pdGlhbGl6ZSIsInN0YXJ0UmVjb3JkIiwiaGFuZGxlU3RvcCIsInN0b3BSZWNvcmQiLCJhIiwic2VuZFJlc3BvbnNlIiwic2VuZEJ1dHRvblRleHQiLCJCb3giLCJmbGV4IiwiZGlzcGxheSIsIm1pbldpZHRoIiwibWwiLCJCdXR0b24iLCJJY29uIiwiTXVpRmlsZUlucHV0IiwiZmlsZXMiLCJzZXRGaWxlcyIsImhhbmRsZUZpbGVDaGFuZ2UiLCJmaWxlTGlzdCIsImZpbGVBcnJheSIsImkiLCJmaWxlIiwiaXRlbSIsInNldFJlc3BvbnNlIiwiZiIsIm5hbWUiLCJ0b1N0cmluZyIsInJlcyIsIm1heFdpZHRoIiwiZmxleERpcmVjdGlvbiIsIm10IiwiTGlzdCIsIkRpdmlkZXIiLCJMaXN0SXRlbSIsIkxpc3RJdGVtSWNvbiIsIlR5cG9ncmFwaHkiLCJvdmVyZmxvd1dyYXAiLCJhY2NlcHQiLCJtdWx0aXBsZSIsInRhcmdldCIsIk11aU1lc3NhZ2UiLCJpZCIsInNob3dEYXRlIiwic2hvd1RpbWUiLCJkaXNwRGF0ZSIsIkNoYXRBdmF0b3IiLCJBdmF0YXIiLCJ1c2VybmFtZSIsImF2YXRhciIsIkNoYXRVc2VybmFtZSIsIkNoYXREYXRlIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwiaG91ciIsIm1pbnV0ZSIsIkdyb3ciLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ3aGl0ZVNwYWNlIiwiTXVpTXVsdGlTZWxlY3RJbnB1dCIsInZhbHVlcyIsInNldFZhbHVlcyIsImhhbmRsZVNlbGVjdCIsImluY2x1ZGVzIiwiZmlsdGVyIiwidiIsIm9wdGlvbnMiLCJvIiwidGV4dCIsImN1cnJlbnRUYXJnZXQiLCJNdWlTZWxlY3RJbnB1dCIsImZpbmQiLCJNdWlUZXh0SW5wdXQiLCJkZWZhdWx0VmFsdWUiLCJzZXRWYWx1ZSIsImhhbmRsZUtleURvd24iLCJuYXRpdmVFdmVudCIsImlzQ29tcG9zaW5nIiwia2V5Iiwic2hpZnRLZXkiLCJwcmV2ZW50RGVmYXVsdCIsIlRleHRGaWVsZCIsInBsYWNlaG9sZGVyIiwib25LZXlEb3duIiwiTXVpQ2hhdCIsImdldE1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJnZXRBY3Rpb25SZXF1ZXN0IiwiYWN0UmVxIiwic2V0QWN0UmVxIiwibXNnUmVmIiwidXNlUmVmIiwic2Nyb2xsIiwiY3VycmVudCIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsInVzZUVmZmVjdCIsImhhbmRsZU1hc3NhZ2VzQ2hhbmdlZCIsImhhbmRsZUFjdGlvbkNoYW5nZWQiLCJhZGRPbk1lc3NhZ2VzQ2hhbmdlZCIsImFkZE9uQWN0aW9uQ2hhbmdlZCIsIkN1c3RvbUNvbXBvbmVudCIsInVzZU1lbW8iLCJDb21wb25lbnQiLCJ1bmtub3duTXNnIiwicHJldkRhdGUiLCJkYXlqcyIsInByZXZUaW1lIiwiaGVpZ2h0Iiwid2lkdGgiLCJwIiwiYmdjb2xvciIsIm92ZXJmbG93WSIsIldlYmtpdE92ZXJmbG93U2Nyb2xsaW5nIiwibXNnIiwiZ2V0T3B0aW9uIiwic2hvd0RhdGVUaW1lIiwiZm9ybWF0IiwiZGlmZiIsImFsaWduQ29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQSxTQUFTLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRTtFQUMzRSxFQUFFLElBQUk7RUFDTixJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUM3QixJQUFJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7RUFDM0IsR0FBRyxDQUFDLE9BQU8sS0FBSyxFQUFFO0VBQ2xCLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0VBQ2xCLElBQUksT0FBTztFQUNYLEdBQUc7QUFDSDtFQUNBLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO0VBQ2pCLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0VBQ25CLEdBQUcsTUFBTTtFQUNULElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0VBQy9DLEdBQUc7RUFDSCxDQUFDO0FBQ0Q7RUFDZSxTQUFTLGlCQUFpQixDQUFDLEVBQUUsRUFBRTtFQUM5QyxFQUFFLE9BQU8sWUFBWTtFQUNyQixJQUFJLElBQUksSUFBSSxHQUFHLElBQUk7RUFDbkIsUUFBUSxJQUFJLEdBQUcsU0FBUyxDQUFDO0VBQ3pCLElBQUksT0FBTyxJQUFJLE9BQU8s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QUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsNEZBQTRGLENBQUMsQ0FBQyxDQUFDLHFGQUFxRixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLDBEQUEwRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsdUZBQXVGLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLE9BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGVBQWUsR0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUs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

function _classCallCheck2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~atlas-atlas-module~creativeworks-creativeworks-module~infiniteloop-infiniteloop-module~kerne~4ac1317a"], {
  /***/
  "./node_modules/clipboard/dist/clipboard.js":
  /*!**************************************************!*\
    !*** ./node_modules/clipboard/dist/clipboard.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesClipboardDistClipboardJs(module, exports, __webpack_require__) {
    /*!
     * clipboard.js v2.0.4
     * https://zenorocha.github.io/clipboard.js
     * 
     * Licensed MIT © Zeno Rocha
     */
    (function webpackUniversalModuleDefinition(root, factory) {
      if (true) module.exports = factory();else {}
    })(this, function () {
      return (
        /******/
        function (modules) {
          // webpackBootstrap

          /******/
          // The module cache

          /******/
          var installedModules = {};
          /******/

          /******/
          // The require function

          /******/

          function __webpack_require__(moduleId) {
            /******/

            /******/
            // Check if module is in cache

            /******/
            if (installedModules[moduleId]) {
              /******/
              return installedModules[moduleId].exports;
              /******/
            }
            /******/
            // Create a new module (and put it into the cache)

            /******/


            var module = installedModules[moduleId] = {
              /******/
              i: moduleId,

              /******/
              l: false,

              /******/
              exports: {}
              /******/

            };
            /******/

            /******/
            // Execute the module function

            /******/

            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/

            /******/
            // Flag the module as loaded

            /******/

            module.l = true;
            /******/

            /******/
            // Return the exports of the module

            /******/

            return module.exports;
            /******/
          }
          /******/

          /******/

          /******/
          // expose the modules object (__webpack_modules__)

          /******/


          __webpack_require__.m = modules;
          /******/

          /******/
          // expose the module cache

          /******/

          __webpack_require__.c = installedModules;
          /******/

          /******/
          // define getter function for harmony exports

          /******/

          __webpack_require__.d = function (exports, name, getter) {
            /******/
            if (!__webpack_require__.o(exports, name)) {
              /******/
              Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
              });
              /******/
            }
            /******/

          };
          /******/

          /******/
          // define __esModule on exports

          /******/


          __webpack_require__.r = function (exports) {
            /******/
            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
              /******/
              Object.defineProperty(exports, Symbol.toStringTag, {
                value: 'Module'
              });
              /******/
            }
            /******/


            Object.defineProperty(exports, '__esModule', {
              value: true
            });
            /******/
          };
          /******/

          /******/
          // create a fake namespace object

          /******/
          // mode & 1: value is a module id, require it

          /******/
          // mode & 2: merge all properties of value into the ns

          /******/
          // mode & 4: return value when already ns object

          /******/
          // mode & 8|1: behave like require

          /******/


          __webpack_require__.t = function (value, mode) {
            /******/
            if (mode & 1) value = __webpack_require__(value);
            /******/

            if (mode & 8) return value;
            /******/

            if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
            /******/

            var ns = Object.create(null);
            /******/

            __webpack_require__.r(ns);
            /******/


            Object.defineProperty(ns, 'default', {
              enumerable: true,
              value: value
            });
            /******/

            if (mode & 2 && typeof value != 'string') for (var key in value) {
              __webpack_require__.d(ns, key, function (key) {
                return value[key];
              }.bind(null, key));
            }
            /******/

            return ns;
            /******/
          };
          /******/

          /******/
          // getDefaultExport function for compatibility with non-harmony modules

          /******/


          __webpack_require__.n = function (module) {
            /******/
            var getter = module && module.__esModule ?
            /******/
            function getDefault() {
              return module['default'];
            } :
            /******/
            function getModuleExports() {
              return module;
            };
            /******/

            __webpack_require__.d(getter, 'a', getter);
            /******/


            return getter;
            /******/
          };
          /******/

          /******/
          // Object.prototype.hasOwnProperty.call

          /******/


          __webpack_require__.o = function (object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
          };
          /******/

          /******/
          // __webpack_public_path__

          /******/


          __webpack_require__.p = "";
          /******/

          /******/

          /******/
          // Load entry module and return exports

          /******/

          return __webpack_require__(__webpack_require__.s = 0);
          /******/
        }(
        /************************************************************************/

        /******/
        [
        /* 0 */

        /***/
        function (module, exports, __webpack_require__) {
          "use strict";

          var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
            return typeof obj;
          } : function (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          };

          var _createClass = function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();

          var _clipboardAction = __webpack_require__(1);

          var _clipboardAction2 = _interopRequireDefault(_clipboardAction);

          var _tinyEmitter = __webpack_require__(3);

          var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

          var _goodListener = __webpack_require__(4);

          var _goodListener2 = _interopRequireDefault(_goodListener);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }

            return call && (typeof call === "object" || typeof call === "function") ? call : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
          }
          /**
           * Base class which takes one or more elements, adds event listeners to them,
           * and instantiates a new `ClipboardAction` on each click.
           */


          var Clipboard = function (_Emitter) {
            _inherits(Clipboard, _Emitter);
            /**
             * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
             * @param {Object} options
             */


            function Clipboard(trigger, options) {
              _classCallCheck(this, Clipboard);

              var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));

              _this.resolveOptions(options);

              _this.listenClick(trigger);

              return _this;
            }
            /**
             * Defines if attributes would be resolved using internal setter functions
             * or custom functions that were passed in the constructor.
             * @param {Object} options
             */


            _createClass(Clipboard, [{
              key: 'resolveOptions',
              value: function resolveOptions() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
                this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
                this.text = typeof options.text === 'function' ? options.text : this.defaultText;
                this.container = _typeof(options.container) === 'object' ? options.container : document.body;
              }
              /**
               * Adds a click event listener to the passed trigger.
               * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
               */

            }, {
              key: 'listenClick',
              value: function listenClick(trigger) {
                var _this2 = this;

                this.listener = (0, _goodListener2.default)(trigger, 'click', function (e) {
                  return _this2.onClick(e);
                });
              }
              /**
               * Defines a new `ClipboardAction` on each click event.
               * @param {Event} e
               */

            }, {
              key: 'onClick',
              value: function onClick(e) {
                var trigger = e.delegateTarget || e.currentTarget;

                if (this.clipboardAction) {
                  this.clipboardAction = null;
                }

                this.clipboardAction = new _clipboardAction2.default({
                  action: this.action(trigger),
                  target: this.target(trigger),
                  text: this.text(trigger),
                  container: this.container,
                  trigger: trigger,
                  emitter: this
                });
              }
              /**
               * Default `action` lookup function.
               * @param {Element} trigger
               */

            }, {
              key: 'defaultAction',
              value: function defaultAction(trigger) {
                return getAttributeValue('action', trigger);
              }
              /**
               * Default `target` lookup function.
               * @param {Element} trigger
               */

            }, {
              key: 'defaultTarget',
              value: function defaultTarget(trigger) {
                var selector = getAttributeValue('target', trigger);

                if (selector) {
                  return document.querySelector(selector);
                }
              }
              /**
               * Returns the support of the given action, or all actions if no action is
               * given.
               * @param {String} [action]
               */

            }, {
              key: 'defaultText',

              /**
               * Default `text` lookup function.
               * @param {Element} trigger
               */
              value: function defaultText(trigger) {
                return getAttributeValue('text', trigger);
              }
              /**
               * Destroy lifecycle.
               */

            }, {
              key: 'destroy',
              value: function destroy() {
                this.listener.destroy();

                if (this.clipboardAction) {
                  this.clipboardAction.destroy();
                  this.clipboardAction = null;
                }
              }
            }], [{
              key: 'isSupported',
              value: function isSupported() {
                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];
                var actions = typeof action === 'string' ? [action] : action;
                var support = !!document.queryCommandSupported;
                actions.forEach(function (action) {
                  support = support && !!document.queryCommandSupported(action);
                });
                return support;
              }
            }]);

            return Clipboard;
          }(_tinyEmitter2.default);
          /**
           * Helper function to retrieve attribute value.
           * @param {String} suffix
           * @param {Element} element
           */


          function getAttributeValue(suffix, element) {
            var attribute = 'data-clipboard-' + suffix;

            if (!element.hasAttribute(attribute)) {
              return;
            }

            return element.getAttribute(attribute);
          }

          module.exports = Clipboard;
          /***/
        },
        /* 1 */

        /***/
        function (module, exports, __webpack_require__) {
          "use strict";

          var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
            return typeof obj;
          } : function (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          };

          var _createClass = function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();

          var _select = __webpack_require__(2);

          var _select2 = _interopRequireDefault(_select);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          /**
           * Inner class which performs selection from either `text` or `target`
           * properties and then executes copy or cut operations.
           */


          var ClipboardAction = function () {
            /**
             * @param {Object} options
             */
            function ClipboardAction(options) {
              _classCallCheck(this, ClipboardAction);

              this.resolveOptions(options);
              this.initSelection();
            }
            /**
             * Defines base properties passed from constructor.
             * @param {Object} options
             */


            _createClass(ClipboardAction, [{
              key: 'resolveOptions',
              value: function resolveOptions() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                this.action = options.action;
                this.container = options.container;
                this.emitter = options.emitter;
                this.target = options.target;
                this.text = options.text;
                this.trigger = options.trigger;
                this.selectedText = '';
              }
              /**
               * Decides which selection strategy is going to be applied based
               * on the existence of `text` and `target` properties.
               */

            }, {
              key: 'initSelection',
              value: function initSelection() {
                if (this.text) {
                  this.selectFake();
                } else if (this.target) {
                  this.selectTarget();
                }
              }
              /**
               * Creates a fake textarea element, sets its value from `text` property,
               * and makes a selection on it.
               */

            }, {
              key: 'selectFake',
              value: function selectFake() {
                var _this = this;

                var isRTL = document.documentElement.getAttribute('dir') == 'rtl';
                this.removeFake();

                this.fakeHandlerCallback = function () {
                  return _this.removeFake();
                };

                this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || true;
                this.fakeElem = document.createElement('textarea'); // Prevent zooming on iOS

                this.fakeElem.style.fontSize = '12pt'; // Reset box model

                this.fakeElem.style.border = '0';
                this.fakeElem.style.padding = '0';
                this.fakeElem.style.margin = '0'; // Move element out of screen horizontally

                this.fakeElem.style.position = 'absolute';
                this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px'; // Move element to the same position vertically

                var yPosition = window.pageYOffset || document.documentElement.scrollTop;
                this.fakeElem.style.top = yPosition + 'px';
                this.fakeElem.setAttribute('readonly', '');
                this.fakeElem.value = this.text;
                this.container.appendChild(this.fakeElem);
                this.selectedText = (0, _select2.default)(this.fakeElem);
                this.copyText();
              }
              /**
               * Only removes the fake element after another click event, that way
               * a user can hit `Ctrl+C` to copy because selection still exists.
               */

            }, {
              key: 'removeFake',
              value: function removeFake() {
                if (this.fakeHandler) {
                  this.container.removeEventListener('click', this.fakeHandlerCallback);
                  this.fakeHandler = null;
                  this.fakeHandlerCallback = null;
                }

                if (this.fakeElem) {
                  this.container.removeChild(this.fakeElem);
                  this.fakeElem = null;
                }
              }
              /**
               * Selects the content from element passed on `target` property.
               */

            }, {
              key: 'selectTarget',
              value: function selectTarget() {
                this.selectedText = (0, _select2.default)(this.target);
                this.copyText();
              }
              /**
               * Executes the copy operation based on the current selection.
               */

            }, {
              key: 'copyText',
              value: function copyText() {
                var succeeded = void 0;

                try {
                  succeeded = document.execCommand(this.action);
                } catch (err) {
                  succeeded = false;
                }

                this.handleResult(succeeded);
              }
              /**
               * Fires an event based on the copy operation result.
               * @param {Boolean} succeeded
               */

            }, {
              key: 'handleResult',
              value: function handleResult(succeeded) {
                this.emitter.emit(succeeded ? 'success' : 'error', {
                  action: this.action,
                  text: this.selectedText,
                  trigger: this.trigger,
                  clearSelection: this.clearSelection.bind(this)
                });
              }
              /**
               * Moves focus away from `target` and back to the trigger, removes current selection.
               */

            }, {
              key: 'clearSelection',
              value: function clearSelection() {
                if (this.trigger) {
                  this.trigger.focus();
                }

                window.getSelection().removeAllRanges();
              }
              /**
               * Sets the `action` to be performed which can be either 'copy' or 'cut'.
               * @param {String} action
               */

            }, {
              key: 'destroy',

              /**
               * Destroy lifecycle.
               */
              value: function destroy() {
                this.removeFake();
              }
            }, {
              key: 'action',
              set: function set() {
                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';
                this._action = action;

                if (this._action !== 'copy' && this._action !== 'cut') {
                  throw new Error('Invalid "action" value, use either "copy" or "cut"');
                }
              }
              /**
               * Gets the `action` property.
               * @return {String}
               */
              ,
              get: function get() {
                return this._action;
              }
              /**
               * Sets the `target` property using an element
               * that will be have its content copied.
               * @param {Element} target
               */

            }, {
              key: 'target',
              set: function set(target) {
                if (target !== undefined) {
                  if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
                    if (this.action === 'copy' && target.hasAttribute('disabled')) {
                      throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                    }

                    if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
                      throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                    }

                    this._target = target;
                  } else {
                    throw new Error('Invalid "target" value, use a valid Element');
                  }
                }
              }
              /**
               * Gets the `target` property.
               * @return {String|HTMLElement}
               */
              ,
              get: function get() {
                return this._target;
              }
            }]);

            return ClipboardAction;
          }();

          module.exports = ClipboardAction;
          /***/
        },
        /* 2 */

        /***/
        function (module, exports) {
          function select(element) {
            var selectedText;

            if (element.nodeName === 'SELECT') {
              element.focus();
              selectedText = element.value;
            } else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
              var isReadOnly = element.hasAttribute('readonly');

              if (!isReadOnly) {
                element.setAttribute('readonly', '');
              }

              element.select();
              element.setSelectionRange(0, element.value.length);

              if (!isReadOnly) {
                element.removeAttribute('readonly');
              }

              selectedText = element.value;
            } else {
              if (element.hasAttribute('contenteditable')) {
                element.focus();
              }

              var selection = window.getSelection();
              var range = document.createRange();
              range.selectNodeContents(element);
              selection.removeAllRanges();
              selection.addRange(range);
              selectedText = selection.toString();
            }

            return selectedText;
          }

          module.exports = select;
          /***/
        },
        /* 3 */

        /***/
        function (module, exports) {
          function E() {// Keep this empty so it's easier to inherit from
            // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
          }

          E.prototype = {
            on: function on(name, callback, ctx) {
              var e = this.e || (this.e = {});
              (e[name] || (e[name] = [])).push({
                fn: callback,
                ctx: ctx
              });
              return this;
            },
            once: function once(name, callback, ctx) {
              var self = this;

              function listener() {
                self.off(name, listener);
                callback.apply(ctx, arguments);
              }

              ;
              listener._ = callback;
              return this.on(name, listener, ctx);
            },
            emit: function emit(name) {
              var data = [].slice.call(arguments, 1);
              var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
              var i = 0;
              var len = evtArr.length;

              for (i; i < len; i++) {
                evtArr[i].fn.apply(evtArr[i].ctx, data);
              }

              return this;
            },
            off: function off(name, callback) {
              var e = this.e || (this.e = {});
              var evts = e[name];
              var liveEvents = [];

              if (evts && callback) {
                for (var i = 0, len = evts.length; i < len; i++) {
                  if (evts[i].fn !== callback && evts[i].fn._ !== callback) liveEvents.push(evts[i]);
                }
              } // Remove event from queue to prevent memory leak
              // Suggested by https://github.com/lazd
              // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910


              liveEvents.length ? e[name] = liveEvents : delete e[name];
              return this;
            }
          };
          module.exports = E;
          /***/
        },
        /* 4 */

        /***/
        function (module, exports, __webpack_require__) {
          var is = __webpack_require__(5);

          var delegate = __webpack_require__(6);
          /**
           * Validates all params and calls the right
           * listener function based on its target type.
           *
           * @param {String|HTMLElement|HTMLCollection|NodeList} target
           * @param {String} type
           * @param {Function} callback
           * @return {Object}
           */


          function listen(target, type, callback) {
            if (!target && !type && !callback) {
              throw new Error('Missing required arguments');
            }

            if (!is.string(type)) {
              throw new TypeError('Second argument must be a String');
            }

            if (!is.fn(callback)) {
              throw new TypeError('Third argument must be a Function');
            }

            if (is.node(target)) {
              return listenNode(target, type, callback);
            } else if (is.nodeList(target)) {
              return listenNodeList(target, type, callback);
            } else if (is.string(target)) {
              return listenSelector(target, type, callback);
            } else {
              throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
            }
          }
          /**
           * Adds an event listener to a HTML element
           * and returns a remove listener function.
           *
           * @param {HTMLElement} node
           * @param {String} type
           * @param {Function} callback
           * @return {Object}
           */


          function listenNode(node, type, callback) {
            node.addEventListener(type, callback);
            return {
              destroy: function destroy() {
                node.removeEventListener(type, callback);
              }
            };
          }
          /**
           * Add an event listener to a list of HTML elements
           * and returns a remove listener function.
           *
           * @param {NodeList|HTMLCollection} nodeList
           * @param {String} type
           * @param {Function} callback
           * @return {Object}
           */


          function listenNodeList(nodeList, type, callback) {
            Array.prototype.forEach.call(nodeList, function (node) {
              node.addEventListener(type, callback);
            });
            return {
              destroy: function destroy() {
                Array.prototype.forEach.call(nodeList, function (node) {
                  node.removeEventListener(type, callback);
                });
              }
            };
          }
          /**
           * Add an event listener to a selector
           * and returns a remove listener function.
           *
           * @param {String} selector
           * @param {String} type
           * @param {Function} callback
           * @return {Object}
           */


          function listenSelector(selector, type, callback) {
            return delegate(document.body, selector, type, callback);
          }

          module.exports = listen;
          /***/
        },
        /* 5 */

        /***/
        function (module, exports) {
          /**
           * Check if argument is a HTML element.
           *
           * @param {Object} value
           * @return {Boolean}
           */
          exports.node = function (value) {
            return value !== undefined && value instanceof HTMLElement && value.nodeType === 1;
          };
          /**
           * Check if argument is a list of HTML elements.
           *
           * @param {Object} value
           * @return {Boolean}
           */


          exports.nodeList = function (value) {
            var type = Object.prototype.toString.call(value);
            return value !== undefined && (type === '[object NodeList]' || type === '[object HTMLCollection]') && 'length' in value && (value.length === 0 || exports.node(value[0]));
          };
          /**
           * Check if argument is a string.
           *
           * @param {Object} value
           * @return {Boolean}
           */


          exports.string = function (value) {
            return typeof value === 'string' || value instanceof String;
          };
          /**
           * Check if argument is a function.
           *
           * @param {Object} value
           * @return {Boolean}
           */


          exports.fn = function (value) {
            var type = Object.prototype.toString.call(value);
            return type === '[object Function]';
          };
          /***/

        },
        /* 6 */

        /***/
        function (module, exports, __webpack_require__) {
          var closest = __webpack_require__(7);
          /**
           * Delegates event to a selector.
           *
           * @param {Element} element
           * @param {String} selector
           * @param {String} type
           * @param {Function} callback
           * @param {Boolean} useCapture
           * @return {Object}
           */


          function _delegate(element, selector, type, callback, useCapture) {
            var listenerFn = listener.apply(this, arguments);
            element.addEventListener(type, listenerFn, useCapture);
            return {
              destroy: function destroy() {
                element.removeEventListener(type, listenerFn, useCapture);
              }
            };
          }
          /**
           * Delegates event to a selector.
           *
           * @param {Element|String|Array} [elements]
           * @param {String} selector
           * @param {String} type
           * @param {Function} callback
           * @param {Boolean} useCapture
           * @return {Object}
           */


          function delegate(elements, selector, type, callback, useCapture) {
            // Handle the regular Element usage
            if (typeof elements.addEventListener === 'function') {
              return _delegate.apply(null, arguments);
            } // Handle Element-less usage, it defaults to global delegation


            if (typeof type === 'function') {
              // Use `document` as the first parameter, then apply arguments
              // This is a short way to .unshift `arguments` without running into deoptimizations
              return _delegate.bind(null, document).apply(null, arguments);
            } // Handle Selector-based usage


            if (typeof elements === 'string') {
              elements = document.querySelectorAll(elements);
            } // Handle Array-like based usage


            return Array.prototype.map.call(elements, function (element) {
              return _delegate(element, selector, type, callback, useCapture);
            });
          }
          /**
           * Finds closest match and invokes callback.
           *
           * @param {Element} element
           * @param {String} selector
           * @param {String} type
           * @param {Function} callback
           * @return {Function}
           */


          function listener(element, selector, type, callback) {
            return function (e) {
              e.delegateTarget = closest(e.target, selector);

              if (e.delegateTarget) {
                callback.call(element, e);
              }
            };
          }

          module.exports = delegate;
          /***/
        },
        /* 7 */

        /***/
        function (module, exports) {
          var DOCUMENT_NODE_TYPE = 9;
          /**
           * A polyfill for Element.matches()
           */

          if (typeof Element !== 'undefined' && !Element.prototype.matches) {
            var proto = Element.prototype;
            proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
          }
          /**
           * Finds the closest parent that matches a selector.
           *
           * @param {Element} element
           * @param {String} selector
           * @return {Function}
           */


          function closest(element, selector) {
            while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
              if (typeof element.matches === 'function' && element.matches(selector)) {
                return element;
              }

              element = element.parentNode;
            }
          }

          module.exports = closest;
          /***/
        }
        /******/
        ])
      );
    });
    /***/

  },

  /***/
  "./node_modules/prismjs/components/prism-markup.js":
  /*!*********************************************************!*\
    !*** ./node_modules/prismjs/components/prism-markup.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrismjsComponentsPrismMarkupJs(module, exports) {
    Prism.languages.markup = {
      'comment': /<!--[\s\S]*?-->/,
      'prolog': /<\?[\s\S]+?\?>/,
      'doctype': {
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,
        greedy: true
      },
      'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
      'tag': {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
        greedy: true,
        inside: {
          'tag': {
            pattern: /^<\/?[^\s>\/]+/i,
            inside: {
              'punctuation': /^<\/?/,
              'namespace': /^[^\s>\/:]+:/
            }
          },
          'attr-value': {
            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
            inside: {
              'punctuation': [/^=/, {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: true
              }]
            }
          },
          'punctuation': /\/?>/,
          'attr-name': {
            pattern: /[^\s>\/]+/,
            inside: {
              'namespace': /^[^\s>\/:]+:/
            }
          }
        }
      },
      'entity': /&#?[\da-z]{1,8};/i
    };
    Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] = Prism.languages.markup['entity']; // Plugin to make entity title show the real entity, idea by Roman Komarov

    Prism.hooks.add('wrap', function (env) {
      if (env.type === 'entity') {
        env.attributes['title'] = env.content.replace(/&amp;/, '&');
      }
    });
    Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
      /**
       * Adds an inlined language to markup.
       *
       * An example of an inlined language is CSS with `<style>` tags.
       *
       * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
       * case insensitive.
       * @param {string} lang The language key.
       * @example
       * addInlined('style', 'css');
       */
      value: function addInlined(tagName, lang) {
        var includedCdataInside = {};
        includedCdataInside['language-' + lang] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: true,
          inside: Prism.languages[lang]
        };
        includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;
        var inside = {
          'included-cdata': {
            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
            inside: includedCdataInside
          }
        };
        inside['language-' + lang] = {
          pattern: /[\s\S]+/,
          inside: Prism.languages[lang]
        };
        var def = {};
        def[tagName] = {
          pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, tagName), 'i'),
          lookbehind: true,
          greedy: true,
          inside: inside
        };
        Prism.languages.insertBefore('markup', 'cdata', def);
      }
    });
    Prism.languages.xml = Prism.languages.extend('markup', {});
    Prism.languages.html = Prism.languages.markup;
    Prism.languages.mathml = Prism.languages.markup;
    Prism.languages.svg = Prism.languages.markup;
    /***/
  },

  /***/
  "./node_modules/prismjs/components/prism-scss.js":
  /*!*******************************************************!*\
    !*** ./node_modules/prismjs/components/prism-scss.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrismjsComponentsPrismScssJs(module, exports) {
    Prism.languages.scss = Prism.languages.extend('css', {
      'comment': {
        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
        lookbehind: true
      },
      'atrule': {
        pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
        inside: {
          'rule': /@[\w-]+/ // See rest below

        }
      },
      // url, compassified
      'url': /(?:[-a-z]+-)?url(?=\()/i,
      // CSS selector regex is not appropriate for Sass
      // since there can be lot more things (var, @ directive, nesting..)
      // a selector must start at the end of a property or after a brace (end of other rules or nesting)
      // it can contain some characters that aren't used for defining rules or end of selector, & (parent selector), or interpolated variable
      // the end of a selector is found when there is no rules in it ( {} or {\s}) or if there is a property (because an interpolated var
      // can "pass" as a selector- e.g: proper#{$erty})
      // this one was hard to do, so please be careful if you edit this one :)
      'selector': {
        // Initial look-ahead is used to prevent matching of blank selectors
        pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
        inside: {
          'parent': {
            pattern: /&/,
            alias: 'important'
          },
          'placeholder': /%[-\w]+/,
          'variable': /\$[-\w]+|#\{\$[-\w]+\}/
        }
      },
      'property': {
        pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/,
        inside: {
          'variable': /\$[-\w]+|#\{\$[-\w]+\}/
        }
      }
    });
    Prism.languages.insertBefore('scss', 'atrule', {
      'keyword': [/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, {
        pattern: /( +)(?:from|through)(?= )/,
        lookbehind: true
      }]
    });
    Prism.languages.insertBefore('scss', 'important', {
      // var and interpolated vars
      'variable': /\$[-\w]+|#\{\$[-\w]+\}/
    });
    Prism.languages.insertBefore('scss', 'function', {
      'placeholder': {
        pattern: /%[-\w]+/,
        alias: 'selector'
      },
      'statement': {
        pattern: /\B!(?:default|optional)\b/i,
        alias: 'keyword'
      },
      'boolean': /\b(?:true|false)\b/,
      'null': {
        pattern: /\bnull\b/,
        alias: 'keyword'
      },
      'operator': {
        pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
        lookbehind: true
      }
    });
    Prism.languages.scss['atrule'].inside.rest = Prism.languages.scss;
    /***/
  },

  /***/
  "./node_modules/prismjs/components/prism-typescript.js":
  /*!*************************************************************!*\
    !*** ./node_modules/prismjs/components/prism-typescript.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrismjsComponentsPrismTypescriptJs(module, exports) {
    Prism.languages.typescript = Prism.languages.extend('javascript', {
      // From JavaScript Prism keyword list and TypeScript language spec: https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#221-reserved-words
      'keyword': /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|undefined|var|void|while|with|yield)\b/,
      'builtin': /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/
    });
    Prism.languages.ts = Prism.languages.typescript;
    /***/
  },

  /***/
  "./node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js":
  /*!***********************************************************************************!*\
    !*** ./node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js ***!
    \***********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrismjsPluginsCopyToClipboardPrismCopyToClipboardJs(module, exports, __webpack_require__) {
    (function () {
      if (typeof self === 'undefined' || !self.Prism || !self.document) {
        return;
      }

      if (!Prism.plugins.toolbar) {
        console.warn('Copy to Clipboard plugin loaded before Toolbar plugin.');
        return;
      }

      var ClipboardJS = window.ClipboardJS || undefined;

      if (!ClipboardJS && "function" === 'function') {
        ClipboardJS = __webpack_require__(
        /*! clipboard */
        "./node_modules/clipboard/dist/clipboard.js");
      }

      var callbacks = [];

      if (!ClipboardJS) {
        var script = document.createElement('script');
        var head = document.querySelector('head');

        script.onload = function () {
          ClipboardJS = window.ClipboardJS;

          if (ClipboardJS) {
            while (callbacks.length) {
              callbacks.pop()();
            }
          }
        };

        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js';
        head.appendChild(script);
      }

      Prism.plugins.toolbar.registerButton('copy-to-clipboard', function (env) {
        var linkCopy = document.createElement('button');
        linkCopy.textContent = 'Copy';

        if (!ClipboardJS) {
          callbacks.push(registerClipboard);
        } else {
          registerClipboard();
        }

        return linkCopy;

        function registerClipboard() {
          var clip = new ClipboardJS(linkCopy, {
            'text': function text() {
              return env.code;
            }
          });
          clip.on('success', function () {
            linkCopy.textContent = 'Copied!';
            resetText();
          });
          clip.on('error', function () {
            linkCopy.textContent = 'Press Ctrl+C to copy';
            resetText();
          });
        }

        function resetText() {
          setTimeout(function () {
            linkCopy.textContent = 'Copy';
          }, 5000);
        }
      });
    })();
    /***/

  },

  /***/
  "./node_modules/prismjs/plugins/toolbar/prism-toolbar.js":
  /*!***************************************************************!*\
    !*** ./node_modules/prismjs/plugins/toolbar/prism-toolbar.js ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrismjsPluginsToolbarPrismToolbarJs(module, exports) {
    (function () {
      if (typeof self === 'undefined' || !self.Prism || !self.document) {
        return;
      }

      var callbacks = [];
      var map = {};

      var noop = function noop() {};

      Prism.plugins.toolbar = {};
      /**
       * @typedef ButtonOptions
       * @property {string} text The text displayed.
       * @property {string} [url] The URL of the link which will be created.
       * @property {Function} [onClick] The event listener for the `click` event of the created button.
       * @property {string} [className] The class attribute to include with element.
       */

      /**
       * Register a button callback with the toolbar.
       *
       * @param {string} key
       * @param {ButtonOptions|Function} opts
       */

      var registerButton = Prism.plugins.toolbar.registerButton = function (key, opts) {
        var callback;

        if (typeof opts === 'function') {
          callback = opts;
        } else {
          callback = function callback(env) {
            var element;

            if (typeof opts.onClick === 'function') {
              element = document.createElement('button');
              element.type = 'button';
              element.addEventListener('click', function () {
                opts.onClick.call(this, env);
              });
            } else if (typeof opts.url === 'string') {
              element = document.createElement('a');
              element.href = opts.url;
            } else {
              element = document.createElement('span');
            }

            if (opts.className) {
              element.classList.add(opts.className);
            }

            element.textContent = opts.text;
            return element;
          };
        }

        if (key in map) {
          console.warn('There is a button with the key "' + key + '" registered already.');
          return;
        }

        callbacks.push(map[key] = callback);
      };
      /**
       * Post-highlight Prism hook callback.
       *
       * @param env
       */


      var hook = Prism.plugins.toolbar.hook = function (env) {
        // Check if inline or actual code block (credit to line-numbers plugin)
        var pre = env.element.parentNode;

        if (!pre || !/pre/i.test(pre.nodeName)) {
          return;
        } // Autoloader rehighlights, so only do this once.


        if (pre.parentNode.classList.contains('code-toolbar')) {
          return;
        } // Create wrapper for <pre> to prevent scrolling toolbar with content


        var wrapper = document.createElement("div");
        wrapper.classList.add("code-toolbar");
        pre.parentNode.insertBefore(wrapper, pre);
        wrapper.appendChild(pre); // Setup the toolbar

        var toolbar = document.createElement('div');
        toolbar.classList.add('toolbar');

        if (document.body.hasAttribute('data-toolbar-order')) {
          callbacks = document.body.getAttribute('data-toolbar-order').split(',').map(function (key) {
            return map[key] || noop;
          });
        }

        callbacks.forEach(function (callback) {
          var element = callback(env);

          if (!element) {
            return;
          }

          var item = document.createElement('div');
          item.classList.add('toolbar-item');
          item.appendChild(element);
          toolbar.appendChild(item);
        }); // Add our toolbar to the currently created wrapper of <pre> tag

        wrapper.appendChild(toolbar);
      };

      registerButton('label', function (env) {
        var pre = env.element.parentNode;

        if (!pre || !/pre/i.test(pre.nodeName)) {
          return;
        }

        if (!pre.hasAttribute('data-label')) {
          return;
        }

        var element, template;
        var text = pre.getAttribute('data-label');

        try {
          // Any normal text will blow up this selector.
          template = document.querySelector('template#' + text);
        } catch (e) {}

        if (template) {
          element = template.content;
        } else {
          if (pre.hasAttribute('data-url')) {
            element = document.createElement('a');
            element.href = pre.getAttribute('data-url');
          } else {
            element = document.createElement('span');
          }

          element.textContent = text;
        }

        return element;
      });
      /**
       * Register the toolbar with Prism.
       */

      Prism.hooks.add('complete', hook);
    })();
    /***/

  },

  /***/
  "./node_modules/prismjs/prism.js":
  /*!***************************************!*\
    !*** ./node_modules/prismjs/prism.js ***!
    \***************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrismjsPrismJs(module, exports, __webpack_require__) {
    /* **********************************************
         Begin prism-core.js
    ********************************************** */
    var _self = typeof window !== 'undefined' ? window // if in browser
    : typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope ? self // if in worker
    : {} // if in node js
    ;
    /**
     * Prism: Lightweight, robust, elegant syntax highlighting
     * MIT license http://www.opensource.org/licenses/mit-license.php/
     * @author Lea Verou http://lea.verou.me
     */


    var Prism = function (_self) {
      // Private helper vars
      var lang = /\blang(?:uage)?-([\w-]+)\b/i;
      var uniqueId = 0;
      var _ = {
        manual: _self.Prism && _self.Prism.manual,
        disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
        util: {
          encode: function encode(tokens) {
            if (tokens instanceof Token) {
              return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
            } else if (Array.isArray(tokens)) {
              return tokens.map(_.util.encode);
            } else {
              return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
            }
          },
          type: function type(o) {
            return Object.prototype.toString.call(o).slice(8, -1);
          },
          objId: function objId(obj) {
            if (!obj['__id']) {
              Object.defineProperty(obj, '__id', {
                value: ++uniqueId
              });
            }

            return obj['__id'];
          },
          // Deep clone a language definition (e.g. to extend it)
          clone: function deepClone(o, visited) {
            var clone,
                id,
                type = _.util.type(o);

            visited = visited || {};

            switch (type) {
              case 'Object':
                id = _.util.objId(o);

                if (visited[id]) {
                  return visited[id];
                }

                clone = {};
                visited[id] = clone;

                for (var key in o) {
                  if (o.hasOwnProperty(key)) {
                    clone[key] = deepClone(o[key], visited);
                  }
                }

                return clone;

              case 'Array':
                id = _.util.objId(o);

                if (visited[id]) {
                  return visited[id];
                }

                clone = [];
                visited[id] = clone;
                o.forEach(function (v, i) {
                  clone[i] = deepClone(v, visited);
                });
                return clone;

              default:
                return o;
            }
          },

          /**
           * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
           *
           * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
           *
           * @param {Element} element
           * @returns {string}
           */
          getLanguage: function getLanguage(element) {
            while (element && !lang.test(element.className)) {
              element = element.parentElement;
            }

            if (element) {
              return (element.className.match(lang) || [, 'none'])[1].toLowerCase();
            }

            return 'none';
          },

          /**
           * Returns the script element that is currently executing.
           *
           * This does __not__ work for line script element.
           *
           * @returns {HTMLScriptElement | null}
           */
          currentScript: function currentScript() {
            if (typeof document === 'undefined') {
              return null;
            }

            if ('currentScript' in document) {
              return document.currentScript;
            } // IE11 workaround
            // we'll get the src of the current script by parsing IE11's error stack trace
            // this will not work for inline scripts


            try {
              throw new Error();
            } catch (err) {
              // Get file src url from stack. Specifically works with the format of stack traces in IE.
              // A stack will look like this:
              //
              // Error
              //    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
              //    at Global code (http://localhost/components/prism-core.js:606:1)
              var src = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(err.stack) || [])[1];

              if (src) {
                var scripts = document.getElementsByTagName('script');

                for (var i in scripts) {
                  if (scripts[i].src == src) {
                    return scripts[i];
                  }
                }
              }

              return null;
            }
          }
        },
        languages: {
          extend: function extend(id, redef) {
            var lang = _.util.clone(_.languages[id]);

            for (var key in redef) {
              lang[key] = redef[key];
            }

            return lang;
          },

          /**
           * Insert a token before another token in a language literal
           * As this needs to recreate the object (we cannot actually insert before keys in object literals),
           * we cannot just provide an object, we need an object and a key.
           * @param inside The key (or language id) of the parent
           * @param before The key to insert before.
           * @param insert Object with the key/value pairs to insert
           * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
           */
          insertBefore: function insertBefore(inside, before, insert, root) {
            root = root || _.languages;
            var grammar = root[inside];
            var ret = {};

            for (var token in grammar) {
              if (grammar.hasOwnProperty(token)) {
                if (token == before) {
                  for (var newToken in insert) {
                    if (insert.hasOwnProperty(newToken)) {
                      ret[newToken] = insert[newToken];
                    }
                  }
                } // Do not insert token which also occur in insert. See #1525


                if (!insert.hasOwnProperty(token)) {
                  ret[token] = grammar[token];
                }
              }
            }

            var old = root[inside];
            root[inside] = ret; // Update references in other language definitions

            _.languages.DFS(_.languages, function (key, value) {
              if (value === old && key != inside) {
                this[key] = ret;
              }
            });

            return ret;
          },
          // Traverse a language definition with Depth First Search
          DFS: function DFS(o, callback, type, visited) {
            visited = visited || {};
            var objId = _.util.objId;

            for (var i in o) {
              if (o.hasOwnProperty(i)) {
                callback.call(o, i, o[i], type || i);

                var property = o[i],
                    propertyType = _.util.type(property);

                if (propertyType === 'Object' && !visited[objId(property)]) {
                  visited[objId(property)] = true;
                  DFS(property, callback, null, visited);
                } else if (propertyType === 'Array' && !visited[objId(property)]) {
                  visited[objId(property)] = true;
                  DFS(property, callback, i, visited);
                }
              }
            }
          }
        },
        plugins: {},
        highlightAll: function highlightAll(async, callback) {
          _.highlightAllUnder(document, async, callback);
        },
        highlightAllUnder: function highlightAllUnder(container, async, callback) {
          var env = {
            callback: callback,
            container: container,
            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
          };

          _.hooks.run('before-highlightall', env);

          env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));

          _.hooks.run('before-all-elements-highlight', env);

          for (var i = 0, element; element = env.elements[i++];) {
            _.highlightElement(element, async === true, env.callback);
          }
        },
        highlightElement: function highlightElement(element, async, callback) {
          // Find language
          var language = _.util.getLanguage(element);

          var grammar = _.languages[language]; // Set language on the element, if not present

          element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language; // Set language on the parent, for styling

          var parent = element.parentNode;

          if (parent && parent.nodeName.toLowerCase() === 'pre') {
            parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
          }

          var code = element.textContent;
          var env = {
            element: element,
            language: language,
            grammar: grammar,
            code: code
          };

          function insertHighlightedCode(highlightedCode) {
            env.highlightedCode = highlightedCode;

            _.hooks.run('before-insert', env);

            env.element.innerHTML = env.highlightedCode;

            _.hooks.run('after-highlight', env);

            _.hooks.run('complete', env);

            callback && callback.call(env.element);
          }

          _.hooks.run('before-sanity-check', env);

          if (!env.code) {
            _.hooks.run('complete', env);

            callback && callback.call(env.element);
            return;
          }

          _.hooks.run('before-highlight', env);

          if (!env.grammar) {
            insertHighlightedCode(_.util.encode(env.code));
            return;
          }

          if (async && _self.Worker) {
            var worker = new Worker(_.filename);

            worker.onmessage = function (evt) {
              insertHighlightedCode(evt.data);
            };

            worker.postMessage(JSON.stringify({
              language: env.language,
              code: env.code,
              immediateClose: true
            }));
          } else {
            insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
          }
        },
        highlight: function highlight(text, grammar, language) {
          var env = {
            code: text,
            grammar: grammar,
            language: language
          };

          _.hooks.run('before-tokenize', env);

          env.tokens = _.tokenize(env.code, env.grammar);

          _.hooks.run('after-tokenize', env);

          return Token.stringify(_.util.encode(env.tokens), env.language);
        },
        matchGrammar: function matchGrammar(text, strarr, grammar, index, startPos, oneshot, target) {
          for (var token in grammar) {
            if (!grammar.hasOwnProperty(token) || !grammar[token]) {
              continue;
            }

            var patterns = grammar[token];
            patterns = Array.isArray(patterns) ? patterns : [patterns];

            for (var j = 0; j < patterns.length; ++j) {
              if (target && target == token + ',' + j) {
                return;
              }

              var pattern = patterns[j],
                  inside = pattern.inside,
                  lookbehind = !!pattern.lookbehind,
                  greedy = !!pattern.greedy,
                  lookbehindLength = 0,
                  alias = pattern.alias;

              if (greedy && !pattern.pattern.global) {
                // Without the global flag, lastIndex won't work
                var flags = pattern.pattern.toString().match(/[imsuy]*$/)[0];
                pattern.pattern = RegExp(pattern.pattern.source, flags + 'g');
              }

              pattern = pattern.pattern || pattern; // Don’t cache length as it changes during the loop

              for (var i = index, pos = startPos; i < strarr.length; pos += strarr[i].length, ++i) {
                var str = strarr[i];

                if (strarr.length > text.length) {
                  // Something went terribly wrong, ABORT, ABORT!
                  return;
                }

                if (str instanceof Token) {
                  continue;
                }

                if (greedy && i != strarr.length - 1) {
                  pattern.lastIndex = pos;
                  var match = pattern.exec(text);

                  if (!match) {
                    break;
                  }

                  var from = match.index + (lookbehind && match[1] ? match[1].length : 0),
                      to = match.index + match[0].length,
                      k = i,
                      p = pos;

                  for (var len = strarr.length; k < len && (p < to || !strarr[k].type && !strarr[k - 1].greedy); ++k) {
                    p += strarr[k].length; // Move the index i to the element in strarr that is closest to from

                    if (from >= p) {
                      ++i;
                      pos = p;
                    }
                  } // If strarr[i] is a Token, then the match starts inside another Token, which is invalid


                  if (strarr[i] instanceof Token) {
                    continue;
                  } // Number of tokens to delete and replace with the new match


                  delNum = k - i;
                  str = text.slice(pos, p);
                  match.index -= pos;
                } else {
                  pattern.lastIndex = 0;
                  var match = pattern.exec(str),
                      delNum = 1;
                }

                if (!match) {
                  if (oneshot) {
                    break;
                  }

                  continue;
                }

                if (lookbehind) {
                  lookbehindLength = match[1] ? match[1].length : 0;
                }

                var from = match.index + lookbehindLength,
                    match = match[0].slice(lookbehindLength),
                    to = from + match.length,
                    before = str.slice(0, from),
                    after = str.slice(to);
                var args = [i, delNum];

                if (before) {
                  ++i;
                  pos += before.length;
                  args.push(before);
                }

                var wrapped = new Token(token, inside ? _.tokenize(match, inside) : match, alias, match, greedy);
                args.push(wrapped);

                if (after) {
                  args.push(after);
                }

                Array.prototype.splice.apply(strarr, args);
                if (delNum != 1) _.matchGrammar(text, strarr, grammar, i, pos, true, token + ',' + j);
                if (oneshot) break;
              }
            }
          }
        },
        tokenize: function tokenize(text, grammar) {
          var strarr = [text];
          var rest = grammar.rest;

          if (rest) {
            for (var token in rest) {
              grammar[token] = rest[token];
            }

            delete grammar.rest;
          }

          _.matchGrammar(text, strarr, grammar, 0, 0, false);

          return strarr;
        },
        hooks: {
          all: {},
          add: function add(name, callback) {
            var hooks = _.hooks.all;
            hooks[name] = hooks[name] || [];
            hooks[name].push(callback);
          },
          run: function run(name, env) {
            var callbacks = _.hooks.all[name];

            if (!callbacks || !callbacks.length) {
              return;
            }

            for (var i = 0, callback; callback = callbacks[i++];) {
              callback(env);
            }
          }
        },
        Token: Token
      };
      _self.Prism = _;

      function Token(type, content, alias, matchedStr, greedy) {
        this.type = type;
        this.content = content;
        this.alias = alias; // Copy of the full string this token was created from

        this.length = (matchedStr || '').length | 0;
        this.greedy = !!greedy;
      }

      Token.stringify = function (o, language) {
        if (typeof o == 'string') {
          return o;
        }

        if (Array.isArray(o)) {
          return o.map(function (element) {
            return Token.stringify(element, language);
          }).join('');
        }

        var env = {
          type: o.type,
          content: Token.stringify(o.content, language),
          tag: 'span',
          classes: ['token', o.type],
          attributes: {},
          language: language
        };

        if (o.alias) {
          var aliases = Array.isArray(o.alias) ? o.alias : [o.alias];
          Array.prototype.push.apply(env.classes, aliases);
        }

        _.hooks.run('wrap', env);

        var attributes = Object.keys(env.attributes).map(function (name) {
          return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
        }).join(' ');
        return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>';
      };

      if (!_self.document) {
        if (!_self.addEventListener) {
          // in Node.js
          return _;
        }

        if (!_.disableWorkerMessageHandler) {
          // In worker
          _self.addEventListener('message', function (evt) {
            var message = JSON.parse(evt.data),
                lang = message.language,
                code = message.code,
                immediateClose = message.immediateClose;

            _self.postMessage(_.highlight(code, _.languages[lang], lang));

            if (immediateClose) {
              _self.close();
            }
          }, false);
        }

        return _;
      } //Get current script and highlight


      var script = _.util.currentScript();

      if (script) {
        _.filename = script.src;

        if (script.hasAttribute('data-manual')) {
          _.manual = true;
        }
      }

      if (!_.manual) {
        var highlightAutomaticallyCallback = function highlightAutomaticallyCallback() {
          if (!_.manual) {
            _.highlightAll();
          }
        }; // If the document state is "loading", then we'll use DOMContentLoaded.
        // If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
        // DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
        // might take longer one animation frame to execute which can create a race condition where only some plugins have
        // been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
        // See https://github.com/PrismJS/prism/issues/2102


        var readyState = document.readyState;

        if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
          document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
        } else {
          if (window.requestAnimationFrame) {
            window.requestAnimationFrame(highlightAutomaticallyCallback);
          } else {
            window.setTimeout(highlightAutomaticallyCallback, 16);
          }
        }
      }

      return _;
    }(_self);

    if (true && module.exports) {
      module.exports = Prism;
    } // hack for components to work correctly in node.js


    if (typeof global !== 'undefined') {
      global.Prism = Prism;
    }
    /* **********************************************
         Begin prism-markup.js
    ********************************************** */


    Prism.languages.markup = {
      'comment': /<!--[\s\S]*?-->/,
      'prolog': /<\?[\s\S]+?\?>/,
      'doctype': {
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,
        greedy: true
      },
      'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
      'tag': {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
        greedy: true,
        inside: {
          'tag': {
            pattern: /^<\/?[^\s>\/]+/i,
            inside: {
              'punctuation': /^<\/?/,
              'namespace': /^[^\s>\/:]+:/
            }
          },
          'attr-value': {
            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
            inside: {
              'punctuation': [/^=/, {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: true
              }]
            }
          },
          'punctuation': /\/?>/,
          'attr-name': {
            pattern: /[^\s>\/]+/,
            inside: {
              'namespace': /^[^\s>\/:]+:/
            }
          }
        }
      },
      'entity': /&#?[\da-z]{1,8};/i
    };
    Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] = Prism.languages.markup['entity']; // Plugin to make entity title show the real entity, idea by Roman Komarov

    Prism.hooks.add('wrap', function (env) {
      if (env.type === 'entity') {
        env.attributes['title'] = env.content.replace(/&amp;/, '&');
      }
    });
    Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
      /**
       * Adds an inlined language to markup.
       *
       * An example of an inlined language is CSS with `<style>` tags.
       *
       * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
       * case insensitive.
       * @param {string} lang The language key.
       * @example
       * addInlined('style', 'css');
       */
      value: function addInlined(tagName, lang) {
        var includedCdataInside = {};
        includedCdataInside['language-' + lang] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: true,
          inside: Prism.languages[lang]
        };
        includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;
        var inside = {
          'included-cdata': {
            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
            inside: includedCdataInside
          }
        };
        inside['language-' + lang] = {
          pattern: /[\s\S]+/,
          inside: Prism.languages[lang]
        };
        var def = {};
        def[tagName] = {
          pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, tagName), 'i'),
          lookbehind: true,
          greedy: true,
          inside: inside
        };
        Prism.languages.insertBefore('markup', 'cdata', def);
      }
    });
    Prism.languages.xml = Prism.languages.extend('markup', {});
    Prism.languages.html = Prism.languages.markup;
    Prism.languages.mathml = Prism.languages.markup;
    Prism.languages.svg = Prism.languages.markup;
    /* **********************************************
         Begin prism-css.js
    ********************************************** */

    (function (Prism) {
      var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
      Prism.languages.css = {
        'comment': /\/\*[\s\S]*?\*\//,
        'atrule': {
          pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
          inside: {
            'rule': /@[\w-]+/ // See rest below

          }
        },
        'url': {
          pattern: RegExp('url\\((?:' + string.source + '|[^\n\r()]*)\\)', 'i'),
          inside: {
            'function': /^url/i,
            'punctuation': /^\(|\)$/
          }
        },
        'selector': RegExp('[^{}\\s](?:[^{};"\']|' + string.source + ')*?(?=\\s*\\{)'),
        'string': {
          pattern: string,
          greedy: true
        },
        'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
        'important': /!important\b/i,
        'function': /[-a-z0-9]+(?=\()/i,
        'punctuation': /[(){};:,]/
      };
      Prism.languages.css['atrule'].inside.rest = Prism.languages.css;
      var markup = Prism.languages.markup;

      if (markup) {
        markup.tag.addInlined('style', 'css');
        Prism.languages.insertBefore('inside', 'attr-value', {
          'style-attr': {
            pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
            inside: {
              'attr-name': {
                pattern: /^\s*style/i,
                inside: markup.tag.inside
              },
              'punctuation': /^\s*=\s*['"]|['"]\s*$/,
              'attr-value': {
                pattern: /.+/i,
                inside: Prism.languages.css
              }
            },
            alias: 'language-css'
          }
        }, markup.tag);
      }
    })(Prism);
    /* **********************************************
         Begin prism-clike.js
    ********************************************** */


    Prism.languages.clike = {
      'comment': [{
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: true
      }, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: true,
        greedy: true
      }],
      'string': {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: true
      },
      'class-name': {
        pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: true,
        inside: {
          'punctuation': /[.\\]/
        }
      },
      'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
      'boolean': /\b(?:true|false)\b/,
      'function': /\w+(?=\()/,
      'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
      'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
      'punctuation': /[{}[\];(),.:]/
    };
    /* **********************************************
         Begin prism-javascript.js
    ********************************************** */

    Prism.languages.javascript = Prism.languages.extend('clike', {
      'class-name': [Prism.languages.clike['class-name'], {
        pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
        lookbehind: true
      }],
      'keyword': [{
        pattern: /((?:^|})\s*)(?:catch|finally)\b/,
        lookbehind: true
      }, {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: true
      }],
      'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
      // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
      'function': /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
      'operator': /--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/
    });
    Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
    Prism.languages.insertBefore('javascript', 'keyword', {
      'regex': {
        pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
        lookbehind: true,
        greedy: true
      },
      // This must be declared before keyword because we use "function" inside the look-forward
      'function-variable': {
        pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
        alias: 'function'
      },
      'parameter': [{
        pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
        lookbehind: true,
        inside: Prism.languages.javascript
      }, {
        pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
        inside: Prism.languages.javascript
      }, {
        pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
        lookbehind: true,
        inside: Prism.languages.javascript
      }, {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
        lookbehind: true,
        inside: Prism.languages.javascript
      }],
      'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    });
    Prism.languages.insertBefore('javascript', 'string', {
      'template-string': {
        pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
        greedy: true,
        inside: {
          'template-punctuation': {
            pattern: /^`|`$/,
            alias: 'string'
          },
          'interpolation': {
            pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
            lookbehind: true,
            inside: {
              'interpolation-punctuation': {
                pattern: /^\${|}$/,
                alias: 'punctuation'
              },
              rest: Prism.languages.javascript
            }
          },
          'string': /[\s\S]+/
        }
      }
    });

    if (Prism.languages.markup) {
      Prism.languages.markup.tag.addInlined('script', 'javascript');
    }

    Prism.languages.js = Prism.languages.javascript;
    /* **********************************************
         Begin prism-file-highlight.js
    ********************************************** */

    (function () {
      if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
        return;
      }
      /**
       * @param {Element} [container=document]
       */


      self.Prism.fileHighlight = function (container) {
        container = container || document;
        var Extensions = {
          'js': 'javascript',
          'py': 'python',
          'rb': 'ruby',
          'ps1': 'powershell',
          'psm1': 'powershell',
          'sh': 'bash',
          'bat': 'batch',
          'h': 'c',
          'tex': 'latex'
        };
        Array.prototype.slice.call(container.querySelectorAll('pre[data-src]')).forEach(function (pre) {
          // ignore if already loaded
          if (pre.hasAttribute('data-src-loaded')) {
            return;
          } // load current


          var src = pre.getAttribute('data-src');
          var language,
              parent = pre;
          var lang = /\blang(?:uage)?-([\w-]+)\b/i;

          while (parent && !lang.test(parent.className)) {
            parent = parent.parentNode;
          }

          if (parent) {
            language = (pre.className.match(lang) || [, ''])[1];
          }

          if (!language) {
            var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
            language = Extensions[extension] || extension;
          }

          var code = document.createElement('code');
          code.className = 'language-' + language;
          pre.textContent = '';
          code.textContent = 'Loading…';
          pre.appendChild(code);
          var xhr = new XMLHttpRequest();
          xhr.open('GET', src, true);

          xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
              if (xhr.status < 400 && xhr.responseText) {
                code.textContent = xhr.responseText;
                Prism.highlightElement(code); // mark as loaded

                pre.setAttribute('data-src-loaded', '');
              } else if (xhr.status >= 400) {
                code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
              } else {
                code.textContent = '✖ Error: File does not exist or is empty';
              }
            }
          };

          xhr.send(null);
        });
      };

      document.addEventListener('DOMContentLoaded', function () {
        // execute inside handler, for dropping Event as argument
        self.Prism.fileHighlight();
      });
    })();
    /***/

  },

  /***/
  "./src/app/core/get-sorted-links.ts":
  /*!******************************************!*\
    !*** ./src/app/core/get-sorted-links.ts ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreGetSortedLinksTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = function (links, blog) {
      return links.filter(function (link) {
        return link.route.startsWith("/".concat(blog));
      }).sort(function (a, b) {
        if (a.order < b.order) {
          return -1;
        }

        if (a.order > b.order) {
          return 1;
        }

        return 0;
      });
    };
    /***/

  },

  /***/
  "./src/app/core/services/highlight.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/core/services/highlight.service.ts ***!
    \****************************************************/

  /*! exports provided: HighlightService */

  /***/
  function srcAppCoreServicesHighlightServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HighlightService", function () {
      return HighlightService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! clipboard */
    "./node_modules/clipboard/dist/clipboard.js");
    /* harmony import */


    var clipboard__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var prismjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! prismjs */
    "./node_modules/prismjs/prism.js");
    /* harmony import */


    var prismjs__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! prismjs/plugins/toolbar/prism-toolbar */
    "./node_modules/prismjs/plugins/toolbar/prism-toolbar.js");
    /* harmony import */


    var prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard */
    "./node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js");
    /* harmony import */


    var prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! prismjs/components/prism-markup */
    "./node_modules/prismjs/components/prism-markup.js");
    /* harmony import */


    var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! prismjs/components/prism-typescript */
    "./node_modules/prismjs/components/prism-typescript.js");
    /* harmony import */


    var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! prismjs/components/prism-scss */
    "./node_modules/prismjs/components/prism-scss.js");
    /* harmony import */


    var prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_8__);

    var HighlightService =
    /*#__PURE__*/
    function () {
      function HighlightService(platformId) {
        _classCallCheck2(this, HighlightService);

        this.platformId = platformId;
      }

      _createClass2(HighlightService, [{
        key: "highlightAll",
        value: function highlightAll() {
          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            Prism.highlightAll();
          }
        }
      }]);

      return HighlightService;
    }();

    HighlightService.ɵfac = function HighlightService_Factory(t) {
      return new (t || HighlightService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]));
    };

    HighlightService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HighlightService,
      factory: HighlightService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighlightService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/blog/blog.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/blog/blog.component.ts ***!
    \***********************************************/

  /*! exports provided: BlogComponent */

  /***/
  function srcAppSharedBlogBlogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogComponent", function () {
      return BlogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @scullyio/ng-lib */
    "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var src_app_core_services_highlight_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/services/highlight.service */
    "./src/app/core/services/highlight.service.ts");
    /* harmony import */


    var _links_list_links_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../links-list/links-list.component */
    "./src/app/shared/links-list/links-list.component.ts");

    var BlogComponent =
    /*#__PURE__*/
    function () {
      function BlogComponent(scully, titleService, highlightService) {
        _classCallCheck2(this, BlogComponent);

        this.scully = scully;
        this.titleService = titleService;
        this.highlightService = highlightService;
        this.title = '';
        this.blog = '';
        this.highlighted = false;
      }

      _createClass2(BlogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.scully.getCurrent().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (data) {
            return data ? true : false;
          })).subscribe(function (data) {
            _this3.titleService.setTitle("d3v0ps | ".concat(data.title));

            _this3.highlightService.highlightAll();
          });
        }
      }]);

      return BlogComponent;
    }();

    BlogComponent.ɵfac = function BlogComponent_Factory(t) {
      return new (t || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyRoutesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_highlight_service__WEBPACK_IMPORTED_MODULE_4__["HighlightService"]));
    };

    BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogComponent,
      selectors: [["app-blog"]],
      inputs: {
        title: "title",
        blog: "blog"
      },
      decls: 10,
      vars: 2,
      consts: [[1, "navbar", "navbar-dark", "bg-dark", "justify-content-between"], [1, "navbar-brand"], [1, "container-fluid", "my-4"], [1, "row"], [1, "col-md-3", "col-12", "mb-2"], [3, "blog"], [1, "col"], [1, "card", "article", "p-4"]],
      template: function BlogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-links-list", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "scully-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blog", ctx.blog);
        }
      },
      directives: [_links_list_links_list_component__WEBPACK_IMPORTED_MODULE_5__["LinksListComponent"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyContentComponent"]],
      styles: ["[_ngcontent-%COMP%]::slotted(h1)  {\n        color:rgb(51, 6, 37);\n        background-color: rgb(248, 211, 236);\n        padding: 5px;\n        border-radius: 5px;\n        width: fit-content;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog',
          template: "\n    <nav class=\"navbar navbar-dark bg-dark justify-content-between\">\n      <a class=\"navbar-brand\">{{ title }}</a>\n    </nav>\n\n    <div class=\"container-fluid my-4\">\n      <div class=\"row\">\n\n        <div class=\"col-md-3 col-12 mb-2\">\n          <app-links-list [blog]=\"blog\"></app-links-list>\n        </div>\n\n        <div class=\"col\">\n          <div class=\"card article p-4\">\n            <scully-content></scully-content>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  ",
          styles: ["\n      ::slotted(h1)  {\n        color:rgb(51, 6, 37);\n        background-color: rgb(248, 211, 236);\n        padding: 5px;\n        border-radius: 5px;\n        width: fit-content;\n      }\n    "]
        }]
      }], function () {
        return [{
          type: _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyRoutesService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]
        }, {
          type: src_app_core_services_highlight_service__WEBPACK_IMPORTED_MODULE_4__["HighlightService"]
        }];
      }, {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        blog: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/links-list/links-list.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/links-list/links-list.component.ts ***!
    \***********************************************************/

  /*! exports provided: LinksListComponent */

  /***/
  function srcAppSharedLinksListLinksListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LinksListComponent", function () {
      return LinksListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_core_get_sorted_links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/get-sorted-links */
    "./src/app/core/get-sorted-links.ts");
    /* harmony import */


    var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @scullyio/ng-lib */
    "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LinksListComponent_a_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var link_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", link_r3.route, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r3.title);
      }
    }

    var LinksListComponent =
    /*#__PURE__*/
    function () {
      function LinksListComponent(scully) {
        _classCallCheck2(this, LinksListComponent);

        this.scully = scully;
        this.blog = '';
        this.links$ = null;
      }

      _createClass2(LinksListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.links$ = this.scully.available$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (links) {
            return Object(src_app_core_get_sorted_links__WEBPACK_IMPORTED_MODULE_2__["default"])(links, _this4.blog);
          }));
        }
      }]);

      return LinksListComponent;
    }();

    LinksListComponent.ɵfac = function LinksListComponent_Factory(t) {
      return new (t || LinksListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__["ScullyRoutesService"]));
    };

    LinksListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LinksListComponent,
      selectors: [["app-links-list"]],
      inputs: {
        blog: "blog"
      },
      decls: 3,
      vars: 3,
      consts: [[1, "list-group", "card"], ["class", "list-group-item list-group-item-action", 3, "href", 4, "ngFor", "ngForOf"], [1, "list-group-item", "list-group-item-action", 3, "href"]],
      template: function LinksListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LinksListComponent_a_1_Template, 2, 2, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.links$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinksListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-links-list',
          template: "\n    <div class=\"list-group card\">\n      <a *ngFor=\"let link of links$ | async\" [href]=\"link.route\" class=\"list-group-item list-group-item-action\">{{ link.title }}</a>\n    </div>\n  "
        }]
      }], function () {
        return [{
          type: _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__["ScullyRoutesService"]
        }];
      }, {
        blog: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _links_list_links_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./links-list/links-list.component */
    "./src/app/shared/links-list/links-list.component.ts");
    /* harmony import */


    var _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./blog/blog.component */
    "./src/app/shared/blog/blog.component.ts");
    /* harmony import */


    var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @scullyio/ng-lib */
    "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");

    var SharedModule = function SharedModule() {
      _classCallCheck2(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__["ScullyLibModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_links_list_links_list_component__WEBPACK_IMPORTED_MODULE_2__["LinksListComponent"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__["ScullyLibModule"]],
        exports: [_links_list_links_list_component__WEBPACK_IMPORTED_MODULE_2__["LinksListComponent"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__["ScullyLibModule"]],
          declarations: [_links_list_links_list_component__WEBPACK_IMPORTED_MODULE_2__["LinksListComponent"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"]],
          exports: [_links_list_links_list_component__WEBPACK_IMPORTED_MODULE_2__["LinksListComponent"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=default~atlas-atlas-module~creativeworks-creativeworks-module~infiniteloop-infiniteloop-module~kerne~4ac1317a-es5.js.map
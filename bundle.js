/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _vidom = __webpack_require__(1);

	var _exampleButtonExampleButtonExample = __webpack_require__(31);

	var _exampleButtonExampleButtonExample2 = _interopRequireDefault(_exampleButtonExampleButtonExample);

	var _exampleInputExampleInputExample = __webpack_require__(71);

	var _exampleInputExampleInputExample2 = _interopRequireDefault(_exampleInputExampleInputExample);

	__webpack_require__(81);

	var App = (function (_Component) {
	    _inherits(App, _Component);

	    function App() {
	        _classCallCheck(this, App);

	        _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(App, [{
	        key: 'onRender',
	        value: function onRender() {
	            return (0, _vidom.node)('div').attrs({ className: 'app' }).children([(0, _vidom.node)(_exampleButtonExampleButtonExample2['default']).key('button-example'), (0, _vidom.node)(_exampleInputExampleInputExample2['default']).key('input-example')]);
	        }
	    }]);

	    return App;
	})(_vidom.Component);

	var rootDomNode = document.body.appendChild(document.createElement('div'));
	rootDomNode.className = 'root';
	(0, _vidom.mountToDom)(rootDomNode, (0, _vidom.node)(App));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopExportWildcard(obj, defaults) {
	    var newObj = defaults({}, obj);delete newObj['default'];return newObj;
	}

	function _defaults(obj, defaults) {
	    var keys = Object.getOwnPropertyNames(defaults);for (var i = 0; i < keys.length; i++) {
	        var key = keys[i];var value = Object.getOwnPropertyDescriptor(defaults, key);if (value && value.configurable && obj[key] === undefined) {
	            Object.defineProperty(obj, key, value);
	        }
	    }return obj;
	}

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _createNode = __webpack_require__(3);

	var _createNode2 = _interopRequireDefault(_createNode);

	var _createComponent = __webpack_require__(23);

	var _createComponent2 = _interopRequireDefault(_createComponent);

	var _renderToString = __webpack_require__(27);

	var _renderToString2 = _interopRequireDefault(_renderToString);

	var _normalizeChildren = __webpack_require__(28);

	var _normalizeChildren2 = _interopRequireDefault(_normalizeChildren);

	var _Component = __webpack_require__(29);

	var _Component2 = _interopRequireDefault(_Component);

	var _utilsConsole = __webpack_require__(10);

	var _utilsConsole2 = _interopRequireDefault(_utilsConsole);

	if (process.env.NODE_ENV !== 'production') {
	    _utilsConsole2['default'].info('You\'re using dev version of Vidom');
	}

	var _clientMounter = __webpack_require__(30);

	_defaults(exports, _interopExportWildcard(_clientMounter, _defaults));

	exports.node = _createNode2['default'];
	exports.createComponent = _createComponent2['default'];
	exports.renderToString = _renderToString2['default'];
	exports.normalizeChildren = _normalizeChildren2['default'];
	exports.Component = _Component2['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	// shim for using process in browser

	'use strict';

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _nodesTagNode = __webpack_require__(4);

	var _nodesTagNode2 = _interopRequireDefault(_nodesTagNode);

	var _nodesComponentNode = __webpack_require__(21);

	var _nodesComponentNode2 = _interopRequireDefault(_nodesComponentNode);

	var _componentsInput = __webpack_require__(22);

	var _componentsInput2 = _interopRequireDefault(_componentsInput);

	var _componentsTextarea = __webpack_require__(25);

	var _componentsTextarea2 = _interopRequireDefault(_componentsTextarea);

	var _componentsSelect = __webpack_require__(26);

	var _componentsSelect2 = _interopRequireDefault(_componentsSelect);

	var WRAPPER_COMPONENTS = {
	    input: _componentsInput2['default'],
	    textarea: _componentsTextarea2['default'],
	    select: _componentsSelect2['default']
	};

	function createNode(type) {
	    switch (typeof type) {
	        case 'string':
	            return WRAPPER_COMPONENTS[type] ? new _nodesComponentNode2['default'](WRAPPER_COMPONENTS[type]) : new _nodesTagNode2['default'](type);

	        case 'function':
	            return new _nodesComponentNode2['default'](type);

	        default:
	            throw Error('unsupported node type: ' + typeof type);
	    }
	}

	exports['default'] = createNode;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError('Cannot call a class as a function');
	    }
	}

	var _clientPatchOps = __webpack_require__(5);

	var _clientPatchOps2 = _interopRequireDefault(_clientPatchOps);

	var _clientDomAttrs = __webpack_require__(6);

	var _clientDomAttrs2 = _interopRequireDefault(_clientDomAttrs);

	var _clientEventsDomEventManager = __webpack_require__(12);

	var _clientEventsAttrsToEvents = __webpack_require__(16);

	var _clientEventsAttrsToEvents2 = _interopRequireDefault(_clientEventsAttrsToEvents);

	var _utilsEscapeHtml = __webpack_require__(17);

	var _utilsEscapeHtml2 = _interopRequireDefault(_utilsEscapeHtml);

	var _utilsIsInArray = __webpack_require__(8);

	var _utilsIsInArray2 = _interopRequireDefault(_utilsIsInArray);

	var _utilsConsole = __webpack_require__(10);

	var _utilsConsole2 = _interopRequireDefault(_utilsConsole);

	var _clientBrowsers = __webpack_require__(18);

	var _clientUtilsCreateElement = __webpack_require__(19);

	var _clientUtilsCreateElement2 = _interopRequireDefault(_clientUtilsCreateElement);

	var _clientUtilsCreateElementByHtml = __webpack_require__(20);

	var _clientUtilsCreateElementByHtml2 = _interopRequireDefault(_clientUtilsCreateElementByHtml);

	var SHORT_TAGS = {
	    area: true,
	    base: true,
	    br: true,
	    col: true,
	    command: true,
	    embed: true,
	    hr: true,
	    img: true,
	    input: true,
	    keygen: true,
	    link: true,
	    menuitem: true,
	    meta: true,
	    param: true,
	    source: true,
	    track: true,
	    wbr: true
	},
	    USE_DOM_STRINGS = _clientBrowsers.isTrident || _clientBrowsers.isEdge;

	var TagNode = (function () {
	    function TagNode(tag) {
	        _classCallCheck(this, TagNode);

	        this.type = TagNode;
	        this._tag = tag;
	        this._domNode = null;
	        this._key = null;
	        this._ns = null;
	        this._attrs = null;
	        this._children = null;
	        this._escapeChildren = true;
	    }

	    _createClass(TagNode, [{
	        key: 'getDomNode',
	        value: function getDomNode() {
	            return this._domNode;
	        }
	    }, {
	        key: 'key',
	        value: function key(_key) {
	            this._key = _key;
	            return this;
	        }
	    }, {
	        key: 'ns',
	        value: function ns(_ns) {
	            this._ns = _ns;
	            return this;
	        }
	    }, {
	        key: 'attrs',
	        value: function attrs(_attrs) {
	            this._attrs = _attrs;
	            return this;
	        }
	    }, {
	        key: 'children',
	        value: function children(_children) {
	            this._children = processChildren(_children);
	            return this;
	        }
	    }, {
	        key: 'html',
	        value: function html(_html) {
	            this._children = _html;
	            this._escapeChildren = false;
	            return this;
	        }
	    }, {
	        key: 'renderToDom',
	        value: function renderToDom(parentNode) {
	            if (!this._ns && parentNode && parentNode._ns) {
	                this._ns = parentNode._ns;
	            }

	            var children = this._children;

	            if (USE_DOM_STRINGS && children && typeof children !== 'string') {
	                var _domNode = (0, _clientUtilsCreateElementByHtml2['default'])(this.renderToString(), this._tag, this._ns);
	                this.adoptDom(_domNode, parentNode);
	                return _domNode;
	            }

	            var domNode = (0, _clientUtilsCreateElement2['default'])(this._ns, this._tag),
	                attrs = this._attrs;

	            if (children) {
	                if (typeof children === 'string') {
	                    this._escapeChildren ? domNode.textContent = children : domNode.innerHTML = children;
	                } else {
	                    var i = 0;
	                    var len = children.length;

	                    while (i < len) {
	                        domNode.appendChild(children[i++].renderToDom(this));
	                    }
	                }
	            }

	            if (attrs) {
	                var _name = undefined,
	                    value = undefined;
	                for (_name in attrs) {
	                    (value = attrs[_name]) != null && (_clientEventsAttrsToEvents2['default'][_name] ? (0, _clientEventsDomEventManager.addListener)(domNode, _clientEventsAttrsToEvents2['default'][_name], value) : (0, _clientDomAttrs2['default'])(_name).set(domNode, _name, value));
	                }
	            }

	            return this._domNode = domNode;
	        }
	    }, {
	        key: 'renderToString',
	        value: function renderToString(ctx) {
	            var tag = this._tag,
	                ns = this._ns,
	                attrs = this._attrs;

	            var children = this._children,
	                res = '<' + tag;

	            if (ns) {
	                res += ' xmlns="' + ns + '"';
	            }

	            if (attrs) {
	                var _name2 = undefined,
	                    value = undefined,
	                    attrHtml = undefined;
	                for (_name2 in attrs) {
	                    value = attrs[_name2];

	                    if (value != null) {
	                        if (_name2 === 'value') {
	                            switch (tag) {
	                                case 'textarea':
	                                    children = value;
	                                    continue;

	                                case 'select':
	                                    ctx = { value: value, multiple: attrs.multiple };
	                                    continue;

	                                case 'option':
	                                    if (ctx.multiple ? (0, _utilsIsInArray2['default'])(ctx.value, value) : ctx.value === value) {
	                                        res += ' ' + (0, _clientDomAttrs2['default'])('selected').toString('selected', true);
	                                    }
	                            }
	                        }

	                        if (!_clientEventsAttrsToEvents2['default'][_name2] && (attrHtml = (0, _clientDomAttrs2['default'])(_name2).toString(_name2, value))) {
	                            res += ' ' + attrHtml;
	                        }
	                    }
	                }
	            }

	            if (SHORT_TAGS[tag]) {
	                res += '/>';
	            } else {
	                res += '>';

	                if (children) {
	                    if (typeof children === 'string') {
	                        res += this._escapeChildren ? (0, _utilsEscapeHtml2['default'])(children) : children;
	                    } else {
	                        var i = 0;
	                        var len = children.length;

	                        while (i < len) {
	                            res += children[i++].renderToString(ctx);
	                        }
	                    }
	                }

	                res += '</' + tag + '>';
	            }

	            return res;
	        }
	    }, {
	        key: 'adoptDom',
	        value: function adoptDom(domNode, parentNode) {
	            if (!this._ns && parentNode && parentNode._ns) {
	                this._ns = parentNode._ns;
	            }

	            this._domNode = domNode;

	            var attrs = this._attrs,
	                children = this._children;

	            if (attrs) {
	                var _name3 = undefined,
	                    value = undefined;
	                for (_name3 in attrs) {
	                    if ((value = attrs[_name3]) != null && _clientEventsAttrsToEvents2['default'][_name3]) {
	                        (0, _clientEventsDomEventManager.addListener)(domNode, _clientEventsAttrsToEvents2['default'][_name3], value);
	                    }
	                }
	            }

	            if (children && typeof children !== 'string') {
	                var i = 0;
	                var len = children.length;

	                if (len) {
	                    var domChildren = domNode.childNodes;
	                    while (i < len) {
	                        children[i].adoptDom(domChildren[i], this);
	                        ++i;
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'mount',
	        value: function mount() {
	            var children = this._children;

	            if (children && typeof children !== 'string') {
	                var i = 0;
	                var len = children.length;

	                while (i < len) {
	                    children[i++].mount();
	                }
	            }
	        }
	    }, {
	        key: 'unmount',
	        value: function unmount() {
	            var children = this._children;

	            if (children && typeof children !== 'string') {
	                var i = 0;
	                var len = children.length;

	                while (i < len) {
	                    children[i++].unmount();
	                }
	            }

	            (0, _clientEventsDomEventManager.removeListeners)(this._domNode);

	            this._domNode = null;
	        }
	    }, {
	        key: 'patch',
	        value: function patch(node, parentNode) {
	            if (this === node) {
	                return;
	            }

	            if (!node._ns && parentNode && parentNode._ns) {
	                node._ns = parentNode._ns;
	            }

	            if (this.type !== node.type || this._tag !== node._tag || this._ns !== node._ns) {
	                _clientPatchOps2['default'].replace(parentNode || null, this, node);
	                return;
	            }

	            this._domNode && (node._domNode = this._domNode);

	            this._patchChildren(node);
	            this._patchAttrs(node);
	        }
	    }, {
	        key: '_patchChildren',
	        value: function _patchChildren(node) {
	            var childrenA = this._children,
	                childrenB = node._children;

	            if (childrenA === childrenB) {
	                return;
	            }

	            var isChildrenAText = typeof childrenA === 'string',
	                isChildrenBText = typeof childrenB === 'string';

	            if (isChildrenBText) {
	                if (isChildrenAText) {
	                    _clientPatchOps2['default'].updateText(this, childrenB, node._escapeChildren);
	                    return;
	                }

	                childrenA && childrenA.length && _clientPatchOps2['default'].removeChildren(this);
	                childrenB && _clientPatchOps2['default'].updateText(this, childrenB, node._escapeChildren);

	                return;
	            }

	            if (!childrenB || !childrenB.length) {
	                if (childrenA) {
	                    isChildrenAText ? _clientPatchOps2['default'].removeText(this) : childrenA.length && _clientPatchOps2['default'].removeChildren(this);
	                }

	                return;
	            }

	            if (isChildrenAText && childrenA) {
	                _clientPatchOps2['default'].removeText(this);
	            }

	            var childrenBLen = childrenB.length;

	            if (isChildrenAText || !childrenA || !childrenA.length) {
	                var iB = 0;
	                while (iB < childrenBLen) {
	                    _clientPatchOps2['default'].appendChild(node, childrenB[iB++]);
	                }
	                return;
	            }

	            var childrenALen = childrenA.length;

	            if (childrenALen === 1 && childrenBLen === 1) {
	                childrenA[0].patch(childrenB[0], node);
	                return;
	            }

	            var leftIdxA = 0,
	                rightIdxA = childrenALen - 1,
	                leftChildA = childrenA[leftIdxA],
	                leftChildAKey = leftChildA._key,
	                rightChildA = childrenA[rightIdxA],
	                rightChildAKey = rightChildA._key,
	                leftIdxB = 0,
	                rightIdxB = childrenBLen - 1,
	                leftChildB = childrenB[leftIdxB],
	                leftChildBKey = leftChildB._key,
	                rightChildB = childrenB[rightIdxB],
	                rightChildBKey = rightChildB._key,
	                updateLeftIdxA = false,
	                updateRightIdxA = false,
	                updateLeftIdxB = false,
	                updateRightIdxB = false,
	                childrenAIndicesToSkip = {},
	                childrenAKeys = undefined,
	                foundAChildIdx = undefined,
	                foundAChild = undefined;

	            while (leftIdxA <= rightIdxA && leftIdxB <= rightIdxB) {
	                if (childrenAIndicesToSkip[leftIdxA]) {
	                    updateLeftIdxA = true;
	                } else if (childrenAIndicesToSkip[rightIdxA]) {
	                    updateRightIdxA = true;
	                } else if (leftChildAKey === leftChildBKey) {
	                    leftChildA.patch(leftChildB, node);
	                    updateLeftIdxA = true;
	                    updateLeftIdxB = true;
	                } else if (rightChildAKey === rightChildBKey) {
	                    rightChildA.patch(rightChildB, node);
	                    updateRightIdxA = true;
	                    updateRightIdxB = true;
	                } else if (leftChildAKey != null && leftChildAKey === rightChildBKey) {
	                    _clientPatchOps2['default'].moveChild(node, leftChildA, rightChildA, true);
	                    leftChildA.patch(rightChildB, node);
	                    updateLeftIdxA = true;
	                    updateRightIdxB = true;
	                } else if (rightChildAKey != null && rightChildAKey === leftChildBKey) {
	                    _clientPatchOps2['default'].moveChild(node, rightChildA, leftChildA, false);
	                    rightChildA.patch(leftChildB, node);
	                    updateRightIdxA = true;
	                    updateLeftIdxB = true;
	                } else if (leftChildAKey != null && leftChildBKey == null) {
	                    _clientPatchOps2['default'].insertChild(node, leftChildB, leftChildA);
	                    updateLeftIdxB = true;
	                } else if (leftChildAKey == null && leftChildBKey != null) {
	                    _clientPatchOps2['default'].removeChild(node, leftChildA);
	                    updateLeftIdxA = true;
	                } else {
	                    childrenAKeys || (childrenAKeys = buildKeys(childrenA, leftIdxA, rightIdxA));
	                    if ((foundAChildIdx = childrenAKeys[leftChildBKey]) != null) {
	                        foundAChild = childrenA[foundAChildIdx];
	                        childrenAIndicesToSkip[foundAChildIdx] = true;
	                        _clientPatchOps2['default'].moveChild(node, foundAChild, leftChildA, false);
	                        foundAChild.patch(leftChildB, node);
	                    } else {
	                        _clientPatchOps2['default'].insertChild(node, leftChildB, leftChildA);
	                    }
	                    updateLeftIdxB = true;
	                }

	                if (updateLeftIdxA) {
	                    updateLeftIdxA = false;
	                    if (++leftIdxA <= rightIdxA) {
	                        leftChildA = childrenA[leftIdxA];
	                        leftChildAKey = leftChildA._key;
	                    }
	                }

	                if (updateRightIdxA) {
	                    updateRightIdxA = false;
	                    if (--rightIdxA >= leftIdxA) {
	                        rightChildA = childrenA[rightIdxA];
	                        rightChildAKey = rightChildA._key;
	                    }
	                }

	                if (updateLeftIdxB) {
	                    updateLeftIdxB = false;
	                    if (++leftIdxB <= rightIdxB) {
	                        leftChildB = childrenB[leftIdxB];
	                        leftChildBKey = leftChildB._key;
	                    }
	                }

	                if (updateRightIdxB) {
	                    updateRightIdxB = false;
	                    if (--rightIdxB >= leftIdxB) {
	                        rightChildB = childrenB[rightIdxB];
	                        rightChildBKey = rightChildB._key;
	                    }
	                }
	            }

	            while (leftIdxA <= rightIdxA) {
	                if (!childrenAIndicesToSkip[leftIdxA]) {
	                    _clientPatchOps2['default'].removeChild(node, childrenA[leftIdxA]);
	                }
	                ++leftIdxA;
	            }

	            while (leftIdxB <= rightIdxB) {
	                rightIdxB < childrenBLen - 1 ? _clientPatchOps2['default'].insertChild(node, childrenB[leftIdxB], childrenB[rightIdxB + 1]) : _clientPatchOps2['default'].appendChild(node, childrenB[leftIdxB]);
	                ++leftIdxB;
	            }
	        }
	    }, {
	        key: '_patchAttrs',
	        value: function _patchAttrs(node) {
	            var attrsA = this._attrs,
	                attrsB = node._attrs;

	            if (attrsA === attrsB) {
	                return;
	            }

	            var attrName = undefined,
	                attrAVal = undefined,
	                attrBVal = undefined,
	                isAttrAValArray = undefined,
	                isAttrBValArray = undefined;

	            if (attrsB) {
	                for (attrName in attrsB) {
	                    attrBVal = attrsB[attrName];
	                    if (!attrsA || (attrAVal = attrsA[attrName]) == null) {
	                        if (attrBVal != null) {
	                            _clientPatchOps2['default'].updateAttr(this, attrName, attrBVal);
	                        }
	                    } else if (attrBVal == null) {
	                        _clientPatchOps2['default'].removeAttr(this, attrName);
	                    } else if (typeof attrBVal === 'object' && typeof attrAVal === 'object') {
	                        isAttrBValArray = Array.isArray(attrBVal);
	                        isAttrAValArray = Array.isArray(attrAVal);
	                        if (isAttrBValArray || isAttrAValArray) {
	                            if (isAttrBValArray && isAttrAValArray) {
	                                this._patchAttrArr(attrName, attrAVal, attrBVal);
	                            } else {
	                                _clientPatchOps2['default'].updateAttr(this, attrName, attrBVal);
	                            }
	                        } else {
	                            this._patchAttrObj(attrName, attrAVal, attrBVal);
	                        }
	                    } else if (attrAVal !== attrBVal) {
	                        _clientPatchOps2['default'].updateAttr(this, attrName, attrBVal);
	                    }
	                }
	            }

	            if (attrsA) {
	                for (attrName in attrsA) {
	                    if ((!attrsB || !(attrName in attrsB)) && (attrAVal = attrsA[attrName]) != null) {
	                        _clientPatchOps2['default'].removeAttr(this, attrName);
	                    }
	                }
	            }
	        }
	    }, {
	        key: '_patchAttrArr',
	        value: function _patchAttrArr(attrName, arrA, arrB) {
	            if (arrA === arrB) {
	                return;
	            }

	            var lenA = arrA.length;
	            var hasDiff = false;

	            if (lenA !== arrB.length) {
	                hasDiff = true;
	            } else {
	                var i = 0;
	                while (!hasDiff && i < lenA) {
	                    if (arrA[i] != arrB[i]) {
	                        hasDiff = true;
	                    }
	                    ++i;
	                }
	            }

	            hasDiff && _clientPatchOps2['default'].updateAttr(this, attrName, arrB);
	        }
	    }, {
	        key: '_patchAttrObj',
	        value: function _patchAttrObj(attrName, objA, objB) {
	            if (objA === objB) {
	                return;
	            }

	            var hasDiff = false,
	                diffObj = {};

	            for (var i in objB) {
	                if (objA[i] != objB[i]) {
	                    hasDiff = true;
	                    diffObj[i] = objB[i];
	                }
	            }

	            for (var i in objA) {
	                if (objA[i] != null && !(i in objB)) {
	                    hasDiff = true;
	                    diffObj[i] = null;
	                }
	            }

	            hasDiff && _clientPatchOps2['default'].updateAttr(this, attrName, diffObj);
	        }
	    }]);

	    return TagNode;
	})();

	function processChildren(children) {
	    if (children == null) {
	        return null;
	    }

	    var typeOfChildren = typeof children;

	    if (typeOfChildren === 'object') {
	        var res = Array.isArray(children) ? children : [children];

	        if (process.env.NODE_ENV !== 'production') {
	            checkChildren(res);
	        }

	        return res;
	    }

	    return typeOfChildren === 'string' ? children : children.toString();
	}

	function checkChildren(children) {
	    var keys = {},
	        len = children.length;

	    var i = 0,
	        child = undefined;

	    while (i < len) {
	        child = children[i++];

	        if (typeof child !== 'object') {
	            _utilsConsole2['default'].error('Error! You mustn\'t use simple child in case of multiple children.');
	        }
	        //else if(child._key == null) {
	        //    if(len > 1) {
	        //        console.warn('Warning! You\'re using children without keys.');
	        //    }
	        //}
	        else if (child._key != null) {
	                if (child._key in keys) {
	                    _utilsConsole2['default'].error('Error! Childrens\' keys must be unique across the children');
	                } else {
	                    keys[child._key] = true;
	                }
	            }
	    }
	}

	function buildKeys(children, idxFrom, idxTo) {
	    var res = {},
	        child = undefined;

	    while (idxFrom < idxTo) {
	        child = children[idxFrom];
	        child._key != null && (res[child._key] = idxFrom);
	        ++idxFrom;
	    }

	    return res;
	}

	exports['default'] = TagNode;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _domAttrs = __webpack_require__(6);

	var _domAttrs2 = _interopRequireDefault(_domAttrs);

	var _eventsDomEventManager = __webpack_require__(12);

	var _eventsAttrsToEvents = __webpack_require__(16);

	var _eventsAttrsToEvents2 = _interopRequireDefault(_eventsAttrsToEvents);

	var doc = global.document;

	function appendChild(parentNode, childNode) {
	    parentNode.getDomNode().appendChild(childNode.renderToDom(parentNode));
	    childNode.mount();
	}

	function insertChild(parentNode, childNode, beforeChildNode) {
	    parentNode.getDomNode().insertBefore(childNode.renderToDom(parentNode), beforeChildNode.getDomNode());
	    childNode.mount();
	}

	function removeChild(parentNode, childNode) {
	    var childDomNode = childNode.getDomNode();
	    childNode.unmount();
	    parentNode.getDomNode().removeChild(childDomNode);
	}

	function moveChild(parentNode, childNode, toChildNode, after) {
	    var parentDomNode = parentNode.getDomNode(),
	        childDomNode = childNode.getDomNode(),
	        toChildDomNode = toChildNode.getDomNode(),
	        activeDomNode = doc.activeElement;

	    if (after) {
	        var nextSiblingDomNode = toChildDomNode.nextSibling;
	        nextSiblingDomNode ? parentDomNode.insertBefore(childDomNode, nextSiblingDomNode) : parentDomNode.appendChild(childDomNode);
	    } else {
	        parentDomNode.insertBefore(childDomNode, toChildDomNode);
	    }

	    if (doc.activeElement !== activeDomNode) {
	        activeDomNode.focus();
	    }
	}

	function removeChildren(parentNode) {
	    var childNodes = parentNode._children,
	        len = childNodes.length;

	    var j = 0;

	    while (j < len) {
	        childNodes[j++].unmount();
	    }

	    parentNode.getDomNode().innerHTML = '';
	}

	function replace(parentNode, oldNode, newNode) {
	    var oldDomNode = oldNode.getDomNode();

	    oldNode.unmount();
	    oldDomNode.parentNode.replaceChild(newNode.renderToDom(parentNode), oldDomNode);
	    newNode.mount();
	}

	function updateAttr(node, attrName, attrVal) {
	    var domNode = node.getDomNode();

	    _eventsAttrsToEvents2['default'][attrName] ? (0, _eventsDomEventManager.addListener)(domNode, _eventsAttrsToEvents2['default'][attrName], attrVal) : (0, _domAttrs2['default'])(attrName).set(domNode, attrName, attrVal);
	}

	function removeAttr(node, attrName) {
	    var domNode = node.getDomNode();

	    _eventsAttrsToEvents2['default'][attrName] ? (0, _eventsDomEventManager.removeListener)(domNode, _eventsAttrsToEvents2['default'][attrName]) : (0, _domAttrs2['default'])(attrName).remove(domNode, attrName);
	}

	function updateText(node, text, escape) {
	    var domNode = node.getDomNode();
	    escape ? domNode.textContent = text : domNode.innerHTML = text;
	}

	function removeText(parentNode) {
	    parentNode.getDomNode().innerHTML = '';
	}

	exports['default'] = {
	    appendChild: appendChild,
	    insertChild: insertChild,
	    removeChild: removeChild,
	    moveChild: moveChild,
	    removeChildren: removeChildren,
	    replace: replace,
	    updateAttr: updateAttr,
	    removeAttr: removeAttr,
	    updateText: updateText,
	    removeText: removeText
	};
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _utilsEscapeAttr = __webpack_require__(7);

	var _utilsEscapeAttr2 = _interopRequireDefault(_utilsEscapeAttr);

	var _utilsIsInArray = __webpack_require__(8);

	var _utilsIsInArray2 = _interopRequireDefault(_utilsIsInArray);

	var _utilsDasherize = __webpack_require__(9);

	var _utilsDasherize2 = _interopRequireDefault(_utilsDasherize);

	var _utilsConsole = __webpack_require__(10);

	var _utilsConsole2 = _interopRequireDefault(_utilsConsole);

	var doc = global.document;

	function setAttr(node, name, val) {
	    if (name === 'type' && node.tagName === 'INPUT') {
	        var value = node.value; // value will be lost in IE if type is changed
	        node.setAttribute(name, '' + val);
	        node.value = value;
	    } else {
	        node.setAttribute(ATTR_NAMES[name] || name, '' + val);
	    }
	}

	function setBooleanAttr(node, name, val) {
	    if (val) {
	        setAttr(node, name, val);
	    } else {
	        removeAttr(node, name);
	    }
	}

	function setProp(node, name, val) {
	    node[name] = val;
	}

	function setObjProp(node, name, val) {
	    if (process.env.NODE_ENV !== 'production') {
	        var typeOfVal = typeof val;
	        if (typeOfVal !== 'object') {
	            _utilsConsole2['default'].error('Error! "' + name + '" attribute expects an object as a value, not a ' + typeOfVal);
	            return;
	        }
	    }

	    var prop = node[name];
	    for (var i in val) {
	        prop[i] = val[i] == null ? '' : val[i];
	    }
	}

	function setPropWithCheck(node, name, val) {
	    if (name === 'value' && node.tagName === 'SELECT') {
	        setSelectValue(node, val);
	    } else {
	        node[name] !== val && (node[name] = val);
	    }
	}

	function removeAttr(node, name) {
	    node.removeAttribute(ATTR_NAMES[name] || name);
	}

	function removeProp(node, name) {
	    if (name === 'value' && node.tagName === 'SELECT') {
	        removeSelectValue(node);
	    } else {
	        node[name] = getDefaultPropVal(node.tagName, name);
	    }
	}

	function setSelectValue(node, value) {
	    var isMultiple = Array.isArray(value),
	        options = node.options,
	        len = options.length;

	    var i = 0,
	        optionNode = undefined;

	    while (i < len) {
	        optionNode = options[i++];
	        optionNode.selected = value != null && (isMultiple ? (0, _utilsIsInArray2['default'])(value, optionNode.value) : optionNode.value == value);
	    }
	}

	function removeSelectValue(node) {
	    var options = node.options,
	        len = options.length;

	    var i = 0;

	    while (i < len) {
	        options[i++].selected = false;
	    }
	}

	function attrToString(name, value) {
	    return (ATTR_NAMES[name] || name) + '="' + (0, _utilsEscapeAttr2['default'])(value) + '"';
	}

	function booleanAttrToString(name, value) {
	    return value ? name : '';
	}

	function stylePropToString(name, value) {
	    var styles = '';

	    for (var i in value) {
	        value[i] != null && (styles += (0, _utilsDasherize2['default'])(i) + ':' + value[i] + ';');
	    }

	    return styles ? name + '="' + styles + '"' : styles;
	}

	var defaultPropVals = {};
	function getDefaultPropVal(tag, attrName) {
	    var tagAttrs = defaultPropVals[tag] || (defaultPropVals[tag] = {});
	    return attrName in tagAttrs ? tagAttrs[attrName] : tagAttrs[attrName] = doc.createElement(tag)[attrName];
	}

	var ATTR_NAMES = {
	    acceptCharset: 'accept-charset',
	    className: 'class',
	    htmlFor: 'for',
	    httpEquiv: 'http-equiv',
	    autoCapitalize: 'autocapitalize',
	    autoComplete: 'autocomplete',
	    autoCorrect: 'autocorrect',
	    autoFocus: 'autofocus',
	    autoPlay: 'autoplay',
	    encType: 'encoding',
	    hrefLang: 'hreflang',
	    radioGroup: 'radiogroup',
	    spellCheck: 'spellcheck',
	    srcDoc: 'srcdoc',
	    srcSet: 'srcset',
	    tabIndex: 'tabindex'
	},
	    DEFAULT_ATTR_CFG = {
	    set: setAttr,
	    remove: removeAttr,
	    toString: attrToString
	},
	    BOOLEAN_ATTR_CFG = {
	    set: setBooleanAttr,
	    remove: removeAttr,
	    toString: booleanAttrToString
	},
	    DEFAULT_PROP_CFG = {
	    set: setProp,
	    remove: removeProp,
	    toString: attrToString
	},
	    BOOLEAN_PROP_CFG = {
	    set: setProp,
	    remove: removeProp,
	    toString: booleanAttrToString
	},
	    attrsCfg = {
	    checked: BOOLEAN_PROP_CFG,
	    controls: DEFAULT_PROP_CFG,
	    disabled: BOOLEAN_ATTR_CFG,
	    id: DEFAULT_PROP_CFG,
	    ismap: BOOLEAN_ATTR_CFG,
	    loop: DEFAULT_PROP_CFG,
	    multiple: BOOLEAN_PROP_CFG,
	    muted: DEFAULT_PROP_CFG,
	    readOnly: BOOLEAN_PROP_CFG,
	    selected: BOOLEAN_PROP_CFG,
	    srcDoc: DEFAULT_PROP_CFG,
	    style: {
	        set: setObjProp,
	        remove: removeProp,
	        toString: stylePropToString
	    },
	    value: {
	        set: setPropWithCheck,
	        remove: removeProp,
	        toString: attrToString
	    }
	};

	exports['default'] = function (attrName) {
	    return attrsCfg[attrName] || DEFAULT_ATTR_CFG;
	};

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(2)))

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	function escapeAttr(str) {
	    return (str + '').replace(/&/g, '&amp;').replace(/"/g, '&quot;');
	}

	exports['default'] = escapeAttr;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function isInArray(arr, item) {
	    var len = arr.length;
	    var i = 0;

	    while (i < len) {
	        if (arr[i++] == item) {
	            return true;
	        }
	    }

	    return false;
	}

	exports["default"] = isInArray;
	module.exports = exports["default"];

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var DASHERIZE_RE = /([^A-Z]+)([A-Z])/g;

	function dasherize(str) {
	    return str.replace(DASHERIZE_RE, '$1-$2').toLowerCase();
	}

	exports['default'] = dasherize;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _noOp = __webpack_require__(11);

	var _noOp2 = _interopRequireDefault(_noOp);

	var globalConsole = global.console,
	    console = {};

	['log', 'info', 'warn', 'error'].forEach(function (name) {
	    console[name] = globalConsole ? globalConsole[name] ? function (arg1, arg2, arg3, arg4, arg5) {
	        // IE9: console methods aren't functions
	        switch (arguments.length) {
	            case 1:
	                globalConsole[name](arg1);
	                break;

	            case 2:
	                globalConsole[name](arg1, arg2);
	                break;

	            case 3:
	                globalConsole[name](arg1, arg2, arg3);
	                break;

	            case 4:
	                globalConsole[name](arg1, arg2, arg3, arg4);
	                break;

	            case 5:
	                globalConsole[name](arg1, arg2, arg3, arg4, arg5);
	                break;
	        }
	    } : function () {
	        globalConsole.log.apply(globalConsole, arguments);
	    } : _noOp2['default'];
	});

	exports['default'] = console;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function noOp() {}

	exports["default"] = noOp;
	module.exports = exports["default"];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _isEventSupported = __webpack_require__(13);

	var _isEventSupported2 = _interopRequireDefault(_isEventSupported);

	var _SyntheticEvent = __webpack_require__(14);

	var _SyntheticEvent2 = _interopRequireDefault(_SyntheticEvent);

	var _getDomNodeId = __webpack_require__(15);

	var _getDomNodeId2 = _interopRequireDefault(_getDomNodeId);

	var doc = global.document,
	    body = doc && doc.body,
	    BUBBLEABLE_NATIVE_EVENTS = ['mouseover', 'mousemove', 'mouseout', 'mousedown', 'mouseup', 'click', 'dblclick', 'keydown', 'keypress', 'keyup', 'change', 'input', 'submit', 'focus', 'blur', 'dragstart', 'drag', 'dragenter', 'dragover', 'dragleave', 'dragend', 'drop', 'contextmenu', 'wheel', 'copy', 'cut', 'paste'],
	    NON_BUBBLEABLE_NATIVE_EVENTS = ['scroll', 'load', 'error'];

	var listenersStorage = {},
	    eventsCfg = {};

	function globalEventListener(e, type) {
	    type || (type = e.type);

	    var cfg = eventsCfg[type],
	        listenersToInvoke = [];

	    var target = e.target,
	        listenersCount = cfg.listenersCounter,
	        listeners = undefined,
	        listener = undefined,
	        domNodeId = undefined;

	    while (listenersCount > 0 && target !== body) {
	        if (domNodeId = (0, _getDomNodeId2['default'])(target, true)) {
	            listeners = listenersStorage[domNodeId];
	            if (listeners && (listener = listeners[type])) {
	                listenersToInvoke.push(listener);
	                --listenersCount;
	            }
	        }

	        target = target.parentNode;
	    }

	    if (listenersToInvoke.length) {
	        var _event = new _SyntheticEvent2['default'](type, e),
	            len = listenersToInvoke.length;

	        var i = 0;

	        while (i < len) {
	            listenersToInvoke[i++](_event);
	            if (_event.isPropagationStopped()) {
	                break;
	            }
	        }
	    }
	}

	function eventListener(e) {
	    listenersStorage[(0, _getDomNodeId2['default'])(e.target)][e.type](new _SyntheticEvent2['default'](e.type, e));
	}

	if (body) {
	    (function () {
	        var focusEvents = {
	            focus: 'focusin',
	            blur: 'focusout'
	        };

	        var i = 0,
	            type = undefined;

	        while (i < BUBBLEABLE_NATIVE_EVENTS.length) {
	            type = BUBBLEABLE_NATIVE_EVENTS[i++];
	            eventsCfg[type] = {
	                type: type,
	                bubbles: true,
	                listenersCounter: 0,
	                set: false,
	                setup: focusEvents[type] ? (0, _isEventSupported2['default'])(focusEvents[type]) ? function () {
	                    var type = this.type;
	                    body.addEventListener(focusEvents[type], function (e) {
	                        globalEventListener(e, type);
	                    });
	                } : function () {
	                    body.addEventListener(this.type, globalEventListener, true);
	                } : null
	            };
	        }

	        i = 0;
	        while (i < NON_BUBBLEABLE_NATIVE_EVENTS.length) {
	            eventsCfg[NON_BUBBLEABLE_NATIVE_EVENTS[i++]] = {
	                type: type,
	                bubbles: false,
	                set: false
	            };
	        }
	    })();
	}

	function addListener(domNode, type, listener) {
	    var cfg = eventsCfg[type];

	    if (cfg) {
	        if (!cfg.set) {
	            cfg.setup ? cfg.setup() : cfg.bubbles && body.addEventListener(type, globalEventListener, false);
	            cfg.set = true;
	        }

	        var domNodeId = (0, _getDomNodeId2['default'])(domNode),
	            listeners = listenersStorage[domNodeId] || (listenersStorage[domNodeId] = {});

	        if (!listeners[type]) {
	            cfg.bubbles ? ++cfg.listenersCounter : domNode.addEventListener(type, eventListener, false);
	        }

	        listeners[type] = listener;
	    }
	}

	function removeListener(domNode, type) {
	    var domNodeId = (0, _getDomNodeId2['default'])(domNode, true);

	    if (domNodeId) {
	        var listeners = listenersStorage[domNodeId];

	        if (listeners && listeners[type]) {
	            listeners[type] = null;

	            var cfg = eventsCfg[type];

	            if (cfg) {
	                cfg.bubbles ? --cfg.listenersCounter : domNode.removeEventListener(type, eventListener);
	            }
	        }
	    }
	}

	function removeListeners(domNode) {
	    var domNodeId = (0, _getDomNodeId2['default'])(domNode, true);

	    if (domNodeId) {
	        var listeners = listenersStorage[domNodeId];

	        if (listeners) {
	            delete listenersStorage[domNodeId];
	            for (var type in listeners) {
	                removeListener(domNode, type);
	            }
	        }
	    }
	}

	exports.addListener = addListener;
	exports.removeListener = removeListener;
	exports.removeListeners = removeListeners;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 13 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var doc = global.document;

	function isEventSupported(type) {
	    var eventProp = 'on' + type;

	    if (eventProp in doc) {
	        return true;
	    }

	    var domNode = doc.createElement('div');

	    domNode.setAttribute(eventProp, 'return;');
	    if (typeof domNode[eventProp] === 'function') {
	        return true;
	    }

	    return type === 'wheel' && doc.implementation && doc.implementation.hasFeature && doc.implementation.hasFeature('', '') !== true && doc.implementation.hasFeature('Events.wheel', '3.0');
	}

	exports['default'] = isEventSupported;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	var SyntheticEvent = (function () {
	    function SyntheticEvent(type, nativeEvent) {
	        _classCallCheck(this, SyntheticEvent);

	        this.type = type;
	        this.target = nativeEvent.target;
	        this.nativeEvent = nativeEvent;

	        this._isPropagationStopped = false;
	        this._isDefaultPrevented = false;
	    }

	    _createClass(SyntheticEvent, [{
	        key: "stopPropagation",
	        value: function stopPropagation() {
	            this._isPropagationStopped = true;

	            var nativeEvent = this.nativeEvent;
	            nativeEvent.stopPropagation ? nativeEvent.stopPropagation() : nativeEvent.cancelBubble = true;
	        }
	    }, {
	        key: "isPropagationStopped",
	        value: function isPropagationStopped() {
	            return this._isPropagationStopped;
	        }
	    }, {
	        key: "preventDefault",
	        value: function preventDefault() {
	            this._isDefaultPrevented = true;

	            var nativeEvent = this.nativeEvent;
	            nativeEvent.preventDefault ? nativeEvent.preventDefault() : nativeEvent.returnValue = false;
	        }
	    }, {
	        key: "isDefaultPrevented",
	        value: function isDefaultPrevented() {
	            return this._isDefaultPrevented;
	        }
	    }]);

	    return SyntheticEvent;
	})();

	exports["default"] = SyntheticEvent;
	module.exports = exports["default"];

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var ID_PROP = '__vidom__id__';
	var counter = 1;

	function getDomNodeId(node, onlyGet) {
	    return node[ID_PROP] || (onlyGet ? null : node[ID_PROP] = counter++);
	}

	exports['default'] = getDomNodeId;
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = {
	    onMouseOver: 'mouseover',
	    onMouseMove: 'mousemove',
	    onMouseOut: 'mouseout',
	    onMouseDown: 'mousedown',
	    onMouseUp: 'mouseup',
	    onClick: 'click',
	    onDblClick: 'dblclick',
	    onKeyDown: 'keydown',
	    onKeyPress: 'keypress',
	    onKeyUp: 'keyup',
	    onChange: 'change',
	    onInput: 'input',
	    onSubmit: 'submit',
	    onFocus: 'focus',
	    onBlur: 'blur',
	    onScroll: 'scroll',
	    onLoad: 'load',
	    onError: 'error',
	    onContextMenu: 'contextmenu',
	    onDragStart: 'dragstart',
	    onDrag: 'drag',
	    onDragEnter: 'dragenter',
	    onDragOver: 'dragover',
	    onDragLeave: 'dragleave',
	    onDragEnd: 'dragend',
	    onDrop: 'drop',
	    onWheel: 'wheel',
	    onCopy: 'copy',
	    onCut: 'cut',
	    onPaste: 'paste'
	};
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	function escapeHtml(str) {
	    return (str + '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	}

	exports['default'] = escapeHtml;
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var ua = global.navigator ? global.navigator.userAgent : '';

	var isTrident = ua.indexOf('Trident') > -1;
	exports.isTrident = isTrident;
	var isEdge = ua.indexOf('Edge') > -1;
	exports.isEdge = isEdge;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 19 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var doc = global.document,
	    elementProtos = {};

	function createElement(ns, tag) {
	    var baseElement = undefined;
	    if (ns) {
	        var key = ns + ':' + tag;
	        baseElement = elementProtos[key] || (elementProtos[key] = doc.createElementNS(ns, tag));
	    } else {
	        baseElement = elementProtos[tag] || (elementProtos[tag] = doc.createElement(tag));
	    }

	    return baseElement.cloneNode();
	}

	exports['default'] = createElement;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 20 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var doc = global.document,
	    TOP_LEVEL_NS_TAGS = {
	    'http://www.w3.org/2000/svg': 'svg',
	    'http://www.w3.org/1998/Math/MathML': 'math'
	};

	var helperDomNode = undefined;

	function createElementByHtml(html, tag, ns) {
	    helperDomNode || (helperDomNode = document.createElement('div'));

	    if (!ns || !TOP_LEVEL_NS_TAGS[ns] || TOP_LEVEL_NS_TAGS[ns] === tag) {
	        helperDomNode.innerHTML = html;
	        return helperDomNode.removeChild(helperDomNode.firstChild);
	    }

	    var topLevelTag = TOP_LEVEL_NS_TAGS[ns];
	    helperDomNode.innerHTML = '<' + topLevelTag + ' xmlns="' + ns + '">' + html + '</' + topLevelTag + '>';
	    return helperDomNode.removeChild(helperDomNode.firstChild).firstChild;
	}

	exports['default'] = createElementByHtml;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	var ComponentNode = (function () {
	    function ComponentNode(component) {
	        _classCallCheck(this, ComponentNode);

	        this.type = ComponentNode;
	        this._component = component;
	        this._key = null;
	        this._attrs = null;
	        this._instance = null;
	        this._children = null;
	        this._ns = null;
	    }

	    _createClass(ComponentNode, [{
	        key: "getDomNode",
	        value: function getDomNode() {
	            return this._instance.getDomNode();
	        }
	    }, {
	        key: "key",
	        value: function key(_key) {
	            this._key = _key;
	            return this;
	        }
	    }, {
	        key: "attrs",
	        value: function attrs(_attrs) {
	            this._attrs = _attrs;
	            return this;
	        }
	    }, {
	        key: "children",
	        value: function children(_children) {
	            this._children = _children;
	            return this;
	        }
	    }, {
	        key: "renderToDom",
	        value: function renderToDom(parentNode) {
	            if (!this._ns && parentNode && parentNode._ns) {
	                this._ns = parentNode._ns;
	            }

	            return this._domNode = this._getInstance().renderToDom(this);
	        }
	    }, {
	        key: "renderToString",
	        value: function renderToString(ctx) {
	            return this._getInstance().renderToString(ctx);
	        }
	    }, {
	        key: "adoptDom",
	        value: function adoptDom(domNode, parentNode) {
	            this._getInstance().adoptDom(domNode, parentNode);
	        }
	    }, {
	        key: "mount",
	        value: function mount() {
	            this._instance.getRootNode().mount();
	            this._instance.mount();
	        }
	    }, {
	        key: "unmount",
	        value: function unmount() {
	            if (this._instance) {
	                this._instance.getRootNode().unmount();
	                this._instance.unmount();
	                this._instance = null;
	            }
	        }
	    }, {
	        key: "patch",
	        value: function patch(node, parentNode) {
	            if (this === node) {
	                return;
	            }

	            if (!node._ns && parentNode && parentNode._ns) {
	                node._ns = parentNode._ns;
	            }

	            var instance = this._getInstance();

	            if (this.type === node.type) {
	                if (this._component === node._component) {
	                    instance.patch(node._attrs, node._children, parentNode);
	                    node._instance = instance;
	                } else {
	                    instance.unmount();
	                    instance.getRootNode().patch(node._getInstance().getRootNode(), parentNode);
	                }
	            } else {
	                instance.unmount();
	                instance.getRootNode().patch(node, parentNode);
	            }
	        }
	    }, {
	        key: "_getInstance",
	        value: function _getInstance() {
	            return this._instance || (this._instance = new this._component(this._attrs, this._children));
	        }
	    }]);

	    return ComponentNode;
	})();

	exports["default"] = ComponentNode;
	module.exports = exports["default"];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _createComponent = __webpack_require__(23);

	var _createComponent2 = _interopRequireDefault(_createComponent);

	var _nodesTagNode = __webpack_require__(4);

	var _nodesTagNode2 = _interopRequireDefault(_nodesTagNode);

	var _clientRafBatch = __webpack_require__(24);

	exports['default'] = (0, _createComponent2['default'])({
	    onInit: function onInit() {
	        var _this = this;

	        this.onInput = function (e) {
	            var attrs = _this.getAttrs();

	            attrs.onInput && attrs.onInput(e);
	            attrs.onChange && attrs.onChange(e);

	            (0, _clientRafBatch.applyBatch)();

	            if (_this.isMounted()) {
	                // attrs could be changed during applyBatch()
	                attrs = _this.getAttrs();
	                var control = _this.getDomRef('control');
	                if (control.value !== attrs.value) {
	                    control.value = attrs.value;
	                }
	            }
	        };

	        this.onClick = function (e) {
	            var attrs = _this.getAttrs();

	            attrs.onClick && attrs.onClick(e);
	            attrs.onChange && attrs.onChange(e);

	            (0, _clientRafBatch.applyBatch)();

	            if (_this.isMounted()) {
	                // attrs could be changed during applyBatch()
	                attrs = _this.getAttrs();
	                var control = _this.getDomRef('control');
	                if (control.checked !== attrs.checked) {
	                    control.checked = attrs.checked;
	                }
	            }
	        };
	    },

	    onRender: function onRender(attrs) {
	        var controlAttrs = _extends({}, attrs, { onChange: null });

	        if (attrs.type === 'checkbox' || attrs.type === 'radio') {
	            controlAttrs.onClick = this.onClick;
	        } else {
	            controlAttrs.onInput = this.onInput;
	        }

	        return this.setDomRef('control', new _nodesTagNode2['default']('input').attrs(controlAttrs));
	    }
	});
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _utilsNoOp = __webpack_require__(11);

	var _utilsNoOp2 = _interopRequireDefault(_utilsNoOp);

	var _clientRafBatch = __webpack_require__(24);

	var _clientRafBatch2 = _interopRequireDefault(_clientRafBatch);

	var _createNode = __webpack_require__(3);

	var _createNode2 = _interopRequireDefault(_createNode);

	var _utilsConsole = __webpack_require__(10);

	var _utilsConsole2 = _interopRequireDefault(_utilsConsole);

	var emptyAttrs = {};

	function mountComponent() {
	    this._isMounted = true;
	    this.onMount(this._attrs);
	}

	function unmountComponent() {
	    this._isMounted = false;
	    this._domRefs = null;
	    this.onUnmount();
	}

	function patchComponent(attrs, children, parentNode) {
	    attrs = this._buildAttrs(attrs);

	    var prevRootNode = this._rootNode,
	        prevAttrs = this._attrs;

	    if (prevAttrs !== attrs) {
	        this._attrs = attrs;
	        if (this.isMounted()) {
	            this._isUpdating = true;
	            this.onAttrsReceive(attrs, prevAttrs);
	            this._isUpdating = false;
	        }
	    }

	    this._children = children;

	    var shouldUpdate = this.shouldUpdate(attrs, prevAttrs);

	    if (process.env.NODE_ENV !== 'production') {
	        var shouldUpdateResType = typeof shouldUpdate;
	        if (shouldUpdateResType !== 'boolean') {
	            _utilsConsole2['default'].warn('Warning! Component#shouldUpdate() should return boolean instead of ' + shouldUpdateResType);
	        }
	    }

	    if (shouldUpdate) {
	        this._rootNode = this.render();
	        prevRootNode.patch(this._rootNode, parentNode);
	        this.isMounted() && this.onUpdate(attrs, prevAttrs);
	    }
	}

	function shouldComponentUpdate(attrs, prevAttrs) {
	    return true;
	}

	function renderComponentToDom(parentNode) {
	    return this._rootNode.renderToDom(parentNode);
	}

	function renderComponentToString(ctx) {
	    return this._rootNode.renderToString(ctx);
	}

	function adoptComponentDom(domNode, parentNode) {
	    this._rootNode.adoptDom(domNode, parentNode);
	}

	function getComponentDomNode() {
	    return this._rootNode.getDomNode();
	}

	function getComponentAttrs() {
	    return this._attrs;
	}

	function renderComponent() {
	    this._domRefs = {};

	    var renderRes = this.onRender(this._attrs, this._children) || (0, _createNode2['default'])('noscript');

	    if (process.env.NODE_ENV !== 'production') {
	        if (typeof renderRes !== 'object' || Array.isArray(renderRes)) {
	            _utilsConsole2['default'].error('Error! Component#onRender must return a single node object on the top level');
	        }
	    }

	    return renderRes;
	}

	function updateComponent(cb, cbCtx) {
	    var _this = this;

	    if (this._isUpdating) {
	        cb && (0, _clientRafBatch2['default'])(function () {
	            return cb.call(cbCtx || _this);
	        });
	    } else {
	        this._isUpdating = true;
	        (0, _clientRafBatch2['default'])(function () {
	            if (_this.isMounted()) {
	                _this.patch(_this._attrs, _this._children);
	                _this._isUpdating = false;
	                cb && cb.call(cbCtx || _this);
	            }
	        });
	    }
	}

	function getComponentRootNode() {
	    return this._rootNode;
	}

	function isComponentMounted() {
	    return this._isMounted;
	}

	function setComponentDomRef(ref, node) {
	    return this._domRefs[ref] = node;
	}

	function getComponentDomRef(ref) {
	    return this._domRefs[ref] ? this._domRefs[ref].getDomNode() : null;
	}

	function getComponentDefaultAttrs() {
	    return emptyAttrs;
	}

	function buildComponentAttrs(attrs) {
	    if (this._attrs && attrs === this._attrs) {
	        return attrs;
	    }

	    var cons = this.constructor,
	        defaultAttrs = cons._defaultAttrs || (cons._defaultAttrs = cons.getDefaultAttrs());

	    if (!attrs) {
	        return defaultAttrs;
	    }

	    if (defaultAttrs === emptyAttrs) {
	        return attrs;
	    }

	    var res = {};

	    for (var i in defaultAttrs) {
	        res[i] = defaultAttrs[i];
	    }

	    for (var i in attrs) {
	        res[i] = attrs[i];
	    }

	    return res;
	}

	function createComponent(props, staticProps) {
	    var res = function res(attrs, children) {
	        this._attrs = this._buildAttrs(attrs);
	        this._children = children;
	        this._domRefs = null;
	        this._isMounted = false;
	        this._isUpdating = false;
	        this.onInit(this._attrs);
	        this._rootNode = this.render();
	    },
	        ptp = {
	        constructor: res,
	        onInit: _utilsNoOp2['default'],
	        mount: mountComponent,
	        unmount: unmountComponent,
	        onMount: _utilsNoOp2['default'],
	        onUnmount: _utilsNoOp2['default'],
	        onAttrsReceive: _utilsNoOp2['default'],
	        shouldUpdate: shouldComponentUpdate,
	        onUpdate: _utilsNoOp2['default'],
	        isMounted: isComponentMounted,
	        renderToDom: renderComponentToDom,
	        renderToString: renderComponentToString,
	        adoptDom: adoptComponentDom,
	        getDomNode: getComponentDomNode,
	        getRootNode: getComponentRootNode,
	        render: renderComponent,
	        onRender: _utilsNoOp2['default'],
	        update: updateComponent,
	        patch: patchComponent,
	        getDomRef: getComponentDomRef,
	        setDomRef: setComponentDomRef,
	        getAttrs: getComponentAttrs,
	        _buildAttrs: buildComponentAttrs
	    };

	    for (var i in props) {
	        ptp[i] = props[i];
	    }

	    res.prototype = ptp;

	    res.getDefaultAttrs = getComponentDefaultAttrs;

	    for (var i in staticProps) {
	        res[i] = staticProps[i];
	    }

	    return res;
	}

	exports['default'] = createComponent;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 24 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var raf = global.requestAnimationFrame || global.webkitRequestAnimationFrame || global.mozRequestAnimationFrame || function (callback) {
	    return setTimeout(callback, 1000 / 60);
	};

	var batch = [];

	function applyBatch() {
	    var i = 0;

	    while (i < batch.length) {
	        batch[i++]();
	    }

	    batch = [];
	}

	function rafBatch(fn) {
	    batch.push(fn) === 1 && raf(applyBatch);
	}

	exports["default"] = rafBatch;
	exports.applyBatch = applyBatch;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _createComponent = __webpack_require__(23);

	var _createComponent2 = _interopRequireDefault(_createComponent);

	var _nodesTagNode = __webpack_require__(4);

	var _nodesTagNode2 = _interopRequireDefault(_nodesTagNode);

	var _clientRafBatch = __webpack_require__(24);

	exports['default'] = (0, _createComponent2['default'])({
	    onInit: function onInit() {
	        var _this = this;

	        this.onInput = function (e) {
	            var attrs = _this.getAttrs();

	            attrs.onInput && attrs.onInput(e);
	            attrs.onChange && attrs.onChange(e);

	            (0, _clientRafBatch.applyBatch)();

	            if (_this.isMounted()) {
	                // attrs could be changed during applyBatch()
	                attrs = _this.getAttrs();
	                var control = _this.getDomRef('control');
	                if (control.value !== attrs.value) {
	                    control.value = attrs.value;
	                }
	            }
	        };
	    },

	    onRender: function onRender(attrs) {
	        var controlAttrs = _extends({}, attrs, {
	            onInput: this.onInput,
	            onChange: null
	        });

	        return this.setDomRef('control', new _nodesTagNode2['default']('textarea').attrs(controlAttrs));
	    }
	});
	module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _createComponent = __webpack_require__(23);

	var _createComponent2 = _interopRequireDefault(_createComponent);

	var _nodesTagNode = __webpack_require__(4);

	var _nodesTagNode2 = _interopRequireDefault(_nodesTagNode);

	var _clientRafBatch = __webpack_require__(24);

	exports['default'] = (0, _createComponent2['default'])({
	    onInit: function onInit() {
	        var _this = this;

	        this.onChange = function (e) {
	            var attrs = _this.getAttrs();

	            attrs.onChange && attrs.onChange(e);

	            (0, _clientRafBatch.applyBatch)();

	            if (_this.isMounted()) {
	                // attrs could be changed during applyBatch()
	                attrs = _this.getAttrs();
	                var control = _this.getDomRef('control');
	                if (control.value !== attrs.value) {
	                    control.value = attrs.value;
	                }
	            }
	        };
	    },

	    onRender: function onRender(attrs, children) {
	        var controlAttrs = _extends({}, attrs, {
	            onChange: this.onChange
	        });

	        return this.setDomRef('control', new _nodesTagNode2['default']('select').attrs(controlAttrs).children(children));
	    }
	});
	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function renderToString(tree) {
	    return tree.renderToString();
	}

	exports["default"] = renderToString;
	module.exports = exports["default"];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _createNode = __webpack_require__(3);

	var _createNode2 = _interopRequireDefault(_createNode);

	function normalizeChildren(children) {
	    var typeOfChildren = typeof children;
	    if (typeOfChildren !== 'object') {
	        return children;
	    }

	    if (!Array.isArray(children)) {
	        children = [children];
	    }

	    var res = [],
	        i = 0,
	        len = children.length,
	        child = undefined;

	    while (i < len) {
	        child = children[i];
	        if (Array.isArray(child)) {
	            res = res.concat(normalizeChildren(child));
	        } else if (child != null) {
	            var typeOfChild = typeof child;
	            res.push(typeOfChild === 'object' ? child : (0, _createNode2['default'])('span').children(typeOfChild === 'string' ? child : child.toString()));
	        }
	        ++i;
	    }

	    return res;
	}

	exports['default'] = normalizeChildren;
	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _createComponent = __webpack_require__(23);

	var _createComponent2 = _interopRequireDefault(_createComponent);

	exports['default'] = (0, _createComponent2['default'])();
	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports.mountToDom = mountToDom;
	exports.mountToDomSync = mountToDomSync;
	exports.unmountFromDom = unmountFromDom;
	exports.unmountFromDomSync = unmountFromDomSync;

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _getDomNodeId = __webpack_require__(15);

	var _getDomNodeId2 = _interopRequireDefault(_getDomNodeId);

	var _rafBatch = __webpack_require__(24);

	var _rafBatch2 = _interopRequireDefault(_rafBatch);

	var mountedNodes = {};
	var counter = 0;

	function mount(domNode, tree, cb, cbCtx, syncMode) {
	    var domNodeId = (0, _getDomNodeId2['default'])(domNode),
	        mounted = mountedNodes[domNodeId],
	        mountId = undefined;

	    if (mounted && mounted.tree) {
	        mountId = ++mounted.id;
	        var patchFn = function patchFn() {
	            if (mountedNodes[domNodeId] && mountedNodes[domNodeId].id === mountId) {
	                mounted.tree.patch(tree);
	                mounted.tree = tree;
	                callCb(cb, cbCtx);
	            }
	        };
	        syncMode ? patchFn() : (0, _rafBatch2['default'])(patchFn);
	    } else {
	        mountedNodes[domNodeId] = { tree: null, id: mountId = ++counter };

	        var existingDom = domNode.firstChild;
	        if (existingDom) {
	            mountedNodes[domNodeId].tree = tree;
	            tree.adoptDom(existingDom);
	            tree.mount();
	            callCb(cb, cbCtx);
	        } else {
	            var renderFn = function renderFn() {
	                if (mountedNodes[domNodeId] && mountedNodes[domNodeId].id === mountId) {
	                    mountedNodes[domNodeId].tree = tree;
	                    domNode.appendChild(tree.renderToDom());
	                    tree.mount();
	                    callCb(cb, cbCtx);
	                }
	            };

	            syncMode ? renderFn() : (0, _rafBatch2['default'])(renderFn);
	        }
	    }
	}

	function unmount(domNode, cb, cbCtx, syncMode) {
	    var domNodeId = (0, _getDomNodeId2['default'])(domNode);
	    var mounted = mountedNodes[domNodeId];

	    if (mounted) {
	        (function () {
	            var mountId = ++mounted.id,
	                unmountFn = function unmountFn() {
	                mounted = mountedNodes[domNodeId];
	                if (mounted && mounted.id === mountId) {
	                    mounted.tree && mounted.tree.unmount();
	                    delete mountedNodes[domNodeId];
	                    domNode.innerHTML = '';
	                    callCb(cb, cbCtx);
	                }
	            };

	            mounted.tree ? syncMode ? unmountFn() : (0, _rafBatch2['default'])(unmountFn) : syncMode || callCb(cb, cbCtx);
	        })();
	    } else if (!syncMode) {
	        callCb(cb, cbCtx);
	    }
	}

	function callCb(cb, cbCtx) {
	    cb && cb.call(cbCtx || this);
	}

	function mountToDom(domNode, tree, cb, cbCtx) {
	    mount(domNode, tree, cb, cbCtx, false);
	}

	function mountToDomSync(domNode, tree) {
	    mount(domNode, tree, null, null, true);
	}

	function unmountFromDom(domNode, cb, cbCtx) {
	    unmount(domNode, cb, cbCtx, false);
	}

	function unmountFromDomSync(domNode) {
	    unmount(domNode, null, null, true);
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _componentsStatefulComponentJs = __webpack_require__(32);

	var _componentsStatefulComponentJs2 = _interopRequireDefault(_componentsStatefulComponentJs);

	var _helpersBemClassJs = __webpack_require__(33);

	var _helpersBemClassJs2 = _interopRequireDefault(_helpersBemClassJs);

	var _vidom = __webpack_require__(1);

	__webpack_require__(34);

	__webpack_require__(38);

	var _componentsButtonButtonJs = __webpack_require__(40);

	var _componentsButtonButtonJs2 = _interopRequireDefault(_componentsButtonButtonJs);

	var _componentsButtonToggleButtonJs = __webpack_require__(43);

	var _componentsButtonToggleButtonJs2 = _interopRequireDefault(_componentsButtonToggleButtonJs);

	var _componentsButtonLinkButtonJs = __webpack_require__(44);

	var _componentsButtonLinkButtonJs2 = _interopRequireDefault(_componentsButtonLinkButtonJs);

	__webpack_require__(45);

	__webpack_require__(47);

	__webpack_require__(49);

	__webpack_require__(51);

	__webpack_require__(53);

	__webpack_require__(55);

	__webpack_require__(57);

	__webpack_require__(59);

	__webpack_require__(61);

	__webpack_require__(63);

	__webpack_require__(65);

	__webpack_require__(67);

	__webpack_require__(69);

	var ButtonExample = (function (_StatefulComponent) {
	    _inherits(ButtonExample, _StatefulComponent);

	    function ButtonExample() {
	        _classCallCheck(this, ButtonExample);

	        _get(Object.getPrototypeOf(ButtonExample.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(ButtonExample, [{
	        key: 'getInitialState',
	        value: function getInitialState() {
	            return {
	                showBackground: false,
	                buttonsDisabled: false
	            };
	        }
	    }, {
	        key: 'onRender',
	        value: function onRender() {
	            var _this = this;

	            var sizes = ['xs', 's', 'm'];
	            var sizesHead = (0, _vidom.node)('tr').children(sizes.map(function (s) {
	                return (0, _vidom.node)('th').children(s);
	            }));
	            var sizesContent = (0, _vidom.node)('tr').children(sizes.map(function (s) {
	                return (0, _vidom.node)('td').children((0, _vidom.node)(_componentsButtonButtonJs2['default']).attrs({
	                    size: s,
	                    className: (0, _helpersBemClassJs2['default'])('ButtonExample--button'),
	                    theme: 'normal',
	                    disabled: _this.getState().buttonsDisabled,
	                    text: 'Button'
	                }));
	            }));
	            var sizesExample = [(0, _vidom.node)('table').attrs({
	                className: (0, _helpersBemClassJs2['default'])('XArea', {
	                    bordered: true,
	                    squares: this.getState().showBackground
	                }, 'XTable')
	            }).children([sizesHead, sizesContent]), (0, _vidom.node)('div').attrs({ className: 'XArea' }).children([(0, _vidom.node)(_componentsButtonToggleButtonJs2['default']).attrs({
	                size: 's',
	                theme: 'normal',
	                pin: 'round_brick',
	                onCheckedChange: function onCheckedChange(checked) {
	                    return _this.setState({ showBackground: checked });
	                },
	                text: 'Background'
	            }), (0, _vidom.node)(_componentsButtonToggleButtonJs2['default']).attrs({
	                size: 's',
	                theme: 'normal',
	                text: 'Disabled',
	                pin: 'clear_round',
	                onCheckedChange: function onCheckedChange(checked) {
	                    return _this.setState({ buttonsDisabled: checked });
	                }
	            })])];

	            var pins = [undefined, 'round_clear', 'clear_round', 'round_brick', 'brick_round', 'brick_clear', 'clear_brick', 'brick_brick', 'clear_clear'];
	            var pinExample = [(0, _vidom.node)('br'), (0, _vidom.node)('table').attrs({
	                className: (0, _helpersBemClassJs2['default'])('XArea', { bordered: true }, 'XTable')
	            }).children([(0, _vidom.node)('tr').children(pins.map(function (pin) {
	                return (0, _vidom.node)('th').children(pin);
	            })), (0, _vidom.node)('tr').children(pins.map(function (pin) {
	                return (0, _vidom.node)('td').children((0, _vidom.node)(_componentsButtonButtonJs2['default']).attrs({ theme: 'normal', size: 's', pin: pin, text: 'Button' }));
	            }))])];

	            var modesExample = [(0, _vidom.node)('br'), (0, _vidom.node)('table').attrs({
	                className: (0, _helpersBemClassJs2['default'])('XArea', { bordered: true }, 'XTable')
	            }).children([(0, _vidom.node)('tr').children([(0, _vidom.node)('th').children('Link'), (0, _vidom.node)('th').children('Button'), (0, _vidom.node)('th').children('ToggleButton[mode=check]'), (0, _vidom.node)('th').children('ToggleButton[mode=radio]')]), (0, _vidom.node)('tr').children([(0, _vidom.node)('td').children((0, _vidom.node)(_componentsButtonLinkButtonJs2['default']).attrs({ theme: 'normal', size: 's', text: 'Button', url: 'http://yandex.ru', target: '_blank' })), (0, _vidom.node)('td').children((0, _vidom.node)(_componentsButtonButtonJs2['default']).attrs({ theme: 'normal', size: 's', text: 'Button' })), (0, _vidom.node)('td').children((0, _vidom.node)(_componentsButtonToggleButtonJs2['default']).attrs({ theme: 'normal', size: 's', mode: 'check', text: 'Button' })), (0, _vidom.node)('td').children((0, _vidom.node)(_componentsButtonToggleButtonJs2['default']).attrs({ theme: 'normal', size: 's', mode: 'radio', text: 'Button' }))])])];

	            return (0, _vidom.node)('div').attrs({ className: (0, _helpersBemClassJs2['default'])('ButtonExample') }).children(sizesExample.concat(pinExample).concat(modesExample));
	        }
	    }]);

	    return ButtonExample;
	})(_componentsStatefulComponentJs2['default']);

	exports['default'] = ButtonExample;
	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _vidom = __webpack_require__(1);

	var StatefulComponent = (function (_Component) {
	    _inherits(StatefulComponent, _Component);

	    function StatefulComponent() {
	        _classCallCheck(this, StatefulComponent);

	        _get(Object.getPrototypeOf(StatefulComponent.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(StatefulComponent, [{
	        key: 'onInit',
	        value: function onInit() {
	            var attrs = this.getAttrs();
	            this._prevState = this.getInitialState(attrs);
	            this._state = this._prevState;
	        }
	    }, {
	        key: 'getInitialState',
	        value: function getInitialState() {
	            return {};
	        }
	    }, {
	        key: 'setState',
	        value: function setState(state, silent) {
	            var _this = this;

	            this._prevState = this._state;
	            this._state = Object.assign({}, this._state, state);
	            silent || this.update(function () {
	                return _this._prevState = _this._state;
	            });

	            var attrs = this.getAttrs();
	            Object.keys(state).forEach(function (key) {
	                var observer = attrs['on' + key.charAt(0).toUpperCase() + key.slice(1) + 'Change'];
	                if (observer) {
	                    observer(_this._state[key], _this._prevState[key]);
	                }
	            });
	        }
	    }, {
	        key: 'getState',
	        value: function getState() {
	            return this._state;
	        }
	    }, {
	        key: 'getPrevState',
	        value: function getPrevState() {
	            return this._prevState;
	        }
	    }]);

	    return StatefulComponent;
	})(_vidom.Component);

	exports['default'] = StatefulComponent;
	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = bemClass;

	function bemClass(block, mods) {
	    for (var _len = arguments.length, extra = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	        extra[_key - 2] = arguments[_key];
	    }

	    var res = [block].concat(extra);

	    if (mods != undefined) {
	        Object.keys(mods).forEach(function (modName) {
	            var modVal = mods[modName];
	            if (modVal) {
	                res.push(block + '-' + modName + (typeof modVal === 'boolean' ? '' : '-' + modVal));
	            }
	        });
	    }

	    return res.join(' ');
	}

	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(35);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(37)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./XArea.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./XArea.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(36)();
	// imports


	// module
	exports.push([module.id, ".XArea\n{\n    position: relative;\n\n    display: inline-block;\n\n    padding: 10px;\n\n    vertical-align: top;\n\n    margin-bottom: 1em;\n}\n\n.XArea-squares\n{\n    background-image: linear-gradient(transparent, transparent), url('data:image/svg+xml,<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><g><path fill=\"#fff\" d=\"M0 0h16v16H0z\"/><path opacity=\".06\" fill=\"#000\" d=\"M0 0h8v8H0z\"/><path opacity=\".06\" fill=\"#000\" d=\"M8 8h8v8H8z\"/></g></g></svg>');\n}\n\n.XArea-bordered\n{\n    border: 1px dashed #ccccf4;\n}\n", ""]);

	// exports


/***/ },
/* 36 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	"use strict";

	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(39);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(37)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./XTable.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./XTable.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(36)();
	// imports


	// module
	exports.push([module.id, ".XTable\n{\n    border-collapse: collapse;\n    text-align: center;\n}\n\n.XTable td\n{\n    padding: 10px;\n}\n\n.XTable tr > th {\n    padding-left: 10px;\n    padding-right: 10px;\n}\n", ""]);

	// exports


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _vidom = __webpack_require__(1);

	var _StatefulComponent2 = __webpack_require__(32);

	var _StatefulComponent3 = _interopRequireDefault(_StatefulComponent2);

	var _helpersBemClass = __webpack_require__(33);

	var _helpersBemClass2 = _interopRequireDefault(_helpersBemClass);

	__webpack_require__(41);

	var Button = (function (_StatefulComponent) {
	    _inherits(Button, _StatefulComponent);

	    function Button() {
	        _classCallCheck(this, Button);

	        _get(Object.getPrototypeOf(Button.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Button, [{
	        key: 'getInitialState',
	        value: function getInitialState(_ref) {
	            var size = _ref.size;
	            var theme = _ref.theme;

	            return {
	                hovered: false,
	                pressed: false
	            };
	        }
	    }, {
	        key: 'getMods',
	        value: function getMods() {
	            var state = this.getState();
	            var attrs = this.getAttrs();
	            var obj = {};
	            ['hovered', 'pressed', 'checked'].forEach(function (key) {
	                return obj[key] = state[key];
	            });
	            ['size', 'theme', 'pin', 'disabled'].forEach(function (key) {
	                return obj[key] = attrs[key];
	            });
	            return obj;
	        }
	    }, {
	        key: '_tag',
	        value: function _tag() {
	            return 'button';
	        }
	    }, {
	        key: '_nodeAttrs',
	        value: function _nodeAttrs() {
	            var _this = this;

	            var attrs = this.getAttrs();
	            return {
	                className: (0, _helpersBemClass2['default'])('Button', this.getMods(), attrs.className),
	                'aria-pressed': this.getState().pressed,
	                disabled: this.getAttrs().disabled,
	                tabindex: this.getAttrs().disabled ? false : this.getAttrs().tabindex,
	                onMouseOver: function onMouseOver(e) {
	                    return _this._setStateIfPossible({ hovered: true });
	                },
	                onMouseOut: function onMouseOut(e) {
	                    return _this._setStateIfPossible({ hovered: false });
	                },
	                onMouseDown: function onMouseDown(e) {
	                    return _this._onMouseDown(e);
	                },
	                onMouseUp: function onMouseUp(e) {
	                    return _this._onMouseUp(e);
	                },
	                onKeyDown: function onKeyDown(e) {
	                    return _this._setStateIfPossible({ hovered: true });
	                },
	                onKeyUp: function onKeyUp(e) {
	                    return _this._setStateIfPossible({ hovered: true });
	                },
	                onClick: function onClick(e) {
	                    return _this._onClick(e);
	                }
	            };
	        }
	    }, {
	        key: 'onRender',
	        value: function onRender(_, children) {

	            return (0, _vidom.node)(this._tag()).attrs(this._nodeAttrs()).children(children || [(0, _vidom.node)(ButtonText).children(this.getAttrs().text)]);
	        }
	    }, {
	        key: '_setStateIfPossible',
	        value: function _setStateIfPossible(state) {
	            this.getAttrs().disabled || this.setState(state);
	        }
	    }, {
	        key: '_onMouseDown',
	        value: function _onMouseDown() {
	            this.getAttrs().disabled || this.setState({ pressed: true });
	        }
	    }, {
	        key: '_onMouseUp',
	        value: function _onMouseUp() {
	            this.setState({ pressed: false });
	        }
	    }, {
	        key: '_onClick',
	        value: function _onClick(e) {
	            this.getAttrs().onClick && this.getAttrs().onClick(e);
	        }
	    }]);

	    return Button;
	})(_StatefulComponent3['default']);

	var ButtonText = (function (_Component) {
	    _inherits(ButtonText, _Component);

	    function ButtonText() {
	        _classCallCheck(this, ButtonText);

	        _get(Object.getPrototypeOf(ButtonText.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(ButtonText, [{
	        key: 'onRender',
	        value: function onRender(_, children) {
	            return (0, _vidom.node)('span').attrs({ className: 'Button--text' }).children(children);
	        }
	    }]);

	    return ButtonText;
	})(_vidom.Component);

	Button.Text = ButtonText;

	exports['default'] = Button;
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(42);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(37)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./Button.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./Button.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(36)();
	// imports


	// module
	exports.push([module.id, "/**\n * 1. Значения padding и margin каждый браузер выставляет по-своему – сбрасываем в ноль.\n * 2. Не должно быть возможности выделить контент кнопки, в т.ч. кнопки-ссылки.\n * 3. У содержимого кнопок-ссылок не должно быть подчеркивания.\n * 4. Кнопка не предполагает многострочного содержимого.\n * 5. Чтобы FF под MacOS не делал blur после программного выставления фокуса по mousedown.\n *    Подробности: http://jsfiddle.net/mishaberezin/892yppts/10/.\n * 6. Для кнопок-ссылок.\n * 7. Убираем нативную подсветку на iOS и Android.\n * 8. В IE по дефолту hidden, в остальных браузерах visible, требуется нормализация.\n *    В пользу visible, т.к. мы используем тень для отображения фокуса.\n */\n.Button\n{\n    display: inline-block; /*6*/\n    overflow: visible; /*8*/\n\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    margin: 0; /*1*/\n    padding: 0; /*1*/\n\n    -moz-user-focus: ignore; /*5*/\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; /*2*/\n    white-space: nowrap; /*4*/\n    text-decoration: none; /*3*/\n\n    font-family: Arial, sans-serif;\n\n    -webkit-tap-highlight-color: rgba(0,0,0,0); /*7*/\n\n    cursor: pointer;\n}\n\n/**\n * Кнопка не должна реагировать на события мыши, если имеет атрибут disabled.\n * Нативная поддержка атрибута disabled для ссылок есть только в IE.\n * В других браузерах схожее поведение дает свойство pointer-events:none.\n *\n * NB:\n * - Фикс не избавляет от необходимости удалять ссылку из taborder.\n * - Свойство pointer-events не работает в Opera 12.\n */\n.Button-disabled\n{\n    cursor: default;\n    pointer-events: none;\n}\n\n/**\n * В FF 4+ у содержимого кнопки есть внутренняя обводка, которая используется для\n * индикации фокуса на кнопках с измененными css-свойствами border или background.\n * Обводка влияет на размеры, для нормализации с другими браузерами ее нужно убрать.\n * Подробности: http://stackoverflow.com/questions/8859908.\n */\n.Button::-moz-focus-inner\n{\n    padding: 0;\n\n    border: 0;\n}\n\n\n.Button--text\n{\n    position: relative; /*1*/\n\n    display: inline-block; /*2*/\n\n    resize: none; /*3*/\n    white-space: nowrap;\n    pointer-events: none; /*4*/\n}\n", ""]);

	// exports


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Button2 = __webpack_require__(40);

	var _Button3 = _interopRequireDefault(_Button2);

	var ToggleButton = (function (_Button) {
	    _inherits(ToggleButton, _Button);

	    function ToggleButton() {
	        _classCallCheck(this, ToggleButton);

	        _get(Object.getPrototypeOf(ToggleButton.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(ToggleButton, [{
	        key: 'getMods',
	        value: function getMods() {
	            var sup = _get(Object.getPrototypeOf(ToggleButton.prototype), 'getMods', this).call(this);
	            return Object.assign({}, sup, { checked: this.getState().checked });
	        }
	    }, {
	        key: 'getInitialState',
	        value: function getInitialState(attrs) {
	            var sup = _get(Object.getPrototypeOf(ToggleButton.prototype), 'getInitialState', this).call(this, attrs);
	            return Object.assign({}, sup, { checked: false });
	        }
	    }, {
	        key: '_onClick',
	        value: function _onClick(e) {
	            _get(Object.getPrototypeOf(ToggleButton.prototype), '_onClick', this).call(this, e);
	            this._setStateIfPossible({
	                checked: this.getAttrs().mode === 'radio' ? true : !this.getState().checked
	            });
	        }
	    }]);

	    return ToggleButton;
	})(_Button3['default']);

	exports['default'] = ToggleButton;
	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Button2 = __webpack_require__(40);

	var _Button3 = _interopRequireDefault(_Button2);

	var LinkButton = (function (_Button) {
	    _inherits(LinkButton, _Button);

	    function LinkButton() {
	        _classCallCheck(this, LinkButton);

	        _get(Object.getPrototypeOf(LinkButton.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(LinkButton, [{
	        key: '_tag',
	        value: function _tag() {
	            return 'a';
	        }
	    }, {
	        key: '_nodeAttrs',
	        value: function _nodeAttrs() {
	            var sup = _get(Object.getPrototypeOf(LinkButton.prototype), '_nodeAttrs', this).call(this);
	            var attrs = this.getAttrs();
	            return Object.assign({}, sup, {
	                href: attrs.url,
	                target: attrs.target
	            });
	        }
	    }]);

	    return LinkButton;
	})(_Button3['default']);

	exports['default'] = LinkButton;
	module.exports = exports['default'];

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(46);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(37)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./s.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./s.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(36)();
	// imports


	// module
	exports.push([module.id, ".Button-size-s\n{\n    height: 28px;\n\n    font-size: 13px;\n    line-height: 28px;\n}\n\n.Button-size-s .Button--text\n{\n    margin: 0 13px;\n}\n\n.Button-size-s .Button--icon\n{\n    width: 28px;\n}\n\n.Button-size-s .Button--icon.icon-type-arrow\n{\n    width: 31px;\n}\n\n.Button-size-s .Button--icon-side-left ~ .Button--text\n{\n    margin-left: 25px;\n}\n\n.Button-size-s .Button--icon-side-right ~ .Button--text\n{\n    margin-right: 25px;\n}\n", ""]);

	// exports


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(48);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(37)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./xs.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./xs.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(36)();
	// imports


	// module
	exports.push([module.id, ".Button-size-xs\n{\n    height: 24px;\n\n    font-size: 13px;\n    line-height: 24px;\n}\n\n.Button-size-xs .Button--text\n{\n    margin: 0 10px;\n}\n\n.Button-size-xs .Button--icon\n{\n    width: 24px;\n}\n\n.Button-size-xs .Button--icon.icon-type-arrow\n{\n    width: 27px;\n}\n\n.Button-size-xs .Button--icon-side-left ~ .Button--text\n{\n    margin-left: 22px;\n}\n\n.Button-size-xs .Button--icon-side-right ~ .Button--text\n{\n    margin-right: 22px;\n}\n", ""]);

	// exports


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(50);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(37)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./m.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./m.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(36)();
	// imports


	// module
	exports.push([module.id, "\n.Button-size-m\n{\n    height: 32px;\n\n    font-size: 15px;\n    line-height: 32px;\n}\n\n.Button-size-m .Button--text\n{\n    margin: 0 15px;\n}\n\n.Button-size-m .Button--icon\n{\n    width: 32px;\n}\n\n.Button-size-m .Button--icon.icon-type-arrow\n{\n    width: 35px;\n}\n\n.Button-size-m .Button--icon-side-left ~ .Button--text\n{\n    margin-left: 29px;\n}\n\n.Button-size-m .Button--icon-side-right ~ .Button--text\n{\n    margin-right: 29px;\n}\n\n", ""]);

	// exports


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(52);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(37)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./normal.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./normal.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(36)();
	// imports


	// module
	exports.push([module.id, ".Button-theme-normal\n{\n    position: relative;\n    z-index: 0;\n\n    color: #000;\n    border: none;\n    outline: none;\n    background: transparent;\n}\n\n/**\n * 1. Для IE8 применяется деградация на непрозрачный цвет.\n * 2. Полупрозрачные границы должны накладываться на общий фон, а не на фон самой кнопки.\n */\n.Button-theme-normal:before\n{\n    position: absolute;\n    z-index: -1;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n\n    content: '';\n\n    border: 1px solid;\n    border-color: rgba(0,0,0,.2); /*1*/\n    border-radius: 3px;\n    background-color: #fff;\n    -webkit-background-clip: padding-box;\n    background-clip: padding-box; /*2*/\n}\n\nhtml.utilityfocus .Button-theme-normal.Button-focused:before\n{\n    border-color: #fc0;\n    border-width: 2px;\n}\n\n.Button-theme-normal.Button-pressed:before\n{\n    background-color: #f3f1ed;\n}\n\n.Button-theme-normal.Button-checked:before\n{\n    border-color: rgba(153,122,0,.5);\n    background-color: #ffeba0;\n}\n\n.Button-theme-normal.Button-checked.Button-pressed:before\n{\n    border-color: rgba(129,103,0,.6);\n    background-color: #fee481;\n}\n\n/**\n * 1. Нельзя использовать border:none, т.к. в сочетании с анимированным border-color\n *    Chrome показывает черную рамку при переключении.\n *    Подробнее: http://jing.yandex-team.ru/files/karamadjong/2015-04-28-1218.swf?w=111&h=178\n */\n.Button-theme-normal.Button-disabled:before\n{\n    border-color: rgba(0,0,0,.08); /*1*/\n    background-color: rgba(0,0,0,.08);\n}\n\n.Button-theme-normal.Button-disabled > *\n{\n    opacity: .5;\n}\n\n.Button-theme-normal.Button-disabled.Button-checked:before\n{\n    border-color: rgba(0,0,0,.15);\n    background-color: rgba(0,0,0,.15);\n}\n\n/* border-width нужен для меняющейся толщины обводки при фокусе */\n.Button-theme-normal:before\n{\n    transition: .1s ease-out;\n    transition-property: border-color, border-width, background-color;\n}\n\n.Button-theme-normal.Button-hovered:before\n{\n    border-color: rgba(0,0,0,.3);\n}\n\n.Button-theme-normal.Button-checked.Button-hovered:before\n{\n    border-color: rgba(129,103,0,.6);\n}\n", ""]);

	// exports


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(54);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(37)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./round_brick.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./round_brick.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(36)();
	// imports


	// module
	exports.push([module.id, ".Button.Button-pin-round_brick:before\n{\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n", ""]);

	// exports


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(56);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(37)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./round_clear.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./round_clear.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(36)();
	// imports


	// module
	exports.push([module.id, ".Button.Button-pin-round_clear:before\n{\n    border-right-width: 0;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n\n", ""]);

	// exports


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(58);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(37)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./clear_round.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./clear_round.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(36)();
	// imports


	// module
	exports.push([module.id, ".Button.Button-pin-clear_round:before\n{\n    border-left-width: 0;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n", ""]);

	// exports


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(60);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(37)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./clear_brick.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./clear_brick.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(36)();
	// imports


	// module
	exports.push([module.id, ".Button.Button-pin-clear_brick:before\n{\n    border-left-width: 0;\n    border-radius: 0;\n}\n", ""]);

	// exports


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(62);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(37)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./brick_round.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./brick_round.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(36)();
	// imports


	// module
	exports.push([module.id, ".Button.Button-pin-brick_round:before\n{\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n", ""]);

	// exports


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(64);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(37)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./brick_clear.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./brick_clear.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(36)();
	// imports


	// module
	exports.push([module.id, ".Button.Button-pin-brick_clear:before\n{\n    border-right-width: 0;\n    border-radius: 0;\n}\n", ""]);

	// exports


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(66);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(37)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./brick_brick.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./brick_brick.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(36)();
	// imports


	// module
	exports.push([module.id, ".Button.Button-pin-brick_brick:before\n{\n    border-radius: 0;\n}\n", ""]);

	// exports


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(68);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(37)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./clear_clear.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./clear_clear.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(36)();
	// imports


	// module
	exports.push([module.id, ".Button.Button-pin-clear_clear:before\n{\n    border-right-width: 0;\n    border-left-width: 0;\n    border-radius: 0;\n}\n", ""]);

	// exports


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(70);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(37)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./ButtonExapmle.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./ButtonExapmle.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(36)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _componentsStatefulComponentJs = __webpack_require__(32);

	var _componentsStatefulComponentJs2 = _interopRequireDefault(_componentsStatefulComponentJs);

	var _helpersBemClassJs = __webpack_require__(33);

	var _helpersBemClassJs2 = _interopRequireDefault(_helpersBemClassJs);

	var _vidom = __webpack_require__(1);

	__webpack_require__(34);

	var _componentsInputInput = __webpack_require__(72);

	var _componentsInputInput2 = _interopRequireDefault(_componentsInputInput);

	__webpack_require__(77);

	__webpack_require__(79);

	var _componentsButtonButton = __webpack_require__(40);

	var _componentsButtonButton2 = _interopRequireDefault(_componentsButtonButton);

	__webpack_require__(45);

	__webpack_require__(51);

	__webpack_require__(57);

	var InputExample = (function (_StatefulComponent) {
	    _inherits(InputExample, _StatefulComponent);

	    function InputExample() {
	        _classCallCheck(this, InputExample);

	        _get(Object.getPrototypeOf(InputExample.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(InputExample, [{
	        key: 'getInitialState',
	        value: function getInitialState() {
	            return {
	                sendValue: ''
	            };
	        }
	    }, {
	        key: 'onRender',
	        value: function onRender() {
	            var _this = this;

	            return (0, _vidom.node)('div').children([(0, _vidom.node)('h2').children('Input'), (0, _vidom.node)('div').attrs({ className: (0, _helpersBemClassJs2['default'])('InputExample', null, (0, _helpersBemClassJs2['default'])('XArea', { bordered: true })) }).children([(0, _vidom.node)('div').children([(0, _vidom.node)(_componentsInputInput2['default']).attrs({
	                theme: 'normal',
	                size: 's',
	                initialValue: 'test',
	                onValueChange: function onValueChange(val, old) {
	                    return console.log(val, old);
	                }
	            })]), (0, _vidom.node)('br'), (0, _vidom.node)('div').children([(0, _vidom.node)(_componentsInputInput2['default']).attrs({
	                theme: 'normal',
	                size: 's',
	                placeholder: 'Input with placeholder',
	                onValueChange: function onValueChange(val, _) {
	                    return _this.setState({ sendValue: val });
	                }
	            }), (0, _vidom.node)(_componentsButtonButton2['default']).attrs({
	                size: 's',
	                theme: 'normal',
	                pin: 'clear_round',
	                disabled: this.getState().sendValue.length === 0,
	                text: 'Send'
	            })])])]);
	        }
	    }]);

	    return InputExample;
	})(_componentsStatefulComponentJs2['default']);

	exports['default'] = InputExample;
	module.exports = exports['default'];

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _vidom = __webpack_require__(1);

	var _StatefulComponent2 = __webpack_require__(32);

	var _StatefulComponent3 = _interopRequireDefault(_StatefulComponent2);

	var _helpersBemClass = __webpack_require__(33);

	var _helpersBemClass2 = _interopRequireDefault(_helpersBemClass);

	__webpack_require__(73);

	var Input = (function (_StatefulComponent) {
	    _inherits(Input, _StatefulComponent);

	    function Input() {
	        _classCallCheck(this, Input);

	        _get(Object.getPrototypeOf(Input.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Input, [{
	        key: 'getInitialState',
	        value: function getInitialState(attrs) {
	            console.log('set initial value:', attrs.initialValue);
	            return {
	                value: attrs.initialValue || '',
	                clearHovered: false
	            };
	        }
	    }, {
	        key: 'getMods',
	        value: function getMods() {
	            var state = this.getState();
	            var attrs = this.getAttrs();
	            var obj = {};
	            ['hovered', 'focused'].forEach(function (key) {
	                return obj[key] = state[key];
	            });
	            ['size', 'theme', 'disabled'].forEach(function (key) {
	                return obj[key] = attrs[key];
	            });
	            return obj;
	        }
	    }, {
	        key: 'onRender',
	        value: function onRender(attrs) {
	            var _this = this;

	            return (0, _vidom.node)('div').attrs({ className: (0, _helpersBemClass2['default'])('Input', this.getMods(), attrs.className) }).children([(0, _vidom.node)('span').attrs({
	                className: (0, _helpersBemClass2['default'])('Input--clear', {
	                    visible: this.getState().value.length > 0,
	                    hovered: this.getState().clearHovered
	                }),
	                onMouseOver: function onMouseOver(e) {
	                    return _this._setStateIfPossible({ clearHovered: true });
	                },
	                onMouseOut: function onMouseOut(e) {
	                    return _this._setStateIfPossible({ clearHovered: false });
	                },
	                onMouseDown: function onMouseDown(e) {
	                    return _this._onClearMouseDown(e);
	                }
	            }), (0, _vidom.node)('input').attrs({
	                className: (0, _helpersBemClass2['default'])('Input--control'),
	                placeholder: this.getAttrs().placeholder,
	                value: this.getState().value,
	                onChange: function onChange(e) {
	                    return _this._onChange(e);
	                },
	                onFocus: function onFocus(e) {
	                    return _this._setStateIfPossible({ focused: true });
	                },
	                onBlur: function onBlur(e) {
	                    return _this._setStateIfPossible({ focused: false });
	                },
	                onMouseOver: function onMouseOver(e) {
	                    return _this._setStateIfPossible({ hovered: true });
	                },
	                onMouseOut: function onMouseOut(e) {
	                    return _this._setStateIfPossible({ hovered: false });
	                }
	            })]);
	        }
	    }, {
	        key: '_setStateIfPossible',
	        value: function _setStateIfPossible(state) {
	            this.getAttrs().disabled || this.setState(state);
	        }
	    }, {
	        key: '_onChange',
	        value: function _onChange(e) {
	            this.setState({ value: e.target.value });
	        }
	    }, {
	        key: '_onClearMouseDown',
	        value: function _onClearMouseDown(e) {
	            var _this2 = this;

	            if (this.getState().focused) {
	                e.preventDefault();
	            } else {
	                setTimeout(function () {
	                    return _this2._setStateIfPossible({ focused: true });
	                }, 0);
	            }
	            this._setStateIfPossible({ value: '' });
	        }
	    }]);

	    return Input;
	})(_StatefulComponent3['default']);

	var InputControl = (function (_Component) {
	    _inherits(InputControl, _Component);

	    function InputControl() {
	        _classCallCheck(this, InputControl);

	        _get(Object.getPrototypeOf(InputControl.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(InputControl, [{
	        key: 'onRender',
	        value: function onRender(attrs) {
	            return (0, _vidom.node)('input').attrs({ value: attrs.value });
	        }
	    }]);

	    return InputControl;
	})(_vidom.Component);

	exports['default'] = Input;
	module.exports = exports['default'];

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(74);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(37)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./Input.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./Input.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(36)();
	// imports


	// module
	exports.push([module.id, ".Input\n{\n    position: relative;\n\n    display: inline-block;\n\n    width: 300px;\n}\n\n.Input:before\n{\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n\n    padding: 0;\n\n    content: '';\n    z-index: -1;\n}\n\n\n.Input--control\n{\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n\n    font-size: 100%;\n\n    color: #000;\n    border: 0 solid transparent;\n    outline: 0;\n    background: none;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n\n    -webkit-appearance: none;\n    width: 100%;\n}\n\n/* Позиционируется относительно input--box.\n * Важно, чтобы правая граница элемента с очищающим крестиком\n * совпадала с правой границей input--box, иначе появляется\n * возможность кликнуть по правой границе input--box. */\n.Input--clear\n{\n    position: absolute;\n    z-index: 5;\n    top: 0;\n    right: 0;\n\n    visibility: hidden;\n\n    margin: 0;\n    padding: 0;\n\n    pointer-events: none;\n\n    opacity: 0;\n    background-repeat: no-repeat;\n    background-position: 50% 50%;\n\n    transition: visibility 0s linear .1s, opacity .1s ease-out;\n}\n\n.Input--clear-visible\n{\n    visibility: visible;\n\n    cursor: pointer;\n    pointer-events: auto;\n\n    opacity: .3;\n\n    transition: opacity .1s ease-out;\n}\n\n.Input--clear-visible.Input--clear-hovered\n{\n    opacity: .8;\n}\n\n.Input-disabled .Input--clear\n{\n    display: none;\n}\n\n.Input-size-xs .Input--clear,\n.Input-size-s .Input--clear\n{\n    background-image: url(" + __webpack_require__(75) + ");\n}\n\n.Input-size-m .Input--clear\n{\n    background-image: url(" + __webpack_require__(76) + ");\n}\n", ""]);

	// exports


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "600eb3af6c2e4dff4b19466cae25aaca.svg"

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "94e54ee299b2e0f7e33435bda9ffdd38.svg"

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(78);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(37)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./s.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./s.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(36)();
	// imports


	// module
	exports.push([module.id, ".Input-size-s\n{\n    font-size: 13px;\n    line-height: 28px;\n}\n\n/* Делаем отступы с помощью border, т.к. в IE10+ при длинном тексте в инпуте padding игнорируется\n   https://st.yandex-team.ru/ISLCOMPONENTS-865\n*/\n.Input-size-s .Input--control,\n.Input-size-s .Input--hint\n{\n    height: 28px;\n\n    border-right-width: 8px;\n    border-left-width: 8px;\n}\n\n.Input-size-s .Input--icon\n{\n    width: 28px;\n}\n\n.Input-size-s .Input--clear\n{\n    width: 28px;\n    height: 28px;\n}\n\n.Input-size-s .Input--icon-side-right ~ .Input--clear\n{\n    right: 14px;\n}\n\n.Input-size-s .Input--clear-visible ~ .Input--control\n{\n    border-right-width: 22px;\n}\n\n.Input-size-s .Input--icon-side-right ~ .Input--clear-visibility-visible ~ .Input--control\n{\n    border-right-width: 36px;\n}\n\n.Input-size-s .Input--icon-side-right ~ .Input--control,\n.Input-size-s .Input--hint.Input--hint-rpad-yes\n{\n    border-right-width: 28px;\n}\n\n.Input-size-s .Input--icon-side-left ~ .Input--control,\n.Input-size-s .Input--hint.Input--hint-lpad-yes\n{\n    border-left-width: 28px;\n}\n\n.Input-size-s.Input-type-textarea .Input--control\n{\n    padding: 4px 6px 0;\n}\n\n.Input-size-s.Input-type-textarea .Input--clear ~ .Input--control\n{\n    padding-right: 22px;\n}\n", ""]);

	// exports


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(80);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(37)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./normal.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./normal.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(36)();
	// imports


	// module
	exports.push([module.id, ".Input-theme-normal,\n.Input-theme-normal .Input--control\n{\n    font-family: Arial, sans-serif;\n\n    color: #000;\n}\n\n.Input-disabled.Input-theme-normal .Input--control\n{\n    color: #aaa;\n}\n\n.Input-theme-normal .Input--control::-webkit-input-placeholder\n{\n    color: #999;\n}\n\n.Input-theme-normal .Input--control::-moz-placeholder\n{\n    opacity: 1; /*В firefox полупрозрачный по умолчанию*/\n    color: #999;\n}\n\n.Input-theme-normal .Input--control:-ms-input-placeholder\n{\n    color: #999;\n}\n\n.Input-theme-normal:before\n{\n    border: 1px solid rgba(0,0,0,.2);\n    background-color: #fff;\n    background-clip: padding-box;\n}\n\n.Input-theme-normal.Input-hovered:before\n{\n    border-color: rgba(0,0,0,.3);\n}\n\n.Input-theme-normal.Input-focused:before\n{\n    border: 2px solid #ffdb4d;\n}\n\n.Input-theme-normal.Input-disabled:before\n{\n    border-color: transparent;\n    background-color: rgba(0,0,0,.08);\n}\n\n.Input-theme-normal:before\n{\n    transition: .1s ease-out;\n    transition-property: border-color, border-width;\n}\n", ""]);

	// exports


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(82);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(37)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./app.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./app.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(36)();
	// imports


	// module
	exports.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: Arial, sans-serif;\n    font-size: 13px;\n}\n\nh1, h2, h3, h4, h5, h5, p\n{\n    margin-bottom: 1em;\n}\n\n\n.app\n{\n    padding: 20px;\n}\n\n.app > .Button {\n    margin-right: 1em;\n}\n", ""]);

	// exports


/***/ }
/******/ ]);
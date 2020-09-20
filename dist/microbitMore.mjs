function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
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

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/**
 * Block argument types
 * @enum {string}
 */
var ArgumentType = {
  /**
   * Numeric value with angle picker
   */
  ANGLE: 'angle',

  /**
   * Boolean value with hexagonal placeholder
   */
  BOOLEAN: 'Boolean',

  /**
   * Numeric value with color picker
   */
  COLOR: 'color',

  /**
   * Numeric value with text field
   */
  NUMBER: 'number',

  /**
   * String value with text field
   */
  STRING: 'string',

  /**
   * String value with matrix field
   */
  MATRIX: 'matrix',

  /**
   * MIDI note number with note picker (piano) field
   */
  NOTE: 'note',

  /**
   * Inline image on block (as part of the label)
   */
  IMAGE: 'image'
};
var argumentType = ArgumentType;

/**
 * Types of block
 * @enum {string}
 */
var BlockType = {
  /**
   * Boolean reporter with hexagonal shape
   */
  BOOLEAN: 'Boolean',

  /**
   * A button (not an actual block) for some special action, like making a variable
   */
  BUTTON: 'button',

  /**
   * Command block
   */
  COMMAND: 'command',

  /**
   * Specialized command block which may or may not run a child branch
   * The thread continues with the next block whether or not a child branch ran.
   */
  CONDITIONAL: 'conditional',

  /**
   * Specialized hat block with no implementation function
   * This stack only runs if the corresponding event is emitted by other code.
   */
  EVENT: 'event',

  /**
   * Hat block which conditionally starts a block stack
   */
  HAT: 'hat',

  /**
   * Specialized command block which may or may not run a child branch
   * If a child branch runs, the thread evaluates the loop block again.
   */
  LOOP: 'loop',

  /**
   * General reporter with numeric or string value
   */
  REPORTER: 'reporter'
};
var blockType = BlockType;

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

function M() {
  this._events = {};
}

M.prototype = {
  on: function on(ev, cb) {
    this._events || (this._events = {});
    var e = this._events;
    (e[ev] || (e[ev] = [])).push(cb);
    return this;
  },
  removeListener: function removeListener(ev, cb) {
    var e = this._events[ev] || [],
        i;

    for (i = e.length - 1; i >= 0 && e[i]; i--) {
      if (e[i] === cb || e[i].cb === cb) {
        e.splice(i, 1);
      }
    }
  },
  removeAllListeners: function removeAllListeners(ev) {
    if (!ev) {
      this._events = {};
    } else {
      this._events[ev] && (this._events[ev] = []);
    }
  },
  listeners: function listeners(ev) {
    return this._events ? this._events[ev] || [] : [];
  },
  emit: function emit(ev) {
    this._events || (this._events = {});
    var args = Array.prototype.slice.call(arguments, 1),
        i,
        e = this._events[ev] || [];

    for (i = e.length - 1; i >= 0 && e[i]; i--) {
      e[i].apply(this, args);
    }

    return this;
  },
  when: function when(ev, cb) {
    return this.once(ev, cb, true);
  },
  once: function once(ev, cb, when) {
    if (!cb) return this;

    function c() {
      if (!when) this.removeListener(ev, c);
      if (cb.apply(this, arguments) && when) this.removeListener(ev, c);
    }

    c.cb = cb;
    this.on(ev, c);
    return this;
  }
};

M.mixin = function (dest) {
  var o = M.prototype,
      k;

  for (k in o) {
    o.hasOwnProperty(k) && (dest.prototype[k] = o[k]);
  }
};

var microee = M;

function Transform() {}

microee.mixin(Transform); // The write() signature is different from Node's
// --> makes it much easier to work with objects in logs.
// One of the lessons from v1 was that it's better to target
// a good browser rather than the lowest common denominator
// internally.
// If you want to use external streams, pipe() to ./stringify.js first.

Transform.prototype.write = function (name, level, args) {
  this.emit('item', name, level, args);
};

Transform.prototype.end = function () {
  this.emit('end');
  this.removeAllListeners();
};

Transform.prototype.pipe = function (dest) {
  var s = this; // prevent double piping

  s.emit('unpipe', dest); // tell the dest that it's being piped to

  dest.emit('pipe', s);

  function onItem() {
    dest.write.apply(dest, Array.prototype.slice.call(arguments));
  }

  function onEnd() {
    !dest._isStdio && dest.end();
  }

  s.on('item', onItem);
  s.on('end', onEnd);
  s.when('unpipe', function (from) {
    var match = from === dest || typeof from == 'undefined';

    if (match) {
      s.removeListener('item', onItem);
      s.removeListener('end', onEnd);
      dest.emit('unpipe');
    }

    return match;
  });
  return dest;
};

Transform.prototype.unpipe = function (from) {
  this.emit('unpipe', from);
  return this;
};

Transform.prototype.format = function (dest) {
  throw new Error(['Warning: .format() is deprecated in Minilog v2! Use .pipe() instead. For example:', 'var Minilog = require(\'minilog\');', 'Minilog', '  .pipe(Minilog.backends.console.formatClean)', '  .pipe(Minilog.backends.console);'].join('\n'));
};

Transform.mixin = function (dest) {
  var o = Transform.prototype,
      k;

  for (k in o) {
    o.hasOwnProperty(k) && (dest.prototype[k] = o[k]);
  }
};

var transform = Transform;

var levelMap = {
  debug: 1,
  info: 2,
  warn: 3,
  error: 4
};

function Filter() {
  this.enabled = true;
  this.defaultResult = true;
  this.clear();
}

transform.mixin(Filter); // allow all matching, with level >= given level

Filter.prototype.allow = function (name, level) {
  this._white.push({
    n: name,
    l: levelMap[level]
  });

  return this;
}; // deny all matching, with level <= given level


Filter.prototype.deny = function (name, level) {
  this._black.push({
    n: name,
    l: levelMap[level]
  });

  return this;
};

Filter.prototype.clear = function () {
  this._white = [];
  this._black = [];
  return this;
};

function test(rule, name) {
  // use .test for RegExps
  return rule.n.test ? rule.n.test(name) : rule.n == name;
}

Filter.prototype.test = function (name, level) {
  var i,
      len = Math.max(this._white.length, this._black.length);

  for (i = 0; i < len; i++) {
    if (this._white[i] && test(this._white[i], name) && levelMap[level] >= this._white[i].l) {
      return true;
    }

    if (this._black[i] && test(this._black[i], name) && levelMap[level] <= this._black[i].l) {
      return false;
    }
  }

  return this.defaultResult;
};

Filter.prototype.write = function (name, level, args) {
  if (!this.enabled || this.test(name, level)) {
    return this.emit('item', name, level, args);
  }
};

var filter = Filter;

var minilog = createCommonjsModule(function (module, exports) {
  var log = new transform(),
      slice = Array.prototype.slice;

  exports = module.exports = function create(name) {
    var o = function o() {
      log.write(name, undefined, slice.call(arguments));
      return o;
    };

    o.debug = function () {
      log.write(name, 'debug', slice.call(arguments));
      return o;
    };

    o.info = function () {
      log.write(name, 'info', slice.call(arguments));
      return o;
    };

    o.warn = function () {
      log.write(name, 'warn', slice.call(arguments));
      return o;
    };

    o.error = function () {
      log.write(name, 'error', slice.call(arguments));
      return o;
    };

    o.log = o.debug; // for interface compliance with Node and browser consoles

    o.suggest = exports.suggest;
    o.format = log.format;
    return o;
  }; // filled in separately


  exports.defaultBackend = exports.defaultFormatter = null;

  exports.pipe = function (dest) {
    return log.pipe(dest);
  };

  exports.end = exports.unpipe = exports.disable = function (from) {
    return log.unpipe(from);
  };

  exports.Transform = transform;
  exports.Filter = filter; // this is the default filter that's applied when .enable() is called normally
  // you can bypass it completely and set up your own pipes

  exports.suggest = new filter();

  exports.enable = function () {
    if (exports.defaultFormatter) {
      return log.pipe(exports.suggest) // filter
      .pipe(exports.defaultFormatter) // formatter
      .pipe(exports.defaultBackend); // backend
    }

    return log.pipe(exports.suggest) // filter
    .pipe(exports.defaultBackend); // formatter
  };
});

var hex = {
  black: '#000',
  red: '#c23621',
  green: '#25bc26',
  yellow: '#bbbb00',
  blue: '#492ee1',
  magenta: '#d338d3',
  cyan: '#33bbc8',
  gray: '#808080',
  purple: '#708'
};

function color(fg, isInverse) {
  if (isInverse) {
    return 'color: #fff; background: ' + hex[fg] + ';';
  } else {
    return 'color: ' + hex[fg] + ';';
  }
}

var util = color;

var colors = {
  debug: ['cyan'],
  info: ['purple'],
  warn: ['yellow', true],
  error: ['red', true]
},
    logger = new transform();

logger.write = function (name, level, args) {
  var fn = console.log;

  if (console[level] && console[level].apply) {
    fn = console[level];
    fn.apply(console, ['%c' + name + ' %c' + level, util('gray'), util.apply(util, colors[level])].concat(args));
  }
}; // NOP, because piping the formatted logs can only cause trouble.


logger.pipe = function () {};

var color_1 = logger;

var colors$1 = {
  debug: ['gray'],
  info: ['purple'],
  warn: ['yellow', true],
  error: ['red', true]
},
    logger$1 = new transform();

logger$1.write = function (name, level, args) {
  var fn = console.log;

  if (level != 'debug' && console[level]) {
    fn = console[level];
  }

  var i = 0;

  if (level != 'info') {
    for (; i < args.length; i++) {
      if (typeof args[i] != 'string') break;
    }

    fn.apply(console, ['%c' + name + ' ' + args.slice(0, i).join(' '), util.apply(util, colors$1[level])].concat(args.slice(i)));
  } else {
    fn.apply(console, ['%c' + name, util.apply(util, colors$1[level])].concat(args));
  }
}; // NOP, because piping the formatted logs can only cause trouble.


logger$1.pipe = function () {};

var minilog$1 = logger$1;

var newlines = /\n+$/,
    logger$2 = new transform();

logger$2.write = function (name, level, args) {
  var i = args.length - 1;

  if (typeof console === 'undefined' || !console.log) {
    return;
  }

  if (console.log.apply) {
    return console.log.apply(console, [name, level].concat(args));
  } else if (JSON && JSON.stringify) {
    // console.log.apply is undefined in IE8 and IE9
    // for IE8/9: make console.log at least a bit less awful
    if (args[i] && typeof args[i] == 'string') {
      args[i] = args[i].replace(newlines, '');
    }

    try {
      for (i = 0; i < args.length; i++) {
        args[i] = JSON.stringify(args[i]);
      }
    } catch (e) {}

    console.log(args.join(' '));
  }
};

logger$2.formatters = ['color', 'minilog'];
logger$2.color = color_1;
logger$2.minilog = minilog$1;
var console_1 = logger$2;

var cache = [];
var logger$3 = new transform();

logger$3.write = function (name, level, args) {
  cache.push([name, level, args]);
}; // utility functions


logger$3.get = function () {
  return cache;
};

logger$3.empty = function () {
  cache = [];
};

var array = logger$3;

var cache$1 = false;
var logger$4 = new transform();

logger$4.write = function (name, level, args) {
  if (typeof window == 'undefined' || typeof JSON == 'undefined' || !JSON.stringify || !JSON.parse) return;

  try {
    if (!cache$1) {
      cache$1 = window.localStorage.minilog ? JSON.parse(window.localStorage.minilog) : [];
    }

    cache$1.push([new Date().toString(), name, level, args]);
    window.localStorage.minilog = JSON.stringify(cache$1);
  } catch (e) {}
};

var localstorage = logger$4;

var cid = new Date().valueOf().toString(36);

function AjaxLogger(options) {
  this.url = options.url || '';
  this.cache = [];
  this.timer = null;
  this.interval = options.interval || 30 * 1000;
  this.enabled = true;
  this.jQuery = window.jQuery;
  this.extras = {};
}

transform.mixin(AjaxLogger);

AjaxLogger.prototype.write = function (name, level, args) {
  if (!this.timer) {
    this.init();
  }

  this.cache.push([name, level].concat(args));
};

AjaxLogger.prototype.init = function () {
  if (!this.enabled || !this.jQuery) return;
  var self = this;
  this.timer = setTimeout(function () {
    var i,
        logs = [],
        ajaxData,
        url = self.url;
    if (self.cache.length == 0) return self.init(); // Test each log line and only log the ones that are valid (e.g. don't have circular references).
    // Slight performance hit but benefit is we log all valid lines.

    for (i = 0; i < self.cache.length; i++) {
      try {
        JSON.stringify(self.cache[i]);
        logs.push(self.cache[i]);
      } catch (e) {}
    }

    if (self.jQuery.isEmptyObject(self.extras)) {
      ajaxData = JSON.stringify({
        logs: logs
      });
      url = self.url + '?client_id=' + cid;
    } else {
      ajaxData = JSON.stringify(self.jQuery.extend({
        logs: logs
      }, self.extras));
    }

    self.jQuery.ajax(url, {
      type: 'POST',
      cache: false,
      processData: false,
      data: ajaxData,
      contentType: 'application/json',
      timeout: 10000
    }).success(function (data, status, jqxhr) {
      if (data.interval) {
        self.interval = Math.max(1000, data.interval);
      }
    }).error(function () {
      self.interval = 30000;
    }).always(function () {
      self.init();
    });
    self.cache = [];
  }, this.interval);
};

AjaxLogger.prototype.end = function () {}; // wait until jQuery is defined. Useful if you don't control the load order.


AjaxLogger.jQueryWait = function (onDone) {
  if (typeof window !== 'undefined' && (window.jQuery || window.$)) {
    return onDone(window.jQuery || window.$);
  } else if (typeof window !== 'undefined') {
    setTimeout(function () {
      AjaxLogger.jQueryWait(onDone);
    }, 200);
  }
};

var jquery_simple = AjaxLogger;

var web = createCommonjsModule(function (module, exports) {
  var oldEnable = minilog.enable,
      oldDisable = minilog.disable,
      isChrome = typeof navigator != 'undefined' && /chrome/i.test(navigator.userAgent); // Use a more capable logging backend if on Chrome

  minilog.defaultBackend = isChrome ? console_1.minilog : console_1; // apply enable inputs from localStorage and from the URL

  if (typeof window != 'undefined') {
    try {
      minilog.enable(JSON.parse(window.localStorage['minilogSettings']));
    } catch (e) {}

    if (window.location && window.location.search) {
      var match = RegExp('[?&]minilog=([^&]*)').exec(window.location.search);
      match && minilog.enable(decodeURIComponent(match[1]));
    }
  } // Make enable also add to localStorage


  minilog.enable = function () {
    oldEnable.call(minilog, true);

    try {
      window.localStorage['minilogSettings'] = JSON.stringify(true);
    } catch (e) {}

    return this;
  };

  minilog.disable = function () {
    oldDisable.call(minilog);

    try {
      delete window.localStorage.minilogSettings;
    } catch (e) {}

    return this;
  };

  exports = module.exports = minilog;
  exports.backends = {
    array: array,
    browser: minilog.defaultBackend,
    localStorage: localstorage,
    jQuery: jquery_simple
  };
});

web.enable();
var log = web('vm');

var Color = /*#__PURE__*/function () {
  function Color() {
    _classCallCheck(this, Color);
  }

  _createClass(Color, null, [{
    key: "decimalToHex",

    /**
     * Convert a Scratch decimal color to a hex string, #RRGGBB.
     * @param {number} decimal RGB color as a decimal.
     * @return {string} RGB color as #RRGGBB hex string.
     */
    value: function decimalToHex(decimal) {
      if (decimal < 0) {
        decimal += 0xFFFFFF + 1;
      }

      var hex = Number(decimal).toString(16);
      hex = "#".concat('000000'.substr(0, 6 - hex.length)).concat(hex);
      return hex;
    }
    /**
     * Convert a Scratch decimal color to an RGB color object.
     * @param {number} decimal RGB color as decimal.
     * @return {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     */

  }, {
    key: "decimalToRgb",
    value: function decimalToRgb(decimal) {
      var a = decimal >> 24 & 0xFF;
      var r = decimal >> 16 & 0xFF;
      var g = decimal >> 8 & 0xFF;
      var b = decimal & 0xFF;
      return {
        r: r,
        g: g,
        b: b,
        a: a > 0 ? a : 255
      };
    }
    /**
     * Convert a hex color (e.g., F00, #03F, #0033FF) to an RGB color object.
     * CC-BY-SA Tim Down:
     * https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
     * @param {!string} hex Hex representation of the color.
     * @return {RGBObject} null on failure, or rgb: {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     */

  }, {
    key: "hexToRgb",
    value: function hexToRgb(hex) {
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
      });
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    }
    /**
     * Convert an RGB color object to a hex color.
     * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     * @return {!string} Hex representation of the color.
     */

  }, {
    key: "rgbToHex",
    value: function rgbToHex(rgb) {
      return Color.decimalToHex(Color.rgbToDecimal(rgb));
    }
    /**
     * Convert an RGB color object to a Scratch decimal color.
     * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     * @return {!number} Number representing the color.
     */

  }, {
    key: "rgbToDecimal",
    value: function rgbToDecimal(rgb) {
      return (rgb.r << 16) + (rgb.g << 8) + rgb.b;
    }
    /**
    * Convert a hex color (e.g., F00, #03F, #0033FF) to a decimal color number.
    * @param {!string} hex Hex representation of the color.
    * @return {!number} Number representing the color.
    */

  }, {
    key: "hexToDecimal",
    value: function hexToDecimal(hex) {
      return Color.rgbToDecimal(Color.hexToRgb(hex));
    }
    /**
     * Convert an HSV color to RGB format.
     * @param {HSVObject} hsv - {h: hue [0,360), s: saturation [0,1], v: value [0,1]}
     * @return {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     */

  }, {
    key: "hsvToRgb",
    value: function hsvToRgb(hsv) {
      var h = hsv.h % 360;
      if (h < 0) h += 360;
      var s = Math.max(0, Math.min(hsv.s, 1));
      var v = Math.max(0, Math.min(hsv.v, 1));
      var i = Math.floor(h / 60);
      var f = h / 60 - i;
      var p = v * (1 - s);
      var q = v * (1 - s * f);
      var t = v * (1 - s * (1 - f));
      var r;
      var g;
      var b;

      switch (i) {
        default:
        case 0:
          r = v;
          g = t;
          b = p;
          break;

        case 1:
          r = q;
          g = v;
          b = p;
          break;

        case 2:
          r = p;
          g = v;
          b = t;
          break;

        case 3:
          r = p;
          g = q;
          b = v;
          break;

        case 4:
          r = t;
          g = p;
          b = v;
          break;

        case 5:
          r = v;
          g = p;
          b = q;
          break;
      }

      return {
        r: Math.floor(r * 255),
        g: Math.floor(g * 255),
        b: Math.floor(b * 255)
      };
    }
    /**
     * Convert an RGB color to HSV format.
     * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     * @return {HSVObject} hsv - {h: hue [0,360), s: saturation [0,1], v: value [0,1]}
     */

  }, {
    key: "rgbToHsv",
    value: function rgbToHsv(rgb) {
      var r = rgb.r / 255;
      var g = rgb.g / 255;
      var b = rgb.b / 255;
      var x = Math.min(Math.min(r, g), b);
      var v = Math.max(Math.max(r, g), b); // For grays, hue will be arbitrarily reported as zero. Otherwise, calculate

      var h = 0;
      var s = 0;

      if (x !== v) {
        var f = r === x ? g - b : g === x ? b - r : r - g;
        var i = r === x ? 3 : g === x ? 5 : 1;
        h = (i - f / (v - x)) * 60 % 360;
        s = (v - x) / v;
      }

      return {
        h: h,
        s: s,
        v: v
      };
    }
    /**
     * Linear interpolation between rgb0 and rgb1.
     * @param {RGBObject} rgb0 - the color corresponding to fraction1 <= 0.
     * @param {RGBObject} rgb1 - the color corresponding to fraction1 >= 1.
     * @param {number} fraction1 - the interpolation parameter. If this is 0.5, for example, mix the two colors equally.
     * @return {RGBObject} the interpolated color.
     */

  }, {
    key: "mixRgb",
    value: function mixRgb(rgb0, rgb1, fraction1) {
      if (fraction1 <= 0) return rgb0;
      if (fraction1 >= 1) return rgb1;
      var fraction0 = 1 - fraction1;
      return {
        r: fraction0 * rgb0.r + fraction1 * rgb1.r,
        g: fraction0 * rgb0.g + fraction1 * rgb1.g,
        b: fraction0 * rgb0.b + fraction1 * rgb1.b
      };
    }
  }, {
    key: "RGB_BLACK",

    /**
     * @typedef {object} RGBObject - An object representing a color in RGB format.
     * @property {number} r - the red component, in the range [0, 255].
     * @property {number} g - the green component, in the range [0, 255].
     * @property {number} b - the blue component, in the range [0, 255].
     */

    /**
     * @typedef {object} HSVObject - An object representing a color in HSV format.
     * @property {number} h - hue, in the range [0-359).
     * @property {number} s - saturation, in the range [0,1].
     * @property {number} v - value, in the range [0,1].
     */

    /** @type {RGBObject} */
    get: function get() {
      return {
        r: 0,
        g: 0,
        b: 0
      };
    }
    /** @type {RGBObject} */

  }, {
    key: "RGB_WHITE",
    get: function get() {
      return {
        r: 255,
        g: 255,
        b: 255
      };
    }
  }]);

  return Color;
}();

var color$1 = Color;

/**
 * @fileoverview
 * Utilities for casting and comparing Scratch data-types.
 * Scratch behaves slightly differently from JavaScript in many respects,
 * and these differences should be encapsulated below.
 * For example, in Scratch, add(1, join("hello", world")) -> 1.
 * This is because "hello world" is cast to 0.
 * In JavaScript, 1 + Number("hello" + "world") would give you NaN.
 * Use when coercing a value before computation.
 */

var Cast = /*#__PURE__*/function () {
  function Cast() {
    _classCallCheck(this, Cast);
  }

  _createClass(Cast, null, [{
    key: "toNumber",

    /**
     * Scratch cast to number.
     * Treats NaN as 0.
     * In Scratch 2.0, this is captured by `interp.numArg.`
     * @param {*} value Value to cast to number.
     * @return {number} The Scratch-casted number value.
     */
    value: function toNumber(value) {
      // If value is already a number we don't need to coerce it with
      // Number().
      if (typeof value === 'number') {
        // Scratch treats NaN as 0, when needed as a number.
        // E.g., 0 + NaN -> 0.
        if (Number.isNaN(value)) {
          return 0;
        }

        return value;
      }

      var n = Number(value);

      if (Number.isNaN(n)) {
        // Scratch treats NaN as 0, when needed as a number.
        // E.g., 0 + NaN -> 0.
        return 0;
      }

      return n;
    }
    /**
     * Scratch cast to boolean.
     * In Scratch 2.0, this is captured by `interp.boolArg.`
     * Treats some string values differently from JavaScript.
     * @param {*} value Value to cast to boolean.
     * @return {boolean} The Scratch-casted boolean value.
     */

  }, {
    key: "toBoolean",
    value: function toBoolean(value) {
      // Already a boolean?
      if (typeof value === 'boolean') {
        return value;
      }

      if (typeof value === 'string') {
        // These specific strings are treated as false in Scratch.
        if (value === '' || value === '0' || value.toLowerCase() === 'false') {
          return false;
        } // All other strings treated as true.


        return true;
      } // Coerce other values and numbers.


      return Boolean(value);
    }
    /**
     * Scratch cast to string.
     * @param {*} value Value to cast to string.
     * @return {string} The Scratch-casted string value.
     */

  }, {
    key: "toString",
    value: function toString(value) {
      return String(value);
    }
    /**
     * Cast any Scratch argument to an RGB color array to be used for the renderer.
     * @param {*} value Value to convert to RGB color array.
     * @return {Array.<number>} [r,g,b], values between 0-255.
     */

  }, {
    key: "toRgbColorList",
    value: function toRgbColorList(value) {
      var color = Cast.toRgbColorObject(value);
      return [color.r, color.g, color.b];
    }
    /**
     * Cast any Scratch argument to an RGB color object to be used for the renderer.
     * @param {*} value Value to convert to RGB color object.
     * @return {RGBOject} [r,g,b], values between 0-255.
     */

  }, {
    key: "toRgbColorObject",
    value: function toRgbColorObject(value) {
      var color;

      if (typeof value === 'string' && value.substring(0, 1) === '#') {
        color = color$1.hexToRgb(value); // If the color wasn't *actually* a hex color, cast to black

        if (!color) color = {
          r: 0,
          g: 0,
          b: 0,
          a: 255
        };
      } else {
        color = color$1.decimalToRgb(Cast.toNumber(value));
      }

      return color;
    }
    /**
     * Determine if a Scratch argument is a white space string (or null / empty).
     * @param {*} val value to check.
     * @return {boolean} True if the argument is all white spaces or null / empty.
     */

  }, {
    key: "isWhiteSpace",
    value: function isWhiteSpace(val) {
      return val === null || typeof val === 'string' && val.trim().length === 0;
    }
    /**
     * Compare two values, using Scratch cast, case-insensitive string compare, etc.
     * In Scratch 2.0, this is captured by `interp.compare.`
     * @param {*} v1 First value to compare.
     * @param {*} v2 Second value to compare.
     * @returns {number} Negative number if v1 < v2; 0 if equal; positive otherwise.
     */

  }, {
    key: "compare",
    value: function compare(v1, v2) {
      var n1 = Number(v1);
      var n2 = Number(v2);

      if (n1 === 0 && Cast.isWhiteSpace(v1)) {
        n1 = NaN;
      } else if (n2 === 0 && Cast.isWhiteSpace(v2)) {
        n2 = NaN;
      }

      if (isNaN(n1) || isNaN(n2)) {
        // At least one argument can't be converted to a number.
        // Scratch compares strings as case insensitive.
        var s1 = String(v1).toLowerCase();
        var s2 = String(v2).toLowerCase();

        if (s1 < s2) {
          return -1;
        } else if (s1 > s2) {
          return 1;
        }

        return 0;
      } // Handle the special case of Infinity


      if (n1 === Infinity && n2 === Infinity || n1 === -Infinity && n2 === -Infinity) {
        return 0;
      } // Compare as numbers.


      return n1 - n2;
    }
    /**
     * Determine if a Scratch argument number represents a round integer.
     * @param {*} val Value to check.
     * @return {boolean} True if number looks like an integer.
     */

  }, {
    key: "isInt",
    value: function isInt(val) {
      // Values that are already numbers.
      if (typeof val === 'number') {
        if (isNaN(val)) {
          // NaN is considered an integer.
          return true;
        } // True if it's "round" (e.g., 2.0 and 2).


        return val === parseInt(val, 10);
      } else if (typeof val === 'boolean') {
        // `True` and `false` always represent integer after Scratch cast.
        return true;
      } else if (typeof val === 'string') {
        // If it contains a decimal point, don't consider it an int.
        return val.indexOf('.') < 0;
      }

      return false;
    }
  }, {
    key: "toListIndex",

    /**
     * Compute a 1-based index into a list, based on a Scratch argument.
     * Two special cases may be returned:
     * LIST_ALL: if the block is referring to all of the items in the list.
     * LIST_INVALID: if the index was invalid in any way.
     * @param {*} index Scratch arg, including 1-based numbers or special cases.
     * @param {number} length Length of the list.
     * @param {boolean} acceptAll Whether it should accept "all" or not.
     * @return {(number|string)} 1-based index for list, LIST_ALL, or LIST_INVALID.
     */
    value: function toListIndex(index, length, acceptAll) {
      if (typeof index !== 'number') {
        if (index === 'all') {
          return acceptAll ? Cast.LIST_ALL : Cast.LIST_INVALID;
        }

        if (index === 'last') {
          if (length > 0) {
            return length;
          }

          return Cast.LIST_INVALID;
        } else if (index === 'random' || index === 'any') {
          if (length > 0) {
            return 1 + Math.floor(Math.random() * length);
          }

          return Cast.LIST_INVALID;
        }
      }

      index = Math.floor(Cast.toNumber(index));

      if (index < 1 || index > length) {
        return Cast.LIST_INVALID;
      }

      return index;
    }
  }, {
    key: "LIST_INVALID",
    get: function get() {
      return 'INVALID';
    }
  }, {
    key: "LIST_ALL",
    get: function get() {
      return 'ALL';
    }
  }]);

  return Cast;
}();

var cast = Cast;

var JSONRPC = /*#__PURE__*/function () {
  function JSONRPC() {
    _classCallCheck(this, JSONRPC);

    this._requestID = 0;
    this._openRequests = {};
  }
  /**
   * Make an RPC request and retrieve the result.
   * @param {string} method - the remote method to call.
   * @param {object} params - the parameters to pass to the remote method.
   * @returns {Promise} - a promise for the result of the call.
   */


  _createClass(JSONRPC, [{
    key: "sendRemoteRequest",
    value: function sendRemoteRequest(method, params) {
      var _this = this;

      var requestID = this._requestID++;
      var promise = new Promise(function (resolve, reject) {
        _this._openRequests[requestID] = {
          resolve: resolve,
          reject: reject
        };
      });

      this._sendRequest(method, params, requestID);

      return promise;
    }
    /**
     * Make an RPC notification with no expectation of a result or callback.
     * @param {string} method - the remote method to call.
     * @param {object} params - the parameters to pass to the remote method.
     */

  }, {
    key: "sendRemoteNotification",
    value: function sendRemoteNotification(method, params) {
      this._sendRequest(method, params);
    }
    /**
     * Handle an RPC request from remote, should return a result or Promise for result, if appropriate.
     * @param {string} method - the method requested by the remote caller.
     * @param {object} params - the parameters sent with the remote caller's request.
     */

  }, {
    key: "didReceiveCall",
    value: function didReceiveCall()
    /* method , params */
    {
      throw new Error('Must override didReceiveCall');
    }
  }, {
    key: "_sendMessage",
    value: function _sendMessage()
    /* jsonMessageObject */
    {
      throw new Error('Must override _sendMessage');
    }
  }, {
    key: "_sendRequest",
    value: function _sendRequest(method, params, id) {
      var request = {
        jsonrpc: '2.0',
        method: method,
        params: params
      };

      if (id !== null) {
        request.id = id;
      }

      this._sendMessage(request);
    }
  }, {
    key: "_handleMessage",
    value: function _handleMessage(json) {
      if (json.jsonrpc !== '2.0') {
        throw new Error("Bad or missing JSON-RPC version in message: ".concat(json));
      }

      if (json.hasOwnProperty('method')) {
        this._handleRequest(json);
      } else {
        this._handleResponse(json);
      }
    }
  }, {
    key: "_sendResponse",
    value: function _sendResponse(id, result, error) {
      var response = {
        jsonrpc: '2.0',
        id: id
      };

      if (error) {
        response.error = error;
      } else {
        response.result = result || null;
      }

      this._sendMessage(response);
    }
  }, {
    key: "_handleResponse",
    value: function _handleResponse(json) {
      var result = json.result,
          error = json.error,
          id = json.id;
      var openRequest = this._openRequests[id];
      delete this._openRequests[id];

      if (openRequest) {
        if (error) {
          openRequest.reject(error);
        } else {
          openRequest.resolve(result);
        }
      }
    }
  }, {
    key: "_handleRequest",
    value: function _handleRequest(json) {
      var _this2 = this;

      var method = json.method,
          params = json.params,
          id = json.id;
      var rawResult = this.didReceiveCall(method, params);

      if (id) {
        Promise.resolve(rawResult).then(function (result) {
          _this2._sendResponse(id, result);
        }, function (error) {
          _this2._sendResponse(id, null, error);
        });
      }
    }
  }]);

  return JSONRPC;
}();

var jsonrpc = JSONRPC;

var BLE = /*#__PURE__*/function (_JSONRPC) {
  _inherits(BLE, _JSONRPC);

  var _super = _createSuper(BLE);

  /**
   * A BLE peripheral socket object.  It handles connecting, over web sockets, to
   * BLE peripherals, and reading and writing data to them.
   * @param {Runtime} runtime - the Runtime for sending/receiving GUI update events.
   * @param {string} extensionId - the id of the extension using this socket.
   * @param {object} peripheralOptions - the list of options for peripheral discovery.
   * @param {object} connectCallback - a callback for connection.
   * @param {object} resetCallback - a callback for resetting extension state.
   */
  function BLE(runtime, extensionId, peripheralOptions, connectCallback) {
    var _this;

    var resetCallback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

    _classCallCheck(this, BLE);

    _this = _super.call(this);
    _this._socket = runtime.getScratchLinkSocket('BLE');

    _this._socket.setOnOpen(_this.requestPeripheral.bind(_assertThisInitialized(_this)));

    _this._socket.setOnClose(_this.handleDisconnectError.bind(_assertThisInitialized(_this)));

    _this._socket.setOnError(_this._handleRequestError.bind(_assertThisInitialized(_this)));

    _this._socket.setHandleMessage(_this._handleMessage.bind(_assertThisInitialized(_this)));

    _this._sendMessage = _this._socket.sendMessage.bind(_this._socket);
    _this._availablePeripherals = {};
    _this._connectCallback = connectCallback;
    _this._connected = false;
    _this._characteristicDidChangeCallback = null;
    _this._resetCallback = resetCallback;
    _this._discoverTimeoutID = null;
    _this._extensionId = extensionId;
    _this._peripheralOptions = peripheralOptions;
    _this._runtime = runtime;

    _this._socket.open();

    return _this;
  }
  /**
   * Request connection to the peripheral.
   * If the web socket is not yet open, request when the socket promise resolves.
   */


  _createClass(BLE, [{
    key: "requestPeripheral",
    value: function requestPeripheral() {
      var _this2 = this;

      this._availablePeripherals = {};

      if (this._discoverTimeoutID) {
        window.clearTimeout(this._discoverTimeoutID);
      }

      this._discoverTimeoutID = window.setTimeout(this._handleDiscoverTimeout.bind(this), 15000);
      this.sendRemoteRequest('discover', this._peripheralOptions).catch(function (e) {
        _this2._handleRequestError(e);
      });
    }
    /**
     * Try connecting to the input peripheral id, and then call the connect
     * callback if connection is successful.
     * @param {number} id - the id of the peripheral to connect to
     */

  }, {
    key: "connectPeripheral",
    value: function connectPeripheral(id) {
      var _this3 = this;

      this.sendRemoteRequest('connect', {
        peripheralId: id
      }).then(function () {
        _this3._connected = true;

        _this3._runtime.emit(_this3._runtime.constructor.PERIPHERAL_CONNECTED);

        _this3._connectCallback();
      }).catch(function (e) {
        _this3._handleRequestError(e);
      });
    }
    /**
     * Close the websocket.
     */

  }, {
    key: "disconnect",
    value: function disconnect() {
      if (this._connected) {
        this._connected = false;
      }

      if (this._socket.isOpen()) {
        this._socket.close();
      }

      if (this._discoverTimeoutID) {
        window.clearTimeout(this._discoverTimeoutID);
      } // Sets connection status icon to orange


      this._runtime.emit(this._runtime.constructor.PERIPHERAL_DISCONNECTED);
    }
    /**
     * @return {bool} whether the peripheral is connected.
     */

  }, {
    key: "isConnected",
    value: function isConnected() {
      return this._connected;
    }
    /**
     * Start receiving notifications from the specified ble service.
     * @param {number} serviceId - the ble service to read.
     * @param {number} characteristicId - the ble characteristic to get notifications from.
     * @param {object} onCharacteristicChanged - callback for characteristic change notifications.
     * @return {Promise} - a promise from the remote startNotifications request.
     */

  }, {
    key: "startNotifications",
    value: function startNotifications(serviceId, characteristicId) {
      var _this4 = this;

      var onCharacteristicChanged = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var params = {
        serviceId: serviceId,
        characteristicId: characteristicId
      };
      this._characteristicDidChangeCallback = onCharacteristicChanged;
      return this.sendRemoteRequest('startNotifications', params).catch(function (e) {
        _this4.handleDisconnectError(e);
      });
    }
    /**
     * Read from the specified ble service.
     * @param {number} serviceId - the ble service to read.
     * @param {number} characteristicId - the ble characteristic to read.
     * @param {boolean} optStartNotifications - whether to start receiving characteristic change notifications.
     * @param {object} onCharacteristicChanged - callback for characteristic change notifications.
     * @return {Promise} - a promise from the remote read request.
     */

  }, {
    key: "read",
    value: function read(serviceId, characteristicId) {
      var _this5 = this;

      var optStartNotifications = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var onCharacteristicChanged = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var params = {
        serviceId: serviceId,
        characteristicId: characteristicId
      };

      if (optStartNotifications) {
        params.startNotifications = true;
      }

      if (onCharacteristicChanged) {
        this._characteristicDidChangeCallback = onCharacteristicChanged;
      }

      return this.sendRemoteRequest('read', params).catch(function (e) {
        _this5.handleDisconnectError(e);
      });
    }
    /**
     * Write data to the specified ble service.
     * @param {number} serviceId - the ble service to write.
     * @param {number} characteristicId - the ble characteristic to write.
     * @param {string} message - the message to send.
     * @param {string} encoding - the message encoding type.
     * @param {boolean} withResponse - if true, resolve after peripheral's response.
     * @return {Promise} - a promise from the remote send request.
     */

  }, {
    key: "write",
    value: function write(serviceId, characteristicId, message) {
      var _this6 = this;

      var encoding = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var withResponse = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
      var params = {
        serviceId: serviceId,
        characteristicId: characteristicId,
        message: message
      };

      if (encoding) {
        params.encoding = encoding;
      }

      if (withResponse !== null) {
        params.withResponse = withResponse;
      }

      return this.sendRemoteRequest('write', params).catch(function (e) {
        _this6.handleDisconnectError(e);
      });
    }
    /**
     * Handle a received call from the socket.
     * @param {string} method - a received method label.
     * @param {object} params - a received list of parameters.
     * @return {object} - optional return value.
     */

  }, {
    key: "didReceiveCall",
    value: function didReceiveCall(method, params) {
      switch (method) {
        case 'didDiscoverPeripheral':
          this._availablePeripherals[params.peripheralId] = params;

          this._runtime.emit(this._runtime.constructor.PERIPHERAL_LIST_UPDATE, this._availablePeripherals);

          if (this._discoverTimeoutID) {
            window.clearTimeout(this._discoverTimeoutID);
          }

          break;

        case 'characteristicDidChange':
          if (this._characteristicDidChangeCallback) {
            this._characteristicDidChangeCallback(params.message);
          }

          break;

        case 'ping':
          return 42;
      }
    }
    /**
     * Handle an error resulting from losing connection to a peripheral.
     *
     * This could be due to:
     * - battery depletion
     * - going out of bluetooth range
     * - being powered down
     *
     * Disconnect the socket, and if the extension using this socket has a
     * reset callback, call it. Finally, emit an error to the runtime.
     */

  }, {
    key: "handleDisconnectError",
    value: function handleDisconnectError()
    /* e */
    {
      // log.error(`BLE error: ${JSON.stringify(e)}`);
      if (!this._connected) return;
      this.disconnect();

      if (this._resetCallback) {
        this._resetCallback();
      }

      this._runtime.emit(this._runtime.constructor.PERIPHERAL_CONNECTION_LOST_ERROR, {
        message: "Scratch lost connection to",
        extensionId: this._extensionId
      });
    }
  }, {
    key: "_handleRequestError",
    value: function _handleRequestError()
    /* e */
    {
      // log.error(`BLE error: ${JSON.stringify(e)}`);
      this._runtime.emit(this._runtime.constructor.PERIPHERAL_REQUEST_ERROR, {
        message: "Scratch lost connection to",
        extensionId: this._extensionId
      });
    }
  }, {
    key: "_handleDiscoverTimeout",
    value: function _handleDiscoverTimeout() {
      if (this._discoverTimeoutID) {
        window.clearTimeout(this._discoverTimeoutID);
      }

      this._runtime.emit(this._runtime.constructor.PERIPHERAL_SCAN_TIMEOUT);
    }
  }]);

  return BLE;
}(jsonrpc);

var ble = BLE;

var global$1 = typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};

var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var inited = false;

function init() {
  inited = true;
  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

  for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
  }

  revLookup['-'.charCodeAt(0)] = 62;
  revLookup['_'.charCodeAt(0)] = 63;
}

function toByteArray(b64) {
  if (!inited) {
    init();
  }

  var i, j, l, tmp, placeHolders, arr;
  var len = b64.length;

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4');
  } // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice


  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0; // base64 is 4/3 + up to two characters of the original data

  arr = new Arr(len * 3 / 4 - placeHolders); // if there are placeholders, only get up to the last complete 4 chars

  l = placeHolders > 0 ? len - 4 : len;
  var L = 0;

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[L++] = tmp >> 16 & 0xFF;
    arr[L++] = tmp >> 8 & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  if (placeHolders === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[L++] = tmp & 0xFF;
  } else if (placeHolders === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[L++] = tmp >> 8 & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  return arr;
}

function tripletToBase64(num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}

function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];

  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
    output.push(tripletToBase64(tmp));
  }

  return output.join('');
}

function fromByteArray(uint8) {
  if (!inited) {
    init();
  }

  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes

  var output = '';
  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3
  // go through the array every three bytes, we'll deal with trailing stuff later

  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  } // pad the end with zeros, but make sure to not forget the extra bytes


  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    output += lookup[tmp >> 2];
    output += lookup[tmp << 4 & 0x3F];
    output += '==';
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    output += lookup[tmp >> 10];
    output += lookup[tmp >> 4 & 0x3F];
    output += lookup[tmp << 2 & 0x3F];
    output += '=';
  }

  parts.push(output);
  return parts.join('');
}

function read(buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];
  i += d;
  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;

  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;

  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }

  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
}
function write(buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);

    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }

    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }

    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = e << mLen | m;
  eLen += mLen;

  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
}

var toString = {}.toString;
var isArray = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

var INSPECT_MAX_BYTES = 50;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */

Buffer.TYPED_ARRAY_SUPPORT = global$1.TYPED_ARRAY_SUPPORT !== undefined ? global$1.TYPED_ARRAY_SUPPORT : true;

function kMaxLength() {
  return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
}

function createBuffer(that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length');
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length);
    }

    that.length = length;
  }

  return that;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */


function Buffer(arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length);
  } // Common case.


  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error('If encoding is specified then the first argument must be a string');
    }

    return allocUnsafe(this, arg);
  }

  return from(this, arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192; // not used by this implementation
// TODO: Legacy, not needed anymore. Remove in next major version.

Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype;
  return arr;
};

function from(that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length);
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset);
  }

  return fromObject(that, value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/


Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length);
};

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;
}

function assertSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number');
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative');
  }
}

function alloc(that, size, fill, encoding) {
  assertSize(size);

  if (size <= 0) {
    return createBuffer(that, size);
  }

  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
  }

  return createBuffer(that, size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/


Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding);
};

function allocUnsafe(that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);

  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }

  return that;
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */


Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */


Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size);
};

function fromString(that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);
  var actual = that.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }

  return that;
}

function fromArrayLike(that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);

  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }

  return that;
}

function fromArrayBuffer(that, array, byteOffset, length) {
  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds');
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds');
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }

  return that;
}

function fromObject(that, obj) {
  if (internalIsBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that;
    }

    obj.copy(that, 0, 0, len);
    return that;
  }

  if (obj) {
    if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0);
      }

      return fromArrayLike(that, obj);
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data);
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
}

function checked(length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
  }

  return length | 0;
}
Buffer.isBuffer = isBuffer;

function internalIsBuffer(b) {
  return !!(b != null && b._isBuffer);
}

Buffer.compare = function compare(a, b) {
  if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
    throw new TypeError('Arguments must be Buffers');
  }

  if (a === b) return 0;
  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

Buffer.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;

    default:
      return false;
  }
};

Buffer.concat = function concat(list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }

  if (list.length === 0) {
    return Buffer.alloc(0);
  }

  var i;

  if (length === undefined) {
    length = 0;

    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;

  for (i = 0; i < list.length; ++i) {
    var buf = list[i];

    if (!internalIsBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }

    buf.copy(buffer, pos);
    pos += buf.length;
  }

  return buffer;
};

function byteLength(string, encoding) {
  if (internalIsBuffer(string)) {
    return string.length;
  }

  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength;
  }

  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0; // Use a for loop to avoid recursion

  var loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len;

      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length;

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2;

      case 'hex':
        return len >>> 1;

      case 'base64':
        return base64ToBytes(string).length;

      default:
        if (loweredCase) return utf8ToBytes(string).length; // assume utf8

        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}

Buffer.byteLength = byteLength;

function slowToString(encoding, start, end) {
  var loweredCase = false; // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.
  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.

  if (start === undefined || start < 0) {
    start = 0;
  } // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.


  if (start > this.length) {
    return '';
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return '';
  } // Force coersion to uint32. This will also coerce falsey/NaN values to 0.


  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return '';
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end);

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end);

      case 'ascii':
        return asciiSlice(this, start, end);

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end);

      case 'base64':
        return base64Slice(this, start, end);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
} // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.


Buffer.prototype._isBuffer = true;

function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16() {
  var len = this.length;

  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits');
  }

  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }

  return this;
};

Buffer.prototype.swap32 = function swap32() {
  var len = this.length;

  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits');
  }

  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }

  return this;
};

Buffer.prototype.swap64 = function swap64() {
  var len = this.length;

  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits');
  }

  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }

  return this;
};

Buffer.prototype.toString = function toString() {
  var length = this.length | 0;
  if (length === 0) return '';
  if (arguments.length === 0) return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};

Buffer.prototype.equals = function equals(b) {
  if (!internalIsBuffer(b)) throw new TypeError('Argument must be a Buffer');
  if (this === b) return true;
  return Buffer.compare(this, b) === 0;
};

Buffer.prototype.inspect = function inspect() {
  var str = '';
  var max = INSPECT_MAX_BYTES;

  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }

  return '<Buffer ' + str + '>';
};

Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
  if (!internalIsBuffer(target)) {
    throw new TypeError('Argument must be a Buffer');
  }

  if (start === undefined) {
    start = 0;
  }

  if (end === undefined) {
    end = target ? target.length : 0;
  }

  if (thisStart === undefined) {
    thisStart = 0;
  }

  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index');
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }

  if (thisStart >= thisEnd) {
    return -1;
  }

  if (start >= end) {
    return 1;
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;
  if (this === target) return 0;
  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);
  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
}; // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf


function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1; // Normalize byteOffset

  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }

  byteOffset = +byteOffset; // Coerce to Number.

  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
  } // Normalize byteOffset: negative offsets start from the end of the buffer


  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;

  if (byteOffset >= buffer.length) {
    if (dir) return -1;else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;else return -1;
  } // Normalize val


  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  } // Finally, search either indexOf (if dir is true) or lastIndexOf


  if (internalIsBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1;
    }

    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]

    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }

    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }

  throw new TypeError('val must be string, number or Buffer');
}

function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();

    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }

      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read(buf, i) {
    if (indexSize === 1) {
      return buf[i];
    } else {
      return buf.readUInt16BE(i * indexSize);
    }
  }

  var i;

  if (dir) {
    var foundIndex = -1;

    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;

    for (i = byteOffset; i >= 0; i--) {
      var found = true;

      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break;
        }
      }

      if (found) return i;
    }
  }

  return -1;
}

Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};

Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};

Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};

function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;

  if (!length) {
    length = remaining;
  } else {
    length = Number(length);

    if (length > remaining) {
      length = remaining;
    }
  } // must be an even number of digits


  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

  if (length > strLen / 2) {
    length = strLen / 2;
  }

  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i;
    buf[offset + i] = parsed;
  }

  return i;
}

function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}

function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}

function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}

function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}

function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}

Buffer.prototype.write = function write(string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0; // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0; // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0;

    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    } // legacy write(string, encoding, offset, length) - remove in v0.13

  } else {
    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds');
  }

  if (!encoding) encoding = 'utf8';
  var loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length);

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length);

      case 'ascii':
        return asciiWrite(this, string, offset, length);

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length);

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON() {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};

function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return fromByteArray(buf);
  } else {
    return fromByteArray(buf.slice(start, end));
  }
}

function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];
  var i = start;

  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }

          break;

        case 2:
          secondByte = buf[i + 1];

          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;

            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;

            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;

            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }

      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res);
} // Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety


var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;

  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
  } // Decode in chunks to avoid "call stack size exceeded".


  var res = '';
  var i = 0;

  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }

  return res;
}

function asciiSlice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }

  return ret;
}

function latin1Slice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }

  return ret;
}

function hexSlice(buf, start, end) {
  var len = buf.length;
  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;
  var out = '';

  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }

  return out;
}

function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';

  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }

  return res;
}

Buffer.prototype.slice = function slice(start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;
  var newBuf;

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, undefined);

    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */


function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}

Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val;
};

Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;

  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val;
};

Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset];
};

Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};

Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};

Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};

Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};

Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];

  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return this[offset];
  return (0xff - this[offset] + 1) * -1;
};

Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | this[offset + 1] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | this[offset] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};

Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};

Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return read(this, offset, true, 23, 4);
};

Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return read(this, offset, false, 23, 4);
};

Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return read(this, offset, true, 52, 8);
};

Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return read(this, offset, false, 52, 8);
};

function checkInt(buf, value, offset, ext, max, min) {
  if (!internalIsBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
}

Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = value & 0xff;
  return offset + 1;
};

function objectWriteUInt16(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;

  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }

  return offset + 2;
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }

  return offset + 2;
};

function objectWriteUInt32(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;

  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }

  return offset + 4;
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }

  return offset + 4;
};

Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;

  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;

  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = value & 0xff;
  return offset + 1;
};

Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }

  return offset + 2;
};

Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }

  return offset + 2;
};

Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }

  return offset + 4;
};

Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }

  return offset + 4;
};

function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
  if (offset < 0) throw new RangeError('Index out of range');
}

function writeFloat(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4);
  }

  write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}

Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};

Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};

function writeDouble(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8);
  }

  write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert);
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert);
}; // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)


Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start; // Copy 0 bytes; we're done

  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0; // Fatal error conditions

  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds');
  }

  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
  if (end < 0) throw new RangeError('sourceEnd out of bounds'); // Are we oob?

  if (end > this.length) end = this.length;

  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
  }

  return len;
}; // Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])


Buffer.prototype.fill = function fill(val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }

    if (val.length === 1) {
      var code = val.charCodeAt(0);

      if (code < 256) {
        val = code;
      }
    }

    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string');
    }

    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding);
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  } // Invalid ranges are not set to a default, so can range check early.


  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index');
  }

  if (end <= start) {
    return this;
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;
  if (!val) val = 0;
  var i;

  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = internalIsBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;

    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this;
}; // HELPER FUNCTIONS
// ================


var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean(str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, ''); // Node converts strings with length < 2 to ''

  if (str.length < 2) return ''; // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not

  while (str.length % 4 !== 0) {
    str = str + '=';
  }

  return str;
}

function stringtrim(str) {
  if (str.trim) return str.trim();
  return str.replace(/^\s+|\s+$/g, '');
}

function toHex(n) {
  if (n < 16) return '0' + n.toString(16);
  return n.toString(16);
}

function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i); // is surrogate component

    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } // valid lead


        leadSurrogate = codePoint;
        continue;
      } // 2 leads in a row


      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue;
      } // valid surrogate pair


      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null; // encode utf8

    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else {
      throw new Error('Invalid code point');
    }
  }

  return bytes;
}

function asciiToBytes(str) {
  var byteArray = [];

  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }

  return byteArray;
}

function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];

  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break;
    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray;
}

function base64ToBytes(str) {
  return toByteArray(base64clean(str));
}

function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }

  return i;
}

function isnan(val) {
  return val !== val; // eslint-disable-line no-self-compare
} // the following is from is-buffer, also by Feross Aboukhadijeh and with same lisence
// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually


function isBuffer(obj) {
  return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj));
}

function isFastBuffer(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
} // For Node v0.10 support. Remove this eventually.


function isSlowBuffer(obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer(obj.slice(0, 0));
}

var browserAtob = createCommonjsModule(function (module) {
  (function (w) {

    function findBest(atobNative) {
      // normal window
      if ('function' === typeof atobNative) {
        return atobNative;
      } // browserify (web worker)


      if ('function' === typeof Buffer) {
        return function atobBrowserify(a) {
          //!! Deliberately using an API that's deprecated in node.js because
          //!! this file is for browsers and we expect them to cope with it.
          //!! Discussion: github.com/node-browser-compat/atob/pull/9
          return new Buffer(a, 'base64').toString('binary');
        };
      } // ios web worker with base64js


      if ('object' === _typeof(w.base64js)) {
        // bufferToBinaryString
        // https://git.coolaj86.com/coolaj86/unibabel.js/blob/master/index.js#L50
        return function atobWebWorker_iOS(a) {
          var buf = w.base64js.b64ToByteArray(a);
          return Array.prototype.map.call(buf, function (ch) {
            return String.fromCharCode(ch);
          }).join('');
        };
      }

      return function () {
        // ios web worker without base64js
        throw new Error("You're probably in an old browser or an iOS webworker." + " It might help to include beatgammit's base64-js.");
      };
    }

    var atobBest = findBest(w.atob);
    w.atob = atobBest;

    if ( module && module.exports) {
      module.exports = atobBest;
    }
  })(window);
});

var btoa = createCommonjsModule(function (module) {
  (function () {

    function btoa(str) {
      var buffer;

      if (str instanceof Buffer) {
        buffer = str;
      } else {
        buffer = Buffer.from(str.toString(), 'binary');
      }

      return buffer.toString('base64');
    }

    module.exports = btoa;
  })();
});

var Base64Util = /*#__PURE__*/function () {
  function Base64Util() {
    _classCallCheck(this, Base64Util);
  }

  _createClass(Base64Util, null, [{
    key: "base64ToUint8Array",

    /**
     * Convert a base64 encoded string to a Uint8Array.
     * @param {string} base64 - a base64 encoded string.
     * @return {Uint8Array} - a decoded Uint8Array.
     */
    value: function base64ToUint8Array(base64) {
      var binaryString = browserAtob(base64);
      var len = binaryString.length;
      var array = new Uint8Array(len);

      for (var i = 0; i < len; i++) {
        array[i] = binaryString.charCodeAt(i);
      }

      return array;
    }
    /**
     * Convert a Uint8Array to a base64 encoded string.
     * @param {Uint8Array} array - the array to convert.
     * @return {string} - the base64 encoded string.
     */

  }, {
    key: "uint8ArrayToBase64",
    value: function uint8ArrayToBase64(array) {
      var base64 = btoa(String.fromCharCode.apply(null, array));
      return base64;
    }
    /**
    * Convert an array buffer to a base64 encoded string.
    * @param {array} buffer - an array buffer to convert.
    * @return {string} - the base64 encoded string.
    */

  }, {
    key: "arrayBufferToBase64",
    value: function arrayBufferToBase64(buffer) {
      var binary = '';
      var bytes = new Uint8Array(buffer);
      var len = bytes.byteLength;

      for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
      }

      return btoa(binary);
    }
  }]);

  return Base64Util;
}();

var base64Util = Base64Util;

var formatMessage = null;

var timeoutPromise = function timeoutPromise(timeout) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, timeout);
  });
};

var EXTENSION_ID = 'microbitMore';
/**
 * Icon png to be displayed at the left edge of each extension block, encoded as a data URI.
 * @type {string}
 */
// eslint-disable-next-line max-len

var blockIconURI = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAABG2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+Gkqr6gAAAYNpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAACiRdZHLK8RRFMc/82Dk0QgLC2XSsEKMGmwsZmIoLMYor83MzzzUPH79fjNpslW2U5TYeC34C9gqa6WIlGxsrIkN+jm/GTWSObdzz+d+7z2ne88FayippHR7H6TSWS0Y8Lnm5hdcjifsNFHNIO1hRVenZsZCVLT3WyxmvO4xa1U+96/VLUd1BSw1wiOKqmWFx4UnV7OqyVvCLUoivCx8ItytyQWFb0w9UuJnk+Ml/jRZCwX9YG0UdsV/ceQXKwktJSwvx51K5pSf+5gvqY+mZ2ckdoi3oRMkgA8XE4zix0s/wzJ76cFDr6yokN9XzJ8mI7mKzCp5NFaIkyBLt6g5qR6VGBM9KiNJ3uz/377qsQFPqXq9D6oeDeO1Exyb8FUwjI8Dw/g6BNsDnKfL+Zl9GHoTvVDW3HvgXIfTi7IW2YazDWi9V8NauCjZxK2xGLwcQ8M8NF9B7WKpZz/7HN1BaE2+6hJ2dqFLzjuXvgGIDmf1SJ4uQQAAAAlwSFlzAAALEwAACxMBAJqcGAAACJpJREFUWIXtmGlsXNUVx3/3vvdm7BnbSRxncRLHa+IsZCmIJbSlKQG1SLRNgoqiUFGpaoUUFSTURRQFlRLoQhekQtUPpYvEB0AiJQVBU1q2gptCUgjZIAl2xo4dJyHjZOzZ3nLv6YcZTwy2k1CpH5Dyl0bz3n1v3v29c849/6uBi7qoi/pkS310oL25RQFVgL7Qh2z+yW9fbKivafVc1wMIwqiQHhrZd//dm9Z/DBYD+N29KZkUsL25Rbfd9Js/eU2rbtFV08YBBu8+QWzxBgAkf4pocCde+w1EAzvwdz0CYj4Gz4clIkdCv3B316vPPjF2/EMQUzuvnxZrvuZrE8Lte4yo54XSG+VPUey6DxXlMMd2EPznN+PglFITfiaTUqrVi1dtbm9uiY8dd8eeVE9vnaFiNeOeEux7jKj7eZSXwOY/oNi1Bcl/QHRiN/bgNhCDqq7HSc4EwAwPIMHIpEBKKURkoivzAWdSwIk0CiciYEP8rvtQhXRp8kwPGogtWo81ETZ7HIB4x3KkeIYo9Y+zRSQggFIgci7ID+ucgMG+xwjff67y1tqGqGIa7Wi0gtLsgls7myD1MnboEMqpQsIM3rxV4OhKFEUEK4IVQKQMe37ISQFH4UYn0Aq01rha4TgOWqsyHtC7nao5VyJNV6EEJMohvS8Qj7mocgitCMZajLFEWBDB2v8xgmMjJyJordCqBOe5Dp7r4roajUIQTPEEUfc2rBUEwVEKx9E4ca9yT2SFKDIEIogojAjO1FaSi9cRJuYQpV4iKM95TsCxcKNSgCpHznNd4jGXFZk0Mwt5uua34cVj5PIFxIIbc/H9gJpkNWIss4eHuOTEcf42r41s+YVL6VbguMiUdkzfPwm7nz9/BAvvbx/x6hvPglVWoUIrcLTCczVxz+W2f71C3VCatmUrydyzmTfe2kMimWDJogX8dfvLXL96FflXX+PmZ7YS94t8cF0V/549D2OFMDKlZ4sQ9HcRHHjy46UYhAUdHWhdaodRGDAwMIDjaFxHE3MdnHwegM/u3c0bW7bgr76O3EiWVwaPU5OIc/zpZ/jmX54iHgQA1FqD52h8XUr//OZmBIX4bxK2NNNzJHXhgEuXLOEH37sN3/dLDRbY8uNfkzl9Gkc7uI5G67M97sq971ClFNvXrqVuylRiO3dx6zNb8cpwANrRpbrUmgUd7Xx709cx1uK6Lq7rctc9P6e/f2AcyzjHaGmeR3V1nFwuz+Z7f8kDP3uktFAcF6VKfUyPacAvXbsGqzUr9uzmxm1P07h/H7dufRLP9+lZsJBUa1tpIlWqY1XuBvl8gR/e9xD3//RhRIRkIklrS9M4nnEDdXW1uG4psBUMkcqxUgqlFaPt69CixWy7eQPGcVi65x3W/uFRvDDk8MJOnrrpq0TOWWNQUl5wUlosY33G81ym1NWOs55xKd6z912WLllMMplgy73fRakSoLFnvVasVFJsjKXw+dU87Tise/JxnCjiwMJO3rr9dmLDWVS5jhnT8oxYEolq7r3nTlzPRSnFmUyG/v6BcbuNCWtw/4ED/OiBh9Fal1pCFHF88DiJqlipTQDGWgAiYznw3vuYhtkM3LSBOSdP8PYly6GnD8fRRMaUk1D6nQDd3d384qFHEcAKhGE4Yf1NCgiKw909VF22iWDPH3GMj+fqSiCsCFqVzoPI0NLWzJHUAKda24ldfTUjBw6ytK2FdHqo0qosMgZS0XMkRWQMpuwmk9nexIBKEV/5LdwZywjGDIuAtVJxDIAwMuQLPtlCESc0DOey5IsB2UKBgh9U7ExsyYtFpOLFctYsJ9WEgLElG9D1najM4fIuREpwIlhriaxFyhMHkeF4aoDMSB5jLWeGswRBRE9qAAWYcoojKxhjsab8ahewk4FJtvXB/scpvPgdsjt+hUQFpAw5CheGESaRAGAExfq1N1DfUE/HgjY2blxPMYy48UtfYO68RkwyCUBOO4TGYqQEOgp5rk0sfGTLf9nl18ytq2/s/+hNTsWHNXHPI+Y5LE6foD6fY0dTG0XfJ7QQRQYrlpjn4SiIxz3m5nMsO3aUVzoWkTfgRxFBaAiNOZt+qXyPHD345uzu3lR+dO4JU7xgVjrT1pB+Np2r+dyu1JwmoVRDjopYs6h3pyivoYv5rdGUGZgwIrIKh4AvruzemQ90/PVDrcuNePiBoS+epL+tkytaBt/O++LvH6i7qug7lRR/ekHfoWrX3zeYmbJub3/DhaX4ms6jvb/bevobV7YNvOU5o/VnWd3ZU+w+uWSjterBzlnH8MOwFI3IsGbpEfNeX+0tgS93LG8alDAqjReDkE/N72Ok2HDnmVzDHSuaBjHlRTK9Js+iWSf+/vs/pzeumH8iNRHLuAi2zcjwmYXHlr3woOqfPTU/40i6oVTsVnF562DVVy49tNtzlbvrSCOe4+OoCFdHrGgadNZdOvSOCPJ2X6OKeyFaaapjEYvnnKZ1xt7nEEP/UB3WRCgtNE7N8uXL+jZd0ZFYH0TDs18/NC9/9OB5ANcs7WVqMlCZQt3MRGyYjasOMDXhExmNFUVgq5PTE8OsXuSzcv4gtdUhiVhAEClQbrVCWL04xfKmk8QcS0NdgWwxRjZMJGPa0jz9KB2z0jja0lCb5/DJuWq4mGicWZvm2iV93mtd5wAcGRo87WqVA5LTEtkxV0odSythSnUWrS1KGZSyaGXQyqCUg6MjYo4hNICyKG1xtEEpQ228UD62qIqnwMzaDDNrM0RGqPKiU0A0KaCJwkI6E7/r1HDVA3PrszV535WhkViuGGjHipJqL3I8x4+FolQm5/ln8p5fDJRb5bnadYyalizGrBU1lK3yz2RjgeOIMkZiRpRMT/oxrYQzOS8aynlFBUqsuPU12bigSI/Ec9m8+X53b2qsN4z/6wOgvbnFm2j8/yzp7k1F57/toi7qoj5Z+i+Wq1Nf6TRyQQAAAABJRU5ErkJggg==';
/**
 * Enum for micro:bit BLE command protocol.
 * https://github.com/LLK/scratch-microbit-firmware/blob/master/protocol.md
 * @readonly
 * @enum {number}
 */

var BLECommand = {
  CMD_PIN_CONFIG: 0x80,
  CMD_DISPLAY_TEXT: 0x81,
  CMD_DISPLAY_LED: 0x82,
  CMD_PROTOCOL: 0x90,
  CMD_PIN: 0x91,
  CMD_SHARED_DATA: 0x92
};
var MBitMorePinCommand = {
  SET_OUTPUT: 0x01,
  SET_PWM: 0x02,
  SET_SERVO: 0x03,
  SET_PULL: 0x04,
  SET_EVENT: 0x05,
  SET_TOUCH: 0x06
};
var MBitMorePinMode = {
  PullNone: 0,
  PullUp: 1,
  PullDown: 2
};
/**
 * Enum for micro:bit BLE command protocol v0.
 * https://github.com/LLK/scratch-microbit-firmware/blob/master/protocol.md
 * @readonly
 * @enum {number}
 */

var BLECommandV0 = {
  CMD_PIN_CONFIG: 0x80,
  CMD_DISPLAY_TEXT: 0x81,
  CMD_DISPLAY_LED: 0x82,
  CMD_PIN_INPUT: 0x90,
  CMD_PIN_OUTPUT: 0x91,
  CMD_PIN_PWM: 0x92,
  CMD_PIN_SERVO: 0x93,
  CMD_SHARED_DATA_SET: 0x94,
  CMD_PROTOCOL_SET: 0xA0
};
var MBitMoreDataFormat = {
  MIX_01: 0x01,
  MIX_02: 0x02,
  MIX_03: 0x03,
  SHARED_DATA: 0x11,
  EVENT: 0x12
};
/**
 * Enum for event type in the micro:bit runtime.
 */

var MicroBitEventType = {
  MICROBIT_PIN_EVENT_NONE: 0,
  MICROBIT_PIN_EVENT_ON_EDGE: 1,
  MICROBIT_PIN_EVENT_ON_PULSE: 2,
  MICROBIT_PIN_EVENT_ON_TOUCH: 3
};
/**
 * Enum for event value in the micro:bit runtime.
 */

var MicroBitEvent = {
  MICROBIT_PIN_EVT_RISE: 2,
  MICROBIT_PIN_EVT_FALL: 3,
  MICROBIT_PIN_EVT_PULSE_HI: 4,
  MICROBIT_PIN_EVT_PULSE_LO: 5
};
/**
 * A time interval to wait (in milliseconds) before reporting to the BLE socket
 * that data has stopped coming from the peripheral.
 */

var BLETimeout = 4500;
/**
 * A time interval to wait (in milliseconds) while a block that sends a BLE message is running.
 * @type {number}
 */

var BLESendInterval = 100;
/**
 * A string to report to the BLE socket when the micro:bit has stopped receiving data.
 * @type {string}
 */

var BLEDataStoppedError = 'micro:bit extension stopped receiving data';
/**
 * Enum for micro:bit protocol.
 * https://github.com/LLK/scratch-microbit-firmware/blob/master/protocol.md
 * @readonly
 * @enum {string}
 */

var MICROBIT_SERVICE = {
  ID: 0xf005,
  RX: '5261da01-fa7e-42ab-850b-7c80220097cc',
  TX: '5261da02-fa7e-42ab-850b-7c80220097cc'
};
var MBITMORE_SERVICE = {
  ID: 'a62d574e-1b34-4092-8dee-4151f63b2865',
  EVENT: 'a62d0001-1b34-4092-8dee-4151f63b2865',
  IO: 'a62d0002-1b34-4092-8dee-4151f63b2865',
  ANSLOG_IN: 'a62d0003-1b34-4092-8dee-4151f63b2865',
  SENSORS: 'a62d0004-1b34-4092-8dee-4151f63b2865',
  SHARED_DATA: 'a62d0010-1b34-4092-8dee-4151f63b2865'
};
/**
 * Enum for pin mode menu options.
 * @readonly
 * @enum {string}
 */

var PinMode = {
  PULL_NONE: 'pullNone',
  PULL_UP: 'pullUp',
  PULL_DOWN: 'pullDown'
};
/**
 * The unit-value of the gravitational acceleration from Micro:bit.
 * @type {number}
 */

var G = 1024;
/**
 * Manage communication with a MicroBit peripheral over a Scrath Link client socket.
 */

var MbitMore = /*#__PURE__*/function () {
  /**
   * Construct a MicroBit communication object.
   * @param {Runtime} runtime - the Scratch 3.0 runtime
   * @param {string} extensionId - the id of the extension
   */
  function MbitMore(runtime, extensionId) {
    var _this = this;

    _classCallCheck(this, MbitMore);

    /**
     * The Scratch 3.0 runtime used to trigger the green flag button.
     * @type {Runtime}
     * @private
     */
    this._runtime = runtime;
    /**
     * The BluetoothLowEnergy connection socket for reading/writing peripheral data.
     * @type {BLE}
     * @private
     */

    this._ble = null;

    this._runtime.registerPeripheralExtension(extensionId, this);
    /**
     * The id of the extension this peripheral belongs to.
     */


    this._extensionId = extensionId;
    /**
     * The most recently received value for each sensor.
     * @type {Object.<string, number>}
     * @private
     */

    this._sensors = {
      tiltX: 0,
      tiltY: 0,
      buttonA: 0,
      buttonB: 0,
      touchPins: [0, 0, 0],
      gestureState: 0,
      ledMatrixState: new Uint8Array(5),
      lightLevel: 0,
      temperature: 0,
      compassHeading: 0,
      accelerationX: 0,
      accelerationY: 0,
      accelerationZ: 0,
      accelerationStrength: 0,
      magneticForceX: 0,
      magneticForceY: 0,
      magneticForceZ: 0,
      magneticStrength: 0,
      analogValue: {},
      powerVoltage: 0,
      digitalValue: {},
      sharedData: [0, 0, 0, 0]
    };
    /**
     * The most recently received events for each pin.
     * @type {Object.<number>} - Store of pins which has events.
     * @private
     */

    this._events = {};
    this.analogIn = [0, 1, 2];
    this.analogIn.forEach(function (pinIndex) {
      _this._sensors.analogValue[pinIndex] = 0;
    });
    this.gpio = [0, 1, 2, 8, 13, 14, 15, 16];
    this.gpio.forEach(function (pinIndex) {
      _this._sensors.digitalValue[pinIndex] = 0;
    });
    this.sharedDataLength = this._sensors.sharedData.length;
    /**
     * The most recently received value for each gesture.
     * @type {Object.<string, Object>}
     * @private
     */

    this._gestures = {
      moving: false,
      move: {
        active: false,
        timeout: false
      },
      shake: {
        active: false,
        timeout: false
      },
      jump: {
        active: false,
        timeout: false
      }
    };
    /**
     * Interval ID for data reading timeout.
     * @type {number}
     * @private
     */

    this._timeoutID = null;
    /**
     * A flag that is true while we are busy sending data to the BLE socket.
     * @type {boolean}
     * @private
     */

    this._busy = false;
    /**
     * ID for a timeout which is used to clear the busy flag if it has been
     * true for a long time.
     */

    this._busyTimeoutID = null;
    this.reset = this.reset.bind(this);
    this._onConnect = this._onConnect.bind(this);
    this._updateMicrobitService = this._updateMicrobitService.bind(this);
    this._useMbitMoreService = true;
    this.digitalValuesUpdateInterval = 20; // milli-seconds

    this.digitalValuesLastUpdated = Date.now();
    this.analogInUpdateInterval = 200; // milli-seconds

    this.analogInLastUpdated = Date.now();
    this.sensorsUpdateInterval = 20; // milli-seconds

    this.sensorsLastUpdated = Date.now();
    this.bleReadTimelimit = 500;
  }
  /**
   * @param {string} text - the text to display.
   * @return {Promise} - a Promise that resolves when writing to peripheral.
   */


  _createClass(MbitMore, [{
    key: "displayText",
    value: function displayText(text) {
      var output = new Uint8Array(text.length);

      for (var i = 0; i < text.length; i++) {
        output[i] = text.charCodeAt(i);
      }

      return this.send(BLECommand.CMD_DISPLAY_TEXT, output);
    }
    /**
     * @param {Uint8Array} matrix - the matrix to display.
     * @return {Promise} - a Promise that resolves when writing to peripheral.
     */

  }, {
    key: "displayMatrix",
    value: function displayMatrix(matrix) {
      return this.send(BLECommand.CMD_DISPLAY_LED, matrix);
    }
  }, {
    key: "setPinMode",
    value: function setPinMode(pinIndex, mode, util) {
      if (!this._useMbitMoreService) {
        switch (mode) {
          case PinMode.PULL_UP:
            this.send(BLECommandV0.CMD_PIN_INPUT, new Uint8Array([pinIndex]), util);
            break;

          case PinMode.PULL_DOWN:
            this.send(BLECommandV0.CMD_PIN_INPUT, new Uint8Array([pinIndex]), util);
            break;
        }

        return;
      }

      switch (mode) {
        case PinMode.PULL_NONE:
          this.send(BLECommand.CMD_PIN, new Uint8Array([MBitMorePinCommand.SET_PULL, pinIndex, MBitMorePinMode.PullNone]), util);
          break;

        case PinMode.PULL_UP:
          this.send(BLECommand.CMD_PIN, new Uint8Array([MBitMorePinCommand.SET_PULL, pinIndex, MBitMorePinMode.PullUp]), util);
          break;

        case PinMode.PULL_DOWN:
          this.send(BLECommand.CMD_PIN, new Uint8Array([MBitMorePinCommand.SET_PULL, pinIndex, MBitMorePinMode.PullDown]), util);
          break;
      }
    }
  }, {
    key: "setPinOutput",
    value: function setPinOutput(pinIndex, level, util) {
      if (!this._useMbitMoreService) {
        this.send(BLECommandV0.CMD_PIN_OUTPUT, new Uint8Array([pinIndex, level]), util);
        return;
      }

      this.send(BLECommand.CMD_PIN, new Uint8Array([MBitMorePinCommand.SET_OUTPUT, pinIndex, level]), util);
    }
  }, {
    key: "setPinPWM",
    value: function setPinPWM(pinIndex, level, util) {
      var dataView = new DataView(new ArrayBuffer(2));
      dataView.setUint16(0, level, true);

      if (!this._useMbitMoreService) {
        this.send(BLECommandV0.CMD_PIN_PWM, new Uint8Array([pinIndex, dataView.getUint8(0), dataView.getUint8(1)]), util);
        return;
      }

      this.send(BLECommand.CMD_PIN, new Uint8Array([MBitMorePinCommand.SET_PWM, pinIndex, dataView.getUint8(0), dataView.getUint8(1)]), util);
    }
  }, {
    key: "setPinServo",
    value: function setPinServo(pinIndex, angle, range, center, util) {
      if (!range || range < 0) range = 0;
      if (!center || center < 0) center = 0;
      var dataView = new DataView(new ArrayBuffer(6));
      dataView.setUint16(0, angle, true);
      dataView.setUint16(2, range, true);
      dataView.setUint16(4, center, true);

      if (!this._useMbitMoreService) {
        this.send(BLECommandV0.CMD_PIN_SERVO, new Uint8Array([pinIndex, dataView.getUint8(0), dataView.getUint8(1), dataView.getUint8(2), dataView.getUint8(3), dataView.getUint8(4), dataView.getUint8(5)]), util);
        return;
      }

      this.send(BLECommand.CMD_PIN, new Uint8Array([MBitMorePinCommand.SET_SERVO, pinIndex, dataView.getUint8(0), dataView.getUint8(1), dataView.getUint8(2), dataView.getUint8(3), dataView.getUint8(4), dataView.getUint8(5)]), util);
    }
    /**
     * @return {number} - the latest value received for the tilt sensor's tilt about the X axis.
     */

  }, {
    key: "updateAnalogIn",

    /**
     * Update data of the analog input.
     * @return {Promise} - a Promise that resolves sensors which updated data of the analog input.
     */
    value: function updateAnalogIn() {
      var _this2 = this;

      if (Date.now() - this.analogInLastUpdated < this.analogInUpdateInterval) {
        return Promise.resolve(this._sensors);
      }

      var read = this._ble.read(MBITMORE_SERVICE.ID, MBITMORE_SERVICE.ANSLOG_IN, false).then(function (result) {
        var data = base64Util.base64ToUint8Array(result.message);
        var dataView = new DataView(data.buffer, 0);
        var value1 = dataView.getUint16(0, true);
        var value2 = dataView.getUint16(2, true);
        var value3 = dataView.getUint16(4, true); // This invalid values will come up sometimes but the cause is unknown.

        if (value1 === 255 && value2 === 255 && value3 === 255) {
          return _this2._sensors;
        }

        _this2._sensors.analogValue[_this2.analogIn[0]] = value1;
        _this2._sensors.analogValue[_this2.analogIn[1]] = value2;
        _this2._sensors.analogValue[_this2.analogIn[2]] = value3;
        _this2._sensors.powerVoltage = dataView.getUint16(6, true) / 1000;
        _this2.analogInLastUpdated = Date.now();
        return _this2._sensors;
      });

      return Promise.race([read, timeoutPromise(this.bleReadTimelimit).then(function () {
        return _this2._sensors;
      })]);
    }
    /**
     * Read analog input from the pin [0, 1, 2].
     * @param {number} pin - the pin to read.
     * @return {Promise} - a Promise that resolves analog input value of the pin.
     */

  }, {
    key: "readAnalogIn",
    value: function readAnalogIn(pin) {
      var _this3 = this;

      if (!this.isConnected()) {
        return Promise.resolve(0);
      }

      if (!this._useMbitMoreService) {
        return Promise.resolve(Math.round(this._sensors.analogValue[pin] * 1000 / 1023) / 10);
      }

      return this.updateAnalogIn().then(function () {
        return Math.round(_this3._sensors.analogValue[pin] * 1000 / 1023) / 10;
      });
    }
    /**
     * Read voltage of power supply [V].
     * @return {Promise} - a Promise that resolves voltage value.
     */

  }, {
    key: "readPowerVoltage",
    value: function readPowerVoltage() {
      var _this4 = this;

      if (!this.isConnected()) {
        return Promise.resolve(0);
      }

      if (!this._useMbitMoreService) {
        return Promise.resolve(0);
      }

      return this.updateAnalogIn().then(function () {
        return _this4._sensors.powerVoltage;
      });
    }
    /**
     * Update data of all sensors.
     * @return {Promise} - a Promise that resolves sensors which updated data of all sensor.
     */

  }, {
    key: "updateSensors",
    value: function updateSensors() {
      var _this5 = this;

      if (!this._useMbitMoreService) {
        return Promise.resolve(this._sensors);
      }

      if (Date.now() - this.sensorsLastUpdated < this.sensorsUpdateInterval) {
        return Promise.resolve(this._sensors);
      }

      var read = this._ble.read(MBITMORE_SERVICE.ID, MBITMORE_SERVICE.SENSORS, false).then(function (result) {
        var data = base64Util.base64ToUint8Array(result.message);
        var dataView = new DataView(data.buffer, 0); // Accelerometer

        _this5._sensors.accelerationX = 1000 * dataView.getInt16(0, true) / G;
        _this5._sensors.accelerationY = 1000 * dataView.getInt16(2, true) / G;
        _this5._sensors.accelerationZ = 1000 * dataView.getInt16(4, true) / G;
        _this5._sensors.accelerationStrength = Math.round(Math.sqrt(Math.pow(_this5._sensors.accelerationX, 2) + Math.pow(_this5._sensors.accelerationY, 2) + Math.pow(_this5._sensors.accelerationZ, 2)));
        _this5._sensors.pitch = Math.round(dataView.getInt16(6, true) * 180 / Math.PI / 1000);
        _this5._sensors.roll = Math.round(dataView.getInt16(8, true) * 180 / Math.PI / 1000); // Magnetometer

        _this5._sensors.compassHeading = dataView.getUint16(10, true);
        _this5._sensors.magneticForceX = dataView.getInt16(12, true);
        _this5._sensors.magneticForceY = dataView.getInt16(14, true);
        _this5._sensors.magneticForceZ = dataView.getInt16(16, true);
        _this5._sensors.magneticStrength = Math.round(Math.sqrt(Math.pow(_this5._sensors.magneticForceX, 2) + Math.pow(_this5._sensors.magneticForceY, 2) + Math.pow(_this5._sensors.magneticForceZ, 2))); // Light sensor

        _this5._sensors.lightLevel = dataView.getUint8(18);
        _this5._sensors.temperature = dataView.getUint8(19) - 128;
        _this5.sensorsLastUpdated = Date.now();
        return _this5._sensors;
      });

      return Promise.race([read, timeoutPromise(this.bleReadTimelimit).then(function () {
        return _this5._sensors;
      })]);
    }
    /**
     * Read light level from the light sensor.
     * @return {Promise} - a Promise that resolves light level.
     */

  }, {
    key: "readLightLevel",
    value: function readLightLevel() {
      var _this6 = this;

      if (!this.isConnected()) {
        return Promise.resolve(0);
      }

      return this.updateSensors().then(function () {
        return Math.round(_this6._sensors.lightLevel * 1000 / 255) / 10;
      });
    }
    /**
     * Read temperature (integer in celsius) from the micro:bit cpu.
     * @return {Promise} - a Promise that resolves temperature.
     */

  }, {
    key: "readTemperature",
    value: function readTemperature() {
      var _this7 = this;

      if (!this.isConnected()) {
        return Promise.resolve(0);
      }

      return this.updateSensors().then(function () {
        return _this7._sensors.temperature;
      });
    }
    /**
     * Read the angle (degrees) of heading direction from the north.
     * @return {Promise} - a Promise that resolves compass heading.
     */

  }, {
    key: "readCompassHeading",
    value: function readCompassHeading() {
      var _this8 = this;

      if (!this.isConnected()) {
        return Promise.resolve(0);
      }

      return this.updateSensors().then(function () {
        return _this8._sensors.compassHeading;
      });
    }
    /**
     * Read magnetic field X [micro teslas].
     * @return {Promise} - a Promise that resolves magnetic field strength.
     */

  }, {
    key: "readMagneticForceX",
    value: function readMagneticForceX() {
      var _this9 = this;

      if (!this.isConnected()) {
        return Promise.resolve(0);
      }

      return this.updateSensors().then(function () {
        return _this9._sensors.magneticForceX;
      });
    }
    /**
     * Read magnetic field Y [micro teslas].
     * @return {Promise} - a Promise that resolves magnetic field strength.
     */

  }, {
    key: "readMagneticForceY",
    value: function readMagneticForceY() {
      var _this10 = this;

      if (!this.isConnected()) {
        return Promise.resolve(0);
      }

      return this.updateSensors().then(function () {
        return _this10._sensors.magneticForceY;
      });
    }
    /**
     * Read magnetic field X [micro teslas].
     * @return {Promise} - a Promise that resolves magnetic field strength.
     */

  }, {
    key: "readMagneticForceZ",
    value: function readMagneticForceZ() {
      var _this11 = this;

      if (!this.isConnected()) {
        return Promise.resolve(0);
      }

      return this.updateSensors().then(function () {
        return _this11._sensors.magneticForceZ;
      });
    }
    /**
     * Read magnetic field strength [micro teslas].
     * @return {Promise} - a Promise that resolves magnetic field strength.
     */

  }, {
    key: "readMagneticStrength",
    value: function readMagneticStrength() {
      var _this12 = this;

      if (!this.isConnected()) {
        return Promise.resolve(0);
      }

      return this.updateSensors().then(function () {
        return _this12._sensors.magneticStrength;
      });
    }
    /**
     * Read the value of gravitational acceleration [milli-g] for X axis.
     * @return {Promise} - a Promise that resolves acceleration.
     */

  }, {
    key: "readAccelerationX",
    value: function readAccelerationX() {
      var _this13 = this;

      if (!this.isConnected()) {
        return Promise.resolve(0);
      }

      return this.updateSensors().then(function () {
        return _this13._sensors.accelerationX;
      });
    }
    /**
     * Read the value of gravitational acceleration [milli-g] for Y axis.
     * @return {Promise} - a Promise that resolves acceleration.
     */

  }, {
    key: "readAccelerationY",
    value: function readAccelerationY() {
      var _this14 = this;

      if (!this.isConnected()) {
        return Promise.resolve(0);
      }

      return this.updateSensors().then(function () {
        return _this14._sensors.accelerationY;
      });
    }
    /**
     * Read the value of gravitational acceleration [milli-g] for Z axis.
     * @return {Promise} - a Promise that resolves acceleration.
     */

  }, {
    key: "readAccelerationZ",
    value: function readAccelerationZ() {
      var _this15 = this;

      if (!this.isConnected()) {
        return Promise.resolve(0);
      }

      return this.updateSensors().then(function () {
        return _this15._sensors.accelerationZ;
      });
    }
    /**
     * Read acceleration strength [milli-g].
     * @return {Promise} - a Promise that resolves acceleration strength.
     */

  }, {
    key: "readAccelerationStrength",
    value: function readAccelerationStrength() {
      var _this16 = this;

      if (!this.isConnected()) {
        return Promise.resolve(0);
      }

      return this.updateSensors().then(function () {
        return _this16._sensors.accelerationStrength;
      });
    }
    /**
     * Read pitch [degrees] is 3D space.
     * @return {Promise} - a Promise that resolves pitch.
     */

  }, {
    key: "readPitch",
    value: function readPitch() {
      var _this17 = this;

      if (!this.isConnected()) {
        return Promise.resolve(0);
      }

      return this.updateSensors().then(function () {
        return _this17._sensors.pitch;
      });
    }
    /**
     * Read roll [degrees] is 3D space.
     * @return {Promise} - a Promise that resolves roll.
     */

  }, {
    key: "readRoll",
    value: function readRoll() {
      var _this18 = this;

      if (!this.isConnected()) {
        return Promise.resolve(0);
      }

      return this.updateSensors().then(function () {
        return _this18._sensors.roll;
      });
    }
    /**
     * Called by the runtime when user wants to scan for a peripheral.
     */

  }, {
    key: "scan",
    value: function scan() {
      if (this._ble) {
        this._ble.disconnect();
      }

      this._ble = new ble(this._runtime, this._extensionId, {
        filters: [{
          services: [MICROBIT_SERVICE.ID]
        }],
        optionalServices: [MBITMORE_SERVICE.ID]
      }, this._onConnect, this.reset);
    }
    /**
     * Called by the runtime when user wants to connect to a certain peripheral.
     * @param {number} id - the id of the peripheral to connect to.
     */

  }, {
    key: "connect",
    value: function connect(id) {
      var _this19 = this;

      if (this._ble) {
        this._ble.getServices = function () {
          return _this19._ble.sendRemoteRequest('getServices').catch(function (e) {
            _this19._ble._handleRequestError(e);
          });
        };

        this._ble.connectPeripheral(id);

        this.peripheralId = id;
      }
    }
    /**
     * Disconnect from the micro:bit.
     */

  }, {
    key: "disconnect",
    value: function disconnect() {
      if (this._ble) {
        this._ble.disconnect();
      }

      this.reset();
    }
    /**
     * Reset all the state and timeout/interval ids.
     */

  }, {
    key: "reset",
    value: function reset() {
      if (this._timeoutID) {
        window.clearTimeout(this._timeoutID);
        this._timeoutID = null;
      }
    }
    /**
     * Return true if connected to the micro:bit.
     * @return {boolean} - whether the micro:bit is connected.
     */

  }, {
    key: "isConnected",
    value: function isConnected() {
      var connected = false;

      if (this._ble) {
        connected = this._ble.isConnected();
      }

      return connected;
    }
    /**
     * Send a message to the peripheral BLE socket.
     * @param {number} command - the BLE command hex.
     * @param {Uint8Array} message - the message to write
     * @param {object} util - utility object provided by the runtime.
     */

  }, {
    key: "send",
    value: function send(command, message, util) {
      var _this20 = this;

      if (!this.isConnected()) return;

      if (this._busy) {
        if (util) util.yield();
        return;
      } // Set a busy flag so that while we are sending a message and waiting for
      // the response, additional messages are ignored.


      this._busy = true; // Set a timeout after which to reset the busy flag. This is used in case
      // a BLE message was sent for which we never received a response, because
      // e.g. the peripheral was turned off after the message was sent. We reset
      // the busy flag after a while so that it is possible to try again later.

      this._busyTimeoutID = window.setTimeout(function () {
        _this20._busy = false;
      }, 5000);
      var output = new Uint8Array(message.length + 1);
      output[0] = command; // attach command to beginning of message

      for (var i = 0; i < message.length; i++) {
        output[i + 1] = message[i];
      }

      var data = base64Util.uint8ArrayToBase64(output);

      this._ble.write(MICROBIT_SERVICE.ID, MICROBIT_SERVICE.TX, data, 'base64', true).then(function () {
        _this20._busy = false;
        window.clearTimeout(_this20._busyTimeoutID);
      });
    }
    /**
     * Starts reading data from peripheral after BLE has connected to it.
     * @private
     */

  }, {
    key: "_onConnect",
    value: function _onConnect() {
      var _this21 = this;

      this._ble.getServices().then(function (services) {
        _this21._ble.startNotifications(MICROBIT_SERVICE.ID, MICROBIT_SERVICE.RX, _this21._updateMicrobitService); // Workaround for ScratchLink v.1.3.0 MacOS returns service id as distorted format,
        // such as "0000A62D574E-1B34-4092-8DEE-4151F63B2865-0000-1000-8000-00805f9b34fb".


        _this21._useMbitMoreService = typeof services.find(function (element) {
          return element.toLowerCase().indexOf(MBITMORE_SERVICE.ID) !== -1;
        }) !== 'undefined';

        if (_this21._useMbitMoreService) {
          // Microbit More service is available.
          _this21.send(BLECommand.CMD_PROTOCOL, new Uint8Array([1])); // Set protocol ver.1.


          _this21._ble.startNotifications(MBITMORE_SERVICE.ID, MBITMORE_SERVICE.SHARED_DATA, _this21._updateMicrobitService);

          _this21._ble.startNotifications(MBITMORE_SERVICE.ID, MBITMORE_SERVICE.EVENT, _this21._updateMicrobitService);
        }
      });

      this._timeoutID = window.setTimeout(function () {
        return _this21._ble.handleDisconnectError(BLEDataStoppedError);
      }, BLETimeout);
    }
    /**
     * Process the sensor data from the incoming BLE characteristic.
     * @param {string} msg - the incoming BLE data.
     * @private
     */

  }, {
    key: "_updateMicrobitService",
    value: function _updateMicrobitService(msg) {
      var data = base64Util.base64ToUint8Array(msg);
      var dataView = new DataView(data.buffer, 0);
      var dataFormat = dataView.getInt8(19);

      if (dataFormat !== MBitMoreDataFormat.IO && dataFormat !== MBitMoreDataFormat.ANSLOG_IN && dataFormat !== MBitMoreDataFormat.LIGHT_SENSOR && dataFormat !== MBitMoreDataFormat.ACCELEROMETER && dataFormat !== MBitMoreDataFormat.MAGNETOMETER && dataFormat !== MBitMoreDataFormat.SHARED_DATA && dataFormat !== MBitMoreDataFormat.EVENT) {
        // Read original micro:bit data.
        this._sensors.tiltX = data[1] | data[0] << 8;
        if (this._sensors.tiltX > 1 << 15) this._sensors.tiltX -= 1 << 16;
        this._sensors.tiltY = data[3] | data[2] << 8;
        if (this._sensors.tiltY > 1 << 15) this._sensors.tiltY -= 1 << 16;
        this._sensors.buttonA = dataView.getUint8(4);
        this._sensors.buttonB = dataView.getUint8(5);
        this._sensors.touchPins[0] = dataView.getUint8(6);
        this._sensors.touchPins[1] = dataView.getUint8(7);
        this._sensors.touchPins[2] = dataView.getUint8(8);
        this._sensors.gestureState = dataView.getUint8(9);
      }

      switch (dataView.getUint8(19)) {
        case MBitMoreDataFormat.MIX_01:
          {
            this._sensors.analogValue[this.analogIn[0]] = dataView.getUint16(10, true);
            this._sensors.analogValue[this.analogIn[1]] = dataView.getUint16(12, true);
            this._sensors.analogValue[this.analogIn[2]] = dataView.getUint16(14, true);
            this._sensors.compassHeading = dataView.getUint16(16, true);
            this._sensors.lightLevel = dataView.getUint8(18);
            break;
          }

        case MBitMoreDataFormat.MIX_02:
          {
            this._sensors.sharedData[0] = dataView.getInt16(10, true);
            this._sensors.sharedData[1] = dataView.getInt16(12, true);
            this._sensors.sharedData[2] = dataView.getInt16(14, true);
            this._sensors.sharedData[3] = dataView.getInt16(16, true);
            var gpioData = dataView.getUint8(18);

            for (var i = 0; i < this.gpio.length; i++) {
              this._sensors.digitalValue[this.gpio[i]] = gpioData >> i & 1;
            }

            break;
          }

        case MBitMoreDataFormat.MIX_03:
          {
            this._sensors.magneticStrength = dataView.getUint16(10, true);
            this._sensors.accelerationX = 1000 * dataView.getInt16(12, true) / G;
            this._sensors.accelerationY = 1000 * dataView.getInt16(14, true) / G;
            this._sensors.accelerationZ = 1000 * dataView.getInt16(16, true) / G;
            break;
          }

        case MBitMoreDataFormat.SHARED_DATA:
          {
            this._sensors.sharedData[0] = dataView.getInt16(0, true);
            this._sensors.sharedData[1] = dataView.getInt16(2, true);
            this._sensors.sharedData[2] = dataView.getInt16(4, true);
            this._sensors.sharedData[3] = dataView.getInt16(6, true);
            break;
          }

        case MBitMoreDataFormat.EVENT:
          {
            var pinIndex = dataView.getUint8(0);

            if (!this._events[pinIndex]) {
              this._events[pinIndex] = {};
            }

            var event = dataView.getUint16(1, true);
            this._events[pinIndex][event] = dataView.getUint32(3, true);
            break;
          }
      }

      this.resetDisconnectTimeout();
    }
    /**
     * Cancel disconnect timeout and start counting again.
     */

  }, {
    key: "resetDisconnectTimeout",
    value: function resetDisconnectTimeout() {
      var _this22 = this;

      window.clearTimeout(this._timeoutID);
      this._timeoutID = window.setTimeout(function () {
        return _this22._ble.handleDisconnectError(BLEDataStoppedError);
      }, BLETimeout);
    }
    /**
     * Return whether the pin is connected to ground or not.
     * @param {number} pin - the pin to check touch state.
     * @return {boolean} - true if the pin is connected to GND.
     */

  }, {
    key: "isPinOnGrand",
    value: function isPinOnGrand(pin) {
      if (pin > 2) {
        if (!this._useMbitMoreService) {
          return this._sensors.digitalValue[pin];
        }

        if (Date.now() - this.digitalValuesLastUpdated > this.digitalValuesUpdateInterval) {
          // Return the last value immediately and start update for next check.
          this.updateDigitalValue().then();
          this.digitalValuesLastUpdated = Date.now();
        }

        return this._sensors.digitalValue[pin] === 0;
      }

      return this._sensors.touchPins[pin] !== 0;
    }
    /**
     * Update data of the digital input state.
     * @return {Promise} - Promise that resolves sensors which updated data of the ditital input state.
     */

  }, {
    key: "updateDigitalValue",
    value: function updateDigitalValue() {
      var _this23 = this;

      var read = this._ble.read(MBITMORE_SERVICE.ID, MBITMORE_SERVICE.IO, false).then(function (result) {
        var data = base64Util.base64ToUint8Array(result.message);
        var dataView = new DataView(data.buffer, 0);
        var gpioData = dataView.getUint32(0, true);

        for (var i = 0; i < _this23.gpio.length; i++) {
          _this23._sensors.digitalValue[_this23.gpio[i]] = gpioData >> _this23.gpio[i] & 1;
        }

        _this23.digitalValuesLastUpdated = Date.now();
        return _this23._sensors;
      });

      return Promise.race([read, timeoutPromise(this.bleReadTimelimit).then(function () {
        return _this23._sensors;
      })]);
    }
    /**
     * Read digital input from the pin.
     * @param {number} pin - the pin to read.
     * @return {Promise} - a Promise that resolves digital input value of the pin.
     */

  }, {
    key: "readDigitalValue",
    value: function readDigitalValue(pin) {
      var _this24 = this;

      if (!this.isConnected()) {
        return Promise.resolve(0);
      }

      if (!this._useMbitMoreService) {
        return Promise.resolve(this._sensors.digitalValue[pin]);
      }

      return this.updateDigitalValue().then(function () {
        return _this24._sensors.digitalValue[pin];
      });
    }
    /**
     * Return the value of the shared data.
     * @param {number} index - the shared data index.
     * @return {number} - the latest value received for the shared data.
     */

  }, {
    key: "getSharedData",
    value: function getSharedData(index) {
      return this._sensors.sharedData[index];
    }
  }, {
    key: "setSharedData",
    value: function setSharedData(sharedDataIndex, sharedDataValue, util) {
      var dataView = new DataView(new ArrayBuffer(2));
      dataView.setInt16(0, sharedDataValue, true);
      var command = this._useMbitMoreService ? BLECommand.CMD_SHARED_DATA : BLECommandV0.CMD_SHARED_DATA_SET;
      this.send(command, new Uint8Array([sharedDataIndex, dataView.getUint8(0), dataView.getUint8(1)]), util);
      this._sensors.sharedData[sharedDataIndex] = sharedDataValue;
    }
    /**
     * Return the last timestamp of the pin event or 0 when the event is not sent.
     * @param {number} pinIndex - index of the pin to get the event.
     * @param {MicroBitEvent} event - event to get.
     * @return {number} Timestamp of the last event.
     */

  }, {
    key: "getPinEventTimestamp",
    value: function getPinEventTimestamp(pinIndex, event) {
      if (this._events[pinIndex] && this._events[pinIndex][event]) {
        return this._events[pinIndex][event];
      }

      return 0;
    }
    /**
     * Set event type to be get from the pin.
     * @param {number} pinIndex - Index of the pin to set.
     * @param {MicroBitEventType} eventType - Event type to set.
     * @param {object} util - utility object provided by the runtime.
    */

  }, {
    key: "setPinEventType",
    value: function setPinEventType(pinIndex, eventType, util) {
      this.send(BLECommand.CMD_PIN, new Uint8Array([MBitMorePinCommand.SET_EVENT, pinIndex, eventType]), util);
    }
  }, {
    key: "tiltX",
    get: function get() {
      return this._sensors.tiltX;
    }
    /**
     * @return {number} - the latest value received for the tilt sensor's tilt about the Y axis.
     */

  }, {
    key: "tiltY",
    get: function get() {
      return this._sensors.tiltY;
    }
    /**
     * @return {boolean} - the latest value received for the A button.
     */

  }, {
    key: "buttonA",
    get: function get() {
      return this._sensors.buttonA;
    }
    /**
     * @return {boolean} - the latest value received for the B button.
     */

  }, {
    key: "buttonB",
    get: function get() {
      return this._sensors.buttonB;
    }
    /**
     * @return {number} - the latest value received for the motion gesture states.
     */

  }, {
    key: "gestureState",
    get: function get() {
      return this._sensors.gestureState;
    }
    /**
     * @return {Uint8Array} - the current state of the 5x5 LED matrix.
     */

  }, {
    key: "ledMatrixState",
    get: function get() {
      return this._sensors.ledMatrixState;
    }
  }]);

  return MbitMore;
}();
/**
 * Enum for tilt sensor direction.
 * @readonly
 * @enum {string}
 */


var MicroBitTiltDirection = {
  FRONT: 'front',
  BACK: 'back',
  LEFT: 'left',
  RIGHT: 'right',
  ANY: 'any'
};
/**
 * Enum for micro:bit gestures.
 * @readonly
 * @enum {string}
 */

var MicroBitGestures = {
  MOVED: 'moved',
  SHAKEN: 'shaken',
  JUMPED: 'jumped'
};
/**
 * Enum for micro:bit buttons.
 * @readonly
 * @enum {string}
 */

var MicroBitButtons = {
  A: 'A',
  B: 'B',
  ANY: 'any'
};
/**
 * Enum for micro:bit pin states.
 * @readonly
 * @enum {string}
 */

var MicroBitPinState = {
  ON: 'on',
  OFF: 'off'
};
var DigitalValue = {
  LOW: '0',
  HIGH: '1'
};
/**
 * Enum for axis menu options.
 * @readonly
 * @enum {string}
 */

var AxisValues = {
  X: 'x',
  Y: 'y',
  Z: 'z',
  Absolute: 'absolute'
};
/**
 * Scratch 3.0 blocks to interact with a MicroBit peripheral.
 */

var MbitMoreBlocks = /*#__PURE__*/function () {
  _createClass(MbitMoreBlocks, [{
    key: "BUTTONS_MENU",

    /**
     * @return {array} - text and values for each buttons menu element
     */
    get: function get() {
      return [{
        text: 'A',
        value: MicroBitButtons.A
      }, {
        text: 'B',
        value: MicroBitButtons.B
      }, {
        text: formatMessage({
          id: 'microbit.buttonsMenu.any',
          default: 'any',
          description: 'label for "any" element in button picker for micro:bit extension'
        }),
        value: MicroBitButtons.ANY
      }];
    }
    /**
     * @return {array} - text and values for each gestures menu element
     */

  }, {
    key: "GESTURES_MENU",
    get: function get() {
      return [{
        text: formatMessage({
          id: 'microbit.gesturesMenu.moved',
          default: 'moved',
          description: 'label for moved gesture in gesture picker for micro:bit extension'
        }),
        value: MicroBitGestures.MOVED
      }, {
        text: formatMessage({
          id: 'microbit.gesturesMenu.shaken',
          default: 'shaken',
          description: 'label for shaken gesture in gesture picker for micro:bit extension'
        }),
        value: MicroBitGestures.SHAKEN
      }, {
        text: formatMessage({
          id: 'microbit.gesturesMenu.jumped',
          default: 'jumped',
          description: 'label for jumped gesture in gesture picker for micro:bit extension'
        }),
        value: MicroBitGestures.JUMPED
      }];
    }
    /**
     * @return {array} - text and values for each pin state menu element
     */

  }, {
    key: "PIN_STATE_MENU",
    get: function get() {
      return [{
        text: formatMessage({
          id: 'microbit.pinStateMenu.on',
          default: 'on',
          description: 'label for on element in pin state picker for micro:bit extension'
        }),
        value: MicroBitPinState.ON
      }, {
        text: formatMessage({
          id: 'microbit.pinStateMenu.off',
          default: 'off',
          description: 'label for off element in pin state picker for micro:bit extension'
        }),
        value: MicroBitPinState.OFF
      }];
    }
    /**
     * @return {array} - text and values for each tilt direction menu element
     */

  }, {
    key: "TILT_DIRECTION_MENU",
    get: function get() {
      return [{
        text: formatMessage({
          id: 'microbit.tiltDirectionMenu.front',
          default: 'front',
          description: 'label for front element in tilt direction picker for micro:bit extension'
        }),
        value: MicroBitTiltDirection.FRONT
      }, {
        text: formatMessage({
          id: 'microbit.tiltDirectionMenu.back',
          default: 'back',
          description: 'label for back element in tilt direction picker for micro:bit extension'
        }),
        value: MicroBitTiltDirection.BACK
      }, {
        text: formatMessage({
          id: 'microbit.tiltDirectionMenu.left',
          default: 'left',
          description: 'label for left element in tilt direction picker for micro:bit extension'
        }),
        value: MicroBitTiltDirection.LEFT
      }, {
        text: formatMessage({
          id: 'microbit.tiltDirectionMenu.right',
          default: 'right',
          description: 'label for right element in tilt direction picker for micro:bit extension'
        }),
        value: MicroBitTiltDirection.RIGHT
      }];
    }
    /**
     * @return {array} - text and values for each tilt direction (plus "any") menu element
     */

  }, {
    key: "TILT_DIRECTION_ANY_MENU",
    get: function get() {
      return [].concat(_toConsumableArray(this.TILT_DIRECTION_MENU), [{
        text: formatMessage({
          id: 'microbit.tiltDirectionMenu.any',
          default: 'any',
          description: 'label for any direction element in tilt direction picker for micro:bit extension'
        }),
        value: MicroBitTiltDirection.ANY
      }]);
    }
  }, {
    key: "ANALOG_IN_MENU",
    get: function get() {
      return this._peripheral.analogIn.map(function (pinIndex) {
        return pinIndex.toString();
      });
    }
  }, {
    key: "SHARED_DATA_INDEX_MENU",
    get: function get() {
      var menu = [];

      for (var i = 0; i < this._peripheral.sharedDataLength; i++) {
        menu.push(i.toString());
      }

      return menu;
    }
  }, {
    key: "GPIO_MENU",
    get: function get() {
      return this._peripheral.gpio.map(function (pinIndex) {
        return pinIndex.toString();
      });
    }
  }, {
    key: "DIGITAL_VALUE_MENU",
    get: function get() {
      return [{
        text: formatMessage({
          id: 'mbitMore.digitalValueMenu.Low',
          default: '0',
          description: 'label for low value in digital output menu for microbit more extension'
        }),
        value: DigitalValue.LOW
      }, {
        text: formatMessage({
          id: 'mbitMore.digitalValueMenu.High',
          default: '1',
          description: 'label for high value in digital output menu for microbit more extension'
        }),
        value: DigitalValue.HIGH
      }];
    }
  }, {
    key: "AXIS_MENU",
    get: function get() {
      return [{
        text: formatMessage({
          id: 'mbitMore.axisMenu.x',
          default: 'x',
          description: 'label of X axis.'
        }),
        value: AxisValues.X
      }, {
        text: formatMessage({
          id: 'mbitMore.axisMenu.y',
          default: 'y',
          description: 'label of Y axis.'
        }),
        value: AxisValues.Y
      }, {
        text: formatMessage({
          id: 'mbitMore.axisMenu.z',
          default: 'z',
          description: 'label of Z axis.'
        }),
        value: AxisValues.Z
      }, {
        text: formatMessage({
          id: 'mbitMore.axisMenu.absolute',
          default: 'absolute',
          description: 'label of absolute value.'
        }),
        value: AxisValues.Absolute
      }];
    }
    /**
     * @return {array} - text and values for each pin mode menu element
     */

  }, {
    key: "PIN_MODE_MENU",
    get: function get() {
      return [{
        text: formatMessage({
          id: 'mbitMore.pinModeMenu.pullNone',
          default: 'pull none',
          description: 'label for pullNone mode'
        }),
        value: PinMode.PULL_NONE
      }, {
        text: formatMessage({
          id: 'mbitMore.pinModeMenu.pullUp',
          default: 'pull up',
          description: 'label for pullUp mode'
        }),
        value: PinMode.PULL_UP
      }, {
        text: formatMessage({
          id: 'mbitMore.pinModeMenu.pullDown',
          default: 'pull down',
          description: 'label for pullDown mode'
        }),
        value: PinMode.PULL_DOWN
      }];
    }
    /**
     * @return {array} - Menu items for event selector.
     */

  }, {
    key: "PIN_EVENT_MENU",
    get: function get() {
      return [{
        text: formatMessage({
          id: 'mbitMore.pinEventMenu.pulseLow',
          default: 'low pulse',
          description: 'label for low pulse event'
        }),
        value: MicroBitEvent.MICROBIT_PIN_EVT_PULSE_LO
      }, {
        text: formatMessage({
          id: 'mbitMore.pinEventMenu.pulseHigh',
          default: 'high pulse',
          description: 'label for high pulse event'
        }),
        value: MicroBitEvent.MICROBIT_PIN_EVT_PULSE_HI
      }, {
        text: formatMessage({
          id: 'mbitMore.pinEventMenu.fall',
          default: 'fall',
          description: 'label for fall event'
        }),
        value: MicroBitEvent.MICROBIT_PIN_EVT_FALL
      }, {
        text: formatMessage({
          id: 'mbitMore.pinEventMenu.rise',
          default: 'rise',
          description: 'label for rise event'
        }),
        value: MicroBitEvent.MICROBIT_PIN_EVT_RISE
      }];
    }
    /**
     * @return {array} - Menu items for event selector.
     */

  }, {
    key: "PIN_EVENT_TIMESTAMP_MENU",
    get: function get() {
      return [{
        text: formatMessage({
          id: 'mbitMore.pinEventTimestampMenu.pulseLow',
          default: 'low pulse',
          description: 'label for low pulse event'
        }),
        value: MicroBitEvent.MICROBIT_PIN_EVT_PULSE_LO
      }, {
        text: formatMessage({
          id: 'mbitMore.pinEventTimestampMenu.pulseHigh',
          default: 'high pulse',
          description: 'label for high pulse event'
        }),
        value: MicroBitEvent.MICROBIT_PIN_EVT_PULSE_HI
      }, {
        text: formatMessage({
          id: 'mbitMore.pinEventTimestampMenu.fall',
          default: 'fall',
          description: 'label for fall event'
        }),
        value: MicroBitEvent.MICROBIT_PIN_EVT_FALL
      }, {
        text: formatMessage({
          id: 'mbitMore.pinEventTimestampMenu.rise',
          default: 'rise',
          description: 'label for rise event'
        }),
        value: MicroBitEvent.MICROBIT_PIN_EVT_RISE
      }];
    }
    /**
     * @return {array} - Menu items for event listening.
     */

  }, {
    key: "PIN_EVENT_TYPE_MENU",
    get: function get() {
      return [{
        text: formatMessage({
          id: 'mbitMore.pinEventTypeMenu.none',
          default: 'none',
          description: 'label for remove event listener'
        }),
        value: MicroBitEventType.MICROBIT_PIN_EVENT_NONE
      }, {
        text: formatMessage({
          id: 'mbitMore.pinEventTypeMenu.pulse',
          default: 'pulse',
          description: 'label for pulse event type'
        }),
        value: MicroBitEventType.MICROBIT_PIN_EVENT_ON_PULSE
      }, {
        text: formatMessage({
          id: 'mbitMore.pinEventTypeMenu.edge',
          default: 'edge',
          description: 'label for edge event type'
        }),
        value: MicroBitEventType.MICROBIT_PIN_EVENT_ON_EDGE
      }];
    }
    /**
     * @return {array} - Menu items for connection state.
     */

  }, {
    key: "CONNECTION_STATE_MENU",
    get: function get() {
      return [{
        text: formatMessage({
          id: 'mbitMore.connectionStateMenu.connected',
          default: 'connected',
          description: 'label for connected'
        }),
        value: 'connected'
      }, {
        text: formatMessage({
          id: 'mbitMore.connectionStateMenu.disconnected',
          default: 'disconnected',
          description: 'label for disconnected'
        }),
        value: 'disconnected'
      }];
    }
    /**
     * Construct a set of MicroBit blocks.
     * @param {Runtime} runtime - the Scratch 3.0 runtime.
     */

  }], [{
    key: "EXTENSION_NAME",

    /**
     * @return {string} - the name of this extension.
     */
    get: function get() {
      return 'micro:bit more';
    }
    /**
     * @return {string} - the ID of this extension.
     */

  }, {
    key: "EXTENSION_ID",
    get: function get() {
      return EXTENSION_ID;
    }
    /**
     * @return {number} - the tilt sensor counts as "tilted" if its tilt angle meets or exceeds this threshold.
     */

  }, {
    key: "TILT_THRESHOLD",
    get: function get() {
      return 15;
    }
  }]);

  function MbitMoreBlocks(runtime) {
    _classCallCheck(this, MbitMoreBlocks);

    /**
     * The Scratch 3.0 runtime.
     * @type {Runtime}
     */
    this.runtime = runtime;
    formatMessage = runtime.formatMessage; // Create a new MicroBit peripheral instance

    this._peripheral = new MbitMore(this.runtime, MbitMoreBlocks.EXTENSION_ID);
    /**
     * Event holder of pin events.
     * @type {object.<number>} - list of pins which has events.
     */

    this.lastEvents = {};
    /**
     * URL from which this extension is loaded.
     * @type {string} - URL string.
     */

    this.extensionURL = 'https://github.com/yokobond/scratch-microbit-more/raw/master/';
  }
  /**
   * @returns {object} metadata for this extension and its blocks.
   */


  _createClass(MbitMoreBlocks, [{
    key: "getInfo",
    value: function getInfo() {
      this.setupTranslations();
      return {
        id: MbitMoreBlocks.EXTENSION_ID,
        name: MbitMoreBlocks.EXTENSION_NAME,
        extensionURL: this.extensionURL,
        blockIconURI: blockIconURI,
        showStatusButton: true,
        blocks: [{
          opcode: 'whenButtonPressed',
          text: formatMessage({
            id: 'microbit.whenButtonPressed',
            default: 'when [BTN] button pressed',
            description: 'when the selected button on the micro:bit is pressed'
          }),
          blockType: blockType.HAT,
          arguments: {
            BTN: {
              type: argumentType.STRING,
              menu: 'buttons',
              defaultValue: MicroBitButtons.A
            }
          }
        }, {
          opcode: 'isButtonPressed',
          text: formatMessage({
            id: 'microbit.isButtonPressed',
            default: '[BTN] button pressed?',
            description: 'is the selected button on the micro:bit pressed?'
          }),
          blockType: blockType.BOOLEAN,
          arguments: {
            BTN: {
              type: argumentType.STRING,
              menu: 'buttons',
              defaultValue: MicroBitButtons.A
            }
          }
        }, '---', {
          opcode: 'whenGesture',
          text: formatMessage({
            id: 'microbit.whenGesture',
            default: 'when [GESTURE]',
            description: 'when the selected gesture is detected by the micro:bit'
          }),
          blockType: blockType.HAT,
          arguments: {
            GESTURE: {
              type: argumentType.STRING,
              menu: 'gestures',
              defaultValue: MicroBitGestures.MOVED
            }
          }
        }, '---', {
          opcode: 'displaySymbol',
          text: formatMessage({
            id: 'microbit.displaySymbol',
            default: 'display [MATRIX]',
            description: 'display a pattern on the micro:bit display'
          }),
          blockType: blockType.COMMAND,
          arguments: {
            MATRIX: {
              type: argumentType.MATRIX,
              defaultValue: '0101010101100010101000100'
            }
          }
        }, {
          opcode: 'displayText',
          text: formatMessage({
            id: 'microbit.displayText',
            default: 'display text [TEXT]',
            description: 'display text on the micro:bit display'
          }),
          blockType: blockType.COMMAND,
          arguments: {
            TEXT: {
              type: argumentType.STRING,
              defaultValue: formatMessage({
                id: 'microbit.defaultTextToDisplay',
                default: 'Hello!',
                description: "default text to display.\n                                IMPORTANT - the micro:bit only supports letters a-z, A-Z.\n                                Please substitute a default word in your language\n                                that can be written with those characters,\n                                substitute non-accented characters or leave it as \"Hello!\".\n                                Check the micro:bit site documentation for details"
              })
            }
          }
        }, {
          opcode: 'displayClear',
          text: formatMessage({
            id: 'microbit.clearDisplay',
            default: 'clear display',
            description: 'display nothing on the micro:bit display'
          }),
          blockType: blockType.COMMAND
        }, '---', {
          opcode: 'whenTilted',
          text: formatMessage({
            id: 'microbit.whenTilted',
            default: 'when tilted [DIRECTION]',
            description: 'when the micro:bit is tilted in a direction'
          }),
          blockType: blockType.HAT,
          arguments: {
            DIRECTION: {
              type: argumentType.STRING,
              menu: 'tiltDirectionAny',
              defaultValue: MicroBitTiltDirection.ANY
            }
          }
        }, {
          opcode: 'isTilted',
          text: formatMessage({
            id: 'microbit.isTilted',
            default: 'tilted [DIRECTION]?',
            description: 'is the micro:bit is tilted in a direction?'
          }),
          blockType: blockType.BOOLEAN,
          arguments: {
            DIRECTION: {
              type: argumentType.STRING,
              menu: 'tiltDirectionAny',
              defaultValue: MicroBitTiltDirection.ANY
            }
          }
        }, {
          opcode: 'getTiltAngle',
          text: formatMessage({
            id: 'microbit.tiltAngle',
            default: 'tilt angle [DIRECTION]',
            description: 'how much the micro:bit is tilted in a direction'
          }),
          blockType: blockType.REPORTER,
          arguments: {
            DIRECTION: {
              type: argumentType.STRING,
              menu: 'tiltDirection',
              defaultValue: MicroBitTiltDirection.FRONT
            }
          }
        }, '---', {
          opcode: 'whenPinConnected',
          text: formatMessage({
            id: 'microbit.whenPinConnected',
            default: 'when pin [PIN] connected',
            description: 'when the pin detects a connection to Earth/Ground'
          }),
          blockType: blockType.HAT,
          arguments: {
            PIN: {
              type: argumentType.STRING,
              menu: 'gpio',
              defaultValue: '0'
            }
          }
        }, {
          opcode: 'isPinConnected',
          text: formatMessage({
            id: 'mbitMore.isPinConnected',
            default: '[PIN] pin connected?',
            description: 'is the selected pin connected to Earth/Ground?'
          }),
          blockType: blockType.BOOLEAN,
          arguments: {
            PIN: {
              type: argumentType.STRING,
              menu: 'gpio',
              defaultValue: '0'
            }
          }
        }, '---', {
          opcode: 'getLightLevel',
          text: formatMessage({
            id: 'mbitMore.lightLevel',
            default: 'light intensity',
            description: 'how much the amount of light falling on the LEDs on micro:bit'
          }),
          blockType: blockType.REPORTER
        }, {
          opcode: 'getTemperature',
          text: formatMessage({
            id: 'mbitMore.temperature',
            default: 'temperature',
            description: 'temperature (celsius) on the surface of CPU of micro:bit'
          }),
          blockType: blockType.REPORTER
        }, {
          opcode: 'getCompassHeading',
          text: formatMessage({
            id: 'mbitMore.compassHeading',
            default: 'angle with the North',
            description: 'angle from the North to the micro:bit heading direction'
          }),
          blockType: blockType.REPORTER
        }, {
          opcode: 'getPitch',
          text: formatMessage({
            id: 'mbitMore.pitch',
            default: 'pitch',
            description: 'nose up movement of the micro:bit from level'
          }),
          blockType: blockType.REPORTER
        }, {
          opcode: 'getRoll',
          text: formatMessage({
            id: 'mbitMore.roll',
            default: 'roll',
            description: 'clockwise circular movement of the micro:bit from level'
          }),
          blockType: blockType.REPORTER
        }, {
          opcode: 'getMagneticForce',
          text: formatMessage({
            id: 'mbitMore.magneticForce',
            default: 'magnetic force',
            description: 'value of magnetic force (micro tesla)'
          }),
          blockType: blockType.REPORTER,
          arguments: {
            AXIS: {
              type: argumentType.STRING,
              menu: 'axis',
              defaultValue: formatMessage({
                id: 'mbitMore.axisMenu.absolute',
                default: 'absolute',
                description: 'label of absolute value.'
              })
            }
          }
        }, {
          opcode: 'getAcceleration',
          text: formatMessage({
            id: 'mbitMore.acceleration',
            default: 'acceleration [AXIS]',
            description: 'value of acceleration on the axis (milli-g)'
          }),
          blockType: blockType.REPORTER,
          arguments: {
            AXIS: {
              type: argumentType.STRING,
              menu: 'axis',
              defaultValue: AxisValues.X
            }
          }
        }, {
          opcode: 'getPowerVoltage',
          text: formatMessage({
            id: 'mbitMore.powerVoltage',
            default: 'voltage of power',
            description: 'voltage value of power supply in volt'
          }),
          blockType: blockType.REPORTER,
          disableMonitor: true
        }, '---', {
          opcode: 'getAnalogValue',
          text: formatMessage({
            id: 'mbitMore.analogValue',
            default: 'analog value of pin [PIN]',
            description: 'analog input value of the pin'
          }),
          blockType: blockType.REPORTER,
          arguments: {
            PIN: {
              type: argumentType.STRING,
              menu: 'analogIn',
              defaultValue: '0'
            }
          }
        }, {
          opcode: 'getDigitalValue',
          text: formatMessage({
            id: 'mbitMore.digitalValue',
            default: 'digital value of pin [PIN]',
            description: 'digital input value of the pin'
          }),
          blockType: blockType.REPORTER,
          arguments: {
            PIN: {
              type: argumentType.STRING,
              menu: 'gpio',
              defaultValue: '0'
            }
          }
        }, {
          opcode: 'setPinMode',
          text: formatMessage({
            id: 'mbitMore.setPinMode',
            default: 'set pin [PIN] to input [MODE]',
            description: 'set a pin into the mode'
          }),
          blockType: blockType.COMMAND,
          arguments: {
            PIN: {
              type: argumentType.STRING,
              menu: 'gpio',
              defaultValue: '0'
            },
            MODE: {
              type: argumentType.STRING,
              menu: 'pinMode',
              defaultValue: PinMode.PULL_UP
            }
          }
        }, '---', {
          opcode: 'setOutput',
          text: formatMessage({
            id: 'mbitMore.setOutput',
            default: 'set [PIN] Digital [LEVEL]',
            description: 'set pin to Digtal Output mode and the level(0 or 1)'
          }),
          blockType: blockType.COMMAND,
          arguments: {
            PIN: {
              type: argumentType.STRING,
              menu: 'gpio',
              defaultValue: '0'
            },
            LEVEL: {
              type: argumentType.STRING,
              menu: 'digitalValue',
              defaultValue: DigitalValue.LOW
            }
          }
        }, {
          opcode: 'setPWM',
          text: formatMessage({
            id: 'mbitMore.setPWM',
            default: 'set [PIN] PWM [LEVEL]',
            description: 'set pin to PWM mode and the level(0 to 1023)'
          }),
          blockType: blockType.COMMAND,
          arguments: {
            PIN: {
              type: argumentType.STRING,
              menu: 'gpio',
              defaultValue: '0'
            },
            LEVEL: {
              type: argumentType.NUMBER,
              defaultValue: 0
            }
          }
        }, {
          opcode: 'setServo',
          text: formatMessage({
            id: 'mbitMore.setServo',
            default: 'set [PIN] Servo [ANGLE]',
            description: 'set pin to Servo mode and the angle(0 to 180)'
          }),
          blockType: blockType.COMMAND,
          arguments: {
            PIN: {
              type: argumentType.STRING,
              menu: 'gpio',
              defaultValue: '0'
            },
            ANGLE: {
              type: argumentType.NUMBER,
              defaultValue: 0
            },
            RANGE: {
              type: argumentType.NUMBER,
              defaultValue: 2000
            },
            CENTER: {
              type: argumentType.NUMBER,
              defaultValue: 1500
            }
          }
        }, '---', {
          opcode: 'setPinEventType',
          text: formatMessage({
            id: 'mbitMore.setPinEventType',
            default: 'catch event [EVENT_TYPE] on [PIN]',
            description: 'listen the event on the pin'
          }),
          blockType: blockType.COMMAND,
          arguments: {
            EVENT_TYPE: {
              type: argumentType.NUMBER,
              menu: 'pinEventTypeMenu',
              defaultValue: this.PIN_EVENT_TYPE_MENU[0].value
            },
            PIN: {
              type: argumentType.STRING,
              menu: 'gpio',
              defaultValue: '0'
            }
          }
        }, {
          opcode: 'whenPinEvent',
          text: formatMessage({
            id: 'mbitMore.whenPinEvent',
            default: 'when catch [EVENT] at pin [PIN]',
            description: 'when catch the event at the pin'
          }),
          blockType: blockType.HAT,
          arguments: {
            EVENT: {
              type: argumentType.NUMBER,
              menu: 'pinEventMenu',
              defaultValue: MicroBitEvent.MICROBIT_PIN_EVT_PULSE_LO
            },
            PIN: {
              type: argumentType.STRING,
              menu: 'gpio',
              defaultValue: '0'
            }
          }
        }, {
          opcode: 'getPinEventTimestamp',
          text: formatMessage({
            id: 'mbitMore.getPinEventTimestamp',
            default: 'timestamp of [EVENT] at [PIN]',
            description: 'value of the timestamp of the event'
          }),
          blockType: blockType.REPORTER,
          arguments: {
            EVENT: {
              type: argumentType.NUMBER,
              menu: 'pinEventTimestampMenu',
              defaultValue: MicroBitEvent.MICROBIT_PIN_EVT_PULSE_LO
            },
            PIN: {
              type: argumentType.STRING,
              menu: 'gpio',
              defaultValue: '0'
            }
          }
        }, '---', {
          opcode: 'getSharedData',
          text: formatMessage({
            id: 'mbitMore.getSharedData',
            default: 'shared data [INDEX]',
            description: 'value of the shared data'
          }),
          blockType: blockType.REPORTER,
          arguments: {
            INDEX: {
              type: argumentType.STRING,
              menu: 'sharedDataIndex',
              defaultValue: '0'
            }
          }
        }, {
          opcode: 'setSharedData',
          text: formatMessage({
            id: 'mbitMore.setSharedData',
            default: 'shared data [INDEX] to [VALUE]',
            description: 'set value into the shared data'
          }),
          blockType: blockType.COMMAND,
          arguments: {
            INDEX: {
              type: argumentType.STRING,
              menu: 'sharedDataIndex',
              defaultValue: '0'
            },
            VALUE: {
              type: argumentType.NUMBER,
              defaultValue: 0
            }
          }
        }, '---', {
          opcode: 'whenConnectionChanged',
          text: formatMessage({
            id: 'mbitMore.whenConnectionChanged',
            default: 'when micro:bit [STATE]',
            description: 'when a micro:bit connection state changed'
          }),
          blockType: blockType.HAT,
          arguments: {
            STATE: {
              type: argumentType.STRING,
              menu: 'connectionStateMenu',
              defaultValue: 'connected'
            }
          }
        }],
        menus: {
          buttons: {
            acceptReporters: true,
            items: this.BUTTONS_MENU
          },
          gestures: {
            acceptReporters: true,
            items: this.GESTURES_MENU
          },
          pinState: {
            acceptReporters: true,
            items: this.PIN_STATE_MENU
          },
          tiltDirection: {
            acceptReporters: true,
            items: this.TILT_DIRECTION_MENU
          },
          tiltDirectionAny: {
            acceptReporters: true,
            items: this.TILT_DIRECTION_ANY_MENU
          },
          analogIn: {
            acceptReporters: true,
            items: this.ANALOG_IN_MENU
          },
          digitalValue: {
            acceptReporters: true,
            items: this.DIGITAL_VALUE_MENU
          },
          sharedDataIndex: {
            acceptReporters: true,
            items: this.SHARED_DATA_INDEX_MENU
          },
          gpio: {
            acceptReporters: true,
            items: this.GPIO_MENU
          },
          axis: {
            acceptReporters: true,
            items: this.AXIS_MENU
          },
          pinMode: {
            acceptReporters: false,
            items: this.PIN_MODE_MENU
          },
          pinEventTypeMenu: {
            acceptReporters: false,
            items: this.PIN_EVENT_TYPE_MENU
          },
          pinEventMenu: {
            acceptReporters: false,
            items: this.PIN_EVENT_MENU
          },
          pinEventTimestampMenu: {
            acceptReporters: false,
            items: this.PIN_EVENT_TIMESTAMP_MENU
          },
          connectionStateMenu: {
            acceptReporters: false,
            items: this.CONNECTION_STATE_MENU
          }
        },
        translationMap: extensionTranslations
      };
    }
    /**
     * Test whether the A or B button is pressed
     * @param {object} args - the block's arguments.
     * @return {boolean} - true if the button is pressed.
     */

  }, {
    key: "whenButtonPressed",
    value: function whenButtonPressed(args) {
      if (args.BTN === 'any') {
        return this._peripheral.buttonA | this._peripheral.buttonB;
      } else if (args.BTN === 'A') {
        return this._peripheral.buttonA;
      } else if (args.BTN === 'B') {
        return this._peripheral.buttonB;
      }

      return false;
    }
    /**
     * Test whether the A or B button is pressed
     * @param {object} args - the block's arguments.
     * @return {boolean} - true if the button is pressed.
     */

  }, {
    key: "isButtonPressed",
    value: function isButtonPressed(args) {
      if (args.BTN === 'any') {
        return (this._peripheral.buttonA | this._peripheral.buttonB) !== 0;
      } else if (args.BTN === 'A') {
        return this._peripheral.buttonA !== 0;
      } else if (args.BTN === 'B') {
        return this._peripheral.buttonB !== 0;
      }

      return false;
    }
    /**
     * Test whether the micro:bit is moving
     * @param {object} args - the block's arguments.
     * @return {boolean} - true if the micro:bit is moving.
     */

  }, {
    key: "whenGesture",
    value: function whenGesture(args) {
      var gesture = cast.toString(args.GESTURE);

      if (gesture === 'moved') {
        return this._peripheral.gestureState >> 2 & 1;
      } else if (gesture === 'shaken') {
        return this._peripheral.gestureState & 1;
      } else if (gesture === 'jumped') {
        return this._peripheral.gestureState >> 1 & 1;
      }

      return false;
    }
    /**
     * Display a predefined symbol on the 5x5 LED matrix.
     * @param {object} args - the block's arguments.
     * @return {Promise} - a Promise that resolves after a tick.
     */

  }, {
    key: "displaySymbol",
    value: function displaySymbol(args) {
      var symbol = cast.toString(args.MATRIX).replace(/\s/g, '');

      var reducer = function reducer(accumulator, c, index) {
        var value = c === '0' ? accumulator : accumulator + Math.pow(2, index);
        return value;
      };

      var hex = symbol.split('').reduce(reducer, 0);

      if (hex !== null) {
        this._peripheral.ledMatrixState[0] = hex & 0x1F;
        this._peripheral.ledMatrixState[1] = hex >> 5 & 0x1F;
        this._peripheral.ledMatrixState[2] = hex >> 10 & 0x1F;
        this._peripheral.ledMatrixState[3] = hex >> 15 & 0x1F;
        this._peripheral.ledMatrixState[4] = hex >> 20 & 0x1F;

        this._peripheral.displayMatrix(this._peripheral.ledMatrixState);
      }

      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve();
        }, BLESendInterval);
      });
    }
    /**
     * Display text on the 5x5 LED matrix.
     * @param {object} args - the block's arguments.
     * @return {Promise} - a Promise that resolves after the text is done printing.
     * Note the limit is 19 characters
     * The print time is calculated by multiplying the number of horizontal pixels
     * by the default scroll delay of 120ms.
     * The number of horizontal pixels = 6px for each character in the string,
     * 1px before the string, and 5px after the string.
     */

  }, {
    key: "displayText",
    value: function displayText(args) {
      var text = String(args.TEXT).substring(0, 19);
      if (text.length > 0) this._peripheral.displayText(text);
      var yieldDelay = 120 * (6 * text.length + 6);
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve();
        }, yieldDelay);
      });
    }
    /**
     * Turn all 5x5 matrix LEDs off.
     * @return {Promise} - a Promise that resolves after a tick.
     */

  }, {
    key: "displayClear",
    value: function displayClear() {
      for (var i = 0; i < 5; i++) {
        this._peripheral.ledMatrixState[i] = 0;
      }

      this._peripheral.displayMatrix(this._peripheral.ledMatrixState);

      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve();
        }, BLESendInterval);
      });
    }
    /**
     * Test whether the tilt sensor is currently tilted.
     * @param {object} args - the block's arguments.
     * @property {TiltDirection} DIRECTION - the tilt direction to test (front, back, left, right, or any).
     * @return {boolean} - true if the tilt sensor is tilted past a threshold in the specified direction.
     */

  }, {
    key: "whenTilted",
    value: function whenTilted(args) {
      return this._isTilted(args.DIRECTION);
    }
    /**
     * Test whether the tilt sensor is currently tilted.
     * @param {object} args - the block's arguments.
     * @property {TiltDirection} DIRECTION - the tilt direction to test (front, back, left, right, or any).
     * @return {boolean} - true if the tilt sensor is tilted past a threshold in the specified direction.
     */

  }, {
    key: "isTilted",
    value: function isTilted(args) {
      return this._isTilted(args.DIRECTION);
    }
    /**
     * @param {object} args - the block's arguments.
     * @property {TiltDirection} DIRECTION - the direction (front, back, left, right) to check.
     * @return {number} - the tilt sensor's angle in the specified direction.
     * Note that getTiltAngle(front) = -getTiltAngle(back) and getTiltAngle(left) = -getTiltAngle(right).
     */

  }, {
    key: "getTiltAngle",
    value: function getTiltAngle(args) {
      return this._getTiltAngle(args.DIRECTION);
    }
    /**
     * Test whether the tilt sensor is currently tilted.
     * @param {TiltDirection} direction - the tilt direction to test (front, back, left, right, or any).
     * @return {boolean} - true if the tilt sensor is tilted past a threshold in the specified direction.
     * @private
     */

  }, {
    key: "_isTilted",
    value: function _isTilted(direction) {
      switch (direction) {
        case MicroBitTiltDirection.ANY:
          return Math.abs(this._peripheral.tiltX / 10) >= MbitMoreBlocks.TILT_THRESHOLD || Math.abs(this._peripheral.tiltY / 10) >= MbitMoreBlocks.TILT_THRESHOLD;

        default:
          return this._getTiltAngle(direction) >= MbitMoreBlocks.TILT_THRESHOLD;
      }
    }
    /**
     * @param {TiltDirection} direction - the direction (front, back, left, right) to check.
     * @return {number} - the tilt sensor's angle in the specified direction.
     * Note that getTiltAngle(front) = -getTiltAngle(back) and getTiltAngle(left) = -getTiltAngle(right).
     * @private
     */

  }, {
    key: "_getTiltAngle",
    value: function _getTiltAngle(direction) {
      switch (direction) {
        case MicroBitTiltDirection.FRONT:
          return Math.round(this._peripheral.tiltY / -10);

        case MicroBitTiltDirection.BACK:
          return Math.round(this._peripheral.tiltY / 10);

        case MicroBitTiltDirection.LEFT:
          return Math.round(this._peripheral.tiltX / -10);

        case MicroBitTiltDirection.RIGHT:
          return Math.round(this._peripheral.tiltX / 10);

        default:
          log.warn("Unknown tilt direction in _getTiltAngle: ".concat(direction));
      }
    }
    /**
     * @param {object} args - the block's arguments.
     * @return {boolean} - the touch pin state.
     * @private
     */

  }, {
    key: "whenPinConnected",
    value: function whenPinConnected(args) {
      var pin = parseInt(args.PIN, 10);
      if (isNaN(pin)) return;
      if (!this.GPIO_MENU.includes(pin.toString())) return false;
      return this._peripheral.isPinOnGrand(pin);
    } // Mbit More extended functions

    /**
     * Test the selected pin is connected to the ground.
     * @param {object} args - the block's arguments.
     * @return {boolean} - true if the pin is connected.
     */

  }, {
    key: "isPinConnected",
    value: function isPinConnected(args) {
      var pin = parseInt(args.PIN, 10);
      if (isNaN(pin)) return false;
      if (!this.GPIO_MENU.includes(pin.toString())) return false;
      return this._peripheral.isPinOnGrand(pin);
    }
    /**
     * Get amount of light (0 - 255) on the LEDs.
     * @return {Promise} - a Promise that resolves light level.
     */

  }, {
    key: "getLightLevel",
    value: function getLightLevel() {
      return this._peripheral.readLightLevel();
    }
    /**
     * Get temperature (integer in celsius) of micro:bit.
     * @return {Promise} - a Promise that resolves temperature.
     */

  }, {
    key: "getTemperature",
    value: function getTemperature() {
      return this._peripheral.readTemperature();
    }
    /**
     * Return angle from the north to the micro:bit heading direction.
     * @return {Promise} - a Promise that resolves compass heading angle from the north (0 - 359 degrees).
     */

  }, {
    key: "getCompassHeading",
    value: function getCompassHeading() {
      return this._peripheral.readCompassHeading();
    }
    /**
     * Return voltage of the power supply [V].
     * @return {Promise} - a Promise that resolves voltage value of the power supply.
     */

  }, {
    key: "getPowerVoltage",
    value: function getPowerVoltage() {
      return this._peripheral.readPowerVoltage();
    }
    /**
     * Return analog value of the pin.
     * @param {object} args - the block's arguments.
     * @return {Promise} - a Promise that resolves analog input value of the pin.
     */

  }, {
    key: "getAnalogValue",
    value: function getAnalogValue(args) {
      var pin = parseInt(args.PIN, 10);
      if (isNaN(pin)) return 0;
      if (pin < 0 || pin > 2) return 0;
      return this._peripheral.readAnalogIn(pin);
    }
    /**
     * Return digital value of the pin.
     * @param {object} args - the block's arguments.
     * @return {Promise} - a Promise that resolves digital input value of the pin.
     */

  }, {
    key: "getDigitalValue",
    value: function getDigitalValue(args) {
      var pin = parseInt(args.PIN, 10);
      if (isNaN(pin)) return 0;
      if (!this.GPIO_MENU.includes(pin.toString())) return 0;
      return this._peripheral.readDigitalValue(pin);
    }
    /**
     * Return value of the shared data.
     * @param {object} args - the block's arguments.
     * @property {string} args.INDEX - index of the shared data.
     * @return {number} - analog value of the shared data.
     */

  }, {
    key: "getSharedData",
    value: function getSharedData(args) {
      var sharedDataIndex = parseInt(args.INDEX, 10);
      if (Number.isNaN(sharedDataIndex)) return 0;
      if (!this.SHARED_DATA_INDEX_MENU.includes(sharedDataIndex.toString())) return 0;
      return this._peripheral.getSharedData(sharedDataIndex);
    }
    /**
     * Set the shared data value.
     * @param {object} args - the block's arguments.
     * @property {string} args.INDEX - index of the shared data.
     * @param {object} util - utility object provided by the runtime.
     * @return {undefined}
     */

  }, {
    key: "setSharedData",
    value: function setSharedData(args, util) {
      var sharedDataIndex = parseInt(args.INDEX, 10);
      if (Number.isNaN(sharedDataIndex)) return;
      if (!this.SHARED_DATA_INDEX_MENU.includes(sharedDataIndex.toString())) return;
      var sharedDataValue = parseInt(args.VALUE, 10);
      if (Number.isNaN(sharedDataValue)) return;

      this._peripheral.setSharedData(sharedDataIndex, sharedDataValue, util);
    }
    /**
     * Set mode of the pin.
     * @param {object} args - the block's arguments.
     * @property {string} args.PIN - index of the pin.
     * @property {string} args.MODE - mode to set.
     * @param {object} util - utility object provided by the runtime.
     * @return {undefined}
     */

  }, {
    key: "setPinMode",
    value: function setPinMode(args, util) {
      var pin = parseInt(args.PIN, 10);
      if (isNaN(pin)) return;
      if (pin < 0 || pin > 20) return;

      this._peripheral.setPinMode(pin, args.MODE, util);
    }
    /**
     * Set the pin to Output mode and level.
     * @param {object} args - the block's arguments.
     * @param {object} util - utility object provided by the runtime.
     * @return {undefined}
     */

  }, {
    key: "setOutput",
    value: function setOutput(args, util) {
      var pin = parseInt(args.PIN, 10);
      if (isNaN(pin)) return;
      if (pin < 0 || pin > 20) return;
      var level = parseInt(args.LEVEL, 10);
      if (isNaN(level)) return;
      level = Math.max(0, level);
      level = Math.min(level, 1);

      this._peripheral.setPinOutput(pin, level, util);
    }
    /**
     * Set the pin to PWM mode and level.
     * @param {object} args - the block's arguments.
     * @param {object} util - utility object provided by the runtime.
     * @return {undefined}
     */

  }, {
    key: "setPWM",
    value: function setPWM(args, util) {
      var pin = parseInt(args.PIN, 10);
      if (isNaN(pin)) return;
      if (pin < 0 || pin > 20) return;
      var level = parseInt(args.LEVEL, 10);
      if (isNaN(level)) return;
      level = Math.max(0, level);
      level = Math.min(level, 1023);

      this._peripheral.setPinPWM(pin, level, util);
    }
    /**
     * Set the pin to Servo mode and angle.
     * @param {object} args - the block's arguments.
     * @param {object} util - utility object provided by the runtime.
     * @return {undefined}
     */

  }, {
    key: "setServo",
    value: function setServo(args, util) {
      var pin = parseInt(args.PIN, 10);
      if (isNaN(pin)) return;
      if (pin < 0 || pin > 20) return;
      var angle = parseInt(args.ANGLE, 10);
      if (isNaN(angle)) return;
      angle = Math.max(0, angle);
      angle = Math.min(angle, 180); // let range = parseInt(args.RANGE, 10);
      // if (isNaN(range)) range = 0;
      // range = Math.max(0, range);
      // let center = parseInt(args.CENTER, 10);
      // if (isNaN(center)) range = 0;
      // center = Math.max(0, center);

      this._peripheral.setPinServo(pin, angle, null, null, util);
    }
    /**
     * Return the value of magnetic force [micro tesla] on axis.
     * @param {object} args - the block's arguments.
     * @property {AxisValues} AXIS - the axis (X, Y, Z, Absolute).
     * @return {Promise} -  a Promise that resolves value of magnetic force.
     */

  }, {
    key: "getMagneticForce",
    value: function getMagneticForce(args) {
      switch (args.AXIS) {
        case AxisValues.X:
        case this.AXIS_MENU.find(function (item) {
          return item.value === AxisValues.X;
        }).text:
          return this._peripheral.readMagneticForceX();

        case AxisValues.Y:
        case this.AXIS_MENU.find(function (item) {
          return item.value === AxisValues.Y;
        }).text:
          return this._peripheral.readMagneticForceY();

        case AxisValues.Z:
        case this.AXIS_MENU.find(function (item) {
          return item.value === AxisValues.Z;
        }).text:
          return this._peripheral.readMagneticForceZ();

        case AxisValues.Absolute:
        case this.AXIS_MENU.find(function (item) {
          return item.value === AxisValues.Absolute;
        }).text:
          return this._peripheral.readMagneticStrength();

        default:
          log.warn("Unknown axis in getMagneticForce: ".concat(args.AXIS));
      }
    }
    /**
     * Return the value of acceleration on the specified axis.
     * @param {object} args - the block's arguments.
     * @property {AxisValues} AXIS - the axis (X, Y, Z).
     * @return {Promise} - a Promise that resolves acceleration on the axis [milli-g].
     */

  }, {
    key: "getAcceleration",
    value: function getAcceleration(args) {
      switch (args.AXIS) {
        case AxisValues.X:
        case this.AXIS_MENU.find(function (item) {
          return item.value === AxisValues.X;
        }).text:
          return this._peripheral.readAccelerationX();

        case AxisValues.Y:
        case this.AXIS_MENU.find(function (item) {
          return item.value === AxisValues.Y;
        }).text:
          return this._peripheral.readAccelerationY();

        case AxisValues.Z:
        case this.AXIS_MENU.find(function (item) {
          return item.value === AxisValues.Z;
        }).text:
          return this._peripheral.readAccelerationZ();

        case AxisValues.Absolute:
        case this.AXIS_MENU.find(function (item) {
          return item.value === AxisValues.Absolute;
        }).text:
          return this._peripheral.readAccelerationStrength();

        default:
          log.warn("Unknown axis in getAcceleration: ".concat(args.AXIS));
      }
    }
    /**
     * Return pitch [degrees] of the micro:bit heading direction.
     * @return {Promise} - a Promise that resolves pitch.
     */

  }, {
    key: "getPitch",
    value: function getPitch() {
      return this._peripheral.readPitch();
    }
    /**
     * Return roll [degrees] of the micro:bit heading direction.
     * @return {Promise} - a Promise that resolves roll.
     */

  }, {
    key: "getRoll",
    value: function getRoll() {
      return this._peripheral.readRoll();
    }
    /**
     * Set listening event type at the pin.
     * @param {object} args - the block's arguments.
     * @property {string} args.PIN - index of the pin.
     * @property {string} args.EVENT_TYPE - event to listen.
     * @param {object} util - utility object provided by the runtime.
     * @return {Promise} - a Promise that resolves the setting.
    */

  }, {
    key: "setPinEventType",
    value: function setPinEventType(args, util) {
      var pin = parseInt(args.PIN, 10);
      if (isNaN(pin)) return;
      if (pin < 0 || pin > 20) return;
      var eventType = parseInt(args.EVENT_TYPE, 10);
      if (isNaN(eventType)) return 0;
      return this._peripheral.setPinEventType(pin, eventType, util);
    }
    /**
     * Rerutn timestamp value (micro senonds) of the event.
     * @param {object} args - the block's arguments.
     * @property {string} args.PIN - index of the pin.
     * @property {string} args.EVENT - event value to get.
     * @param {object} util - utility object provided by the runtime.
     * @return {number} - timestamp of the event.
     */

  }, {
    key: "getPinEventTimestamp",
    value: function getPinEventTimestamp(args) {
      var pinIndex = parseInt(args.PIN, 10);
      if (isNaN(pinIndex)) return 0;
      if (pinIndex < 0 || pinIndex > 20) return 0;
      var event = parseInt(args.EVENT, 10);
      if (isNaN(event)) return 0;
      return this._peripheral.getPinEventTimestamp(pinIndex, event);
    }
    /**
     * Test whether the event rose at the pin.
     * @param {object} args - the block's arguments.
     * @property {string} args.EVENT - event to catch.
     * @return {boolean} - true if the event rose.
     */

  }, {
    key: "whenPinEvent",
    value: function whenPinEvent(args) {
      var pinIndex = parseInt(args.PIN, 10);
      if (isNaN(pinIndex)) return false;
      var event = parseInt(args.EVENT, 10);
      if (isNaN(event)) return 0;
      var prevTimestamp = this.getLastEventTimestamp(pinIndex, event);

      var lastTimestamp = this._peripheral.getPinEventTimestamp(pinIndex, event);

      this.setLastEventTimestamp(pinIndex, event, lastTimestamp);
      if (lastTimestamp === 0) return false;
      return prevTimestamp !== lastTimestamp;
    }
    /**
     * Return timestamp of the event at the pin.
     * @param {number} pinIndex - index of the pin.
     * @param {number} event - event to get timestamp.
     * @return {number} - timestamp of the event.
     */

  }, {
    key: "getLastEventTimestamp",
    value: function getLastEventTimestamp(pinIndex, event) {
      if (this.lastEvents[pinIndex] && this.lastEvents[pinIndex][event]) {
        return this.lastEvents[pinIndex][event];
      }

      return 0;
    }
    /**
     * Hold timestamp of the event at the pin.
     * @param {number} pinIndex - index of the pin.
     * @param {number} event - event to be save.
     * @param {number} timestamp - timestamp value of the event.
     */

  }, {
    key: "setLastEventTimestamp",
    value: function setLastEventTimestamp(pinIndex, event, timestamp) {
      if (!this.lastEvents[pinIndex]) this.lastEvents[pinIndex] = {};
      this.lastEvents[pinIndex][event] = timestamp;
    }
    /**
     * Test whether a micro:bit connected.
     * @param {object} args - the block's arguments.
     * @property {string} args.STATE - the state of connection to check.
     * @return {boolean} - true if the state is matched.
     */

  }, {
    key: "whenConnectionChanged",
    value: function whenConnectionChanged(args) {
      var state = args.STATE === 'connected';
      return state === this._peripheral.isConnected();
    }
    /**
     * Setup format-message for this extension.
     */

  }, {
    key: "setupTranslations",
    value: function setupTranslations() {
      var localeSetup = formatMessage.setup();

      if (localeSetup && localeSetup.translations[localeSetup.locale]) {
        Object.assign(localeSetup.translations[localeSetup.locale], extensionTranslations[localeSetup.locale]);
      }
    }
  }]);

  return MbitMoreBlocks;
}();

var extensionTranslations = {
  'ja': {
    'mbitMore.isPinConnected': 'ピン [PIN] がつながった',
    'mbitMore.lightLevel': '明るさ',
    'mbitMore.temperature': '温度',
    'mbitMore.compassHeading': '北からの角度',
    'mbitMore.magneticForce': '磁力 [AXIS]',
    'mbitMore.acceleration': '加速度 [AXIS]',
    'mbitMore.pitch': 'ピッチ',
    'mbitMore.roll': 'ロール',
    'mbitMore.analogValue': 'ピン [PIN] のアナログレベル',
    'mbitMore.powerVoltage': '電源電圧',
    'mbitMore.digitalValue': 'ピン [PIN] のデジタルレベル',
    'mbitMore.getSharedData': '共有データ [INDEX]',
    'mbitMore.setSharedData': '共有データ [INDEX] を [VALUE] にする',
    'mbitMore.setPinMode': 'ピン [PIN] を [MODE] 入力にする',
    'mbitMore.setOutput': 'ピン [PIN] をデジタルレベル [LEVEL] にする',
    'mbitMore.setPWM': 'ピン [PIN] をアナログレベル [LEVEL] にする',
    'mbitMore.setServo': 'ピン [PIN] をサーボ [ANGLE] 度にする',
    'mbitMore.digitalValueMenu.Low': '0',
    'mbitMore.digitalValueMenu.High': '1',
    'mbitMore.axisMenu.x': 'x',
    'mbitMore.axisMenu.y': 'y',
    'mbitMore.axisMenu.z': 'z',
    'mbitMore.axisMenu.absolute': '大きさ',
    'mbitMore.pinModeMenu.pullNone': '開放',
    'mbitMore.pinModeMenu.pullUp': 'プルアップ',
    'mbitMore.pinModeMenu.pullDown': 'プルダウン',
    'mbitMore.setPinEventType': 'ピン [PIN] で [EVENT_TYPE] ',
    'mbitMore.pinEventTypeMenu.none': 'イベントを受けない',
    'mbitMore.pinEventTypeMenu.edge': 'エッジタイプのイベントを受ける',
    'mbitMore.pinEventTypeMenu.pulse': 'パルスタイプのイベントを受ける',
    'mbitMore.whenPinEvent': 'ピン [PIN] で [EVENT] イベントが上がった',
    'mbitMore.pinEventMenu.rise': 'ライズ',
    'mbitMore.pinEventMenu.fall': 'フォール',
    'mbitMore.pinEventMenu.pulseHigh': 'ハイパルス',
    'mbitMore.pinEventMenu.pulseLow': 'ローパルス',
    'mbitMore.getPinEventTimestamp': 'ピン [PIN] の [EVENT]',
    'mbitMore.pinEventTimestampMenu.rise': 'ライズの時刻',
    'mbitMore.pinEventTimestampMenu.fall': 'フォールの時刻',
    'mbitMore.pinEventTimestampMenu.pulseHigh': 'ハイパルスの期間',
    'mbitMore.pinEventTimestampMenu.pulseLow': 'ローパルスの期間',
    'mbitMore.connectionStateMenu.connected': 'つながった',
    'mbitMore.connectionStateMenu.disconnected': '切れた',
    'mbitMore.whenConnectionChanged': 'micro:bit と[STATE]とき'
  },
  'ja-Hira': {
    'mbitMore.isPinConnected': 'ピン [PIN] がつながった',
    'mbitMore.lightLevel': 'あかるさ',
    'mbitMore.temperature': 'おんど',
    'mbitMore.compassHeading': 'きたからのかくど',
    'mbitMore.magneticForce': 'じりょく [AXIS]',
    'mbitMore.acceleration': 'かそくど [AXIS]',
    'mbitMore.pitch': 'ピッチ',
    'mbitMore.roll': 'ロール',
    'mbitMore.analogValue': 'ピン [PIN] のアナログレベル',
    'mbitMore.powerVoltage': 'でんげんでんあつ',
    'mbitMore.digitalValue': 'ピン [PIN] のデジタルレベル',
    'mbitMore.getSharedData': 'きょうゆうデータ [INDEX]',
    'mbitMore.setSharedData': 'きょうゆうデータ [INDEX] を [VALUE] にする',
    'mbitMore.setPinMode': 'ピン [PIN] を [MODE] にゅうりょくにする',
    'mbitMore.setOutput': 'ピン [PIN] をデジタルレベル [LEVEL] にする',
    'mbitMore.setPWM': 'ピン [PIN] をアナログレベル [LEVEL] にする',
    'mbitMore.setServo': 'ピン [PIN] をサーボ [ANGLE] どにする',
    'mbitMore.digitalValueMenu.Low': '0',
    'mbitMore.digitalValueMenu.High': '1',
    'mbitMore.axisMenu.x': 'x',
    'mbitMore.axisMenu.y': 'y',
    'mbitMore.axisMenu.z': 'z',
    'mbitMore.axisMenu.absolute': 'おおきさ',
    'mbitMore.pinModeMenu.pullNone': 'かいほう',
    'mbitMore.pinModeMenu.pullUp': 'プルアップ',
    'mbitMore.pinModeMenu.pullDown': 'プルダウン',
    'mbitMore.setPinEventType': 'ピン [PIN] で [EVENT_TYPE]',
    'mbitMore.pinEventTypeMenu.none': 'イベントをうけない',
    'mbitMore.pinEventTypeMenu.edge': 'エッジタイプのイベントをうける',
    'mbitMore.pinEventTypeMenu.pulse': 'パルスタイプのイベントをうける',
    'mbitMore.whenPinEvent': 'ピン [PIN] で [EVENT] イベントがあがった',
    'mbitMore.pinEventMenu.rise': 'ライズ',
    'mbitMore.pinEventMenu.fall': 'フォール',
    'mbitMore.pinEventMenu.pulseHigh': 'ハイパルス',
    'mbitMore.pinEventMenu.pulseLow': 'ローパルス',
    'mbitMore.getPinEventTimestamp': 'ピン [PIN] の [EVENT]',
    'mbitMore.pinEventTimestampMenu.rise': 'ライズのじかん',
    'mbitMore.pinEventTimestampMenu.fall': 'フォールのじかん',
    'mbitMore.pinEventTimestampMenu.pulseHigh': 'ハイパルスのきかん',
    'mbitMore.pinEventTimestampMenu.pulseLow': 'ローパルスのきかん',
    'mbitMore.connectionStateMenu.connected': 'つながった',
    'mbitMore.connectionStateMenu.disconnected': 'きれた',
    'mbitMore.whenConnectionChanged': 'micro:bit と[STATE]とき'
  },
  'pt-br': {
    'mbitMore.isPinConnected': 'O Pino[PIN] está conectado?',
    'mbitMore.lightLevel': 'Intensidade da Luz',
    'mbitMore.compassHeading': 'Está em direção ao Norte',
    'mbitMore.magneticForce': 'Força Magnética [AXIS]',
    'mbitMore.acceleration': 'Aceleração no Eixo[AXIS]',
    'mbitMore.analogValue': 'Ler Pino Analógico [PIN]',
    'mbitMore.getSharedData': 'Dados compartilhados [INDEX]',
    'mbitMore.setSharedData': 'Definir dados compartilhados [INDEX] com valor [VALUE]',
    'mbitMore.setInput': 'Definir Pino[PIN] como entrada',
    'mbitMore.setOutput': 'Definir pino digital[PIN] como:[LEVEL]',
    'mbitMore.setPWM': 'Definir pino PWM[PIN]com[LEVEL]',
    'mbitMore.setServo': 'Definir Servo no pino [PIN]com ângulo de [ANGLE]॰',
    'mbitMore.digitalValueMenu.Low': 'desligado',
    'mbitMore.digitalValueMenu.High': 'ligado'
  },
  'pt': {
    'mbitMore.isPinConnected': 'O Pino[PIN] está conectado?',
    'mbitMore.lightLevel': 'Intensidade da Luz',
    'mbitMore.compassHeading': 'Está em direção ao Norte',
    'mbitMore.magneticForce': 'Força Magnética [AXIS]',
    'mbitMore.acceleration': 'Aceleração no Eixo[AXIS]',
    'mbitMore.analogValue': 'Ler Pino Analógico [PIN]',
    'mbitMore.getSharedData': 'Dados compartilhados [INDEX]',
    'mbitMore.setSharedData': 'Definir dados compartilhados [INDEX] com valor [VALUE]',
    'mbitMore.setInput': 'Definir Pino[PIN] como entrada',
    'mbitMore.setOutput': 'Definir pino digital[PIN] como:[LEVEL]',
    'mbitMore.setPWM': 'Definir pino PWM[PIN]com[LEVEL]',
    'mbitMore.setServo': 'Definir Servo no pino [PIN]com ângulo de [ANGLE]॰',
    'mbitMore.digitalValueMenu.Low': 'desligado',
    'mbitMore.digitalValueMenu.High': 'ligado'
  }
};
var block = MbitMoreBlocks; // loadable-extension needs this line.

var _microbitMore = MbitMoreBlocks;
_microbitMore.block = block;

export default _microbitMore;
export { block };

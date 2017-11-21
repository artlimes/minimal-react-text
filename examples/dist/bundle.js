require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
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
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
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
    runClearTimeout(timeout);
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
        runTimeout(drainQueue);
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
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],"minimal-react-text":[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var MinimalReactText = (function (_Component) {
  _inherits(MinimalReactText, _Component);

  function MinimalReactText(props) {
    _classCallCheck(this, MinimalReactText);

    _get(Object.getPrototypeOf(MinimalReactText.prototype), 'constructor', this).call(this, props);

    var hasValue = false;
    var hasError = false;
    var isFocused = false;
    var inputValue = props.inputValue;

    if (inputValue !== '' && typeof inputValue !== 'undefined') {
      hasValue = true;
      hasError = props.hasError || props.pattern && !props.pattern.test(inputValue);
    }

    this.state = {
      hasValue: hasValue,
      hasError: hasError,
      inputValue: inputValue,
      isFocused: isFocused
    };
  }

  _createClass(MinimalReactText, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      var propsTocheck = ['inputValue', 'id', 'isDisabled', 'isRequired', 'placeholder', 'hasError', 'data-event-action', 'wrapperClasses', 'inputClasses', 'labelClasses', 'errortextClasses'];

      for (var key in nextState) {
        if (this.state[key] !== nextState[key]) {
          return true;
        }
      }

      for (var i = 0; i < propsTocheck.length; i++) {
        var propToCheck = propsTocheck[i];
        if (this.props[propToCheck] !== nextProps[propToCheck]) {
          return true;
        }
      }
      return false;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var hasError = nextProps.hasError;
      var hasValue = !!nextProps.inputValue || this.state.hasValue;
      var inputValue = nextProps.inputValue !== undefined ? nextProps.inputValue : this.state.inputValue;

      if (!hasError && inputValue !== '' && typeof inputValue !== 'undefined' && !!nextProps.pattern) {
        hasValue = true;
        hasError = nextProps.pattern && !nextProps.pattern.test(inputValue);
      }
      this.setState({ hasValue: hasValue, hasError: hasError, inputValue: inputValue });
    }
  }, {
    key: 'onBlur',
    value: function onBlur(event) {
      this.setState({
        isFocused: false
      });

      var _props = this.props;
      var pattern = _props.pattern;
      var isRequired = _props.isRequired;

      var hasError = undefined;

      this.setState({
        hasValue: Boolean(event.currentTarget.value),
        hasError: event.currentTarget.value.length ? pattern && !pattern.test(event.currentTarget.value) : isRequired
      });

      // update on this.setState happens after this functions is completed
      // in order to avoid that 'skipped' change of value, I use the
      // hasError variable
      hasError = event.currentTarget.value.length ? pattern && !pattern.test(event.currentTarget.value) : isRequired;

      if (this.props.onBlur) {
        this.props.onBlur(event, this, hasError);
      } else if (this.props.onChange) {
        this.props.onChange(event, this, hasError);
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(event) {
      this.setState({
        hasValue: Boolean(event.currentTarget.value),
        inputValue: event.currentTarget.value,
        hasError: false
      });

      if (this.props.onChange) {
        this.props.onChange(event, this);
      }
    }
  }, {
    key: 'onFocus',
    value: function onFocus(event) {
      this.setState({
        isFocused: true
      });

      if (this.props.onFocus) {
        this.props.onFocus(event, this);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var errorTextMessage = _props2.errorTextMessage;
      var id = _props2.id;
      var isDisabled = _props2.isDisabled;
      var isRequired = _props2.isRequired;
      var label = _props2.label;
      var placeholder = _props2.placeholder;
      var theme = _props2.theme;
      var type = _props2.type;
      var _state = this.state;
      var hasValue = _state.hasValue;
      var hasError = _state.hasError;
      var inputValue = _state.inputValue;
      var isFocused = _state.isFocused;

      var wrapperClasses = (0, _classnames2['default'])('tx-wrapper', this.props.wrapperClasses, { 'tx-focused': isFocused }, { 'tx-disabled': isDisabled }, { 'tx-wrapper-white': theme === 'dark' });

      var inputClasses = (0, _classnames2['default'])('tx-input', this.props.inputClasses);

      var labelClasses = (0, _classnames2['default'])('tx-label', this.props.labelClasses, { 'tx-above': placeholder || hasValue || isFocused });

      var errortextClasses = (0, _classnames2['default'])('tx-errortext', this.props.errortextClasses, { 'tx-errortext-visible': hasError });

      var fieldRequiredMessage = 'Field is required';

      return _react2['default'].createElement(
        'div',
        { className: wrapperClasses },
        _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement('input', {
            autoComplete: this.props.autoComplete,
            className: inputClasses,
            disabled: isDisabled,
            id: id,
            min: this.props.min,
            required: isRequired,
            value: inputValue || '',
            'data-event-action': this.props['data-event-action'],
            name: this.props.inputName,
            placeholder: placeholder,
            onKeyPress: this.props.onKeyPress,
            onFocus: this.onFocus.bind(this),
            tabIndex: this.props.tabIndex || "0",
            onBlur: this.onBlur.bind(this),
            onChange: this.onChange.bind(this),
            type: type
          }),
          label ? _react2['default'].createElement(
            'label',
            { className: labelClasses,
              htmlFor: id
            },
            label
          ) : null
        ),
        errorTextMessage || isRequired ? _react2['default'].createElement(
          'p',
          { className: errortextClasses },
          inputValue ? errorTextMessage : fieldRequiredMessage
        ) : null
      );
    }
  }]);

  return MinimalReactText;
})(_react.Component);

MinimalReactText.defaultProps = {
  autoComplete: false,
  isDisabled: false,
  theme: 'normal',
  type: 'text'
};

if (process.env.NODE_ENV !== 'production') {
  MinimalReactText.propTypes = {
    'autoComplete': _propTypes2['default'].bool,
    'wrapperClasses': _propTypes2['default'].string,
    'inputClasses': _propTypes2['default'].string,
    'labelClasses': _propTypes2['default'].string,
    'errortextClasses': _propTypes2['default'].string,
    'data-event-action': _propTypes2['default'].string,
    'id': _propTypes2['default'].string,
    'min': _propTypes2['default'].number,
    'inputName': _propTypes2['default'].string,
    'inputValue': _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].number]),
    'isDisabled': _propTypes2['default'].bool,
    'isRequired': _propTypes2['default'].bool,
    'onChange': _propTypes2['default'].func,
    'pattern': _propTypes2['default'].any,
    'placeholder': _propTypes2['default'].string,
    'theme': _propTypes2['default'].string,
    'hasError': _propTypes2['default'].bool,
    'type': _propTypes2['default'].string,
    'tabIndex': _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].number]),
    'onKeyPress': _propTypes2['default'].func
  };
}

exports['default'] = MinimalReactText;
module.exports = exports['default'];

}).call(this,require('_process'))

},{"_process":1,"classnames":undefined,"prop-types":undefined,"react":undefined}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwiL2hvbWUveWRyYXJneXJvcy9EZXNrdG9wL0FydGxpbWVzL2FydGxpbWVzLXRleHQvbWluaW1hbC1yZWFjdC10ZXh0L3NyYy9NaW5pbWFsUmVhY3RUZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNsQyxrQkFBYyxFQUFFLHVCQUFVLE1BQU07QUFDaEMsa0JBQWMsRUFBRSx1QkFBVSxNQUFNO0FBQ2hDLHNCQUFrQixFQUFFLHVCQUFVLE1BQU07QUFDcEMsdUJBQW1CLEVBQUUsdUJBQVUsTUFBTTtBQUNyQyxRQUFJLEVBQUUsdUJBQVUsTUFBTTtBQUN0QixTQUFLLEVBQUUsdUJBQVUsTUFBTTtBQUN2QixlQUFXLEVBQUUsdUJBQVUsTUFBTTtBQUM3QixnQkFBWSxFQUFFLHVCQUFVLFNBQVMsQ0FBQyxDQUNoQyx1QkFBVSxNQUFNLEVBQ2hCLHVCQUFVLE1BQU0sQ0FBQyxDQUFDO0FBQ3BCLGdCQUFZLEVBQUUsdUJBQVUsSUFBSTtBQUM1QixnQkFBWSxFQUFFLHVCQUFVLElBQUk7QUFDNUIsY0FBVSxFQUFFLHVCQUFVLElBQUk7QUFDMUIsYUFBUyxFQUFFLHVCQUFVLEdBQUc7QUFDeEIsaUJBQWEsRUFBRSx1QkFBVSxNQUFNO0FBQy9CLFdBQU8sRUFBRSx1QkFBVSxNQUFNO0FBQ3pCLGNBQVUsRUFBRSx1QkFBVSxJQUFJO0FBQzFCLFVBQU0sRUFBRSx1QkFBVSxNQUFNO0FBQ3hCLGNBQVUsRUFBRSx1QkFBVSxTQUFTLENBQUMsQ0FDOUIsdUJBQVUsTUFBTSxFQUNoQix1QkFBVSxNQUFNLENBQUMsQ0FBQztBQUNwQixnQkFBWSxFQUFFLHVCQUFVLElBQUk7R0FDN0IsQ0FBQztDQUNIOztxQkFFYyxnQkFBZ0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNsYXNzIE1pbmltYWxSZWFjdFRleHQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGxldCBoYXNWYWx1ZSA9IGZhbHNlO1xuICAgIGxldCBoYXNFcnJvciA9IGZhbHNlO1xuICAgIGNvbnN0IGlzRm9jdXNlZCA9IGZhbHNlO1xuICAgIGNvbnN0IGlucHV0VmFsdWUgPSBwcm9wcy5pbnB1dFZhbHVlO1xuXG4gICAgaWYgKGlucHV0VmFsdWUgIT09ICcnICYmIHR5cGVvZiBpbnB1dFZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaGFzVmFsdWUgPSB0cnVlO1xuICAgICAgaGFzRXJyb3IgPSBwcm9wcy5oYXNFcnJvciB8fCAocHJvcHMucGF0dGVybiAmJiAhcHJvcHMucGF0dGVybi50ZXN0KGlucHV0VmFsdWUpKTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaGFzVmFsdWUsXG4gICAgICBoYXNFcnJvcixcbiAgICAgIGlucHV0VmFsdWUsXG4gICAgICBpc0ZvY3VzZWRcbiAgICB9O1xuICB9XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlIChuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIGNvbnN0IHByb3BzVG9jaGVjayA9IFsgJ2lucHV0VmFsdWUnLCAnaWQnLCAnaXNEaXNhYmxlZCcsICdpc1JlcXVpcmVkJywgJ3BsYWNlaG9sZGVyJywgJ2hhc0Vycm9yJywgJ2RhdGEtZXZlbnQtYWN0aW9uJywgJ3dyYXBwZXJDbGFzc2VzJywgJ2lucHV0Q2xhc3NlcycsICdsYWJlbENsYXNzZXMnLCAnZXJyb3J0ZXh0Q2xhc3NlcyddO1xuXG4gICAgZm9yICggbGV0IGtleSBpbiBuZXh0U3RhdGUgKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZVtrZXldICE9PSBuZXh0U3RhdGVba2V5XSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMCA7IGk8cHJvcHNUb2NoZWNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcHJvcFRvQ2hlY2sgPSBwcm9wc1RvY2hlY2tbaV07XG4gICAgICBpZiAodGhpcy5wcm9wc1twcm9wVG9DaGVja10gIT09IG5leHRQcm9wc1twcm9wVG9DaGVja10pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgbGV0IGhhc0Vycm9yID0gbmV4dFByb3BzLmhhc0Vycm9yO1xuICAgIGxldCBoYXNWYWx1ZSA9ICEhbmV4dFByb3BzLmlucHV0VmFsdWUgfHwgdGhpcy5zdGF0ZS5oYXNWYWx1ZTtcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gKG5leHRQcm9wcy5pbnB1dFZhbHVlICE9PSB1bmRlZmluZWQgPyBuZXh0UHJvcHMuaW5wdXRWYWx1ZSA6IHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSk7XG5cbiAgICBpZiAoIWhhc0Vycm9yICYmIGlucHV0VmFsdWUgIT09ICcnICYmIHR5cGVvZiBpbnB1dFZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiAhIW5leHRQcm9wcy5wYXR0ZXJuKSB7XG4gICAgICBoYXNWYWx1ZSA9IHRydWU7XG4gICAgICBoYXNFcnJvciA9IChuZXh0UHJvcHMucGF0dGVybiAmJiAhbmV4dFByb3BzLnBhdHRlcm4udGVzdChpbnB1dFZhbHVlKSk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBoYXNWYWx1ZSwgaGFzRXJyb3IsIGlucHV0VmFsdWUgfSk7XG4gIH1cblxuICBvbkJsdXIoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzRm9jdXNlZDogZmFsc2VcbiAgICB9KTtcblxuICAgIGNvbnN0IHsgcGF0dGVybiwgaXNSZXF1aXJlZCB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgaGFzRXJyb3I7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaGFzVmFsdWU6IEJvb2xlYW4oZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSksXG4gICAgICAgIGhhc0Vycm9yOiAoZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZS5sZW5ndGggPyAocGF0dGVybiAmJiAhcGF0dGVybi50ZXN0KGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpKSA6IGlzUmVxdWlyZWQpXG4gICAgfSk7XG5cbiAgICAvLyB1cGRhdGUgb24gdGhpcy5zZXRTdGF0ZSBoYXBwZW5zIGFmdGVyIHRoaXMgZnVuY3Rpb25zIGlzIGNvbXBsZXRlZFxuICAgIC8vIGluIG9yZGVyIHRvIGF2b2lkIHRoYXQgJ3NraXBwZWQnIGNoYW5nZSBvZiB2YWx1ZSwgSSB1c2UgdGhlXG4gICAgLy8gaGFzRXJyb3IgdmFyaWFibGVcbiAgICBoYXNFcnJvciA9IChldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlLmxlbmd0aCA/IChwYXR0ZXJuICYmICFwYXR0ZXJuLnRlc3QoZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSkpIDogaXNSZXF1aXJlZCk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgIHRoaXMucHJvcHMub25CbHVyKGV2ZW50LCB0aGlzLCBoYXNFcnJvcik7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCB0aGlzLCBoYXNFcnJvcik7XG4gICAgfVxuIH1cblxuICBvbkNoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaGFzVmFsdWU6IEJvb2xlYW4oZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSksXG4gICAgICBpbnB1dFZhbHVlOiBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlLFxuICAgICAgaGFzRXJyb3I6IGZhbHNlXG4gIH0pO1xuXG4gIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCwgdGhpcyk7XG4gIH1cbiB9XG5cbiAgb25Gb2N1cyhldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNGb2N1c2VkOiB0cnVlXG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbkZvY3VzKSB7XG4gICAgICB0aGlzLnByb3BzLm9uRm9jdXMoZXZlbnQsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBlcnJvclRleHRNZXNzYWdlLFxuICAgICAgaWQsXG4gICAgICBpc0Rpc2FibGVkLFxuICAgICAgaXNSZXF1aXJlZCxcbiAgICAgIGxhYmVsLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICB0aGVtZSxcbiAgICAgIHR5cGUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCB7IGhhc1ZhbHVlLCBoYXNFcnJvciwgaW5wdXRWYWx1ZSwgaXNGb2N1c2VkIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3Qgd3JhcHBlckNsYXNzZXMgPSBjbGFzc05hbWVzKFxuICAgICAgJ3R4LXdyYXBwZXInLFxuICAgICAgdGhpcy5wcm9wcy53cmFwcGVyQ2xhc3NlcyxcbiAgICAgIHsgJ3R4LWZvY3VzZWQnOiBpc0ZvY3VzZWQgfSxcbiAgICAgIHsgJ3R4LWRpc2FibGVkJzogaXNEaXNhYmxlZCB9LFxuICAgICAgeyAndHgtd3JhcHBlci13aGl0ZSc6IHRoZW1lID09PSAnZGFyaycgfSk7XG5cbiAgICBjb25zdCBpbnB1dENsYXNzZXMgPSBjbGFzc05hbWVzKFxuICAgICAgJ3R4LWlucHV0JyxcbiAgICAgIHRoaXMucHJvcHMuaW5wdXRDbGFzc2VzICk7XG5cbiAgICBjb25zdCBsYWJlbENsYXNzZXMgPSBjbGFzc05hbWVzKFxuICAgICAgJ3R4LWxhYmVsJyxcbiAgICAgIHRoaXMucHJvcHMubGFiZWxDbGFzc2VzLFxuICAgICAgeyAndHgtYWJvdmUnOiBwbGFjZWhvbGRlciB8fCBoYXNWYWx1ZSB8fCBpc0ZvY3VzZWQgfSk7XG5cbiAgICBjb25zdCBlcnJvcnRleHRDbGFzc2VzID0gY2xhc3NOYW1lcyhcbiAgICAgICd0eC1lcnJvcnRleHQnLFxuICAgICAgdGhpcy5wcm9wcy5lcnJvcnRleHRDbGFzc2VzLFxuICAgICAgeyAndHgtZXJyb3J0ZXh0LXZpc2libGUnOiBoYXNFcnJvciB9KTtcblxuICAgIGNvbnN0IGZpZWxkUmVxdWlyZWRNZXNzYWdlID0gJ0ZpZWxkIGlzIHJlcXVpcmVkJztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17d3JhcHBlckNsYXNzZXN9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPXt0aGlzLnByb3BzLmF1dG9Db21wbGV0ZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17aW5wdXRDbGFzc2VzfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2lzRGlzYWJsZWR9XG4gICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICBtaW49e3RoaXMucHJvcHMubWlufVxuICAgICAgICAgICAgcmVxdWlyZWQ9e2lzUmVxdWlyZWR9XG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZSB8fCAnJ31cbiAgICAgICAgICAgIGRhdGEtZXZlbnQtYWN0aW9uPXt0aGlzLnByb3BzWydkYXRhLWV2ZW50LWFjdGlvbiddfVxuICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5pbnB1dE5hbWV9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICBvbktleVByZXNzPXt0aGlzLnByb3BzLm9uS2V5UHJlc3N9XG4gICAgICAgICAgICBvbkZvY3VzPXt0aGlzLm9uRm9jdXMuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIHRhYkluZGV4PXt0aGlzLnByb3BzLnRhYkluZGV4IHx8IFwiMFwifVxuICAgICAgICAgICAgb25CbHVyPXt0aGlzLm9uQmx1ci5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7bGFiZWwgPyA8bGFiZWwgY2xhc3NOYW1lPXtsYWJlbENsYXNzZXN9XG4gICAgICAgICAgICBodG1sRm9yPXtpZH1cbiAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgPC9sYWJlbD4gOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgeyhlcnJvclRleHRNZXNzYWdlIHx8IGlzUmVxdWlyZWQpID9cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2Vycm9ydGV4dENsYXNzZXN9PlxuICAgICAgICAgIHtpbnB1dFZhbHVlID8gZXJyb3JUZXh0TWVzc2FnZSA6IGZpZWxkUmVxdWlyZWRNZXNzYWdlfVxuICAgICAgICAgIDwvcD4gOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiB9XG59XG5cbk1pbmltYWxSZWFjdFRleHQuZGVmYXVsdFByb3BzID0ge1xuICBhdXRvQ29tcGxldGU6IGZhbHNlLFxuICBpc0Rpc2FibGVkOiBmYWxzZSxcbiAgdGhlbWU6ICdub3JtYWwnLFxuICB0eXBlOiAndGV4dCdcbn07XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIE1pbmltYWxSZWFjdFRleHQucHJvcFR5cGVzID0ge1xuICAgICdhdXRvQ29tcGxldGUnOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAnd3JhcHBlckNsYXNzZXMnOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICdpbnB1dENsYXNzZXMnOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICdsYWJlbENsYXNzZXMnOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICdlcnJvcnRleHRDbGFzc2VzJzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAnZGF0YS1ldmVudC1hY3Rpb24nOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICdpZCc6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgJ21pbic6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgJ2lucHV0TmFtZSc6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgJ2lucHV0VmFsdWUnOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMubnVtYmVyXSksXG4gICAgJ2lzRGlzYWJsZWQnOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAnaXNSZXF1aXJlZCc6IFByb3BUeXBlcy5ib29sLFxuICAgICdvbkNoYW5nZSc6IFByb3BUeXBlcy5mdW5jLFxuICAgICdwYXR0ZXJuJzogUHJvcFR5cGVzLmFueSxcbiAgICAncGxhY2Vob2xkZXInOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICd0aGVtZSc6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgJ2hhc0Vycm9yJzogUHJvcFR5cGVzLmJvb2wsXG4gICAgJ3R5cGUnOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICd0YWJJbmRleCc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgICAnb25LZXlQcmVzcyc6IFByb3BUeXBlcy5mdW5jXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1pbmltYWxSZWFjdFRleHQ7XG4iXX0=

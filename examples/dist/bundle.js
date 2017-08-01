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
            required: isRequired,
            value: inputValue || '',
            'data-event-action': this.props['data-event-action'],
            name: this.props.inputName,
            placeholder: placeholder,
            onFocus: this.onFocus.bind(this),
            onBlur: this.onBlur.bind(this),
            onChange: this.onChange.bind(this)
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
  theme: 'normal'
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
    'inputName': _propTypes2['default'].string,
    'inputValue': _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].number]),
    'isDisabled': _propTypes2['default'].bool,
    'isRequired': _propTypes2['default'].bool,
    'onChange': _propTypes2['default'].func,
    'pattern': _propTypes2['default'].any,
    'placeholder': _propTypes2['default'].string,
    'theme': _propTypes2['default'].string,
    'hasError': _propTypes2['default'].bool
  };
}

exports['default'] = MinimalReactText;
module.exports = exports['default'];

}).call(this,require('_process'))

},{"_process":1,"classnames":undefined,"prop-types":undefined,"react":undefined}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwiL2hvbWUveWRyYXJneXJvcy9EZXNrdG9wL0FydGxpbWVzL2FydGxpbWVzLXRleHQvbWluaW1hbC1yZWFjdC10ZXh0L3NyYy9NaW5pbWFsUmVhY3RUZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUMsUUFBUSxLQUFLLFlBQVksRUFBRTtBQUN6QyxrQkFBZ0IsQ0FBQyxTQUFTLEdBQUc7QUFDM0Isa0JBQWMsRUFBRSx1QkFBVSxJQUFJO0FBQzlCLG9CQUFnQixFQUFFLHVCQUFVLE1BQU07QUFDbEMsa0JBQWMsRUFBRSx1QkFBVSxNQUFNO0FBQ2hDLGtCQUFjLEVBQUUsdUJBQVUsTUFBTTtBQUNoQyxzQkFBa0IsRUFBRSx1QkFBVSxNQUFNO0FBQ3BDLHVCQUFtQixFQUFFLHVCQUFVLE1BQU07QUFDckMsUUFBSSxFQUFFLHVCQUFVLE1BQU07QUFDdEIsZUFBVyxFQUFFLHVCQUFVLE1BQU07QUFDN0IsZ0JBQVksRUFBRSx1QkFBVSxTQUFTLENBQUMsQ0FDaEMsdUJBQVUsTUFBTSxFQUNoQix1QkFBVSxNQUFNLENBQUMsQ0FBQztBQUNwQixnQkFBWSxFQUFFLHVCQUFVLElBQUk7QUFDNUIsZ0JBQVksRUFBRSx1QkFBVSxJQUFJO0FBQzVCLGNBQVUsRUFBRSx1QkFBVSxJQUFJO0FBQzFCLGFBQVMsRUFBRSx1QkFBVSxHQUFHO0FBQ3hCLGlCQUFhLEVBQUUsdUJBQVUsTUFBTTtBQUMvQixXQUFPLEVBQUUsdUJBQVUsTUFBTTtBQUN6QixjQUFVLEVBQUUsdUJBQVUsSUFBSTtHQUM1QixDQUFDO0NBQ0Y7O3FCQUVjLGdCQUFnQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY2xhc3MgTWluaW1hbFJlYWN0VGV4dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgbGV0IGhhc1ZhbHVlID0gZmFsc2U7XG4gICAgbGV0IGhhc0Vycm9yID0gZmFsc2U7XG4gICAgY29uc3QgaXNGb2N1c2VkID0gZmFsc2U7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IHByb3BzLmlucHV0VmFsdWU7XG5cbiAgICBpZiAoaW5wdXRWYWx1ZSAhPT0gJycgJiYgdHlwZW9mIGlucHV0VmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBoYXNWYWx1ZSA9IHRydWU7XG4gICAgICBoYXNFcnJvciA9IHByb3BzLmhhc0Vycm9yIHx8IChwcm9wcy5wYXR0ZXJuICYmICFwcm9wcy5wYXR0ZXJuLnRlc3QoaW5wdXRWYWx1ZSkpO1xuICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhhc1ZhbHVlLFxuICAgICAgaGFzRXJyb3IsXG4gICAgICBpbnB1dFZhbHVlLFxuICAgICAgaXNGb2N1c2VkXG4gICB9O1xuIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGxldCBoYXNFcnJvciA9IG5leHRQcm9wcy5oYXNFcnJvcjtcbiAgICBsZXQgaGFzVmFsdWUgPSAhIW5leHRQcm9wcy5pbnB1dFZhbHVlIHx8IHRoaXMuc3RhdGUuaGFzVmFsdWU7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IChuZXh0UHJvcHMuaW5wdXRWYWx1ZSAhPT0gdW5kZWZpbmVkID8gbmV4dFByb3BzLmlucHV0VmFsdWUgOiB0aGlzLnN0YXRlLmlucHV0VmFsdWUpO1xuXG4gICAgaWYgKCFoYXNFcnJvciAmJiBpbnB1dFZhbHVlICE9PSAnJyAmJiB0eXBlb2YgaW5wdXRWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgISFuZXh0UHJvcHMucGF0dGVybikge1xuICAgICAgaGFzVmFsdWUgPSB0cnVlO1xuICAgICAgaGFzRXJyb3IgPSAobmV4dFByb3BzLnBhdHRlcm4gJiYgIW5leHRQcm9wcy5wYXR0ZXJuLnRlc3QoaW5wdXRWYWx1ZSkpO1xuICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBoYXNWYWx1ZSwgaGFzRXJyb3IsIGlucHV0VmFsdWUgfSk7XG4gfVxuXG4gIG9uQmx1cihldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNGb2N1c2VkOiBmYWxzZVxuICAgIH0pO1xuXG4gICAgY29uc3QgeyBwYXR0ZXJuLCBpc1JlcXVpcmVkIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBoYXNFcnJvcjtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBoYXNWYWx1ZTogQm9vbGVhbihldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKSxcbiAgICAgICAgaGFzRXJyb3I6IChldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlLmxlbmd0aCA/IChwYXR0ZXJuICYmICFwYXR0ZXJuLnRlc3QoZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSkpIDogaXNSZXF1aXJlZClcbiAgICAgfSk7XG5cbiAgICAvLyB1cGRhdGUgb24gdGhpcy5zZXRTdGF0ZSBoYXBwZW5zIGFmdGVyIHRoaXMgZnVuY3Rpb25zIGlzIGNvbXBsZXRlZFxuICAgIC8vIGluIG9yZGVyIHRvIGF2b2lkIHRoYXQgJ3NraXBwZWQnIGNoYW5nZSBvZiB2YWx1ZSwgSSB1c2UgdGhlXG4gICAgLy8gaGFzRXJyb3IgdmFyaWFibGVcbiAgICBoYXNFcnJvciA9IChldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlLmxlbmd0aCA/IChwYXR0ZXJuICYmICFwYXR0ZXJuLnRlc3QoZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSkpIDogaXNSZXF1aXJlZCk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgIHRoaXMucHJvcHMub25CbHVyKGV2ZW50LCB0aGlzLCBoYXNFcnJvcik7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCB0aGlzLCBoYXNFcnJvcik7XG4gICAgfVxuIH1cblxuICBvbkNoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaGFzVmFsdWU6IEJvb2xlYW4oZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSksXG4gICAgICBpbnB1dFZhbHVlOiBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlLFxuICAgICAgaGFzRXJyb3I6IGZhbHNlXG4gICB9KTtcblxuICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCB0aGlzKTtcbiAgIH1cbiB9XG5cbiAgb25Gb2N1cyhldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNGb2N1c2VkOiB0cnVlXG4gICB9KTtcblxuICAgIGlmICh0aGlzLnByb3BzLm9uRm9jdXMpIHtcbiAgICAgIHRoaXMucHJvcHMub25Gb2N1cyhldmVudCwgdGhpcyk7XG4gICB9XG4gfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBlcnJvclRleHRNZXNzYWdlLFxuICAgICAgaWQsXG4gICAgICBpc0Rpc2FibGVkLFxuICAgICAgaXNSZXF1aXJlZCxcbiAgICAgIGxhYmVsLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICB0aGVtZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHsgaGFzVmFsdWUsIGhhc0Vycm9yLCBpbnB1dFZhbHVlLCBpc0ZvY3VzZWQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCB3cmFwcGVyQ2xhc3NlcyA9IGNsYXNzTmFtZXMoXG4gICAgICAndHgtd3JhcHBlcicsXG4gICAgICB0aGlzLnByb3BzLndyYXBwZXJDbGFzc2VzLFxuICAgICAgeyAndHgtZm9jdXNlZCc6IGlzRm9jdXNlZCB9LFxuICAgICAgeyAndHgtZGlzYWJsZWQnOiBpc0Rpc2FibGVkIH0sXG4gICAgICB7ICd0eC13cmFwcGVyLXdoaXRlJzogdGhlbWUgPT09ICdkYXJrJyB9KTtcblxuICAgIGNvbnN0IGlucHV0Q2xhc3NlcyA9IGNsYXNzTmFtZXMoXG4gICAgICAndHgtaW5wdXQnLFxuICAgICAgdGhpcy5wcm9wcy5pbnB1dENsYXNzZXMgKTtcblxuICAgIGNvbnN0IGxhYmVsQ2xhc3NlcyA9IGNsYXNzTmFtZXMoXG4gICAgICAndHgtbGFiZWwnLFxuICAgICAgdGhpcy5wcm9wcy5sYWJlbENsYXNzZXMsXG4gICAgICB7ICd0eC1hYm92ZSc6IHBsYWNlaG9sZGVyIHx8IGhhc1ZhbHVlIHx8IGlzRm9jdXNlZCB9KTtcblxuICAgIGNvbnN0IGVycm9ydGV4dENsYXNzZXMgPSBjbGFzc05hbWVzKFxuICAgICAgJ3R4LWVycm9ydGV4dCcsXG4gICAgICB0aGlzLnByb3BzLmVycm9ydGV4dENsYXNzZXMsXG4gICAgICB7ICd0eC1lcnJvcnRleHQtdmlzaWJsZSc6IGhhc0Vycm9yIH0pO1xuXG4gICAgY29uc3QgZmllbGRSZXF1aXJlZE1lc3NhZ2UgPSAnRmllbGQgaXMgcmVxdWlyZWQnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt3cmFwcGVyQ2xhc3Nlc30+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9e3RoaXMucHJvcHMuYXV0b0NvbXBsZXRlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtpbnB1dENsYXNzZXN9XG4gICAgICAgICAgICBkaXNhYmxlZD17aXNEaXNhYmxlZH1cbiAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgIHJlcXVpcmVkPXtpc1JlcXVpcmVkfVxuICAgICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWUgfHwgJyd9XG4gICAgICAgICAgICBkYXRhLWV2ZW50LWFjdGlvbj17dGhpcy5wcm9wc1snZGF0YS1ldmVudC1hY3Rpb24nXX1cbiAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMuaW5wdXROYW1lfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5vbkZvY3VzLmJpbmQodGhpcyl9XG4gICAgICAgICAgICBvbkJsdXI9e3RoaXMub25CbHVyLmJpbmQodGhpcyl9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2xhYmVsID8gPGxhYmVsIGNsYXNzTmFtZT17bGFiZWxDbGFzc2VzfVxuICAgICAgICAgICAgaHRtbEZvcj17aWR9XG4gICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIDwvbGFiZWw+IDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsoZXJyb3JUZXh0TWVzc2FnZSB8fCBpc1JlcXVpcmVkKSA/XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtlcnJvcnRleHRDbGFzc2VzfT5cbiAgICAgICAgICB7aW5wdXRWYWx1ZSA/IGVycm9yVGV4dE1lc3NhZ2UgOiBmaWVsZFJlcXVpcmVkTWVzc2FnZX1cbiAgICAgICAgICA8L3A+IDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gfVxufVxuXG5NaW5pbWFsUmVhY3RUZXh0LmRlZmF1bHRQcm9wcyA9IHtcbiAgYXV0b0NvbXBsZXRlOiBmYWxzZSxcbiAgaXNEaXNhYmxlZDogZmFsc2UsXG4gIHRoZW1lOiAnbm9ybWFsJ1xufTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgTWluaW1hbFJlYWN0VGV4dC5wcm9wVHlwZXMgPSB7XG4gICAgJ2F1dG9Db21wbGV0ZSc6IFByb3BUeXBlcy5ib29sLFxuICAgICd3cmFwcGVyQ2xhc3Nlcyc6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgJ2lucHV0Q2xhc3Nlcyc6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgJ2xhYmVsQ2xhc3Nlcyc6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgJ2Vycm9ydGV4dENsYXNzZXMnOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICdkYXRhLWV2ZW50LWFjdGlvbic6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgJ2lkJzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAnaW5wdXROYW1lJzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAnaW5wdXRWYWx1ZSc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgICAnaXNEaXNhYmxlZCc6IFByb3BUeXBlcy5ib29sLFxuICAgICdpc1JlcXVpcmVkJzogUHJvcFR5cGVzLmJvb2wsXG4gICAgJ29uQ2hhbmdlJzogUHJvcFR5cGVzLmZ1bmMsXG4gICAgJ3BhdHRlcm4nOiBQcm9wVHlwZXMuYW55LFxuICAgICdwbGFjZWhvbGRlcic6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgJ3RoZW1lJzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAnaGFzRXJyb3InOiBQcm9wVHlwZXMuYm9vbFxuIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1pbmltYWxSZWFjdFRleHQ7XG4iXX0=

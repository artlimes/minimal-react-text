require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* eslint react/prop-types: 0 */

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _componentsMinimalReactText = require('./components/MinimalReactText');

var _componentsMinimalReactText2 = _interopRequireDefault(_componentsMinimalReactText);

_reactDom2['default'].render(_react2['default'].createElement(
  'form',
  { noValidate: true },
  _react2['default'].createElement(
    'div',
    null,
    _react2['default'].createElement(
      'h3',
      null,
      'Normal'
    ),
    _react2['default'].createElement(_componentsMinimalReactText2['default'], { label: 'Label' }),
    _react2['default'].createElement(
      'h3',
      null,
      'With Placeholder'
    ),
    _react2['default'].createElement(_componentsMinimalReactText2['default'], { label: 'Label', placeholder: 'Placeholder', type: 'password' }),
    _react2['default'].createElement(
      'h3',
      null,
      'With Placeholder & InputValue'
    ),
    _react2['default'].createElement(_componentsMinimalReactText2['default'], { label: 'Label', placeholder: 'Placeholder', inputValue: 'InputValue' }),
    _react2['default'].createElement(
      'h3',
      null,
      'Required'
    ),
    _react2['default'].createElement(_componentsMinimalReactText2['default'], { label: 'Label', isRequired: true }),
    _react2['default'].createElement(
      'h3',
      null,
      'Disabled'
    ),
    _react2['default'].createElement(_componentsMinimalReactText2['default'], { label: 'Label', placeholder: 'Placeholder', isDisabled: false }),
    _react2['default'].createElement(
      'h3',
      null,
      'Dark Theme'
    ),
    _react2['default'].createElement(
      'div',
      { className: 'dark-background' },
      _react2['default'].createElement(_componentsMinimalReactText2['default'], { label: 'Label', theme: 'dark' })
    )
  ),
  _react2['default'].createElement(
    'button',
    { type: 'submit' },
    'Submit'
  )
), document.getElementById('example'));

},{"./components/MinimalReactText":2,"react":undefined,"react-dom":undefined}],2:[function(require,module,exports){
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

},{"_process":3,"classnames":undefined,"prop-types":undefined,"react":undefined}],3:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS95ZHJhcmd5cm9zL0Rlc2t0b3AvQXJ0bGltZXMvYXJ0bGltZXMtdGV4dC9taW5pbWFsLXJlYWN0LXRleHQvZXhhbXBsZXMvc3JjL2FwcC5qcyIsIi9ob21lL3lkcmFyZ3lyb3MvRGVza3RvcC9BcnRsaW1lcy9hcnRsaW1lcy10ZXh0L21pbmltYWwtcmVhY3QtdGV4dC9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9NaW5pbWFsUmVhY3RUZXh0LmpzIiwibm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztxQkNFa0IsT0FBTzs7Ozt3QkFDSixXQUFXOzs7OzBDQUNILCtCQUErQjs7OztBQUU1RCxzQkFBUyxNQUFNLENBQ2I7O0lBQU0sVUFBVSxNQUFBO0VBQ2pCOzs7SUFDUzs7OztLQUFlO0lBQ3BCLDRFQUFrQixLQUFLLEVBQUMsT0FBTyxHQUFFO0lBRTVCOzs7O0tBQXlCO0lBQ3ZCLDRFQUFrQixLQUFLLEVBQUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxhQUFhLEVBQUMsSUFBSSxFQUFDLFVBQVUsR0FBRTtJQUU3RTs7OztLQUFzQztJQUNwQyw0RUFBa0IsS0FBSyxFQUFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsYUFBYSxFQUFDLFVBQVUsRUFBQyxZQUFZLEdBQUU7SUFFckY7Ozs7S0FBaUI7SUFDZiw0RUFBa0IsS0FBSyxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUUsSUFBSSxBQUFDLEdBQUU7SUFFckQ7Ozs7S0FBaUI7SUFDZiw0RUFBa0IsS0FBSyxFQUFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsYUFBYSxFQUFDLFVBQVUsRUFBRSxLQUFLLEFBQUMsR0FBRTtJQUVoRjs7OztLQUFtQjtJQUNuQjs7UUFBSyxTQUFTLEVBQUMsaUJBQWlCO01BQzlCLDRFQUFrQixLQUFLLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBQyxN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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyogZXNsaW50IHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IE1pbmltYWxSZWFjdFRleHQgZnJvbSAnLi9jb21wb25lbnRzL01pbmltYWxSZWFjdFRleHQnO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxmb3JtIG5vVmFsaWRhdGU+XG5cdDxkaXY+XG4gICAgICAgICAgPGgzPk5vcm1hbDwvaDM+XG5cdCAgICA8TWluaW1hbFJlYWN0VGV4dCBsYWJlbD1cIkxhYmVsXCIvPlxuXG4gICAgICAgICAgPGgzPldpdGggUGxhY2Vob2xkZXI8L2gzPlxuICAgICAgICAgICAgPE1pbmltYWxSZWFjdFRleHQgbGFiZWw9XCJMYWJlbFwiIHBsYWNlaG9sZGVyPVwiUGxhY2Vob2xkZXJcIiB0eXBlPVwicGFzc3dvcmRcIi8+XG5cbiAgICAgICAgICA8aDM+V2l0aCBQbGFjZWhvbGRlciAmIElucHV0VmFsdWU8L2gzPlxuICAgICAgICAgICAgPE1pbmltYWxSZWFjdFRleHQgbGFiZWw9XCJMYWJlbFwiIHBsYWNlaG9sZGVyPVwiUGxhY2Vob2xkZXJcIiBpbnB1dFZhbHVlPVwiSW5wdXRWYWx1ZVwiLz5cblxuICAgICAgICAgIDxoMz5SZXF1aXJlZDwvaDM+XG4gICAgICAgICAgICA8TWluaW1hbFJlYWN0VGV4dCBsYWJlbD1cIkxhYmVsXCIgaXNSZXF1aXJlZD17dHJ1ZX0vPlxuXG4gICAgICAgICAgPGgzPkRpc2FibGVkPC9oMz5cbiAgICAgICAgICAgIDxNaW5pbWFsUmVhY3RUZXh0IGxhYmVsPVwiTGFiZWxcIiBwbGFjZWhvbGRlcj1cIlBsYWNlaG9sZGVyXCIgaXNEaXNhYmxlZD17ZmFsc2V9Lz5cblxuICAgICAgICAgIDxoMz5EYXJrIFRoZW1lPC9oMz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhcmstYmFja2dyb3VuZFwiPlxuICAgICAgICAgICAgPE1pbmltYWxSZWFjdFRleHQgbGFiZWw9XCJMYWJlbFwiIHRoZW1lPVwiZGFya1wiLz5cbiAgICAgICAgICA8L2Rpdj5cblx0PC9kaXY+XG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gIDwvZm9ybT4sXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGFtcGxlJylcbik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jbGFzcyBNaW5pbWFsUmVhY3RUZXh0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBsZXQgaGFzVmFsdWUgPSBmYWxzZTtcbiAgICBsZXQgaGFzRXJyb3IgPSBmYWxzZTtcbiAgICBjb25zdCBpc0ZvY3VzZWQgPSBmYWxzZTtcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gcHJvcHMuaW5wdXRWYWx1ZTtcblxuICAgIGlmIChpbnB1dFZhbHVlICE9PSAnJyAmJiB0eXBlb2YgaW5wdXRWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGhhc1ZhbHVlID0gdHJ1ZTtcbiAgICAgIGhhc0Vycm9yID0gcHJvcHMuaGFzRXJyb3IgfHwgKHByb3BzLnBhdHRlcm4gJiYgIXByb3BzLnBhdHRlcm4udGVzdChpbnB1dFZhbHVlKSk7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhhc1ZhbHVlLFxuICAgICAgaGFzRXJyb3IsXG4gICAgICBpbnB1dFZhbHVlLFxuICAgICAgaXNGb2N1c2VkXG4gICAgfTtcbiAgfVxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZSAobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICBjb25zdCBwcm9wc1RvY2hlY2sgPSBbICdpbnB1dFZhbHVlJywgJ2lkJywgJ2lzRGlzYWJsZWQnLCAnaXNSZXF1aXJlZCcsICdwbGFjZWhvbGRlcicsICdoYXNFcnJvcicsICdkYXRhLWV2ZW50LWFjdGlvbicsICd3cmFwcGVyQ2xhc3NlcycsICdpbnB1dENsYXNzZXMnLCAnbGFiZWxDbGFzc2VzJywgJ2Vycm9ydGV4dENsYXNzZXMnXTtcblxuICAgIGZvciAoIGxldCBrZXkgaW4gbmV4dFN0YXRlICkge1xuICAgICAgaWYgKHRoaXMuc3RhdGVba2V5XSAhPT0gbmV4dFN0YXRlW2tleV0pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAgOyBpPHByb3BzVG9jaGVjay5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHByb3BUb0NoZWNrID0gcHJvcHNUb2NoZWNrW2ldO1xuICAgICAgaWYgKHRoaXMucHJvcHNbcHJvcFRvQ2hlY2tdICE9PSBuZXh0UHJvcHNbcHJvcFRvQ2hlY2tdKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGxldCBoYXNFcnJvciA9IG5leHRQcm9wcy5oYXNFcnJvcjtcbiAgICBsZXQgaGFzVmFsdWUgPSAhIW5leHRQcm9wcy5pbnB1dFZhbHVlIHx8IHRoaXMuc3RhdGUuaGFzVmFsdWU7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IChuZXh0UHJvcHMuaW5wdXRWYWx1ZSAhPT0gdW5kZWZpbmVkID8gbmV4dFByb3BzLmlucHV0VmFsdWUgOiB0aGlzLnN0YXRlLmlucHV0VmFsdWUpO1xuXG4gICAgaWYgKCFoYXNFcnJvciAmJiBpbnB1dFZhbHVlICE9PSAnJyAmJiB0eXBlb2YgaW5wdXRWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgISFuZXh0UHJvcHMucGF0dGVybikge1xuICAgICAgaGFzVmFsdWUgPSB0cnVlO1xuICAgICAgaGFzRXJyb3IgPSAobmV4dFByb3BzLnBhdHRlcm4gJiYgIW5leHRQcm9wcy5wYXR0ZXJuLnRlc3QoaW5wdXRWYWx1ZSkpO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgaGFzVmFsdWUsIGhhc0Vycm9yLCBpbnB1dFZhbHVlIH0pO1xuICB9XG5cbiAgb25CbHVyKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0ZvY3VzZWQ6IGZhbHNlXG4gICAgfSk7XG5cbiAgICBjb25zdCB7IHBhdHRlcm4sIGlzUmVxdWlyZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IGhhc0Vycm9yO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGhhc1ZhbHVlOiBCb29sZWFuKGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpLFxuICAgICAgICBoYXNFcnJvcjogKGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUubGVuZ3RoID8gKHBhdHRlcm4gJiYgIXBhdHRlcm4udGVzdChldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKSkgOiBpc1JlcXVpcmVkKVxuICAgIH0pO1xuXG4gICAgLy8gdXBkYXRlIG9uIHRoaXMuc2V0U3RhdGUgaGFwcGVucyBhZnRlciB0aGlzIGZ1bmN0aW9ucyBpcyBjb21wbGV0ZWRcbiAgICAvLyBpbiBvcmRlciB0byBhdm9pZCB0aGF0ICdza2lwcGVkJyBjaGFuZ2Ugb2YgdmFsdWUsIEkgdXNlIHRoZVxuICAgIC8vIGhhc0Vycm9yIHZhcmlhYmxlXG4gICAgaGFzRXJyb3IgPSAoZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZS5sZW5ndGggPyAocGF0dGVybiAmJiAhcGF0dGVybi50ZXN0KGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpKSA6IGlzUmVxdWlyZWQpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQmx1cihldmVudCwgdGhpcywgaGFzRXJyb3IpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCwgdGhpcywgaGFzRXJyb3IpO1xuICAgIH1cbiB9XG5cbiAgb25DaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGhhc1ZhbHVlOiBCb29sZWFuKGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpLFxuICAgICAgaW5wdXRWYWx1ZTogZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSxcbiAgICAgIGhhc0Vycm9yOiBmYWxzZVxuICB9KTtcblxuICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIHRoaXMpO1xuICB9XG4gfVxuXG4gIG9uRm9jdXMoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzRm9jdXNlZDogdHJ1ZVxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMucHJvcHMub25Gb2N1cykge1xuICAgICAgdGhpcy5wcm9wcy5vbkZvY3VzKGV2ZW50LCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZXJyb3JUZXh0TWVzc2FnZSxcbiAgICAgIGlkLFxuICAgICAgaXNEaXNhYmxlZCxcbiAgICAgIGlzUmVxdWlyZWQsXG4gICAgICBsYWJlbCxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgdGhlbWUsXG4gICAgICB0eXBlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgeyBoYXNWYWx1ZSwgaGFzRXJyb3IsIGlucHV0VmFsdWUsIGlzRm9jdXNlZCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IHdyYXBwZXJDbGFzc2VzID0gY2xhc3NOYW1lcyhcbiAgICAgICd0eC13cmFwcGVyJyxcbiAgICAgIHRoaXMucHJvcHMud3JhcHBlckNsYXNzZXMsXG4gICAgICB7ICd0eC1mb2N1c2VkJzogaXNGb2N1c2VkIH0sXG4gICAgICB7ICd0eC1kaXNhYmxlZCc6IGlzRGlzYWJsZWQgfSxcbiAgICAgIHsgJ3R4LXdyYXBwZXItd2hpdGUnOiB0aGVtZSA9PT0gJ2RhcmsnIH0pO1xuXG4gICAgY29uc3QgaW5wdXRDbGFzc2VzID0gY2xhc3NOYW1lcyhcbiAgICAgICd0eC1pbnB1dCcsXG4gICAgICB0aGlzLnByb3BzLmlucHV0Q2xhc3NlcyApO1xuXG4gICAgY29uc3QgbGFiZWxDbGFzc2VzID0gY2xhc3NOYW1lcyhcbiAgICAgICd0eC1sYWJlbCcsXG4gICAgICB0aGlzLnByb3BzLmxhYmVsQ2xhc3NlcyxcbiAgICAgIHsgJ3R4LWFib3ZlJzogcGxhY2Vob2xkZXIgfHwgaGFzVmFsdWUgfHwgaXNGb2N1c2VkIH0pO1xuXG4gICAgY29uc3QgZXJyb3J0ZXh0Q2xhc3NlcyA9IGNsYXNzTmFtZXMoXG4gICAgICAndHgtZXJyb3J0ZXh0JyxcbiAgICAgIHRoaXMucHJvcHMuZXJyb3J0ZXh0Q2xhc3NlcyxcbiAgICAgIHsgJ3R4LWVycm9ydGV4dC12aXNpYmxlJzogaGFzRXJyb3IgfSk7XG5cbiAgICBjb25zdCBmaWVsZFJlcXVpcmVkTWVzc2FnZSA9ICdGaWVsZCBpcyByZXF1aXJlZCc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3dyYXBwZXJDbGFzc2VzfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT17dGhpcy5wcm9wcy5hdXRvQ29tcGxldGV9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2lucHV0Q2xhc3Nlc31cbiAgICAgICAgICAgIGRpc2FibGVkPXtpc0Rpc2FibGVkfVxuICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgcmVxdWlyZWQ9e2lzUmVxdWlyZWR9XG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZSB8fCAnJ31cbiAgICAgICAgICAgIGRhdGEtZXZlbnQtYWN0aW9uPXt0aGlzLnByb3BzWydkYXRhLWV2ZW50LWFjdGlvbiddfVxuICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5pbnB1dE5hbWV9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICBvbktleVByZXNzPXt0aGlzLnByb3BzLm9uS2V5UHJlc3N9XG4gICAgICAgICAgICBvbkZvY3VzPXt0aGlzLm9uRm9jdXMuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIHRhYkluZGV4PXt0aGlzLnByb3BzLnRhYkluZGV4IHx8IFwiMFwifVxuICAgICAgICAgICAgb25CbHVyPXt0aGlzLm9uQmx1ci5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7bGFiZWwgPyA8bGFiZWwgY2xhc3NOYW1lPXtsYWJlbENsYXNzZXN9XG4gICAgICAgICAgICBodG1sRm9yPXtpZH1cbiAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgPC9sYWJlbD4gOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgeyhlcnJvclRleHRNZXNzYWdlIHx8IGlzUmVxdWlyZWQpID9cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2Vycm9ydGV4dENsYXNzZXN9PlxuICAgICAgICAgIHtpbnB1dFZhbHVlID8gZXJyb3JUZXh0TWVzc2FnZSA6IGZpZWxkUmVxdWlyZWRNZXNzYWdlfVxuICAgICAgICAgIDwvcD4gOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiB9XG59XG5cbk1pbmltYWxSZWFjdFRleHQuZGVmYXVsdFByb3BzID0ge1xuICBhdXRvQ29tcGxldGU6IGZhbHNlLFxuICBpc0Rpc2FibGVkOiBmYWxzZSxcbiAgdGhlbWU6ICdub3JtYWwnLFxuICB0eXBlOiAndGV4dCdcbn07XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIE1pbmltYWxSZWFjdFRleHQucHJvcFR5cGVzID0ge1xuICAgICdhdXRvQ29tcGxldGUnOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAnd3JhcHBlckNsYXNzZXMnOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICdpbnB1dENsYXNzZXMnOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICdsYWJlbENsYXNzZXMnOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICdlcnJvcnRleHRDbGFzc2VzJzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAnZGF0YS1ldmVudC1hY3Rpb24nOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICdpZCc6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgJ2lucHV0TmFtZSc6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgJ2lucHV0VmFsdWUnOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMubnVtYmVyXSksXG4gICAgJ2lzRGlzYWJsZWQnOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAnaXNSZXF1aXJlZCc6IFByb3BUeXBlcy5ib29sLFxuICAgICdvbkNoYW5nZSc6IFByb3BUeXBlcy5mdW5jLFxuICAgICdwYXR0ZXJuJzogUHJvcFR5cGVzLmFueSxcbiAgICAncGxhY2Vob2xkZXInOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICd0aGVtZSc6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgJ2hhc0Vycm9yJzogUHJvcFR5cGVzLmJvb2wsXG4gICAgJ3R5cGUnOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICd0YWJJbmRleCc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgICAnb25LZXlQcmVzcyc6IFByb3BUeXBlcy5mdW5jXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1pbmltYWxSZWFjdFRleHQ7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIl19

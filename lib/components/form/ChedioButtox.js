'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _bwAxiom = require('bw-axiom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { 'function Object() { [native code] }': { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (false) {
  require('./ChedioButtox.scss');
}

var ChedioButtox = function (_Component) {
  _inherits(ChedioButtox, _Component);

  function ChedioButtox() {
    _classCallCheck(this, ChedioButtox);

    return _possibleConstructorReturn(this, (ChedioButtox.__proto__ || Object.getPrototypeOf(ChedioButtox)).apply(this, arguments));
  }

  _createClass(ChedioButtox, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          disabled = _props.disabled,
          inputClassName = _props.inputClassName,
          inputType = _props.inputType,
          indicatorClassName = _props.indicatorClassName,
          rest = _objectWithoutProperties(_props, ['children', 'disabled', 'inputClassName', 'inputType', 'indicatorClassName']);

      var classes = (0, _classnames2.default)('ax-chedio-buttox__container', {
        'ax-chedio-buttox__container--disabled': disabled,
        'ax-chedio-buttox__container--space': !!children
      });

      return _react2.default.createElement(
        _bwAxiom.Base,
        { Component: 'label', className: classes },
        _react2.default.createElement('input', _extends({}, rest, {
          className: (0, _classnames2.default)('ax-chedio-buttox', inputClassName),
          disabled: disabled,
          type: inputType })),
        _react2.default.createElement('span', { className: (0, _classnames2.default)('ax-chedio-buttox__indicator', indicatorClassName) }),
        _react2.default.createElement(
          'span',
          { className: 'ax-chedio-buttox__label' },
          children
        )
      );
    }
  }]);

  return ChedioButtox;
}(_react.Component);

ChedioButtox.propTypes = {
  children: _react.PropTypes.node,
  disabled: _react.PropTypes.bool,
  indicatorClassName: _react.PropTypes.string,
  inputClassName: _react.PropTypes.string,
  inputType: _react.PropTypes.string.isRequired
};
exports.default = ChedioButtox;
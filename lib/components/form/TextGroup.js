'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bwAxiom = require('bw-axiom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { 'function Object() { [native code] }': { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (false) {
  require('./TextGroup.scss');
}

var TextGroup = function (_Component) {
  _inherits(TextGroup, _Component);

  function TextGroup() {
    _classCallCheck(this, TextGroup);

    return _possibleConstructorReturn(this, (TextGroup.__proto__ || Object.getPrototypeOf(TextGroup)).apply(this, arguments));
  }

  _createClass(TextGroup, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          label = _props.label,
          rest = _objectWithoutProperties(_props, ['children', 'label']);

      return _react2.default.createElement(
        _bwAxiom.Base,
        _extends({}, rest, { Component: 'label', className: 'ax-input__group' }),
        label ? _react2.default.createElement(
          'div',
          { className: 'ax-input__label' },
          _react2.default.createElement(
            _bwAxiom.Strong,
            null,
            label
          )
        ) : void 0,
        children
      );
    }
  }]);

  return TextGroup;
}(_react.Component);

TextGroup.propTypes = {
  children: _react.PropTypes.node,
  label: _react.PropTypes.string
};
exports.default = TextGroup;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { 'function Object() { [native code] }': { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (false) {
  require('./Canvas.scss');
}

var Canvas = function (_Component) {
  _inherits(Canvas, _Component);

  function Canvas() {
    _classCallCheck(this, Canvas);

    return _possibleConstructorReturn(this, (Canvas.__proto__ || Object.getPrototypeOf(Canvas)).apply(this, arguments));
  }

  _createClass(Canvas, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          isShifted = _props.isShifted,
          rest = _objectWithoutProperties(_props, ['children', 'isShifted']);

      var consoleWidth = this.context.consoleWidth;

      var style = {
        marginRight: isShifted && consoleWidth,
        transform: isShifted && 'translateX(' + consoleWidth + ')'
      };

      return _react2.default.createElement(
        'div',
        _extends({}, rest, { className: 'ax-platform__canvas', style: style }),
        children
      );
    }
  }]);

  return Canvas;
}(_react.Component);

Canvas.propTypes = {
  children: _react.PropTypes.node,
  isShifted: _react.PropTypes.bool
};
Canvas.contextTypes = {
  consoleWidth: _react.PropTypes.string.isRequired
};
exports.default = Canvas;
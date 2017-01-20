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
  require('./Logo.scss');
}

var LogoVertical = function (_Component) {
  _inherits(LogoVertical, _Component);

  function LogoVertical() {
    _classCallCheck(this, LogoVertical);

    return _possibleConstructorReturn(this, (LogoVertical.__proto__ || Object.getPrototypeOf(LogoVertical)).apply(this, arguments));
  }

  _createClass(LogoVertical, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          width = _props.width,
          height = _props.height,
          viewBoxWidth = _props.viewBoxWidth,
          viewBoxHeight = _props.viewBoxHeight,
          rest = _objectWithoutProperties(_props, ['children', 'width', 'height', 'viewBoxWidth', 'viewBoxHeight']);

      var viewBoxAspectRatio = viewBoxWidth / viewBoxHeight;
      var style = {
        width: height ? parseFloat(height, 10) * viewBoxAspectRatio + 'rem' : width,
        height: height ? height : parseFloat(width, 10) / viewBoxAspectRatio + 'rem'
      };

      return _react2.default.createElement(
        _bwAxiom.Base,
        _extends({}, rest, { className: 'ax-logo', style: style }),
        children
      );
    }
  }]);

  return LogoVertical;
}(_react.Component);

LogoVertical.propTypes = {
  children: _react.PropTypes.node.isRequired,
  height: _react.PropTypes.string,
  viewBoxHeight: _react.PropTypes.number.isRequired,
  viewBoxWidth: _react.PropTypes.number.isRequired,
  width: _react.PropTypes.string
};
exports.default = LogoVertical;
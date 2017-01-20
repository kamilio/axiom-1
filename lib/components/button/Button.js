'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _bwAxiom = require('bw-axiom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { 'function Object() { [native code] }': { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (false) {
  require('./Button.scss');
}

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          children = _props.children,
          style = _props.style,
          size = _props.size,
          full = _props.full,
          rest = _objectWithoutProperties(_props, ['children', 'style', 'size', 'full']);

      var classes = (0, _classnames3.default)('ax-button', (_classnames = {}, _defineProperty(_classnames, 'ax-button--' + size, size), _defineProperty(_classnames, 'ax-button--' + style, style), _defineProperty(_classnames, 'ax-button--full', full === true), _defineProperty(_classnames, 'ax-button--full--' + full, full && full !== true), _classnames));

      var mappedChildren = _react.Children.toArray(children).map(function (child, index, array) {
        return child.type !== _bwAxiom.ButtonIcon ? child : (0, _react.cloneElement)(child, {
          isEnd: index === array.length - 1,
          isStart: index === 0,
          size: size
        });
      });

      return _react2.default.createElement(
        _bwAxiom.Base,
        _extends({ Component: 'button' }, rest, { className: classes }),
        mappedChildren
      );
    }
  }]);

  return Button;
}(_react.Component);

Button.propTypes = {
  children: _react.PropTypes.node.isRequired,
  full: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(['small', 'medium', 'large'])]),
  size: _react.PropTypes.oneOf(['small', 'medium', 'large']),
  style: _react.PropTypes.oneOf(['primary', 'secondary', 'tertiary'])
};
Button.defaultProps = {
  style: 'primary',
  size: 'medium'
};
exports.default = Button;
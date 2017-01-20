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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { 'function Object() { [native code] }': { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (false) {
  require('./Base.scss');
}

var Base = function (_Component) {
  _inherits(Base, _Component);

  function Base() {
    _classCallCheck(this, Base);

    return _possibleConstructorReturn(this, (Base.__proto__ || Object.getPrototypeOf(Base)).apply(this, arguments));
  }

  _createClass(Base, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          Component = _props.Component,
          className = _props.className,
          hiddenUntil = _props.hiddenUntil,
          textBreak = _props.textBreak,
          textCase = _props.textCase,
          textCenter = _props.textCenter,
          textDisabled = _props.textDisabled,
          textEllipsis = _props.textEllipsis,
          textInvalid = _props.textInvalid,
          textLeft = _props.textLeft,
          textRight = _props.textRight,
          textStrong = _props.textStrong,
          textSubtle = _props.textSubtle,
          textValid = _props.textValid,
          textWeak = _props.textWeak,
          theme = _props.theme,
          visibleUntil = _props.visibleUntil,
          rest = _objectWithoutProperties(_props, ['Component', 'className', 'hiddenUntil', 'textBreak', 'textCase', 'textCenter', 'textDisabled', 'textEllipsis', 'textInvalid', 'textLeft', 'textRight', 'textStrong', 'textSubtle', 'textValid', 'textWeak', 'theme', 'visibleUntil']);

      var classes = (0, _classnames3.default)(className, (_classnames = {}, _defineProperty(_classnames, 'ax-hidden-until--' + hiddenUntil, hiddenUntil), _defineProperty(_classnames, 'ax-text--break-none', textBreak === 'none'), _defineProperty(_classnames, 'ax-text--break-all', textBreak === 'all'), _defineProperty(_classnames, 'ax-text--break-word', textBreak === 'word'), _defineProperty(_classnames, 'ax-text--uppercase', textCase === 'upper'), _defineProperty(_classnames, 'ax-text--capitalize', textCase === 'capital'), _defineProperty(_classnames, 'ax-text--lowercase', textCase === 'lower'), _defineProperty(_classnames, 'ax-text--center', textCenter === true), _defineProperty(_classnames, 'ax-text--center--' + textCenter, textCenter && textCenter !== true), _defineProperty(_classnames, 'ax-text--ellipsis', textEllipsis === true), _defineProperty(_classnames, 'ax-text--left', textLeft === true), _defineProperty(_classnames, 'ax-text--left--' + textLeft, textLeft && textLeft !== true), _defineProperty(_classnames, 'ax-text--right', textRight === true), _defineProperty(_classnames, 'ax-text--right--' + textRight, textRight && textRight !== true), _defineProperty(_classnames, 'ax-text--strong', textStrong === true), _defineProperty(_classnames, 'ax-text--weak', textWeak === true), _defineProperty(_classnames, 'ax-visible-until--' + visibleUntil, visibleUntil), _defineProperty(_classnames, 'ax-text--subtle', textSubtle), _defineProperty(_classnames, 'ax-text--disabled', textDisabled), _defineProperty(_classnames, 'ax-text--valid', textValid), _defineProperty(_classnames, 'ax-text--invalid', textInvalid), _defineProperty(_classnames, 'ax-theme--' + theme, theme), _classnames));

      return _react2.default.createElement(Component, _extends({}, rest, {
        className: classes }));
    }
  }]);

  return Base;
}(_react.Component);

Base.propTypes = {
  Component: _react.PropTypes.string,
  className: _react.PropTypes.string,
  hiddenUntil: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(['small', 'medium', 'large'])]),
  textBreak: _react.PropTypes.oneOf(['none', 'all', 'word']),
  textCase: _react.PropTypes.oneOf(['upper', 'capital', 'lower']),
  textCenter: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(['small', 'medium', 'large'])]),
  textDisabled: _react.PropTypes.bool,
  textEllipsis: _react.PropTypes.bool,
  textInvalid: _react.PropTypes.bool,
  textLeft: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(['small', 'medium', 'large'])]),
  textRight: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(['small', 'medium', 'large'])]),
  textStrong: _react.PropTypes.bool,
  textSubtle: _react.PropTypes.bool,
  textValid: _react.PropTypes.bool,
  textWeak: _react.PropTypes.bool,
  theme: _react.PropTypes.oneOf(['light', 'dark']),
  visibleUntil: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(['small', 'medium', 'large'])])
};
Base.defaultProps = {
  Component: 'div'
};
exports.default = Base;
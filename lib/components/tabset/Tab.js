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

var Tab = function (_Component) {
  _inherits(Tab, _Component);

  function Tab() {
    _classCallCheck(this, Tab);

    return _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).apply(this, arguments));
  }

  _createClass(Tab, [{
    key: 'render',
    value: function render() {
      /* eslint-disable react/prop-types */
      var _props = this.props,
          active = _props.active,
          disabled = _props.disabled,
          onClick = _props.onClick,
          size = _props.size,
          title = _props.title,
          rest = _objectWithoutProperties(_props, ['active', 'disabled', 'onClick', 'size', 'title']);
      /* eslint-enable react/prop-types */


      var classes = (0, _classnames3.default)('ax-tabset__list-item', _defineProperty({
        'ax-tabset__list-item--active': active,
        'ax-tabset__list-item--disabled': disabled
      }, 'ax-tabset__list-item--' + size, size));

      return _react2.default.createElement(
        _bwAxiom.Base,
        _extends({}, rest, {
          Component: 'li',
          className: classes,
          textCase: 'upper',
          title: title }),
        _react2.default.createElement(
          'button',
          _extends({}, rest, {
            className: 'ax-tabset__button',
            disabled: disabled,
            onClick: onClick }),
          _react2.default.createElement(
            _bwAxiom.Strong,
            null,
            _react2.default.createElement(
              _bwAxiom.Small,
              null,
              title
            )
          )
        )
      );
    }
  }]);

  return Tab;
}(_react.Component);

Tab.propTypes = {
  active: _react.PropTypes.bool,
  disabled: _react.PropTypes.bool,
  size: _react.PropTypes.string,
  title: _react.PropTypes.node
};
exports.default = Tab;
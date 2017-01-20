'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _bwAxiom = require('bw-axiom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { 'function Object() { [native code] }': { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (false) {
  require('./ButtonIcon.scss');
}

var ButtonIcon = function (_Component) {
  _inherits(ButtonIcon, _Component);

  function ButtonIcon() {
    _classCallCheck(this, ButtonIcon);

    return _possibleConstructorReturn(this, (ButtonIcon.__proto__ || Object.getPrototypeOf(ButtonIcon)).apply(this, arguments));
  }

  _createClass(ButtonIcon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isEnd = _props.isEnd,
          isStart = _props.isStart,
          name = _props.name,
          size = _props.size;

      var classes = (0, _classnames2.default)('ax-button__icon', {
        'ax-button__icon--start': isStart,
        'ax-button__icon--end': isEnd
      });

      var sizeMap = {
        'small': '0.75rem',
        'medium': '0.75rem',
        'large': '1rem'
      };

      return _react2.default.createElement(
        'span',
        { className: classes },
        _react2.default.createElement(_bwAxiom.Icon, { name: name, size: sizeMap[size] })
      );
    }
  }]);

  return ButtonIcon;
}(_react.Component);

ButtonIcon.propTypes = {
  isEnd: _react.PropTypes.bool,
  isStart: _react.PropTypes.bool,
  name: _react.PropTypes.string.isRequired,
  size: _react.PropTypes.oneOf(['small', 'medium', 'large'])
};
exports.default = ButtonIcon;
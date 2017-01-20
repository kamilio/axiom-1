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

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { 'function Object() { [native code] }': { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (false) {
  require('./LabelIcon.scss');
}

var LabelIcon = function (_Component) {
  _inherits(LabelIcon, _Component);

  function LabelIcon() {
    _classCallCheck(this, LabelIcon);

    return _possibleConstructorReturn(this, (LabelIcon.__proto__ || Object.getPrototypeOf(LabelIcon)).apply(this, arguments));
  }

  _createClass(LabelIcon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isEnd = _props.isEnd,
          isStart = _props.isStart,
          rest = _objectWithoutProperties(_props, ['isEnd', 'isStart']);

      var classes = (0, _classnames2.default)('ax-label__icon', {
        'ax-label__icon--start': isStart,
        'ax-label__icon--end': isEnd
      });

      return _react2.default.createElement(
        'span',
        { className: classes },
        _react2.default.createElement(_bwAxiom.IconLink, rest)
      );
    }
  }]);

  return LabelIcon;
}(_react.Component);

LabelIcon.propTypes = {
  isEnd: _react.PropTypes.bool,
  isStart: _react.PropTypes.bool,
  name: _react.PropTypes.string.isRequired
};
exports.default = LabelIcon;
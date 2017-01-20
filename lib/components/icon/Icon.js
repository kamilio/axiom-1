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
  require('./Icon.scss');
}

/* eslint-disable max-len, react/jsx-sort-props */
var ICON_NAME_MAP = {
  'arrow-down': _react2.default.createElement('polygon', { points: '2 3 7.06940274 11 12 3' }),
  'arrow-right': _react2.default.createElement('polygon', { transform: 'translate(7.000000, 7.000000) rotate(-90.000000) translate(-7.000000, -7.000000) ', points: '2 3 7.06940274 11 12 3' }),
  'burger': _react2.default.createElement('path', { d: 'M2,2 L12,2 L12,4 L2,4 L2,2 Z M2,6 L12,6 L12,8 L2,8 L2,6 Z M2,10 L12,10 L12,12 L2,12 L2,10 Z' }),
  'chevron-down': _react2.default.createElement('polygon', { points: '2.5 3.5 1 5 7 11 13 5 11.5 3.5 7 8' }),
  'chevron-left': _react2.default.createElement('polygon', { transform: 'translate(6.750000, 7.000000) rotate(90.000000) translate(-6.750000, -7.000000) ', points: '2.25 3.25 0.75 4.75 6.75 10.75 12.75 4.75 11.25 3.25 6.75 7.75' }),
  'chevron-right': _react2.default.createElement('polygon', { transform: 'translate(7.250000, 7.000000) rotate(-90.000000) translate(-7.250000, -7.000000) ', points: '2.75 3.25 1.25 4.75 7.25 10.75 13.25 4.75 11.75 3.25 7.25 7.75' }),
  'chevron-up': _react2.default.createElement('polygon', { transform: 'translate(7.000000, 6.750000) rotate(-180.000000) translate(-7.000000, -6.750000) ', points: '2.5 3 1 4.5 7 10.5 13 4.5 11.5 3 7 7.5' }),
  'chevron-thick-down': _react2.default.createElement('polygon', { points: '3.5 4.5 2 6 7 11 12 6 10.5 4.5 7 8' }),
  'chevron-thick-left': _react2.default.createElement('polygon', { transform: 'translate(6.250000, 7.000000) rotate(90.000000) translate(-6.250000, -7.000000) ', points: '2.75 3.75 1.25 5.25 6.25 10.25 11.25 5.25 9.75 3.75 6.25 7.25' }),
  'chevron-thick-right': _react2.default.createElement('polygon', { transform: 'translate(7.750000, 7.000000) rotate(270.000000) translate(-7.750000, -7.000000) ', points: '4.25 3.75 2.75 5.25 7.75 10.25 12.75 5.25 11.25 3.75 7.75 7.25' }),
  'chevron-thick-up': _react2.default.createElement('polygon', { transform: 'translate(7.000000, 6.250000) rotate(180.000000) translate(-7.000000, -6.250000) ', points: '3.5 3 2 4.5 7 9.5 12 4.5 10.5 3 7 6.5' }),
  'cloud': _react2.default.createElement('path', { d: 'M11.967,6.174 C11.797,3.844 9.873,2 7.5,2 C5.535,2 3.882,3.268 3.268,5.024 C1.445,5.145 0,6.647 0,8.5 C0,10.433 1.567,12 3.5,12 L6,12 L6,9 L4,9 L7,5 L10,9 L8,9 L8,12 L11.5,12 L12,11.817 C13.162,11.403 14,10.305 14,9 C14,7.684 13.147,6.578 11.967,6.174' }),
  'cross': _react2.default.createElement('path', { d: 'M5.5,7 L2,3.5 L3.5,2 L7,5.5 L10.5,2 L12,3.5 L8.5,7 L12,10.5 L10.5,12 L7,8.5 L3.5,12 L2,10.5 L5.5,7 Z' }),
  'double-chevron-left': _react2.default.createElement('path', { d: 'M12.5,3.5 L11,2 L6,7 L11,12 L12.5,10.5 L9,7 L12.5,3.5 Z M7.5,3.5 L6,2 L1,7 L6,12 L7.5,10.5 L4,7 L7.5,3.5 Z' }),
  'double-chevron-right': _react2.default.createElement('path', { d: 'M13,3.5 L11.5,2 L6.5,7 L11.5,12 L13,10.5 L9.5,7 L13,3.5 Z M8,3.5 L6.5,2 L1.5,7 L6.5,12 L8,10.5 L4.5,7 L8,3.5 Z', transform: 'translate(7.250000, 7.000000) rotate(180.000000) translate(-7.250000, -7.000000) ' }),
  'ellipsis': _react2.default.createElement('path', { d: 'M2,9 C3.1045695,9 4,8.1045695 4,7 C4,5.8954305 3.1045695,5 2,5 C0.8954305,5 0,5.8954305 0,7 C0,8.1045695 0.8954305,9 2,9 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z M12,9 C13.1045695,9 14,8.1045695 14,7 C14,5.8954305 13.1045695,5 12,5 C10.8954305,5 10,5.8954305 10,7 C10,8.1045695 10.8954305,9 12,9 Z' }),
  'magnify-glass': _react2.default.createElement('path', { d: 'M3,6 C3,4.343 4.343,3 6,3 C7.657,3 9,4.343 9,6 C9,7.657 7.657,9 6,9 C4.343,9 3,7.657 3,6 L3,6 Z M13,11.586 L10.168,8.754 C10.692,7.964 11,7.019 11,6 C11,3.239 8.761,1 6,1 C3.239,1 1,3.239 1,6 C1,8.761 3.239,11 6,11 C7.019,11 7.964,10.692 8.754,10.168 L11.586,13 L13,11.586 Z' }),
  'minus': _react2.default.createElement('rect', { x: '2', y: '6', width: '10', height: '2' }),
  'plus': _react2.default.createElement('path', { d: 'M8,6 L8,2 L6,2 L6,6 L2,6 L2,8 L6,8 L6,12 L8,12 L8,8 L12,8 L12,6 L8,6 Z' }),
  'question-mark': _react2.default.createElement('path', { d: 'M7,13.125 C6.38,13.125 5.875,12.62 5.875,12 C5.875,11.379 6.38,10.875 7,10.875 C7.62,10.875 8.125,11.379 8.125,12 C8.125,12.62 7.62,13.125 7,13.125 Z M8,9.5 L6,9.5 L6,9.062 C6,8.442 6.221,7.852 6.616,7.309 C6.897,6.922 7.231,6.608 7.526,6.331 L7.621,6.241 C8.248,5.648 8.603,5.278 8.597,4.559 C8.597,3.674 7.88,3 7,3 C6.12,3 5.403,3.674 5.403,4.555 L5.403,5 L3.445,5 L3.445,4.555 C3.445,2.595 5.04,1 7,1 C8.955,1 10.55,2.594 10.555,4.553 C10.564,6.153 9.525,7.136 8.968,7.664 L8.89,7.737 C8.615,7.996 8.356,8.24 8.195,8.46 C8.038,8.677 8,8.84 8,9.062 L8,9.5 Z' }),
  'tag': _react2.default.createElement('path', { d: 'M5.00082556,4.00117947 C5.00082556,4.27728798 4.88877443,4.52738627 4.7076918,4.70845743 C4.52660918,4.88952859 4.27749551,5.00057223 4.00136951,5.00057223 C3.44811706,5.00057223 3.00091301,4.55339649 3.00091301,4.00017907 C3.00091301,3.72407056 3.11196368,3.47497267 3.29304631,3.29390151 C3.47412893,3.11283035 3.72424306,3.00078631 4.00036905,3.00078631 C4.55262105,3.00078631 5.00082556,3.44896245 5.00082556,4.00117947 M1.99945605,1 C1.72333005,1 1.47321593,1.11204403 1.2921333,1.29311519 C1.11105067,1.47418636 1,1.72328425 1,1.99939276 L1,6.2040452 C1,6.56818831 1,6.96634478 1.37517119,7.34149222 C1.75134283,7.71764004 6.8083155,12.7758944 6.8083155,12.7758944 C7.19949399,13.1660478 7.83278296,13.1660478 8.22396145,12.7758944 L10.5,10.5 L12.7750381,8.22410557 C13.1662166,7.83395224 13.1662166,7.19970298 12.7750381,6.80954965 L7.34189378,1.37514743 C6.96572213,1 6.5685409,1 6.20337428,1 L1.99945605,1 Z' }),
  'twitter': _react2.default.createElement('path', { d: 'M0,11.087 C0.225,11.113 0.454,11.127 0.685,11.127 C2.031,11.127 3.27,10.667 4.252,9.897 C2.995,9.874 1.935,9.044 1.569,7.902 C1.745,7.936 1.925,7.954 2.11,7.954 C2.372,7.954 2.716,7.919 2.957,7.853 C1.643,7.589 0.743,6.429 0.743,5.037 C0.743,5.216 1.483,5.345 1.954,5.36 C1.183,4.845 0.631,3.966 0.631,2.969 C0.631,2.443 0.75,1.949 0.997,1.525 C2.414,3.263 4.519,4.407 6.906,4.526 C6.857,4.316 6.826,4.097 6.826,3.872 C6.826,2.286 8.11,1 9.696,1 C10.522,1 11.267,1.348 11.791,1.907 C12.445,1.778 13.059,1.539 13.614,1.209 C13.399,1.88 12.944,2.443 12.351,2.799 C12.932,2.729 13.485,2.575 14,2.346 C13.615,2.922 13.128,3.428 12.567,3.833 C12.573,3.956 12.575,4.08 12.575,4.205 C12.575,8 9.686,12.377 4.403,12.377 C2.781,12.377 1.271,11.901 0,11.087 Z' })
};
/* eslint-enable max-len, react/jsx-sort-props */

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          size = _props.size,
          rest = _objectWithoutProperties(_props, ['name', 'size']);

      var style = { width: size, height: size };

      return _react2.default.createElement(
        _bwAxiom.Base,
        _extends({}, rest, {
          Component: 'svg',
          className: 'ax-icon',
          style: style,
          viewBox: '0 0 14 14' }),
        ICON_NAME_MAP[name]
      );
    }
  }]);

  return Icon;
}(_react.Component);

Icon.propTypes = {
  name: _react.PropTypes.oneOf(['arrow-down', 'arrow-right', 'burger', 'chevron-down', 'chevron-left', 'chevron-right', 'chevron-up', 'chevron-thick-down', 'chevron-thick-left', 'chevron-thick-right', 'chevron-thick-up', 'cloud', 'cross', 'double-chevron-left', 'double-chevron-right', 'ellipsis', 'magnify-glass', 'minus', 'plus', 'question-mark', 'tag', 'twitter']),
  size: _react.PropTypes.string
};
Icon.defaultProps = {
  size: '0.875rem'
};
exports.default = Icon;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Logo = require('./Logo');

var _Logo2 = _interopRequireDefault(_Logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { 'function Object() { [native code] }': { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LogoVertical = function (_Component) {
  _inherits(LogoVertical, _Component);

  function LogoVertical() {
    _classCallCheck(this, LogoVertical);

    return _possibleConstructorReturn(this, (LogoVertical.__proto__ || Object.getPrototypeOf(LogoVertical)).apply(this, arguments));
  }

  _createClass(LogoVertical, [{
    key: 'render',
    value: function render() {
      var viewBoxWidth = 120;
      var viewBoxHeight = 143;

      /* eslint-disable max-len */
      return _react2.default.createElement(
        _Logo2.default,
        _extends({}, this.props, { viewBoxHeight: viewBoxHeight, viewBoxWidth: viewBoxWidth }),
        _react2.default.createElement(
          'svg',
          { height: '100%', viewBox: '0 0 ' + viewBoxWidth + ' ' + viewBoxHeight, width: '100%', x: '0%', y: '0%' },
          _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('circle', { cx: '75.9', cy: '56.2', fill: '#FF8F00', r: '6.4' }),
            _react2.default.createElement('circle', { cx: '57.4', cy: '59.7', fill: '#F46B00', r: '9.8' }),
            _react2.default.createElement('circle', { cx: '73.5', cy: '72.5', fill: '#FF586F', r: '8.2' }),
            _react2.default.createElement('circle', { cx: '95.1', cy: '64.2', fill: '#8EA53C', r: '5.3' }),
            _react2.default.createElement('circle', { cx: '47.3', cy: '78.6', fill: '#F6BE00', r: '4.6' }),
            _react2.default.createElement('circle', { cx: '66.7', cy: '46', fill: '#F6BE00', r: '4.2' }),
            _react2.default.createElement('circle', { cx: '40.4', cy: '27.6', fill: '#9C7CB6', r: '2.5' }),
            _react2.default.createElement('circle', { cx: '18.3', cy: '88.1', fill: '#969C9E', r: '2.3' }),
            _react2.default.createElement('circle', { cx: '64.4', cy: '96.3', fill: '#008EB4', r: '3.3' }),
            _react2.default.createElement('circle', { cx: '37', cy: '60.7', fill: '#5FC3E6', r: '3.3' }),
            _react2.default.createElement('circle', { cx: '59.6', cy: '74.4', fill: '#F46B00', r: '3' }),
            _react2.default.createElement('circle', { cx: '89.8', cy: '38', fill: '#5FC3E6', r: '3.4' }),
            _react2.default.createElement('circle', { cx: '89.8', cy: '83.5', fill: '#FF8F00', r: '2.7' }),
            _react2.default.createElement(
              'g',
              { fill: 'currentColor' },
              _react2.default.createElement('path', { d: 'M21.1,118.6L21.1,118.6c-0.7,0-1.4,0.2-2.1,0.7l0-3.9l-1.6,0v9.1c0,2.3,1.5,3.9,3.6,3.9h0h0     c1.2,0,2.2-0.5,2.9-1.4c0.7-0.9,1-2,1-3.5c0-1.5-0.3-2.6-1-3.4C23.3,119.1,22.3,118.6,21.1,118.6z M23.4,123.4     c0,1.1-0.2,1.9-0.6,2.5c-0.4,0.5-0.9,0.8-1.7,0.8c-1.4,0-2-1.2-2-2.3v-2.3c0-1.1,1.2-1.9,2-1.9c0.8,0,1.3,0.3,1.7,0.8     C23.2,121.6,23.4,122.4,23.4,123.4z' }),
              _react2.default.createElement('path', { d: 'M44.6,118.6c-2.2,0-3.6,1.4-3.6,3.8v5.7h1.6v-5.7c0-2,1.4-2.2,2-2.2s2,0.2,2,2.2v5.7h1.6v-5.7     C48.1,120.1,46.8,118.6,44.6,118.6z' }),
              _react2.default.createElement('path', { d: 'M30.8,120.3c-0.2-0.1-0.4-0.1-0.6-0.1c-0.6,0-2,0.2-2,2.2v5.7h-1.6v-5.7c0-2.4,1.3-3.8,3.6-3.8     c0.4,0,0.7,0,1,0.1L30.8,120.3z' }),
              _react2.default.createElement('path', { d: 'M55.7,115.3l0,3.9c-0.6-0.4-1.3-0.6-2-0.7h0c-1.2,0-2.2,0.5-2.9,1.4c-0.7,0.9-1,2-1,3.4     c0,1.5,0.3,2.7,1,3.5c0.7,0.9,1.7,1.3,2.9,1.4h0h0c2.1,0,3.6-1.6,3.6-3.9v-9.1L55.7,115.3z M55.7,122.1v2.3c0,1.1-0.6,2.3-2,2.3     c-0.8,0-1.3-0.3-1.7-0.8c-0.4-0.6-0.6-1.4-0.6-2.5c0-1.1,0.2-1.8,0.6-2.4c0.4-0.5,0.9-0.8,1.7-0.8h0     C54.5,120.2,55.7,121,55.7,122.1z' }),
              _react2.default.createElement('path', { d: 'M90,120.2c0.6,0,1.1,0.2,1.5,0.5c0.3,0.3,0.5,0.7,0.6,1.2l1.5-0.1c0-1.1-0.4-1.8-1.1-2.4     c-0.7-0.6-1.6-0.9-2.5-0.9c-1.2,0-2.2,0.5-2.9,1.4c-0.7,0.9-1,2-1,3.5c0,1.5,0.3,2.6,1,3.5c0.7,0.9,1.7,1.4,2.9,1.4     c1,0,1.9-0.3,2.5-0.9c0.7-0.6,1-1.3,1.1-2.4l-1.5-0.1c0,0.6-0.2,1-0.6,1.3c-0.4,0.3-0.9,0.5-1.5,0.5c-0.8,0-1.3-0.3-1.7-0.8     c-0.4-0.6-0.6-1.4-0.6-2.5c0-1.1,0.2-1.9,0.6-2.5C88.7,120.5,89.2,120.2,90,120.2z' }),
              _react2.default.createElement('path', { d: 'M99.2,118.6c-0.8,0-1.4,0.2-2,0.6c-0.1,0-0.1,0.1-0.2,0.2v-4h-1.6v12.8H97v-5.7c0-1.2,0.8-2.3,2.1-2.3     c1.2,0,1.9,1,1.9,2.2v5.7h1.6v-5.6C102.5,119.2,100.2,118.6,99.2,118.6z' }),
              _react2.default.createElement('path', { d: 'M84.7,126.6c-0.4,0.3-0.8,0.2-1.2,0c-0.3-0.2-0.5-0.5-0.5-1.1c0-0.9,0-5.1,0-5.1h1.7v-1.6h-1.7V117h-1.6     v1.9h-1v1.6h1v5.1c0,1.3,0.6,2.2,1.4,2.6c0.9,0.4,2,0.3,2.8-0.3L84.7,126.6z' }),
              _react2.default.createElement('path', { d: 'M78.9,121.8c0-1-0.3-1.8-1-2.4c-0.6-0.5-1.5-0.8-2.5-0.8c-1,0-1.8,0.3-2.5,0.8c-0.6,0.5-0.9,1.1-1,1.8     l1.5,0.1c0-0.3,0.2-0.5,0.4-0.8c0.3-0.3,0.8-0.4,1.4-0.4c0.6,0,1.1,0.1,1.5,0.4c0.3,0.3,0.5,0.6,0.5,1.1v0.6h-1.8     c-1,0-2,0-2.8,0.6c-0.7,0.5-1.1,1.3-1.1,2.3c0,1.8,1.4,2.9,3.6,2.9c0.8,0,1.8-0.2,2.5-0.7l0.1,0.6h1.2v-3.4c0,0,0,0,0,0V121.8z      M77.3,124.8c0,1.4-1.2,1.9-2.2,1.9c-0.6,0-2-0.1-2-1.3c0-0.3,0.1-0.8,0.5-1.1c0.4-0.3,1.1-0.3,1.9-0.3h1.7v0.1h0l0,0V124.8z' }),
              _react2.default.createElement('path', { d: 'M39.2,121.8c0-1-0.3-1.8-1-2.4c-0.6-0.5-1.5-0.8-2.5-0.8c-1,0-1.8,0.3-2.5,0.8c-0.6,0.5-0.9,1.1-1,1.8     l1.5,0.1c0-0.3,0.2-0.5,0.4-0.8c0.3-0.3,0.8-0.4,1.4-0.4c0.6,0,1.1,0.1,1.5,0.4c0.3,0.3,0.5,0.6,0.5,1.1v0.6h-1.8     c-1,0-2,0-2.8,0.6c-0.7,0.5-1.1,1.3-1.1,2.3c0,1.8,1.4,2.9,3.6,2.9c0.8,0,1.8-0.2,2.5-0.7l0.1,0.6h1.2v-3.4c0,0,0,0,0,0V121.8z      M37.7,124.8c0,1.4-1.2,1.9-2.2,1.9c-0.6,0-2-0.1-2-1.3c0-0.3,0.1-0.8,0.5-1.1c0.4-0.3,1.1-0.3,1.9-0.3h1.7v0.1h0l0,0V124.8z' }),
              _react2.default.createElement('polygon', { points: '69.5,118.8 67.6,125.6 65.6,118.8 64.1,118.8 62.2,125.6 60.2,118.8 58.7,118.8 61.4,128.2      62.9,128.2 64.9,121.4 66.8,128.2 68.3,128.2 71,118.8    ' })
            )
          )
        )
      );
      /* eslint-enable max-len */
    }
  }]);

  return LogoVertical;
}(_react.Component);

LogoVertical.propTypes = {
  height: _react.PropTypes.string,
  width: _react.PropTypes.string
};
exports.default = LogoVertical;
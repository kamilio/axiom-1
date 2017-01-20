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
  require('./Grid.scss');
}

var Grid = function (_Component) {
  _inherits(Grid, _Component);

  function Grid() {
    _classCallCheck(this, Grid);

    return _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).apply(this, arguments));
  }

  _createClass(Grid, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          children = _props.children,
          responsive = _props.responsive,
          gutters = _props.gutters,
          vGutters = _props.vGutters,
          hGutters = _props.hGutters,
          fill = _props.fill,
          fit = _props.fit,
          full = _props.full,
          shrink = _props.shrink,
          vAlign = _props.vAlign,
          hAlign = _props.hAlign,
          rest = _objectWithoutProperties(_props, ['children', 'responsive', 'gutters', 'vGutters', 'hGutters', 'fill', 'fit', 'full', 'shrink', 'vAlign', 'hAlign']);

      var classes = (0, _classnames3.default)('ax-grid', (_classnames = {
        'ax-grid--unresponsive': responsive === false,
        'ax-grid--gutters-none': gutters === false,
        'ax-grid--gutters-none-v': vGutters === false,
        'ax-grid--gutters-none-h': hGutters === false
      }, _defineProperty(_classnames, 'ax-grid--gutters--' + gutters, typeof gutters === 'string'), _defineProperty(_classnames, 'ax-grid--fill', fill === true), _defineProperty(_classnames, 'ax-grid--fill--' + fill, fill && fill !== true), _defineProperty(_classnames, 'ax-grid--fit', fit === true), _defineProperty(_classnames, 'ax-grid--fit--' + fit, fit && fit !== true), _defineProperty(_classnames, 'ax-grid--full', full === true), _defineProperty(_classnames, 'ax-grid--full--' + full, full && full !== true), _defineProperty(_classnames, 'ax-grid--shrink', shrink === true), _defineProperty(_classnames, 'ax-grid--shrink--' + shrink, shrink && shrink !== true), _defineProperty(_classnames, 'ax-grid--top', vAlign === 'top'), _defineProperty(_classnames, 'ax-grid--middle', vAlign === 'middle'), _defineProperty(_classnames, 'ax-grid--bottom', vAlign === 'bottom'), _defineProperty(_classnames, 'ax-grid--left', hAlign === 'left'), _defineProperty(_classnames, 'ax-grid--center', hAlign === 'center'), _defineProperty(_classnames, 'ax-grid--right', hAlign === 'right'), _defineProperty(_classnames, 'ax-grid--around', hAlign === 'around'), _defineProperty(_classnames, 'ax-grid--between', hAlign === 'between'), _classnames));

      return _react2.default.createElement(
        _bwAxiom.Base,
        _extends({}, rest, { className: classes }),
        children
      );
    }
  }]);

  return Grid;
}(_react.Component);

Grid.propTypes = {
  children: _react.PropTypes.node,
  fill: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(['small', 'medium', 'large'])]),
  fit: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(['small', 'medium', 'large'])]),
  full: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(['small', 'medium', 'large'])]),
  gutters: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(['small', 'large'])]),
  hAlign: _react.PropTypes.oneOf(['left', 'center', 'right', 'around', 'between']),
  hGutters: _react.PropTypes.bool,
  responsive: _react.PropTypes.bool,
  shrink: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(['small', 'medium', 'large'])]),
  vAlign: _react.PropTypes.oneOf(['top', 'middle', 'bottom']),
  vGutters: _react.PropTypes.bool
};
Grid.defaultProps = {
  responsive: true,
  gutters: true,
  vGutters: true,
  hGutters: true
};
exports.default = Grid;
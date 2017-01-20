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

var GridCell = function (_Component) {
  _inherits(GridCell, _Component);

  function GridCell() {
    _classCallCheck(this, GridCell);

    return _possibleConstructorReturn(this, (GridCell.__proto__ || Object.getPrototypeOf(GridCell)).apply(this, arguments));
  }

  _createClass(GridCell, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          children = _props.children,
          fill = _props.fill,
          fit = _props.fit,
          full = _props.full,
          width = _props.width,
          shrink = _props.shrink,
          style = _props.style,
          vAlign = _props.vAlign,
          rest = _objectWithoutProperties(_props, ['children', 'fill', 'fit', 'full', 'width', 'shrink', 'style', 'vAlign']);

      var classes = (0, _classnames3.default)('ax-grid__cell', (_classnames = {
        'ax-grid__cell--top': vAlign === 'top',
        'ax-grid__cell--middle': vAlign === 'middle',
        'ax-grid__cell--bottom': vAlign === 'bottom',
        'ax-grid__cell--fill': fill === true,
        'ax-grid__cell--fit': fit === true,
        'ax-grid__cell--full': full === true,
        'ax-grid__cell--percent': width,
        'ax-grid__cell--shrink': shrink === true
      }, _defineProperty(_classnames, 'ax-grid__cell--fit--' + fit, fit && fit !== true), _defineProperty(_classnames, 'ax-grid__cell--fill--' + fill, fill && fill !== true), _defineProperty(_classnames, 'ax-grid__cell--full--' + full, full && full !== true), _defineProperty(_classnames, 'ax-grid__cell--shrink--' + shrink, shrink && shrink !== true), _classnames));

      var styles = _extends({}, style, {
        width: width && Math.max(0, Math.min(width, 100)) + '%'
      });

      return _react2.default.createElement(
        _bwAxiom.Base,
        _extends({}, rest, { className: classes, style: styles }),
        children
      );
    }
  }]);

  return GridCell;
}(_react.Component);

GridCell.propTypes = {
  children: _react.PropTypes.node,
  fill: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(['small', 'medium', 'large'])]),
  fit: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(['small', 'medium', 'large'])]),
  full: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(['small', 'medium', 'large'])]),
  shrink: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(['small', 'medium', 'large'])]),
  style: _react.PropTypes.object,
  vAlign: _react.PropTypes.oneOf(['top', 'middle', 'bottom']),
  width: _react.PropTypes.number
};
exports.default = GridCell;
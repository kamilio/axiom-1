'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _omit = require('lodash/omit');

var _omit2 = _interopRequireDefault(_omit);

var _bwAxiom = require('bw-axiom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { 'function Object() { [native code] }': { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (false) {
  require('./Tabset.scss');
}

var Tabset = function (_Component) {
  _inherits(Tabset, _Component);

  function Tabset() {
    _classCallCheck(this, Tabset);

    return _possibleConstructorReturn(this, (Tabset.__proto__ || Object.getPrototypeOf(Tabset)).apply(this, arguments));
  }

  _createClass(Tabset, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.activateTab(this.props.activeTabIndex);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.children.length !== this.props.children.length) {
        this.setState({ activeTabIndex: 0 });
      }
    }
  }, {
    key: 'activateTab',
    value: function activateTab() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this.setState({
        activeTabIndex: index
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          size = _props.size,
          rest = _objectWithoutProperties(_props, ['children', 'size']);

      var activeTabIndex = this.state.activeTabIndex;

      var arrayChildren = _react.Children.toArray(children);

      var activeTabContent = arrayChildren[activeTabIndex] ? arrayChildren[activeTabIndex].props.children : null;

      var tabs = arrayChildren.filter(function (_ref) {
        var type = _ref.type;
        return type === _bwAxiom.Tab;
      }).map(function (child, index) {
        return (0, _react.cloneElement)(child, {
          active: index === activeTabIndex,
          onClick: function onClick() {
            return _this2.activateTab(index);
          },
          size: size
        });
      });

      return _react2.default.createElement(
        _bwAxiom.Base,
        _extends({}, (0, _omit2.default)(rest, ['activeTabIndex']), { className: 'ax-tabset' }),
        _react2.default.createElement(
          'ul',
          { className: 'ax-tabset__list' },
          tabs
        ),
        _react2.default.createElement(
          'div',
          { className: 'ax-tabset__content' },
          activeTabContent
        )
      );
    }
  }]);

  return Tabset;
}(_react.Component);

Tabset.propTypes = {
  activeTabIndex: _react.PropTypes.number,
  children: _react.PropTypes.node,
  size: _react.PropTypes.oneOf(['small', 'large'])
};
Tabset.defaultProps = {
  size: 'small'
};
exports.default = Tabset;
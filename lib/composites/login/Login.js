'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

var _bwAxiom = require('bw-axiom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { 'function Object() { [native code] }': { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (false) {
  require('./Login.scss');
}

var Login = function (_Component) {
  _inherits(Login, _Component);

  function Login() {
    _classCallCheck(this, Login);

    return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
  }

  _createClass(Login, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        username: '',
        password: ''
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      var onSubmit = this.props.onSubmit;
      var _state = this.state,
          username = _state.username,
          password = _state.password;


      event.preventDefault();
      onSubmit({ username: username, password: password });
    }
  }, {
    key: 'handleUsernameChange',
    value: function handleUsernameChange(event) {
      this.setState({ username: event.target.value });
    }
  }, {
    key: 'handlePasswordChange',
    value: function handlePasswordChange(event) {
      this.setState({ password: event.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          application = _props.application,
          backgroundImage = _props.backgroundImage,
          error = _props.error,
          rest = _objectWithoutProperties(_props, ['application', 'backgroundImage', 'error']);

      var _state2 = this.state,
          username = _state2.username,
          password = _state2.password;

      var style = { backgroundImage: 'url(' + backgroundImage + ')' };

      return _react2.default.createElement(
        _bwAxiom.Base,
        _extends({}, (0, _lodash2.default)(rest, ['onSubmit']), { className: 'ax-login', style: style }),
        _react2.default.createElement(
          'div',
          { className: 'ax-login__header' },
          _react2.default.createElement(
            'div',
            { className: 'ax-login__header-container' },
            _react2.default.createElement(
              'div',
              { className: 'ax-login__logo' },
              _react2.default.createElement(_bwAxiom.LogoVertical, { height: '8.75rem' })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'ax-login__body' },
          _react2.default.createElement(
            'div',
            { className: 'ax-login__form' },
            _react2.default.createElement(
              _bwAxiom.Heading,
              { style: 'display' },
              application,
              _react2.default.createElement(
                _bwAxiom.Weak,
                null,
                '/ Login'
              )
            ),
            _react2.default.createElement(
              _bwAxiom.Form,
              { onSubmit: this.handleSubmit.bind(this) },
              _react2.default.createElement(_bwAxiom.TextInput, {
                onChange: this.handleUsernameChange.bind(this),
                placeholder: 'Username',
                size: 'large',
                style: 'translucent',
                value: username }),
              _react2.default.createElement(_bwAxiom.TextInput, {
                onChange: this.handlePasswordChange.bind(this),
                placeholder: 'Password',
                size: 'large',
                style: 'translucent',
                type: 'password',
                value: password }),
              _react2.default.createElement(
                _bwAxiom.ButtonGroup,
                null,
                _react2.default.createElement(
                  _bwAxiom.Button,
                  {
                    full: 'small',
                    size: 'large',
                    type: 'submit' },
                  'Login'
                )
              )
            ),
            error ? _react2.default.createElement(
              _bwAxiom.Paragraph,
              { textInvalid: true },
              _react2.default.createElement(
                _bwAxiom.Strong,
                null,
                error
              )
            ) : void 0
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'ax-login__footer' },
          _react2.default.createElement(
            _bwAxiom.Paragraph,
            { textCenter: true, textRight: 'small' },
            'Forgotten your Brandwatch password? ',
            _react2.default.createElement(
              _bwAxiom.Link,
              { href: 'https://app.brandwatch.com/login' },
              'Reset it here. '
            )
          )
        )
      );
    }
  }]);

  return Login;
}(_react.Component);

Login.propTypes = {
  application: _react.PropTypes.string.isRequired,
  backgroundImage: _react.PropTypes.string.isRequired,
  error: _react.PropTypes.string,
  onSubmit: _react.PropTypes.func.isRequired
};
exports.default = Login;
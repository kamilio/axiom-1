'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findComponent = findComponent;
exports.getCSSVar = getCSSVar;

var _react = require('react');

function findComponent(components, Component) {
  return _react.Children.toArray(components).find(function (_ref) {
    var type = _ref.type;
    return type === Component;
  });
}

function getCSSVar(variable, context) {
  if (typeof window === 'undefined') {
    return '';
  }

  if (!context || context === document) {
    context = document.documentElement;
  }

  return window.getComputedStyle(context).getPropertyValue('--' + variable).trim();
}
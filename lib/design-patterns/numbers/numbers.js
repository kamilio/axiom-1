'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.longNumber = longNumber;
exports.shortNumber = shortNumber;
var NUMBER_SEPARATOR = exports.NUMBER_SEPARATOR = '\u2009';

function isInvalidNumber(number) {
  return isNaN(parseFloat(number)) || !isFinite(number);
}

function isInvalidPrecision(precision) {
  return isNaN(parseInt(precision)) && precision % 1 === 0 && precision >= 0 && precision <= 20;
}

function toFixed(number, precision) {
  if (!isInvalidPrecision(precision)) {
    number = number.toFixed(precision);
  }

  return number.toString().replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1');
}

function longNumber(number) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (isInvalidNumber(number)) {
    return '-';
  }

  var _toFixed$split = toFixed(number, precision).split('.'),
      _toFixed$split2 = _slicedToArray(_toFixed$split, 2),
      integer = _toFixed$split2[0],
      fraction = _toFixed$split2[1];

  var formatted = integer.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + NUMBER_SEPARATOR);

  return fraction ? formatted + '.' + fraction : formatted;
}

function shortNumber(number) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var threshold = 9999;
  var metricPrefixes = [{ n: 1E12, prefix: 'trillion' }, { n: 1E9, prefix: 'billion' }, { n: 1E6, prefix: 'million' }, { n: 1E3, prefix: 'thousand' }];

  if (isInvalidNumber(number)) {
    return '-';
  }

  if (number <= threshold) {
    return longNumber(number, precision);
  }

  for (var i = 0; i < metricPrefixes.length; i++) {
    if (number >= metricPrefixes[i].n) {
      return toFixed(number / metricPrefixes[i].n, precision) + ' ' + metricPrefixes[i].prefix;
    }
  }
}
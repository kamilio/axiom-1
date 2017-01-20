'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shortDate = shortDate;
exports.mediumDate = mediumDate;
exports.longDate = longDate;
exports.shortDateWithTime = shortDateWithTime;
exports.mediumDateWithTime = mediumDateWithTime;
exports.longDateWithTime = longDateWithTime;
exports.longDateWithTimezone = longDateWithTimezone;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FORMAT_MAP = {
  short: 'DD MMM',
  medium: 'DD MMM YYYY',
  long: 'ddd, DD MMM YYYY',
  time: 'HH:kk',
  timezone: '(UTCZ)'
};

function formatDate(date, format) {
  return (0, _moment2.default)(date).format(format);
}

function shortDate(date) {
  return formatDate(date, FORMAT_MAP.short);
}

function mediumDate(date) {
  return formatDate(date, FORMAT_MAP.medium);
}

function longDate(date) {
  return formatDate(date, FORMAT_MAP.long);
}

function shortDateWithTime(date) {
  return formatDate(date, FORMAT_MAP.short + ' ' + FORMAT_MAP.time);
}

function mediumDateWithTime(date) {
  return formatDate(date, FORMAT_MAP.medium + ' ' + FORMAT_MAP.time);
}

function longDateWithTime(date) {
  return formatDate(date, FORMAT_MAP.long + ' ' + FORMAT_MAP.time);
}

function longDateWithTimezone(date) {
  return formatDate(date, FORMAT_MAP.long + ' ' + FORMAT_MAP.time + ' ' + FORMAT_MAP.timezone);
}
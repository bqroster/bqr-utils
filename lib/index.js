"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.capitalize = exports.isDeleteBackward = exports.uuidXS = exports.uuid = exports.isObject = exports.isFunction = exports.isEmpty = exports.isArray = exports.isNull = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @type {string}
 */
var INPUT_DEL_BACKWARD = 'deleteContentBackward';
/**
 * @param {*} val
 * @return {boolean}
 */

var isNull = function isNull(val) {
  return val === undefined || val === null || typeof val === 'number' && Number.isNaN(val);
};
/**
 * @param {*} val
 * @return {boolean}
 */


exports.isNull = isNull;

var isArray = function isArray(val) {
  return Array.isArray(val);
};
/**
 * @param {*} val
 * @return {boolean}
 */


exports.isArray = isArray;

var isEmpty = function isEmpty(val) {
  return val === '' || isNull(val) || isArray(val) && val.length === 0 || isObject(val) && objectKeys(val).length === 0;
};
/**
 * @param {*} val
 * @return {boolean}
 */


exports.isEmpty = isEmpty;

var isFunction = function isFunction(val) {
  return typeof val === 'function';
};
/**
 * @param {*} val
 * @return {boolean}
 */


exports.isFunction = isFunction;

var isObject = function isObject(val) {
  return !isNull(val) && val.valueOf() instanceof Object && _typeof(val.valueOf()) === 'object' && Object.getOwnPropertyNames(Object.getPrototypeOf(val)).includes('hasOwnProperty');
};
/**
 * @param {object} obj
 * @return {array}
 */


exports.isObject = isObject;

var objectKeys = function objectKeys(obj) {
  return Object.keys(obj);
};
/**
 * @param {*} obj
 * @param {string} prop
 * @return {boolean}
 */


var hasOwnKeyProperty = function hasOwnKeyProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};
/**
 * @param {string} val
 * @return {string}
 */


var generateId = function generateId(val) {
  return val.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 % 16 | 0; // eslint-disable-line

    return (c === 'x' ? r : r & 0x3 | 0x8).toString(16); // eslint-disable-line
  });
};
/**
 * @return {string}
 */


var uuid = function uuid() {
  return generateId('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx');
};
/**
 * @return {string}
 */


exports.uuid = uuid;

var uuidXS = function uuidXS() {
  return generateId('xxxx-yxxx');
};
/**
 * @param {InputEvent|string} val
 * @return {boolean}
 */


exports.uuidXS = uuidXS;

var isDeleteBackward = function isDeleteBackward(val) {
  var inputType = val;

  if (isObject(val) && hasOwnKeyProperty(val, 'inputType')) {
    inputType = val.inputType;
  }

  return inputType === INPUT_DEL_BACKWARD;
};
/**
 * @param {string} val
 * @return {string}
 */


exports.isDeleteBackward = isDeleteBackward;

var capitalize = function capitalize(val) {
  var word = (val || '').toString().trim();

  if (word.length > 0) {
    return "".concat(word[0].toUpperCase()).concat(word.slice(1));
  }

  return '';
};

exports.capitalize = capitalize;
var _default = {
  isNull: isNull,
  isArray: isArray,
  isEmpty: isEmpty,
  isFunction: isFunction,
  isObject: isObject,
  uuid: uuid,
  uuidXS: uuidXS,
  isDeleteBackward: isDeleteBackward,
  capitalize: capitalize
};
exports["default"] = _default;

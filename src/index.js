/**
 * @type {string}
 */
const INPUT_DEL_BACKWARD = 'deleteContentBackward';

/**
 * @param {*} val
 * @return {boolean}
 */
export const isNull = (val) => (
  (val === undefined)
  || (val === null)
  || (typeof val === 'number' && Number.isNaN(val))
);

/**
 * @param {*} val
 * @return {boolean}
 */
export const isArray = (val) => (Array.isArray(val));

/**
 * @param {*} val
 * @return {boolean}
 */
export const isEmpty = (val) => (
  (val === '')
  || isNull(val)
  || (isArray(val) && val.length === 0)
  || (isObject(val) && objectKeys(val).length === 0)
);

/**
 * @param {*} val
 * @return {boolean}
 */
export const isFunction = (val) => (typeof val === 'function');

/**
 * @param {*} val
 * @return {boolean}
 */
export const isObject = (val) => (
  !isNull(val) &&
  val.valueOf() instanceof Object &&
  typeof val.valueOf() === 'object' &&
  (Object.getOwnPropertyNames( Object.getPrototypeOf( val ) ).includes('hasOwnProperty'))
);

/**
 * @param {object} obj
 * @return {array}
 */
const objectKeys = (obj) => {
  return Object.keys(obj);
};

/**
 * @param {*} obj
 * @param {string} prop
 * @return {boolean}
 */
const hasOwnKeyProperty = (obj, prop) => {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};

/**
 * @param {string} val
 * @return {string}
 */
const generateId = (val) => val.replace(/[xy]/g, (c) => {
  const r = (Math.random() * 16) % 16 | 0; // eslint-disable-line
  return (c === 'x' ? r : (r&0x3 | 0x8)).toString(16); // eslint-disable-line
});

/**
 * @return {string}
 */
export const uuid = () => generateId('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx');

/**
 * @return {string}
 */
export const uuidXS = () => generateId('xxxx-yxxx');

/**
 * @param {InputEvent|string} val
 * @return {boolean}
 */
export const isDeleteBackward = (val) => {
  let inputType = val;
  if (isObject(val) && hasOwnKeyProperty(val, 'inputType')) {
    inputType = val.inputType;
  }
  return (inputType === INPUT_DEL_BACKWARD);
};

/**
 * @param {string} val
 * @return {string}
 */
export const capitalize = (val) => {
  const word = (val || '').toString().trim();
  if (word.length > 0) {
    return `${word[0].toUpperCase()}${word.slice(1)}`;
  }

  return '';
};

export default {
  isNull,
  isArray,
  isEmpty,
  isFunction,
  isObject,
  uuid,
  uuidXS,
  isDeleteBackward,
  capitalize,
};
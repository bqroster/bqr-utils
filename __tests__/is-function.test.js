/* eslint no-undef: 0 */
/* eslint import/no-unresolved: 0 */
/* eslint import/extensions: 0 */
/**
 * Example that Jest is working correctly,
 * with Babel-Jest, vue-jest and @vue/test-utils
 */

import { isFunction } from '@utils';

describe('Utils, isFunction method', () => {
  test('isFunction method will failed', () => {
    expect(isFunction(undefined)).toBeFalsy();
    expect(isFunction(null)).toBeFalsy();
    expect(isFunction(NaN)).toBeFalsy();
    expect(isFunction('')).toBeFalsy();
    expect(isFunction(1)).toBeFalsy();
    expect(isFunction(5.10)).toBeFalsy();
    expect(isFunction(0)).toBeFalsy();
    expect(isFunction([])).toBeFalsy();
    expect(isFunction({})).toBeFalsy();
  });

  test('isFunction method will success', () => {
    const fn = function fn() {};
    const fn2 = function fn() { return () => {}; };
    expect(isFunction(fn)).toBeTruthy();
    expect(isFunction(fn2)).toBeTruthy();
    expect(isFunction(fn2())).toBeTruthy();
    expect(isFunction(function(){})).toBeTruthy();
    expect(isFunction(() => {})).toBeTruthy();
  });
});

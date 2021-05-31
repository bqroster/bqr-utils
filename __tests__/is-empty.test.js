/* eslint no-undef: 0 */
/* eslint import/no-unresolved: 0 */
/* eslint import/extensions: 0 */
/**
 * Example that Jest is working correctly,
 * with Babel-Jest, vue-jest and @vue/test-utils
 */

import { isEmpty } from '@utils';

describe('Utils, isEmpty method', () => {
  test('isEmpty method will failed', () => {
    expect(isEmpty(1)).toBeFalsy();
    expect(isEmpty(5.10)).toBeFalsy();
    expect(isEmpty(0)).toBeFalsy();
    expect(isEmpty([1])).toBeFalsy();
    expect(isEmpty('.')).toBeFalsy();
    expect(isEmpty(-0.000000000000001)).toBeFalsy();
    expect(isEmpty([1])).toBeFalsy();
    expect(isEmpty({ i: null })).toBeFalsy();
    expect(isEmpty(new String(''))).toBeFalsy();
  });

  test('isEmpty method will success', () => {
    expect(isEmpty(null)).toBeTruthy();
    expect(isEmpty(undefined)).toBeTruthy();
    expect(isEmpty(NaN)).toBeTruthy();
    expect(isEmpty('')).toBeTruthy();
    expect(isEmpty([])).toBeTruthy();
    expect(isEmpty({})).toBeTruthy();
    expect(isEmpty(Object.assign({}))).toBeTruthy();
    expect(isEmpty(Object.assign({}, {}))).toBeTruthy();
  });
});

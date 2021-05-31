/* eslint no-undef: 0 */
/* eslint import/no-unresolved: 0 */
/* eslint import/extensions: 0 */
/**
 * Example that Jest is working correctly,
 * with Babel-Jest, vue-jest and @vue/test-utils
 */

import { isArray } from '@utils';

describe('Utils, isArray method', () => {
  test('isArray method will failed', () => {
    expect(isArray(1)).toBe(false);
    expect(isArray('')).toBe(false);
    expect(isArray(null)).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray('')).toBe(false);
    expect(isArray('notArray')).toBe(false);
    expect(isArray(10.20)).toBe(false);
    expect(isArray([1] + [2])).toBe(false);
  });

  test('isArray method will success', () => {
    expect(isArray([])).toBe(true);
    expect(isArray([1])).toBe(true);
    expect(isArray([{}])).toBe(true);
    expect(isArray(['1'])).toBe(true);
    expect(isArray([{ a: 1 }])).toBe(true);
  });
});

/* eslint no-undef: 0 */
/* eslint import/no-unresolved: 0 */
/* eslint import/extensions: 0 */
/**
 * Example that Jest is working correctly,
 * with Babel-Jest, vue-jest and @vue/test-utils
 */

import { isNull } from '@utils';

describe('Utils, isNull method', () => {
  test('isNull method will failed', () => {
    expect(isNull('')).toBe(false);
    expect(isNull(1)).toBe(false);
    expect(isNull(5.10)).toBe(false);
    expect(isNull(0)).toBe(false);
    expect(isNull([])).toBe(false);
    expect(isNull({})).toBe(false);
  });

  test('isNull method will success', () => {
    expect(isNull(null)).toBe(true);
    expect(isNull(undefined)).toBe(true);
    expect(isNull(NaN)).toBe(true);
  });
});

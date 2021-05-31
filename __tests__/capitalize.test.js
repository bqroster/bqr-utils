/* eslint no-undef: 0 */
/* eslint import/no-unresolved: 0 */
/* eslint import/extensions: 0 */
/**
 * Example that Jest is working correctly,
 * with Babel-Jest, vue-jest and @vue/test-utils
 */

import { capitalize } from '@utils';

describe('Utils, capitalize method', () => {
  test('capitalize method combinations', () => {
    expect(capitalize('')).toBe('');
    expect(capitalize(undefined)).toBe('');
    expect(capitalize(null)).toBe('');
    expect(capitalize(' hello ')).toBe('Hello');
    expect(capitalize('a')).toBe('A');
    expect(capitalize('bus station')).toBe('Bus station');
  });
});

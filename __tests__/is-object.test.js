/* eslint no-undef: 0 */
/* eslint import/no-unresolved: 0 */
/* eslint import/extensions: 0 */
import { isObject } from '@utils';

describe('isObject method,', () => {
    test('isObject valid', () => {
        expect(isObject({})).toBeTruthy();
        expect(isObject({ i: 1 })).toBeTruthy();
        expect(isObject(Object.assign({}))).toBeTruthy();
        expect(isObject(Object.assign({ i: [] }))).toBeTruthy();
    });

    test('isObject failed', () => {
        expect(isObject(null)).toBeFalsy();
        expect(isObject(undefined)).toBeFalsy();
        expect(isObject(NaN)).toBeFalsy();
        expect(isObject(new Boolean(true))).toBeFalsy();
        expect(isObject(new Number(3))).toBeFalsy();
        expect(isObject(new String('hello'))).toBeFalsy();
        expect(isObject(new Date())).toBeFalsy();
        expect(isObject(new RegExp('/.*/'))).toBeFalsy();
        expect(isObject(new Function())).toBeFalsy();
        expect(isObject(Symbol('foo'))).toBeFalsy();
        expect(isObject(Object( Symbol('foo') ))).toBeFalsy();
        expect(isObject(function() {})).toBeFalsy();
        expect(isObject(function fnName() {})).toBeFalsy();
        expect(isObject([])).toBeFalsy();
        expect(isObject([1, 2])).toBeFalsy();
        expect(isObject(Object.assign([]))).toBeFalsy();
        expect(isObject(Object.assign([], {}))).toBeFalsy();
        expect(isObject(Object.assign([], { length: 1 }))).toBeFalsy();
        expect(isObject(Object.assign([2], { length: 1 }))).toBeFalsy();
        expect(isObject('')).toBeFalsy();
    });
});
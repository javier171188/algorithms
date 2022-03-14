'use strict';
const findSubstring = require('./exerciseD48');

test('Smallest at the beginning', () => {
    const S = 'adcbvsfvasbdackldabcd';
    const T = 'abcd';

    const subString = findSubstring(S, T);
    expect(subString).toEqual('adcb');
})

test('Smallest in the end', () => {
    const S = 'ardlcbvsfvasbdqackldyabcd';
    const T = 'abcd';

    const subString = findSubstring(S, T);
    expect(subString).toEqual('abcd');
})

test('Smallest in the middle', () => {
    const S = 'ardlcbvsfvabdcackldyabtgcd';
    const T = 'abcd';

    const subString = findSubstring(S, T);
    expect(subString).toEqual('abdc');
})

test('No substring', () => {
    const S = 'kajujhncyhgtr';
    const T = 'abcd';

    const subString = findSubstring(S, T);
    expect(subString).toEqual(undefined);
})

test('Substring equals all the string', () => {
    const S = 'ajujhnbrqcyhgtrd';
    const T = 'abcd';

    const subString = findSubstring(S, T);
    expect(subString).toEqual(S);
})

test('Letters are separated by other letter', () => {
    const S = 'cbcvdlckboahgfh';
    const T = 'abcd';

    const subString = findSubstring(S, T);
    expect(subString).toEqual('dlckboa');
})

test('T equals S', () => {
    const S = 'adsagageklbc';
    const T = S;

    const subString = findSubstring(S, T);
    expect(subString).toEqual(T);
})

test('T equals S in the opposite direction', () => {
    const S = 'abcde';
    const T = 'edcba';

    const subString = findSubstring(S, T);
    expect(subString).toEqual(S);
})

describe('Small strings', () => {
    test('T is empty', () => {
        const S = 'cbcvdlckboahgfh';
        const T = '';

        const subString = findSubstring(S, T);
        expect(subString).toEqual(undefined);
    })

    test('S is empty', () => {
        const S = '';
        const T = 'abcd';

        const subString = findSubstring(S, T);
        expect(subString).toEqual(undefined);
    })

    test('T and S  are empty', () => {
        const S = '';
        const T = '';

        const subString = findSubstring(S, T);
        expect(subString).toEqual(undefined);
    })

    test('S smaller than T', () => {
        const S = 'abc';
        const T = 'abcd';

        const subString = findSubstring(S, T);
        expect(subString).toEqual(undefined);
    })

    test('T is one sized', () => {
        const S = 'abc';
        const T = 'c';

        const subString = findSubstring(S, T);
        expect(subString).toEqual(T);
    })

    test('T is two sized', () => {
        const S = 'abc';
        const T = 'cb';

        const subString = findSubstring(S, T);
        expect(subString).toEqual('bc');
    })
})
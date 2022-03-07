'use strict';

const isPermutation = require('./exerciseB5');

describe('Basic tests', () => {
    test('One is permutation of the other', () => {
        const string1 = 'care';
        const string2 = 'race';
        const isAPermutation = isPermutation(string1, string2);
        expect(isAPermutation).toEqual(true);
    })

    test('No permutation', () => {
        const string1 = 'care';
        const string2 = 'another';
        const isAPermutation = isPermutation(string1, string2);
        expect(isAPermutation).toEqual(false);
    })
})

describe('Check symmetry', () => {
    test('The same string', () => {
        const string1 = 'race';
        const string2 = 'race';
        const isAPermutation = isPermutation(string1, string2);
        expect(isAPermutation).toEqual(true);
    })

    test('Different order', () => {
        const string1 = 'race';
        const string2 = 'aecr';
        const isAPermutation1 = isPermutation(string1, string2);
        const isAPermutation2 = isPermutation(string2, string1);
        const expected = [isAPermutation1, isAPermutation2];
        expect(expected).toEqual([true, true]);
    })
})

describe('Short strings', () => {
    describe('Empty string', () => {
        test('Both strings are empty', () => {
            const string1 = '';
            const string2 = '';
            const isAPermutation = isPermutation(string1, string2);
            expect(isAPermutation).toEqual(true);
        })

        test('First string is empty', () => {
            const string1 = '';
            const string2 = 'New string';
            const isAPermutation = isPermutation(string1, string2);
            expect(isAPermutation).toEqual(false);
        })

        test('Second string is empty', () => {
            const string1 = 'Another string';
            const string2 = '';
            const isAPermutation = isPermutation(string1, string2);
            expect(isAPermutation).toEqual(false);
        })
    })

    describe('One dimensional strings', () => {
        test('Different strings', () => {
            const string1 = 'a';
            const string2 = 'b';
            const isAPermutation = isPermutation(string1, string2);
            expect(isAPermutation).toEqual(false);
        })

        test('The same string', () => {
            const string1 = 'a';
            const string2 = 'a';
            const isAPermutation = isPermutation(string1, string2);
            expect(isAPermutation).toEqual(true);
        })
    })

    describe('Two dimensional strings', () => {
        test('The strings are not permutation', () => {
            const string1 = 'ab';
            const string2 = 'ac';
            const isAPermutation = isPermutation(string1, string2);
            expect(isAPermutation).toEqual(false);
        })

        test('The strings are permutation', () => {
            const string1 = 'ab';
            const string2 = 'ba';
            const isAPermutation = isPermutation(string1, string2);
            expect(isAPermutation).toEqual(true);
        })
    })

    describe('Three dimensional strings', () => {
        test('The same string', () => {
            const string1 = 'abc';
            const string2 = 'abc';
            const isAPermutation = isPermutation(string1, string2);
            expect(isAPermutation).toEqual(true);
        })

        test('No permutation', () => {
            const string1 = 'abc';
            const string2 = 'adc';
            const isAPermutation = isPermutation(string1, string2);
            expect(isAPermutation).toEqual(false);
        })

        test('Permutation', () => {
            const string1 = 'abc';
            const string2 = 'cba';
            const isAPermutation = isPermutation(string1, string2);
            expect(isAPermutation).toEqual(true);
        })
    })
})

describe('Different size strings', () => {
    test('The first is three dimensional and the second four dimensional', () => {
        const string1 = 'baa';
        const string2 = 'cbaa';
        const isAPermutation = isPermutation(string1, string2);
        expect(isAPermutation).toEqual(false);
    })

    test('The first is one dimensional and the second is five dimensional', () => {
        const string1 = 'a';
        const string2 = 'abcde';
        const isAPermutation = isPermutation(string1, string2);
        expect(isAPermutation).toEqual(false);
    })

    test('The first is four dimensional and the second is one dimensional', () => {
        const string1 = 'abcde';
        const string2 = 'a';
        const isAPermutation = isPermutation(string1, string2);
        expect(isAPermutation).toEqual(false);
    })
})
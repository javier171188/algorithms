'use strict';
const { isRotation } = require('./exerciseB4');

describe('Basic tests', () => {
    test('Returns true on rotated strings', () => {
        const string1 = 'rotation';
        const string2 = 'ionrotat';
        const rotationBol = isRotation(string1, string2);
        expect(rotationBol).toBe(true);
    })

    test('Returns false when one string is not a rotation of the other one', () => {
        const string1 = 'rotation';
        const string2 = 'rotaiton';
        const rotationBol = isRotation(string1, string2);
        expect(rotationBol).toBe(false);
    })

})

describe('Diverse tests', () => {
    test('Rotated capital letters', () => {
        const string1 = 'ABCDE';
        const string2 = 'DEABC';
        const rotationBol = isRotation(string1, string2);
        expect(rotationBol).toBe(true);
    })

    test('No rotated capital letters', () => {
        const string1 = 'ABCDE';
        const string2 = 'ABDCE';
        const rotationBol = isRotation(string1, string2);
        expect(rotationBol).toBe(false);
    })

    test('One letter of difference', () => {
        const string1 = 'aaaabaaaa';
        const string2 = 'aaaaaabaa';
        const rotationBol = isRotation(string1, string2);
        expect(rotationBol).toBe(true);

    })

    test('Works with spaces', () => {
        const string1 = 'a b c d';
        const string2 = ' b c da';
        const rotationBol = isRotation(string1, string2);
        expect(rotationBol).toBe(true);
    })
})

describe('Check symmetry', () => {
    test('Works when the strings are the same', () => {
        const string1 = 'string';
        const string2 = 'string';
        const rotationBol = isRotation(string1, string2);
        expect(rotationBol).toBe(true);
    })

    test('Works in both directions', () => {
        const string1 = 'string';
        const string2 = 'ingstr';
        const rotationBol1 = isRotation(string1, string2);
        const rotationBol2 = isRotation(string2, string1);

        const expected = [rotationBol1, rotationBol2];
        expect(expected).toEqual([true, true]);
    })

    test('Returns false the the lengths are different', () => {
        const string1 = 'xxxxxx';
        const string2 = 'xxxxxxx';
        const rotationBol = isRotation(string1, string2);
        expect(rotationBol).toBe(false);
    })
})

describe('Short strings', () => {
    describe('Zero dimensional strings', () => {
        test('Both strings are empty', () => {
            const string1 = '';
            const string2 = '';
            const rotationBol = isRotation(string1, string2);
            expect(rotationBol).toBe(true);
        })

        test('The first string is empty', () => {
            const string1 = '';
            const string2 = 'String';
            const rotationBol = isRotation(string1, string2);
            expect(rotationBol).toBe(false);
        })

        test('The second string is empty', () => {
            const string1 = 'string';
            const string2 = '';
            const rotationBol = isRotation(string1, string2);
            expect(rotationBol).toBe(false);
        })
    })

    describe('One dimensional strings', () => {
        test('The strings are the same', () => {
            const string1 = 'a';
            const string2 = 'a';
            const rotationBol = isRotation(string1, string2);
            expect(rotationBol).toBe(true);
        })

        test('The strings are different', () => {
            const string1 = 'a';
            const string2 = 'b';
            const rotationBol = isRotation(string1, string2);
            expect(rotationBol).toBe(false);
        })
    })

    describe('Two dimensional strings', () => {
        test('The string are rotation of the other one', () => {
            const string1 = 'ab';
            const string2 = 'ba';
            const rotationBol = isRotation(string1, string2);
            expect(rotationBol).toBe(true);
        })

        test('The string have different letters', () => {
            const string1 = 'ab';
            const string2 = 'bc';
            const rotationBol = isRotation(string1, string2);
            expect(rotationBol).toBe(false);
        })
    })

    describe('Three dimensional strings', () => {
        test('The strings are rotation', () => {
            const string1 = 'abc';
            const string2 = 'cab';
            const rotationBol = isRotation(string1, string2);
            expect(rotationBol).toBe(true);
        })

        test('The strings are not rotation', () => {
            const string1 = 'abc';
            const string2 = 'acb';
            const rotationBol = isRotation(string1, string2);
            expect(rotationBol).toBe(false);
        })
    })
})

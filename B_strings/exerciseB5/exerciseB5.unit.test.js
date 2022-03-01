'use strict';

const isPermutation = require('./exerciseB5');

test('Basic tests', () => {
    let string1 = 'care';
    let string2 = 'race';
    let isAPermutation = isPermutation(string1, string2);
    expect(isAPermutation).toEqual(true);

    string2 = 'another';
    isAPermutation = isPermutation(string1, string2);
    expect(isAPermutation).toEqual(false);
})

test('Check symmetry', () => {

})

test('Short strings', () => {
    let string1 = '';
    let string2 = '';
    let isAPermutation = isPermutation(string1, string2);
    expect(isAPermutation).toEqual(true);

    string2 = 'New string';
    isAPermutation = isPermutation(string1, string2);
    expect(isAPermutation).toEqual(false);

    string1 = 'Another string';
    string2 = '';
    isAPermutation = isPermutation(string1, string2);
    expect(isAPermutation).toEqual(false);

    string1 = 'a';
    string2 = 'b';
    isAPermutation = isPermutation(string1, string2);
    expect(isAPermutation).toEqual(false);

    string1 = 'a';
    string2 = 'a';
    isAPermutation = isPermutation(string1, string2);
    expect(isAPermutation).toEqual(true);

})

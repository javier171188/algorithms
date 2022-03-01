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
    let string1 = 'race';
    let string2 = 'race';
    let isAPermutation = isPermutation(string1, string2);
    expect(isAPermutation).toEqual(true);

    string2 = 'aecr';
    isAPermutation = isPermutation(string1, string2);
    expect(isAPermutation).toEqual(true);

    string1 = 'aecr';
    string2 = 'race';
    isAPermutation = isPermutation(string1, string2);
    expect(isAPermutation).toEqual(true);
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

    string1 = 'ab';
    string2 = 'ac';
    isAPermutation = isPermutation(string1, string2);
    expect(isAPermutation).toEqual(false);

    string2 = 'ab';
    isAPermutation = isPermutation(string1, string2);
    expect(isAPermutation).toEqual(true);

    string1 = 'abc';
    string2 = 'abc';
    isAPermutation = isPermutation(string1, string2);
    expect(isAPermutation).toEqual(true);

    string2 = 'acb';
    isAPermutation = isPermutation(string1, string2);
    expect(isAPermutation).toEqual(true);

    string2 = 'cba';
    isAPermutation = isPermutation(string1, string2);
    expect(isAPermutation).toEqual(true);

    string2 = 'cbaa';
    isAPermutation = isPermutation(string1, string2);
    expect(isAPermutation).toEqual(false);

    string1 = 'a';
    string2 = 'abcde';
    isAPermutation = isPermutation(string1, string2);
    expect(isAPermutation).toEqual(false);

    string1 = 'abcde';
    string2 = 'a';
    isAPermutation = isPermutation(string1, string2);
    expect(isAPermutation).toEqual(false);
})

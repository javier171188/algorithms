'use strict';
const { distanceLevenshtein } = require('./exerciseB2');

test('Diverse tests', () => {
    let string1 = 'kitten';
    let string2 = 'sitting';
    let distance = distanceLevenshtein(string1, string2);
    expect(distance).toEqual(3);

    string1 = 'flaw';
    string2 = 'lawn';
    distance = distanceLevenshtein(string1, string2);
    expect(distance).toEqual(2);

    string1 = 'word';
    string2 = 'wossssssrd';
    distance = distanceLevenshtein(string1, string2);
    expect(distance).toEqual(6);

    string1 = 'wossssssrd';
    string2 = 'word';
    distance = distanceLevenshtein(string1, string2);
    expect(distance).toEqual(6);

    string1 = 'aawordbb';
    string2 = 'word';
    distance = distanceLevenshtein(string1, string2);
    expect(distance).toEqual(4);
})

test('Short strings', () => {
    let string1 = '';
    let string2 = '';
    let distance = distanceLevenshtein(string1, string2);
    expect(distance).toEqual(0);

    string1 = '';
    string2 = 'word';
    distance = distanceLevenshtein(string1, string2);
    expect(distance).toEqual(4);

    string1 = 'word';
    string2 = '';
    distance = distanceLevenshtein(string1, string2);
    expect(distance).toEqual(4);

    string1 = 'a';
    string2 = 'b';
    distance = distanceLevenshtein(string1, string2);
    expect(distance).toEqual(1);

    string1 = 'ae';
    string2 = 'ea';
    distance = distanceLevenshtein(string1, string2);
    expect(distance).toEqual(2);
})
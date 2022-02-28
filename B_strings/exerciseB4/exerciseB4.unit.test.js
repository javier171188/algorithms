'use strict';
const { isRotation } = require('./exerciseB4');

test('Basic tests', () => {
    let string1 = 'rotation';
    let string2 = 'ionrotat';
    let rotationBol = isRotation(string1, string2);
    expect(rotationBol).toBe(true);

    string2 = 'rotaiton';
    rotationBol = isRotation(string1, string2);
    expect(rotationBol).toBe(false);
})

test('Diverse tests', () => {
    let string1 = 'ABCDE';
    let string2 = 'DEABC';
    let rotationBol = isRotation(string1, string2);
    expect(rotationBol).toBe(true);

    string1 = 'ABCDE';
    string2 = 'ABDCE';
    rotationBol = isRotation(string1, string2);
    expect(rotationBol).toBe(false);

    string1 = 'aaaabaaaa';
    string2 = 'aaaaaabaa';
    rotationBol = isRotation(string1, string2);
    expect(rotationBol).toBe(true);

    string1 = 'a b c d';
    string2 = ' b c da';
    rotationBol = isRotation(string1, string2);
    expect(rotationBol).toBe(true);

})

test('Check symmetry', () => {
    let string1 = 'string';
    let string2 = 'string';
    let rotationBol = isRotation(string1, string2);
    expect(rotationBol).toBe(true);

    string1 = 'string';
    string2 = 'ingstr';
    rotationBol = isRotation(string1, string2);
    expect(rotationBol).toBe(true);

    string1 = 'ingstr';
    string2 = 'string';
    rotationBol = isRotation(string1, string2);
    expect(rotationBol).toBe(true);

    string1 = 'xxxxxx';
    string2 = 'xxxxxxx';
    rotationBol = isRotation(string1, string2);
    expect(rotationBol).toBe(false);
})

test('Short strings', () => {
    let string1 = '';
    let string2 = '';
    let rotationBol = isRotation(string1, string2);
    expect(rotationBol).toBe(true);

    string2 = 'String';
    rotationBol = isRotation(string1, string2);
    expect(rotationBol).toBe(false);

    string1 = 'string';
    string2 = '';
    rotationBol = isRotation(string1, string2);
    expect(rotationBol).toBe(false);

    string1 = 'a';
    string2 = 'a';
    rotationBol = isRotation(string1, string2);
    expect(rotationBol).toBe(true);

    string1 = 'a';
    string2 = 'b';
    rotationBol = isRotation(string1, string2);
    expect(rotationBol).toBe(false);

    string1 = 'ab';
    string2 = 'ba';
    rotationBol = isRotation(string1, string2);
    expect(rotationBol).toBe(true);

    string1 = 'ab';
    string2 = 'bc';
    rotationBol = isRotation(string1, string2);
    expect(rotationBol).toBe(false);

    string1 = 'abc';
    string2 = 'cab';
    rotationBol = isRotation(string1, string2);
    expect(rotationBol).toBe(true);

    string1 = 'abc';
    string2 = 'acb';
    rotationBol = isRotation(string1, string2);
    expect(rotationBol).toBe(false);
})
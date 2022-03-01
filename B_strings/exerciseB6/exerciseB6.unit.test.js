'use strict';
const reverseOddWords = require('./exerciseB6');

test('Basic test', () => {
    const string = 'String with a lot of words';
    const reversedString = reverseOddWords(string);

    expect(reversedString).toEqual('gnirtS with a lot fo words');
})

test('Diverse tests', () => {
    let string = 'onelongword';
    let reversedString = reverseOddWords(string);
    expect(reversedString).toEqual('drowgnoleno');

    string = 'oneLongWord and';
    reversedString = reverseOddWords(string);
    expect(reversedString).toEqual('droWgnoLeno and');

    string = 'oneLongWord and another';
    reversedString = reverseOddWords(string);
    expect(reversedString).toEqual('droWgnoLeno and rehtona');

    string = 'This is a string';
    reversedString = reverseOddWords(string);
    expect(reversedString).toEqual('sihT is a string');

    string = 'This is a new string';
    reversedString = reverseOddWords(string);
    expect(reversedString).toEqual('sihT is a new gnirts');
})

test('Check recover original string', () => {
    const string = 'String with a lot of words';
    let reversedString = reverseOddWords(string);
    expect(reversedString).toEqual('gnirtS with a lot fo words');

    reversedString = reverseOddWords(reversedString);
    expect(reversedString).toEqual(string);
})

test('Small strings', () => {
    let string = '';
    let reversedString = reverseOddWords(string);
    expect(reversedString).toEqual('');

    string = 'a';
    reversedString = reverseOddWords(string);
    expect(reversedString).toEqual('a');

    string = 'a b c';
    reversedString = reverseOddWords(string);
    expect(reversedString).toEqual('a b c');

    string = 'ab bc';
    reversedString = reverseOddWords(string);
    expect(reversedString).toEqual('ba bc');

    string = 'ab';
    reversedString = reverseOddWords(string);
    expect(reversedString).toEqual('ba');

    string = 'ab bc cd';
    reversedString = reverseOddWords(string);
    expect(reversedString).toEqual('ba bc dc');

    string = 'abc bc cde';
    reversedString = reverseOddWords(string);
    expect(reversedString).toEqual('cba bc edc');
})
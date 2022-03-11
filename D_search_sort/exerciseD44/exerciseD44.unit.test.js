'use strict';

const getCharacters = require('./exerciseD44');

test('Check string "letters"', () => {
    const string = 'letters';

    const characters = getCharacters(string);
    expect(characters).toEqual('elrst');
})

test('Just one letter', () => {
    const string = 'aaaaaaaaaaaaaaaaaa';

    const characters = getCharacters(string);
    expect(characters).toEqual('a');
})

describe('Already ordered', () => {
    test('No repetition', () => {
        const string = 'abcdefghijklmnopqrstuvwxyz';

        const characters = getCharacters(string);
        expect(characters).toEqual(string);
    })

    test('With repetition', () => {
        const string = 'aaabbbbcccddeffffggggghh';

        const characters = getCharacters(string);
        expect(characters).toEqual('abcdefgh');
    })
})

describe('Opposite order', () => {
    test('No repetitions', () => {
        const string = 'zyxwvutsrqponmlkjihgfedcba';

        const characters = getCharacters(string);
        expect(characters).toEqual('abcdefghijklmnopqrstuvwxyz');
    })
    test('With repetitions', () => {
        const string = 'hhhhggffeeeeedccbbbbaaaa';

        const characters = getCharacters(string);
        expect(characters).toEqual('abcdefgh');
    })
})

describe('Short strings', () => {
    test('Zero sized string', () => {
        const string = '';

        const characters = getCharacters(string);
        expect(characters).toEqual('');
    })

    test('One sized string', () => {
        const string = 'a';

        const characters = getCharacters(string);
        expect(characters).toEqual('a');
    })

    describe('Two sized string', () => {
        test('No repetition', () => {
            const string = 'ba';

            const characters = getCharacters(string);
            expect(characters).toEqual('ab');
        })

        test('With repetition', () => {
            const string = 'aa';

            const characters = getCharacters(string);
            expect(characters).toEqual('a');
        })
    })
})
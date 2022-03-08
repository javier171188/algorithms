'use strict';

const getLongestWord = require('./exerciseD38.js');

describe('Example test', () => {
    test('RANDIEST', () => {
        const letters = ['E', 'S', 'R', 'A', 'T', 'I', 'N', 'D', 'A'];
        let longest = getLongestWord(letters);
        expect(longest).toEqual('RANDIEST');
    })
    test('MINDSET', () => {
        const letters = ['M', 'I', 'N', 'D', 'S', 'E', 'T'];
        let longest = getLongestWord(letters);
        expect(longest).toEqual('MINDSET');
    })
})

test('No word found', () => {
    const letters = ['💻', '📷'];
    const longest = getLongestWord(letters);
    expect(longest).toBeUndefined();
})

describe('With lowercase', () => {
    test('No capital letters', () => {
        const letters = ['e', 's', 'r', 'a', 't', 'i', 'n', 'd', 'a'];
        let longest = getLongestWord(letters);
        expect(longest).toEqual('RANDIEST');
    })
    test('Some lowercase', () => {
        const letters = ['M', 'I', 'n', 'D', 's', 'e', 'T'];
        const longest = getLongestWord(letters);
        expect(longest).toEqual('MINDSET');
    })
})

describe('Short lists', () => {
    test('Zero size list', () => {
        const letters = [];
        const longest = getLongestWord(letters);
        expect(longest).toBeUndefined();
    })
    test('One size list', () => {
        const letters = ['A'];
        const longest = getLongestWord(letters);
        expect(longest).toEqual('A');
    })
    test('Two size list', () => {
        const letters = ['O', 'T'];
        const longest = getLongestWord(letters);
        expect(longest).toEqual('TO');
    })
    test('Three size list', () => {
        const letters = ['C', 'A', 'T'];
        const longest = getLongestWord(letters);
        expect(longest).toEqual('CAT');
    })
})
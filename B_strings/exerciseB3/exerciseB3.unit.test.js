'use strict';
//https://www.sightwordsgame.com/vocabulary-words/word-play/anagrams/
const { findAnagram } = require('./exerciseB3');

describe('Easy words', () => {
    test('Check melon', () => {
        const word = 'melon';
        const anagram = findAnagram(word);
        expect(anagram).toEqual('lemon');
    })

    test('Check dense', () => {
        const word = 'dense';
        const anagram = findAnagram(word);
        expect(anagram).toEqual('needs');
    })


    test('"Word" with no anagram', () => {
        const word = 'fsalkda';
        const anagram = findAnagram(word);
        expect(anagram).toEqual(undefined);
    })


})

test('Check symmetry. ', () => {
    const word1 = 'melon';
    const anagram1 = findAnagram(word1);

    const word2 = 'lemon';
    const anagram2 = findAnagram(word2);

    const expected = [anagram1, anagram2];
    expect(expected).toEqual([word2, word1]);
})

describe('Short strings', () => {
    test('Zero size string', () => {
        const word = '';
        const anagram = findAnagram(word);
        expect(anagram).toEqual(undefined);
    })

    test('One size string', () => {
        const word = 'a';
        const anagram = findAnagram(word);
        expect(anagram).toEqual(undefined);
    })

    test('Two size string', () => {
        const word = 'on';
        const anagram = findAnagram(word);
        expect(anagram).toEqual('no');
    })

})

describe('Capital letters', () => {
    test('Capital letter at the beginning', () => {
        const word = "Mars";
        const anagram = findAnagram(word);
        expect(anagram).toEqual('rams');
    })

    test('Capital letters in the middle and at the end', () => {
        const word = "ocEaN";
        const anagram = findAnagram(word);
        expect(anagram).toEqual('canoe');
    })
})
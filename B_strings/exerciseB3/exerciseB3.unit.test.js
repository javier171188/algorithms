'use strict';
//https://www.sightwordsgame.com/vocabulary-words/word-play/anagrams/
const { findAnagram } = require('./exerciseB3');

test('Basic tests', () => {
    let word = 'melon';
    let anagram = findAnagram(word);
    expect(anagram).toEqual('lemon');

    word = 'dense';
    anagram = findAnagram(word);
    expect(anagram).toEqual('needs');

    word = 'fsalkda';
    anagram = findAnagram(word);
    expect(anagram).toEqual(undefined);

})

test('Check symmetry', () => {
    let word = 'melon';
    let anagram = findAnagram(word);
    expect(anagram).toEqual('lemon');

    word = 'lemon';
    anagram = findAnagram(word);
    expect(anagram).toEqual('melon');
})

test('Short strings', () => {
    let word = '';
    let anagram = findAnagram(word);
    expect(anagram).toEqual(undefined);

    word = 'a';
    anagram = findAnagram(word);
    expect(anagram).toEqual(undefined);

    word = 'on';
    anagram = findAnagram(word);
    expect(anagram).toEqual('no');
})

test('Capital letters', () => {
    let word = "Mars";
    let anagram = findAnagram(word);
    expect(anagram).toEqual('rams');

    word = "ocEaN";
    anagram = findAnagram(word);
    expect(anagram).toEqual('canoe');
})
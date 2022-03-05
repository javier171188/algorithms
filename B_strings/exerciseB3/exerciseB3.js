'use strict';
const fs = require('fs');
const WORDSJSON = fs.readFileSync('./dictionary.json', 'utf8');
const WORDS = JSON.parse(WORDSJSON);

function findAnagram(word) {
    const wordLength = word.length;
    if (wordLength < 2) return
    word = word.toLowerCase();
    if (Object.keys(WORDS[wordLength]).length < 1) return false;

    const sameLengthWords = WORDS[wordLength];
    const quantityLetters = countLetters(word);

    let anagrams = [];
    for (let letter in quantityLetters) {
        let quantity = quantityLetters[letter];
        if (anagrams.length === 0) {
            anagrams = sameLengthWords[letter][quantity];

        } else {
            let newAnagrams = [];
            for (let sl of sameLengthWords[letter][quantity]) {

                if (anagrams.includes(sl) && sl !== word) {
                    newAnagrams.push(sl);
                }
            }
            if (newAnagrams.length < 1) return;
            anagrams = newAnagrams;
        }
    }
    if (anagrams.length > 0) return anagrams[0];
    return anagrams;
}

function countLetters(word) {
    let numberLetters = {};
    for (let l of word) {
        if (Object.keys(numberLetters).includes(l)) {
            numberLetters[l] += 1;
        } else {
            numberLetters[l] = 1;
        }
    }
    return numberLetters;
}

module.exports = { findAnagram };
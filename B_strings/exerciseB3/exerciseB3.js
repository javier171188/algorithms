'use strict';
const fs = require('fs');
const WORDSJSON = fs.readFileSync('./dictionary.json', 'utf8');
const WORDS = JSON.parse(WORDSJSON);

function findAnagram(word) {
    word = word.toLowerCase();
    let lettersArr = word.split('');
    lettersArr.sort();
    let orderedLetters = lettersArr.join('');

    if (orderedLetters in WORDS) {
        for (let anagram of WORDS[orderedLetters]) {
            if (anagram !== word) return anagram;
        }
    }

    return undefined;
}
module.exports = { findAnagram };
'use strict';
const fs = require('fs');
const WORDSJSON = fs.readFileSync('./dictionary.json', 'utf8');
const WORDS = JSON.parse(WORDSJSON);

function getLongestWord(letters) {
    function exploreBranch(dic) {
        for (let letter of Object.keys(dic)) {
            if (letter === 'end') {
                let lessLetters = true;
                for (let l of Object.keys(dic['end'])) {
                    if (dic['end'][l] > numLetters[l]) {
                        lessLetters = false;
                    }
                }
                if (lessLetters) {
                    if (maxWord.length <= proposedWord.length) {
                        maxWord = proposedWord;
                    }
                }
                continue;
            }
            let index = letters.indexOf(letter);
            if (index < 0) {
                continue;
            } else {
                proposedWord += letter;
                exploreBranch(dic[letter]);
            }
        }
        proposedWord = proposedWord.slice(0, -1);
    }
    letters = letters.map(l => l.toUpperCase());
    const numLetters = countLetters(letters.join(''));
    let proposedWord = '';
    let maxWord = '';

    exploreBranch(WORDS);
    if (maxWord.length < 1) return undefined;
    return maxWord;
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

module.exports = getLongestWord;
'use strict';
const trieWords = require('./words');

const letters1 = ['E', 'S', 'R', 'A', 'T', 'I', 'N', 'D', 'A'];
//const letters1 = ['C', 'A', 'T'];
let longest1 = getLongestWord(letters1);
console.log(longest1);
// let word = 'word';
// console.log(word.slice(0, -1));

function getLongestWord(letters) {
    letters = letters.map(l => l.toUpperCase());

    let refLetters = [...letters];
    let proposedWord = '';
    let words = [];
    let maxWord = '';
    let currentLetter;

    exploreBranch(trieWords);
    console.log(words);

    function exploreBranch(dic) {
        for (let letter of Object.keys(dic)) {
            if (letter === 'end') {
                words.push(proposedWord);
                continue;
            }
            let index = refLetters.indexOf(letter);
            if (index < 0) {
                continue;
            } else {
                proposedWord += letter;
                currentLetter = letter;
                exploreBranch(dic[letter]);
            }
        }
        proposedWord = proposedWord.slice(0, -1);
    }
}

module.exports = getLongestWord;
'use strict';
const trieWords = require('./words');

const letters1 = ['E', 'S', 'R', 'A', 'T', 'I', 'N', 'D', 'A'];
let longest1 = getLongestWord(letters1);
console.log(longest1);

// let word = 'word';
// console.log(word.slice(0, -1));

function getLongestWord(letters) {
    letters = letters.map(l => l.toUpperCase());

    let proposedWord = '';
    let words = [];

    exploreBranch(trieWords, letters);

    function exploreBranch(dic, letters) {
        if (Object.keys(dic).length < 1) {
            console.log(proposedWord);
            proposedWord = proposedWord.slice(0, -1);
            return;
        }

        for (let letter of Object.keys(dic)) {
            proposedWord += letter;
            //console.log(proposedWord);
            exploreBranch(dic[letter], letters)
        }
        proposedWord = proposedWord.slice(0, -1);
    }
}


module.exports = getLongestWord;
'use strict';
const trieWords = require('./words');

const letters1 = ['E', 'S', 'R', 'A', 'T', 'I', 'N', 'D', 'A'];
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

    exploreBranch(trieWords, letters);
    console.log(words);

    function exploreBranch(dic, letters) {
        if (Object.keys(dic).length < 1) {
            //console.log(proposedWord);
            words.push(proposedWord);
            if (proposedWord.length > maxWord.length) maxWord = proposedWord;
            proposedWord = proposedWord.slice(0, -1);
            //refLetters = [...letters];
            // console.log(refLetters);
            return;
        }

        for (let letter of Object.keys(dic)) {
            let index = refLetters.indexOf(letter);
            if (index < 0) {
                // refLetters.push(currentLetter);
                // console.log(refLetters);
                continue;
            } else {
                proposedWord += letter;
                currentLetter = letter;
                //refLetters.splice(index, 1);
                // console.log(proposedWord);
                // console.log(refLetters);
                exploreBranch(dic[letter], letters);
            }
        }
        proposedWord = proposedWord.slice(0, -1);
    }
}

module.exports = getLongestWord;
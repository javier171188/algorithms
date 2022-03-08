'use strict';
const { trieWords } = require('./words');
const { countLetters } = require('./words');

//const letters1 = ['E', 'S', 'R', 'A', 'T', 'I', 'N', 'D', 'A'];
//const letters1 = ['C', 'A', 'T'];
// const letters1 = ['💻', '📷'];
// let longest1 = getLongestWord(letters1);
// console.log(longest1);

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
                    //words.push(proposedWord);
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
                //currentLetter = letter;
                exploreBranch(dic[letter]);
            }
        }
        proposedWord = proposedWord.slice(0, -1);
    }
    letters = letters.map(l => l.toUpperCase());
    const numLetters = countLetters(letters.join(''));

    let proposedWord = '';
    //let words = [];
    let maxWord = '';
    //let currentLetter;

    exploreBranch(trieWords);
    if (maxWord.length < 1) return undefined;
    return maxWord;
}

module.exports = getLongestWord;
'use strict';

const { byLengthAndLetters, countLetters } = require('./words');
Set.prototype.intersection = function (setB) {
    var intersection = new Set();
    for (var elem of setB) {
        if (this.has(elem)) {
            intersection.add(elem);
        }
    }
    return intersection;
}

let anagram = findAnagram('melon');
console.log(anagram);

function findAnagram(word) {
    const wordLength = word.length;
    if (Object.keys(byLengthAndLetters[wordLength]).length < 1) return false;

    const sameLengthWords = byLengthAndLetters[wordLength];
    const quantityLetters = countLetters(word);

    console.log(sameLengthWords);
    console.log(quantityLetters);


    let
    for (let letter in quantityLetters) {
        let quantity = quantityLetters[letter];
        if (sameLengthWords[letter][quantity].includes('lemon')) {
            // console.log(sameLengthWords[letter][quantity]);
            console.log('hi');
        }


    }

    // for (let l in sameLengthWords) {
    //     console.log(sameLengthWords[l]);
    //     console.log('***');
    // }
}




module.exports = { findAnagram };
'use strict';

function getCharacters(string) {
    let letters = [];
    for (let letter of string) {
        if (!letters.includes(letter)) letters.push(letter);
    }
    letters.sort();
    return letters.join('');
}

module.exports = getCharacters;
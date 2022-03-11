'use strict';

function isPermutation(string1, string2) {
    if (string1.length < 1 && string2.length < 1) return true;
    if (string1.length !== string2.length) return false;
    if (string1.length === 1 && string2.length === 1) return string1 === string2;

    const letters1 = string1.split('');
    const letters2 = string2.split('');
    letters1.sort();
    letters2.sort();

    return letters1.join('') === letters2.join('');
}

module.exports = isPermutation; 
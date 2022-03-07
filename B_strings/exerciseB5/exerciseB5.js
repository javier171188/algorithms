'use strict';

function isPermutation(string1, string2) {
    if (string1.length < 1 && string2.length < 1) return true;
    if (string1.length !== string2.length) return false;
    if (string1.length === 1 && string2.length === 1) return string1 === string2;

    for (let l of string1) {
        let index = string2.indexOf(l);
        if (index < 0) {
            return false;
        }
        string2 = string2.slice(0, index) + string2.slice(index + 1,);
    }
    return true;
}

module.exports = isPermutation; 
'use strict';

function isRotation(string1, string2) {
    if (string1.length < 1 && string2.length < 1) return true;

    for (let i = 0; i < string1.length; i++) {
        let rotated = string1.slice(i,) + string1.slice(0, i);
        if (rotated === string2) return true;
    }
    return false;
}

module.exports = { isRotation };
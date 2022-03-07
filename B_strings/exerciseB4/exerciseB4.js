'use strict';

function isRotation(string1, string2) {
    if (string1.length < 1 && string2.length < 1) return true;
    if (string1.length !== string2.length) return false;

    string1 = string1 + string1;
    const index = string1.search(string2);

    return index > -1;
}

module.exports = { isRotation };
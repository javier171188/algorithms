'use strict';

function findSubstring(S, T) {
    const stringLength = S.length;
    let minLength = T.length;
    if (stringLength < minLength || minLength < 1) return undefined;

    while (minLength <= stringLength) {
        for (let i = 0; i <= stringLength - minLength; i++) {
            let subString = S.slice(i, i + minLength);
            let contains = checkContainsAll(subString, T);
            if (contains) {
                return subString;
            }
        }
        minLength += 1;
    }
    return undefined;
}

function checkContainsAll(subString, T) {
    for (let l of T) {
        let contains = subString.includes(l);
        if (!contains) return false
    }
    return true;
}

module.exports = findSubstring;

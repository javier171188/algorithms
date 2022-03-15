'use strict';

function isInterleaved(A, B, C) {
    if (C.length !== A.length + B.length) return false;

    let first = Array.from(A);
    let second = Array.from(B);

    for (let l of C) {
        if (first.length > 0 && l === first[0]) {
            first.shift();
        } else if (second.length > 0 && l === second[0]) {
            second.shift();
        } else {
            return false;
        }

    }
    return true;
}

module.exports = isInterleaved;

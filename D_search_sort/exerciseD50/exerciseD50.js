'use strict';
const A = "abcd";
const B = "abcd";
const C = "aabcbcdd";

isInterleaved(A, B, C);

function isInterleaved(A, B, C) {
    if (C.length !== A.length + B.length) return false;

    let first = Array.from(A);
    let second = Array.from(B);

    for (let l of C) {
        if (l === first[0]) {

        } else if (l === second[0]) {

        } else {
            return false;
        }

    }
    return true;
}

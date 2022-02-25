'use strict';

function merge(A, B) {
    if (A.length < 1) return B;
    if (B.length < 1) return A;

    if (A[0] < B[0]) {
        return A[0] + merge(A.slice(1,), B);
    }
    return B[0] + merge(A, B.slice(1,));
}

function sortString(unsortedString) {
    if (unsortedString.length < 2) return unsortedString;

    const middleIndex = Math.floor(unsortedString.length / 2);

    const leftPart = unsortedString.slice(0, middleIndex);
    const rightPart = unsortedString.slice(middleIndex,);


    const sortedArray = merge(sortString(leftPart), sortString(rightPart));
    return sortedArray;
}

module.exports = { sortString };
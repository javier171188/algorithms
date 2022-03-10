'use strict';

function getKLargest(list, k = 1) {
    if (list.length < 1) {
        throw new Error('The list must contain at least one element.');
    }
    if (k > list.length) {
        throw new RangeError('The value of k must be less or equal to the number of elements of the list.');
    };
    if (k < 1) {
        throw new RangeError('The value of k must be greater than zero.');
    }

    const sortedList = mergeSort(list);
    return sortedList.slice(-k,);
}

function merge(A, B) {
    if (A.length < 1) return B;
    if (B.length < 1) return A;

    if (A[0] < B[0]) {
        return [A[0]].concat(merge(A.slice(1,), B));
    }
    return [B[0]].concat(merge(A, B.slice(1,)));
}


function mergeSort(unsortedArray) {
    if (unsortedArray.length < 2) return unsortedArray;

    const middleIndex = Math.floor(unsortedArray.length / 2);
    const leftPart = unsortedArray.slice(0, middleIndex);
    const rightPart = unsortedArray.slice(middleIndex,);
    const sortedArray = merge(mergeSort(leftPart), mergeSort(rightPart));
    return sortedArray;
}

module.exports = getKLargest;
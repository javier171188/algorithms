'use strict';
const { createLinkedList } = require('../linkedList');

const values1 = [2, 5, 7, 9, 10, 11, 12];


function mergeSortLists(list) {

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


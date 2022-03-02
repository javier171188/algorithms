'use strict';
const { createLinkedList } = require('../linkedList');

const values1 = [2, 5, 7, 9, 10, 11, 12];
const values2 = [3, 4, 5, 7, 8, 9, 16, 18];

let linkedList1 = createLinkedList(values1);
let linkedList2 = createLinkedList(values2);
let orderedList = mergeLinkedLists(linkedList1, linkedList2);
showLinkedListValues(orderedList);



function mergeLinkedLists(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;

    if (list1.value < list2.value) {
        list1.next = mergeLinkedLists(list1.next, list2);
        return list1
    }
    list2.next = mergeLinkedLists(list1, list2.next);
    return list2;
}



function mergeSortLinkedLists(list) {
    if (!list.next) return list;
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


function showLinkedListValues(head) {
    let currentNode = head;
    const values = [];
    while (currentNode.next) {
        values.push(currentNode.value);
        currentNode = currentNode.next;
    }
    values.push(currentNode.value);
    console.log(values);
    return values;
}
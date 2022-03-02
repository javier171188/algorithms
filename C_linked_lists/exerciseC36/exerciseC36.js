'use strict';

const { createLinkedList, getLinkedListValues } = require('../linkedList');

const values = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const linkedList = createLinkedList(values);

const reversedList = reverseLinkedList(linkedList);
const reversedValues = getLinkedListValues(reversedList);

//console.log(reversedList)

function reverseLinkedList(linkedList) {
    if (!linkedList || !linkedList.next) return linkedList;

    let currentNode = linkedList;
    let previousNode = null;
    let nextNode = linkedList.next;

    while (nextNode) {
        nextNode = currentNode.next;
        currentNode.next = previousNode;
        console.log(currentNode);
        previousNode = currentNode;
        currentNode = nextNode;

    }
    return nextNode;
}
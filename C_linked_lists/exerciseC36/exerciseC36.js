'use strict';

function reverseLinkedList(linkedList) {
    if (!linkedList || !linkedList.next) return linkedList;

    let currentNode = linkedList;
    let previousNode = null;
    let nextNode = linkedList.next;

    while (nextNode) {
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = nextNode;
        nextNode = nextNode.next;
    }

    currentNode.next = previousNode;
    return currentNode;
}

module.exports = reverseLinkedList;

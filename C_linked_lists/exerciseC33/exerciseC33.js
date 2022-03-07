'use strict';

function findKLast(linkedList, k = 1) {
    if (k < 1) throw new RangeError('The number k must be greater than zero.');
    if (!linkedList) return null;

    let firstNode = linkedList;
    let secondNode = linkedList;

    while (firstNode && firstNode.next) {
        firstNode = firstNode.next.next;
        secondNode = secondNode.next;
        if (firstNode === secondNode) return null;
    }

    firstNode = linkedList;
    secondNode = linkedList;
    for (let i = 1; i < k; i++) {
        if (!firstNode.next) return null;
        firstNode = firstNode.next;
    }

    while (firstNode.next) {
        firstNode = firstNode.next;
        secondNode = secondNode.next;
    }
    return secondNode;
}

module.exports = findKLast;
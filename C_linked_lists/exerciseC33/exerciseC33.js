'use strict';

function findKLast(linkedList, k) {
    if (k < 1) throw new RangeError('The number k must be greater than zero.');
    if (!linkedList) return null;
    let currentNode = linkedList;
    let checkerNode = linkedList;
    let searchedNode = linkedList;
    let count = 0;

    while (currentNode.next) {
        if (count < k - 1) {
            count += 1;
        } else {
            searchedNode = searchedNode.next;
        }
        currentNode = currentNode.next;
        if (checkerNode.next && checkerNode.next.next) {
            checkerNode = checkerNode.next.next;
            if (checkerNode === currentNode) return null;
        }

    }

    if (count < k - 1) return null;

    return searchedNode;
}

module.exports = findKLast;
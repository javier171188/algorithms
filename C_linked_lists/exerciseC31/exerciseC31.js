'use strict';

function findMiddleNode(linkedList) {
    if (!linkedList) return [];
    let slow = linkedList;
    let fast = linkedList;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    if (fast.next) {
        return [slow, slow.next];
    } else {
        return [slow];
    }
}

module.exports = findMiddleNode;
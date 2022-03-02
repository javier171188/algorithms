'use strict';

function isPalindrome(linkedList) {
    if (!linkedList) return true;

    let slow = linkedList;
    let fast = linkedList;
    let previousValues = [];

    while (fast.next && fast.next.next) {
        previousValues.push(slow.value);
        slow = slow.next;
        fast = fast.next.next;
    }
    if (fast.next) {
        previousValues.push(slow.value);
    }

    while (slow.next) {
        slow = slow.next;
        let lastValue = previousValues.pop();
        if (lastValue !== slow.value) return false;
    }
    return true;
}

module.exports = isPalindrome;
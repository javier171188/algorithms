'use strict';

function mergeSortLinkedLists(list) {
    if (!list || !list.next) return list;
    let middleNode = findMiddleNode(list)[0];

    let rightPart = middleNode.next;

    middleNode.next = null;
    let leftPart = list;

    let sortedList = mergeLinkedLists(
        mergeSortLinkedLists(leftPart),
        mergeSortLinkedLists(rightPart)
    );
    return sortedList;
}

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

module.exports = mergeSortLinkedLists;
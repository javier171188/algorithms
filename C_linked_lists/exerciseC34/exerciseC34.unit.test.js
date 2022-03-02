'use strict';
const { createLinkedList, getLinkedListValues } = require('../linkedList');
const mergeSortLinkedLists = require('./exerciseC34');

test('Basic test', () => {
    const unorderedValues = [7, 9, 3, 6, 8, 10, 1, 6, 11, 7, 5, 12, 3, 22, 47, 14];
    const unorderedLinkedList = createLinkedList(unorderedValues);
    const orderedLinkedList = mergeSortLinkedLists(unorderedLinkedList);
    const orderedValues = getLinkedListValues(orderedLinkedList);

    expect(orderedLinkedList.next).toBeTruthy();
    expect(orderedValues).toEqual([1, 3, 3, 5, 6, 6, 7, 7, 8, 9, 10, 11, 12, 14, 22, 47]);
})

test('Special orders', () => {
    let unorderedValues = [1, 3, 3, 5, 6, 6, 7, 7, 8, 9, 10, 11, 12, 14, 22, 47];
    let unorderedLinkedList = createLinkedList(unorderedValues);
    let orderedLinkedList = mergeSortLinkedLists(unorderedLinkedList);
    let orderedValues = getLinkedListValues(orderedLinkedList);
    expect(orderedLinkedList.next).toBeTruthy();
    expect(orderedValues).toEqual([1, 3, 3, 5, 6, 6, 7, 7, 8, 9, 10, 11, 12, 14, 22, 47]);

    unorderedValues = [47, 22, 14, 12, 11, 10, 9, 8, 7, 7, 6, 6, 5, 3, 3, 1];
    unorderedLinkedList = createLinkedList(unorderedValues);
    orderedLinkedList = mergeSortLinkedLists(unorderedLinkedList);
    orderedValues = getLinkedListValues(orderedLinkedList);
    expect(orderedLinkedList.next).toBeTruthy();
    expect(orderedValues).toEqual([1, 3, 3, 5, 6, 6, 7, 7, 8, 9, 10, 11, 12, 14, 22, 47]);

    unorderedValues = [1, 47, 22, 14, 12, 11, 10, 9, 8, 7, 7, 6, 6, 5, 3, 3];
    unorderedLinkedList = createLinkedList(unorderedValues);
    orderedLinkedList = mergeSortLinkedLists(unorderedLinkedList);
    orderedValues = getLinkedListValues(orderedLinkedList);
    expect(orderedLinkedList.next).toBeTruthy();
    expect(orderedValues).toEqual([1, 3, 3, 5, 6, 6, 7, 7, 8, 9, 10, 11, 12, 14, 22, 47]);
})

test('Same value', () => {
    let unorderedValues = [3, 3, 3, 3, 3, 3];
    let unorderedLinkedList = createLinkedList(unorderedValues);
    let orderedLinkedList = mergeSortLinkedLists(unorderedLinkedList);
    let orderedValues = getLinkedListValues(orderedLinkedList);

    expect(orderedLinkedList.next).toBeTruthy();
    expect(orderedValues).toEqual([3, 3, 3, 3, 3, 3]);
})

test('Small lists', () => {
    let unorderedValues;
    let unorderedLinkedList = null;
    let orderedLinkedList = mergeSortLinkedLists(unorderedLinkedList);
    let orderedValues;
    expect(orderedLinkedList).toBe(null);

    unorderedValues = [10];
    unorderedLinkedList = createLinkedList(unorderedValues);
    orderedLinkedList = mergeSortLinkedLists(unorderedLinkedList);
    orderedValues = getLinkedListValues(orderedLinkedList);
    expect(orderedLinkedList.next).toBe(null);
    expect(orderedValues).toEqual([10]);

    unorderedValues = [20, 10];
    unorderedLinkedList = createLinkedList(unorderedValues);
    orderedLinkedList = mergeSortLinkedLists(unorderedLinkedList);
    orderedValues = getLinkedListValues(orderedLinkedList);
    expect(orderedLinkedList.next).toBeTruthy();
    expect(orderedValues).toEqual([10, 20]);

    unorderedValues = [20, 10, 30];
    unorderedLinkedList = createLinkedList(unorderedValues);
    orderedLinkedList = mergeSortLinkedLists(unorderedLinkedList);
    orderedValues = getLinkedListValues(orderedLinkedList);
    expect(orderedLinkedList.next).toBeTruthy();
    expect(orderedValues).toEqual([10, 20, 30]);
})
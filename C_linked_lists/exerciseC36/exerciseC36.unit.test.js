'use strict';
const { createLinkedList, getLinkedListValues } = require('../linkedList');
const reverseLinkedList = require('./exerciseC36');

test('Basic test', () => {
    const values = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    const linkedList = createLinkedList(values);

    const reversedList = reverseLinkedList(linkedList);
    const reversedValues = getLinkedListValues(reversedList);

    expect(reversedList.next.value).toEqual('F');
    expect(reversedValues).toEqual(['G', 'F', 'E', 'D', 'C', 'B', 'A']);
})

test('Diverse tests', () => {
    let values = ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'];
    let linkedList = createLinkedList(values);
    let reversedList = reverseLinkedList(linkedList);
    let reversedValues = getLinkedListValues(reversedList);
    expect(reversedList.next.value).toEqual('A');
    expect(reversedValues).toEqual(['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A']);

    values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    linkedList = createLinkedList(values);
    reversedList = reverseLinkedList(linkedList);
    reversedValues = getLinkedListValues(reversedList);

    expect(reversedList.next.value).toEqual(9);
    expect(reversedValues).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
})
test('Short lists', () => {
    let values;
    let reversedValues;
    let linkedList = null;

    let reversedList = reverseLinkedList(linkedList);
    expect(reversedList).toBe(null);

    values = ['A'];
    linkedList = createLinkedList(values);

    reversedList = reverseLinkedList(linkedList);
    reversedValues = getLinkedListValues(reversedList);

    expect(reversedList.next).toEqual(null);
    expect(reversedValues).toEqual(['A']);

    values = ['A', 'B'];
    linkedList = createLinkedList(values);

    reversedList = reverseLinkedList(linkedList);
    reversedValues = getLinkedListValues(reversedList);

    expect(reversedList.next.value).toEqual('A');
    expect(reversedValues).toEqual(['B', 'A']);

    values = ['A', 'B', 'C'];
    linkedList = createLinkedList(values);

    reversedList = reverseLinkedList(linkedList);
    reversedValues = getLinkedListValues(reversedList);

    expect(reversedList.next.value).toEqual('B');
    expect(reversedValues).toEqual(['C', 'B', 'A']);
})
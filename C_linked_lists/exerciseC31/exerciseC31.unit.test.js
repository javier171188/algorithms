'use strict';
const { createLinkedList } = require('./linkedList');
const findMiddleNode = require('./exerciseC31');

test('Basic tests', () => {
    let values = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    let linkedList = createLinkedList(values);
    let middle = findMiddleNode(linkedList);
    let nodeValues;
    expect(middle.length).toEqual(1);
    nodeValues = middle.map(node => node.value);
    expect(nodeValues).toEqual(['E']);
    expect(middle[0].next).toBeTruthy();

    values = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    linkedList = createLinkedList(values);
    middle = findMiddleNode(linkedList);
    expect(middle.length).toEqual(2);
    nodeValues = middle.map(node => node.value);
    expect(nodeValues).toEqual(['E', 'F']);
    expect(middle[0].next).toBe(middle[1]);
})

test('Diverse tests', () => {
    let values = ['1', '2', '3', '4', '5'];
    let linkedList = createLinkedList(values);
    let middle = findMiddleNode(linkedList);
    let nodeValues;
    expect(middle.length).toEqual(1);
    nodeValues = middle.map(node => node.value);
    expect(nodeValues).toEqual(['3']);

    values = ['a', 'a', 'a', 'a'];
    linkedList = createLinkedList(values);
    middle = findMiddleNode(linkedList);
    nodeValues;
    expect(middle.length).toEqual(2);
    nodeValues = middle.map(node => node.value);
    expect(nodeValues).toEqual(['a', 'a']);
    expect(middle[0].next).toBe(middle[[1]])

    values = ['', '', '', ''];
    linkedList = createLinkedList(values);
    middle = findMiddleNode(linkedList);
    nodeValues;
    expect(middle.length).toEqual(2);
    nodeValues = middle.map(node => node.value);
    expect(nodeValues).toEqual(['', '']);
    expect(middle[0].next).toBe(middle[[1]])
})

test('Short lists', () => {
    let values = [];
    let linkedList = createLinkedList(values);
    let middle = findMiddleNode(linkedList);
    let nodeValues;
    expect(middle.length).toEqual(0);
    nodeValues = middle.map(node => node.value);
    expect(nodeValues).toEqual([]);

    values = ['1'];
    linkedList = createLinkedList(values);
    middle = findMiddleNode(linkedList);
    nodeValues;
    expect(middle.length).toEqual(1);
    nodeValues = middle.map(node => node.value);
    expect(nodeValues).toEqual(['1']);

    values = ['1', '2'];
    linkedList = createLinkedList(values);
    middle = findMiddleNode(linkedList);
    nodeValues;
    expect(middle.length).toEqual(2);
    nodeValues = middle.map(node => node.value);
    expect(nodeValues).toEqual(['1', '2']);

    values = ['1', '2', '3'];
    linkedList = createLinkedList(values);
    middle = findMiddleNode(linkedList);
    nodeValues;
    expect(middle.length).toEqual(1);
    nodeValues = middle.map(node => node.value);
    expect(nodeValues).toEqual(['2']);

    values = ['1', '2', '3', '4'];
    linkedList = createLinkedList(values);
    middle = findMiddleNode(linkedList);
    nodeValues;
    expect(middle.length).toEqual(2);
    nodeValues = middle.map(node => node.value);
    expect(nodeValues).toEqual(['2', '3']);
})
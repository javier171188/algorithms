'use strict';
const { createLinkedList } = require('../linkedList');
const findKLast = require('./exerciseC33');

test('Basic test', () => {
    const head = createLinkedList(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
    const k = 4;
    const kLast = findKLast(head, k);
    expect(kLast.value).toEqual('D');
    expect(kLast.next.value).toEqual('E');
})

describe('Limit cases', () => {
    test('Small lists', () => {
        let head = createLinkedList([]);
        let k = 2;
        let kLast = findKLast(head, k);
        expect(kLast).toBe(null);

        head = createLinkedList(['A']);
        k = 2;
        kLast = findKLast(head, k);
        expect(kLast).toBe(null);

        head = createLinkedList(['A']);
        k = 1;
        kLast = findKLast(head, k);
        expect(kLast.value).toBe('A');

        head = createLinkedList(['A', 'B']);
        k = 1;
        kLast = findKLast(head, k);
        expect(kLast.value).toBe('B');

        k = 2;
        kLast = findKLast(head, k);
        expect(kLast.value).toBe('A');
    })

    test('K larger than the list', () => {
        let head = createLinkedList(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
        let k = 10;
        let kLast = findKLast(head, k);
        expect(kLast).toBe(null);

        k = 8;
        kLast = findKLast(head, k);
        expect(kLast).toBe(null);
    })

    test('Special sizes of k', () => {
        let head = createLinkedList(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
        let k = -1;
        let kLast;
        const throwingFunction = () => {
            findKLast(head, k);
        }
        expect(throwingFunction).toThrow(RangeError);
        expect(throwingFunction).toThrow('The number k must be greater than zero.');

        k = 0;
        expect(throwingFunction).toThrow(RangeError);
        expect(throwingFunction).toThrow('The number k must be greater than zero.');

        k = 1;
        kLast = findKLast(head, k);
        expect(kLast.value).toBe('G');
        expect(kLast.next).toBe(null);

        k = 2;
        kLast = findKLast(head, k);
        expect(kLast.value).toBe('F');
        expect(kLast.next.value).toBe('G');

        k = 6;
        kLast = findKLast(head, k);
        expect(kLast.value).toBe('B');
        expect(kLast.next.value).toBe('C');

        k = 7;
        kLast = findKLast(head, k);
        expect(kLast.value).toBe('A');
        expect(kLast.next.value).toBe('B');

        k = 8;
        kLast = findKLast(head, k);
        expect(kLast).toBe(null);

        k = 9;
        kLast = findKLast(head, k);
        expect(kLast).toBe(null);
    })

    test('Loop in the list', () => {
        let head = createLinkedList(['A', 'B', 'C', 'D', 'E', 'F', 'G'], 4);
        let k = 3;
        let kLast = findKLast(head, k);
        expect(kLast).toBe(null);

        head = createLinkedList(['A'], 0);
        k = 1;
        kLast = findKLast(head, k);
        expect(kLast).toBe(null);

        k = 2;
        kLast = findKLast(head, k);
        expect(kLast).toBe(null);

        head = createLinkedList(['A', 'B'], 0);
        k = 1;
        kLast = findKLast(head, k);
        expect(kLast).toBe(null);
    })

})
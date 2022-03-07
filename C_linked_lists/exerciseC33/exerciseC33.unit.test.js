'use strict';
const { createLinkedList } = require('../linkedList');
const findKLast = require('./exerciseC33');

test('Find the 4th to last node', () => {
    const head = createLinkedList(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
    const k = 4;
    const kLast = findKLast(head, k);
    const expected = [kLast.value, kLast.next.value];
    expect(expected).toEqual(['D', 'E']);
})

describe('Limit cases', () => {
    describe('Small lists', () => {
        test('Empty list', () => {
            const head = createLinkedList([]);
            const k = 2;
            const kLast = findKLast(head, k);
            expect(kLast).toBe(null);
        })

        describe('One dimensional list', () => {
            test('K larger than the list', () => {
                const head = createLinkedList(['A']);
                const k = 2;
                const kLast = findKLast(head, k);
                expect(kLast).toBe(null);
            })

            test('K equals the size of the list', () => {
                const head = createLinkedList(['A']);
                const k = 1;
                const kLast = findKLast(head, k);
                expect(kLast.value).toBe('A');
            })

        })

        describe('Two dimensional list', () => {
            test('K equals 1', () => {
                const head = createLinkedList(['A', 'B']);
                const k = 1;
                const kLast = findKLast(head, k);
                expect(kLast.value).toBe('B');
            })

            test('K equals 2', () => {
                const head = createLinkedList(['A', 'B']);
                const k = 2;
                const kLast = findKLast(head, k);
                expect(kLast.value).toBe('A');
            })
        })
    })

    describe('K larger than the list', () => {
        test('7-sized list, k=10', () => {
            const head = createLinkedList(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
            const k = 10;
            const kLast = findKLast(head, k);
            expect(kLast).toBe(null);
        })

        test('7-sized list, k=8', () => {
            const head = createLinkedList(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
            const k = 8;
            const kLast = findKLast(head, k);
            expect(kLast).toBe(null);
        })
    })
})

describe('Specific sizes of k for a 7-sized list', () => {
    test('k equals -1', () => {
        const head = createLinkedList(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
        const k = -1;
        const throwingFunction = () => {
            findKLast(head, k);
        }
        expect(throwingFunction).toThrow('The number k must be greater than zero.');
    })

    test('k equals 0', () => {
        const head = createLinkedList(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
        const k = 0;
        const throwingFunction = () => {
            findKLast(head, k);
        }
        expect(throwingFunction).toThrow('The number k must be greater than zero.');
    })

    test('k equals 1', () => {
        const head = createLinkedList(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
        const k = 1;
        const kLast = findKLast(head, k);
        const expected = [kLast.value, kLast.next];
        expect(expected).toEqual(['G', null]);
    })

    test('k equals 2', () => {
        const head = createLinkedList(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
        const k = 2
        const kLast = findKLast(head, k);
        const expected = [kLast.value, kLast.next.value];
        expect(expected).toEqual(['F', 'G']);
    })

    test('k equals 6', () => {
        const head = createLinkedList(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
        const k = 6;
        const kLast = findKLast(head, k);
        const expected = [kLast.value, kLast.next.value];
        expect(expected).toEqual(['B', 'C']);
    })

    test('k equals 7', () => {
        const head = createLinkedList(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
        const k = 7;
        const kLast = findKLast(head, k);
        const expected = [kLast.value, kLast.next.value];
        expect(expected).toEqual(['A', 'B']);
    })

    test('k equals 8', () => {
        const head = createLinkedList(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
        const k = 8;
        const kLast = findKLast(head, k);
        expect(kLast).toEqual(null);
    })

    test('k equals 9', () => {
        const head = createLinkedList(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
        const k = 9;
        const kLast = findKLast(head, k);
        expect(kLast).toEqual(null);
    })
})

describe('Loop in the list', () => {
    test('7 sized list, loop in the fifth node', () => {
        const head = createLinkedList(['A', 'B', 'C', 'D', 'E', 'F', 'G'], 4);
        const k = 3;
        const kLast = findKLast(head, k);
        expect(kLast).toBe(null);
    })

    test('One size list, k equals 1', () => {
        const head = createLinkedList(['A'], 0);
        const k = 1;
        const kLast = findKLast(head, k);
        expect(kLast).toBe(null);
    })

    test('One size list, k equals 2', () => {
        const head = createLinkedList(['A'], 0);
        const k = 2;
        const kLast = findKLast(head, k);
        expect(kLast).toBe(null);
    })

    test('Two size list, loop in the first node', () => {
        const head = createLinkedList(['A', 'B'], 0);
        const k = 1;
        const kLast = findKLast(head, k);
        expect(kLast).toBe(null);
    })
})


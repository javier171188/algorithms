'use strict';
const { getLinkedListValues } = require('../linkedList');
const PriorityQueue = require('./exerciseC37');

test('Basic test', () => {
    const priorityQueue = new PriorityQueue();
    priorityQueue.enqueue('A', 1);
    let values = getLinkedListValues(priorityQueue.head);
    expect(values).toEqual(['A']);

    priorityQueue.enqueue('B', 2);
    values = getLinkedListValues(priorityQueue.head);
    expect(values).toEqual(['B', 'A']);

    priorityQueue.enqueue('C', 1);
    values = getLinkedListValues(priorityQueue.head);
    expect(values).toEqual(['B', 'A', 'C',]);

    let firstValue = priorityQueue.dequeue();
    expect(firstValue).toEqual('B');

    firstValue = priorityQueue.dequeue();
    expect(firstValue).toEqual('A');

    firstValue = priorityQueue.dequeue();
    expect(firstValue).toEqual('C');

    const throwingFunction = () => {
        priorityQueue.dequeue();
    }
    expect(throwingFunction).toThrow(Error);
    expect(throwingFunction).toThrow('The queue is empty.');
})

describe('Check enqueue', () => {
    describe('Same priority', () => {
        test('Default value', () => {
            const priorityQueue = new PriorityQueue();
            priorityQueue.enqueue('A');
            let values = getLinkedListValues(priorityQueue.head);
            expect(values).toEqual(['A']);

            priorityQueue.enqueue('B');
            values = getLinkedListValues(priorityQueue.head);
            expect(values).toEqual(['A', 'B']);

            priorityQueue.enqueue('C');
            values = getLinkedListValues(priorityQueue.head);
            expect(values).toEqual(['A', 'B', 'C']);

            priorityQueue.enqueue('D');
            values = getLinkedListValues(priorityQueue.head);
            expect(values).toEqual(['A', 'B', 'C', 'D']);
        })
        test('Chosen value', () => {
            const priorityQueue = new PriorityQueue();
            priorityQueue.enqueue('A', 10);
            let values = getLinkedListValues(priorityQueue.head);
            expect(values).toEqual(['A']);

            priorityQueue.enqueue('B', 10);
            values = getLinkedListValues(priorityQueue.head);
            expect(values).toEqual(['A', 'B']);

            priorityQueue.enqueue('C', 10);
            values = getLinkedListValues(priorityQueue.head);
            expect(values).toEqual(['A', 'B', 'C']);

            priorityQueue.enqueue('D', 10);
            values = getLinkedListValues(priorityQueue.head);
            expect(values).toEqual(['A', 'B', 'C', 'D']);
        })

    })

    test('Max value as first entrance', () => {
        const priorityQueue = new PriorityQueue();
        priorityQueue.enqueue('A', 100);
        let values = getLinkedListValues(priorityQueue.head);
        expect(values).toEqual(['A']);

        priorityQueue.enqueue('B', 10);
        values = getLinkedListValues(priorityQueue.head);
        expect(values).toEqual(['A', 'B']);

        priorityQueue.enqueue('C', 20);
        values = getLinkedListValues(priorityQueue.head);
        expect(values).toEqual(['A', 'C', 'B']);

        priorityQueue.enqueue('D', 1);
        values = getLinkedListValues(priorityQueue.head);
        expect(values).toEqual(['A', 'C', 'B', 'D']);

        priorityQueue.enqueue('E', 99);
        values = getLinkedListValues(priorityQueue.head);
        expect(values).toEqual(['A', 'E', 'C', 'B', 'D']);

        priorityQueue.enqueue('F', 35);
        values = getLinkedListValues(priorityQueue.head);
        expect(values).toEqual(['A', 'E', 'F', 'C', 'B', 'D']);

        priorityQueue.enqueue('G', 50);
        values = getLinkedListValues(priorityQueue.head);
        expect(values).toEqual(['A', 'E', 'G', 'F', 'C', 'B', 'D']);

        priorityQueue.enqueue('H', 15);
        values = getLinkedListValues(priorityQueue.head);
        expect(values).toEqual(['A', 'E', 'G', 'F', 'C', 'H', 'B', 'D']);
    })
    test('Max value in last entrance', () => {
        const priorityQueue = new PriorityQueue();
        priorityQueue.enqueue('A', 10);
        let values = getLinkedListValues(priorityQueue.head);
        expect(values).toEqual(['A']);

        priorityQueue.enqueue('B', 10);
        values = getLinkedListValues(priorityQueue.head);
        expect(values).toEqual(['A', 'B']);

        priorityQueue.enqueue('C', 20);
        values = getLinkedListValues(priorityQueue.head);
        expect(values).toEqual(['C', 'A', 'B']);

        priorityQueue.enqueue('D', 1);
        values = getLinkedListValues(priorityQueue.head);
        expect(values).toEqual(['C', 'A', 'B', 'D']);

        priorityQueue.enqueue('E', 99);
        values = getLinkedListValues(priorityQueue.head);
        expect(values).toEqual(['E', 'C', 'A', 'B', 'D']);

        priorityQueue.enqueue('F', 35);
        values = getLinkedListValues(priorityQueue.head);
        expect(values).toEqual(['E', 'F', 'C', 'A', 'B', 'D']);

        priorityQueue.enqueue('G', 50);
        values = getLinkedListValues(priorityQueue.head);
        expect(values).toEqual(['E', 'G', 'F', 'C', 'A', 'B', 'D']);

        priorityQueue.enqueue('H', 150);
        values = getLinkedListValues(priorityQueue.head);
        expect(values).toEqual(['H', 'E', 'G', 'F', 'C', 'A', 'B', 'D']);
    })

    test('Several priorities', () => {
        const priorityQueue = new PriorityQueue();
        priorityQueue.enqueue('A', 10);
        let values = getLinkedListValues(priorityQueue.head);
        expect(values).toEqual(['A']);

        priorityQueue.enqueue('B', 10);
        values = getLinkedListValues(priorityQueue.head);
        expect(values).toEqual(['A', 'B']);

        priorityQueue.enqueue('C', 20);
        values = getLinkedListValues(priorityQueue.head);
        expect(values).toEqual(['C', 'A', 'B']);

        priorityQueue.enqueue('D', 1);
        values = getLinkedListValues(priorityQueue.head);
        expect(values).toEqual(['C', 'A', 'B', 'D']);

        priorityQueue.enqueue('E', 99);
        values = getLinkedListValues(priorityQueue.head);
        expect(values).toEqual(['E', 'C', 'A', 'B', 'D']);

        priorityQueue.enqueue('F', 35);
        values = getLinkedListValues(priorityQueue.head);
        expect(values).toEqual(['E', 'F', 'C', 'A', 'B', 'D']);

        priorityQueue.enqueue('G', 50);
        values = getLinkedListValues(priorityQueue.head);
        expect(values).toEqual(['E', 'G', 'F', 'C', 'A', 'B', 'D']);

        priorityQueue.enqueue('H', 75);
        values = getLinkedListValues(priorityQueue.head);
        expect(values).toEqual(['E', 'H', 'G', 'F', 'C', 'A', 'B', 'D']);
    })
})

test('Dequeue', () => {
    const priorityQueue = new PriorityQueue();
    priorityQueue.enqueue('A', 10);
    priorityQueue.enqueue('B', 10);
    priorityQueue.enqueue('C', 20);
    priorityQueue.enqueue('D', 1);
    priorityQueue.enqueue('E', 99);
    priorityQueue.enqueue('F', 35);
    priorityQueue.enqueue('G', 50);
    priorityQueue.enqueue('H', 75);

    let values = getLinkedListValues(priorityQueue.head);
    expect(values).toEqual(['E', 'H', 'G', 'F', 'C', 'A', 'B', 'D']);

    values.forEach((v) => {
        let currentValue = priorityQueue.dequeue();

        expect(currentValue).toEqual(v);
    })

    const throwingFunction = () => {
        priorityQueue.dequeue()
    }
    expect(throwingFunction).toThrow(Error);
    expect(throwingFunction).toThrow('The queue is empty.');
})

test('Check order of enqueue dequeue', () => {
    const priorityQueue = new PriorityQueue();
    const throwingFunction = () => {
        priorityQueue.dequeue()
    }
    let enqueued;

    expect(throwingFunction).toThrow(Error);
    expect(throwingFunction).toThrow('The queue is empty.');

    priorityQueue.enqueue('A', 1);
    let values = getLinkedListValues(priorityQueue.head);
    expect(values).toEqual(['A']);

    priorityQueue.enqueue('B', 3);
    values = getLinkedListValues(priorityQueue.head);
    expect(values).toEqual(['B', 'A']);

    priorityQueue.enqueue('C', 2);
    values = getLinkedListValues(priorityQueue.head);
    expect(values).toEqual(['B', 'C', 'A']);

    priorityQueue.enqueue('D', 1);
    values = getLinkedListValues(priorityQueue.head);
    expect(values).toEqual(['B', 'C', 'A', 'D']);

    enqueued = priorityQueue.dequeue();
    expect(enqueued).toEqual('B');
    values = getLinkedListValues(priorityQueue.head);
    expect(values).toEqual(['C', 'A', 'D']);

    enqueued = priorityQueue.dequeue();
    expect(enqueued).toEqual('C');
    values = getLinkedListValues(priorityQueue.head);
    expect(values).toEqual(['A', 'D']);

    priorityQueue.enqueue('B', 5);
    values = getLinkedListValues(priorityQueue.head);
    expect(values).toEqual(['B', 'A', 'D']);

    priorityQueue.enqueue('C');
    values = getLinkedListValues(priorityQueue.head);
    expect(values).toEqual(['B', 'A', 'D', 'C']);

    values.forEach(v => {
        let currentValue = priorityQueue.dequeue();
        expect(v).toEqual(currentValue);
    })

    expect(throwingFunction).toThrow(Error);
    expect(throwingFunction).toThrow('The queue is empty.');

    priorityQueue.enqueue('A', 10);
    values = getLinkedListValues(priorityQueue.head);
    expect(values).toEqual(['A']);
})
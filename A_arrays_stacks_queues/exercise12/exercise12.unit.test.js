'use strict';

const { circularQueue } = require('./exercise12');



describe('Basic test', () => {
    const circQue = new circularQueue(5);

    test('Test enqueue', () => {
        circQue.enqueue(14);
        circQue.enqueue(22);
        circQue.enqueue(23);
        circQue.enqueue(-6);
        circQue.enqueue(7);
        expect(circQue.queue).toEqual([14, 22, 23, -6, 7]);
        expect(circQue.front).toEqual(0);
        expect(circQue.rear).toEqual(4);
    })


    test('Test avoid adding more elements', () => {
        circQue.enqueue(9);
        circQue.enqueue(10);
        expect(circQue.queue).toEqual([14, 22, 23, -6, 7]);
        expect(circQue.front).toEqual(0);
        expect(circQue.rear).toEqual(4);
    })

    let dequeued;
    test('Test dequeue', () => {
        dequeued = circQue.dequeue();
        expect(dequeued).toEqual(14);
        expect(circQue.front).toEqual(1);
        expect(circQue.rear).toEqual(4);

        dequeued = circQue.dequeue();
        expect(dequeued).toEqual(22);
        expect(circQue.front).toEqual(2);
        expect(circQue.rear).toEqual(4);
    })


    test('Test add element after dequeue', () => {
        circQue.enqueue(10);
        expect(circQue.queue).toEqual([10, 22, 23, -6, 7]);
        expect(circQue.front).toEqual(2);
        expect(circQue.rear).toEqual(0);

        circQue.enqueue(11);
        expect(circQue.queue).toEqual([10, 11, 23, -6, 7]);
        expect(circQue.front).toEqual(2);
        expect(circQue.rear).toEqual(1);

        circQue.enqueue(12);
        expect(circQue.queue).toEqual([10, 11, 23, -6, 7]);
        expect(circQue.front).toEqual(2);
        expect(circQue.rear).toEqual(1);
    })

    test('Test display', () => {
        console.log = jest.fn(console.log);
        circQue.display();

        expect(console.log.mock.calls[0][0]).toEqual(23);
        expect(console.log.mock.calls[1][0]).toEqual(-6);
        expect(console.log.mock.calls[2][0]).toEqual(7);
        expect(console.log.mock.calls[3][0]).toEqual(10);
        expect(console.log.mock.calls[4][0]).toEqual(11);
    })

    test('Test error when dequeue an empty queue', () => {
        const errorQueue = new circularQueue(7);
        errorQueue.enqueue(1);
        errorQueue.enqueue(2)
        errorQueue.enqueue(3)
        errorQueue.enqueue(4)

        errorQueue.dequeue();
        errorQueue.dequeue();
        errorQueue.dequeue();
        errorQueue.dequeue();

        const throwFunction = () => {
            errorQueue.dequeue();
        }
        expect(throwFunction).toThrow(Error);
        expect(throwFunction).toThrow('The queue is empty.');
    })

    test('Test correct type of size', () => {
        const throwFunction = () => {
            const circQue = new circularQueue('size');
        }

        expect(throwFunction).toThrow(TypeError);
        expect(throwFunction).toThrow("The size of the queue must be a positive number.");
    })
});

describe('Small sizes', () => {
    test('No zero size queue', () => {
        const throwFunction = () => {
            new circularQueue(0)
        }
        expect(throwFunction).toThrow(RangeError);
        expect(throwFunction).toThrow("The minimum size of the queue is 1.");
    })

    test('One sized circular queue', () => {
        const circQue = new circularQueue(1);
        expect(circQue.queue).toEqual([undefined]);

        circQue.enqueue(14);
        circQue.enqueue(22);
        expect(circQue.queue).toEqual([14]);
        expect(circQue.front).toEqual(0);
        expect(circQue.rear).toEqual(0);

        const dequeued = circQue.dequeue();
        expect(circQue.queue).toEqual([14]);
        expect(dequeued).toEqual(14);
        expect(circQue.front).toEqual(-1);
        expect(circQue.rear).toEqual(-1);

        const throwFunction = () => {
            circQue.dequeue();
        }
        expect(throwFunction).toThrow(Error);
        expect(throwFunction).toThrow('The queue is empty.')

        circQue.enqueue(10);
        expect(circQue.queue).toEqual([10]);
        expect(circQue.front).toEqual(0);
        expect(circQue.rear).toEqual(0);

    })

})


'use strict';
const { CircularQueue } = require('./exercise12');

describe('Test basic properties', () => {
    const circQue = new CircularQueue(5);

    test('It is empty at the beginning', () => {
        expect(circQue.queue).toEqual([undefined, undefined, undefined, undefined, undefined]);
    })

    test('Test enqueue', () => {
        circQue.enqueue(14);
        circQue.enqueue(22);
        circQue.enqueue(23);
        circQue.enqueue(-6);
        circQue.enqueue(7);

        const values = circQue.queue;
        const front = circQue.front;
        const rear = circQue.rear;

        const expected = [values, front, rear];
        expect(expected).toEqual([[14, 22, 23, -6, 7], 0, 4]);
    })

    test('Override  elements when the queue storage is full', () => {
        circQue.enqueue(9);
        circQue.enqueue(10);

        const values = circQue.queue;
        const front = circQue.front;
        const rear = circQue.rear;

        const expected = [values, front, rear];

        expect(expected).toEqual([[9, 10, 23, -6, 7], 2, 1]);
    })

    let dequeued;
    test('Test dequeue', () => {
        circQue.dequeue();
        dequeued = circQue.dequeue();

        const front = circQue.front;
        const rear = circQue.rear;
        const expected = [dequeued, front, rear];

        expect(expected).toEqual([-6, 4, 1]);
    })

    test('Test add element after dequeue', () => {
        circQue.enqueue(10);
        circQue.enqueue(11);
        circQue.enqueue(12);

        const values = circQue.queue;
        const front = circQue.front;
        const rear = circQue.rear;
        const expected = [values, front, rear];

        expect(expected).toEqual([[9, 10, 10, 11, 12], 0, 4]);
    })

    test('Test display', () => {
        console.log = jest.fn(console.log);

        circQue.enqueue(8)

        circQue.display();

        const queCalls = [
            console.log.mock.calls[0][0],
            console.log.mock.calls[1][0],
            console.log.mock.calls[2][0],
            console.log.mock.calls[3][0],
            console.log.mock.calls[4][0]
        ]

        expect(queCalls).toEqual([10, 10, 11, 12, 8]);
    })

    test('Test error when dequeue an empty queue', () => {
        const errorQueue = new CircularQueue(7);
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
        expect(throwFunction).toThrow('The queue is empty.');
    })

    test('Test correct type of size', () => {
        const throwFunction = () => {
            const circQue = new CircularQueue('size');
        }

        expect(throwFunction).toThrow("The size of the queue must be a positive number.");
    })
});

describe('Small sizes', () => {
    test('No zero size queue', () => {
        const throwFunction = () => {
            new CircularQueue(0);
        }
        expect(throwFunction).toThrow("The minimum size of the queue is 1.");
    })

    describe('One sized circular queue', () => {
        const circQue = new CircularQueue(1);

        let values;
        let front;
        let rear;
        let expected;
        test('Check first enqueue', () => {
            circQue.enqueue(14);

            values = circQue.queue;
            front = circQue.front;
            rear = circQue.rear;

            expected = [values, front, rear];

            expect(expected).toEqual([[14], 0, 0]);
        })

        test('Check erase when it is full', () => {
            circQue.enqueue(22);

            values = circQue.queue;
            front = circQue.front;
            rear = circQue.rear;

            expected = [values, front, rear];
            expect(expected).toEqual([[22], 0, 0]);
        })

        test('Check dequeue', () => {
            const dequeued = circQue.dequeue();
            front = circQue.front;
            rear = circQue.rear;
            expected = [dequeued, front, rear];

            expect(expected).toEqual([22, -1, -1]);
        })

        test('Throw error when dequeueing an empty queue', () => {
            const throwFunction = () => {
                circQue.dequeue();
            }
            expect(throwFunction).toThrow('The queue is empty.');
        })

        test('Check correct enqueue after empty the queue', () => {
            circQue.enqueue(10);

            values = circQue.queue;
            front = circQue.front;
            rear = circQue.rear;

            expected = [values, front, rear];
            expect(expected).toEqual([[10], 0, 0]);
        })
    })
})

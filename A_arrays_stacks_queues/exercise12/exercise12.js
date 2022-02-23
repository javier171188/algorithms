'use strict';
//https://www.geeksforgeeks.org/circular-queue-set-1-introduction-array-implementation/

class circularQueue {
    constructor(size) {
        if (typeof size !== 'number') {
            throw new TypeError("The size of the queue must be a positive number.")
        }

        if (size < 1) {
            throw new RangeError("The minimum size of the queue is 1.")
        }
        this.size = size;
        this.queue = new Array(size);
        this.front = -1;
        this.rear = -1;
    }

    enqueue(data) {
        if ((this.rear + 1) % this.size === this.front) {
            console.log(`The queue is full. The element ${data} was not added.`);
        } else if (this.front === -1) {
            this.front = 0;
            this.rear = 0;
            this.queue[0] = data;
        } else {
            this.rear = (this.rear + 1) % this.size;
            this.queue[this.rear] = data;
        }
    }

    dequeue() {
        if (this.front === -1) {
            throw new Error('The queue is empty.');
        }
        const element = this.queue[this.front];
        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.size;
        }
        return element;
    }

    display() {
        if (this.front === -1) {
            console.log(' ');
        } else if (this.front === this.rear) {
            console.log(this.queue[this.front]);
        } else {
            console.log(this.queue[this.front]);
            let i = (this.front + 1) % this.size;
            while (i !== (this.rear + 1) % this.size) {
                console.log(this.queue[i]);
                i = (i + 1) % this.size;
            }
        }
    }
}

module.exports = { circularQueue };
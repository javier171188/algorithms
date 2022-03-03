'use strict';

const { getLinkedListValues } = require('../linkedList');

class Node {
    constructor(val, priority) {
        this.value = val;
        this.priority = priority;
        this.next = null;
    }
}
class PriorityQueue {
    constructor() {
        this.head;
    }

    enqueue(value, priority = 1) {
        if (!this.head) {
            this.head = new Node(value, priority);
            return;
        }
        let newNode = new Node(value, priority);
        if (!this.head.next) {
            if (priority > this.head.priority) {
                newNode.next = this.head;
                this.head = newNode;
            } else {
                this.head.next = newNode;
            }
            return;
        }
        if (this.head.priority < priority) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        if (!this.head.next) {
            if (priority > this.head.priority) {
                newNode.next = this.head;
                this.head = newNode;
            } else {
                this.head.next = newNode;
            }
            return;
        }
        if (this.head.priority < priority) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        let currentNode = this.head;
        let previousNode;
        while (currentNode) {
            if (priority > currentNode.priority) {
                newNode.next = currentNode;
                if (previousNode) {
                    previousNode.next = newNode;
                }
                return;
            }
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        if (currentNode) {
            currentNode.next = newNode;
        } else {
            previousNode.next = newNode;
        }
        return;
    }

    dequeue() {
        if (!this.head) throw new Error('The queue is empty.');
        let returnValue = this.head.value;
        this.head = this.head.next;
        return returnValue;
    }
}

module.exports = PriorityQueue;

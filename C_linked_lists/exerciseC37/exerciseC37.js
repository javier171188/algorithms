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
        this.head = new Node(null, 0);
    }

    enqueue(value, priority) {
        if (this.head.value === null) {
            this.head.value = value;
            this.head.priority = priority;
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
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue('A', 1);
let values = getLinkedListValues(priorityQueue.head);
//console.log(values);

priorityQueue.enqueue('B', 2);
values = getLinkedListValues(priorityQueue.head);
//console.log(values);

priorityQueue.enqueue('C', 1);
values = getLinkedListValues(priorityQueue.head);
console.log(values);
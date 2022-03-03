'use strict';
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
        let currentNode = this.head;


    }

}

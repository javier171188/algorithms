'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.left = undefined;
        this.right = undefined;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = undefined;
    }

    insert(value) {
        if (!this.root) {
            this.root = new Node(value);
            return;
        }

        insert_value(value, this.root);

        function insert_value(value, node) {
            //let values = [node.value, node.left.value, node.right.value];
            if (!node) {
                let newNode = new Node(value);
                return newNode;
            }

            if (node.value < value) {
                //Insert at right
                node.right = insert_value(value, node.right);
            } else {
                //Insert at left
                node.left = insert_value(value, node.left);
            }
            return node;
        }
    }

}

const binSearchThree = new BinarySearchTree();
binSearchThree.insert(10);
console.log(binSearchThree.root);
binSearchThree.insert(20);
console.log(binSearchThree.root);
binSearchThree.insert(30);
console.log(binSearchThree.root);
binSearchThree.insert(15);
console.log(binSearchThree.root);
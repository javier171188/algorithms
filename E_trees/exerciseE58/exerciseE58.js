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


function searchInAVLTree(tree, value) {
    let currentNode = tree.root;

    while (currentNode) {
        if (currentNode.value === value) return true;

        if (currentNode.value < value) {
            currentNode = currentNode.right;
        } else {
            currentNode = currentNode.left;
        }
    }

    return false;
}

module.exports = { searchInAVLTree, BinarySearchTree };

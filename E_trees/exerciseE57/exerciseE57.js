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

    delete(value) {
        let deletingNode = getNode(value, this.root, undefined, undefined);

        if (!deletingNode.node) return;
        if (!deletingNode.node.left && !deletingNode.node.right) {
            if (!deletingNode.parent) {
                this.root = undefined;
                return;
            }
            deletingNode.parent[deletingNode.direction] = undefined;
            return;
        }
        if (!deletingNode.node.right) {
            if (!deletingNode.parent) {
                this.root = this.root.left;
                return;
            }
            deletingNode.parent[deletingNode.direction] = deletingNode.node.left;
            return;
        }
        if (!deletingNode.node.left) {
            if (!deletingNode.parent) {
                this.root = this.root.right;
                return;
            }
            deletingNode.parent[deletingNode.direction] = deletingNode.node.right;
            return;
        }

        //The node has two children
        let currentNode = deletingNode.node.right;
        let parentNode;

        while (currentNode.left) {
            parentNode = currentNode;
            currentNode = currentNode.left;
        }
        deletingNode.node.value = currentNode.value;
        parentNode.left = currentNode.right;

        function getNode(value, node, parent, direction) {
            if (!node) return;
            if (node.value === value) return { node, parent, direction };

            let gottenNode;
            if (node.value < value) {
                //Search at right
                gottenNode = getNode(value, node.right, node, 'right');
            } else {
                //Search at left
                gottenNode = getNode(value, node.left, node, 'left');
            }
            return gottenNode;
        }
    }
}

module.exports = BinarySearchTree;

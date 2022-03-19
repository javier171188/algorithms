'use strict';
//https://www.youtube.com/watch?v=Y-nmgO8ALjM

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

function leftRotation(node) {
    let temp = node.right;
    node.right = temp.left;
    temp.left = node
    return temp;
}

function rightRotation(node) {
    let temp = node.left;
    node.left = temp.right;
    temp.right = node;
    return temp;
}

function rightLeftRotation(node) {
    node.right = rightRotation(node.right);
    return leftRotation(node);
}

function leftRightRotation(node) {
    node.left = leftRotation(node.left);
    return rightRotation(node);
}

function getHeight(tree) {
    if (!tree) return 0

    let height = 1;

    height += Math.max(getHeight(tree.left), getHeight(tree.right));

    return height;
}

function rebalance(node) {
    if (height(node.left) - height(node.right) > 1) {
        if (height(node.left.left) > height(node.left.right)) {
            node = rightRotation(node);
        } else {
            node = leftRightRotation(node);
        }
    } else {
        if (height(node.right.left) > height(node.right.right)) {
            node = rightRotation(node);
        } else {
            node = leftRightRotation(node);
        }
    }
    // if (node.parent === undefined) {
    //     root = node;
    // }
    return node;
}

const avlTree = new BinarySearchTree();
avlTree.insert(10);
avlTree.insert(1);
avlTree.insert(8);
avlTree.insert(20);
avlTree.insert(15);
avlTree.insert(30);
//console.log(avlTree.root);

// let treeHeight = getHeight(avlTree.root);
// console.log(treeHeight);
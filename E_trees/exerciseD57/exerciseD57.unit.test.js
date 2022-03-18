'use strict';

const BinarySearchTree = require('./exerciseD57');

describe('Check insert', () => {
    describe('Check first insertion', () => {
        const binSearchThree = new BinarySearchTree();
        binSearchThree.insert(10);
        test('Check the value is correct', () => {
            const value = binSearchThree.root.value;
            expect(value).toEqual(10);
        })
        test('Check there is no left node', () => {
            const left = binSearchThree.root.left;
            expect(left).toEqual(undefined);
        })
        test('Check there is no right node', () => {
            const right = binSearchThree.root.right;
            expect(right).toEqual(undefined);
        })
    })

    describe('Check insert on the left', () => {
        const binSearchThree = new BinarySearchTree();
        binSearchThree.insert(10);
        binSearchThree.insert(1);

        test('Check the values are correct', () => {
            const vales = [binSearchThree.root.value, binSearchThree.root.left.value];
            expect(vales).toEqual([10, 1]);
        })

        test('Check there is not left node', () => {
            const left = binSearchThree.root.left.left;
            expect(left).toEqual(undefined);
        })

        test('Check there is not right node', () => {
            const right = binSearchThree.root.left.right;
            expect(right).toEqual(undefined);
        })
    })

    describe('Check insert on the right', () => {
        const binSearchThree = new BinarySearchTree();
        binSearchThree.insert(10);
        binSearchThree.insert(20);

        test('Check the values are correct', () => {
            const values = [binSearchThree.root.value, binSearchThree.root.right.value];
            expect(values).toEqual([10, 20]);
        })

        test('Check there is not left node', () => {
            const left = binSearchThree.root.right.left;
            expect(left).toEqual(undefined);
        })

        test('Check there is not right node', () => {
            const right = binSearchThree.root.right.right;
            expect(right).toEqual(undefined);
        })
    })

    test('Check insertion 10-20-30', () => {
        const binSearchThree = new BinarySearchTree();
        binSearchThree.insert(10);
        binSearchThree.insert(20);
        binSearchThree.insert(30);

        const values = [
            binSearchThree.root.value,
            binSearchThree.root.right.value,
            binSearchThree.root.right.right.value
        ]
        expect(values).toEqual([10, 20, 30]);
    })

    test('Check insertion 10-20-30-15', () => {
        const binSearchThree = new BinarySearchTree();
        binSearchThree.insert(10);
        binSearchThree.insert(20);
        binSearchThree.insert(30);
        binSearchThree.insert(15);

        const values = [
            binSearchThree.root.value,
            binSearchThree.root.right.value,
            binSearchThree.root.right.left.value,
            binSearchThree.root.right.right.value
        ]
        expect(values).toEqual([10, 20, 15, 30]);
    })

    test('Check insertion 10-20-30-15-25', () => {
        const binSearchThree = new BinarySearchTree();
        binSearchThree.insert(10);
        binSearchThree.insert(20);
        binSearchThree.insert(30);
        binSearchThree.insert(15);
        binSearchThree.insert(25);

        const values = [
            binSearchThree.root.value,
            binSearchThree.root.right.value,
            binSearchThree.root.right.left.value,
            binSearchThree.root.right.right.value,
            binSearchThree.root.right.right.left.value
        ]
        expect(values).toEqual([10, 20, 15, 30, 25]);
    })

    test('Check insertion 10-20-30-15-25-1', () => {
        const binSearchThree = new BinarySearchTree();
        binSearchThree.insert(10);
        binSearchThree.insert(20);
        binSearchThree.insert(30);
        binSearchThree.insert(15);
        binSearchThree.insert(25);
        binSearchThree.insert(1);

        const values = [
            binSearchThree.root.value,
            binSearchThree.root.left.value,
            binSearchThree.root.right.value,
            binSearchThree.root.right.left.value,
            binSearchThree.root.right.right.value,
            binSearchThree.root.right.right.left.value
        ]
        expect(values).toEqual([10, 1, 20, 15, 30, 25]);
    })

    test('Check insertion 10-20-30-15-25-1-8', () => {
        const binSearchThree = new BinarySearchTree();
        binSearchThree.insert(10);
        binSearchThree.insert(20);
        binSearchThree.insert(30);
        binSearchThree.insert(15);
        binSearchThree.insert(25);
        binSearchThree.insert(1);
        binSearchThree.insert(8);

        const values = [
            binSearchThree.root.value,
            binSearchThree.root.left.value,
            binSearchThree.root.left.right.value,
            binSearchThree.root.right.value,
            binSearchThree.root.right.left.value,
            binSearchThree.root.right.right.value,
            binSearchThree.root.right.right.left.value
        ]
        expect(values).toEqual([10, 1, 8, 20, 15, 30, 25]);
    })
})

describe('Check delete', () => {
    test('Delete the one node', () => {
        const binSearchThree = new BinarySearchTree();
        binSearchThree.insert(10);
        binSearchThree.delete(10);

        const root = binSearchThree.root;
        expect(root).toEqual(undefined);
    })

    test('Delete deepest leaf', () => {
        const binSearchThree = new BinarySearchTree();
        binSearchThree.insert(10);
        binSearchThree.insert(20);
        binSearchThree.insert(30);
        binSearchThree.insert(15);
        binSearchThree.insert(25);
        binSearchThree.insert(1);
        binSearchThree.insert(8);
        binSearchThree.delete(25);

        const values = [
            binSearchThree.root.value,
            binSearchThree.root.left.value,
            binSearchThree.root.left.right.value,
            binSearchThree.root.right.value,
            binSearchThree.root.right.left.value,
            binSearchThree.root.right.right.value
        ];
        expect(values).toEqual([10, 1, 8, 20, 15, 30]);
    })

    test('Delete the root', () => {
        const binSearchThree = new BinarySearchTree();
        binSearchThree.insert(10);
        binSearchThree.insert(20);
        binSearchThree.insert(30);
        binSearchThree.insert(15);
        binSearchThree.insert(25);
        binSearchThree.insert(1);
        binSearchThree.insert(8);
        binSearchThree.insert(17);
        binSearchThree.insert(16);
        binSearchThree.delete(10);

        const values = [
            binSearchThree.root.value,
            binSearchThree.root.left.value,
            binSearchThree.root.left.right.value,
            binSearchThree.root.right.value,
            binSearchThree.root.right.left.value,
            binSearchThree.root.right.left.left.value,
            binSearchThree.root.right.right.value,
            binSearchThree.root.right.right.left.value,
        ];
        expect(values).toEqual([15, 1, 8, 20, 17, 16, 30, 25]);
    })
})

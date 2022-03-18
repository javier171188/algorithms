'use strict';

const { searchInAVLTree, BinarySearchTree } = require('./exerciseE58');

test('Search in an empty tree', () => {
    const avlTree = new BinarySearchTree();

    const contains = searchInAVLTree(avlTree, 10);
    expect(contains).toEqual(false);
})

describe('Search in one node', () => {
    const avlTree = new BinarySearchTree();
    avlTree.insert(10);
    test('No contains the value', () => {
        const contains = searchInAVLTree(avlTree, 20);
        expect(contains).toEqual(false);
    })

    test('Contains the value', () => {
        const contains = searchInAVLTree(avlTree, 10);
        expect(contains).toEqual(true);
    })
})

describe('Tree 10-1-8-20-15-30', () => {
    const avlTree = new BinarySearchTree();
    avlTree.insert(10);
    avlTree.insert(1);
    avlTree.insert(8);
    avlTree.insert(20);
    avlTree.insert(15);
    avlTree.insert(30);
    describe('Contain the searched value', () => {
        test('Value: 10', () => {
            const contains = searchInAVLTree(avlTree, 10);
            expect(contains).toEqual(true);
        })
        test('Value: 1', () => {
            const contains = searchInAVLTree(avlTree, 1);
            expect(contains).toEqual(true);
        })
        test('Value: 8', () => {
            const contains = searchInAVLTree(avlTree, 8);
            expect(contains).toEqual(true);
        })
        test('Value: 20', () => {
            const contains = searchInAVLTree(avlTree, 20);
            expect(contains).toEqual(true);
        })
        test('Value: 15', () => {
            const contains = searchInAVLTree(avlTree, 15);
            expect(contains).toEqual(true);
        })
        test('Value: 30', () => {
            const contains = searchInAVLTree(avlTree, 30);
            expect(contains).toEqual(true);
        })
    })

    describe('Not contain the searched value', () => {
        test('Value: 2', () => {
            const contains = searchInAVLTree(avlTree, 2);
            expect(contains).toEqual(false);
        })

        test('Value: 5', () => {
            const contains = searchInAVLTree(avlTree, 5);
            expect(contains).toEqual(false);
        })

        test('Value: 17', () => {
            const contains = searchInAVLTree(avlTree, 17);
            expect(contains).toEqual(false);
        })
        test('Value: 21', () => {
            const contains = searchInAVLTree(avlTree, 21);
            expect(contains).toEqual(false);
        })
        test('Value: 40', () => {
            const contains = searchInAVLTree(avlTree, 40);
            expect(contains).toEqual(false);
        })
        test('Value: 50', () => {
            const contains = searchInAVLTree(avlTree, 50);
            expect(contains).toEqual(false);
        })
    })
})

'use strict';

const lowestCommonAncestor = require('./exerciseE51');

describe('Small trees', () => {
    test('No tree', () => {
        const tree = {};
        const value1 = 8;
        const value2 = 11;
        const lca = lowestCommonAncestor(value1, value2, tree);
        expect(lca).toEqual(undefined);
    })

    test('One node', () => {
        const tree = { value: 8 };
        const value1 = 8;
        const value2 = 11;
        const lca = lowestCommonAncestor(value1, value2, tree);
        expect(lca).toEqual(undefined);
    })

    describe('Two nodes', () => {
        const tree = {
            value: 8,
            branch: {
                value: 11
            }
        };
        test('First value in the root', () => {
            const value1 = 8;
            const value2 = 11;
            const lca = lowestCommonAncestor(value1, value2, tree);
            expect(lca.value).toEqual(8);
        })

        test('Second value in the root', () => {
            const value1 = 11;
            const value2 = 8;
            const lca = lowestCommonAncestor(value1, value2, tree);
            expect(lca.value).toEqual(8);
        })

        test('No ancestor', () => {
            const value1 = 11;
            const value2 = 12;
            const lca = lowestCommonAncestor(value1, value2, tree);
            expect(lca).toEqual(undefined);
        })
    })

    test('Three nodes', () => {
        const tree = {
            value: 8,
            branch1: {
                value: 11
            },
            branch2: {
                value: 12
            }
        };
        const value1 = 11;
        const value2 = 12;
        const lca = lowestCommonAncestor(value1, value2, tree);
        expect(lca.value).toEqual(8);
    })
})

describe('10 nodes', () => {
    const tree = {
        value: 1,
        branch1: {
            value: 2,
            branch1: { value: 5 },
            branch2: { value: 6 }
        },
        branch2: {
            value: 3,
            branch1: { value: 7 }
        },
        branch3: {
            value: 4,
            branch1: { value: 8 },
            branch2: {
                value: 9,
                branch: { value: 10 }
            }
        }
    }
    test('Extreme nodes (5 and 10)', () => {
        const value1 = 5;
        const value2 = 10;
        const lca = lowestCommonAncestor(value1, value2, tree);
        expect(lca.value).toEqual(1);
    })

    test('One is direct child of the other (7 and 3)', () => {
        const value1 = 7;
        const value2 = 3;
        const lca = lowestCommonAncestor(value1, value2, tree);
        expect(lca.value).toEqual(3);
    })

    test('Direct children of the same node (5 and 6)', () => {
        const value1 = 5;
        const value2 = 6;
        const lca = lowestCommonAncestor(value1, value2, tree);
        expect(lca.value).toEqual(2);
    })

    test('Direct child and grand child of the same node (10 and 8)', () => {
        const value1 = 10;
        const value2 = 8;
        const lca = lowestCommonAncestor(value1, value2, tree);
        expect(lca.value).toEqual(4);
    })

    test('Direct grand-child and child of the same node (8 and 10) (symmetric to previous one)', () => {
        const value1 = 8;
        const value2 = 10;
        const lca = lowestCommonAncestor(value1, value2, tree);
        expect(lca.value).toEqual(4);
    })

    test('Including root', () => {
        const value1 = 1;
        const value2 = 6;
        const lca = lowestCommonAncestor(value1, value2, tree);
        expect(lca.value).toEqual(1);
    })
})

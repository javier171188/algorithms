'use strict';

const isSameLevel = require('./exerciseD53');

describe('Example tree', () => {
    let tree = {
        value: 0,
        branch1: {
            value: 1
        },
        branch2: {
            value: 2,
            branch1: { value: 1 },
            branch2: {
                value: 5,
                branch1: { value: 3 },
                branch2: { value: 5, branch1: { value: 6 } },
                branch3: { value: 9 }
            }
        },
        branch3: { value: 3, branch1: { value: 0 } },
        branch4: { value: 5 },
        branch5: {
            value: 7,
            branch1: {
                value: 3,
                branch1: { value: 3 },
                branch2: {
                    value: 0,
                    branch1: { value: 9 },
                    branch2: { value: 4 }
                }
            }
        }
    }
    describe('The same numbers', () => {
        test('1 and 1', () => {
            expect(isSameLevel(tree, 1, 1)).toBe(false);
        })

        test('3 and 3', () => {
            expect(isSameLevel(tree, 3, 3)).toBe(true);
        })

        test('0 and 0', () => {
            expect(isSameLevel(tree, 0, 0)).toBe(false);
        })
    })

    describe('Different values', () => {
        test('6 and 4', () => {
            expect(isSameLevel(tree, 6, 4)).toBe(true);
        })

        test('9 and 1', () => {
            expect(isSameLevel(tree, 9, 1)).toBe(false);
        })

        test('2 and 7', () => {
            expect(isSameLevel(tree, 2, 7)).toBe(true);
        })

        test('7 and 2', () => {
            expect(isSameLevel(tree, 7, 2)).toBe(true);
        })
    })
})

describe('Small trees', () => {
    describe('Zero level tree', () => {
        const tree = {};
        test('Different numbers (2 and 7)', () => {
            expect(isSameLevel(tree, 2, 7)).toBe(false);
        })
        test('The same numbers (10 and 10)', () => {
            expect(isSameLevel(tree, 10, 10)).toBe(false);
        })
    })

    describe('One level tree', () => {
        const tree = { value: 3 };
        test('Different numbers (3 and 7)', () => {
            expect(isSameLevel(tree, 3, 7)).toBe(false);
        })
        test('The same numbers (3 and 3)', () => {
            expect(isSameLevel(tree, 3, 3)).toBe(false);
        })
    })

    describe('Two level three', () => {
        const tree = {
            value: 10,
            branch1: { value: 11, branch1: { value: 14 } },
            branch2: { value: 12, branch1: { value: 14 } },
            branch3: { value: 13 }
        }
        test('Different numbers true (11 and 12)', () => {
            expect(isSameLevel(tree, 11, 12)).toBe(true);
        })
        test('Different numbers false (10 and 13)', () => {
            expect(isSameLevel(tree, 10, 13)).toBe(false);
        })

        test('The same number true (14 and 14)', () => {
            expect(isSameLevel(tree, 14, 14)).toBe(true);
        })
    })
})

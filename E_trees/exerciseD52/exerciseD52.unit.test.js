'use strict';

const { topToBottom, leftToRight } = require('./exerciseD52');

const tree6 = {
    value: 1,
    branch1: {
        value: 2,
        branch1: { value: 4 },
        branch2: { value: 5 }
    },
    branch2: {
        value: 3,
        branch1: {
            value: 6,
            branch1: { value: 8 },
            branch2: { value: 9 }
        },
        branch2: {
            value: 7,
            branch1: {
                value: 10,
                branch1: {
                    value: 12
                }
            },
            branch2: {
                value: 11,
                branch1: {
                    value: 13,
                    branch1: {
                        value: 14
                    }
                }
            }
        }
    }
}

describe('Top to bottom', () => {
    describe('Small trees', () => {
        test('Zero level tree', () => {
            console.log = jest.fn();
            const tree = {};
            topToBottom(tree);
            expect(console.log.mock.calls).toEqual([]);
        })

        test('One level tree', () => {
            console.log = jest.fn();
            const tree = { value: 1 };
            topToBottom(tree);
            expect(console.log.mock.calls).toEqual([[1]]);
        })
        test('Two level tree', () => {
            console.log = jest.fn();
            const tree = {
                value: 1,
                branch1: { value: 2 },
                branch2: { value: 3 }
            };
            topToBottom(tree);
            expect(console.log.mock.calls).toEqual([[1], [2], [3]]);
        })
    })

    test('Six level tree', () => {
        console.log = jest.fn();
        topToBottom(tree6);
        expect(console.log.mock.calls).toEqual([
            [1], [2], [3], [4],
            [5], [6], [7], [8],
            [9], [10], [11], [12],
            [13], [14]
        ]);
    })
})

describe('Left to right', () => {
    describe('Small trees', () => {
        test('Zero level tree', () => {
            console.log = jest.fn();
            const tree = {};
            leftToRight(tree);
            expect(console.log.mock.calls).toEqual([]);
        })

        test('One level tree', () => {
            console.log = jest.fn();
            const tree = { value: 1 };
            leftToRight(tree);
            expect(console.log.mock.calls).toEqual([[1]]);
        })

        describe('Two level tree', () => {
            test('Only left', () => {
                console.log = jest.fn();
                const tree = {
                    value: 1,
                    branch1: { value: 2 }
                };
                leftToRight(tree);
                expect(console.log.mock.calls).toEqual([[2], [1]]);
            })

            test('Only right', () => {
                console.log = jest.fn();
                const tree = {
                    value: 1,
                    branch2: { value: 2 }
                };
                leftToRight(tree);
                expect(console.log.mock.calls).toEqual([[1], [2]]);
            })

            test('Full', () => {
                console.log = jest.fn();
                const tree = {
                    value: 1,
                    branch1: { value: 2 },
                    branch2: { value: 3 }
                };
                leftToRight(tree);
                expect(console.log.mock.calls).toEqual([[2], [1], [3]]);
            })
        })
    })

    test('Six level tree', () => {
        console.log = jest.fn();
        leftToRight(tree6);
        expect(console.log.mock.calls).toEqual([
            [4], [2], [5], [1],
            [8], [6], [9], [3],
            [12], [10], [7], [14],
            [13], [11]
        ]);
    })
})

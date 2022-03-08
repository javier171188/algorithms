'use strict';
const findSecondLargest = require('./exerciseD39');

test('Ordered array', () => {
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const secondLargest = findSecondLargest(values);
    expect(secondLargest).toEqual(9);
})

test('Second larger at the beginning', () => {
    const values = [9, 4, 1, 7, 2, 5, 10, 3, 8, 6];
    const secondLargest = findSecondLargest(values);
    expect(secondLargest).toEqual(9);
})

test('Second larger at the end', () => {
    const values = [-9, 4, -1, 7, 2, -5, 10, 3, 6, 8];
    const secondLargest = findSecondLargest(values);
    expect(secondLargest).toEqual(8);
})

test('Second larger at the second place', () => {
    const values = [4, 9, -1, 7, 2, -5, 10, 3, 6, 8];
    const secondLargest = findSecondLargest(values);
    expect(secondLargest).toEqual(9);
})

test('Second larger at the penultimate place', () => {
    const values = [4, -9, -1, 7, 2, -5, 10, 3, 6, 9, 8];
    const secondLargest = findSecondLargest(values);
    expect(secondLargest).toEqual(9);
})

describe('Short arrays', () => {
    test('less than two', () => {
        const values = [4];
        const secondLargest = findSecondLargest(values);
        expect(secondLargest).toBeUndefined();
    })

    describe('Two sized arrays', () => {
        test('Second larger at the begging', () => {
            const values = [4, 6];
            const secondLargest = findSecondLargest(values);
            expect(secondLargest).toEqual(4);
        })
        test('Second larger at the end', () => {
            const values = [6, 4];
            const secondLargest = findSecondLargest(values);
            expect(secondLargest).toEqual(4);
        })
    })

    describe('Three sized arrays', () => {
        test('Second large at the end', () => {
            const values = [6, 4, 5];
            const secondLargest = findSecondLargest(values);
            expect(secondLargest).toEqual(5);
        })
        test('Second large at the begging', () => {
            const values = [6, 4, 8];
            const secondLargest = findSecondLargest(values);
            expect(secondLargest).toEqual(6);
        })
        test('Second large in the middle', () => {
            const values = [7, 6, 4];
            const secondLargest = findSecondLargest(values);
            expect(secondLargest).toEqual(6);
        })
    })
})
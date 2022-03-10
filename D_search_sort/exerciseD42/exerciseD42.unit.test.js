'use strict';
const findMissingNumber = require('./exerciseD42');

test('Missing the number one', () => {
    const sequence = [9, 4, 3, 5, 8, 7, 2, 6];
    const missingNumber = findMissingNumber(sequence);
    expect(missingNumber).toEqual(1);
})

test('Missing the last number', () => {
    const sequence = [1, 4, 3, 5, 8, 7, 2, 6];
    const missingNumber = findMissingNumber(sequence);
    expect(missingNumber).toEqual(9);
})

test('Missing the number 4', () => {
    const sequence = [1, 9, 3, 5, 8, 7, 2, 6];
    const missingNumber = findMissingNumber(sequence);
    expect(missingNumber).toEqual(4);
})

describe('Ordered array', () => {
    test('Ascending order', () => {
        const sequence = [1, 2, 3, 5, 6, 7, 8, 9, 10];
        const missingNumber = findMissingNumber(sequence);
        expect(missingNumber).toEqual(4);
    })

    test('Descending order', () => {
        const sequence = [10, 9, 8, 7, 6, 5, 3, 2, 1];
        const missingNumber = findMissingNumber(sequence);
        expect(missingNumber).toEqual(4);
    })
})

describe('Small arrays', () => {
    test('Zero sized array', () => {
        const sequence = [];
        const missingNumber = findMissingNumber(sequence);
        expect(missingNumber).toEqual(1);
    })

    describe('One sized arrays', () => {
        test('Missing the first one', () => {
            const sequence = [2];
            const missingNumber = findMissingNumber(sequence);
            expect(missingNumber).toEqual(1);
        })
        test('Missing the second one', () => {
            const sequence = [1];
            const missingNumber = findMissingNumber(sequence);
            expect(missingNumber).toEqual(2);
        })
    })

    test('Two sized arrays', () => {
        const sequence = [1, 3];
        const missingNumber = findMissingNumber(sequence);
        expect(missingNumber).toEqual(2);
    })
})
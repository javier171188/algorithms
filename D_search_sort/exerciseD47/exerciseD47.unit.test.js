'use strict';
const getMajorityNumber = require('./exerciseD47');

test('Even sized array', () => {
    const array = [1, 2, 2, 2, 3, 2, 2, 6, 7, 2, 4, 2];
    const majorityNumber = getMajorityNumber(array);

    expect(majorityNumber).toEqual(2);
})

test('Odd sized array', () => {
    const array = [1, 2, 2, 2, 3, 2, 2, 6, 7, 2, 4];
    const majorityNumber = getMajorityNumber(array);

    expect(majorityNumber).toEqual(2);
})


describe('Majority number in consecutive places', () => {
    test('In the begging', () => {
        const array = [2, 2, 2, 2, 2, 2, 2, 2, 7, 1, 4, 5, 15, 16];
        const majorityNumber = getMajorityNumber(array);

        expect(majorityNumber).toEqual(2);
    })

    test('In the end', () => {
        const array = [7, 1, 4, 5, 15, 16, 2, 2, 2, 2, 2, 2, 2, 2];
        const majorityNumber = getMajorityNumber(array);

        expect(majorityNumber).toEqual(2);
    })

    test('In the middle', () => {
        const array = [7, 1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 5, 15, 16];
        const majorityNumber = getMajorityNumber(array);

        expect(majorityNumber).toEqual(2);
    })
})

test('Majority number in separated places', () => {
    const array = [2, 1, 2, 1, 2, 1, 2];
    const majorityNumber = getMajorityNumber(array);

    expect(majorityNumber).toEqual(2);
})

test('Just one number in the array', () => {
    const array = [2, 2, 2, 2, 2, 2, 2];
    const majorityNumber = getMajorityNumber(array);

    expect(majorityNumber).toEqual(2);
})

describe('No majority number', () => {
    test('Every number appears 1 time', () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const majorityNumber = getMajorityNumber(array);

        expect(majorityNumber).toEqual(undefined);
    })

    test('The most frequent  appears N/2 times', () => {
        const array = [1, 2, 2, 4, 2, 6, 2, 8, 2, 10];
        const majorityNumber = getMajorityNumber(array);

        expect(majorityNumber).toEqual(undefined);
    })
})

describe('Small arrays', () => {
    test('Zero sized array', () => {
        const array = [];
        const majorityNumber = getMajorityNumber(array);

        expect(majorityNumber).toEqual(undefined);
    })

    test('One sized array', () => {
        const array = [10];
        const majorityNumber = getMajorityNumber(array);

        expect(majorityNumber).toEqual(10);
    })

    describe('Two sized array', () => {
        test('No majority number', () => {
            const array = [10, 11];
            const majorityNumber = getMajorityNumber(array);

            expect(majorityNumber).toEqual(undefined);
        })

        test('There is majority number', () => {
            const array = [11, 11];
            const majorityNumber = getMajorityNumber(array);

            expect(majorityNumber).toEqual(11);
        })
    })

    describe('Three sized arrays', () => {
        test('No majority number', () => {
            const array = [10, 11, 12];
            const majorityNumber = getMajorityNumber(array);

            expect(majorityNumber).toEqual(undefined);
        })

        test('There is majority number', () => {
            const array = [11, 11, 12];
            const majorityNumber = getMajorityNumber(array);

            expect(majorityNumber).toEqual(11);
        })
    })
})
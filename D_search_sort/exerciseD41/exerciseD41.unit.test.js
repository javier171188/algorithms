'use strict';
const getKLargest = require('./exerciseD41');

test('k greater than the length of the list', () => {
    const k = 8;
    const list = [1, 6, 8, 3, 6, 8, 3];
    function throwingFunction() {
        getKLargest(list, k);
    }
    expect(throwingFunction).toThrow('The value of k must be less or equal to the number of elements of the list.');
})

test('k is less than 1', () => {
    const k = 0;
    const list = [1, 6, 8, 3, 6, 8, 3];
    function throwingFunction() {
        getKLargest(list, k);
    }
    expect(throwingFunction).toThrow('The value of k must be greater than zero.');
})

test('k equals 1 must return the maximum', () => {
    const k = 1;
    const list = [1, 6, 8, 3, 6, 8, 3];
    const kLargest = getKLargest(list, k);
    expect(kLargest).toEqual([8]);
})

test('k equals length of the list must return whole list values', () => {
    const k = 7;
    const list = [1, 6, 8, 3, 6, 8, 3];
    const kLargest = getKLargest(list, k);
    expect(kLargest).toEqual([1, 3, 3, 6, 6, 8, 8]);
})

test('Test k = 3 and list.length = 7', () => {
    const k = 3;
    const list = [1, 6, 8, 3, 6, 8, 3];
    const kLargest = getKLargest(list, k);
    expect(kLargest).toEqual([6, 8, 8]);
})

describe('Small arrays', () => {
    test('Zero sized array', () => {
        const k = 8;
        const list = [];
        function throwingFunction() {
            getKLargest(list, k);
        }
        expect(throwingFunction).toThrow('The list must contain at least one element.');
    })

    test('One sized array', () => {
        const k = 1;
        const list = [8];
        const kLargest = getKLargest(list, k);
        expect(kLargest).toEqual([8]);
    })

    describe('Two sized array', () => {
        test('k=1', () => {
            const k = 1;
            const list = [8, 7];
            const kLargest = getKLargest(list, k);
            expect(kLargest).toEqual([8]);
        })
        test('k=2', () => {
            const k = 2;
            const list = [8, 7];
            const kLargest = getKLargest(list, k);
            expect(kLargest).toEqual([7, 8]);
        })
    })
})

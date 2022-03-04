'use strict';
const { sumArrays } = require('./exercise8');

test('Check example arrays', () => {
    let a = [9, 9];
    let b = [1];
    let o = sumArrays(a, b);
    expect(o).toEqual([1, 0, 0]);
})

describe('Arrays zero', () => {
    test('The second array is zero', () => {
        let a = [1, 2, 3, 4, 5, 6, 7];
        let b = [0];
        let o = sumArrays(a, b);
        expect(o).toEqual([1, 2, 3, 4, 5, 6, 7])
    })
    test('The first array is zero', () => {
        let a = [0];
        let b = [1, 2, 3, 4, 5, 6, 7];
        let o = sumArrays(a, b);
        expect(o).toEqual([1, 2, 3, 4, 5, 6, 7])
    })
})

describe('Arrays of the same size', () => {
    test('One size arrays', () => {
        let a = [7];
        let b = [2];
        let o = sumArrays(a, b);
        expect(o).toEqual([9]);
    })
    test('Four size arrays', () => {
        let a = [1, 2, 3, 4];
        let b = [8, 7, 6, 5];
        let o = sumArrays(a, b);
        expect(o).toEqual([9, 9, 9, 9]);
    })
})


describe('Arrays of different size', () => {
    test('The first array is larger than the second one', () => {
        let a = [9, 9, 9, 9, 9, 9, 9, 9];
        let b = [0, 2];
        let o = sumArrays(a, b);
        expect(o).toEqual([1, 0, 0, 0, 0, 0, 0, 0, 1]);
    })
    test('The second array is larger than the first one', () => {
        let a = [0, 2];
        let b = [9, 9, 9, 9, 9, 9, 9, 9];
        let o = sumArrays(a, b);
        expect(o).toEqual([1, 0, 0, 0, 0, 0, 0, 0, 1]);
    })
})

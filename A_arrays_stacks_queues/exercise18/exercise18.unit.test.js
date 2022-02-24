'use strict';

const { SparseMatrix } = require('./exercise18');

describe('Basic tests', () => {
    const A = [
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 110, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 42, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 69, 0, 0, 3]];
    const sparseMatrix = new SparseMatrix(A);
    test('Creation', () => {
        expect(Object.keys(sparseMatrix.values).length === 7);
        expect(Object.keys(sparseMatrix.values).includes('0'));
        expect(Object.keys(sparseMatrix.values).includes('1'));
        expect(Object.keys(sparseMatrix.values).includes('4'));
        expect(Object.keys(sparseMatrix.values).includes('6'));
    })

    test('Check values', () => {
        const zeroValue = sparseMatrix.getValue(2, 4);
        const nonZero = sparseMatrix.getValue(1, 10);

        expect(zeroValue).toEqual(0);
        expect(nonZero).toEqual(110);

        const topLeft = sparseMatrix.getValue(0, 0);
        const downLeft = sparseMatrix.getValue(6, 0);
        const downRight = sparseMatrix.getValue(6, 12);
        const topRight = sparseMatrix.getValue(0, 12);
        expect(topLeft).toEqual(1);
        expect(downLeft).toEqual(2);
        expect(downRight).toEqual(3);
        expect(topRight).toEqual(4);
    })

    test('Check set values', () => {
        sparseMatrix.setValue(6, 0, 0);
        expect(sparseMatrix.getValue(6, 0)).toEqual(0);
        sparseMatrix.setValue(2, 2, 0);
        expect(sparseMatrix.getValue(2, 2)).toEqual(0);

        sparseMatrix.setValue(0, 0, 10);
        expect(sparseMatrix.getValue(0, 0)).toEqual(10);
        sparseMatrix.setValue(3, 8, 10);
        expect(sparseMatrix.getValue(3, 8)).toEqual(10);
    })

    test('Check out of range', () => {
        let throwingFunction = () => {
            sparseMatrix.setValue(10, 10, 20);
        }
        expect(throwingFunction).toThrow(RangeError);
        expect(throwingFunction).toThrow('Coordinates out of range');

        throwingFunction = () => {
            sparseMatrix.getValue(10, 10);
        }
        expect(throwingFunction).toThrow(RangeError);
        expect(throwingFunction).toThrow('Coordinates out of range');
    })
})
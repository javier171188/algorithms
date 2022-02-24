'use strict';
const { triangularArray } = require('./exercise17');

describe('Basic tests', () => {
    const coordinates = [
        [0, 0],
        [1, 0],
        [1, 1],
        [2, 0],
        [2, 1],
        [2, 2],
        [3, 0],
        [3, 1],
        [3, 2],
        [3, 3]]

    test('Basic test', () => {
        const data = new triangularArray(4);
        for (let i = 0; i < coordinates.length; i++) {
            data.set(coordinates[i][0], coordinates[i][1], i);
        }

        for (let i = 0; i < coordinates.length; i++) {
            let element = data.get(coordinates[i][0], coordinates[i][1]);
            expect(element).toEqual(i);
        }
    })
    test('Check inverted index', () => {
        const invertedData = new triangularArray(4);

        for (let i = 0; i < coordinates.length; i++) {
            invertedData.set(coordinates[i][1], coordinates[i][0], i);
        }

        for (let i = 0; i < coordinates.length; i++) {
            let element = invertedData.get(coordinates[i][0], coordinates[i][1]);
            expect(element).toEqual(i);
        }
    })
    test('Check index out of range', () => {
        const data = new triangularArray(4);
        let throwingFunction = () => {
            data.set(8, 8, 10);
        }

        expect(throwingFunction).toThrow('The index is out of borders.');
        expect(throwingFunction).toThrow(RangeError);

        const noValue = data.get(0, 0);
        expect(noValue).toEqual(undefined);

        throwingFunction = () => {
            data.get(8, 8, 10);
        }
        expect(throwingFunction).toThrow('The index is out of borders.');
        expect(throwingFunction).toThrow(RangeError);
    })
})


describe('Check small matrixes', () => {

    test('No dimension', () => {
        const data = new triangularArray();
        const throwingFunction = () => {
            data.set(0, 0, 10);
        }

        expect(throwingFunction).toThrow('The index is out of borders.');
        expect(throwingFunction).toThrow(RangeError);
    })


    test('Dimension zero', () => {
        const data = new triangularArray(0);

        let throwingFunction = () => {
            data.set(0, 0, 10);
        }
        expect(throwingFunction).toThrow('The index is out of borders.');
        expect(throwingFunction).toThrow(RangeError);

        throwingFunction = () => {
            data.get(0, 0);
        }
        expect(throwingFunction).toThrow('The index is out of borders.');
        expect(throwingFunction).toThrow(RangeError);
    })

    test('Dimension one', () => {
        const data = new triangularArray(1);

        data.set(0, 0, 10);
        let element = data.get(0, 0);
        expect(element).toEqual(10);

        let throwingFunction = () => {
            data.set(1, 0, 10);
        }
        expect(throwingFunction).toThrow('The index is out of borders.');
        expect(throwingFunction).toThrow(RangeError);

        throwingFunction = () => {
            data.get(1, 0);
        }
        expect(throwingFunction).toThrow('The index is out of borders.');
        expect(throwingFunction).toThrow(RangeError);
    })


    test('Dimension two.', () => {
        const data = new triangularArray(2);
        data.set(0, 0, 10);
        let element = data.get(0, 0);
        expect(element).toEqual(10);

        data.set(1, 0, 10);
        element = data.get(1, 0);
        expect(element).toEqual(10);

        data.set(1, 1, 10);
        element = data.get(1, 1);
        expect(element).toEqual(10);

        let throwingFunction = () => {
            data.get(1, 2);
        }
        expect(throwingFunction).toThrow('The index is out of borders.');
        expect(throwingFunction).toThrow(RangeError);

        throwingFunction = () => {
            data.set(1, 2);
        }
        expect(throwingFunction).toThrow('The index is out of borders.');
        expect(throwingFunction).toThrow(RangeError);
    })
})


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
        const data = new triangularArray(2);
        data.set(3, 3, 10);
        const element = data.get(3, 3);
        expect(element).toEqual(undefined);
    })
})


test('Check small matrixes', () => {
    let data = new triangularArray();
    data.set(0, 0, 10);
    let element = data.get(0, 0);
    expect(element).toEqual(undefined);

    data = new triangularArray(0);
    data.set(0, 0, 10);
    element = data.get(0, 0);
    expect(element).toEqual(undefined);

    data = new triangularArray(1);
    data.set(0, 0, 10);
    element = data.get(0, 0);
    expect(element).toEqual(10);

    data.set(1, 0, 10);
    element = data.get(1, 0);
    expect(element).toEqual(undefined);

    data = new triangularArray(2);
    data.set(0, 0, 10);
    element = data.get(0, 0);
    expect(element).toEqual(10);

    data.set(1, 0, 10);
    element = data.get(1, 0);
    expect(element).toEqual(10);

    data.set(1, 1, 10);
    element = data.get(1, 1);
    expect(element).toEqual(10);
})


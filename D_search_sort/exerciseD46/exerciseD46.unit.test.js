'use strict';

const longestRunOfTwoNumbers = require('./exerciseD46');

describe('Example tests', () => {
    test('1212223311212223', () => {
        const result = longestRunOfTwoNumbers('1212223311212223');
        expect(result).toEqual('1121222');
    });

    test('111', () => {
        let result = longestRunOfTwoNumbers('111');
        expect(result).toEqual('111');
    })
})

test('Longest run in the middle', () => {
    const result = longestRunOfTwoNumbers('111343434343434343999');
    expect(result).toEqual('343434343434343');
})

test('Longest run in the end', () => {
    const result = longestRunOfTwoNumbers('111999343434343434343');
    expect(result).toEqual('343434343434343');
})

test('Longest run in the beginning', () => {
    const result = longestRunOfTwoNumbers('343434343434343111999');
    expect(result).toEqual('343434343434343');
})

describe('Small input', () => {
    test('Zero sized string', () => {
        const result = longestRunOfTwoNumbers('');
        expect(result).toEqual('');
    })

    test('One sized string', () => {
        const result = longestRunOfTwoNumbers('1');
        expect(result).toEqual('1');
    })

    test('Two sized string', () => {
        const result = longestRunOfTwoNumbers('23');
        expect(result).toEqual('23');

    })

    test('Three sized string', () => {
        const result = longestRunOfTwoNumbers('234');
        expect(result).toEqual('23');
    })
})

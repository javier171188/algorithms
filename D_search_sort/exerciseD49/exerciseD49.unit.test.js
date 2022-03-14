'use strict';
const getCombinations = require('./exerciseD49');

describe('Known parents', () => {
    test('AB- AB+', () => {
        console.log = jest.fn();
        const input = "AB- AB+ ?";
        getCombinations(input);
        expect(console.log.mock.calls[0][0]).toEqual('AB- AB+ {A+,A-,AB+,AB-,B+,B-}');
    })

    test('A- A-', () => {
        console.log = jest.fn();
        const input = "A- A- ?";
        getCombinations(input);
        expect(console.log.mock.calls[0][0]).toEqual('A- A- {A-,O-}');
    })

    test('A+ B+', () => {
        console.log = jest.fn();
        const input = "A+ B+ ?";
        getCombinations(input);
        expect(console.log.mock.calls[0][0]).toEqual('A+ B+ {AB+,AB-,A+,A-,B+,B-,O+,O-}');
    })

    test('O+ O-', () => {
        console.log = jest.fn();
        const input = "O+ O- ?";
        getCombinations(input);
        expect(console.log.mock.calls[0][0]).toEqual('O+ O- {O+,O-}');
    })
})

describe('Known children', () => {
    test('O+ ? O', () => {

    })

    test('AB+ ? O+', () => {

    })
})
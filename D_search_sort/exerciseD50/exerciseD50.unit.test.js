'use strict';
const isInterleaved = require('./exerciseD50');

test('Example test', () => {
    const A = "abcd";
    const B = "abcd";
    const C = "aabcbcdd";

    const interleaved = isInterleaved(A, B, C);
    expect(interleaved).toEqual(true);
})

test('No interleaved', () => {
    const A = "abcd";
    const B = "abcd";
    const C = "acabbcdd";

    const interleaved = isInterleaved(A, B, C);
    expect(interleaved).toEqual(false);
})

test('Different letters', () => {
    const A = "abcd";
    const B = "efgh";
    const C = "ijklmnop";

    const interleaved = isInterleaved(A, B, C);
    expect(interleaved).toEqual(false);
})

test('First string A', () => {
    const A = "abcd";
    const B = "efgh";
    const C = "abcdefgh";

    const interleaved = isInterleaved(A, B, C);
    expect(interleaved).toEqual(true);
})

test('First string B', () => {
    const A = "efgh";
    const B = "abcd";
    const C = "abcdefgh";

    const interleaved = isInterleaved(A, B, C);
    expect(interleaved).toEqual(true);
})

test('String A in the middle', () => {
    const A = "abcd";
    const B = "1234";
    const C = "12abcd34";

    const interleaved = isInterleaved(A, B, C);
    expect(interleaved).toEqual(true);
})

test('String B in the middle', () => {
    const A = "1234";
    const B = "abcd";
    const C = "12abcd34";

    const interleaved = isInterleaved(A, B, C);
    expect(interleaved).toEqual(true);
})

test('Just one letter', () => {
    const A = "aaaa";
    const B = "aaaa";
    const C = "aaaaaaaa";

    const interleaved = isInterleaved(A, B, C);
    expect(interleaved).toEqual(true);
})

test('One letter interleave', () => {
    const A = "abcd";
    const B = "1234";
    const C = "a1b2c3d4";

    const interleaved = isInterleaved(A, B, C);
    expect(interleaved).toEqual(true);
})

test('Two letters interleave', () => {
    const A = "abcd";
    const B = "1234";
    const C = "ab12cd34";

    const interleaved = isInterleaved(A, B, C);
    expect(interleaved).toEqual(true);
})

describe('Small strings', () => {
    describe('Zero sized strings', () => {
        test('All are zero sized', () => {
            const A = "";
            const B = "";
            const C = "";

            const interleaved = isInterleaved(A, B, C);
            expect(interleaved).toEqual(true);
        })

        test('The first is zero sized', () => {
            const A = "";
            const B = "abc";
            const C = "abc";

            const interleaved = isInterleaved(A, B, C);
            expect(interleaved).toEqual(true);
        })

        test('The second is zero sized', () => {
            const A = "abc";
            const B = "";
            const C = "abc";

            const interleaved = isInterleaved(A, B, C);
            expect(interleaved).toEqual(true);
        })

        test('The third is zero sized', () => {
            const A = "abc";
            const B = "abc";
            const C = "";

            const interleaved = isInterleaved(A, B, C);
            expect(interleaved).toEqual(false);
        })
    })

    describe('One sized strings', () => {
        test('All are are one sized', () => {
            const A = "a";
            const B = "b";
            const C = "b";

            const interleaved = isInterleaved(A, B, C);
            expect(interleaved).toEqual(false);
        })

        test('A and B are one sized', () => {
            const A = "a";
            const B = "b";
            const C = "ba";

            const interleaved = isInterleaved(A, B, C);
            expect(interleaved).toEqual(true);
        })
    })
})
'use strict';

test('Example test', () => {
    const A = "abcd";
    const B = "abcd";
    const C = "aabcbcdd";

    const interleaved = isInterleaved(A, B, C);
    expect(interleaved).toEqual(true);
})
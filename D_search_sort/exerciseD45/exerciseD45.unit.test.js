'use strict';

const findSequence = require('./exerciseD45');

const targets = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    - 0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16, -17, -18, -19, -20, -21, -22, -23, -24];
function checkConsecutive(sequence) {
    for (let i = 0; i < sequence.length - 1; i++) {
        if (sequence[i] + 1 !== sequence[i + 1]) return false;
    }
    return true;
}


test.each(targets)(
    'Check sum, target %i',
    (target) => {
        const sequence = findSequence(target);
        const sumValue = sequence.reduce((a, b) => a + b, 0);
        expect(sumValue === target).toBe(true);
    }
)

test.each(targets)(
    'Check that the numbers are consecutive, target %i',
    (target) => {
        const sequence = findSequence(target);
        const consecutive = checkConsecutive(sequence);
        expect(consecutive).toEqual(true);
    }
)
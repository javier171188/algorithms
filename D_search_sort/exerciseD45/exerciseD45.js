'use strict';

function findSequence(target) {
    if (target === 0) return [target];
    let positive = true;

    if (target < 0) {
        positive = false;
        target = -1 * target;
    }

    const middle = Math.floor(target / 2);

    for (let i = 1; i <= middle; i++) {
        for (let j = i + 1; j <= middle + 1; j++) {
            let currentSum = sumInterval(i, j);

            if (currentSum === target && positive) return createSequence(i, j);
            if (currentSum === target) return createSequence(-1 * j, -1 * i);
            if (currentSum > target) break;
        }
    }

    if (positive) return createSequence(-1 * target + 1, target);
    return createSequence(-1 * target, target - 1);
}

function createSequence(start, stop) {
    let numbers = [];
    for (let i = start; i <= stop; i++) {
        numbers.push(i);
    }
    return numbers;
}

function sumInterval(start, stop) {
    let result = 0;
    for (let i = start; i <= stop; i++) {
        result += i;
    }
    return result;
}

module.exports = findSequence;

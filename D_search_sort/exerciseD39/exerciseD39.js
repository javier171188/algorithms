'use strict';

function findSecondLargest(values) {
    if (values.length < 2) return undefined;

    let secondMax = Math.min(values[0], values[1]);
    let maxValues = [secondMax, secondMax];

    for (let v of values) {
        if (v > maxValues[1]) {
            maxValues = [maxValues[1], v];
        } else if (v > maxValues[0]) {
            maxValues[0] = v;
        }
    }
    return maxValues[0];
}

module.exports = findSecondLargest;
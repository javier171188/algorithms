'use strict';

function getKLargest(list, k = 1) {
    if (list.length < 1) {
        throw new Error('The list must contain at least one element.');
    }
    if (k > list.length) {
        throw new RangeError('The value of k must be less or equal to the number of elements of the list.');
    };
    if (k < 1) {
        throw new RangeError('The value of k must be greater than zero.');
    }

    let maximums = [];

    for (let e of list) {
        if (!maximums.includes(e)) {
            if (maximums.length < k) {
                maximums.push(e);
            } else {
                let minimum = Math.min(...maximums);
                if (minimum < e) {
                    let index = maximums.indexOf(minimum);
                    maximums[index] = e;
                }
            }
        }
    }

    if (maximums.length === k) return Math.min(...maximums);
    return undefined;
}

module.exports = getKLargest;
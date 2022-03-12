'use strict';

function getMajorityNumber(array) {
    const midNumber = array.length / 2;
    const frequencies = {};

    for (let e of array) {
        if (e in frequencies) {
            frequencies[e] += 1;
        } else {
            frequencies[e] = 1;
        }
        if (frequencies[e] > midNumber) return e;
    }

    return undefined;
};

module.exports = getMajorityNumber;

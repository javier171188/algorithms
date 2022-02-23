'use strict';

function sumArrays(array1, array2) {
    let remaining = 0;
    let size = Math.max(array1.length, array2.length);

    array1 = Array(size - array1.length).fill(0).concat(array1);
    array2 = Array(size - array2.length).fill(0).concat(array2);

    let result = Array(size);
    for (let i = size - 1; i >= 0; i--) {
        result[i] = (array1[i] + array2[i] + remaining) % 10;
        if (array1[i] + array2[i] + remaining > 9) {
            remaining = 1;
        } else {
            remaining = 0;
        }
    }
    if (remaining === 1) {
        result = [1].concat(result);
    }
    return result;
}

module.exports = { sumArrays };
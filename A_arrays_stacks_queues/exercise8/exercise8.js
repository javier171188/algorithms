'use strict';

function sumArrays(array1, array2) {
    let currentValue = 0;
    let size = Math.max(array1.length, array2.length);

    let result = Array(size);
    for (let i = 0; i < size; i++) {
        currentValue = currentValue + (array1[array1.length - 1 - i] || 0) + (array2[array2.length - 1 - i] || 0);
        result[size - 1 - i] = (currentValue) % 10;
        currentValue = Math.floor(currentValue / 10);
    }
    if (currentValue === 1) {
        result = [1].concat(result);
    }

    return result;
}

module.exports = { sumArrays };
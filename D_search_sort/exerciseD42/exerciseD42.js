'use strict';

function findMissingNumber(list) {
    for (let i = 1; i <= list.length + 1; i++) {
        if (!list.includes(i)) return i;
    }
}

module.exports = findMissingNumber;
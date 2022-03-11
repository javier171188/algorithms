'use strict';

function displayNumbers() {
    const arr = new Array(100);
    const keys = arr.keys();

    try {
        printNumbers();
    } catch {
        return;
    }
    function printNumbers() {
        let index = keys.next().value;
        index.toString();
        console.log(index + 1);
        printNumbers();
    }
}

module.exports = displayNumbers;
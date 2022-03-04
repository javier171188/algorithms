'use strict';

function displayNumbers() {
    const arr = new Array(100);
    let numbers = [];
    arr.fill({ next: true });
    const keys = arr.keys();

    try {
        printNumbers();
    } catch {
        numbers = numbers.join(' ');
        console.log(numbers);
        return;
    }
    function printNumbers() {
        let index = keys.next().value;
        arr[index].next;
        numbers.push(index + 1);
        printNumbers();
    }
}

module.exports = displayNumbers;
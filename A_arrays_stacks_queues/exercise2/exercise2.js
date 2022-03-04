'use strict';

displayNumbers();

function displayNumbers() {
    const arr = new Array(10);
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
        //console.log(index + 1);
        numbers.push(index + 1);
        printNumbers();
    }
}

module.exports = displayNumbers;
'use strict';
const LETTERS = {
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F',
    16: 'G',
    17: 'H',
    18: 'I',
    19: 'J',
    20: 'K',
    21: 'L',
    22: 'M',
    23: 'N',
    24: 'O',
    25: 'P',
    26: 'Q',
    27: 'R',
    28: 'S',
    29: 'T',
    30: 'U',
    31: 'V',
    32: 'W',
    33: 'X',
    34: 'Y',
    35: 'Z'
}

let baseTen = 10;
const newBase = changeBase(15, 16);
console.log(newBase);



function changeBase(number, base) {
    if (base > 36) throw Error('The maximum base is 36.')
    const stack = [];
    let newNumber = '';

    while (number > 0) {
        let remainingNum = number % base;
        let remainingStr;
        if (remainingNum > 9) {
            remainingStr = LETTERS[remainingNum];
        } else {
            remainingStr = String(remainingNum);
        }

        stack.push(remainingStr);
        number = Math.floor(number / base);
    }
    while (stack.length > 0) {
        newNumber += stack.pop();
    }
    return newNumber;
}

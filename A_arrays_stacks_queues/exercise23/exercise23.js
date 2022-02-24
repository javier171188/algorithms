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


function changeBase(number, base) {
    if (typeof number !== 'number' || typeof base !== 'number') {
        throw new TypeError('The type of the base and the number to be transformed must be "number".')
    }
    if (base > 36) throw RangeError('The maximum base is 36.')
    if (base < 2) throw RangeError('The minimum base is 2.')

    let negative = false;
    if (number < 0) {
        number = Math.abs(number);
        negative = true;
    }

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
    if (negative) {
        newNumber = '-' + newNumber;
    }
    return newNumber;
}

module.exports = { changeBase };
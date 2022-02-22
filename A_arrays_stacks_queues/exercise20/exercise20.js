'use strict';

let expression = '(([[{{}}]]))';
expression = ')))';

const balanced = checkBalance(expression);
console.log(balanced);

function checkBalance(expression) {
    const prevStack = [];
    const PAIRS = { ')': '(', ']': '[', '}': '{' };

    for (let p of expression) {
        if (Object.values(PAIRS).includes(p)) {
            prevStack.push(p);
        } else {
            let current = prevStack.pop();
            if (current !== PAIRS[p]) {
                return false;
            }
        }
    }
    if (prevStack.length > 0) return false;
    return true;
}
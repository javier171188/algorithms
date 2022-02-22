'use strict';

//const parenthesis = "(()()()()(((())))()()()()";
//const parenthesis = "(()()()()))(((())))()()()()";
// const parenthesis = "(()()()())(((())))()()()()";

// const balanced = checkBalance(parenthesis);
// console.log(balanced);

function checkBalance(parenthesis) {
    const nParent = parenthesis.length;
    const positions = [];

    for (let i = 0; i < nParent; i++) {
        if (parenthesis[i] === '(') positions.push(i);
        if (parenthesis[i] === ')') {
            if (positions.length === 0) return { balanced: false, missing: nParent - (i + 1) };
            positions.pop();
        };
    }

    if (positions.length > 0) {
        let firstPosition = positions[0];
        return { balanced: false, missing: nParent - (firstPosition + 1) };
    }

    return { balanced: true, missing: 0 }
}

module.exports = { checkBalance };
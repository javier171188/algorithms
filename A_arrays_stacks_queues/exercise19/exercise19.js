'use strict';

function checkBalance(parenthesis) {
    let positions = 0;

    for (let p of parenthesis) {
        if (p === '(') positions += 1;
        if (p === ')') {
            if (positions === 0) return { balanced: false, missing: 1 };
            positions -= 1;
        };
    }

    if (positions > 0) {
        return { balanced: false, missing: positions };
    }
    return { balanced: true, missing: 0 }
}

module.exports = { checkBalance };
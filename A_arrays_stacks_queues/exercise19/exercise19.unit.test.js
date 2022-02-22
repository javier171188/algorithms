'use strict';

const { checkBalance } = require('./exercise19');

test('Basic tests', () => {
    let parenthesis = "(()()()())(((())))()()()()";
    const balanced = checkBalance(parenthesis);
    expect(balanced).toEqual({ balanced: true, missing: 0 });

    parenthesis = "(()()()()))(((())))()()()()";
    const notOpening = checkBalance(parenthesis);
    expect(notOpening).toEqual({ balanced: false, missing: 16 });

    parenthesis = "(()()()()(((())))()()()()";
    const notClosing = checkBalance(parenthesis);
    expect(notClosing).toEqual({ balanced: false, missing: 24 })
})

test('Diverse tests', () => {
    let parenthesis = '()()()()()()()()()';

    parenthesis = '(((((((((((())))))))))))';


})

test('Small strings', () => {
    parenthesis = ')'
})
'use strict';
const { checkBalance } = require('./exercise20');

test('Basic tests', () => {
    let expression = '(([[{{}}]]))';
    let balanced = checkBalance(expression);
    expect(balanced).toBe(true);

    expression = '(([[{}}]]))';
    balanced = checkBalance(expression);
    expect(balanced).toBe(false);

    expression = '(([[{({)}}]]))';
    balanced = checkBalance(expression);
    expect(balanced).toBe(false);
})

test('Diverse tests', () => {
    let expression = '(([[{{}}]]))';
    let balanced = checkBalance(expression);
    expect(balanced).toBe(true);

    expression = '([{{{((([[[';
    balanced = checkBalance(expression);
    expect(balanced).toBe(false);

    expression = '}]])))}}))]}';
    balanced = checkBalance(expression);
    expect(balanced).toBe(false);

    expression = '(([[{{}}]]))]';
    balanced = checkBalance(expression);
    expect(balanced).toBe(false);

    expression = '}(([[{{}}]]))';
    balanced = checkBalance(expression);
    expect(balanced).toBe(false);

    expression = '(([[{{}}]]))}';
    balanced = checkBalance(expression);
    expect(balanced).toBe(false);

    expression = '((([[{{}}]]))';
    balanced = checkBalance(expression);
    expect(balanced).toBe(false);

    expression = '({[]})';
    balanced = checkBalance(expression);
    expect(balanced).toBe(true);

    expression = '(((((((((((())))))))))))';
    balanced = checkBalance(expression);
    expect(balanced).toBe(true);

    expression = '[[[[[[]]]]]]';
    balanced = checkBalance(expression);
    expect(balanced).toBe(true);

    expression = '{{{{{{{{{{{{}}}}}}}}}}}}';
    balanced = checkBalance(expression);
    expect(balanced).toBe(true);

})

test('Small strings', () => {
    let expression = '';
    let balanced = checkBalance(expression);
    expect(balanced).toBe(true);

    expression = '(';
    balanced = checkBalance(expression);
    expect(balanced).toBe(false);

    expression = '[';
    balanced = checkBalance(expression);
    expect(balanced).toBe(false);

    expression = '{';
    balanced = checkBalance(expression);
    expect(balanced).toBe(false);

    expression = ')';
    balanced = checkBalance(expression);
    expect(balanced).toBe(false);

    expression = ']';
    balanced = checkBalance(expression);
    expect(balanced).toBe(false);

    expression = '}';
    balanced = checkBalance(expression);
    expect(balanced).toBe(false);

    expression = '()';
    balanced = checkBalance(expression);
    expect(balanced).toBe(true);

    expression = '[]';
    balanced = checkBalance(expression);
    expect(balanced).toBe(true);

    expression = '{}';
    balanced = checkBalance(expression);
    expect(balanced).toBe(true);

    expression = '{)';
    balanced = checkBalance(expression);
    expect(balanced).toBe(false);

    expression = '(]';
    balanced = checkBalance(expression);
    expect(balanced).toBe(false);
})
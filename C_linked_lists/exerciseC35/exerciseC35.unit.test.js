'use strict';
const { createLinkedList } = require('../linkedList');
const isPalindrome = require('./exerciseC35');

test('Basic test', () => {
    let values = ['A', 'B', 'C', 'C', 'B', 'A'];
    let linkedList = createLinkedList(values);
    let palindrome = isPalindrome(linkedList);
    expect(palindrome).toBe(true);

    values = ['A', 'B', 'C', 'C', 'B', 'L'];
    linkedList = createLinkedList(values);
    palindrome = isPalindrome(linkedList);
    expect(palindrome).toBe(false);


    values = ['A', 'B', 'C', 'D', 'C', 'B', 'A'];
    linkedList = createLinkedList(values);
    palindrome = isPalindrome(linkedList);
    expect(palindrome).toBe(true);

    values = ['R', 'B', 'C', 'D', 'C', 'B', 'A'];
    linkedList = createLinkedList(values);
    palindrome = isPalindrome(linkedList);
    expect(palindrome).toBe(false);
})

test('Short lists', () => {
    let values;
    let linkedList = null;
    let palindrome = isPalindrome(linkedList);
    expect(palindrome).toBe(true);

    values = ['A'];
    linkedList = createLinkedList(values);
    palindrome = isPalindrome(linkedList);
    expect(palindrome).toBe(true);

    values = ['A', 'A'];
    linkedList = createLinkedList(values);
    palindrome = isPalindrome(linkedList);
    expect(palindrome).toBe(true);

    values = ['A', 'C'];
    linkedList = createLinkedList(values);
    palindrome = isPalindrome(linkedList);
    expect(palindrome).toBe(false);

    values = ['A', 'C', 'A'];
    linkedList = createLinkedList(values);
    palindrome = isPalindrome(linkedList);
    expect(palindrome).toBe(true);

    values = ['D', 'C', 'A'];
    linkedList = createLinkedList(values);
    palindrome = isPalindrome(linkedList);
    expect(palindrome).toBe(false);

    values = ['A', 'C', 'C', 'A'];
    linkedList = createLinkedList(values);
    palindrome = isPalindrome(linkedList);
    expect(palindrome).toBe(true);

    values = ['A', 'D', 'C', 'A'];
    linkedList = createLinkedList(values);
    palindrome = isPalindrome(linkedList);
    expect(palindrome).toBe(false);
})

test('Diverse tests', () => {
    let values = ['R', 'B', 'C', 'C', 'B', 'A'];
    let linkedList = createLinkedList(values);
    let palindrome = isPalindrome(linkedList);
    expect(palindrome).toBe(false);

    values = ['A', 'R', 'C', 'C', 'B', 'A'];
    linkedList = createLinkedList(values);
    palindrome = isPalindrome(linkedList);
    expect(palindrome).toBe(false);

    values = ['A', 'B', 'R', 'C', 'B', 'A'];
    linkedList = createLinkedList(values);
    palindrome = isPalindrome(linkedList);
    expect(palindrome).toBe(false);

    values = ['A', 'B', 'R', 'C', 'B', 'A'];
    linkedList = createLinkedList(values);
    palindrome = isPalindrome(linkedList);
    expect(palindrome).toBe(false);

    values = ['A', 'B', 'C', 'R', 'B', 'A'];
    linkedList = createLinkedList(values);
    palindrome = isPalindrome(linkedList);
    expect(palindrome).toBe(false);

    values = ['A', 'B', 'C', 'C', 'R', 'A'];
    linkedList = createLinkedList(values);
    palindrome = isPalindrome(linkedList);
    expect(palindrome).toBe(false);

    values = ['A', 'B', 'C', 'C', 'B', 'R'];
    linkedList = createLinkedList(values);
    palindrome = isPalindrome(linkedList);
    expect(palindrome).toBe(false);

    values = ['A', 'B', 'C', 'D', 'E', 'F'];
    linkedList = createLinkedList(values);
    palindrome = isPalindrome(linkedList);
    expect(palindrome).toBe(false);

    values = ['A', 'A', 'A', 'A', 'A', 'A'];
    linkedList = createLinkedList(values);
    palindrome = isPalindrome(linkedList);
    expect(palindrome).toBe(true);

    values = ['A', 'A', 'A', 'A', 'A', 'A', 'A'];
    linkedList = createLinkedList(values);
    palindrome = isPalindrome(linkedList);
    expect(palindrome).toBe(true);
})
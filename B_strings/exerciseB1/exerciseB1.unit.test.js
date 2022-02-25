'use strict';
const { sortString } = require('./exerciseB1');

test('Basic test', () => {
    const unsortedString = "a string to be sorted";
    const sortedString = sortString(unsortedString);
    expect(sortedString).toEqual('    abdeeginoorrssttt');
    expect(sortedString.length).toEqual(unsortedString.length)
})

test('Diverse tests', () => {
    let unsortedString = '545469732181';
    let sortedString = sortString(unsortedString);
    expect(sortedString).toEqual('112344556789');

    unsortedString = 'hfxdhpls1';
    sortedString = sortString(unsortedString);
    expect(sortedString).toEqual('1dfhhlpsx');

    unsortedString = 'abcde';
    sortedString = sortString(unsortedString);
    expect(sortedString).toEqual('abcde');

    unsortedString = 'edcba';
    sortedString = sortString(unsortedString);
    expect(sortedString).toEqual('abcde');
})

test('Small strings', () => {
    let unsortedString = '';
    let sortedString = sortString(unsortedString);
    expect(sortedString).toEqual('');

    unsortedString = 'A';
    sortedString = sortString(unsortedString);
    expect(sortedString).toEqual('A');

    unsortedString = 'GF';
    sortedString = sortString(unsortedString);
    expect(sortedString).toEqual('FG');
})
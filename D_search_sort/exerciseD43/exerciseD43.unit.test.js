'use strict';
const findLCS = require('./exerciseD43');

test('amapola and matamoscas', () => {
    const string1 = 'amapola';
    const string2 = 'matamoscas';

    const substring = findLCS(string1, string2);
    expect(substring).toEqual('amoa');
})

test('ABCDGH and AEDFHR', () => {
    const string1 = 'ABCDGH';
    const string2 = 'AEDFHR';

    const substring = findLCS(string1, string2);
    expect(substring).toEqual('ADH');
})

test('AGGTAB and GXTXAYB', () => {
    const string1 = 'AGGTAB';
    const string2 = 'GXTXAYB';

    const substring = findLCS(string1, string2);
    expect(substring).toEqual('GTAB');
})

test('No substring', () => {
    const string1 = 'abcd';
    const string2 = 'efgh';

    const substring = findLCS(string1, string2);
    expect(substring).toEqual('');
})

test('Full match', () => {

})

test('Check symmetry', () => {
    const string1 = 'AGGTAB';
    const string2 = 'GXTXAYB';

    const substring1 = findLCS(string1, string2);
    const substring2 = findLCS(string2, string1);
    expect(substring1).toEqual(substring2);
})

describe('Short strings', () => {
    describe('Zero sized strings', () => {
        test('First string is zero sized', () => {
            const string1 = '';
            const string2 = 'GXTXAYB';

            const substring = findLCS(string1, string2);
            expect(substring).toEqual('');
        })

        test('Second string is zero sized', () => {
            const string1 = 'GXTXAYB';
            const string2 = '';

            const substring = findLCS(string1, string2);
            expect(substring).toEqual('');
        })

        test('Both strings are zero sized', () => {
            const string1 = '';
            const string2 = '';

            const substring = findLCS(string1, string2);
            expect(substring).toEqual('');
        })
    })

    describe('One sized strings', () => {
        test('First string is one sized', () => {
            const string1 = 'X';
            const string2 = 'GXTXAYB';

            const substring = findLCS(string1, string2);
            expect(substring).toEqual('X');
        })
        test('Second string is one sized', () => {
            const string1 = 'GXTXAYB';
            const string2 = 'X';

            const substring = findLCS(string1, string2);
            expect(substring).toEqual('X');
        })
        test('Both strings are one sized', () => {
            const string1 = 'A';
            const string2 = 'A';

            const substring = findLCS(string1, string2);
            expect(substring).toEqual('A');
        })
    })
})
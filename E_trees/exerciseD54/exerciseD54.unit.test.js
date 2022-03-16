'use strict';

const toTrie = require('./exerciseD54');

describe('Small dictionaries', () => {
    describe('Empty dictionary', () => {
        const dictionary = {
        };
        const trieDic = toTrie(dictionary);

        test('Check initial content', () => {
            expect(trieDic.root).toEqual({});
        })

        test('Check an unknown word', () => {
            const meaning = trieDic.find_word('easy');
            expect(meaning).toEqual(undefined);
        })

        test('Add a word', () => {
            trieDic.add_word('easy', 'meaning');
            const meaning = trieDic.find_word('easy');
            expect(meaning).toEqual('meaning');
        })

        test('Check unknown word after adding another', () => {
            trieDic.add_word('word', 'meaning');
            const meaning = trieDic.find_word('other');
            expect(meaning).toEqual(undefined);
        })
    })

    describe('Dictionary with one word', () => {
        const dictionary = {
            easy: 'word 1'
        };
        const trieDic = toTrie(dictionary);

        test('Check unknown word', () => {
            const meaning = trieDic.find_word('other');
            expect(meaning).toEqual(undefined);
        })

        test('Check known word', () => {
            const meaning = trieDic.find_word('easy');
            expect(meaning).toEqual('word 1');
        })

        test('Add word', () => {
            trieDic.add_word('word', 'meaning 2');
            trieDic.add_word('other', 'meaning 3');
            trieDic.add_word('more', 'meaning 4');
            const meaning = trieDic.find_word('other');
            expect(meaning).toEqual('meaning 3');
        })
    })


})

describe('Dictionary with three words', () => {
    const dictionary = {
        "word1": 'meaning 1',
        "word2": 'meaning 2',
        "word3": 'meaning 3'
    };
    const trieDic = toTrie(dictionary);

    test('Check unknown word', () => {
        const meaning = trieDic.find_word('other');
        expect(meaning).toEqual(undefined);
    })

    test('Check known word', () => {
        const meaning = trieDic.find_word('word3');
        expect(meaning).toEqual('meaning 3');
    })

    test('Add word', () => {
        trieDic.add_word('word4', 'meaning 4');
        trieDic.add_word('word5', 'meaning 5');
        trieDic.add_word('word6', 'meaning 6');
        const meaning = trieDic.find_word('word6');
        expect(meaning).toEqual('meaning 6');
    })
})
'use strict';
const fs = require('fs');
const findWords = require('./exerciseE56');

function createStream(test) {
    const readableStream = fs.createReadStream(__dirname + `/data/${test}.txt`, { highWaterMark: 1 });
    readableStream.setEncoding('UTF8');
    return readableStream;
}

test('Four words', async () => {
    const stream = createStream('fourWords');
    console.log = jest.fn();
    const words = ['gas', 'car', 'space', 'word', 'elephant'];
    await findWords(stream, words);
    expect(console.log.mock.calls).toEqual([['word'], ['elephant'], ['gas'], ['space']]);
})

test('No found words', async () => {
    const stream = createStream('noWordsFound');
    console.log = jest.fn();
    const words = ['gas', 'space', 'word', 'elephant'];
    await findWords(stream, words);
    expect(console.log.mock.calls).toEqual([]);
})

test('No list of words', async () => {
    const stream = createStream('fourWords');
    console.log = jest.fn();
    const words = [];
    await findWords(stream, words);
    expect(console.log.mock.calls).toEqual([]);
})

test('All words together at the beginning', async () => {
    const stream = createStream('beginning');
    console.log = jest.fn();
    const words = ['gas', 'car', 'space', 'word', 'elephant'];
    await findWords(stream, words);
    expect(console.log.mock.calls).toEqual([['space'], ['word'], ['elephant'], ['gas']]);
})

test('All words together in the end', async () => {
    const stream = createStream('end');
    console.log = jest.fn();
    const words = ['gas', 'car', 'space', 'word', 'elephant'];
    await findWords(stream, words);
    expect(console.log.mock.calls).toEqual([['space'], ['word'], ['elephant'], ['gas']]);
})

test('All words together in the middle', async () => {
    const stream = createStream('middle');
    console.log = jest.fn();
    const words = ['gas', 'car', 'space', 'word', 'elephant'];
    await findWords(stream, words);
    expect(console.log.mock.calls).toEqual([['space'], ['word'], ['elephant'], ['gas']]);
})

test('Spliced words', async () => {
    const stream = createStream('spliced');
    console.log = jest.fn();
    const words = ['elephant', 'ant', 'gasoline', 'gas', 'as', 'word', 'or'];
    await findWords(stream, words);
    expect(console.log.mock.calls).toEqual([["gas"], ["as"], ["gasoline"], ["or"], ["word"], ["elephant"], ["ant"]]);
})

test('The stream is one word', async () => {
    const stream = createStream('oneWord');
    console.log = jest.fn();
    const words = ['gas', 'car', 'space', 'word', 'elephant'];
    await findWords(stream, words);
    expect(console.log.mock.calls).toEqual([['car']]);
})

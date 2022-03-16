'use strict';
const fs = require('fs');
function createStream(test) {
    const readableStream = fs.createReadStream(__dirname + `/data/${test}.txt`, { highWaterMark: 1 });
    readableStream.setEncoding('UTF8');
    return readableStream;
}

const words = ['word', 'elephant', 'gas', 'space'];
const stream = createStream('test');

findWord(stream, words);

async function findWord(stream, words) {
    const sizes = words.map(w => w.length);
    const maxSize = Math.max(...sizes);
    const minSize = Math.min(...sizes);
    let values = '';

    await stream.on('data', async function (chunk) {
        values = values + chunk;
        let numValues = values.length;
        let currentMax = Math.min(numValues, maxSize);

        if (numValues >= minSize) {
            for (let i = 0; i < currentMax; i++) {
                console.log(values.slice(1, currentMax))
            }
        }
    })
}

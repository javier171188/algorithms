'use strict';

async function findWords(stream, words) {
    const sizes = words.map(w => w.length);
    const maxSize = Math.max(...sizes);
    const minSize = Math.min(...sizes);
    let values = '';

    await stream.on('data', async function (chunk) {
        values = values + chunk;
        let numValues = values.length;
        if (numValues > maxSize) {
            values = values.slice(1);
            numValues = values.length;
        }

        if (numValues >= minSize) {
            for (let i = 0; i < numValues; i++) {
                let currentWord = values.slice(i, numValues);
                if (words.includes(currentWord)) {
                    console.log(currentWord);
                }
            }
        }
    })

    let resolve;
    const returnProm = new Promise((res, rej) => {
        resolve = res;
    })

    await stream.on('end', async () => {
        await resolve('No more data');
    })
    return await returnProm;
}

module.exports = findWords;

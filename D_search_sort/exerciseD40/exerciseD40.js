'use strict';
//Save data
//const fs = require('fs');
// const data = '6,4';
// fs.writeFile("data.txt", data, () => {

// });
/////////

// const readableStream = fs.createReadStream(__dirname + '/data.txt', { highWaterMark: 1 });
// readableStream.setEncoding('UTF8');

// const number = getSecondLargestStream(readableStream);
// number.then(console.log).catch(console.log);
//console.log(number.then());

async function getSecondLargestStream(stream) {
    let v;
    let maxValues = [undefined, undefined];
    let count = 0;
    await stream.on('data', async function (chunk) {
        if (chunk !== ',') {
            v = parseInt(chunk);

            if (maxValues[0] === undefined) maxValues = [v, v];

            if (v > maxValues[1]) {
                maxValues = [maxValues[1], v];
            } else if (v > maxValues[0] || count === 1) {
                maxValues[0] = v;
            }
            if (count < 2) count++;
        }
    })

    let resolve;
    const returnProm = new Promise((res, rej) => {
        resolve = res;
    })

    await stream.on('end', async () => {
        if (count < 2) resolve(undefined);
        await resolve(maxValues[0]);
    })
    return await returnProm;
}

module.exports = getSecondLargestStream;
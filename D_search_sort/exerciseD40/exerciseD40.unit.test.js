'use strict';
const fs = require('fs');
const getSecondLargestStream = require('./exerciseD40');

function createStream(data) {
    const fs = require('fs');
    //const data = '1,1,2,3,4,5,7,8';
    fs.writeFile("data.txt", data, () => {

    });
    const readableStream = fs.createReadStream(__dirname + '/data.txt', { highWaterMark: 1 });
    readableStream.setEncoding('UTF8');
    return readableStream;
}

test('Ordered array', async () => {
    const data = '1,2,3,4,5,6,7,8,9';
    const stream = createStream(data);

    const secondLargest = await getSecondLargestStream(stream);
    expect(secondLargest).toEqual(8);
})

test('Second larger at the beginning', async () => {
    const data = '7,4,1,5,2,5,3,8,6';
    const stream = createStream(data);

    const secondLargest = await getSecondLargestStream(stream);
    expect(secondLargest).toEqual(7);
})

test('Second larger at the end', async () => {
    const data = '4,1,5,2,5,3,8,6,7';
    const stream = createStream(data);

    const secondLargest = await getSecondLargestStream(stream);
    expect(secondLargest).toEqual(7);
})


// test('Second larger at the second place', () => {
//     const values = [4, 9, -1, 7, 2, -5, 10, 3, 6, 8];
//     const secondLargest = findSecondLargest(values);
//     expect(secondLargest).toEqual(9);
// })

// test('Second larger at the penultimate place', () => {
//     const values = [4, -9, -1, 7, 2, -5, 10, 3, 6, 9, 8];
//     const secondLargest = findSecondLargest(values);
//     expect(secondLargest).toEqual(9);
// })

// describe('Short arrays', () => {
//     test('less than two', () => {
//         const values = [4];
//         const secondLargest = findSecondLargest(values);
//         expect(secondLargest).toBeUndefined();
//     })

//     describe('Two sized arrays', () => {
//         test('Second larger at the begging', () => {
//             const values = [4, 6];
//             const secondLargest = findSecondLargest(values);
//             expect(secondLargest).toEqual(4);
//         })
//         test('Second larger at the end', () => {
//             const values = [6, 4];
//             const secondLargest = findSecondLargest(values);
//             expect(secondLargest).toEqual(4);
//         })
//     })

//     describe('Three sized arrays', () => {
//         test('Second large at the end', () => {
//             const values = [6, 4, 5];
//             const secondLargest = findSecondLargest(values);
//             expect(secondLargest).toEqual(5);
//         })
//         test('Second large at the begging', () => {
//             const values = [6, 4, 8];
//             const secondLargest = findSecondLargest(values);
//             expect(secondLargest).toEqual(6);
//         })
//         test('Second large in the middle', () => {
//             const values = [7, 6, 4];
//             const secondLargest = findSecondLargest(values);
//             expect(secondLargest).toEqual(6);
//         })
//     })
// })
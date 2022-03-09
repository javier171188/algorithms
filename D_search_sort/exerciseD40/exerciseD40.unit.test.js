'use strict';
const fs = require('fs');
const getSecondLargestStream = require('./exerciseD40');

function createStream(test, data) {
    // fs.writeFile(`data/${test}.txt`, data, () => {

    // });
    const readableStream = fs.createReadStream(__dirname + `/data/${test}.txt`, { highWaterMark: 1 });
    readableStream.setEncoding('UTF8');
    return readableStream;
}

test('Ordered array', async () => {
    const data = '1,2,3,4,5,6,7,8,9';
    const stream = createStream('orderedArray', data);

    const secondLargest = await getSecondLargestStream(stream);
    expect(secondLargest).toEqual(8);
})

test('Second larger at the beginning', async () => {
    const data = '7,4,1,5,2,5,3,8,6';
    const stream = createStream('atBeginning', data);

    const secondLargest = await getSecondLargestStream(stream);
    expect(secondLargest).toEqual(7);
})

test('Second larger at the end', async () => {
    const data = '4,1,5,2,5,3,8,6,7';
    const stream = createStream('atEnd', data);

    const secondLargest = await getSecondLargestStream(stream);
    expect(secondLargest).toEqual(7);
})

test('Second larger at the penultimate place', async () => {
    const data = '4,1,5,2,5,3,8,7,6';
    const stream = createStream('atPen', data);

    const secondLargest = await getSecondLargestStream(stream);
    expect(secondLargest).toEqual(7);
})


describe('Short arrays', () => {
    test('Less than two', async () => {
        const data = '4';
        const stream = createStream('sLessTwo', data);
        const secondLargest = await getSecondLargestStream(stream);
        expect(secondLargest).toBeUndefined();
    })

    describe('Two sized arrays', () => {
        test('Second large at the beginning', async () => {
            const data = '4,6';
            const stream = createStream('tsAtBeg', data);
            const secondLargest = await getSecondLargestStream(stream);
            expect(secondLargest).toEqual(4);
        })

        test('Second large at the end', async () => {
            const data = '6,4';
            const stream = createStream('tsAtEnd', data);
            const secondLargest = await getSecondLargestStream(stream);
            expect(secondLargest).toEqual(4);
        })
    })
    describe('Three sized arrays', () => {
        test('Second large at the end', async () => {
            const data = '6,4,5';
            const stream = createStream('thsAtEnd', data);
            const secondLargest = await getSecondLargestStream(stream);
            expect(secondLargest).toEqual(5);
        })
        test('Second large at the beginning', async () => {
            const data = '6,4,8';
            const stream = createStream('thsAtBeg', data);
            const secondLargest = await getSecondLargestStream(stream);
            expect(secondLargest).toEqual(6);
        })

        test('Second large in the middle', async () => {
            const data = '7,6,4';
            const stream = createStream('thsInMid', data);
            const secondLargest = await getSecondLargestStream(stream);
            expect(secondLargest).toEqual(6);
        })
    })

})
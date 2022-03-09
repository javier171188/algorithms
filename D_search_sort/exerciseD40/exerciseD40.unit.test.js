'use strict';
const fs = require('fs');
const getSecondLargestStream = require('./exerciseD40');

function createStream(test) {
    const readableStream = fs.createReadStream(__dirname + `/data/${test}.txt`, { highWaterMark: 1 });
    readableStream.setEncoding('UTF8');
    return readableStream;
}

test('Ordered array (1,2,3,4,5,6,7,8,9)', async () => {
    const stream = createStream('orderedArray');
    const secondLargest = await getSecondLargestStream(stream);
    expect(secondLargest).toEqual(8);
})

test('Second larger at the beginning (7,4,1,5,2,5,3,8,6)', async () => {
    const stream = createStream('atBeginning');
    const secondLargest = await getSecondLargestStream(stream);
    expect(secondLargest).toEqual(7);
})

test('Second larger at the end (4,1,5,2,5,3,8,6,7)', async () => {
    const stream = createStream('atEnd');
    const secondLargest = await getSecondLargestStream(stream);
    expect(secondLargest).toEqual(7);
})

test('Second larger at the penultimate place (4,1,5,2,5,3,8,7,6)', async () => {
    const stream = createStream('atPen');
    const secondLargest = await getSecondLargestStream(stream);
    expect(secondLargest).toEqual(7);
})


describe('Short arrays', () => {
    test('Less than two (4)', async () => {
        const stream = createStream('sLessTwo');
        const secondLargest = await getSecondLargestStream(stream);
        expect(secondLargest).toBeUndefined();
    })

    describe('Two sized arrays', () => {
        test('Second large at the beginning (4,6)', async () => {
            const stream = createStream('tsAtBeg');
            const secondLargest = await getSecondLargestStream(stream);
            expect(secondLargest).toEqual(4);
        })

        test('Second large at the end (6,4)', async () => {
            const stream = createStream('tsAtEnd');
            const secondLargest = await getSecondLargestStream(stream);
            expect(secondLargest).toEqual(4);
        })
    })
    describe('Three sized arrays', () => {
        test('Second large at the end (6,4,5)', async () => {
            const stream = createStream('thsAtEnd');
            const secondLargest = await getSecondLargestStream(stream);
            expect(secondLargest).toEqual(5);
        })

        test('Second large at the beginning (6,4,8)', async () => {
            const stream = createStream('thsAtBeg');
            const secondLargest = await getSecondLargestStream(stream);
            expect(secondLargest).toEqual(6);
        })

        test('Second large in the middle (7,6,4)', async () => {
            const stream = createStream('thsInMid');
            const secondLargest = await getSecondLargestStream(stream);
            expect(secondLargest).toEqual(6);
        })
    })
})
'use strict';
const { remainingFish } = require('./exercise22');

test('Basic test', () => {
    const fish = [[2, 'L'], [6, 'R'], [1, 'R'], [7, 'L'], [5, 'L'], [4, 'R'], [3, 'L']];
    const finalFish = remainingFish(fish);

    expect(finalFish).toBe(4);
})

test('Same direction', () => {
    let fish = [[2, 'L'], [6, 'L'], [1, 'L'], [7, 'L'], [5, 'L'], [4, 'L'], [3, 'L']];
    let finalFish = remainingFish(fish);
    expect(finalFish).toBe(7);

    fish = [[2, 'R'], [6, 'R'], [1, 'R'], [7, 'R'], [5, 'R'], [4, 'R'], [3, 'R']];
    finalFish = remainingFish(fish);
    expect(finalFish).toBe(7);

    fish = [[2, 'L'], [6, 'L'], [1, 'L'], [7, 'L'], [5, 'R'], [4, 'R'], [3, 'R']];
    finalFish = remainingFish(fish);
    expect(finalFish).toBe(7);

    fish = [[20, 'R'], [6, 'R'], [1, 'R'], [7, 'L'], [5, 'L'], [4, 'L'], [10, 'L']];
    finalFish = remainingFish(fish);
    expect(finalFish).toBe(1);
})

test('Diverse tests', () => {
    let fish = [[2, 'L'], [8, 'R'], [1, 'R'], [7, 'L'], [5, 'L'], [4, 'R'], [3, 'L']];
    let finalFish = remainingFish(fish);
    expect(finalFish).toBe(3);

    fish = [[20, 'R'], [8, 'L'], [1, 'L'], [7, 'L'], [5, 'L'], [4, 'L'], [3, 'L']];
    finalFish = remainingFish(fish);
    expect(finalFish).toBe(1);

    fish = [[20, 'R'], [8, 'R'], [1, 'R'], [7, 'R'], [5, 'R'], [4, 'R'], [30, 'L']];
    finalFish = remainingFish(fish);
    expect(finalFish).toBe(1);

    fish = [[20, 'R'], [8, 'L'], [1, 'R'], [7, 'L'], [5, 'R'], [4, 'L'], [30, 'R']];
    finalFish = remainingFish(fish);
    expect(finalFish).toBe(3);
})

test('Few fish', () => {
    let fish = [];
    let finalFish = remainingFish(fish);
    expect(finalFish).toBe(0);

    fish = [[1, 'L']];
    finalFish = remainingFish(fish);
    expect(finalFish).toBe(1);

    fish = [[1, 'R']];
    finalFish = remainingFish(fish);
    expect(finalFish).toBe(1);

    fish = [[1, 'L'], [2, 'R']];
    finalFish = remainingFish(fish);
    expect(finalFish).toBe(2);

    fish = [[1, 'R'], [2, 'L']];
    finalFish = remainingFish(fish);
    expect(finalFish).toBe(1);

    fish = [[10, 'R'], [9, 'L']];
    finalFish = remainingFish(fish);
    expect(finalFish).toBe(1);
})
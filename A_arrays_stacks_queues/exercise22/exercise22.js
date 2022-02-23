'use strict';

//const fish = [[2, 'L'], [6, 'R'], [1, 'R'], [7, 'L'], [5, 'L'], [4, 'R'], [3, 'L']];
// const fish = [[2, 'L'], [8, 'R'], [1, 'R'], [7, 'L'], [5, 'L'], [4, 'R'], [3, 'L']];
// const finalFish = remainingFish(fish);
// console.log(finalFish);

function remainingFish(fish) {
    const initialNumber = fish.length;
    const rightFish = [];
    let eaten = 0;

    for (let f of fish) {
        if (f[1] === 'R') {
            rightFish.push(f[0]);
        } else if (f[1] === 'L') {
            while (rightFish.length > 0) {
                let currentFish = rightFish[rightFish.length - 1];
                eaten += 1;
                if (currentFish > f[0]) {
                    break;
                } else {
                    rightFish.pop();
                }
            }
        }
    }
    return initialNumber - eaten;
}

module.exports = { remainingFish };
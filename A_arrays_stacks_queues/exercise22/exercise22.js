'use strict';

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
'use strict';

function countPassings(carSet) {
    let countRight = 0;
    let countPass = 0;

    for (let car of carSet) {
        if (car === 'R') {
            countRight += 1;
        } else if (car === 'L') {
            countPass += countRight;
        }
    }
    return countPass;
}

module.exports = { countPassings };
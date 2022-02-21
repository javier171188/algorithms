'use strict';
//https://www.geeksforgeeks.org/efficient-method-to-store-a-lower-triangular-matrix-using-row-major-mapping/

class triangularArray {
    constructor(numberOfRows) {
        if (!numberOfRows) numberOfRows = 0;
        this.numberOfRows = numberOfRows;
        this.dimension = 0.5 * numberOfRows * (numberOfRows + 1);
        this.elements = new Array(this.dimension);
    }

    set(r, c, value) {
        if (c > r) [c, r] = [r, c];
        let index = r * (r + 1) / 2 + c;

        if (index > this.dimension - 1) {
            console.log('Out of borders');
            return;
        }
        this.elements[index] = value;
    }

    get(r, c) {
        if (c > r) [c, r] = [r, c];
        let index = r * (r + 1) / 2 + c;

        if (index > this.dimension - 1) {
            console.log('Out of borders');
            return;
        }
        return this.elements[index];
    }
}

module.exports = { triangularArray };


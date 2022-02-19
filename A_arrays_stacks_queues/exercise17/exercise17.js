'use strict';
//https://www.geeksforgeeks.org/efficient-method-to-store-a-lower-triangular-matrix-using-row-major-mapping/

class triangularArray {
    constructor(dimension) {
        //TODO: check dim
        this.dimension = dimension;
        this.elements = new Array(dimension);
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
        return this.elements[index];
    }

}

const data = new triangularArray(10);
data.set(0, 0, 1);
data.set(1, 0, 2);
data.set(1, 1, 3);
data.set(2, 0, 4);
data.set(2, 1, 5);
data.set(2, 2, 6);
data.set(3, 0, 7);
data.set(1, 3, 8);
data.set(3, 2, 9);
data.set(3, 3, 10);

console.log(data);

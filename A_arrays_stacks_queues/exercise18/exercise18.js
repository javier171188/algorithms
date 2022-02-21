'use strict';

class SparseMatrix {
    constructor(matrix) {
        this.values = {};
        this.numberOfRows = matrix.length;
        this.numberOfCols = matrix[0].length;

        for (let r = 0; r < matrix.length; r++) {
            for (let c = 0; c < matrix[0].length; c++) {
                if (matrix[r][c] !== 0) {
                    let row = this.values[r];
                    if (row) {
                        row[c] = matrix[r][c];
                    } else {
                        this.values[r] = {};
                        this.values[r][c] = matrix[r][c];
                    }
                }
            }
        }
    }

    get(row, col) {
        if (row > this.numberOfRows - 1 || col > this.numberOfCols - 1) {
            console.log('Coordinates out of range');
            return;
        }

        let fullRow = this.values[row];
        if (!fullRow) return 0;
        return this.values[row][col] || 0;
    }
}

const A = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 110, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 42, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 69, 0, 0, 0]]

const sparseMatrix = new SparseMatrix(A);

const nonExisting = sparseMatrix.get(10, 10);
const zeroValue = sparseMatrix.get(2, 4);
const nonZero = sparseMatrix.get(1, 10);

console.log(nonExisting);
console.log(zeroValue);
console.log(nonZero);
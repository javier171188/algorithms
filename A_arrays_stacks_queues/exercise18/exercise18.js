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

    getValue(row, col) {
        if (row > this.numberOfRows - 1 || col > this.numberOfCols - 1) {
            console.log('Coordinates out of range');
            return;
        }

        let fullRow = this.values[row];
        if (!fullRow) return 0;
        return this.values[row][col] || 0;
    }
    setValue(row, col, value) {
        if (row > this.numberOfRows - 1 || col > this.numberOfCols - 1) {
            console.log('Coordinates out of range');
            return;
        }

        let fullRow = this.values[row];
        if (value == 0) {
            if (fullRow) {
                delete this.values[row];
            }
            return;
        }

        if (!fullRow) {
            this.values[row] = {};
            this.values[row][col] = value;
        } else {
            this.values[row][col] = value;
        }
    }
}

module.exports = { SparseMatrix };

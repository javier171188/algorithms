'use strict';

function isSameLevel(tree, value1, value2) {
    let currentValues;
    let currentBranches = [];

    for (let branch in tree) {
        if (branch !== 'value') {
            currentBranches.push(tree[branch])
        }
    }

    while (currentBranches.length > 0) {
        currentValues = currentBranches.map(b => b.value);
        if (value1 === value2) {
            currentValues = currentValues.filter(v => v === value1);
            if (currentValues.length > 1) return true;
        } else {
            if (currentValues.includes(value1) && currentValues.includes(value2)) {
                return true;
            }
        }

        let newBranches = [];
        currentBranches.forEach(b => {
            for (let branch in b) {
                if (branch !== 'value') {
                    newBranches.push(b[branch]);
                }
            }
        })
        currentBranches = newBranches;
    }
    return false;
}

module.exports = isSameLevel;

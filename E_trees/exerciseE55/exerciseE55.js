'use strict';

function isMirrored(tree) {
    const values = [];
    exploreTree(tree, values);
    const oppositeValues = [...values];
    oppositeValues.reverse();
    for (let i = 0; i < values.length; i++) {
        if (values[i] !== oppositeValues[i]) return false;
    }
    return true;
}

function exploreTree(tree, values) {
    if (!tree || tree.value === undefined) return;

    exploreTree(tree.left, values);
    values.push(tree.value);
    exploreTree(tree.right, values);
}

module.exports = isMirrored;

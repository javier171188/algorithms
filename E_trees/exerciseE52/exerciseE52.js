'use strict';

function topToBottom(tree) {
    if (!tree.value) return;
    const queue = [tree];

    while (queue.length > 0) {
        let currentNode = queue.shift();
        console.log(currentNode.value);
        for (let branch in currentNode) {
            if (branch !== 'value') {
                queue.push(currentNode[branch]);
            }
        }
    }
}

function leftToRight(tree) {
    if (!tree || !tree.value) return;

    leftToRight(tree["branch1"]);
    console.log(tree.value);
    leftToRight(tree["branch2"]);
}

module.exports = { topToBottom, leftToRight };

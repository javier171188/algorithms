'use strict';

const tree = {
    value: 1,
    branch1: {
        value: 2,
        branch1: { value: 5 },
        branch2: { value: 6 }
    },
    branch2: {
        value: 4,
        branch1: {
            value: 8,
            branch1: { value: 11 },
            branch2: { value: 12 }
        },
        branch2: {
            value: 9,
            branch1: {
                value: 10,
                branch1: {
                    value: 13,
                    branch1: { value: 14 }
                },
                branch2: { value: 15 }
            }
        }
    }
}

topToBottom(tree);

function topToBottom(tree) {
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

}

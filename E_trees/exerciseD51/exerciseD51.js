'use strict';

const tree = {
    value: 1,
    branch1: {
        value: 2,
        branch1: { value: 5 },
        branch2: { value: 6 }
    },
    branch2: {
        value: 3,
        branch1: { value: 7 }
    },
    branch3: {
        value: 4,
        branch1: { value: 8 },
        branch2: {
            value: 9,
            branch: { value: 10 }
        }
    }
}
const value1 = 8;
const value2 = 10;

const lca = lowestCommonAncestor(value1, value2, tree);
console.log(lca.value);

function lowestCommonAncestor(value1, value2, tree) {
    let commonAncestor;

    exploreNodes(tree);

    function exploreNodes(tree) {
        const hasValue1 = containsNode(value1, tree);
        const hasValue2 = containsNode(value2, tree);

        if (hasValue1 && hasValue2) {
            commonAncestor = tree;
            for (let branch in tree) {
                if (branch !== 'value') {
                    exploreNodes(tree[branch]);
                }
            }
        }
    }

    return commonAncestor;
}

function containsNode(value, tree) {
    if (tree.value === value) return true;

    for (let branch in tree) {
        if (branch !== 'value') {
            let contains = containsNode(value, tree[branch]);
            if (contains) return true;
        }
    }
    return false;
}
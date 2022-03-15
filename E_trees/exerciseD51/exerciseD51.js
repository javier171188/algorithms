'use strict';

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

module.exports = lowestCommonAncestor;

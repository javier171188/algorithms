'use strict';
// let tree = {
//     value: 0,
//     branch1: {
//         value: 1
//     },
//     branch2: {
//         value: 2,
//         branch1: { value: 1 },
//         branch2: {
//             value: 5,
//             branch1: { value: 3 },
//             branch2: { value: 5, branch1: { value: 6 } },
//             branch3: { value: 9 }
//         }
//     },
//     branch3: { value: 3, branch1: { value: 0 } },
//     branch4: { value: 5 },
//     branch5: {
//         value: 7,
//         branch1: {
//             value: 3,
//             branch1: { value: 3 },
//             branch2: {
//                 value: 0,
//                 branch1: { value: 9 },
//                 branch2: { value: 4 }
//             }
//         }
//     }
// }

// isSameLevel(tree, 0, 1);

function isSameLevel(tree, value1, value2) {
    let currentValues;
    let currentBranches = [];

    for (let branch in tree) {
        if (branch !== 'value') {
            currentBranches.push(tree[branch])
        }
    }
    //console.log(currentBranches);
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
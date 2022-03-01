'use strict';

const string1 = 'a';
const string2 = 'a';

const isAPermutation = isPermutation(string1, string2);
console.log(isAPermutation);

function isPermutation(string1, string2) {
    if (string1.length < 1 && string2.length < 1) return true;
    if (string2.length < 1) return false;
    let permutation = '';
    let permuted = false;


    getPermutations(string1);

    return permuted;
    function getPermutations(word) {
        if (word.length < 2) return;
        if (word.length === 2) {
            if (permutation + word[0] + word[1] === string2 ||
                permutation + word[1] + word[0] === string2) {
                permuted = true;
            }
        }

        for (let i = 0; i < word.length; i++) {
            let tempPerm = permutation;
            permutation += word[i];
            getPermutations(word.slice(0, i) + word.slice(i + 1,));
            permutation = tempPerm;
            if (permuted) return;
        }
    }
}

module.exports = isPermutation; 
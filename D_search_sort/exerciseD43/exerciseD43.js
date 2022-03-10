'use strict';

const string1 = 'X';
const string2 = 'GXTXAYB';

const substring = findLCS(string1, string2);
console.log(substring);

function findLCS(string1, string2) {
    let lcs = '';

    findSubsequences(string1, string2);
    return lcs;

    function findSubsequences(string1, string2) {
        if (string1.length < 1 || string2.length < 1) return [''];

        if (string1.length === 1) {
            console.log('here')
            let index = string2.indexOf(string1);
            if (index >= 0) {
                return [string1];
            }
            return [''];
        }

        let currentSubSequences = [];
        for (let i = 0; i < string1.length; i++) {
            let index = string2.indexOf(string1[i]);
            if (index >= 0) {
                let prevSubSequences = findSubsequences(
                    string1.slice(i + 1),
                    string2.slice(index + 1)
                ).map(s => string1[i] + s);
                ////console.log(currentSubSequences);

                prevSubSequences.forEach(s => {
                    if (s.length > lcs.length) {
                        lcs = s;
                    }
                });
                currentSubSequences = currentSubSequences.concat(prevSubSequences);
                //console.log(string1, string2, currentSubSequences);
            }
        }
        //console.log(currentSubSequences);
        return currentSubSequences;
    }
}

module.exports = findLCS;
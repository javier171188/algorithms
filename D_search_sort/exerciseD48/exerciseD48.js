'use strict';

//const S = 'avsfvasbdackldabcd';
const S = 'ravsfvsbdckldbcd';
const T = 'abcd';

const subString = findSubstring(S, T);
console.log(subString);

function findSubstring(S, T) {
    const stringLength = S.length;
    let minLength = T.length;
    if (stringLength < minLength) return undefined;

    //let smallestRun = S.slice(0, minLength);
    while (minLength <= stringLength) {
        for (let i = 0; i <= stringLength - minLength; i++) {
            let subString = S.slice(i, i + minLength);
            let contains = checkContainsAll(subString, T);
            //console.log(contains);
            if (contains) {
                return subString;
            }
            //console.log(subString);
        }
        minLength += 1;
    }


    return undefined;
}

function checkContainsAll(subString, T) {
    for (let l of T) {
        let contains = subString.includes(l);
        if (!contains) return false
    }
    return true;
}
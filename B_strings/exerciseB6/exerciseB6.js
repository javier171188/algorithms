'use strict';

function reverseOddWords(string) {
    let words = string.split(' ');
    words = words.map((w, i) => {
        if (i % 2 !== 0) return w;
        else return reverseString(w);
    })
    const reversed = words.join(' ');
    return reversed;

    function reverseString(s) {
        let returningString = '';
        for (let i = s.length - 1; i >= 0; i--) {
            returningString += s[i];
        }
        return returningString;
    }
}

module.exports = reverseOddWords;
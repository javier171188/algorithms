'use strict';
//https://en.wikipedia.org/wiki/Levenshtein_distance

function distanceLevenshtein(string1, string2) {
    if (string1.length === 0) return string2.length;
    if (string2.length === 0) return string1.length;

    if (string1[0] === string2[0]) {
        return distanceLevenshtein(string1.slice(1,), string2.slice(1,));
    }

    while (string1[0] === string2[0]) {
        string1 = string1.slice(1,);
        string2 = string2.slice(1,);
    }

    const option1 = distanceLevenshtein(string1, string2.slice(1,));
    const option2 = distanceLevenshtein(string1.slice(1,), string2);
    const option3 = distanceLevenshtein(string1.slice(1,), string2.slice(1,));

    return 1 + Math.min(option1, option2, option3);
}

module.exports = { distanceLevenshtein };
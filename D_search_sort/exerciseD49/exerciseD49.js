'use strict';

// const input = "O+ ? O";
const input = "AB+ ? O+";


const COMBINATIONS = {
    'AA': 'A', 'AB': 'AB', 'AO': 'A',
    'BB': 'B', 'BO': 'B', 'OO': 'O',
    'BA': 'AB', 'OA': 'A', 'OB': 'B'
};

const ALLELES = {
    'A': ['A', 'O'],
    'B': ['B', 'O'],
    'AB': ['A', 'B'],
    'O': ['O']
}
// const FACTOR = {
//     '+': ['+', '-'],
//     '-': ['-']
// }

getCombinations(input);

function getCombinations(input) {
    const people = input.split(' ');
    const parent1 = people[0];
    const parent2 = people[1];
    const child = people[2];

    //console.log(people);
    if (child === '?') {
        const allele1 = parent1.slice(0, -1);
        const factor1 = parent1[parent1.length - 1];

        const allele2 = parent2.slice(0, -1);
        const factor2 = parent2[parent2.length - 1];

        let possAllelesSet = new Set();
        for (let a1 of ALLELES[allele1]) {
            for (let a2 of ALLELES[allele2]) {
                possAllelesSet.add(COMBINATIONS[a1 + a2]);
            }
        }
        let possAllelesArr = Array.from(possAllelesSet);
        let possFactors;

        if (factor1 == '+' || factor2 == '+') {
            possFactors = ['+', '-'];
        } else {
            possFactors = ['-'];
        }

        let results = [];
        for (let a of possAllelesArr) {
            for (let f of possFactors) {
                results.push(a + f);
            }
        }
        let childTypes;
        if (results.length > 1) {
            childTypes = `{${results.join(',')}}`;
        } else {
            childTypes = results[0];
        }

        console.log(`${parent1} ${parent2} ${childTypes}`);
    } else {

    }
}

module.exports = getCombinations;

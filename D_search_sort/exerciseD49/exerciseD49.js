'use strict';
//https://onlinejudge.org/index.php?option=onlinejudge&Itemid=99999999&category=254&page=show_problem&problem=3502

const COMBINATIONS = {
    'AA': 'A', 'AB': 'AB', 'AO': 'A',
    'BB': 'B', 'BO': 'B', 'OO': 'O',
    'BA': 'AB', 'OA': 'A', 'OB': 'B'
};

const COMBINATIONS_FACTS = { '++': '+', '--': '-', '+-': '+', '-+': '+' };

const ALLELES = {
    'A': ['A', 'O'],
    'B': ['B', 'O'],
    'AB': ['A', 'B'],
    'O': ['O']
};

const FACTOR = {
    '+': ['+', '-'],
    '-': ['-']
};

function getCombinations(input) {
    const people = input.split(' ');
    const parent1 = people[0];
    const parent2 = people[1];
    const child = people[2];

    let results = [];
    let resultTypes;

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

        for (let a of possAllelesArr) {
            for (let f of possFactors) {
                results.push(a + f);
            }
        }
    } else {
        const parent = parent1 === '?' ? parent2 : parent1;

        const alleleP = parent.slice(0, -1);
        const factorP = parent[parent.length - 1];

        const parentAll = ALLELES[alleleP];
        const parentFac = FACTOR[factorP];

        for (let a of parentAll) {
            for (let f of parentFac) {
                for (let unAll in ALLELES) {
                    for (let pAl of ALLELES[unAll]) {
                        let resultingAlleles = a + pAl;
                        for (let unFa in FACTOR) {
                            for (let pF of FACTOR[unFa]) {
                                let resultingFact = f + pF;
                                let resultingType = COMBINATIONS[resultingAlleles] + COMBINATIONS_FACTS[resultingFact];
                                if (resultingType === child && !results.includes(unAll + unFa)) {
                                    results.push(unAll + unFa);
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    if (results.length > 1) {
        resultTypes = `{${results.join(',')}}`;
    } else {
        resultTypes = results[0];
    }
    if (!resultTypes) resultTypes = 'IMPOSSIBLE';
    let resultingString = `${parent1 === '?' ? resultTypes : parent1} ${parent2 === '?' ? resultTypes : parent2} ${child === '?' ? resultTypes : child}`;
    console.log(resultingString);
}

module.exports = getCombinations;

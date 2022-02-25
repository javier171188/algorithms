'use strict';
const seedrandom = require('seedrandom');

function getRandomNumberFunction(seed) {
    if (seed) {
        Math.random = seedrandom(seed);
    }
    let upperLimit = 50;

    function returnNumber() {
        upperLimit += 1;
        return upperLimit * Math.random();
    }
    return returnNumber;
}

function hotPotato(players, seed) {
    if (players.length < 2) throw new Error('There must be at least two players.')
    const checkPlayers = new Set(players);
    if (checkPlayers.size !== players.length) {
        throw new Error('Every player can be at only one position of the list.')
    }
    const queue = [];
    const eliminated = [];
    for (let p of players) {
        queue.push(p);
    }

    let generateNumber = getRandomNumberFunction(seed);
    let randomNumber = generateNumber();

    while (queue.length > 1) {
        let currentPlayer = queue.shift();
        if (randomNumber < 60) {
            queue.push(currentPlayer);
        } else {
            if (seed) seed = seed + '1';
            generateNumber = getRandomNumberFunction(seed);
            eliminated.push(currentPlayer);
        }
        randomNumber = generateNumber();
    }
    return { winner: queue[0], eliminated };
}

module.exports = { hotPotato };
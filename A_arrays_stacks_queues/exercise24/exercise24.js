'use strict';
const seedrandom = require('seedrandom');

// const players = [];

// const player = hotPotato(players, 'seed');
// console.log(player);

function getRandomNumber(seed) {
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
    if (players.length < 1) throw new Error('There must be at least one player.')
    const queue = [];
    for (let p of players) {
        queue.push(p);
    }

    const generateNumber = getRandomNumber(seed);

    let randomNumber = generateNumber();

    let currentPlayer;
    while (randomNumber <= 52) {
        // console.log(randomNumber);
        //console.log(Math.random())
        currentPlayer = queue.shift();
        queue.push(currentPlayer);
        randomNumber = generateNumber();
        //console.log(currentPlayer);
    }
    return currentPlayer;
}

module.exports = { hotPotato };
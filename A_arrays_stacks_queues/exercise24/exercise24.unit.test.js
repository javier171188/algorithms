'use strict';
const { hotPotato } = require('./exercise24');

test('Basic test', () => {
    const players = ['1', '2', '3', '4'];
    const player = hotPotato(players);

    expect(players).toContain(player);
})

test('Diverse tests', () => {
    let players = ['1', '2', '3', '4'];
    let player = hotPotato(players, 'seed');

    expect(player).toEqual('4')
})

test('Few players', () => {
    let players = [];
    let player;
    let throwFunction = () => {
        hotPotato(players);
    }
    expect(throwFunction).toThrow(Error);
    expect(throwFunction).toThrow('There must be at least one player.');

    players = ['A'];
    player = hotPotato(players);
    expect(player).toEqual('A');

    players = ['A', 'B'];
    player = hotPotato(players, '1');
    expect(player).toEqual('A');

    player = hotPotato(players, 'seed');
    expect(player).toEqual('B');
})
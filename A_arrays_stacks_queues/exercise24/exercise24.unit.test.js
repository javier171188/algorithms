'use strict';
const { hotPotato } = require('./exercise24');

test('Basic test', () => {
    const players = ['1', '2', '3', '4'];
    const results = hotPotato(players);

    expect(players).toContain(results.winner);
    expect(results.eliminated).not.toContain(results.winner);
})

test('Diverse tests', () => {
    let players = ['1', '2', '3', '4'];
    let results = hotPotato(players, 'seed');
    expect(results.winner).toEqual('3');
    expect(results.eliminated).toEqual(['4', '1', '2']);

    players = ['1', '2', '3', '4', '5', '6'];
    results = hotPotato(players, 'seed');
    expect(results.winner).toEqual('2');
    expect(results.eliminated).toEqual(['4', '1', '5', '3', '6']);

    results = hotPotato(players, '1');
    expect(results.winner).toEqual('3');
    expect(results.eliminated).toEqual(['5', '1', '2', '4', '6']);
})

test('No repeated players', () => {
    let players = ['1', '2', '3', '4', '2'];
    const throwFunction = () => {
        hotPotato(players, 'seed');
    }
    expect(throwFunction).toThrow(Error);
    expect(throwFunction).toThrow('Every player can be at only one position of the list.');
})

test('Few players', () => {
    let players = [];
    let results;
    let throwFunction = () => {
        hotPotato(players);
    }
    expect(throwFunction).toThrow(Error);
    expect(throwFunction).toThrow('There must be at least two players.');

    players = ['A'];
    expect(throwFunction).toThrow(Error);
    expect(throwFunction).toThrow('There must be at least two players.');

    players = ['A', 'B'];
    results = hotPotato(players, 'seed');
    expect(results).toEqual({
        winner: 'A',
        eliminated: ['B']
    });

    results = hotPotato(players, '1');
    expect(results).toEqual({
        winner: 'B',
        eliminated: ['A']
    });
})
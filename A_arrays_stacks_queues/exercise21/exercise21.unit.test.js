'use strict';

const { countPassings } = require('./exercise21');

test('Basic test', () => {
    const cars = ['R', 'L', 'R', 'R', 'L', 'L', 'R'];

    const passings = countPassings(cars);
    expect(passings).toBe(7);
})

test('No passing', () => {
    const cars = ['L', 'L', 'L', 'R', 'R', 'R', 'R'];
    const passings = countPassings(cars);
    expect(passings).toBe(0);
})

test('All passing', () => {
    const cars = ['R', 'R', 'R', 'L', 'L', 'L', 'L'];
    const passings = countPassings(cars);
    expect(passings).toBe(12);
})

test('One vs all', () => {
    let cars = ['R', 'R', 'R', 'R', 'R', 'R', 'L'];
    let passings = countPassings(cars);
    expect(passings).toBe(6);

    cars = ['R', 'L', 'L', 'L', 'L', 'L', 'L'];
    passings = countPassings(cars);
    expect(passings).toBe(6);
})

test('One direction', () => {
    let cars = ['R', 'R', 'R', 'R', 'R', 'R', 'R'];
    let passings = countPassings(cars);
    expect(passings).toBe(0);

    cars = ['L', 'L', 'L', 'L', 'L', 'L', 'L'];
    passings = countPassings(cars);
    expect(passings).toBe(0);
})

test('Few cars', () => {
    let cars = [];
    let passing = countPassings(cars);
    expect(passing).toBe(0);

    cars = ['R'];
    passing = countPassings(cars);
    expect(passing).toBe(0);

    cars = ['L'];
    passing = countPassings(cars);
    expect(passing).toBe(0);

    cars = ['L', 'R'];
    passing = countPassings(cars);
    expect(passing).toBe(0);

    cars = ['R', 'L'];
    passing = countPassings(cars);
    expect(passing).toBe(1);
})
'use strict';
const { changeBase } = require('./exercise23');

test('Basic test', () => {
    const baseTenNumber = 10;
    const newBase = 2;
    const newBaseNumber = changeBase(baseTenNumber, newBase);

    expect(newBaseNumber).toEqual("1010");
})

test('Diverse tests', () => {
    let baseTenNumber = 25;
    let newBase = 14;
    let newBaseNumber = changeBase(baseTenNumber, newBase);
    expect(newBaseNumber).toEqual('1B');

    baseTenNumber = 2535;
    newBase = 16;
    newBaseNumber = changeBase(baseTenNumber, newBase);
    expect(newBaseNumber).toEqual("9E7");

    baseTenNumber = 43;
    newBase = 3;
    newBaseNumber = changeBase(baseTenNumber, newBase);
    expect(newBaseNumber).toEqual("1121");

    baseTenNumber = 76;
    newBase = 12;
    newBaseNumber = changeBase(baseTenNumber, newBase);
    expect(newBaseNumber).toEqual("64");

    baseTenNumber = 12;
    newBase = 8;
    newBaseNumber = changeBase(baseTenNumber, newBase);
    expect(newBaseNumber).toEqual("14");

    baseTenNumber = 10;
    newBase = 10;
    newBaseNumber = changeBase(baseTenNumber, newBase);
    expect(newBaseNumber).toEqual("10");

    baseTenNumber = 12;
    newBase = 10;
    newBaseNumber = changeBase(baseTenNumber, newBase);
    expect(newBaseNumber).toEqual("12");

    baseTenNumber = 1;
    newBase = 10;
    newBaseNumber = changeBase(baseTenNumber, newBase);
    expect(newBaseNumber).toEqual("1");

    baseTenNumber = 712;
    newBase = 10;
    newBaseNumber = changeBase(baseTenNumber, newBase);
    expect(newBaseNumber).toEqual("712");

    baseTenNumber = 35;
    newBase = 36;
    newBaseNumber = changeBase(baseTenNumber, newBase);
    expect(newBaseNumber).toEqual("Z");

    baseTenNumber = 36;
    newBase = 36;
    newBaseNumber = changeBase(baseTenNumber, newBase);
    expect(newBaseNumber).toEqual("10");

    baseTenNumber = 1;
    newBase = 2;
    newBaseNumber = changeBase(baseTenNumber, newBase);
    expect(newBaseNumber).toEqual("1");

    baseTenNumber = 2;
    newBase = 2;
    newBaseNumber = changeBase(baseTenNumber, newBase);
    expect(newBaseNumber).toEqual("10");
})


test('Negative numbers', () => {
    let baseTenNumber = -10;
    let newBase = 2;
    let newBaseNumber = changeBase(baseTenNumber, newBase);
    expect(newBaseNumber).toEqual("-1010");

    baseTenNumber = -12;
    newBase = 15;
    newBaseNumber = changeBase(baseTenNumber, newBase);
    expect(newBaseNumber).toEqual("-C");

    baseTenNumber = -23;
    newBase = 13;
    newBaseNumber = changeBase(baseTenNumber, newBase);
    expect(newBaseNumber).toEqual("-1A");

    baseTenNumber = -8;
    newBase = 4;
    newBaseNumber = changeBase(baseTenNumber, newBase);
    expect(newBaseNumber).toEqual("-20");
})

test('Invalid arguments', () => {
    let baseTenNumber = 'A';
    let newBase = 2;

    let throwingFunction = () => {
        changeBase(baseTenNumber, newBase);
    }

    expect(throwingFunction).toThrow(TypeError);
    expect(throwingFunction).toThrow('The type of the base and the number to be transformed must be "number".');

    baseTenNumber = 10;
    newBase = '2';
    expect(throwingFunction).toThrow(TypeError);
    expect(throwingFunction).toThrow('The type of the base and the number to be transformed must be "number".');

    baseTenNumber = 10;
    newBase = 37;
    expect(throwingFunction).toThrow(RangeError);
    expect(throwingFunction).toThrow('The maximum base is 36.');

    baseTenNumber = 10;
    newBase = 1;
    expect(throwingFunction).toThrow(RangeError);
    expect(throwingFunction).toThrow('The minimum base is 2.');
})
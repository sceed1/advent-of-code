"use strict";
exports.__esModule = true;
exports.realMonkeys = exports.testMonkeys = void 0;
exports.testMonkeys = [
    {
        items: [79, 98],
        operation: function (itemWorryLevel) { return itemWorryLevel * 19; },
        testFunction: function (itemWorryLevel, divisor) { return itemWorryLevel % divisor === 0 ? 2 : 3; },
        inspectedItems: 0,
        divisor: 23
    },
    {
        items: [54, 65, 75, 74],
        operation: function (itemWorryLevel) { return itemWorryLevel + 6; },
        testFunction: function (itemWorryLevel, divisor) { return itemWorryLevel % divisor === 0 ? 2 : 0; },
        inspectedItems: 0,
        divisor: 19
    },
    {
        items: [79, 60, 97],
        operation: function (itemWorryLevel) { return itemWorryLevel * itemWorryLevel; },
        testFunction: function (itemWorryLevel, divisor) { return itemWorryLevel % divisor === 0 ? 1 : 3; },
        inspectedItems: 0,
        divisor: 13
    },
    {
        items: [74],
        operation: function (itemWorryLevel) { return itemWorryLevel + 3; },
        testFunction: function (itemWorryLevel, divisor) { return itemWorryLevel % divisor === 0 ? 0 : 1; },
        inspectedItems: 0,
        divisor: 17
    },
];
exports.realMonkeys = [
    {
        items: [54, 82, 90, 88, 86, 54],
        operation: function (itemWorryLevel) { return itemWorryLevel * 7; },
        testFunction: function (itemWorryLevel, divisor) { return itemWorryLevel % divisor === 0 ? 2 : 6; },
        inspectedItems: 0,
        divisor: 11
    },
    {
        items: [91, 65],
        operation: function (itemWorryLevel) { return itemWorryLevel * 13; },
        testFunction: function (itemWorryLevel, divisor) { return itemWorryLevel % divisor === 0 ? 7 : 4; },
        inspectedItems: 0,
        divisor: 5
    },
    {
        items: [62, 54, 57, 92, 83, 63, 63],
        operation: function (itemWorryLevel) { return itemWorryLevel + 1; },
        testFunction: function (itemWorryLevel, divisor) { return itemWorryLevel % divisor === 0 ? 1 : 7; },
        inspectedItems: 0,
        divisor: 7
    },
    {
        items: [67, 72, 68],
        operation: function (itemWorryLevel) { return itemWorryLevel * itemWorryLevel; },
        testFunction: function (itemWorryLevel, divisor) { return itemWorryLevel % divisor === 0 ? 0 : 6; },
        inspectedItems: 0,
        divisor: 2
    },
    {
        items: [68, 89, 90, 86, 84, 57, 72, 84],
        operation: function (itemWorryLevel) { return itemWorryLevel + 7; },
        testFunction: function (itemWorryLevel, divisor) { return itemWorryLevel % divisor === 0 ? 3 : 5; },
        inspectedItems: 0,
        divisor: 17
    },
    {
        items: [79, 83, 64, 58],
        operation: function (itemWorryLevel) { return itemWorryLevel + 6; },
        testFunction: function (itemWorryLevel, divisor) { return itemWorryLevel % divisor === 0 ? 3 : 0; },
        inspectedItems: 0,
        divisor: 13
    },
    {
        items: [96, 72, 89, 70, 88],
        operation: function (itemWorryLevel) { return itemWorryLevel + 4; },
        testFunction: function (itemWorryLevel, divisor) { return itemWorryLevel % divisor === 0 ? 1 : 2; },
        inspectedItems: 0,
        divisor: 3
    },
    {
        items: [79],
        operation: function (itemWorryLevel) { return itemWorryLevel + 8; },
        testFunction: function (itemWorryLevel, divisor) { return itemWorryLevel % divisor === 0 ? 4 : 5; },
        inspectedItems: 0,
        divisor: 19
    },
];

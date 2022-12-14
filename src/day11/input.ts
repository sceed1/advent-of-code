export interface Monkey {
    items: number [],
    operation: (itemWorryLevel: number) => number,
    testFunction: (itemWorryLevel: number, divisor: number) => number,
    inspectedItems: number;
    divisor: number;
}

export const testMonkeys: Monkey[] = [
    {
        items: [79, 98],
        operation: (itemWorryLevel) => itemWorryLevel * 19,
        testFunction: (itemWorryLevel, divisor) => itemWorryLevel % divisor === 0 ? 2 : 3,
        inspectedItems: 0,
        divisor: 23,
    },
    {
        items: [54, 65, 75, 74],
        operation: (itemWorryLevel) => itemWorryLevel + 6,
        testFunction: (itemWorryLevel, divisor) => itemWorryLevel % divisor === 0 ? 2 : 0,
        inspectedItems: 0,
        divisor: 19,
    },
    {
        items: [79, 60, 97],
        operation: (itemWorryLevel) => itemWorryLevel * itemWorryLevel,
        testFunction: (itemWorryLevel, divisor) => itemWorryLevel % divisor === 0 ? 1 : 3,
        inspectedItems: 0,
        divisor: 13,
    },
    {
        items: [74],
        operation: (itemWorryLevel) => itemWorryLevel + 3,
        testFunction: (itemWorryLevel, divisor) => itemWorryLevel % divisor === 0 ? 0 : 1,
        inspectedItems: 0,
        divisor: 17,
    },
]

export const realMonkeys: Monkey[] = [
    {
        items: [54, 82, 90, 88, 86, 54],
        operation: (itemWorryLevel) => itemWorryLevel * 7,
        testFunction: (itemWorryLevel, divisor) => itemWorryLevel % divisor === 0 ? 2 : 6,
        inspectedItems: 0,
        divisor: 11,
    },
    {
        items: [91, 65],
        operation: (itemWorryLevel) => itemWorryLevel * 13,
        testFunction: (itemWorryLevel, divisor) => itemWorryLevel % divisor === 0 ? 7 : 4,
        inspectedItems: 0,
        divisor: 5,
    },
    {
        items: [62, 54, 57, 92, 83, 63, 63],
        operation: (itemWorryLevel) => itemWorryLevel + 1,
        testFunction: (itemWorryLevel, divisor) => itemWorryLevel % divisor === 0 ? 1 : 7,
        inspectedItems: 0,
        divisor: 7,
    },
    {
        items: [67, 72, 68],
        operation: (itemWorryLevel) => itemWorryLevel * itemWorryLevel,
        testFunction: (itemWorryLevel, divisor) => itemWorryLevel % divisor === 0 ? 0 : 6,
        inspectedItems: 0,
        divisor: 2,
    },
    {
        items: [68, 89, 90, 86, 84, 57, 72, 84],
        operation: (itemWorryLevel) => itemWorryLevel + 7,
        testFunction: (itemWorryLevel, divisor) => itemWorryLevel % divisor === 0 ? 3 : 5,
        inspectedItems: 0,
        divisor: 17,
    },
    {
        items: [79, 83, 64, 58],
        operation: (itemWorryLevel) => itemWorryLevel + 6,
        testFunction: (itemWorryLevel, divisor) => itemWorryLevel % divisor === 0 ? 3 : 0,
        inspectedItems: 0,
        divisor: 13,
    },
    {
        items: [96, 72, 89, 70, 88],
        operation: (itemWorryLevel) => itemWorryLevel + 4,
        testFunction: (itemWorryLevel, divisor) => itemWorryLevel % divisor === 0 ? 1 : 2,
        inspectedItems: 0,
        divisor: 3,
    },
    {
        items: [79],
        operation: (itemWorryLevel) => itemWorryLevel + 8,
        testFunction: (itemWorryLevel, divisor) => itemWorryLevel % divisor === 0 ? 4 : 5,
        inspectedItems: 0,
        divisor: 19
    },
]
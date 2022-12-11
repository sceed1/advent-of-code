"use strict";
exports.__esModule = true;
var input_1 = require("./input");
var monkeys = input_1.realMonkeys;
for (var i = 1; i <= 20; i++) {
    for (var _i = 0, monkeys_1 = monkeys; _i < monkeys_1.length; _i++) {
        var monkey = monkeys_1[_i];
        for (var _a = 0, _b = monkey.items; _a < _b.length; _a++) {
            var item = _b[_a];
            var worryLevel = monkey.operation(item);
            var newItem = Math.floor(worryLevel / 3);
            monkeys[monkey.testFunction(newItem)].items.push(newItem);
            monkey.inspectedItems++;
        }
        monkey.items = [];
    }
}
for (var _c = 0, _d = Array.from(monkeys.entries()); _c < _d.length; _c++) {
    var _e = _d[_c], index = _e[0], monkey = _e[1];
    console.log('Monkey', index, ' inspected intems:', monkey.inspectedItems);
}
var result = monkeys
    .map(function (m) { return m.inspectedItems; })
    .sort(function (a, b) { return a - b; })
    .reverse()
    .splice(0, 2)
    .reduce(function (a, b) { return a * b; });
console.log('Result: ', result);

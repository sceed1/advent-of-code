"use strict";
exports.__esModule = true;
var readTxtFile_1 = require("../general/readTxtFile");
var inputData = (0, readTxtFile_1.syncReadFile)('./input.txt');
var stack = [
    ['D', 'L', 'J', 'R', 'V', 'G', 'F'],
    ['T', 'P', 'M', 'B', 'V', 'H', 'J', 'S'],
    ['V', 'H', 'M', 'F', 'D', 'G', 'P', 'C'],
    ['M', 'D', 'P', 'N', 'G', 'Q'],
    ['J', 'L', 'H', 'N', 'F'],
    ['N', 'F', 'V', 'Q', 'D', 'G', 'T', 'Z'],
    ['F', 'D', 'B', 'L'],
    ['M', 'J', 'B', 'S', 'V', 'D', 'N'],
    ['G', 'L', 'D']
];
var doProcedure = function (procedure) {
    for (var i = 0; i < procedure.amount; i++) {
        var item = stack[procedure.from - 1].pop();
        stack[procedure.to - 1].push(item);
    }
};
var newMap = inputData.map(function (procedureString) {
    var val = procedureString.split(',');
    return {
        amount: Number(val[0]),
        from: Number(val[1]),
        to: Number(val[2])
    };
});
newMap.forEach(function (procedure) { return doProcedure(procedure); });
console.log(stack);

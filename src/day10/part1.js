"use strict";
exports.__esModule = true;
var readTxtFile_1 = require("../general/readTxtFile");
var inputData = (0, readTxtFile_1.syncReadFile)('./input.txt');
var circleCounter = 0;
var resultMap = new Map();
resultMap.set(0, 1);
for (var _i = 0, inputData_1 = inputData; _i < inputData_1.length; _i++) {
    var input = inputData_1[_i];
    if (input === 'noop') {
        circleCounter++;
        resultMap.set(circleCounter, resultMap.get(circleCounter - 1));
        console.log(circleCounter, ': ', resultMap.get(circleCounter));
    }
    else {
        circleCounter++;
        resultMap.set(circleCounter, resultMap.get(circleCounter - 1));
        console.log(circleCounter, ': ', resultMap.get(circleCounter));
        circleCounter++;
        var amount = Number(input.slice(5));
        resultMap.set(circleCounter, resultMap.get(circleCounter - 1) + amount);
        console.log(circleCounter, ': ', resultMap.get(circleCounter));
    }
}
console.log('###.....................................'.length);

"use strict";
exports.__esModule = true;
var readTxtFile_1 = require("../general/readTxtFile");
var inputData = (0, readTxtFile_1.syncReadFile)('./day1-input.txt');
var numberData = inputData.map(function (input) { return Number(input); });
var aggregatedValues = [];
var index = 0;
numberData.forEach(function (val) {
    if (val > 0) {
        var aggVal = aggregatedValues[index] || 0;
        aggregatedValues[index] = aggVal + val;
    }
    else {
        index++;
    }
    ;
});
aggregatedValues.sort(function (a, b) { return a - b; }).reverse();
console.log(aggregatedValues[0] + aggregatedValues[1] + aggregatedValues[2]);

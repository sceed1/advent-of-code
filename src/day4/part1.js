"use strict";
exports.__esModule = true;
var readTxtFile_1 = require("../general/readTxtFile");
var inputData = (0, readTxtFile_1.syncReadFile)('./input.txt');
var couple = [];
var containsAll = function (arr1, arr2) {
    for (var i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            return false;
        }
    }
    return true;
};
var counter = 0;
inputData
    .map(function (input) { return input.split(','); })
    .map(function (input) {
    return input.map(function (couplesInput) {
        var newInput = couplesInput.split('-');
        var result = [];
        for (var i = Number(newInput[0]); i <= Number(newInput[1]); i++) {
            result.push(i);
        }
        return result;
    });
})
    .forEach(function (_a) {
    var first = _a[0], sencond = _a[1];
    if (first.length >= sencond.length ? containsAll(sencond, first) : containsAll(first, sencond)) {
        counter++;
    }
});
console.log(counter);

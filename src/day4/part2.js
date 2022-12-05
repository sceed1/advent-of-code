"use strict";
exports.__esModule = true;
var readTxtFile_1 = require("../general/readTxtFile");
var inputData = (0, readTxtFile_1.syncReadFile)('./input.txt');
var doesOverlap = function (arr1, arr2) {
    for (var i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            return true;
        }
    }
    return false;
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
    var first = _a[0], second = _a[1];
    if (first.length >= second.length ? doesOverlap(second, first) : doesOverlap(first, second)) {
        counter++;
    }
});
console.log(counter);

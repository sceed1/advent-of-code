"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var readTxtFile_1 = require("../general/readTxtFile");
var inputData = (0, readTxtFile_1.syncReadFile)('./input.txt');
var mappedData = inputData.map(function (input) {
    var inputArray = [];
    for (var i = 0; i < input.length; i++) {
        inputArray.push(Number(input[i]));
    }
    return inputArray;
});
var isVisibleFromLeft = function (value, leftValues) { return leftValues.every(function (val) { return val < value; }); };
var isVisibleFromRight = function (value, rightValues) { return rightValues.every(function (val) { return val < value; }); };
var isVisibleFromTop = function (value, topValues) { return topValues.every(function (val) { return val < value; }); };
var isVisibleFromBottom = function (value, bottomValues) { return bottomValues.every(function (val) { return val < value; }); };
var visibleFromOutside = (mappedData.length - 1) * 2 + (mappedData[0].length - 1) * 2;
var totalVisible = visibleFromOutside;
for (var row = 1; row < mappedData.length - 1; row++) {
    for (var col = 1; col < mappedData[row].length - 1; col++) {
        var currentVal = mappedData[row][col];
        var leftValuesRowCopy = __spreadArray([], mappedData[row], true);
        var leftValues = leftValuesRowCopy.splice(0, col);
        var rightValuesRowCopy = __spreadArray([], mappedData[row], true);
        var rightValues = rightValuesRowCopy.splice(col + 1);
        var topValues = [];
        var bottomValues = [];
        for (var i = 0; i < row; i++) {
            topValues.push(mappedData[i][col]);
        }
        for (var i = (row + 1); i < mappedData.length; i++) {
            bottomValues.push(mappedData[i][col]);
        }
        if (isVisibleFromLeft(currentVal, leftValues)) {
            totalVisible++;
        }
        else if (isVisibleFromRight(currentVal, rightValues)) {
            totalVisible++;
        }
        else if (isVisibleFromTop(currentVal, topValues)) {
            totalVisible++;
        }
        else if (isVisibleFromBottom(currentVal, bottomValues)) {
            totalVisible++;
        }
    }
}
console.log(totalVisible);

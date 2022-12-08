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
var highscore = 0;
var calcScoreForDirection = function (treeHeight, row) {
    var score = 0;
    for (var i = 0; i < row.length; i++) {
        score++;
        if (row[i] >= treeHeight) {
            return score;
        }
    }
    return score;
};
for (var row = 1; row < mappedData.length - 1; row++) {
    for (var col = 1; col < mappedData[row].length - 1; col++) {
        var curr = mappedData[row][col];
        var leftValuesRowCopy = __spreadArray([], mappedData[row], true);
        var leftValues = leftValuesRowCopy.splice(0, col);
        leftValues.reverse();
        var rightValuesRowCopy = __spreadArray([], mappedData[row], true);
        var rightValues = rightValuesRowCopy.splice(col + 1);
        var topValues = [];
        var bottomValues = [];
        for (var i = 0; i < row; i++) {
            topValues.push(mappedData[i][col]);
        }
        topValues.reverse();
        for (var i = (row + 1); i < mappedData.length; i++) {
            bottomValues.push(mappedData[i][col]);
        }
        var var1 = calcScoreForDirection(curr, leftValues);
        var var2 = calcScoreForDirection(curr, topValues);
        var var3 = calcScoreForDirection(curr, rightValues);
        var var4 = calcScoreForDirection(curr, bottomValues);
        var treeScore = (var1 || 1) * (var2 || 1) * (var3 || 1) * (var4 || 1);
        if (treeScore > highscore) {
            highscore = treeScore;
        }
    }
}
console.log(mappedData);
console.log(highscore);

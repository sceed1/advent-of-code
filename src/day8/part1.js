"use strict";
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
var isInvisFromLeft = function (value, leftValues) { return leftValues.every(function (val) { return val >= value; }); };
var isInvisFromRight = function (value, rightValues) { return rightValues.every(function (val) { return val >= value; }); };
var isInvisFromTop = function (value, topValues) { return topValues.every(function (val) { return val >= value; }); };
var isInvisFromBottom = function (value, bottomValues) { return bottomValues.every(function (val) { return val >= value; }); };
var visibleFromOutside = (mappedData.length - 1) * 2 + (mappedData[0].length - 1) * 2;
var totalVisible = visibleFromOutside;
console.log(mappedData);
for (var row = 1; row < mappedData.length - 1; row++) {
    for (var col = 1; col < mappedData[row].length - 1; col++) {
        var currentVal = mappedData[row][col];
        var leftValues = mappedData[row].splice(0, col);
        var rightValues = mappedData[row].splice(col + 1);
        var topValues = [];
        var bottomValues = [];
        for (var i = 0; i < row; i++) {
            topValues.push(mappedData[i][col]);
        }
        for (var i = row + 1; i < mappedData.length; i++) {
            bottomValues.push(mappedData[i][col]);
        }
        console.log('current: ', currentVal);
        console.log('left: ', leftValues);
        console.log('top: ', topValues);
        console.log('right: ', rightValues);
        console.log('bottom: ', bottomValues);
        console.log('==============================');
        //
        // if (!isInvisFromLeft(currentVal, leftValues)) {
        //     console.log('row: ', row);
        //     console.log('col: ', col);
        //     console.log('visible from left', mappedData[row][col]);
        //     totalVisible++
        // } else if (!isInvisFromRight(currentVal, rightValues)) {
        //     console.log('row: ', row);
        //     console.log('col: ', col);
        //     console.log('visible from right', mappedData[row][col]);
        //     totalVisible++
        // } else if (!isInvisFromTop(currentVal, topValues)) {
        //     console.log('row: ', row);
        //     console.log('col: ', col);
        //     console.log('visible from top', mappedData[row][col]);
        //     totalVisible++
        // } else if (!isInvisFromBottom(currentVal, bottomValues)) {
        //     console.log('row: ', row);
        //     console.log('col: ', col);
        //     console.log('visible from bottom', mappedData[row][col]);
        //     totalVisible++
        // }
    }
}
console.log(totalVisible);

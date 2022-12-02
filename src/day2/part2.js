"use strict";
exports.__esModule = true;
var readTxtFile_1 = require("../general/readTxtFile");
var calcfunctions_1 = require("./calcfunctions");
var inputData = (0, readTxtFile_1.syncReadFile)('./day2-input.txt');
var calcMyInput = function (elvInput, desiredResult) {
    if (desiredResult === 'Y') {
        return elvInput;
    }
    else if (desiredResult === 'Z') {
        return (0, calcfunctions_1.getWinningAnswer)(elvInput);
    }
    else {
        return (0, calcfunctions_1.getLoosingAnswer)(elvInput);
    }
};
var result2 = 0;
inputData
    .map(function (input) {
    var splittedValues = input.split(' ');
    return {
        elv: splittedValues[0],
        me: calcMyInput(splittedValues[0], splittedValues[1]),
        result: splittedValues[1]
    };
})
    .forEach(function (input) {
    console.log(input);
    result2 += (0, calcfunctions_1.calcRpsRoundResult)(input);
});
console.log(result2);

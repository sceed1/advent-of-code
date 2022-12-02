"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var readTxtFile_1 = require("../general/readTxtFile");
var calcfunctions_1 = require("./calcfunctions");
var inputData = (0, readTxtFile_1.syncReadFile)('./day2-input.txt');
var calcRpsRoundResult = function (input) {
    var pointzz = 0;
    if (input.elv === input.me) {
        pointzz += 3;
    }
    else if ((0, calcfunctions_1.isWinningMatchUp)(input)) {
        pointzz += 6;
    }
    pointzz += (0, calcfunctions_1.getPointsForOwnChoice)(input.me);
    return pointzz;
};
var convertInputData = function (input) {
    var newInput = __assign({}, input);
    if (newInput.me === 'X') {
        newInput.me = 'A';
    }
    else if (newInput.me === 'Y') {
        newInput.me = 'B';
    }
    else {
        newInput.me = 'C';
    }
    return newInput;
};
var result1 = 0;
var rpsInputData = inputData
    .map(function (input) {
    var splittedValues = input.split(' ');
    return { elv: splittedValues[0], me: splittedValues[1] };
})
    .map(function (input) { return convertInputData(input); })
    .forEach(function (input) {
    result1 += calcRpsRoundResult(input);
});
console.log(result1);

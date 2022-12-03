"use strict";
exports.__esModule = true;
var readTxtFile_1 = require("../general/readTxtFile");
var inputData = (0, readTxtFile_1.syncReadFile)('./input.txt');
var findDuplicateCharacter = function (val1, val2) {
    for (var i = 0; i < val1.length; i++) {
        if (val2.includes(val1.charAt(i))) {
            return val1.charAt(i);
        }
    }
    console.error(val1 + ' and ' + val2 + ' have no characters in common');
};
var isUpperCase = function (char) {
    var givenChar = char;
    return givenChar === char.toUpperCase();
};
var calcValueForCharacter = function (charAsString) {
    var char = charAsString.charAt(0);
    if (isUpperCase(char)) {
        return char.charCodeAt(0) - 38;
    }
    else {
        return char.charCodeAt(0) - 96;
    }
};
var total = inputData
    .map(function (input) { return [input.slice(0, input.length / 2), input.slice(input.length / 2)]; })
    .map(function (slicedData) { return findDuplicateCharacter(slicedData[0], slicedData[1]); })
    .map(function (char) { return calcValueForCharacter(char); })
    .reduce(function (a, b) { return a + b; });
console.log(total);

"use strict";
exports.__esModule = true;
var readTxtFile_1 = require("../general/readTxtFile");
var inputData = (0, readTxtFile_1.syncReadFile)('./input.txt');
var findCommonCharacter = function (val1, val2, val3) {
    for (var i = 0; i < val1.length; i++) {
        var val1char = val1.charAt(i);
        if (val2.includes(val1char) && val3.includes(val1char)) {
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
var triplesArray = [];
var triple = [];
inputData.forEach(function (value) {
    triple.push(value);
    if (triple.length === 3) {
        triplesArray.push(triple);
        triple = [];
    }
});
var result = triplesArray
    .map(function (_a) {
    var one = _a[0], two = _a[1], three = _a[2];
    return findCommonCharacter(one, two, three);
})
    .map(function (char) { return calcValueForCharacter(char); })
    .reduce(function (a, b) { return a + b; });
console.log(result);

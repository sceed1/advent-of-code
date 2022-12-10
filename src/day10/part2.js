"use strict";
exports.__esModule = true;
var readTxtFile_1 = require("../general/readTxtFile");
var inputData = (0, readTxtFile_1.syncReadFile)('./input.txt');
var circleCounter = 0;
var resultMap = new Map();
resultMap.set(0, 1);
for (var _i = 0, inputData_1 = inputData; _i < inputData_1.length; _i++) {
    var input = inputData_1[_i];
    if (input === 'noop') {
        circleCounter++;
        resultMap.set(circleCounter, resultMap.get(circleCounter - 1));
    }
    else {
        circleCounter++;
        resultMap.set(circleCounter, resultMap.get(circleCounter - 1));
        circleCounter++;
        var amount = Number(input.slice(5));
        resultMap.set(circleCounter, resultMap.get(circleCounter - 1) + amount);
    }
}
var line1 = '';
var line2 = '';
var line3 = '';
var line4 = '';
var line5 = '';
var line6 = '';
Array.from(resultMap.entries())
    .filter(function (_a) {
    var key = _a[0], value = _a[1];
    return key < 40;
})
    .map(function (_a) {
    var key = _a[0], value = _a[1];
    Math.abs(key - value) <= 1 ? line1 = line1.concat('#') : line1 = line1.concat('.');
});
Array.from(resultMap.entries())
    .filter(function (_a) {
    var key = _a[0], value = _a[1];
    return key >= 40 && key < 80;
})
    .map(function (_a) {
    var key = _a[0], value = _a[1];
    Math.abs((key - 40) - value) <= 1 ? line2 = line2.concat('#') : line2 = line2.concat('.');
});
Array.from(resultMap.entries())
    .filter(function (_a) {
    var key = _a[0], value = _a[1];
    return key >= 80 && key < 120;
})
    .map(function (_a) {
    var key = _a[0], value = _a[1];
    Math.abs((key - 80) - value) <= 1 ? line3 = line3.concat('#') : line3 = line3.concat('.');
});
Array.from(resultMap.entries())
    .filter(function (_a) {
    var key = _a[0], value = _a[1];
    return key >= 120 && key < 160;
})
    .map(function (_a) {
    var key = _a[0], value = _a[1];
    Math.abs((key - 120) - value) <= 1 ? line4 = line4.concat('#') : line4 = line4.concat('.');
});
Array.from(resultMap.entries())
    .filter(function (_a) {
    var key = _a[0], value = _a[1];
    return key >= 160 && key < 200;
})
    .map(function (_a) {
    var key = _a[0], value = _a[1];
    Math.abs((key - 160) - value) <= 1 ? line5 = line5.concat('#') : line5 = line5.concat('.');
});
Array.from(resultMap.entries())
    .filter(function (_a) {
    var key = _a[0], value = _a[1];
    return key >= 200 && key < 240;
})
    .map(function (_a) {
    var key = _a[0], value = _a[1];
    Math.abs((key - 200) - value) <= 1 ? line6 = line6.concat('#') : line6 = line6.concat('.');
});
console.log(line1);
console.log(line2);
console.log(line3);
console.log(line4);
console.log(line5);
console.log(line6);

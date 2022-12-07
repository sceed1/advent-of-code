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
var inputData = (0, readTxtFile_1.syncReadFile)('./input.txt');
var emptyDir = {
    childDirs: [],
    containingFiles: []
};
var rootDir = __assign(__assign({}, emptyDir), { name: '/' });
var currentDir = rootDir;
var changeDirectory = function (destinationDir) { return destinationDir === '..'
    ? currentDir.parentDir
    : currentDir.childDirs.find(function (child) { return child.name === destinationDir; }); };
var listFilesAndDirectories = function (index) {
    console.log('index: ' + index + ' data: ', inputData[index]);
    while (!inputData[index].startsWith('$')) {
        var line = inputData[index].split(' ');
        if (line[0] === 'dir') {
            currentDir.childDirs.push(__assign(__assign({}, emptyDir), { name: line[1], parentDir: currentDir }));
        }
        else {
            currentDir.containingFiles.push({
                size: Number(line[0]),
                name: line[1]
            });
        }
        index++;
    }
};
var executeCommand = function (command, index) {
    if (command.startsWith('cd')) {
        currentDir = changeDirectory(command.slice(3));
    }
    else {
        listFilesAndDirectories(index + 1);
    }
};
inputData
    .forEach(function (line, index) {
    if (line.startsWith('$')) {
        executeCommand(line.slice(2), index);
        console.log(rootDir);
    }
});
console.log(rootDir);

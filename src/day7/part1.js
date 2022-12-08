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
var rootDir = {
    childDirs: [],
    containingFiles: [],
    name: '/',
    parentDir: {}
};
var workingDir;
var changeOrCreateDirectory = function (destinationDir) {
    if (destinationDir === '/') {
        return rootDir;
    }
    else {
        if (destinationDir === '..') {
            return workingDir.parentDir;
        }
        else {
            return workingDir.childDirs.find(function (child) { return child.name === destinationDir; });
        }
    }
};
var createFileOrDir = function (line) {
    if (line.startsWith('dir')) {
        workingDir.childDirs.push({
            childDirs: [],
            containingFiles: [],
            parentDir: workingDir,
            name: line.slice(4)
        });
    }
    else {
        var fileArr = line.split(' ');
        workingDir.containingFiles.push({
            size: Number(fileArr[0]),
            name: fileArr[1]
        });
    }
};
var executeCommand = function (command) {
    if (command.startsWith('cd')) {
        var newDir = __assign({}, changeOrCreateDirectory(command.slice(3)));
        workingDir = newDir;
    }
};
var dirs = [];
var calcFileSizeOfDir = function (dir) {
    var dirFileSize = 0;
    dir.containingFiles.forEach(function (file) { return dirFileSize += file.size; });
    dir.childDirs.forEach(function (childDir) { return dirFileSize += calcFileSizeOfDir(childDir); });
    dirs.push(dirFileSize);
    return dirFileSize;
};
inputData
    .forEach(function (line) {
    if (line.startsWith('$')) {
        executeCommand(line.slice(2));
    }
    else {
        createFileOrDir(line);
    }
});
calcFileSizeOfDir(rootDir);
var sum = dirs.filter(function (size) { return size < 100000; }).reduce(function (a, b) { return a + b; });
console.log(sum);

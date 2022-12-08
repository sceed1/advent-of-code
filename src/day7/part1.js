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
var currentDir;
var changeDirectory = function (destinationDir) {
    if (destinationDir === '/') {
        return rootDir;
    }
    else {
        if (destinationDir === '..') {
            return currentDir.parentDir;
        }
        else {
            return currentDir.childDirs.find(function (child) { return child.name === destinationDir; });
        }
    }
};
var createFileOrDir = function (line) {
    if (line.startsWith('dir')) {
        currentDir.childDirs.push(__assign(__assign({}, emptyDir), { parentDir: currentDir, name: line.slice(4) }));
    }
    else {
        var fileArr = line.split(' ');
        currentDir.containingFiles.push({
            size: Number(fileArr[0]),
            name: fileArr[1]
        });
    }
};
var executeCommand = function (command) {
    if (command.startsWith('cd')) {
        var newDir = __assign({}, changeDirectory(command.slice(3)));
        currentDir = newDir;
    }
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
console.log(rootDir.childDirs.map(function (c) { return c.name; }));

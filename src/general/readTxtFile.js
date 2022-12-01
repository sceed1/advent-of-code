"use strict";
exports.__esModule = true;
exports.syncReadFile = void 0;
var fs_1 = require("fs");
function syncReadFile(filename) {
    var contents = (0, fs_1.readFileSync)(filename, 'utf-8');
    var arr = contents.split(/\r?\n/);
    return arr;
}
exports.syncReadFile = syncReadFile;

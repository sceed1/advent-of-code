"use strict";
exports.__esModule = true;
exports.syncReadFile = void 0;
var readFileSync = require('fs').readFileSync;
function syncReadFile(filename) {
    var contents = readFileSync(filename, 'utf-8');
    var arr = contents.split(/\r?\n/);
    console.log(arr); // 👉️ ['One', 'Two', 'Three', 'Four']
    return arr;
}
exports.syncReadFile = syncReadFile;

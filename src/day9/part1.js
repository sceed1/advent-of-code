"use strict";
exports.__esModule = true;
var readTxtFile_1 = require("../general/readTxtFile");
var inputData = (0, readTxtFile_1.syncReadFile)('./input.txt');
var move = function (command, rope) {
    for (var i = 0; i < command.distance; i++) {
        if (command.direction === 'up') {
            rope.head.col++;
        }
        else if (command.direction === 'down') {
            rope.head.col--;
        }
        else if (command.direction === 'left') {
            rope.head.row--;
        }
        else {
            rope.head.row++;
        }
        snapTail(rope);
        if (!tailPositions.find(function (coords) { return coords.col === rope.tail.col && coords.row === rope.tail.row; })) {
            tailPositions.push(rope.tail);
        }
    }
};
var snapTail = function (rope) {
    console.log();
    if (Math.abs(rope.head.row - rope.tail.row) > 1) {
        if (rope.head.row > rope.tail.row) {
            rope.tail = {
                row: rope.head.row - 1,
                col: rope.head.col
            };
        }
        else {
            rope.tail = {
                row: rope.head.row + 1,
                col: rope.head.col
            };
        }
    }
    else if (Math.abs(rope.head.col - rope.tail.col) > 1) {
        if (rope.head.col > rope.tail.col) {
            rope.tail = {
                row: rope.head.row,
                col: rope.head.col - 1
            };
        }
        else {
            rope.tail = {
                row: rope.head.row,
                col: rope.head.col + 1
            };
        }
    }
};
var commands = inputData.map(function (input) {
    var foo = input.split(' ');
    var direction;
    switch (foo[0]) {
        case 'R':
            direction = 'right';
            break;
        case 'L':
            direction = 'left';
            break;
        case 'U':
            direction = 'up';
            break;
        case 'D':
            direction = 'down';
            break;
    }
    return {
        direction: direction,
        distance: Number(foo[1])
    };
});
var rope = {
    head: { row: 0, col: 0 },
    tail: { row: 0, col: 0 }
};
var tailPositions = [];
commands.forEach(function (command) {
    move(command, rope);
});
console.log(tailPositions.length);

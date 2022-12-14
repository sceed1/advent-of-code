"use strict";
exports.__esModule = true;
var readTxtFile_1 = require("../general/readTxtFile");
var startTime = new Date();
var inputData = (0, readTxtFile_1.syncReadFile)('./input.txt');
var move = function (command, rope) {
    var _loop_1 = function (i) {
        var tailLength = rope.tail.length;
        if (command.direction === 'up') {
            rope.head.row++;
        }
        else if (command.direction === 'down') {
            rope.head.row--;
        }
        else if (command.direction === 'left') {
            rope.head.col--;
        }
        else {
            rope.head.col++;
        }
        for (var j = 0; j < tailLength; j++) {
            if (j === 0) {
                rope.tail[j] = snapTail({
                    head: rope.head,
                    tail: rope.tail[j]
                });
            }
            else {
                rope.tail[j] = snapTail({
                    head: rope.tail[j - 1],
                    tail: rope.tail[j]
                });
            }
        }
        if (!tailPositions.find(function (coords) { return coords.col === rope.tail[tailLength - 1].col && coords.row === rope.tail[tailLength - 1].row; })) {
            tailPositions.push(rope.tail[tailLength - 1]);
        }
    };
    for (var i = 0; i < command.distance; i++) {
        _loop_1(i);
    }
};
var snapTail = function (ropeSection) {
    if (Math.abs(ropeSection.head.row - ropeSection.tail.row) > 1 &&
        Math.abs(ropeSection.head.col - ropeSection.tail.col) > 1) {
        if (ropeSection.head.row > ropeSection.tail.row) {
            if (ropeSection.head.col > ropeSection.tail.col) {
                return {
                    row: ropeSection.head.row - 1,
                    col: ropeSection.head.col - 1
                };
            }
            else {
                return {
                    row: ropeSection.head.row - 1,
                    col: ropeSection.head.col + 1
                };
            }
        }
        else {
            if (ropeSection.head.col > ropeSection.tail.col) {
                return {
                    row: ropeSection.head.row + 1,
                    col: ropeSection.head.col - 1
                };
            }
            else {
                return {
                    row: ropeSection.head.row + 1,
                    col: ropeSection.head.col + 1
                };
            }
        }
    }
    if (Math.abs(ropeSection.head.row - ropeSection.tail.row) > 1) {
        if (ropeSection.head.row > ropeSection.tail.row) {
            return {
                row: ropeSection.head.row - 1,
                col: ropeSection.head.col
            };
        }
        else {
            return {
                row: ropeSection.head.row + 1,
                col: ropeSection.head.col
            };
        }
    }
    else if (Math.abs(ropeSection.head.col - ropeSection.tail.col) > 1) {
        if (ropeSection.head.col > ropeSection.tail.col) {
            return {
                row: ropeSection.head.row,
                col: ropeSection.head.col - 1
            };
        }
        else {
            return {
                row: ropeSection.head.row,
                col: ropeSection.head.col + 1
            };
        }
    }
    return ropeSection.tail;
};
var commands = inputData.map(function (input) {
    var directionAndDistance = input.split(' ');
    var direction;
    switch (directionAndDistance[0]) {
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
        distance: Number(directionAndDistance[1])
    };
});
var rope = {
    head: { row: 0, col: 0 },
    tail: [
        { row: 0, col: 0 },
        { row: 0, col: 0 },
        { row: 0, col: 0 },
        { row: 0, col: 0 },
        { row: 0, col: 0 },
        { row: 0, col: 0 },
        { row: 0, col: 0 },
        { row: 0, col: 0 },
        { row: 0, col: 0 },
    ]
};
var tailPositions = [];
commands.forEach(function (command) {
    move(command, rope);
});
console.log(tailPositions.length);
var endTime = new Date();
var diff = Math.abs(endTime.getUTCMilliseconds() - startTime.getUTCMilliseconds());
console.log(diff);

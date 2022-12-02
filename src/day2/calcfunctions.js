"use strict";
exports.__esModule = true;
exports.getPointsForOwnChoice = exports.isWinningMatchUp = void 0;
var isWinningMatchUp = function (input) {
    return (input.elv === 'A' && input.me === 'B') ||
        (input.elv === 'B' && input.me === 'C') ||
        (input.elv === 'C' && input.me === 'A');
};
exports.isWinningMatchUp = isWinningMatchUp;
var getPointsForOwnChoice = function (choice) {
    return choice === 'A' ? 1 :
        choice === 'B' ? 2 : 3;
};
exports.getPointsForOwnChoice = getPointsForOwnChoice;

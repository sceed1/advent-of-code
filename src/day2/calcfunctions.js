"use strict";
exports.__esModule = true;
exports.calcRpsRoundResult = exports.getPointsForOwnChoice = exports.getLoosingAnswer = exports.getWinningAnswer = exports.isWinningMatchUp = void 0;
var isWinningMatchUp = function (input) {
    return (input.elv === 'A' && input.me === 'B') ||
        (input.elv === 'B' && input.me === 'C') ||
        (input.elv === 'C' && input.me === 'A');
};
exports.isWinningMatchUp = isWinningMatchUp;
var getWinningAnswer = function (elv) {
    return elv === 'A' ? 'B' :
        elv === 'B' ? 'C' : 'A';
};
exports.getWinningAnswer = getWinningAnswer;
var getLoosingAnswer = function (elv) {
    return elv === 'A' ? 'C' :
        elv === 'B' ? 'A' : 'B';
};
exports.getLoosingAnswer = getLoosingAnswer;
var getPointsForOwnChoice = function (choice) {
    return choice === 'A' ? 1 :
        choice === 'B' ? 2 : 3;
};
exports.getPointsForOwnChoice = getPointsForOwnChoice;
var calcRpsRoundResult = function (input) {
    var pointzz = 0;
    if (input.elv === input.me) {
        pointzz += 3;
    }
    else if ((0, exports.isWinningMatchUp)(input)) {
        pointzz += 6;
    }
    pointzz += (0, exports.getPointsForOwnChoice)(input.me);
    return pointzz;
};
exports.calcRpsRoundResult = calcRpsRoundResult;

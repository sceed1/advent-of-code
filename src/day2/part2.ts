import { syncReadFile } from '../general/readTxtFile';
import { calcRpsRoundResult, getLoosingAnswer, getWinningAnswer } from './calcfunctions';
import { rpsInput, rpsInputWithResult } from './day2.model';

const inputData: string[] = syncReadFile('./day2-input.txt');

const calcMyInput = (elvInput: string, desiredResult: string): string => {
    if (desiredResult === 'Y') {
        return elvInput;
    } else if (desiredResult === 'Z') {
        return getWinningAnswer(elvInput);
    } else {
        return getLoosingAnswer(elvInput);
    }
}

let result2 = 0
inputData
    .map(input => {
        let splittedValues = input.split(' ');
        return {
            elv: splittedValues[0], 
            me: calcMyInput(splittedValues[0], splittedValues[1]),
            result: splittedValues[1]
        } as rpsInputWithResult
    })
    .forEach(input => {
        result2 += calcRpsRoundResult(input);
    })

console.log(result2);
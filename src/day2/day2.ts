import { syncReadFile } from '../general/readTxtFile';
import { rpsInput } from './day2.model';
import { calcRpsRoundResult } from './calcfunctions';

const inputData: string[] = syncReadFile('./day2-input.txt');


const convertInputData = (input: rpsInput) => {
    const newInput: rpsInput = {...input};
    if(newInput.me === 'X') {
        newInput.me = 'A'
    } else if (newInput.me === 'Y'){
        newInput.me = 'B'
    } else {
        newInput.me = 'C'
    }
    return newInput;
}

let result1 = 0;

inputData
    .map(input => {
        const splittedValues = input.split(' ');
        return {elv: splittedValues[0], me: splittedValues[1]} as rpsInput
    })
    .map(input => convertInputData(input))
    .forEach(input => {
        result1 += calcRpsRoundResult(input);
    })

console.log(result1);
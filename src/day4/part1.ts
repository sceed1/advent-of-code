import { syncReadFile } from '../general/readTxtFile';

const inputData: string[] = syncReadFile('./input.txt');


const containsAll = (arr1: number[], arr2: number[]) => {
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])){
            return false;
        }
    }
    return true;
}

let counter = 0

inputData
    .map(input => input.split(','))
    .map((input) =>
        input.map((couplesInput) => {
            let newInput = couplesInput.split('-');
            const result = []
            for (let i = Number(newInput[0]); i <= Number(newInput[1]); i++) {
                result.push(i);
            }
            return result;
        }))
    .forEach(([first, sencond]) => {
        if(first.length >= sencond.length ? containsAll(sencond, first) : containsAll(first, sencond)){
            counter++
        }
    });

console.log(counter);
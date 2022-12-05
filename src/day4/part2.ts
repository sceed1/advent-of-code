import { syncReadFile } from '../general/readTxtFile';

const inputData: string[] = syncReadFile('./input.txt');


const doesOverlap = (arr1: number[], arr2: number[]) => {

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])){
            return true
        }
    }

    return false
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
    .forEach(([first, second]) => {
        if(first.length >= second.length ? doesOverlap(second, first) : doesOverlap(first, second)){
            counter++
        }
    });

console.log(counter);
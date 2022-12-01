import { syncReadFile } from '../general/readTxtFile';

const inputData: string[] = syncReadFile('./day1-input.txt');

const numberData: number[] = inputData.map(input => Number(input));

const aggregatedValues: number[] = [];
let index = 0;


numberData.forEach(val => {
    if (val > 0) {
        const aggVal = aggregatedValues[index] || 0
        aggregatedValues[index] =  aggVal + val;
    } else {
        index++
    };
})

let result = 0;
aggregatedValues.forEach(value => {
    if(value > result) {
        result = value;
    }
});

console.log(result);


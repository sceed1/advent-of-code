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

aggregatedValues.sort((a:number, b:number) => a - b).reverse();

console.log(aggregatedValues[0] + aggregatedValues[1] + aggregatedValues[2]);


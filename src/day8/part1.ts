import { syncReadFile } from '../general/readTxtFile';

const inputData: string[] = syncReadFile('./input.txt');


const mappedData = inputData.map(input => {
    const inputArray = []
    for (let i = 0; i < input.length; i ++) {
        inputArray.push(Number(input[i]))
    }
    return inputArray
})

const isInvisFromLeft = (value: number, leftValues: number[]) => leftValues.every(val => val >= value);
const isInvisFromRight = (value: number, rightValues: number[]) => rightValues.every(val => val >= value);
const isInvisFromTop = (value: number, topValues: number[]) => topValues.every(val => val >= value);
const isInvisFromBottom = (value: number, bottomValues: number[]) => bottomValues.every(val => val >= value);

const visibleFromOutside = (mappedData.length - 1) * 2 + (mappedData[0].length - 1) * 2

let totalVisible = visibleFromOutside;

console.log(mappedData);

for (let row = 1; row < mappedData.length - 1; row++) {
    for (let col = 1; col < mappedData[row].length - 1; col++) {

        const currentVal = mappedData[row][col];
        const leftValues = mappedData[row].splice(0, col )
        const rightValues = mappedData[row].splice(col + 1)
        const topValues = []
        const bottomValues = []

        for (let i = 0; i < row; i++) {
            topValues.push(mappedData[i][col])
        }

        for (let i = row + 1; i < mappedData.length ; i++) {
            bottomValues.push(mappedData[i][col])
        }

        console.log('current: ', currentVal);
        console.log('left: ', leftValues);
        console.log('top: ', topValues);
        console.log('right: ', rightValues);
        console.log('bottom: ', bottomValues);
        console.log('==============================');
        //
        // if (!isInvisFromLeft(currentVal, leftValues)) {
        //     console.log('row: ', row);
        //     console.log('col: ', col);
        //     console.log('visible from left', mappedData[row][col]);
        //     totalVisible++
        // } else if (!isInvisFromRight(currentVal, rightValues)) {
        //     console.log('row: ', row);
        //     console.log('col: ', col);
        //     console.log('visible from right', mappedData[row][col]);
        //     totalVisible++
        // } else if (!isInvisFromTop(currentVal, topValues)) {
        //     console.log('row: ', row);
        //     console.log('col: ', col);
        //     console.log('visible from top', mappedData[row][col]);
        //     totalVisible++
        // } else if (!isInvisFromBottom(currentVal, bottomValues)) {
        //     console.log('row: ', row);
        //     console.log('col: ', col);
        //     console.log('visible from bottom', mappedData[row][col]);
        //     totalVisible++
        // }
    }
}

console.log(totalVisible)
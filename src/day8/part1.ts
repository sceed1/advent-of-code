import { syncReadFile } from '../general/readTxtFile';

const inputData: string[] = syncReadFile('./input.txt');


const mappedData = inputData.map(input => {
    const inputArray = []
    for (let i = 0; i < input.length; i ++) {
        inputArray.push(Number(input[i]))
    }
    return inputArray
})

const isVisibleFromLeft = (value: number, leftValues: number[]) => leftValues.every(val => val < value);
const isVisibleFromRight = (value: number, rightValues: number[]) => rightValues.every(val => val < value);
const isVisibleFromTop = (value: number, topValues: number[]) => topValues.every(val => val < value);
const isVisibleFromBottom = (value: number, bottomValues: number[]) => bottomValues.every(val => val < value);

const visibleFromOutside = (mappedData.length - 1) * 2 + (mappedData[0].length - 1) * 2

let totalVisible = visibleFromOutside;

for (let row = 1; row < mappedData.length - 1; row++) {
    for (let col = 1; col < mappedData[row].length - 1; col++) {
        const currentVal = mappedData[row][col];
        const leftValuesRowCopy = [...mappedData[row]];
        const leftValues = leftValuesRowCopy.splice(0, col )
        const rightValuesRowCopy = [...mappedData[row]];
        const rightValues = rightValuesRowCopy.splice(col + 1)
        const topValues = []
        const bottomValues = []

        for (let i = 0; i < row; i++) {
            topValues.push(mappedData[i][col])
        }

        for (let i = (row + 1); i < mappedData.length ; i++) {
            bottomValues.push(mappedData[i][col])
        }

        if (isVisibleFromLeft(currentVal, leftValues)) {
            totalVisible++
        } else if (isVisibleFromRight(currentVal, rightValues)) {
            totalVisible++
        } else if (isVisibleFromTop(currentVal, topValues)) {
            totalVisible++
        } else if (isVisibleFromBottom(currentVal, bottomValues)) {
            totalVisible++
        }
    }
}

console.log(totalVisible);
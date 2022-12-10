import { syncReadFile } from '../general/readTxtFile';

const inputData: string[] = syncReadFile('./input.txt');


let circleCounter = 0;

const resultMap = new Map<number, number>();

resultMap.set(0, 1);

for (let input of inputData) {
    if (input === 'noop') {
        circleCounter++;
        resultMap.set(circleCounter, resultMap.get(circleCounter-1));
    } else {
        circleCounter++;
        resultMap.set(circleCounter, resultMap.get(circleCounter-1));
        circleCounter++;
        const amount = Number(input.slice(5));
        resultMap.set(circleCounter, resultMap.get(circleCounter-1) + amount);
    }
}

let line1 = '';
let line2 = '';
let line3 = '';
let line4 = '';
let line5 = '';
let line6 = '';

Array.from(resultMap.entries())
    .filter(([key, value]) => key < 40)
    .map(([key, value]) => {
      Math.abs(key - value) <= 1 ? line1 = line1.concat('#') : line1 = line1.concat('.');
    });

Array.from(resultMap.entries())
    .filter(([key, value]) => key >= 40 && key < 80)
    .map(([key, value]) => {
        Math.abs((key-40) - value) <= 1 ? line2 = line2.concat('#') : line2 = line2.concat('.');
    });

Array.from(resultMap.entries())
    .filter(([key, value]) => key >= 80 && key < 120)
    .map(([key, value]) => {
        Math.abs((key-80) - value) <= 1 ? line3 = line3.concat('#') : line3 = line3.concat('.');
    });

Array.from(resultMap.entries())
    .filter(([key, value]) => key >= 120 && key < 160)
    .map(([key, value]) => {
        Math.abs((key-120) - value) <= 1 ? line4 = line4.concat('#') : line4 = line4.concat('.');
    });

Array.from(resultMap.entries())
    .filter(([key, value]) => key >= 160 && key < 200)
    .map(([key, value]) => {
        Math.abs((key-160) - value) <= 1 ? line5 = line5.concat('#') : line5 = line5.concat('.');
    });

Array.from(resultMap.entries())
    .filter(([key, value]) => key >= 200 && key < 240)
    .map(([key, value]) => {
        Math.abs((key-200) - value) <= 1 ? line6= line6.concat('#') : line6 = line6.concat('.');
    });

console.log(line1);
console.log(line2);
console.log(line3);
console.log(line4);
console.log(line5);
console.log(line6);

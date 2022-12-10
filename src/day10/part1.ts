import { syncReadFile } from '../general/readTxtFile';

const inputData: string[] = syncReadFile('./input.txt');


let circleCounter = 0;

const resultMap = new Map<number, number>();

resultMap.set(0, 1);

for (let input of inputData) {
    if (input === 'noop') {
        circleCounter++;
        resultMap.set(circleCounter, resultMap.get(circleCounter-1));
        console.log(circleCounter, ': ',resultMap.get(circleCounter));
    } else {
        circleCounter++;
        resultMap.set(circleCounter, resultMap.get(circleCounter-1));
        console.log(circleCounter, ': ',resultMap.get(circleCounter));
        circleCounter++;
        const amount = Number(input.slice(5));
        resultMap.set(circleCounter, resultMap.get(circleCounter-1) + amount);
        console.log(circleCounter, ': ',resultMap.get(circleCounter));
    }
}

console.log('result: ', resultMap.get(19) * 20 + resultMap.get(59) * 60 + resultMap.get(99) * 100 + resultMap.get(139) * 140 + resultMap.get(179) * 180 + resultMap.get(219) * 220)


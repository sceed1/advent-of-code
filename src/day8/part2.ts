import { syncReadFile } from '../general/readTxtFile';

const inputData: string[] = syncReadFile('./input.txt');


const mappedData = inputData.map(input => {
    const inputArray = []
    for (let i = 0; i < input.length; i ++) {
        inputArray.push(Number(input[i]))
    }
    return inputArray
})



let highscore = 0;

const calcScoreForDirection = (treeHeight: number, row: number[]) => {
    let score = 0;
    for (let i = 0; i < row.length; i++) {
        score++;
        if (row[i] >= treeHeight) {
            return score;
        }
    }
    return score;
}

for (let row = 1; row < mappedData.length - 1; row++) {
    for (let col = 1; col < mappedData[row].length - 1; col++) {
        const curr = mappedData[row][col];
        const leftValuesRowCopy = [...mappedData[row]];
        const leftValues = leftValuesRowCopy.splice(0, col )
        leftValues.reverse();
        const rightValuesRowCopy = [...mappedData[row]];
        const rightValues = rightValuesRowCopy.splice(col + 1)
        const topValues = []
        const bottomValues = []

        for (let i = 0; i < row; i++) {
            topValues.push(mappedData[i][col])
        }
        topValues.reverse();

        for (let i = (row + 1); i < mappedData.length ; i++) {
            bottomValues.push(mappedData[i][col])
        }


        const var1 = calcScoreForDirection(curr, leftValues);
        const var2 = calcScoreForDirection(curr, topValues);
        const var3 = calcScoreForDirection(curr, rightValues);
        const var4 = calcScoreForDirection(curr, bottomValues);


        const treeScore = (var1 || 1) * (var2 ||1) * (var3 || 1) * (var4 || 1);

        if (treeScore > highscore) {
            highscore = treeScore;
        }

    }
}

console.log(highscore);
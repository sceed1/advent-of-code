import { syncReadFile } from '../general/readTxtFile';

const inputData: string[] = syncReadFile('./input.txt');

interface Procedure {
    amount: number,
    from: number,
    to: number,
}

let stack = [
    ['D','L','J','R','V','G','F'],
    ['T','P','M','B','V','H','J','S'],
    ['V','H','M','F','D','G','P','C'],
    ['M','D','P','N','G','Q'],
    ['J','L','H','N','F'],
    ['N','F','V','Q','D','G','T','Z'],
    ['F','D','B','L'],
    ['M','J','B','S','V','D','N'],
    ['G','L','D']
];

const doProcedure = (procedure: Procedure) => {

    for (let i = 0; i<procedure.amount; i++) {
        const item = stack[procedure.from - 1].pop();
        stack[procedure.to - 1].push(item);
    }
}


const newMap = inputData.map(procedureString => {
    const val = procedureString.split(',');
    return {
        amount: Number(val[0]),
        from: Number(val[1]),
        to: Number(val[2])
    } as Procedure
})

newMap.forEach(procedure => doProcedure(procedure));

console.log(stack);
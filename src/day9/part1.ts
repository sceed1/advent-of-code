import { syncReadFile } from '../general/readTxtFile';

const inputData: string[] = syncReadFile('./input.txt');

type Direction = 'up' | 'down' | 'left' | 'right'
interface Command {
    direction: Direction;
    distance: number
}

interface Coordinates {
    row: number,
    col: number,
}

interface Rope {
    head: Coordinates,
    tail: Coordinates,
}

const move = (command: Command, rope: Rope) => {
    for (let i = 0; i < command.distance; i++) {
        if (command.direction === 'up') { rope.head.col++; }
        else if (command.direction === 'down') { rope.head.col--; }
        else if (command.direction === 'left') { rope.head.row--; }
        else { rope.head.row++; }
        snapTail(rope);

        if (!tailPositions.find((coords: Coordinates) => coords.col === rope.tail.col && coords.row === rope.tail.row)) {
            tailPositions.push(rope.tail)
        }
    }
};

const snapTail = (rope: Rope) => {
    if (Math.abs(rope.head.row - rope.tail.row ) > 1) {
        if (rope.head.row > rope.tail.row) {
            rope.tail = {
                row: rope.head.row - 1,
                col: rope.head.col,
            }
        } else {
            rope.tail = {
                row: rope.head.row + 1,
                col: rope.head.col,
            }
        }
    } else if (Math.abs(rope.head.col - rope.tail.col ) > 1){
        if (rope.head.col > rope.tail.col) {
            rope.tail = {
                row: rope.head.row ,
                col: rope.head.col - 1,
            }
        } else {
            rope.tail = {
                row: rope.head.row ,
                col: rope.head.col + 1,
            }
        }
    }
}

const commands = inputData.map(input => {
    const foo = input.split(' ');
    let direction: Direction;
    switch (foo[0]){
        case 'R': direction = 'right';
        break;
        case 'L': direction = 'left';
        break;
        case 'U': direction = 'up';
        break;
        case 'D': direction = 'down';
        break;
    }
    return {
        direction,
        distance: Number(foo[1])
    } as Command
})


let rope: Rope = {
    head: { row: 0, col: 0 },
    tail: { row: 0, col: 0 }
}

const tailPositions = []

commands.forEach(command => {
    move(command, rope);
})

console.log(tailPositions.length);
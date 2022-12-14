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

interface CompleteRope {
    head: Coordinates,
    tail: Coordinates[],
}

interface RopeSection {
    head: Coordinates,
    tail: Coordinates,
}

const move = (command: Command, rope: CompleteRope) => {
    for (let i = 0; i < command.distance; i++) {
        const tailLength = rope.tail.length;

        if (command.direction === 'up') { rope.head.row++; }
        else if (command.direction === 'down') { rope.head.row--; }
        else if (command.direction === 'left') { rope.head.col--; }
        else { rope.head.col++; }

        for (let j = 0; j < tailLength; j++) {
            if (j === 0) {
                rope.tail[j] = snapTail({
                    head: rope.head,
                    tail: rope.tail[j]
                })
            } else {

                rope.tail[j] = snapTail({
                    head: rope.tail[j-1],
                    tail: rope.tail[j]
                })
            }
        }

        if (!tailPositions.find((coords: Coordinates) => coords.col === rope.tail[tailLength - 1].col && coords.row === rope.tail[tailLength - 1].row)) {
            tailPositions.push(rope.tail[tailLength - 1])
        }
    }
};

const snapTail = (ropeSection: RopeSection): Coordinates => {
    if (Math.abs(ropeSection.head.row - ropeSection.tail.row ) > 1 &&
        Math.abs(ropeSection.head.col - ropeSection.tail.col ) > 1) {
        if (ropeSection.head.row > ropeSection.tail.row) {
            if (ropeSection.head.col > ropeSection.tail.col) {
                return {
                    row: ropeSection.head.row - 1,
                    col: ropeSection.head.col - 1,
                }
            } else {
                return {
                    row: ropeSection.head.row - 1,
                    col: ropeSection.head.col + 1,
                }
            }
        } else {
            if (ropeSection.head.col > ropeSection.tail.col) {
                return {
                    row: ropeSection.head.row + 1,
                    col: ropeSection.head.col - 1,
                }
            } else {
                return {
                    row: ropeSection.head.row + 1,
                    col: ropeSection.head.col + 1,
                }
            }
        }

    }
    if (Math.abs(ropeSection.head.row - ropeSection.tail.row ) > 1) {
        if (ropeSection.head.row > ropeSection.tail.row) {
            return {
                row: ropeSection.head.row - 1,
                col: ropeSection.head.col,
            }
        } else {
            return {
                row: ropeSection.head.row + 1,
                col: ropeSection.head.col,
            }
        }
    } else if (Math.abs(ropeSection.head.col - ropeSection.tail.col ) > 1){
        if (ropeSection.head.col > ropeSection.tail.col) {
            return {
                row: ropeSection.head.row ,
                col: ropeSection.head.col - 1,
            }
        } else {
            return{
                row: ropeSection.head.row ,
                col: ropeSection.head.col + 1,
            }
        }
    }
    return ropeSection.tail;
}

const commands = inputData.map(input => {
    const directionAndDistance = input.split(' ');
    let direction: Direction;
    switch (directionAndDistance[0]){
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
        distance: Number(directionAndDistance[1])
    } as Command
})


let rope: CompleteRope = {
    head: { row: 0, col: 0 },
    tail: [
        { row: 0, col: 0 },
        { row: 0, col: 0 },
        { row: 0, col: 0 },
        { row: 0, col: 0 },
        { row: 0, col: 0 },
        { row: 0, col: 0 },
        { row: 0, col: 0 },
        { row: 0, col: 0 },
        { row: 0, col: 0 },
    ]
}

const tailPositions = []

commands.forEach(command => {
    move(command, rope);
})

console.log(tailPositions.length);
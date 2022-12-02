import { rpsInput } from './day2.model';
export const isWinningMatchUp = (input: rpsInput) => 
    (input.elv === 'A' && input.me === 'B') ||
    (input.elv === 'B' && input.me === 'C') ||
    (input.elv === 'C' && input.me === 'A')

export const getWinningAnswer = (elv: string) => 
    elv === 'A' ? 'B' :
        elv === 'B' ? 'C' : 'A';

export const getLoosingAnswer = (elv: string) => 
elv === 'A' ? 'C' :
    elv === 'B' ? 'A' : 'B'

export const getPointsForOwnChoice = (choice: string) => 
    choice === 'A' ? 1 : 
        choice === 'B' ? 2 : 3; 

export const calcRpsRoundResult = (input: rpsInput) => {
    let pointzz = 0;
    if (input.elv === input.me){
        pointzz += 3
    } else if(isWinningMatchUp(input)){
        pointzz += 6
    }

    pointzz += getPointsForOwnChoice(input.me);
    return pointzz
}
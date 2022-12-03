import { syncReadFile } from '../general/readTxtFile';

const inputData: string[] = syncReadFile('./input.txt');

const findDuplicateCharacter = (val1: string, val2: string) => {
    for(let i = 0; i<val1.length; i++) {
        if (val2.includes(val1.charAt(i))) {
            return val1.charAt(i);
        }
    }
    console.error(val1 + ' and ' + val2 + ' have no characters in common');
}

const isUpperCase = (char: string) => {
    const givenChar = char;
    return givenChar === char.toUpperCase();
}

const calcValueForCharacter = (charAsString: string): number => {
    const char: string = charAsString.charAt(0)
    if(isUpperCase(char)) {
        return char.charCodeAt(0) - 38;
    } else {
        return char.charCodeAt(0) - 96;
    }
}

const total = inputData
    .map(input => [input.slice(0, input.length / 2), input.slice(input.length / 2)])
    .map((slicedData) => findDuplicateCharacter(slicedData[0], slicedData[1]))
    .map(char => calcValueForCharacter(char))
    .reduce((a, b) => a + b)

console.log(total);


import { syncReadFile } from '../general/readTxtFile';

const inputData: string[] = syncReadFile('./input.txt');

const findCommonCharacter = (val1: string, val2: string, val3) => {
    for(let i = 0; i<val1.length; i++) {
        const val1char = val1.charAt(i);
        if (val2.includes(val1char) && val3.includes(val1char)) {
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

let triplesArray = []
let triple = []

inputData.forEach(value => {
    triple.push(value);
    if (triple.length === 3) {
        triplesArray.push(triple);
        triple = []
    }
});

const result = triplesArray
    .map(([one, two, three]) => findCommonCharacter(one, two, three))
    .map(char => calcValueForCharacter(char))
    .reduce((a, b) => a + b)

console.log(result);
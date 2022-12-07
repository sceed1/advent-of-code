import { syncReadFile } from '../general/readTxtFile';

const inputData: string[] = syncReadFile('./input.txt');

interface File {
    name: string,
    size: number,
}

interface Directoy {
    name: string,
    parentDir: Directoy,
    childDirs?: Directoy[],
    containingFiles?: File[],
}

const emptyDir = {
    childDirs: [],
    containingFiles: []
}

let rootDir = {
    ...emptyDir,
    name: '/',
} as Directoy;

let currentDir = rootDir;

const changeDirectory = (destinationDir: string) => destinationDir === '..'
    ? currentDir.parentDir
    : currentDir.childDirs.find(child => child.name === destinationDir);

const listFilesAndDirectories = (index: number) => {
    console.log('index: ' + index + ' data: ', inputData[index]);
    while(!inputData[index].startsWith('$')) {
        const line = inputData[index].split(' ');
        if (line[0] === 'dir') {
            currentDir.childDirs.push({
                ...emptyDir,
                name: line[1],
                parentDir: currentDir,
            });
        } else {
            currentDir.containingFiles.push({
                size: Number(line[0]),
                name: line[1]
            })
        }
        index++;
    }
}

const executeCommand = (command: string, index) => {
    if (command.startsWith('cd')) {
        currentDir = changeDirectory(command.slice(3));
    } else {
        listFilesAndDirectories(index + 1);
    }
}

inputData
    .forEach((line, index) => {
        if (line.startsWith('$')) {
            executeCommand(line.slice(2), index)
            console.log(rootDir);
        }
    })


console.log(rootDir);
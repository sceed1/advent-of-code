import { syncReadFile } from '../general/readTxtFile';

const inputData: string[] = syncReadFile('./input.txt');

type File = {
    name: string,
    size: number,
}

type Directoy = {
    name: string,
    parentDir: Directoy,
    childDirs?: Directoy[],
    containingFiles?: File[],
}

const emptyDir = {
    childDirs: [],
    containingFiles: []
}

const rootDir = {
    ...emptyDir,
    name: '/',
} as Directoy;

let currentDir;

const changeDirectory = (destinationDir: string) => {
    if (destinationDir === '/') {
        return rootDir;
    } else {
        if (destinationDir === '..') {
            return currentDir.parentDir;
        } else {
            return currentDir.childDirs.find(child => child.name === destinationDir)
        }
    }
}

const createFileOrDir = (line: string) => {
    if (line.startsWith('dir')) {
        currentDir.childDirs.push({
            ...emptyDir,
            parentDir: currentDir,
            name: line.slice(4)
        })
    } else {
        const fileArr = line.split(' ');
        currentDir.containingFiles.push({
            size: Number(fileArr[0]),
            name: fileArr[1],
        })
    }

}


const executeCommand = (command: string) => {
    if (command.startsWith('cd')) {
        const newDir = {...changeDirectory(command.slice(3))}
        currentDir = newDir;
    }
}

inputData
    .forEach((line) => {
        if (line.startsWith('$')) {
            executeCommand(line.slice(2))
        } else {
            createFileOrDir(line)
        }
    })

console.log(rootDir.childDirs.map(c => c.name))

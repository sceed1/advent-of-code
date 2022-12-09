import { syncReadFile } from '../general/readTxtFile';

const inputData: string[] = syncReadFile('./input.txt');

type File = {
    name: string,
    size: number,
}

type Directoy = {
    name: string,
    parentDir: Directoy,
    childDirs: Directoy[],
    containingFiles: File[],
}

const rootDir: Directoy = {
    childDirs: [],
    containingFiles: [],
    name: '/',
    parentDir: {} as Directoy
};

let workingDir;

const changeOrCreateDirectory = (destinationDir: string) => {
    if (destinationDir === '/') {
        return rootDir;
    } else {
        if (destinationDir === '..') {
            return workingDir.parentDir;
        } else {
            return workingDir.childDirs.find(child => child.name === destinationDir)
        }
    }
}

const createFileOrDir = (line: string) => {
    if (line.startsWith('dir')) {
        workingDir.childDirs.push({
            childDirs: [],
            containingFiles: [],
            parentDir: workingDir,
            name: line.slice(4)
        })
    } else {
        const fileArr = line.split(' ');
        workingDir.containingFiles.push({
            size: Number(fileArr[0]),
            name: fileArr[1],
        })
    }

}


const executeCommand = (command: string) => {
    if (command.startsWith('cd')) {
        const newDir = {...changeOrCreateDirectory(command.slice(3))}
        workingDir = newDir;
    }
}

const dirs = []
const calcFileSizeOfDir = (dir: Directoy): number => {
    let dirFileSize = 0;
    dir.containingFiles.forEach(file => dirFileSize += file.size);
    dir.childDirs.forEach(childDir => dirFileSize += calcFileSizeOfDir(childDir));
    dirs.push(dirFileSize)
    return dirFileSize;
}

inputData
    .forEach((line) => {
        if (line.startsWith('$')) {
            executeCommand(line.slice(2))
        } else {
            createFileOrDir(line)
        }
    })

calcFileSizeOfDir(rootDir);

const sizeOfAllDirs = dirs.reduce((a, b) => a + b);

const result = dirs.filter(size => 47052440 - size < 40000000).reduce((a, b) => a > b ? b : a)


console.log(result);
//console.log(dirs.sort((a, b) => a - b).reverse());

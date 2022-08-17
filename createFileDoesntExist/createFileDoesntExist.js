import { constants } from "fs"

import { access, writeFile } from "fs/promises"

export default function createFileDoesntExist(path, filename) {
    access(`${path}${filename}`, constants.R_OK | constants.W_OK)
        .then((res) => console.log('file found'))
        .catch((err) => console.log('file not found, creating file'))
        .then(() => writeFile(`${path}${filename}`, ''))
        .then(() => console.log('file succesfully created'))
}
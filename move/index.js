import { readFile, writeFile, unlink } from "fs";

export default function(oldPath, newPath, cb) {
    _readFile(oldPath, (content) => _writeFile(newPath, content, (err) => _unlink(oldPath, () => success(oldPath, newPath))))
}

function _readFile(path, cb) {
    readFile(path, cb);
}

function _writeFile(path, content, cb) {
    writeFile(path, 'content', cb)
}

function _unlink(path, cb) {
    unlink(path, cb)
}

function success(oldPath, newPath) {
    console.log(`Succesfully moved file from ${oldPath} to ${newPath}`);
}
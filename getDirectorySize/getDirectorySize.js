import { stat, readdir } from "fs";


export default function getDirectorySize(path, cb) {
    getFiles(path, (err, files) => countFilesSize(files, path, (res) => console.log(res)))
}

function getFiles(path, cb) {
    readdir(path, cb)
}

function countFilesSize(files, path, cb) {
    let size = 0;
    files.forEach((filename, index) => {
        getFileSize(`${path}/${filename}`, (res) => {
            size += res
            if (index === files.length - 1) {
                cb(size)
            }
        })
    })
}

function getFileSize(file, cb) {
    stat(file, function(err, stat) {
        if (err) {
            return cb(err);
        }
        cb(stat.size)
    });
}
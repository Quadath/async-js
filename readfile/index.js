import { readFile } from "fs";

export default async function print(path) {
    readFile(path, 'utf-8',(_error, data) => console.log(data));
}


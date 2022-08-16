import { writeFile } from "fs";

export default async function write(path, data, callback) {
    writeFile(path, data, callback);
}
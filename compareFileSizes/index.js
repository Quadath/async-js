import { stat } from "fs"

export default async function compareFizeSizes(path1, path2, c) {
    stat(path1, (err, data) => {
        if (err) {
            c(-1);
        } else {
            stat(path2, (err1, data2) => {
                if (err1) {
                    c(-1);
                } else {
                    // console.log(`${data.size} ${data2.size}`)
                    if(data.size > data2.size) {
                        c(1);
                    } else if(data.size === data2.size) {
                        c(0);
                    } else {
                        c(-1);
                    }
                }
            })
        }})
}
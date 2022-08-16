import print from "./readfile/index.js";
import write from "./writefile/index.js";

// print('./readfile/hi.txt');
write('myfile', 'data', (err) => {
    if (!err) {
        console.log('success');
    } else {
        throw err;
    }
  });
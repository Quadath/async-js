import print from "./readfile/index.js";
import write from "./writefile/index.js";
import compareFizeSizes from "./compareFileSizes/index.js";
import move from "./move/index.js";

// print('./readfile/hi.txt');

// write('myfile', 'data', (err) => {
//     if (!err) {
//         console.log('success');
//     } else {
//         throw err;
//     }
//   });

// compareFizeSizes('./compareFileSizes/file1.txt', './compareFileSizes/file2.txt', (ans) => {

//     console.log(ans)
// })

move('./compareFileSizes/file1.txt', './compareFileSizes/file4.txt', (err) => {
    if (error) {
        console.log('oops');
        return;
      }
      console.log('yes!')
})

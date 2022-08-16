import compareFizeSizes from "../compareFileSizes";

test('comparing file sizes', () => {

    compareFizeSizes('../compareFileSizes/file2.txt', '../compareFileSizes/file1.txt', (ans) => expect(ans).toBe(1))
    compareFizeSizes('../compareFileSizes/file1.txt', '../compareFileSizes/file3.txt', (ans) => expect(ans).toBe(0))
    compareFizeSizes('../compareFileSizes/file2.txt', '../compareFileSizes/file4.txt', (ans) => expect(ans).toBe(-1))
    compareFizeSizes('../compareFileSizes/file1.txt', '../compareFileSizes/file2.txt', (ans) => expect(ans).toBe(-1))
})
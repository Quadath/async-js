import fsp from 'fs/promises'

export default async function(input1, input2, output) {
    const data1 = await fsp.readFile(input1, 'utf-8');
    const data2 = await fsp.readFile(input2, 'utf-8');
    await fsp.writeFile(output, `${data1}${data2}`);
}
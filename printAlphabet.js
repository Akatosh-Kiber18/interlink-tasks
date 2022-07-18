function printAlphabet() {
    let j = 1;
    let result = ''
    for (let i = 65; i < 91; i++) {
        result += String.fromCharCode(i) + ' ' + j + '\n'
        j++
    }
    console.log(result.slice(0, result.length - 1));
}
printAlphabet()
console.log(1)
/*export function printAlphabet() {
    for (let i = 65; i < 91; i++) {
        return String.fromCharCode(i) + ' ' + i- 64
    }
}*/


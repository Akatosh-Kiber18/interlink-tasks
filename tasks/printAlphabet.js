function printAlphabet(cols) {
    let result = ''
    let rows = Math.ceil(26 / cols)
    for (let i = 65; i < 91; i++) {
        for (let j = i; j < 91; j += rows) {
            if (j === i) {
                result += String.fromCharCode(j)
            } else {
                result += '\t' + String.fromCharCode(j)
            }
        }
        result += '\n'
        if (i === 64 + rows) {
            i = 91
        }
    }
    console.log(result);
}

printAlphabet(4)

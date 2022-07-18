export function renderTextInFrame(text) {
    const star = "*"
    let firstLine = star.repeat(text.length+6)
    let lastLine = star.repeat(text.length+6)
    let result = '';
    result += firstLine +  '\n' + text + '\n' + lastLine; // заміни власним кодом
    return result
}
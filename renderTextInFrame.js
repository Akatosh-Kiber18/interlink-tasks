function renderTextInFrame(text) {
    const s = "*"
    let firstLine = s.repeat(text.length + 8) + '\n'
    let splitLine = s + " ".repeat(text.length + 6) + s
    let lastLine = '\n' + s.repeat(text.length + 8)
    return firstLine + splitLine + '\n' + s + "   " + text + "   " + s + '\n' + splitLine + lastLine;
}


console.log(renderTextInFrame("HEK IS GOIN NAN HHERTE"))
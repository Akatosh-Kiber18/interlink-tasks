export function textToAlphabetPos(text) {
    text = text.toUpperCase()
    let result = text.split("").map((e, i) => text.charCodeAt(i) - 64 === -32 ? " " : text.charCodeAt(i) - 64)
    return result.join(" ").trim()
}
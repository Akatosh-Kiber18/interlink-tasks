export function plural(count, one, few, many) {
    const prefix = count + " ";
    if (count >= 5 || count === 0) {
        return prefix + many
    }
    return prefix + (count === 1 ? one : few)
}
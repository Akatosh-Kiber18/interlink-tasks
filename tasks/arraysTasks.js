export function isValidParentheses(expression) {
        let brackets = "()"
        let stack = []

        for(let e of expression) {
            let bracketsIndex = brackets.indexOf(e)
            if (bracketsIndex === -1){
                continue
            }
            if(bracketsIndex % 2 === 0) {
                stack.push(bracketsIndex + 1)
            } else {
                if(stack.pop() !== bracketsIndex) {
                    return false;
                }
            }
        }
        return stack.length === 0
}

/*function capitalizeText(text) {
    text = text.split(' ')
    let res = ''
    for (let i = 0; i < text.length; i++) {
        let u = text[i]
        u = u.replace(u[0], u[0].toUpperCase())
        res += u + " "
    }
    return res;
}*/

/*function difference(a, b) {
    return a.length > b.length ? a.filter( (n, i) => n !== b[i]) : []
}*/
/*
function sum(items) {
    return items.length > 0 ? items.reduce((i,j)=> i + j, 0 ) : 0
}
*/

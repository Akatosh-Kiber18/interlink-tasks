export function renderField(field) {
    const emptyCell = "   ";
    const x = " x ";
    const o = " 0 ";
    const splitLine = "\n---+---+---\n";

   let finalField = field.map((c,i)=> {
            if(c===0) {
                return i!==2 && i !==5 && i !==8 ? emptyCell + "|" : emptyCell
            }
            if (c===1) {
                return i!==2 && i !==5 && i !==8 ? x + "|" : x
            }
            if (c===2) {
                return i!==2 && i !==5 && i !==8 ? o + "|" :  o
            }
    })

    return finalField.join("")
}
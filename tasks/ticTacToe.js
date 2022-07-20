export function renderField(field) {
    const cleanCell = "   ";
    const xCell = " x ";
    const oCell = " 0 "
    let firstLine = ""
    let thirdLine = ""
    let fifthLine = ""
    let splitLine = "\n---+---+---\n"

    for (let i = 0; i < 3; i++) {
        if (field[i] === 0) {
            if (i === 2) {
                firstLine += cleanCell
            } else {
                firstLine += cleanCell + "|"
            }
        } else if (field[i] === 1) {
            if (i === 2) {
                firstLine += xCell
            } else {
                firstLine += xCell + "|"
            }
        } else if (field[i] === -1) {
            if (i === 2) {
                firstLine += oCell
            } else {
                firstLine += oCell + "|"
            }
        }
    }
    for (let i = 3; i < 6; i++) {
        if (field[i] === 0) {
            if (i === 5) {
                thirdLine += cleanCell
            } else {
                thirdLine += cleanCell + "|"
            }
        } else if (field[i] === 1) {
            if (i === 5) {
                thirdLine += xCell
            } else {
                thirdLine += xCell + "|"
            }
        } else if (field[i] === -1) {
            if (i === 5) {
                thirdLine += oCell
            } else {
                thirdLine +=  oCell + "|"
            }
        }
    }
    for (let i = 6; i < 9; i++) {
        if (field[i] === 0) {
            if (i === 8) {
                fifthLine += cleanCell
            } else {
                fifthLine += cleanCell + "|"
            }
        } else if (field[i] === 1) {
            if (i === 8) {
                fifthLine += xCell
            } else {
                fifthLine += xCell + "|"
            }
        } else if (field[i] === -1) {
            if (i === 8) {
                fifthLine += oCell
            } else {
                fifthLine += oCell + "|"
            }
        }
    }


    return firstLine + splitLine+ thirdLine + splitLine + fifthLine
}
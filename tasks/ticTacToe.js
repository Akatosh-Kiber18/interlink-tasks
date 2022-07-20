export function renderField(field) {
    const cleanCell = "   ";
    const xCell = " x ";
    const oCell = " 0 "
    let gameField = ""
    let splitLine = "\n---+---+---\n"

    for (let i = 0; i < 9; i++) {
        if (field[i] === 0) {
            if (i === 2|| i === 5 || i === 8) {
                gameField += cleanCell
            } else {
                gameField += cleanCell + "|"
            }
        } else if (field[i] === 1) {
            if (i === 2|| i === 5 || i === 8) {
                gameField += xCell
            } else {
                gameField += xCell + "|"
            }
        } else if (field[i] === -1) {
            if (i === 2|| i === 5 || i === 8) {
                gameField += oCell
            } else {
                gameField += oCell + "|"
            }
        }
        if (i===2||i===5) {
            gameField += splitLine
        }
    }

    return gameField
}
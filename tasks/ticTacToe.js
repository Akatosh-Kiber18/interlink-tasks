function gameStatus(field) {
    const board = convertTo2D(field);
    const boardSize = board.length;
    //row
    for (let i = 0; i < boardSize; i++) {
        let count = 0;
        for (let j = 0; j < boardSize; j++) {
            if (board[i][j] === board[i][0]) {
                count++;
            }
        }
        if (count === boardSize && board[i][0] !== 0) {
            return board[i][0] === -1 ? '0' : 'x';
        }
    }
    //secondary diagonal
    let count = 0;
    for (let i = 0; i < boardSize; i++) {
        if (board[i][boardSize - 1 - i] === board[0][boardSize - 1]) {
            count++;
        }
        if (count === boardSize && board[0][boardSize - 1] !== 0) {
            return board[0][boardSize - 1] === -1 ? '0' : 'x';
        }
    }
    //main diagonal
    count = 0;
    for (let i = 0; i < boardSize; i++) {
        if (board[i][i] === board[0][0]) {
            count++;
        }
        if (count === boardSize && board[0][0] !== 0) {
            return board[0][0] === -1 ? '0' : 'x';
        }
    }

    // column
    for (let i = 0; i < boardSize; i++) {
        let count = 0;
        for (let j = 0; j < boardSize; j++) {
            if (board[j][i] === board[0][i]) {
                count++;
            }
        }
        if (count === boardSize && board[0][i] !== 0) {
            return board[0][i] === -1 ? '0' : 'x';
        }
    }

    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            if (board[i][j] === 0) {
                return 'turn'
            }
        }
    }
    return 'end'
}

function convertTo2D(field) {
    const fieldSize = Math.sqrt(field.length);
    const board = [];
    let c = 0;
    for (let i = 0; i < fieldSize; i++) {
        const row = [];
        for (let j = 0; j < fieldSize; j++) {
            row.push(field[c++]);
        }
        board.push(row);
    }
    return board;
}

const splitLine = "\n---+---+---\n";

export function renderField(field) {
    const board = convertTo2D(field);
    let result = [];
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            result.push(" ");
            if (board[i][j] === 0) {
                result.push(" ");
            } else if (board[i][j] === 1) {
                result.push("x");
            } else if (board[i][j] === -1) {
                result.push("0");
            }
            result.push(" ");
            result.push("|");
        }
        result.pop()
        result.push(splitLine);
    }
    result.pop();
    return result.join('');
}

/*
export function renderField(field) {
    const cleanCell = "   ";
    const xCell = " x ";
    const oCell = " 0 ";
    let gameField = "";
    let splitLine = "\n---+---+---\n";

    const gameBoard = [
        [field[0],field[1],field[2]],
        [field[3],field[4],field[5]],
        [field[6],field[7],field[9]]
    ];
    let gameStatus;

    for (let i = 0; i < gameboardSize; i++) {
        for (let j = 0; j < gameboardSize; j++) {
            if (gameBoard[i][j]===0){
                gameStatus = 'turn'
            } else gameStatus = 'end'
        }
    }


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
}*/
/*[
    [0, 0], [0, 1], [0, 2], [0, 3], [0, 4],
    [1, 0], [1, 1], [1, 2], [1, 3], [1, 4],
    [2, 0], [2, 1], [2, 2], [2, 3], [2, 4],
    [3, 0], [3, 1], [3, 2], [3, 3], [3, 4],
    [4, 0], [4, 1], [4, 2], [4, 3], [4, 4]
]*/

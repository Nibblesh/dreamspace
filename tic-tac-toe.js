// You are given the state of a tic-tac-toe board as a list of 3 strings, like this:
// ```
// ['XOX',
//  ' O ',
//  '   ']
// ```

// You goal is to identify whether the game is over or not, and if it is, whether it's a draw or a win for X or O.
// Bonus points for returning the winning move for X or O if there is one.


const exampleBoard =
['XOX',
 ' O ',
 '   ']

// Assuming X has the first turn.

const checkHorizontal = (board) => {
    let winFound = false
    for (let index = 0; index < 3; index++) {
        const currentRow = board[index]
        const foundMatch = currentRow.split('').every((value) => currentRow[0] === value)
        if (foundMatch) {
            winFound = true
            break;
        };
    }
    return winFound;
}

const checkVertical = (board) => {
    for (let index = 0; index < 3; index++) {
        currentColumn = [board[0][index], board[1][index], board[2][index]]

        const [first, ...rest] = currentColumn;
        for (let j = 0; j < rest.length; j++) {
            if (rest[j] !== first) return false;
        }
    }
}

const checkDiagonal = (board) => {

}

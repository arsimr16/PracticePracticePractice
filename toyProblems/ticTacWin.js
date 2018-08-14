// design an algorithm to determine if someone has one a game of tic tac toe

// I: an array of board values Xs and Os
// O: a boolean
// C: none
// E: diff sized boards, diff num of Xs or Os in a row to win
const ticTacWin = board => {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];
	for (let i = 0; i < lines.length; i++) {
		if (board[lines[i][0]] && board[lines[i][0]] === board[lines[i][1]] && board[lines[i][0]] === board[lines[i][2]]) {
			return true;
		}
	}
	return false;
};

const assertEquals = (actual, expected, testName) => {
	if (actual === expected) {
		console.log(`passed ${testName}`);
	} else {
		console.log(`FAILED ${testName}: expected ${expected}, but got ${actual}`);
	}
};

const boardWithWinner = ['X','O','','','X','','','O','X'];
const boardWithNoWinner = ['X','X','O','O','O','X','X','O','X'];
const emptyBoard = ['','','','','','','','',''];

assertEquals(ticTacWin(boardWithWinner), true, 'returns true when there is a winner');
assertEquals(ticTacWin(boardWithNoWinner), false, 'returns false when there is not a winner');
assertEquals(ticTacWin(emptyBoard), false, 'returns false when the board is empty');

/*
The solution for a 3 x 3 board is pretty simple, but this solution is hard coded and does not scale
well to an n x n board.  We can write nested for loops to check the rows, columns, and diagonals, but
this is still pretty messy.  Ideally this function would be called after each move.  We would only need
to check values in all directions from the last move.  We could iterate up, down, left, right, and 
check both diagonals from that point. If there are x number of the same values in a row then there is a winner
*/

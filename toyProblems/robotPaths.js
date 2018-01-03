// A robot located at the top left corner of a 5x5 grid is trying to reach 
// the bottom right corner. The robot can move up, down, left, or right,
// but cannot visit the same spot twice. How many unique paths are there
// to the bottom right corner?  Make your solution work for any NxN size grid

// board class
class Board {
	// create an NxN board filled with false values
	constructor(n) {
		this.board = Array(n).fill(Array(n).fill(false));
	}

	// toggle value at row i, column j (true or false)
	togglePiece(i, j) {
		this.board[i][j] = !this.board[i][j];
	}

	// return whether a position on the board has been visited
	hasBeenVisited(i, j) {
		return !!this.board[i][j];
	}
}

// I: initially called with n (board size); optional parameters: board, row, column; initialize optional values if not given
// O: number of unique paths from upper left to lower right corner
// C: should work for any size grid
// E: n = 1, start === end; 
const robotPaths = (n, board = new Board(n), i = 0, j = 0) => {
	
}
// time complexity:
// space complexity:

/**************************************************************/

// tests
const assertDeepEquals = (actual, expected, testname) => {
	if (JSON.stringify(actual) === JSON.stringify(expected)) {
		console.log(`passed ${testname}`);
	} else {
		console.log(`FAILED ${testname}: expected "${expected}", but got "${actual}"`);
	}
};

// board class
const test0 = new Board(5);
assertDeepEquals(test0.board.length, 5, 'board should have n rows');
assertDeepEquals(test0.board[0].length, 5, 'board should have n columns');
assertDeepEquals(test0.board[0].every(item => item === false), true, 'should initialize all positions to false');
assertDeepEquals(test0.hasBeenVisited(2, 3), false, 'hasBeenVisited should return false if value is false');

test0.togglePiece(2, 3);
assertDeepEquals(test0.board[2][3], true, 'togglePiece method should change false value to true');
assertDeepEquals(test0.hasBeenVisited(2, 3), true, 'hasBeenVisited should return true if value is true');

test0.togglePiece(2, 3);
assertDeepEquals(test0.hasBeenVisited(2, 3), false, 'togglePiece should change false value to true');

// robotPaths
robotPaths(5);

// Write an algorithm such that if an element in an NxN matrix is 0, its entire row and column are set to 0

// I: a matrix
// O: matrix with rows and columns containing 0 all set to 0
// C: none
// E: the rows and columns are only affected by original 0s 
// (otherwise if there were any 0s, the whole matrix would end up being 0)

const zeroMatrix = matrix => {
	const n = matrix.length;
	const rows = Array(n).fill(false);
	const cols = Array(n).fill(false);
	for (let r = 0; r < n; r++) {
		for (let c = 0; c < n; c++) {
			if (matrix[r][c] === 0) {
				rows[r] = true;
				cols[c] = true;
			}
		}
	}

	for (let r = 0; r < n; r++) {
		for (let c = 0; c < n; c++) {
			if (rows[r] || cols[c]) {
				matrix[r][c] = 0;
			}
		}
	}
	return matrix;
};

const rowHasZero = row => row.includes(0);

const colHasZero = (col, matrix) => {
	for (let row = 0; row < matrix.length; row++) {
		if (row[col] === 0) {
			return true;
		}
	}
	return false;
}

// time complexity: O(n^2)
// space complexity: O(n)

// tests
const assertMatrixEquals = (actual, expected, testname) => {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected) {
  	console.log(`passed ${testname}`);
  } else {
  	console.log(`FAILED ${testname}: expected "${expected}", but got "${actual}"`);
  }
};

const before0 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
assertMatrixEquals(zeroMatrix(before0), before0, 'should not change if there are no zeros');
const before1 = [[0, 2, 3], [4, 5, 6], [7, 8, 9]];
const after1 = [[0, 0, 0], [0, 5, 6], [0, 8, 9]];
assertMatrixEquals(zeroMatrix(before1), after1, 'should convert entire row and column containing 0 to zeros');
const before2 = [[1, 0, 3], [4, 5, 0], [7, 8, 9]];
const after2 = [[0, 0, 0], [0, 0, 0], [7, 0, 0]];
assertMatrixEquals(zeroMatrix(before2), after2, 'should handle matrix with multiple 0s');
const before3 = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
assertMatrixEquals(zeroMatrix(before3), before3, 'should not change if matrix is all 0s');
const before4 = [[1, 2, 3], [4, 5, 6], [7, 0, 0]];
const after4 = [[1, 0, 0], [4, 0, 0], [0, 0, 0]];
assertMatrixEquals(zeroMatrix(before4), after4, 'should handle multiple 0s in same row');
const before5 = [[1, 0, 3], [4, 5, 6], [7, 0, 9]];
const after5 = [[0, 0, 0], [4, 0, 6], [0, 0, 0]];
assertMatrixEquals(zeroMatrix(before5), after5, 'should handle multiple 0s in same column');

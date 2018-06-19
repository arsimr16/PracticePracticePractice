// given an image represented by an NxN matrix, where each pixel in the image is 4 bytes,
// write a method to rotate the image by 90 degrees.  Can you do this in place?

// 1 byte = 8 bits (e.g. 00101110)
// 1 byte = 1 char (e.g. 'a', 'B', '$', '8');
// 4 bytes = 4 characters

// I: an image represented by an NxN matrix
// O: the image rotated 90 degrees (the problem does not specify in which direction)
// C: can you do this in place?
// E: empty image?

/*
[[0, 1],
 [2, 3]]

 becomes

[[2, 0],
 [3, 1]]
*/

/*
[[0, 1, 2],
 [3, 4, 5],
 [6, 7, 8]]
 
 becomes 

[[6, 3, 0],
 [7, 4, 1],
 [8, 5, 2]]
*/

/*
[[0,  1,  2,  3],
 [4,  5,  6,  7],
 [8,  9,  10, 11],
 [12, 13, 14, 15]]

  becomes

 [[12, 8,  4, 0],
  [13, 9,  5, 1],
  [14, 10, 6, 2],
  [15, 11, 7, 3]]
*/

const rotateMatrixClockwise = matrix => {
	matrix = matrix.reverse();
	matrix = flipDiagonal(matrix);
	return matrix;
};

const rotateMatrixCounterClockwise = matrix => {
	matrix = matrix.map(row => row.reverse());
	matrix = flipDiagonal(matrix);
	return matrix;
};

// line through northwest and southeast corners
const flipDiagonal = matrix => {
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < i; j++) {
			const temp = matrix[i][j];
			matrix[i][j] = matrix[j][i];
			matrix[j][i] = temp;
		}
	}
	return matrix;
};

const assertEquals = (actual, expected, testName) => {
	if (JSON.stringify(actual) === JSON.stringify(expected)) {
		console.log(`passed ${testName}`);
	} else {
		console.log(`FAILED ${testName}: expected "${expected}", but got "${actual}"`);
	}
}

const matrix2 = [[0, 1], [2, 3]];
const matrix3 = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
const matrix4 = [[0,  1,  2,  3], [4,  5,  6,  7], [8,  9,  10, 11], [12, 13, 14, 15]];

console.log('#rotateMatrixClockwise()');
assertEquals(rotateMatrixClockwise(matrix2), [[2, 0], [3, 1]], '2x2');
assertEquals(rotateMatrixClockwise(matrix3), [[6, 3, 0], [7, 4, 1], [8, 5, 2]], '3x3');
assertEquals(rotateMatrixClockwise(matrix4), [[12, 8, 4, 0], [13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3]], '4x4');
console.log('');
console.log('#rotateMatrixCounterClockwise');
assertEquals(rotateMatrixCounterClockwise(matrix2), [[0, 1], [2, 3]], '2x2');
assertEquals(rotateMatrixCounterClockwise(matrix3), [[0, 1, 2], [3, 4, 5], [6, 7, 8]], '3x3');
assertEquals(rotateMatrixCounterClockwise(matrix4), [[0,  1,  2,  3], [4,  5,  6,  7], [8,  9,  10, 11], [12, 13, 14, 15]], '4x4');

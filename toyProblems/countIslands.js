/*
Island Count
Given a 2D array binaryMatrix of 0s and 1s, implement a function getNumberOfIslands 
that returns the number of islands of 1s in binaryMatrix.

An island is defined as a group of adjacent values that are all 1s. A cell in 
binaryMatrix is considered adjacent to another cell if they are next to each either on the same 
row or column. Note that two values of 1 are not part of the same island if they’re sharing only a 
mutual “corner” (i.e. they are diagonally neighbors).

Explain and code the most efficient solution possible and analyze its time and space complexities.

Example:

input:  binaryMatrix = [ [0,    1,    0,    1,    0],
                         [0,    0,    1,    1,    1],
                         [1,    0,    0,    1,    0],
                         [0,    1,    1,    0,    0],
                         [1,    0,    1,    0,    1] ]
                         
                         
input:  binaryMatrix = [ [0,    1,    0,    0,    0],
                         [0,    1,    0,    0,    0],
                         [0,    1,    0,    1,    0],
                         [0,    1,    1,    1,    0],
                         [0,    0,    0,    0,    0] ]
                         
            island count = 6
// output: 6 # since this is the number of islands in binaryMatrix.    
*/

// I: matrix of binary ints
// O: number of islands
// C: none
// E: any 1s in same column or row touching form an island; diagonal doesn't count

const countIslands = (matrix) => {
  let islandCount = 0;
  // iterate over all values in matrix
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      // if the current item is part of an island
      if (matrix[i][j] === 1) {
        // increase the island count
        islandCount++;
        // set curr position to 0 (to avoid counting same position again)
        matrix[i][j] = 0;
        // check all the neighbors of the curr position 
        checkNeighbors(matrix, i, j);
      }
    }
  }
  return islandCount;
};

// if curr space is part of island, set curr space to 0 and check neighbors
const checkSpace = (matrix, i, j) => {
  // check if space is within matrix boundaries
  if (i >= 0 && i < matrix.length && j >= 0 && j < matrix.length) {
    if (matrix[i][j] === 1) {
      matrix[i][j] = 0;
      checkNeighbors(matrix, i, j);
    }
  }
};

// call checkSpace on left, right, top, and bottom neighbors
const checkNeighbors = (matrix, i, j) => {
  checkSpace(matrix, i - 1, j);
  checkSpace(matrix, i + 1, j);
  checkSpace(matrix, i, j - 1);
  checkSpace(matrix, i, j + 1);
}

// tests:

const input0 = [ [0,    1,    0,    1,    0],
                 [0,    0,    1,    1,    1],
                 [1,    0,    0,    1,    0],
                 [0,    1,    1,    0,    0],
                 [1,    0,    1,    0,    1] ];



// check curr item is within bounds
// call function on all neighbors






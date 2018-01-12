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
//
output: 6 # since this is the number of islands in binaryMatrix.
          
          
Constraints:

[time limit] 5000ms

[input] array.array.int binaryMatrix

1 ≤ binaryMatrix.length ≤ 100
1 ≤ binaryMatrix[i].length ≤ 100
[output] integer
    
*/

// [1, 1]

// I: matrix of binary ints
// O: number of islands
// C:
// E: any 1s in same column or row touching form an island; diagonal doesn't count

// island count

// iterate through matrix values
// if curr item is 1
  // determine if it is part of an island we already counted or a new island  
  // check the curr position in matrix copy
    // if the curr position is available
      // we have new island; increment island count
      // check all surrounding positions and mark any positions that are part of the same island as false
      
      // algorithm to check what belongs to an island
      // check next position in same row, keep including the spaces until we reach 0
      // check each columns in next row that has 1 in curr row
          // if space in same column has 1,
            // check left and right of that space
              // repeat everytime we find 1

const countIslands = (matrix) => {
  let islandCount = 0;
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === 1) {
        matrix[i][j] = 0;
        islandCount++;
        const checkNeighbors = (i, j) => {
          // check left
          if (i >= 0 && i < matrix.length && j - 1 >= 0 && j - 1 < matrix.length) {
            if (matrix[i][j - 1] === 1) {
              matrix[i][j - 1] = 0;
              checkNeighbors(i, j - 1);
            } 
          }
          // check right
          if (i >= 0 && i < matrix.length && j + 1 >= 0 && j + 1 < matrix.length) {
            if (matrix[i][j + 1] === 1) {
              matrix[i][j + 1] = 0;
              checkNeighbors(i, j + 1);
            } 
          }
          // check top
          if (i - 1 >= 0 && i - 1 < matrix.length && j >= 0 && j < matrix.length) {
            if (matrix[i - 1][j] === 1) {
              matrix[i - 1][j] = 0;
              checkNeighbors(i - 1, j);
            } 
          }
          // check bottom
          if (i + 1 >= 0 && i + 1 < matrix.length && j >= 0 && j < matrix.length) {
            if (matrix[i + 1][j] === 1) {
              matrix[i + 1][j] = 0;
              checkNeighbors(i + 1, j);
            } 
          }
          
        }
      }
    }
  }
  return islandCount;
}


let input = [ [0,    1,    0,    1,    0],
              [0,    0,    1,    1,    1],
              [1,    0,    0,    1,    0],
              [0,    1,    1,    0,    0],
              [1,    0,    1,    0,    1] ];

console.log(countIslands(input));

// move checkNeighbors outside of countIslands
// check curr item is within bounds
// call function on all neighbors






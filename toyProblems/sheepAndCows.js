/*
You are given a grid that represents a field.  Each space in the grid is a space the field.
Spaces are marked as either having grass ('Y') or not having grass ('N');
e.g. [ 'YNNY',
       'NYNY',
       'YYNN']
Adjacent patches of grass are considered part of the same pen.
In the above example there are 3 pens.

Each pen can feed either 1 sheep or 1 cow.

How many unique arragements of sheep and cows are there when there must be an even number of sheep?
Return this number.

for the example above there are 3 pens (let's call them 1, 2, and 3). the possible arrangements
with an even number of sheep are:

arrangement 1 (0 sheep):
1: cow
2: cow
3: cow

arrangement 2 (2 sheep):
1: sheep
2: sheep
3: cow

arrangement 3 (2 sheep):
1: sheep
2: cow
3: sheep

arrangement 4 (2 sheep):
1: cow
2: sheep
3: sheep

the output for this example should be 4
*/


// return NUMBER of possible unique combinations that have an even number of sheep
function Group(grid) {
    // find number of fields
    const numOfFields = countFields(grid);
    // when numOfFields > 0
    // number of unique combinations that have an even number of sheep = 2^numOfFields - 1
    // this is because for each field there are two possibilities (feeding a sheep or a cow)
    // for all combinations the result would be 2^n (2 * 2 * 2... for each field)
    // however half of these have an even number of sheep and half don't
    // therefore the result = 1/2 * 2^n
    // this is equivalent to 2^n / 2^1 or 2^(n-1)
    if (numOfFields === 0) {
      return 0;
    }
    return Math.pow(2, numOfFields - 1);
}

// return number of unique fields in a grid
function countFields(grid) {
  // split letters in each row b/c strings are immutable in JS
  for (let k = 0; k < grid.length; k++) {
      grid[k] = grid[k].split('');
  }
  let fieldCount = 0;
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
          if (grid[i][j] === 'Y') {
              fieldCount++;
              checkCell(grid, i, j);
          }
      }
  }
  return fieldCount;
}

function checkCell(grid, i, j) {
    // if curr cell is within boundaries of grid
    if (i >= 0 && i < grid.length && j >= 0 && j < grid[i].length) {
        if (grid[i][j] === 'Y') {
            // mark Y as N to avoid duplicate counting
            grid[i][j] = 'N';
            // console.log(grid, i, j);
            // check all adjacent neighbors
            checkCell(grid, i + 1, j);
            checkCell(grid, i - 1, j);
            checkCell(grid, i, j + 1);
            checkCell(grid, i, j - 1);
        }
    }
}

const assertEquals = (actual, expected, testname) => {
  if (actual === expected) {
    console.log(`passed ${testname}`);
  } else {
    console.log(`FAILED ${testname}: expected ${expected}, but got ${actual}`);
  }
};

// tests for countFields helper function
const grid0 = [''];
const grid1 = ['NNN', 'NNN', 'NNN'];
const grid2 = ['NNN', 'NNY', 'NNN'];
const grid3 = ['NNN', 'YYY', 'NNN'];
const grid4 = ['NYN', 'NYN', 'NYN'];
const grid5 = ['YNN', 'NYN', 'NNN'];
const grid6 = ['YNNY', 'NYNY', 'YYNN'];
assertEquals(countFields(grid0), 0, 'should return 0 when grid is empty');
assertEquals(countFields(grid1), 0, 'should return 0 when there are no patches of grass');
assertEquals(countFields(grid2), 1, 'should find a single field in a grid');
assertEquals(countFields(grid3), 1, 'should count patches of grass in same row as 1 field');
assertEquals(countFields(grid4), 1, 'should count patches of grass in same column as 1 field');
assertEquals(countFields(grid5), 2, 'should count diagonal patches of grass as separate fields');
assertEquals(countFields(grid6), 3, 'should return correct number of fields');

// tests for main group function
const grid7 = ['N'];
const grid8 = ['Y'];
const grid9 = ['YN', 'NY'];
const grid10 = ['YNYNY'];
const grid11 = ['YNNY', 'NNNN', 'YNNY'];
const grid12 = ['YNNY', 'NYYN', 'YNNY'];
assertEquals(Group(grid7), 0, 'should return correct num of combinations when there are no fields');
assertEquals(Group(grid8), 1, 'should return correct num of combinations when there is 1 fields');
assertEquals(Group(grid9), 2, 'should return correct num of combinations when there are 2 fields');
assertEquals(Group(grid10), 4, 'should return correct num of combinations when there are 3 fields');
assertEquals(Group(grid11), 8, 'should return correct num of combinations when there are 4 fields');
assertEquals(Group(grid12), 16, 'should return correct num of combinations when there are 5 fields');

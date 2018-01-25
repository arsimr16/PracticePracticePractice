/*
You are given a grid that represents a field.  Each space in the grid is a space the field.
Spaces are marked as either having grass ('Y') or not having grass ('N');
e.g. [ YNNY,
       NNNY,
       YYNN,
       NNNN ]
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
    let results = 0;
    // find number of fields
    const numOfFields = countFields(grid);
    
    // for testing countUniqueArrangements fn
    console.log(countUniqueArrangements(3, 2)); // should return 3
    //console.log(countUniqueArrangements(4, 2)); // should return 6
    //console.log(countUniqueArrangements(5, 2)); // should return 10
    
    // invoke countUniqeArrangements with numOfFields and all even numbers from 0 to numOfFields (inclusive)
    for (let i = 0; i <= numOfFields; i += 2) {
        results += countUniqueArrangements(numOfFields, i);
    }
    return results;
}

// return num of uniqe arrangements for a given number of fields and a given number of sheep
function countUniqueArrangements(fields, sheep) {
    let results = 0;
    // to get all unique arragements, for each field we can either have or not have a sheep
    // write a recursive fn that does the following:
    // build arrays where each index is a field
    // try including a sheep and not including a sheep at that index; track the # of sheep already used
    // if there are no sheep left and the length of the arr is <= fields
        // this is a valid unique arrangement, update the result
    function getArrangements(fields, sheep, currArrangement) {
        console.log('currArrangement', currArrangement, 'sheep', sheep);
        if (currArrangement.length <= fields && sheep === 0) {
            console.log('newArrangement', currArrangement);
            results++;
        } else if (currArrangement.length < fields && sheep > 0) {
            // do not include sheep
            currArrangement[currArrangement.length] = 'cow';
            getArrangements(fields, sheep, currArrangement);
            // do include sheep
            currArrangement[currArrangement.length - 1] = 'sheep';
            getArrangements(fields, sheep - 1, currArrangement);
        }
    }
    getArrangements(fields, sheep, []);
    return results;
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

// LeetCode #807 - Max Increase to Keep City Skyline

var maxIncreaseKeepingSkyline = function(grid) {
    let increase = 0;
    const maxForEachRow = [];
    const maxForEachCol = [];
    for (let r = 0; r < grid.length; r++) {
        maxForEachRow[r] = grid[r].reduce((a, b) => a > b ? a : b);
    }
    for (let c = 0; c < grid[0].length; c++) {
        let colMax = 0;
        grid.forEach(r => {
            colMax = Math.max(colMax, r[c]);
        });
        maxForEachCol[c] = colMax;
    }
    for(let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            const maxForCurrSpace = Math.min(maxForEachRow[r], maxForEachCol[c]);
            increase += maxForCurrSpace - grid[r][c];
        }
    }
    return increase;
};

// passes all tests on LeetCode
console.log(maxIncreaseKeepingSkyline([[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]) === 35);
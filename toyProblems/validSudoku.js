// Leetcode #36 
// code below passes all tests

const isValidSudoku = board => {
    const [rows, cols, squares] = groupByRowsColsSquares(board);
    
    for (let i = 0; i < 9; i++) {
        if (containsDuplicate([rows[i], cols[i], squares[i]])) return false;
    }
    
    return true;
};

const findSquare = (row, col) => {
    if (col <= 2) {
        if (row <= 2) return 0;
        if (row <= 5) return 1;
        if (row <= 8) return 2;
    }
    if (col <= 5) {
        if (row <= 2) return 3;
        if (row <= 5) return 4;
        if (row <= 8) return 5;
    }
    if (col <= 8) {
        if (row <= 2) return 6;
        if (row <= 5) return 7;
        if (row <= 8) return 8;
    }
};

const groupByRowsColsSquares = (board) => {
    const rows = [[], [], [], [], [], [], [], [], []];
    const cols = [[], [], [], [], [], [], [], [], []]; 
    const squares = [[], [], [], [], [], [], [], [], []];
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const curr = board[i][j];
            if (curr !== '.') {
                rows[i].push(curr);
                cols[j].push(curr);
                squares[findSquare(i, j)].push(curr);
            }
        }
    }
    return [rows, cols, squares];
};

const containsDuplicate = arrList => {
    for (let i = 0; i < arrList.length; i++) {
        const curr = arrList[i];
        if (curr.length !== new Set(curr).size) return true;
    }
    return false;
};

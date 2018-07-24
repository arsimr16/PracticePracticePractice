// Leetcode #419
// code below passes all tests

var countBattleships = function(board) {
  let result = 0;
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === 'X' && 
      	(row === 0 || board[row - 1][col] !== 'X') && 
      	(col === 0 || board[row][col - 1] !== 'X')) {
        result++;
      }
    }
  }
  return result;
};

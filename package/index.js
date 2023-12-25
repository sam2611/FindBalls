
function findBall(grid) {
    const res = [];
    for (let i = 0; i < grid[0].length; i++) {
      res[i] = dfs(0, i, grid);
    }
    return res;
  }
  
  function dfs(row, col, grid) {
    if (row === grid.length) {
      if (col < 0 || col >= grid[0].length) return -1;
      return col;
    }
  
    if (
      grid[row][col] === 1 &&
      (col + 1 >= grid[0].length || grid[row][col + 1] === -1)
    )
      return -1;
    else if (
      grid[row][col] === -1 &&
      (col - 1 < 0 || grid[row][col - 1] === 1)
    )
      return -1;
  
    const nrow = row + 1;
    const ncol = col + grid[row][col];
    if (
      nrow >= 0 &&
      nrow <= grid.length &&
      ncol >= 0 &&
      ncol < grid[0].length
    )
      return dfs(nrow, ncol, grid);
  
    return -1;
  }
  
  module.exports = findBall;
  
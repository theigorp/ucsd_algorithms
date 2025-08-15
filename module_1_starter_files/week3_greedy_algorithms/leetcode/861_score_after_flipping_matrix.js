//* O(n^2) or O(n * m)
function getMatrixScore(grid) {
    let score = 0;

    for (let i = 0; i < grid.length; i++) {
        score += parseInt(grid[i].join(''), 2);
    }

    return score;
}

function matrixScore(grid) {
  //* O(n * m) - n is number of rows
  for (let i = 0; i < grid.length; i++) {
    if (grid[i][0] === 0) {
      //* O(m) - m is number of columns (number of elements in row array)
      grid[i] = grid[i].map((number) => (number ? 0 : 1));
    }
  }
  //* O(m * n)
  // count the number of 1's in each column
  // if 1's < 0's count, mirror the values
  for (let i = 0; i < grid[0].length; i++) {
    let onesCount = 0;

    for (let j = 0; j < grid.length; j++) {
      onesCount += grid[j][i];
    }

    if (onesCount < grid.length - onesCount) {
      for (k = 0; k < grid.length; k++) {
        grid[k][i] = grid[k][i] ? 0 : 1;
      }
    }
  }

  const score = getMatrixScore(grid);
  return score;
}

// console.log(
//   matrixScore([
//     [0, 0, 1, 1],
//     [1, 0, 1, 0],
//     [1, 1, 0, 0],
//   ])
// );
// console.log(
//   matrixScore([
//     [1, 0, 0, 0],
//     [1, 1, 1, 1],
//     [1, 0, 0, 1],
//   ])
// );
// console.log(
//   matrixScore([
//     [0, 0, 0, 0],
//     [0, 1, 1, 1],
//     [1, 0, 0, 1],
//   ])
// );
// console.log(
//   matrixScore([
//     [0, 1, 1],
//     [1, 1, 1],
//     [0, 1, 0],
//   ])
// );

// console.log(matrixScore([[0,1],[0,1],[0,1],[0,0]]))
console.log(matrixScore([[1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1],[1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1],[1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1],[0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0],[1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0],[0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1],[1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1],[0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1],[1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1],[1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1],[0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0],[0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0],[0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0],[1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0],[1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0],[1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0],[0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1],[1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1],[1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0],[1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0]]
))

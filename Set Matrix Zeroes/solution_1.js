/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[0].length; y++) {
      if (matrix[x][y] === 0) {
        set$(x, y, matrix, "$");
      }
    }
  }

  set0(matrix, "$");
  return matrix;
};

const set$ = (i, j, matrix, sign) => {
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[0].length; y++) {
      if ((x === i || y === j) && matrix[x][y] !== 0 && matrix[x][y] !== sign) {
        matrix[x][y] = sign;
      }
    }
  }
};

const set0 = (matrix, sign) => {
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[0].length; y++) {
      if (matrix[x][y] === sign) {
        matrix[x][y] = 0;
      }
    }
  }
};

// testing
const matrix1 = [
  [0, 1, 1, 0],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
];

const matrix2 = [
  [1, 1, 1, 0],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
];

const matrix3 = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
setZeroes(matrix1);
setZeroes(matrix2);
setZeroes(matrix3);
console.log(matrix1);
console.log(matrix2);
console.log(matrix3);

// solution
/**
 * 1. Bring 0s to Row 1 and Column 1
 * 2. if x,y has a 0, then set x,0 and 0,y to 0
 * 3. Skip row x once you find one zero.
 * 4. Loop through x=(1->maxRows)
 * 5. Fill all cells with 0 if x,0 is 0
 * 6. Loop through y=(0->maxColumns)
 * 7. If 0,y is 0, then set all cells in column to 0
 */

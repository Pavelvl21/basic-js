const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

const setZeros = (matrix) => matrix
  .map((row) => row.map((item) => item === false ? 0 : 'mine'));

const getMinesCount = (field, row, col, width, height) => {
  let count = 0;
  for (let i = -1; i <= 1; i += 1) {
    for (let j = -1; j <= 1; j += 1) {
      const nearRow = row + i;
      const nearCol = col + j;
      if (nearCol >= 0 && nearCol < width && nearRow >= 0 && nearRow < height) {
        if (field[nearRow][nearCol] === 'mine') {
          count += 1;
        }
      }
    }
  }

  return count;
}
const setNearCount = (field) => {
  const result = field.map((rowItem, i) => {
    const row = rowItem.map((colItem, j) => {
      const width = rowItem.length;
      const height = field.length;
      const count = getMinesCount(field, i, j, width, height);
      const col = colItem !== 'mine' ? count : colItem;
      return col;
    });

    return row;
  });

  return result;
}

function minesweeper(matrix) {
  const zerosField = setZeros(matrix);
  return setNearCount(zerosField)
    .map((arr) => arr.map((item) => item === 'mine' ? 1 : item));
}

module.exports = {
  minesweeper
};

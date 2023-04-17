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

const setNearCount = (field) => {
  for (let i = 0; i < field.length; i += 1) {
    for (let j = 0; j < field[i].length; j += 1) {
      if (field[i][j] === 'mine') {
        if (j > 0) {
          field[i][j - 1] === 'mine' ? 'mine ' : field[i][j - 1] += 1;
          field[j - 1][i] === 'mine' ? 'mine ' : field[j - 1][i] += 1;
          field[j - 1][i + 1] === 'mine' ? 'mine ' : field[j - 1][i + 1] += 1;
        }
        if (i > 0) {
          field[j + 1][i - 1] === 'mine' ? 'mine ' : field[j + 1][i - 1] += 1;
        }
        field[i][i + 1] === 'mine' ? 'mine ' : field[i][i + 1] += 1;
        field[j + 1][i] === 'mine' ? 'mine ' : field[j + 1][i] += 1;
        field[j + 1][i + 1] === 'mine' ? 'mine ' : field[j + 1][i + 1] += 1;
      }
    }
  }
  return field;
}
function minesweeper(matrix) {
  const zerosField = setZeros(matrix);
  return setNearCount(zerosField)
    .map((arr) => arr.map((item) => item === 'mine' ? 1 : item));
}

module.exports = {
  minesweeper
};

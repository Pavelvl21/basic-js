const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = n.
    toString()
    .split('')
    .map((item) => Number(item));

  const coll = [];
  for (let i = 0; i < digits.length; i += 1) {
    const filtered = digits.filter((item, index) => i !== index);
    coll.push(filtered);
  }
  const resultColl = coll.map((item) => Number(item.join('')));
  
  return Math.max(...resultColl);
}

module.exports = {
  deleteDigit
};

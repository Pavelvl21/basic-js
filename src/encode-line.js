const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let count = 0;

  const counter = (str, i) => {
    const total = count === 0 ? '' : count += 1;
    result = `${result}${total}${str[i]}`;
    count = 0;
  }

  for (let i = 0; i < str.length; i += 1) {
    str[i] === str[i + 1] ? count += 1 : counter(str, i);
  }

  return result;
}

module.exports = {
  encodeLine
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  const result = [...arr];

  const mapping = {
    '--double-next': (arr, i) => arr[i] = arr[i + 1],
    '--double-prev': (arr, i) => arr[i] = arr[i - 1],
    '--discard-next': (arr, i) => {
      arr[i] = undefined;
      arr[i + 1] = undefined;
    },
    '--discard-prev': (arr, i) => {
      arr[i] = undefined;
      arr[i - 1] = undefined;
    }
  };

  result.map((item, i) => {
    if (mapping[item]) {
      return mapping[item](result, i);
    }

  });
  return result.filter((e) => e !== undefined);
}

module.exports = {
  transform
};

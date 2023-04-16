const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const getCount = (arr, item) => arr.reduce((acc, i) => i === item ? acc += 1 : acc += 0, 0);
  const isNormalized = (arr) => arr.every((item) => getCount(arr, item) === 1);

  const result =  names.map((item, i) => {
    const count = getCount(names.slice(0, i), item);
    return count === 0 ? item : `${item}(${count})`;
  });

  return isNormalized(result) ? result : renameFiles(result);
}

module.exports = {
  renameFiles
};

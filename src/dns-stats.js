const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {

  return domains.reduce((acc, domain) => {
    const dns = domain
      .split('.')
      .reverse()
      .map((item, i, arr) => `.${
        arr.slice(0, i + 1).join('.')
      }`)
    dns.forEach((item) => {
      acc.hasOwnProperty(item)
        ? acc[item] += 1
        : acc[item] = 1;
    });

    return acc;
  }, {});
}

module.exports = {
  getDNSStats
};

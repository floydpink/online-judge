/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  return n.toString(2).split('').reduce(function (prev, curr) { return curr === '1' ? prev + 1 : prev; }, 0);
};
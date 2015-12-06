//
// https://leetcode.com/problems/number-of-1-bits/
//

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  return n.toString(2).split('').reduce(function (prev, curr) { return curr === '1' ? prev + 1 : prev; }, 0);
};
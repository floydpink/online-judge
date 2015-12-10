//
// https://leetcode.com/problems/plus-one/
//

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (var i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) digits[i] = 0;
    else {
      digits[i]++;
      return digits;
    }
  }
  return [1].concat(digits);
};
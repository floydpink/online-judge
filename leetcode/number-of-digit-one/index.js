//
// https://leetcode.com/problems/number-of-digit-one/
//

/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
  var sum = 0;
  for (var m = 1; m <= n; m *= 10) {
    var r = Math.floor(n / m), k = n % m;
    sum += Math.floor((r + 8) / 10) * m + (r % 10 === 1 ? k + 1 : 0);
  }
  return sum;
};
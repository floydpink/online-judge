//
// https://leetcode.com/problems/happy-number/
//

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  if (n <= 0) return false;
  var sums = {};
  while (sums[n] === undefined) {
    sums[n] = true;
    var sum = 0;
    while (n > 0) {
      sum += (n % 10) * (n % 10);
      n = Math.floor(n / 10);
    }
    if (sum === 1) return true;
    else n = sum;
  }
  return false;
};

console.log(isHappy(19));
console.log(isHappy(1));
console.log(isHappy(6389));
console.log(isHappy(2));
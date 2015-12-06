//
// https://leetcode.com/problems/ugly-number/
//

/**
 * @param {number} number
 * @return {boolean}
 */
var isUgly = function (num) {
  if (num <= 0) return false;
  var number = num;
  if (number === 1) return true;
  if (number % 2 === 0) {
    number = number / 2;
  }
  if (number % 3 === 0) {
    number = number / 3;
  }
  if (number % 5 === 0) {
    number = number / 5;
  }
  return number === num ? false : number > 1 ? isUgly(number) : true;
};

console.log(isUgly(2));
console.log(isUgly(3));
console.log(isUgly(5));
console.log(isUgly(45));
console.log(isUgly(14));
console.log(isUgly(17));
console.log(isUgly(-15));
console.log(isUgly(-2147483648));
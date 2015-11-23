/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  var div = 1;
  while (Math.floor(x / div) >= 10) {
    div *= 10;
  }
  while (x >= 10) {
    var left = Math.floor(x / div);
    var right = x % 10;
    if (left !== right) {
      return false;
    }
    x = Math.floor((x % div) / 10);
    div /= 100;
  }
  return div <= 10 || x === 0;
};

console.log(isPalindrome(1000030001) === false);
console.log(isPalindrome(0) === true);
console.log(isPalindrome(-23) === false);
console.log(isPalindrome(1) === true);
console.log(isPalindrome(5) === true);
console.log(isPalindrome(10) === false);
console.log(isPalindrome(11) === true);
console.log(isPalindrome(100) === false);
console.log(isPalindrome(112) === false);
console.log(isPalindrome(111) === true);
console.log(isPalindrome(525) === true);
console.log(isPalindrome(1001) === true);
console.log(isPalindrome(9999) === true);
console.log(isPalindrome(1000021) === false);
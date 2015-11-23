/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  return x.toString() === x.toString().split('').reverse().join('');
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
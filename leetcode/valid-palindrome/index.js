//
// https://leetcode.com/problems/valid-palindrome/
//

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  var chars = s.split('').filter(function (c) { return /[a-z0-9]/.test(c.toLowerCase()); });
  for (var i = 0; i < Math.floor(chars.length / 2); i++) {
    if (chars[i].toLowerCase() !== chars[chars.length - 1 - i].toLowerCase()) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('aA'));
console.log(isPalindrome('1a2'));
console.log(isPalindrome('1a1'));
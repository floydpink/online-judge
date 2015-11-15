// Inspired by the elegant Java solution at  https://leetcode.com/discuss/51223/my-7-lines-recursive-java-solution
/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
  var j = 0;
  for (var i = s.length - 1; i >= 0; i--) {
    if (s.charAt(i) === s.charAt(j)) {
      j += 1;
    }
  }
  if (j === s.length) {
    return s;
  }
  var suffix = s.substring(j);
  return suffix.split('').reverse().join('') + shortestPalindrome(s.substring(0, j)) + suffix;
};
//
// https://leetcode.com/problems/shortest-palindrome/
//

'use strict';

/**
 * @param {string} s
 * @return {string}
 */
var counter = 0;
var shortestPalindrome = function (s) {
  console.log('.>', ++counter, s);
  var j = 0;
  for (var i = s.length - 1; i >= 0; i--) {
    if (s.charAt(i) === s.charAt(j)) {
      j++;
    }
  }
  if (j === s.length) {
    return s;
  }
  var suffix = s.substring(j), reversed = suffix.split('').reverse().join('');
  return reversed + shortestPalindrome(s.substring(0, j)) + suffix;
};

console.log(shortestPalindrome('malayalam'));
console.log(shortestPalindrome('malayalamp'));
console.log(shortestPalindrome('malayzazlam'));
//console.log(shortestPalindrome('malamalayalama'));
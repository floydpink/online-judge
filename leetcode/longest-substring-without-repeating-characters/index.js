//
// https://leetcode.com/problems/longest-substring-without-repeating-characters/
//

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  var start = 0, map = {}, maxLength = 0;
  for (var i = 0; i < s.length; i++) {
    var char = s.charAt(i);
    if (map[char] !== undefined) {
      start = Math.max(start, map[char] + 1);
    }
    map[char] = i;
    maxLength = Math.max(maxLength, i + 1 - start);
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring('abb'));
console.log(lengthOfLongestSubstring(''));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring('ckilbkd'));
console.log(lengthOfLongestSubstring('abba'));
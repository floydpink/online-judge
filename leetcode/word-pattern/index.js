//
// https://leetcode.com/problems/word-pattern/
//

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  var strArray = str.split(' '), map = {}, reversemap = {};
  if (pattern.length !== strArray.length) return false;
  for (var i = 0; i < pattern.length; i++) {
    var char = pattern.charAt(i), word = strArray[i];
    if (map[char] !== undefined && map[char] !== word) return false;
    if (reversemap[word] !== undefined && reversemap[word] !== char) return false;
    map[char] = word;
    reversemap[word] = char;
  }
  return true;
};

console.log(wordPattern('abba', 'dog cat cat dog'));
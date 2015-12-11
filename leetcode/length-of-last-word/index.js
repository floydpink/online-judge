//
// https://leetcode.com/problems/length-of-last-word/
//

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  if (s === '') return 0;
  var array = s.split(' ').filter(function (w) {return w.length > 0;});
  return array.length ? array[array.length - 1].length : 0;
};
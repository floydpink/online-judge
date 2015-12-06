//
// https://leetcode.com/problems/excel-sheet-column-number/
//

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  var result = 0, factor = 1;
  for (var i = s.length - 1; i >= 0; i--) {
    result += (s.charAt(i).toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0) + 1) * factor;
    factor *= 26;
  }
  return result;
};
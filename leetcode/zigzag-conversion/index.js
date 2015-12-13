//
// https://leetcode.com/problems/zigzag-conversion/
//

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  var results = Array.apply(null, Array(numRows)).map(function () {return '';}), len = s.length, i = 0;
  while (i < len) {
    // vertically down
    for (var j = 0; j < numRows && i < len; j++) {
      results[j] += s.charAt(i++);
    }
    for (var k = numRows - 2; k >= 1 && i < len; k--) {
      results[k] += s.charAt(i++);
    }
  }
  return results.join('');
};
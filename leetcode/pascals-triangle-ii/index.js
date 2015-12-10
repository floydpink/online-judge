//
// https://leetcode.com/problems/pascals-triangle-ii/
//

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (rowIndex === 0) return [1];
  var row, prev = [1];
  for (var r = 0; r <= rowIndex; r++) {
    row = [];
    for (var i = 0; i <= r; i++) {
      if (i === 0 || i === r) {
        row.push(1);
      } else {
        row.push(prev[i - 1] + prev[i]);
      }
    }
    prev = row;
  }
  return row;
};
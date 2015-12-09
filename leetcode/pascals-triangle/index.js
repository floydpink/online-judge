//
// https://leetcode.com/problems/pascals-triangle/
//

var memo;

var value = function (index, row) {
  if (index < 0 || index > row) return 0;

  if (memo[index][row] > 0) return memo[index][row];

  if (index === 1 || index === row) return 1;

  memo[index][row] = value(index - 1, row - 1) + value(index, row - 1);

  return memo[index][row];
};

var row = function (row) {
  var r = [];
  for (var i = 1; i <= row; i++) r.push(value(i, row));
  return r;
};
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  var result = [];
  memo = Array.apply(null, Array(numRows + 1)).map(function () {
    return Array.apply(null, Array(numRows + 1)).map(Number.prototype.valueOf, 0);
  });
  for (var i = 1; i <= numRows; i++) result.push(row(i));
  return result;
};
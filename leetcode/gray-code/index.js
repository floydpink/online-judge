//
// https://leetcode.com/problems/gray-code/
//

/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  var results = [];
  for (var i = 0; i < 1 << n; i++) {
    results.push((i ^ i >> 1).toString(2));
  }
  return results;
};

console.log(grayCode(5));
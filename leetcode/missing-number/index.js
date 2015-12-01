/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  var result = 0;
  nums.forEach(function (e, i, a) {
    result = result + i - e;
  });
  return result + nums.length;
};
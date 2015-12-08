//
// https://leetcode.com/problems/sort-colors/
//

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  var zero = -1, one = -1, two = -1;
  for (var i = 0; i < nums.length; i++) {
    var num = nums[i];
    if (num === 0) {
      nums[++two] = 2;
      nums[++one] = 1;
      nums[++zero] = 0;
    } else if (num === 1) {
      nums[++two] = 2;
      nums[++one] = 1;
    } else {
      nums[++two] = 2;
    }
  }
};
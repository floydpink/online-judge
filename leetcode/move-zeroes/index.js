/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  var index = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[index++] = nums[i];
    }
  }
  for (var j = index; j < nums.length; j++) {
    nums[j] = 0;
  }
};
//
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
//

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  var index = 1, prev = nums[0];
  for (var i = 1; i < nums.length; i++) {
    if (nums[i] !== prev) {
      prev = nums[i];
      nums[index++] = nums[i];
    }
  }
  return index;
};
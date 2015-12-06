//
// https://leetcode.com/problems/majority-element/
//

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  var sorted = nums.sort(function (a, b) { return a - b;});
  return sorted[Math.floor(nums.length / 2)];
};
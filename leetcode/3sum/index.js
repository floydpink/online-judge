'use strict';
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums = nums.sort(function (a, b) {return a - b;});
  var results = [];
  for (var i = 0; i < nums.length - 2; i++) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      var low = i + 1, high = nums.length - 1, sum = 0 - nums[i];
      while (low < high) {
        if (nums[low] + nums[high] === sum) {
          results.push([nums[i], nums[low], nums[high]]);
          while (low < high && nums[low] === nums[low + 1]) {
            low++;
          }
          while (low < high && nums[high] === nums[high - 1]) {
            high--;
          }
          low++;
          high++;
        } else if (nums[low] + nums[high] < sum) {
          low++;
        } else {
          high--;
        }
      }
    }
  }
  return results;
};
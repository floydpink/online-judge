//
// https://leetcode.com/problems/contains-duplicate-ii/
//

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  var map = {};
  for (var i = 0; i < nums.length; i++) {
    var num = nums[i];
    if (map[num] !== undefined) {
      var j = map[num];
      if (i - j <= k) return true;
      map[num] = i;
    } else {
      map[num] = i;
    }
  }
  return false;
};
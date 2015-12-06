//
// https://leetcode.com/problems/find-the-duplicate-number/
//

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  var map = {};
  for (var i = 0; i < nums.length; i++) {
    var num = nums[i];
    if (map[num] !== undefined) {
      return num;
    } else {
      map[num] = true;
    }
  }
};
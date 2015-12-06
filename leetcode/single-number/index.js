//
// https://leetcode.com/problems/single-number/
//

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  var map = {};
  for (var i = 0; i < nums.length; i++) {
    if (map[nums[i]] !== undefined) {
      delete map[nums[i]];
    } else {
      map[nums[i]] = true;
    }
  }
  return parseInt(Object.keys(map)[0], 10);
};
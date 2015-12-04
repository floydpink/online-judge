/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  var map = {};
  for (var i = 0; i < nums.length; i++) {
    var num = nums[i];
    if (map[num] !== undefined) {
      return true;
    }
    map[num] = true;
  }
  return false;
};
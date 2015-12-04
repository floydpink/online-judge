/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  var map = {};
  for (var i = 0; i < nums.length; i++) {
    var num = nums[i];
    if (map[num] === undefined) {
      map[num] = 0;
    }
    map[num] += 1;
    if (map[num] === 3) {
      delete map[num];
    }
  }
  return +(Object.keys(map)[0]);
};
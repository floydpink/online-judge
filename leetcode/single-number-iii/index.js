/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  var map = {};
  for (var i = 0; i < nums.length; i++) {
    var num = nums[i];
    if (map[num] !== undefined) {
      delete map[num];
    } else {
      map[num] = true;
    }
  }
  return Object.keys(map).map(function (n) { return +n;});
};
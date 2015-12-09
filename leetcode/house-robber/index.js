//
// https://leetcode.com/problems/house-robber/
//

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  var pre = 0, cur = 0, n = nums.length;
  for (var i = 0; i < n; i++) {
    var temp = Math.max(pre + nums[i], cur);
    pre = cur;
    cur = temp;
  }
  return cur;
};
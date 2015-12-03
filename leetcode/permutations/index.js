'use strict';

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  var result = [];
  var len = nums.length;

  if (len === 0) {
    result.push([]);
    return result;
  }

  for (var i = 0; i < len; i++) {
    var before = nums.slice(0, i);
    var after = nums.slice(i + 1, len);
    var partials = permute(before.concat(after));

    for (var j = 0; j < partials.length; j++) {
      var perm = partials[j].slice();
      perm.unshift(nums[i]);
      result.push(perm);
    }
  }
  return result;
};

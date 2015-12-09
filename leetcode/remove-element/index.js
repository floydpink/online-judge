//
// https://leetcode.com/problems/remove-element/
//

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  var index = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== val) nums[index++] = nums[i];
  }
  return index;
};

var array = [3, 3, 5, 6, 7, 3, 4, 3];
console.log(removeElement(array, 3));
console.log(array);
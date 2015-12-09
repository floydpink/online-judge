//
// https://leetcode.com/problems/rotate-array/
//

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (nums.length === k) return;
  k = k % nums.length;
  reverse(nums, 0, nums.length - k - 1);
  reverse(nums, nums.length - k, nums.length - 1);
  reverse(nums, 0, nums.length - 1);
};

var reverse = function (arr, start, end) {
  var temp;
  while (start < end) {
    temp = arr[end];
    arr[end] = arr[start];
    arr[start] = temp;
    start++;
    end--;
  }
};

var nums = [1, 2]
rotate(nums, 1);
console.log(nums);
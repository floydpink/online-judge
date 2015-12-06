//
// https://leetcode.com/problems/median-of-two-sorted-arrays/
//

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  var combined = nums1.concat(nums2);
  combined.sort(function (a, b) { return a - b; });
  var mid = Math.floor(combined.length / 2);
  if (combined.length % 2 === 0) {
    return (combined[mid - 1] + combined[mid]) / 2;
  } else {
    return combined[mid];
  }
};
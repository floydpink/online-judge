//
// https://leetcode.com/problems/container-with-most-water/
//

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  var len = height.length;
  if (len < 2) return 0;
  var maxArea = 0, low = 0, high = len - 1;
  while (low < high) {
    maxArea = Math.max(maxArea, (high - low) * Math.min(height[low], height[high]));
    if (height[low] > height[high]) {
      high--;
    } else {
      low++;
    }
  }
  return maxArea;
};
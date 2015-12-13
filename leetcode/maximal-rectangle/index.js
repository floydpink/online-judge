//
// https://leetcode.com/problems/maximal-rectangle/
//

// https://leetcode.com/discuss/20240/share-my-dp-solution
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  if (matrix.length === 0) return 0;
  var r = matrix.length, c = matrix[0].length;
  var left = Array.apply(null, Array(c)).map(Number.prototype.valueOf, 0);
  var right = Array.apply(null, Array(c)).map(Number.prototype.valueOf, c);
  var height = Array.apply(null, Array(c)).map(Number.prototype.valueOf, 0);
  var maxArea = 0;
  for (var i = 0; i < r; i++) {   // cycle through the rows
    var currLeft = 0, currRight = c;
    for (var j = 0; j < c; j++) {   // compute height
      if (matrix[i][j] === '1') height[j]++;
      else height[j] = 0;
    }
    for (j = 0; j < c; j++) {   // compute left
      if (matrix[i][j] === '1') left[j] = Math.max(left[j], currLeft);
      else {
        left[j] = 0;
        currLeft = j + 1;
      }
    }
    for (j = c - 1; j >= 0; j--) { // compute right
      if (matrix[i][j] === '1') right[j] = Math.min(right[j], currRight);
      else {
        right[j] = c;
        currRight = j;
      }
    }
    // compute maxArea for all positions on this row
    for (j = 0; j < c; j++) {
      maxArea = Math.max(maxArea, (right[j] - left[j]) * height[j]);
    }
  }
  return maxArea;
};
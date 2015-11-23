'use strict';

/**
 * @param {string[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  if (!matrix.length) return 0; // Empty Matrix
  if (!matrix[0].length) return 0;  // Empty Matrix
  var rows = matrix.length, columns = matrix[0].length, maxArea = 0;
  if (rows === 1 || columns === 1) return 0;  // Single column or row - no rectangle
  var dp = Array.apply(null, Array(rows))
};
//
// https://leetcode.com/problems/rectangle-area/
//

// https://leetcode.com/discuss/39398/my-java-solution-sum-of-areas-overlapped-area
/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function (A, B, C, D, E, F, G, H) {
  var area1 = (C - A) * (D - B);
  var area2 = (G - E) * (H - F);

  var left = Math.max(A, E);
  var right = Math.min(C, G);
  var bottom = Math.max(B, F);
  var top = Math.min(D, H);

  var overlap = 0;
  if (right > left && top > bottom) overlap = (right - left) * (top - bottom);

  return area1 + area2 - overlap;
};
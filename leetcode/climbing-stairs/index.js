//
// https://leetcode.com/problems/climbing-stairs/
//

'use strict';

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;

  var oneStepBefore = 2;
  var twoStepsBefore = 1;
  var allWays = 0;

  for (var i = 2; i < n; i++) {
    allWays = oneStepBefore + twoStepsBefore;
    twoStepsBefore = oneStepBefore;
    oneStepBefore = allWays;
  }
  return allWays;
};
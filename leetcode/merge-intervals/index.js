//
// https://leetcode.com/problems/merge-intervals/
//

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function (intervals) {
  if (intervals === null || intervals.length < 2) return intervals;
  intervals = intervals.sort(function (a, b) { return a.start - b.start;});
  var results = [], len = 0, current = intervals[0];
  while (len < intervals.length - 1) {
    var next = intervals[len + 1];
    if (current.end >= next.start) {
      current.end = Math.max(current.end, next.end);
    } else {
      results.push(current);
      current = next;
    }
    len++;
  }
  results.push(current);
  return results;
};
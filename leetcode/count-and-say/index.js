//
// https://leetcode.com/problems/count-and-say/
//

// https://leetcode.com/discuss/7535/examples-of-nth-sequence

var build = function (str) {
  var p = 0, result = '';
  while (p < str.length) {
    var val = str.charAt(p);
    var count = 0;

    while (p < str.length && str.charAt(p) === val) {
      p++;
      count++;
    }
    result += count;
    result += val;
  }
  return result;
};

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n <= 0) return -1;
  var result = '1';

  for (var i = 1; i < n; i++) {
    result = build(result);
  }
  return result;
};
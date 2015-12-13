//
// https://leetcode.com/problems/longest-common-prefix/
//

// https://leetcode.com/discuss/20993/java-code-with-13-lines?show=37614#a37614
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';
  var pre = strs[0];
  for (var i = 0; i < strs.length; i++)
    while (strs[i].indexOf(pre) !== 0)
      pre = pre.substring(0, pre.length - 1);
  return pre;
};
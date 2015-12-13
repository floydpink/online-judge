//
// https://leetcode.com/problems/isomorphic-strings/
//

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  var map = {}, reversemap = {};
  for (var i = 0; i < s.length; i++) {
    var from = s.charAt(i), to = t.charAt(i);
    if (map[from] !== undefined && map[from] !== to) return false;
    if (reversemap[to] !== undefined && reversemap[to] !== from) return false;
    map[from] = to;
    reversemap[to] = from;
  }
  return true;
};
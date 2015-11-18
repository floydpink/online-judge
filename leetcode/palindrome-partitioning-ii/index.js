'use strict';

/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
  if (s.length === 0) return 0;
  var cuts = Array.apply(null, new Array(s.length + 1)).map(Number.prototype.valueOf, Infinity), i, a, b;
  cuts[s.length] = -1;
  for (i = s.length - 1; i >= 0; i--) {
    for (a = i, b = i; a >= 0 && b < s.length && s.charAt(a) == s.charAt(b); a--, b++) {
      cuts[a] = Math.min(cuts[a], 1 + cuts[b + 1]);
    }
    for (a = i, b = i + 1; a >= 0 && b < s.length && s.charAt(a) == s.charAt(b); a--, b++) {
      cuts[a] = Math.min(cuts[a], 1 + cuts[b + 1]);
    }
  }
  return cuts[0];
};

console.log('a');
console.log('aab');
console.log('malayalam');
console.log('malayalama');
console.log('amalayalama');
'use strict';

/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
  if (s.length === 0) return 0;
  // store the number of cuts for the last k characters
  var cuts = Array.apply(null, new Array(s.length + 1)).map(Number.prototype.valueOf, Infinity), i, a, b;
  cuts[s.length] = -1;
  for (i = s.length - 1; i >= 0; i--) {
    // odd length palindrome
    for (a = i, b = i; a >= 0 && b < s.length && s.charAt(a) == s.charAt(b); a--, b++) {
      cuts[a] = Math.min(cuts[a], 1 + cuts[b + 1]);
    }
    // even length palindrome
    for (a = i, b = i + 1; a >= 0 && b < s.length && s.charAt(a) == s.charAt(b); a--, b++) {
      cuts[a] = Math.min(cuts[a], 1 + cuts[b + 1]);
    }
  }
  console.log(cuts);
  return cuts[0];
};

console.log(minCut('amaslayalama'));
console.log(minCut('maslayalama'));

//console.log(minCut('a'));
//console.log(minCut('aab'));
//console.log(minCut('malayalam'));
//console.log(minCut('malayalama'));
//console.log(minCut('amalayalama'));
//console.log(minCut('amaslayalama'));
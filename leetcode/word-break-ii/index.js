'use strict';

var wordBreakRecursive = function (s, dict, solution, results, remaining, minLen, maxLen) {
  if (remaining === s.length) {
    results.push(solution.slice().join(' '));
  } else {
    for (var i = minLen; i <= maxLen && remaining + i <= s.length; i++) {
      var word = s.substring(remaining, remaining + i);
      if (dict.has(word)) {
        var temp = solution.slice();
        temp.push(word);
        wordBreakRecursive(s, dict, temp, results, remaining + word.length, minLen, maxLen);
      }
    }
  }
};

/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  if (!s) return [];
  var isBreakable = Array.apply(null, Array(s.length)).map(Number.prototype.valueOf, 0);
  for (var i = 0; i < s.length; i++) {
    if (wordDict.has(s.substring(0, i + 1))) isBreakable[i] = 1;
    else {
      for (var j = 0; j < i; j++) {
        if (isBreakable[j] === 1 && wordDict.has(s.substring(j + 1, i + 1))) {
          isBreakable[i] = 1;
          break;
        }
      }
    }
  }
  // console.log(isBreakable);
  if (isBreakable[s.length - 1] !== 1) return [];
  var results = [], minLen = Infinity, maxLen = -Infinity;
  [...wordDict].forEach(function (w) {
    minLen = Math.min(w.length, minLen);
    maxLen = Math.max(w.length, maxLen);
  });
  wordBreakRecursive(s, wordDict, [], results, 0, minLen, maxLen);
  return results;
};

var dict = new Set(['cat', 'cats', 'and', 'sand', 'dog']);
console.log(wordBreak('catsanddog', dict));

dict = new Set(["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"]);
console.log(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab", dict));

dict = new Set(["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"]);
console.log(wordBreak("baaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", dict));


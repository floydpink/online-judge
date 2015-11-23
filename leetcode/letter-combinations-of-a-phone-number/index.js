var calculateMapping = function (s, map, results, prefix, pos) {
  if (prefix.length === s.length) {
    results.push(prefix.slice().join(''));
  } else {
    for (var i = pos; i < s.length; i++) {
      var chars = map[s[i]];
      for (var j = 0; j < chars.length && prefix.length === i; j++) {
        var temp = prefix.slice();
        temp[i] = chars[j];
        calculateMapping(s, map, results, temp, pos + 1);
      }
    }
  }
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  var chars = digits.split('');
  if (!chars.length) return chars;
  var charMap = {
    0 : [' '],
    1 : [],
    2 : ['a', 'b', 'c'],
    3 : ['d', 'e', 'f'],
    4 : ['g', 'h', 'i'],
    5 : ['j', 'k', 'l'],
    6 : ['m', 'n', 'o'],
    7 : ['p', 'q', 'r', 's'],
    8 : ['t', 'u', 'v'],
    9 : ['w', 'x', 'y', 'z']
  }, results = [];
  calculateMapping(digits, charMap, results, [], 0);
  return results;
};

console.log(letterCombinations('').join(', '));
console.log(letterCombinations('22').join(', '));
console.log(letterCombinations('23').join(', '));
console.log(letterCombinations('4274').join(', '));

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  var sortedStrs = strs.sort();
  var sumDictionary = {};
  sortedStrs.forEach(function (str, idx) {
    var sortedStr = str.split('').sort().join('');
    if (sumDictionary[sortedStr] === undefined) {
      sumDictionary[sortedStr] = [];
    }
    sumDictionary[sortedStr].push(idx);
  });
  var keys = Object.keys(sumDictionary), results = [];
  keys.forEach(function (key) {
    var strs = sumDictionary[key].map(function (idx) { return sortedStrs[idx]; });
    results.push(strs);
  });
  return results;
};

console.log(groupAnagrams(['ape', 'and', 'cat']));
console.log(groupAnagrams(["cab", "tin", "pew", "duh", "may", "ill", "buy", "bar", "max", "doc", "bac"]));
console.log(groupAnagrams(["ray", "cod", "abe", "ned", "arc", "jar", "owl", "pop", "paw", "sky", "yup", "fed", "jul", "woo", "ado", "why", "ben", "mys", "den", "dem", "fat", "you", "eon", "sui", "oct", "asp", "ago", "lea", "sow", "hus", "fee", "yup", "eve", "red", "flo", "ids", "tic", "pup", "hag", "ito", "zoo"]));

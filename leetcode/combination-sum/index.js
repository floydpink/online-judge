//
// https://leetcode.com/problems/combination-sum/
//

var depthFirstSearch = function (candidates, current, remaining, path, results) {
  // console.log('.>', current, remaining);
  if (remaining < 0) {
    return;
  }
  if (remaining === 0) {
    // console.log('>>', path);
    results.push(path.slice());
    return;
  }
  for (var i = current; i < candidates.length; i++) {
    var temp = path.slice();
    temp.push(candidates[i]);
    if (remaining < candidates[i]) break;
    depthFirstSearch(candidates, i, remaining - candidates[i], temp, results);
    // console.log('.<', i, remaining);
  }
};

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  candidates = candidates.filter(function (val, idx, self) { return self.indexOf(val) === idx;}).sort(function (a, b) { return a - b;});
  var results = [], path = [];
  depthFirstSearch(candidates, 0, target, path, results);
  return results;
};

console.log(combinationSum([2], 1));
console.log(combinationSum([1], 1));
console.log(combinationSum([1, 2, 3, 4, 5], 10));
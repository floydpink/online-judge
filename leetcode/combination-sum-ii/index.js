var depthFirstSearch = function (candidates, current, target, path, results) {
  if (target === 0) {
    results.push(path.slice());
    return;
  }
  if (target < 0) {
    return;
  }
  for (var i = current; i < candidates.length; i++) {
    if (i > current && candidates[i] === candidates[i - 1]) {
      continue;
    }
    path.push(candidates[i]);
    depthFirstSearch(candidates, i + 1, target - candidates[i], path, results);
    path.splice(path.length - 1);
  }
};

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates = candidates.sort(function (a, b) { return a - b;});
  var results = [], path = [];
  depthFirstSearch(candidates, 0, target, path, results);
  return results;
};

console.log(combinationSum2([2], 1));
console.log(combinationSum2([1], 1));
console.log(combinationSum2([5, 4, 5, 1, 5, 3, 1, 4, 5, 5, 4], 10));
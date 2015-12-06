//
// https://leetcode.com/problems/generate-parentheses/
//

var generateParensRecursive = function (leftCount, rightCount, path, results, position) {
  if (leftCount < 0 || rightCount < leftCount) {
    return;
  }
  if (leftCount === 0 && rightCount === 0) {
    results.push(path.join(''));
  } else {
    if (leftCount > 0) {
      path[position] = '(';
      generateParensRecursive(leftCount - 1, rightCount, path, results, position + 1);
    }
    if (rightCount > leftCount) {
      path[position] = ')';
      generateParensRecursive(leftCount, rightCount - 1, path, results, position + 1);
    }
  }
};

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  var results = [], path = new Array(n * 2);
  generateParensRecursive(n, n, path, results, 0);
  return results;
};

console.log(generateParenthesis(3).join(', '));
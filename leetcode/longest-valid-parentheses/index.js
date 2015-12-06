//
// https://leetcode.com/problems/longest-valid-parentheses/
//

// Thanks to the solution at https://leetcode.com/discuss/68395/java-solution-12ms-structure-simple-and-clear-o-n
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  var max = 0, left = 0, stack = [];
  for (var i = 0; i < s.length; i++) {
    var char = s.charAt(i);
    if (char === '(') {
      stack.push(i);
    } else {
      if (stack.length === 0) {
        left = i + 1;
      } else {
        stack.pop();
        if (stack.length === 0) {
          max = Math.max(max, i + 1 - left);
        } else {
          max = Math.max(max, i - stack[stack.length - 1]);
        }
      }
    }
  }
  return max;
};

console.log(longestValidParentheses('()(()'));
console.log(longestValidParentheses('('));
console.log(longestValidParentheses('()'));
console.log(longestValidParentheses(')()())'));
console.log(longestValidParentheses(')()(()))()())()()'));
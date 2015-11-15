/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  var stack = [], isValid = false;
  for (var i = 0; i < s.length; i++) {
    var char = s.charAt(i);
    if (char === '(' || char === '[' || char === '{') stack.push(char);
    if (char === ')' && stack.pop() !== '(') break;
    if (char === ']' && stack.pop() !== '[') break;
    if (char === '}' && stack.pop() !== '{') break;
    if (i + 1 === s.length && stack.length === 0) {
      isValid = true;
    }
  }
  return isValid;
};

console.log(isValid('()[]{}'));
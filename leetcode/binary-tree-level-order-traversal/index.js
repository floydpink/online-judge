/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root === null) return [];
  var queue = [], results = [];
  queue.push(root);
  while (queue.length) {
    var level = [], levelCount = queue.length;
    while (levelCount) {
      var current = queue.shift();
      if (current.left !== null) queue.push(current.left);
      if (current.right !== null) queue.push(current.right);
      level.push(current.val);
      levelCount--;
    }
    results.push(level);
  }
  return results;
};
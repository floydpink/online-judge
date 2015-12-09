//
// https://leetcode.com/problems/binary-tree-level-order-traversal-ii/
//

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
var levelOrderBottom = function (root) {
  if (root === null) return [];
  var queue = [], results = [];
  queue.push(root);
  while (queue.length) {
    var level = [], levelCount = queue.length;
    while (levelCount) {
      var current = queue.shift();
      level.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      levelCount--;
    }
    results.push(level.slice());
  }
  return results.reverse();
};
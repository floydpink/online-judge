//
// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
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
var zigzagLevelOrder = function (root) {
  if (root === null) return [];
  var queue = [], results = [], level = [], levelCounter = 0;
  queue.push(root);
  while (queue.length) {
    levelCounter++;
    var levelCount = queue.length;
    while (levelCount) {
      var current = queue.shift();
      level.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      levelCount--;
    }
    results.push(levelCounter % 2 === 0 ? level.slice().reverse() : level.slice());
    level = [];
  }
  return results;
};
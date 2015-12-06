//
// https://leetcode.com/problems/binary-tree-right-side-view/
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
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (root === null) return [];
  var results = [], queue = [];
  queue.push(root);
  while (queue.length) {
    var levelCount = queue.length;
    while (levelCount) {
      var curr = queue.shift();
      if (levelCount === 1) results.push(curr.val);
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
      levelCount--;
    }
  }
  return results;
};
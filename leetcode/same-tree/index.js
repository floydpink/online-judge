//
// https://leetcode.com/problems/same-tree/
//

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p === null && q === null) return true;
  if (p === null) return false;
  if (q === null) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right) && p.val === q.val;
};
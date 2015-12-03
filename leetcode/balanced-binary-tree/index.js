var findHeight = function (root) {
  if (root === null) return 0;
  return 1 + Math.max(findHeight(root.left), findHeight(root.right));
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (root === null) return true;
  return isBalanced(root.left) && isBalanced(root.right) && Math.abs(findHeight(root.left) - findHeight(root.right)) <= 1;
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root === null) return null;
  var left = null, right = null;
  if (root.right) left = invertTree(root.right);
  if (root.left) right = invertTree(root.left);
  root.left = left;
  root.right = right;
  return root;
};
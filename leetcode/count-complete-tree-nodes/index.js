/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  if (root === null) return 0;
  var h = 0, left = root, right = root;
  while (right !== null) {
    left = left.left;
    right = right.right;
    h++;
  }
  if (left === null) {
    return (1 << h) - 1;
  }
  return 1 + countNodes(root.left) + countNodes(root.right);
};
//
// https://leetcode.com/problems/symmetric-tree/
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root === null) return true;
  return isSymmetricHelper(root.left, root.right);
};

var isSymmetricHelper = function (left, right) {
  if (left === null || right === null) {
    return left === right;
  }
  if (left.val !== right.val) {
    return false;
  }
  return isSymmetricHelper(left.left, right.right) && isSymmetricHelper(left.right, right.left);
};
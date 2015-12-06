//
// https://leetcode.com/problems/binary-tree-inorder-traversal/
//

var iOT = function (root, results) {
  if (!root) return;
  iOT(root.left, results);
  results.push(root.val);
  iOT(root.right, results);
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  var results = [];
  iOT(root, results);
  return results;
};

///**
// * Definition for a binary tree node.
// * function TreeNode(val) {
// *     this.val = val;
// *     this.left = this.right = null;
// * }
// */
///**
// * @param {TreeNode} root
// * @return {number[]}
// */
//var inorderTraversal = function(root) {
//    var results = [], current = root, stack = [];
//    while (current !== null || stack.length) {
//        while (current !== null) {
//            stack.push(current);
//            current = current.left;
//        }
//        current = stack.pop();
//        results.push(current.val);
//        current = current.right;
//    }
//    return results;
//};

var getTree = function (array) {
  if (array.length === 0) {
    return null;
  }
  var rootIndex = Math.floor(array.length / 2);
  var tree = new TreeNode(array[rootIndex]);
  tree.left = getTree(array.slice(0, rootIndex));
  tree.right = getTree(array.slice(rootIndex + 1));
  return tree;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

console.log(inorderTraversal(getTree([2, 1])));
//
// https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
//

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

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  var current = root;
  while (current) {
    if (current.left) {
      var pre = current.left;
      while (pre.right) {
        pre = pre.right;
      }
      pre.right = current.right;
      current.right = current.left;
      current.left = null;
    }
    current = current.right;
  }
};

var root = getTree([3, 2, 4, 1, null, 5, 6]);
console.log(JSON.stringify(root));
flatten(root);
console.log('\nRESULT:\n');
console.log(JSON.stringify(root));

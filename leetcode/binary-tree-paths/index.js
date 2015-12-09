//
// https://leetcode.com/problems/binary-tree-paths/
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  if (root === null) return [];

  var dfs = function (node, results, path) {
    if (node) {
      path.push(node.val);
      if (!node.left && !node.right) {
        results.push(path.slice().join('->'));
        path.pop();
      }
      dfs(node.left, results, path.slice());
      dfs(node.right, results, path.slice());
      path.pop();
    }
  };

  var results = [], path = [];
  dfs(root, results, path);
  return results;
};

var getTree = function (array) {
  if (array.length === 0) {
    return null;
  }
  var rootIndex = Math.floor(array.length / 2);
  if (array[rootIndex]) {
    var tree = new TreeNode(array[rootIndex]);
    tree.left = getTree(array.slice(0, rootIndex));
    tree.right = getTree(array.slice(rootIndex + 1));
    return tree;
  }
  return null;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

console.log(binaryTreePaths(getTree([4, 2, 1, 3])));
console.log(binaryTreePaths(getTree([null, 1, 3])));
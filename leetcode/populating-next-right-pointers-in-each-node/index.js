/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function (root) {
  if (root === null) return;
  var queue = [];
  queue.push(root);
  while (queue.length) {
    var levelCount = queue.length;
    var current = queue.shift();
    while (levelCount > 0) {
      var next = levelCount > 1 ? queue.shift() : null;
      current.next = next;
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      current = next;
      levelCount--;
    }
  }
};

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
  this.left = this.right = this.next = null;
}

//var root = getTree([0, 1, 2, 3, 4, 5, 6]);
//var root = getTree([1, 2, 3, 4, 5, 6, 7]);
var root = getTree([4, 2, 5, 1, 6, 3, 7]);
console.log(root);
connect(root);
console.log(root);

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
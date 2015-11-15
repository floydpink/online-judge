/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
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

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  var current = head, sortedArray = [];
  while (current !== null) {
    sortedArray.push(current.val);
    current = current.next;
  }
  return getTree(sortedArray);
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var initializeArrayToList = function (array) {
  var list = new ListNode(array.shift());
  var current = list;
  while (array.length) {
    current.next = new ListNode(array.shift());
    current = current.next;
  }
  return list;
};

console.log(sortedListToBST(initializeArrayToList([0])));
console.log(sortedListToBST(initializeArrayToList([0, 1, 4, 5, 6, 7])));
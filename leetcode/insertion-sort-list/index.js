//
// https://leetcode.com/problems/insertion-sort-list/
//

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
  if (!head || !head.next) return head;
  var dummy = new ListNode(0);
  var pre = dummy;
  var curr = head;
  var next = null;
  while (curr !== null) {
    next = curr.next;
    while (pre.next !== null && pre.next.val < curr.val) {
      pre = pre.next;
    }
    curr.next = pre.next;
    pre.next = curr;
    pre = dummy;
    curr = next;
  }
  return dummy.next;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function initializeList(array) {
  if (!array.length) return null;
  var head = new ListNode(array.shift());
  var current = head;
  while (array.length) {
    current.next = new ListNode(array.shift());
    current = current.next;
  }
  return head;
}

console.log(JSON.stringify(insertionSortList(initializeList([4, 19, 14, 5, -3, 1, 8, 5, 11, 15]))));

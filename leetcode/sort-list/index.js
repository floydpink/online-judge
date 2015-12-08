//
// https://leetcode.com/problems/sort-list/
//

// Thanks to https://leetcode.com/discuss/28594/bottom-recurring-with-space-complextity-time-complextity
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
var sortList = function (head) {
  if (head === null || head.next === null) return head;

  // Get the length of the list
  var len = 0, curr = head;
  while (curr) {
    len++;
    curr = curr.next;
  }

  // Split and merge in steps of 1, 2, 4, 8, 16 etc. until step < length
  var dummy = new ListNode(0);
  dummy.next = head;
  var left, right, tail;
  for (var step = 1; step < len; step <<= 1) {
    curr = dummy.next;
    tail = dummy;
    while (curr) {
      left = curr;
      right = split(left, step);
      curr = split(right, step);
      tail = merge(left, right, tail);
    }
  }
  return dummy.next;
};

var split = function (head, n) {
  for (var i = 1; head && i < n; i++) head = head.next;

  if (!head) return null;
  var second = head.next;
  head.next = null;
  return second;
};

var merge = function (left, right, head) {
  var curr = head;
  while (left && right) {
    if (left.val > right.val) {
      curr.next = right;
      curr = right;
      right = right.next;
    } else {
      curr.next = left;
      curr = left;
      left = left.next;
    }
  }
  curr.next = left ? left : right;
  while (curr.next) curr = curr.next;
  return curr;
}
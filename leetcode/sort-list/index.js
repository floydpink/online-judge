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
  if (!head || !head.next) return head;

  var len = 0, curr = head;
  while (curr) {
    len++;
    curr = curr.next;
  }

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

var merge = function (l1, l2, head) {
  var curr = head;
  while (l1 && l2) {
    if (l1.val > l2.val) {
      curr.next = l2;
      curr = l2;
      l2 = l2.next;
    } else {
      curr.next = l1;
      curr = l1;
      l1 = l1.next;
    }
  }
  curr.next = l1 ? l1 : l2;
  while (curr.next) curr = curr.next;
  return curr;
};

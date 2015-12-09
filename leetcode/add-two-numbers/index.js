//
// https://leetcode.com/problems/add-two-numbers/
//

'use strict';

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  var dummy = new ListNode(0), sum = 0, current = dummy;
  while (l1 || l2) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    current.next = new ListNode(sum % 10);
    current = current.next;
    sum = Math.floor(sum / 10);
  }
  if (sum > 0) current.next = new ListNode(sum);
  return dummy.next;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function initializeList(array) {
  var head = new ListNode(array.shift());
  var current = head;
  while (array.length) {
    current.next = new ListNode(array.shift());
    current = current.next;
  }
  return head;
}

// console.log(addTwoNumbers(initializeList([1]), initializeList([9, 9])));
console.log(addTwoNumbers(initializeList([3, 7]), initializeList([9, 2])));

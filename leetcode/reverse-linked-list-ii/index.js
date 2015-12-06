//
// https://leetcode.com/problems/reverse-linked-list-ii/
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
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  if (head === null || head.next === null || m === n) {
    return head;
  }

  var prev, curr, next, pos;
  prev = m === 1 ? head : null;
  curr = head;
  next = head.next;
  pos = 1;

  while (curr !== null) {
    if (pos < m) {
      prev = curr;
      curr = next;
      next = next.next;
    } else if (pos >= m && pos < n) {
      var temp = next.next;
      next.next = curr;
      curr = next;
      next = temp;
    } else {
      break;
    }
    pos++;
  }

  if (m === 1) {
    prev.next = next;
    return curr;
  } else {
    prev.next.next = next;
    prev.next = curr;
    return head;
  }
};

///**
// * Definition for singly-linked list.
// * function ListNode(val) {
// *     this.val = val;
// *     this.next = null;
// * }
// */
///**
// * @param {ListNode} head
// * @param {number} m
// * @param {number} n
// * @return {ListNode}
// */
//var reverseBetween = function (head, m, n) {
//  m = m - 1;
//  n = n - 1;
//  if (!head || m > n || m < 0) {
//    return null;
//  }
//
//  var start = head, end, beforeStart, afterEnd, i, reversed = [];
//
//  for (i = 0; i < m; i++) {
//    beforeStart = start;
//    start = start.next;
//  }
//
//  end = start;
//  afterEnd = end.next;
//  reversed.push(end);
//  for (i = 0; i <= n - m - 1; i++) {
//    end = end.next;
//    afterEnd = end ? end.next : null;
//    reversed.push(end);
//  }
//
//  while (reversed.length) {
//    var temp = reversed.pop();
//    if (!beforeStart) {
//      head = beforeStart = temp;
//    } else {
//      beforeStart.next = temp;
//      beforeStart = beforeStart.next;
//    }
//  }
//  beforeStart.next = afterEnd;
//
//  return head;
//};

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

console.log(JSON.stringify(reverseBetween(initializeList([1, 2, 3, 4, 5]), 2, 4)));
console.log(JSON.stringify(reverseBetween(initializeList([1, 2, 3, 4, 5]), 2, 5)));
console.log(JSON.stringify(reverseBetween(initializeList([1, 2, 3, 4, 5]), 1, 2)));
console.log(JSON.stringify(reverseBetween(initializeList([3, 5]), 1, 2)));
console.log(JSON.stringify(reverseBetween(initializeList([3]), 1, 1)));
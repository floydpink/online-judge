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
  m = m - 1;
  n = n - 1;
  if (!head || m > n || m < 0) {
    return null;
  }

  var start = head, end, beforeStart, afterEnd, i, reversed = [];

  for (i = 0; i < m; i++) {
    beforeStart = start;
    start = start.next;
  }

  end = start;
  afterEnd = end.next;
  reversed.push(end);
  for (i = 0; i <= n - m - 1; i++) {
    end = end.next;
    afterEnd = end ? end.next : null;
    reversed.push(end);
  }

  while (reversed.length) {
    var temp = reversed.pop();
    if (!beforeStart) {
      head = beforeStart = temp;
    } else {
      beforeStart.next = temp;
      beforeStart = beforeStart.next;
    }
  }
  beforeStart.next = afterEnd;

  return head;
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

console.log(JSON.stringify(reverseBetween(initializeList([1, 2, 3, 4, 5]), 2, 4)));
console.log(JSON.stringify(reverseBetween(initializeList([1, 2, 3, 4, 5]), 2, 5)));
console.log(JSON.stringify(reverseBetween(initializeList([1, 2, 3, 4, 5]), 1, 2)));
console.log(JSON.stringify(reverseBetween(initializeList([3, 5]), 1, 2)));
console.log(JSON.stringify(reverseBetween(initializeList([3]), 1, 1)));
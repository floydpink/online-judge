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
  var start = head, reversed = [], beforeStart = null;

  for (var i = 1; i < m - 1; i++) {
    beforeStart = start;
    start = start.next;
  }

  var end = start.next;

  for (var j = m - 1; j < n; j++) {
    reversed.push(end);
    end = end.next;
  }

  //if (!beforeStart) {
  //  var temp = reversed.pop();
  //  temp.next = start;
  //  start = head = temp;
  //}
  //
  while (reversed.length > 0) {
    start.next = reversed.pop();
    start = start.next;
  }

  start.next = end;

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
// console.log(JSON.stringify(reverseBetween(initializeList([3, 5]), 1, 2)));
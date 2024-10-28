/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const output = [];
  let carry = 0;
  const last = new ListNode(0, null);

  while (carry !== 0 || l1 !== last || l2 !== last) {
    // console.log(carry, l1.val, l2.val, output);
    const num = l1.val + l2.val + carry;
    output.push(num % 10);
    carry = num >= 10 ? 1 : 0;
    l1 = l1.next || last;
    l2 = l2.next || last;
  }

  return createList(output);
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
  // console.log(val, next, this);
}

function createList(arr) {
  let i = arr.length;
  let next = null;
  while (i-- > 0) {
    // console.log(i);
    next = new ListNode(arr[i], next);
  }
  return next;
}

//test
// console.log(addTwoNumbers(createList([2, 4, 3]), createList([5, 6, 4])));
// console.log(addTwoNumbers(createList([0]), createList([0])));
// console.log(
//   addTwoNumbers(createList([9, 9, 9, 9, 9, 9, 9]), createList([9, 9, 9, 9]))
// );

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (head === null || head.next == null || head.next.next == null) return head;

  let node = head,
    evenHead = null,
    evenNode = null;
  while (node) {
    if (evenHead === null) {
      evenHead = node.next;
      evenNode = evenHead;
    } else {
      evenNode.next = node.next;
      evenNode = evenNode.next;
    }
    node.next = (node.next && node.next.next) || null;
    if (node.next === null) break;
    node = node.next;
  }
  node.next = evenHead;
  return head;
};

//testing
const createListAndReturnHeadFromArray = (arr) => {
  if (arr.length === 0) return null;
  let prev = null;
  const listArr = [];
  for (let i = 0; i < arr.length; i++) {
    const node = new ListNode(arr[i], null);
    if (prev) prev.next = node;
    listArr.push(node);
    prev = node;
  }
  return listArr[0];
};

const createArrayFromListVals = (list) => {
  if (list === null) return [];
  const arr = [list.val];
  while (list.next) {
    list = list.next;
    arr.push(list.val);
  }

  return arr;
};

console.log(
  createArrayFromListVals(oddEvenList(createListAndReturnHeadFromArray([])))
);

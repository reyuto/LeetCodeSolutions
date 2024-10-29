function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var lr = null;
    var lc = null;
    var lt = null;
    var carry = 0;
    var sum = 0;
    while(l1 || l2 || carry) {
        // console.log(l1, l2, lc, lr);
        sum = carry + (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
        l1 = l1 ? l1.next : null; 
        l2 = l2 ? l2.next : null;
        if (sum > 9) {
            carry = 1;
            sum = sum - 10;
        } else {
            carry = 0;
        }

        lt = new ListNode(sum);
        if (lr) {
            lr.next = lt;
            lr = lt;
        } else {
            lc = lt;
            lr = lt;
        }
    }
    return lc;
};

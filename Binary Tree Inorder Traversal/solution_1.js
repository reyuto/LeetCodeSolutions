/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = function (root) {
  if (root === null) return [];
  return print_node(root, []);
};

const print_node = (node, output) => {
  if (node.left) print_node(node.left, output);
  output.push(node.val);
  if (node.right) print_node(node.right, output);
  return output;
};

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function array_to_tree(arr) {
  if (arr.length === 0 || arr[0] === null) return null;

  let i = 1,
    len = arr.length,
    root = new TreeNode(arr[0]),
    queue = [root];

  while (queue && i < len) {
    // console.log(queue);
    let node = queue.shift();

    if (arr[i] !== null) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }
    i++;

    if (arr[i] !== null && i < len) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }
    i++;
  }

  return root;
}

// testing
// console.log(array_to_tree([1, null, 2, 3]));
// console.log(array_to_tree([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9]));
// console.log(array_to_tree([]));

// console.log(inorderTraversal(array_to_tree([1, null, 2, 3])));
// console.log(
//   inorderTraversal(array_to_tree([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9]))
// );
// console.log(inorderTraversal(array_to_tree([1, 2, null, null, 3])));

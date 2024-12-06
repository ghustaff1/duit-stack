function inorderTraversal(root) {
  let result = [];
  function traverse(node) {
      if (node === null) return;
      traverse(node.left);
      result.push(node.val);
      traverse(node.right);
  }
  traverse(root);
  return result;
}

let root = { val: 1, left: null, right: { val: 2, left: { val: 3, left: null, right: null }, right: null } };
console.log(inorderTraversal(root));  // Виведе: [1, 3, 2]

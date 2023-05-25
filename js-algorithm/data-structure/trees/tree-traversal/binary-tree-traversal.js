// 트리 순회 방법 2가지:
// - 너비 우선(Breadth-first Search) - BFS
// - 깊이 우선(Depth-first Search) - DFS
//     - DFS : 정위 순회(InOrder)
//           : 전위 순회(PreOrder)
//           : 후위 순회(PostOrder)

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  contains(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  BFS() {
    let node = this.root;
    let queue = [];
    let data = [];

    queue.push(node);
    while(queue.length) {
        node = queue.shift();
        data.push(node.value);
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
    return data;
  }
  DFSPreOrder() {
    let data = [];
    function traverse(node) { 
        data.push(node.value);
        if(node.left) traverse(node.left); 
        if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return data; // [10, 6, 3, 8, 15, 20]
  }
  DFSPostOrder() {
    let data = [];
    function traverse(node) {
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
        data.push(node.value);
    }
    traverse(this.root);
    return data; // [3, 8, 6, 20, 15, 10];
  }
  DFSInOrder() {
    let data = [];
    function traverse(node) {
        if(node.left) traverse(node.left);
        data.push(node.value);
        if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return data; // [3, 8, 6, 20, 15, 10];
  }
}


let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);


// BFS

        10
    6       15
 3     8        20

// QUEUE: [10] > [6, 15] > [15, 3, 8]
// DATA: [] > [10] > [10, 6]
// RESULT: [10, 6, 15, 3, 8, 20]



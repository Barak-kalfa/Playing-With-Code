class Node {
   constructor(val) {
      this.value = val;
      this.left = null;
      this.right = null;
   }
}

class BinaryTree {
   constructor() {
      this.root = null;
   }

   insert(val) {
      let newNode = new Node(val);
      if (!this.root) {
         this.root = newNode;
         return this;
      }
      const recInsert = (node) => {
         if (node.value > newNode.value) {
            if (node.left) {
               return recInsert(node.left);
            } else {
               node.left = newNode;
               return;
            }
         }

         if (node.value < newNode.value) {
            if (node.right) {
               return recInsert(node.right);
            } else {
               node.right = newNode;
               return;
            }
         }
      };
      recInsert(this.root);
      return this;
   }

   preOrderSearch() {
      const nodesList = [];
      let root = this.root;

      const traverseTree = (node) => {
         nodesList.push(node.value);
         if (node.left) traverseTree(node.left);
         if (node.right) traverseTree(node.right);
      };
      traverseTree(root);
      return nodesList;
   }

   postOrderSearch() {
      let nodesList = [];
      let root = this.root;

      const traverseTree = (node) => {
         if (node.left) traverseTree(node.left);
         if (node.right) traverseTree(node.right);
         nodesList.push(node.value);
      };
      traverseTree(root);
      return nodesList;
   }

   inOrderSearch() {
      let nodesList = [];
      let root = this.root;

      const traverseTree = (node) => {
         if (node.left) traverseTree(node.left);
         nodesList.push(node.value);
         if (node.right) traverseTree(node.right);
      };
      traverseTree(root);
      return nodesList;
   }
}

let tree = new BinaryTree();
tree.insert(5);
tree.insert(2);
tree.insert(6);
tree.insert(7);
tree.insert(66);
tree.insert(22);
tree.insert(36);
tree.insert(21);
tree.insert(12);
tree.insert(43);
console.log(tree);

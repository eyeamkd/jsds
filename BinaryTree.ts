class BinaryTreeNode {
  public left: BinaryTreeNode;
  public right: BinaryTreeNode;
  public data: any;
}

class BinaryTree {
  public root: BinaryTreeNode;

  private visit(node: BinaryTreeNode) { 
      //for now be
      console.log(node.data);
  }

  public inOrderTraversal(node: BinaryTreeNode) {
    while (node != null) {
      this.inOrderTraversal(node.left);
      this.visit(node);
      this.inOrderTraversal(node.right);
    }
  }

  public preOrderTraversal(node: BinaryTreeNode) {
    while (node != null) {
      this.inOrderTraversal(node.left);
      this.inOrderTraversal(node.right);
      this.visit(node);
    }
  }

  public postOrderTraversal(node: BinaryTreeNode) {
    while (node != null) {
      this.visit(node);
      this.inOrderTraversal(node.left);
      this.inOrderTraversal(node.right);
    }
  }
} 

export default {BinaryTree,BinaryTreeNode}
 
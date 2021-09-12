class TreeNode{
    public data:any;
    public children:Array<TreeNode>;
}

class Tree{
    public root:TreeNode; 

    constructor(){ 
        this.root = null;
    }     
}
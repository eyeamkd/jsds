class Stack {
    private linkedList: LinkedList<any>;
  
    constructor(value: any) {
      this.linkedList = new LinkedList<typeof value>(value);
    }
  
    public push(node: any) { 
        this.linkedList.append(node);
    }
    public pop(): any{
        return this.linkedList.pop();
    }
    public isEmpty(): Boolean {
      return this.linkedList.Head!=null?  false: true;
    }
    public peek(): LinkNode<any> {
      return this.linkedList.latest.value;
    }
  }
  
  class LinkNode<T> {
    public value: T;
    public next: LinkNode<T>;
    public prev: LinkNode<T>; 
  
    constructor(value:T,prev:any){
        this.value = value;
        this.prev =prev;
    }
  }
  
  class LinkedList<T> {
    public Head: LinkNode<T>;
    public latest: LinkNode<T>;
  
    public append(element: T) {
      const linkNode = new LinkNode<T>(element,this.latest);
      linkNode.value = element;
      linkNode.next = null;
      linkNode.prev = this.latest;
      this.latest = linkNode;
    }
  
    public constructor(value: any) { 
      let head = new LinkNode(value,null); 
      this.Head = head; 
      this.latest = head;
    }
  
    public pop() {
      if (this.Head != null) {
        let nodeToPop = null;
        nodeToPop = this.latest;
        this.latest = this.latest.prev;
        return nodeToPop;
      }
    }
  } 
  
  export default Stack;
  
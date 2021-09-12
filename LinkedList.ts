class LinkNode<T> {
    public value: T;
    public next: LinkNode<T>;
    public prev: LinkNode<T>; 
  
    constructor(value:T,prev:any){
        this.value = value;
        this.prev =prev;
        this.next = null;
    }
  }
  
  class LinkedList<T> {
    public Head: LinkNode<T> = null;
    public latest: LinkNode<T> = null;
  
    public append(element: T) {
      const linkNode = new LinkNode<T>(element,this.latest);
      linkNode.value = element;
      linkNode.next = null;
      linkNode.prev = this.latest; 
      this.latest.next = linkNode;
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
        return nodeToPop.value;
      }
    }
  } 

  export  {LinkedList,LinkNode};
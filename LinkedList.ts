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
    public Head: LinkNode<T>;
    public latest: LinkNode<T>;
  
    public append(element: T) {
      const linkNode = new LinkNode<T>(element,this.latest); 
      if(this.Head.next==null){
          this.Head.next = linkNode; 
          this.latest = linkNode;
      }
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
        return nodeToPop;
      }
    }

    public remove(){
        if(this.Head!=null){
            let head = this.Head.value;
            this.Head = this.Head.next;
            return head;
        }
    }
  } 

export {LinkNode,LinkedList}
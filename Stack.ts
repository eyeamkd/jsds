import {LinkedList,LinkNode} from './LinkedList';

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
  
 
  
  export default Stack;
  
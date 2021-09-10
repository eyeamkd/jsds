import {LinkedList,LinkNode} from './LinkedList';

class Stack {
    private linkedList: LinkedList<any>; 
    private minValue:number = Number.MAX_VALUE;
  
    constructor(value: any) {
      this.linkedList = new LinkedList<typeof value>(value); 
      this.checkMin(value);
    }
  
    public push(node: number) {  
        this.checkMin(node);
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
    public min():any{
        return this.minValue;
    } 

    private checkMin(node:number){ 
        if(node<this.minValue)
            this.minValue = node;
    }
  }
  
 
  
  export default Stack;
  
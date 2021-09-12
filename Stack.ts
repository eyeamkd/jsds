import {LinkedList,LinkNode} from './LinkedList';

class Stack {
  private linkedList: LinkedList<any>;
  private listSize:number=0;

  public push(node: any) {  
      if(this.linkedList == undefined){ 
        this.linkedList = new LinkedList<typeof node>(node); 
      } 
      else{ 
        this.linkedList.append(node); 
      }
 
      this.listSize+=1;
  }
  public pop(): any{ 
    this.listSize-=1;
      return this.linkedList.pop(); 
  }
  public isEmpty(): Boolean {
    return this.linkedList.Head!=null?  false: true;
  }
  public peek(): LinkNode<any> {
    return this.linkedList.latest.value;
  } 
  public size(){
    return this.listSize;
  }
}

 

export default Stack;

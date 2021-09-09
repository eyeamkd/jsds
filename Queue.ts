import {LinkedList, LinkNode} from './LinkedList';

class Queue{ 

    private linkedList;
    constructor(firstElement:any){ 
        this.linkedList = new LinkedList<typeof firstElement>(firstElement); 
    } 

    public insert(element:any){ 
        this.linkedList.append(element);
    }

    public peek(){ 
        return this.linkedList.Head.value;
    }

    public remove(){  
        let head = this.linkedList.Head.value;
        console.log("The head is", this.linkedList.Head);
        this.linkedList.Head.value = this.linkedList.Head.next.value;
        this.linkedList.Head.next = this.linkedList.Head.next.next;
        return head;
    }

    public isEmpty(){
        return this.linkedList.Head?true:false;
    }

}

export default Queue;
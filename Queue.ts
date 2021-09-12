import {LinkedList, LinkNode} from './LinkedList';

class Queue{ 

    private linkedList;   
    private queueSize;

    constructor(){
        this.linkedList = null; 
        this.queueSize = 0;
    }

    public enqueue(element:any){  
        if(this.linkedList === null)
        this.linkedList = new LinkedList<typeof element>(element);  
        else
        this.linkedList.append(element); 

        this.queueSize +=1;
    }

    public peek(){ 
        return this.linkedList.Head.value;
    }

    public dequeue(){  
        let head = this.linkedList.Head.value;
        this.linkedList.Head.value = this.linkedList.Head.next.value;
        this.linkedList.Head.next = this.linkedList.Head.next.next; 
        this.queueSize -=1;
        console.log("Animal is ",head);
        return {head};
    }

    public isEmpty(){
        return this.linkedList.Head?true:false;
    } 

    public size(){
        return this.queueSize;
    }

}

export default Queue;
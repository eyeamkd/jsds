import Stack from './Stack'; 
import {LinkedList} from './LinkedList';

class StackOfStacks{

    private thresholdValue:number; 
    private stackOfStacks:LinkedList<Stack>;
    private stack : Stack;
    constructor(thresholdValue:number,firstElement:number){
        this.thresholdValue = thresholdValue;  
        this.stack = new Stack(firstElement); 
        this.stackOfStacks = new LinkedList<Stack>(this.stack);
        // this.stackOfStacks = new StackOfStacks(thresholdValue,firstElement);
    } 

    public changeThreshold(newValue:number){
        if(newValue>this.thresholdValue){
            this.thresholdValue = newValue;
        }
    } 

    private addStack(stack:Stack){
        this.stackOfStacks.append(stack);
    } 

    public pop(){
       return this.stack.pop()
    } 

    public push(element:number){
        if(this.stack.size() == this.thresholdValue || this.stack==null){
            this.stack = new Stack(element); 
            this.addStack(this.stack);
        }else 
        this.stack.push(element);
    }

}

export default StackOfStacks;
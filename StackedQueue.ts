import Stack from "./Stack";

class StackedQueue {
  private mainStack: Stack;
  private tempStack: Stack;

  constructor() {
    this.mainStack = new Stack();
    this.tempStack = new Stack();
  }

  public push(element: number) { 
    this.transfer(this.mainStack, this.tempStack);
    this.mainStack.push(element);
    this.transfer(this.tempStack, this.mainStack); 
  }

  public pop() {  
    return this.mainStack.pop();
  }

  private transfer(fromStack: Stack, toStack: Stack) {
    while (fromStack.size() > 0) {
      toStack.push(fromStack.pop());
    } 
    return;
  }
}

export default StackedQueue;

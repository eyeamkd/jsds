import StackOfStacks from '../StackOfStacks'; 

const stackOfStacks = new StackOfStacks(5,1);

for(let i=2;i<=10;i++){
    stackOfStacks.push(i); 
} 

console.log(stackOfStacks.pop());
import Queue from '../Queue';  

type Animal={
    type:'Cat'|'Dog',
    breed:String,
    age:Number,
}

class AnimalShelter{
     private catQueue:Queue;
     private dogQueue:Queue;

     constructor(){ 
         this.catQueue = new Queue();
         this.dogQueue = new Queue(); 
     } 

     public enQueue(animal:Animal){
         if(animal.type=='Cat')
            this.catQueue.enqueue(animal);
        else if(animal.type==='Dog')
        this.dogQueue.enqueue(animal);
     } 
     public deQueue(){
            if(this.catQueue.size()>=this.dogQueue.size()){
                return this.catQueue.dequeue();
            }else
            return this.dogQueue.dequeue();
     }
} 

export default AnimalShelter;
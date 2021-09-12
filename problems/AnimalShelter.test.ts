import AnimalShelter from './AnimalShelter'; 

const animalShelter = new AnimalShelter();

animalShelter.enQueue({type:'Dog',breed:'Saint Bernard',age:16});
animalShelter.enQueue({type:'Cat',breed:'Persian',age:6});
animalShelter.enQueue({type:'Dog',breed:'Great Dane',age:24});  
animalShelter.enQueue({type:'Cat',breed:'Persian',age:16}); 
animalShelter.enQueue({type:'Cat',breed:'Persian',age:61}); 
animalShelter.enQueue({type:'Cat',breed:'Persian',age:26});


// const animal = animalShelter.deQueue();

console.log(animalShelter.deQueue());

let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes", "Pineapple"];


let removedFruits = fruits.splice(2, 2);
console.log("After splice:", fruits);
console.log("Removed fruits:", removedFruits);


let newFruitsArray = fruits.slice(1, 4);
console.log("New sliced array:", newFruitsArray);

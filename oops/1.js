class Person {
    constructor(name, age) {
        this.name = name;  
        this.age = age;   
    }

    // Method
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}


const person2 = new Person("Alice", 30);

person2.greet(); 

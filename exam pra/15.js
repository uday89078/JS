// Create a student object
let student = {
    name: "Uday",
    age: 20,
    grade: "A",
    
    // Method to print a welcome message
    welcomeMessage: function() {
        console.log(`Welcome, ${this.name}! You are in grade ${this.grade}.`);
    }
};

// Call the method
student.welcomeMessage();

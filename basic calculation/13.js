let grade = 85; 
const studentName = "Alice"; 

console.log("Initial Grade:", grade);
console.log("Student Name:", studentName);


grade = 90; 
console.log("Updated Grade:", grade);


try {
    studentName = "Bob"; 
} catch (error) {
    console.log("Error:", error.message);
}


let students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 18 },
    { name: "Charlie", age: 19 },
    { name: "David", age: 18 }
];

let student = students.find(s => s.age === 18);

if (student) {
    console.log("First student found with age 18:");
    console.log("Name:", student.name);
    console.log("Age:", student.age);
} else {
    console.log("No student found with age 18.");
}

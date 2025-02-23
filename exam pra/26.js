let student = {
    name: "Alice",
    age: 21,
    grade: "A",
    subject: "Mathematics"
};

console.log("Student Details:");
for (let key in student) {
    console.log(key + ":", student[key]);
}

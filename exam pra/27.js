
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2022
};

console.log("Car Details:");
for (let key in car) {
    console.log(key + ":", car[key]);
}

let number = prompt("Enter a positive integer:");
number = parseInt(number);

let count = 0;

while (number > 0) {
  number = Math.floor(number / 10);  
  count++;
}

console.log(`The number of digits is: ${count}`);

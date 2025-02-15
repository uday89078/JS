let number = prompt("Enter a number to reverse:");
let reversed = 0;

number = parseInt(number);

while (number > 0) {
  let digit = number % 10;  
  reversed = reversed * 10 + digit; 
  number = Math.floor(number / 10);  
}

console.log(`Reversed number is: ${reversed}`);

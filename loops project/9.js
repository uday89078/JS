let number = prompt("Enter a number to check if it's prime:");
number = parseInt(number);

let isPrime = true;

if (number <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(`${number} is a Prime number.`);
} else {
  console.log(`${number} is not a Prime number.`);
}

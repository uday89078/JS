let n = prompt("Enter a number to find its factorial:");
n = parseInt(n);

let factorial = 1;

for (let i = 1; i <= n; i++) {
  factorial *= i;
}

console.log(`The factorial of ${n} is ${factorial}`);

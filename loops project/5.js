let n = prompt("Enter a number:");
n = parseInt(n);

for (let i = n; i <= n; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is an Even number.`);
  } else {
    console.log(`${i} is an Odd number.`);
  }
}

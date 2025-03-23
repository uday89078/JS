function sumOfDigits(num) {
    let sum = 0;
    
    while (num > 0) {
        sum += num % 10;  // Get the last digit and add it to sum
        num = Math.floor(num / 10);  // Remove the last digit
    }
    
    return sum;
}

// Test cases
console.log(sumOfDigits(123));   // Output: 6 (1+2+3)
console.log(sumOfDigits(4567));  // Output: 22 (4+5+6+7)
console.log(sumOfDigits(8901));  // Output: 18 (8+9+0+1)

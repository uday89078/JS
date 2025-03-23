function getStats(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let sum = arr.reduce((acc, num) => acc + num, 0);
    let avg = sum / arr.length;

    return { max, min, avg };
}

// Test cases
console.log(getStats([10, 20, 30, 40, 50]));  
// Output: { max: 50, min: 10, avg: 30 }

console.log(getStats([5, 8, 15, 22, 34]));  
// Output: { max: 34, min: 5, avg: 16.8 }

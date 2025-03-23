function isPalindrome(str) {
    let reversed = str.split("").reverse().join(""); 
    return str === reversed;
}

// Test cases
console.log(isPalindrome("madam")); 
console.log(isPalindrome("hello"));  
console.log(isPalindrome("racecar"));

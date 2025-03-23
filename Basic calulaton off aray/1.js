function reverseString(str) {
    return str.split("").reverse().join("");
}

let input = "JavaScript";
let reversed = reverseString(input);
console.log(reversed); 

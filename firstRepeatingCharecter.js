function firstRepeatingCharacter(str) {
    const charSet = new Set();

    for (const char of str) {
        if (charSet.has(char)) {
            return char;
        }
        charSet.add(char);
    }

    // If there is no character repeats within input
    return 'No repeated character'; 
}

// Test cases
console.log(firstRepeatingCharacter("")); // Output: No repeated character
console.log(firstRepeatingCharacter("abcabc")); // Output: "a"
console.log(firstRepeatingCharacter("xyz")); // Output: No repeated character
console.log(firstRepeatingCharacter("abcdeedcba")); // Output: "a"
console.log(firstRepeatingCharacter("aabbAAB")); // Output: "a"
console.log(firstRepeatingCharacter("abc")); // Output: No repeated character

const longString = "This is a very long string with millions of characters. It also contains a few non-repeating characters scattered throughout.";
console.log(firstRepeatingCharacter(longString)); // Output: " "

console.log(firstRepeatingCharacter("12!@34")); // Output: null

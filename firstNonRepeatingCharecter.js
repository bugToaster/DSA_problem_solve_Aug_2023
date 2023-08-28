function firstNonRepeatingCharacter(str) {
    const charFrequency = [];

    // check character frequencies
    for (const char of str) {
        charFrequency[char] = (charFrequency[char] || 0) + 1;
    }

    let index = 0;
    while (index < str.length) {
        const char = str[index];
        if (charFrequency[char] === 1) {
            return char;
        }
        index++;
    }

    return 'Could not find any non repeating character'; 
}

const inputString = "abacabad";
const result = firstNonRepeatingCharacter(inputString);

if (result) {
    console.log(`The first non-repeating character is: ${result}`);
} else {
    console.log("There are no non-repeating characters in the string.");
}

function areAnagrams(str1, str2) {

    // Return straight forward false when string null
    if (str1 === null || str2 === null) {
        return false;
    }

    // Normalize strings `using Unicode` normalization as well
    const cleanStr1 = str1.normalize("NFKD").replace(/[^\w]/g, '');
    const cleanStr2 = str2.normalize("NFKD").replace(/[^\w]/g, '');


    // Join sorted characters
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');


    return sortedStr1 === sortedStr2;
}

// Test cases
console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("hello", "world")); // Output: false
console.log(areAnagrams("aabbcc", "abcabc")); // Output: true
console.log(areAnagrams("cinema", "iceman")); // Output: true
console.log(areAnagrams("Jursdfsdfsd dsfsdfsdf", "icema sddsn")); // Output: false
console.log(areAnagrams("Hello", "hello")); // Output: false
console.log(areAnagrams("ehllo", "hello")); // Output: true
console.log(areAnagrams("cafè", "càfe")); // Output: true
console.log(areAnagrams(null, "càfe")); // Output: false

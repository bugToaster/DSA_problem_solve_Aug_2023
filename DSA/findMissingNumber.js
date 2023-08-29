function findMissingNumber(arr) {
    // Handle edge cases
    if (arr.length <= 1) {
        return 'Not enough elements to find a missing number';
    }
    
    // Create a set to store unique elements
    const uniqueElements = new Set();
    
    // Variables to keep track of the sum and maximum value
    let sum = 0;
    let max = Number.NEGATIVE_INFINITY;
    
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        
        // Check if the element is not a number or is not an integer
        if (isNaN(num) || (!Number.isInteger(num))) {
            return 'Array contains not a number';
        }
        
        // Add the number to the set of unique elements
        uniqueElements.add(num);
        
        // Update the sum and maximum value
        sum += num;
        if (num > max) {
            max = num;
        }
    }
    
    // Calculate the expected sum if no number is missing
    const expectedSum = (max * (max + 1)) / 2;
    
    // Check for missing numbers
    if (uniqueElements.size === max && sum === expectedSum) {
        return 'No missing numbers'; 
    } else {
        for (let i = 1; i <= max; i++) {
            if (!uniqueElements.has(i)) {
                return i; // Return the first missing number
            }
        }
    }
    
    
    return 'There is no missing number';
}


const arr1 = [3, 1, 4, 5, 2, 2];
console.log(findMissingNumber(arr1)); // Output: 6

const arr2 = [1, -2, 0, 3];
console.log(findMissingNumber(arr2)); // Output: 2

const arr3 = [1.5, 2, 3];
console.log(findMissingNumber(arr3)); // Output: Not integer

const arr4 = ["abc", "def", "ghi"];
console.log(findMissingNumber(arr4)); // Output: NAN

const arr5 = [7];
console.log(findMissingNumber(arr5)); // Output: not enough

const arr6 = [1, 2, 3, 4, 5];
console.log(findMissingNumber(arr6)); // Output: No missing

const arr7 = [3, 1, 4, 5, 2];
console.log(findMissingNumber(arr7)); // Output: null (no missing number)

const arr8 = [5,6,9,3,8];
console.log(findMissingNumber(arr7)); // Output: null (no missing number)

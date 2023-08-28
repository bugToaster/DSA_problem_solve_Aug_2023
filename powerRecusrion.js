function calculatePower(x, n) {
    if (n === 0) {
        return 1;
    } else if (n > 0 && Number.isInteger(n)) {
        return x * calculatePower(x, n - 1);
    } else if (n > 0 && !Number.isInteger(n)) {
        return 'Need to use Math.pow() function. result :' + Math.pow(x,n);
    } else {
        return 1 / calculatePower(x, -n);
    }
}




console.log(calculatePower(2, 3));  // Output: 8 (2^3)
console.log(calculatePower(5, 2));  // Output: 25 (5^2)
console.log(calculatePower(3, -2)); // Output: 0.1111111111111111 (3^-2)
console.log(calculatePower(4, -32)); // Output: 5.421010862427522e-20 (4^-32)
console.log(calculatePower(4, .21)); // Output: 1.337927554786112 (4^.21)

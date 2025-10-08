// task-2.js

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true; \
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

// Example usage
console.log(isPrime(7));  // Output: true
console.log(isPrime(10)); // Output: false

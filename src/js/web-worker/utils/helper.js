// Algorithm that checks if it's a prime number.
const isPrime = (n) => {
  if (n <= 3) return n > 1;
  else if (n % 2 === 0 || n % 3 === 0) return false;

  let i = 5;

  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
    i += 6;
  }

  return true;
};

// Return factorial of a number.
const factorial = (n) => {
  if (n === 0) return 1;
  else if (n === 1 || n === 2) return n;
  else return n * factorial(n - 1);
};
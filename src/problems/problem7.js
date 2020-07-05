export const problem7 = (arg = 10001) => {
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

  // Finds the Nth prime number.
  for (let i = 0, primeCounter = 1; primeCounter <= arg; i++) {
    if (isPrime(i)) {
      if (primeCounter === arg) return i;
      primeCounter++;
    }
  }
};

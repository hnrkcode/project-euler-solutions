export default {
  problem1(arg = 1000) {
    return [...Array(arg).keys()].reduce((accumulator, currentValue) => {
      if (currentValue % 3 === 0 || currentValue % 5 === 0)
        return accumulator + currentValue;
      return accumulator;
    });
  },
  problem2(max = 4000000) {
    const fib = (n) => {
      if (n === 0) return n;
      if (n === 1) return n;
      else return fib(n - 1) + fib(n - 2);
    };

    let result = 0;
    let n = 0;

    while (fib(n) < max) {
      if (fib(n) % 2 === 0) result += fib(n);
      n++;
    }

    return result;
  },
  problem3(arg = 600851475143) {
    const primeFactors = [];
    const multiply = (accumulator, currentValue) => accumulator * currentValue;

    for (let i = 2; ; i++) {
      if (arg % i === 0) primeFactors.push(i);
      // Breaks loop when all prime factors are found.
      if (primeFactors.reduce(multiply, 1) === arg) break;
    }

    // Return largest prime factor
    return Math.max(...primeFactors);
  },
  problem4() {
    let palindromes = [];

    // Find largest palindrome made from the product of two 3-digit numbers.
    for (let i = 999; i > 99; i--) {
      for (let j = 999; j > 99; j--) {
        const product = i * j;
        const reversedProduct = +product
          .toString()
          .split("")
          .reverse()
          .join("");

        // Found palindrome.
        if (product === reversedProduct) {
          palindromes.push(product);
        }
      }
    }

    // Return largest palindrome.
    return Math.max(...palindromes);
  },
  problem5(arg = 20) {
    let number = 1;
    let count = 0;

    while (count !== arg) {
      for (let i = 1; i <= arg; i++) {
        if (number % i === 0) count++;
      }

      if (count === arg) {
        return number;
      }

      number++;
      count = 0;
    }
  },
  problem6(arg = 100) {
    // The sum of the squares of the first N natural numbers.
    const value1 = [...Array(arg).keys()]
      .map((n) => Math.pow(n + 1, 2))
      .reduce((accumulator, currentValue) => accumulator + currentValue);

    // The square of the sum of the first N natural numbers.
    const value2 = Math.pow(
      [...Array(arg).keys()]
        .map((i) => i + 1)
        .reduce((accumulator, currentValue) => accumulator + currentValue),
      2
    );

    // Return the difference between the values.
    return value2 - value1;
  },
  problem7(arg = 10001) {
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
  },
};

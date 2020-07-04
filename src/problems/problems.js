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
};

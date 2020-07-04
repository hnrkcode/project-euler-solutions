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
};

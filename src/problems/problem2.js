export const problem2 = (max = 4000000) => {
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
};

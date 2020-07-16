// Returns the length of the number chain.
const collatz = (n) => {
  if (n === 1) return n;
  else if (n % 2 === 0) return 1 + collatz(n / 2);
  else return 1 + collatz(3 * n + 1);
};

const problem14 = (max = 1000000) => {
  const result = { number: 0, chain: 0 };

  for (let n = 1; n < max; n++) {
    const chain = collatz(n);
    if (chain > result.chain) {
      result.number = n;
      result.chain = chain;
    }
  }

  return result.number;
};

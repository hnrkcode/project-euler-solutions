const problem16 = (n = 2, e = 1000) => {
  let sum = 0n;
  let number = BigInt(Math.pow(n, e));

  while (number) {
    sum += number % 10n;
    number = number / 10n;
  }

  return sum;
};

export const problem6 = (arg = 100) => {
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
};

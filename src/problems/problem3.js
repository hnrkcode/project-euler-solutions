export const problem3 = (arg = 600851475143) => {
  const primeFactors = [];
  const multiply = (accumulator, currentValue) => accumulator * currentValue;

  for (let i = 2; ; i++) {
    if (arg % i === 0) primeFactors.push(i);
    // Breaks loop when all prime factors are found.
    if (primeFactors.reduce(multiply, 1) === arg) break;
  }

  // Return largest prime factor
  return Math.max(...primeFactors);
};

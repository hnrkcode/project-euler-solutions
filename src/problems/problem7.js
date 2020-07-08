import { isPrime } from "../utils/helper.js";

export const problem7 = (arg = 10001) => {
  // Finds the Nth prime number.
  for (let i = 0, primeCounter = 1; primeCounter <= arg; i++) {
    if (isPrime(i)) {
      if (primeCounter === arg) return i;
      primeCounter++;
    }
  }
};

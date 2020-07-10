importScripts("../web-worker/utils/helper.js");

const problem10 = (arg = 2000000) => {
  let sum = 0;

  for (let i = 2; i < arg; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }

  return sum;
};

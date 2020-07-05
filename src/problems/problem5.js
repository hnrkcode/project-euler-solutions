export const problem5 = (arg = 20) => {
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
};

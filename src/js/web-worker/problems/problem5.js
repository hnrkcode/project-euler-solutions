const problem5 = (arg = 20) => {
  let count = 0;

  for (let number = 1; ;number++) {
    for (let i = 1; i <= arg; i++) {
      if (number % i === 0) count++;
      else break;
    }

    if (count === arg) {
      return number;
    }

    count = 0;
  }
};

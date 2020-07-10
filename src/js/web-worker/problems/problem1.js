const problem1 = (arg = 1000) => {
  return [...Array(arg).keys()].reduce((accumulator, currentValue) => {
    if (currentValue % 3 === 0 || currentValue % 5 === 0)
      return accumulator + currentValue;
    return accumulator;
  });
};

const problem12 = (arg = 500) => {
  for (let n = 1; ; n++) {
    let factors = 0;

    // Formula for the triangle number.
    const triangleNumber = (n * (n + 1)) / 2;

    // Count how many factors triangular number has.
    for (let i = 1; i <= Math.floor(Math.sqrt(triangleNumber)); i++)
      if (triangleNumber % i === 0) factors += 2;

    // Found the first triangular number with certain amount of factors.
    if (factors > arg) return triangleNumber;
  }
};
